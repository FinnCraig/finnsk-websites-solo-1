/**
 * Finnsk Solo — module contract.
 * Enable → migrate (site_id-scoped) → mount /api/modules/:id/* → admin panel later.
 */

import type { Hono } from "hono";
import type { SoloEnv } from "../env";

export type FinnskModule = {
  id: string;
  name: string;
  description: string;
  /** SQL statements run once when the module is enabled for a site. Must be site_id-scoped. */
  migrations: string[];
  /** Optional API sub-app mounted at /api/modules/:id */
  mountRoutes?: (app: Hono<{ Bindings: SoloEnv }>) => void;
};

export type ModuleListItem = {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
  enabledAt: string | null;
};
