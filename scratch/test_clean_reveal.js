const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');

const OUT_DIR = 'scratch/verification_screenshots';
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

async function testPage(url, prefix) {
  console.log(`\nTesting ${prefix} at ${url}...`);
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'verify-'));
  const browser = await puppeteer.launch({
    headless: 'new',
    userDataDir: tmpDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // Navigate
  await page.goto(url, { waitUntil: 'domcontentloaded' });

  // 1. Capture during loading (within 200ms)
  await new Promise(r => setTimeout(r, 200));
  const midLoad = await page.evaluate(() => {
    const hasPreload = document.documentElement.hasAttribute('data-preload');
    const expInfo = document.querySelector('.experience_info');
    const textVis = expInfo ? getComputedStyle(expInfo).visibility : 'none';
    const navLoading = document.querySelector('.nav-loading-item');
    const loadingVis = navLoading ? getComputedStyle(navLoading).display : 'none';
    return { hasPreload, textVis, loadingVis };
  });
  console.log(`[Loading phase] data-preload=${midLoad.hasPreload}, textVis=${midLoad.textVis}, loadingVis=${midLoad.loadingVis}`);
  await page.screenshot({ path: path.join(OUT_DIR, `${prefix}_1_loading.png`) });

  // 2. Wait until disc is ready
  console.log('Waiting for disc ready...');
  await page.waitForFunction(() => {
    const gallery = document.querySelector('[data-disc-gallery]');
    return gallery && gallery.getAttribute('data-disc-ready') === 'true';
  }, { timeout: 15000 });

  const readyState = await page.evaluate(() => {
    const hasPreload = document.documentElement.hasAttribute('data-preload');
    const expInfo = document.querySelector('.experience_info');
    const textVis = expInfo ? getComputedStyle(expInfo).visibility : 'none';
    const navLoading = document.querySelector('.nav-loading-item');
    const loadingVis = navLoading ? getComputedStyle(navLoading).display : 'none';
    const title = document.querySelector('[data-film-target="title"]')?.textContent;
    return { hasPreload, textVis, loadingVis, title };
  });
  console.log(`[Disc ready phase] data-preload=${readyState.hasPreload}, textVis=${readyState.textVis}, loadingVis=${readyState.loadingVis}, title="${readyState.title}"`);
  await page.screenshot({ path: path.join(OUT_DIR, `${prefix}_2_revealed.png`) });

  // 3. Settled state (500ms after reveal)
  await new Promise(r => setTimeout(r, 500));
  await page.screenshot({ path: path.join(OUT_DIR, `${prefix}_3_settled.png`) });
  console.log(`Captured all screenshots for ${prefix}!`);

  await browser.close();
  try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
}

async function run() {
  await testPage('http://localhost:3000/', 'home');
  await testPage('http://localhost:3000/television', 'television');
  console.log('\nAll done!');
}

run().catch(console.error);
