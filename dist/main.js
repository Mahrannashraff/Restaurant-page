(()=>{"use strict";var e={341:(e,t,n)=>{n.d(t,{Z:()=>i});var o=n(81),r=n.n(o),a=n(645),c=n.n(a)()(r());c.push([e.id,"html{\n    background-color:#e6f9ff\n}\n\nh1{\n    color: #004466;\n    font-size:48px;\n}\n\n.page-content{\n    display: flex;\n    flex-direction: column;\n    align-items:center;\n}\n\np{\n    font-size:20px;\n    text-align: center;\n    padding:20px;\n}\n\n.contact-form{\n    display:flex;\n    flex-direction:column;\n    gap:10px;\n    padding:30px;\n}\n\n\nul{\n    list-style:circle;\n    display:flex;\n    flex-direction:column;\n    justify-content: space-between;\n}\n\nli{\n    font-size: 30px;\n}\n\n.tab{\n    border: 1px solid black;\n    width: 80px;\n    height:35px;\n    text-align: center;\n    font-weight:bold;\n    border-radius: 5px;\n    cursor: pointer;\n    padding-top:10px;\n    background-color:#0099cc;\n    \n}\n\n.tab:hover{\n    background-color:#006080;\n}\n\n.tabs{\n    display:flex;\n    justify-content: space-evenly;\n    padding:20px;\n}\n\nbutton{\n    height:30px;\n    width:60px;\n}",""]);const i=c},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,a){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(o)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(c[d]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);o&&c[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),t.push(s))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var a={},c=[],i=0;i<e.length;i++){var d=e[i],l=o.base?d[0]+o.base:d[0],s=a[l]||0,u="".concat(l," ").concat(s);a[l]=s+1;var p=n(u),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)t[p].references++,t[p].updater(m);else{var f=r(m,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:f,references:1})}c.push(u)}return c}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var a=o(e=e||[],r=r||{});return function(e){e=e||[];for(var c=0;c<a.length;c++){var i=n(a[c]);t[i].references--}for(var d=o(e,r),l=0;l<a.length;l++){var s=n(a[l]);0===t[s].references&&(t[s].updater(),t.splice(s,1))}a=d}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,exports:{}};return e[o](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.textContent="Welcome to our restaurant!",t.appendChild(n);const o=document.createElement("img");o.src="https://hotels.elgouna.com/wp-content/uploads/2023/01/Steigenberger_hotel_El_Gouna_Restaurant_Harumaki.jpg",t.appendChild(o);const r=document.createElement("p");r.textContent="Welcome to our restaurant, where we serve the most delicious food made with fresh, locally sourced ingredients in a warm and inviting atmosphere. Experience the flavors that will leave you wanting more.",t.appendChild(r),e.appendChild(t)};function t(){const e=document.querySelector("#content"),t=document.querySelector(".page-content");t&&e.removeChild(t)}const o=()=>{const n=document.querySelector("#content"),o=document.createElement("div"),r=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div");o.classList.add("tabs"),r.classList.add("tab"),a.classList.add("tab"),c.classList.add("tab"),r.textContent="Home",a.textContent="Menu",c.textContent="Contact Us",o.appendChild(r),o.appendChild(a),o.appendChild(c),n.appendChild(o),r.addEventListener("click",(()=>{t(),e()})),a.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("h1");n.classList.add("menu-header"),n.textContent="Our Menu";const o=document.createElement("ul"),r=document.createElement("li");r.textContent="Alfredo";const a=document.createElement("li");a.textContent="Mac cheese";const c=document.createElement("li");c.textContent="Bolognesa",o.appendChild(r),o.appendChild(a),o.appendChild(c),t.appendChild(n),t.appendChild(o),e.appendChild(t)})()})),c.addEventListener("click",(()=>{t(),(()=>{const e=document.querySelector("#content"),t=document.createElement("div");t.classList.add("page-content");const n=document.createElement("from");n.classList.add("contact-form");const o=document.createElement("label"),r=document.createElement("input");o.textContent="E-mail",r.type="text",r.placaholder="Enter your E-mail please",n.appendChild(o),n.appendChild(r);const a=document.createElement("label"),c=document.createElement("input");a.textContent="Phone Number",c.type="number",c.placaholder="Enter your number please",n.appendChild(a),n.appendChild(c);const i=document.createElement("button");i.type="submit",i.value="submit",i.placaholder="submit",n.appendChild(i),t.appendChild(n),e.appendChild(t)})()}))};var r=n(379),a=n.n(r),c=n(795),i=n.n(c),d=n(569),l=n.n(d),s=n(565),u=n.n(s),p=n(216),m=n.n(p),f=n(589),h=n.n(f),v=n(341),x={};x.styleTagTransform=h(),x.setAttributes=u(),x.insert=l().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=m(),a()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,o(),e()})()})();