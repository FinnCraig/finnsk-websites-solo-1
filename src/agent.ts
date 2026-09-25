/**
 * In-admin Design Agent — Gemini function-calling loop.
 * Mutating tools never write; they return pendingPlan for client Approve → /api/ops/apply.
 * Optional onEvent enables NDJSON/SSE live updates.
 */
import { MOTION_COOKBOOK } from "./cookbook";
import { listIconCollections, searchIcons } from "./iconify";
import { runOps, summarizeDiff, normalizeOps } from "./ops";
import { BLOCK_CATALOG, SCENE3D_COOKBOOK } from "./scene3d-cookbook";
import { blankHomeDocumentJson } from "./seed-document";
import type { McpDocStore } from "./mcp";

export type AgentMessage = {
  role: "user" | "model" | "tool";
  text?: string;
  toolName?: string;
  toolArgs?: unknown;
  toolResult?: unknown;
};

export type AgentToolChip = {
  name: string;
  args?: unknown;
  resultSummary?: string;
};

export type AgentPendingPlan = {
  pageSlug: string;
  summary: string;
  ops: unknown[];
  preview: {
    ok: boolean;
    errors: string[];
    summaries: string[];
    diffSummary: string;
  };
  /** Dry-run document for live preview in admin. */
  previewDocument?: unknown;
};

export type AgentAssetRequest = {
  reason: string;
  accept?: string;
  purpose?: string;
};

export type AgentStreamEvent =
  | { type: "status"; message: string }
  | { type: "tool"; name: string; args?: unknown; resultSummary?: string; phase: "start" | "end" }
  | { type: "message"; role: "assistant" | "system"; text: string }
  | { type: "plan"; plan: AgentPendingPlan }
  | { type: "navigate"; pageSlug: string }
  | { type: "asset"; request: AgentAssetRequest }
  | {
      type: "done";
      reply: string;
      toolCalls: AgentToolChip[];
      pendingPlan: AgentPendingPlan | null;
      assetRequest: AgentAssetRequest | null;
      navigate: { pageSlug: string } | null;
      history: AgentMessage[];
    }
  | { type: "error"; message: string };

export type AgentTurnResult = {
  reply: string;
  toolCalls: AgentToolChip[];
  pendingPlan: AgentPendingPlan | null;
  assetRequest: AgentAssetRequest | null;
  navigate: { pageSlug: string } | null;
  history: AgentMessage[];
};

const AGENT_SYSTEM = `You are Finnsk Solo’s Design Agent for an AI-first website builder.
Schema JSON is truth; GSAP plays motion; Scene3D is declarative Three.js props.

FREE-TIER SPEED (critical):
- Minimize Gemini round-trips. Prefer 2–4 tool calls total, then propose_ops.
- Do NOT call both describe_* and get_block_catalog unless blocked — you already know Text/Image/Icon/Scene3D.
- Flow for a new page: create_page → get_page_document (once) → search_icons (one call) → propose_ops.
- ALWAYS end build requests with propose_ops. Never stop after only research tools.

Build rules:
- Use FULL section UUIDs from get_page_document.
- Icon: icon (prefix:name from search_icons), label, description, reveal="hover".
- Scene3D: room + primitives; motion on block shell via add_motion_link / timelines (opacity, scale, rotate, z).
- Mutating changes ONLY via propose_ops (human Approve).
- navigate_page after a successful propose_ops.
- request_asset only for real uploads (GLB/photo), never for Iconify.
- Never use apply_page_document unless the user explicitly asks to rebuild the whole page.`;

type GeminiPart =
  | { text: string }
  | { functionCall: { name: string; args?: Record<string, unknown> } }
  | { functionResponse: { name: string; response: Record<string, unknown> } };

type GeminiContent = { role: "user" | "model"; parts: GeminiPart[] };

const FUNCTION_DECLARATIONS = [
  {
    name: "list_pages",
    description: "List page slugs and titles.",
    parameters: { type: "OBJECT", properties: {} },
  },
  {
    name: "create_page",
    description:
      "Create a new blank page (slug + title). Call before proposing ops for a new page. Returns the slug.",
    parameters: {
      type: "OBJECT",
      properties: {
        slug: { type: "STRING" },
        title: { type: "STRING" },
      },
      required: ["slug"],
    },
  },
  {
    name: "get_page_document",
    description: "Read PageDocumentV3 for a slug (truncated overview + section/block ids).",
    parameters: {
      type: "OBJECT",
      properties: { pageSlug: { type: "STRING" } },
      required: ["pageSlug"],
    },
  },
  {
    name: "get_block_catalog",
    description: "List palette block types and key props.",
    parameters: { type: "OBJECT", properties: {} },
  },
  {
    name: "describe_motion_capabilities",
    description: "Motion channels and cookbook recipe names.",
    parameters: { type: "OBJECT", properties: {} },
  },
  {
    name: "describe_scene3d_capabilities",
    description: "Scene3D object/light types and recipes.",
    parameters: { type: "OBJECT", properties: {} },
  },
  {
    name: "list_media",
    description: "List uploaded R2 media assets.",
    parameters: { type: "OBJECT", properties: {} },
  },
  {
    name: "list_icon_collections",
    description: "List Iconify collections (all indexed prefixes).",
    parameters: {
      type: "OBJECT",
      properties: {
        query: { type: "STRING" },
        limit: { type: "NUMBER" },
      },
    },
  },
  {
    name: "search_icons",
    description: "Search Iconify icons by query; returns prefix:name ids.",
    parameters: {
      type: "OBJECT",
      properties: {
        query: { type: "STRING" },
        prefix: { type: "STRING" },
        limit: { type: "NUMBER" },
      },
      required: ["query"],
    },
  },
  {
    name: "preview_ops",
    description: "Dry-run ops without writing. Prefer propose_ops when ready.",
    parameters: {
      type: "OBJECT",
      properties: {
        pageSlug: { type: "STRING" },
        ops: { type: "ARRAY", items: { type: "OBJECT" } },
      },
      required: ["pageSlug", "ops"],
    },
  },
  {
    name: "propose_ops",
    description:
      "REQUIRED to finish a build. Validate ops and create a pending plan for human Approve. Does NOT write.",
    parameters: {
      type: "OBJECT",
      properties: {
        pageSlug: { type: "STRING" },
        summary: { type: "STRING" },
        ops: { type: "ARRAY", items: { type: "OBJECT" } },
      },
      required: ["pageSlug", "ops"],
    },
  },
  {
    name: "request_asset",
    description: "Pause for user upload (image/gltf). Not needed for Iconify icons.",
    parameters: {
      type: "OBJECT",
      properties: {
        reason: { type: "STRING" },
        accept: { type: "STRING" },
        purpose: { type: "STRING" },
      },
      required: ["reason"],
    },
  },
  {
    name: "navigate_page",
    description: "Ask the admin UI to focus a page slug (use after propose_ops).",
    parameters: {
      type: "OBJECT",
      properties: { pageSlug: { type: "STRING" } },
      required: ["pageSlug"],
    },
  },
] as const;

function summarizeToolResult(name: string, result: unknown): string {
  try {
    const s = JSON.stringify(result);
    return s.length > 220 ? `${s.slice(0, 220)}…` : s;
  } catch {
    return name;
  }
}

/** Compact page overview for the model (full UUIDs kept). */
function documentOverview(doc: unknown): unknown {
  if (!doc || typeof doc !== "object") return doc;
  const d = doc as {
    schemaVersion?: number;
    pages?: Array<{
      id: string;
      settings?: unknown;
      blocks?: Array<{ id: string; type: string; props?: Record<string, unknown>; placement?: unknown }>;
    }>;
    timelines?: unknown[];
  };
  return {
    schemaVersion: d.schemaVersion,
    sectionCount: d.pages?.length ?? 0,
    timelineCount: d.timelines?.length ?? 0,
    sections: (d.pages || []).map((s) => ({
      id: s.id,
      settings: s.settings,
      blocks: (s.blocks || []).map((b) => ({
        id: b.id,
        type: b.type,
        placement: b.placement,
        propsKeys: Object.keys(b.props || {}),
        propsPreview: truncateJson(b.props || {}, 400),
      })),
    })),
  };
}

function truncateJson(v: unknown, max: number): unknown {
  const s = JSON.stringify(v);
  if (s.length <= max) return v;
  return { truncated: true, preview: s.slice(0, max) };
}

async function executeAgentTool(
  store: McpDocStore,
  name: string,
  args: Record<string, unknown>,
  ctx: {
    pendingPlan: AgentPendingPlan | null;
    assetRequest: AgentAssetRequest | null;
    navigate: { pageSlug: string } | null;
  }
): Promise<unknown> {
  switch (name) {
    case "list_pages":
      return await store.listPages();
    case "create_page": {
      if (!store.createPage) return { error: "create_page not available" };
      const slug = String(args.slug || "")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9-]+/g, "-")
        .replace(/^-|-$/g, "");
      if (!slug) return { error: "slug required" };
      const title = String(args.title || slug).trim() || slug;
      const result = await store.createPage(slug, title, JSON.parse(blankHomeDocumentJson()));
      return result;
    }
    case "get_page_document": {
      const doc = await store.getDocument(String(args.pageSlug || ""));
      if (!doc) return { error: "not found" };
      return documentOverview(doc);
    }
    case "get_block_catalog":
      return { blocks: BLOCK_CATALOG };
    case "describe_motion_capabilities":
      return {
        channels: MOTION_COOKBOOK.channels,
        recipes: Object.keys(MOTION_COOKBOOK.recipes),
        instructions: MOTION_COOKBOOK.instructions,
      };
    case "describe_scene3d_capabilities":
      return SCENE3D_COOKBOOK;
    case "list_media":
      return await store.listMedia();
    case "list_icon_collections":
      return {
        collections: listIconCollections({
          query: args.query ? String(args.query) : undefined,
          limit: args.limit != null ? Number(args.limit) : 40,
        }),
      };
    case "search_icons":
      return await searchIcons({
        query: String(args.query || ""),
        prefix: args.prefix ? String(args.prefix) : undefined,
        limit: args.limit != null ? Number(args.limit) : 24,
      });
    case "preview_ops": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return { error: "not found" };
      const ops = normalizeOps(doc, (args.ops as unknown[]) || []);
      const result = runOps(doc, ops);
      return {
        ok: result.ok,
        errors: result.errors,
        summaries: result.summaries,
        diffSummary: summarizeDiff(doc, result.document),
      };
    }
    case "propose_ops": {
      const slug = String(args.pageSlug || "");
      const doc = await store.getDocument(slug);
      if (!doc) return { error: "not found — call create_page first" };
      const ops = normalizeOps(doc, (args.ops as unknown[]) || []);
      const result = runOps(doc, ops);
      ctx.pendingPlan = {
        pageSlug: slug,
        summary: String(args.summary || "Proposed changes"),
        ops,
        preview: {
          ok: result.ok,
          errors: result.errors,
          summaries: result.summaries,
          diffSummary: summarizeDiff(doc, result.document),
        },
        previewDocument: result.document,
      };
      return {
        pending: true,
        ok: result.ok,
        message: result.ok
          ? "Plan ready — wait for human Approve."
          : "Plan has validation errors — fix ops and propose again.",
        preview: ctx.pendingPlan.preview,
        opCount: ops.length,
      };
    }
    case "request_asset": {
      ctx.assetRequest = {
        reason: String(args.reason || "Need an asset"),
        accept: args.accept ? String(args.accept) : "image/*,.glb,.gltf,model/gltf-binary",
        purpose: args.purpose ? String(args.purpose) : undefined,
      };
      return {
        paused: true,
        message: "Waiting for user upload. Do not invent mediaId.",
        request: ctx.assetRequest,
      };
    }
    case "navigate_page": {
      ctx.navigate = { pageSlug: String(args.pageSlug || "home") };
      return { navigate: ctx.navigate };
    }
    default:
      return { error: `Unknown tool: ${name}` };
  }
}

function historyToGemini(history: AgentMessage[]): GeminiContent[] {
  const out: GeminiContent[] = [];
  for (const m of history) {
    if (m.role === "user" && m.text) {
      out.push({ role: "user", parts: [{ text: m.text }] });
    } else if (m.role === "model" && m.text) {
      out.push({ role: "model", parts: [{ text: m.text }] });
    } else if (m.role === "tool" && m.toolName) {
      out.push({
        role: "user",
        parts: [
          {
            functionResponse: {
              name: m.toolName,
              response: { result: m.toolResult ?? null },
            },
          },
        ],
      });
    }
  }
  return out;
}

const MODEL_FALLBACKS = [
  "gemini-2.5-flash",
  "gemini-2.0-flash",
  "gemini-flash-latest",
  "gemini-2.5-flash-lite",
];

function isRetryableGeminiStatus(status: number): boolean {
  return status === 429 || status === 503 || status === 500;
}

function sleep(ms: number): Promise<void> {
  return new Promise((r) => setTimeout(r, ms));
}

async function geminiGenerate(opts: {
  apiKey: string;
  models: string[];
  body: Record<string, unknown>;
  onStatus?: (msg: string) => void | Promise<void>;
  maxAttempts?: number;
}): Promise<{ data: unknown; model: string }> {
  const maxAttempts = opts.maxAttempts ?? 4;
  let lastErr = "Gemini request failed";

  for (const model of opts.models) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(opts.apiKey)}`;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(opts.body),
      });
      if (res.ok) {
        return { data: await res.json(), model };
      }
      const errText = await res.text();
      lastErr = `Gemini error ${res.status} (${model}): ${errText.slice(0, 280)}`;
      if (!isRetryableGeminiStatus(res.status)) {
        throw new Error(lastErr);
      }
      const waitMs = Math.min(12000, 800 * 2 ** (attempt - 1) + Math.floor(Math.random() * 400));
      await opts.onStatus?.(
        `Gemini busy (${res.status}) — retry ${attempt}/${maxAttempts} on ${model} in ${Math.round(waitMs / 1000)}s…`
      );
      await sleep(waitMs);
    }
    await opts.onStatus?.(`Trying fallback model…`);
  }
  throw new Error(
    `${lastErr}\n\nFree Gemini is overloaded. Wait a minute and hit Retry — your tool history is kept, so it can continue with propose_ops.`
  );
}

export async function runDesignAgentTurn(opts: {
  apiKey: string;
  model?: string;
  store: McpDocStore;
  message: string;
  history?: AgentMessage[];
  pageSlug?: string;
  selection?: { sectionId?: string; blockId?: string | null };
  uploadedMedia?: { mediaId?: string; filename?: string } | null;
  maxSteps?: number;
  onEvent?: (ev: AgentStreamEvent) => void | Promise<void>;
}): Promise<AgentTurnResult> {
  const emit = async (ev: AgentStreamEvent) => {
    if (opts.onEvent) await opts.onEvent(ev);
  };

  const preferred = (opts.model || "gemini-2.5-flash").trim() || "gemini-2.5-flash";
  const models = [preferred, ...MODEL_FALLBACKS.filter((m) => m !== preferred)];
  const maxSteps = Math.min(8, Math.max(1, opts.maxSteps ?? 6));

  const history: AgentMessage[] = [...(opts.history || [])];
  let userText = opts.message.trim();
  if (opts.uploadedMedia?.mediaId) {
    userText += `\n\n[System] User uploaded asset mediaId=${opts.uploadedMedia.mediaId} filename=${opts.uploadedMedia.filename || ""}. Continue.`;
  }
  if (opts.pageSlug || opts.selection) {
    userText += `\n\n[Context] pageSlug=${opts.pageSlug || "home"} selection=${JSON.stringify(opts.selection || null)}`;
  }
  userText +=
    "\n\n[System] Build fast: create_page if needed, one get_page_document, then propose_ops. Skip extra describe_* calls.";
  history.push({ role: "user", text: userText });

  const contents = historyToGemini(history);
  const toolChips: AgentToolChip[] = [];
  const ctx = {
    pendingPlan: null as AgentPendingPlan | null,
    assetRequest: null as AgentAssetRequest | null,
    navigate: null as { pageSlug: string } | null,
  };

  let reply = "";
  let activeModel = preferred;
  await emit({ type: "status", message: `Thinking (${preferred})…` });

  for (let step = 0; step < maxSteps; step++) {
    await emit({
      type: "status",
      message: `Step ${step + 1}/${maxSteps} · ${activeModel}`,
    });

    let data: {
      candidates?: Array<{ content?: { role?: string; parts?: GeminiPart[] } }>;
    };
    try {
      const result = await geminiGenerate({
        apiKey: opts.apiKey,
        models,
        onStatus: async (msg) => emit({ type: "status", message: msg }),
        body: {
          systemInstruction: { parts: [{ text: AGENT_SYSTEM }] },
          contents,
          tools: [{ functionDeclarations: FUNCTION_DECLARATIONS }],
          toolConfig: { functionCallingConfig: { mode: "AUTO" } },
          generationConfig: { temperature: 0.25 },
        },
      });
      activeModel = result.model;
      data = result.data as typeof data;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Gemini failed";
      await emit({ type: "error", message: msg });
      // Keep history so the UI Retry can continue without redoing tools.
      const out: AgentTurnResult = {
        reply: msg,
        toolCalls: toolChips,
        pendingPlan: ctx.pendingPlan,
        assetRequest: ctx.assetRequest,
        navigate: ctx.navigate,
        history,
      };
      await emit({ type: "done", ...out });
      return out;
    }

    const parts = data.candidates?.[0]?.content?.parts || [];
    if (!parts.length) {
      reply = "No response from model — try again.";
      break;
    }

    const functionCalls = parts.filter(
      (p): p is { functionCall: { name: string; args?: Record<string, unknown> } } =>
        "functionCall" in p && Boolean(p.functionCall)
    );
    const textParts = parts.filter((p): p is { text: string } => "text" in p && Boolean(p.text));

    if (functionCalls.length === 0) {
      reply = textParts.map((p) => p.text).join("\n").trim() || "Done.";
      history.push({ role: "model", text: reply });
      contents.push({ role: "model", parts });
      await emit({ type: "message", role: "assistant", text: reply });
      break;
    }

    contents.push({ role: "model", parts });
    if (textParts.length) {
      const mid = textParts.map((p) => p.text).join("\n").trim();
      if (mid) {
        history.push({ role: "model", text: mid });
        await emit({ type: "message", role: "assistant", text: mid });
      }
    }

    const responseParts: GeminiPart[] = [];
    let stopAfterTools = false;

    for (const fc of functionCalls) {
      const name = fc.functionCall.name;
      const args = (fc.functionCall.args || {}) as Record<string, unknown>;
      await emit({ type: "tool", name, args, phase: "start" });
      const result = await executeAgentTool(opts.store, name, args, ctx);
      const resultSummary = summarizeToolResult(name, result);
      toolChips.push({ name, args, resultSummary });
      history.push({
        role: "tool",
        toolName: name,
        toolArgs: args,
        toolResult: result,
      });
      await emit({ type: "tool", name, args, resultSummary, phase: "end" });
      responseParts.push({
        functionResponse: {
          name,
          response: { result },
        },
      });

      if (name === "propose_ops" && ctx.pendingPlan) {
        await emit({ type: "plan", plan: ctx.pendingPlan });
        if (ctx.pendingPlan.preview.ok) stopAfterTools = true;
      }
      if (name === "navigate_page" && ctx.navigate) {
        await emit({ type: "navigate", pageSlug: ctx.navigate.pageSlug });
      }
      if (name === "request_asset") {
        await emit({ type: "asset", request: ctx.assetRequest! });
        reply =
          textParts.map((p) => p.text).join("\n").trim() ||
          `Need an asset: ${ctx.assetRequest?.reason || "upload required"}`;
        contents.push({ role: "user", parts: responseParts });
        const out: AgentTurnResult = {
          reply,
          toolCalls: toolChips,
          pendingPlan: ctx.pendingPlan,
          assetRequest: ctx.assetRequest,
          navigate: ctx.navigate,
          history,
        };
        await emit({ type: "done", ...out });
        return out;
      }
    }
    contents.push({ role: "user", parts: responseParts });

    if (stopAfterTools && ctx.pendingPlan?.preview.ok) {
      reply =
        textParts.map((p) => p.text).join("\n").trim() ||
        `Ready for approval: ${ctx.pendingPlan.summary} (${ctx.pendingPlan.ops.length} ops).`;
      history.push({ role: "model", text: reply });
      await emit({ type: "message", role: "assistant", text: reply });
      break;
    }
  }

  if (!reply) {
    if (ctx.pendingPlan) {
      reply = ctx.pendingPlan.preview.ok
        ? `Ready for approval: ${ctx.pendingPlan.summary}`
        : `Plan has errors — fix and retry: ${ctx.pendingPlan.preview.errors.join("; ")}`;
    } else {
      reply =
        "I didn’t finish a propose_ops plan. Ask again (e.g. “create page animal-room with a 3D room and animal icons”) and I’ll propose ops to Approve.";
    }
    history.push({ role: "model", text: reply });
    await emit({ type: "message", role: "assistant", text: reply });
  }

  const out: AgentTurnResult = {
    reply,
    toolCalls: toolChips,
    pendingPlan: ctx.pendingPlan,
    assetRequest: ctx.assetRequest,
    navigate: ctx.navigate,
    history,
  };
  await emit({ type: "done", ...out });
  return out;
}
