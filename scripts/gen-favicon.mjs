// Generates public/favicon.ico — a 32×32 Artin Studio "A" mark
// Run with: node scripts/gen-favicon.mjs

import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '../public/favicon.ico');

// Try to use the 'canvas' package; if unavailable, fall back to a pre-built SVG-based approach
let canvas, ctx;
try {
  canvas = createCanvas(32, 32);
  ctx = canvas.getContext('2d');
} catch {
  console.error('canvas package not available. Run: npm install canvas');
  process.exit(1);
}

// Background
ctx.fillStyle = '#1a1614';
ctx.beginPath();
ctx.roundRect(0, 0, 32, 32, 5);
ctx.fill();

// Orange "A"
ctx.fillStyle = '#ff7a55';
ctx.font = 'bold 28px serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'alphabetic';
ctx.fillText('A', 16, 27);

// canvas gives us a PNG buffer; wrap it in a minimal ICO
const pngBuf = canvas.toBuffer('image/png');

// ICO = ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes) + PNG data
const iconDir = Buffer.alloc(6);
iconDir.writeUInt16LE(0, 0);   // reserved
iconDir.writeUInt16LE(1, 2);   // type: 1 = ICO
iconDir.writeUInt16LE(1, 4);   // image count: 1

const entry = Buffer.alloc(16);
entry.writeUInt8(32, 0);       // width  (0 = 256, but 32 for small)
entry.writeUInt8(32, 1);       // height
entry.writeUInt8(0, 2);        // colour count
entry.writeUInt8(0, 3);        // reserved
entry.writeUInt16LE(1, 4);     // colour planes
entry.writeUInt16LE(32, 6);    // bits per pixel
entry.writeUInt32LE(pngBuf.length, 8);   // image data size
entry.writeUInt32LE(22, 12);   // offset to image data (6+16=22)

const ico = Buffer.concat([iconDir, entry, pngBuf]);
fs.writeFileSync(OUT, ico);
console.log(`✅  favicon.ico written (${ico.length} bytes)`);
