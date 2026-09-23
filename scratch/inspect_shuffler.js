const fs = require('fs');

const html = fs.readFileSync('index.html', 'utf8');
const sIdx = html.indexOf('id="archive-disc-shuffler"');
console.log(html.slice(sIdx - 50, sIdx + 1500));
