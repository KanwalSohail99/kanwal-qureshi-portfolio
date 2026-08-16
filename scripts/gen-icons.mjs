/**
 * Renders the K monogram favicon.svg into all required raster icons:
 * icon-512.png, icon-192.png, apple-touch-icon.png (180), and a valid
 * favicon.ico (PNG-in-ICO container, 32px). Run: node scripts/gen-icons.mjs
 */
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

// Build ICO container embedding a 32px PNG (valid for all modern browsers)
const png32 = await png(32);
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // type: icon
header.writeUInt16LE(1, 4); // count
const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0); // width
entry.writeUInt8(32, 1); // height
entry.writeUInt8(0, 2); // palette
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bits per pixel
entry.writeUInt32LE(png32.length, 8); // data size
entry.writeUInt32LE(22, 12); // data offset
writeFileSync("public/favicon.ico", Buffer.concat([header, entry, png32]));

console.log("Icons generated: 512, 192, 180 (apple), favicon.ico");
