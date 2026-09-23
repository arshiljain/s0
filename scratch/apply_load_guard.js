const fs = require('fs');

function updateHtml(filePath) {
  console.log('Updating', filePath);
  let html = fs.readFileSync(filePath, 'utf8');

  // 1. Ensure <html lang="en" data-preload="">
  html = html.replace(/<html lang="en">/g, '<html lang="en" data-preload="">');
  if (!html.includes('<html lang="en" data-preload="">') && html.includes('<html lang="en"')) {
    html = html.replace(/<html lang="en"[^>]*>/, '<html lang="en" data-preload="">');
  }

  // 2. Ensure preload-guard-script and first-paint-guard are in <head>
  const guardMarkup = `  <script id="preload-guard-script">
    (function () {
      if (!/^\/(television\/?)?$/.test(location.pathname)) return;
      if (matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      document.documentElement.setAttribute("data-preload", "");
      setTimeout(function () {
        document.documentElement.removeAttribute("data-preload");
      }, 15000);
    })();
  </script>
  <style id="first-paint-guard">
    html[data-preload] body .nav :is(.nav-bg, .nav-center__list > li:not(.nav-loading-item):not(:has(.nav-logo))),
    html[data-preload] body :is(.experience_info, .testimonial_wrap, .experience_credit, .film-meta) {
      visibility: hidden !important;
      opacity: 0 !important;
    }
    html:not([data-preload]) .nav-loading-item {
      display: none !important;
    }
    html[data-preload] main[data-barba="container"] {
      pointer-events: none;
    }
  </style>`;

  // Replace existing first-paint-guard or insert new
  if (html.includes('id="first-paint-guard"')) {
    html = html.replace(/<script id="preload-guard-script">[\s\S]*?<\/style>/, guardMarkup);
  } else {
    const viewportTag = '<meta content="width=device-width, initial-scale=1" name="viewport">';
    if (html.includes(viewportTag)) {
      html = html.replace(viewportTag, `${viewportTag}\n${guardMarkup}`);
    } else {
      html = html.replace('<head>', `<head>\n${guardMarkup}`);
    }
  }

  // 3. Ensure nav-loading-item is right after nav-logo <li>
  const navLoadingItem = `              <li class="nav-loading-item" aria-live="polite" aria-hidden="false"><span class="nav-link nav-loading"><span class="nav-link__label">Projecting</span><span class="nav-loading__spinner" aria-hidden="true"></span></span></li>`;
  
  if (!html.includes('class="nav-loading-item"')) {
    const logoRegex = /(<a[^>]*class="nav-logo[^"]*"[^>]*>[\s\S]*?<\/a>\s*<\/li>)/;
    html = html.replace(logoRegex, `$1\n${navLoadingItem}`);
  }

  // 4. Update archive-disc-shuffler to synchronize experience_info on shuffle
  const shufflerCode = `<script id="archive-disc-shuffler">
(function() {
  function shuffleDiscs() {
    var list = document.querySelector('[data-film-list] .w-dyn-items') || document.querySelector('[data-film-list]');
    if (!list) return;
    var items = Array.from(list.children).filter(function(el) {
      return el.hasAttribute('data-film-item') || el.classList.contains('w-dyn-item');
    });
    if (items.length <= 1) return;
    for (var i = items.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = items[i];
      items[i] = items[j];
      items[j] = temp;
    }
    items.forEach(function(item) {
      list.appendChild(item);
    });

    // Synchronize first item into experience_info so DOM is ready when unmasked
    try {
      var first = items[0];
      if (!first) return;
      var titleEl = first.querySelector('[data-film-field="title"]');
      var directorEl = first.querySelector('[data-film-field="directors"]');
      var yearEl = first.querySelector('[data-film-field="year"]');
      var starringEls = Array.from(first.querySelectorAll('[data-film-field="starring"]'));
      var quoteEl = first.querySelector('[data-film-field="testimonial-quote"]') || first.querySelector('[data-film-field="quote"]');

      var targetTitle = document.querySelector('[data-film-target="title"]');
      if (targetTitle && titleEl) targetTitle.textContent = titleEl.textContent;

      var targetDir = document.querySelector('[data-film-target="primary-credit"]');
      if (targetDir && directorEl) targetDir.textContent = directorEl.textContent;

      var targetYear = document.querySelector('[data-film-target="year"]');
      if (targetYear && yearEl) targetYear.textContent = yearEl.textContent;

      var targetRatings = document.querySelectorAll('[data-film-target="secondary-credit"]');
      if (targetRatings.length && starringEls.length) {
        targetRatings.forEach(function(r, idx) {
          if (starringEls[idx]) r.textContent = starringEls[idx].textContent;
        });
      }

      var targetQuote = document.querySelector('[data-film-target="testimonial-quote"]');
      if (targetQuote && quoteEl) targetQuote.textContent = quoteEl.textContent;
    } catch (e) {
      console.error('Shuffler sync error:', e);
    }
  }
  shuffleDiscs();
})();
</script>`;

  if (html.includes('id="archive-disc-shuffler"')) {
    html = html.replace(/<script id="archive-disc-shuffler">[\s\S]*?<\/script>/, shufflerCode);
  }

  fs.writeFileSync(filePath, html, 'utf8');
  console.log('Successfully updated', filePath);
}

updateHtml('index.html');
updateHtml('television/index.html');
