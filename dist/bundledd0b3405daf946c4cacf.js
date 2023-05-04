(()=>{"use strict";var n={756:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"\r\nbody {\r\n    font-family: Arial, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  \r\n\r\n  h1 {\r\n    text-align: center;\r\n    background-color: #0074d9;\r\n    color: #fff;\r\n    padding: 20px;\r\n    margin: 0;\r\n  }\r\n  \r\n\r\nform {\r\n/* display: flex; */\r\n/* justify-content: center; */\r\nmargin: 20px;\r\n}\r\n#todo-input {\r\n    width: 91%;\r\n    padding: 10px 21px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    border: 1px solid #eee;\r\n  }\r\n\r\n  p{\r\n    padding: 10px 20px;\r\n    font-size: 18px;\r\n    font-style: italic;\r\n    border: 1px solid #eee;\r\n    margin-bottom: -1px;\r\n  }\r\n\r\n  i{\r\n    color:#404041;\r\n    opacity: 2;\r\n  }\r\n    \r\n\r\n  ul {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0 ;\r\n  }\r\n  \r\n  li {\r\n    padding: 10px;\r\n    font-size: 16px;\r\n    border: 1px solid #eee;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    \r\n  }\r\n  \r\n  li:last-child {\r\n    border-bottom: none;\r\n  }\r\n  \r\n  button {\r\n    background-color: #999595;\r\n    color: #fff;\r\n    border: none;\r\n    outline: none;\r\n    cursor: pointer;\r\n    padding: 12px 10px;\r\n    width: 100%;\r\n    font-size: 16px;\r\n  }\r\n\r\n  .info{\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: left;\r\n    width: 40%;\r\n    margin: 0 auto;\r\n  }\r\n\r\n\r\n  .task-checkbox {\r\n    display: none;\r\n  }\r\n  \r\n  .task-checkbox + .task-text {\r\n    font-size: 16px;\r\n  }\r\n  \r\n  .task-checkbox:checked + .task-text {\r\n    text-decoration: line-through;\r\n    color: #aaa ;\r\n  }\r\n  \r\n  .task-checkbox + .task-text:before {\r\n    content: '';\r\n    display: inline-block;\r\n    width: 16px;\r\n    height: 16px;\r\n    margin-right: 10px;\r\n    border: 1px solid #aaa;\r\n    border-radius: 2%;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .task-checkbox:checked + .task-text:before {\r\n    content: '✓';\r\n    color:  #0074d9;;\r\n    text-align: center;\r\n    line-height: 16px;\r\n  }\r\n\r\n\r\n  .fa-ellipsis-v {\r\n    color: #ccc;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .fa-ellipsis-v:hover {\r\n    color: #333;\r\n  }\r\n  \r\n\r\n\r\n\r\n\r\n\r\n  \r\n  ",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),r.push(l))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],d=t.base?s[0]+t.base:s[0],l=i[d]||0,p="".concat(d," ").concat(l);i[d]=l+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),d=0;d<i.length;d++){var l=e(i[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),d=e(216),l=e.n(d),p=e(589),u=e.n(p),f=e(756),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=l(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;const x=[{description:"Wash the dishes",completed:!1,index:0},{description:"Complete Todo project",completed:!0,index:1},{description:"Make research",completed:!1,index:2},{description:"Pay internet bundles",completed:!0,index:3}];document.addEventListener("DOMContentLoaded",(()=>{!function(){const n=document.getElementById("todo-list");n.innerHTML="",x.forEach((r=>{const e=document.createElement("li");e.innerHTML=`\n        <label>\n          <input type="checkbox" class="checkedbox"${r.completed?"checked":""}>\n          ${r.description}\n\n\n          \n        </label><i class="fa fa-ellipsis-v" aria-hidden="true"></i>\n\n      `,n.appendChild(e)}))}()}))})()})();