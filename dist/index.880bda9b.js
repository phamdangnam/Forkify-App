var e,t,r,n,i,a,o,s,c,u,l,d,p,f,h,v,g,m="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function y(e){return e&&e.__esModule?e.default:e}"use strict";"use strict";var b={},_={},w=m.parcelRequire3a11;"use strict";"use strict";"use strict";null==w&&((w=function(e){if(e in b)return b[e].exports;if(e in _){var t=_[e];delete _[e];var r={id:e,exports:{}};return b[e]=r,t.call(r.exports,r,r.exports),r.exports}var n=Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){_[e]=t},m.parcelRequire3a11=w);var k={},E={},S=function(e){return e&&e.Math==Math&&e};"use strict";"use strict";E=S("object"==typeof globalThis&&globalThis)||S("object"==typeof window&&window)||S("object"==typeof self&&self)||S("object"==typeof m&&m)||function(){return this}()||E||Function("return this")();var x={},$={};"use strict";"use strict";x=!($=function(e){try{return!!e()}catch(e){return!0}})(function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]});var T={},P={};"use strict";P=!$(function(){var e=(function(){}).bind();return"function"!=typeof e||e.hasOwnProperty("prototype")});var L=Function.prototype.call;T=P?L.bind(L):function(){return L.apply(L,arguments)};var j={}.propertyIsEnumerable,O=Object.getOwnPropertyDescriptor;"use strict";t=O&&!j.call({1:2},1)?function(e){var t=O(this,e);return!!t&&t.enumerable}:j;var R={};"use strict";"use strict";"use strict";"use strict";R=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}};var I={},N={},M={},F=Function.prototype,q=F.call,H=P&&F.bind.bind(q,q),A={},D=(M=P?H:function(e){return function(){return q.apply(e,arguments)}})({}.toString),C=M("".slice);A=function(e){return C(D(e),8,-1)};var U=Object,B=M("".split);"use strict";"use strict";N=$(function(){return!U("z").propertyIsEnumerable(0)})?function(e){return"String"==A(e)?B(e,""):U(e)}:U;var z={},G={};G=function(e){return null==e};var W=TypeError;"use strict";"use strict";"use strict";"use strict";"use strict";z=function(e){if(G(e))throw W("Can't call method on "+e);return e},I=function(e){return N(z(e))};var Q={},Y={},J={},V={},K={},X="object"==typeof document&&document.all,Z=(K={all:X,IS_HTMLDDA:void 0===X&&void 0!==X}).all;V=K.IS_HTMLDDA?function(e){return"function"==typeof e||e===Z}:function(e){return"function"==typeof e};var ee=K.all;"use strict";"use strict";J=K.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:V(e)||e===ee}:function(e){return"object"==typeof e?null!==e:V(e)};var et={},er={};"use strict";er=function(e,t){var r;return arguments.length<2?V(r=E[e])?r:void 0:E[e]&&E[e][t]};var en={};"use strict";"use strict";"use strict";"use strict";en=M({}.isPrototypeOf);var ei={},ea={},eo={},es={};es="undefined"!=typeof navigator&&String(navigator.userAgent)||"";var ec=E.process,eu=E.Deno,el=ec&&ec.versions||eu&&eu.version,ed=el&&el.v8;ed&&(n=(r=ed.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!n&&es&&(!(r=es.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=es.match(/Chrome\/(\d+)/))&&(n=+r[1]),eo=n;var ep=E.String;ei=(ea=!!Object.getOwnPropertySymbols&&!$(function(){var e=Symbol();return!ep(e)||!(Object(e) instanceof Symbol)||!Symbol.sham&&eo&&eo<41}))&&!Symbol.sham&&"symbol"==typeof Symbol.iterator;var ef=Object;"use strict";"use strict";"use strict";et=ei?function(e){return"symbol"==typeof e}:function(e){var t=er("Symbol");return V(t)&&en(t.prototype,ef(e))};var eh={},ev={},eg={},em=String;eg=function(e){try{return em(e)}catch(e){return"Object"}};var ey=TypeError;"use strict";ev=function(e){if(V(e))return e;throw ey(eg(e)+" is not a function")},eh=function(e,t){var r=e[t];return G(r)?void 0:ev(r)};var eb={},e_=TypeError;"use strict";"use strict";"use strict";eb=function(e,t){var r,n;if("string"===t&&V(r=e.toString)&&!J(n=T(r,e))||V(r=e.valueOf)&&!J(n=T(r,e))||"string"!==t&&V(r=e.toString)&&!J(n=T(r,e)))return n;throw e_("Can't convert object to primitive value")};var ew={},ek={};"use strict";"use strict";ek=!1;var eE={},eS={},ex=Object.defineProperty;eS=function(e,t){try{ex(E,e,{value:t,configurable:!0,writable:!0})}catch(r){E[e]=t}return t};var e$="__core-js_shared__";"use strict";"use strict";eE=E[e$]||eS(e$,{}),(ew=function(e,t){return eE[e]||(eE[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.32.0",mode:ek?"pure":"global",copyright:"\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",source:"https://github.com/zloirock/core-js"});var eT={},eP={},eL=Object;eP=function(e){return eL(z(e))};var ej=M({}.hasOwnProperty);"use strict";eT=Object.hasOwn||function(e,t){return ej(eP(e),t)};var eO={},eR=0,eI=Math.random(),eN=M(1..toString);eO=function(e){return"Symbol("+(void 0===e?"":e)+")_"+eN(++eR+eI,36)};var eM=E.Symbol,eF=ew("wks"),eq=ei?eM.for||eM:eM&&eM.withoutSetter||eO,eH=TypeError,eA=function(e){return eT(eF,e)||(eF[e]=ea&&eT(eM,e)?eM[e]:eq("Symbol."+e)),eF[e]}("toPrimitive");"use strict";"use strict";Y=function(e,t){if(!J(e)||et(e))return e;var r,n=eh(e,eA);if(n){if(void 0===t&&(t="default"),!J(r=T(n,e,t))||et(r))return r;throw eH("Can't convert object to primitive value")}return void 0===t&&(t="number"),eb(e,t)},Q=function(e){var t=Y(e,"string");return et(t)?t:t+""};var eD={},eC={},eU=E.document,eB=J(eU)&&J(eU.createElement);eC=function(e){return eB?eU.createElement(e):{}},eD=!x&&!$(function(){return 7!=Object.defineProperty(eC("div"),"a",{get:function(){return 7}}).a});var ez=Object.getOwnPropertyDescriptor;"use strict";"use strict";"use strict";e=x?ez:function(e,r){if(e=I(e),r=Q(r),eD)try{return ez(e,r)}catch(e){}if(eT(e,r))return R(!T(t,e,r),e[r])};var eG={},eW={};"use strict";eW=x&&$(function(){return 42!=Object.defineProperty(function(){},"prototype",{value:42,writable:!1}).prototype});var eQ={},eY=String,eJ=TypeError;eQ=function(e){if(J(e))return e;throw eJ(eY(e)+" is not an object")};var eV=TypeError,eK=Object.defineProperty,eX=Object.getOwnPropertyDescriptor,eZ="enumerable",e0="configurable",e1="writable";"use strict";"use strict";"use strict";"use strict";i=x?eW?function(e,t,r){if(eQ(e),t=Q(t),eQ(r),"function"==typeof e&&"prototype"===t&&"value"in r&&e1 in r&&!r[e1]){var n=eX(e,t);n&&n[e1]&&(e[t]=r.value,r={configurable:e0 in r?r[e0]:n[e0],enumerable:eZ in r?r[eZ]:n[eZ],writable:!1})}return eK(e,t,r)}:eK:function(e,t,r){if(eQ(e),t=Q(t),eQ(r),eD)try{return eK(e,t,r)}catch(e){}if("get"in r||"set"in r)throw eV("Accessors not supported");return"value"in r&&(e[t]=r.value),e},eG=x?function(e,t,r){return i(e,t,R(1,r))}:function(e,t,r){return e[t]=r,e};var e2={},e9={},e3=Function.prototype,e4=x&&Object.getOwnPropertyDescriptor,e7=eT(e3,"name")&&(!x||x&&e4(e3,"name").configurable),e6={},e5=M(Function.toString);"use strict";"use strict";V(eE.inspectSource)||(eE.inspectSource=function(e){return e5(e)}),e6=eE.inspectSource;var e8={},te={},tt=E.WeakMap;"use strict";te=V(tt)&&/native code/.test(String(tt));var tr={},tn=ew("keys");"use strict";tr=function(e){return tn[e]||(tn[e]=eO(e))};var ti={};ti={};var ta="Object already initialized",to=E.TypeError,ts=E.WeakMap;if(te||eE.state){var tc=eE.state||(eE.state=new ts);tc.get=tc.get,tc.has=tc.has,tc.set=tc.set,a=function(e,t){if(tc.has(e))throw to(ta);return t.facade=e,tc.set(e,t),t},o=function(e){return tc.get(e)||{}},s=function(e){return tc.has(e)}}else{var tu=tr("state");ti[tu]=!0,a=function(e,t){if(eT(e,tu))throw to(ta);return t.facade=e,eG(e,tu,t),t},o=function(e){return eT(e,tu)?e[tu]:{}},s=function(e){return eT(e,tu)}}var tl=(e8={set:a,get:o,has:s,enforce:function(e){return s(e)?o(e):a(e,{})},getterFor:function(e){return function(t){var r;if(!J(t)||(r=o(t)).type!==e)throw to("Incompatible receiver, "+e+" required");return r}}}).enforce,td=e8.get,tp=String,tf=Object.defineProperty,th=M("".slice),tv=M("".replace),tg=M([].join),tm=x&&!$(function(){return 8!==tf(function(){},"length",{value:8}).length}),ty=String(String).split("String"),tb=e9=function(e,t,r){"Symbol("===th(tp(t),0,7)&&(t="["+tv(tp(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),r&&r.getter&&(t="get "+t),r&&r.setter&&(t="set "+t),(!eT(e,"name")||e7&&e.name!==t)&&(x?tf(e,"name",{value:t,configurable:!0}):e.name=t),tm&&r&&eT(r,"arity")&&e.length!==r.arity&&tf(e,"length",{value:r.arity});try{r&&eT(r,"constructor")&&r.constructor?x&&tf(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(e){}var n=tl(e);return eT(n,"source")||(n.source=tg(ty,"string"==typeof t?t:"")),e};"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";"use strict";Function.prototype.toString=tb(function(){return V(this)&&td(this).source||e6(this)},"toString"),e2=function(e,t,r,n){n||(n={});var a=n.enumerable,o=void 0!==n.name?n.name:t;if(V(r)&&e9(r,o,n),n.global)a?e[t]=r:eS(t,r);else{try{n.unsafe?e[t]&&(a=!0):delete e[t]}catch(e){}a?e[t]=r:i(e,t,{value:r,enumerable:!1,configurable:!n.nonConfigurable,writable:!n.nonWritable})}return e};var t_={},tw={},tk={},tE={},tS={},tx={},t$=Math.ceil,tT=Math.floor;tx=Math.trunc||function(e){var t=+e;return(t>0?tT:t$)(t)},tS=function(e){var t=+e;return t!=t||0===t?0:tx(t)};var tP=Math.max,tL=Math.min;"use strict";"use strict";tE=function(e,t){var r=tS(e);return r<0?tP(r+t,0):tL(r,t)};var tj={},tO={},tR=Math.min;tO=function(e){return e>0?tR(tS(e),9007199254740991):0},tj=function(e){return tO(e.length)};var tI=function(e){return function(t,r,n){var i,a=I(t),o=tj(a),s=tE(n,o);if(e&&r!=r){for(;o>s;)if((i=a[s++])!=i)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===r)return e||s||0;return!e&&-1}},tN={includes:tI(!0),indexOf:tI(!1)}.indexOf,tM=M([].push);"use strict";"use strict";tk=function(e,t){var r,n=I(e),i=0,a=[];for(r in n)!eT(ti,r)&&eT(n,r)&&tM(a,r);for(;t.length>i;)eT(n,r=t[i++])&&(~tN(a,r)||tM(a,r));return a};var tF=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"].concat("length","prototype");c=Object.getOwnPropertyNames||function(e){return tk(e,tF)},u=Object.getOwnPropertySymbols;var tq=M([].concat);"use strict";tw=er("Reflect","ownKeys")||function(e){var t=c(eQ(e));return u?tq(t,u(e)):t},t_=function(t,r,n){for(var a=tw(r),o=0;o<a.length;o++){var s=a[o];eT(t,s)||n&&eT(n,s)||i(t,s,e(r,s))}};var tH={},tA=/#|\.prototype\./,tD=function(e,t){var r=tU[tC(e)];return r==tz||r!=tB&&(V(t)?$(t):!!t)},tC=tD.normalize=function(e){return String(e).replace(tA,".").toLowerCase()},tU=tD.data={},tB=tD.NATIVE="N",tz=tD.POLYFILL="P";"use strict";"use strict";tH=tD,k=function(t,r){var n,i,a,o,s,c=t.target,u=t.global,l=t.stat;if(n=u?E:l?E[c]||eS(c,{}):(E[c]||{}).prototype)for(i in r){if(o=r[i],a=t.dontCallGetSet?(s=e(n,i))&&s.value:n[i],!tH(u?i:c+(l?".":"#")+i,t.forced)&&void 0!==a){if(typeof o==typeof a)continue;t_(o,a)}(t.sham||a&&a.sham)&&eG(o,"sham",!0),e2(n,i,o,t)}};var tG={},tW={},tQ=Function.prototype,tY=tQ.apply,tJ=tQ.call;"use strict";"use strict";tW="object"==typeof Reflect&&Reflect.apply||(P?tJ.bind(tY):function(){return tJ.apply(tY,arguments)});var tV={},tK={},tX=(tK=function(e){if("Function"===A(e))return M(e)})(tK.bind);"use strict";tV=function(e,t){return ev(e),void 0===t?e:P?tX(e,t):function(){return e.apply(t,arguments)}};var tZ={};"use strict";tZ=er("document","documentElement");var t0={};"use strict";t0=M([].slice);var t1={},t2=TypeError;"use strict";t1=function(e,t){if(e<t)throw t2("Not enough arguments");return e};var t9={};t9=/(?:ipad|iphone|ipod).*applewebkit/i.test(es);var t3={},t4={},t7=t4={};function t6(){throw Error("setTimeout has not been defined")}function t5(){throw Error("clearTimeout has not been defined")}function t8(e){if(l===setTimeout)return setTimeout(e,0);if((l===t6||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}!function(){try{l="function"==typeof setTimeout?setTimeout:t6}catch(e){l=t6}try{d="function"==typeof clearTimeout?clearTimeout:t5}catch(e){d=t5}}();var re=[],rt=!1,rr=-1;function rn(){rt&&p&&(rt=!1,p.length?re=p.concat(re):rr=-1,re.length&&ri())}function ri(){if(!rt){var e=t8(rn);rt=!0;for(var t=re.length;t;){for(p=re,re=[];++rr<t;)p&&p[rr].run();rr=-1,t=re.length}p=null,rt=!1,function(e){if(d===clearTimeout)return clearTimeout(e);if((d===t5||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}(e)}}function ra(e,t){this.fun=e,this.array=t}function ro(){}"use strict";t7.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];re.push(new ra(e,t)),1!==re.length||rt||t8(ri)},ra.prototype.run=function(){this.fun.apply(null,this.array)},t7.title="browser",t7.browser=!0,t7.env={},t7.argv=[],t7.version="",t7.versions={},t7.on=ro,t7.addListener=ro,t7.once=ro,t7.off=ro,t7.removeListener=ro,t7.removeAllListeners=ro,t7.emit=ro,t7.prependListener=ro,t7.prependOnceListener=ro,t7.listeners=function(e){return[]},t7.binding=function(e){throw Error("process.binding is not supported")},t7.cwd=function(){return"/"},t7.chdir=function(e){throw Error("process.chdir is not supported")},t7.umask=function(){return 0},t3=void 0!==t4&&"process"==A(t4);var rs=E.setImmediate,rc=E.clearImmediate,ru=E.process,rl=E.Dispatch,rd=E.Function,rp=E.MessageChannel,rf=E.String,rh=0,rv={},rg="onreadystatechange";$(function(){f=E.location});var rm=function(e){if(eT(rv,e)){var t=rv[e];delete rv[e],t()}},ry=function(e){return function(){rm(e)}},rb=function(e){rm(e.data)},r_=function(e){E.postMessage(rf(e),f.protocol+"//"+f.host)};"use strict";rs&&rc||(rs=function(e){t1(arguments.length,1);var t=V(e)?e:rd(e),r=t0(arguments,1);return rv[++rh]=function(){tW(t,void 0,r)},h(rh),rh},rc=function(e){delete rv[e]},t3?h=function(e){ru.nextTick(ry(e))}:rl&&rl.now?h=function(e){rl.now(ry(e))}:rp&&!t9?(g=(v=new rp).port2,v.port1.onmessage=rb,h=tV(g.postMessage,g)):E.addEventListener&&V(E.postMessage)&&!E.importScripts&&f&&"file:"!==f.protocol&&!$(r_)?(h=r_,E.addEventListener("message",rb,!1)):h=rg in eC("script")?function(e){tZ.appendChild(eC("script"))[rg]=function(){tZ.removeChild(this),rm(e)}}:function(e){setTimeout(ry(e),0)});var rw=(tG={set:rs,clear:rc}).clear;"use strict";"use strict";k({global:!0,bind:!0,enumerable:!0,forced:E.clearImmediate!==rw},{clearImmediate:rw});var rk=tG.set,rE={},rS={};rS="function"==typeof Bun&&Bun&&"string"==typeof Bun.version;var rx=E.Function,r$=/MSIE .\./.test(es)||rS&&function(){var e=E.Bun.version.split(".");return e.length<3||0==e[0]&&(e[1]<3||3==e[1]&&0==e[2])}();rE=function(e,t){var r=t?2:1;return r$?function(n,i){var a=t1(arguments.length,1)>r,o=V(n)?n:rx(n),s=a?t0(arguments,r):[],c=a?function(){tW(o,this,s)}:o;return t?e(c,i):e(c)}:e};var rT=E.setImmediate?rE(rk,!1):rk;k({global:!0,bind:!0,enumerable:!0,forced:E.setImmediate!==rT},{setImmediate:rT});var rP=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,i=Object.defineProperty||function(e,t,r){e[t]=r.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,r,n,a){var o,s,c=Object.create((r&&r.prototype instanceof g?r:g).prototype);return i(c,"_invoke",{value:(o=new T(a||[]),s=p,function(r,i){if(s===f)throw Error("Generator is already running");if(s===h){if("throw"===r)throw i;return L()}for(o.method=r,o.arg=i;;){var a=o.delegate;if(a){var c=function e(r,n){var i=n.method,a=r.iterator[i];if(a===t)return n.delegate=null,"throw"===i&&r.iterator.return&&(n.method="return",n.arg=t,e(r,n),"throw"===n.method)||"return"!==i&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+i+"' method")),v;var o=d(a,r.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,v;var s=o.arg;return s?s.done?(n[r.resultName]=s.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,v):s:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,v)}(a,o);if(c){if(c===v)continue;return c}}if("next"===o.method)o.sent=o._sent=o.arg;else if("throw"===o.method){if(s===p)throw s=h,o.arg;o.dispatchException(o.arg)}else"return"===o.method&&o.abrupt("return",o.arg);s=f;var u=d(e,n,o);if("normal"===u.type){if(s=o.done?h:"suspendedYield",u.arg===v)continue;return{value:u.arg,done:o.done}}"throw"===u.type&&(s=h,o.method="throw",o.arg=u.arg)}})}),c}function d(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var p="suspendedStart",f="executing",h="completed",v={};function g(){}function m(){}function y(){}var b={};u(b,o,function(){return this});var _=Object.getPrototypeOf,w=_&&_(_(P([])));w&&w!==r&&n.call(w,o)&&(b=w);var k=y.prototype=g.prototype=Object.create(b);function E(e){["next","throw","return"].forEach(function(t){u(e,t,function(e){return this._invoke(t,e)})})}function S(e,t){var r;i(this,"_invoke",{value:function(i,a){function o(){return new t(function(r,o){!function r(i,a,o,s){var c=d(e[i],e,a);if("throw"===c.type)s(c.arg);else{var u=c.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?t.resolve(l.__await).then(function(e){r("next",e,o,s)},function(e){r("throw",e,o,s)}):t.resolve(l).then(function(e){u.value=e,o(u)},function(e){return r("throw",e,o,s)})}}(i,a,r,o)})}return r=r?r.then(o,o):o()}})}function x(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function $(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function T(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(x,this),this.reset(!0)}function P(e){if(e){var r=e[o];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var i=-1,a=function r(){for(;++i<e.length;)if(n.call(e,i))return r.value=e[i],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}return{next:L}}function L(){return{value:t,done:!0}}return m.prototype=y,i(k,"constructor",{value:y,configurable:!0}),i(y,"constructor",{value:m,configurable:!0}),m.displayName=u(y,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===m||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,y):(e.__proto__=y,u(e,c,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},E(S.prototype),u(S.prototype,s,function(){return this}),e.AsyncIterator=S,e.async=function(t,r,n,i,a){void 0===a&&(a=Promise);var o=new S(l(t,r,n,i),a);return e.isGeneratorFunction(r)?o:o.next().then(function(e){return e.done?e.value:o.next()})},E(k),u(k,c,"Generator"),u(k,o,function(){return this}),u(k,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=P,T.prototype={constructor:T,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach($),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function i(n,i){return s.type="throw",s.arg=e,r.next=n,i&&(r.method="next",r.arg=t),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],s=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else if(u){if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else throw Error("try statement without catch or finally")}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return(o.type=e,o.arg=t,a)?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),$(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var i=n.arg;$(r)}return i}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:P(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}({});try{regeneratorRuntime=rP}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=rP:Function("r","regeneratorRuntime = r")(rP)}const rL="https://forkify-api.herokuapp.com/api/v2/recipes",rj="105ad669-a6d2-4f94-9781-b9ea3f879810",rO=function(e){return new Promise(function(t,r){setTimeout(function(){r(Error(`Request took too long! Timeout after ${e} second`))},1e3*e)})},rR=async function(e){try{let t=await Promise.race([fetch(e),rO(10)]),r=await t.json();if(!r)throw Error(`${r.message} ${res.status}`);return r}catch(e){throw e}},rI=async function(e,t){try{let r={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)},n=await Promise.race([fetch(e,r),rO(10)]),i=await n.json();if(!n.ok)throw Error(`${i.message} ${n.status}`);return i}catch(e){throw e}},rN={recipe:{},search:[],recipesRendered:[],bookmarks:[],firstRecipeRenderedIndex:0,prevPageNum:-1,nextPageNum:2,maxPageNum:0,updateRecipesRenderedArray(e){this.recipesRendered=this.search.slice(e,e+10)},refreshRecipesRenderedArray(){this.firstRecipeRenderedIndex=0,this.updateRecipesRenderedArray(this.firstRecipeRenderedIndex)},refreshPaginationNumbers(){this.prevPageNum=-1,this.search.length<=10?this.nextPageNum=-1:this.nextPageNum=2}},rM=function(e){rN.recipe=e},rF=async function(e){try{let t=await rR(`${rL}/${e}?key=${rj}`),{recipe:r}=t.data;rM(r),rN.bookmarks.some(t=>t.id===e)?rN.recipe.bookmarked=!0:rN.recipe.bookmarked=!1}catch(e){throw console.log(e),e}},rq=async function(e){try{let t=await rR(`${rL}?search=${e}&key=${rj}`);if(0===t.results)throw Error();let{recipes:r}=t.data;rN.search=r,rN.refreshRecipesRenderedArray(),rN.refreshPaginationNumbers(),rU()}catch(e){throw e}},rH=function(e){"next"===e?rA()?rN.firstRecipeRenderedIndex=0:rN.firstRecipeRenderedIndex+=10:"prev"===e&&(rD()?rN.firstRecipeRenderedIndex=rB():rN.firstRecipeRenderedIndex-=10),rN.updateRecipesRenderedArray(rN.firstRecipeRenderedIndex)},rA=function(){let e=rN.firstRecipeRenderedIndex+10,t=rN.search.length-1;return e>t},rD=function(){let e=rN.firstRecipeRenderedIndex-10;return e<0},rC=function(e){"next"===e?(rA()?rN.nextPageNum=-1:rN.nextPageNum+=1,-1===rN.prevPageNum?rN.prevPageNum=1:rN.prevPageNum+=1):"prev"===e&&(rD()?(-1===rN.nextPageNum?rN.nextPageNum=rN.maxPageNum:rN.nextPageNum-=1,rN.prevPageNum=-1):(-1===rN.nextPageNum?rN.nextPageNum=rN.maxPageNum:rN.nextPageNum-=1,rN.prevPageNum-=1))},rU=function(){rN.maxPageNum=Math.trunc(rN.search.length/10)+1},rB=function(){return 10*Math.trunc((rN.search.length-1)/10)},rz=function(e,t){if(0==t)return;let r=e.servings,n=t/r;e.ingredients.forEach(e=>{e.quantity*=n,0==e.quantity&&(e.quantity=null)}),e.servings=t},rG=function(e){rN.bookmarks.push(e),e.id===rN.recipe.id&&(rN.recipe.bookmarked=!0),rQ()},rW=function(e){let t=rN.bookmarks.findIndex(t=>t.id===e.id);rN.bookmarks.splice(t,1),rN.recipe.bookmarked=!1,rQ()},rQ=function(){localStorage.setItem("bookmarks",JSON.stringify(rN.bookmarks))},rY=async function(e){try{let t=Object.entries(e).filter(e=>e[0].startsWith("ingredient")&&""!==e[1]).map(e=>{let t=e[1].split(",").map(e=>e.trim());if(3!==t.length)throw Error("Wrong ingredient format! Please use the correct format :)");let[r,n,i]=t;return{quantity:r?+r:null,unit:n,description:i}}),r={title:e.title,source_url:e.sourceUrl,image_url:e.image,publisher:e.publisher,cooking_time:e.cookingTime,servings:e.servings,ingredients:t},n=await rI(`${rL}?key=${rj}`,r),{recipe:i}=n.data;rM(i),rG(rN.recipe)}catch(e){throw e}};var rJ={};function rV(e,t,r,n,i){var a,o,s;let c=[2,3,5];if(!0===i)for(let t=3;t*t<=e;t+=2)e%t==0&&c.push(t);let u=0,l=e,d=t;for(;u<=c.length;)l%c[u]==0&&d%c[u]==0?(c[u],l/=c[u],d/=c[u]):u++;return a=d,o=l,s=r,1===a&&1===o?`${s=`${n}${(parseInt(s)+1).toString()}`}`:0===o?`${n}${s}`:"0"==s?`${n}${o}/${a}`:`${n}${s} ${o}/${a}`}rJ=function(e){let t,r;if(e<0?(e=Math.abs(e),t="-"):t="",void 0===e)return"Your input was undefined.";if(isNaN(e))return`"${e}" is not a number.`;if(1e16==e)return`${t}9999999999999999`;if(e>1e16)return"Too many digits in your integer to maintain IEEE 754 Floating Point conversion accuracy.";if(Number.isInteger(e))return`${t}${e}`;if(e<1e-6)return"0";let n=e.toString(),i=n.split("."),a=i[0];if("0"==r&&"0"!==a)return a;if("0"==r&&"0"==a)return"0";if("99"==(r=n.length>=17?i[1].slice(0,i[1].length-1):i[1])&&"0"!==a)return`${a} 99/100`;if("99"==r&&"0"==a)return"99/100";if(1-parseFloat(`.${r}`)<.0011&&(r="999"),void 0==r)return a;let o=r.split("").reverse().join(""),s=o.match(/^(\d+)\1{1,2}/);if(!s||!(r.length>2))return function(e,t,r){let n=parseInt(e,10),i=Math.pow(10,e.length);return rV(n,i,t,r,!1)}(r,a,t);{let e=s[0].split("").reverse().join(""),n=s[1].split("").reverse().join("");if(n.length>1){let e=n.split(""),t=1;for(let r=0;r<e.length;r++)t/=e[0]/e[r];1===t&&(n=e[0])}return n.length>1&&n.length%2==0&&(n=parseInt(n.slice(0,n.length/2),10)-parseInt(n.slice(n.length/2,n.length),10)==0?n.slice(0,n.length/2):n),function(e,t,r,n,i){let a=e.length-r.length>=1?e.length-r.length:1,o=Math.pow(10,a),s=parseFloat(`0.${e}`),c=Math.pow(10,t.length),u=Math.round((s*c-s)*Math.pow(10,a));return rV(u,(c-1)*o,n,i,!0)}(r,n,e,a,t)}};var rK={};rK=new URL(w("27Lyk").resolve("hfd23"),import.meta.url).toString();class rX{_data;message;render(e){if(!e||Array.isArray(e)&&0===e.length)return this.renderError();this._data=e;let t=this._generateMarkup();this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderMessage(e=this._message){let t=`
    <div class="message">
        <div>
          <svg>
            <use href="${y(rK)}#icon-smile"></use>
          </svg>
        </div>
        <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t),console.log("a")}renderError(e=this._errorMessage){let t=`
    <div class="error">
      <div>
        <svg>
          <use href="${y(rK)}#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${e}</p>
    </div>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",t)}renderSpinner(){let e=`
    <div class="spinner">
        <svg>
         <use href="${y(rK)}#icon-loader"></use>
        </svg>
     </div>`;this._clear(),this._parentElement.insertAdjacentHTML("beforeend",e)}_clear(){this._parentElement.innerHTML=""}}class rZ extends rX{_parentElement=document.querySelector(".recipe");_errorMessage="We could not find that recipe. Please try another one!";_message="";updateServingsTo;addBookmarkButtonHandler(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--bookmark");r&&e()})}addUpdateServingsHandler(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--update-servings");r&&(this.updateServingsTo=r.dataset.updateTo,e())})}_generateMarkup(){let e="";this._data.ingredients.forEach(t=>{e+=`
          <li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="${y(rK)}#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${null===t.quantity?"":y(rJ)(t.quantity)}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${t.unit}</span>
              ${t.description}
            </div>
          </li>`});let t=`
      <figure class="recipe__fig">
        <img src=${this._data.image_url} alt="Cauliflower Pizza Crust (with BBQ Chicken Pizza)" class="recipe__img">
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>

      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rK)}#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${this._data.cooking_time}</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="${y(rK)}#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${this._data.servings}</span>
          <span class="recipe__info-text">servings</span>

          <div class="recipe__info-buttons">
            <button class="btn--tiny btn--update-servings" data-update-to="${+this._data.servings-1}">
              <svg>
                <use href="${y(rK)}#icon-minus-circle"></use>
              </svg>
            </button>
            <button class="btn--tiny btn--update-servings" data-update-to="${+this._data.servings+1}">
              <svg>
                <use href="${y(rK)}#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>

        <div class="recipe__user-generated ${this._data.key?"":"hidden"}">
          <svg>
            <use href="${y(rK)}#icon-user"></use>
          </svg>
        </div>
        <button class="btn--round btn--bookmark">
          <svg class="">
            <use href="${y(rK)}#icon-bookmark${this._data.bookmarked?"-fill":""}"></use>
          </svg>
        </button>
      </div>

      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
    
        ${e}
        </ul>
      </div>

      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">${this._data.publisher}</span>. Please check out
          directions at their website.
        </p>
        <a class="btn--small recipe__btn" href="${this._data.source_url}" target="_blank">
          <span>Directions</span>
          <svg class="search__icon">
            <use href="${y(rK)}#icon-arrow-right"></use>
          </svg>
        </a>
      </div>
    `;return t}}var r0=new rZ;class r1 extends rX{_parentElement=document.querySelector(".results");recipeID;addRecipeClickedHandler(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".preview").children[0];r&&(this.recipeID=r.getAttribute("href").slice(1),e())})}_generateMarkup(){let e="";return this._data.forEach(t=>{e+=`<li class="preview">
            <a class="preview__link preview__link--active" href="#${t.id}">
              <figure class="preview__fig">
                <img src="${t.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${t.title}</h4>
                <p class="preview__publisher">${t.publisher}</p>
                <div class="preview__user-generated ${t.key?"":"hidden"}">
                  <svg>
                    <use href="${y(rK)}#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`}),e}}var r2=new r1;class r9{_searchButton=document.querySelector(".search__btn");_searchField=document.querySelector(".search__field");addEventHandler(e){this._searchButton.addEventListener("click",t=>{let r=t.target.closest(".search__btn");if(!r)return;e(),t.preventDefault();let n=t.target.previousElementSibling;n.value=""})}getSearchValue(){return this._searchField.value}}var r3=new r9;class r4{_parentElement=document.querySelector(".pagination");direction;addEventHandler(e){this._parentElement.addEventListener("click",t=>{let r=t.target.closest(".btn--inline");r&&(this.direction=!0===r.classList.contains("pagination__btn--next")?"next":"prev",e())})}render(e,t){let r=this._generateMarkup(e,t);this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",r)}_clear(){this._parentElement.innerHTML=""}_generateMarkup(e,t){let r,n;r=-1===e?"":`
          <button class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${y(rK)}#icon-arrow-left"></use>
            </svg>
            <span>Page ${e}</span>
          </button>`,-1===t?n="":(n=`Page ${t}`,n=`
          <button class="btn--inline pagination__btn--next">
            <span>Page ${t}</span>
            <svg class="search__icon">
              <use href="${y(rK)}#icon-arrow-right"></use>
            </svg>
          </button>`);let i=`${r}
                  ${n}`;return i}}var r7=new r4;class r6 extends rX{_parentElement=document.querySelector(".bookmarks__list");_message="No bookmarks yet. Find a nice recipe and bookmark it :)";addEventHandler(e){document.querySelector(".bookmarks").addEventListener("click",t=>{let r=t.target.closest(".preview");if(!r)return;let n=r.querySelector("a").getAttribute("href").slice(1);e(n)})}_generateMarkup(){let e="";return this._data.forEach(t=>{e+=`<li class="preview">
            <a class="preview__link preview__link--active" href="#${t.id}">
              <figure class="preview__fig">
                <img src="${t.image_url}" alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${t.title}</h4>
                <p class="preview__publisher">${t.publisher}</p>
                <div class="preview__user-generated">
                  <svg>
                    <use href="src/img/icons.svg#icon-user"></use>
                  </svg>
                </div>
              </div>
            </a>
          </li>`}),e}}var r5=new r6;class r8 extends rX{_parentElement=document.querySelector(".upload");_message="Recipe was successfully uploaded :)";_overlay=document.querySelector(".overlay");_window=document.querySelector(".add-recipe-window");constructor(){super(),this._addAddRecipeButtonHandler(),this._addCloseButtonHandler()}addHandlerUpload(e){this._parentElement.addEventListener("submit",t=>{t.preventDefault();let r=[...new FormData(this._parentElement)],n=Object.fromEntries(r);e(n)})}_addAddRecipeButtonHandler(){document.querySelector(".nav__btn--add-recipe").addEventListener("click",this.toggleWindow.bind(this))}_addCloseButtonHandler(){document.querySelector(".btn--close-modal").addEventListener("click",this.toggleWindow.bind(this))}toggleWindow(){this._overlay.classList.toggle("hidden"),this._window.classList.toggle("hidden")}reRenderForm(){let e=`<form class="upload">
        <div class="upload__column">
          <h3 class="upload__heading">Recipe data</h3>
          <label>Title</label>
          <input value="TEST23" required name="title" type="text" />
          <label>URL</label>
          <input value="TEST23" required name="sourceUrl" type="text" />
          <label>Image URL</label>
          <input value="TEST23" required name="image" type="text" />
          <label>Publisher</label>
          <input value="TEST23" required name="publisher" type="text" />
          <label>Prep time</label>
          <input value="23" required name="cookingTime" type="number" />
          <label>Servings</label>
          <input value="23" required name="servings" type="number" />
        </div>

        <div class="upload__column">
          <h3 class="upload__heading">Ingredients</h3>
          <label>Ingredient 1</label>
          <input
            value="0.5,kg,Rice"
            type="text"
            required
            name="ingredient-1"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 2</label>
          <input
            value="1,,Avocado"
            type="text"
            name="ingredient-2"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 3</label>
          <input
            value=",,salt"
            type="text"
            name="ingredient-3"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 4</label>
          <input
            type="text"
            name="ingredient-4"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 5</label>
          <input
            type="text"
            name="ingredient-5"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
          <label>Ingredient 6</label>
          <input
            type="text"
            name="ingredient-6"
            placeholder="Format: 'Quantity,Unit,Description'"
          />
        </div>

        <button class="btn upload__btn">
          <svg>
            <use href="src/img/icons.svg#icon-upload-cloud"></use>
          </svg>
          <span>Upload</span>
        </button>
      </form>`;this._clear(),this._parentElement.insertAdjacentHTML("afterbegin",e)}}var ne=new r8;const nt=function(){0===rN.bookmarks.length?r5.renderMessage():r5.render(rN.bookmarks)},nr=async function(e){try{await rY(e),r0.render(rN.recipe),ne.renderSpinner(),ne.reRenderForm(),nt()}catch(e){console.log(e),ne.renderError(e.message)}};r0.addUpdateServingsHandler(function(){rz(rN.recipe,r0.updateServingsTo),r0.render(rN.recipe)}),r2.addRecipeClickedHandler(function(e){nn(r2.recipeID)}),r3.addEventHandler(function(){ni(r3.getSearchValue())}),r7.addEventHandler(function(){rH(r7.direction),r2.render(rN.recipesRendered),rC(r7.direction),r7.render(rN.prevPageNum,rN.nextPageNum)}),r0.addBookmarkButtonHandler(function(){na()}),r5.addEventHandler(function(e){let t=rN.bookmarks.find(t=>t.id===e);r0.render(t),rM(t)}),ne.addHandlerUpload(nr),function(){let e=localStorage.getItem("bookmarks");e&&(rN.bookmarks=JSON.parse(e))}(),r5.render(rN.bookmarks),nt();const nn=async function(e){try{r0.renderSpinner(),await rF(e),r0.render(rN.recipe)}catch(e){r0.renderError()}},ni=async function(e){try{r2.renderSpinner(),await rq(e),r2.render(rN.recipesRendered),r7.render(rN.prevPageNum,rN.nextPageNum)}catch(e){r0.renderError()}},na=function(){rN.recipe.bookmarked?rW(rN.recipe):rG(rN.recipe),nt(),r0.render(rN.recipe)};
//# sourceMappingURL=index.880bda9b.js.map
