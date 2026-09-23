const fs = require('fs');
const path = require('path');

const BACKROOMS_PATH = 'production/backrooms/index.html';
const PROD_BASE = 'production';

const tvData = JSON.parse(fs.readFileSync('C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/tv_200_dataset.json', 'utf8'));
const masterTemplate = fs.readFileSync(BACKROOMS_PATH, 'utf8');

const logo5HT = `<svg xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 32 12" fill="currentColor" class="a24-logo" aria-hidden="true" focusable="false">
  <text x="0" y="10.5" font-family="'PP Neue Montreal', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="900" font-size="12" letter-spacing="-0.04em">5HT</text>
</svg>`;

// Build all 200 TV dropdown links
const allDropdownLinksHtml = tvData.map(s => {
  return `<div role="listitem" class="w-dyn-item">
    <a data-film-scroll="${s.title}" href="/production/${s.slug}" class="nav-dropdown__link w-inline-block" data-barba-prevent="">
      <div class="nav-dropdown__link-inner">
        <h2 class="nav-dropdown__link-label">${s.title}</h2><span class="nav-dropdown__link-label">${s.year}</span>
      </div>
    </a>
  </div>`;
}).join('\n');

// Build all 200 TV scroll-next items
const allScrollItemsHtml = tvData.map(s => {
  return `<div data-scroll-next-item="" role="listitem" class="w-dyn-item">
    <p data-scroll-next-field="title" class="">${s.title}</p>
    <p data-scroll-next-field="type" class="">Television</p>
    <p data-scroll-next-field="disc-art-url" class="">/images/discs/${s.slug}.webp</p>
    <p data-scroll-next-field="slug" class="">${s.slug}</p>
    <p data-scroll-next-field="year" class="">${s.year}</p>
    <p data-scroll-next-field="genre" class="">${s.genre}</p>
    <p data-scroll-next-field="runtime" class="">${s.seasons || 'Series'}</p>
  </div>`;
}).join('\n');

function buildTvPage(show, nextShow) {
  let page = masterTemplate;

  // 1. Branding & Meta
  page = page.replace(/<svg xmlns="http:\/\/www\.w3\.org\/2000\/svg" width="100%" viewBox="0 0 30 12" fill="none" class="a24-logo">[\s\S]*?<\/svg>/g, logo5HT);
  page = page.replace(/<title>.*?<\/title>/, `<title>5HT — ${show.title}</title>`);
  page = page.replace(/<meta content=".*?" name="description">/, `<meta content="${show.title} (${show.year}) — 5HT Television Series Review & Analysis" name="description">`);
  page = page.replace(/<meta content=".*?" property="og:title">/, `<meta content="5HT — ${show.title}" property="og:title">`);
  page = page.replace(/<meta content=".*?" property="og:description">/, `<meta content="${show.title} (${show.year}) — 5HT Television Series Review & Analysis" property="og:description">`);

  // Update nav menu to indicate Television active
  page = page.replace(/href="\/television" class="nav-link w-inline-block"/, 'href="/television" aria-current="page" class="nav-link w-inline-block w--current"');
  page = page.replace(/href="\/" aria-current="page" class="nav-link w-inline-block w--current"/, 'href="/" class="nav-link w-inline-block"');

  // Insert header search if missing
  const searchLiHtml = `              <li class="nav-search-li" style="position: relative; display: flex; align-items: center; margin-right: 4px;">
                <div class="nav-search-bar" style="display: flex; align-items: center; position: relative; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 4px; padding: 0 8px; height: 26px;">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgba(255, 255, 255, 0.45); margin-right: 6px; flex-shrink: 0;">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input type="text" id="header-archive-search" placeholder="Search..." autocomplete="off" spellcheck="false" style="background: transparent; border: none; outline: none; color: #fff; font-family: 'PP Neue Montreal', sans-serif; font-size: 12px; width: 100px;">
                </div>
              </li>
              <li><button data-dropdown-toggle=""`;

  if (!page.includes('id="header-archive-search"')) {
    page = page.replace(/<li><button data-dropdown-toggle=""/i, searchLiHtml);
  }

  // Remove old dropdown search if present
  page = page.replace(/<div style="padding: 14px 20px; position: sticky; top: 0;[\s\S]*?<\/script>\s*<div class="nav-dropdown__content/i, '<div class="nav-dropdown__content');

  // Nav Dropdown (all 200 TV shows)
  const fullDropdownInner = `<div role="list" class="nav-dropdown__films w-dyn-items">\n<div role="list" class="nav-dropdown__content-li w-dyn-items">\n${allDropdownLinksHtml}\n</div>\n</div>`;
  page = page.replace(/<div role="list" class="nav-dropdown__films w-dyn-items">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<div class="nav-dropdown__scrollbar">/, `${fullDropdownInner}\n</div>\n</div>\n</div>\n<div class="nav-dropdown__scrollbar">`);

  // 2. Section 1: Hero
  page = page.replace(
    /<h1 space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="2" data-reserve-lines="2" data-reveal="lines" class="custom-element heading-l text-align-center">.*?<\/h1>/,
    `<h1 space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="2" data-reserve-lines="2" data-reveal="lines" class="custom-element heading-l text-align-center">${show.title}</h1>`
  );

  // Credits
  const starringItemsHtml = (show.starring || '').split(',').map(s => {
    return `<div role="listitem" class="w-dyn-item"><p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">${s.trim()}</p></div>`;
  }).join('');

  const creditsBlockHtml = `<div data-wrap-balance="2" data-wrap-flow="" class="production__credits">
                  <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">CREATED BY</p>
                  <div class="w-dyn-list">
                    <div role="list" class="credits-item__list w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">${show.creators || 'Showrunner'}</p>
                      </div>
                    </div>
                  </div>
                  <p space-top="" space-bottom="" data-film-target="" style="margin-left: 0.5em;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">NETWORK</p>
                  <div class="w-dyn-list">
                    <div role="list" class="credits-item__list w-dyn-items">
                      <div role="listitem" class="w-dyn-item">
                        <p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">${show.network || 'Television'}</p>
                      </div>
                    </div>
                  </div>
                  <p space-top="" space-bottom="" data-film-target="" style="margin-left: 0.5em;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">STARRING</p>
                  <div class="w-dyn-list">
                    <div role="list" class="credits-item__list w-dyn-items">
                      ${starringItemsHtml}
                    </div>
                  </div>
                </div>`;

  page = page.replace(/<div data-wrap-balance="2" data-wrap-flow="" class="production__credits">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>/, creditsBlockHtml);

  // Metadata
  const metadataBlockHtml = `<div class="production__metadata">
                  <div class="production-metadata__item">
                    <div data-reveal="rule" class="divider-horizontal"></div>
                    <div class="metadata-item__content">
                      <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">YEAR</p>
                      <p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">${show.year}</p>
                    </div>
                  </div>
                  <div class="production-metadata__item">
                    <div data-reveal="rule" class="divider-horizontal"></div>
                    <div class="metadata-item__content">
                      <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">GENRE</p>
                      <p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">${show.genre}</p>
                    </div>
                  </div>
                  <div class="production-metadata__item">
                    <div data-reveal="rule" class="divider-horizontal"></div>
                    <div class="metadata-item__content">
                      <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">FORMAT</p>
                      <p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">Television Series</p>
                    </div>
                  </div>
                  <div class="production-metadata__item">
                    <div data-reveal="rule" class="divider-horizontal"></div>
                    <div class="metadata-item__content">
                      <p space-top="" space-bottom="" data-film-target="" style="" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element subheading-xs">SEASONS</p>
                      <p space-top="" space-bottom="" data-film-target="" style="line-height: 1;" data-balance-lines="" data-reserve-lines="" data-reveal="text" class="custom-element paragraph-m">${show.seasons || 'Series'}</p>
                    </div>
                  </div>
                </div>`;

  page = page.replace(/<div class="production__metadata">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/, metadataBlockHtml);

  // 3. Section 2: Trailer 4K Backdrop Still + Quote + Watch Trailer CTA
  const trailerId = show.trailerId || 'HhesaQXLuRY';
  const trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`;
  const trailerHtml = `<section data-theme-change="nav:base" class="trailer theme-dark">
          <div data-dissolve-bleed="" data-parallax="trigger" class="trailer__vh">
            <img src="/images/backdrops/${show.slug}.jpg" style="object-fit: cover; position: absolute; height: 130%; width: 100%; top: -15%; filter: brightness(0.65) contrast(1.08);" data-parallax="target" data-parallax-start="-10" data-parallax-end="10" draggable="false" class="img" alt="${show.title} — 4K television still" decoding="async">
            <div class="container">
              <div data-trailer-quote="" class="trailer__content">
                <div class="trailer-content__row">
                  <p space-top="" space-bottom="" style="" data-trailer-quote-text="" class="custom-element heading-l">"${show.quote || 'An unforgettable television masterpiece.'}"</p>
                  <div class="divider-horizontal"></div>
                </div>
                <div class="trailer-content__row">
                  <div class="divider-horizontal"></div>
                </div>
                <div class="trailer-content__row">
                  <div class="divider-horizontal"></div>
                  <a data-trailer-src="${trailerUrl}" data-reveal="btn" data-hover="" data-trailer-quote-btn="" href="${trailerUrl}" target="_blank" class="btn w-inline-block">
                    <div class="btn__divider"></div><span class="btn__p-mask"><span space-top="" space-bottom="" style="" class="btn__p heading-s">WATCH TRAILER</span></span>
                    <div class="btn__divider"></div>
                  </a>
                </div>
                <div class="trailer-content__row">
                  <div class="divider-horizontal"></div>
                </div>
              </div>
            </div>
          </div>
        </section>`;

  page = page.replace(/<section data-theme-change="nav:base" class="trailer theme-dark">[\s\S]*?<\/section>/, trailerHtml);

  // 4. Section 3: 3D Disc Section
  page = page.replace(
    /<div data-disc="canvas" class="disc-canvas"><\/div>/,
    `<div data-disc="canvas" class="disc-canvas" data-disc-texture="/images/discs/${show.slug}.webp"></div>`
  );
  page = page.replace(/data-disc-art-url=".*?"/, `data-disc-art-url="/images/discs/${show.slug}.webp"`);

  // 5. Section 4: Next Pick
  const nextTarget = nextShow || tvData[0];
  page = page.replace(/data-scroll-next-pick=".*?"/, `data-scroll-next-pick="${nextTarget.title}"`);
  page = page.replace(/href="\/production\/[^"]*?"(?=\s*class="scroll-next__link)/, `href="/production/${nextTarget.slug}"`);
  page = page.replace(/<div role="list" class="scroll-next-data__list w-dyn-items">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*<\/section>/, `<div role="list" class="scroll-next-data__list w-dyn-items">\n${allScrollItemsHtml}\n</div>\n</div>\n</div>\n</div>\n</section>`);

  return page;
}

console.log(`Generating production pages for all ${tvData.length} TV series...`);
for (let i = 0; i < tvData.length; i++) {
  const show = tvData[i];
  const nextShow = tvData[(i + 1) % tvData.length];
  const showDir = path.join(PROD_BASE, show.slug);
  if (!fs.existsSync(showDir)) fs.mkdirSync(showDir, { recursive: true });

  const html = buildTvPage(show, nextShow);
  fs.writeFileSync(path.join(showDir, 'index.html'), html, 'utf8');

  if ((i + 1) % 25 === 0 || i + 1 === tvData.length) {
    console.log(`[TV Pages] Generated ${i + 1}/${tvData.length} production pages...`);
  }
}

console.log('Finished generating all 200 TV production pages!');
