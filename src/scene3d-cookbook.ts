/** Scene3D cookbook — declarative Three.js scenes for MCP / Design Agent. */

export const SCENE3D_COOKBOOK = {
  version: 2,
  instructions: [
    "Scene3D is real WebGL (Three.js). For a whole-page 3D space set immersive=true, controls='orbit', section fullWidth=true, one Scene3D block spanning the section.",
    "room = enclosed volume (six planes + skirting) — real WebGL 3D, not a 2D drawing. Put floating objects INSIDE as spheres/boxes/etc with label+description for click-to-reveal.",
    "Do not overlay 2D Icon blocks on top of an immersive scene — keep interactables in objects[].",
    "Camera: immersive defaults put you inside the room; orbit drag to look, scroll to zoom.",
    "Motion (GSAP) can still drive the Scene3D block shell; per-mesh animation comes later.",
  ],
  objectTypes: ["box", "sphere", "cylinder", "plane", "torus", "room", "gltf"],
  lightTypes: ["ambient", "directional", "point", "spot"],
  props: {
    immersive: "boolean — 100dvh full-page WebGL",
    controls: "orbit | none",
    autoRotate: "boolean",
  },
  recipes: {
    "immersive-room": {
      summary: "Full-page walkable-looking room with orbit controls.",
      props: {
        immersive: true,
        controls: "orbit",
        shadows: true,
        camera: { position: [0, 1.65, 0.4], lookAt: [0, 1.4, -3], fov: 72 },
        lights: [
          { type: "ambient", intensity: 0.32 },
          {
            type: "directional",
            color: "#ffe7c2",
            intensity: 1.3,
            position: [4, 6, 2],
            target: [0, 0, 0],
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
          {
            type: "sphere",
            position: [0, 1.5, -2],
            radius: 0.4,
            material: { color: "#ea580c" },
            castShadow: true,
            label: "Accent",
            description: "Click objects in the room for details.",
          },
        ],
        environment: { background: "#0a0a0a" },
      },
    },
    "simple-room": {
      summary: "Embedded (non-immersive) room preview.",
      props: {
        immersive: false,
        controls: "orbit",
        heightPx: 480,
        shadows: true,
        camera: { position: [5, 3, 7], lookAt: [0, 1, 0], fov: 50 },
        objects: [
          { type: "room", width: 8, depth: 8, height: 3.2 },
          {
            type: "box",
            position: [0, 0.5, 0],
            material: { color: "#ea580c" },
            castShadow: true,
          },
        ],
      },
    },
  },
} as const;

export const BLOCK_CATALOG = [
  {
    type: "Text",
    label: "Text",
    props: ["html", "align", "textRole"],
  },
  {
    type: "Image",
    label: "Image",
    props: ["src", "mediaKey", "mediaId", "alt", "layout", "blockFit"],
  },
  {
    type: "Line",
    label: "Line",
    props: ["style", "thickness", "color", "marginY"],
  },
  {
    type: "Icon",
    label: "Icon",
    props: ["icon", "size", "color", "align", "label", "description", "reveal"],
    note: "icon must be Iconify prefix:name from search_icons",
  },
  {
    type: "Scene3D",
    label: "3D Scene",
    props: [
      "immersive",
      "controls",
      "autoRotate",
      "camera",
      "lights",
      "objects",
      "environment",
      "shadows",
      "heightPx",
    ],
    note: "immersive=true + fullWidth section = whole-page 3D space; see finnsk://cookbook/scene3d",
  },
] as const;
