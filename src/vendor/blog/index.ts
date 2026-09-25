/**
 * Finnsk Blog module — D1 posts + /api/modules/blog/*
 * Enable from Admin → Integrations (runs migrations, gates routes).
 */
import type { Context, Hono } from "hono";
import { getCookie } from "hono/cookie";

const SITE_ID = "site-default";
const SESSION_COOKIE = "finnsk_solo_session";

export type BlogModuleEnv = {
  SITE_DB: D1Database;
  SESSION_SECRET: string;
};

const te = new TextEncoder();

function b64urlToBytes(s: string): Uint8Array {
  const pad = "=".repeat((4 - (s.length % 4)) % 4);
  const b64 = (s + pad).replace(/-/g, "+").replace(/_/g, "/");
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

/** Matches worker-solo HMAC JWT (header.payload.sig). */
async function verifySession(
  secret: string,
  token: string
): Promise<{ sub: string } | null> {
  try {
    const [header, payload, sig] = token.split(".");
    if (!header || !payload || !sig) return null;
    const data = `${header}.${payload}`;
    const key = await crypto.subtle.importKey(
      "raw",
      te.encode(secret),
      { name: "HMAC", hash: "SHA-256" },
      false,
      ["verify"]
    );
    const ok = await crypto.subtle.verify("HMAC", key, b64urlToBytes(sig), te.encode(data));
    if (!ok) return null;
    const body = JSON.parse(new TextDecoder().decode(b64urlToBytes(payload))) as {
      sub?: string;
      exp?: number;
    };
    if (!body.sub) return null;
    if (body.exp && body.exp < Math.floor(Date.now() / 1000)) return null;
    return { sub: body.sub };
  } catch {
    return null;
  }
}

async function requireAuth(c: Context<{ Bindings: BlogModuleEnv }>): Promise<true | Response> {
  const token = getCookie(c, SESSION_COOKIE);
  if (!token || !c.env.SESSION_SECRET) {
    return c.json({ error: "Unauthorized" }, 401);
  }
  const session = await verifySession(c.env.SESSION_SECRET, token);
  if (!session) return c.json({ error: "Unauthorized" }, 401);
  return true;
}

function slugify(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);
}

export const blogModule = {
  id: "blog",
  name: "Blog",
  description: "Posts stored in D1. Public list/get when enabled; manage from Integrations.",
  migrations: [
    `CREATE TABLE IF NOT EXISTS blog_posts (
      id TEXT PRIMARY KEY,
      site_id TEXT NOT NULL,
      slug TEXT NOT NULL,
      title TEXT NOT NULL,
      body_html TEXT NOT NULL DEFAULT '',
      published INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now')),
      updated_at TEXT NOT NULL DEFAULT (datetime('now')),
      UNIQUE(site_id, slug)
    )`,
    `CREATE INDEX IF NOT EXISTS idx_blog_posts_site ON blog_posts(site_id, published, created_at)`,
  ],
  mountRoutes(app: Hono<{ Bindings: BlogModuleEnv }>) {
    app.get("/posts", async (c) => {
      const wantAll = c.req.query("all") === "1";
      let includeDrafts = false;
      if (wantAll) {
        const token = getCookie(c, SESSION_COOKIE);
        if (token && c.env.SESSION_SECRET) {
          includeDrafts = Boolean(await verifySession(c.env.SESSION_SECRET, token));
        }
      }

      const rows = includeDrafts
        ? await c.env.SITE_DB.prepare(
            `SELECT id, slug, title, body_html, published, created_at, updated_at
             FROM blog_posts WHERE site_id = ? ORDER BY created_at DESC`
          )
            .bind(SITE_ID)
            .all()
        : await c.env.SITE_DB.prepare(
            `SELECT id, slug, title, body_html, published, created_at, updated_at
             FROM blog_posts WHERE site_id = ? AND published = 1 ORDER BY created_at DESC`
          )
            .bind(SITE_ID)
            .all();

      return c.json({ posts: rows.results ?? [] });
    });

    app.get("/posts/:slug", async (c) => {
      const slug = c.req.param("slug");
      const row = await c.env.SITE_DB.prepare(
        `SELECT id, slug, title, body_html, published, created_at, updated_at
         FROM blog_posts WHERE site_id = ? AND slug = ?`
      )
        .bind(SITE_ID, slug)
        .first<{ published: number }>();
      if (!row) return c.json({ error: "Not found" }, 404);
      if (!row.published) {
        const token = getCookie(c, SESSION_COOKIE);
        const session =
          token && c.env.SESSION_SECRET
            ? await verifySession(c.env.SESSION_SECRET, token)
            : null;
        if (!session) return c.json({ error: "Not found" }, 404);
      }
      return c.json({ post: row });
    });

    app.post("/posts", async (c) => {
      const auth = await requireAuth(c);
      if (auth !== true) return auth;
      const body = (await c.req.json().catch(() => ({}))) as {
        title?: string;
        slug?: string;
        body_html?: string;
        published?: boolean;
      };
      const title = String(body.title ?? "").trim();
      if (!title) return c.json({ error: "title required" }, 400);
      const slug =
        (body.slug ? slugify(body.slug) : slugify(title)) || crypto.randomUUID().slice(0, 8);
      const id = crypto.randomUUID();
      const published = body.published ? 1 : 0;
      const bodyHtml = String(body.body_html ?? "");

      try {
        await c.env.SITE_DB.prepare(
          `INSERT INTO blog_posts (id, site_id, slug, title, body_html, published)
           VALUES (?, ?, ?, ?, ?, ?)`
        )
          .bind(id, SITE_ID, slug, title, bodyHtml, published)
          .run();
      } catch {
        return c.json({ error: "Slug already exists" }, 409);
      }

      return c.json({ ok: true, post: { id, slug, title, body_html: bodyHtml, published } });
    });

    app.patch("/posts/:id", async (c) => {
      const auth = await requireAuth(c);
      if (auth !== true) return auth;
      const id = c.req.param("id");
      const body = (await c.req.json().catch(() => ({}))) as {
        title?: string;
        slug?: string;
        body_html?: string;
        published?: boolean;
      };
      const existing = await c.env.SITE_DB.prepare(
        `SELECT id, slug, title, body_html, published FROM blog_posts WHERE site_id = ? AND id = ?`
      )
        .bind(SITE_ID, id)
        .first<{
          id: string;
          slug: string;
          title: string;
          body_html: string;
          published: number;
        }>();
      if (!existing) return c.json({ error: "Not found" }, 404);

      const title =
        body.title !== undefined ? String(body.title).trim() || existing.title : existing.title;
      const slug =
        body.slug !== undefined ? slugify(String(body.slug)) || existing.slug : existing.slug;
      const bodyHtml =
        body.body_html !== undefined ? String(body.body_html) : existing.body_html;
      const published =
        body.published !== undefined ? (body.published ? 1 : 0) : existing.published;

      try {
        await c.env.SITE_DB.prepare(
          `UPDATE blog_posts SET title = ?, slug = ?, body_html = ?, published = ?, updated_at = datetime('now')
           WHERE site_id = ? AND id = ?`
        )
          .bind(title, slug, bodyHtml, published, SITE_ID, id)
          .run();
      } catch {
        return c.json({ error: "Slug conflict" }, 409);
      }

      return c.json({
        ok: true,
        post: { id, slug, title, body_html: bodyHtml, published },
      });
    });

    app.delete("/posts/:id", async (c) => {
      const auth = await requireAuth(c);
      if (auth !== true) return auth;
      const id = c.req.param("id");
      await c.env.SITE_DB.prepare(`DELETE FROM blog_posts WHERE site_id = ? AND id = ?`)
        .bind(SITE_ID, id)
        .run();
      return c.json({ ok: true });
    });
  },
};
