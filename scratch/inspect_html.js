const fs = require('fs');

function inspect(filename) {
  console.log('=== Inspecting ' + filename + ' ===');
  const html = fs.readFileSync(filename, 'utf8');
  console.log('Total length:', html.length);
  
  const headStart = html.indexOf('<head');
  const headEnd = html.indexOf('</head>');
  console.log('Head slice (first 500 chars):', html.slice(headStart, headStart + 500));
  console.log('Head slice (last 500 chars):', html.slice(headEnd - 500, headEnd + 7));

  const bodyStart = html.indexOf('<body');
  console.log('Body tag index:', bodyStart);
  if (bodyStart !== -1) {
    console.log('Body slice (first 500 chars):', html.slice(bodyStart, bodyStart + 500));
  }
}

inspect('index.html');
inspect('television/index.html');
