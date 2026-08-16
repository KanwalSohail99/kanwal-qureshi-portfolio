import type { NextConfig } from "next";

/**
 * GitHub Pages deployment.
 *
 * `output: "export"` produces a fully static site in `out/` — no Node
 * server required, which is what GitHub Pages needs. Static export does
 * not support `redirects()`/`headers()`/on-demand image optimization, so:
 *  - legacy `/blog` paths are handled by a tiny static HTML redirect page
 *    instead (see src/app/blog/page.tsx), not next.config redirects.
 *  - `images.unoptimized` is enabled so `next/image` emits plain <img>
 *    tags that work from a static host without an image server.
 *
 * If this repo is published at https://kanwalsohail.github.io it is a
 * *user* Pages site and is served from the domain root, so no basePath
 * is needed. If it is ever moved to a *project* Pages site instead
 * (e.g. https://kanwalsohail.github.io/portfolio), set BASE_PATH below.
 */
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
