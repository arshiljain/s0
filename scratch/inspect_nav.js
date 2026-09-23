const fs = require('fs');

const origHtml = fs.readFileSync('a24.raviklaassens.com/index.html', 'utf8');
const oStart = origHtml.indexOf('class="nav-center__list"');
const oEnd = origHtml.indexOf('</ul>', oStart);
console.log('=== ORIG nav-center__list ===');
console.log(origHtml.slice(oStart, oEnd + 5));

const currHtml = fs.readFileSync('index.html', 'utf8');
const cStart = currHtml.indexOf('class="nav-center__list"');
const cEnd = currHtml.indexOf('</ul>', cStart);
console.log('=== CURR nav-center__list ===');
console.log(currHtml.slice(cStart, cEnd + 5));
