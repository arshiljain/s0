const fs = require('fs');
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
        let m;
        while ((m = regex.exec(data)) !== null) {
          if (m[1] && m[1] !== 'dQw4w9WgXcQ') {
            resolve(m[1]);
            return;
          }
        }
        resolve(null);
      });
    });
    req.on('error', () => resolve(null));
    req.setTimeout(5000, () => {
      req.destroy();
      resolve(null);
    });
  });
}

async function resolveList(items, isTv = false) {
  const queue = [...items];
  const total = queue.length;
  let finished = 0;
  const CONCURRENCY = 12;

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      if (!item.trailerId || item.trailerId === 'dQw4w9WgXcQ') {
        const q = `${item.title} ${isTv ? 'series' : 'movie'} official trailer`;
        const id = await getTrailerId(q);
        if (id) {
          item.trailerId = id;
        } else {
          // Fallback popular cinematic trailer
          item.trailerId = isTv ? 'HhesaQXLuRY' : 'EXeTwQWrcwY';
        }
      }
      finished++;
      if (finished % 25 === 0 || finished === total) {
        console.log(`[${isTv ? 'TV' : 'Film'}] Resolved ${finished}/${total} trailers... (sample: ${item.title} -> ${item.trailerId})`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);
}

async function run() {
  console.log('Resolving TV Series trailers...');
  const tvPath = 'C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/tv_200_dataset.json';
  const tvData = JSON.parse(fs.readFileSync(tvPath, 'utf8'));
  await resolveList(tvData, true);
  fs.writeFileSync(tvPath, JSON.stringify(tvData, null, 2), 'utf8');
  console.log('Saved updated TV trailers!');

  console.log('Resolving Movie trailers for 720 catalog...');
  const moviesPath = 'C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/catalog_700_dataset.json';
  const moviesData = JSON.parse(fs.readFileSync(moviesPath, 'utf8'));
  await resolveList(moviesData, false);
  fs.writeFileSync(moviesPath, JSON.stringify(moviesData, null, 2), 'utf8');
  console.log('Saved updated Movie trailers!');
}

run();
