!function(){"use strict";var e,t,r,n,o={},a={};function i(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return o[e](r,r.exports,i),r.exports}i.m=o,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},i.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);i.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var c=2&n&&r;"object"==typeof c&&!~e.indexOf(c);c=t(c))Object.getOwnPropertyNames(c).forEach((function(e){a[e]=function(){return r[e]}}));return a.default=function(){return r},i.d(o,a),o},i.d=function(e,t){for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.f={},i.e=function(e){return Promise.all(Object.keys(i.f).reduce((function(t,r){return i.f[r](e,t),t}),[]))},i.u=function(e){return"common/"+e+".js"},i.miniCssF=function(e){},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r={},n="space_tourism:",i.l=function(e,t,o,a){if(r[e])r[e].push(t);else{var c,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),l=0;l<u.length;l++){var p=u[l];if(p.getAttribute("src")==e||p.getAttribute("data-webpack")==n+o){c=p;break}}c||(s=!0,(c=document.createElement("script")).charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.setAttribute("data-webpack",n+o),c.src=e),r[e]=[t];var f=function(t,n){c.onerror=c.onload=null,clearTimeout(d);var o=r[e];if(delete r[e],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(n)})),t)return t(n)},d=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),s&&document.head.appendChild(c)}},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var n=r.length-1;n>-1&&!e;)e=r[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e+"../"}(),function(){var e={839:0};i.f.j=function(t,r){var n=i.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(r,o){n=e[t]=[r,o]}));r.push(n[2]=o);var a=i.p+i.u(t),c=new Error;i.l(a,(function(r){if(i.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+o+": "+a+")",c.name="ChunkLoadError",c.type=o,c.request=a,n[1](c)}}),"chunk-"+t,t)}};var t=function(t,r){var n,o,a=r[0],c=r[1],s=r[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(n in c)i.o(c,n)&&(i.m[n]=c[n]);s&&s(i)}for(t&&t(r);u<a.length;u++)o=a[u],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkspace_tourism=self.webpackChunkspace_tourism||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),i.e(713).then(i.t.bind(i,713,23));var c=document.querySelectorAll(".technology-item"),s=document.querySelectorAll(".technology-image > img"),u=document.querySelector(".technology-description > h3"),l=document.querySelector(".technology-description > p:not(.sh2)"),p=[{name:"Launch vehicle",images:{portrait:"./assets/technology/image-launch-vehicle-portrait.jpg",landscape:"./assets/technology/image-launch-vehicle-landscape.jpg"},description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{name:"Spaceport",images:{portrait:"./assets/technology/image-spaceport-portrait.jpg",landscape:"./assets/technology/image-spaceport-landscape.jpg"},description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{name:"Space capsule",images:{portrait:"./assets/technology/image-space-capsule-portrait.jpg",landscape:"./assets/technology/image-space-capsule-landscape.jpg"},description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}];c.forEach((function(e){return e.addEventListener("click",(function(e){!function(e){s.forEach((function(t,r){r==e?t.setAttribute("visible",""):t.removeAttribute("visible")})),c.forEach((function(t,r){r==e?t.setAttribute("active",""):t.removeAttribute("active")})),u.textContent=p[e].name,l.textContent=p[e].description,time.textContent=p[e].travel,distance.textContent=p[e].distance}(e.target.id)}))}))}();