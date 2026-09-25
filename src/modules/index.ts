import type { FinnskModule, ModuleListItem } from "./types";
import { getModule, listRegisteredModules } from "./registry";

export async function listSiteModules(
  db: D1Database,
  siteId: string
): Promise<ModuleListItem[]> {
  const rows = await db
    .prepare(
      `SELECT module_id, enabled_at FROM site_modules WHERE site_id = ? AND enabled = 1`
    )
    .bind(siteId)
    .all<{ module_id: string; enabled_at: string }>();

  const enabled = new Map(
    (rows.results ?? []).map((r) => [r.module_id, r.enabled_at] as const)
  );

  return listRegisteredModules().map((m) => ({
    id: m.id,
    name: m.name,
    description: m.description,
    enabled: enabled.has(m.id),
    enabledAt: enabled.get(m.id) ?? null,
  }));
}

export async function isModuleEnabled(
  db: D1Database,
  siteId: string,
  moduleId: string
): Promise<boolean> {
  const row = await db
    .prepare(
      `SELECT enabled FROM site_modules WHERE site_id = ? AND module_id = ? AND enabled = 1`
    )
    .bind(siteId, moduleId)
    .first<{ enabled: number }>();
  return Boolean(row);
}

async function runMigrations(db: D1Database, migrations: string[]): Promise<void> {
  for (const sql of migrations) {
    const trimmed = sql.trim();
    if (!trimmed) continue;
    await db.prepare(trimmed).run();
  }
}

export async function enableModule(
  db: D1Database,
  siteId: string,
  moduleId: string
): Promise<{ ok: true } | { error: string; status: number }> {
  const mod = getModule(moduleId);
  if (!mod) return { error: "Unknown module", status: 404 };

  await runMigrations(db, mod.migrations);

  await db
    .prepare(
      `INSERT INTO site_modules (site_id, module_id, enabled, enabled_at, config_json)
       VALUES (?, ?, 1, datetime('now'), '{}')
       ON CONFLICT(site_id, module_id) DO UPDATE SET
         enabled = 1,
         enabled_at = datetime('now')`
    )
    .bind(siteId, moduleId)
    .run();

  return { ok: true };
}

export async function disableModule(
  db: D1Database,
  siteId: string,
  moduleId: string
): Promise<{ ok: true } | { error: string; status: number }> {
  const mod = getModule(moduleId);
  if (!mod) return { error: "Unknown module", status: 404 };

  await db
    .prepare(
      `UPDATE site_modules SET enabled = 0 WHERE site_id = ? AND module_id = ?`
    )
    .bind(siteId, moduleId)
    .run();

  return { ok: true };
}

export function forEachModuleWithRoutes(
  fn: (mod: FinnskModule) => void
): void {
  for (const mod of listRegisteredModules()) {
    if (mod.mountRoutes) fn(mod);
  }
}

export type { FinnskModule, ModuleListItem };
export { getModule, listRegisteredModules };
