/** Minimal valid PageDocumentV3 for a new home page (Text block + sample timeline). */
export function blankHomeDocumentJson(): string {
  const sectionId = crypto.randomUUID();
  const blockId = crypto.randomUUID();
  const timelineId = "landing-intro";
  const doc = {
    schemaVersion: 3,
    pages: [
      {
        id: sectionId,
        settings: {
          sectionType: "lava",
          minHeight: "480px",
          fullWidth: false,
          backgroundColor: "#ffffff",
        },
        blocks: [
          {
            id: blockId,
            type: "Text",
            placement: {
              desktop: { colStart: 2, colEnd: 14, rowStart: 2, rowEnd: 5 },
              gridColumn: "2 / 14",
              gridRow: "2 / 5",
              zIndex: 1,
            },
            props: {
              html: "<h1>Welcome</h1><p>Edit this site from <strong>/edit</strong>. Select this block and open the Motion panel to scrub the sample timeline.</p>",
              align: "left",
              textRole: "display",
            },
            links: [
              {
                channel: "opacity",
                input: { kind: "timeline", timelineId },
                from: 0,
                to: 1,
              },
            ],
          },
        ],
      },
    ],
    templateSurfaceDefaults: {},
    templateAnimationDefaults: { entrancePreset: "none" },
    timelines: [
      {
        id: timelineId,
        name: "Landing intro",
        duration: 1.2,
        scrub: false,
        tracks: [
          {
            blockId,
            channel: "opacity",
            keyframes: [
              { t: 0, value: 0 },
              { t: 1, value: 1 },
            ],
          },
          {
            blockId,
            channel: "y",
            keyframes: [
              { t: 0, value: 24 },
              { t: 1, value: 0, easing: "power2.out" },
            ],
          },
        ],
      },
    ],
  };
  return JSON.stringify(doc);
}

/** Creative demo — Icon row + Scene3D room (editor/public parity check). */
export function creativeLabDocumentJson(): string {
  const heroId = crypto.randomUUID();
  const sceneSectionId = crypto.randomUUID();
  const titleId = crypto.randomUUID();
  const iconA = crypto.randomUUID();
  const iconB = crypto.randomUUID();
  const iconC = crypto.randomUUID();
  const sceneId = crypto.randomUUID();
  const copyId = crypto.randomUUID();

  const doc = {
    schemaVersion: 3,
    pages: [
      {
        id: heroId,
        settings: {
          sectionType: "lava",
          minHeight: "420px",
          fullWidth: false,
          backgroundColor: "#0f0f0f",
        },
        blocks: [
          {
            id: titleId,
            type: "Text",
            placement: {
              desktop: { colStart: 2, colEnd: 14, rowStart: 2, rowEnd: 4 },
              gridColumn: "2 / 14",
              gridRow: "2 / 4",
              zIndex: 2,
            },
            props: {
              html: '<h1 style="color:#fafafa">Creative lab</h1><p style="color:#a3a3a3">Iconify icons + a procedural Three.js room. Open Agent to remix.</p>',
              align: "left",
              textRole: "display",
            },
          },
          {
            id: iconA,
            type: "Icon",
            placement: {
              desktop: { colStart: 2, colEnd: 5, rowStart: 5, rowEnd: 7 },
              gridColumn: "2 / 5",
              gridRow: "5 / 7",
              zIndex: 1,
            },
            props: { icon: "mdi:cube-outline", size: 56, color: "#ea580c", align: "left" },
          },
          {
            id: iconB,
            type: "Icon",
            placement: {
              desktop: { colStart: 5, colEnd: 8, rowStart: 5, rowEnd: 7 },
              gridColumn: "5 / 8",
              gridRow: "5 / 7",
              zIndex: 1,
            },
            props: { icon: "lucide:sparkles", size: 56, color: "#fafafa", align: "left" },
          },
          {
            id: iconC,
            type: "Icon",
            placement: {
              desktop: { colStart: 8, colEnd: 11, rowStart: 5, rowEnd: 7 },
              gridColumn: "8 / 11",
              gridRow: "5 / 7",
              zIndex: 1,
            },
            props: { icon: "ph:lightbulb-filament", size: 56, color: "#fbbf24", align: "left" },
          },
        ],
      },
      {
        id: sceneSectionId,
        settings: {
          sectionType: "lava",
          minHeight: "560px",
          fullWidth: false,
          backgroundColor: "#141414",
        },
        blocks: [
          {
            id: sceneId,
            type: "Scene3D",
            placement: {
              desktop: { colStart: 2, colEnd: 16, rowStart: 2, rowEnd: 10 },
              gridColumn: "2 / 16",
              gridRow: "2 / 10",
              zIndex: 1,
            },
            props: {
              heightPx: 420,
              shadows: true,
              camera: { position: [5, 3.5, 7], lookAt: [0, 1, 0], fov: 50 },
              lights: [
                { type: "ambient", color: "#ffffff", intensity: 0.4 },
                {
                  type: "directional",
                  color: "#fff2dd",
                  intensity: 1.15,
                  position: [5, 8, 3],
                  target: [0, 0, 0],
                },
              ],
              objects: [
                {
                  type: "room",
                  width: 8,
                  depth: 8,
                  height: 3.2,
                  wallColor: "#ebe6de",
                  floorColor: "#c9bba8",
                },
                {
                  type: "box",
                  position: [0, 0.45, 0],
                  width: 0.9,
                  height: 0.9,
                  depth: 0.9,
                  material: { color: "#ea580c", metalness: 0.25, roughness: 0.4 },
                  castShadow: true,
                  receiveShadow: true,
                },
                {
                  type: "sphere",
                  position: [1.6, 0.35, -0.8],
                  radius: 0.35,
                  material: { color: "#38bdf8", metalness: 0.5, roughness: 0.25 },
                  castShadow: true,
                },
              ],
              environment: { background: "#141414" },
            },
          },
          {
            id: copyId,
            type: "Text",
            placement: {
              desktop: { colStart: 17, colEnd: 24, rowStart: 3, rowEnd: 7 },
              gridColumn: "17 / 24",
              gridRow: "3 / 7",
              zIndex: 2,
            },
            props: {
              html: '<h2 style="color:#fafafa">3D room</h2><p style="color:#a3a3a3">Declarative lights, walls, and primitives. Drop a GLB via Agent → request_asset.</p>',
              align: "left",
              textRole: "heading",
            },
          },
        ],
      },
    ],
    templateSurfaceDefaults: { preset: "transparent" },
    templateAnimationDefaults: { entrancePreset: "none" },
    timelines: [],
  };
  return JSON.stringify(doc);
}

/** Immersive 3D room page — full viewport WebGL, orbit, objects live in the room. */
export function animalRoomDocumentJson(): string {
  const sectionId = crypto.randomUUID();
  const sceneId = crypto.randomUUID();

  const floating = [
    {
      type: "sphere" as const,
      position: [-2.2, 1.8, -1.4] as [number, number, number],
      radius: 0.45,
      material: { color: "#a8a29e", metalness: 0.35, roughness: 0.35 },
      castShadow: true,
      label: "Elephant",
      description: "Memory keeper — orbit closer. Click again to dismiss.",
    },
    {
      type: "sphere" as const,
      position: [2.4, 2.1, -0.6] as [number, number, number],
      radius: 0.32,
      material: { color: "#fbbf24", metalness: 0.4, roughness: 0.3 },
      castShadow: true,
      label: "Owl",
      description: "Night watcher perched in the upper air of the room.",
    },
    {
      type: "box" as const,
      position: [1.6, 0.55, 2.2] as [number, number, number],
      width: 0.7,
      height: 0.7,
      depth: 0.7,
      material: { color: "#4ade80", metalness: 0.15, roughness: 0.55 },
      castShadow: true,
      receiveShadow: true,
      label: "Turtle",
      description: "Slow traveler grounded on the floor plane.",
    },
    {
      type: "torus" as const,
      position: [-1.4, 1.5, 1.8] as [number, number, number],
      radius: 0.45,
      tube: 0.12,
      rotation: [0.4, 0.2, 0] as [number, number, number],
      material: { color: "#fb923c", metalness: 0.5, roughness: 0.25 },
      castShadow: true,
      label: "Fox",
      description: "Edge-walker — spins in open space between walls.",
    },
    {
      type: "cylinder" as const,
      position: [0.2, 1.2, -2.6] as [number, number, number],
      radiusTop: 0.2,
      radiusBottom: 0.28,
      height: 0.9,
      material: { color: "#38bdf8", metalness: 0.45, roughness: 0.3 },
      castShadow: true,
      label: "Fish",
      description: "Current-rider floating mid-room.",
    },
    {
      type: "sphere" as const,
      position: [0.8, 2.6, 0.4] as [number, number, number],
      radius: 0.28,
      material: { color: "#e879f9", metalness: 0.55, roughness: 0.2 },
      castShadow: true,
      label: "Bird",
      description: "Sky thread near the ceiling.",
    },
  ];

  const doc = {
    schemaVersion: 3,
    pages: [
      {
        id: sectionId,
        settings: {
          sectionType: "lava",
          minHeight: "900px",
          fullWidth: true,
          backgroundColor: "#0c0c0d",
          paddingTop: 0,
          paddingBottom: 0,
        },
        blocks: [
          {
            id: sceneId,
            type: "Scene3D",
            placement: {
              desktop: { colStart: 1, colEnd: 25, rowStart: 1, rowEnd: 22 },
              gridColumn: "1 / 25",
              gridRow: "1 / 22",
              zIndex: 1,
            },
            props: {
              immersive: true,
              controls: "orbit",
              autoRotate: false,
              shadows: true,
              camera: {
                position: [0, 1.65, 0.35],
                lookAt: [0, 1.4, -3],
                fov: 72,
              },
              lights: [
                { type: "ambient", color: "#ffffff", intensity: 0.32 },
                {
                  type: "directional",
                  color: "#ffe7c2",
                  intensity: 1.35,
                  position: [4, 6, 2],
                  target: [0, 0, 0],
                },
                {
                  type: "point",
                  color: "#ea580c",
                  intensity: 0.55,
                  position: [-2.5, 2.2, 1.2],
                },
              ],
              objects: [
                {
                  type: "room",
                  width: 12,
                  depth: 12,
                  height: 3.8,
                  wallColor: "#cfc6b8",
                  floorColor: "#9a8b72",
                  ceilingColor: "#e8e2d8",
                },
                ...floating,
              ],
              environment: {
                background: "#0a0a0a",
                fogColor: "#0a0a0a",
                fogNear: 10,
                fogFar: 26,
              },
            },
          },
        ],
      },
    ],
    templateSurfaceDefaults: { preset: "transparent" },
    templateAnimationDefaults: { entrancePreset: "none" },
    timelines: [],
  };
  return JSON.stringify(doc);
}
