if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let c={};const o=e=>s(e,d),t={module:{uri:d},exports:c,require:o};i[d]=Promise.all(n.map((e=>t[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-eb1ce932"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index.5e1edd0c.js",revision:null},{url:"assets/index.8848e0ad.css",revision:null},{url:"index.html",revision:"acd8467a5124247d27d19f77c49f2a55"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"vanilla.min.js",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"favicon.svg",revision:"71dcfd191507c31dc79efe3341dfa3b9"},{url:"pwa-192x192.png",revision:"f24c9384006bbc8de95ed69990459dca"},{url:"pwa-512x512.png",revision:"4db5b8fe442a8f8fdc6e35cd40138057"},{url:"manifest.webmanifest",revision:"e8f01dd7e71b9bf0a1ba840cd1856256"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
