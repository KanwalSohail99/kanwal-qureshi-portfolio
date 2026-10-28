/** Generate the site's small typographic KS app and browser icons. */
import sharp from "sharp";
import { readFileSync, writeFileSync } from "node:fs";

const svg = readFileSync("public/favicon.svg");

async function png(size, path) {
  const buf = await sharp(svg, { density: 300 }).resize(size, size).png().toBuffer();
  if (path) writeFileSync(path, buf);
  return buf;
}

await png(512, "public/icon-512.png");
await png(192, "public/icon-192.png");
await png(180, "public/apple-touch-icon.png");

const png32 = await png(32);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(1, 4);
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);
entry.writeUInt8(32, 1);
entry.writeUInt16LE(1, 4);
entry.writeUInt16LE(32, 6);
entry.writeUInt32LE(png32.length, 8);
entry.writeUInt32LE(22, 12);
writeFileSync("public/favicon.ico", Buffer.concat([header, entry, png32]));

console.log("Generated KS app and browser icons.");
