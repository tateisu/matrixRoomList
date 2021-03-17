/*! sortable-table(https://github.com/riversun/sortable-table) v1.1.2 Copyright (c) 2020 riversun.org@gmail.com */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("SortableTable",[],t):"object"==typeof exports?exports.SortableTable=t():e.SortableTable=t()}(this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=2)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,s,l;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);r&&o[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){
/*! event-emitter(https://github.com/riversun/event-emitter) v1.2.2 Copyright (c) 2020 riversun.org@gmail.com */
e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==n.return||n.return()}finally{if(l)throw a}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}n.r(t),n.d(t,"default",(function(){return l})),n.d(t,"EventListenerList",(function(){return u})),n.d(t,"EventListenerMap",(function(){return c}));var l=function(){function e(t){if(i(this,e),this.onListeners=new Map,this.onlyListeners=new Map,t){var n,o=r(t);try{for(o.s();!(n=o.n()).done;){var a=n.value,s=new u;this.onListeners.set(a,s)}}catch(e){o.e(e)}finally{o.f()}}this.childEventEmitters=[]}return s(e,[{key:"on",value:function(e,t){var n=this.onListeners.get(e);n||(n=new u,this.onListeners.set(e,n)),n.addListenerFunc(t)}},{key:"only",value:function(e,t,n){var r=this.onlyListeners.get(e);r||(r=new c,this.onlyListeners.set(e,r)),r.putListenerFunc(t,n)}},{key:"pipe",value:function(e){this.childEventEmitters.push(e)}},{key:"emit",value:function(e,t){var n=this.onListeners.get(e);n&&(t.eventType=e,n.callListenerFunc(t));var o=this.onlyListeners.get(e);o&&(t.eventType=e,o.callListenerFunc(t));var i,a=r(this.childEventEmitters);try{for(a.s();!(i=a.n()).done;)i.value.emit(e,t)}catch(e){a.e(e)}finally{a.f()}}},{key:"hasListenerFuncs",value:function(e){if(this.onListeners.has(e)){var t=this.onListeners.get(e);if(t&&t.hasListenerFunc())return!0}var n,o=r(this.childEventEmitters);try{for(o.s();!(n=o.n()).done;)if(n.value.hasListenerFuncs(e))return!0}catch(e){o.e(e)}finally{o.f()}return!1}},{key:"clearAll",value:function(){var e,t=r(this.onListeners.values());try{for(t.s();!(e=t.n()).done;)e.value.clearAll()}catch(e){t.e(e)}finally{t.f()}this.onListeners.clear();var n,o=r(this.onlyListeners.values());try{for(o.s();!(n=o.n()).done;)n.value.clearAll()}catch(e){o.e(e)}finally{o.f()}this.onlyListeners.clear(),this.childEventEmitters=[]}}]),e}(),u=function(){function e(){i(this,e),this.listenerFuncs=[]}return s(e,[{key:"clearAll",value:function(){this.listenerFuncs=[]}},{key:"hasListenerFunc",value:function(){return this.listenerFuncs.length>0}},{key:"addListenerFunc",value:function(e){this.listenerFuncs.push(e)}},{key:"callListenerFunc",value:function(e){var t,n=r(this.listenerFuncs);try{for(n.s();!(t=n.n()).done;){var o=t.value;if("Function"!==this.typeOf(o))throw Error('[@riversun/event-emitter] listenerFunction you set is not a function. listenerFunction:"'.concat(o,'".Check args of #only method or #on method.'));o(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}]),e}(),c=function(){function e(){i(this,e),this.listenerFuncMap=new Map}return s(e,[{key:"clearAll",value:function(){this.listenerFuncMap.clear()}},{key:"hasListenerFunc",value:function(e){return this.listenerFuncMap.has(e)}},{key:"putListenerFunc",value:function(e,t){this.listenerFuncMap.set(e,t)}},{key:"callListenerFunc",value:function(e){var t,n=r(this.listenerFuncMap.values());try{for(n.s();!(t=n.n()).done;){var o=t.value;if("Function"!==this.typeOf(o))throw Error('[@riversun/event-emitter] listenerFunction you set is not a function. listenerFunction:"'.concat(o,'".Check args of #only method or #on method.'));o(e)}}catch(e){n.e(e)}finally{n.f()}}},{key:"typeOf",value:function(e){return Object.prototype.toString.call(e).slice(8,-1)}}]),e}()}]).default},function(e,t,n){e.exports=n(6)},function(e,t,n){var r=n(4),o=n(5);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);e.exports=o.locals||{}},function(e,t,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function s(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function l(e,t){for(var n={},r=[],o=0;o<e.length;o++){var i=e[o],l=t.base?i[0]+t.base:i[0],u=n[l]||0,c="".concat(l," ").concat(u);n[l]=u+1;var f=s(c),d={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:c,updater:p(d,t),references:1}),r.push(c)}return r}function u(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var c,f=(c=[],function(e,t){return c[e]=t,c.filter(Boolean).join("\n")});function d(e,t,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function h(e,t,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var v=null,y=0;function p(e,t){var n,r,o;if(t.singleton){var i=y++;n=v||(v=u(t)),r=d.bind(null,n,i,!1),o=d.bind(null,n,i,!0)}else n=u(t),r=h.bind(null,n,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var n=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var o=s(n[r]);a[o].references--}for(var i=l(e,t),u=0;u<n.length;u++){var c=s(n[u]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=i}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r)()(!1);o.push([e.i,'.sortable-table thead th{vertical-align:bottom;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.sortable-table thead th.sortable{cursor:pointer;background-position:right;background-repeat:no-repeat;padding-right:20px !important}.sortable-table thead th.sort{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAkElEQVQ4T73UMQ6AIAyF4Z/E0dHRIzh4/1M4eARHR0cH0wQMMdBC0sgMH4VXCDiP4OzRAg7AEjfegVsrwgIFW4ExIhewaagGfrFUmIrWwBpmoiXQwlS0BEoAU2P6JyBBvaMEzp3gYYGNxZWnWW3Tjf9yZPdQ3NtG7s1Cq6/lt6eX0nX9HHLU7fty6cNuJF/wAAIWJBX1VHH6AAAAAElFTkSuQmCC")}.sortable-table thead th.sort-asc{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAgUlEQVQ4T+3SsQ2AIBCF4Z/eMdxCx3ARB7ByABdxDN3CMRzAkKCFHneQUFhwNXxc3sNReFxhjxSwAebw8ASc2hIW6LEFaANyAKOGauAbuxdT0RgYw0xUAi1MRSXQF9Antr8BvqhnJHAAukRwB1YLTLTkY9a3ycYrmB3Z50LN8IcZXsnkEhVNjPJpAAAAAElFTkSuQmCC")}.sortable-table thead th.sort-desc{background-image:url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAfUlEQVQ4T2NkoDJgpLJ5DKMGUh6io2E4RMIwhIGBwZpItx5lYGBYg6wWWyw3MzAw2BBp4BEGBoZaQgbyMDAw9DMwMKgQMPQOAwNDIQMDwxdCBoLkCRmK1TCQRnwJG5ehOA0jZCA2l+I1jBgDYYaCIgoEQBGAEmbo4Tz48zIAQNgSFR9+d5MAAAAASUVORK5CYII=")}\n',""]),t.default=o},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));n(3);var r=n(1),o=n.n(r);function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.listeners=new Map,this.listenerNum=0}var t,n,r;return t=e,(n=[{key:"addListener",value:function(e,t,n,r){var o={listenerName:null,success:!0};e.addEventListener(t,n);var i=this.listeners.get(e);i||(i=new Map,this.listeners.set(e,i));var a=i.get(t);if(a||(a=new Map,i.set(t,a)),void 0!==r)a.set(r,n),o.listenerName=r;else{var s="listener-".concat(this.listenerNum);a.set(s,n),o.listenerName=s,this.listenerNum+=1}return o}},{key:"removeListener",value:function(e,t,n){var r={success:!1,message:"unknown error"},o=this.listeners.get(e);if(!o)return r.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have any listeners."),r;var i=o.get(t);if(!i)return r.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listeners.'),r;var a=i.get(n);return a?(i.delete(n),e.removeEventListener(t,a),r.success=!0,r):(r.message="DOM element ".concat(e,"(id=").concat(e.id,") doesn't have \"").concat(t,'" listener "').concat(n,'"'),r)}}])&&i(t.prototype,n),r&&i(t,r),e}();function s(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw i}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.tableEle=null,this.colConfs=null,this.srcRows=null,this.rows=null,this.selectedColId=null,this.eventEmitter=new o.a(["sort"]),this.listenerMgr=new a,this.fnCellRender=function(e,t){var n=t[e.id];return e.isHeader?void 0!==n?"<th>".concat(n,"</th>"):"<th></th>":void 0!==n?"<td>".concat(n,"</td>"):"<td></td>"}}var t,n,r;return t=e,(n=[{key:"setTable",value:function(e){return this.tableEle=e,this._setupColumnConfig(),this}},{key:"events",value:function(){return this.eventEmitter}},{key:"setData",value:function(e){return this.srcRows=e,this.rows=this._cloneRows(e),this._updateTableRows(this.rows),this}},{key:"setCellRenderer",value:function(e){this.fnCellRender=e}},{key:"resetData",value:function(){return this._removeSortDirFromView(),this.selectedColId=null,this._setupColumnConfig(),this.rows=this._cloneRows(this.srcRows),this._updateTableRows(this.rows),this}},{key:"getData",value:function(){return this.rows}},{key:"_sortRows",value:function(e,t){this.rows.sort((function(n,r){var o="asc"===t?1:-1;return n[e]<r[e]?-1*o:n[e]>r[e]?o:0}))}},{key:"_hasAttr",value:function(e,t){return e.hasAttribute(t)}},{key:"_isElementSortable",value:function(e){return this._hasAttr(e,"sortable")}},{key:"_cloneRows",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"_isElementDataHeader",value:function(e){return this._hasAttr(e,"data-header")}},{key:"_onSortClick",value:function(e){var t=e.target.getAttribute("data-id");this.sort(t)}},{key:"_removeSortDirFromView",value:function(){var e,t=s(this.tableEle.querySelectorAll("th"));try{for(t.s();!(e=t.n()).done;){var n=e.value;n.classList.remove("sort-desc"),n.classList.remove("sort-asc")}}catch(e){t.e(e)}finally{t.f()}}},{key:"sort",value:function(e,t){var n=this.tableEle.querySelector('[data-id="'.concat(e,'"]')),r=this._getColumnConf(e);if(!r)throw Error('data-id "'.concat(e,'" is not found.'));this._removeSortDirFromView(),t?(this.selectedColId=e,r.sortDir="toggle"===t?this._getInversedSortDir(r.sortDir):t):t||(this.selectedColId===e?r.sortDir=this._getInversedSortDir(r.sortDir):this.selectedColId=e),n.classList.add("sort-".concat(r.sortDir)),this._sortRows(e,r.sortDir),this._updateTableRows(this.rows),this.eventEmitter.emit("sort",{target:this.tableEle,colId:e,sortDir:r.sortDir,data:this.rows})}},{key:"_getInversedSortDir",value:function(e){return e&&"desc"!==e?"desc":"asc"}},{key:"_setupColumnConfig",value:function(){this.colConfs=new Map;var e,t=s(this.tableEle.querySelectorAll("thead tr th"));try{for(t.s();!(e=t.n()).done;){var n=e.value,r=n.getAttribute("data-id"),o=this._isElementDataHeader(n),i=this._isElementSortable(n);if(i){n.classList.add("sortable");var a=this._onSortClick.bind(this),l="sortable-table-on-click";this.listenerMgr.removeListener(n,"click",l),this.listenerMgr.addListener(n,"click",a,l),n.classList.add("sort")}var u={id:r,isHeader:o,sortable:i,sortDir:"asc"};this.colConfs.set(r,u)}}catch(e){t.e(e)}finally{t.f()}}},{key:"_getColumnConf",value:function(e){return this.colConfs.get(e)}},{key:"_getColumnConfAll",value:function(){return this.colConfs}},{key:"_removeTbody",value:function(){var e=this.tableEle.querySelector("tbody");e&&this.tableEle.removeChild(e)}},{key:"_updateTableRows",value:function(){this._removeTbody();var e,t="<tbody>",n=s(this.rows);try{for(n.s();!(e=n.n()).done;){var r=e.value;t+="<tr>";var o,i=s(this.colConfs.values());try{for(i.s();!(o=i.n()).done;){var a=o.value;t+=this.fnCellRender(a,r)}}catch(e){i.e(e)}finally{i.f()}t+="</tr>"}}catch(e){n.e(e)}finally{n.f()}t+="</tbody>",this.tableEle.insertAdjacentHTML("beforeEnd",t)}}])&&u(t.prototype,n),r&&u(t,r),e}()}]).default}));
