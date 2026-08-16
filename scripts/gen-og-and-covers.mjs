/**
 * Renders the Open Graph share image and the abstract "Selected Work"
 * cover images from their SVG sources in scripts/design-sources/.
 *
 * These are original geometric/typographic compositions — not real
 * product screenshots — used only where no real project image exists.
 * Re-run this after editing any file in scripts/design-sources/.
 *
 * Run: node scripts/gen-og-and-covers.mjs
 */
import sharp from "sharp";
import { readFileSync } from "node:fs";

async function render(srcPath, outPath, { width, height, format }) {
  const svg = readFileSync(srcPath);
  const img = sharp(svg, { density: 300 }).resize(width, height);
  const buf = format === "jpeg" ? await img.jpeg({ quality: 90 }).toBuffer() : await img.png().toBuffer();
  const { writeFileSync } = await import("node:fs");
  writeFileSync(outPath, buf);
}

await render(
  "scripts/design-sources/og-image.svg",
  "public/images/og/og-image.jpg",
  { width: 1200, height: 630, format: "jpeg" }
);

await render(
  "scripts/design-sources/project-01-cover.svg",
  "public/images/projects/project-01.png",
  { width: 1280, height: 720, format: "png" }
);

await render(
  "scripts/design-sources/project-02-cover.svg",
  "public/images/projects/project-02.png",
  { width: 1280, height: 720, format: "png" }
);

console.log("Rendered: og-image.jpg, project-01.png, project-02.png");
