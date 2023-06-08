!function(){"use strict";var e,t,n,r,o={},i={};function a(e){var t=i[e];if(void 0!==t)return t.exports;var n=i[e]={exports:{}};return o[e](n,n.exports,a),n.exports}a.m=o,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},a.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var o=Object.create(null);a.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((function(e){i[e]=function(){return n[e]}}));return i.default=function(){return n},a.d(o,i),o},a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,n){return a.f[n](e,t),t}),[]))},a.u=function(e){return"common/"+e+".js"},a.miniCssF=function(e){},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n={},r="space_tourism:",a.l=function(e,t,o,i){if(n[e])n[e].push(t);else{var s,u;if(void 0!==o)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==e||f.getAttribute("data-webpack")==r+o){s=f;break}}s||(u=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",r+o),s.src=e),n[e]=[t];var d=function(t,r){s.onerror=s.onload=null,clearTimeout(p);var o=n[e];if(delete n[e],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(r)})),t)return t(r)},p=setTimeout(d.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=d.bind(null,s.onerror),s.onload=d.bind(null,s.onload),u&&document.head.appendChild(s)}},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;a.g.importScripts&&(e=a.g.location+"");var t=a.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");if(n.length)for(var r=n.length-1;r>-1&&!e;)e=n[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),a.p=e+"../"}(),function(){var e={704:0};a.f.j=function(t,n){var r=a.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=a.p+a.u(t),s=new Error;a.l(i,(function(n){if(a.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,r[1](s)}}),"chunk-"+t,t)}};var t=function(t,n){var r,o,i=n[0],s=n[1],u=n[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);u&&u(a)}for(t&&t(n);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0},n=self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}(),a.e(713).then(a.t.bind(a,713,23));var s=document.querySelectorAll(".destination-item"),u=document.querySelectorAll(".destination-image > img"),c=document.querySelector(".destination-description > h2"),l=document.querySelector(".destination-description > p"),f=document.querySelector(".destination-distance > h3"),d=document.querySelector(".destination-time > h3"),p=[{name:"Moon",images:{png:"./assets/destination/image-moon.png",webp:"./assets/destination/image-moon.webp"},description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 km",travel:"3 days"},{name:"Mars",images:{png:"./assets/destination/image-mars.png",webp:"./assets/destination/image-mars.webp"},description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",distance:"225 mil. km",travel:"9 months"},{name:"Europa",images:{png:"./assets/destination/image-europa.png",webp:"./assets/destination/image-europa.webp"},description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 mil. km",travel:"3 years"},{name:"Titan",images:{png:"./assets/destination/image-titan.png",webp:"./assets/destination/image-titan.webp"},description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",distance:"1.6 bil. km",travel:"7 years"}];s.forEach((function(e){return e.addEventListener("click",(function(e){!function(e){u.forEach((function(t,n){n==e?t.setAttribute("visible",""):t.removeAttribute("visible")})),s.forEach((function(t,n){n==e?t.setAttribute("active",""):t.removeAttribute("active")})),c.textContent=p[e].name,l.textContent=p[e].description,d.textContent=p[e].travel,f.textContent=p[e].distance}(e.target.id)}))}))}();