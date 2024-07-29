(()=>{"use strict";var n={958:(n,r,t)=>{t.d(r,{A:()=>c});var e=t(354),o=t.n(e),i=t(314),a=t.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,87.5,700;1,87.5,700&display=swap);"]),a.push([n.id,":root {\n    --primary-color: #118f4a;\n    --primary-color-darker: #055f2d;\n}\n\n* {\n    box-sizing: border-box;\n    outline: 0;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background: var(--primary-color);\n    font-family: 'Open sans', sans-serif;\n    font-size: 1.3em;\n    line-height: 1.5em;\n}\n\n.container {\n    max-width: 640px;\n    margin: 0 auto;\n    background: #fff;\n    padding: 20px;\n    border-radius: 10px;\n}\n\nform input, form label, form button {\n    display: block;\n    width: 100%;\n    margin-bottom: 10px;\n}\n\nform input {\n    font-size: 24px;\n    height: 50px;\n    padding: 0 20px;\n}\n\nform input:focus {\n    outline: 1px solid var(--primary-color);\n}\n\nform button {\n    border: none;\n    background: var(--primary-color);\n    color: #fff;\n    font-size: 18px;\n    font-weight: 700;\n    height: 50px;\n    cursor: pointer;\n    margin-top: 30px;\n}\n\nform button:hover {\n    background: var(--primary-color-darker);\n}\n\n.paragrafo-resultado, .bad {\n    background: #6fffb0;\n    padding: 10px 20px;\n}\n\n.bad {\n    background: #e04040;\n}\n\n.relogio {\n    font-size: 3em;\n}\n\n.pausado {\n    color: red;\n}\n\n.calculadora {\n    width: 400px;\n}\n\n.display {\n    font-size: 2em;\n    width: 100%;\n    text-align: right;\n}\n\n.button {\n    width: 100%;\n    height: 50px;\n    font-size: 1.5em;\n    /* border: none; */\n    background: #dfdfdf;\n    cursor: pointer;\n}\n\n.button:hover {\n    background: #9e9e9e;\n}\n\n.error-text {\n    font-size: 14px;\n    color: red;\n}\n\n.container h1 {\n    text-align: center;\n    margin-bottom: 40px;\n}\n\n.cpf-gerado {\n    font-size: 2em;\n    color: var(--primary-color);\n    text-align: center;\n    font-weight: bold;\n    margin-bottom: 40px;\n    letter-spacing: 3px;\n}","",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAEA;IACI,wBAAwB;IACxB,+BAA+B;AACnC;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,oCAAoC;IACpC,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,cAAc;IACd,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,WAAW;IACX,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,cAAc;AAClB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,mBAAmB;AACvB",sourcesContent:["@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,87.5,700;1,87.5,700&display=swap');\r\n\r\n:root {\r\n    --primary-color: #118f4a;\r\n    --primary-color-darker: #055f2d;\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-family: 'Open sans', sans-serif;\r\n    font-size: 1.3em;\r\n    line-height: 1.5em;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 0 auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: #fff;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.paragrafo-resultado, .bad {\r\n    background: #6fffb0;\r\n    padding: 10px 20px;\r\n}\r\n\r\n.bad {\r\n    background: #e04040;\r\n}\r\n\r\n.relogio {\r\n    font-size: 3em;\r\n}\r\n\r\n.pausado {\r\n    color: red;\r\n}\r\n\r\n.calculadora {\r\n    width: 400px;\r\n}\r\n\r\n.display {\r\n    font-size: 2em;\r\n    width: 100%;\r\n    text-align: right;\r\n}\r\n\r\n.button {\r\n    width: 100%;\r\n    height: 50px;\r\n    font-size: 1.5em;\r\n    /* border: none; */\r\n    background: #dfdfdf;\r\n    cursor: pointer;\r\n}\r\n\r\n.button:hover {\r\n    background: #9e9e9e;\r\n}\r\n\r\n.error-text {\r\n    font-size: 14px;\r\n    color: red;\r\n}\r\n\r\n.container h1 {\r\n    text-align: center;\r\n    margin-bottom: 40px;\r\n}\r\n\r\n.cpf-gerado {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    text-align: center;\r\n    font-weight: bold;\r\n    margin-bottom: 40px;\r\n    letter-spacing: 3px;\r\n}"],sourceRoot:""}]);const c=a},314:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var t="",e=void 0!==r[5];return r[4]&&(t+="@supports (".concat(r[4],") {")),r[2]&&(t+="@media ".concat(r[2]," {")),e&&(t+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),t+=n(r),e&&(t+="}"),r[2]&&(t+="}"),r[4]&&(t+="}"),t})).join("")},r.i=function(n,t,e,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(e)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(a[A]=!0)}for(var u=0;u<n.length;u++){var f=[].concat(n[u]);e&&a[f[0]]||(void 0!==i&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=i),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),r.push(f))}},r}},354:n=>{n.exports=function(n){var r=n[1],t=n[3];if(!t)return r;if("function"==typeof btoa){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e),i="/*# ".concat(o," */");return[r].concat([i]).join("\n")}return[r].join("\n")}},72:n=>{var r=[];function t(n){for(var t=-1,e=0;e<r.length;e++)if(r[e].identifier===n){t=e;break}return t}function e(n,e){for(var i={},a=[],c=0;c<n.length;c++){var A=n[c],u=e.base?A[0]+e.base:A[0],f=i[u]||0,s="".concat(u," ").concat(f);i[u]=f+1;var p=t(s),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==p)r[p].references++,r[p].updater(l);else{var d=o(l,e);e.byIndex=c,r.splice(c,0,{identifier:s,updater:d,references:1})}a.push(s)}return a}function o(n,r){var t=r.domAPI(r);return t.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;t.update(n=r)}else t.remove()}}n.exports=function(n,o){var i=e(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=t(i[a]);r[c].references--}for(var A=e(n,o),u=0;u<i.length;u++){var f=t(i[u]);0===r[f].references&&(r[f].updater(),r.splice(f,1))}i=A}}},659:n=>{var r={};n.exports=function(n,t){var e=function(n){if(void 0===r[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}r[n]=t}return r[n]}(n);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");e.appendChild(t)}},540:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},56:(n,r,t)=>{n.exports=function(n){var r=t.nc;r&&n.setAttribute("nonce",r)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(t){!function(n,r,t){var e="";t.supports&&(e+="@supports (".concat(t.supports,") {")),t.media&&(e+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(e+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),e+=t.css,o&&(e+="}"),t.media&&(e+="}"),t.supports&&(e+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(e+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(e,n,r.options)}(r,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},113:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function t(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={id:e,exports:{}};return n[e](i,i.exports,t),i.exports}function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},e(n)}function o(n,r){(null==r||r>n.length)&&(r=n.length);for(var t=0,e=Array(r);t<r;t++)e[t]=n[t];return e}function i(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,a(e.key),e)}}function a(n){var r=function(n,r){if("object"!=e(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var o=t.call(n,"string");if("object"!=e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==e(r)?r:r+""}t.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return t.d(r,{a:r}),r},t.d=(n,r)=>{for(var e in r)t.o(r,e)&&!t.o(n,e)&&Object.defineProperty(n,e,{enumerable:!0,get:r[e]})},t.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),t.nc=void 0;var c=function(){function n(r){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n),Object.defineProperty(this,"cpfLimpo",{writable:!1,enumerable:!0,configurable:!1,value:r.replace(/\D+/g,"")})}return r=n,e=[{key:"geraDigito",value:function(n){var r,t=0,e=n.length+1,i=function(n,r){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,r){if(n){if("string"==typeof n)return o(n,r);var t={}.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?o(n,r):void 0}}(n))||r&&n&&"number"==typeof n.length){t&&(n=t);var e=0,i=function(){};return{s:i,n:function(){return e>=n.length?{done:!0}:{done:!1,value:n[e++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,A=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){A=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(A)throw a}}}}(n);try{for(i.s();!(r=i.n()).done;){var a=r.value;t+=e*Number(a),e--}}catch(n){i.e(n)}finally{i.f()}var c=11-t%11;return c<=9?String(c):"0"}}],(t=[{key:"ehSequencia",value:function(){return this.cpfLimpo[0].repeat(11)===this.cpfLimpo}},{key:"geraNovoCpf",value:function(){var r=this.cpfLimpo.slice(0,-2),t=n.geraDigito(r),e=n.geraDigito(r+t);this.novoCPF=r+t+e}},{key:"valida",value:function(){return!!this.cpfLimpo&&"string"==typeof this.cpfLimpo&&11===this.cpfLimpo.length&&!this.ehSequencia()&&(this.geraNovoCpf(),this.novoCPF===this.cpfLimpo)}}])&&i(r.prototype,t),e&&i(r,e),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,t,e}();function A(n){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},A(n)}function u(n,r){for(var t=0;t<r.length;t++){var e=r[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,f(e.key),e)}}function f(n){var r=function(n,r){if("object"!=A(n)||!n)return n;var t=n[Symbol.toPrimitive];if(void 0!==t){var e=t.call(n,"string");if("object"!=A(e))return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(n)}(n);return"symbol"==A(r)?r:r+""}var s,p=function(){return n=function n(){!function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")}(this,n)},r=[{key:"rand",value:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e8,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:999999999;return String(Math.floor(Math.random()*(r-n)+n))}},{key:"formatado",value:function(n){return n.slice(0,3)+"."+n.slice(3,6)+"."+n.slice(6,9)+"-"+n.slice(9,11)}},{key:"geraNovoCpf",value:function(){var n=this.rand(),r=c.geraDigito(n),t=n+r+c.geraDigito(n+r);return this.formatado(t)}}],r&&u(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),n;var n,r}(),l=t(72),d=t.n(l),m=t(825),g=t.n(m),v=t(659),b=t.n(v),y=t(56),h=t.n(y),C=t(540),I=t.n(C),B=t(113),x=t.n(B),w=t(958),k={};k.styleTagTransform=x(),k.setAttributes=h(),k.insert=b().bind(null,"head"),k.domAPI=g(),k.insertStyleElement=I(),d()(w.A,k),w.A&&w.A.locals&&w.A.locals,s=new p,document.querySelector(".cpf-gerado").innerHTML=s.geraNovoCpf()})();
//# sourceMappingURL=bundle.js.map