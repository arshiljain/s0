const puppeteer = require('puppeteer');

async function test() {
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  console.log('--- TEST RELOAD 1 ---');
  await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));
  
  const movie1 = await page.evaluate(() => {
    const titleEl = document.querySelector('[data-film-title]') || document.querySelector('.film-meta__title') || document.querySelector('h1');
    const firstListTitle = document.querySelector('[data-film-list] [data-film-field="title"]')?.textContent;
    return {
      displayedTitle: titleEl ? titleEl.textContent.trim() : null,
      firstListTitle: firstListTitle
    };
  });
  console.log('Reload 1 film:', movie1);
  await page.screenshot({ path: 'scratch/shuffle_reload_1.png' });

  console.log('--- TEST RELOAD 2 ---');
  await page.reload({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 1500));

  const movie2 = await page.evaluate(() => {
    const titleEl = document.querySelector('[data-film-title]') || document.querySelector('.film-meta__title') || document.querySelector('h1');
    const firstListTitle = document.querySelector('[data-film-list] [data-film-field="title"]')?.textContent;
    return {
      displayedTitle: titleEl ? titleEl.textContent.trim() : null,
      firstListTitle: firstListTitle
    };
  });
  console.log('Reload 2 film:', movie2);
  await page.screenshot({ path: 'scratch/shuffle_reload_2.png' });

  console.log('--- TEST HEADER SEARCH ---');
  await page.type('#header-archive-search', 'Batman');
  await new Promise(r => setTimeout(r, 800));

  const searchFlyout = await page.evaluate(() => {
    const flyout = document.getElementById('header-search-results');
    const items = Array.from(document.querySelectorAll('#header-search-list a')).map(a => a.textContent.trim());
    return {
      display: flyout ? flyout.style.display : null,
      resultsCount: items.length,
      sampleResults: items.slice(0, 5)
    };
  });
  console.log('Search Flyout Status:', searchFlyout);
  await page.screenshot({ path: 'scratch/header_search_active.png' });

  await browser.close();
}

test().catch(console.error);
