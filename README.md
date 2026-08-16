# Kanwal Sohail — Portfolio

Personal portfolio for Kanwal Sohail — Banking Professional with a Background
in Biochemistry & Technology.

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, static export)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Local Development

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Quality Checks

```bash
npm run typecheck   # tsc --noEmit
npm run lint         # eslint .
```

## Production Build

The site is configured for **static export** (`output: "export"` in
`next.config.ts`) so it can be hosted on GitHub Pages with no server:

```bash
npm run build
```

Static output is written to `out/`.

## Asset Generation

Two small scripts (using `sharp`) turn the SVG design sources in
`scripts/design-sources/` into the raster assets committed under `public/`:

```bash
npm run icons    # favicon.ico, icon-192.png, icon-512.png, apple-touch-icon.png
                 # from public/favicon.svg

npm run assets   # og-image.jpg and the two abstract project cover images
                 # from scripts/design-sources/*.svg
```

Re-run these only if you edit the underlying SVGs — the generated files are
already committed.

## Deployment — GitHub Pages

### Option A — GitHub Actions (recommended)

`.github/workflows/deploy.yml` builds and deploys automatically on every
push to `main`. In the repository settings, set **Pages → Source** to
**GitHub Actions**. No further configuration is required for a *user* Pages
site served from the domain root (e.g. `https://kanwalsohail.github.io`).

If this project is ever published as a *project* Pages site instead (e.g.
`https://kanwalsohail.github.io/portfolio`), set a repository variable
`BASE_PATH=/portfolio` — `next.config.ts` already reads this via
`process.env.BASE_PATH`.

### Option B — Manual

```bash
npm run build
# publish the contents of out/ to the gh-pages branch or Pages source
```

`public/.nojekyll` is included and copied into `out/` automatically so
GitHub Pages does not ignore the `_next/` asset folder.

## Contact Form

The contact form is static-hosting-compatible — it posts client-side to an
external form endpoint (e.g. [Formspree](https://formspree.io)) rather than
relying on a Next.js API route, which GitHub Pages cannot run.

Configure it by setting an environment variable at build time:

```
NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

**If this variable is not set**, the form section automatically renders an
honest, working `mailto:` fallback instead — it never pretends to submit
successfully when nothing is actually configured.

## Real Assets Still Needed

The site is built entirely from verified, real information already present
in the source project. A few real assets are still needed from the site
owner before certain sections can go from "honest empty state" to "fully
populated":

- **High-resolution profile photo** — place at `public/images/kanwal-profile.jpg`
  and swap it into the Hero (currently an original abstract orbital
  composition, since no sufficiently high-resolution photo was supplied).
- **CV PDF** — place at `public/Kanwal-Sohail-CV.pdf` and flip
  `profile.cv.available` to `true` in `src/data/profile.ts`. Until then the
  CV section shows an honest "available on request" state, not a dead link.
- **Real project screenshots** (optional) — the two "Selected Work" covers
  are original abstract compositions, not fabricated product screenshots.
- **Real published articles** (optional) — add entries to
  `src/data/articles.ts` when genuine essays exist. The Insights section
  currently shows an honest empty state rather than filler posts.
- **Verified certifications** (optional) — add entries to
  `src/data/certifications.ts` only once a credential is real and
  verifiable. The Certifications block stays hidden until then.

No employer names, dates, degrees, certifications, metrics, or projects
were invented anywhere in this codebase.

## Data Files

All editable content lives under `src/data/` — a single source of truth per
concern (profile, experience, education, certifications, projects, skills,
timeline, articles, navigation). Update content there rather than in
components.
