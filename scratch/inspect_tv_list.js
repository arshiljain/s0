const fs = require('fs');

const html = fs.readFileSync('television/index.html', 'utf8');
const filmListIdx = html.indexOf('data-film-list');
console.log('data-film-list index:', filmListIdx);
if (filmListIdx !== -1) {
  console.log(html.slice(filmListIdx, filmListIdx + 1500));
} else {
  console.log('No data-film-list found');
  const discIdx = html.indexOf('data-disc');
  console.log('data-disc index:', discIdx);
}
