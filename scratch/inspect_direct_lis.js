const fs = require('fs');

function inspectDirectLis(html, label) {
  console.log('=== ' + label + ' ===');
  const start = html.indexOf('class="nav-center__list"');
  const listSlice = html.slice(start, start + 3000);
  const regex = /<li[\s\S]*?<\/li>/g;
  let match;
  let count = 0;
  while ((match = regex.exec(listSlice)) !== null && count < 6) {
    count++;
    console.log(`LI ${count}:`, match[0].slice(0, 150).replace(/\n/g, ' '));
  }
}

inspectDirectLis(fs.readFileSync('a24.raviklaassens.com/index.html', 'utf8'), 'ORIG');
inspectDirectLis(fs.readFileSync('index.html', 'utf8'), 'CURR');
