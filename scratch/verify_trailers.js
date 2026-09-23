const fs = require('fs');

const samples = ['oppenheimer', 'avengers-endgame', 'the-dark-knight', 'toy-story', 'titanic', 'interstellar'];
samples.forEach(slug => {
  const p = `production/${slug}/index.html`;
  if (fs.existsSync(p)) {
    const html = fs.readFileSync(p, 'utf8');
    const m = html.match(/data-trailer-src="([^"]+)"/);
    console.log(slug, '->', m ? m[1] : 'NOT FOUND');
  }
});
