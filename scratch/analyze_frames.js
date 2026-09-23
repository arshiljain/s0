const fs = require('fs');
const path = require('path');

const files = fs.readdirSync('scratch/load_frames').filter(f => f.endsWith('.png')).sort();
console.log('Total frames:', files.length);

// Print size of first 15 frames
for (let i = 0; i < Math.min(files.length, 25); i++) {
  const f = files[i];
  const p = path.join('scratch/load_frames', f);
  console.log(f, fs.statSync(p).size, 'bytes');
}
