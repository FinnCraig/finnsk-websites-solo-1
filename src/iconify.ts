/**
 * Iconify collection index + search helpers for MCP / Design Agent.
 * Glyphs resolve on the client via @iconify/react (CDN) — Worker only indexes collections.
 */
import collectionsIndex from "./data/iconify-collections-index.json";

export type IconifyCollectionMeta = {
  prefix: string;
  name: string;
  total: number;
  category: string;
  author: string;
  license: string;
};

export type IconifyCollectionsIndex = {
  version: number;
  generatedAt: string;
  count: number;
  collections: IconifyCollectionMeta[];
};

export const ICONIFY_COLLECTIONS_INDEX = collectionsIndex as IconifyCollectionsIndex;

export function listIconCollections(opts?: {
  query?: string;
  limit?: number;
}): IconifyCollectionMeta[] {
  const q = (opts?.query || "").trim().toLowerCase();
  const limit = Math.min(200, Math.max(1, opts?.limit ?? 50));
  let rows = ICONIFY_COLLECTIONS_INDEX.collections;
  if (q) {
    rows = rows.filter(
      (c) =>
        c.prefix.includes(q) ||
        c.name.toLowerCase().includes(q) ||
        (c.category || "").toLowerCase().includes(q)
    );
  }
  return rows.slice(0, limit);
}

export type IconifySearchHit = {
  icon: string;
  prefix: string;
  name: string;
};

/** Search Iconify API (network). Falls back to empty on failure. */
export async function searchIcons(opts: {
  query: string;
  prefix?: string;
  limit?: number;
}): Promise<{ icons: IconifySearchHit[]; source: string }> {
  const query = String(opts.query || "").trim();
  const limit = Math.min(64, Math.max(1, opts.limit ?? 24));
  if (!query) return { icons: [], source: "empty-query" };

  const url = new URL("https://api.iconify.design/search");
  url.searchParams.set("query", query);
  url.searchParams.set("limit", String(limit));
  if (opts.prefix) url.searchParams.set("prefix", String(opts.prefix));

  try {
    const res = await fetch(url.toString(), {
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      return { icons: [], source: `iconify-http-${res.status}` };
    }
    const data = (await res.json()) as { icons?: string[] };
    const icons = (data.icons || []).map((id) => {
      const [prefix, ...rest] = id.split(":");
      return { icon: id, prefix: prefix || "", name: rest.join(":") || id };
    });
    return { icons, source: "iconify-api" };
  } catch (e) {
    return {
      icons: [],
      source: `error:${e instanceof Error ? e.message : String(e)}`,
    };
  }
}
