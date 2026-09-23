const fs = require('fs');

const file = 'index.html';
let html = fs.readFileSync(file, 'utf8');

// 1. Remove old search inside dropdown
html = html.replace(/<div style="padding: 14px 20px; position: sticky; top: 0;[\s\S]*?<\/script>\s*<div class="nav-dropdown__content/i, '<div class="nav-dropdown__content');

// 2. Add new header search item to the left of the Index button
const searchLiHtml = `              <li class="nav-search-li" style="position: relative; display: flex; align-items: center; margin-right: 4px;">
                <div class="nav-search-bar" style="display: flex; align-items: center; position: relative; background: rgba(255, 255, 255, 0.06); border: 1px solid rgba(255, 255, 255, 0.16); border-radius: 4px; padding: 0 8px; height: 26px; transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="color: rgba(255, 255, 255, 0.45); margin-right: 6px; flex-shrink: 0;">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  </svg>
                  <input type="text" id="header-archive-search" placeholder="Search..." autocomplete="off" spellcheck="false" style="background: transparent; border: none; outline: none; color: #fff; font-family: 'PP Neue Montreal', -apple-system, BlinkMacSystemFont, sans-serif; font-size: 12px; letter-spacing: 0.02em; width: 100px; transition: width 0.25s cubic-bezier(0.16, 1, 0.3, 1);">
                  <button type="button" id="header-archive-clear" aria-label="Clear search" style="display: none; background: transparent; border: none; color: rgba(255,255,255,0.4); font-size: 11px; cursor: pointer; padding: 0 2px; line-height: 1;">✕</button>
                </div>
                <div id="header-search-results" style="display: none; position: absolute; top: calc(100% + 8px); right: 0; width: 320px; max-height: 380px; overflow-y: auto; background: rgba(12, 14, 18, 0.97); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.14); border-radius: 6px; box-shadow: 0 16px 40px rgba(0, 0, 0, 0.8); z-index: 1000; padding: 6px 0;">
                  <div id="header-search-empty" style="display: none; padding: 14px 18px; color: rgba(255,255,255,0.4); font-family: 'PP Neue Montreal', sans-serif; font-size: 12px; text-align: center;">No matches found</div>
                  <div id="header-search-list"></div>
                </div>
              </li>
              <li><button data-dropdown-toggle=""`;

if (!html.includes('id="header-archive-search"')) {
  html = html.replace(/<li><button data-dropdown-toggle=""/i, searchLiHtml);
}

// 3. Add shuffler script right before </main> or before the module script
const shuffleScript = `
<script id="archive-disc-shuffler">
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
  }
  shuffleDiscs();
})();
</script>
`;

if (!html.includes('id="archive-disc-shuffler"')) {
  // Place before module script
  html = html.replace('<script type="module" src="/_astro/ExportPage', shuffleScript + '\n<script type="module" src="/_astro/ExportPage');
}

// 4. Add interactive script for header search
const searchInteractionScript = `
<script id="header-search-engine">
document.addEventListener('DOMContentLoaded', function() {
  var input = document.getElementById('header-archive-search');
  var clearBtn = document.getElementById('header-archive-clear');
  var flyout = document.getElementById('header-search-results');
  var list = document.getElementById('header-search-list');
  var empty = document.getElementById('header-search-empty');
  var bar = document.querySelector('.nav-search-bar');
  if (!input || !flyout) return;

  input.addEventListener('focus', function() {
    input.style.width = '160px';
    if (bar) bar.style.borderColor = 'rgba(255, 255, 255, 0.4)';
    if (input.value.trim().length > 0) flyout.style.display = 'block';
  });

  input.addEventListener('blur', function() {
    setTimeout(function() {
      if (!input.value.trim()) {
        input.style.width = '100px';
        if (bar) bar.style.borderColor = 'rgba(255, 255, 255, 0.16)';
      }
    }, 200);
  });

  document.addEventListener('click', function(e) {
    if (!e.target.closest('.nav-search-li')) {
      flyout.style.display = 'none';
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      flyout.style.display = 'none';
      input.blur();
    }
  });

  clearBtn.addEventListener('click', function() {
    input.value = '';
    clearBtn.style.display = 'none';
    flyout.style.display = 'none';
    input.focus();
  });

  input.addEventListener('input', function() {
    var q = input.value.trim().toLowerCase();
    if (!q) {
      clearBtn.style.display = 'none';
      flyout.style.display = 'none';
      return;
    }
    clearBtn.style.display = 'inline-block';
    
    // Search through all dropdown links or films
    var items = document.querySelectorAll('.nav-dropdown__link');
    var matches = [];
    var seen = new Set();

    items.forEach(function(item) {
      var titleEl = item.querySelector('.nav-dropdown__link-label');
      var title = titleEl ? titleEl.textContent.trim() : '';
      if (!title || seen.has(title.toLowerCase())) return;
      if (title.toLowerCase().includes(q)) {
        seen.add(title.toLowerCase());
        var href = item.getAttribute('href') || '#';
        var yearEl = item.querySelectorAll('.nav-dropdown__link-label')[1];
        var year = yearEl ? yearEl.textContent.trim() : '';
        matches.push({ title: title, year: year, href: href });
      }
    });

    list.innerHTML = '';
    if (matches.length === 0) {
      empty.style.display = 'block';
    } else {
      empty.style.display = 'none';
      matches.slice(0, 15).forEach(function(m) {
        var row = document.createElement('a');
        row.href = m.href;
        row.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 10px 18px; text-decoration: none; color: #fff; font-family: "PP Neue Montreal", sans-serif; font-size: 13px; border-bottom: 1px solid rgba(255,255,255,0.05); transition: background 0.15s;';
        row.onmouseenter = function() { row.style.background = 'rgba(255,255,255,0.08)'; };
        row.onmouseleave = function() { row.style.background = 'transparent'; };
        
        var left = document.createElement('span');
        left.textContent = m.title;
        left.style.fontWeight = '500';
        
        var right = document.createElement('span');
        right.textContent = m.year;
        right.style.color = 'rgba(255,255,255,0.4)';
        right.style.fontSize = '12px';
        
        row.appendChild(left);
        row.appendChild(right);
        list.appendChild(row);
      });
    }
    flyout.style.display = 'block';
  });
});
</script>
`;

if (!html.includes('id="header-search-engine"')) {
  html = html.replace('</body>', searchInteractionScript + '\n</body>');
}

fs.writeFileSync(file, html, 'utf8');
console.log('index.html updated successfully with header search and shuffler!');
