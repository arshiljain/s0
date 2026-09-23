const fs = require('fs');

const filePath = '_astro/main.CndTlFFb.js';
let js = fs.readFileSync(filePath, 'utf8');

const targetStr = 'function lt(){document.documentElement.removeAttribute(`data-preload`);try{window.siteNavLoadingApi?.revealAll()}catch{}(function e(){let t=document.querySelector(`[data-barba="container"]`)?.querySelector(`[data-disc-gallery]`);if(t?.discGalleryPreloader){try{t.discGalleryPreloader.abort?.();t.discGalleryPreloader.revealCopy?.()}catch{}return}setTimeout(e,20)})()}';

console.log('Target found:', js.includes(targetStr));

if (js.includes(targetStr)) {
  const replacement = `function lt(){function n(){document.documentElement.removeAttribute("data-preload");try{window.siteNavLoadingApi?.revealAll()}catch{}(function e(){let t=document.querySelector('[data-barba="container"]')?.querySelector('[data-disc-gallery]');if(t?.discGalleryPreloader){try{t.discGalleryPreloader.abort?.();t.discGalleryPreloader.revealCopy?.()}catch{}return}setTimeout(e,20)})()}let r=document.querySelector("[data-disc-gallery]");if(!r||r.getAttribute("data-disc-ready")==="true"||r.querySelector("canvas")){n();return}let i=setInterval(()=>{if(r.getAttribute("data-disc-ready")==="true"||r.querySelector("canvas")){clearInterval(i),clearTimeout(o),n()}},16),o=setTimeout(()=>{clearInterval(i),n()},3500)}`;
  js = js.replace(targetStr, replacement);
  fs.writeFileSync(filePath, js, 'utf8');
  console.log('Successfully updated lt() in main.CndTlFFb.js');
} else {
  // Let's print out what lt() actually looks like
  const idx = js.indexOf('function lt(){');
  console.log('Actual snippet around lt():', js.slice(idx, idx + 300));
}
