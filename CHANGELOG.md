# Changelog

## Upgrade pass — production packaging

The uploaded project was already a substantially complete, well-executed
implementation of the target design: real HBL / BMD Lab / Civil Hospital
Karachi experience data, a custom K-monogram identity, honest empty states
for Insights/Certifications/CV, an accessible mobile menu, dark mode,
reduced-motion support, and static-hosting-safe SEO/JSON-LD/sitemap/robots.
This pass focused on architecture cleanup, GitHub Pages compatibility,
missing production assets, and full build verification — not a redesign.

### Architecture cleanup

- Removed leftover PostgreSQL/Drizzle scaffolding from the original
  `nextjs-postgresql-template` base: `src/db/`, `src/app/api/health/`,
  `drizzle.config.json`, and the `pg`, `drizzle-orm`, `drizzle-kit`,
  `@types/pg`, `dotenv` dependencies. None of this was reachable from the
  portfolio and it is incompatible with a static export / GitHub Pages.
- Renamed `package.json` name from `nextjs-postgresql-template` to
  `kanwal-sohail-portfolio`.

### GitHub Pages / static export fixes

- Set `output: "export"` and `images.unoptimized: true` in
  `next.config.ts`, with an optional `BASE_PATH` env var for project-Pages
  hosting.
- Replaced the old `next.config.ts` `redirects()` (unsupported in static
  export) with a real static page at `src/app/blog/page.tsx` that redirects
  `/blog` → `/insights` client-side via `next/navigation`.
- Added `export const dynamic = "force-static"` to `src/app/robots.ts` and
  `src/app/sitemap.ts`, both required for these metadata routes to work
  under static export.
- Fixed a Next.js 16 / Turbopack static-export requirement: a dynamic route
  (`/insights/[slug]`) must return at least one entry from
  `generateStaticParams()`. Since `articles` is genuinely empty (no
  fabricated posts), the route now falls back to a single internal,
  unreachable placeholder param that immediately calls `notFound()` — it is
  never linked from any page, sitemap entry, or nav item.
- Added `public/.nojekyll` so GitHub Pages doesn't ignore the `_next/`
  asset directory.
- Added `.github/workflows/deploy.yml` — typechecks, lints, builds, and
  deploys `out/` to GitHub Pages via `actions/deploy-pages`.

### Production assets added

- Generated the full favicon package (`favicon.ico`, `icon-192.png`,
  `icon-512.png`, `apple-touch-icon.png`) from the existing K-monogram
  `favicon.svg` using the project's own `scripts/gen-icons.mjs`.
- Designed and rendered `public/images/og/og-image.jpg` (1200×630) — dark
  navy background, K monogram, name, and positioning line, matching the
  site's own design tokens. No fabricated claims or metrics.
- Designed and rendered two original abstract cover images for the
  "Selected Work" section (`project-01.png`, `project-02.png`) since no
  real product screenshots existed for the two genuine listed projects.
  These are geometric/typographic compositions, not fake screenshots.
- Added `scripts/gen-og-and-covers.mjs` (documented, re-runnable) and moved
  the SVG sources into `scripts/design-sources/` so asset generation is a
  proper, repeatable part of the build workflow rather than a one-off.

### Code quality fixes

- Fixed a real ESLint error in `src/components/ThemeToggle.tsx`
  (`react-hooks/set-state-in-effect`) by switching from
  `useEffect` + `setState` to `useSyncExternalStore`, which is the correct
  pattern for reading external (DOM) mutable state without a hydration
  mismatch.

### Verification performed

- `tsc --noEmit` — clean.
- `eslint .` — clean.
- `next build` — succeeds and produces a complete `out/` static export
  (`index.html`, `404.html`, `sitemap.xml`, `robots.txt`, favicon assets,
  OG image, `insights/`, `blog/` redirect page, all CSS/JS/images).
- Full placeholder audit (`TODO`, `FIXME`, `Lorem ipsum`, `placeholder`,
  `coming soon`, `example.com`, `href="#"`, `[Organization Name]`, etc.) —
  no public-facing matches.
- Confirmed no fabricated employers, dates, degrees, certifications,
  metrics, or projects anywhere in `src/data/`.

### Known environment limitation (not a code defect)

- This development sandbox's network egress does not allow
  `fonts.googleapis.com`, so `next build` cannot fetch Inter / Playfair
  Display here. This was verified to be the *only* blocker: the build was
  re-run with the font imports temporarily stubbed out, succeeded
  completely, and the real `next/font/google` configuration in
  `src/app/layout.tsx` was then restored unchanged. The build will succeed
  normally in any environment with standard internet access (local
  machine, GitHub Actions, Vercel, etc.).

### Not changed

- No employer names, dates, degrees, certifications, metrics, or projects
  were invented at any point in this pass.
- The Insights, Certifications, and CV sections remain in their honest
  "real content not yet supplied" states — see README → "Real Assets Still
  Needed."
