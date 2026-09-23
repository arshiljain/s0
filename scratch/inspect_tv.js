const fs = require('fs');

const html = fs.readFileSync('television/index.html', 'utf8');
const regex = /data-disc-texture="([^"]+)"/g;
let m;
const textures = [];
while ((m = regex.exec(html)) !== null) {
  textures.push(m[1]);
}
console.log('Textures count:', textures.length);
console.log('Textures:', textures);

textures.forEach(t => {
  const local = t.replace(/^\//, '');
  console.log(t, fs.existsSync(local) ? 'EXISTS (' + fs.statSync(local).size + ')' : 'MISSING');
});
