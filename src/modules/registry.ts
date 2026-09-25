import type { FinnskModule } from "./types";
import { blogModule } from "../vendor/blog/index";

/**
 * Built-in modules. Add packages under packages/modules/* and import here.
 */
export const MODULE_REGISTRY: FinnskModule[] = [blogModule as FinnskModule];

export function getModule(id: string): FinnskModule | undefined {
  return MODULE_REGISTRY.find((m) => m.id === id);
}

export function listRegisteredModules(): FinnskModule[] {
  return MODULE_REGISTRY.slice();
}
