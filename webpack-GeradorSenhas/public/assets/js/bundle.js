(()=>{"use strict";var n={958:(n,r,e)=>{e.d(r,{A:()=>i});var o=e(354),t=e.n(o),a=e(314),A=e.n(a)()(t());A.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,87.5,700;1,87.5,700&display=swap);"]),A.push([n.id,":root {\n    --primary-color: #118f4a;\n    --primary-color-darker: #055f2d;\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 0 auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input, form label, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\n.paragrafo-resultado, .bad {\n    background: #6fffb0;\n    padding: 10px 20px;\n}\n\n.bad {\n    background: #e04040;\n}\n\n.relogio {\n    font-size: 3em;\n}\n\n.pausado {\n    color: red;\n}\n\n.calculadora {\n    width: 400px;\n}\n\n.display {\n    font-size: 2em;\n    width: 100%;\n    text-align: right;\n}\n\n.button {\n    width: 100%;\n    height: 50px;\n    font-size: 1.5em;\n    /* border: none; */\n    background: #dfdfdf;\n    cursor: pointer;\n}\n\n.button:hover {\n    background: #9e9e9e;\n}\n\n.error-text {\n    font-size: 14px;\n    color: red;\n}\n\n.senha-gerada {\n    font-size: 2em;\n    columns: var(--primary-color);\n    margin: 40px 0;\n}\n\ninput[type=\"checkbox\"] {\n    width: 18px;\n    height: 18px;\n}\n\nbutton {\n    display: block;\n    margin: 40px 0;\n    font-size: 1em;\n}\n\np {\n    font-size: 15px;\n    line-height: 105%;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,cAAc;IACd,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB;;AAEA;IACI,eAAe;IACf,iBAAiB;AACrB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,87.5,700;1,87.5,700&display=swap');\r\n\r\n:root {\r\n    --primary-color: #118f4a;\r\n    --primary-color-darker: #055f2d;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 0 auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.paragrafo-resultado, .bad {\r\n    background: #6fffb0;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.bad {\r\n    background: #e04040;\r\n}\r\n\r\n.relogio {\r\n    font-size: 3em;\r\n}\r\n\r\n.pausado {\r\n    color: red;\r\n}\r\n\r\n.calculadora {\r\n    width: 400px;\r\n}\r\n\r\n.display {\r\n    font-size: 2em;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.button {\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 1.5em;\r\n    /* border: none; */\r\n    background: #dfdfdf;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n    background: #9e9e9e;\r\n}\r\n\r\n.error-text {\r\n    font-size: 14px;\r\n    color: red;\r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em;\r\n    columns: var(--primary-color);\r\n    margin: 40px 0;\r\n}\r\n\r\ninput[type=\"checkbox\"] {\r\n    width: 18px;\r\n    height: 18px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 40px 0;\r\n    font-size: 1em;\r\n}\r\n\r\np {\r\n    font-size: 15px;\r\n    line-height: 105%;\r\n}"],sourceRoot:""}]);const i=A},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",o=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),o&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),o&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,o,t,a){"string"==typeof n&&(n=[[null,n,void 0]]);var A={};if(o)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(A[c]=!0)}for(var s=0;s<n.length;s++){var d=[].concat(n[s]);o&&A[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),t&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=t):d[4]="".concat(t)),r.push(d))}},r}},354:n=>{n.exports=function(n){var r=n[1],e=n[3];if(!e)return r;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */");return[r].concat([a]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function e(n){for(var e=-1,o=0;o<r.length;o++)if(r[o].identifier===n){e=o;break}return e}function o(n,o){for(var a={},A=[],i=0;i<n.length;i++){var c=n[i],s=o.base?c[0]+o.base:c[0],d=a[s]||0,u="".concat(s," ").concat(d);a[s]=d+1;var p=e(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)r[p].references++,r[p].updater(f);else{var l=t(f,o);o.byIndex=i,r.splice(i,0,{identifier:u,updater:l,references:1})}A.push(u)}return A}function t(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,t){var a=o(n=n||[],t=t||{});return function(n){n=n||[];for(var A=0;A<a.length;A++){var i=e(a[A]);r[i].references--}for(var c=o(n,t),s=0;s<a.length;s++){var d=e(a[s]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=c}}},659:n=>{var r={};n.exports=function(n,e){var o=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(o,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(o){var t=r[o];if(void 0!==t)return t.exports;var a=r[o]={id:o,exports:{}};return n[o](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var o in r)e.o(r,o)&&!e.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:r[o]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0;var o=function(n,r){return Math.floor(Math.random()*(r-n)+n)},t=function(){return",.!\";*+-['{}]#$%@&()~?^<>_="[o(0,27)]},a=document.querySelector(".senha-gerada"),A=document.querySelector(".qtd-caracteres"),i=document.querySelector(".chk-maiusculas"),c=document.querySelector(".chk-minusculas"),s=document.querySelector(".chk-numeros"),d=document.querySelector(".chk-simbolos"),u=document.querySelector(".gerar-senha"),p=e(72),f=e.n(p),l=e(825),m=e.n(l),h=e(659),C=e.n(h),g=e(56),I=e.n(g),b=e(540),v=e.n(b),x=e(113),B=e.n(x),y=e(958),k={};k.styleTagTransform=B(),k.setAttributes=I(),k.insert=C().bind(null,"head"),k.domAPI=m(),k.insertStyleElement=v(),f()(y.A,k),y.A&&y.A.locals&&y.A.locals,u.addEventListener("click",(function(){a.innerHTML=function(n,r,e,a,A){var i=[];n=Number(n);for(var c=0;c<n;c++)r&&i.push(String.fromCharCode(o(65,91))),e&&i.push(String.fromCharCode(o(97,123))),a&&i.push(String.fromCharCode(o(48,58))),A&&i.push(t());return i.join("").slice(0,n)}(A.value,i.checked,c.checked,s.checked,d.checked)||"Nada selecionado"}))})();
//# sourceMappingURL=bundle.js.map