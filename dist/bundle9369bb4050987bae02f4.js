(()=>{"use strict";var n={756:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),a=e(645),i=e.n(a)()(o());i.push([n.id,"\r\nbody {\r\n  font-family: Arial, sans-serif;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  background-color: #0074d9;\r\n  color: #fff;\r\n  padding: 20px;\r\n  margin: 0;\r\n}\r\n\r\nform {\r\n  /* display: flex; */\r\n\r\n  /* justify-content: center; */\r\n  margin: 20px;\r\n}\r\n\r\n#todo-input {\r\n  width: 91%;\r\n  padding: 10px 21px;\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  border: 1px solid #eee;\r\n}\r\n\r\np {\r\n  padding: 10px 20px;\r\n  font-size: 18px;\r\n  font-style: italic;\r\n  border: 1px solid #eee;\r\n  margin-bottom: -1px;\r\n}\r\n\r\ni {\r\n  color: #404041;\r\n  opacity: 2;\r\n}\r\n\r\nul {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n\r\nli {\r\n  padding: 10px;\r\n  font-size: 16px;\r\n  border: 1px solid #eee;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\nli:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.delet-btn {\r\n  background-color: #999595;\r\n  color: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 12px 10px;\r\n  width: 100%;\r\n  font-size: 16px;\r\n}\r\n\r\n.add-btn {\r\n  display: none;\r\n  background-color: #999595;\r\n  color: #fff;\r\n  border: none;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 12px 10px;\r\n  width: 100%;\r\n  font-size: 16px;\r\n}\r\n\r\n.info {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-direction: column;\r\n  text-align: left;\r\n  width: 40%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.task-checkbox {\r\n  display: none;\r\n}\r\n\r\n.task-checkbox + .task-text {\r\n  font-size: 16px;\r\n}\r\n\r\n.task-checkbox:checked + .task-text {\r\n  text-decoration: line-through;\r\n  color: #aaa;\r\n}\r\n\r\n.task-checkbox + .task-text::before {\r\n  content: '';\r\n  display: inline-block;\r\n  width: 16px;\r\n  height: 16px;\r\n  margin-right: 10px;\r\n  border: 1px solid #aaa;\r\n  border-radius: 2%;\r\n  vertical-align: middle;\r\n  cursor: pointer;\r\n}\r\n\r\n.task-checkbox:checked + .task-text::before {\r\n  content: '✓';\r\n  color: #0074d9;\r\n  text-align: center;\r\n  line-height: 16px;\r\n}\r\n\r\n.fa-ellipsis-v {\r\n  color: #ccc;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-ellipsis-v:hover {\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-level-down-alt {\r\n  float: right;\r\n  transform: rotate(90deg);\r\n  position: absolute;\r\n  margin-left: -17px;\r\n  margin-top: 10px;\r\n  font-size: 15px;\r\n  color: #ccc;\r\n}\r\n\r\n.fa-level-down-alt:hover {\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n.fa-sync {\r\n  float: right;\r\n  font-size: 14px;\r\n  color: #ccc;\r\n  margin-left: 10px;\r\n}\r\n\r\n.fa-sync:hover {\r\n  color: #333;\r\n  cursor: pointer;\r\n}\r\n\r\n#update {\r\n  display: none;\r\n}\r\n\r\n.delete-btn {\r\n  margin-left: 30%;\r\n  display: block;\r\n  position: absolute;\r\n}\r\n",""]);const c=i},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);t&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),r.push(d))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],d=a[l]||0,p="".concat(l," ").concat(d);a[l]=d+1;var u=e(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var x=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:p,updater:x,references:1})}i.push(p)}return i}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var a=t(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=e(a[i]);r[c].references--}for(var s=t(n,o),l=0;l<a.length;l++){var d=e(a[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}a=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var a=r[t]={id:t,exports:{}};return n[t](a,a.exports,e),a.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),e.nc=void 0,(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),a=e(569),i=e.n(a),c=e(565),s=e.n(c),l=e(216),d=e.n(l),p=e(589),u=e.n(p),f=e(756),x={};x.styleTagTransform=u(),x.setAttributes=s(),x.insert=i().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=d(),r()(f.Z,x),f.Z&&f.Z.locals&&f.Z.locals;const m="todos";function v(){return JSON.parse(localStorage.getItem(m))||[]}function h(n){const r=v();r.splice(n,1),localStorage.setItem(m,JSON.stringify(r))}const b=document.querySelector("#todo-input"),g=document.querySelector("#todo-list"),y=document.querySelector(".delet-btn");function k(){const n=v();g.innerHTML="",n.forEach(((n,r)=>{const e=document.createElement("li");e.innerHTML=`\n      <label>\n        <input type="checkbox" class="task-checkbox" data-index="${r}">\n        <span class="task-text ${n.completed?"completed":""}">${n.text}</span>\n      </label>\n      <button type="button" class="update-btn" id="update" data-index="${r}"><i class='fas fa-edit'></i></button>\n      <button type="button" class="delete-btn" data-index="${r}"><i class='far fa-trash-alt'></i></button>\n      <i class='fas fa-ellipsis-v'></i> \n    `,e.querySelector(".update-btn").addEventListener("click",S),e.querySelector(".delete-btn").addEventListener("click",w),g.appendChild(e)}))}function S(n){const{index:r}=n.target.dataset,e=HTMLInputElement(r);e&&(function(n,r){const e=v();e[n].text=r,localStorage.setItem(m,JSON.stringify(e))}(r,e),k())}function w(n){const{index:r}=n.target.dataset;h(r),k()}document.querySelector("#add-task-btn").addEventListener("click",(n=>{n.preventDefault();const r=b.value.trim();r&&(!function(n){const r=v(),e={text:n,completed:!1};r.push(e),localStorage.setItem(m,JSON.stringify(r))}(r),k(),b.value="")})),y.addEventListener("click",(()=>{v().filter((n=>n.completed)).forEach(((n,r)=>h(r))),k()})),k()})()})();