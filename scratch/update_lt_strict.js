const fs = require('fs');

const filePath = '_astro/main.CndTlFFb.js';
let js = fs.readFileSync(filePath, 'utf8');

const currentSnippet = `function lt(){function n(){document.documentElement.removeAttribute("data-preload");try{window.siteNavLoadingApi?.revealAll()}catch{}(function e(){let t=document.querySelector('[data-barba="container"]')?.querySelector('[data-disc-gallery]');if(t?.discGalleryPreloader){try{t.discGalleryPreloader.abort?.();t.discGalleryPreloader.revealCopy?.()}catch{}return}setTimeout(e,20)})()}let r=document.querySelector("[data-disc-gallery]");if(!r||r.getAttribute("data-disc-ready")==="true"||r.querySelector("canvas")){n();return}let i=setInterval(()=>{if(r.getAttribute("data-disc-ready")==="true"||r.querySelector("canvas")){clearInterval(i),clearTimeout(o),n()}},16),o=setTimeout(()=>{clearInterval(i),n()},3500)}`;

const newSnippet = `function lt(){function n(){document.documentElement.removeAttribute("data-preload");try{window.siteNavLoadingApi?.revealAll()}catch{}(function e(){let t=document.querySelector('[data-barba="container"]')?.querySelector('[data-disc-gallery]');if(t?.discGalleryPreloader){try{t.discGalleryPreloader.abort?.();t.discGalleryPreloader.revealCopy?.()}catch{}return}setTimeout(e,20)})()}let r=document.querySelector("[data-disc-gallery]");if(!r||r.getAttribute("data-disc-ready")==="true"){n();return}let i=setInterval(()=>{if(r.getAttribute("data-disc-ready")==="true"){clearInterval(i),clearTimeout(o),n()}},16),o=setTimeout(()=>{clearInterval(i),n()},15000)}`;

if (js.includes(currentSnippet)) {
  js = js.replace(currentSnippet, newSnippet);
  fs.writeFileSync(filePath, js, 'utf8');
  console.log('Successfully updated lt() with data-disc-ready check!');
} else {
  console.log('Current snippet not found, printing current lt():');
  const idx = js.indexOf('function lt(){');
  console.log(js.slice(idx, idx + 400));
}
