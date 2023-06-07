!function(){"use strict";var e,t,n={},i={};function r(e){var t=i[e];if(void 0!==t)return t.exports;var o=i[e]={exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.f={},r.e=function(e){return Promise.all(Object.keys(r.f).reduce((function(t,n){return r.f[n](e,t),t}),[]))},r.u=function(e){return e+"/bundle.js"},r.miniCssF=function(e){},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="space_tourism:",r.l=function(n,i,o,a){if(e[n])e[n].push(i);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+o){s=d;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",t+o),s.src=n),e[n]=[i];var p=function(t,i){s.onerror=s.onload=null,clearTimeout(m);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(i)})),t)return t(i)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),u&&document.head.appendChild(s)}},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var i=n.length-1;i>-1&&!e;)e=n[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e+"../"}(),function(){var e={704:0};r.f.j=function(t,n){var i=r.o(e,t)?e[t]:void 0;if(0!==i)if(i)n.push(i[2]);else{var o=new Promise((function(n,r){i=e[t]=[n,r]}));n.push(i[2]=o);var a=r.p+r.u(t),s=new Error;r.l(a,(function(n){if(r.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var o=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",s.name="ChunkLoadError",s.type=o,s.request=a,i[1](s)}}),"chunk-"+t,t)}};var t=function(t,n){var i,o,a=n[0],s=n[1],u=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(i in s)r.o(s,i)&&(r.m[i]=s[i]);u&&u(r)}for(t&&t(n);c<a.length;c++)o=a[c],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),r.e(713).then(r.bind(r,713));const o=document.querySelectorAll(".destination-item"),a=document.querySelectorAll(".destination-image > img"),s=document.querySelector(".destination-description > h2"),u=document.querySelector(".destination-description > p"),c=document.querySelector(".destination-distance > h3"),l=document.querySelector(".destination-time > h3"),d=[{name:"Moon",images:{png:"./assets/destination/image-moon.png",webp:"./assets/destination/image-moon.webp"},description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",images:{png:"./assets/destination/image-mars.png",webp:"./assets/destination/image-mars.webp"},description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",images:{png:"./assets/destination/image-europa.png",webp:"./assets/destination/image-europa.webp"},description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",images:{png:"./assets/destination/image-titan.png",webp:"./assets/destination/image-titan.webp"},description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}];o.forEach((e=>e.addEventListener("click",(e=>{!function(e){a.forEach((t=>{t.id===e?t.setAttribute("visible",""):t.removeAttribute("visible")})),o.forEach((t=>{t.id===e?t.setAttribute("active",""):t.removeAttribute("active")})),s.textContent=d[e].name,u.textContent=d[e].description,l.textContent=d[e].travel,c.textContent=d[e].distance}(e.target.id)}))))}();