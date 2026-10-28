/** Canonical site configuration — used by metadata, sitemap, robots and JSON-LD.
 *  Defaults to the current GitHub Pages URL, but can be overridden at build
 *  time (e.g. after migrating to a custom domain) via NEXT_PUBLIC_SITE_URL,
 *  mirroring the BASE_PATH pattern already used in next.config.ts. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kanwalsohail.github.io";

export const SITE_TITLE =
  "Kanwal Sohail — Banking & Laboratory Science";

export const SITE_DESCRIPTION =
  "Professional profile of Kanwal Sohail, working in credit-card business acquisition at Habib Bank Limited, with previous experience in laboratory science and an academic background in biochemistry.";

export const OG_IMAGE = `${SITE_URL}/images/og/og-image.jpg`;
