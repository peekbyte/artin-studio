import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const INPUT_DIR = './public/images';
const OUTPUT_DIR = './public/images/optimized';
const THUMBNAIL_WIDTH = 600; // Width for gallery thumbnails
const QUALITY = 80;

async function optimizeImages() {
  // Create output directory
  if (!existsSync(OUTPUT_DIR)) {
    await mkdir(OUTPUT_DIR, { recursive: true });
  }

  const files = await readdir(INPUT_DIR);
  const imageFiles = files.filter(f => 
    /\.(jpg|jpeg|png|webp)$/i.test(f) && !f.startsWith('.')
  );

  console.log(`Found ${imageFiles.length} images to optimize...\n`);

  let totalSaved = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(INPUT_DIR, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(OUTPUT_DIR, outputName);

    try {
      const inputStats = await sharp(inputPath).metadata();
      
      await sharp(inputPath)
        .resize(THUMBNAIL_WIDTH, null, {
          withoutEnlargement: true,
          fit: 'inside'
        })
        .webp({ quality: QUALITY })
        .toFile(outputPath);

      const outputStats = await sharp(outputPath).metadata();
      const inputSize = inputStats.size / 1024;
      const outputSize = outputStats.size / 1024;
      const saved = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  ${(inputSize / 1024).toFixed(1)}MB → ${outputSize.toFixed(0)}KB (${saved}% smaller)\n`);
      
      totalSaved += inputSize - outputSize;
    } catch (err) {
      console.error(`✗ ${file}: ${err.message}`);
    }
  }

  console.log(`\n✅ Done! Total saved: ${(totalSaved / 1024).toFixed(1)}MB`);
  console.log(`\nOptimized images saved to: ${OUTPUT_DIR}`);
  console.log('\nTo use them, update Photography.astro to use /images/optimized/');
}

optimizeImages();
