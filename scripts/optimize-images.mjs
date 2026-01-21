import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.join(__dirname, '..');
const IMAGES_DIR = path.join(ROOT_DIR, 'public', 'images');
const PORTRAITS_DIR = path.join(ROOT_DIR, 'public', 'portraits');

async function getFiles(dir) {
  try {
    const files = await fs.readdir(dir);
    return files.filter(f => !f.startsWith('.') && (f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg')));
  } catch (e) {
    console.error(`Error reading ${dir}:`, e);
    return [];
  }
}

async function renameChatGptFiles() {
  const files = await getFiles(IMAGES_DIR);
  const chatGptFiles = files.filter(f => f.includes('ChatGPT'));
  
  // Sort to maintain some order (optional, but good for consistency)
  chatGptFiles.sort();

  console.log(`Found ${chatGptFiles.length} ChatGPT generated files to rename.`);

  for (let i = 0; i < chatGptFiles.length; i++) {
    const oldName = chatGptFiles[i];
    const extension = path.extname(oldName);
    const newName = `beverage-visual-${String(i + 1).padStart(2, '0')}${extension}`;
    
    const oldPath = path.join(IMAGES_DIR, oldName);
    const newPath = path.join(IMAGES_DIR, newName);
    
    await fs.rename(oldPath, newPath);
    console.log(`Renamed: ${oldName} -> ${newName}`);
  }
}

async function optimizeImage(filePath, maxWidth = 1920) {
  try {
    const stat = await fs.stat(filePath);
    const originalSize = stat.size;

    // Skip if small enough (e.g. < 300KB)
    if (originalSize < 300 * 1024) {
      console.log(`Skipping ${path.basename(filePath)} (already small: ${(originalSize / 1024).toFixed(2)} KB)`);
      return;
    }

    const image = sharp(filePath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Resize if too large
    if (metadata.width > maxWidth) {
      pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
    }

    // Compress
    if (filePath.endsWith('.png')) {
      // PNG optimization: paletted if possible, or just compression
      pipeline = pipeline.png({ quality: 80, compressionLevel: 9, palette: true });
    } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
      pipeline = pipeline.jpeg({ quality: 80, mozjpeg: true });
    }

    const buffer = await pipeline.toBuffer();
    
    // Only overwrite if smaller
    if (buffer.length < originalSize) {
      await fs.writeFile(filePath, buffer);
      console.log(`Optimized ${path.basename(filePath)}: ${(originalSize / 1024 / 1024).toFixed(2)}MB -> ${(buffer.length / 1024 / 1024).toFixed(2)}MB`);
    } else {
      console.log(`Skipping ${path.basename(filePath)} (optimization did not reduce size)`);
    }

  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

async function main() {
  console.log('Starting optimization process...');

  // 1. Rename files
  await renameChatGptFiles();

  // 2. Optimize public/images
  console.log('\nOptimizing public/images...');
  const imageFiles = await getFiles(IMAGES_DIR);
  for (const file of imageFiles) {
    await optimizeImage(path.join(IMAGES_DIR, file), 1600); // 1600px max for content images
  }

  // 3. Optimize public/portraits
  console.log('\nOptimizing public/portraits...');
  const portraitFiles = await getFiles(PORTRAITS_DIR);
  for (const file of portraitFiles) {
    await optimizeImage(path.join(PORTRAITS_DIR, file), 800); // 800px max for portraits
  }

  console.log('\nDone!');
}

main();
