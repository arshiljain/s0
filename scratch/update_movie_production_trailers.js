const fs = require('fs');
const path = require('path');

const catalogPath = 'C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/catalog_700_dataset.json';
const films = JSON.parse(fs.readFileSync(catalogPath, 'utf8'));

console.log(`Updating trailer links for ${films.length} movies...`);

let updated = 0;
let missing = 0;

for (const film of films) {
  const prodFile = path.join('production', film.slug, 'index.html');
  if (!fs.existsSync(prodFile)) {
    missing++;
    continue;
  }

  let html = fs.readFileSync(prodFile, 'utf8');
  const trailerId = film.trailerId || 'EXeTwQWrcwY';
  const trailerUrl = `https://www.youtube.com/watch?v=${trailerId}`;

  // Replace data-trailer-src
  html = html.replace(/data-trailer-src="[^"]*"/g, `data-trailer-src="${trailerUrl}"`);
  
  // Replace href on trailer button
  html = html.replace(/href="https:\/\/www\.youtube\.com\/results\?[^"]*"/g, `href="${trailerUrl}"`);

  fs.writeFileSync(prodFile, html, 'utf8');
  updated++;
}

console.log(`Successfully updated ${updated} movie production pages with live trailers! (missing files: ${missing})`);
