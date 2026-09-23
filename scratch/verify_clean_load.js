const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');

const OUT_DIR = 'scratch/clean_load_frames';
if (fs.existsSync(OUT_DIR)) {
  fs.readdirSync(OUT_DIR).forEach(f => fs.unlinkSync(path.join(OUT_DIR, f)));
} else {
  fs.mkdirSync(OUT_DIR, { recursive: true });
}

async function verifyPage(url, pageName) {
  console.log(`\n================ Testing ${pageName} (${url}) ================`);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'puppeteer-verify-'));
  const browser = await puppeteer.launch({
    headless: 'new',
    userDataDir: tmpDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  let frame = 0;
  let capturing = true;

  const interval = setInterval(async () => {
    if (!capturing) return;
    try {
      frame++;
      const fNum = String(frame).padStart(3, '0');
      const filename = path.join(OUT_DIR, `${pageName}_frame_${fNum}.png`);
      await page.screenshot({ path: filename });
    } catch {}
  }, 100);

  const startTime = Date.now();
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // Poll state every 100ms for 3 seconds
  for (let i = 0; i < 30; i++) {
    await new Promise(r => setTimeout(r, 100));
    const state = await page.evaluate(() => {
      const hasPreload = document.documentElement.hasAttribute('data-preload');
      const expInfo = document.querySelector('.experience_info');
      const expVisible = expInfo ? getComputedStyle(expInfo).visibility !== 'hidden' && getComputedStyle(expInfo).opacity !== '0' : false;
      const navLoading = document.querySelector('.nav-loading-item');
      const loadingVisible = navLoading ? getComputedStyle(navLoading).display !== 'none' : false;
      const canvas = document.querySelector('canvas');
      const canvasMounted = !!canvas;
      const discReady = document.querySelector('[data-disc-gallery]')?.getAttribute('data-disc-ready') === 'true';

      return { hasPreload, expVisible, loadingVisible, canvasMounted, discReady };
    });

    if (i % 5 === 0 || state.discReady) {
      console.log(`[${Date.now() - startTime}ms] preload=${state.hasPreload}, textVisible=${state.expVisible}, loadingItem=${state.loadingVisible}, discReady=${state.discReady}`);
    }

    if (state.discReady && !state.hasPreload) {
      console.log(`>>> Disc ready & page revealed at ${Date.now() - startTime}ms!`);
      break;
    }
  }

  // Wait extra 1s to capture final settled state
  await new Promise(r => setTimeout(r, 1000));
  capturing = false;
  clearInterval(interval);

  const finalState = await page.evaluate(() => {
    const navLoading = document.querySelector('.nav-loading-item');
    return {
      navLoadingDisplay: navLoading ? getComputedStyle(navLoading).display : 'none',
      filmsVisible: getComputedStyle(document.querySelector('a[href="/"], a[href="./index.html"]')).visibility,
      title: document.querySelector('[data-film-target="title"]')?.textContent,
      canvasWidth: document.querySelector('canvas')?.width,
      canvasHeight: document.querySelector('canvas')?.height
    };
  });
  console.log('Final settled state:', finalState);

  await page.screenshot({ path: path.join(OUT_DIR, `${pageName}_final.png`) });
  await browser.close();
  try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
}

async function run() {
  await verifyPage('http://localhost:3000/', 'home');
  await verifyPage('http://localhost:3000/television', 'television');
  console.log('\nAll tests complete!');
}

run().catch(console.error);
