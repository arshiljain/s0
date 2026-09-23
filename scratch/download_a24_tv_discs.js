const https = require('https');
const fs = require('fs');
const path = require('path');

const a24TvShows = [
  'hazbin-hotel',
  'the-sympathizer',
  'sunny',
  'beef',
  'the-curse',
  'such-brave-girls',
  'irma-vep',
  'mo',
  'euphoria',
  'ramy',
  'dreaming-whilst-black',
  'random-acts-of-flyness'
];

async function downloadDisc(slug) {
  const dest = path.join('images', 'discs', `${slug}.webp`);
  const url = `https://raviklaassens.b-cdn.net/a24/tv/${slug}/disc.webp?v=7`;

  return new Promise((resolve) => {
    https.get(url, (res) => {
      if (res.statusCode === 200) {
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on('finish', () => {
          fileStream.close();
          console.log(`[OK] Downloaded A24 TV master disc: ${dest} (${fs.statSync(dest).size} bytes)`);
          resolve(true);
        });
      } else {
        console.error(`[FAIL] HTTP ${res.statusCode} for ${url}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`[ERROR] ${err.message} for ${slug}`);
      resolve(false);
    });
  });
}

async function run() {
  for (const slug of a24TvShows) {
    await downloadDisc(slug);
  }
  console.log('Finished downloading original A24 TV discs.');
}

run();
