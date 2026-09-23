const https = require('https');

function getShowImages(title) {
  return new Promise((resolve) => {
    const url = 'https://api.tvmaze.com/singlesearch/shows?q=' + encodeURIComponent(title);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          resolve({
            poster: json.image?.original || json.image?.medium,
            summary: json.summary,
            premiered: json.premiered
          });
        } catch {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

async function run() {
  const bb = await getShowImages('Breaking Bad');
  console.log('Breaking Bad images:', bb);
  const got = await getShowImages('Game of Thrones');
  console.log('Game of Thrones images:', got);
  const suc = await getShowImages('Succession');
  console.log('Succession images:', suc);
}

run();
