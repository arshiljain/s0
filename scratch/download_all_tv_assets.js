const fs = require('fs');
const path = require('path');
const https = require('https');

const tvData = JSON.parse(fs.readFileSync('C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/tv_200_dataset.json', 'utf8'));

const POSTERS_DIR = 'images/posters';
const BACKDROPS_DIR = 'images/backdrops';

if (!fs.existsSync(POSTERS_DIR)) fs.mkdirSync(POSTERS_DIR, { recursive: true });
if (!fs.existsSync(BACKDROPS_DIR)) fs.mkdirSync(BACKDROPS_DIR, { recursive: true });

function fetchJson(url) {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch {
          resolve(null);
        }
      });
    }).on('error', () => resolve(null));
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve) => {
    if (!url) return resolve(false);
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return downloadFile(res.headers.location, dest).then(resolve);
      }
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          resolve(true);
        });
      } else {
        resolve(false);
      }
    }).on('error', () => resolve(false));
  });
}

async function run() {
  console.log(`Starting asset acquisition for ${tvData.length} TV series...`);
  const queue = [...tvData];
  const total = queue.length;
  let done = 0;
  const CONCURRENCY = 8;

  async function worker() {
    while (queue.length > 0) {
      const show = queue.shift();
      const posterPath = path.join(POSTERS_DIR, `${show.slug}.jpg`);
      const backdropPath = path.join(BACKDROPS_DIR, `${show.slug}.jpg`);

      const posterExists = fs.existsSync(posterPath) && fs.statSync(posterPath).size > 5000;
      const backdropExists = fs.existsSync(backdropPath) && fs.statSync(backdropPath).size > 5000;

      if (!posterExists || !backdropExists) {
        // Query TVMaze
        const query = show.title.replace(/[–—].*$/, '').trim();
        const data = await fetchJson(`https://api.tvmaze.com/singlesearch/shows?q=${encodeURIComponent(query)}`);
        
        let posterUrl = data?.image?.original || data?.image?.medium;
        if (posterUrl && !posterExists) {
          await downloadFile(posterUrl, posterPath);
        }

        // Check if backdrop exists, if not use poster or still
        if (!backdropExists) {
          if (posterUrl) {
            // Also save as backdrop if needed, or query background
            await downloadFile(posterUrl, backdropPath);
          }
        }
      }

      done++;
      if (done % 20 === 0 || done === total) {
        console.log(`[TV Assets] Processed ${done}/${total} shows...`);
      }
    }
  }

  const workers = Array.from({ length: CONCURRENCY }, () => worker());
  await Promise.all(workers);
  console.log('Finished acquiring TV show assets!');
}

run();
