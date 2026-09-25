/**
 * Lightweight MCP JSON-RPC over HTTP (tools + resources).
 * Stateless — any MCP client can connect with Bearer token.
 */
import { MOTION_COOKBOOK, MOTION_SCHEMA_DIGEST } from "./cookbook";
import { listIconCollections, searchIcons } from "./iconify";
import { runOps, summarizeDiff, type DocOp } from "./ops";
import { BLOCK_CATALOG, SCENE3D_COOKBOOK } from "./scene3d-cookbook";

export type McpDocStore = {
  listPages: () => Promise<Array<{ slug: string; title: string }>>;
  getDocument: (slug: string) => Promise<unknown | null>;
  saveDocument: (slug: string, document: unknown) => Promise<void>;
  listMedia: () => Promise<unknown[]>;
  /** Create a blank (or seeded) page. Idempotent if slug exists. */
  createPage?: (
    slug: string,
    title: string,
    document?: unknown
  ) => Promise<{ ok: boolean; slug: string; created: boolean; error?: string }>;
};

const SERVER_INSTRUCTIONS = `Finnsk Solo site engine MCP.
Prefer atomic tools (add_block, set_keyframe, adjust_timing, add_pin, add_motion_link).
Read cookbooks at finnsk://cookbook/motion and finnsk://cookbook/scene3d before composing.
Use search_icons before Icon blocks — never invent Iconify ids.
Use preview_ops before apply_ops for multi-op or destructive changes.
Never invent motion channel names. apply_page_document is an escape hatch only.`;

const TOOLS = [
  {
    name: "list_pages",
    description: "List page slugs and titles for this Solo site.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "get_page_document",
    description: "Read the full PageDocumentV3 JSON for a page slug.",
    inputSchema: {
      type: "object",
      properties: { pageSlug: { type: "string" } },
      required: ["pageSlug"],
    },
  },
  {
    name: "describe_motion_capabilities",
    description: "Return motion channels, pins, and cookbook recipe names.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "describe_scene3d_capabilities",
    description: "Return Scene3D object/light types and recipes.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "preview_ops",
    description:
      "Dry-run atomic ops against a page. Returns diff summary and validation errors. Does NOT write.",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        ops: { type: "array", items: { type: "object" } },
      },
      required: ["pageSlug", "ops"],
    },
  },
  {
    name: "apply_ops",
    description:
      "Apply an approved list of atomic ops (add_block, set_keyframe, adjust_timing, …).",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        ops: { type: "array", items: { type: "object" } },
      },
      required: ["pageSlug", "ops"],
    },
  },
  {
    name: "add_block",
    description: "Add one block to a section (Text, Image, Icon, Scene3D, …).",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        sectionId: { type: "string" },
        type: { type: "string" },
        props: { type: "object" },
      },
      required: ["pageSlug", "sectionId", "type"],
    },
  },
  {
    name: "set_keyframe",
    description: "Upsert a keyframe on a timeline track at time t (0..1).",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        timelineId: { type: "string" },
        blockId: { type: "string" },
        channel: { type: "string" },
        t: { type: "number" },
        value: {},
      },
      required: ["pageSlug", "timelineId", "t", "value"],
    },
  },
  {
    name: "adjust_timing",
    description: "Scale/shift keyframe times or set timeline duration.",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        timelineId: { type: "string" },
        scale: { type: "number" },
        shift: { type: "number" },
        duration: { type: "number" },
      },
      required: ["pageSlug", "timelineId"],
    },
  },
  {
    name: "list_media",
    description: "List uploaded media assets.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "list_icon_collections",
    description: "List indexed Iconify collections (all library prefixes).",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        limit: { type: "number" },
      },
    },
  },
  {
    name: "search_icons",
    description: "Search Iconify icons; returns prefix:name ids for Icon blocks.",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string" },
        prefix: { type: "string" },
        limit: { type: "number" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_block_catalog",
    description: "List core block types available in the palette.",
    inputSchema: { type: "object", properties: {}, additionalProperties: false },
  },
  {
    name: "set_surface_defaults",
    description:
      "Set page templateSurfaceDefaults preset (transparent | transparent_shadow | glass | solid).",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        preset: {
          type: "string",
          enum: ["glass", "solid", "transparent", "transparent_shadow"],
        },
        borderMode: { type: "string", enum: ["none", "rounded", "square"] },
      },
      required: ["pageSlug", "preset"],
    },
  },
  {
    name: "set_image_chrome",
    description:
      "Image chrome: cutout (no frame/shadow — transparent PNG) or framed (card).",
    inputSchema: {
      type: "object",
      properties: {
        pageSlug: { type: "string" },
        sectionId: { type: "string" },
        blockId: { type: "string" },
        chrome: { type: "string", enum: ["cutout", "framed"] },
      },
      required: ["pageSlug", "sectionId", "blockId", "chrome"],
    },
  },
] as const;

const RESOURCES = [
  {
    uri: "finnsk://schema/motion",
    name: "Motion schema digest",
    mimeType: "application/json",
  },
  {
    uri: "finnsk://cookbook/motion",
    name: "Motion cookbook recipes",
    mimeType: "application/json",
  },
  {
    uri: "finnsk://cookbook/scene3d",
    name: "Scene3D cookbook recipes",
    mimeType: "application/json",
  },
  {
    uri: "finnsk://schema/page-v3",
    name: "PageDocumentV3 overview",
    mimeType: "application/json",
  },
  {
    uri: "finnsk://site/pages",
    name: "Site pages list",
    mimeType: "application/json",
  },
  {
    uri: "finnsk://icons/collections",
    name: "Iconify collections index",
    mimeType: "application/json",
  },
] as const;

function textResult(obj: unknown) {
  return {
    content: [{ type: "text", text: JSON.stringify(obj, null, 2) }],
  };
}

async function callTool(
  store: McpDocStore,
  name: string,
  args: Record<string, unknown>
): Promise<unknown> {
  switch (name) {
    case "list_pages":
      return textResult(await store.listPages());
    case "get_page_document": {
      const doc = await store.getDocument(String(args.pageSlug || ""));
      if (!doc) return textResult({ error: "not found" });
      return textResult(doc);
    }
    case "describe_motion_capabilities":
      return textResult({
        channels: MOTION_COOKBOOK.channels,
        recipes: Object.keys(MOTION_COOKBOOK.recipes),
        instructions: MOTION_COOKBOOK.instructions,
        schema: MOTION_SCHEMA_DIGEST,
      });
    case "describe_scene3d_capabilities":
      return textResult(SCENE3D_COOKBOOK);
    case "preview_ops": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const result = runOps(doc, (args.ops as unknown[]) || []);
      return textResult({
        ok: result.ok,
        errors: result.errors,
        summaries: result.summaries,
        diffSummary: summarizeDiff(doc, result.document),
      });
    }
    case "apply_ops": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const result = runOps(doc, (args.ops as unknown[]) || []);
      if (!result.ok) {
        return textResult({ ok: false, errors: result.errors, summaries: result.summaries });
      }
      await store.saveDocument(slug, result.document);
      return textResult({
        ok: true,
        summaries: result.summaries,
        diffSummary: summarizeDiff(doc, result.document),
      });
    }
    case "add_block": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const op: DocOp = {
        op: "add_block",
        sectionId: String(args.sectionId),
        type: String(args.type),
        props: args.props as Record<string, unknown> | undefined,
      };
      const result = runOps(doc, [op]);
      if (!result.ok) return textResult({ ok: false, errors: result.errors });
      await store.saveDocument(slug, result.document);
      return textResult({ ok: true, summaries: result.summaries });
    }
    case "set_keyframe": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const op: DocOp = {
        op: "set_keyframe",
        timelineId: String(args.timelineId),
        blockId: args.blockId ? String(args.blockId) : undefined,
        channel: args.channel ? String(args.channel) : undefined,
        t: Number(args.t),
        value: args.value as number | string,
      };
      const result = runOps(doc, [op]);
      if (!result.ok) return textResult({ ok: false, errors: result.errors });
      await store.saveDocument(slug, result.document);
      return textResult({ ok: true, summaries: result.summaries });
    }
    case "adjust_timing": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const op: DocOp = {
        op: "adjust_timing",
        timelineId: String(args.timelineId),
        scale: args.scale != null ? Number(args.scale) : undefined,
        shift: args.shift != null ? Number(args.shift) : undefined,
        duration: args.duration != null ? Number(args.duration) : undefined,
      };
      const result = runOps(doc, [op]);
      if (!result.ok) return textResult({ ok: false, errors: result.errors });
      await store.saveDocument(slug, result.document);
      return textResult({ ok: true, summaries: result.summaries });
    }
    case "list_media":
      return textResult(await store.listMedia());
    case "list_icon_collections":
      return textResult({
        collections: listIconCollections({
          query: args.query ? String(args.query) : undefined,
          limit: args.limit != null ? Number(args.limit) : 50,
        }),
      });
    case "search_icons":
      return textResult(
        await searchIcons({
          query: String(args.query || ""),
          prefix: args.prefix ? String(args.prefix) : undefined,
          limit: args.limit != null ? Number(args.limit) : 24,
        })
      );
    case "get_block_catalog":
      return textResult({ blocks: BLOCK_CATALOG });
    case "set_surface_defaults": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const op: DocOp = {
        op: "set_surface_defaults",
        preset: args.preset as "glass" | "solid" | "transparent" | "transparent_shadow",
        borderMode: args.borderMode as "none" | "rounded" | "square" | undefined,
      };
      const result = runOps(doc, [op]);
      if (!result.ok) return textResult({ ok: false, errors: result.errors });
      await store.saveDocument(slug, result.document);
      return textResult({ ok: true, summaries: result.summaries });
    }
    case "set_image_chrome": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return textResult({ error: "not found" });
      const op: DocOp = {
        op: "set_image_chrome",
        sectionId: String(args.sectionId),
        blockId: String(args.blockId),
        chrome: args.chrome as "cutout" | "framed",
      };
      const result = runOps(doc, [op]);
      if (!result.ok) return textResult({ ok: false, errors: result.errors });
      await store.saveDocument(slug, result.document);
      return textResult({ ok: true, summaries: result.summaries });
    }
    default:
      return textResult({ error: `Unknown tool: ${name}` });
  }
}

async function readResource(store: McpDocStore, uri: string): Promise<unknown> {
  if (uri === "finnsk://schema/motion") return MOTION_SCHEMA_DIGEST;
  if (uri === "finnsk://cookbook/motion") return MOTION_COOKBOOK;
  if (uri === "finnsk://cookbook/scene3d") return SCENE3D_COOKBOOK;
  if (uri === "finnsk://icons/collections") {
    return {
      count: listIconCollections({ limit: 500 }).length,
      collections: listIconCollections({ limit: 500 }),
    };
  }
  if (uri === "finnsk://schema/page-v3") {
    return {
      schemaVersion: 3,
      pages: "ProposalPageV3[] (sections with blocks + placements)",
      timelines: "Timeline[]",
      pins: "PinSpec[]",
      templateSurfaceDefaults: "optional",
      templateAnimationDefaults: "optional",
      nestedBlocks: BLOCK_CATALOG.map((b) => b.type),
    };
  }
  if (uri === "finnsk://site/pages") return await store.listPages();
  if (uri.startsWith("finnsk://page/")) {
    const slug = uri.slice("finnsk://page/".length);
    return (await store.getDocument(slug)) ?? { error: "not found" };
  }
  return { error: `Unknown resource: ${uri}` };
}

export async function handleMcpJsonRpc(
  store: McpDocStore,
  body: unknown
): Promise<unknown> {
  const req = body as {
    jsonrpc?: string;
    id?: string | number | null;
    method?: string;
    params?: Record<string, unknown>;
  };
  const id = req.id ?? null;
  const method = req.method || "";

  const ok = (result: unknown) => ({ jsonrpc: "2.0", id, result });
  const err = (code: number, message: string) => ({
    jsonrpc: "2.0",
    id,
    error: { code, message },
  });

  try {
    switch (method) {
      case "initialize":
        return ok({
          protocolVersion: "2024-11-05",
          capabilities: {
            tools: {},
            resources: {},
          },
          serverInfo: { name: "finnsk-solo", version: "0.1.0" },
          instructions: SERVER_INSTRUCTIONS,
        });
      case "notifications/initialized":
        return ok({});
      case "tools/list":
        return ok({ tools: TOOLS });
      case "tools/call": {
        const name = String(req.params?.name || "");
        const args = (req.params?.arguments || {}) as Record<string, unknown>;
        const result = await callTool(store, name, args);
        return ok(result);
      }
      case "resources/list":
        return ok({ resources: RESOURCES });
      case "resources/read": {
        const uri = String(req.params?.uri || "");
        const data = await readResource(store, uri);
        return ok({
          contents: [
            {
              uri,
              mimeType: "application/json",
              text: JSON.stringify(data, null, 2),
            },
          ],
        });
      }
      case "ping":
        return ok({});
      default:
        return err(-32601, `Method not found: ${method}`);
    }
  } catch (e) {
    return err(-32000, e instanceof Error ? e.message : String(e));
  }
}
