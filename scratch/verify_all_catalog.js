const fs = require('fs');

const tvData = JSON.parse(fs.readFileSync('C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/tv_200_dataset.json', 'utf8'));
const filmData = JSON.parse(fs.readFileSync('C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/catalog_700_dataset.json', 'utf8'));

let tvPageCount = 0;
let tvTrailerCount = 0;
let tvDiscCount = 0;

tvData.forEach(s => {
  const p = `production/${s.slug}/index.html`;
  if (fs.existsSync(p)) {
    tvPageCount++;
    const html = fs.readFileSync(p, 'utf8');
    if (html.includes('data-trailer-src="https://www.youtube.com/watch?v=')) tvTrailerCount++;
  }
  const disc = `images/discs/${s.slug}.webp`;
  if (fs.existsSync(disc) && fs.statSync(disc).size > 5000) tvDiscCount++;
});

let filmPageCount = 0;
let filmTrailerCount = 0;
let filmDiscCount = 0;

filmData.forEach(f => {
  const p = `production/${f.slug}/index.html`;
  if (fs.existsSync(p)) {
    filmPageCount++;
    const html = fs.readFileSync(p, 'utf8');
    if (html.includes('data-trailer-src="https://www.youtube.com/watch?v=')) filmTrailerCount++;
  }
  const disc = `images/discs/${f.slug}.webp`;
  if (fs.existsSync(disc) && fs.statSync(disc).size > 5000) filmDiscCount++;
});

console.log('=== CATALOG AUDIT RESULTS ===');
console.log(`Movies in Catalog: ${filmData.length}`);
console.log(`Movie Production Pages: ${filmPageCount} / ${filmData.length}`);
console.log(`Movie Working Trailers: ${filmTrailerCount} / ${filmData.length}`);
console.log(`Movie Discs: ${filmDiscCount} / ${filmData.length}`);
console.log('------------------------------');
console.log(`TV Series in Catalog: ${tvData.length}`);
console.log(`TV Production Pages: ${tvPageCount} / ${tvData.length}`);
console.log(`TV Working Trailers: ${tvTrailerCount} / ${tvData.length}`);
console.log(`TV Discs: ${tvDiscCount} / ${tvData.length}`);
console.log('==============================');
