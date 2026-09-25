/**
 * Atomic document ops — shared by MCP tools and /api/ai/compose.
 */
import { z } from "zod";

export const opSchema = z.discriminatedUnion("op", [
  z.object({
    op: z.literal("add_section"),
    index: z.number().int().min(0).optional(),
  }),
  z.object({
    op: z.literal("add_block"),
    sectionId: z.string().uuid(),
    type: z.string().min(1),
    props: z.record(z.unknown()).optional(),
    placement: z
      .object({
        colStart: z.number().int().min(1).max(24),
        colEnd: z.number().int().min(2).max(25),
        rowStart: z.number().int().min(1),
        rowEnd: z.number().int().min(2),
      })
      .optional(),
  }),
  z.object({
    op: z.literal("update_block_props"),
    sectionId: z.string().uuid(),
    blockId: z.string().uuid(),
    props: z.record(z.unknown()),
  }),
  z.object({
    op: z.literal("update_block_placement"),
    sectionId: z.string().uuid(),
    blockId: z.string().uuid(),
    colStart: z.number().int().min(1).max(24),
    colEnd: z.number().int().min(2).max(25),
    rowStart: z.number().int().min(1),
    rowEnd: z.number().int().min(2),
  }),
  z.object({
    op: z.literal("delete_block"),
    sectionId: z.string().uuid(),
    blockId: z.string().uuid(),
  }),
  z.object({
    op: z.literal("delete_section"),
    sectionId: z.string().uuid(),
  }),
  z.object({
    op: z.literal("add_timeline"),
    id: z.string().optional(),
    name: z.string().optional(),
    duration: z.number().positive().optional(),
    scrub: z.boolean().optional(),
    playback: z.enum(["scrub", "play-on-enter", "timed", "manual"]).optional(),
    scrollStart: z.string().optional(),
    scrollEnd: z.string().optional(),
    delayMs: z.number().min(0).max(120_000).optional(),
    repeat: z.number().int().min(-1).max(500).optional(),
  }),
  z.object({
    op: z.literal("update_timeline"),
    timelineId: z.string(),
    name: z.string().optional(),
    duration: z.number().positive().optional(),
    scrub: z.boolean().optional(),
    playback: z.enum(["scrub", "play-on-enter", "timed", "manual"]).optional(),
    scrollStart: z.string().optional(),
    scrollEnd: z.string().optional(),
    delayMs: z.number().min(0).max(120_000).optional(),
    repeat: z.number().int().min(-1).max(500).optional(),
  }),
  z.object({
    op: z.literal("add_track"),
    timelineId: z.string(),
    blockId: z.string().uuid(),
    channel: z.string().min(1),
    from: z.union([z.number(), z.string()]).optional(),
    to: z.union([z.number(), z.string()]).optional(),
  }),
  z.object({
    op: z.literal("set_keyframe"),
    timelineId: z.string(),
    trackIndex: z.number().int().min(0).optional(),
    blockId: z.string().uuid().optional(),
    channel: z.string().optional(),
    t: z.number().min(0).max(1),
    value: z.union([z.number(), z.string()]),
    easing: z.string().optional(),
  }),
  z.object({
    op: z.literal("adjust_timing"),
    timelineId: z.string(),
    trackIndex: z.number().int().min(0).optional(),
    scale: z.number().positive().optional(),
    shift: z.number().optional(),
    duration: z.number().positive().optional(),
  }),
  z.object({
    op: z.literal("add_motion_link"),
    sectionId: z.string().uuid(),
    blockId: z.string().uuid(),
    channel: z.string().min(1),
    input: z.record(z.unknown()),
    from: z.union([z.number(), z.string()]),
    to: z.union([z.number(), z.string()]),
    easing: z.string().optional(),
  }),
  z.object({
    op: z.literal("add_pin"),
    blockId: z.string().uuid().optional(),
    sectionId: z.string().uuid().optional(),
    start: z.string().optional(),
    end: z.string().optional(),
    pinSpacing: z.boolean().optional(),
  }),
  z.object({
    op: z.literal("remove_pin"),
    pinId: z.string().optional(),
    blockId: z.string().uuid().optional(),
  }),
  z.object({
    op: z.literal("set_surface_defaults"),
    /** glass | solid | transparent | transparent_shadow */
    preset: z.enum(["glass", "solid", "transparent", "transparent_shadow"]),
    borderMode: z.enum(["none", "rounded", "square"]).optional(),
    solidColor: z.string().optional(),
    glassBlurPx: z.number().min(0).max(64).optional(),
  }),
  z.object({
    op: z.literal("set_image_chrome"),
    sectionId: z.string().uuid(),
    blockId: z.string().uuid(),
    /** cutout = no frame/shadow/border (transparent PNG friendly). framed = card chrome. */
    chrome: z.enum(["cutout", "framed"]),
  }),
  z.object({
    op: z.literal("apply_page_document"),
    document: z.record(z.unknown()),
  }),
]);

export type DocOp = z.infer<typeof opSchema>;

type Block = {
  id: string;
  type: string;
  props?: Record<string, unknown>;
  placement?: Record<string, unknown>;
  links?: unknown[];
};

type Section = {
  id: string;
  settings?: Record<string, unknown>;
  blocks?: Block[];
};

type Doc = {
  schemaVersion: number;
  pages: Section[];
  timelines?: Array<{
    id: string;
    name: string;
    duration?: number;
    scrub?: boolean;
    playback?: string;
    scrollStart?: string;
    scrollEnd?: string;
    delayMs?: number;
    repeat?: number;
    tracks?: Array<{
      id?: string;
      blockId: string;
      channel: string;
      keyframes: Array<{ t: number; value: number | string; easing?: string }>;
    }>;
  }>;
  pins?: Array<{
    id?: string;
    blockId?: string;
    sectionId?: string;
    start?: string;
    end?: string;
    pinSpacing?: boolean;
  }>;
  [key: string]: unknown;
};

function uuid(): string {
  return crypto.randomUUID();
}

function deepClone<T>(v: T): T {
  return JSON.parse(JSON.stringify(v)) as T;
}

function findSection(doc: Doc, sectionId: string): Section | undefined {
  return doc.pages.find((p) => p.id === sectionId);
}

function findBlock(section: Section, blockId: string): Block | undefined {
  return section.blocks?.find((b) => b.id === blockId);
}

export type OpsResult = {
  ok: boolean;
  document: Doc;
  errors: string[];
  summaries: string[];
};

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function isUuid(s: string): boolean {
  return UUID_RE.test(s);
}

function resolveBlockId(doc: Doc, raw: string): string | null {
  if (isUuid(raw)) return raw;
  const needle = raw.toLowerCase();
  for (const page of doc.pages) {
    for (const b of page.blocks ?? []) {
      if (b.id === raw || b.id.toLowerCase().startsWith(needle) || b.id.toLowerCase().includes(needle)) {
        return b.id;
      }
    }
  }
  return null;
}

function resolveSectionId(doc: Doc, raw: string): string | null {
  if (isUuid(raw)) return raw;
  const needle = raw.toLowerCase();
  for (const page of doc.pages) {
    if (page.id === raw || page.id.toLowerCase().startsWith(needle)) return page.id;
  }
  // "section 2" / "S2" style
  const m = needle.match(/(?:section|s)\s*(\d+)/);
  if (m) {
    const idx = Number(m[1]) - 1;
    if (idx >= 0 && idx < doc.pages.length) return doc.pages[idx]!.id;
  }
  return null;
}

function coerceNumber(v: unknown): number | undefined {
  if (typeof v === "number" && Number.isFinite(v)) return v;
  if (typeof v === "string" && v.trim() !== "" && Number.isFinite(Number(v))) return Number(v);
  return undefined;
}

/**
 * Repair common Gemini/MCP mistakes before schema parse:
 * - `type` → `op`
 * - short block/section ids → full UUIDs
 * - string numbers → numbers
 * - set_keyframe without track → inject add_track first
 */
export function normalizeOps(inputDoc: unknown, ops: unknown[]): unknown[] {
  const doc = inputDoc as Doc;
  const out: unknown[] = [];
  const pendingTracks = new Set<string>();
  if (!Array.isArray(ops)) return out;

  for (const raw of ops) {
    if (!raw || typeof raw !== "object") continue;
    const o = { ...(raw as Record<string, unknown>) };

    if (typeof o.op !== "string" && typeof o.type === "string") {
      o.op = o.type;
      delete o.type;
    }
    if (typeof o.op === "string") o.op = o.op.trim();

    // Alias common invented names
    if (o.op === "create_timeline") o.op = "add_timeline";
    if (o.op === "create_track") o.op = "add_track";
    if (o.op === "update_keyframe" || o.op === "add_keyframe") o.op = "set_keyframe";

    if (typeof o.blockId === "string") {
      const resolved = resolveBlockId(doc, o.blockId);
      if (resolved) o.blockId = resolved;
    }
    if (typeof o.sectionId === "string") {
      const resolved = resolveSectionId(doc, o.sectionId);
      if (resolved) o.sectionId = resolved;
    }

    for (const key of ["t", "from", "to", "duration", "scale", "shift", "delayMs", "index", "trackIndex"] as const) {
      if (key in o) {
        const n = coerceNumber(o[key]);
        if (n != null) o[key] = n;
      }
    }
    if (typeof o.value === "string" && Number.isFinite(Number(o.value))) {
      o.value = Number(o.value);
    }

    // Placement nested under placement vs flat — leave as-is for add_block.

    if (o.op === "set_keyframe") {
      const timelineId = String(o.timelineId || "");
      const blockId = typeof o.blockId === "string" ? o.blockId : undefined;
      const channel = typeof o.channel === "string" ? o.channel : "opacity";
      const key = `${timelineId}|${blockId}|${channel}`;
      const tl = doc.timelines?.find((t) => t.id === timelineId);
      const hasTrack =
        o.trackIndex != null ||
        pendingTracks.has(key) ||
        (tl?.tracks ?? []).some(
          (t) =>
            (!blockId || t.blockId === blockId) &&
            (!o.channel || t.channel === channel)
        );
      if (!hasTrack && blockId && timelineId) {
        const from = channel === "opacity" ? 0 : 0;
        const to = typeof o.value === "number" ? o.value : channel === "opacity" ? 1 : 0;
        out.push({
          op: "add_track",
          timelineId,
          blockId,
          channel,
          from,
          to,
        });
        pendingTracks.add(key);
      }
    }

    out.push(o);
  }
  return out;
}

export function runOps(inputDoc: unknown, ops: unknown[]): OpsResult {
  const errors: string[] = [];
  const summaries: string[] = [];
  let doc = deepClone(inputDoc as Doc);
  if (!doc || typeof doc !== "object" || !Array.isArray(doc.pages)) {
    return { ok: false, document: doc as Doc, errors: ["Invalid document"], summaries: [] };
  }

  const normalized = normalizeOps(doc, ops);

  for (const raw of normalized) {
    const parsed = opSchema.safeParse(raw);
    if (!parsed.success) {
      const opName =
        raw && typeof raw === "object" && "op" in raw
          ? String((raw as { op: unknown }).op)
          : "?";
      errors.push(`${opName}: ${parsed.error.issues.map((i) => i.message).join("; ")}`);
      continue;
    }
    const op = parsed.data;
    try {
      switch (op.op) {
        case "add_section": {
          const section: Section = {
            id: uuid(),
            settings: {
              sectionType: "lava",
              minHeight: "480px",
              fullWidth: false,
              backgroundColor: "#ffffff",
            },
            blocks: [],
          };
          const idx =
            op.index != null
              ? Math.max(0, Math.min(doc.pages.length, op.index))
              : doc.pages.length;
          doc.pages.splice(idx, 0, section);
          summaries.push(`add_section @${idx}`);
          break;
        }
        case "add_block": {
          const section = findSection(doc, op.sectionId);
          if (!section) {
            errors.push(`section ${op.sectionId} not found`);
            break;
          }
          const placement = op.placement ?? {
            colStart: 2,
            colEnd: 14,
            rowStart: 2,
            rowEnd: 5,
          };
          const block: Block = {
            id: uuid(),
            type: op.type,
            props: (op.props as Record<string, unknown>) ?? defaultPropsForType(op.type),
            placement: {
              desktop: placement,
              gridColumn: `${placement.colStart} / ${placement.colEnd}`,
              gridRow: `${placement.rowStart} / ${placement.rowEnd}`,
              zIndex: 1,
            },
          };
          section.blocks = [...(section.blocks ?? []), block];
          summaries.push(`add_block ${op.type} → ${block.id.slice(0, 8)}`);
          break;
        }
        case "update_block_props": {
          const section = findSection(doc, op.sectionId);
          const block = section ? findBlock(section, op.blockId) : undefined;
          if (!block) {
            errors.push(`block ${op.blockId} not found`);
            break;
          }
          block.props = { ...(block.props ?? {}), ...op.props };
          summaries.push(`update_block_props ${op.blockId.slice(0, 8)}`);
          break;
        }
        case "update_block_placement": {
          const section = findSection(doc, op.sectionId);
          const block = section ? findBlock(section, op.blockId) : undefined;
          if (!block) {
            errors.push(`block ${op.blockId} not found`);
            break;
          }
          const desktop = {
            colStart: op.colStart,
            colEnd: op.colEnd,
            rowStart: op.rowStart,
            rowEnd: op.rowEnd,
          };
          block.placement = {
            ...(block.placement ?? {}),
            desktop,
            gridColumn: `${op.colStart} / ${op.colEnd}`,
            gridRow: `${op.rowStart} / ${op.rowEnd}`,
          };
          summaries.push(`update_block_placement ${op.blockId.slice(0, 8)}`);
          break;
        }
        case "delete_block": {
          const section = findSection(doc, op.sectionId);
          if (!section?.blocks) {
            errors.push(`section ${op.sectionId} not found`);
            break;
          }
          section.blocks = section.blocks.filter((b) => b.id !== op.blockId);
          summaries.push(`delete_block ${op.blockId.slice(0, 8)}`);
          break;
        }
        case "delete_section": {
          doc.pages = doc.pages.filter((p) => p.id !== op.sectionId);
          summaries.push(`delete_section ${op.sectionId.slice(0, 8)}`);
          break;
        }
        case "add_timeline": {
          const id = op.id || `tl-${uuid().slice(0, 8)}`;
          const playback =
            op.playback ?? (op.scrub === false ? "manual" : op.scrub ? "scrub" : "scrub");
          doc.timelines = [
            ...(doc.timelines ?? []),
            {
              id,
              name: op.name || "Timeline",
              duration: op.duration ?? 1,
              scrub: playback === "scrub",
              playback,
              ...(op.scrollStart ? { scrollStart: op.scrollStart } : {}),
              ...(op.scrollEnd ? { scrollEnd: op.scrollEnd } : {}),
              ...(op.delayMs != null ? { delayMs: op.delayMs } : {}),
              ...(op.repeat != null ? { repeat: op.repeat } : {}),
              tracks: [],
            },
          ];
          summaries.push(`add_timeline ${id}`);
          break;
        }
        case "update_timeline": {
          const tl = doc.timelines?.find((t) => t.id === op.timelineId);
          if (!tl) {
            errors.push(`timeline ${op.timelineId} not found`);
            break;
          }
          if (op.name != null) tl.name = op.name;
          if (op.duration != null) tl.duration = op.duration;
          if (op.playback != null) {
            (tl as { playback?: string }).playback = op.playback;
            tl.scrub = op.playback === "scrub";
          } else if (op.scrub != null) {
            tl.scrub = op.scrub;
            (tl as { playback?: string }).playback = op.scrub ? "scrub" : "manual";
          }
          if (op.scrollStart != null) {
            (tl as { scrollStart?: string }).scrollStart = op.scrollStart;
          }
          if (op.scrollEnd != null) {
            (tl as { scrollEnd?: string }).scrollEnd = op.scrollEnd;
          }
          if (op.delayMs != null) {
            (tl as { delayMs?: number }).delayMs = op.delayMs;
          }
          if (op.repeat != null) {
            (tl as { repeat?: number }).repeat = op.repeat;
          }
          summaries.push(`update_timeline ${op.timelineId}`);
          break;
        }
        case "add_track": {
          const tl = doc.timelines?.find((t) => t.id === op.timelineId);
          if (!tl) {
            errors.push(`timeline ${op.timelineId} not found`);
            break;
          }
          const from = op.from ?? (op.channel === "opacity" ? 0 : 40);
          const to = op.to ?? (op.channel === "opacity" ? 1 : 0);
          tl.tracks = [
            ...(tl.tracks ?? []),
            {
              id: `tr-${uuid().slice(0, 6)}`,
              blockId: op.blockId,
              channel: op.channel,
              keyframes: [
                { t: 0, value: from },
                { t: 1, value: to },
              ],
            },
          ];
          summaries.push(`add_track ${op.channel}`);
          break;
        }
        case "set_keyframe": {
          const tl = doc.timelines?.find((t) => t.id === op.timelineId);
          if (!tl) {
            errors.push(`timeline ${op.timelineId} not found`);
            break;
          }
          if (!tl.tracks) tl.tracks = [];
          let track =
            op.trackIndex != null
              ? tl.tracks[op.trackIndex]
              : tl.tracks.find(
                  (t) =>
                    (!op.blockId || t.blockId === op.blockId) &&
                    (!op.channel || t.channel === op.channel)
                );
          if (!track) {
            if (!op.blockId) {
              errors.push("set_keyframe: track not found (blockId required)");
              break;
            }
            track = {
              id: `tr-${uuid().slice(0, 6)}`,
              blockId: op.blockId,
              channel: op.channel || "opacity",
              keyframes: [],
            };
            tl.tracks.push(track);
          }
          const kfs = [...track.keyframes];
          const idx = kfs.findIndex((k) => Math.abs(k.t - op.t) < 0.02);
          const next = { t: op.t, value: op.value, easing: op.easing };
          if (idx >= 0) kfs[idx] = next;
          else {
            kfs.push(next);
            kfs.sort((a, b) => a.t - b.t);
          }
          track.keyframes = kfs;
          summaries.push(`set_keyframe t=${op.t}`);
          break;
        }
        case "adjust_timing": {
          const tl = doc.timelines?.find((t) => t.id === op.timelineId);
          if (!tl) {
            errors.push(`timeline ${op.timelineId} not found`);
            break;
          }
          if (op.duration != null) tl.duration = op.duration;
          const tracks =
            op.trackIndex != null
              ? [tl.tracks?.[op.trackIndex]].filter(Boolean)
              : tl.tracks ?? [];
          for (const track of tracks) {
            if (!track) continue;
            track.keyframes = track.keyframes.map((k) => {
              let t = k.t;
              if (op.scale != null) t = t * op.scale;
              if (op.shift != null) t = t + op.shift;
              return { ...k, t: Math.max(0, Math.min(1, t)) };
            });
          }
          summaries.push(`adjust_timing ${op.timelineId}`);
          break;
        }
        case "add_motion_link": {
          const section = findSection(doc, op.sectionId);
          const block = section ? findBlock(section, op.blockId) : undefined;
          if (!block) {
            errors.push(`block ${op.blockId} not found`);
            break;
          }
          block.links = [
            ...(block.links ?? []),
            {
              id: `ln-${uuid().slice(0, 6)}`,
              channel: op.channel,
              input: op.input,
              from: op.from,
              to: op.to,
              easing: op.easing,
            },
          ];
          summaries.push(`add_motion_link ${op.channel}`);
          break;
        }
        case "add_pin": {
          if (!op.blockId && !op.sectionId) {
            errors.push("add_pin needs blockId or sectionId");
            break;
          }
          doc.pins = [
            ...(doc.pins ?? []),
            {
              id: `pin-${uuid().slice(0, 6)}`,
              blockId: op.blockId,
              sectionId: op.sectionId,
              start: op.start ?? "top top",
              end: op.end ?? "+=100%",
              pinSpacing: op.pinSpacing !== false,
            },
          ];
          summaries.push("add_pin");
          break;
        }
        case "remove_pin": {
          doc.pins = (doc.pins ?? []).filter((p) => {
            if (op.pinId && p.id === op.pinId) return false;
            if (op.blockId && p.blockId === op.blockId) return false;
            return true;
          });
          summaries.push("remove_pin");
          break;
        }
        case "set_surface_defaults": {
          const prev =
            (doc.templateSurfaceDefaults as Record<string, unknown> | undefined) ?? {};
          doc.templateSurfaceDefaults = {
            ...prev,
            preset: op.preset,
            ...(op.borderMode != null ? { borderMode: op.borderMode } : {}),
            ...(op.solidColor != null ? { solidColor: op.solidColor } : {}),
            ...(op.glassBlurPx != null ? { glassBlurPx: op.glassBlurPx } : {}),
          };
          summaries.push(`set_surface_defaults ${op.preset}`);
          break;
        }
        case "set_image_chrome": {
          const section = findSection(doc, op.sectionId);
          const block = section ? findBlock(section, op.blockId) : undefined;
          if (!block) {
            errors.push(`block ${op.blockId} not found`);
            break;
          }
          if (block.type !== "Image") {
            errors.push(`set_image_chrome requires Image block`);
            break;
          }
          if (op.chrome === "cutout") {
            block.props = {
              ...(block.props ?? {}),
              chrome: "cutout",
              layout: "inline",
              shadow: "none",
              borderWidth: 0,
              borderColor: "",
              ring: 0,
              rounded: "none",
            };
          } else {
            block.props = {
              ...(block.props ?? {}),
              chrome: "framed",
              layout: "card",
              shadow: "lg",
              borderWidth: 1,
              borderColor: "#e7e5e4",
              rounded: "lg",
            };
          }
          summaries.push(`set_image_chrome ${op.chrome} ${op.blockId.slice(0, 8)}`);
          break;
        }
        case "apply_page_document": {
          doc = deepClone(op.document as Doc);
          summaries.push("apply_page_document (full replace)");
          break;
        }
      }
    } catch (e) {
      errors.push(e instanceof Error ? e.message : String(e));
    }
  }

  return {
    ok: errors.length === 0,
    document: doc,
    errors,
    summaries,
  };
}

function defaultPropsForType(type: string): Record<string, unknown> {
  if (type === "Text") {
    return {
      html: "<p>New text</p>",
      align: "left",
      textRole: "body",
    };
  }
  if (type === "Image") {
    return { src: "", alt: "" };
  }
  if (type === "Icon") {
    return { icon: "mdi:star-outline", size: 48, color: "", align: "center" };
  }
  if (type === "Scene3D") {
    return {
      shadows: true,
      heightPx: 320,
      camera: { position: [4, 3, 6], lookAt: [0, 1, 0], fov: 50 },
      lights: [
        { type: "ambient", color: "#ffffff", intensity: 0.45 },
        {
          type: "directional",
          color: "#fff5e6",
          intensity: 1.1,
          position: [4, 8, 4],
          target: [0, 0, 0],
        },
      ],
      objects: [
        {
          type: "room",
          width: 8,
          depth: 8,
          height: 3.2,
          wallColor: "#e8e4dc",
          floorColor: "#c4b8a8",
        },
        {
          type: "box",
          position: [0, 0.5, 0],
          width: 1,
          height: 1,
          depth: 1,
          material: { color: "#ea580c", metalness: 0.2, roughness: 0.45 },
          castShadow: true,
          receiveShadow: true,
        },
      ],
      environment: { background: "#1a1a1a" },
    };
  }
  return {};
}

export function summarizeDiff(before: unknown, after: unknown): string {
  try {
    const a = JSON.stringify(before);
    const b = JSON.stringify(after);
    if (a === b) return "no changes";
    const delta = Math.abs(b.length - a.length);
    return `~${delta} bytes changed`;
  } catch {
    return "changed";
  }
}
