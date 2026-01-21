import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const VIDEO_DIR = path.join(__dirname, '..', 'public', 'videos');

function isFfmpegInstalled() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

async function optimizeVideos() {
  if (!isFfmpegInstalled()) {
    console.error('Error: ffmpeg is not installed. Please install it (e.g., brew install ffmpeg) to run this script.');
    return;
  }

  const files = fs.readdirSync(VIDEO_DIR).filter(f => f.endsWith('.mp4'));

  console.log(`Found ${files.length} videos to optimize.`);

  for (const file of files) {
    const inputPath = path.join(VIDEO_DIR, file);
    const outputPath = path.join(VIDEO_DIR, `${path.parse(file).name}-opt.mp4`);

    console.log(`\nOptimizing ${file}...`);

    try {
      // -an: Remove audio (background videos usually don't need it)
      // -vcodec libx264: Standard H.264
      // -crf 28: Good balance of quality/size
      // -preset slow: Better compression (takes more time but results in smaller file)
      // -vf scale: Max width 1920, height proportional (must be even)
      execSync(`ffmpeg -i "${inputPath}" -an -vcodec libx264 -crf 28 -preset slow -vf "scale='min(1920,iw)':-2" -y "${outputPath}"`, { stdio: 'inherit' });

      const oldSize = fs.statSync(inputPath).size;
      const newSize = fs.statSync(outputPath).size;

      if (newSize < oldSize) {
        fs.renameSync(outputPath, inputPath);
        console.log(`Successfully optimized ${file}:`);
        console.log(`  ${(oldSize / 1024 / 1024).toFixed(2)}MB -> ${(newSize / 1024 / 1024).toFixed(2)}MB (${(((oldSize - newSize) / oldSize) * 100).toFixed(1)}% reduction)`);
      } else {
        fs.unlinkSync(outputPath);
        console.log(`Skipping ${file}: Original is already smaller than optimized version.`);
      }
    } catch (error) {
      console.error(`Error optimizing ${file}:`, error.message);
    }
  }

  console.log('\nVideo optimization process finished.');
}

optimizeVideos();
