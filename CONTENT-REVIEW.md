# Owner review before publishing

The portfolio has been edited to avoid invented achievements and decorative project mock-ups. Before making it public, review these owner-controlled details:

1. **Email address** — confirm the address in `src/data/profile.ts` is typed correctly and is the one you want published.
2. **Current position** — confirm the employer, team/area wording and whether the role title may be shown publicly.
3. **Employment history** — confirm each organization, role, duration and responsibility. Add month/year dates only when you know they are accurate.
4. **Education** — add the institution, qualification title and completion year only if you want them public and can confirm the exact wording.
5. **CV** — add your current PDF at `public/Kanwal-Sohail-CV.pdf` and set `profile.cv.available` to `true` only after the file is present.
6. **Real work samples** — replace the LinkedIn-only writing reference with published links or redacted samples you have permission to share. Do not publish confidential banking or laboratory material.
7. **Portrait** — optional. If you want a photo-led hero, supply a recent professional photograph. The design intentionally does not fabricate a face.
8. **Contact form** — the site uses an email fallback unless `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is configured. Test the form after configuring a real endpoint.
9. **Hosting URL** — confirm `NEXT_PUBLIC_SITE_URL` and `BASE_PATH` match the actual GitHub Pages/custom-domain setup before deployment.

## Local commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run start` serves the static `out/` export. It does not run `next start`.
