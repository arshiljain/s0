const https = require('https');

function getTrailerId(query) {
  return new Promise((resolve) => {
    const url = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(query);
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /"videoId":"([a-zA-Z0-9_-]{11})"/g;
        const ids = [];
        let m;
        while ((m = regex.exec(data)) !== null) {
          if (!ids.includes(m[1])) ids.push(m[1]);
        }
        resolve(ids);
      });
    });
    req.on('error', () => resolve([]));
  });
}

async function run() {
  const ids1 = await getTrailerId('Breaking Bad official trailer');
  console.log('Breaking Bad IDs:', ids1.slice(0, 3));
  const ids2 = await getTrailerId('The Dark Knight official trailer');
  console.log('The Dark Knight IDs:', ids2.slice(0, 3));
}

run();
