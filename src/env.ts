export type SoloEnv = {
  SITE_DB: D1Database;
  MEDIA?: R2Bucket;
  CACHE?: KVNamespace;
  ASSETS?: Fetcher;
  SESSION_SECRET: string;
};
