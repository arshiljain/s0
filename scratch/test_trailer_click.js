const fs = require('fs');
const puppeteer = require('puppeteer');

async function test() {
  const filePath = 'production/the-dark-knight/index.html';
  let html = fs.readFileSync(filePath, 'utf8');
  // Update data-trailer-src to official Dark Knight trailer
  html = html.replace(/data-trailer-src="[^"]*"/g, 'data-trailer-src="https://www.youtube.com/watch?v=EXeTwQWrcwY"');
  fs.writeFileSync(filePath, html, 'utf8');

  console.log('Updated The Dark Knight trailer URL. Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  await page.goto('http://localhost:3000/production/the-dark-knight', { waitUntil: 'networkidle2' });

  // Find trailer trigger button
  const trigger = await page.$('[data-trailer-quote-btn]');
  console.log('Found trailer quote btn:', !!trigger);

  if (trigger) {
    await page.evaluate(() => {
      window.scrollTo(0, document.body.scrollHeight / 2);
    });
    await new Promise(r => setTimeout(r, 1000));
    await trigger.click();
    console.log('Clicked watch trailer button');
    await new Promise(r => setTimeout(r, 2000));

    const status = await page.evaluate(() => {
      const lb = document.querySelector('[data-trailer-lightbox]');
      const iframes = document.querySelectorAll('iframe');
      return {
        lightboxStatus: lb ? lb.getAttribute('data-trailer-status') : null,
        iframeCount: iframes.length,
        iframeSrc: iframes.length > 0 ? iframes[0].src : null
      };
    });
    console.log('Lightbox test status:', status);

    await page.screenshot({ path: 'scratch/trailer_lightbox_dark_knight.png' });
  }

  await browser.close();
}

test().catch(console.error);
