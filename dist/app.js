!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e,r){var n=r(1);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};r(2)(n,o);n.locals&&(t.exports=n.locals)},function(t,e,r){},function(t,e,r){var n,o,i={},a=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=n.apply(this,arguments)),o}),c=function(t){var e={};return function(t,r){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,r);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),l=null,u=0,s=[],f=r(3);function p(t,e){for(var r=0;r<t.length;r++){var n=t[r],o=i[n.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](n.parts[a]);for(;a<n.parts.length;a++)o.parts.push(g(n.parts[a],e))}else{var c=[];for(a=0;a<n.parts.length;a++)c.push(g(n.parts[a],e));i[n.id]={id:n.id,refs:1,parts:c}}}}function d(t,e){for(var r=[],n={},o=0;o<t.length;o++){var i=t[o],a=e.base?i[0]+e.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]})}return r}function h(t,e){var r=c(t.insertInto);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=s[s.length-1];if("top"===t.insertAt)n?n.nextSibling?r.insertBefore(e,n.nextSibling):r.appendChild(e):r.insertBefore(e,r.firstChild),s.push(e);else if("bottom"===t.insertAt)r.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,r);r.insertBefore(e,o)}}function y(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=s.indexOf(t);e>=0&&s.splice(e,1)}function b(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var n=function(){0;return r.nc}();n&&(t.attrs.nonce=n)}return v(e,t.attrs),h(t,e),e}function v(t,e){Object.keys(e).forEach(function(r){t.setAttribute(r,e[r])})}function g(t,e){var r,n,o,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var a=u++;r=l||(l=b(e)),n=O.bind(null,r,a,!1),o=O.bind(null,r,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(r=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),h(t,e),e}(e),n=function(t,e,r){var n=r.css,o=r.sourceMap,i=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||i)&&(n=f(n));o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([n],{type:"text/css"}),c=t.href;t.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,r,e),o=function(){y(r),r.href&&URL.revokeObjectURL(r.href)}):(r=b(e),n=function(t,e){var r=e.css,n=e.media;n&&t.setAttribute("media",n);if(t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}.bind(null,r),o=function(){y(r)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var r=d(t,e);return p(r,e),function(t){for(var n=[],o=0;o<r.length;o++){var a=r[o];(c=i[a.id]).refs--,n.push(c)}t&&p(d(t,e),e);for(o=0;o<n.length;o++){var c;if(0===(c=n[o]).refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete i[c.id]}}}};var m,w=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function O(t,e,r,n){var o=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var r=e.protocol+"//"+e.host,n=r+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var o,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?r+i:n+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(t,e,r){var n,o;
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
!function(i,a){"use strict";void 0===(o="function"==typeof(n=function(){var t,e,r,n,o=Function.call,i=Object.prototype,a=o.bind(i.hasOwnProperty),c=o.bind(i.propertyIsEnumerable),l=o.bind(i.toString),u=a(i,"__defineGetter__");u&&(t=o.bind(i.__defineGetter__),e=o.bind(i.__defineSetter__),r=o.bind(i.__lookupGetter__),n=o.bind(i.__lookupSetter__));var s=function(t){return null==t||"object"!=typeof t&&"function"!=typeof t};Object.getPrototypeOf||(Object.getPrototypeOf=function(t){var e=t.__proto__;return e||null===e?e:"[object Function]"===l(t.constructor)?t.constructor.prototype:t instanceof Object?i:null});var f=function(t){try{return t.sentinel=0,0===Object.getOwnPropertyDescriptor(t,"sentinel").value}catch(t){return!1}};if(Object.defineProperty){var p=f({}),d="undefined"==typeof document||f(document.createElement("div"));if(!d||!p)var h=Object.getOwnPropertyDescriptor}if(!Object.getOwnPropertyDescriptor||h){Object.getOwnPropertyDescriptor=function(t,e){if(s(t))throw new TypeError("Object.getOwnPropertyDescriptor called on a non-object: "+t);if(h)try{return h.call(Object,t,e)}catch(t){}var o;if(!a(t,e))return o;if(o={enumerable:c(t,e),configurable:!0},u){var l=t.__proto__,f=t!==i;f&&(t.__proto__=i);var p=r(t,e),d=n(t,e);if(f&&(t.__proto__=l),p||d)return p&&(o.get=p),d&&(o.set=d),o}return o.value=t[e],o.writable=!0,o}}Object.getOwnPropertyNames||(Object.getOwnPropertyNames=function(t){return Object.keys(t)});if(!Object.create){var y,b=!({__proto__:null}instanceof Object);y=b||"undefined"==typeof document?function(){return{__proto__:null}}:function(){var t=function(){if(!document.domain)return!1;try{return!!new ActiveXObject("htmlfile")}catch(t){return!1}}()?function(){var t,e;e=new ActiveXObject("htmlfile");var r="script";return e.write("<"+r+"></"+r+">"),e.close(),t=e.parentWindow.Object.prototype,e=null,t}():function(){var t,e=document.createElement("iframe"),r=document.body||document.documentElement;return e.style.display="none",r.appendChild(e),e.src="javascript:",t=e.contentWindow.Object.prototype,r.removeChild(e),e=null,t}();delete t.constructor,delete t.hasOwnProperty,delete t.propertyIsEnumerable,delete t.isPrototypeOf,delete t.toLocaleString,delete t.toString,delete t.valueOf;var e=function(){};return e.prototype=t,y=function(){return new e},new e},Object.create=function(t,e){var r,n=function(){};if(null===t)r=y();else{if(null!==t&&s(t))throw new TypeError("Object prototype may only be an Object or null");n.prototype=t,(r=new n).__proto__=t}return void 0!==e&&Object.defineProperties(r,e),r}}var v=function(t){try{return Object.defineProperty(t,"sentinel",{}),"sentinel"in t}catch(t){return!1}};if(Object.defineProperty){var g=v({}),m="undefined"==typeof document||v(document.createElement("div"));if(!g||!m)var w=Object.defineProperty,O=Object.defineProperties}if(!Object.defineProperty||w){Object.defineProperty=function(o,a,c){if(s(o))throw new TypeError("Object.defineProperty called on non-object: "+o);if(s(c))throw new TypeError("Property description must be an object: "+c);if(w)try{return w.call(Object,o,a,c)}catch(t){}if("value"in c)if(u&&(r(o,a)||n(o,a))){var l=o.__proto__;o.__proto__=i,delete o[a],o[a]=c.value,o.__proto__=l}else o[a]=c.value;else{var f="get"in c,p="set"in c;if(!u&&(f||p))throw new TypeError("getters & setters can not be defined on this javascript engine");f&&t(o,a,c.get),p&&e(o,a,c.set)}return o}}Object.defineProperties&&!O||(Object.defineProperties=function(t,e){if(O)try{return O.call(Object,t,e)}catch(t){}return Object.keys(e).forEach(function(r){"__proto__"!==r&&Object.defineProperty(t,r,e[r])}),t});Object.seal||(Object.seal=function(t){if(Object(t)!==t)throw new TypeError("Object.seal can only be called on Objects.");return t});Object.freeze||(Object.freeze=function(t){if(Object(t)!==t)throw new TypeError("Object.freeze can only be called on Objects.");return t});try{Object.freeze(function(){})}catch(t){Object.freeze=function(t){return function(e){return"function"==typeof e?e:t(e)}}(Object.freeze)}Object.preventExtensions||(Object.preventExtensions=function(t){if(Object(t)!==t)throw new TypeError("Object.preventExtensions can only be called on Objects.");return t});Object.isSealed||(Object.isSealed=function(t){if(Object(t)!==t)throw new TypeError("Object.isSealed can only be called on Objects.");return!1});Object.isFrozen||(Object.isFrozen=function(t){if(Object(t)!==t)throw new TypeError("Object.isFrozen can only be called on Objects.");return!1});Object.isExtensible||(Object.isExtensible=function(t){if(Object(t)!==t)throw new TypeError("Object.isExtensible can only be called on Objects.");for(var e="";a(t,e);)e+="?";t[e]=!0;var r=a(t,e);return delete t[e],r})})?n.call(e,r,e,t):n)||(t.exports=o)}()},function(t,e,r){var n,o;
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.5.10/LICENSE
 */
!function(i,a){"use strict";void 0===(o="function"==typeof(n=function(){var t,e,r=Array,n=r.prototype,o=Object,i=o.prototype,a=Function,c=a.prototype,l=String,u=l.prototype,s=Number,f=s.prototype,p=n.slice,d=n.splice,h=n.push,y=n.unshift,b=n.concat,v=n.join,g=c.call,m=c.apply,w=Math.max,O=Math.min,j=i.toString,T="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,E=Function.prototype.toString,x=/^\s*class /,S=function(t){try{var e=E.call(t),r=e.replace(/\/\/.*\n/g,""),n=r.replace(/\/\*[.\s\S]*\*\//g,""),o=n.replace(/\n/gm," ").replace(/ {2}/g," ");return x.test(o)}catch(t){return!1}},_=function(t){try{return!S(t)&&(E.call(t),!0)}catch(t){return!1}},D="[object Function]",I="[object GeneratorFunction]",M=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(T)return _(t);if(S(t))return!1;var e=j.call(t);return e===D||e===I},U=RegExp.prototype.exec,k=function(t){try{return U.call(t),!0}catch(t){return!1}},N="[object RegExp]";t=function(t){return"object"==typeof t&&(T?k(t):j.call(t)===N)};var P=String.prototype.valueOf,C=function(t){try{return P.call(t),!0}catch(t){return!1}},A="[object String]";e=function(t){return"string"==typeof t||"object"==typeof t&&(T?C(t):j.call(t)===A)};var F=o.defineProperty&&function(){try{var t={};for(var e in o.defineProperty(t,"x",{enumerable:!1,value:t}),t)return!1;return t.x===t}catch(t){return!1}}(),R=function(t){var e;return e=F?function(t,e,r,n){!n&&e in t||o.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:!0,value:r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(i.hasOwnProperty),B=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},L=s.isNaN||function(t){return t!=t},$={ToInteger:function(t){var e=+t;return L(e)?e=0:0!==e&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},ToPrimitive:function(t){var e,r,n;if(B(t))return t;if(r=t.valueOf,M(r)&&(e=r.call(t),B(e)))return e;if(n=t.toString,M(n)&&(e=n.call(t),B(e)))return e;throw new TypeError},ToObject:function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return o(t)},ToUint32:function(t){return t>>>0}},z=function(){};R(c,{bind:function(t){var e=this;if(!M(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,n=p.call(arguments,1),i=function(){if(this instanceof r){var i=m.call(e,this,b.call(n,p.call(arguments)));return o(i)===i?i:this}return m.call(e,t,b.call(n,p.call(arguments)))},c=w(0,e.length-n.length),l=[],u=0;u<c;u++)h.call(l,"$"+u);return r=a("binder","return function ("+v.call(l,",")+"){ return binder.apply(this, arguments); }")(i),e.prototype&&(z.prototype=e.prototype,r.prototype=new z,z.prototype=null),r}});var J=g.bind(i.hasOwnProperty),G=g.bind(i.toString),Z=g.bind(p),Y=m.bind(p);if("object"==typeof document&&document&&document.documentElement)try{Z(document.documentElement.childNodes)}catch(t){var H=Z,W=Y;Z=function(t){for(var e=[],r=t.length;r-- >0;)e[r]=t[r];return W(e,H(arguments,1))},Y=function(t,e){return W(Z(t),e)}}var q=g.bind(u.slice),X=g.bind(u.split),K=g.bind(u.indexOf),Q=g.bind(h),V=g.bind(i.propertyIsEnumerable),tt=g.bind(n.sort),et=r.isArray||function(t){return"[object Array]"===G(t)},rt=1!==[].unshift(0);R(n,{unshift:function(){return y.apply(this,arguments),this.length}},rt),R(r,{isArray:et});var nt=o("a"),ot="a"!==nt[0]||!(0 in nt),it=function(t){var e=!0,r=!0,n=!1;if(t)try{t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){r="string"==typeof this},"x")}catch(t){n=!0}return!!t&&!n&&e&&r};R(n,{forEach:function(t){var r,n=$.ToObject(this),o=ot&&e(this)?X(this,""):n,i=-1,a=$.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!M(t))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++i<a;)i in o&&(void 0===r?t(o[i],i,n):t.call(r,o[i],i,n))}},!it(n.forEach)),R(n,{map:function(t){var n,o=$.ToObject(this),i=ot&&e(this)?X(this,""):o,a=$.ToUint32(i.length),c=r(a);if(arguments.length>1&&(n=arguments[1]),!M(t))throw new TypeError("Array.prototype.map callback must be a function");for(var l=0;l<a;l++)l in i&&(c[l]=void 0===n?t(i[l],l,o):t.call(n,i[l],l,o));return c}},!it(n.map)),R(n,{filter:function(t){var r,n,o=$.ToObject(this),i=ot&&e(this)?X(this,""):o,a=$.ToUint32(i.length),c=[];if(arguments.length>1&&(n=arguments[1]),!M(t))throw new TypeError("Array.prototype.filter callback must be a function");for(var l=0;l<a;l++)l in i&&(r=i[l],(void 0===n?t(r,l,o):t.call(n,r,l,o))&&Q(c,r));return c}},!it(n.filter)),R(n,{every:function(t){var r,n=$.ToObject(this),o=ot&&e(this)?X(this,""):n,i=$.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!M(t))throw new TypeError("Array.prototype.every callback must be a function");for(var a=0;a<i;a++)if(a in o&&!(void 0===r?t(o[a],a,n):t.call(r,o[a],a,n)))return!1;return!0}},!it(n.every)),R(n,{some:function(t){var r,n=$.ToObject(this),o=ot&&e(this)?X(this,""):n,i=$.ToUint32(o.length);if(arguments.length>1&&(r=arguments[1]),!M(t))throw new TypeError("Array.prototype.some callback must be a function");for(var a=0;a<i;a++)if(a in o&&(void 0===r?t(o[a],a,n):t.call(r,o[a],a,n)))return!0;return!1}},!it(n.some));var at=!1;n.reduce&&(at="object"==typeof n.reduce.call("es5",function(t,e,r,n){return n}));R(n,{reduce:function(t){var r=$.ToObject(this),n=ot&&e(this)?X(this,""):r,o=$.ToUint32(n.length);if(!M(t))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===o&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var i,a=0;if(arguments.length>=2)i=arguments[1];else for(;;){if(a in n){i=n[a++];break}if(++a>=o)throw new TypeError("reduce of empty array with no initial value")}for(;a<o;a++)a in n&&(i=t(i,n[a],a,r));return i}},!at);var ct=!1;n.reduceRight&&(ct="object"==typeof n.reduceRight.call("es5",function(t,e,r,n){return n}));R(n,{reduceRight:function(t){var r,n=$.ToObject(this),o=ot&&e(this)?X(this,""):n,i=$.ToUint32(o.length);if(!M(t))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===i&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var a=i-1;if(arguments.length>=2)r=arguments[1];else for(;;){if(a in o){r=o[a--];break}if(--a<0)throw new TypeError("reduceRight of empty array with no initial value")}if(a<0)return r;do{a in o&&(r=t(r,o[a],a,n))}while(a--);return r}},!ct);var lt=n.indexOf&&-1!==[0,1].indexOf(1,2);R(n,{indexOf:function(t){var r=ot&&e(this)?X(this,""):$.ToObject(this),n=$.ToUint32(r.length);if(0===n)return-1;var o=0;for(arguments.length>1&&(o=$.ToInteger(arguments[1])),o=o>=0?o:w(0,n+o);o<n;o++)if(o in r&&r[o]===t)return o;return-1}},lt);var ut=n.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);R(n,{lastIndexOf:function(t){var r=ot&&e(this)?X(this,""):$.ToObject(this),n=$.ToUint32(r.length);if(0===n)return-1;var o=n-1;for(arguments.length>1&&(o=O(o,$.ToInteger(arguments[1]))),o=o>=0?o:n-Math.abs(o);o>=0;o--)if(o in r&&t===r[o])return o;return-1}},ut);var st=function(){var t=[1,2],e=t.splice();return 2===t.length&&et(e)&&0===e.length}();R(n,{splice:function(t,e){return 0===arguments.length?[]:d.apply(this,arguments)}},!st);var ft=function(){var t={};return n.splice.call(t,0,0,1),1===t.length}();R(n,{splice:function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=w($.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&((r=Z(arguments)).length<2?Q(r,this.length-t):r[1]=$.ToInteger(e)),d.apply(this,r)}},!ft);var pt=function(){var t=new r(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),dt=function(){var t=[];return t[256]="a",t.splice(257,0,"b"),"a"===t[256]}();R(n,{splice:function(t,e){for(var r,n=$.ToObject(this),o=[],i=$.ToUint32(n.length),a=$.ToInteger(t),c=a<0?w(i+a,0):O(a,i),u=O(w($.ToInteger(e),0),i-c),s=0;s<u;)r=l(c+s),J(n,r)&&(o[s]=n[r]),s+=1;var f,p=Z(arguments,2),d=p.length;if(d<u){s=c;for(var h=i-u;s<h;)r=l(s+u),f=l(s+d),J(n,r)?n[f]=n[r]:delete n[f],s+=1;s=i;for(var y=i-u+d;s>y;)delete n[s-1],s-=1}else if(d>u)for(s=i-u;s>c;)r=l(s+u-1),f=l(s+d-1),J(n,r)?n[f]=n[r]:delete n[f],s-=1;s=c;for(var b=0;b<p.length;++b)n[s]=p[b],s+=1;return n.length=i-u+d,o}},!pt||!dt);var ht,yt=n.join;try{ht="1,2,3"!==Array.prototype.join.call("123",",")}catch(t){ht=!0}ht&&R(n,{join:function(t){var r=void 0===t?",":t;return yt.call(e(this)?X(this,""):this,r)}},ht);var bt="1,2"!==[1,2].join(void 0);bt&&R(n,{join:function(t){var e=void 0===t?",":t;return yt.call(this,e)}},bt);var vt=function(t){for(var e=$.ToObject(this),r=$.ToUint32(e.length),n=0;n<arguments.length;)e[r+n]=arguments[n],n+=1;return e.length=r+n,r+n},gt=function(){var t={},e=Array.prototype.push.call(t,void 0);return 1!==e||1!==t.length||void 0!==t[0]||!J(t,0)}();R(n,{push:function(t){return et(this)?h.apply(this,arguments):vt.apply(this,arguments)}},gt);var mt=function(){var t=[],e=t.push(void 0);return 1!==e||1!==t.length||void 0!==t[0]||!J(t,0)}();R(n,{push:vt},mt),R(n,{slice:function(t,r){var n=e(this)?X(this,""):this;return Y(n,arguments)}},ot);var wt=function(){try{[1,2].sort(null)}catch(t){try{[1,2].sort({})}catch(t){return!1}}return!0}(),Ot=function(){try{return[1,2].sort(/a/),!1}catch(t){}return!0}(),jt=function(){try{return[1,2].sort(void 0),!0}catch(t){}return!1}();R(n,{sort:function(t){if(void 0===t)return tt(this);if(!M(t))throw new TypeError("Array.prototype.sort callback must be a function");return tt(this,t)}},wt||!jt||!Ot);var Tt=!V({toString:null},"toString"),Et=V(function(){},"prototype"),xt=!J("x","0"),St=function(t){var e=t.constructor;return e&&e.prototype===t},_t={$window:!0,$console:!0,$parent:!0,$self:!0,$frame:!0,$frames:!0,$frameElement:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$external:!0,$width:!0,$height:!0,$top:!0,$localStorage:!0},Dt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!_t["$"+t]&&J(window,t)&&null!==window[t]&&"object"==typeof window[t]&&St(window[t])}catch(t){return!0}return!1}(),It=function(t){if("undefined"==typeof window||!Dt)return St(t);try{return St(t)}catch(t){return!1}},Mt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Ut=Mt.length,kt=function(t){return"[object Arguments]"===G(t)},Nt=function(t){return null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&!et(t)&&M(t.callee)},Pt=kt(arguments)?kt:Nt;R(o,{keys:function(t){var r=M(t),n=Pt(t),o=null!==t&&"object"==typeof t,i=o&&e(t);if(!o&&!r&&!n)throw new TypeError("Object.keys called on a non-object");var a=[],c=Et&&r;if(i&&xt||n)for(var u=0;u<t.length;++u)Q(a,l(u));if(!n)for(var s in t)c&&"prototype"===s||!J(t,s)||Q(a,l(s));if(Tt)for(var f=It(t),p=0;p<Ut;p++){var d=Mt[p];f&&"constructor"===d||!J(t,d)||Q(a,d)}return a}});var Ct=o.keys&&function(){return 2===o.keys(arguments).length}(1,2),At=o.keys&&function(){var t=o.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),Ft=o.keys;R(o,{keys:function(t){return Pt(t)?Ft(Z(t)):Ft(t)}},!Ct||At);var Rt,Bt,Lt=0!==new Date(-0xc782b5b342b24).getUTCMonth(),$t=new Date(-0x55d318d56a724),zt=new Date(14496624e5),Jt="Mon, 01 Jan -45875 11:59:59 GMT"!==$t.toUTCString(),Gt=$t.getTimezoneOffset();Gt<-720?(Rt="Tue Jan 02 -45875"!==$t.toDateString(),Bt=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(zt))):(Rt="Mon Jan 01 -45875"!==$t.toDateString(),Bt=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-+]\d\d\d\d(?: |$)/.test(String(zt)));var Zt=g.bind(Date.prototype.getFullYear),Yt=g.bind(Date.prototype.getMonth),Ht=g.bind(Date.prototype.getDate),Wt=g.bind(Date.prototype.getUTCFullYear),qt=g.bind(Date.prototype.getUTCMonth),Xt=g.bind(Date.prototype.getUTCDate),Kt=g.bind(Date.prototype.getUTCDay),Qt=g.bind(Date.prototype.getUTCHours),Vt=g.bind(Date.prototype.getUTCMinutes),te=g.bind(Date.prototype.getUTCSeconds),ee=g.bind(Date.prototype.getUTCMilliseconds),re=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],ne=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],oe=function(t,e){return Ht(new Date(e,t,0))};R(Date.prototype,{getFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this);return t<0&&Yt(this)>11?t+1:t},getMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this),e=Yt(this);return t<0&&e>11?0:e},getDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this),e=Yt(this),r=Ht(this);return t<0&&e>11?12===e?r:oe(0,t+1)-r+1:r},getUTCFullYear:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Wt(this);return t<0&&qt(this)>11?t+1:t},getUTCMonth:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Wt(this),e=qt(this);return t<0&&e>11?0:e},getUTCDate:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Wt(this),e=qt(this),r=Xt(this);return t<0&&e>11?12===e?r:oe(0,t+1)-r+1:r}},Lt),R(Date.prototype,{toUTCString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Kt(this),e=Xt(this),r=qt(this),n=Wt(this),o=Qt(this),i=Vt(this),a=te(this);return re[t]+", "+(e<10?"0"+e:e)+" "+ne[r]+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"}},Lt||Jt),R(Date.prototype,{toDateString:function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return re[t]+" "+ne[r]+" "+(e<10?"0"+e:e)+" "+n}},Lt||Rt),(Lt||Bt)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),c=this.getTimezoneOffset(),l=Math.floor(Math.abs(c)/60),u=Math.floor(Math.abs(c)%60);return re[t]+" "+ne[r]+" "+(e<10?"0"+e:e)+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"+(c>0?"-":"+")+(l<10?"0"+l:l)+(u<10?"0"+u:u)},F&&o.defineProperty(Date.prototype,"toString",{configurable:!0,enumerable:!1,writable:!0}));var ie=-621987552e5,ae="-000001",ce=Date.prototype.toISOString&&-1===new Date(ie).toISOString().indexOf(ae),le=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString(),ue=g.bind(Date.prototype.getTime);R(Date.prototype,{toISOString:function(){if(!isFinite(this)||!isFinite(ue(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Wt(this),e=qt(this);t+=Math.floor(e/12);var r=[(e=(e%12+12)%12)+1,Xt(this),Qt(this),Vt(this),te(this)];t=(t<0?"-":t>9999?"+":"")+q("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<r.length;++n)r[n]=q("00"+r[n],-2);return t+"-"+Z(r,0,2).join("-")+"T"+Z(r,2).join(":")+"."+q("000"+ee(this),-3)+"Z"}},ce||le);var se=function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(ie).toJSON().indexOf(ae)&&Date.prototype.toJSON.call({toISOString:function(){return!0}})}catch(t){return!1}}();se||(Date.prototype.toJSON=function(t){var e=o(this),r=$.ToPrimitive(e);if("number"==typeof r&&!isFinite(r))return null;var n=e.toISOString;if(!M(n))throw new TypeError("toISOString property is not callable");return n.call(e)});var fe=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),pe=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z")),de=isNaN(Date.parse("2000-01-01T00:00:00.000Z"));if(de||pe||!fe){var he=Math.pow(2,31)-1,ye=L(new Date(1970,0,1,0,0,0,he+1).getTime());Date=function(t){var e=function(r,n,o,i,a,c,u){var s,f=arguments.length;if(this instanceof t){var p=c,d=u;if(ye&&f>=7&&u>he){var h=Math.floor(u/he)*he,y=Math.floor(h/1e3);p+=y,d-=1e3*y}s=1===f&&l(r)===r?new t(e.parse(r)):f>=7?new t(r,n,o,i,a,p,d):f>=6?new t(r,n,o,i,a,p):f>=5?new t(r,n,o,i,a):f>=4?new t(r,n,o,i):f>=3?new t(r,n,o):f>=2?new t(r,n):f>=1?new t(r instanceof t?+r:r):new t}else s=t.apply(this,arguments);return B(s)||R(s,{constructor:e},!0),s},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)},i=function(e){var r=0,n=e;if(ye&&n>he){var o=Math.floor(n/he)*he,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return s(new t(1970,0,1,0,0,r,n))};for(var a in t)J(t,a)&&(e[a]=t[a]);R(e,{now:t.now,UTC:t.UTC},!0),e.prototype=t.prototype,R(e.prototype,{constructor:e},!0);return R(e,{parse:function(e){var n=r.exec(e);if(n){var a,c=s(n[1]),l=s(n[2]||1)-1,u=s(n[3]||1)-1,f=s(n[4]||0),p=s(n[5]||0),d=s(n[6]||0),h=Math.floor(1e3*s(n[7]||0)),y=Boolean(n[4]&&!n[8]),b="-"===n[9]?1:-1,v=s(n[10]||0),g=s(n[11]||0),m=p>0||d>0||h>0;return f<(m?24:25)&&p<60&&d<60&&h<1e3&&l>-1&&l<12&&v<24&&g<60&&u>-1&&u<o(c,l+1)-o(c,l)&&(a=1e3*(60*((a=60*(24*(o(c,l)+u)+f+v*b))+p+g*b)+d)+h,y&&(a=i(a)),-864e13<=a&&a<=864e13)?a:NaN}return t.parse.apply(this,arguments)}}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var be=f.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0)),ve={base:1e7,size:6,data:[0,0,0,0,0,0],multiply:function(t,e){for(var r=-1,n=e;++r<ve.size;)n+=t*ve.data[r],ve.data[r]=n%ve.base,n=Math.floor(n/ve.base)},divide:function(t){for(var e=ve.size,r=0;--e>=0;)r+=ve.data[e],ve.data[e]=Math.floor(r/t),r=r%t*ve.base},numToString:function(){for(var t=ve.size,e="";--t>=0;)if(""!==e||0===t||0!==ve.data[t]){var r=l(ve.data[t]);""===e?e=r:e+=q("0000000",0,7-r.length)+r}return e},pow:function t(e,r,n){return 0===r?n:r%2==1?t(e,r-1,n*e):t(e*e,r/2,n)},log:function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}},ge=function(t){var e,r,n,o,i,a,c,u;if(e=s(t),(e=L(e)?0:Math.floor(e))<0||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=s(this),L(r))return"NaN";if(r<=-1e21||r>=1e21)return l(r);if(n="",r<0&&(n="-",r=-r),o="0",r>1e-21)if(i=ve.log(r*ve.pow(2,69,1))-69,a=i<0?r*ve.pow(2,-i,1):r/ve.pow(2,i,1),a*=4503599627370496,(i=52-i)>0){for(ve.multiply(0,a),c=e;c>=7;)ve.multiply(1e7,0),c-=7;for(ve.multiply(ve.pow(10,c,1),0),c=i-1;c>=23;)ve.divide(1<<23),c-=23;ve.divide(1<<c),ve.multiply(1,1),ve.divide(2),o=ve.numToString()}else ve.multiply(0,a),ve.multiply(1<<-i,0),o=ve.numToString()+q("0.00000000000000000000",2,2+e);return e>0?(u=o.length,o=u<=e?n+q("0.0000000000000000000",0,e-u+2)+o:n+q(o,0,u-e)+"."+q(o,u-e)):o=n+o,o};R(f,{toFixed:ge},be);var me=function(){try{return"1"===1..toPrecision(void 0)}catch(t){return!0}}(),we=f.toPrecision;R(f,{toPrecision:function(t){return void 0===t?we.call(this):we.call(this,t)}},me),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var e=void 0===/()??/.exec("")[1],r=Math.pow(2,32)-1;u.split=function(n,o){var i=String(this);if(void 0===n&&0===o)return[];if(!t(n))return X(this,n,o);var a,c,l,u,s=[],f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),p=0,d=new RegExp(n.source,f+"g");e||(a=new RegExp("^"+d.source+"$(?!\\s)",f));var y=void 0===o?r:$.ToUint32(o);for(c=d.exec(i);c&&!((l=c.index+c[0].length)>p&&(Q(s,q(i,p,c.index)),!e&&c.length>1&&c[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)void 0===arguments[t]&&(c[t]=void 0)}),c.length>1&&c.index<i.length&&h.apply(s,Z(c,1)),u=c[0].length,p=l,s.length>=y));)d.lastIndex===c.index&&d.lastIndex++,c=d.exec(i);return p===i.length?!u&&d.test("")||Q(s,""):Q(s,q(i,p)),s.length>y?Z(s,0,y):s}}():"0".split(void 0,0).length&&(u.split=function(t,e){return void 0===t&&0===e?[]:X(this,t,e)});var Oe=u.replace,je=function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){Q(t,r)}),1===t.length&&void 0===t[0]}();je||(u.replace=function(e,r){var n=M(r),o=t(e)&&/\)[*?]/.test(e.source);if(n&&o){return Oe.call(this,e,function(t){var n=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,Q(i,arguments[n-2],arguments[n-1]),r.apply(this,i)})}return Oe.call(this,e,r)});var Te=u.substr,Ee="".substr&&"b"!=="0b".substr(-1);R(u,{substr:function(t,e){var r=t;return t<0&&(r=w(this.length+t,0)),Te.call(this,r,e)}},Ee);var xe="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",Se="​",_e="["+xe+"]",De=new RegExp("^"+_e+_e+"*"),Ie=new RegExp(_e+_e+"*$"),Me=u.trim&&(xe.trim()||!Se.trim());R(u,{trim:function(){if(null==this)throw new TypeError("can't convert "+this+" to object");return l(this).replace(De,"").replace(Ie,"")}},Me);var Ue=g.bind(String.prototype.trim),ke=u.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);R(u,{lastIndexOf:function(t){if(null==this)throw new TypeError("can't convert "+this+" to object");for(var e=l(this),r=l(t),n=arguments.length>1?s(arguments[1]):NaN,o=L(n)?1/0:$.ToInteger(n),i=O(w(o,0),e.length),a=r.length,c=i+a;c>0;){c=w(0,c-a);var u=K(q(e,c,i+a),r);if(-1!==u)return c+u}return-1}},ke);var Ne=u.lastIndexOf;R(u,{lastIndexOf:function(t){return Ne.apply(this,arguments)}},1!==u.lastIndexOf.length),(8!==parseInt(xe+"08")||22!==parseInt(xe+"0x16"))&&(parseInt=function(t){var e=/^[-+]?0[xX]/;return function(r,n){var o=Ue(String(r)),i=s(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt));1/parseFloat("-0")!=-1/0&&(parseFloat=function(t){return function(e){var r=Ue(String(e)),n=t(r);return 0===n&&"-"===q(r,0,1)?-0:n}}(parseFloat));if("RangeError: test"!==String(new RangeError("test"))){var Pe=function(){if(null==this)throw new TypeError("can't convert "+this+" to object");var t=this.name;void 0===t?t="Error":"string"!=typeof t&&(t=l(t));var e=this.message;return void 0===e?e="":"string"!=typeof e&&(e=l(e)),t?e?t+": "+e:t:e};Error.prototype.toString=Pe}if(F){var Ce=function(t,e){if(V(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.configurable&&(r.enumerable=!1,Object.defineProperty(t,e,r))}};Ce(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),Ce(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){var Ae=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t};RegExp.prototype.toString=Ae}})?n.call(e,r,e,t):n)||(t.exports=o)}()},function(t,e,r){"use strict";r.r(e);class n{static createNewElement(t,e=null,r=null,n=null){let o=document.createElement(t);return o.className=e||"",o.innerHTML=r||"",n&&n.map(t=>o.setAttribute(t.name,t.value)),o}static addEl(t,e){return e.map(e=>t.appendChild(e)),t}createState(){let t=document.getElementById("left_menu"),e=["Запорізька","Дніпровська","Київська","Львівська","Херсонська","Харківська","Миколаївська","Одеська","Житомирська","Чернігівська","Івано-Франківськ","Полтавська","Вінницька","Волинська","Закарпатська"];for(let r=0;r<24;r++)n.addEl(t,[n.addEl(n.createNewElement("div","state_wrap left_state"),[n.createNewElement("div","state",e[r],[{name:"data-n",value:r},{name:"id",value:"state_"+r}])])]);return t}}(new n).createState(),Array.from(document.getElementsByClassName("headline_word_top_text")),Array.from(document.getElementsByClassName("headline_word_bottom_text"));let o=Array.from(document.getElementsByClassName("headline_word")),i=Array.from(document.getElementsByClassName("left_state")),a=Array.from(document.getElementsByClassName("state")),c=document.getElementById("container");function l(t,e,r,n){"mix"==n&&(t=t.sort(function(t,e){return Math.random()-.5}));let o=0,i=e;for(let e=0;e<t.length;e++)t[e].style.animationName=i,t[e].style.animationDelay=o+"s",o+=r}document.getElementById("state_0").addEventListener("click",t=>{document.getElementById("containerOfStates").style.display="block"}),document.getElementById("back_to_states").addEventListener("click",t=>{document.getElementById("containerOfStates").style.display="none"}),document.getElementById("containerOfStates_blocks").addEventListener("click",t=>{window.location="states/zp.html"}),document.getElementById("btn_exit").addEventListener("click",t=>{document.getElementById("description_wrap").style.display="none"}),l(o,"apearUkr",.2,"mix"),l(i,"apearLeftStates",.07),function(t){let e=["rgba(0, 108, 255)","#6b757e","#00af3b","#ed0034","#ffc400","#00a4bc","#f8f9fa","#333a41","#ffffff","#006cff","#6b757e","#00af3b","#ed0034","#ffc400","#00a4bc","#f8f9fa","#333a41","#ffffff","#006cff","#6b757e","#00af3b","#ed0034","#ffc400","#00a4bc","#f8f9fa","#333a41","#ffffff"];for(let r=0;r<t.length;r++)t[r].style.background=e[r];t[4].style.background="rgba(237, 0, 52, 0.1)",t[6].style.color="black",t[8].style.color="black";let r=window.getComputedStyle(t[1]);console.log(r.backgroundColor)}(a),function(){for(let t=0;t<a.length;t++)a[t].addEventListener("mouseover",t=>{console.log(t.target.dataset.n);for(let e=0;e<a.length;e++)e==t.target.dataset.n&&(c.style.backgroundImage="url(dist/../images/"+e+".jpg)")}),a[t].addEventListener("mouseout",t=>{c.style.backgroundImage="url(dist/../images/field.jpg)"})}();r(0),r(4),r(5)}]);