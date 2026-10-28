# Kanwal Sohail — Portfolio

Personal portfolio for Kanwal Sohail, a banking professional with an academic
background in biochemistry and previous experience in laboratory science.

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

## Production Build & Preview

The site is configured for **static export** (`output: "export"` in
`next.config.ts`) so it can be hosted on GitHub Pages without a Node.js server.

```bash
npm run build
npm run start
```

The build is written to `out/`. The `start` command serves that exported folder
locally. `next start` is not used because it does not support static-export output.

## Social-sharing image

The Open Graph preview image is a simple typographic design. Regenerate it
after editing `scripts/design-sources/og-image.svg` with:

```bash
npm run assets
```

The favicon and app icons are already committed under `public/`.

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

## Owner-supplied details that would improve the portfolio

The site uses the information already present in the source project and avoids invented credentials, results, testimonials or client work. A few owner-supplied items could make it more complete:

- **A current professional portrait** (optional) — a real photograph can be added later if you want a photo-led introduction. The current layout deliberately avoids a synthetic portrait or decorative AI-style hero graphic.
- **CV PDF** — place at `public/Kanwal-Sohail-CV.pdf` and flip
  `profile.cv.available` to `true` in `src/data/profile.ts`. Until then the
  CV section shows an honest "available on request" state, not a dead link.
- **Real project screenshots or case-study links** (optional) — add these only for work you can publicly share.
- **Real published articles** (optional) — add entries to
  `src/data/articles.ts` when genuine essays exist. The Insights section
  currently shows an honest empty state rather than filler posts.
- **Verified certifications** (optional) — add entries to
  `src/data/certifications.ts` only once a credential is real and
  verifiable. The Certifications block stays hidden until then.

The portfolio intentionally avoids invented employers, dates, qualifications,
certifications, performance metrics, testimonials and client projects.

## Content and accuracy

Before publishing, review the personal email address, current role wording,
experience summaries and social profile links in `src/data/`. Exact dates,
qualifications and responsibilities should be added only when you can confirm
them.

## Data Files

All editable content lives under `src/data/` — a single source of truth per
concern (profile, experience, education, certifications, projects, skills,
timeline, articles, navigation). Update content there rather than in
components.
