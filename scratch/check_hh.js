const fs = require('fs');
const html = fs.readFileSync('production/hazbin-hotel/index.html', 'utf8');
const m = html.match(/data-trailer-src="([^"]+)"/);
console.log('Hazbin hotel trailer src:', m ? m[1] : 'none');
