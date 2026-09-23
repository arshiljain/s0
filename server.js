const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = parseInt(process.env.PORT, 10) || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  let cleanUrl = req.url.split('?')[0].split('#')[0];
  try {
    cleanUrl = decodeURIComponent(cleanUrl);
  } catch {
    // Keep raw if malformed
  }

  if (cleanUrl === '' || cleanUrl === '/') {
    cleanUrl = '/index.html';
  }

  let filePath = path.normalize(path.join(ROOT, cleanUrl));

  // Security check: ensure path stays within ROOT
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain' });
    res.end('403 Forbidden');
    return;
  }

  // Handle directory or clean route
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    const tryIndex = path.join(filePath, 'index.html');
    const tryHtml = filePath + '.html';
    if (fs.existsSync(tryIndex) && fs.statSync(tryIndex).isFile()) {
      filePath = tryIndex;
    } else if (fs.existsSync(tryHtml) && fs.statSync(tryHtml).isFile()) {
      filePath = tryHtml;
    }
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'
    });

    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + cleanUrl);
  }
});

function startServer(port) {
  server.listen(port, () => {
    const url = `http://localhost:${port}`;
    console.log(`\n==================================================`);
    console.log(`🎬 A24 Filmography Archive Server`);
    console.log(`🌐 Running at: ${url}`);
    console.log(`==================================================\n`);

    if (process.platform === 'win32') {
      exec(`start ${url}`);
    } else if (process.platform === 'darwin') {
      exec(`open ${url}`);
    } else {
      exec(`xdg-open ${url}`);
    }
  });

  server.once('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.log(`Port ${port} in use, trying ${port + 1}...`);
      startServer(port + 1);
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer(PORT);
