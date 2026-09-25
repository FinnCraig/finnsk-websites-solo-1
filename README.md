# Finnsk Solo (Deploy template)

Self-contained Cloudflare Worker for **one-click install**.  
Do **not** point Deploy to Cloudflare at the monorepo root — use this folder.

## Deploy to Cloudflare

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/finnsk-engineering/finnsk-websites/tree/main/templates/solo)

**On the setup screen:**

1. Create the GitHub/GitLab repo as **Public** (recommended — private destination often breaks source import).
2. Keep build `npm run build` and deploy `npm run deploy`.
3. After create, open the new repo on GitHub. You must see a commit titled **`source repo import`** with the full tree (`src/`, `public/`, `package.json`, …).

If the new repo only has `README.md` + `wrangler.jsonc` (commits `Initial commit` + `Uploading template.`), Cloudflare’s import failed silently ([workers-sdk#14553](https://github.com/cloudflare/workers-sdk/issues/14553)). Delete that Worker + empty repo and click the button again (or use CLI below).

## CLI

```bash
cd templates/solo
npm ci
npx wrangler login
# provision D1/KV/R2 once, or use dashboard Deploy flow
npx wrangler deploy
```

From the monorepo root (full install with binding IDs written for you):

```bash
npm run install:cloudflare
```

## Local

```bash
cp .dev.vars.example .dev.vars
npm ci
npm run dev
```

Open http://127.0.0.1:8790/edit

## Regenerating this template

From the monorepo root after changing Solo:

```bash
npm run build:solo-web
npm run sync:solo-template
```
