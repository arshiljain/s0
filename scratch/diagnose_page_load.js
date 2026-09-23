const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const FRAMES_DIR = 'scratch/load_frames';
if (fs.existsSync(FRAMES_DIR)) {
  fs.readdirSync(FRAMES_DIR).forEach(f => fs.unlinkSync(path.join(FRAMES_DIR, f)));
} else {
  fs.mkdirSync(FRAMES_DIR, { recursive: true });
}

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Capturing page load frames for http://localhost:3000/ ...');
  let frame = 0;
  let capturing = true;

  const interval = setInterval(async () => {
    if (!capturing) return;
    try {
      frame++;
      const fNum = String(frame).padStart(3, '0');
      await page.screenshot({ path: path.join(FRAMES_DIR, `frame_${fNum}.png`) });
    } catch {}
  }, 100);

  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  capturing = false;
  clearInterval(interval);

  console.log(`Captured ${frame} frames!`);
  await browser.close();
}

run().catch(console.error);
