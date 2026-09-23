const fs = require('fs');

const html = fs.readFileSync('television/index.html', 'utf8');
const filmListIdx = html.indexOf('data-film-list');
const itemIdx = html.indexOf('<div data-film-item=""', filmListIdx);
const nextItemIdx = html.indexOf('<div data-film-item=""', itemIdx + 20);
console.log(html.slice(itemIdx, nextItemIdx));
