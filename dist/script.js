(()=>{var t={546:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var i=r(81),o=r.n(i),n=r(645),s=r.n(n)()(o());s.push([t.id,".icon {\n    width: 80%;\n    height: 80%;\n    vertical-align: -0.15em;\n    fill: currentColor;\n    overflow: hidden;\n}\n\nsvg,\nuse,\nsymbol,\npath {\n    pointer-events: none;\n}",""]);const a=s},982:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});var i=r(81),o=r.n(i),n=r(645),s=r.n(n)()(o());s.push([t.id,".box {\n    margin: auto;\n}\n\n.card {\n    box-sizing: border-box;\n    opacity: 1;\n    cursor: pointer;\n    transition: all 0.3s;\n    border-radius: 2px;\n    background: rgb(247, 255, 213);\n    box-shadow: 0px 3px 0 0 #fff, 0 8px 0 0 #ddd, 0 8px 0 2px #333, 0 0 0 2px #333;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}",""]);const a=s},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",i=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),i&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),i&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,i,o,n){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(s[l]=!0)}for(var c=0;c<t.length;c++){var d=[].concat(t[c]);i&&s[d[0]]||(void 0!==n&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=n),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{"use strict";t.exports=function(t){return t[1]}},268:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>b});var i=r(379),o=r.n(i),n=r(795),s=r.n(n),a=r(569),l=r.n(a),c=r(565),d=r.n(c),h=r(216),u=r.n(h),p=r(589),f=r.n(p),v=r(546),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=u(),o()(v.Z,g);const b=v.Z&&v.Z.locals?v.Z.locals:void 0},618:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>b});var i=r(379),o=r.n(i),n=r(795),s=r.n(n),a=r(569),l=r.n(a),c=r(565),d=r.n(c),h=r(216),u=r.n(h),p=r(589),f=r.n(p),v=r(982),g={};g.styleTagTransform=f(),g.setAttributes=d(),g.insert=l().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=u(),o()(v.Z,g);const b=v.Z&&v.Z.locals?v.Z.locals:void 0},379:t=>{"use strict";var e=[];function r(t){for(var r=-1,i=0;i<e.length;i++)if(e[i].identifier===t){r=i;break}return r}function i(t,i){for(var n={},s=[],a=0;a<t.length;a++){var l=t[a],c=i.base?l[0]+i.base:l[0],d=n[c]||0,h="".concat(c," ").concat(d);n[c]=d+1;var u=r(h),p={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(p);else{var f=o(p,i);i.byIndex=a,e.splice(a,0,{identifier:h,updater:f,references:1})}s.push(h)}return s}function o(t,e){var r=e.domAPI(e);return r.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;r.update(t=e)}else r.remove()}}t.exports=function(t,o){var n=i(t=t||[],o=o||{});return function(t){t=t||[];for(var s=0;s<n.length;s++){var a=r(n[s]);e[a].references--}for(var l=i(t,o),c=0;c<n.length;c++){var d=r(n[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}n=l}}},569:t=>{"use strict";var e={};t.exports=function(t,r){var i=function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}e[t]=r}return e[t]}(t);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(r)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,r)=>{"use strict";t.exports=function(t){var e=r.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(r){!function(t,e,r){var i="";r.supports&&(i+="@supports (".concat(r.supports,") {")),r.media&&(i+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(i+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),i+=r.css,o&&(i+="}"),r.media&&(i+="}"),r.supports&&(i+="}");var n=r.sourceMap;n&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(n))))," */")),e.styleTagTransform(i,t,e.options)}(e,t,r)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},602:()=>{let t=function(t){return`<svg class="icon" aria-hidden="true" type="${t}" status="no">\n                <use xlink:href="#icon-${t}"></use>\n            </svg>\n            `};svgList=[t("binggao"),t("baomihua"),t("niujiaobao"),t("shousi"),t("pijiu"),t("jitui"),t("xuegao"),t("xia"),t("hanbao"),t("shutiao")],console.log(svgList.length),new class{row=7;column=7;numberOfLayer=5;basicSize=40;density=.3;overMap=[];cardArray=[];toDoCard=[];maxCardNum=7;that;box;createdCard=0;constructor(t){this.init(),t.appendChild(this.box)}init(){this.initoverMap(),this.createBox("box"),this.drawAllCard(),this.renderCard(),this.ensureNum(),this.fillSvgPic(),this.bindDomEvent(this.box)}createBox(t){let e=document.createElement("div");e.classList.add(t),e.style.position="relative",e.style.width=e.style.height=(this.row+1)*this.basicSize+"px",this.box=e}initoverMap(){let t=[];for(let e=0;e<2*(this.column+1);e++){let e=new Array(2*(this.row+1)).fill(0);t.push(e)}this.overMap=t}drawCard(){this.initoverMap();let t=JSON.parse(JSON.stringify(this.overMap));for(let e=1;e<=2*this.row;e++)for(let r=1;r<=2*this.column;r++)Math.random()<this.density&&0===(this.overMap[e][r]||this.overMap[e][r+1]||this.overMap[e+1][r]||this.overMap[e+1][r+1])&&(t[e][r]=1,this.overMap[e][r]=this.overMap[e][r+1]=this.overMap[e+1][r]=this.overMap[e+1][r+1]=1,console.log(1));this.cardArray.push(t)}drawAllCard(){for(let t=0;t<this.numberOfLayer;t++)this.drawCard()}renderCard(){this.cardArray.forEach(((t,e)=>{for(let r=1;r<=2*this.row;r++)for(let i=1;i<=2*this.column;i++)if(1===t[r][i]){this.createdCard++;let t=document.createElement("div");t.classList.add("card"),t.style.width=t.style.height=this.basicSize+"px",t.style.position="absolute";let o=r*this.basicSize/2+"px",n=i*this.basicSize/2+"px";t.style.left=o,t.style.top=n,t.setAttribute("deepth",e),t.setAttribute("row",r),t.setAttribute("col",i),this.box.appendChild(t)}}))}ensureNum(){let t=this.createdCard%3;if(0!==t){console.log(this.box.childNodes.length,t);for(let e=0;e<t;e++){let t=Math.floor(Math.random()*this.box.childNodes.length-1),e=parseInt(card.getAttribute("row")),r=parseInt(card.getAttribute("col")),i=parseInt(card.getAttribute("deepth"));this.cardArray[i][e][r]=0,this.box.removeChild(this.box.childNodes[t]),this.createdCard--}console.log(this.box.childNodes.length,t)}}fillSvgPic(){let t=[];for(let e=this.box.childNodes.length/3;e>=1;e--)t.push(svgList[e%10],svgList[e%10],svgList[e%10]);t=function(t){let e,r=[];for(;t.length>0;)e=Math.floor(Math.random()*t.length),r.push(t[e]),t.splice(e,1);return r}(t);for(let e=0,r=this.box.childNodes.length;e<r;e++)this.box.childNodes[e].innerHTML=t[e]}bindDomEvent(t){let e=this;t.addEventListener("click",(function(t){let r=t.target;"card"===r.className&&"no"===r.firstElementChild.getAttribute("status")&&e.clickCard(r)}),!1)}clickCard(t){let e=parseInt(t.getAttribute("row")),r=parseInt(t.getAttribute("col")),i=parseInt(t.getAttribute("deepth"));console.log(i,e,r);for(let t=i+1;t<this.cardArray.length;t++)if(console.log("进循环了"),this.cardArray[t][e-1][r-1]||this.cardArray[t][e][r-1]||this.cardArray[t][e+1][r-1]||this.cardArray[t][e-1][r]||this.cardArray[t][e][r]||this.cardArray[t][e+1][r]||this.cardArray[t][e-1][r+1]||this.cardArray[t][e][r+1]||1===this.cardArray[t][e+1][r+1])return void console.log("上面有脏东西");t.firstElementChild.setAttribute("status","yes");let o=this,n=0;n=this.toDoCard.length;let s=t.firstElementChild.getAttribute("type");console.log(t.firstElementChild.getAttribute("type"));for(let t=this.toDoCard.length-1;t>=0;t--)if(this.toDoCard[t].firstElementChild.getAttribute("type")===s){n=t+1,console.log("找到重复的了");break}this.toDoCard.splice(n,0,t),this.moveCard(this.toDoCard),setTimeout((function(){o.checkUpCard(t)}),700)}moveCard(t){let e=(this.column+2)*this.basicSize;for(let r=0;r<t.length;r++)t[r].style.left=this.basicSize/2+r*this.basicSize+"px",t[r].style.top=e+"px"}checkUpCard(t){let e=parseInt(t.getAttribute("row")),r=parseInt(t.getAttribute("col")),i=parseInt(t.getAttribute("deepth"));this.cardArray[i][e][r]=0;let o=0,n=t.firstElementChild.getAttribute("type"),s=[];this.toDoCard.forEach((t=>{t.firstElementChild.getAttribute("type")===n&&(o++,s.push(t))})),console.log("samenum-----\x3e",o),o>=3&&(this.toDoCard=this.toDoCard.filter((t=>(console.log(t.firstElementChild.getAttribute("type")),t.firstElementChild.getAttribute("type")!==n))),s.forEach((t=>{this.box.removeChild(t)})),console.log(" 剩余的-----》",this.toDoCard),this.moveCard(this.toDoCard)),this.toDoCard.length>=this.maxCardNum&&alert("game over")}}(document.querySelector(".container"))}},e={};function r(i){var o=e[i];if(void 0!==o)return o.exports;var n=e[i]={id:i,exports:{}};return t[i](n,n.exports,r),n.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var i in e)r.o(e,i)&&!r.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(268),r(618),r(602)})();