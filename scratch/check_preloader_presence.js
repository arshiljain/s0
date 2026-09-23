const fs = require('fs');

const indexHtml = fs.readFileSync('index.html', 'utf8');
console.log('index.html data-preloader:', indexHtml.includes('data-preloader'));
console.log('index.html class="preloader":', indexHtml.includes('class="preloader"'));

const tvHtml = fs.readFileSync('television/index.html', 'utf8');
console.log('television data-preloader:', tvHtml.includes('data-preloader'));
console.log('television class="preloader":', tvHtml.includes('class="preloader"'));
