const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function test() {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'puppeteer-test-'));
  const browser = await puppeteer.launch({
    headless: 'new',
    userDataDir: tmpDir,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('Navigating to http://localhost:3000/ ...');
  await page.goto('http://localhost:3000/', { waitUntil: 'domcontentloaded' });

  for (let sec = 1; sec <= 5; sec++) {
    await new Promise(r => setTimeout(r, 1000));
    await page.screenshot({ path: `scratch/time_${sec}s.png` });
    const hasPreload = await page.evaluate(() => document.documentElement.hasAttribute('data-preload'));
    const canvasExists = await page.evaluate(() => !!document.querySelector('canvas'));
    console.log(`At ${sec}s: data-preload=${hasPreload}, canvas=${canvasExists}`);
  }

  await browser.close();
  try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch {}
  console.log('Done!');
}

test().catch(console.error);
