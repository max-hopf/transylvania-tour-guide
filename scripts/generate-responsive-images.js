// scripts/generate-responsive-images.js
// Generates responsive images (400w, 800w, 1600w) and WebP for all PNG/JPG in src/assets
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../src/assets');
const sizes = [400, 800, 1600];
const exts = ['.jpg', '.jpeg', '.png'];

function getAllImages(dir) {
  return fs.readdirSync(dir).flatMap(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      return getAllImages(fullPath);
    }
    if (exts.includes(path.extname(file).toLowerCase())) {
      return [fullPath];
    }
    return [];
  });
}

function outputName(imgPath, size, format) {
  const { dir, name } = path.parse(imgPath);
  return path.join(dir, `${name}-${size}w.${format}`);
}

async function processImage(imgPath) {
  const img = sharp(imgPath);
  const metadata = await img.metadata();
  for (const size of sizes) {
    if (metadata.width > size) {
      // Resize and save as original format
      await img.resize(size).toFile(outputName(imgPath, size, metadata.format));
      // Resize and save as webp
      await img.resize(size).webp({ quality: 80 }).toFile(outputName(imgPath, size, 'webp'));
    }
  }
  // Also save webp at original size
  await img.webp({ quality: 80 }).toFile(imgPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
}

async function main() {
  const images = getAllImages(inputDir);
  for (const imgPath of images) {
    await processImage(imgPath);
    console.log(`Processed: ${imgPath}`);
  }
}

main().catch(console.error);
