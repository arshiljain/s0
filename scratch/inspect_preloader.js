const fs = require('fs');

const html = fs.readFileSync('a24.raviklaassens.com/index.html', 'utf8');
const pStart = html.indexOf('<div class="preloader"');
const pEnd = html.indexOf('</body>', pStart);
const preloaderHTML = html.slice(pStart, pEnd);
console.log('Preloader HTML:\n', preloaderHTML);
