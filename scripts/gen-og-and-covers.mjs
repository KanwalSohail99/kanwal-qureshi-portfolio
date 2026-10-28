/** Generate the site's social-sharing image from its editable SVG source. */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync("scripts/design-sources/og-image.svg");
const image = await sharp(svg, { density: 300 })
  .resize(1200, 630)
  .jpeg({ quality: 90 })
  .toBuffer();

writeFileSync("public/images/og/og-image.jpg", image);
console.log("Rendered: public/images/og/og-image.jpg");
