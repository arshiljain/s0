const puppeteer = require('C:/Users/kanha/webclone/node_modules/puppeteer');
const fs = require('fs');
const path = require('path');

const tvData = JSON.parse(fs.readFileSync('C:/Users/kanha/.gemini/antigravity/brain/c56b820c-ee91-4690-819b-dd27133fe18e/scratch/tv_200_dataset.json', 'utf8'));

const POSTERS_DIR = 'images/posters';
const DISCS_DIR = 'images/discs';

const A24_TV_SLUGS = new Set([
  'hazbin-hotel', 'the-sympathizer', 'sunny', 'beef', 'the-curse',
  'such-brave-girls', 'irma-vep', 'mo', 'euphoria', 'ramy',
  'dreaming-whilst-black', 'random-acts-of-flyness'
]);

async function run() {
  console.log(`Starting disc generation for ${tvData.length} TV series...`);

  // Filter shows that need rendering (exclude preserved A24 master discs)
  const pending = tvData.filter(show => {
    if (A24_TV_SLUGS.has(show.slug)) {
      const p = path.join(DISCS_DIR, `${show.slug}.webp`);
      if (fs.existsSync(p) && fs.statSync(p).size > 10000) {
        return false; // already preserved!
      }
    }
    return true;
  });

  console.log(`Preserved ${tvData.length - pending.length} authentic A24 TV master discs.`);
  console.log(`Rendering ${pending.length} collector TV discs...`);

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const HTML_TEMPLATE = `<!DOCTYPE html>
<html>
<head>
  <style>
    body { margin: 0; padding: 0; background: transparent; overflow: hidden; }
    canvas { width: 1024px; height: 1024px; display: block; }
  </style>
</head>
<body>
  <canvas id="discCanvas" width="1024" height="1024"></canvas>
  <script>
    window.renderTvDisc = function(posterDataUrl, show) {
      return new Promise((resolve) => {
        const canvas = document.getElementById('discCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 1024, 1024);

        const img = new Image();
        const finish = () => {
          resolve(canvas.toDataURL('image/webp', 0.94));
        };

        img.onerror = () => {
          // Render fallback graphic disc
          drawGraphicDisc(ctx, show);
          finish();
        };

        function drawGraphicDisc(ctx, show) {
          const cx = 512, cy = 512;
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, 504, 0, Math.PI * 2);
          ctx.clip();
          ctx.fillStyle = '#0f1218';
          ctx.fillRect(0, 0, 1024, 1024);

          ctx.fillStyle = '#ffffff';
          ctx.font = 'bold 36px -apple-system, sans-serif';
          ctx.textAlign = 'center';
          ctx.fillText((show.title || '').toUpperCase(), cx, 400);

          ctx.font = '500 20px -apple-system, sans-serif';
          ctx.fillStyle = 'rgba(255,255,255,0.6)';
          ctx.fillText((show.network || 'TELEVISION').toUpperCase(), cx, 450);

          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(cx, cy, 118, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
          ctx.restore();
        }

        img.onload = () => {
          const cx = 512, cy = 512;
          const outerR = 504;
          const holeR = 118;

          // 1. Clip outer circle
          ctx.save();
          ctx.beginPath();
          ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
          ctx.clip();

          // 2. Base dark cinematic background
          ctx.fillStyle = '#080a0e';
          ctx.fillRect(0, 0, 1024, 1024);

          const posterAspect = img.width / img.height;

          // 3. Draw ambient blurred background to fill the circle seamlessly
          ctx.save();
          ctx.filter = 'blur(45px) brightness(0.6)';
          const ambientScale = 1.35;
          const aH = 1024 * ambientScale;
          const aW = aH * posterAspect;
          ctx.drawImage(img, (1024 - aW) / 2, (1024 - aH) / 2, aW, aH);
          ctx.restore();

          // 4. Draw sharp poster art with optical framing
          let drawH, drawW, drawX, drawY;
          if (posterAspect > 1.2) {
            drawH = 1024 * 1.1;
            drawW = drawH * posterAspect;
            drawX = (1024 - drawW) / 2;
            drawY = (1024 - drawH) / 2;
          } else {
            drawW = 860;
            drawH = drawW / posterAspect;
            drawX = (1024 - drawW) / 2;
            drawY = (1024 - drawH) / 2;
          }

          ctx.drawImage(img, drawX, drawY, drawW, drawH);

          // 5. Circular subtle perimeter vignette for contrast & seamless disc edge
          const vigGrad = ctx.createRadialGradient(cx, cy, 330, cx, cy, outerR);
          vigGrad.addColorStop(0, 'rgba(0,0,0,0)');
          vigGrad.addColorStop(0.72, 'rgba(0,0,0,0.25)');
          vigGrad.addColorStop(1, 'rgba(0,0,0,0.75)');
          ctx.fillStyle = vigGrad;
          ctx.fillRect(0, 0, 1024, 1024);

          // 6. Perimeter edge text (creators, stars, year, network)
          ctx.save();
          ctx.font = '500 11px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.95)';
          ctx.shadowBlur = 6;

          const castList = (show.starring || '').split(',').slice(0, 3).map(s => s.trim().toUpperCase()).join('  •  ');
          const netLabel = (show.network || 'TELEVISION').toUpperCase();
          const metaText = 'CREATED BY ' + (show.creators || '').toUpperCase() + '  •  ' + castList + '  •  ' + show.year + '  •  ' + netLabel;

          const textRadius = outerR - 20;
          const startAngle = Math.PI * 0.73;
          const endAngle = Math.PI * 0.27;
          const totalArc = (Math.PI * 2 - startAngle) + endAngle;
          const angleStep = totalArc / (metaText.length - 1);

          for (let i = 0; i < metaText.length; i++) {
            const char = metaText[i];
            let curAngle = startAngle + i * angleStep;
            if (curAngle > Math.PI * 2) curAngle -= Math.PI * 2;

            ctx.save();
            ctx.translate(cx + Math.cos(curAngle) * textRadius, cy + Math.sin(curAngle) * textRadius);
            ctx.rotate(curAngle + Math.PI / 2);
            ctx.fillText(char, 0, 0);
            ctx.restore();
          }
          ctx.restore();

          // 7. Network Emblem Badge
          ctx.save();
          const netType = (show.networkLogo || '').toLowerCase();
          let logoText = '5HT ARCHIVE';
          if (netType.includes('hbo')) logoText = 'HBO ORIGINAL';
          else if (netType.includes('netflix')) logoText = 'NETFLIX SERIES';
          else if (netType.includes('amc')) logoText = 'amc';
          else if (netType.includes('apple')) logoText = 'Apple Original';
          else if (netType.includes('amazon')) logoText = 'PRIME VIDEO';
          else if (netType.includes('fx')) logoText = 'FX';
          else if (netType.includes('hulu')) logoText = 'hulu';
          else if (netType.includes('bbc')) logoText = 'BBC';
          else if (netType.includes('disney')) logoText = 'Disney+';
          else if (netType.includes('showtime')) logoText = 'SHOWTIME';

          ctx.font = 'bold 15px -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif';
          ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
          ctx.shadowBlur = 8;
          ctx.textAlign = 'center';
          ctx.fillText(logoText, cx, cy + 240);
          ctx.restore();

          // 8. Center Spindle Cutout (Clean, 100% transparent circular hole)
          ctx.save();
          ctx.globalCompositeOperation = 'destination-out';
          ctx.beginPath();
          ctx.arc(cx, cy, holeR, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();

          ctx.restore(); // outer circle clip
          finish();
        };

        if (posterDataUrl) {
          img.src = posterDataUrl;
        } else {
          drawGraphicDisc(ctx, show);
          finish();
        }
      });
    };
  </script>
</body>
</html>`;

  const page = await browser.newPage();
  await page.setContent(HTML_TEMPLATE);

  let rendered = 0;
  for (const show of pending) {
    const dest = path.join(DISCS_DIR, `${show.slug}.webp`);
    let posterDataUrl = null;

    const posterPath = path.join(POSTERS_DIR, `${show.slug}.jpg`);
    const backdropPath = path.join('images', 'backdrops', `${show.slug}.jpg`);

    if (fs.existsSync(posterPath) && fs.statSync(posterPath).size > 1000) {
      const buf = fs.readFileSync(posterPath);
      posterDataUrl = `data:image/jpeg;base64,${buf.toString('base64')}`;
    } else if (fs.existsSync(backdropPath) && fs.statSync(backdropPath).size > 1000) {
      const buf = fs.readFileSync(backdropPath);
      posterDataUrl = `data:image/jpeg;base64,${buf.toString('base64')}`;
    }

    const dataUrl = await page.evaluate(async (pUrl, sData) => {
      return await window.renderTvDisc(pUrl, sData);
    }, posterDataUrl, show);

    const base64Data = dataUrl.replace(/^data:image\/\w+;base64,/, '');
    fs.writeFileSync(dest, Buffer.from(base64Data, 'base64'));

    rendered++;
    if (rendered % 20 === 0 || rendered === pending.length) {
      console.log(`[TV Discs] Rendered ${rendered}/${pending.length} discs... (sample: ${show.slug}.webp)`);
    }
  }

  await browser.close();
  console.log(`Completed rendering all ${rendered} TV discs!`);
}

run().catch(console.error);
