/**
 * Embedded Gemini compose — emits atomic ops plans (not full page rewrites).
 */
import { MOTION_COOKBOOK } from "./cookbook";
import { runOps, summarizeDiff } from "./ops";

export type AiSettings = {
  provider?: string;
  apiKey?: string;
  model?: string;
};

const SYSTEM = `You are Finnsk Solo’s motion/page assistant.
Return ONLY valid JSON: {"summary":"...","ops":[...]}
Each op MUST include an "op" field with one of:
add_section, add_block, update_block_props, update_block_placement,
delete_block, delete_section, add_timeline, update_timeline, add_track, set_keyframe, adjust_timing,
add_motion_link, add_pin, remove_pin, set_surface_defaults, set_image_chrome.
Use FULL UUIDs from the document for sectionId/blockId (never invent ids or shorten them).
For set_keyframe always include timelineId, blockId, channel, t (0..1), value.
Prefer add_track before set_keyframe for a new channel.
For transparent PNG images use set_image_chrome chrome=cutout and set_surface_defaults preset=transparent.
Prefer 1–5 small ops. Do NOT use apply_page_document unless the user explicitly asks to rebuild the page.
Example set_keyframe: {"op":"set_keyframe","timelineId":"ribbon-flutter","blockId":"<uuid>","channel":"opacity","t":0.2,"value":1}
Example update_timeline: {"op":"update_timeline","timelineId":"ribbon-flutter","playback":"play-on-enter","scrollStart":"top 80%","duration":2}
Channels: ${MOTION_COOKBOOK.channels.join(", ")}.
Recipes: ${Object.keys(MOTION_COOKBOOK.recipes).join(", ")}.`;

export async function composeOpsWithGemini(opts: {
  apiKey: string;
  model?: string;
  prompt: string;
  document: unknown;
  selection?: { sectionId?: string; blockId?: string | null };
  mode?: string;
}): Promise<{ summary: string; ops: unknown[] }> {
  const model = opts.model || "gemini-3.6-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(opts.apiKey)}`;

  const userPayload = {
    mode: opts.mode || "motion",
    selection: opts.selection || null,
    prompt: opts.prompt,
    documentExcerpt: truncateJson(opts.document, 12000),
    cookbookHints: MOTION_COOKBOOK.instructions,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          role: "user",
          parts: [{ text: `${SYSTEM}\n\nINPUT:\n${JSON.stringify(userPayload)}` }],
        },
      ],
      generationConfig: {
        temperature: 0.2,
        responseMimeType: "application/json",
      },
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Gemini error ${res.status}: ${errText.slice(0, 400)}`);
  }

  const data = (await res.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>;
  };
  const text = data.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
  const parsed = extractJson(text) as { summary?: string; ops?: unknown[] };
  if (!parsed || !Array.isArray(parsed.ops)) {
    throw new Error("Gemini did not return { summary, ops }");
  }
  return {
    summary: parsed.summary || "Proposed changes",
    ops: parsed.ops,
  };
}

export function previewCompose(
  document: unknown,
  ops: unknown[]
): {
  diffSummary: string;
  validationErrors: string[];
  document: unknown;
  ok: boolean;
} {
  const result = runOps(document, ops);
  return {
    ok: result.ok,
    validationErrors: result.errors,
    diffSummary: `${result.summaries.join("; ") || "none"} (${summarizeDiff(document, result.document)})`,
    document: result.document,
  };
}

function truncateJson(v: unknown, max: number): unknown {
  const s = JSON.stringify(v);
  if (s.length <= max) return v;
  return { truncated: true, preview: s.slice(0, max) };
}

function extractJson(text: string): unknown {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");
    if (start >= 0 && end > start) {
      return JSON.parse(trimmed.slice(start, end + 1));
    }
    throw new Error("No JSON in model response");
  }
}
