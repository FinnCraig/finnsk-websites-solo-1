/**
 * Solo shared D1 — one database for Free Cloudflare install.
 * site_id partitions content (single site now; multi-site rows later on the same Worker).
 */
export const SOLO_SCHEMA_SQL = `
CREATE TABLE IF NOT EXISTS solo_meta (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS solo_users (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  password_hash TEXT NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS page_blocks (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  page_slug TEXT NOT NULL,
  component_type TEXT NOT NULL,
  props_json TEXT NOT NULL,
  order_index INTEGER NOT NULL,
  block_kind TEXT DEFAULT 'standard',
  metadata_json TEXT DEFAULT '{}'
);

CREATE INDEX IF NOT EXISTS idx_page_blocks_site_page
  ON page_blocks (site_id, page_slug, order_index);

CREATE TABLE IF NOT EXISTS pages (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  slug TEXT NOT NULL,
  title TEXT,
  nav_order INTEGER NOT NULL DEFAULT 0,
  html_cache_revision INTEGER NOT NULL DEFAULT 0,
  published INTEGER NOT NULL DEFAULT 1,
  nav_title TEXT,
  seo_json TEXT NOT NULL DEFAULT '{}',
  created_at TEXT NOT NULL DEFAULT (datetime('now')),
  UNIQUE(site_id, slug)
);

CREATE INDEX IF NOT EXISTS idx_pages_site ON pages(site_id);

CREATE TABLE IF NOT EXISTS site_settings (
  site_id TEXT PRIMARY KEY,
  settings_json TEXT NOT NULL DEFAULT '{}',
  public_html_revision INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS site_media (
  id TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  filename TEXT NOT NULL,
  bytes INTEGER NOT NULL,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_site_media_site ON site_media(site_id);

CREATE TABLE IF NOT EXISTS tenant_domains (
  hostname TEXT PRIMARY KEY,
  site_id TEXT NOT NULL,
  is_primary INTEGER NOT NULL DEFAULT 0,
  verified INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE INDEX IF NOT EXISTS idx_tenant_domains_site ON tenant_domains(site_id);

CREATE TABLE IF NOT EXISTS site_modules (
  site_id TEXT NOT NULL,
  module_id TEXT NOT NULL,
  enabled INTEGER NOT NULL DEFAULT 0,
  enabled_at TEXT,
  config_json TEXT NOT NULL DEFAULT '{}',
  PRIMARY KEY (site_id, module_id)
);

CREATE INDEX IF NOT EXISTS idx_site_modules_site ON site_modules(site_id);
`.trim();

export const SOLO_DEFAULT_SITE_ID = "site-default";

export const SOLO_DEFAULT_NAVBAR = {
  navSource: "pages" as const,
  brand: "My Site",
  linksJson: "[]",
  bgColor: "#ffffff",
  textColor: "",
  accentColor: "",
  variant: "solid" as const,
  overlay: false,
  sticky: true,
  borderBottom: true,
  glassBlur: 12,
  paddingY: 16,
  paddingX: 24,
  maxWidth: "6xl" as const,
  layout: "brand-left" as const,
  showLogo: false,
  logoHeightOverride: 0,
  linkStyle: "muted" as const,
  activeStyle: "underline" as const,
  dropdownTrigger: "hover" as const,
};
