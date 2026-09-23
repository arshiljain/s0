const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const ARTIFACTS_DIR = 'C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e';

async function run() {
  console.log('Launching browser for comprehensive verification...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  // 1. Test Homepage reload & shuffle
  console.log('--- TEST 1: Homepage Shuffle ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_home_shuffle_1.png') });

  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_home_shuffle_2.png') });
  console.log('Homepage shuffle screenshots captured.');

  // 2. Test Television page 3D carousel & shuffle
  console.log('--- TEST 2: Television 3D Carousel ---');
  await page.goto('http://localhost:3000/television', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_tv_carousel_1.png') });

  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2500));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_tv_carousel_2.png') });
  console.log('Television carousel screenshots captured.');

  // 3. Test Header Search Bar on Television
  console.log('--- TEST 3: Header Search on Television ---');
  await page.type('#header-archive-search', 'Breaking');
  await new Promise(r => setTimeout(r, 800));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_header_search_breaking.png') });
  console.log('Header search test captured.');

  // 4. Test TV Production Page Trailer (Breaking Bad)
  console.log('--- TEST 4: Breaking Bad Trailer Lightbox ---');
  await page.goto('http://localhost:3000/production/breaking-bad', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_tv_production_breaking_bad.png') });

  const tvTrailerBtn = await page.$('[data-trailer-quote-btn]');
  if (tvTrailerBtn) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await new Promise(r => setTimeout(r, 800));
    await tvTrailerBtn.click();
    console.log('Clicked Breaking Bad watch trailer button...');
    await new Promise(r => setTimeout(r, 2500));

    const lbStatus = await page.evaluate(() => {
      const lb = document.querySelector('[data-trailer-lightbox]');
      const iframes = document.querySelectorAll('iframe');
      return {
        status: lb ? lb.getAttribute('data-trailer-status') : null,
        iframeSrc: iframes.length > 0 ? iframes[0].src : null
      };
    });
    console.log('Breaking Bad trailer status:', lbStatus);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_tv_trailer_lightbox_breaking_bad.png') });
  }

  // 5. Test Movie Production Page Trailer (Oppenheimer)
  console.log('--- TEST 5: Oppenheimer Trailer Lightbox ---');
  await page.goto('http://localhost:3000/production/oppenheimer', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  const movieTrailerBtn = await page.$('[data-trailer-quote-btn]');
  if (movieTrailerBtn) {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await new Promise(r => setTimeout(r, 800));
    await movieTrailerBtn.click();
    console.log('Clicked Oppenheimer watch trailer button...');
    await new Promise(r => setTimeout(r, 2500));

    const lbStatus = await page.evaluate(() => {
      const lb = document.querySelector('[data-trailer-lightbox]');
      const iframes = document.querySelectorAll('iframe');
      return {
        status: lb ? lb.getAttribute('data-trailer-status') : null,
        iframeSrc: iframes.length > 0 ? iframes[0].src : null
      };
    });
    console.log('Oppenheimer trailer status:', lbStatus);
    await page.screenshot({ path: path.join(ARTIFACTS_DIR, 'live_movie_trailer_lightbox_oppenheimer.png') });
  }

  await browser.close();
  console.log('Comprehensive verification complete!');
}

run().catch(console.error);
