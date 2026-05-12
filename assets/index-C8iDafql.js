var nv=e=>{throw TypeError(e)};var Cf=(e,t,n)=>t.has(e)||nv("Cannot "+n);var H=(e,t,n)=>(Cf(e,t,"read from private field"),n?n.call(e):t.get(e)),Te=(e,t,n)=>t.has(e)?nv("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Se=(e,t,n,r)=>(Cf(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),yt=(e,t,n)=>(Cf(e,t,"access private method"),n);var hc=(e,t,n,r)=>({set _(s){Se(e,t,s,n)},get _(){return H(e,t,r)}});function qL(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function g1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var v1={exports:{}},jd={},x1={exports:{}},Pe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vl=Symbol.for("react.element"),ZL=Symbol.for("react.portal"),YL=Symbol.for("react.fragment"),XL=Symbol.for("react.strict_mode"),QL=Symbol.for("react.profiler"),JL=Symbol.for("react.provider"),eP=Symbol.for("react.context"),tP=Symbol.for("react.forward_ref"),nP=Symbol.for("react.suspense"),rP=Symbol.for("react.memo"),sP=Symbol.for("react.lazy"),rv=Symbol.iterator;function iP(e){return e===null||typeof e!="object"?null:(e=rv&&e[rv]||e["@@iterator"],typeof e=="function"?e:null)}var y1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b1=Object.assign,w1={};function qo(e,t,n){this.props=e,this.context=t,this.refs=w1,this.updater=n||y1}qo.prototype.isReactComponent={};qo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function S1(){}S1.prototype=qo.prototype;function $m(e,t,n){this.props=e,this.context=t,this.refs=w1,this.updater=n||y1}var Um=$m.prototype=new S1;Um.constructor=$m;b1(Um,qo.prototype);Um.isPureReactComponent=!0;var sv=Array.isArray,k1=Object.prototype.hasOwnProperty,Hm={current:null},C1={key:!0,ref:!0,__self:!0,__source:!0};function j1(e,t,n){var r,s={},i=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(i=""+t.key),t)k1.call(t,r)&&!C1.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),d=0;d<l;d++)c[d]=arguments[d+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Vl,type:e,key:i,ref:o,props:s,_owner:Hm.current}}function oP(e,t){return{$$typeof:Vl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Wm(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vl}function aP(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var iv=/\/+/g;function jf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?aP(""+e.key):t.toString(36)}function Yc(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(i){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case Vl:case ZL:o=!0}}if(o)return o=e,s=s(o),e=r===""?"."+jf(o,0):r,sv(s)?(n="",e!=null&&(n=e.replace(iv,"$&/")+"/"),Yc(s,t,n,"",function(d){return d})):s!=null&&(Wm(s)&&(s=oP(s,n+(!s.key||o&&o.key===s.key?"":(""+s.key).replace(iv,"$&/")+"/")+e)),t.push(s)),1;if(o=0,r=r===""?".":r+":",sv(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+jf(i,l);o+=Yc(i,t,n,c,s)}else if(c=iP(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+jf(i,l++),o+=Yc(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function pc(e,t,n){if(e==null)return e;var r=[],s=0;return Yc(e,r,"","",function(i){return t.call(n,i,s++)}),r}function lP(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Bt={current:null},Xc={transition:null},cP={ReactCurrentDispatcher:Bt,ReactCurrentBatchConfig:Xc,ReactCurrentOwner:Hm};function E1(){throw Error("act(...) is not supported in production builds of React.")}Pe.Children={map:pc,forEach:function(e,t,n){pc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return pc(e,function(){t++}),t},toArray:function(e){return pc(e,function(t){return t})||[]},only:function(e){if(!Wm(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Pe.Component=qo;Pe.Fragment=YL;Pe.Profiler=QL;Pe.PureComponent=$m;Pe.StrictMode=XL;Pe.Suspense=nP;Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=cP;Pe.act=E1;Pe.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=b1({},e.props),s=e.key,i=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,o=Hm.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)k1.call(t,c)&&!C1.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var d=0;d<c;d++)l[d]=arguments[d+2];r.children=l}return{$$typeof:Vl,type:e.type,key:s,ref:i,props:r,_owner:o}};Pe.createContext=function(e){return e={$$typeof:eP,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:JL,_context:e},e.Consumer=e};Pe.createElement=j1;Pe.createFactory=function(e){var t=j1.bind(null,e);return t.type=e,t};Pe.createRef=function(){return{current:null}};Pe.forwardRef=function(e){return{$$typeof:tP,render:e}};Pe.isValidElement=Wm;Pe.lazy=function(e){return{$$typeof:sP,_payload:{_status:-1,_result:e},_init:lP}};Pe.memo=function(e,t){return{$$typeof:rP,type:e,compare:t===void 0?null:t}};Pe.startTransition=function(e){var t=Xc.transition;Xc.transition={};try{e()}finally{Xc.transition=t}};Pe.unstable_act=E1;Pe.useCallback=function(e,t){return Bt.current.useCallback(e,t)};Pe.useContext=function(e){return Bt.current.useContext(e)};Pe.useDebugValue=function(){};Pe.useDeferredValue=function(e){return Bt.current.useDeferredValue(e)};Pe.useEffect=function(e,t){return Bt.current.useEffect(e,t)};Pe.useId=function(){return Bt.current.useId()};Pe.useImperativeHandle=function(e,t,n){return Bt.current.useImperativeHandle(e,t,n)};Pe.useInsertionEffect=function(e,t){return Bt.current.useInsertionEffect(e,t)};Pe.useLayoutEffect=function(e,t){return Bt.current.useLayoutEffect(e,t)};Pe.useMemo=function(e,t){return Bt.current.useMemo(e,t)};Pe.useReducer=function(e,t,n){return Bt.current.useReducer(e,t,n)};Pe.useRef=function(e){return Bt.current.useRef(e)};Pe.useState=function(e){return Bt.current.useState(e)};Pe.useSyncExternalStore=function(e,t,n){return Bt.current.useSyncExternalStore(e,t,n)};Pe.useTransition=function(){return Bt.current.useTransition()};Pe.version="18.3.1";x1.exports=Pe;var u=x1.exports;const re=g1(u),Ed=qL({__proto__:null,default:re},[u]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uP=u,dP=Symbol.for("react.element"),fP=Symbol.for("react.fragment"),hP=Object.prototype.hasOwnProperty,pP=uP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,mP={key:!0,ref:!0,__self:!0,__source:!0};function N1(e,t,n){var r,s={},i=null,o=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)hP.call(t,r)&&!mP.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:dP,type:e,key:i,ref:o,props:s,_owner:pP.current}}jd.Fragment=fP;jd.jsx=N1;jd.jsxs=N1;v1.exports=jd;var a=v1.exports,L1={exports:{}},fn={},P1={exports:{}},T1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(T,O){var I=T.length;T.push(O);e:for(;0<I;){var V=I-1>>>1,Z=T[V];if(0<s(Z,O))T[V]=O,T[I]=Z,I=V;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],I=T.pop();if(I!==O){T[0]=I;e:for(var V=0,Z=T.length,K=Z>>>1;V<K;){var P=2*(V+1)-1,M=T[P],se=P+1,W=T[se];if(0>s(M,I))se<Z&&0>s(W,M)?(T[V]=W,T[se]=I,V=se):(T[V]=M,T[P]=I,V=P);else if(se<Z&&0>s(W,I))T[V]=W,T[se]=I,V=se;else break e}}return O}function s(T,O){var I=T.sortIndex-O.sortIndex;return I!==0?I:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var c=[],d=[],f=1,h=null,p=3,m=!1,g=!1,v=!1,x=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(T){for(var O=n(d);O!==null;){if(O.callback===null)r(d);else if(O.startTime<=T)r(d),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(d)}}function S(T){if(v=!1,w(T),!g)if(n(c)!==null)g=!0,A(k);else{var O=n(d);O!==null&&G(S,O.startTime-T)}}function k(T,O){g=!1,v&&(v=!1,b(E),E=-1),m=!0;var I=p;try{for(w(O),h=n(c);h!==null&&(!(h.expirationTime>O)||T&&!R());){var V=h.callback;if(typeof V=="function"){h.callback=null,p=h.priorityLevel;var Z=V(h.expirationTime<=O);O=e.unstable_now(),typeof Z=="function"?h.callback=Z:h===n(c)&&r(c),w(O)}else r(c);h=n(c)}if(h!==null)var K=!0;else{var P=n(d);P!==null&&G(S,P.startTime-O),K=!1}return K}finally{h=null,p=I,m=!1}}var C=!1,j=null,E=-1,L=5,N=-1;function R(){return!(e.unstable_now()-N<L)}function D(){if(j!==null){var T=e.unstable_now();N=T;var O=!0;try{O=j(!0,T)}finally{O?F():(C=!1,j=null)}}else C=!1}var F;if(typeof y=="function")F=function(){y(D)};else if(typeof MessageChannel<"u"){var _=new MessageChannel,z=_.port2;_.port1.onmessage=D,F=function(){z.postMessage(null)}}else F=function(){x(D,0)};function A(T){j=T,C||(C=!0,F())}function G(T,O){E=x(function(){T(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(T){T.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,A(k))},e.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):L=0<T?Math.floor(1e3/T):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(T){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var I=p;p=O;try{return T()}finally{p=I}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var I=p;p=T;try{return O()}finally{p=I}},e.unstable_scheduleCallback=function(T,O,I){var V=e.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?V+I:V):I=V,T){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=I+Z,T={id:f++,callback:O,priorityLevel:T,startTime:I,expirationTime:Z,sortIndex:-1},I>V?(T.sortIndex=I,t(d,T),n(c)===null&&T===n(d)&&(v?(b(E),E=-1):v=!0,G(S,I-V))):(T.sortIndex=Z,t(c,T),g||m||(g=!0,A(k))),T},e.unstable_shouldYield=R,e.unstable_wrapCallback=function(T){var O=p;return function(){var I=p;p=O;try{return T.apply(this,arguments)}finally{p=I}}}})(T1);P1.exports=T1;var gP=P1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vP=u,dn=gP;function ee(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var M1=new Set,rl={};function Oi(e,t){Io(e,t),Io(e+"Capture",t)}function Io(e,t){for(rl[e]=t,e=0;e<t.length;e++)M1.add(t[e])}var Ar=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),$h=Object.prototype.hasOwnProperty,xP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ov={},av={};function yP(e){return $h.call(av,e)?!0:$h.call(ov,e)?!1:xP.test(e)?av[e]=!0:(ov[e]=!0,!1)}function bP(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function wP(e,t,n,r){if(t===null||typeof t>"u"||bP(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Vt(e,t,n,r,s,i,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var Et={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Et[e]=new Vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Et[t]=new Vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Et[e]=new Vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Et[e]=new Vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Et[e]=new Vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Et[e]=new Vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Et[e]=new Vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Et[e]=new Vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Et[e]=new Vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Km=/[\-:]([a-z])/g;function Gm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Km,Gm);Et[t]=new Vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Km,Gm);Et[t]=new Vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Km,Gm);Et[t]=new Vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Et[e]=new Vt(e,1,!1,e.toLowerCase(),null,!1,!1)});Et.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Et[e]=new Vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function qm(e,t,n,r){var s=Et.hasOwnProperty(t)?Et[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(wP(t,n,s,r)&&(n=null),r||s===null?yP(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Br=vP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,mc=Symbol.for("react.element"),Ji=Symbol.for("react.portal"),eo=Symbol.for("react.fragment"),Zm=Symbol.for("react.strict_mode"),Uh=Symbol.for("react.profiler"),R1=Symbol.for("react.provider"),A1=Symbol.for("react.context"),Ym=Symbol.for("react.forward_ref"),Hh=Symbol.for("react.suspense"),Wh=Symbol.for("react.suspense_list"),Xm=Symbol.for("react.memo"),ss=Symbol.for("react.lazy"),O1=Symbol.for("react.offscreen"),lv=Symbol.iterator;function da(e){return e===null||typeof e!="object"?null:(e=lv&&e[lv]||e["@@iterator"],typeof e=="function"?e:null)}var tt=Object.assign,Ef;function Ta(e){if(Ef===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ef=t&&t[1]||""}return`
`+Ef+e}var Nf=!1;function Lf(e,t){if(!e||Nf)return"";Nf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(d){var r=d}Reflect.construct(e,[],t)}else{try{t.call()}catch(d){r=d}e.call(t.prototype)}else{try{throw Error()}catch(d){r=d}e()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var s=d.stack.split(`
`),i=r.stack.split(`
`),o=s.length-1,l=i.length-1;1<=o&&0<=l&&s[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(s[o]!==i[l]){if(o!==1||l!==1)do if(o--,l--,0>l||s[o]!==i[l]){var c=`
`+s[o].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=o&&0<=l);break}}}finally{Nf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ta(e):""}function SP(e){switch(e.tag){case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return e=Lf(e.type,!1),e;case 11:return e=Lf(e.type.render,!1),e;case 1:return e=Lf(e.type,!0),e;default:return""}}function Kh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case eo:return"Fragment";case Ji:return"Portal";case Uh:return"Profiler";case Zm:return"StrictMode";case Hh:return"Suspense";case Wh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case A1:return(e.displayName||"Context")+".Consumer";case R1:return(e._context.displayName||"Context")+".Provider";case Ym:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xm:return t=e.displayName||null,t!==null?t:Kh(e.type)||"Memo";case ss:t=e._payload,e=e._init;try{return Kh(e(t))}catch{}}return null}function kP(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kh(t);case 8:return t===Zm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function As(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function I1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function CP(e){var t=I1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(o){r=""+o,i.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function gc(e){e._valueTracker||(e._valueTracker=CP(e))}function D1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=I1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Cu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gh(e,t){var n=t.checked;return tt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function cv(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=As(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function _1(e,t){t=t.checked,t!=null&&qm(e,"checked",t,!1)}function qh(e,t){_1(e,t);var n=As(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Zh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Zh(e,t.type,As(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function uv(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Zh(e,t,n){(t!=="number"||Cu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ma=Array.isArray;function go(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+As(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Yh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ee(91));return tt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function dv(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(ee(92));if(Ma(n)){if(1<n.length)throw Error(ee(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:As(n)}}function F1(e,t){var n=As(t.value),r=As(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function fv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function z1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?z1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var vc,B1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(vc=vc||document.createElement("div"),vc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=vc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function sl(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jP=["Webkit","ms","Moz","O"];Object.keys(Va).forEach(function(e){jP.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Va[t]=Va[e]})});function V1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Va.hasOwnProperty(e)&&Va[e]?(""+t).trim():t+"px"}function $1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=V1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var EP=tt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qh(e,t){if(t){if(EP[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ee(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ee(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ee(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ee(62))}}function Jh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ep=null;function Qm(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var tp=null,vo=null,xo=null;function hv(e){if(e=Hl(e)){if(typeof tp!="function")throw Error(ee(280));var t=e.stateNode;t&&(t=Md(t),tp(e.stateNode,e.type,t))}}function U1(e){vo?xo?xo.push(e):xo=[e]:vo=e}function H1(){if(vo){var e=vo,t=xo;if(xo=vo=null,hv(e),t)for(e=0;e<t.length;e++)hv(t[e])}}function W1(e,t){return e(t)}function K1(){}var Pf=!1;function G1(e,t,n){if(Pf)return e(t,n);Pf=!0;try{return W1(e,t,n)}finally{Pf=!1,(vo!==null||xo!==null)&&(K1(),H1())}}function il(e,t){var n=e.stateNode;if(n===null)return null;var r=Md(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(ee(231,t,typeof n));return n}var np=!1;if(Ar)try{var fa={};Object.defineProperty(fa,"passive",{get:function(){np=!0}}),window.addEventListener("test",fa,fa),window.removeEventListener("test",fa,fa)}catch{np=!1}function NP(e,t,n,r,s,i,o,l,c){var d=Array.prototype.slice.call(arguments,3);try{t.apply(n,d)}catch(f){this.onError(f)}}var $a=!1,ju=null,Eu=!1,rp=null,LP={onError:function(e){$a=!0,ju=e}};function PP(e,t,n,r,s,i,o,l,c){$a=!1,ju=null,NP.apply(LP,arguments)}function TP(e,t,n,r,s,i,o,l,c){if(PP.apply(this,arguments),$a){if($a){var d=ju;$a=!1,ju=null}else throw Error(ee(198));Eu||(Eu=!0,rp=d)}}function Ii(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function q1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function pv(e){if(Ii(e)!==e)throw Error(ee(188))}function MP(e){var t=e.alternate;if(!t){if(t=Ii(e),t===null)throw Error(ee(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return pv(s),e;if(i===r)return pv(s),t;i=i.sibling}throw Error(ee(188))}if(n.return!==r.return)n=s,r=i;else{for(var o=!1,l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o){for(l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==r)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?e:t}function Z1(e){return e=MP(e),e!==null?Y1(e):null}function Y1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Y1(e);if(t!==null)return t;e=e.sibling}return null}var X1=dn.unstable_scheduleCallback,mv=dn.unstable_cancelCallback,RP=dn.unstable_shouldYield,AP=dn.unstable_requestPaint,it=dn.unstable_now,OP=dn.unstable_getCurrentPriorityLevel,Jm=dn.unstable_ImmediatePriority,Q1=dn.unstable_UserBlockingPriority,Nu=dn.unstable_NormalPriority,IP=dn.unstable_LowPriority,J1=dn.unstable_IdlePriority,Nd=null,ur=null;function DP(e){if(ur&&typeof ur.onCommitFiberRoot=="function")try{ur.onCommitFiberRoot(Nd,e,void 0,(e.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:zP,_P=Math.log,FP=Math.LN2;function zP(e){return e>>>=0,e===0?32:31-(_P(e)/FP|0)|0}var xc=64,yc=4194304;function Ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Lu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~s;l!==0?r=Ra(l):(i&=o,i!==0&&(r=Ra(i)))}else o=n&~s,o!==0?r=Ra(o):i!==0&&(r=Ra(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-$n(t),s=1<<n,r|=e[n],t&=~s;return r}function BP(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function VP(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-$n(i),l=1<<o,c=s[o];c===-1?(!(l&n)||l&r)&&(s[o]=BP(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function sp(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function eS(){var e=xc;return xc<<=1,!(xc&4194240)&&(xc=64),e}function Tf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function $l(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-$n(t),e[t]=n}function $P(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-$n(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function eg(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-$n(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var ze=0;function tS(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var nS,tg,rS,sS,iS,ip=!1,bc=[],Ss=null,ks=null,Cs=null,ol=new Map,al=new Map,as=[],UP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function gv(e,t){switch(e){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":ol.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(t.pointerId)}}function ha(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Hl(t),t!==null&&tg(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function HP(e,t,n,r,s){switch(t){case"focusin":return Ss=ha(Ss,e,t,n,r,s),!0;case"dragenter":return ks=ha(ks,e,t,n,r,s),!0;case"mouseover":return Cs=ha(Cs,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return ol.set(i,ha(ol.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,al.set(i,ha(al.get(i)||null,e,t,n,r,s)),!0}return!1}function oS(e){var t=oi(e.target);if(t!==null){var n=Ii(t);if(n!==null){if(t=n.tag,t===13){if(t=q1(n),t!==null){e.blockedOn=t,iS(e.priority,function(){rS(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=op(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ep=r,n.target.dispatchEvent(r),ep=null}else return t=Hl(n),t!==null&&tg(t),e.blockedOn=n,!1;t.shift()}return!0}function vv(e,t,n){Qc(e)&&n.delete(t)}function WP(){ip=!1,Ss!==null&&Qc(Ss)&&(Ss=null),ks!==null&&Qc(ks)&&(ks=null),Cs!==null&&Qc(Cs)&&(Cs=null),ol.forEach(vv),al.forEach(vv)}function pa(e,t){e.blockedOn===t&&(e.blockedOn=null,ip||(ip=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,WP)))}function ll(e){function t(s){return pa(s,e)}if(0<bc.length){pa(bc[0],e);for(var n=1;n<bc.length;n++){var r=bc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ss!==null&&pa(Ss,e),ks!==null&&pa(ks,e),Cs!==null&&pa(Cs,e),ol.forEach(t),al.forEach(t),n=0;n<as.length;n++)r=as[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<as.length&&(n=as[0],n.blockedOn===null);)oS(n),n.blockedOn===null&&as.shift()}var yo=Br.ReactCurrentBatchConfig,Pu=!0;function KP(e,t,n,r){var s=ze,i=yo.transition;yo.transition=null;try{ze=1,ng(e,t,n,r)}finally{ze=s,yo.transition=i}}function GP(e,t,n,r){var s=ze,i=yo.transition;yo.transition=null;try{ze=4,ng(e,t,n,r)}finally{ze=s,yo.transition=i}}function ng(e,t,n,r){if(Pu){var s=op(e,t,n,r);if(s===null)Bf(e,t,r,Tu,n),gv(e,r);else if(HP(s,e,t,n,r))r.stopPropagation();else if(gv(e,r),t&4&&-1<UP.indexOf(e)){for(;s!==null;){var i=Hl(s);if(i!==null&&nS(i),i=op(e,t,n,r),i===null&&Bf(e,t,r,Tu,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Bf(e,t,r,null,n)}}var Tu=null;function op(e,t,n,r){if(Tu=null,e=Qm(r),e=oi(e),e!==null)if(t=Ii(e),t===null)e=null;else if(n=t.tag,n===13){if(e=q1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tu=e,null}function aS(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(OP()){case Jm:return 1;case Q1:return 4;case Nu:case IP:return 16;case J1:return 536870912;default:return 16}default:return 16}}var ms=null,rg=null,Jc=null;function lS(){if(Jc)return Jc;var e,t=rg,n=t.length,r,s="value"in ms?ms.value:ms.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===s[i-r];r++);return Jc=s.slice(e,1<r?1-r:void 0)}function eu(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function wc(){return!0}function xv(){return!1}function hn(e){function t(n,r,s,i,o){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?wc:xv,this.isPropagationStopped=xv,this}return tt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wc)},persist:function(){},isPersistent:wc}),t}var Zo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sg=hn(Zo),Ul=tt({},Zo,{view:0,detail:0}),qP=hn(Ul),Mf,Rf,ma,Ld=tt({},Ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ig,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ma&&(ma&&e.type==="mousemove"?(Mf=e.screenX-ma.screenX,Rf=e.screenY-ma.screenY):Rf=Mf=0,ma=e),Mf)},movementY:function(e){return"movementY"in e?e.movementY:Rf}}),yv=hn(Ld),ZP=tt({},Ld,{dataTransfer:0}),YP=hn(ZP),XP=tt({},Ul,{relatedTarget:0}),Af=hn(XP),QP=tt({},Zo,{animationName:0,elapsedTime:0,pseudoElement:0}),JP=hn(QP),eT=tt({},Zo,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tT=hn(eT),nT=tt({},Zo,{data:0}),bv=hn(nT),rT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},sT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},iT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function oT(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=iT[e])?!!t[e]:!1}function ig(){return oT}var aT=tt({},Ul,{key:function(e){if(e.key){var t=rT[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?sT[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ig,charCode:function(e){return e.type==="keypress"?eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lT=hn(aT),cT=tt({},Ld,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wv=hn(cT),uT=tt({},Ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ig}),dT=hn(uT),fT=tt({},Zo,{propertyName:0,elapsedTime:0,pseudoElement:0}),hT=hn(fT),pT=tt({},Ld,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),mT=hn(pT),gT=[9,13,27,32],og=Ar&&"CompositionEvent"in window,Ua=null;Ar&&"documentMode"in document&&(Ua=document.documentMode);var vT=Ar&&"TextEvent"in window&&!Ua,cS=Ar&&(!og||Ua&&8<Ua&&11>=Ua),Sv=" ",kv=!1;function uS(e,t){switch(e){case"keyup":return gT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dS(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var to=!1;function xT(e,t){switch(e){case"compositionend":return dS(t);case"keypress":return t.which!==32?null:(kv=!0,Sv);case"textInput":return e=t.data,e===Sv&&kv?null:e;default:return null}}function yT(e,t){if(to)return e==="compositionend"||!og&&uS(e,t)?(e=lS(),Jc=rg=ms=null,to=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return cS&&t.locale!=="ko"?null:t.data;default:return null}}var bT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!bT[e.type]:t==="textarea"}function fS(e,t,n,r){U1(r),t=Mu(t,"onChange"),0<t.length&&(n=new sg("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ha=null,cl=null;function wT(e){kS(e,0)}function Pd(e){var t=so(e);if(D1(t))return e}function ST(e,t){if(e==="change")return t}var hS=!1;if(Ar){var Of;if(Ar){var If="oninput"in document;if(!If){var jv=document.createElement("div");jv.setAttribute("oninput","return;"),If=typeof jv.oninput=="function"}Of=If}else Of=!1;hS=Of&&(!document.documentMode||9<document.documentMode)}function Ev(){Ha&&(Ha.detachEvent("onpropertychange",pS),cl=Ha=null)}function pS(e){if(e.propertyName==="value"&&Pd(cl)){var t=[];fS(t,cl,e,Qm(e)),G1(wT,t)}}function kT(e,t,n){e==="focusin"?(Ev(),Ha=t,cl=n,Ha.attachEvent("onpropertychange",pS)):e==="focusout"&&Ev()}function CT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pd(cl)}function jT(e,t){if(e==="click")return Pd(t)}function ET(e,t){if(e==="input"||e==="change")return Pd(t)}function NT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Wn=typeof Object.is=="function"?Object.is:NT;function ul(e,t){if(Wn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!$h.call(t,s)||!Wn(e[s],t[s]))return!1}return!0}function Nv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Lv(e,t){var n=Nv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nv(n)}}function mS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?mS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function gS(){for(var e=window,t=Cu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Cu(e.document)}return t}function ag(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function LT(e){var t=gS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&mS(n.ownerDocument.documentElement,n)){if(r!==null&&ag(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=Lv(n,i);var o=Lv(n,r);s&&o&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var PT=Ar&&"documentMode"in document&&11>=document.documentMode,no=null,ap=null,Wa=null,lp=!1;function Pv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;lp||no==null||no!==Cu(r)||(r=no,"selectionStart"in r&&ag(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Wa&&ul(Wa,r)||(Wa=r,r=Mu(ap,"onSelect"),0<r.length&&(t=new sg("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=no)))}function Sc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ro={animationend:Sc("Animation","AnimationEnd"),animationiteration:Sc("Animation","AnimationIteration"),animationstart:Sc("Animation","AnimationStart"),transitionend:Sc("Transition","TransitionEnd")},Df={},vS={};Ar&&(vS=document.createElement("div").style,"AnimationEvent"in window||(delete ro.animationend.animation,delete ro.animationiteration.animation,delete ro.animationstart.animation),"TransitionEvent"in window||delete ro.transitionend.transition);function Td(e){if(Df[e])return Df[e];if(!ro[e])return e;var t=ro[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in vS)return Df[e]=t[n];return e}var xS=Td("animationend"),yS=Td("animationiteration"),bS=Td("animationstart"),wS=Td("transitionend"),SS=new Map,Tv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bs(e,t){SS.set(e,t),Oi(t,[e])}for(var _f=0;_f<Tv.length;_f++){var Ff=Tv[_f],TT=Ff.toLowerCase(),MT=Ff[0].toUpperCase()+Ff.slice(1);Bs(TT,"on"+MT)}Bs(xS,"onAnimationEnd");Bs(yS,"onAnimationIteration");Bs(bS,"onAnimationStart");Bs("dblclick","onDoubleClick");Bs("focusin","onFocus");Bs("focusout","onBlur");Bs(wS,"onTransitionEnd");Io("onMouseEnter",["mouseout","mouseover"]);Io("onMouseLeave",["mouseout","mouseover"]);Io("onPointerEnter",["pointerout","pointerover"]);Io("onPointerLeave",["pointerout","pointerover"]);Oi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Oi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Oi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Oi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Oi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),RT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Mv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,TP(r,t,void 0,e),e.currentTarget=null}function kS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],c=l.instance,d=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;Mv(s,l,d),i=c}else for(o=0;o<r.length;o++){if(l=r[o],c=l.instance,d=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;Mv(s,l,d),i=c}}}if(Eu)throw e=rp,Eu=!1,rp=null,e}function Ge(e,t){var n=t[hp];n===void 0&&(n=t[hp]=new Set);var r=e+"__bubble";n.has(r)||(CS(t,e,2,!1),n.add(r))}function zf(e,t,n){var r=0;t&&(r|=4),CS(n,e,r,t)}var kc="_reactListening"+Math.random().toString(36).slice(2);function dl(e){if(!e[kc]){e[kc]=!0,M1.forEach(function(n){n!=="selectionchange"&&(RT.has(n)||zf(n,!1,e),zf(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[kc]||(t[kc]=!0,zf("selectionchange",!1,t))}}function CS(e,t,n,r){switch(aS(t)){case 1:var s=KP;break;case 4:s=GP;break;default:s=ng}n=s.bind(null,t,n,e),s=void 0,!np||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Bf(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;o=o.return}for(;l!==null;){if(o=oi(l),o===null)return;if(c=o.tag,c===5||c===6){r=i=o;continue e}l=l.parentNode}}r=r.return}G1(function(){var d=i,f=Qm(n),h=[];e:{var p=SS.get(e);if(p!==void 0){var m=sg,g=e;switch(e){case"keypress":if(eu(n)===0)break e;case"keydown":case"keyup":m=lT;break;case"focusin":g="focus",m=Af;break;case"focusout":g="blur",m=Af;break;case"beforeblur":case"afterblur":m=Af;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=yv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=YP;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=dT;break;case xS:case yS:case bS:m=JP;break;case wS:m=hT;break;case"scroll":m=qP;break;case"wheel":m=mT;break;case"copy":case"cut":case"paste":m=tT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=wv}var v=(t&4)!==0,x=!v&&e==="scroll",b=v?p!==null?p+"Capture":null:p;v=[];for(var y=d,w;y!==null;){w=y;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,b!==null&&(S=il(y,b),S!=null&&v.push(fl(y,S,w)))),x)break;y=y.return}0<v.length&&(p=new m(p,g,null,n,f),h.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==ep&&(g=n.relatedTarget||n.fromElement)&&(oi(g)||g[Or]))break e;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=d,g=g?oi(g):null,g!==null&&(x=Ii(g),g!==x||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=d),m!==g)){if(v=yv,S="onMouseLeave",b="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(v=wv,S="onPointerLeave",b="onPointerEnter",y="pointer"),x=m==null?p:so(m),w=g==null?p:so(g),p=new v(S,y+"leave",m,n,f),p.target=x,p.relatedTarget=w,S=null,oi(f)===d&&(v=new v(b,y+"enter",g,n,f),v.target=w,v.relatedTarget=x,S=v),x=S,m&&g)t:{for(v=m,b=g,y=0,w=v;w;w=$i(w))y++;for(w=0,S=b;S;S=$i(S))w++;for(;0<y-w;)v=$i(v),y--;for(;0<w-y;)b=$i(b),w--;for(;y--;){if(v===b||b!==null&&v===b.alternate)break t;v=$i(v),b=$i(b)}v=null}else v=null;m!==null&&Rv(h,p,m,v,!1),g!==null&&x!==null&&Rv(h,x,g,v,!0)}}e:{if(p=d?so(d):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var k=ST;else if(Cv(p))if(hS)k=ET;else{k=CT;var C=kT}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=jT);if(k&&(k=k(e,d))){fS(h,k,n,f);break e}C&&C(e,p,d),e==="focusout"&&(C=p._wrapperState)&&C.controlled&&p.type==="number"&&Zh(p,"number",p.value)}switch(C=d?so(d):window,e){case"focusin":(Cv(C)||C.contentEditable==="true")&&(no=C,ap=d,Wa=null);break;case"focusout":Wa=ap=no=null;break;case"mousedown":lp=!0;break;case"contextmenu":case"mouseup":case"dragend":lp=!1,Pv(h,n,f);break;case"selectionchange":if(PT)break;case"keydown":case"keyup":Pv(h,n,f)}var j;if(og)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else to?uS(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(cS&&n.locale!=="ko"&&(to||E!=="onCompositionStart"?E==="onCompositionEnd"&&to&&(j=lS()):(ms=f,rg="value"in ms?ms.value:ms.textContent,to=!0)),C=Mu(d,E),0<C.length&&(E=new bv(E,e,null,n,f),h.push({event:E,listeners:C}),j?E.data=j:(j=dS(n),j!==null&&(E.data=j)))),(j=vT?xT(e,n):yT(e,n))&&(d=Mu(d,"onBeforeInput"),0<d.length&&(f=new bv("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:d}),f.data=j))}kS(h,t)})}function fl(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mu(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=il(e,n),i!=null&&r.unshift(fl(e,i,s)),i=il(e,t),i!=null&&r.push(fl(e,i,s))),e=e.return}return r}function $i(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Rv(e,t,n,r,s){for(var i=t._reactName,o=[];n!==null&&n!==r;){var l=n,c=l.alternate,d=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&d!==null&&(l=d,s?(c=il(n,i),c!=null&&o.unshift(fl(n,c,l))):s||(c=il(n,i),c!=null&&o.push(fl(n,c,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var AT=/\r\n?/g,OT=/\u0000|\uFFFD/g;function Av(e){return(typeof e=="string"?e:""+e).replace(AT,`
`).replace(OT,"")}function Cc(e,t,n){if(t=Av(t),Av(e)!==t&&n)throw Error(ee(425))}function Ru(){}var cp=null,up=null;function dp(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fp=typeof setTimeout=="function"?setTimeout:void 0,IT=typeof clearTimeout=="function"?clearTimeout:void 0,Ov=typeof Promise=="function"?Promise:void 0,DT=typeof queueMicrotask=="function"?queueMicrotask:typeof Ov<"u"?function(e){return Ov.resolve(null).then(e).catch(_T)}:fp;function _T(e){setTimeout(function(){throw e})}function Vf(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),ll(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);ll(t)}function js(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Iv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),ar="__reactFiber$"+Yo,hl="__reactProps$"+Yo,Or="__reactContainer$"+Yo,hp="__reactEvents$"+Yo,FT="__reactListeners$"+Yo,zT="__reactHandles$"+Yo;function oi(e){var t=e[ar];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Or]||n[ar]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Iv(e);e!==null;){if(n=e[ar])return n;e=Iv(e)}return t}e=n,n=e.parentNode}return null}function Hl(e){return e=e[ar]||e[Or],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function so(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ee(33))}function Md(e){return e[hl]||null}var pp=[],io=-1;function Vs(e){return{current:e}}function Ze(e){0>io||(e.current=pp[io],pp[io]=null,io--)}function He(e,t){io++,pp[io]=e.current,e.current=t}var Os={},At=Vs(Os),Gt=Vs(!1),ki=Os;function Do(e,t){var n=e.type.contextTypes;if(!n)return Os;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function qt(e){return e=e.childContextTypes,e!=null}function Au(){Ze(Gt),Ze(At)}function Dv(e,t,n){if(At.current!==Os)throw Error(ee(168));He(At,t),He(Gt,n)}function jS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(ee(108,kP(e)||"Unknown",s));return tt({},n,r)}function Ou(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Os,ki=At.current,He(At,e),He(Gt,Gt.current),!0}function _v(e,t,n){var r=e.stateNode;if(!r)throw Error(ee(169));n?(e=jS(e,t,ki),r.__reactInternalMemoizedMergedChildContext=e,Ze(Gt),Ze(At),He(At,e)):Ze(Gt),He(Gt,n)}var Lr=null,Rd=!1,$f=!1;function ES(e){Lr===null?Lr=[e]:Lr.push(e)}function BT(e){Rd=!0,ES(e)}function $s(){if(!$f&&Lr!==null){$f=!0;var e=0,t=ze;try{var n=Lr;for(ze=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Lr=null,Rd=!1}catch(s){throw Lr!==null&&(Lr=Lr.slice(e+1)),X1(Jm,$s),s}finally{ze=t,$f=!1}}return null}var oo=[],ao=0,Iu=null,Du=0,yn=[],bn=0,Ci=null,Tr=1,Mr="";function ni(e,t){oo[ao++]=Du,oo[ao++]=Iu,Iu=e,Du=t}function NS(e,t,n){yn[bn++]=Tr,yn[bn++]=Mr,yn[bn++]=Ci,Ci=e;var r=Tr;e=Mr;var s=32-$n(r)-1;r&=~(1<<s),n+=1;var i=32-$n(t)+s;if(30<i){var o=s-s%5;i=(r&(1<<o)-1).toString(32),r>>=o,s-=o,Tr=1<<32-$n(t)+s|n<<s|r,Mr=i+e}else Tr=1<<i|n<<s|r,Mr=e}function lg(e){e.return!==null&&(ni(e,1),NS(e,1,0))}function cg(e){for(;e===Iu;)Iu=oo[--ao],oo[ao]=null,Du=oo[--ao],oo[ao]=null;for(;e===Ci;)Ci=yn[--bn],yn[bn]=null,Mr=yn[--bn],yn[bn]=null,Tr=yn[--bn],yn[bn]=null}var ln=null,on=null,Ye=!1,Vn=null;function LS(e,t){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Fv(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ln=e,on=js(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ln=e,on=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ci!==null?{id:Tr,overflow:Mr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ln=e,on=null,!0):!1;default:return!1}}function mp(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gp(e){if(Ye){var t=on;if(t){var n=t;if(!Fv(e,t)){if(mp(e))throw Error(ee(418));t=js(n.nextSibling);var r=ln;t&&Fv(e,t)?LS(r,n):(e.flags=e.flags&-4097|2,Ye=!1,ln=e)}}else{if(mp(e))throw Error(ee(418));e.flags=e.flags&-4097|2,Ye=!1,ln=e}}}function zv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ln=e}function jc(e){if(e!==ln)return!1;if(!Ye)return zv(e),Ye=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dp(e.type,e.memoizedProps)),t&&(t=on)){if(mp(e))throw PS(),Error(ee(418));for(;t;)LS(e,t),t=js(t.nextSibling)}if(zv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ee(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){on=js(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}on=null}}else on=ln?js(e.stateNode.nextSibling):null;return!0}function PS(){for(var e=on;e;)e=js(e.nextSibling)}function _o(){on=ln=null,Ye=!1}function ug(e){Vn===null?Vn=[e]:Vn.push(e)}var VT=Br.ReactCurrentBatchConfig;function ga(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var r=n.stateNode}if(!r)throw Error(ee(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(o){var l=s.refs;o===null?delete l[i]:l[i]=o},t._stringRef=i,t)}if(typeof e!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,e))}return e}function Ec(e,t){throw e=Object.prototype.toString.call(t),Error(ee(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Bv(e){var t=e._init;return t(e._payload)}function TS(e){function t(b,y){if(e){var w=b.deletions;w===null?(b.deletions=[y],b.flags|=16):w.push(y)}}function n(b,y){if(!e)return null;for(;y!==null;)t(b,y),y=y.sibling;return null}function r(b,y){for(b=new Map;y!==null;)y.key!==null?b.set(y.key,y):b.set(y.index,y),y=y.sibling;return b}function s(b,y){return b=Ps(b,y),b.index=0,b.sibling=null,b}function i(b,y,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<y?(b.flags|=2,y):w):(b.flags|=2,y)):(b.flags|=1048576,y)}function o(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,y,w,S){return y===null||y.tag!==6?(y=Zf(w,b.mode,S),y.return=b,y):(y=s(y,w),y.return=b,y)}function c(b,y,w,S){var k=w.type;return k===eo?f(b,y,w.props.children,S,w.key):y!==null&&(y.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ss&&Bv(k)===y.type)?(S=s(y,w.props),S.ref=ga(b,y,w),S.return=b,S):(S=au(w.type,w.key,w.props,null,b.mode,S),S.ref=ga(b,y,w),S.return=b,S)}function d(b,y,w,S){return y===null||y.tag!==4||y.stateNode.containerInfo!==w.containerInfo||y.stateNode.implementation!==w.implementation?(y=Yf(w,b.mode,S),y.return=b,y):(y=s(y,w.children||[]),y.return=b,y)}function f(b,y,w,S,k){return y===null||y.tag!==7?(y=yi(w,b.mode,S,k),y.return=b,y):(y=s(y,w),y.return=b,y)}function h(b,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Zf(""+y,b.mode,w),y.return=b,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case mc:return w=au(y.type,y.key,y.props,null,b.mode,w),w.ref=ga(b,null,y),w.return=b,w;case Ji:return y=Yf(y,b.mode,w),y.return=b,y;case ss:var S=y._init;return h(b,S(y._payload),w)}if(Ma(y)||da(y))return y=yi(y,b.mode,w,null),y.return=b,y;Ec(b,y)}return null}function p(b,y,w,S){var k=y!==null?y.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:l(b,y,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case mc:return w.key===k?c(b,y,w,S):null;case Ji:return w.key===k?d(b,y,w,S):null;case ss:return k=w._init,p(b,y,k(w._payload),S)}if(Ma(w)||da(w))return k!==null?null:f(b,y,w,S,null);Ec(b,w)}return null}function m(b,y,w,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return b=b.get(w)||null,l(y,b,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case mc:return b=b.get(S.key===null?w:S.key)||null,c(y,b,S,k);case Ji:return b=b.get(S.key===null?w:S.key)||null,d(y,b,S,k);case ss:var C=S._init;return m(b,y,w,C(S._payload),k)}if(Ma(S)||da(S))return b=b.get(w)||null,f(y,b,S,k,null);Ec(y,S)}return null}function g(b,y,w,S){for(var k=null,C=null,j=y,E=y=0,L=null;j!==null&&E<w.length;E++){j.index>E?(L=j,j=null):L=j.sibling;var N=p(b,j,w[E],S);if(N===null){j===null&&(j=L);break}e&&j&&N.alternate===null&&t(b,j),y=i(N,y,E),C===null?k=N:C.sibling=N,C=N,j=L}if(E===w.length)return n(b,j),Ye&&ni(b,E),k;if(j===null){for(;E<w.length;E++)j=h(b,w[E],S),j!==null&&(y=i(j,y,E),C===null?k=j:C.sibling=j,C=j);return Ye&&ni(b,E),k}for(j=r(b,j);E<w.length;E++)L=m(j,b,E,w[E],S),L!==null&&(e&&L.alternate!==null&&j.delete(L.key===null?E:L.key),y=i(L,y,E),C===null?k=L:C.sibling=L,C=L);return e&&j.forEach(function(R){return t(b,R)}),Ye&&ni(b,E),k}function v(b,y,w,S){var k=da(w);if(typeof k!="function")throw Error(ee(150));if(w=k.call(w),w==null)throw Error(ee(151));for(var C=k=null,j=y,E=y=0,L=null,N=w.next();j!==null&&!N.done;E++,N=w.next()){j.index>E?(L=j,j=null):L=j.sibling;var R=p(b,j,N.value,S);if(R===null){j===null&&(j=L);break}e&&j&&R.alternate===null&&t(b,j),y=i(R,y,E),C===null?k=R:C.sibling=R,C=R,j=L}if(N.done)return n(b,j),Ye&&ni(b,E),k;if(j===null){for(;!N.done;E++,N=w.next())N=h(b,N.value,S),N!==null&&(y=i(N,y,E),C===null?k=N:C.sibling=N,C=N);return Ye&&ni(b,E),k}for(j=r(b,j);!N.done;E++,N=w.next())N=m(j,b,E,N.value,S),N!==null&&(e&&N.alternate!==null&&j.delete(N.key===null?E:N.key),y=i(N,y,E),C===null?k=N:C.sibling=N,C=N);return e&&j.forEach(function(D){return t(b,D)}),Ye&&ni(b,E),k}function x(b,y,w,S){if(typeof w=="object"&&w!==null&&w.type===eo&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case mc:e:{for(var k=w.key,C=y;C!==null;){if(C.key===k){if(k=w.type,k===eo){if(C.tag===7){n(b,C.sibling),y=s(C,w.props.children),y.return=b,b=y;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===ss&&Bv(k)===C.type){n(b,C.sibling),y=s(C,w.props),y.ref=ga(b,C,w),y.return=b,b=y;break e}n(b,C);break}else t(b,C);C=C.sibling}w.type===eo?(y=yi(w.props.children,b.mode,S,w.key),y.return=b,b=y):(S=au(w.type,w.key,w.props,null,b.mode,S),S.ref=ga(b,y,w),S.return=b,b=S)}return o(b);case Ji:e:{for(C=w.key;y!==null;){if(y.key===C)if(y.tag===4&&y.stateNode.containerInfo===w.containerInfo&&y.stateNode.implementation===w.implementation){n(b,y.sibling),y=s(y,w.children||[]),y.return=b,b=y;break e}else{n(b,y);break}else t(b,y);y=y.sibling}y=Yf(w,b.mode,S),y.return=b,b=y}return o(b);case ss:return C=w._init,x(b,y,C(w._payload),S)}if(Ma(w))return g(b,y,w,S);if(da(w))return v(b,y,w,S);Ec(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,y!==null&&y.tag===6?(n(b,y.sibling),y=s(y,w),y.return=b,b=y):(n(b,y),y=Zf(w,b.mode,S),y.return=b,b=y),o(b)):n(b,y)}return x}var Fo=TS(!0),MS=TS(!1),_u=Vs(null),Fu=null,lo=null,dg=null;function fg(){dg=lo=Fu=null}function hg(e){var t=_u.current;Ze(_u),e._currentValue=t}function vp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function bo(e,t){Fu=e,dg=lo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Kt=!0),e.firstContext=null)}function En(e){var t=e._currentValue;if(dg!==e)if(e={context:e,memoizedValue:t,next:null},lo===null){if(Fu===null)throw Error(ee(308));lo=e,Fu.dependencies={lanes:0,firstContext:e}}else lo=lo.next=e;return t}var ai=null;function pg(e){ai===null?ai=[e]:ai.push(e)}function RS(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,pg(t)):(n.next=s.next,s.next=n),t.interleaved=n,Ir(e,r)}function Ir(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var is=!1;function mg(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function AS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Rr(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Es(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Re&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Ir(e,n)}return s=r.interleaved,s===null?(t.next=t,pg(r)):(t.next=s.next,s.next=t),r.interleaved=t,Ir(e,n)}function tu(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eg(e,n)}}function Vv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=o:i=i.next=o,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function zu(e,t,n,r){var s=e.updateQueue;is=!1;var i=s.firstBaseUpdate,o=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,d=c.next;c.next=null,o===null?i=d:o.next=d,o=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==o&&(l===null?f.firstBaseUpdate=d:l.next=d,f.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;o=0,f=d=c=null,l=i;do{var p=l.lane,m=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(p=t,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(m,h,p);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(m,h,p):g,p==null)break e;h=tt({},h,p);break e;case 2:is=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(d=f=m,c=h):f=f.next=m,o|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(f===null&&(c=h),s.baseState=c,s.firstBaseUpdate=d,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do o|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);Ei|=o,e.lanes=o,e.memoizedState=h}}function $v(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(ee(191,s));s.call(r)}}}var Wl={},dr=Vs(Wl),pl=Vs(Wl),ml=Vs(Wl);function li(e){if(e===Wl)throw Error(ee(174));return e}function gg(e,t){switch(He(ml,t),He(pl,e),He(dr,Wl),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xh(t,e)}Ze(dr),He(dr,t)}function zo(){Ze(dr),Ze(pl),Ze(ml)}function OS(e){li(ml.current);var t=li(dr.current),n=Xh(t,e.type);t!==n&&(He(pl,e),He(dr,n))}function vg(e){pl.current===e&&(Ze(dr),Ze(pl))}var Qe=Vs(0);function Bu(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Uf=[];function xg(){for(var e=0;e<Uf.length;e++)Uf[e]._workInProgressVersionPrimary=null;Uf.length=0}var nu=Br.ReactCurrentDispatcher,Hf=Br.ReactCurrentBatchConfig,ji=0,Je=null,ct=null,ht=null,Vu=!1,Ka=!1,gl=0,$T=0;function Lt(){throw Error(ee(321))}function yg(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Wn(e[n],t[n]))return!1;return!0}function bg(e,t,n,r,s,i){if(ji=i,Je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,nu.current=e===null||e.memoizedState===null?KT:GT,e=n(r,s),Ka){i=0;do{if(Ka=!1,gl=0,25<=i)throw Error(ee(301));i+=1,ht=ct=null,t.updateQueue=null,nu.current=qT,e=n(r,s)}while(Ka)}if(nu.current=$u,t=ct!==null&&ct.next!==null,ji=0,ht=ct=Je=null,Vu=!1,t)throw Error(ee(300));return e}function wg(){var e=gl!==0;return gl=0,e}function er(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ht===null?Je.memoizedState=ht=e:ht=ht.next=e,ht}function Nn(){if(ct===null){var e=Je.alternate;e=e!==null?e.memoizedState:null}else e=ct.next;var t=ht===null?Je.memoizedState:ht.next;if(t!==null)ht=t,ct=e;else{if(e===null)throw Error(ee(310));ct=e,e={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},ht===null?Je.memoizedState=ht=e:ht=ht.next=e}return ht}function vl(e,t){return typeof t=="function"?t(e):t}function Wf(e){var t=Nn(),n=t.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=e;var r=ct,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var o=s.next;s.next=i.next,i.next=o}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=o=null,c=null,d=i;do{var f=d.lane;if((ji&f)===f)c!==null&&(c=c.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:e(r,d.action);else{var h={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};c===null?(l=c=h,o=r):c=c.next=h,Je.lanes|=f,Ei|=f}d=d.next}while(d!==null&&d!==i);c===null?o=r:c.next=l,Wn(r,t.memoizedState)||(Kt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,Je.lanes|=i,Ei|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Kf(e){var t=Nn(),n=t.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var o=s=s.next;do i=e(i,o.action),o=o.next;while(o!==s);Wn(i,t.memoizedState)||(Kt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function IS(){}function DS(e,t){var n=Je,r=Nn(),s=t(),i=!Wn(r.memoizedState,s);if(i&&(r.memoizedState=s,Kt=!0),r=r.queue,Sg(zS.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||ht!==null&&ht.memoizedState.tag&1){if(n.flags|=2048,xl(9,FS.bind(null,n,r,s,t),void 0,null),vt===null)throw Error(ee(349));ji&30||_S(n,t,s)}return s}function _S(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function FS(e,t,n,r){t.value=n,t.getSnapshot=r,BS(t)&&VS(e)}function zS(e,t,n){return n(function(){BS(t)&&VS(e)})}function BS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Wn(e,n)}catch{return!0}}function VS(e){var t=Ir(e,1);t!==null&&Un(t,e,1,-1)}function Uv(e){var t=er();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vl,lastRenderedState:e},t.queue=e,e=e.dispatch=WT.bind(null,Je,e),[t.memoizedState,e]}function xl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Je.updateQueue,t===null?(t={lastEffect:null,stores:null},Je.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $S(){return Nn().memoizedState}function ru(e,t,n,r){var s=er();Je.flags|=e,s.memoizedState=xl(1|t,n,void 0,r===void 0?null:r)}function Ad(e,t,n,r){var s=Nn();r=r===void 0?null:r;var i=void 0;if(ct!==null){var o=ct.memoizedState;if(i=o.destroy,r!==null&&yg(r,o.deps)){s.memoizedState=xl(t,n,i,r);return}}Je.flags|=e,s.memoizedState=xl(1|t,n,i,r)}function Hv(e,t){return ru(8390656,8,e,t)}function Sg(e,t){return Ad(2048,8,e,t)}function US(e,t){return Ad(4,2,e,t)}function HS(e,t){return Ad(4,4,e,t)}function WS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function KS(e,t,n){return n=n!=null?n.concat([e]):null,Ad(4,4,WS.bind(null,t,e),n)}function kg(){}function GS(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yg(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function qS(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&yg(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function ZS(e,t,n){return ji&21?(Wn(n,t)||(n=eS(),Je.lanes|=n,Ei|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Kt=!0),e.memoizedState=n)}function UT(e,t){var n=ze;ze=n!==0&&4>n?n:4,e(!0);var r=Hf.transition;Hf.transition={};try{e(!1),t()}finally{ze=n,Hf.transition=r}}function YS(){return Nn().memoizedState}function HT(e,t,n){var r=Ls(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},XS(e))QS(t,n);else if(n=RS(e,t,n,r),n!==null){var s=zt();Un(n,e,r,s),JS(n,t,r)}}function WT(e,t,n){var r=Ls(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(XS(e))QS(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var o=t.lastRenderedState,l=i(o,n);if(s.hasEagerState=!0,s.eagerState=l,Wn(l,o)){var c=t.interleaved;c===null?(s.next=s,pg(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=RS(e,t,s,r),n!==null&&(s=zt(),Un(n,e,r,s),JS(n,t,r))}}function XS(e){var t=e.alternate;return e===Je||t!==null&&t===Je}function QS(e,t){Ka=Vu=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function JS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,eg(e,n)}}var $u={readContext:En,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},KT={readContext:En,useCallback:function(e,t){return er().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:Hv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,ru(4194308,4,WS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ru(4194308,4,e,t)},useInsertionEffect:function(e,t){return ru(4,2,e,t)},useMemo:function(e,t){var n=er();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=er();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=HT.bind(null,Je,e),[r.memoizedState,e]},useRef:function(e){var t=er();return e={current:e},t.memoizedState=e},useState:Uv,useDebugValue:kg,useDeferredValue:function(e){return er().memoizedState=e},useTransition:function(){var e=Uv(!1),t=e[0];return e=UT.bind(null,e[1]),er().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Je,s=er();if(Ye){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=t(),vt===null)throw Error(ee(349));ji&30||_S(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Hv(zS.bind(null,r,i,e),[e]),r.flags|=2048,xl(9,FS.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=er(),t=vt.identifierPrefix;if(Ye){var n=Mr,r=Tr;n=(r&~(1<<32-$n(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=gl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=$T++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},GT={readContext:En,useCallback:GS,useContext:En,useEffect:Sg,useImperativeHandle:KS,useInsertionEffect:US,useLayoutEffect:HS,useMemo:qS,useReducer:Wf,useRef:$S,useState:function(){return Wf(vl)},useDebugValue:kg,useDeferredValue:function(e){var t=Nn();return ZS(t,ct.memoizedState,e)},useTransition:function(){var e=Wf(vl)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:IS,useSyncExternalStore:DS,useId:YS,unstable_isNewReconciler:!1},qT={readContext:En,useCallback:GS,useContext:En,useEffect:Sg,useImperativeHandle:KS,useInsertionEffect:US,useLayoutEffect:HS,useMemo:qS,useReducer:Kf,useRef:$S,useState:function(){return Kf(vl)},useDebugValue:kg,useDeferredValue:function(e){var t=Nn();return ct===null?t.memoizedState=e:ZS(t,ct.memoizedState,e)},useTransition:function(){var e=Kf(vl)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:IS,useSyncExternalStore:DS,useId:YS,unstable_isNewReconciler:!1};function _n(e,t){if(e&&e.defaultProps){t=tt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:tt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Od={isMounted:function(e){return(e=e._reactInternals)?Ii(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=zt(),s=Ls(e),i=Rr(r,s);i.payload=t,n!=null&&(i.callback=n),t=Es(e,i,s),t!==null&&(Un(t,e,s,r),tu(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=zt(),s=Ls(e),i=Rr(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Es(e,i,s),t!==null&&(Un(t,e,s,r),tu(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=zt(),r=Ls(e),s=Rr(n,r);s.tag=2,t!=null&&(s.callback=t),t=Es(e,s,r),t!==null&&(Un(t,e,r,n),tu(t,e,r))}};function Wv(e,t,n,r,s,i,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,o):t.prototype&&t.prototype.isPureReactComponent?!ul(n,r)||!ul(s,i):!0}function ek(e,t,n){var r=!1,s=Os,i=t.contextType;return typeof i=="object"&&i!==null?i=En(i):(s=qt(t)?ki:At.current,r=t.contextTypes,i=(r=r!=null)?Do(e,s):Os),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Od,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Kv(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Od.enqueueReplaceState(t,t.state,null)}function yp(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},mg(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=En(i):(i=qt(t)?ki:At.current,s.context=Do(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(xp(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Od.enqueueReplaceState(s,s.state,null),zu(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Bo(e,t){try{var n="",r=t;do n+=SP(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Gf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function bp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var ZT=typeof WeakMap=="function"?WeakMap:Map;function tk(e,t,n){n=Rr(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hu||(Hu=!0,Tp=r),bp(e,t)},n}function nk(e,t,n){n=Rr(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){bp(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){bp(e,t),typeof r!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Gv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new ZT;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=cM.bind(null,e,t,n),t.then(e,e))}function qv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Zv(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Rr(-1,1),t.tag=2,Es(n,t,1))),n.lanes|=1),e)}var YT=Br.ReactCurrentOwner,Kt=!1;function It(e,t,n,r){t.child=e===null?MS(t,null,n,r):Fo(t,e.child,n,r)}function Yv(e,t,n,r,s){n=n.render;var i=t.ref;return bo(t,s),r=bg(e,t,n,r,i,s),n=wg(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Dr(e,t,s)):(Ye&&n&&lg(t),t.flags|=1,It(e,t,r,s),t.child)}function Xv(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Mg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,rk(e,t,i,r,s)):(e=au(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var o=i.memoizedProps;if(n=n.compare,n=n!==null?n:ul,n(o,r)&&e.ref===t.ref)return Dr(e,t,s)}return t.flags|=1,e=Ps(i,r),e.ref=t.ref,e.return=t,t.child=e}function rk(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(ul(i,r)&&e.ref===t.ref)if(Kt=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Kt=!0);else return t.lanes=e.lanes,Dr(e,t,s)}return wp(e,t,n,r,s)}function sk(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},He(uo,tn),tn|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,He(uo,tn),tn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,He(uo,tn),tn|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,He(uo,tn),tn|=r;return It(e,t,s,n),t.child}function ik(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function wp(e,t,n,r,s){var i=qt(n)?ki:At.current;return i=Do(t,i),bo(t,s),n=bg(e,t,n,r,i,s),r=wg(),e!==null&&!Kt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Dr(e,t,s)):(Ye&&r&&lg(t),t.flags|=1,It(e,t,n,s),t.child)}function Qv(e,t,n,r,s){if(qt(n)){var i=!0;Ou(t)}else i=!1;if(bo(t,s),t.stateNode===null)su(e,t),ek(t,n,r),yp(t,n,r,s),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var c=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=En(d):(d=qt(n)?ki:At.current,d=Do(t,d));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||c!==d)&&Kv(t,o,r,d),is=!1;var p=t.memoizedState;o.state=p,zu(t,r,o,s),c=t.memoizedState,l!==r||p!==c||Gt.current||is?(typeof f=="function"&&(xp(t,n,f,r),c=t.memoizedState),(l=is||Wv(t,n,l,r,p,c,d))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=d,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,AS(e,t),l=t.memoizedProps,d=t.type===t.elementType?l:_n(t.type,l),o.props=d,h=t.pendingProps,p=o.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=qt(n)?ki:At.current,c=Do(t,c));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==h||p!==c)&&Kv(t,o,r,c),is=!1,p=t.memoizedState,o.state=p,zu(t,r,o,s);var g=t.memoizedState;l!==h||p!==g||Gt.current||is?(typeof m=="function"&&(xp(t,n,m,r),g=t.memoizedState),(d=is||Wv(t,n,d,r,p,g,c)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,c),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,c)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=c,r=d):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Sp(e,t,n,r,i,s)}function Sp(e,t,n,r,s,i){ik(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return s&&_v(t,n,!1),Dr(e,t,i);r=t.stateNode,YT.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fo(t,e.child,null,i),t.child=Fo(t,null,l,i)):It(e,t,l,i),t.memoizedState=r.state,s&&_v(t,n,!0),t.child}function ok(e){var t=e.stateNode;t.pendingContext?Dv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Dv(e,t.context,!1),gg(e,t.containerInfo)}function Jv(e,t,n,r,s){return _o(),ug(s),t.flags|=256,It(e,t,n,r),t.child}var kp={dehydrated:null,treeContext:null,retryLane:0};function Cp(e){return{baseLanes:e,cachePool:null,transitions:null}}function ak(e,t,n){var r=t.pendingProps,s=Qe.current,i=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),He(Qe,s&1),e===null)return gp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,i?(r=t.mode,i=t.child,o={mode:"hidden",children:o},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=o):i=_d(o,r,0,null),e=yi(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Cp(n),t.memoizedState=kp,e):Cg(t,o));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return XT(e,t,o,r,l,s,n);if(i){i=r.fallback,o=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(o&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ps(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Ps(l,i):(i=yi(i,o,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,o=e.child.memoizedState,o=o===null?Cp(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},i.memoizedState=o,i.childLanes=e.childLanes&~n,t.memoizedState=kp,r}return i=e.child,e=i.sibling,r=Ps(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Cg(e,t){return t=_d({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Nc(e,t,n,r){return r!==null&&ug(r),Fo(t,e.child,null,n),e=Cg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function XT(e,t,n,r,s,i,o){if(n)return t.flags&256?(t.flags&=-257,r=Gf(Error(ee(422))),Nc(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=_d({mode:"visible",children:r.children},s,0,null),i=yi(i,s,o,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Fo(t,e.child,null,o),t.child.memoizedState=Cp(o),t.memoizedState=kp,i);if(!(t.mode&1))return Nc(e,t,o,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(ee(419)),r=Gf(i,r,void 0),Nc(e,t,o,r)}if(l=(o&e.childLanes)!==0,Kt||l){if(r=vt,r!==null){switch(o&-o){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|o)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Ir(e,s),Un(r,e,s,-1))}return Tg(),r=Gf(Error(ee(421))),Nc(e,t,o,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=uM.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,on=js(s.nextSibling),ln=t,Ye=!0,Vn=null,e!==null&&(yn[bn++]=Tr,yn[bn++]=Mr,yn[bn++]=Ci,Tr=e.id,Mr=e.overflow,Ci=t),t=Cg(t,r.children),t.flags|=4096,t)}function ex(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),vp(e.return,t,n)}function qf(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function lk(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(It(e,t,r.children,n),r=Qe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ex(e,n,t);else if(e.tag===19)ex(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(He(Qe,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Bu(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),qf(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Bu(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}qf(t,!0,n,null,i);break;case"together":qf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function su(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ei|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ee(153));if(t.child!==null){for(e=t.child,n=Ps(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ps(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function QT(e,t,n){switch(t.tag){case 3:ok(t),_o();break;case 5:OS(t);break;case 1:qt(t.type)&&Ou(t);break;case 4:gg(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;He(_u,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(He(Qe,Qe.current&1),t.flags|=128,null):n&t.child.childLanes?ak(e,t,n):(He(Qe,Qe.current&1),e=Dr(e,t,n),e!==null?e.sibling:null);He(Qe,Qe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return lk(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),He(Qe,Qe.current),r)break;return null;case 22:case 23:return t.lanes=0,sk(e,t,n)}return Dr(e,t,n)}var ck,jp,uk,dk;ck=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jp=function(){};uk=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,li(dr.current);var i=null;switch(n){case"input":s=Gh(e,s),r=Gh(e,r),i=[];break;case"select":s=tt({},s,{value:void 0}),r=tt({},r,{value:void 0}),i=[];break;case"textarea":s=Yh(e,s),r=Yh(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ru)}Qh(n,r);var o;n=null;for(d in s)if(!r.hasOwnProperty(d)&&s.hasOwnProperty(d)&&s[d]!=null)if(d==="style"){var l=s[d];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(rl.hasOwnProperty(d)?i||(i=[]):(i=i||[]).push(d,null));for(d in r){var c=r[d];if(l=s!=null?s[d]:void 0,r.hasOwnProperty(d)&&c!==l&&(c!=null||l!=null))if(d==="style")if(l){for(o in l)!l.hasOwnProperty(o)||c&&c.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in c)c.hasOwnProperty(o)&&l[o]!==c[o]&&(n||(n={}),n[o]=c[o])}else n||(i||(i=[]),i.push(d,n)),n=c;else d==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(d,c)):d==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(d,""+c):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(rl.hasOwnProperty(d)?(c!=null&&d==="onScroll"&&Ge("scroll",e),i||l===c||(i=[])):(i=i||[]).push(d,c))}n&&(i=i||[]).push("style",n);var d=i;(t.updateQueue=d)&&(t.flags|=4)}};dk=function(e,t,n,r){n!==r&&(t.flags|=4)};function va(e,t){if(!Ye)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Pt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function JT(e,t,n){var r=t.pendingProps;switch(cg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pt(t),null;case 1:return qt(t.type)&&Au(),Pt(t),null;case 3:return r=t.stateNode,zo(),Ze(Gt),Ze(At),xg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(jc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vn!==null&&(Ap(Vn),Vn=null))),jp(e,t),Pt(t),null;case 5:vg(t);var s=li(ml.current);if(n=t.type,e!==null&&t.stateNode!=null)uk(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(ee(166));return Pt(t),null}if(e=li(dr.current),jc(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[ar]=t,r[hl]=i,e=(t.mode&1)!==0,n){case"dialog":Ge("cancel",r),Ge("close",r);break;case"iframe":case"object":case"embed":Ge("load",r);break;case"video":case"audio":for(s=0;s<Aa.length;s++)Ge(Aa[s],r);break;case"source":Ge("error",r);break;case"img":case"image":case"link":Ge("error",r),Ge("load",r);break;case"details":Ge("toggle",r);break;case"input":cv(r,i),Ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ge("invalid",r);break;case"textarea":dv(r,i),Ge("invalid",r)}Qh(n,i),s=null;for(var o in i)if(i.hasOwnProperty(o)){var l=i[o];o==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&Cc(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&Cc(r.textContent,l,e),s=["children",""+l]):rl.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&Ge("scroll",r)}switch(n){case"input":gc(r),uv(r,i,!0);break;case"textarea":gc(r),fv(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ru)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=z1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[ar]=t,e[hl]=r,ck(e,t,!1,!1),t.stateNode=e;e:{switch(o=Jh(n,r),n){case"dialog":Ge("cancel",e),Ge("close",e),s=r;break;case"iframe":case"object":case"embed":Ge("load",e),s=r;break;case"video":case"audio":for(s=0;s<Aa.length;s++)Ge(Aa[s],e);s=r;break;case"source":Ge("error",e),s=r;break;case"img":case"image":case"link":Ge("error",e),Ge("load",e),s=r;break;case"details":Ge("toggle",e),s=r;break;case"input":cv(e,r),s=Gh(e,r),Ge("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=tt({},r,{value:void 0}),Ge("invalid",e);break;case"textarea":dv(e,r),s=Yh(e,r),Ge("invalid",e);break;default:s=r}Qh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?$1(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&B1(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&sl(e,c):typeof c=="number"&&sl(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(rl.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ge("scroll",e):c!=null&&qm(e,i,c,o))}switch(n){case"input":gc(e),uv(e,r,!1);break;case"textarea":gc(e),fv(e);break;case"option":r.value!=null&&e.setAttribute("value",""+As(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?go(e,!!r.multiple,i,!1):r.defaultValue!=null&&go(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Ru)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Pt(t),null;case 6:if(e&&t.stateNode!=null)dk(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(ee(166));if(n=li(ml.current),li(dr.current),jc(t)){if(r=t.stateNode,n=t.memoizedProps,r[ar]=t,(i=r.nodeValue!==n)&&(e=ln,e!==null))switch(e.tag){case 3:Cc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cc(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[ar]=t,t.stateNode=r}return Pt(t),null;case 13:if(Ze(Qe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ye&&on!==null&&t.mode&1&&!(t.flags&128))PS(),_o(),t.flags|=98560,i=!1;else if(i=jc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(ee(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ee(317));i[ar]=t}else _o(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Pt(t),i=!1}else Vn!==null&&(Ap(Vn),Vn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Qe.current&1?ut===0&&(ut=3):Tg())),t.updateQueue!==null&&(t.flags|=4),Pt(t),null);case 4:return zo(),jp(e,t),e===null&&dl(t.stateNode.containerInfo),Pt(t),null;case 10:return hg(t.type._context),Pt(t),null;case 17:return qt(t.type)&&Au(),Pt(t),null;case 19:if(Ze(Qe),i=t.memoizedState,i===null)return Pt(t),null;if(r=(t.flags&128)!==0,o=i.rendering,o===null)if(r)va(i,!1);else{if(ut!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=Bu(e),o!==null){for(t.flags|=128,va(i,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,o=i.alternate,o===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,e=o.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return He(Qe,Qe.current&1|2),t.child}e=e.sibling}i.tail!==null&&it()>Vo&&(t.flags|=128,r=!0,va(i,!1),t.lanes=4194304)}else{if(!r)if(e=Bu(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),va(i,!0),i.tail===null&&i.tailMode==="hidden"&&!o.alternate&&!Ye)return Pt(t),null}else 2*it()-i.renderingStartTime>Vo&&n!==1073741824&&(t.flags|=128,r=!0,va(i,!1),t.lanes=4194304);i.isBackwards?(o.sibling=t.child,t.child=o):(n=i.last,n!==null?n.sibling=o:t.child=o,i.last=o)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=it(),t.sibling=null,n=Qe.current,He(Qe,r?n&1|2:n&1),t):(Pt(t),null);case 22:case 23:return Pg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?tn&1073741824&&(Pt(t),t.subtreeFlags&6&&(t.flags|=8192)):Pt(t),null;case 24:return null;case 25:return null}throw Error(ee(156,t.tag))}function eM(e,t){switch(cg(t),t.tag){case 1:return qt(t.type)&&Au(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zo(),Ze(Gt),Ze(At),xg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return vg(t),null;case 13:if(Ze(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ee(340));_o()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ze(Qe),null;case 4:return zo(),null;case 10:return hg(t.type._context),null;case 22:case 23:return Pg(),null;case 24:return null;default:return null}}var Lc=!1,Mt=!1,tM=typeof WeakSet=="function"?WeakSet:Set,ce=null;function co(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){st(e,t,r)}else n.current=null}function Ep(e,t,n){try{n()}catch(r){st(e,t,r)}}var tx=!1;function nM(e,t){if(cp=Pu,e=gS(),ag(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var o=0,l=-1,c=-1,d=0,f=0,h=e,p=null;t:for(;;){for(var m;h!==n||s!==0&&h.nodeType!==3||(l=o+s),h!==i||r!==0&&h.nodeType!==3||(c=o+r),h.nodeType===3&&(o+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===e)break t;if(p===n&&++d===s&&(l=o),p===i&&++f===r&&(c=o),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(up={focusedElem:e,selectionRange:n},Pu=!1,ce=t;ce!==null;)if(t=ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ce=e;else for(;ce!==null;){t=ce;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,x=g.memoizedState,b=t.stateNode,y=b.getSnapshotBeforeUpdate(t.elementType===t.type?v:_n(t.type,v),x);b.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(S){st(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ce=e;break}ce=t.return}return g=tx,tx=!1,g}function Ga(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&Ep(t,n,i)}s=s.next}while(s!==r)}}function Id(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Np(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function fk(e){var t=e.alternate;t!==null&&(e.alternate=null,fk(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[ar],delete t[hl],delete t[hp],delete t[FT],delete t[zT])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function hk(e){return e.tag===5||e.tag===3||e.tag===4}function nx(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hk(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Lp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ru));else if(r!==4&&(e=e.child,e!==null))for(Lp(e,t,n),e=e.sibling;e!==null;)Lp(e,t,n),e=e.sibling}function Pp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Pp(e,t,n),e=e.sibling;e!==null;)Pp(e,t,n),e=e.sibling}var bt=null,Bn=!1;function Yr(e,t,n){for(n=n.child;n!==null;)pk(e,t,n),n=n.sibling}function pk(e,t,n){if(ur&&typeof ur.onCommitFiberUnmount=="function")try{ur.onCommitFiberUnmount(Nd,n)}catch{}switch(n.tag){case 5:Mt||co(n,t);case 6:var r=bt,s=Bn;bt=null,Yr(e,t,n),bt=r,Bn=s,bt!==null&&(Bn?(e=bt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):bt.removeChild(n.stateNode));break;case 18:bt!==null&&(Bn?(e=bt,n=n.stateNode,e.nodeType===8?Vf(e.parentNode,n):e.nodeType===1&&Vf(e,n),ll(e)):Vf(bt,n.stateNode));break;case 4:r=bt,s=Bn,bt=n.stateNode.containerInfo,Bn=!0,Yr(e,t,n),bt=r,Bn=s;break;case 0:case 11:case 14:case 15:if(!Mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,o=i.destroy;i=i.tag,o!==void 0&&(i&2||i&4)&&Ep(n,t,o),s=s.next}while(s!==r)}Yr(e,t,n);break;case 1:if(!Mt&&(co(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){st(n,t,l)}Yr(e,t,n);break;case 21:Yr(e,t,n);break;case 22:n.mode&1?(Mt=(r=Mt)||n.memoizedState!==null,Yr(e,t,n),Mt=r):Yr(e,t,n);break;default:Yr(e,t,n)}}function rx(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new tM),t.forEach(function(r){var s=dM.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function Mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:bt=l.stateNode,Bn=!1;break e;case 3:bt=l.stateNode.containerInfo,Bn=!0;break e;case 4:bt=l.stateNode.containerInfo,Bn=!0;break e}l=l.return}if(bt===null)throw Error(ee(160));pk(i,o,s),bt=null,Bn=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(d){st(s,t,d)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)mk(t,e),t=t.sibling}function mk(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Mn(t,e),Jn(e),r&4){try{Ga(3,e,e.return),Id(3,e)}catch(v){st(e,e.return,v)}try{Ga(5,e,e.return)}catch(v){st(e,e.return,v)}}break;case 1:Mn(t,e),Jn(e),r&512&&n!==null&&co(n,n.return);break;case 5:if(Mn(t,e),Jn(e),r&512&&n!==null&&co(n,n.return),e.flags&32){var s=e.stateNode;try{sl(s,"")}catch(v){st(e,e.return,v)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,o=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&_1(s,i),Jh(l,o);var d=Jh(l,i);for(o=0;o<c.length;o+=2){var f=c[o],h=c[o+1];f==="style"?$1(s,h):f==="dangerouslySetInnerHTML"?B1(s,h):f==="children"?sl(s,h):qm(s,f,h,d)}switch(l){case"input":qh(s,i);break;case"textarea":F1(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?go(s,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?go(s,!!i.multiple,i.defaultValue,!0):go(s,!!i.multiple,i.multiple?[]:"",!1))}s[hl]=i}catch(v){st(e,e.return,v)}}break;case 6:if(Mn(t,e),Jn(e),r&4){if(e.stateNode===null)throw Error(ee(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(v){st(e,e.return,v)}}break;case 3:if(Mn(t,e),Jn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ll(t.containerInfo)}catch(v){st(e,e.return,v)}break;case 4:Mn(t,e),Jn(e);break;case 13:Mn(t,e),Jn(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(Ng=it())),r&4&&rx(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Mt=(d=Mt)||f,Mn(t,e),Mt=d):Mn(t,e),Jn(e),r&8192){if(d=e.memoizedState!==null,(e.stateNode.isHidden=d)&&!f&&e.mode&1)for(ce=e,f=e.child;f!==null;){for(h=ce=f;ce!==null;){switch(p=ce,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ga(4,p,p.return);break;case 1:co(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){st(r,n,v)}}break;case 5:co(p,p.return);break;case 22:if(p.memoizedState!==null){ix(h);continue}}m!==null?(m.return=p,ce=m):ix(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{s=h.stateNode,d?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,o=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=V1("display",o))}catch(v){st(e,e.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=d?"":h.memoizedProps}catch(v){st(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Mn(t,e),Jn(e),r&4&&rx(e);break;case 21:break;default:Mn(t,e),Jn(e)}}function Jn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(hk(n)){var r=n;break e}n=n.return}throw Error(ee(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(sl(s,""),r.flags&=-33);var i=nx(e);Pp(e,i,s);break;case 3:case 4:var o=r.stateNode.containerInfo,l=nx(e);Lp(e,l,o);break;default:throw Error(ee(161))}}catch(c){st(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function rM(e,t,n){ce=e,gk(e)}function gk(e,t,n){for(var r=(e.mode&1)!==0;ce!==null;){var s=ce,i=s.child;if(s.tag===22&&r){var o=s.memoizedState!==null||Lc;if(!o){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Mt;l=Lc;var d=Mt;if(Lc=o,(Mt=c)&&!d)for(ce=s;ce!==null;)o=ce,c=o.child,o.tag===22&&o.memoizedState!==null?ox(s):c!==null?(c.return=o,ce=c):ox(s);for(;i!==null;)ce=i,gk(i),i=i.sibling;ce=s,Lc=l,Mt=d}sx(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,ce=i):sx(e)}}function sx(e){for(;ce!==null;){var t=ce;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Mt||Id(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Mt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:_n(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&$v(t,i,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}$v(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var d=t.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&ll(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Mt||t.flags&512&&Np(t)}catch(p){st(t,t.return,p)}}if(t===e){ce=null;break}if(n=t.sibling,n!==null){n.return=t.return,ce=n;break}ce=t.return}}function ix(e){for(;ce!==null;){var t=ce;if(t===e){ce=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ce=n;break}ce=t.return}}function ox(e){for(;ce!==null;){var t=ce;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Id(4,t)}catch(c){st(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){st(t,s,c)}}var i=t.return;try{Np(t)}catch(c){st(t,i,c)}break;case 5:var o=t.return;try{Np(t)}catch(c){st(t,o,c)}}}catch(c){st(t,t.return,c)}if(t===e){ce=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ce=l;break}ce=t.return}}var sM=Math.ceil,Uu=Br.ReactCurrentDispatcher,jg=Br.ReactCurrentOwner,Cn=Br.ReactCurrentBatchConfig,Re=0,vt=null,at=null,jt=0,tn=0,uo=Vs(0),ut=0,yl=null,Ei=0,Dd=0,Eg=0,qa=null,Wt=null,Ng=0,Vo=1/0,Nr=null,Hu=!1,Tp=null,Ns=null,Pc=!1,gs=null,Wu=0,Za=0,Mp=null,iu=-1,ou=0;function zt(){return Re&6?it():iu!==-1?iu:iu=it()}function Ls(e){return e.mode&1?Re&2&&jt!==0?jt&-jt:VT.transition!==null?(ou===0&&(ou=eS()),ou):(e=ze,e!==0||(e=window.event,e=e===void 0?16:aS(e.type)),e):1}function Un(e,t,n,r){if(50<Za)throw Za=0,Mp=null,Error(ee(185));$l(e,n,r),(!(Re&2)||e!==vt)&&(e===vt&&(!(Re&2)&&(Dd|=n),ut===4&&ls(e,jt)),Zt(e,r),n===1&&Re===0&&!(t.mode&1)&&(Vo=it()+500,Rd&&$s()))}function Zt(e,t){var n=e.callbackNode;VP(e,t);var r=Lu(e,e===vt?jt:0);if(r===0)n!==null&&mv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&mv(n),t===1)e.tag===0?BT(ax.bind(null,e)):ES(ax.bind(null,e)),DT(function(){!(Re&6)&&$s()}),n=null;else{switch(tS(r)){case 1:n=Jm;break;case 4:n=Q1;break;case 16:n=Nu;break;case 536870912:n=J1;break;default:n=Nu}n=Ck(n,vk.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function vk(e,t){if(iu=-1,ou=0,Re&6)throw Error(ee(327));var n=e.callbackNode;if(wo()&&e.callbackNode!==n)return null;var r=Lu(e,e===vt?jt:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Ku(e,r);else{t=r;var s=Re;Re|=2;var i=yk();(vt!==e||jt!==t)&&(Nr=null,Vo=it()+500,xi(e,t));do try{aM();break}catch(l){xk(e,l)}while(!0);fg(),Uu.current=i,Re=s,at!==null?t=0:(vt=null,jt=0,t=ut)}if(t!==0){if(t===2&&(s=sp(e),s!==0&&(r=s,t=Rp(e,s))),t===1)throw n=yl,xi(e,0),ls(e,r),Zt(e,it()),n;if(t===6)ls(e,r);else{if(s=e.current.alternate,!(r&30)&&!iM(s)&&(t=Ku(e,r),t===2&&(i=sp(e),i!==0&&(r=i,t=Rp(e,i))),t===1))throw n=yl,xi(e,0),ls(e,r),Zt(e,it()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(ee(345));case 2:ri(e,Wt,Nr);break;case 3:if(ls(e,r),(r&130023424)===r&&(t=Ng+500-it(),10<t)){if(Lu(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){zt(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=fp(ri.bind(null,e,Wt,Nr),t);break}ri(e,Wt,Nr);break;case 4:if(ls(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var o=31-$n(r);i=1<<o,o=t[o],o>s&&(s=o),r&=~i}if(r=s,r=it()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*sM(r/1960))-r,10<r){e.timeoutHandle=fp(ri.bind(null,e,Wt,Nr),r);break}ri(e,Wt,Nr);break;case 5:ri(e,Wt,Nr);break;default:throw Error(ee(329))}}}return Zt(e,it()),e.callbackNode===n?vk.bind(null,e):null}function Rp(e,t){var n=qa;return e.current.memoizedState.isDehydrated&&(xi(e,t).flags|=256),e=Ku(e,t),e!==2&&(t=Wt,Wt=n,t!==null&&Ap(t)),e}function Ap(e){Wt===null?Wt=e:Wt.push.apply(Wt,e)}function iM(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Wn(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function ls(e,t){for(t&=~Eg,t&=~Dd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-$n(t),r=1<<n;e[n]=-1,t&=~r}}function ax(e){if(Re&6)throw Error(ee(327));wo();var t=Lu(e,0);if(!(t&1))return Zt(e,it()),null;var n=Ku(e,t);if(e.tag!==0&&n===2){var r=sp(e);r!==0&&(t=r,n=Rp(e,r))}if(n===1)throw n=yl,xi(e,0),ls(e,t),Zt(e,it()),n;if(n===6)throw Error(ee(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ri(e,Wt,Nr),Zt(e,it()),null}function Lg(e,t){var n=Re;Re|=1;try{return e(t)}finally{Re=n,Re===0&&(Vo=it()+500,Rd&&$s())}}function Ni(e){gs!==null&&gs.tag===0&&!(Re&6)&&wo();var t=Re;Re|=1;var n=Cn.transition,r=ze;try{if(Cn.transition=null,ze=1,e)return e()}finally{ze=r,Cn.transition=n,Re=t,!(Re&6)&&$s()}}function Pg(){tn=uo.current,Ze(uo)}function xi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,IT(n)),at!==null)for(n=at.return;n!==null;){var r=n;switch(cg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Au();break;case 3:zo(),Ze(Gt),Ze(At),xg();break;case 5:vg(r);break;case 4:zo();break;case 13:Ze(Qe);break;case 19:Ze(Qe);break;case 10:hg(r.type._context);break;case 22:case 23:Pg()}n=n.return}if(vt=e,at=e=Ps(e.current,null),jt=tn=t,ut=0,yl=null,Eg=Dd=Ei=0,Wt=qa=null,ai!==null){for(t=0;t<ai.length;t++)if(n=ai[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var o=i.next;i.next=s,r.next=o}n.pending=r}ai=null}return e}function xk(e,t){do{var n=at;try{if(fg(),nu.current=$u,Vu){for(var r=Je.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Vu=!1}if(ji=0,ht=ct=Je=null,Ka=!1,gl=0,jg.current=null,n===null||n.return===null){ut=1,yl=t,at=null;break}e:{var i=e,o=n.return,l=n,c=t;if(t=jt,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var d=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=qv(o);if(m!==null){m.flags&=-257,Zv(m,o,l,i,t),m.mode&1&&Gv(i,d,t),t=m,c=d;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Gv(i,d,t),Tg();break e}c=Error(ee(426))}}else if(Ye&&l.mode&1){var x=qv(o);if(x!==null){!(x.flags&65536)&&(x.flags|=256),Zv(x,o,l,i,t),ug(Bo(c,l));break e}}i=c=Bo(c,l),ut!==4&&(ut=2),qa===null?qa=[i]:qa.push(i),i=o;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=tk(i,c,t);Vv(i,b);break e;case 1:l=c;var y=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ns===null||!Ns.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=nk(i,l,t);Vv(i,S);break e}}i=i.return}while(i!==null)}wk(n)}catch(k){t=k,at===n&&n!==null&&(at=n=n.return);continue}break}while(!0)}function yk(){var e=Uu.current;return Uu.current=$u,e===null?$u:e}function Tg(){(ut===0||ut===3||ut===2)&&(ut=4),vt===null||!(Ei&268435455)&&!(Dd&268435455)||ls(vt,jt)}function Ku(e,t){var n=Re;Re|=2;var r=yk();(vt!==e||jt!==t)&&(Nr=null,xi(e,t));do try{oM();break}catch(s){xk(e,s)}while(!0);if(fg(),Re=n,Uu.current=r,at!==null)throw Error(ee(261));return vt=null,jt=0,ut}function oM(){for(;at!==null;)bk(at)}function aM(){for(;at!==null&&!RP();)bk(at)}function bk(e){var t=kk(e.alternate,e,tn);e.memoizedProps=e.pendingProps,t===null?wk(e):at=t,jg.current=null}function wk(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=eM(n,t),n!==null){n.flags&=32767,at=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ut=6,at=null;return}}else if(n=JT(n,t,tn),n!==null){at=n;return}if(t=t.sibling,t!==null){at=t;return}at=t=e}while(t!==null);ut===0&&(ut=5)}function ri(e,t,n){var r=ze,s=Cn.transition;try{Cn.transition=null,ze=1,lM(e,t,n,r)}finally{Cn.transition=s,ze=r}return null}function lM(e,t,n,r){do wo();while(gs!==null);if(Re&6)throw Error(ee(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(ee(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if($P(e,i),e===vt&&(at=vt=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Pc||(Pc=!0,Ck(Nu,function(){return wo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Cn.transition,Cn.transition=null;var o=ze;ze=1;var l=Re;Re|=4,jg.current=null,nM(e,n),mk(n,e),LT(up),Pu=!!cp,up=cp=null,e.current=n,rM(n),AP(),Re=l,ze=o,Cn.transition=i}else e.current=n;if(Pc&&(Pc=!1,gs=e,Wu=s),i=e.pendingLanes,i===0&&(Ns=null),DP(n.stateNode),Zt(e,it()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Hu)throw Hu=!1,e=Tp,Tp=null,e;return Wu&1&&e.tag!==0&&wo(),i=e.pendingLanes,i&1?e===Mp?Za++:(Za=0,Mp=e):Za=0,$s(),null}function wo(){if(gs!==null){var e=tS(Wu),t=Cn.transition,n=ze;try{if(Cn.transition=null,ze=16>e?16:e,gs===null)var r=!1;else{if(e=gs,gs=null,Wu=0,Re&6)throw Error(ee(331));var s=Re;for(Re|=4,ce=e.current;ce!==null;){var i=ce,o=i.child;if(ce.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var d=l[c];for(ce=d;ce!==null;){var f=ce;switch(f.tag){case 0:case 11:case 15:Ga(8,f,i)}var h=f.child;if(h!==null)h.return=f,ce=h;else for(;ce!==null;){f=ce;var p=f.sibling,m=f.return;if(fk(f),f===d){ce=null;break}if(p!==null){p.return=m,ce=p;break}ce=m}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var x=v.sibling;v.sibling=null,v=x}while(v!==null)}}ce=i}}if(i.subtreeFlags&2064&&o!==null)o.return=i,ce=o;else e:for(;ce!==null;){if(i=ce,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ga(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,ce=b;break e}ce=i.return}}var y=e.current;for(ce=y;ce!==null;){o=ce;var w=o.child;if(o.subtreeFlags&2064&&w!==null)w.return=o,ce=w;else e:for(o=y;ce!==null;){if(l=ce,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Id(9,l)}}catch(k){st(l,l.return,k)}if(l===o){ce=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ce=S;break e}ce=l.return}}if(Re=s,$s(),ur&&typeof ur.onPostCommitFiberRoot=="function")try{ur.onPostCommitFiberRoot(Nd,e)}catch{}r=!0}return r}finally{ze=n,Cn.transition=t}}return!1}function lx(e,t,n){t=Bo(n,t),t=tk(e,t,1),e=Es(e,t,1),t=zt(),e!==null&&($l(e,1,t),Zt(e,t))}function st(e,t,n){if(e.tag===3)lx(e,e,n);else for(;t!==null;){if(t.tag===3){lx(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ns===null||!Ns.has(r))){e=Bo(n,e),e=nk(t,e,1),t=Es(t,e,1),e=zt(),t!==null&&($l(t,1,e),Zt(t,e));break}}t=t.return}}function cM(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=zt(),e.pingedLanes|=e.suspendedLanes&n,vt===e&&(jt&n)===n&&(ut===4||ut===3&&(jt&130023424)===jt&&500>it()-Ng?xi(e,0):Eg|=n),Zt(e,t)}function Sk(e,t){t===0&&(e.mode&1?(t=yc,yc<<=1,!(yc&130023424)&&(yc=4194304)):t=1);var n=zt();e=Ir(e,t),e!==null&&($l(e,t,n),Zt(e,n))}function uM(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Sk(e,n)}function dM(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(ee(314))}r!==null&&r.delete(t),Sk(e,n)}var kk;kk=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Gt.current)Kt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Kt=!1,QT(e,t,n);Kt=!!(e.flags&131072)}else Kt=!1,Ye&&t.flags&1048576&&NS(t,Du,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;su(e,t),e=t.pendingProps;var s=Do(t,At.current);bo(t,n),s=bg(null,t,r,e,s,n);var i=wg();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qt(r)?(i=!0,Ou(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,mg(t),s.updater=Od,t.stateNode=s,s._reactInternals=t,yp(t,r,e,n),t=Sp(null,t,r,!0,i,n)):(t.tag=0,Ye&&i&&lg(t),It(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(su(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=hM(r),e=_n(r,e),s){case 0:t=wp(null,t,r,e,n);break e;case 1:t=Qv(null,t,r,e,n);break e;case 11:t=Yv(null,t,r,e,n);break e;case 14:t=Xv(null,t,r,_n(r.type,e),n);break e}throw Error(ee(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:_n(r,s),wp(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:_n(r,s),Qv(e,t,r,s,n);case 3:e:{if(ok(t),e===null)throw Error(ee(387));r=t.pendingProps,i=t.memoizedState,s=i.element,AS(e,t),zu(t,r,null,n);var o=t.memoizedState;if(r=o.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Bo(Error(ee(423)),t),t=Jv(e,t,r,n,s);break e}else if(r!==s){s=Bo(Error(ee(424)),t),t=Jv(e,t,r,n,s);break e}else for(on=js(t.stateNode.containerInfo.firstChild),ln=t,Ye=!0,Vn=null,n=MS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(_o(),r===s){t=Dr(e,t,n);break e}It(e,t,r,n)}t=t.child}return t;case 5:return OS(t),e===null&&gp(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,o=s.children,dp(r,s)?o=null:i!==null&&dp(r,i)&&(t.flags|=32),ik(e,t),It(e,t,o,n),t.child;case 6:return e===null&&gp(t),null;case 13:return ak(e,t,n);case 4:return gg(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fo(t,null,r,n):It(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:_n(r,s),Yv(e,t,r,s,n);case 7:return It(e,t,t.pendingProps,n),t.child;case 8:return It(e,t,t.pendingProps.children,n),t.child;case 12:return It(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,o=s.value,He(_u,r._currentValue),r._currentValue=o,i!==null)if(Wn(i.value,o)){if(i.children===s.children&&!Gt.current){t=Dr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){o=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=Rr(-1,n&-n),c.tag=2;var d=i.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?c.next=c:(c.next=f.next,f.next=c),d.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),vp(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)o=i.type===t.type?null:i.child;else if(i.tag===18){if(o=i.return,o===null)throw Error(ee(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),vp(o,n,t),o=i.sibling}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===t){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}It(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,bo(t,n),s=En(s),r=r(s),t.flags|=1,It(e,t,r,n),t.child;case 14:return r=t.type,s=_n(r,t.pendingProps),s=_n(r.type,s),Xv(e,t,r,s,n);case 15:return rk(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:_n(r,s),su(e,t),t.tag=1,qt(r)?(e=!0,Ou(t)):e=!1,bo(t,n),ek(t,r,s),yp(t,r,s,n),Sp(null,t,r,!0,e,n);case 19:return lk(e,t,n);case 22:return sk(e,t,n)}throw Error(ee(156,t.tag))};function Ck(e,t){return X1(e,t)}function fM(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new fM(e,t,n,r)}function Mg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function hM(e){if(typeof e=="function")return Mg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Ym)return 11;if(e===Xm)return 14}return 2}function Ps(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function au(e,t,n,r,s,i){var o=2;if(r=e,typeof e=="function")Mg(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case eo:return yi(n.children,s,i,t);case Zm:o=8,s|=8;break;case Uh:return e=wn(12,n,t,s|2),e.elementType=Uh,e.lanes=i,e;case Hh:return e=wn(13,n,t,s),e.elementType=Hh,e.lanes=i,e;case Wh:return e=wn(19,n,t,s),e.elementType=Wh,e.lanes=i,e;case O1:return _d(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case R1:o=10;break e;case A1:o=9;break e;case Ym:o=11;break e;case Xm:o=14;break e;case ss:o=16,r=null;break e}throw Error(ee(130,e==null?e:typeof e,""))}return t=wn(o,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function yi(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function _d(e,t,n,r){return e=wn(22,e,r,t),e.elementType=O1,e.lanes=n,e.stateNode={isHidden:!1},e}function Zf(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function Yf(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function pM(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tf(0),this.expirationTimes=Tf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tf(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function Rg(e,t,n,r,s,i,o,l,c){return e=new pM(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=wn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},mg(i),e}function mM(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ji,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function jk(e){if(!e)return Os;e=e._reactInternals;e:{if(Ii(e)!==e||e.tag!==1)throw Error(ee(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ee(171))}if(e.tag===1){var n=e.type;if(qt(n))return jS(e,n,t)}return t}function Ek(e,t,n,r,s,i,o,l,c){return e=Rg(n,r,!0,e,s,i,o,l,c),e.context=jk(null),n=e.current,r=zt(),s=Ls(n),i=Rr(r,s),i.callback=t??null,Es(n,i,s),e.current.lanes=s,$l(e,s,r),Zt(e,r),e}function Fd(e,t,n,r){var s=t.current,i=zt(),o=Ls(s);return n=jk(n),t.context===null?t.context=n:t.pendingContext=n,t=Rr(i,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Es(s,t,o),e!==null&&(Un(e,s,o,i),tu(e,s,o)),o}function Gu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cx(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Ag(e,t){cx(e,t),(e=e.alternate)&&cx(e,t)}function gM(){return null}var Nk=typeof reportError=="function"?reportError:function(e){console.error(e)};function Og(e){this._internalRoot=e}zd.prototype.render=Og.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ee(409));Fd(e,t,null,null)};zd.prototype.unmount=Og.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ni(function(){Fd(null,e,null,null)}),t[Or]=null}};function zd(e){this._internalRoot=e}zd.prototype.unstable_scheduleHydration=function(e){if(e){var t=sS();e={blockedOn:null,target:e,priority:t};for(var n=0;n<as.length&&t!==0&&t<as[n].priority;n++);as.splice(n,0,e),n===0&&oS(e)}};function Ig(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Bd(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ux(){}function vM(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var d=Gu(o);i.call(d)}}var o=Ek(t,r,e,0,null,!1,!1,"",ux);return e._reactRootContainer=o,e[Or]=o.current,dl(e.nodeType===8?e.parentNode:e),Ni(),o}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var d=Gu(c);l.call(d)}}var c=Rg(e,0,!1,null,null,!1,!1,"",ux);return e._reactRootContainer=c,e[Or]=c.current,dl(e.nodeType===8?e.parentNode:e),Ni(function(){Fd(t,c,n,r)}),c}function Vd(e,t,n,r,s){var i=n._reactRootContainer;if(i){var o=i;if(typeof s=="function"){var l=s;s=function(){var c=Gu(o);l.call(c)}}Fd(t,o,e,s)}else o=vM(n,t,e,s,r);return Gu(o)}nS=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ra(t.pendingLanes);n!==0&&(eg(t,n|1),Zt(t,it()),!(Re&6)&&(Vo=it()+500,$s()))}break;case 13:Ni(function(){var r=Ir(e,1);if(r!==null){var s=zt();Un(r,e,1,s)}}),Ag(e,1)}};tg=function(e){if(e.tag===13){var t=Ir(e,134217728);if(t!==null){var n=zt();Un(t,e,134217728,n)}Ag(e,134217728)}};rS=function(e){if(e.tag===13){var t=Ls(e),n=Ir(e,t);if(n!==null){var r=zt();Un(n,e,t,r)}Ag(e,t)}};sS=function(){return ze};iS=function(e,t){var n=ze;try{return ze=e,t()}finally{ze=n}};tp=function(e,t,n){switch(t){case"input":if(qh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Md(r);if(!s)throw Error(ee(90));D1(r),qh(r,s)}}}break;case"textarea":F1(e,n);break;case"select":t=n.value,t!=null&&go(e,!!n.multiple,t,!1)}};W1=Lg;K1=Ni;var xM={usingClientEntryPoint:!1,Events:[Hl,so,Md,U1,H1,Lg]},xa={findFiberByHostInstance:oi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},yM={bundleType:xa.bundleType,version:xa.version,rendererPackageName:xa.rendererPackageName,rendererConfig:xa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Br.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Z1(e),e===null?null:e.stateNode},findFiberByHostInstance:xa.findFiberByHostInstance||gM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tc.isDisabled&&Tc.supportsFiber)try{Nd=Tc.inject(yM),ur=Tc}catch{}}fn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xM;fn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ig(t))throw Error(ee(200));return mM(e,t,null,n)};fn.createRoot=function(e,t){if(!Ig(e))throw Error(ee(299));var n=!1,r="",s=Nk;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=Rg(e,1,!1,null,null,n,!1,r,s),e[Or]=t.current,dl(e.nodeType===8?e.parentNode:e),new Og(t)};fn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ee(188)):(e=Object.keys(e).join(","),Error(ee(268,e)));return e=Z1(t),e=e===null?null:e.stateNode,e};fn.flushSync=function(e){return Ni(e)};fn.hydrate=function(e,t,n){if(!Bd(t))throw Error(ee(200));return Vd(null,e,t,!0,n)};fn.hydrateRoot=function(e,t,n){if(!Ig(e))throw Error(ee(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",o=Nk;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ek(t,null,e,1,n??null,s,!1,i,o),e[Or]=t.current,dl(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new zd(t)};fn.render=function(e,t,n){if(!Bd(t))throw Error(ee(200));return Vd(null,e,t,!1,n)};fn.unmountComponentAtNode=function(e){if(!Bd(e))throw Error(ee(40));return e._reactRootContainer?(Ni(function(){Vd(null,null,e,!1,function(){e._reactRootContainer=null,e[Or]=null})}),!0):!1};fn.unstable_batchedUpdates=Lg;fn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Bd(n))throw Error(ee(200));if(e==null||e._reactInternals===void 0)throw Error(ee(38));return Vd(e,t,n,!1,r)};fn.version="18.3.1-next-f1338f8080-20240426";function Lk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Lk)}catch(e){console.error(e)}}Lk(),L1.exports=fn;var pn=L1.exports;const Pk=g1(pn);var Tk,dx=pn;Tk=dx.createRoot,dx.hydrateRoot;const bM=1,wM=1e6;let Xf=0;function SM(){return Xf=(Xf+1)%Number.MAX_SAFE_INTEGER,Xf.toString()}const Qf=new Map,fx=e=>{if(Qf.has(e))return;const t=setTimeout(()=>{Qf.delete(e),Ya({type:"REMOVE_TOAST",toastId:e})},wM);Qf.set(e,t)},kM=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,bM)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?fx(n):e.toasts.forEach(r=>{fx(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},lu=[];let cu={toasts:[]};function Ya(e){cu=kM(cu,e),lu.forEach(t=>{t(cu)})}function oe({...e}){const t=SM(),n=s=>Ya({type:"UPDATE_TOAST",toast:{...s,id:t}}),r=()=>Ya({type:"DISMISS_TOAST",toastId:t});return Ya({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:s=>{s||r()}}}),{id:t,dismiss:r,update:n}}function CM(){const[e,t]=u.useState(cu);return u.useEffect(()=>(lu.push(t),()=>{const n=lu.indexOf(t);n>-1&&lu.splice(n,1)}),[e]),{...e,toast:oe,dismiss:n=>Ya({type:"DISMISS_TOAST",toastId:n})}}function ye(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function hx(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function Dg(...e){return t=>{let n=!1;const r=e.map(s=>{const i=hx(s,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let s=0;s<r.length;s++){const i=r[s];typeof i=="function"?i():hx(e[s],null)}}}}function Be(...e){return u.useCallback(Dg(...e),e)}function jM(e,t){const n=u.createContext(t),r=i=>{const{children:o,...l}=i,c=u.useMemo(()=>l,Object.values(l));return a.jsx(n.Provider,{value:c,children:o})};r.displayName=e+"Provider";function s(i){const o=u.useContext(n);if(o)return o;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,s]}function Vr(e,t=[]){let n=[];function r(i,o){const l=u.createContext(o),c=n.length;n=[...n,o];const d=h=>{var b;const{scope:p,children:m,...g}=h,v=((b=p==null?void 0:p[e])==null?void 0:b[c])||l,x=u.useMemo(()=>g,Object.values(g));return a.jsx(v.Provider,{value:x,children:m})};d.displayName=i+"Provider";function f(h,p){var v;const m=((v=p==null?void 0:p[e])==null?void 0:v[c])||l,g=u.useContext(m);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[d,f]}const s=()=>{const i=n.map(o=>u.createContext(o));return function(l){const c=(l==null?void 0:l[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return s.scopeName=e,[r,EM(s,...t)]}function EM(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const o=r.reduce((l,{useScope:c,scopeName:d})=>{const h=c(i)[`__scope${d}`];return{...l,...h}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}function bl(e){const t=NM(e),n=u.forwardRef((r,s)=>{const{children:i,...o}=r,l=u.Children.toArray(i),c=l.find(PM);if(c){const d=c.props.children,f=l.map(h=>h===c?u.Children.count(d)>1?u.Children.only(null):u.isValidElement(d)?d.props.children:null:h);return a.jsx(t,{...o,ref:s,children:u.isValidElement(d)?u.cloneElement(d,void 0,f):null})}return a.jsx(t,{...o,ref:s,children:i})});return n.displayName=`${e}.Slot`,n}function NM(e){const t=u.forwardRef((n,r)=>{const{children:s,...i}=n;if(u.isValidElement(s)){const o=MM(s),l=TM(i,s.props);return s.type!==u.Fragment&&(l.ref=r?Dg(r,o):o),u.cloneElement(s,l)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var Mk=Symbol("radix.slottable");function LM(e){const t=({children:n})=>a.jsx(a.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=Mk,t}function PM(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===Mk}function TM(e,t){const n={...t};for(const r in t){const s=e[r],i=t[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...l)=>{const c=i(...l);return s(...l),c}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}function MM(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function _g(e){const t=e+"CollectionProvider",[n,r]=Vr(t),[s,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),o=v=>{const{scope:x,children:b}=v,y=re.useRef(null),w=re.useRef(new Map).current;return a.jsx(s,{scope:x,itemMap:w,collectionRef:y,children:b})};o.displayName=t;const l=e+"CollectionSlot",c=bl(l),d=re.forwardRef((v,x)=>{const{scope:b,children:y}=v,w=i(l,b),S=Be(x,w.collectionRef);return a.jsx(c,{ref:S,children:y})});d.displayName=l;const f=e+"CollectionItemSlot",h="data-radix-collection-item",p=bl(f),m=re.forwardRef((v,x)=>{const{scope:b,children:y,...w}=v,S=re.useRef(null),k=Be(x,S),C=i(f,b);return re.useEffect(()=>(C.itemMap.set(S,{ref:S,...w}),()=>void C.itemMap.delete(S))),a.jsx(p,{[h]:"",ref:k,children:y})});m.displayName=f;function g(v){const x=i(e+"CollectionConsumer",v);return re.useCallback(()=>{const y=x.collectionRef.current;if(!y)return[];const w=Array.from(y.querySelectorAll(`[${h}]`));return Array.from(x.itemMap.values()).sort((C,j)=>w.indexOf(C.ref.current)-w.indexOf(j.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:o,Slot:d,ItemSlot:m},g,r]}var RM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],Ce=RM.reduce((e,t)=>{const n=bl(`Primitive.${t}`),r=u.forwardRef((s,i)=>{const{asChild:o,...l}=s,c=o?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function Rk(e,t){e&&pn.flushSync(()=>e.dispatchEvent(t))}function Ln(e){const t=u.useRef(e);return u.useEffect(()=>{t.current=e}),u.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function AM(e,t=globalThis==null?void 0:globalThis.document){const n=Ln(e);u.useEffect(()=>{const r=s=>{s.key==="Escape"&&n(s)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var OM="DismissableLayer",Op="dismissableLayer.update",IM="dismissableLayer.pointerDownOutside",DM="dismissableLayer.focusOutside",px,Ak=u.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Kl=u.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:o,onDismiss:l,...c}=e,d=u.useContext(Ak),[f,h]=u.useState(null),p=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=u.useState({}),g=Be(t,j=>h(j)),v=Array.from(d.layers),[x]=[...d.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(x),y=f?v.indexOf(f):-1,w=d.layersWithOutsidePointerEventsDisabled.size>0,S=y>=b,k=FM(j=>{const E=j.target,L=[...d.branches].some(N=>N.contains(E));!S||L||(s==null||s(j),o==null||o(j),j.defaultPrevented||l==null||l())},p),C=zM(j=>{const E=j.target;[...d.branches].some(N=>N.contains(E))||(i==null||i(j),o==null||o(j),j.defaultPrevented||l==null||l())},p);return AM(j=>{y===d.layers.size-1&&(r==null||r(j),!j.defaultPrevented&&l&&(j.preventDefault(),l()))},p),u.useEffect(()=>{if(f)return n&&(d.layersWithOutsidePointerEventsDisabled.size===0&&(px=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),d.layersWithOutsidePointerEventsDisabled.add(f)),d.layers.add(f),mx(),()=>{n&&d.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=px)}},[f,p,n,d]),u.useEffect(()=>()=>{f&&(d.layers.delete(f),d.layersWithOutsidePointerEventsDisabled.delete(f),mx())},[f,d]),u.useEffect(()=>{const j=()=>m({});return document.addEventListener(Op,j),()=>document.removeEventListener(Op,j)},[]),a.jsx(Ce.div,{...c,ref:g,style:{pointerEvents:w?S?"auto":"none":void 0,...e.style},onFocusCapture:ye(e.onFocusCapture,C.onFocusCapture),onBlurCapture:ye(e.onBlurCapture,C.onBlurCapture),onPointerDownCapture:ye(e.onPointerDownCapture,k.onPointerDownCapture)})});Kl.displayName=OM;var _M="DismissableLayerBranch",Ok=u.forwardRef((e,t)=>{const n=u.useContext(Ak),r=u.useRef(null),s=Be(t,r);return u.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),a.jsx(Ce.div,{...e,ref:s})});Ok.displayName=_M;function FM(e,t=globalThis==null?void 0:globalThis.document){const n=Ln(e),r=u.useRef(!1),s=u.useRef(()=>{});return u.useEffect(()=>{const i=l=>{if(l.target&&!r.current){let c=function(){Ik(IM,n,d,{discrete:!0})};const d={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=c,t.addEventListener("click",s.current,{once:!0})):c()}else t.removeEventListener("click",s.current);r.current=!1},o=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(o),t.removeEventListener("pointerdown",i),t.removeEventListener("click",s.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function zM(e,t=globalThis==null?void 0:globalThis.document){const n=Ln(e),r=u.useRef(!1);return u.useEffect(()=>{const s=i=>{i.target&&!r.current&&Ik(DM,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function mx(){const e=new CustomEvent(Op);document.dispatchEvent(e)}function Ik(e,t,n,{discrete:r}){const s=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?Rk(s,i):s.dispatchEvent(i)}var BM=Kl,VM=Ok,Nt=globalThis!=null&&globalThis.document?u.useLayoutEffect:()=>{},$M="Portal",$d=u.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[s,i]=u.useState(!1);Nt(()=>i(!0),[]);const o=n||s&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return o?Pk.createPortal(a.jsx(Ce.div,{...r,ref:t}),o):null});$d.displayName=$M;function UM(e,t){return u.useReducer((n,r)=>t[n][r]??n,e)}var Di=e=>{const{present:t,children:n}=e,r=HM(t),s=typeof n=="function"?n({present:r.isPresent}):u.Children.only(n),i=Be(r.ref,WM(s));return typeof n=="function"||r.isPresent?u.cloneElement(s,{ref:i}):null};Di.displayName="Presence";function HM(e){const[t,n]=u.useState(),r=u.useRef(null),s=u.useRef(e),i=u.useRef("none"),o=e?"mounted":"unmounted",[l,c]=UM(o,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return u.useEffect(()=>{const d=Mc(r.current);i.current=l==="mounted"?d:"none"},[l]),Nt(()=>{const d=r.current,f=s.current;if(f!==e){const p=i.current,m=Mc(d);e?c("MOUNT"):m==="none"||(d==null?void 0:d.display)==="none"?c("UNMOUNT"):c(f&&p!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,c]),Nt(()=>{if(t){let d;const f=t.ownerDocument.defaultView??window,h=m=>{const v=Mc(r.current).includes(CSS.escape(m.animationName));if(m.target===t&&v&&(c("ANIMATION_END"),!s.current)){const x=t.style.animationFillMode;t.style.animationFillMode="forwards",d=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=x)})}},p=m=>{m.target===t&&(i.current=Mc(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{f.clearTimeout(d),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:u.useCallback(d=>{r.current=d?getComputedStyle(d):null,n(d)},[])}}function Mc(e){return(e==null?void 0:e.animationName)||"none"}function WM(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var KM=Ed[" useInsertionEffect ".trim().toString()]||Nt;function Li({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[s,i,o]=GM({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:s;{const f=u.useRef(e!==void 0);u.useEffect(()=>{const h=f.current;h!==l&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=l},[l,r])}const d=u.useCallback(f=>{var h;if(l){const p=qM(f)?f(e):f;p!==e&&((h=o.current)==null||h.call(o,p))}else i(f)},[l,e,i,o]);return[c,d]}function GM({defaultProp:e,onChange:t}){const[n,r]=u.useState(e),s=u.useRef(n),i=u.useRef(t);return KM(()=>{i.current=t},[t]),u.useEffect(()=>{var o;s.current!==n&&((o=i.current)==null||o.call(i,n),s.current=n)},[n,s]),[n,r,i]}function qM(e){return typeof e=="function"}var Dk=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),ZM="VisuallyHidden",Ud=u.forwardRef((e,t)=>a.jsx(Ce.span,{...e,ref:t,style:{...Dk,...e.style}}));Ud.displayName=ZM;var YM=Ud,Fg="ToastProvider",[zg,XM,QM]=_g("Toast"),[_k]=Vr("Toast",[QM]),[JM,Hd]=_k(Fg),Fk=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:s="right",swipeThreshold:i=50,children:o}=e,[l,c]=u.useState(null),[d,f]=u.useState(0),h=u.useRef(!1),p=u.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Fg}\`. Expected non-empty \`string\`.`),a.jsx(zg.Provider,{scope:t,children:a.jsx(JM,{scope:t,label:n,duration:r,swipeDirection:s,swipeThreshold:i,toastCount:d,viewport:l,onViewportChange:c,onToastAdd:u.useCallback(()=>f(m=>m+1),[]),onToastRemove:u.useCallback(()=>f(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:o})})};Fk.displayName=Fg;var zk="ToastViewport",eR=["F8"],Ip="toast.viewportPause",Dp="toast.viewportResume",Bk=u.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=eR,label:s="Notifications ({hotkey})",...i}=e,o=Hd(zk,n),l=XM(n),c=u.useRef(null),d=u.useRef(null),f=u.useRef(null),h=u.useRef(null),p=Be(t,h,o.onViewportChange),m=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=o.toastCount>0;u.useEffect(()=>{const x=b=>{var w;r.length!==0&&r.every(S=>b[S]||b.code===S)&&((w=h.current)==null||w.focus())};return document.addEventListener("keydown",x),()=>document.removeEventListener("keydown",x)},[r]),u.useEffect(()=>{const x=c.current,b=h.current;if(g&&x&&b){const y=()=>{if(!o.isClosePausedRef.current){const C=new CustomEvent(Ip);b.dispatchEvent(C),o.isClosePausedRef.current=!0}},w=()=>{if(o.isClosePausedRef.current){const C=new CustomEvent(Dp);b.dispatchEvent(C),o.isClosePausedRef.current=!1}},S=C=>{!x.contains(C.relatedTarget)&&w()},k=()=>{x.contains(document.activeElement)||w()};return x.addEventListener("focusin",y),x.addEventListener("focusout",S),x.addEventListener("pointermove",y),x.addEventListener("pointerleave",k),window.addEventListener("blur",y),window.addEventListener("focus",w),()=>{x.removeEventListener("focusin",y),x.removeEventListener("focusout",S),x.removeEventListener("pointermove",y),x.removeEventListener("pointerleave",k),window.removeEventListener("blur",y),window.removeEventListener("focus",w)}}},[g,o.isClosePausedRef]);const v=u.useCallback(({tabbingDirection:x})=>{const y=l().map(w=>{const S=w.ref.current,k=[S,...hR(S)];return x==="forwards"?k:k.reverse()});return(x==="forwards"?y.reverse():y).flat()},[l]);return u.useEffect(()=>{const x=h.current;if(x){const b=y=>{var k,C,j;const w=y.altKey||y.ctrlKey||y.metaKey;if(y.key==="Tab"&&!w){const E=document.activeElement,L=y.shiftKey;if(y.target===x&&L){(k=d.current)==null||k.focus();return}const D=v({tabbingDirection:L?"backwards":"forwards"}),F=D.findIndex(_=>_===E);Jf(D.slice(F+1))?y.preventDefault():L?(C=d.current)==null||C.focus():(j=f.current)==null||j.focus()}};return x.addEventListener("keydown",b),()=>x.removeEventListener("keydown",b)}},[l,v]),a.jsxs(VM,{ref:c,role:"region","aria-label":s.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&a.jsx(_p,{ref:d,onFocusFromOutsideViewport:()=>{const x=v({tabbingDirection:"forwards"});Jf(x)}}),a.jsx(zg.Slot,{scope:n,children:a.jsx(Ce.ol,{tabIndex:-1,...i,ref:p})}),g&&a.jsx(_p,{ref:f,onFocusFromOutsideViewport:()=>{const x=v({tabbingDirection:"backwards"});Jf(x)}})]})});Bk.displayName=zk;var Vk="ToastFocusProxy",_p=u.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...s}=e,i=Hd(Vk,n);return a.jsx(Ud,{tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:o=>{var d;const l=o.relatedTarget;!((d=i.viewport)!=null&&d.contains(l))&&r()}})});_p.displayName=Vk;var Gl="Toast",tR="toast.swipeStart",nR="toast.swipeMove",rR="toast.swipeCancel",sR="toast.swipeEnd",$k=u.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:s,onOpenChange:i,...o}=e,[l,c]=Li({prop:r,defaultProp:s??!0,onChange:i,caller:Gl});return a.jsx(Di,{present:n||l,children:a.jsx(aR,{open:l,...o,ref:t,onClose:()=>c(!1),onPause:Ln(e.onPause),onResume:Ln(e.onResume),onSwipeStart:ye(e.onSwipeStart,d=>{d.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ye(e.onSwipeMove,d=>{const{x:f,y:h}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","move"),d.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:ye(e.onSwipeCancel,d=>{d.currentTarget.setAttribute("data-swipe","cancel"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ye(e.onSwipeEnd,d=>{const{x:f,y:h}=d.detail.delta;d.currentTarget.setAttribute("data-swipe","end"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),d.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),d.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),d.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),c(!1)})})})});$k.displayName=Gl;var[iR,oR]=_k(Gl,{onClose(){}}),aR=u.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:s,open:i,onClose:o,onEscapeKeyDown:l,onPause:c,onResume:d,onSwipeStart:f,onSwipeMove:h,onSwipeCancel:p,onSwipeEnd:m,...g}=e,v=Hd(Gl,n),[x,b]=u.useState(null),y=Be(t,_=>b(_)),w=u.useRef(null),S=u.useRef(null),k=s||v.duration,C=u.useRef(0),j=u.useRef(k),E=u.useRef(0),{onToastAdd:L,onToastRemove:N}=v,R=Ln(()=>{var z;(x==null?void 0:x.contains(document.activeElement))&&((z=v.viewport)==null||z.focus()),o()}),D=u.useCallback(_=>{!_||_===1/0||(window.clearTimeout(E.current),C.current=new Date().getTime(),E.current=window.setTimeout(R,_))},[R]);u.useEffect(()=>{const _=v.viewport;if(_){const z=()=>{D(j.current),d==null||d()},A=()=>{const G=new Date().getTime()-C.current;j.current=j.current-G,window.clearTimeout(E.current),c==null||c()};return _.addEventListener(Ip,A),_.addEventListener(Dp,z),()=>{_.removeEventListener(Ip,A),_.removeEventListener(Dp,z)}}},[v.viewport,k,c,d,D]),u.useEffect(()=>{i&&!v.isClosePausedRef.current&&D(k)},[i,k,v.isClosePausedRef,D]),u.useEffect(()=>(L(),()=>N()),[L,N]);const F=u.useMemo(()=>x?Zk(x):null,[x]);return v.viewport?a.jsxs(a.Fragment,{children:[F&&a.jsx(lR,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite",children:F}),a.jsx(iR,{scope:n,onClose:R,children:pn.createPortal(a.jsx(zg.ItemSlot,{scope:n,children:a.jsx(BM,{asChild:!0,onEscapeKeyDown:ye(l,()=>{v.isFocusedToastEscapeKeyDownRef.current||R(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:a.jsx(Ce.li,{tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":v.swipeDirection,...g,ref:y,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ye(e.onKeyDown,_=>{_.key==="Escape"&&(l==null||l(_.nativeEvent),_.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,R()))}),onPointerDown:ye(e.onPointerDown,_=>{_.button===0&&(w.current={x:_.clientX,y:_.clientY})}),onPointerMove:ye(e.onPointerMove,_=>{if(!w.current)return;const z=_.clientX-w.current.x,A=_.clientY-w.current.y,G=!!S.current,T=["left","right"].includes(v.swipeDirection),O=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,I=T?O(0,z):0,V=T?0:O(0,A),Z=_.pointerType==="touch"?10:2,K={x:I,y:V},P={originalEvent:_,delta:K};G?(S.current=K,Rc(nR,h,P,{discrete:!1})):gx(K,v.swipeDirection,Z)?(S.current=K,Rc(tR,f,P,{discrete:!1}),_.target.setPointerCapture(_.pointerId)):(Math.abs(z)>Z||Math.abs(A)>Z)&&(w.current=null)}),onPointerUp:ye(e.onPointerUp,_=>{const z=S.current,A=_.target;if(A.hasPointerCapture(_.pointerId)&&A.releasePointerCapture(_.pointerId),S.current=null,w.current=null,z){const G=_.currentTarget,T={originalEvent:_,delta:z};gx(z,v.swipeDirection,v.swipeThreshold)?Rc(sR,m,T,{discrete:!0}):Rc(rR,p,T,{discrete:!0}),G.addEventListener("click",O=>O.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),lR=e=>{const{__scopeToast:t,children:n,...r}=e,s=Hd(Gl,t),[i,o]=u.useState(!1),[l,c]=u.useState(!1);return dR(()=>o(!0)),u.useEffect(()=>{const d=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(d)},[]),l?null:a.jsx($d,{asChild:!0,children:a.jsx(Ud,{...r,children:i&&a.jsxs(a.Fragment,{children:[s.label," ",n]})})})},cR="ToastTitle",Uk=u.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Ce.div,{...r,ref:t})});Uk.displayName=cR;var uR="ToastDescription",Hk=u.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return a.jsx(Ce.div,{...r,ref:t})});Hk.displayName=uR;var Wk="ToastAction",Kk=u.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?a.jsx(qk,{altText:n,asChild:!0,children:a.jsx(Bg,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Wk}\`. Expected non-empty \`string\`.`),null)});Kk.displayName=Wk;var Gk="ToastClose",Bg=u.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,s=oR(Gk,n);return a.jsx(qk,{asChild:!0,children:a.jsx(Ce.button,{type:"button",...r,ref:t,onClick:ye(e.onClick,s.onClose)})})});Bg.displayName=Gk;var qk=u.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...s}=e;return a.jsx(Ce.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...s,ref:t})});function Zk(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),fR(r)){const s=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const o=r.dataset.radixToastAnnounceAlt;o&&t.push(o)}else t.push(...Zk(r))}}),t}function Rc(e,t,n,{discrete:r}){const s=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?Rk(s,i):s.dispatchEvent(i)}var gx=(e,t,n=0)=>{const r=Math.abs(e.x),s=Math.abs(e.y),i=r>s;return t==="left"||t==="right"?i&&r>n:!i&&s>n};function dR(e=()=>{}){const t=Ln(e);Nt(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function fR(e){return e.nodeType===e.ELEMENT_NODE}function hR(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Jf(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var pR=Fk,Yk=Bk,Xk=$k,Qk=Uk,Jk=Hk,eC=Kk,tC=Bg;function nC(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=nC(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function rC(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=nC(e))&&(r&&(r+=" "),r+=t);return r}const vx=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,xx=rC,Vg=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return xx(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=t,o=Object.keys(s).map(d=>{const f=n==null?void 0:n[d],h=i==null?void 0:i[d];if(f===null)return null;const p=vx(f)||vx(h);return s[d][p]}),l=n&&Object.entries(n).reduce((d,f)=>{let[h,p]=f;return p===void 0||(d[h]=p),d},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((d,f)=>{let{class:h,className:p,...m}=f;return Object.entries(m).every(g=>{let[v,x]=g;return Array.isArray(x)?x.includes({...i,...l}[v]):{...i,...l}[v]===x})?[...d,h,p]:d},[]);return xx(e,o,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sC=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=u.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:o,...l},c)=>u.createElement("svg",{ref:c,...gR,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:sC("lucide",s),...l},[...o.map(([d,f])=>u.createElement(d,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=(e,t)=>{const n=u.forwardRef(({className:r,...s},i)=>u.createElement(vR,{ref:i,iconNode:t,className:sC(`lucide-${mR(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=fe("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iC=fe("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=fe("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=fe("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=fe("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=fe("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=fe("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=fe("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=fe("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oC=fe("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=fe("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=fe("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=fe("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aC=fe("CircleArrowDown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=fe("CircleArrowUp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=fe("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=fe("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=fe("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=fe("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=fe("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=fe("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=fe("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=fe("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=fe("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=fe("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=fe("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=fe("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=fe("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=fe("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=fe("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=fe("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=fe("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=fe("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RR=fe("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AR=fe("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=fe("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=fe("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OR=fe("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=fe("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IR=fe("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DR=fe("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=fe("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lC=fe("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ug=fe("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hg=fe("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=fe("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _R=fe("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FR=fe("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=fe("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zR=fe("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BR=fe("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VR=fe("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=fe("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cC=fe("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $R=fe("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=fe("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=fe("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=fe("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=fe("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Wg="-",UR=e=>{const t=WR(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:o=>{const l=o.split(Wg);return l[0]===""&&l.length!==1&&l.shift(),uC(l,t)||HR(o)},getConflictingClassGroupIds:(o,l)=>{const c=n[o]||[];return l&&r[o]?[...c,...r[o]]:c}}},uC=(e,t)=>{var o;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),s=r?uC(e.slice(1),r):void 0;if(s)return s;if(t.validators.length===0)return;const i=e.join(Wg);return(o=t.validators.find(({validator:l})=>l(i)))==null?void 0:o.classGroupId},bx=/^\[(.+)\]$/,HR=e=>{if(bx.test(e)){const t=bx.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},WR=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return GR(Object.entries(e.classGroups),n).forEach(([i,o])=>{Bp(o,r,i,t)}),r},Bp=(e,t,n,r)=>{e.forEach(s=>{if(typeof s=="string"){const i=s===""?t:wx(t,s);i.classGroupId=n;return}if(typeof s=="function"){if(KR(s)){Bp(s(r),t,n,r);return}t.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,o])=>{Bp(o,wx(t,i),n,r)})})},wx=(e,t)=>{let n=e;return t.split(Wg).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},KR=e=>e.isThemeGetter,GR=(e,t)=>t?e.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([o,l])=>[t+o,l])):i);return[n,s]}):e,qR=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const s=(i,o)=>{n.set(i,o),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let o=n.get(i);if(o!==void 0)return o;if((o=r.get(i))!==void 0)return s(i,o),o},set(i,o){n.has(i)?n.set(i,o):s(i,o)}}},dC="!",ZR=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,s=t[0],i=t.length,o=l=>{const c=[];let d=0,f=0,h;for(let x=0;x<l.length;x++){let b=l[x];if(d===0){if(b===s&&(r||l.slice(x,x+i)===t)){c.push(l.slice(f,x)),f=x+i;continue}if(b==="/"){h=x;continue}}b==="["?d++:b==="]"&&d--}const p=c.length===0?l:l.substring(f),m=p.startsWith(dC),g=m?p.substring(1):p,v=h&&h>f?h-f:void 0;return{modifiers:c,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:v}};return n?l=>n({className:l,parseClassName:o}):o},YR=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},XR=e=>({cache:qR(e.cacheSize),parseClassName:ZR(e),...UR(e)}),QR=/\s+/,JR=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=t,i=[],o=e.trim().split(QR);let l="";for(let c=o.length-1;c>=0;c-=1){const d=o[c],{modifiers:f,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:m}=n(d);let g=!!m,v=r(g?p.substring(0,m):p);if(!v){if(!g){l=d+(l.length>0?" "+l:l);continue}if(v=r(p),!v){l=d+(l.length>0?" "+l:l);continue}g=!1}const x=YR(f).join(":"),b=h?x+dC:x,y=b+v;if(i.includes(y))continue;i.push(y);const w=s(v,g);for(let S=0;S<w.length;++S){const k=w[S];i.push(b+k)}l=d+(l.length>0?" "+l:l)}return l};function e5(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=fC(t))&&(r&&(r+=" "),r+=n);return r}const fC=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=fC(e[r]))&&(n&&(n+=" "),n+=t);return n};function t5(e,...t){let n,r,s,i=o;function o(c){const d=t.reduce((f,h)=>h(f),e());return n=XR(d),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const d=r(c);if(d)return d;const f=JR(c,n);return s(c,f),f}return function(){return i(e5.apply(null,arguments))}}const Ke=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},hC=/^\[(?:([a-z-]+):)?(.+)\]$/i,n5=/^\d+\/\d+$/,r5=new Set(["px","full","screen"]),s5=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,i5=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,o5=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,a5=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,l5=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Cr=e=>So(e)||r5.has(e)||n5.test(e),Xr=e=>Jo(e,"length",g5),So=e=>!!e&&!Number.isNaN(Number(e)),eh=e=>Jo(e,"number",So),ya=e=>!!e&&Number.isInteger(Number(e)),c5=e=>e.endsWith("%")&&So(e.slice(0,-1)),ke=e=>hC.test(e),Qr=e=>s5.test(e),u5=new Set(["length","size","percentage"]),d5=e=>Jo(e,u5,pC),f5=e=>Jo(e,"position",pC),h5=new Set(["image","url"]),p5=e=>Jo(e,h5,x5),m5=e=>Jo(e,"",v5),ba=()=>!0,Jo=(e,t,n)=>{const r=hC.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},g5=e=>i5.test(e)&&!o5.test(e),pC=()=>!1,v5=e=>a5.test(e),x5=e=>l5.test(e),y5=()=>{const e=Ke("colors"),t=Ke("spacing"),n=Ke("blur"),r=Ke("brightness"),s=Ke("borderColor"),i=Ke("borderRadius"),o=Ke("borderSpacing"),l=Ke("borderWidth"),c=Ke("contrast"),d=Ke("grayscale"),f=Ke("hueRotate"),h=Ke("invert"),p=Ke("gap"),m=Ke("gradientColorStops"),g=Ke("gradientColorStopPositions"),v=Ke("inset"),x=Ke("margin"),b=Ke("opacity"),y=Ke("padding"),w=Ke("saturate"),S=Ke("scale"),k=Ke("sepia"),C=Ke("skew"),j=Ke("space"),E=Ke("translate"),L=()=>["auto","contain","none"],N=()=>["auto","hidden","clip","visible","scroll"],R=()=>["auto",ke,t],D=()=>[ke,t],F=()=>["",Cr,Xr],_=()=>["auto",So,ke],z=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],G=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],T=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",ke],I=()=>["auto","avoid","all","avoid-page","page","left","right","column"],V=()=>[So,ke];return{cacheSize:500,separator:":",theme:{colors:[ba],spacing:[Cr,Xr],blur:["none","",Qr,ke],brightness:V(),borderColor:[e],borderRadius:["none","","full",Qr,ke],borderSpacing:D(),borderWidth:F(),contrast:V(),grayscale:O(),hueRotate:V(),invert:O(),gap:D(),gradientColorStops:[e],gradientColorStopPositions:[c5,Xr],inset:R(),margin:R(),opacity:V(),padding:D(),saturate:V(),scale:V(),sepia:O(),skew:V(),space:D(),translate:D()},classGroups:{aspect:[{aspect:["auto","square","video",ke]}],container:["container"],columns:[{columns:[Qr]}],"break-after":[{"break-after":I()}],"break-before":[{"break-before":I()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...z(),ke]}],overflow:[{overflow:N()}],"overflow-x":[{"overflow-x":N()}],"overflow-y":[{"overflow-y":N()}],overscroll:[{overscroll:L()}],"overscroll-x":[{"overscroll-x":L()}],"overscroll-y":[{"overscroll-y":L()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",ya,ke]}],basis:[{basis:R()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",ke]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",ya,ke]}],"grid-cols":[{"grid-cols":[ba]}],"col-start-end":[{col:["auto",{span:["full",ya,ke]},ke]}],"col-start":[{"col-start":_()}],"col-end":[{"col-end":_()}],"grid-rows":[{"grid-rows":[ba]}],"row-start-end":[{row:["auto",{span:[ya,ke]},ke]}],"row-start":[{"row-start":_()}],"row-end":[{"row-end":_()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",ke]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",ke]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...T()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...T(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...T(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[y]}],px:[{px:[y]}],py:[{py:[y]}],ps:[{ps:[y]}],pe:[{pe:[y]}],pt:[{pt:[y]}],pr:[{pr:[y]}],pb:[{pb:[y]}],pl:[{pl:[y]}],m:[{m:[x]}],mx:[{mx:[x]}],my:[{my:[x]}],ms:[{ms:[x]}],me:[{me:[x]}],mt:[{mt:[x]}],mr:[{mr:[x]}],mb:[{mb:[x]}],ml:[{ml:[x]}],"space-x":[{"space-x":[j]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[j]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",ke,t]}],"min-w":[{"min-w":[ke,t,"min","max","fit"]}],"max-w":[{"max-w":[ke,t,"none","full","min","max","fit","prose",{screen:[Qr]},Qr]}],h:[{h:[ke,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[ke,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[ke,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[ke,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Qr,Xr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",eh]}],"font-family":[{font:[ba]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",ke]}],"line-clamp":[{"line-clamp":["none",So,eh]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Cr,ke]}],"list-image":[{"list-image":["none",ke]}],"list-style-type":[{list:["none","disc","decimal",ke]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Cr,Xr]}],"underline-offset":[{"underline-offset":["auto",Cr,ke]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:D()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",ke]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",ke]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...z(),f5]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",d5]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},p5]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:A()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[Cr,ke]}],"outline-w":[{outline:[Cr,Xr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:F()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[Cr,Xr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Qr,m5]}],"shadow-color":[{shadow:[ba]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":[...G(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":G()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Qr,ke]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",ke]}],duration:[{duration:V()}],ease:[{ease:["linear","in","out","in-out",ke]}],delay:[{delay:V()}],animate:[{animate:["none","spin","ping","pulse","bounce",ke]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[ya,ke]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[C]}],"skew-y":[{"skew-y":[C]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",ke]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",ke]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":D()}],"scroll-mx":[{"scroll-mx":D()}],"scroll-my":[{"scroll-my":D()}],"scroll-ms":[{"scroll-ms":D()}],"scroll-me":[{"scroll-me":D()}],"scroll-mt":[{"scroll-mt":D()}],"scroll-mr":[{"scroll-mr":D()}],"scroll-mb":[{"scroll-mb":D()}],"scroll-ml":[{"scroll-ml":D()}],"scroll-p":[{"scroll-p":D()}],"scroll-px":[{"scroll-px":D()}],"scroll-py":[{"scroll-py":D()}],"scroll-ps":[{"scroll-ps":D()}],"scroll-pe":[{"scroll-pe":D()}],"scroll-pt":[{"scroll-pt":D()}],"scroll-pr":[{"scroll-pr":D()}],"scroll-pb":[{"scroll-pb":D()}],"scroll-pl":[{"scroll-pl":D()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",ke]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Cr,Xr,eh]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},b5=t5(y5);function he(...e){return b5(rC(e))}const w5=pR,mC=u.forwardRef(({className:e,...t},n)=>a.jsx(Yk,{ref:n,className:he("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));mC.displayName=Yk.displayName;const S5=Vg("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),gC=u.forwardRef(({className:e,variant:t,...n},r)=>a.jsx(Xk,{ref:r,className:he(S5({variant:t}),e),...n}));gC.displayName=Xk.displayName;const k5=u.forwardRef(({className:e,...t},n)=>a.jsx(eC,{ref:n,className:he("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));k5.displayName=eC.displayName;const vC=u.forwardRef(({className:e,...t},n)=>a.jsx(tC,{ref:n,className:he("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:a.jsx(Qo,{className:"h-4 w-4"})}));vC.displayName=tC.displayName;const xC=u.forwardRef(({className:e,...t},n)=>a.jsx(Qk,{ref:n,className:he("text-sm font-semibold",e),...t}));xC.displayName=Qk.displayName;const yC=u.forwardRef(({className:e,...t},n)=>a.jsx(Jk,{ref:n,className:he("text-sm opacity-90",e),...t}));yC.displayName=Jk.displayName;function C5(){const{toasts:e}=CM();return a.jsxs(w5,{children:[e.map(function({id:t,title:n,description:r,action:s,...i}){return a.jsxs(gC,{...i,children:[a.jsxs("div",{className:"grid gap-1",children:[n&&a.jsx(xC,{children:n}),r&&a.jsx(yC,{children:r})]}),s,a.jsx(vC,{})]},t)}),a.jsx(mC,{})]})}var Sx=["light","dark"],j5="(prefers-color-scheme: dark)",E5=u.createContext(void 0),N5={setTheme:e=>{},themes:[]},L5=()=>{var e;return(e=u.useContext(E5))!=null?e:N5};u.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:s,defaultTheme:i,value:o,attrs:l,nonce:c})=>{let d=i==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(g=>`'${g}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=s?Sx.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(g,v=!1,x=!0)=>{let b=o?o[g]:g,y=v?g+"|| ''":`'${b}'`,w="";return s&&x&&!v&&Sx.includes(g)&&(w+=`d.style.colorScheme = '${g}';`),n==="class"?v||b?w+=`c.add(${y})`:w+="null":b&&(w+=`d[s](n,${y})`),w},m=e?`!function(){${f}${p(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${j5}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${o?`var x=${JSON.stringify(o)};`:""}${p(o?"x[e]":"e",!0)}}${d?"":"else{"+p(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${o?`var x=${JSON.stringify(o)};`:""}${p(o?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${h}}catch(t){}}();`;return u.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:m}})});var P5=e=>{switch(e){case"success":return R5;case"info":return O5;case"warning":return A5;case"error":return I5;default:return null}},T5=Array(12).fill(0),M5=({visible:e,className:t})=>re.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},re.createElement("div",{className:"sonner-spinner"},T5.map((n,r)=>re.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),R5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),A5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),O5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),I5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),D5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},re.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),_5=()=>{let[e,t]=re.useState(document.hidden);return re.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Vp=1,F5=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,s=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Vp++,i=this.toasts.find(l=>l.id===s),o=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),i?this.toasts=this.toasts.map(l=>l.id===s?(this.publish({...l,...e,id:s,title:n}),{...l,...e,id:s,dismissible:o,title:n}):l):this.addToast({title:n,...r,dismissible:o,id:s}),s},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),s=n!==void 0,i,o=r.then(async c=>{if(i=["resolve",c],re.isValidElement(c))s=!1,this.create({id:n,type:"default",message:c});else if(B5(c)&&!c.ok){s=!1;let d=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,f=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:d,description:f})}else if(t.success!==void 0){s=!1;let d=typeof t.success=="function"?await t.success(c):t.success,f=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:d,description:f})}}).catch(async c=>{if(i=["reject",c],t.error!==void 0){s=!1;let d=typeof t.error=="function"?await t.error(c):t.error,f=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:d,description:f})}}).finally(()=>{var c;s&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),l=()=>new Promise((c,d)=>o.then(()=>i[0]==="reject"?d(i[1]):c(i[1])).catch(d));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Vp++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Ht=new F5,z5=(e,t)=>{let n=(t==null?void 0:t.id)||Vp++;return Ht.addToast({title:e,...t,id:n}),n},B5=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",V5=z5,$5=()=>Ht.toasts,U5=()=>Ht.getActiveToasts(),Fe=Object.assign(V5,{success:Ht.success,info:Ht.info,warning:Ht.warning,error:Ht.error,custom:Ht.custom,message:Ht.message,promise:Ht.promise,dismiss:Ht.dismiss,loading:Ht.loading},{getHistory:$5,getToasts:U5});function H5(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}H5(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function Ac(e){return e.label!==void 0}var W5=3,K5="32px",G5="16px",kx=4e3,q5=356,Z5=14,Y5=20,X5=200;function Rn(...e){return e.filter(Boolean).join(" ")}function Q5(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var J5=e=>{var t,n,r,s,i,o,l,c,d,f,h;let{invert:p,toast:m,unstyled:g,interacting:v,setHeights:x,visibleToasts:b,heights:y,index:w,toasts:S,expanded:k,removeToast:C,defaultRichColors:j,closeButton:E,style:L,cancelButtonStyle:N,actionButtonStyle:R,className:D="",descriptionClassName:F="",duration:_,position:z,gap:A,loadingIcon:G,expandByDefault:T,classNames:O,icons:I,closeButtonAriaLabel:V="Close toast",pauseWhenPageIsHidden:Z}=e,[K,P]=re.useState(null),[M,se]=re.useState(null),[W,te]=re.useState(!1),[de,Q]=re.useState(!1),[ie,me]=re.useState(!1),[J,q]=re.useState(!1),[$,ae]=re.useState(!1),[le,De]=re.useState(0),[Xe,yr]=re.useState(0),mn=re.useRef(m.duration||_||kx),Zs=re.useRef(null),xt=re.useRef(null),Ys=w===0,Y=w+1<=b,ge=m.type,Me=m.dismissible!==!1,Ue=m.className||"",We=m.descriptionClassName||"",Qn=re.useMemo(()=>y.findIndex(we=>we.toastId===m.id)||0,[y,m.id]),br=re.useMemo(()=>{var we;return(we=m.closeButton)!=null?we:E},[m.closeButton,E]),wr=re.useMemo(()=>m.duration||_||kx,[m.duration,_]),qr=re.useRef(0),Sr=re.useRef(0),Xs=re.useRef(0),kr=re.useRef(null),[Bi,uc]=z.split("-"),Qs=re.useMemo(()=>y.reduce((we,Oe,_e)=>_e>=Qn?we:we+Oe.height,0),[y,Qn]),ua=_5(),dc=m.invert||p,Vi=ge==="loading";Sr.current=re.useMemo(()=>Qn*A+Qs,[Qn,Qs]),re.useEffect(()=>{mn.current=wr},[wr]),re.useEffect(()=>{te(!0)},[]),re.useEffect(()=>{let we=xt.current;if(we){let Oe=we.getBoundingClientRect().height;return yr(Oe),x(_e=>[{toastId:m.id,height:Oe,position:m.position},..._e]),()=>x(_e=>_e.filter($t=>$t.toastId!==m.id))}},[x,m.id]),re.useLayoutEffect(()=>{if(!W)return;let we=xt.current,Oe=we.style.height;we.style.height="auto";let _e=we.getBoundingClientRect().height;we.style.height=Oe,yr(_e),x($t=>$t.find(en=>en.toastId===m.id)?$t.map(en=>en.toastId===m.id?{...en,height:_e}:en):[{toastId:m.id,height:_e,position:m.position},...$t])},[W,m.title,m.description,x,m.id]);let Jt=re.useCallback(()=>{Q(!0),De(Sr.current),x(we=>we.filter(Oe=>Oe.toastId!==m.id)),setTimeout(()=>{C(m)},X5)},[m,C,x,Sr]);re.useEffect(()=>{if(m.promise&&ge==="loading"||m.duration===1/0||m.type==="loading")return;let we;return k||v||Z&&ua?(()=>{if(Xs.current<qr.current){let Oe=new Date().getTime()-qr.current;mn.current=mn.current-Oe}Xs.current=new Date().getTime()})():mn.current!==1/0&&(qr.current=new Date().getTime(),we=setTimeout(()=>{var Oe;(Oe=m.onAutoClose)==null||Oe.call(m,m),Jt()},mn.current)),()=>clearTimeout(we)},[k,v,m,ge,Z,ua,Jt]),re.useEffect(()=>{m.delete&&Jt()},[Jt,m.delete]);function fc(){var we,Oe,_e;return I!=null&&I.loading?re.createElement("div",{className:Rn(O==null?void 0:O.loader,(we=m==null?void 0:m.classNames)==null?void 0:we.loader,"sonner-loader"),"data-visible":ge==="loading"},I.loading):G?re.createElement("div",{className:Rn(O==null?void 0:O.loader,(Oe=m==null?void 0:m.classNames)==null?void 0:Oe.loader,"sonner-loader"),"data-visible":ge==="loading"},G):re.createElement(M5,{className:Rn(O==null?void 0:O.loader,(_e=m==null?void 0:m.classNames)==null?void 0:_e.loader),visible:ge==="loading"})}return re.createElement("li",{tabIndex:0,ref:xt,className:Rn(D,Ue,O==null?void 0:O.toast,(t=m==null?void 0:m.classNames)==null?void 0:t.toast,O==null?void 0:O.default,O==null?void 0:O[ge],(n=m==null?void 0:m.classNames)==null?void 0:n[ge]),"data-sonner-toast":"","data-rich-colors":(r=m.richColors)!=null?r:j,"data-styled":!(m.jsx||m.unstyled||g),"data-mounted":W,"data-promise":!!m.promise,"data-swiped":$,"data-removed":de,"data-visible":Y,"data-y-position":Bi,"data-x-position":uc,"data-index":w,"data-front":Ys,"data-swiping":ie,"data-dismissible":Me,"data-type":ge,"data-invert":dc,"data-swipe-out":J,"data-swipe-direction":M,"data-expanded":!!(k||T&&W),style:{"--index":w,"--toasts-before":w,"--z-index":S.length-w,"--offset":`${de?le:Sr.current}px`,"--initial-height":T?"auto":`${Xe}px`,...L,...m.style},onDragEnd:()=>{me(!1),P(null),kr.current=null},onPointerDown:we=>{Vi||!Me||(Zs.current=new Date,De(Sr.current),we.target.setPointerCapture(we.pointerId),we.target.tagName!=="BUTTON"&&(me(!0),kr.current={x:we.clientX,y:we.clientY}))},onPointerUp:()=>{var we,Oe,_e,$t;if(J||!Me)return;kr.current=null;let en=Number(((we=xt.current)==null?void 0:we.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ut=Number(((Oe=xt.current)==null?void 0:Oe.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),be=new Date().getTime()-((_e=Zs.current)==null?void 0:_e.getTime()),Tn=K==="x"?en:Ut,Zr=Math.abs(Tn)/be;if(Math.abs(Tn)>=Y5||Zr>.11){De(Sr.current),($t=m.onDismiss)==null||$t.call(m,m),se(K==="x"?en>0?"right":"left":Ut>0?"down":"up"),Jt(),q(!0),ae(!1);return}me(!1),P(null)},onPointerMove:we=>{var Oe,_e,$t,en;if(!kr.current||!Me||((Oe=window.getSelection())==null?void 0:Oe.toString().length)>0)return;let Ut=we.clientY-kr.current.y,be=we.clientX-kr.current.x,Tn=(_e=e.swipeDirections)!=null?_e:Q5(z);!K&&(Math.abs(be)>1||Math.abs(Ut)>1)&&P(Math.abs(be)>Math.abs(Ut)?"x":"y");let Zr={x:0,y:0};K==="y"?(Tn.includes("top")||Tn.includes("bottom"))&&(Tn.includes("top")&&Ut<0||Tn.includes("bottom")&&Ut>0)&&(Zr.y=Ut):K==="x"&&(Tn.includes("left")||Tn.includes("right"))&&(Tn.includes("left")&&be<0||Tn.includes("right")&&be>0)&&(Zr.x=be),(Math.abs(Zr.x)>0||Math.abs(Zr.y)>0)&&ae(!0),($t=xt.current)==null||$t.style.setProperty("--swipe-amount-x",`${Zr.x}px`),(en=xt.current)==null||en.style.setProperty("--swipe-amount-y",`${Zr.y}px`)}},br&&!m.jsx?re.createElement("button",{"aria-label":V,"data-disabled":Vi,"data-close-button":!0,onClick:Vi||!Me?()=>{}:()=>{var we;Jt(),(we=m.onDismiss)==null||we.call(m,m)},className:Rn(O==null?void 0:O.closeButton,(s=m==null?void 0:m.classNames)==null?void 0:s.closeButton)},(i=I==null?void 0:I.close)!=null?i:D5):null,m.jsx||u.isValidElement(m.title)?m.jsx?m.jsx:typeof m.title=="function"?m.title():m.title:re.createElement(re.Fragment,null,ge||m.icon||m.promise?re.createElement("div",{"data-icon":"",className:Rn(O==null?void 0:O.icon,(o=m==null?void 0:m.classNames)==null?void 0:o.icon)},m.promise||m.type==="loading"&&!m.icon?m.icon||fc():null,m.type!=="loading"?m.icon||(I==null?void 0:I[ge])||P5(ge):null):null,re.createElement("div",{"data-content":"",className:Rn(O==null?void 0:O.content,(l=m==null?void 0:m.classNames)==null?void 0:l.content)},re.createElement("div",{"data-title":"",className:Rn(O==null?void 0:O.title,(c=m==null?void 0:m.classNames)==null?void 0:c.title)},typeof m.title=="function"?m.title():m.title),m.description?re.createElement("div",{"data-description":"",className:Rn(F,We,O==null?void 0:O.description,(d=m==null?void 0:m.classNames)==null?void 0:d.description)},typeof m.description=="function"?m.description():m.description):null),u.isValidElement(m.cancel)?m.cancel:m.cancel&&Ac(m.cancel)?re.createElement("button",{"data-button":!0,"data-cancel":!0,style:m.cancelButtonStyle||N,onClick:we=>{var Oe,_e;Ac(m.cancel)&&Me&&((_e=(Oe=m.cancel).onClick)==null||_e.call(Oe,we),Jt())},className:Rn(O==null?void 0:O.cancelButton,(f=m==null?void 0:m.classNames)==null?void 0:f.cancelButton)},m.cancel.label):null,u.isValidElement(m.action)?m.action:m.action&&Ac(m.action)?re.createElement("button",{"data-button":!0,"data-action":!0,style:m.actionButtonStyle||R,onClick:we=>{var Oe,_e;Ac(m.action)&&((_e=(Oe=m.action).onClick)==null||_e.call(Oe,we),!we.defaultPrevented&&Jt())},className:Rn(O==null?void 0:O.actionButton,(h=m==null?void 0:m.classNames)==null?void 0:h.actionButton)},m.action.label):null))};function Cx(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function eA(e,t){let n={};return[e,t].forEach((r,s)=>{let i=s===1,o=i?"--mobile-offset":"--offset",l=i?G5:K5;function c(d){["top","right","bottom","left"].forEach(f=>{n[`${o}-${f}`]=typeof d=="number"?`${d}px`:d})}typeof r=="number"||typeof r=="string"?c(r):typeof r=="object"?["top","right","bottom","left"].forEach(d=>{r[d]===void 0?n[`${o}-${d}`]=l:n[`${o}-${d}`]=typeof r[d]=="number"?`${r[d]}px`:r[d]}):c(l)}),n}var tA=u.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:o,className:l,offset:c,mobileOffset:d,theme:f="light",richColors:h,duration:p,style:m,visibleToasts:g=W5,toastOptions:v,dir:x=Cx(),gap:b=Z5,loadingIcon:y,icons:w,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[C,j]=re.useState([]),E=re.useMemo(()=>Array.from(new Set([r].concat(C.filter(Z=>Z.position).map(Z=>Z.position)))),[C,r]),[L,N]=re.useState([]),[R,D]=re.useState(!1),[F,_]=re.useState(!1),[z,A]=re.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),G=re.useRef(null),T=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=re.useRef(null),I=re.useRef(!1),V=re.useCallback(Z=>{j(K=>{var P;return(P=K.find(M=>M.id===Z.id))!=null&&P.delete||Ht.dismiss(Z.id),K.filter(({id:M})=>M!==Z.id)})},[]);return re.useEffect(()=>Ht.subscribe(Z=>{if(Z.dismiss){j(K=>K.map(P=>P.id===Z.id?{...P,delete:!0}:P));return}setTimeout(()=>{Pk.flushSync(()=>{j(K=>{let P=K.findIndex(M=>M.id===Z.id);return P!==-1?[...K.slice(0,P),{...K[P],...Z},...K.slice(P+1)]:[Z,...K]})})})}),[]),re.useEffect(()=>{if(f!=="system"){A(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?A("dark"):A("light")),typeof window>"u")return;let Z=window.matchMedia("(prefers-color-scheme: dark)");try{Z.addEventListener("change",({matches:K})=>{A(K?"dark":"light")})}catch{Z.addListener(({matches:P})=>{try{A(P?"dark":"light")}catch(M){console.error(M)}})}},[f]),re.useEffect(()=>{C.length<=1&&D(!1)},[C]),re.useEffect(()=>{let Z=K=>{var P,M;s.every(se=>K[se]||K.code===se)&&(D(!0),(P=G.current)==null||P.focus()),K.code==="Escape"&&(document.activeElement===G.current||(M=G.current)!=null&&M.contains(document.activeElement))&&D(!1)};return document.addEventListener("keydown",Z),()=>document.removeEventListener("keydown",Z)},[s]),re.useEffect(()=>{if(G.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,I.current=!1)}},[G.current]),re.createElement("section",{ref:t,"aria-label":`${S} ${T}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((Z,K)=>{var P;let[M,se]=Z.split("-");return C.length?re.createElement("ol",{key:Z,dir:x==="auto"?Cx():x,tabIndex:-1,ref:G,className:l,"data-sonner-toaster":!0,"data-theme":z,"data-y-position":M,"data-lifted":R&&C.length>1&&!i,"data-x-position":se,style:{"--front-toast-height":`${((P=L[0])==null?void 0:P.height)||0}px`,"--width":`${q5}px`,"--gap":`${b}px`,...m,...eA(c,d)},onBlur:W=>{I.current&&!W.currentTarget.contains(W.relatedTarget)&&(I.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:W=>{W.target instanceof HTMLElement&&W.target.dataset.dismissible==="false"||I.current||(I.current=!0,O.current=W.relatedTarget)},onMouseEnter:()=>D(!0),onMouseMove:()=>D(!0),onMouseLeave:()=>{F||D(!1)},onDragEnd:()=>D(!1),onPointerDown:W=>{W.target instanceof HTMLElement&&W.target.dataset.dismissible==="false"||_(!0)},onPointerUp:()=>_(!1)},C.filter(W=>!W.position&&K===0||W.position===Z).map((W,te)=>{var de,Q;return re.createElement(J5,{key:W.id,icons:w,index:te,toast:W,defaultRichColors:h,duration:(de=v==null?void 0:v.duration)!=null?de:p,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:n,visibleToasts:g,closeButton:(Q=v==null?void 0:v.closeButton)!=null?Q:o,interacting:F,position:Z,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:V,toasts:C.filter(ie=>ie.position==W.position),heights:L.filter(ie=>ie.position==W.position),setHeights:N,expandByDefault:i,gap:b,loadingIcon:y,expanded:R,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const nA=({...e})=>{const{theme:t="system"}=L5();return a.jsx(tA,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var rA=Ed[" useId ".trim().toString()]||(()=>{}),sA=0;function Ms(e){const[t,n]=u.useState(rA());return Nt(()=>{n(r=>r??String(sA++))},[e]),t?`radix-${t}`:""}const iA=["top","right","bottom","left"],Ds=Math.min,rn=Math.max,Zu=Math.round,Oc=Math.floor,fr=e=>({x:e,y:e}),oA={left:"right",right:"left",bottom:"top",top:"bottom"};function $p(e,t,n){return rn(e,Ds(t,n))}function Fr(e,t){return typeof e=="function"?e(t):e}function zr(e){return e.split("-")[0]}function ea(e){return e.split("-")[1]}function Kg(e){return e==="x"?"y":"x"}function Gg(e){return e==="y"?"height":"width"}function cr(e){const t=e[0];return t==="t"||t==="b"?"y":"x"}function qg(e){return Kg(cr(e))}function aA(e,t,n){n===void 0&&(n=!1);const r=ea(e),s=qg(e),i=Gg(s);let o=s==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(o=Yu(o)),[o,Yu(o)]}function lA(e){const t=Yu(e);return[Up(e),t,Up(t)]}function Up(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}const jx=["left","right"],Ex=["right","left"],cA=["top","bottom"],uA=["bottom","top"];function dA(e,t,n){switch(e){case"top":case"bottom":return n?t?Ex:jx:t?jx:Ex;case"left":case"right":return t?cA:uA;default:return[]}}function fA(e,t,n,r){const s=ea(e);let i=dA(zr(e),n==="start",r);return s&&(i=i.map(o=>o+"-"+s),t&&(i=i.concat(i.map(Up)))),i}function Yu(e){const t=zr(e);return oA[t]+e.slice(t.length)}function hA(e){return{top:0,right:0,bottom:0,left:0,...e}}function bC(e){return typeof e!="number"?hA(e):{top:e,right:e,bottom:e,left:e}}function Xu(e){const{x:t,y:n,width:r,height:s}=e;return{width:r,height:s,top:n,left:t,right:t+r,bottom:n+s,x:t,y:n}}function Nx(e,t,n){let{reference:r,floating:s}=e;const i=cr(t),o=qg(t),l=Gg(o),c=zr(t),d=i==="y",f=r.x+r.width/2-s.width/2,h=r.y+r.height/2-s.height/2,p=r[l]/2-s[l]/2;let m;switch(c){case"top":m={x:f,y:r.y-s.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:h};break;case"left":m={x:r.x-s.width,y:h};break;default:m={x:r.x,y:r.y}}switch(ea(t)){case"start":m[o]-=p*(n&&d?-1:1);break;case"end":m[o]+=p*(n&&d?-1:1);break}return m}async function pA(e,t){var n;t===void 0&&(t={});const{x:r,y:s,platform:i,rects:o,elements:l,strategy:c}=e,{boundary:d="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Fr(t,e),g=bC(m),x=l[p?h==="floating"?"reference":"floating":h],b=Xu(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(x)))==null||n?x:x.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:d,rootBoundary:f,strategy:c})),y=h==="floating"?{x:r,y:s,width:o.floating.width,height:o.floating.height}:o.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),S=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},k=Xu(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:y,offsetParent:w,strategy:c}):y);return{top:(b.top-k.top+g.top)/S.y,bottom:(k.bottom-b.bottom+g.bottom)/S.y,left:(b.left-k.left+g.left)/S.x,right:(k.right-b.right+g.right)/S.x}}const mA=50,gA=async(e,t,n)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:o}=n,l=o.detectOverflow?o:{...o,detectOverflow:pA},c=await(o.isRTL==null?void 0:o.isRTL(t));let d=await o.getElementRects({reference:e,floating:t,strategy:s}),{x:f,y:h}=Nx(d,r,c),p=r,m=0;const g={};for(let v=0;v<i.length;v++){const x=i[v];if(!x)continue;const{name:b,fn:y}=x,{x:w,y:S,data:k,reset:C}=await y({x:f,y:h,initialPlacement:r,placement:p,strategy:s,middlewareData:g,rects:d,platform:l,elements:{reference:e,floating:t}});f=w??f,h=S??h,g[b]={...g[b],...k},C&&m<mA&&(m++,typeof C=="object"&&(C.placement&&(p=C.placement),C.rects&&(d=C.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:s}):C.rects),{x:f,y:h}=Nx(d,p,c)),v=-1)}return{x:f,y:h,placement:p,strategy:s,middlewareData:g}},vA=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:s,rects:i,platform:o,elements:l,middlewareData:c}=t,{element:d,padding:f=0}=Fr(e,t)||{};if(d==null)return{};const h=bC(f),p={x:n,y:r},m=qg(s),g=Gg(m),v=await o.getDimensions(d),x=m==="y",b=x?"top":"left",y=x?"bottom":"right",w=x?"clientHeight":"clientWidth",S=i.reference[g]+i.reference[m]-p[m]-i.floating[g],k=p[m]-i.reference[m],C=await(o.getOffsetParent==null?void 0:o.getOffsetParent(d));let j=C?C[w]:0;(!j||!await(o.isElement==null?void 0:o.isElement(C)))&&(j=l.floating[w]||i.floating[g]);const E=S/2-k/2,L=j/2-v[g]/2-1,N=Ds(h[b],L),R=Ds(h[y],L),D=N,F=j-v[g]-R,_=j/2-v[g]/2+E,z=$p(D,_,F),A=!c.arrow&&ea(s)!=null&&_!==z&&i.reference[g]/2-(_<D?N:R)-v[g]/2<0,G=A?_<D?_-D:_-F:0;return{[m]:p[m]+G,data:{[m]:z,centerOffset:_-z-G,...A&&{alignmentOffset:G}},reset:A}}}),xA=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:s,middlewareData:i,rects:o,initialPlacement:l,platform:c,elements:d}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...x}=Fr(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const b=zr(s),y=cr(l),w=zr(l)===l,S=await(c.isRTL==null?void 0:c.isRTL(d.floating)),k=p||(w||!v?[Yu(l)]:lA(l)),C=g!=="none";!p&&C&&k.push(...fA(l,v,g,S));const j=[l,...k],E=await c.detectOverflow(t,x),L=[];let N=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&L.push(E[b]),h){const _=aA(s,o,S);L.push(E[_[0]],E[_[1]])}if(N=[...N,{placement:s,overflows:L}],!L.every(_=>_<=0)){var R,D;const _=(((R=i.flip)==null?void 0:R.index)||0)+1,z=j[_];if(z&&(!(h==="alignment"?y!==cr(z):!1)||N.every(T=>cr(T.placement)===y?T.overflows[0]>0:!0)))return{data:{index:_,overflows:N},reset:{placement:z}};let A=(D=N.filter(G=>G.overflows[0]<=0).sort((G,T)=>G.overflows[1]-T.overflows[1])[0])==null?void 0:D.placement;if(!A)switch(m){case"bestFit":{var F;const G=(F=N.filter(T=>{if(C){const O=cr(T.placement);return O===y||O==="y"}return!0}).map(T=>[T.placement,T.overflows.filter(O=>O>0).reduce((O,I)=>O+I,0)]).sort((T,O)=>T[1]-O[1])[0])==null?void 0:F[0];G&&(A=G);break}case"initialPlacement":A=l;break}if(s!==A)return{reset:{placement:A}}}return{}}}};function Lx(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function Px(e){return iA.some(t=>e[t]>=0)}const yA=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n,platform:r}=t,{strategy:s="referenceHidden",...i}=Fr(e,t);switch(s){case"referenceHidden":{const o=await r.detectOverflow(t,{...i,elementContext:"reference"}),l=Lx(o,n.reference);return{data:{referenceHiddenOffsets:l,referenceHidden:Px(l)}}}case"escaped":{const o=await r.detectOverflow(t,{...i,altBoundary:!0}),l=Lx(o,n.floating);return{data:{escapedOffsets:l,escaped:Px(l)}}}default:return{}}}}},wC=new Set(["left","top"]);async function bA(e,t){const{placement:n,platform:r,elements:s}=e,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),o=zr(n),l=ea(n),c=cr(n)==="y",d=wC.has(o)?-1:1,f=i&&c?-1:1,h=Fr(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?g*-1:g),c?{x:m*f,y:p*d}:{x:p*d,y:m*f}}const wA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:s,y:i,placement:o,middlewareData:l}=t,c=await bA(t,e);return o===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:o}}}}},SA=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:s,platform:i}=t,{mainAxis:o=!0,crossAxis:l=!1,limiter:c={fn:b=>{let{x:y,y:w}=b;return{x:y,y:w}}},...d}=Fr(e,t),f={x:n,y:r},h=await i.detectOverflow(t,d),p=cr(zr(s)),m=Kg(p);let g=f[m],v=f[p];if(o){const b=m==="y"?"top":"left",y=m==="y"?"bottom":"right",w=g+h[b],S=g-h[y];g=$p(w,g,S)}if(l){const b=p==="y"?"top":"left",y=p==="y"?"bottom":"right",w=v+h[b],S=v-h[y];v=$p(w,v,S)}const x=c.fn({...t,[m]:g,[p]:v});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[m]:o,[p]:l}}}}}},kA=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:s,rects:i,middlewareData:o}=t,{offset:l=0,mainAxis:c=!0,crossAxis:d=!0}=Fr(e,t),f={x:n,y:r},h=cr(s),p=Kg(h);let m=f[p],g=f[h];const v=Fr(l,t),x=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const w=p==="y"?"height":"width",S=i.reference[p]-i.floating[w]+x.mainAxis,k=i.reference[p]+i.reference[w]-x.mainAxis;m<S?m=S:m>k&&(m=k)}if(d){var b,y;const w=p==="y"?"width":"height",S=wC.has(zr(s)),k=i.reference[h]-i.floating[w]+(S&&((b=o.offset)==null?void 0:b[h])||0)+(S?0:x.crossAxis),C=i.reference[h]+i.reference[w]+(S?0:((y=o.offset)==null?void 0:y[h])||0)-(S?x.crossAxis:0);g<k?g=k:g>C&&(g=C)}return{[p]:m,[h]:g}}}},CA=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:s,rects:i,platform:o,elements:l}=t,{apply:c=()=>{},...d}=Fr(e,t),f=await o.detectOverflow(t,d),h=zr(s),p=ea(s),m=cr(s)==="y",{width:g,height:v}=i.floating;let x,b;h==="top"||h==="bottom"?(x=h,b=p===(await(o.isRTL==null?void 0:o.isRTL(l.floating))?"start":"end")?"left":"right"):(b=h,x=p==="end"?"top":"bottom");const y=v-f.top-f.bottom,w=g-f.left-f.right,S=Ds(v-f[x],y),k=Ds(g-f[b],w),C=!t.middlewareData.shift;let j=S,E=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(E=w),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(j=y),C&&!p){const N=rn(f.left,0),R=rn(f.right,0),D=rn(f.top,0),F=rn(f.bottom,0);m?E=g-2*(N!==0||R!==0?N+R:rn(f.left,f.right)):j=v-2*(D!==0||F!==0?D+F:rn(f.top,f.bottom))}await c({...t,availableWidth:E,availableHeight:j});const L=await o.getDimensions(l.floating);return g!==L.width||v!==L.height?{reset:{rects:!0}}:{}}}};function Kd(){return typeof window<"u"}function ta(e){return SC(e)?(e.nodeName||"").toLowerCase():"#document"}function cn(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function vr(e){var t;return(t=(SC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function SC(e){return Kd()?e instanceof Node||e instanceof cn(e).Node:!1}function Kn(e){return Kd()?e instanceof Element||e instanceof cn(e).Element:!1}function Hr(e){return Kd()?e instanceof HTMLElement||e instanceof cn(e).HTMLElement:!1}function Tx(e){return!Kd()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof cn(e).ShadowRoot}function Xl(e){const{overflow:t,overflowX:n,overflowY:r,display:s}=Gn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&s!=="inline"&&s!=="contents"}function jA(e){return/^(table|td|th)$/.test(ta(e))}function Gd(e){try{if(e.matches(":popover-open"))return!0}catch{}try{return e.matches(":modal")}catch{return!1}}const EA=/transform|translate|scale|rotate|perspective|filter/,NA=/paint|layout|strict|content/,Js=e=>!!e&&e!=="none";let th;function Zg(e){const t=Kn(e)?Gn(e):e;return Js(t.transform)||Js(t.translate)||Js(t.scale)||Js(t.rotate)||Js(t.perspective)||!Yg()&&(Js(t.backdropFilter)||Js(t.filter))||EA.test(t.willChange||"")||NA.test(t.contain||"")}function LA(e){let t=_s(e);for(;Hr(t)&&!$o(t);){if(Zg(t))return t;if(Gd(t))return null;t=_s(t)}return null}function Yg(){return th==null&&(th=typeof CSS<"u"&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),th}function $o(e){return/^(html|body|#document)$/.test(ta(e))}function Gn(e){return cn(e).getComputedStyle(e)}function qd(e){return Kn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function _s(e){if(ta(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Tx(e)&&e.host||vr(e);return Tx(t)?t.host:t}function kC(e){const t=_s(e);return $o(t)?e.ownerDocument?e.ownerDocument.body:e.body:Hr(t)&&Xl(t)?t:kC(t)}function Nl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const s=kC(e),i=s===((r=e.ownerDocument)==null?void 0:r.body),o=cn(s);if(i){const l=Hp(o);return t.concat(o,o.visualViewport||[],Xl(s)?s:[],l&&n?Nl(l):[])}else return t.concat(s,Nl(s,[],n))}function Hp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function CC(e){const t=Gn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=Hr(e),i=s?e.offsetWidth:n,o=s?e.offsetHeight:r,l=Zu(n)!==i||Zu(r)!==o;return l&&(n=i,r=o),{width:n,height:r,$:l}}function Xg(e){return Kn(e)?e:e.contextElement}function ko(e){const t=Xg(e);if(!Hr(t))return fr(1);const n=t.getBoundingClientRect(),{width:r,height:s,$:i}=CC(t);let o=(i?Zu(n.width):n.width)/r,l=(i?Zu(n.height):n.height)/s;return(!o||!Number.isFinite(o))&&(o=1),(!l||!Number.isFinite(l))&&(l=1),{x:o,y:l}}const PA=fr(0);function jC(e){const t=cn(e);return!Yg()||!t.visualViewport?PA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function TA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==cn(e)?!1:t}function Pi(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),i=Xg(e);let o=fr(1);t&&(r?Kn(r)&&(o=ko(r)):o=ko(e));const l=TA(i,n,r)?jC(i):fr(0);let c=(s.left+l.x)/o.x,d=(s.top+l.y)/o.y,f=s.width/o.x,h=s.height/o.y;if(i){const p=cn(i),m=r&&Kn(r)?cn(r):r;let g=p,v=Hp(g);for(;v&&r&&m!==g;){const x=ko(v),b=v.getBoundingClientRect(),y=Gn(v),w=b.left+(v.clientLeft+parseFloat(y.paddingLeft))*x.x,S=b.top+(v.clientTop+parseFloat(y.paddingTop))*x.y;c*=x.x,d*=x.y,f*=x.x,h*=x.y,c+=w,d+=S,g=cn(v),v=Hp(g)}}return Xu({width:f,height:h,x:c,y:d})}function Zd(e,t){const n=qd(e).scrollLeft;return t?t.left+n:Pi(vr(e)).left+n}function EC(e,t){const n=e.getBoundingClientRect(),r=n.left+t.scrollLeft-Zd(e,n),s=n.top+t.scrollTop;return{x:r,y:s}}function MA(e){let{elements:t,rect:n,offsetParent:r,strategy:s}=e;const i=s==="fixed",o=vr(r),l=t?Gd(t.floating):!1;if(r===o||l&&i)return n;let c={scrollLeft:0,scrollTop:0},d=fr(1);const f=fr(0),h=Hr(r);if((h||!h&&!i)&&((ta(r)!=="body"||Xl(o))&&(c=qd(r)),h)){const m=Pi(r);d=ko(r),f.x=m.x+r.clientLeft,f.y=m.y+r.clientTop}const p=o&&!h&&!i?EC(o,c):fr(0);return{width:n.width*d.x,height:n.height*d.y,x:n.x*d.x-c.scrollLeft*d.x+f.x+p.x,y:n.y*d.y-c.scrollTop*d.y+f.y+p.y}}function RA(e){return Array.from(e.getClientRects())}function AA(e){const t=vr(e),n=qd(e),r=e.ownerDocument.body,s=rn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=rn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+Zd(e);const l=-n.scrollTop;return Gn(r).direction==="rtl"&&(o+=rn(t.clientWidth,r.clientWidth)-s),{width:s,height:i,x:o,y:l}}const Mx=25;function OA(e,t){const n=cn(e),r=vr(e),s=n.visualViewport;let i=r.clientWidth,o=r.clientHeight,l=0,c=0;if(s){i=s.width,o=s.height;const f=Yg();(!f||f&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}const d=Zd(r);if(d<=0){const f=r.ownerDocument,h=f.body,p=getComputedStyle(h),m=f.compatMode==="CSS1Compat"&&parseFloat(p.marginLeft)+parseFloat(p.marginRight)||0,g=Math.abs(r.clientWidth-h.clientWidth-m);g<=Mx&&(i-=g)}else d<=Mx&&(i+=d);return{width:i,height:o,x:l,y:c}}function IA(e,t){const n=Pi(e,!0,t==="fixed"),r=n.top+e.clientTop,s=n.left+e.clientLeft,i=Hr(e)?ko(e):fr(1),o=e.clientWidth*i.x,l=e.clientHeight*i.y,c=s*i.x,d=r*i.y;return{width:o,height:l,x:c,y:d}}function Rx(e,t,n){let r;if(t==="viewport")r=OA(e,n);else if(t==="document")r=AA(vr(e));else if(Kn(t))r=IA(t,n);else{const s=jC(e);r={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Xu(r)}function NC(e,t){const n=_s(e);return n===t||!Kn(n)||$o(n)?!1:Gn(n).position==="fixed"||NC(n,t)}function DA(e,t){const n=t.get(e);if(n)return n;let r=Nl(e,[],!1).filter(l=>Kn(l)&&ta(l)!=="body"),s=null;const i=Gn(e).position==="fixed";let o=i?_s(e):e;for(;Kn(o)&&!$o(o);){const l=Gn(o),c=Zg(o);!c&&l.position==="fixed"&&(s=null),(i?!c&&!s:!c&&l.position==="static"&&!!s&&(s.position==="absolute"||s.position==="fixed")||Xl(o)&&!c&&NC(e,o))?r=r.filter(f=>f!==o):s=l,o=_s(o)}return t.set(e,r),r}function _A(e){let{element:t,boundary:n,rootBoundary:r,strategy:s}=e;const o=[...n==="clippingAncestors"?Gd(t)?[]:DA(t,this._c):[].concat(n),r],l=Rx(t,o[0],s);let c=l.top,d=l.right,f=l.bottom,h=l.left;for(let p=1;p<o.length;p++){const m=Rx(t,o[p],s);c=rn(m.top,c),d=Ds(m.right,d),f=Ds(m.bottom,f),h=rn(m.left,h)}return{width:d-h,height:f-c,x:h,y:c}}function FA(e){const{width:t,height:n}=CC(e);return{width:t,height:n}}function zA(e,t,n){const r=Hr(t),s=vr(t),i=n==="fixed",o=Pi(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=fr(0);function d(){c.x=Zd(s)}if(r||!r&&!i)if((ta(t)!=="body"||Xl(s))&&(l=qd(t)),r){const m=Pi(t,!0,i,t);c.x=m.x+t.clientLeft,c.y=m.y+t.clientTop}else s&&d();i&&!r&&s&&d();const f=s&&!r&&!i?EC(s,l):fr(0),h=o.left+l.scrollLeft-c.x-f.x,p=o.top+l.scrollTop-c.y-f.y;return{x:h,y:p,width:o.width,height:o.height}}function nh(e){return Gn(e).position==="static"}function Ax(e,t){if(!Hr(e)||Gn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return vr(e)===n&&(n=n.ownerDocument.body),n}function LC(e,t){const n=cn(e);if(Gd(e))return n;if(!Hr(e)){let s=_s(e);for(;s&&!$o(s);){if(Kn(s)&&!nh(s))return s;s=_s(s)}return n}let r=Ax(e,t);for(;r&&jA(r)&&nh(r);)r=Ax(r,t);return r&&$o(r)&&nh(r)&&!Zg(r)?n:r||LA(e)||n}const BA=async function(e){const t=this.getOffsetParent||LC,n=this.getDimensions,r=await n(e.floating);return{reference:zA(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function VA(e){return Gn(e).direction==="rtl"}const $A={convertOffsetParentRelativeRectToViewportRelativeRect:MA,getDocumentElement:vr,getClippingRect:_A,getOffsetParent:LC,getElementRects:BA,getClientRects:RA,getDimensions:FA,getScale:ko,isElement:Kn,isRTL:VA};function PC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function UA(e,t){let n=null,r;const s=vr(e);function i(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function o(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const d=e.getBoundingClientRect(),{left:f,top:h,width:p,height:m}=d;if(l||t(),!p||!m)return;const g=Oc(h),v=Oc(s.clientWidth-(f+p)),x=Oc(s.clientHeight-(h+m)),b=Oc(f),w={rootMargin:-g+"px "+-v+"px "+-x+"px "+-b+"px",threshold:rn(0,Ds(1,c))||1};let S=!0;function k(C){const j=C[0].intersectionRatio;if(j!==c){if(!S)return o();j?o(!1,j):r=setTimeout(()=>{o(!1,1e-7)},1e3)}j===1&&!PC(d,e.getBoundingClientRect())&&o(),S=!1}try{n=new IntersectionObserver(k,{...w,root:s.ownerDocument})}catch{n=new IntersectionObserver(k,w)}n.observe(e)}return o(!0),i}function HA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:o=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,d=Xg(e),f=s||i?[...d?Nl(d):[],...t?Nl(t):[]]:[];f.forEach(b=>{s&&b.addEventListener("scroll",n,{passive:!0}),i&&b.addEventListener("resize",n)});const h=d&&l?UA(d,n):null;let p=-1,m=null;o&&(m=new ResizeObserver(b=>{let[y]=b;y&&y.target===d&&m&&t&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var w;(w=m)==null||w.observe(t)})),n()}),d&&!c&&m.observe(d),t&&m.observe(t));let g,v=c?Pi(e):null;c&&x();function x(){const b=Pi(e);v&&!PC(v,b)&&n(),v=b,g=requestAnimationFrame(x)}return n(),()=>{var b;f.forEach(y=>{s&&y.removeEventListener("scroll",n),i&&y.removeEventListener("resize",n)}),h==null||h(),(b=m)==null||b.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const WA=wA,KA=SA,GA=xA,qA=CA,ZA=yA,Ox=vA,YA=kA,XA=(e,t,n)=>{const r=new Map,s={platform:$A,...n},i={...s.platform,_c:r};return gA(e,t,{...s,platform:i})};var QA=typeof document<"u",JA=function(){},uu=QA?u.useLayoutEffect:JA;function Qu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Qu(e[r],t[r]))return!1;return!0}if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,s[r]))return!1;for(r=n;r--!==0;){const i=s[r];if(!(i==="_owner"&&e.$$typeof)&&!Qu(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function TC(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Ix(e,t){const n=TC(e);return Math.round(t*n)/n}function rh(e){const t=u.useRef(e);return uu(()=>{t.current=e}),t}function eO(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:s,elements:{reference:i,floating:o}={},transform:l=!0,whileElementsMounted:c,open:d}=e,[f,h]=u.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=u.useState(r);Qu(p,r)||m(r);const[g,v]=u.useState(null),[x,b]=u.useState(null),y=u.useCallback(T=>{T!==C.current&&(C.current=T,v(T))},[]),w=u.useCallback(T=>{T!==j.current&&(j.current=T,b(T))},[]),S=i||g,k=o||x,C=u.useRef(null),j=u.useRef(null),E=u.useRef(f),L=c!=null,N=rh(c),R=rh(s),D=rh(d),F=u.useCallback(()=>{if(!C.current||!j.current)return;const T={placement:t,strategy:n,middleware:p};R.current&&(T.platform=R.current),XA(C.current,j.current,T).then(O=>{const I={...O,isPositioned:D.current!==!1};_.current&&!Qu(E.current,I)&&(E.current=I,pn.flushSync(()=>{h(I)}))})},[p,t,n,R,D]);uu(()=>{d===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,h(T=>({...T,isPositioned:!1})))},[d]);const _=u.useRef(!1);uu(()=>(_.current=!0,()=>{_.current=!1}),[]),uu(()=>{if(S&&(C.current=S),k&&(j.current=k),S&&k){if(N.current)return N.current(S,k,F);F()}},[S,k,F,N,L]);const z=u.useMemo(()=>({reference:C,floating:j,setReference:y,setFloating:w}),[y,w]),A=u.useMemo(()=>({reference:S,floating:k}),[S,k]),G=u.useMemo(()=>{const T={position:n,left:0,top:0};if(!A.floating)return T;const O=Ix(A.floating,f.x),I=Ix(A.floating,f.y);return l?{...T,transform:"translate("+O+"px, "+I+"px)",...TC(A.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:O,top:I}},[n,l,A.floating,f.x,f.y]);return u.useMemo(()=>({...f,update:F,refs:z,elements:A,floatingStyles:G}),[f,F,z,A,G])}const tO=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:s}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?Ox({element:r.current,padding:s}).fn(n):{}:r?Ox({element:r,padding:s}).fn(n):{}}}},nO=(e,t)=>{const n=WA(e);return{name:n.name,fn:n.fn,options:[e,t]}},rO=(e,t)=>{const n=KA(e);return{name:n.name,fn:n.fn,options:[e,t]}},sO=(e,t)=>({fn:YA(e).fn,options:[e,t]}),iO=(e,t)=>{const n=GA(e);return{name:n.name,fn:n.fn,options:[e,t]}},oO=(e,t)=>{const n=qA(e);return{name:n.name,fn:n.fn,options:[e,t]}},aO=(e,t)=>{const n=ZA(e);return{name:n.name,fn:n.fn,options:[e,t]}},lO=(e,t)=>{const n=tO(e);return{name:n.name,fn:n.fn,options:[e,t]}};var cO="Arrow",MC=u.forwardRef((e,t)=>{const{children:n,width:r=10,height:s=5,...i}=e;return a.jsx(Ce.svg,{...i,ref:t,width:r,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:a.jsx("polygon",{points:"0,0 30,0 15,10"})})});MC.displayName=cO;var uO=MC;function RC(e){const[t,n]=u.useState(void 0);return Nt(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const i=s[0];let o,l;if("borderBoxSize"in i){const c=i.borderBoxSize,d=Array.isArray(c)?c[0]:c;o=d.inlineSize,l=d.blockSize}else o=e.offsetWidth,l=e.offsetHeight;n({width:o,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var Qg="Popper",[AC,Yd]=Vr(Qg),[dO,OC]=AC(Qg),IC=e=>{const{__scopePopper:t,children:n}=e,[r,s]=u.useState(null);return a.jsx(dO,{scope:t,anchor:r,onAnchorChange:s,children:n})};IC.displayName=Qg;var DC="PopperAnchor",_C=u.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...s}=e,i=OC(DC,n),o=u.useRef(null),l=Be(t,o),c=u.useRef(null);return u.useEffect(()=>{const d=c.current;c.current=(r==null?void 0:r.current)||o.current,d!==c.current&&i.onAnchorChange(c.current)}),r?null:a.jsx(Ce.div,{...s,ref:l})});_C.displayName=DC;var Jg="PopperContent",[fO,hO]=AC(Jg),FC=u.forwardRef((e,t)=>{var W,te,de,Q,ie,me;const{__scopePopper:n,side:r="bottom",sideOffset:s=0,align:i="center",alignOffset:o=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:d=[],collisionPadding:f=0,sticky:h="partial",hideWhenDetached:p=!1,updatePositionStrategy:m="optimized",onPlaced:g,...v}=e,x=OC(Jg,n),[b,y]=u.useState(null),w=Be(t,J=>y(J)),[S,k]=u.useState(null),C=RC(S),j=(C==null?void 0:C.width)??0,E=(C==null?void 0:C.height)??0,L=r+(i!=="center"?"-"+i:""),N=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},R=Array.isArray(d)?d:[d],D=R.length>0,F={padding:N,boundary:R.filter(mO),altBoundary:D},{refs:_,floatingStyles:z,placement:A,isPositioned:G,middlewareData:T}=eO({strategy:"fixed",placement:L,whileElementsMounted:(...J)=>HA(...J,{animationFrame:m==="always"}),elements:{reference:x.anchor},middleware:[nO({mainAxis:s+E,alignmentAxis:o}),c&&rO({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?sO():void 0,...F}),c&&iO({...F}),oO({...F,apply:({elements:J,rects:q,availableWidth:$,availableHeight:ae})=>{const{width:le,height:De}=q.reference,Xe=J.floating.style;Xe.setProperty("--radix-popper-available-width",`${$}px`),Xe.setProperty("--radix-popper-available-height",`${ae}px`),Xe.setProperty("--radix-popper-anchor-width",`${le}px`),Xe.setProperty("--radix-popper-anchor-height",`${De}px`)}}),S&&lO({element:S,padding:l}),gO({arrowWidth:j,arrowHeight:E}),p&&aO({strategy:"referenceHidden",...F})]}),[O,I]=VC(A),V=Ln(g);Nt(()=>{G&&(V==null||V())},[G,V]);const Z=(W=T.arrow)==null?void 0:W.x,K=(te=T.arrow)==null?void 0:te.y,P=((de=T.arrow)==null?void 0:de.centerOffset)!==0,[M,se]=u.useState();return Nt(()=>{b&&se(window.getComputedStyle(b).zIndex)},[b]),a.jsx("div",{ref:_.setFloating,"data-radix-popper-content-wrapper":"",style:{...z,transform:G?z.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:M,"--radix-popper-transform-origin":[(Q=T.transformOrigin)==null?void 0:Q.x,(ie=T.transformOrigin)==null?void 0:ie.y].join(" "),...((me=T.hide)==null?void 0:me.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:a.jsx(fO,{scope:n,placedSide:O,onArrowChange:k,arrowX:Z,arrowY:K,shouldHideArrow:P,children:a.jsx(Ce.div,{"data-side":O,"data-align":I,...v,ref:w,style:{...v.style,animation:G?void 0:"none"}})})})});FC.displayName=Jg;var zC="PopperArrow",pO={top:"bottom",right:"left",bottom:"top",left:"right"},BC=u.forwardRef(function(t,n){const{__scopePopper:r,...s}=t,i=hO(zC,r),o=pO[i.placedSide];return a.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[o]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:a.jsx(uO,{...s,ref:n,style:{...s.style,display:"block"}})})});BC.displayName=zC;function mO(e){return e!==null}var gO=e=>({name:"transformOrigin",options:e,fn(t){var x,b,y;const{placement:n,rects:r,middlewareData:s}=t,o=((x=s.arrow)==null?void 0:x.centerOffset)!==0,l=o?0:e.arrowWidth,c=o?0:e.arrowHeight,[d,f]=VC(n),h={start:"0%",center:"50%",end:"100%"}[f],p=(((b=s.arrow)==null?void 0:b.x)??0)+l/2,m=(((y=s.arrow)==null?void 0:y.y)??0)+c/2;let g="",v="";return d==="bottom"?(g=o?h:`${p}px`,v=`${-c}px`):d==="top"?(g=o?h:`${p}px`,v=`${r.floating.height+c}px`):d==="right"?(g=`${-c}px`,v=o?h:`${m}px`):d==="left"&&(g=`${r.floating.width+c}px`,v=o?h:`${m}px`),{data:{x:g,y:v}}}});function VC(e){const[t,n="center"]=e.split("-");return[t,n]}var vO=IC,$C=_C,UC=FC,HC=BC,[Xd]=Vr("Tooltip",[Yd]),e0=Yd(),WC="TooltipProvider",xO=700,Dx="tooltip.open",[yO,KC]=Xd(WC),GC=e=>{const{__scopeTooltip:t,delayDuration:n=xO,skipDelayDuration:r=300,disableHoverableContent:s=!1,children:i}=e,o=u.useRef(!0),l=u.useRef(!1),c=u.useRef(0);return u.useEffect(()=>{const d=c.current;return()=>window.clearTimeout(d)},[]),a.jsx(yO,{scope:t,isOpenDelayedRef:o,delayDuration:n,onOpen:u.useCallback(()=>{window.clearTimeout(c.current),o.current=!1},[]),onClose:u.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>o.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:u.useCallback(d=>{l.current=d},[]),disableHoverableContent:s,children:i})};GC.displayName=WC;var qC="Tooltip",[s7,Qd]=Xd(qC),Wp="TooltipTrigger",bO=u.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,s=Qd(Wp,n),i=KC(Wp,n),o=e0(n),l=u.useRef(null),c=Be(t,l,s.onTriggerChange),d=u.useRef(!1),f=u.useRef(!1),h=u.useCallback(()=>d.current=!1,[]);return u.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),a.jsx($C,{asChild:!0,...o,children:a.jsx(Ce.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...r,ref:c,onPointerMove:ye(e.onPointerMove,p=>{p.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(s.onTriggerEnter(),f.current=!0)}),onPointerLeave:ye(e.onPointerLeave,()=>{s.onTriggerLeave(),f.current=!1}),onPointerDown:ye(e.onPointerDown,()=>{s.open&&s.onClose(),d.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:ye(e.onFocus,()=>{d.current||s.onOpen()}),onBlur:ye(e.onBlur,s.onClose),onClick:ye(e.onClick,s.onClose)})})});bO.displayName=Wp;var wO="TooltipPortal",[i7,SO]=Xd(wO,{forceMount:void 0}),Uo="TooltipContent",ZC=u.forwardRef((e,t)=>{const n=SO(Uo,e.__scopeTooltip),{forceMount:r=n.forceMount,side:s="top",...i}=e,o=Qd(Uo,e.__scopeTooltip);return a.jsx(Di,{present:r||o.open,children:o.disableHoverableContent?a.jsx(YC,{side:s,...i,ref:t}):a.jsx(kO,{side:s,...i,ref:t})})}),kO=u.forwardRef((e,t)=>{const n=Qd(Uo,e.__scopeTooltip),r=KC(Uo,e.__scopeTooltip),s=u.useRef(null),i=Be(t,s),[o,l]=u.useState(null),{trigger:c,onClose:d}=n,f=s.current,{onPointerInTransitChange:h}=r,p=u.useCallback(()=>{l(null),h(!1)},[h]),m=u.useCallback((g,v)=>{const x=g.currentTarget,b={x:g.clientX,y:g.clientY},y=LO(b,x.getBoundingClientRect()),w=PO(b,y),S=TO(v.getBoundingClientRect()),k=RO([...w,...S]);l(k),h(!0)},[h]);return u.useEffect(()=>()=>p(),[p]),u.useEffect(()=>{if(c&&f){const g=x=>m(x,f),v=x=>m(x,c);return c.addEventListener("pointerleave",g),f.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",g),f.removeEventListener("pointerleave",v)}}},[c,f,m,p]),u.useEffect(()=>{if(o){const g=v=>{const x=v.target,b={x:v.clientX,y:v.clientY},y=(c==null?void 0:c.contains(x))||(f==null?void 0:f.contains(x)),w=!MO(b,o);y?p():w&&(p(),d())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[c,f,o,d,p]),a.jsx(YC,{...e,ref:i})}),[CO,jO]=Xd(qC,{isInside:!1}),EO=LM("TooltipContent"),YC=u.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":s,onEscapeKeyDown:i,onPointerDownOutside:o,...l}=e,c=Qd(Uo,n),d=e0(n),{onClose:f}=c;return u.useEffect(()=>(document.addEventListener(Dx,f),()=>document.removeEventListener(Dx,f)),[f]),u.useEffect(()=>{if(c.trigger){const h=p=>{const m=p.target;m!=null&&m.contains(c.trigger)&&f()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[c.trigger,f]),a.jsx(Kl,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:h=>h.preventDefault(),onDismiss:f,children:a.jsxs(UC,{"data-state":c.stateAttribute,...d,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[a.jsx(EO,{children:r}),a.jsx(CO,{scope:n,isInside:!0,children:a.jsx(YM,{id:c.contentId,role:"tooltip",children:s||r})})]})})});ZC.displayName=Uo;var XC="TooltipArrow",NO=u.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,s=e0(n);return jO(XC,n).isInside?null:a.jsx(HC,{...s,...r,ref:t})});NO.displayName=XC;function LO(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),s=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,s,i)){case i:return"left";case s:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function PO(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function TO(e){const{top:t,right:n,bottom:r,left:s}=e;return[{x:s,y:t},{x:n,y:t},{x:n,y:r},{x:s,y:r}]}function MO(e,t){const{x:n,y:r}=e;let s=!1;for(let i=0,o=t.length-1;i<t.length;o=i++){const l=t[i],c=t[o],d=l.x,f=l.y,h=c.x,p=c.y;f>r!=p>r&&n<(h-d)*(r-f)/(p-f)+d&&(s=!s)}return s}function RO(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),AO(t)}function AO(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const s=e[r];for(;t.length>=2;){const i=t[t.length-1],o=t[t.length-2];if((i.x-o.x)*(s.y-o.y)>=(i.y-o.y)*(s.x-o.x))t.pop();else break}t.push(s)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const s=e[r];for(;n.length>=2;){const i=n[n.length-1],o=n[n.length-2];if((i.x-o.x)*(s.y-o.y)>=(i.y-o.y)*(s.x-o.x))n.pop();else break}n.push(s)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var OO=GC,QC=ZC;const IO=OO,DO=u.forwardRef(({className:e,sideOffset:t=4,...n},r)=>a.jsx(QC,{ref:r,sideOffset:t,className:he("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));DO.displayName=QC.displayName;var Jd=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},fi,cs,Eo,a1,_O=(a1=class extends Jd{constructor(){super();Te(this,fi);Te(this,cs);Te(this,Eo);Se(this,Eo,t=>{if(typeof window<"u"&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){H(this,cs)||this.setEventListener(H(this,Eo))}onUnsubscribe(){var t;this.hasListeners()||((t=H(this,cs))==null||t.call(this),Se(this,cs,void 0))}setEventListener(t){var n;Se(this,Eo,t),(n=H(this,cs))==null||n.call(this),Se(this,cs,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){H(this,fi)!==t&&(Se(this,fi,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof H(this,fi)=="boolean"?H(this,fi):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},fi=new WeakMap,cs=new WeakMap,Eo=new WeakMap,a1),JC=new _O,FO={setTimeout:(e,t)=>setTimeout(e,t),clearTimeout:e=>clearTimeout(e),setInterval:(e,t)=>setInterval(e,t),clearInterval:e=>clearInterval(e)},us,Vm,l1,zO=(l1=class{constructor(){Te(this,us,FO);Te(this,Vm,!1)}setTimeoutProvider(e){Se(this,us,e)}setTimeout(e,t){return H(this,us).setTimeout(e,t)}clearTimeout(e){H(this,us).clearTimeout(e)}setInterval(e,t){return H(this,us).setInterval(e,t)}clearInterval(e){H(this,us).clearInterval(e)}},us=new WeakMap,Vm=new WeakMap,l1),Kp=new zO;function BO(e){setTimeout(e,0)}var VO=typeof window>"u"||"Deno"in globalThis;function Fn(){}function $O(e,t){return typeof e=="function"?e(t):e}function UO(e){return typeof e=="number"&&e>=0&&e!==1/0}function HO(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Gp(e,t){return typeof e=="function"?e(t):e}function WO(e,t){return typeof e=="function"?e(t):e}function _x(e,t){const{type:n="all",exact:r,fetchStatus:s,predicate:i,queryKey:o,stale:l}=e;if(o){if(r){if(t.queryHash!==t0(o,t.options))return!1}else if(!Pl(t.queryKey,o))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||s&&s!==t.state.fetchStatus||i&&!i(t))}function Fx(e,t){const{exact:n,status:r,predicate:s,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(Ll(t.options.mutationKey)!==Ll(i))return!1}else if(!Pl(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||s&&!s(t))}function t0(e,t){return((t==null?void 0:t.queryKeyHashFn)||Ll)(e)}function Ll(e){return JSON.stringify(e,(t,n)=>qp(n)?Object.keys(n).sort().reduce((r,s)=>(r[s]=n[s],r),{}):n)}function Pl(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Pl(e[n],t[n])):!1}var KO=Object.prototype.hasOwnProperty;function ej(e,t,n=0){if(e===t)return e;if(n>500)return t;const r=zx(e)&&zx(t);if(!r&&!(qp(e)&&qp(t)))return t;const i=(r?e:Object.keys(e)).length,o=r?t:Object.keys(t),l=o.length,c=r?new Array(l):{};let d=0;for(let f=0;f<l;f++){const h=r?f:o[f],p=e[h],m=t[h];if(p===m){c[h]=p,(r?f<i:KO.call(e,h))&&d++;continue}if(p===null||m===null||typeof p!="object"||typeof m!="object"){c[h]=m;continue}const g=ej(p,m,n+1);c[h]=g,g===p&&d++}return i===l&&d===i?e:c}function zx(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function qp(e){if(!Bx(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Bx(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Bx(e){return Object.prototype.toString.call(e)==="[object Object]"}function GO(e){return new Promise(t=>{Kp.setTimeout(t,e)})}function qO(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?ej(e,t):t}function ZO(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function YO(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var n0=Symbol();function tj(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===n0?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}function XO(e,t,n){let r=!1,s;return Object.defineProperty(e,"signal",{enumerable:!0,get:()=>(s??(s=t()),r||(r=!0,s.aborted?n():s.addEventListener("abort",n,{once:!0})),s)}),e}var nj=(()=>{let e=()=>VO;return{isServer(){return e()},setIsServer(t){e=t}}})();function QO(){let e,t;const n=new Promise((s,i)=>{e=s,t=i});n.status="pending",n.catch(()=>{});function r(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{r({status:"fulfilled",value:s}),e(s)},n.reject=s=>{r({status:"rejected",reason:s}),t(s)},n}var JO=BO;function eI(){let e=[],t=0,n=l=>{l()},r=l=>{l()},s=JO;const i=l=>{t?e.push(l):s(()=>{n(l)})},o=()=>{const l=e;e=[],l.length&&s(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||o()}return c},batchCalls:l=>(...c)=>{i(()=>{l(...c)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{s=l}}}var Dt=eI(),No,ds,Lo,c1,tI=(c1=class extends Jd{constructor(){super();Te(this,No,!0);Te(this,ds);Te(this,Lo);Se(this,Lo,t=>{if(typeof window<"u"&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){H(this,ds)||this.setEventListener(H(this,Lo))}onUnsubscribe(){var t;this.hasListeners()||((t=H(this,ds))==null||t.call(this),Se(this,ds,void 0))}setEventListener(t){var n;Se(this,Lo,t),(n=H(this,ds))==null||n.call(this),Se(this,ds,t(this.setOnline.bind(this)))}setOnline(t){H(this,No)!==t&&(Se(this,No,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return H(this,No)}},No=new WeakMap,ds=new WeakMap,Lo=new WeakMap,c1),Ju=new tI;function nI(e){return Math.min(1e3*2**e,3e4)}function rj(e){return(e??"online")==="online"?Ju.isOnline():!0}var Zp=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function sj(e){let t=!1,n=0,r;const s=QO(),i=()=>s.status!=="pending",o=v=>{var x;if(!i()){const b=new Zp(v);p(b),(x=e.onCancel)==null||x.call(e,b)}},l=()=>{t=!0},c=()=>{t=!1},d=()=>JC.isFocused()&&(e.networkMode==="always"||Ju.isOnline())&&e.canRun(),f=()=>rj(e.networkMode)&&e.canRun(),h=v=>{i()||(r==null||r(),s.resolve(v))},p=v=>{i()||(r==null||r(),s.reject(v))},m=()=>new Promise(v=>{var x;r=b=>{(i()||d())&&v(b)},(x=e.onPause)==null||x.call(e)}).then(()=>{var v;r=void 0,i()||(v=e.onContinue)==null||v.call(e)}),g=()=>{if(i())return;let v;const x=n===0?e.initialPromise:void 0;try{v=x??e.fn()}catch(b){v=Promise.reject(b)}Promise.resolve(v).then(h).catch(b=>{var C;if(i())return;const y=e.retry??(nj.isServer()?0:3),w=e.retryDelay??nI,S=typeof w=="function"?w(n,b):w,k=y===!0||typeof y=="number"&&n<y||typeof y=="function"&&y(n,b);if(t||!k){p(b);return}n++,(C=e.onFail)==null||C.call(e,n,b),GO(S).then(()=>d()?void 0:m()).then(()=>{t?p(b):g()})})};return{promise:s,status:()=>s.status,cancel:o,continue:()=>(r==null||r(),s),cancelRetry:l,continueRetry:c,canStart:f,start:()=>(f()?g():m().then(g),s)}}var hi,u1,ij=(u1=class{constructor(){Te(this,hi)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),UO(this.gcTime)&&Se(this,hi,Kp.setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(nj.isServer()?1/0:5*60*1e3))}clearGcTimeout(){H(this,hi)!==void 0&&(Kp.clearTimeout(H(this,hi)),Se(this,hi,void 0))}},hi=new WeakMap,u1);function rI(e){return{onFetch:(t,n)=>{var f,h,p,m,g;const r=t.options,s=(p=(h=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:h.fetchMore)==null?void 0:p.direction,i=((m=t.state.data)==null?void 0:m.pages)||[],o=((g=t.state.data)==null?void 0:g.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const d=async()=>{let v=!1;const x=w=>{XO(w,()=>t.signal,()=>v=!0)},b=tj(t.options,t.fetchOptions),y=async(w,S,k)=>{if(v)return Promise.reject(t.signal.reason);if(S==null&&w.pages.length)return Promise.resolve(w);const j=(()=>{const R={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};return x(R),R})(),E=await b(j),{maxPages:L}=t.options,N=k?YO:ZO;return{pages:N(w.pages,E,L),pageParams:N(w.pageParams,S,L)}};if(s&&i.length){const w=s==="backward",S=w?sI:Vx,k={pages:i,pageParams:o},C=S(r,k);l=await y(k,C,w)}else{const w=e??i.length;do{const S=c===0?o[0]??r.initialPageParam:Vx(r,l);if(c>0&&S==null)break;l=await y(l,S),c++}while(c<w)}return l};t.options.persister?t.fetchFn=()=>{var v,x;return(x=(v=t.options).persister)==null?void 0:x.call(v,d,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=d}}}function Vx(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function sI(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var Po,pi,To,xn,mi,ft,Fl,gi,nn,oj,Er,d1,iI=(d1=class extends ij{constructor(t){super();Te(this,nn);Te(this,Po);Te(this,pi);Te(this,To);Te(this,xn);Te(this,mi);Te(this,ft);Te(this,Fl);Te(this,gi);Se(this,gi,!1),Se(this,Fl,t.defaultOptions),this.setOptions(t.options),this.observers=[],Se(this,mi,t.client),Se(this,xn,H(this,mi).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Se(this,pi,Ux(this.options)),this.state=t.state??H(this,pi),this.scheduleGc()}get meta(){return this.options.meta}get queryType(){return H(this,Po)}get promise(){var t;return(t=H(this,ft))==null?void 0:t.promise}setOptions(t){if(this.options={...H(this,Fl),...t},t!=null&&t._type&&Se(this,Po,t._type),this.updateGcTime(this.options.gcTime),this.state&&this.state.data===void 0){const n=Ux(this.options);n.data!==void 0&&(this.setState($x(n.data,n.dataUpdatedAt)),Se(this,pi,n))}}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&H(this,xn).remove(this)}setData(t,n){const r=qO(this.state.data,t,this.options);return yt(this,nn,Er).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t){yt(this,nn,Er).call(this,{type:"setState",state:t})}cancel(t){var r,s;const n=(r=H(this,ft))==null?void 0:r.promise;return(s=H(this,ft))==null||s.cancel(t),n?n.then(Fn).catch(Fn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}get resetState(){return H(this,pi)}reset(){this.destroy(),this.setState(this.resetState)}isActive(){return this.observers.some(t=>WO(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===n0||!this.isFetched()}isFetched(){return this.state.dataUpdateCount+this.state.errorUpdateCount>0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Gp(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!HO(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=H(this,ft))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=H(this,ft))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),H(this,xn).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(H(this,ft)&&(H(this,gi)||yt(this,nn,oj).call(this)?H(this,ft).cancel({revert:!0}):H(this,ft).cancelRetry()),this.scheduleGc()),H(this,xn).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||yt(this,nn,Er).call(this,{type:"invalidate"})}async fetch(t,n){var d,f,h,p,m,g,v,x,b,y,w;if(this.state.fetchStatus!=="idle"&&((d=H(this,ft))==null?void 0:d.status())!=="rejected"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(H(this,ft))return H(this,ft).continueRetry(),H(this,ft).promise}if(t&&this.setOptions(t),!this.options.queryFn){const S=this.observers.find(k=>k.options.queryFn);S&&this.setOptions(S.options)}const r=new AbortController,s=S=>{Object.defineProperty(S,"signal",{enumerable:!0,get:()=>(Se(this,gi,!0),r.signal)})},i=()=>{const S=tj(this.options,n),C=(()=>{const j={client:H(this,mi),queryKey:this.queryKey,meta:this.meta};return s(j),j})();return Se(this,gi,!1),this.options.persister?this.options.persister(S,C,this):S(C)},l=(()=>{const S={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:H(this,mi),state:this.state,fetchFn:i};return s(S),S})(),c=H(this,Po)==="infinite"?rI(this.options.pages):this.options.behavior;c==null||c.onFetch(l,this),Se(this,To,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=l.fetchOptions)==null?void 0:f.meta))&&yt(this,nn,Er).call(this,{type:"fetch",meta:(h=l.fetchOptions)==null?void 0:h.meta}),Se(this,ft,sj({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,onCancel:S=>{S instanceof Zp&&S.revert&&this.setState({...H(this,To),fetchStatus:"idle"}),r.abort()},onFail:(S,k)=>{yt(this,nn,Er).call(this,{type:"failed",failureCount:S,error:k})},onPause:()=>{yt(this,nn,Er).call(this,{type:"pause"})},onContinue:()=>{yt(this,nn,Er).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0}));try{const S=await H(this,ft).start();if(S===void 0)throw new Error(`${this.queryHash} data is undefined`);return this.setData(S),(m=(p=H(this,xn).config).onSuccess)==null||m.call(p,S,this),(v=(g=H(this,xn).config).onSettled)==null||v.call(g,S,this.state.error,this),S}catch(S){if(S instanceof Zp){if(S.silent)return H(this,ft).promise;if(S.revert){if(this.state.data===void 0)throw S;return this.state.data}}throw yt(this,nn,Er).call(this,{type:"error",error:S}),(b=(x=H(this,xn).config).onError)==null||b.call(x,S,this),(w=(y=H(this,xn).config).onSettled)==null||w.call(y,this.state.data,S,this),S}finally{this.scheduleGc()}}},Po=new WeakMap,pi=new WeakMap,To=new WeakMap,xn=new WeakMap,mi=new WeakMap,ft=new WeakMap,Fl=new WeakMap,gi=new WeakMap,nn=new WeakSet,oj=function(){return this.state.fetchStatus==="paused"&&this.state.status==="pending"},Er=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...oI(r.data,this.options),fetchMeta:t.meta??null};case"success":const s={...r,...$x(t.data,t.dataUpdatedAt),dataUpdateCount:r.dataUpdateCount+1,...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};return Se(this,To,t.manual?s:void 0),s;case"error":const i=t.error;return{...r,error:i,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:i,fetchStatus:"idle",status:"error",isInvalidated:!0};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),Dt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),H(this,xn).notify({query:this,type:"updated",action:t})})},d1);function oI(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:rj(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function $x(e,t){return{data:e,dataUpdatedAt:t??Date.now(),error:null,isInvalidated:!1,status:"success"}}function Ux(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var zl,rr,Tt,vi,sr,Jr,f1,aI=(f1=class extends ij{constructor(t){super();Te(this,sr);Te(this,zl);Te(this,rr);Te(this,Tt);Te(this,vi);Se(this,zl,t.client),this.mutationId=t.mutationId,Se(this,Tt,t.mutationCache),Se(this,rr,[]),this.state=t.state||lI(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){H(this,rr).includes(t)||(H(this,rr).push(t),this.clearGcTimeout(),H(this,Tt).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Se(this,rr,H(this,rr).filter(n=>n!==t)),this.scheduleGc(),H(this,Tt).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){H(this,rr).length||(this.state.status==="pending"?this.scheduleGc():H(this,Tt).remove(this))}continue(){var t;return((t=H(this,vi))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var o,l,c,d,f,h,p,m,g,v,x,b,y,w,S,k,C,j;const n=()=>{yt(this,sr,Jr).call(this,{type:"continue"})},r={client:H(this,zl),meta:this.options.meta,mutationKey:this.options.mutationKey};Se(this,vi,sj({fn:()=>this.options.mutationFn?this.options.mutationFn(t,r):Promise.reject(new Error("No mutationFn found")),onFail:(E,L)=>{yt(this,sr,Jr).call(this,{type:"failed",failureCount:E,error:L})},onPause:()=>{yt(this,sr,Jr).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>H(this,Tt).canRun(this)}));const s=this.state.status==="pending",i=!H(this,vi).canStart();try{if(s)n();else{yt(this,sr,Jr).call(this,{type:"pending",variables:t,isPaused:i}),H(this,Tt).config.onMutate&&await H(this,Tt).config.onMutate(t,this,r);const L=await((l=(o=this.options).onMutate)==null?void 0:l.call(o,t,r));L!==this.state.context&&yt(this,sr,Jr).call(this,{type:"pending",context:L,variables:t,isPaused:i})}const E=await H(this,vi).start();return await((d=(c=H(this,Tt).config).onSuccess)==null?void 0:d.call(c,E,t,this.state.context,this,r)),await((h=(f=this.options).onSuccess)==null?void 0:h.call(f,E,t,this.state.context,r)),await((m=(p=H(this,Tt).config).onSettled)==null?void 0:m.call(p,E,null,this.state.variables,this.state.context,this,r)),await((v=(g=this.options).onSettled)==null?void 0:v.call(g,E,null,t,this.state.context,r)),yt(this,sr,Jr).call(this,{type:"success",data:E}),E}catch(E){try{await((b=(x=H(this,Tt).config).onError)==null?void 0:b.call(x,E,t,this.state.context,this,r))}catch(L){Promise.reject(L)}try{await((w=(y=this.options).onError)==null?void 0:w.call(y,E,t,this.state.context,r))}catch(L){Promise.reject(L)}try{await((k=(S=H(this,Tt).config).onSettled)==null?void 0:k.call(S,void 0,E,this.state.variables,this.state.context,this,r))}catch(L){Promise.reject(L)}try{await((j=(C=this.options).onSettled)==null?void 0:j.call(C,void 0,E,t,this.state.context,r))}catch(L){Promise.reject(L)}throw yt(this,sr,Jr).call(this,{type:"error",error:E}),E}finally{H(this,Tt).runNext(this)}}},zl=new WeakMap,rr=new WeakMap,Tt=new WeakMap,vi=new WeakMap,sr=new WeakSet,Jr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),Dt.batch(()=>{H(this,rr).forEach(r=>{r.onMutationUpdate(t)}),H(this,Tt).notify({mutation:this,type:"updated",action:t})})},f1);function lI(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Pr,zn,Bl,h1,cI=(h1=class extends Jd{constructor(t={}){super();Te(this,Pr);Te(this,zn);Te(this,Bl);this.config=t,Se(this,Pr,new Set),Se(this,zn,new Map),Se(this,Bl,0)}build(t,n,r){const s=new aI({client:t,mutationCache:this,mutationId:++hc(this,Bl)._,options:t.defaultMutationOptions(n),state:r});return this.add(s),s}add(t){H(this,Pr).add(t);const n=Ic(t);if(typeof n=="string"){const r=H(this,zn).get(n);r?r.push(t):H(this,zn).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(H(this,Pr).delete(t)){const n=Ic(t);if(typeof n=="string"){const r=H(this,zn).get(n);if(r)if(r.length>1){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}else r[0]===t&&H(this,zn).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Ic(t);if(typeof n=="string"){const r=H(this,zn).get(n),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===t}else return!0}runNext(t){var r;const n=Ic(t);if(typeof n=="string"){const s=(r=H(this,zn).get(n))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){Dt.batch(()=>{H(this,Pr).forEach(t=>{this.notify({type:"removed",mutation:t})}),H(this,Pr).clear(),H(this,zn).clear()})}getAll(){return Array.from(H(this,Pr))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Fx(n,r))}findAll(t={}){return this.getAll().filter(n=>Fx(t,n))}notify(t){Dt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return Dt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Fn))))}},Pr=new WeakMap,zn=new WeakMap,Bl=new WeakMap,h1);function Ic(e){var t;return(t=e.options.scope)==null?void 0:t.id}var ir,p1,uI=(p1=class extends Jd{constructor(t={}){super();Te(this,ir);this.config=t,Se(this,ir,new Map)}build(t,n,r){const s=n.queryKey,i=n.queryHash??t0(s,n);let o=this.get(i);return o||(o=new iI({client:t,queryKey:s,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(s)}),this.add(o)),o}add(t){H(this,ir).has(t.queryHash)||(H(this,ir).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=H(this,ir).get(t.queryHash);n&&(t.destroy(),n===t&&H(this,ir).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){Dt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return H(this,ir).get(t)}getAll(){return[...H(this,ir).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>_x(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>_x(t,r)):n}notify(t){Dt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){Dt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){Dt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},ir=new WeakMap,p1),nt,fs,hs,Mo,Ro,ps,Ao,Oo,m1,dI=(m1=class{constructor(e={}){Te(this,nt);Te(this,fs);Te(this,hs);Te(this,Mo);Te(this,Ro);Te(this,ps);Te(this,Ao);Te(this,Oo);Se(this,nt,e.queryCache||new uI),Se(this,fs,e.mutationCache||new cI),Se(this,hs,e.defaultOptions||{}),Se(this,Mo,new Map),Se(this,Ro,new Map),Se(this,ps,0)}mount(){hc(this,ps)._++,H(this,ps)===1&&(Se(this,Ao,JC.subscribe(async e=>{e&&(await this.resumePausedMutations(),H(this,nt).onFocus())})),Se(this,Oo,Ju.subscribe(async e=>{e&&(await this.resumePausedMutations(),H(this,nt).onOnline())})))}unmount(){var e,t;hc(this,ps)._--,H(this,ps)===0&&((e=H(this,Ao))==null||e.call(this),Se(this,Ao,void 0),(t=H(this,Oo))==null||t.call(this),Se(this,Oo,void 0))}isFetching(e){return H(this,nt).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return H(this,fs).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=H(this,nt).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=H(this,nt).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Gp(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return H(this,nt).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),s=H(this,nt).get(r.queryHash),i=s==null?void 0:s.state.data,o=$O(t,i);if(o!==void 0)return H(this,nt).build(this,r).setData(o,{...n,manual:!0})}setQueriesData(e,t,n){return Dt.batch(()=>H(this,nt).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=H(this,nt).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=H(this,nt);Dt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=H(this,nt);return Dt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=Dt.batch(()=>H(this,nt).findAll(e).map(s=>s.cancel(n)));return Promise.all(r).then(Fn).catch(Fn)}invalidateQueries(e,t={}){return Dt.batch(()=>(H(this,nt).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=Dt.batch(()=>H(this,nt).findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,n);return n.throwOnError||(i=i.catch(Fn)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Fn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=H(this,nt).build(this,t);return n.isStaleByTime(Gp(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Fn).catch(Fn)}fetchInfiniteQuery(e){return e._type="infinite",this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Fn).catch(Fn)}ensureInfiniteQueryData(e){return e._type="infinite",this.ensureQueryData(e)}resumePausedMutations(){return Ju.isOnline()?H(this,fs).resumePausedMutations():Promise.resolve()}getQueryCache(){return H(this,nt)}getMutationCache(){return H(this,fs)}getDefaultOptions(){return H(this,hs)}setDefaultOptions(e){Se(this,hs,e)}setQueryDefaults(e,t){H(this,Mo).set(Ll(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...H(this,Mo).values()],n={};return t.forEach(r=>{Pl(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){H(this,Ro).set(Ll(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...H(this,Ro).values()],n={};return t.forEach(r=>{Pl(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...H(this,hs).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=t0(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===n0&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...H(this,hs).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){H(this,nt).clear(),H(this,fs).clear()}},nt=new WeakMap,fs=new WeakMap,hs=new WeakMap,Mo=new WeakMap,Ro=new WeakMap,ps=new WeakMap,Ao=new WeakMap,Oo=new WeakMap,m1),fI=u.createContext(void 0),hI=({client:e,children:t})=>(u.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),a.jsx(fI.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Tl(){return Tl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Tl.apply(this,arguments)}var vs;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vs||(vs={}));const Hx="popstate";function pI(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:o,hash:l}=r.location;return Yp("",{pathname:i,search:o,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:ed(s)}return gI(t,n,null,e)}function et(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function r0(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function mI(){return Math.random().toString(36).substr(2,8)}function Wx(e,t){return{usr:e.state,key:e.key,idx:t}}function Yp(e,t,n,r){return n===void 0&&(n=null),Tl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?na(t):t,{state:n,key:t&&t.key||r||mI()})}function ed(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function na(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function gI(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,o=s.history,l=vs.Pop,c=null,d=f();d==null&&(d=0,o.replaceState(Tl({},o.state,{idx:d}),""));function f(){return(o.state||{idx:null}).idx}function h(){l=vs.Pop;let x=f(),b=x==null?null:x-d;d=x,c&&c({action:l,location:v.location,delta:b})}function p(x,b){l=vs.Push;let y=Yp(v.location,x,b);d=f()+1;let w=Wx(y,d),S=v.createHref(y);try{o.pushState(w,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(S)}i&&c&&c({action:l,location:v.location,delta:1})}function m(x,b){l=vs.Replace;let y=Yp(v.location,x,b);d=f();let w=Wx(y,d),S=v.createHref(y);o.replaceState(w,"",S),i&&c&&c({action:l,location:v.location,delta:0})}function g(x){let b=s.location.origin!=="null"?s.location.origin:s.location.href,y=typeof x=="string"?x:ed(x);return y=y.replace(/ $/,"%20"),et(b,"No window.location.(origin|href) available to create URL for href: "+y),new URL(y,b)}let v={get action(){return l},get location(){return e(s,o)},listen(x){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Hx,h),c=x,()=>{s.removeEventListener(Hx,h),c=null}},createHref(x){return t(s,x)},createURL:g,encodeLocation(x){let b=g(x);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:m,go(x){return o.go(x)}};return v}var Kx;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Kx||(Kx={}));function vI(e,t,n){return n===void 0&&(n="/"),xI(e,t,n)}function xI(e,t,n,r){let s=typeof t=="string"?na(t):t,i=Ho(s.pathname||"/",n);if(i==null)return null;let o=aj(e);yI(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let d=TI(i);l=LI(o[c],d)}return l}function aj(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,o,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:o,route:i};c.relativePath.startsWith("/")&&(et(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let d=Rs([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(et(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+d+'".')),aj(i.children,t,f,d)),!(i.path==null&&!i.index)&&t.push({path:d,score:EI(d,i.index),routesMeta:f})};return e.forEach((i,o)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,o);else for(let c of lj(i.path))s(i,o,c)}),t}function lj(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let o=lj(r.join("/")),l=[];return l.push(...o.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function yI(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:NI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const bI=/^:[\w-]+$/,wI=3,SI=2,kI=1,CI=10,jI=-2,Gx=e=>e==="*";function EI(e,t){let n=e.split("/"),r=n.length;return n.some(Gx)&&(r+=jI),t&&(r+=SI),n.filter(s=>!Gx(s)).reduce((s,i)=>s+(bI.test(i)?wI:i===""?kI:CI),r)}function NI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function LI(e,t,n){let{routesMeta:r}=e,s={},i="/",o=[];for(let l=0;l<r.length;++l){let c=r[l],d=l===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=Xp({path:c.relativePath,caseSensitive:c.caseSensitive,end:d},f),p=c.route;if(!h)return null;Object.assign(s,h.params),o.push({params:s,pathname:Rs([i,h.pathname]),pathnameBase:II(Rs([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Rs([i,h.pathnameBase]))}return o}function Xp(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=PI(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],o=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((d,f,h)=>{let{paramName:p,isOptional:m}=f;if(p==="*"){let v=l[h]||"";o=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[h];return m&&!g?d[p]=void 0:d[p]=(g||"").replace(/%2F/g,"/"),d},{}),pathname:i,pathnameBase:o,pattern:e}}function PI(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),r0(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function TI(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return r0(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ho(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}const MI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,RI=e=>MI.test(e);function AI(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?na(e):e,i;if(n)if(RI(n))i=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),r0(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?i=qx(n.substring(1),"/"):i=qx(n,t)}else i=t;return{pathname:i,search:DI(r),hash:_I(s)}}function qx(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function sh(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function OI(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function s0(e,t){let n=OI(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function i0(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=na(e):(s=Tl({},e),et(!s.pathname||!s.pathname.includes("?"),sh("?","pathname","search",s)),et(!s.pathname||!s.pathname.includes("#"),sh("#","pathname","hash",s)),et(!s.search||!s.search.includes("#"),sh("#","search","hash",s)));let i=e===""||s.pathname==="",o=i?"/":s.pathname,l;if(o==null)l=n;else{let h=t.length-1;if(!r&&o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;s.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=AI(s,l),d=o&&o!=="/"&&o.endsWith("/"),f=(i||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(d||f)&&(c.pathname+="/"),c}const Rs=e=>e.join("/").replace(/\/\/+/g,"/"),II=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),DI=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,_I=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function FI(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cj=["post","put","patch","delete"];new Set(cj);const zI=["get",...cj];new Set(zI);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ml(){return Ml=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ml.apply(this,arguments)}const ef=u.createContext(null),uj=u.createContext(null),Wr=u.createContext(null),tf=u.createContext(null),Kr=u.createContext({outlet:null,matches:[],isDataRoute:!1}),dj=u.createContext(null);function BI(e,t){let{relative:n}=t===void 0?{}:t;ra()||et(!1);let{basename:r,navigator:s}=u.useContext(Wr),{hash:i,pathname:o,search:l}=nf(e,{relative:n}),c=o;return r!=="/"&&(c=o==="/"?r:Rs([r,o])),s.createHref({pathname:c,search:l,hash:i})}function ra(){return u.useContext(tf)!=null}function xr(){return ra()||et(!1),u.useContext(tf).location}function fj(e){u.useContext(Wr).static||u.useLayoutEffect(e)}function Gr(){let{isDataRoute:e}=u.useContext(Kr);return e?JI():VI()}function VI(){ra()||et(!1);let e=u.useContext(ef),{basename:t,future:n,navigator:r}=u.useContext(Wr),{matches:s}=u.useContext(Kr),{pathname:i}=xr(),o=JSON.stringify(s0(s,n.v7_relativeSplatPath)),l=u.useRef(!1);return fj(()=>{l.current=!0}),u.useCallback(function(d,f){if(f===void 0&&(f={}),!l.current)return;if(typeof d=="number"){r.go(d);return}let h=i0(d,JSON.parse(o),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Rs([t,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[t,r,o,i,e])}function hj(){let{matches:e}=u.useContext(Kr),t=e[e.length-1];return t?t.params:{}}function nf(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=u.useContext(Wr),{matches:s}=u.useContext(Kr),{pathname:i}=xr(),o=JSON.stringify(s0(s,r.v7_relativeSplatPath));return u.useMemo(()=>i0(e,JSON.parse(o),i,n==="path"),[e,o,i,n])}function $I(e,t){return UI(e,t)}function UI(e,t,n,r){ra()||et(!1);let{navigator:s}=u.useContext(Wr),{matches:i}=u.useContext(Kr),o=i[i.length-1],l=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:"/";o&&o.route;let d=xr(),f;if(t){var h;let x=typeof t=="string"?na(t):t;c==="/"||(h=x.pathname)!=null&&h.startsWith(c)||et(!1),f=x}else f=d;let p=f.pathname||"/",m=p;if(c!=="/"){let x=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(x.length).join("/")}let g=vI(e,{pathname:m}),v=qI(g&&g.map(x=>Object.assign({},x,{params:Object.assign({},l,x.params),pathname:Rs([c,s.encodeLocation?s.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?c:Rs([c,s.encodeLocation?s.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),i,n,r);return t&&v?u.createElement(tf.Provider,{value:{location:Ml({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:vs.Pop}},v):v}function HI(){let e=QI(),t=FI(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:s},n):null,null)}const WI=u.createElement(HI,null);class KI extends u.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?u.createElement(Kr.Provider,{value:this.props.routeContext},u.createElement(dj.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function GI(e){let{routeContext:t,match:n,children:r}=e,s=u.useContext(ef);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),u.createElement(Kr.Provider,{value:t},r)}function qI(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=o.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||et(!1),o=o.slice(0,Math.min(o.length,f+1))}let c=!1,d=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let h=o[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(d=f),h.route.id){let{loaderData:p,errors:m}=n,g=h.route.loader&&p[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||g){c=!0,d>=0?o=o.slice(0,d+1):o=[o[0]];break}}}return o.reduceRight((f,h,p)=>{let m,g=!1,v=null,x=null;n&&(m=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||WI,c&&(d<0&&p===0?(eD("route-fallback"),g=!0,x=null):d===p&&(g=!0,x=h.route.hydrateFallbackElement||null)));let b=t.concat(o.slice(0,p+1)),y=()=>{let w;return m?w=v:g?w=x:h.route.Component?w=u.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=f,u.createElement(GI,{match:h,routeContext:{outlet:f,matches:b,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?u.createElement(KI,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:y(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):y()},null)}var pj=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(pj||{}),mj=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(mj||{});function ZI(e){let t=u.useContext(ef);return t||et(!1),t}function YI(e){let t=u.useContext(uj);return t||et(!1),t}function XI(e){let t=u.useContext(Kr);return t||et(!1),t}function gj(e){let t=XI(),n=t.matches[t.matches.length-1];return n.route.id||et(!1),n.route.id}function QI(){var e;let t=u.useContext(dj),n=YI(),r=gj();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function JI(){let{router:e}=ZI(pj.UseNavigateStable),t=gj(mj.UseNavigateStable),n=u.useRef(!1);return fj(()=>{n.current=!0}),u.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Ml({fromRouteId:t},i)))},[e,t])}const Zx={};function eD(e,t,n){Zx[e]||(Zx[e]=!0)}function tD(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Qp(e){let{to:t,replace:n,state:r,relative:s}=e;ra()||et(!1);let{future:i,static:o}=u.useContext(Wr),{matches:l}=u.useContext(Kr),{pathname:c}=xr(),d=Gr(),f=i0(t,s0(l,i.v7_relativeSplatPath),c,s==="path"),h=JSON.stringify(f);return u.useEffect(()=>d(JSON.parse(h),{replace:n,state:r,relative:s}),[d,h,s,n,r]),null}function Ot(e){et(!1)}function nD(e){let{basename:t="/",children:n=null,location:r,navigationType:s=vs.Pop,navigator:i,static:o=!1,future:l}=e;ra()&&et(!1);let c=t.replace(/^\/*/,"/"),d=u.useMemo(()=>({basename:c,navigator:i,static:o,future:Ml({v7_relativeSplatPath:!1},l)}),[c,l,i,o]);typeof r=="string"&&(r=na(r));let{pathname:f="/",search:h="",hash:p="",state:m=null,key:g="default"}=r,v=u.useMemo(()=>{let x=Ho(f,c);return x==null?null:{location:{pathname:x,search:h,hash:p,state:m,key:g},navigationType:s}},[c,f,h,p,m,g,s]);return v==null?null:u.createElement(Wr.Provider,{value:d},u.createElement(tf.Provider,{children:n,value:v}))}function rD(e){let{children:t,location:n}=e;return $I(Jp(t),n)}new Promise(()=>{});function Jp(e,t){t===void 0&&(t=[]);let n=[];return u.Children.forEach(e,(r,s)=>{if(!u.isValidElement(r))return;let i=[...t,s];if(r.type===u.Fragment){n.push.apply(n,Jp(r.props.children,i));return}r.type!==Ot&&et(!1),!r.props.index||!r.props.children||et(!1);let o={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Jp(r.props.children,i)),n.push(o)}),n}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function td(){return td=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},td.apply(this,arguments)}function vj(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function sD(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function iD(e,t){return e.button===0&&(!t||t==="_self")&&!sD(e)}const oD=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],aD=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],lD="6";try{window.__reactRouterVersion=lD}catch{}const cD=u.createContext({isTransitioning:!1}),uD="startTransition",Yx=Ed[uD];function dD(e){let{basename:t,children:n,future:r,window:s}=e,i=u.useRef();i.current==null&&(i.current=pI({window:s,v5Compat:!0}));let o=i.current,[l,c]=u.useState({action:o.action,location:o.location}),{v7_startTransition:d}=r||{},f=u.useCallback(h=>{d&&Yx?Yx(()=>c(h)):c(h)},[c,d]);return u.useLayoutEffect(()=>o.listen(f),[o,f]),u.useEffect(()=>tD(r),[r]),u.createElement(nD,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const fD=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,pD=u.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:o,state:l,target:c,to:d,preventScrollReset:f,viewTransition:h}=t,p=vj(t,oD),{basename:m}=u.useContext(Wr),g,v=!1;if(typeof d=="string"&&hD.test(d)&&(g=d,fD))try{let w=new URL(window.location.href),S=d.startsWith("//")?new URL(w.protocol+d):new URL(d),k=Ho(S.pathname,m);S.origin===w.origin&&k!=null?d=k+S.search+S.hash:v=!0}catch{}let x=BI(d,{relative:s}),b=vD(d,{replace:o,state:l,target:c,preventScrollReset:f,relative:s,viewTransition:h});function y(w){r&&r(w),w.defaultPrevented||b(w)}return u.createElement("a",td({},p,{href:g||x,onClick:v||i?r:y,ref:n,target:c}))}),mD=u.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:o=!1,style:l,to:c,viewTransition:d,children:f}=t,h=vj(t,aD),p=nf(c,{relative:h.relative}),m=xr(),g=u.useContext(uj),{navigator:v,basename:x}=u.useContext(Wr),b=g!=null&&xD(p)&&d===!0,y=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,w=m.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;s||(w=w.toLowerCase(),S=S?S.toLowerCase():null,y=y.toLowerCase()),S&&x&&(S=Ho(S,x)||S);const k=y!=="/"&&y.endsWith("/")?y.length-1:y.length;let C=w===y||!o&&w.startsWith(y)&&w.charAt(k)==="/",j=S!=null&&(S===y||!o&&S.startsWith(y)&&S.charAt(y.length)==="/"),E={isActive:C,isPending:j,isTransitioning:b},L=C?r:void 0,N;typeof i=="function"?N=i(E):N=[i,C?"active":null,j?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let R=typeof l=="function"?l(E):l;return u.createElement(pD,td({},h,{"aria-current":L,className:N,ref:n,style:R,to:c,viewTransition:d}),typeof f=="function"?f(E):f)});var em;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(em||(em={}));var Xx;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Xx||(Xx={}));function gD(e){let t=u.useContext(ef);return t||et(!1),t}function vD(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:o,viewTransition:l}=t===void 0?{}:t,c=Gr(),d=xr(),f=nf(e,{relative:o});return u.useCallback(h=>{if(iD(h,n)){h.preventDefault();let p=r!==void 0?r:ed(d)===ed(f);c(e,{replace:p,state:s,preventScrollReset:i,relative:o,viewTransition:l})}},[d,c,f,r,s,n,e,i,o,l])}function xD(e,t){t===void 0&&(t={});let n=u.useContext(cD);n==null&&et(!1);let{basename:r}=gD(em.useViewTransitionState),s=nf(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Ho(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Ho(n.nextLocation.pathname,r)||n.nextLocation.pathname;return Xp(s.pathname,o)!=null||Xp(s.pathname,i)!=null}function xj(e,t){return function(){return e.apply(t,arguments)}}const{toString:yD}=Object.prototype,{getPrototypeOf:rf}=Object,{iterator:sf,toStringTag:yj}=Symbol,of=(e=>t=>{const n=yD.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),Zn=e=>(e=e.toLowerCase(),t=>of(t)===e),af=e=>t=>typeof t===e,{isArray:sa}=Array,Wo=af("undefined");function Ql(e){return e!==null&&!Wo(e)&&e.constructor!==null&&!Wo(e.constructor)&&Yt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const bj=Zn("ArrayBuffer");function bD(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&bj(e.buffer),t}const wD=af("string"),Yt=af("function"),wj=af("number"),Jl=e=>e!==null&&typeof e=="object",SD=e=>e===!0||e===!1,du=e=>{if(of(e)!=="object")return!1;const t=rf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(yj in e)&&!(sf in e)},kD=e=>{if(!Jl(e)||Ql(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},CD=Zn("Date"),jD=Zn("File"),ED=e=>!!(e&&typeof e.uri<"u"),ND=e=>e&&typeof e.getParts<"u",LD=Zn("Blob"),PD=Zn("FileList"),TD=e=>Jl(e)&&Yt(e.pipe);function MD(){return typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{}}const Qx=MD(),Jx=typeof Qx.FormData<"u"?Qx.FormData:void 0,RD=e=>{if(!e)return!1;if(Jx&&e instanceof Jx)return!0;const t=rf(e);if(!t||t===Object.prototype||!Yt(e.append))return!1;const n=of(e);return n==="formdata"||n==="object"&&Yt(e.toString)&&e.toString()==="[object FormData]"},AD=Zn("URLSearchParams"),[OD,ID,DD,_D]=["ReadableStream","Request","Response","Headers"].map(Zn),FD=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ec(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),sa(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(Ql(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let l;for(r=0;r<o;r++)l=i[r],t.call(null,e[l],l,e)}}function Sj(e,t){if(Ql(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ci=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,kj=e=>!Wo(e)&&e!==ci;function tm(){const{caseless:e,skipUndefined:t}=kj(this)&&this||{},n={},r=(s,i)=>{if(i==="__proto__"||i==="constructor"||i==="prototype")return;const o=e&&Sj(n,i)||i;du(n[o])&&du(s)?n[o]=tm(n[o],s):du(s)?n[o]=tm({},s):sa(s)?n[o]=s.slice():(!t||!Wo(s))&&(n[o]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&ec(arguments[s],r);return n}const zD=(e,t,n,{allOwnKeys:r}={})=>(ec(t,(s,i)=>{n&&Yt(s)?Object.defineProperty(e,i,{value:xj(s,n),writable:!0,enumerable:!0,configurable:!0}):Object.defineProperty(e,i,{value:s,writable:!0,enumerable:!0,configurable:!0})},{allOwnKeys:r}),e),BD=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),VD=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),Object.defineProperty(e.prototype,"constructor",{value:e,writable:!0,enumerable:!1,configurable:!0}),Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},$D=(e,t,n,r)=>{let s,i,o;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!l[o]&&(t[o]=e[o],l[o]=!0);e=n!==!1&&rf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},UD=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},HD=e=>{if(!e)return null;if(sa(e))return e;let t=e.length;if(!wj(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},WD=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&rf(Uint8Array)),KD=(e,t)=>{const r=(e&&e[sf]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},GD=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},qD=Zn("HTMLFormElement"),ZD=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),ey=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),YD=Zn("RegExp"),Cj=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ec(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},XD=e=>{Cj(e,(t,n)=>{if(Yt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Yt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},QD=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return sa(e)?r(e):r(String(e).split(t)),n},JD=()=>{},e4=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function t4(e){return!!(e&&Yt(e.append)&&e[yj]==="FormData"&&e[sf])}const n4=e=>{const t=new Array(10),n=(r,s)=>{if(Jl(r)){if(t.indexOf(r)>=0)return;if(Ql(r))return r;if(!("toJSON"in r)){t[s]=r;const i=sa(r)?[]:{};return ec(r,(o,l)=>{const c=n(o,s+1);!Wo(c)&&(i[l]=c)}),t[s]=void 0,i}}return r};return n(e,0)},r4=Zn("AsyncFunction"),s4=e=>e&&(Jl(e)||Yt(e))&&Yt(e.then)&&Yt(e.catch),jj=((e,t)=>e?setImmediate:t?((n,r)=>(ci.addEventListener("message",({source:s,data:i})=>{s===ci&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),ci.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Yt(ci.postMessage)),i4=typeof queueMicrotask<"u"?queueMicrotask.bind(ci):typeof process<"u"&&process.nextTick||jj,o4=e=>e!=null&&Yt(e[sf]),B={isArray:sa,isArrayBuffer:bj,isBuffer:Ql,isFormData:RD,isArrayBufferView:bD,isString:wD,isNumber:wj,isBoolean:SD,isObject:Jl,isPlainObject:du,isEmptyObject:kD,isReadableStream:OD,isRequest:ID,isResponse:DD,isHeaders:_D,isUndefined:Wo,isDate:CD,isFile:jD,isReactNativeBlob:ED,isReactNative:ND,isBlob:LD,isRegExp:YD,isFunction:Yt,isStream:TD,isURLSearchParams:AD,isTypedArray:WD,isFileList:PD,forEach:ec,merge:tm,extend:zD,trim:FD,stripBOM:BD,inherits:VD,toFlatObject:$D,kindOf:of,kindOfTest:Zn,endsWith:UD,toArray:HD,forEachEntry:KD,matchAll:GD,isHTMLForm:qD,hasOwnProperty:ey,hasOwnProp:ey,reduceDescriptors:Cj,freezeMethods:XD,toObjectSet:QD,toCamelCase:ZD,noop:JD,toFiniteNumber:e4,findKey:Sj,global:ci,isContextDefined:kj,isSpecCompliantForm:t4,toJSONObject:n4,isAsyncFn:r4,isThenable:s4,setImmediate:jj,asap:i4,isIterable:o4};let xe=class Ej extends Error{static from(t,n,r,s,i,o){const l=new Ej(t.message,n||t.code,r,s,i);return l.cause=t,l.name=t.name,t.status!=null&&l.status==null&&(l.status=t.status),o&&Object.assign(l,o),l}constructor(t,n,r,s,i){super(t),Object.defineProperty(this,"message",{value:t,enumerable:!0,writable:!0,configurable:!0}),this.name="AxiosError",this.isAxiosError=!0,n&&(this.code=n),r&&(this.config=r),s&&(this.request=s),i&&(this.response=i,this.status=i.status)}toJSON(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}};xe.ERR_BAD_OPTION_VALUE="ERR_BAD_OPTION_VALUE";xe.ERR_BAD_OPTION="ERR_BAD_OPTION";xe.ECONNABORTED="ECONNABORTED";xe.ETIMEDOUT="ETIMEDOUT";xe.ERR_NETWORK="ERR_NETWORK";xe.ERR_FR_TOO_MANY_REDIRECTS="ERR_FR_TOO_MANY_REDIRECTS";xe.ERR_DEPRECATED="ERR_DEPRECATED";xe.ERR_BAD_RESPONSE="ERR_BAD_RESPONSE";xe.ERR_BAD_REQUEST="ERR_BAD_REQUEST";xe.ERR_CANCELED="ERR_CANCELED";xe.ERR_NOT_SUPPORT="ERR_NOT_SUPPORT";xe.ERR_INVALID_URL="ERR_INVALID_URL";xe.ERR_FORM_DATA_DEPTH_EXCEEDED="ERR_FORM_DATA_DEPTH_EXCEEDED";const a4=null;function nm(e){return B.isPlainObject(e)||B.isArray(e)}function Nj(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function ih(e,t,n){return e?e.concat(t).map(function(s,i){return s=Nj(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function l4(e){return B.isArray(e)&&!e.some(nm)}const c4=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function lf(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(x,b){return!B.isUndefined(b[x])});const r=n.metaTokens,s=n.visitor||h,i=n.dots,o=n.indexes,l=n.Blob||typeof Blob<"u"&&Blob,c=n.maxDepth===void 0?100:n.maxDepth,d=l&&B.isSpecCompliantForm(t);if(!B.isFunction(s))throw new TypeError("visitor must be a function");function f(v){if(v===null)return"";if(B.isDate(v))return v.toISOString();if(B.isBoolean(v))return v.toString();if(!d&&B.isBlob(v))throw new xe("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(v)||B.isTypedArray(v)?d&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function h(v,x,b){let y=v;if(B.isReactNative(t)&&B.isReactNativeBlob(v))return t.append(ih(b,x,i),f(v)),!1;if(v&&!b&&typeof v=="object"){if(B.endsWith(x,"{}"))x=r?x:x.slice(0,-2),v=JSON.stringify(v);else if(B.isArray(v)&&l4(v)||(B.isFileList(v)||B.endsWith(x,"[]"))&&(y=B.toArray(v)))return x=Nj(x),y.forEach(function(S,k){!(B.isUndefined(S)||S===null)&&t.append(o===!0?ih([x],k,i):o===null?x:x+"[]",f(S))}),!1}return nm(v)?!0:(t.append(ih(b,x,i),f(v)),!1)}const p=[],m=Object.assign(c4,{defaultVisitor:h,convertValue:f,isVisitable:nm});function g(v,x,b=0){if(!B.isUndefined(v)){if(b>c)throw new xe("Object is too deeply nested ("+b+" levels). Max depth: "+c,xe.ERR_FORM_DATA_DEPTH_EXCEEDED);if(p.indexOf(v)!==-1)throw Error("Circular reference detected in "+x.join("."));p.push(v),B.forEach(v,function(w,S){(!(B.isUndefined(w)||w===null)&&s.call(t,w,B.isString(S)?S.trim():S,x,m))===!0&&g(w,x?x.concat(S):[S],b+1)}),p.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return g(e),t}function ty(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"};return encodeURIComponent(e).replace(/[!'()~]|%20/g,function(r){return t[r]})}function o0(e,t){this._pairs=[],e&&lf(e,this,t)}const Lj=o0.prototype;Lj.append=function(t,n){this._pairs.push([t,n])};Lj.toString=function(t){const n=t?function(r){return t.call(this,r,ty)}:ty;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function u4(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function Pj(e,t,n){if(!t)return e;const r=n&&n.encode||u4,s=B.isFunction(n)?{serialize:n}:n,i=s&&s.serialize;let o;if(i?o=i(t,s):o=B.isURLSearchParams(t)?t.toString():new o0(t,s).toString(r),o){const l=e.indexOf("#");l!==-1&&(e=e.slice(0,l)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class ny{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const a0={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1,legacyInterceptorReqResOrdering:!0},d4=typeof URLSearchParams<"u"?URLSearchParams:o0,f4=typeof FormData<"u"?FormData:null,h4=typeof Blob<"u"?Blob:null,p4={isBrowser:!0,classes:{URLSearchParams:d4,FormData:f4,Blob:h4},protocols:["http","https","file","blob","url","data"]},l0=typeof window<"u"&&typeof document<"u",rm=typeof navigator=="object"&&navigator||void 0,m4=l0&&(!rm||["ReactNative","NativeScript","NS"].indexOf(rm.product)<0),g4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",v4=l0&&window.location.href||"http://localhost",x4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:l0,hasStandardBrowserEnv:m4,hasStandardBrowserWebWorkerEnv:g4,navigator:rm,origin:v4},Symbol.toStringTag,{value:"Module"})),Rt={...x4,...p4};function y4(e,t){return lf(e,new Rt.classes.URLSearchParams,{visitor:function(n,r,s,i){return Rt.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function b4(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function w4(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function Tj(e){function t(n,r,s,i){let o=n[i++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),c=i>=n.length;return o=!o&&B.isArray(s)?s.length:o,c?(B.hasOwnProp(s,o)?s[o]=B.isArray(s[o])?s[o].concat(r):[s[o],r]:s[o]=r,!l):((!s[o]||!B.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&B.isArray(s[o])&&(s[o]=w4(s[o])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,s)=>{t(b4(r),s,n,0)}),n}return null}const Ui=(e,t)=>e!=null&&B.hasOwnProp(e,t)?e[t]:void 0;function S4(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const tc={transitional:a0,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=B.isObject(t);if(i&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return s?JSON.stringify(Tj(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t)||B.isReadableStream(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){const c=Ui(this,"formSerializer");if(r.indexOf("application/x-www-form-urlencoded")>-1)return y4(t,c).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const d=Ui(this,"env"),f=d&&d.FormData;return lf(l?{"files[]":t}:t,f&&new f,c)}}return i||s?(n.setContentType("application/json",!1),S4(t)):t}],transformResponse:[function(t){const n=Ui(this,"transitional")||tc.transitional,r=n&&n.forcedJSONParsing,s=Ui(this,"responseType"),i=s==="json";if(B.isResponse(t)||B.isReadableStream(t))return t;if(t&&B.isString(t)&&(r&&!s||i)){const l=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(t,Ui(this,"parseReviver"))}catch(c){if(l)throw c.name==="SyntaxError"?xe.from(c,xe.ERR_BAD_RESPONSE,this,null,Ui(this,"response")):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rt.classes.FormData,Blob:Rt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{tc.headers[e]={}});const k4=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),C4=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&k4[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},ry=Symbol("internals"),j4=/[^\x09\x20-\x7E\x80-\xFF]/g;function E4(e){let t=0,n=e.length;for(;t<n;){const r=e.charCodeAt(t);if(r!==9&&r!==32)break;t+=1}for(;n>t;){const r=e.charCodeAt(n-1);if(r!==9&&r!==32)break;n-=1}return t===0&&n===e.length?e:e.slice(t,n)}function wa(e){return e&&String(e).trim().toLowerCase()}function N4(e){return E4(e.replace(j4,""))}function fu(e){return e===!1||e==null?e:B.isArray(e)?e.map(fu):N4(String(e))}function L4(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const P4=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function oh(e,t,n,r,s){if(B.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function T4(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function M4(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}let Xt=class{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,c,d){const f=wa(c);if(!f)throw new Error("header name must be a non-empty string");const h=B.findKey(s,f);(!h||s[h]===void 0||d===!0||d===void 0&&s[h]!==!1)&&(s[h||c]=fu(l))}const o=(l,c)=>B.forEach(l,(d,f)=>i(d,f,c));if(B.isPlainObject(t)||t instanceof this.constructor)o(t,n);else if(B.isString(t)&&(t=t.trim())&&!P4(t))o(C4(t),n);else if(B.isObject(t)&&B.isIterable(t)){let l={},c,d;for(const f of t){if(!B.isArray(f))throw TypeError("Object iterator must return a key-value pair");l[d=f[0]]=(c=l[d])?B.isArray(c)?[...c,f[1]]:[c,f[1]]:f[1]}o(l,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=wa(t),t){const r=B.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return L4(s);if(B.isFunction(n))return n.call(this,s,r);if(B.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=wa(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||oh(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=wa(o),o){const l=B.findKey(r,o);l&&(!n||oh(r,r[l],l,n))&&(delete r[l],s=!0)}}return B.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||oh(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return B.forEach(this,(s,i)=>{const o=B.findKey(r,i);if(o){n[o]=fu(s),delete n[i];return}const l=t?T4(i):String(i).trim();l!==i&&delete n[i],n[l]=fu(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[ry]=this[ry]={accessors:{}}).accessors,s=this.prototype;function i(o){const l=wa(o);r[l]||(M4(s,o),r[l]=!0)}return B.isArray(t)?t.forEach(i):i(t),this}};Xt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(Xt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});B.freezeMethods(Xt);function ah(e,t){const n=this||tc,r=t||n,s=Xt.from(r.headers);let i=r.data;return B.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function Mj(e){return!!(e&&e.__CANCEL__)}let nc=class extends xe{constructor(t,n,r){super(t??"canceled",xe.ERR_CANCELED,n,r),this.name="CanceledError",this.__CANCEL__=!0}};function Rj(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new xe("Request failed with status code "+n.status,[xe.ERR_BAD_REQUEST,xe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function R4(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function A4(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(c){const d=Date.now(),f=r[i];o||(o=d),n[s]=c,r[s]=d;let h=i,p=0;for(;h!==s;)p+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),d-o<t)return;const m=f&&d-f;return m?Math.round(p*1e3/m):void 0}}function O4(e,t){let n=0,r=1e3/t,s,i;const o=(d,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),e(...d)};return[(...d)=>{const f=Date.now(),h=f-n;h>=r?o(d,f):(s=d,i||(i=setTimeout(()=>{i=null,o(s)},r-h)))},()=>s&&o(s)]}const nd=(e,t,n=3)=>{let r=0;const s=A4(50,250);return O4(i=>{const o=i.loaded,l=i.lengthComputable?i.total:void 0,c=l!=null?Math.min(o,l):o,d=Math.max(0,c-r),f=s(d);r=Math.max(r,c);const h={loaded:c,total:l,progress:l?c/l:void 0,bytes:d,rate:f||void 0,estimated:f&&l?(l-c)/f:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(h)},n)},sy=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},iy=e=>(...t)=>B.asap(()=>e(...t)),I4=Rt.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,Rt.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(Rt.origin),Rt.navigator&&/(msie|trident)/i.test(Rt.navigator.userAgent)):()=>!0,D4=Rt.hasStandardBrowserEnv?{write(e,t,n,r,s,i,o){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];B.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),B.isString(r)&&l.push(`path=${r}`),B.isString(s)&&l.push(`domain=${s}`),i===!0&&l.push("secure"),B.isString(o)&&l.push(`SameSite=${o}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function _4(e){return typeof e!="string"?!1:/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function F4(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function Aj(e,t,n){let r=!_4(t);return e&&(r||n===!1)?F4(e,t):t}const oy=e=>e instanceof Xt?{...e}:e;function Ti(e,t){t=t||{};const n=Object.create(null);Object.defineProperty(n,"hasOwnProperty",{value:Object.prototype.hasOwnProperty,enumerable:!1,writable:!0,configurable:!0});function r(d,f,h,p){return B.isPlainObject(d)&&B.isPlainObject(f)?B.merge.call({caseless:p},d,f):B.isPlainObject(f)?B.merge({},f):B.isArray(f)?f.slice():f}function s(d,f,h,p){if(B.isUndefined(f)){if(!B.isUndefined(d))return r(void 0,d,h,p)}else return r(d,f,h,p)}function i(d,f){if(!B.isUndefined(f))return r(void 0,f)}function o(d,f){if(B.isUndefined(f)){if(!B.isUndefined(d))return r(void 0,d)}else return r(void 0,f)}function l(d,f,h){if(B.hasOwnProp(t,h))return r(d,f);if(B.hasOwnProp(e,h))return r(void 0,d)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,allowedSocketPaths:o,responseEncoding:o,validateStatus:l,headers:(d,f,h)=>s(oy(d),oy(f),h,!0)};return B.forEach(Object.keys({...e,...t}),function(f){if(f==="__proto__"||f==="constructor"||f==="prototype")return;const h=B.hasOwnProp(c,f)?c[f]:s,p=B.hasOwnProp(e,f)?e[f]:void 0,m=B.hasOwnProp(t,f)?t[f]:void 0,g=h(p,m,f);B.isUndefined(g)&&h!==l||(n[f]=g)}),n}const Oj=e=>{const t=Ti({},e),n=p=>B.hasOwnProp(t,p)?t[p]:void 0,r=n("data");let s=n("withXSRFToken");const i=n("xsrfHeaderName"),o=n("xsrfCookieName");let l=n("headers");const c=n("auth"),d=n("baseURL"),f=n("allowAbsoluteUrls"),h=n("url");if(t.headers=l=Xt.from(l),t.url=Pj(Aj(d,h,f),e.params,e.paramsSerializer),c&&l.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),B.isFormData(r)){if(Rt.hasStandardBrowserEnv||Rt.hasStandardBrowserWebWorkerEnv)l.setContentType(void 0);else if(B.isFunction(r.getHeaders)){const p=r.getHeaders(),m=["content-type","content-length"];Object.entries(p).forEach(([g,v])=>{m.includes(g.toLowerCase())&&l.set(g,v)})}}if(Rt.hasStandardBrowserEnv&&(B.isFunction(s)&&(s=s(t)),s===!0||s==null&&I4(t.url))){const m=i&&o&&D4.read(o);m&&l.set(i,m)}return t},z4=typeof XMLHttpRequest<"u",B4=z4&&function(e){return new Promise(function(n,r){const s=Oj(e);let i=s.data;const o=Xt.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:d}=s,f,h,p,m,g;function v(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let x=new XMLHttpRequest;x.open(s.method.toUpperCase(),s.url,!0),x.timeout=s.timeout;function b(){if(!x)return;const w=Xt.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:w,config:e,request:x};Rj(function(j){n(j),v()},function(j){r(j),v()},k),x=null}"onloadend"in x?x.onloadend=b:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(b)},x.onabort=function(){x&&(r(new xe("Request aborted",xe.ECONNABORTED,e,x)),x=null)},x.onerror=function(S){const k=S&&S.message?S.message:"Network Error",C=new xe(k,xe.ERR_NETWORK,e,x);C.event=S||null,r(C),x=null},x.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const k=s.transitional||a0;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),r(new xe(S,k.clarifyTimeoutError?xe.ETIMEDOUT:xe.ECONNABORTED,e,x)),x=null},i===void 0&&o.setContentType(null),"setRequestHeader"in x&&B.forEach(o.toJSON(),function(S,k){x.setRequestHeader(k,S)}),B.isUndefined(s.withCredentials)||(x.withCredentials=!!s.withCredentials),l&&l!=="json"&&(x.responseType=s.responseType),d&&([p,g]=nd(d,!0),x.addEventListener("progress",p)),c&&x.upload&&([h,m]=nd(c),x.upload.addEventListener("progress",h),x.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(f=w=>{x&&(r(!w||w.type?new nc(null,e,x):w),x.abort(),x=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const y=R4(s.url);if(y&&Rt.protocols.indexOf(y)===-1){r(new xe("Unsupported protocol "+y+":",xe.ERR_BAD_REQUEST,e));return}x.send(i||null)})},V4=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(d){if(!s){s=!0,l();const f=d instanceof Error?d:this.reason;r.abort(f instanceof xe?f:new nc(f instanceof Error?f.message:f))}};let o=t&&setTimeout(()=>{o=null,i(new xe(`timeout of ${t}ms exceeded`,xe.ETIMEDOUT))},t);const l=()=>{e&&(o&&clearTimeout(o),o=null,e.forEach(d=>{d.unsubscribe?d.unsubscribe(i):d.removeEventListener("abort",i)}),e=null)};e.forEach(d=>d.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>B.asap(l),c}},$4=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},U4=async function*(e,t){for await(const n of H4(e))yield*$4(n,t)},H4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},ay=(e,t,n,r)=>{const s=U4(e,t);let i=0,o,l=c=>{o||(o=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:d,value:f}=await s.next();if(d){l(),c.close();return}let h=f.byteLength;if(n){let p=i+=h;n(p)}c.enqueue(new Uint8Array(f))}catch(d){throw l(d),d}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},ly=64*1024,{isFunction:Dc}=B,W4=(({Request:e,Response:t})=>({Request:e,Response:t}))(B.global),{ReadableStream:cy,TextEncoder:uy}=B.global,dy=(e,...t)=>{try{return!!e(...t)}catch{return!1}},K4=e=>{e=B.merge.call({skipUndefined:!0},W4,e);const{fetch:t,Request:n,Response:r}=e,s=t?Dc(t):typeof fetch=="function",i=Dc(n),o=Dc(r);if(!s)return!1;const l=s&&Dc(cy),c=s&&(typeof uy=="function"?(g=>v=>g.encode(v))(new uy):async g=>new Uint8Array(await new n(g).arrayBuffer())),d=i&&l&&dy(()=>{let g=!1;const v=new n(Rt.origin,{body:new cy,method:"POST",get duplex(){return g=!0,"half"}}),x=v.headers.has("Content-Type");return v.body!=null&&v.body.cancel(),g&&!x}),f=o&&l&&dy(()=>B.isReadableStream(new r("").body)),h={stream:f&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!h[g]&&(h[g]=(v,x)=>{let b=v&&v[g];if(b)return b.call(v);throw new xe(`Response type '${g}' is not supported`,xe.ERR_NOT_SUPPORT,x)})});const p=async g=>{if(g==null)return 0;if(B.isBlob(g))return g.size;if(B.isSpecCompliantForm(g))return(await new n(Rt.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(B.isArrayBufferView(g)||B.isArrayBuffer(g))return g.byteLength;if(B.isURLSearchParams(g)&&(g=g+""),B.isString(g))return(await c(g)).byteLength},m=async(g,v)=>{const x=B.toFiniteNumber(g.getContentLength());return x??p(v)};return async g=>{let{url:v,method:x,data:b,signal:y,cancelToken:w,timeout:S,onDownloadProgress:k,onUploadProgress:C,responseType:j,headers:E,withCredentials:L="same-origin",fetchOptions:N}=Oj(g),R=t||fetch;j=j?(j+"").toLowerCase():"text";let D=V4([y,w&&w.toAbortSignal()],S),F=null;const _=D&&D.unsubscribe&&(()=>{D.unsubscribe()});let z;try{if(C&&d&&x!=="get"&&x!=="head"&&(z=await m(E,b))!==0){let V=new n(v,{method:"POST",body:b,duplex:"half"}),Z;if(B.isFormData(b)&&(Z=V.headers.get("content-type"))&&E.setContentType(Z),V.body){const[K,P]=sy(z,nd(iy(C)));b=ay(V.body,ly,K,P)}}B.isString(L)||(L=L?"include":"omit");const A=i&&"credentials"in n.prototype;if(B.isFormData(b)){const V=E.getContentType();V&&/^multipart\/form-data/i.test(V)&&!/boundary=/i.test(V)&&E.delete("content-type")}const G={...N,signal:D,method:x.toUpperCase(),headers:E.normalize().toJSON(),body:b,duplex:"half",credentials:A?L:void 0};F=i&&new n(v,G);let T=await(i?R(F,N):R(v,G));const O=f&&(j==="stream"||j==="response");if(f&&(k||O&&_)){const V={};["status","statusText","headers"].forEach(M=>{V[M]=T[M]});const Z=B.toFiniteNumber(T.headers.get("content-length")),[K,P]=k&&sy(Z,nd(iy(k),!0))||[];T=new r(ay(T.body,ly,K,()=>{P&&P(),_&&_()}),V)}j=j||"text";let I=await h[B.findKey(h,j)||"text"](T,g);return!O&&_&&_(),await new Promise((V,Z)=>{Rj(V,Z,{data:I,headers:Xt.from(T.headers),status:T.status,statusText:T.statusText,config:g,request:F})})}catch(A){throw _&&_(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new xe("Network Error",xe.ERR_NETWORK,g,F,A&&A.response),{cause:A.cause||A}):xe.from(A,A&&A.code,g,F,A&&A.response)}}},G4=new Map,Ij=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,i=[r,s,n];let o=i.length,l=o,c,d,f=G4;for(;l--;)c=i[l],d=f.get(c),d===void 0&&f.set(c,d=l?new Map:K4(t)),f=d;return d};Ij();const c0={http:a4,xhr:B4,fetch:{get:Ij}};B.forEach(c0,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const fy=e=>`- ${e}`,q4=e=>B.isFunction(e)||e===null||e===!1;function Z4(e,t){e=B.isArray(e)?e:[e];const{length:n}=e;let r,s;const i={};for(let o=0;o<n;o++){r=e[o];let l;if(s=r,!q4(r)&&(s=c0[(l=String(r)).toLowerCase()],s===void 0))throw new xe(`Unknown adapter '${l}'`);if(s&&(B.isFunction(s)||(s=s.get(t))))break;i[l||"#"+o]=s}if(!s){const o=Object.entries(i).map(([c,d])=>`adapter ${c} `+(d===!1?"is not supported by the environment":"is not available in the build"));let l=n?o.length>1?`since :
`+o.map(fy).join(`
`):" "+fy(o[0]):"as no adapter specified";throw new xe("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return s}const Dj={getAdapter:Z4,adapters:c0};function lh(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new nc(null,e)}function hy(e){return lh(e),e.headers=Xt.from(e.headers),e.data=ah.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Dj.getAdapter(e.adapter||tc.adapter,e)(e).then(function(r){return lh(e),r.data=ah.call(e,e.transformResponse,r),r.headers=Xt.from(r.headers),r},function(r){return Mj(r)||(lh(e),r&&r.response&&(r.response.data=ah.call(e,e.transformResponse,r.response),r.response.headers=Xt.from(r.response.headers))),Promise.reject(r)})}const _j="1.15.2",cf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{cf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const py={};cf.transitional=function(t,n,r){function s(i,o){return"[Axios v"+_j+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,l)=>{if(t===!1)throw new xe(s(o," has been removed"+(n?" in "+n:"")),xe.ERR_DEPRECATED);return n&&!py[o]&&(py[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,l):!0}};cf.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function Y4(e,t,n){if(typeof e!="object")throw new xe("options must be an object",xe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=Object.prototype.hasOwnProperty.call(t,i)?t[i]:void 0;if(o){const l=e[i],c=l===void 0||o(l,i,e);if(c!==!0)throw new xe("option "+i+" must be "+c,xe.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new xe("Unknown option "+i,xe.ERR_BAD_OPTION)}}const hu={assertOptions:Y4,validators:cf},gn=hu.validators;let bi=class{constructor(t){this.defaults=t||{},this.interceptors={request:new ny,response:new ny}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=(()=>{if(!s.stack)return"";const o=s.stack.indexOf(`
`);return o===-1?"":s.stack.slice(o+1)})();try{if(!r.stack)r.stack=i;else if(i){const o=i.indexOf(`
`),l=o===-1?-1:i.indexOf(`
`,o+1),c=l===-1?"":i.slice(l+1);String(r.stack).endsWith(c)||(r.stack+=`
`+i)}}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ti(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&hu.assertOptions(r,{silentJSONParsing:gn.transitional(gn.boolean),forcedJSONParsing:gn.transitional(gn.boolean),clarifyTimeoutError:gn.transitional(gn.boolean),legacyInterceptorReqResOrdering:gn.transitional(gn.boolean)},!1),s!=null&&(B.isFunction(s)?n.paramsSerializer={serialize:s}:hu.assertOptions(s,{encode:gn.function,serialize:gn.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),hu.assertOptions(n,{baseUrl:gn.spelling("baseURL"),withXsrfToken:gn.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&B.merge(i.common,i[n.method]);i&&B.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=Xt.concat(o,i);const l=[];let c=!0;this.interceptors.request.forEach(function(v){if(typeof v.runWhen=="function"&&v.runWhen(n)===!1)return;c=c&&v.synchronous;const x=n.transitional||a0;x&&x.legacyInterceptorReqResOrdering?l.unshift(v.fulfilled,v.rejected):l.push(v.fulfilled,v.rejected)});const d=[];this.interceptors.response.forEach(function(v){d.push(v.fulfilled,v.rejected)});let f,h=0,p;if(!c){const g=[hy.bind(this),void 0];for(g.unshift(...l),g.push(...d),p=g.length,f=Promise.resolve(n);h<p;)f=f.then(g[h++],g[h++]);return f}p=l.length;let m=n;for(;h<p;){const g=l[h++],v=l[h++];try{m=g(m)}catch(x){v.call(this,x);break}}try{f=hy.call(this,m)}catch(g){return Promise.reject(g)}for(h=0,p=d.length;h<p;)f=f.then(d[h++],d[h++]);return f}getUri(t){t=Ti(this.defaults,t);const n=Aj(t.baseURL,t.url,t.allowAbsoluteUrls);return Pj(n,t.params,t.paramsSerializer)}};B.forEach(["delete","get","head","options"],function(t){bi.prototype[t]=function(n,r){return this.request(Ti(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,l){return this.request(Ti(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}bi.prototype[t]=n(),bi.prototype[t+"Form"]=n(!0)});let X4=class Fj{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(l=>{r.subscribe(l),i=l}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,l){r.reason||(r.reason=new nc(i,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Fj(function(s){t=s}),cancel:t}}};function Q4(e){return function(n){return e.apply(null,n)}}function J4(e){return B.isObject(e)&&e.isAxiosError===!0}const sm={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(sm).forEach(([e,t])=>{sm[t]=e});function zj(e){const t=new bi(e),n=xj(bi.prototype.request,t);return B.extend(n,bi.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return zj(Ti(e,s))},n}const Ve=zj(tc);Ve.Axios=bi;Ve.CanceledError=nc;Ve.CancelToken=X4;Ve.isCancel=Mj;Ve.VERSION=_j;Ve.toFormData=lf;Ve.AxiosError=xe;Ve.Cancel=Ve.CanceledError;Ve.all=function(t){return Promise.all(t)};Ve.spread=Q4;Ve.isAxiosError=J4;Ve.mergeConfig=Ti;Ve.AxiosHeaders=Xt;Ve.formToJSON=e=>Tj(B.isHTMLForm(e)?new FormData(e):e);Ve.getAdapter=Dj.getAdapter;Ve.HttpStatusCode=sm;Ve.default=Ve;const{Axios:c7,AxiosError:u7,CanceledError:d7,isCancel:f7,CancelToken:h7,VERSION:p7,all:m7,Cancel:g7,isAxiosError:v7,spread:x7,toFormData:y7,AxiosHeaders:b7,HttpStatusCode:w7,formToJSON:S7,getAdapter:k7,mergeConfig:C7}=Ve,uf=e=>e?e.replace(/\/+$/,""):"",rc=uf("https://api.barqibazar.org/franchise/api"),u0=uf("https://api.barqibazar.org/wallet"),sc=uf("https://api.barqibazar.org"),my=uf("https://api.barqibazar.org/media/api"),Fi=(e,t)=>e?t?`${e}${t.startsWith("/")?"":"/"}${t}`:e:t||"",pe=Ve.create({headers:{"Content-Type":"application/json"}});pe.interceptors.request.use(e=>{const t=localStorage.getItem("access_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));pe.interceptors.response.use(e=>e,async e=>{var n;const t=e.config;if(((n=e.response)==null?void 0:n.status)===401&&!t._retry){t._retry=!0;const r=localStorage.getItem("refresh_token");if(r)try{const s=await Ve.post(Fi(sc,"/users/refresh"),{refresh:r}),{access:i}=s.data.data;return localStorage.setItem("access_token",i),t.headers.Authorization=`Bearer ${i}`,pe(t)}catch(s){return localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),window.location.href="/login",Promise.reject(s)}}return Promise.reject(e)});const ch={login:async(e,t)=>(await pe.post(Fi(sc,"/auth/login/"),{email:e,password:t})).data,logout:async()=>{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},getCurrentUser:()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},isAuthenticated:()=>!!localStorage.getItem("access_token")},Bj=u.createContext(null),Vj=()=>{const e=u.useContext(Bj);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},e_=({children:e})=>{const[t,n]=u.useState(null),[r,s]=u.useState(!0),i="https://api.barqibazar.org";u.useEffect(()=>{const d=ch.getCurrentUser();d&&ch.isAuthenticated()&&n(d),s(!1)},[]);const c={user:t,isLoading:r,isAuthenticated:!!t,isAdmin:()=>(t==null?void 0:t.role)==="SUPER_ADMIN",isFranchiseAdmin:()=>(t==null?void 0:t.role)==="FRANCHISE_ADMIN",login:async(d,f)=>{const p=await(await fetch(i+"/iam/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,password:f})})).json();if(p.status==="success"){const{access:m,refresh:g,role:v,email:x}=p.data;localStorage.setItem("access_token",m),localStorage.setItem("refresh_token",g);const b={email:x,role:v};return localStorage.setItem("user",JSON.stringify(b)),n(b),{success:!0}}throw new Error(p.message||"Login failed")},logout:()=>{ch.logout(),n(null)}};return a.jsx(Bj.Provider,{value:c,children:e})},Hs=()=>Vj(),t_=({size:e="md",className:t})=>{const n={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"};return a.jsx(_r,{className:he("animate-spin text-primary",n[e],t)})},n_=({message:e="Loading..."})=>a.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center",children:a.jsxs("div",{className:"flex flex-col items-center gap-3",children:[a.jsx(t_,{size:"xl"}),a.jsx("p",{className:"text-muted-foreground font-medium",children:e})]})}),An=({children:e,allowedRoles:t})=>{const{isAuthenticated:n,isLoading:r,user:s}=Hs(),i=xr();return r?a.jsx(n_,{message:"Checking authentication..."}):n?t&&t.length>0&&!t.includes(s==null?void 0:s.role)?a.jsx(Qp,{to:"/dashboard",replace:!0}):e:a.jsx(Qp,{to:"/login",state:{from:i},replace:!0})};var r_=Symbol.for("react.lazy"),rd=Ed[" use ".trim().toString()];function s_(e){return typeof e=="object"&&e!==null&&"then"in e}function $j(e){return e!=null&&typeof e=="object"&&"$$typeof"in e&&e.$$typeof===r_&&"_payload"in e&&s_(e._payload)}function Uj(e){const t=o_(e),n=u.forwardRef((r,s)=>{let{children:i,...o}=r;$j(i)&&typeof rd=="function"&&(i=rd(i._payload));const l=u.Children.toArray(i),c=l.find(l_);if(c){const d=c.props.children,f=l.map(h=>h===c?u.Children.count(d)>1?u.Children.only(null):u.isValidElement(d)?d.props.children:null:h);return a.jsx(t,{...o,ref:s,children:u.isValidElement(d)?u.cloneElement(d,void 0,f):null})}return a.jsx(t,{...o,ref:s,children:i})});return n.displayName=`${e}.Slot`,n}var i_=Uj("Slot");function o_(e){const t=u.forwardRef((n,r)=>{let{children:s,...i}=n;if($j(s)&&typeof rd=="function"&&(s=rd(s._payload)),u.isValidElement(s)){const o=u_(s),l=c_(i,s.props);return s.type!==u.Fragment&&(l.ref=r?Dg(r,o):o),u.cloneElement(s,l)}return u.Children.count(s)>1?u.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var a_=Symbol("radix.slottable");function l_(e){return u.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===a_}function c_(e,t){const n={...t};for(const r in t){const s=e[r],i=t[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...l)=>{const c=i(...l);return s(...l),c}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}function u_(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}const d_=Vg("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ne=u.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...s},i)=>{const o=r?i_:"button";return a.jsx(o,{className:he(d_({variant:t,size:n,className:e})),ref:i,...s})});ne.displayName="Button";const Ee=u.forwardRef(({className:e,type:t,...n},r)=>a.jsx("input",{type:t,className:he("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));Ee.displayName="Input";var f_=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],d0=f_.reduce((e,t)=>{const n=Uj(`Primitive.${t}`),r=u.forwardRef((s,i)=>{const{asChild:o,...l}=s,c=o?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),a.jsx(c,{...l,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{}),h_="Label",Hj=u.forwardRef((e,t)=>a.jsx(d0.label,{...e,ref:t,onMouseDown:n=>{var s;n.target.closest("button, input, select, textarea")||((s=e.onMouseDown)==null||s.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Hj.displayName=h_;var Wj=Hj;const p_=Vg("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),ve=u.forwardRef(({className:e,...t},n)=>a.jsx(Wj,{ref:n,className:he(p_(),e),...t}));ve.displayName=Wj.displayName;const im="/Franchises/assets/barqibazarimg-D4VaA-8Y.jpeg",Kj=u.createContext({});function m_(e){const t=u.useRef(null);return t.current===null&&(t.current=e()),t.current}const g_=typeof window<"u",v_=g_?u.useLayoutEffect:u.useEffect,f0=u.createContext(null);function h0(e,t){e.indexOf(t)===-1&&e.push(t)}function sd(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const pr=(e,t,n)=>n>t?t:n<e?e:n;let p0=()=>{};const Fs={},Gj=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function qj(e){return typeof e=="object"&&e!==null}const Zj=e=>/^0[^.\s]+$/u.test(e);function Yj(e){let t;return()=>(t===void 0&&(t=e()),t)}const jn=e=>e,x_=(e,t)=>n=>t(e(n)),ic=(...e)=>e.reduce(x_),Rl=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class m0{constructor(){this.subscriptions=[]}add(t){return h0(this.subscriptions,t),()=>sd(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let i=0;i<s;i++){const o=this.subscriptions[i];o&&o(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const un=e=>e*1e3,Sn=e=>e/1e3;function Xj(e,t){return t?e*(1e3/t):0}const Qj=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,y_=1e-7,b_=12;function w_(e,t,n,r,s){let i,o,l=0;do o=t+(n-t)/2,i=Qj(o,r,s)-e,i>0?n=o:t=o;while(Math.abs(i)>y_&&++l<b_);return o}function oc(e,t,n,r){if(e===t&&n===r)return jn;const s=i=>w_(i,0,1,e,n);return i=>i===0||i===1?i:Qj(s(i),t,r)}const Jj=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,e2=e=>t=>1-e(1-t),t2=oc(.33,1.53,.69,.99),g0=e2(t2),n2=Jj(g0),r2=e=>e>=1?1:(e*=2)<1?.5*g0(e):.5*(2-Math.pow(2,-10*(e-1))),v0=e=>1-Math.sin(Math.acos(e)),s2=e2(v0),i2=Jj(v0),S_=oc(.42,0,1,1),k_=oc(0,0,.58,1),o2=oc(.42,0,.58,1),C_=e=>Array.isArray(e)&&typeof e[0]!="number",a2=e=>Array.isArray(e)&&typeof e[0]=="number",j_={linear:jn,easeIn:S_,easeInOut:o2,easeOut:k_,circIn:v0,circInOut:i2,circOut:s2,backIn:g0,backInOut:n2,backOut:t2,anticipate:r2},E_=e=>typeof e=="string",gy=e=>{if(a2(e)){p0(e.length===4);const[t,n,r,s]=e;return oc(t,n,r,s)}else if(E_(e))return j_[e];return e},_c=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function N_(e,t){let n=new Set,r=new Set,s=!1,i=!1;const o=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1};function c(f){o.has(f)&&(d.schedule(f),e()),f(l)}const d={schedule:(f,h=!1,p=!1)=>{const g=p&&s?n:r;return h&&o.add(f),g.add(f),f},cancel:f=>{r.delete(f),o.delete(f)},process:f=>{if(l=f,s){i=!0;return}s=!0;const h=n;n=r,r=h,n.forEach(c),n.clear(),s=!1,i&&(i=!1,d.process(f))}};return d}const L_=40;function l2(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,o=_c.reduce((w,S)=>(w[S]=N_(i),w),{}),{setup:l,read:c,resolveKeyframes:d,preUpdate:f,update:h,preRender:p,render:m,postRender:g}=o,v=()=>{const w=Fs.useManualTiming,S=w?s.timestamp:performance.now();n=!1,w||(s.delta=r?1e3/60:Math.max(Math.min(S-s.timestamp,L_),1)),s.timestamp=S,s.isProcessing=!0,l.process(s),c.process(s),d.process(s),f.process(s),h.process(s),p.process(s),m.process(s),g.process(s),s.isProcessing=!1,n&&t&&(r=!1,e(v))},x=()=>{n=!0,r=!0,s.isProcessing||e(v)};return{schedule:_c.reduce((w,S)=>{const k=o[S];return w[S]=(C,j=!1,E=!1)=>(n||x(),k.schedule(C,j,E)),w},{}),cancel:w=>{for(let S=0;S<_c.length;S++)o[_c[S]].cancel(w)},state:s,steps:o}}const{schedule:$e,cancel:zs,state:wt,steps:uh}=l2(typeof requestAnimationFrame<"u"?requestAnimationFrame:jn,!0);let pu;function P_(){pu=void 0}const _t={now:()=>(pu===void 0&&_t.set(wt.isProcessing||Fs.useManualTiming?wt.timestamp:performance.now()),pu),set:e=>{pu=e,queueMicrotask(P_)}},c2=e=>t=>typeof t=="string"&&t.startsWith(e),u2=c2("--"),T_=c2("var(--"),x0=e=>T_(e)?M_.test(e.split("/*")[0].trim()):!1,M_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function vy(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const ia={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Al={...ia,transform:e=>pr(0,1,e)},Fc={...ia,default:1},Xa=e=>Math.round(e*1e5)/1e5,y0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function R_(e){return e==null}const A_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,b0=(e,t)=>n=>!!(typeof n=="string"&&A_.test(n)&&n.startsWith(e)||t&&!R_(n)&&Object.prototype.hasOwnProperty.call(n,t)),d2=(e,t,n)=>r=>{if(typeof r!="string")return r;const[s,i,o,l]=r.match(y0);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},O_=e=>pr(0,255,e),dh={...ia,transform:e=>Math.round(O_(e))},ui={test:b0("rgb","red"),parse:d2("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+dh.transform(e)+", "+dh.transform(t)+", "+dh.transform(n)+", "+Xa(Al.transform(r))+")"};function I_(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const om={test:b0("#"),parse:I_,transform:ui.transform},ac=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),es=ac("deg"),hr=ac("%"),ue=ac("px"),D_=ac("vh"),__=ac("vw"),xy={...hr,parse:e=>hr.parse(e)/100,transform:e=>hr.transform(e*100)},fo={test:b0("hsl","hue"),parse:d2("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+hr.transform(Xa(t))+", "+hr.transform(Xa(n))+", "+Xa(Al.transform(r))+")"},ot={test:e=>ui.test(e)||om.test(e)||fo.test(e),parse:e=>ui.test(e)?ui.parse(e):fo.test(e)?fo.parse(e):om.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ui.transform(e):fo.transform(e),getAnimatableNone:e=>{const t=ot.parse(e);return t.alpha=0,ot.transform(t)}},F_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function z_(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(y0))==null?void 0:t.length)||0)+(((n=e.match(F_))==null?void 0:n.length)||0)>0}const f2="number",h2="color",B_="var",V_="var(",yy="${}",$_=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ko(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},s=[];let i=0;const l=t.replace($_,c=>(ot.test(c)?(r.color.push(i),s.push(h2),n.push(ot.parse(c))):c.startsWith(V_)?(r.var.push(i),s.push(B_),n.push(c)):(r.number.push(i),s.push(f2),n.push(parseFloat(c))),++i,yy)).split(yy);return{values:n,split:l,indexes:r,types:s}}function U_(e){return Ko(e).values}function p2({split:e,types:t}){const n=e.length;return r=>{let s="";for(let i=0;i<n;i++)if(s+=e[i],r[i]!==void 0){const o=t[i];o===f2?s+=Xa(r[i]):o===h2?s+=ot.transform(r[i]):s+=r[i]}return s}}function H_(e){return p2(Ko(e))}const W_=e=>typeof e=="number"?0:ot.test(e)?ot.getAnimatableNone(e):e,K_=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:W_(e);function G_(e){const t=Ko(e);return p2(t)(t.values.map((r,s)=>K_(r,t.split[s])))}const Hn={test:z_,parse:U_,createTransformer:H_,getAnimatableNone:G_};function fh(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function q_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,o=0;if(!t)s=i=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;s=fh(c,l,e+1/3),i=fh(c,l,e),o=fh(c,l,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}function id(e,t){return n=>n>0?t:e}const qe=(e,t,n)=>e+(t-e)*n,hh=(e,t,n)=>{const r=e*e,s=n*(t*t-r)+r;return s<0?0:Math.sqrt(s)},Z_=[om,ui,fo],Y_=e=>Z_.find(t=>t.test(e));function by(e){const t=Y_(e);if(!t)return!1;let n=t.parse(e);return t===fo&&(n=q_(n)),n}const wy=(e,t)=>{const n=by(e),r=by(t);if(!n||!r)return id(e,t);const s={...n};return i=>(s.red=hh(n.red,r.red,i),s.green=hh(n.green,r.green,i),s.blue=hh(n.blue,r.blue,i),s.alpha=qe(n.alpha,r.alpha,i),ui.transform(s))},am=new Set(["none","hidden"]);function X_(e,t){return am.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function Q_(e,t){return n=>qe(e,t,n)}function w0(e){return typeof e=="number"?Q_:typeof e=="string"?x0(e)?id:ot.test(e)?wy:t3:Array.isArray(e)?m2:typeof e=="object"?ot.test(e)?wy:J_:id}function m2(e,t){const n=[...e],r=n.length,s=e.map((i,o)=>w0(i)(i,t[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}}function J_(e,t){const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=w0(e[s])(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}}function e3(e,t){const n=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const i=t.types[s],o=e.indexes[i][r[i]],l=e.values[o]??0;n[s]=l,r[i]++}return n}const t3=(e,t)=>{const n=Hn.createTransformer(t),r=Ko(e),s=Ko(t);return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?am.has(e)&&!s.values.length||am.has(t)&&!r.values.length?X_(e,t):ic(m2(e3(r,s),s.values),n):id(e,t)};function g2(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?qe(e,t,n):w0(e)(e,t)}const n3=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>$e.update(t,n),stop:()=>zs(t),now:()=>wt.isProcessing?wt.timestamp:_t.now()}},v2=(e,t,n=10)=>{let r="";const s=Math.max(Math.round(t/n),2);for(let i=0;i<s;i++)r+=Math.round(e(i/(s-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},od=2e4;function S0(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<od;)t+=n,r=e.next(t);return t>=od?1/0:t}function r3(e,t=100,n){const r=n({...e,keyframes:[0,t]}),s=Math.min(S0(r),od);return{type:"keyframes",ease:i=>r.next(s*i).value/t,duration:Sn(s)}}const rt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function lm(e,t){return e*Math.sqrt(1-t*t)}const s3=12;function i3(e,t,n){let r=n;for(let s=1;s<s3;s++)r=r-e(r)/t(r);return r}const ph=.001;function o3({duration:e=rt.duration,bounce:t=rt.bounce,velocity:n=rt.velocity,mass:r=rt.mass}){let s,i,o=1-t;o=pr(rt.minDamping,rt.maxDamping,o),e=pr(rt.minDuration,rt.maxDuration,Sn(e)),o<1?(s=d=>{const f=d*o,h=f*e,p=f-n,m=lm(d,o),g=Math.exp(-h);return ph-p/m*g},i=d=>{const h=d*o*e,p=h*n+n,m=Math.pow(o,2)*Math.pow(d,2)*e,g=Math.exp(-h),v=lm(Math.pow(d,2),o);return(-s(d)+ph>0?-1:1)*((p-m)*g)/v}):(s=d=>{const f=Math.exp(-d*e),h=(d-n)*e+1;return-ph+f*h},i=d=>{const f=Math.exp(-d*e),h=(n-d)*(e*e);return f*h});const l=5/e,c=i3(s,i,l);if(e=un(e),isNaN(c))return{stiffness:rt.stiffness,damping:rt.damping,duration:e};{const d=Math.pow(c,2)*r;return{stiffness:d,damping:o*2*Math.sqrt(r*d),duration:e}}}const a3=["duration","bounce"],l3=["stiffness","damping","mass"];function Sy(e,t){return t.some(n=>e[n]!==void 0)}function c3(e){let t={velocity:rt.velocity,stiffness:rt.stiffness,damping:rt.damping,mass:rt.mass,isResolvedFromDuration:!1,...e};if(!Sy(e,l3)&&Sy(e,a3))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),s=r*r,i=2*pr(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:rt.mass,stiffness:s,damping:i}}else{const n=o3({...e,velocity:0});t={...t,...n,mass:rt.mass},t.isResolvedFromDuration=!0}return t}function ad(e=rt.visualDuration,t=rt.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:s}=n;const i=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],l={done:!1,value:i},{stiffness:c,damping:d,mass:f,duration:h,velocity:p,isResolvedFromDuration:m}=c3({...n,velocity:-Sn(n.velocity||0)}),g=p||0,v=d/(2*Math.sqrt(c*f)),x=o-i,b=Sn(Math.sqrt(c/f)),y=Math.abs(x)<5;r||(r=y?rt.restSpeed.granular:rt.restSpeed.default),s||(s=y?rt.restDelta.granular:rt.restDelta.default);let w,S,k,C,j,E;if(v<1)k=lm(b,v),C=(g+v*b*x)/k,w=N=>{const R=Math.exp(-v*b*N);return o-R*(C*Math.sin(k*N)+x*Math.cos(k*N))},j=v*b*C+x*k,E=v*b*x-C*k,S=N=>Math.exp(-v*b*N)*(j*Math.sin(k*N)+E*Math.cos(k*N));else if(v===1){w=R=>o-Math.exp(-b*R)*(x+(g+b*x)*R);const N=g+b*x;S=R=>Math.exp(-b*R)*(b*N*R-g)}else{const N=b*Math.sqrt(v*v-1);w=_=>{const z=Math.exp(-v*b*_),A=Math.min(N*_,300);return o-z*((g+v*b*x)*Math.sinh(A)+N*x*Math.cosh(A))/N};const R=(g+v*b*x)/N,D=v*b*R-x*N,F=v*b*x-R*N;S=_=>{const z=Math.exp(-v*b*_),A=Math.min(N*_,300);return z*(D*Math.sinh(A)+F*Math.cosh(A))}}const L={calculatedDuration:m&&h||null,velocity:N=>un(S(N)),next:N=>{if(!m&&v<1){const D=Math.exp(-v*b*N),F=Math.sin(k*N),_=Math.cos(k*N),z=o-D*(C*F+x*_),A=un(D*(j*F+E*_));return l.done=Math.abs(A)<=r&&Math.abs(o-z)<=s,l.value=l.done?o:z,l}const R=w(N);if(m)l.done=N>=h;else{const D=un(S(N));l.done=Math.abs(D)<=r&&Math.abs(o-R)<=s}return l.value=l.done?o:R,l},toString:()=>{const N=Math.min(S0(L),od),R=v2(D=>L.next(N*D).value,N,30);return N+"ms "+R},toTransition:()=>{}};return L}ad.applyToOptions=e=>{const t=r3(e,100,ad);return e.ease=t.ease,e.duration=un(t.duration),e.type="keyframes",e};const u3=5;function x2(e,t,n){const r=Math.max(t-u3,0);return Xj(n-e(r),t-r)}function cm({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:f}){const h=e[0],p={done:!1,value:h},m=E=>l!==void 0&&E<l||c!==void 0&&E>c,g=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let v=n*t;const x=h+v,b=o===void 0?x:o(x);b!==x&&(v=b-h);const y=E=>-v*Math.exp(-E/r),w=E=>b+y(E),S=E=>{const L=y(E),N=w(E);p.done=Math.abs(L)<=d,p.value=p.done?b:N};let k,C;const j=E=>{m(p.value)&&(k=E,C=ad({keyframes:[p.value,g(p.value)],velocity:x2(w,E,p.value),damping:s,stiffness:i,restDelta:d,restSpeed:f}))};return j(0),{calculatedDuration:null,next:E=>{let L=!1;return!C&&k===void 0&&(L=!0,S(E),j(E)),k!==void 0&&E>=k?C.next(E-k):(!L&&S(E),p)}}}function d3(e,t,n){const r=[],s=n||Fs.mix||g2,i=e.length-1;for(let o=0;o<i;o++){let l=s(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||jn:t;l=ic(c,l)}r.push(l)}return r}function f3(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;if(p0(i===t.length),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=d3(t,r,s),c=l.length,d=f=>{if(o&&f<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(f<e[h+1]);h++);const p=Rl(e[h],e[h+1],f);return l[h](p)};return n?f=>d(pr(e[0],e[i-1],f)):d}function h3(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=Rl(0,t,r);e.push(qe(n,1,s))}}function p3(e){const t=[0];return h3(t,e.length-1),t}function m3(e,t){return e.map(n=>n*t)}function g3(e,t){return e.map(()=>t||o2).splice(0,e.length-1)}function Qa({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=C_(r)?r.map(gy):gy(r),i={done:!1,value:t[0]},o=m3(n&&n.length===t.length?n:p3(t),e),l=f3(o,t,{ease:Array.isArray(s)?s:g3(t,s)});return{calculatedDuration:e,next:c=>(i.value=l(c),i.done=c>=e,i)}}const v3=e=>e!==null;function df(e,{repeat:t,repeatType:n="loop"},r,s=1){const i=e.filter(v3),l=s<0||t&&n!=="loop"&&t%2===1?0:i.length-1;return!l||r===void 0?i[l]:r}const x3={decay:cm,inertia:cm,tween:Qa,keyframes:Qa,spring:ad};function y2(e){typeof e.type=="string"&&(e.type=x3[e.type])}class k0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const y3=e=>e/100;class ld extends k0{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,s;const{motionValue:n}=this.options;n&&n.updatedAt!==_t.now()&&this.tick(_t.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(r=this.options).onStop)==null||s.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;y2(t);const{type:n=Qa,repeat:r=0,repeatDelay:s=0,repeatType:i,velocity:o=0}=t;let{keyframes:l}=t;const c=n||Qa;c!==Qa&&typeof l[0]!="number"&&(this.mixKeyframes=ic(y3,g2(l[0],l[1])),l=[0,100]);const d=c({...t,keyframes:l});i==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-o})),d.calculatedDuration===null&&(d.calculatedDuration=S0(d));const{calculatedDuration:f}=d;this.calculatedDuration=f,this.resolvedDuration=f+s,this.totalDuration=this.resolvedDuration*(r+1)-s,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:s,mixKeyframes:i,mirroredGenerator:o,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:d=0,keyframes:f,repeat:h,repeatType:p,repeatDelay:m,type:g,onUpdate:v,finalKeyframe:x}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const b=this.currentTime-d*(this.playbackSpeed>=0?1:-1),y=this.playbackSpeed>=0?b<0:b>s;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let w=this.currentTime,S=r;if(h){const E=Math.min(this.currentTime,s)/l;let L=Math.floor(E),N=E%1;!N&&E>=1&&(N=1),N===1&&L--,L=Math.min(L,h+1),!!(L%2)&&(p==="reverse"?(N=1-N,m&&(N-=m/l)):p==="mirror"&&(S=o)),w=pr(0,1,N)*l}let k;y?(this.delayState.value=f[0],k=this.delayState):k=S.next(w),i&&!y&&(k.value=i(k.value));let{done:C}=k;!y&&c!==null&&(C=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const j=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&C);return j&&g!==cm&&(k.value=df(f,this.options,x,this.speed)),v&&v(k.value),j&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return Sn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Sn(t)}get time(){return Sn(this.currentTime)}set time(t){t=un(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return x2(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(_t.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Sn(this.currentTime))}play(){var s,i;if(this.isStopped)return;const{driver:t=n3,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),(i=(s=this.options).onPlay)==null||i.call(s);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(_t.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function b3(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const di=e=>e*180/Math.PI,um=e=>{const t=di(Math.atan2(e[1],e[0]));return dm(t)},w3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:um,rotateZ:um,skewX:e=>di(Math.atan(e[1])),skewY:e=>di(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},dm=e=>(e=e%360,e<0&&(e+=360),e),ky=um,Cy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),jy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),S3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Cy,scaleY:jy,scale:e=>(Cy(e)+jy(e))/2,rotateX:e=>dm(di(Math.atan2(e[6],e[5]))),rotateY:e=>dm(di(Math.atan2(-e[2],e[0]))),rotateZ:ky,rotate:ky,skewX:e=>di(Math.atan(e[4])),skewY:e=>di(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function fm(e){return e.includes("scale")?1:0}function hm(e,t){if(!e||e==="none")return fm(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,s;if(n)r=S3,s=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=w3,s=l}if(!s)return fm(t);const i=r[t],o=s[1].split(",").map(C3);return typeof i=="function"?i(o):o[i]}const k3=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return hm(n,t)};function C3(e){return parseFloat(e.trim())}const oa=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],aa=new Set(oa),Ey=e=>e===ia||e===ue,j3=new Set(["x","y","z"]),E3=oa.filter(e=>!j3.has(e));function N3(e){const t=[];return E3.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const xs={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>hm(t,"x"),y:(e,{transform:t})=>hm(t,"y")};xs.translateX=xs.x;xs.translateY=xs.y;const wi=new Set;let pm=!1,mm=!1,gm=!1;function b2(){if(mm){const e=Array.from(wi).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const s=N3(r);s.length&&(n.set(r,s),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const s=n.get(r);s&&s.forEach(([i,o])=>{var l;(l=r.getValue(i))==null||l.set(o)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}mm=!1,pm=!1,wi.forEach(e=>e.complete(gm)),wi.clear()}function w2(){wi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(mm=!0)})}function L3(){gm=!0,w2(),b2(),gm=!1}class C0{constructor(t,n,r,s,i,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=s,this.element=i,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(wi.add(this),pm||(pm=!0,$e.read(w2),$e.resolveKeyframes(b2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:s}=this;if(t[0]===null){const i=s==null?void 0:s.get(),o=t[t.length-1];if(i!==void 0)t[0]=i;else if(r&&n){const l=r.readValue(n,o);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=o),s&&i===void 0&&s.set(t[0])}b3(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),wi.delete(this)}cancel(){this.state==="scheduled"&&(wi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const P3=e=>e.startsWith("--");function S2(e,t,n){P3(t)?e.style.setProperty(t,n):e.style[t]=n}const T3={};function k2(e,t){const n=Yj(e);return()=>T3[t]??n()}const M3=k2(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),C2=k2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Oa=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,Ny={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oa([0,.65,.55,1]),circOut:Oa([.55,0,1,.45]),backIn:Oa([.31,.01,.66,-.59]),backOut:Oa([.33,1.53,.69,.99])};function j2(e,t){if(e)return typeof e=="function"?C2()?v2(e,t):"ease-out":a2(e)?Oa(e):Array.isArray(e)?e.map(n=>j2(n,t)||Ny.easeOut):Ny[e]}function R3(e,t,n,{delay:r=0,duration:s=300,repeat:i=0,repeatType:o="loop",ease:l="easeOut",times:c}={},d=void 0){const f={[t]:n};c&&(f.offset=c);const h=j2(l,s);Array.isArray(h)&&(f.easing=h);const p={delay:r,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:o==="reverse"?"alternate":"normal"};return d&&(p.pseudoElement=d),e.animate(f,p)}function E2(e){return typeof e=="function"&&"applyToOptions"in e}function A3({type:e,...t}){return E2(e)&&C2()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class N2 extends k0{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:s,pseudoElement:i,allowFlatten:o=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!i,this.allowFlatten=o,this.options=t,p0(typeof t.type!="string");const d=A3(t);this.animation=R3(n,r,s,d,i),d.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const f=df(s,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(f),S2(n,r,f),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,s;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((s=(r=this.animation).commitStyles)==null||s.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Sn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Sn(t)}get time(){return Sn(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=un(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:s}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&M3()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),jn):s(this)}}const L2={anticipate:r2,backInOut:n2,circInOut:i2};function O3(e){return e in L2}function I3(e){typeof e.ease=="string"&&O3(e.ease)&&(e.ease=L2[e.ease])}const mh=10;class D3 extends N2{constructor(t){I3(t),y2(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:s,element:i,...o}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new ld({...o,autoplay:!1}),c=Math.max(mh,_t.now()-this.startTime),d=pr(0,mh,c-mh),f=l.sample(c).value,{name:h}=this.options;i&&h&&S2(i,h,f),n.setWithVelocity(l.sample(Math.max(0,c-d)).value,f,d),l.stop()}}const Ly=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(Hn.test(e)||e==="0")&&!e.startsWith("url("));function _3(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function F3(e,t,n,r){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],o=Ly(s,t),l=Ly(i,t);return!o||!l?!1:_3(e)||(n==="spring"||E2(n))&&r}function vm(e){e.duration=0,e.type="keyframes"}const P2=new Set(["opacity","clipPath","filter","transform"]),z3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function B3(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&z3.test(e[t]))return!0;return!1}const V3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),$3=Yj(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function U3(e){var h;const{motionValue:t,name:n,repeatDelay:r,repeatType:s,damping:i,type:o,keyframes:l}=e;if(!(((h=t==null?void 0:t.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:f}=t.owner.getProps();return $3()&&n&&(P2.has(n)||V3.has(n)&&B3(l))&&(n!=="transform"||!f)&&!d&&!r&&s!=="mirror"&&i!==0&&o!=="inertia"}const H3=40;class W3 extends k0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:o="loop",keyframes:l,name:c,motionValue:d,element:f,...h}){var g;super(),this.stop=()=>{var v,x;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(x=this.keyframeResolver)==null||x.cancel()},this.createdAt=_t.now();const p={autoplay:t,delay:n,type:r,repeat:s,repeatDelay:i,repeatType:o,name:c,motionValue:d,element:f,...h},m=(f==null?void 0:f.KeyframeResolver)||C0;this.keyframeResolver=new m(l,(v,x,b)=>this.onKeyframesResolved(v,x,p,!b),c,d,f),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(t,n,r,s){var b,y;this.keyframeResolver=void 0;const{name:i,type:o,velocity:l,delay:c,isHandoff:d,onUpdate:f}=r;this.resolvedAt=_t.now();let h=!0;F3(t,i,o,l)||(h=!1,(Fs.instantAnimations||!c)&&(f==null||f(df(t,r,n))),t[0]=t[t.length-1],vm(r),r.repeat=0);const m={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>H3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},g=h&&!d&&U3(m),v=(y=(b=m.motionValue)==null?void 0:b.owner)==null?void 0:y.current;let x;if(g)try{x=new D3({...m,element:v})}catch{x=new ld(m)}else x=new ld(m);x.finished.then(()=>{this.notifyFinished()}).catch(jn),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),L3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function T2(e,t,n,r=0,s=1){const i=Array.from(e).sort((d,f)=>d.sortNodePosition(f)).indexOf(t),o=e.size,l=(o-1)*r;return typeof n=="function"?n(i,o):s===1?i*r:l-i*r}const K3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function G3(e){const t=K3.exec(e);if(!t)return[,];const[,n,r,s]=t;return[`--${n??r}`,s]}function M2(e,t,n=1){const[r,s]=G3(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const o=i.trim();return Gj(o)?parseFloat(o):o}return x0(s)?M2(s,t,n+1):s}const q3={type:"spring",stiffness:500,damping:25,restSpeed:10},Z3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Y3={type:"keyframes",duration:.8},X3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Q3=(e,{keyframes:t})=>t.length>2?Y3:aa.has(e)?e.startsWith("scale")?Z3(t[1]):q3:X3;function R2(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function j0(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?R2(n,e):n}const J3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function eF(e){for(const t in e)if(!J3.has(t))return!0;return!1}const E0=(e,t,n,r={},s,i)=>o=>{const l=j0(r,e)||{},c=l.delay||r.delay||0;let{elapsed:d=0}=r;d=d-un(c);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-d,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{o(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:i?void 0:s};eF(l)||Object.assign(f,Q3(e,f)),f.duration&&(f.duration=un(f.duration)),f.repeatDelay&&(f.repeatDelay=un(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let h=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(vm(f),f.delay===0&&(h=!0)),(Fs.instantAnimations||Fs.skipAnimations||s!=null&&s.shouldSkipAnimations)&&(h=!0,vm(f),f.delay=0),f.allowFlatten=!l.type&&!l.ease,h&&!i&&t.get()!==void 0){const p=df(f.keyframes,l);if(p!==void 0){$e.update(()=>{f.onUpdate(p),f.onComplete()});return}}return l.isSync?new ld(f):new W3(f)};function Py(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function N0(e,t,n,r){if(typeof t=="function"){const[s,i]=Py(r);t=t(n!==void 0?n:e.custom,s,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,i]=Py(r);t=t(n!==void 0?n:e.custom,s,i)}return t}function Si(e,t,n){const r=e.getProps();return N0(r,t,n!==void 0?n:r.custom,e)}const A2=new Set(["width","height","top","left","right","bottom",...oa]),Ty=30,tF=e=>!isNaN(parseFloat(e));class nF{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var i;const s=_t.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((i=this.events.change)==null||i.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=_t.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=tF(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new m0);const r=this.events[t].add(n);return t==="change"?()=>{r(),$e.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=_t.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>Ty)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Ty);return Xj(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Go(e,t){return new nF(e,t)}const xm=e=>Array.isArray(e);function rF(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Go(n))}function sF(e){return xm(e)?e[e.length-1]||0:e}function iF(e,t){const n=Si(e,t);let{transitionEnd:r={},transition:s={},...i}=n||{};i={...i,...r};for(const o in i){const l=sF(i[o]);rF(e,o,l)}}const Ct=e=>!!(e&&e.getVelocity);function oF(e){return!!(Ct(e)&&e.add)}function ym(e,t){const n=e.getValue("willChange");if(oF(n))return n.add(t);if(!n&&Fs.WillChange){const r=new Fs.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function L0(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const aF="framerAppearId",O2="data-"+L0(aF);function I2(e){return e.props[O2]}function lF({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function D2(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i,transitionEnd:o,...l}=t;const c=e.getDefaultTransition();i=i?R2(i,c):c;const d=i==null?void 0:i.reduceMotion;r&&(i=r);const f=[],h=s&&e.animationState&&e.animationState.getState()[s];for(const p in l){const m=e.getValue(p,e.latestValues[p]??null),g=l[p];if(g===void 0||h&&lF(h,p))continue;const v={delay:n,...j0(i||{},p)},x=m.get();if(x!==void 0&&!m.isAnimating()&&!Array.isArray(g)&&g===x&&!v.velocity){$e.update(()=>m.set(g));continue}let b=!1;if(window.MotionHandoffAnimation){const S=I2(e);if(S){const k=window.MotionHandoffAnimation(S,p,$e);k!==null&&(v.startTime=k,b=!0)}}ym(e,p);const y=d??e.shouldReduceMotion;m.start(E0(p,m,g,y&&A2.has(p)?{type:!1}:v,e,b));const w=m.animation;w&&f.push(w)}if(o){const p=()=>$e.update(()=>{o&&iF(e,o)});f.length?Promise.all(f).then(p):p()}return f}function bm(e,t,n={}){var c;const r=Si(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(D2(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(d=0)=>{const{delayChildren:f=0,staggerChildren:h,staggerDirection:p}=s;return cF(e,t,d,f,h,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[d,f]=l==="beforeChildren"?[i,o]:[o,i];return d().then(()=>f())}else return Promise.all([i(),o(n.delay)])}function cF(e,t,n=0,r=0,s=0,i=1,o){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(bm(c,t,{...o,delay:n+(typeof r=="function"?0:r)+T2(e.variantChildren,c,r,s,i)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function uF(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(i=>bm(e,i,n));r=Promise.all(s)}else if(typeof t=="string")r=bm(e,t,n);else{const s=typeof t=="function"?Si(e,t,n.custom):t;r=Promise.all(D2(e,s,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const dF={test:e=>e==="auto",parse:e=>e},_2=e=>t=>t.test(e),F2=[ia,ue,hr,es,__,D_,dF],My=e=>F2.find(_2(e));function fF(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Zj(e):!0}const hF=new Set(["brightness","contrast","saturate","opacity"]);function pF(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(y0)||[];if(!r)return e;const s=n.replace(r,"");let i=hF.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const mF=/\b([a-z-]*)\(.*?\)/gu,wm={...Hn,getAnimatableNone:e=>{const t=e.match(mF);return t?t.map(pF).join(" "):e}},Sm={...Hn,getAnimatableNone:e=>{const t=Hn.parse(e);return Hn.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},Ry={...ia,transform:Math.round},gF={rotate:es,rotateX:es,rotateY:es,rotateZ:es,scale:Fc,scaleX:Fc,scaleY:Fc,scaleZ:Fc,skew:es,skewX:es,skewY:es,distance:ue,translateX:ue,translateY:ue,translateZ:ue,x:ue,y:ue,z:ue,perspective:ue,transformPerspective:ue,opacity:Al,originX:xy,originY:xy,originZ:ue},P0={borderWidth:ue,borderTopWidth:ue,borderRightWidth:ue,borderBottomWidth:ue,borderLeftWidth:ue,borderRadius:ue,borderTopLeftRadius:ue,borderTopRightRadius:ue,borderBottomRightRadius:ue,borderBottomLeftRadius:ue,width:ue,maxWidth:ue,height:ue,maxHeight:ue,top:ue,right:ue,bottom:ue,left:ue,inset:ue,insetBlock:ue,insetBlockStart:ue,insetBlockEnd:ue,insetInline:ue,insetInlineStart:ue,insetInlineEnd:ue,padding:ue,paddingTop:ue,paddingRight:ue,paddingBottom:ue,paddingLeft:ue,paddingBlock:ue,paddingBlockStart:ue,paddingBlockEnd:ue,paddingInline:ue,paddingInlineStart:ue,paddingInlineEnd:ue,margin:ue,marginTop:ue,marginRight:ue,marginBottom:ue,marginLeft:ue,marginBlock:ue,marginBlockStart:ue,marginBlockEnd:ue,marginInline:ue,marginInlineStart:ue,marginInlineEnd:ue,fontSize:ue,backgroundPositionX:ue,backgroundPositionY:ue,...gF,zIndex:Ry,fillOpacity:Al,strokeOpacity:Al,numOctaves:Ry},vF={...P0,color:ot,backgroundColor:ot,outlineColor:ot,fill:ot,stroke:ot,borderColor:ot,borderTopColor:ot,borderRightColor:ot,borderBottomColor:ot,borderLeftColor:ot,filter:wm,WebkitFilter:wm,mask:Sm,WebkitMask:Sm},z2=e=>vF[e],xF=new Set([wm,Sm]);function B2(e,t){let n=z2(e);return xF.has(n)||(n=Hn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const yF=new Set(["auto","none","0"]);function bF(e,t,n){let r=0,s;for(;r<e.length&&!s;){const i=e[r];typeof i=="string"&&!yF.has(i)&&Ko(i).values.length&&(s=e[r]),r++}if(s&&n)for(const i of t)e[i]=B2(n,s)}class wF extends C0{constructor(t,n,r,s,i){super(t,n,r,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let h=t[f];if(typeof h=="string"&&(h=h.trim(),x0(h))){const p=M2(h,n.current);p!==void 0&&(t[f]=p),f===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!A2.has(r)||t.length!==2)return;const[s,i]=t,o=My(s),l=My(i),c=vy(s),d=vy(i);if(c!==d&&xs[r]){this.needsMeasurement=!0;return}if(o!==l)if(Ey(o)&&Ey(l))for(let f=0;f<t.length;f++){const h=t[f];typeof h=="string"&&(t[f]=parseFloat(h))}else xs[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let s=0;s<t.length;s++)(t[s]===null||fF(t[s]))&&r.push(s);r.length&&bF(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xs[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(r,s).jump(s,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);const i=r.length-1,o=r[i];r[i]=xs[n](t.measureViewportBox(),window.getComputedStyle(t.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,d])=>{t.getValue(c).set(d)}),this.resolveNoneKeyframes()}}function V2(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){let r=document;const s=(n==null?void 0:n[e])??r.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(r=>r!=null)}const $2=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function SF(e){return qj(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:T0}=l2(queueMicrotask,!1),In={x:!1,y:!1};function U2(){return In.x||In.y}function kF(e){return e==="x"||e==="y"?In[e]?null:(In[e]=!0,()=>{In[e]=!1}):In.x||In.y?null:(In.x=In.y=!0,()=>{In.x=In.y=!1})}function H2(e,t){const n=V2(e),r=new AbortController,s={passive:!0,...t,signal:r.signal};return[n,s,()=>r.abort()]}function CF(e){return!(e.pointerType==="touch"||U2())}function jF(e,t,n={}){const[r,s,i]=H2(e,n);return r.forEach(o=>{let l=!1,c=!1,d;const f=()=>{o.removeEventListener("pointerleave",g)},h=x=>{d&&(d(x),d=void 0),f()},p=x=>{l=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),c&&(c=!1,h(x))},m=()=>{l=!0,window.addEventListener("pointerup",p,s),window.addEventListener("pointercancel",p,s)},g=x=>{if(x.pointerType!=="touch"){if(l){c=!0;return}h(x)}},v=x=>{if(!CF(x))return;c=!1;const b=t(o,x);typeof b=="function"&&(d=b,o.addEventListener("pointerleave",g,s))};o.addEventListener("pointerenter",v,s),o.addEventListener("pointerdown",m,s)}),i}const W2=(e,t)=>t?e===t?!0:W2(e,t.parentElement):!1,M0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,EF=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function NF(e){return EF.has(e.tagName)||e.isContentEditable===!0}const LF=new Set(["INPUT","SELECT","TEXTAREA"]);function PF(e){return LF.has(e.tagName)||e.isContentEditable===!0}const mu=new WeakSet;function Ay(e){return t=>{t.key==="Enter"&&e(t)}}function gh(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const TF=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=Ay(()=>{if(mu.has(n))return;gh(n,"down");const s=Ay(()=>{gh(n,"up")}),i=()=>gh(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function Oy(e){return M0(e)&&!U2()}const Iy=new WeakSet;function MF(e,t,n={}){const[r,s,i]=H2(e,n),o=l=>{const c=l.currentTarget;if(!Oy(l)||Iy.has(l))return;mu.add(c),n.stopPropagation&&Iy.add(l);const d=t(c,l),f=(m,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",p),mu.has(c)&&mu.delete(c),Oy(m)&&typeof d=="function"&&d(m,{success:g})},h=m=>{f(m,c===window||c===document||n.useGlobalTarget||W2(c,m.target))},p=m=>{f(m,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",p,s)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",o,s),SF(l)&&(l.addEventListener("focus",d=>TF(d,s)),!NF(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),i}function R0(e){return qj(e)&&"ownerSVGElement"in e}const gu=new WeakMap;let ts;const K2=(e,t,n)=>(r,s)=>s&&s[0]?s[0][e+"Size"]:R0(r)&&"getBBox"in r?r.getBBox()[t]:r[n],RF=K2("inline","width","offsetWidth"),AF=K2("block","height","offsetHeight");function OF({target:e,borderBoxSize:t}){var n;(n=gu.get(e))==null||n.forEach(r=>{r(e,{get width(){return RF(e,t)},get height(){return AF(e,t)}})})}function IF(e){e.forEach(OF)}function DF(){typeof ResizeObserver>"u"||(ts=new ResizeObserver(IF))}function _F(e,t){ts||DF();const n=V2(e);return n.forEach(r=>{let s=gu.get(r);s||(s=new Set,gu.set(r,s)),s.add(t),ts==null||ts.observe(r)}),()=>{n.forEach(r=>{const s=gu.get(r);s==null||s.delete(t),s!=null&&s.size||ts==null||ts.unobserve(r)})}}const vu=new Set;let ho;function FF(){ho=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};vu.forEach(t=>t(e))},window.addEventListener("resize",ho)}function zF(e){return vu.add(e),ho||FF(),()=>{vu.delete(e),!vu.size&&typeof ho=="function"&&(window.removeEventListener("resize",ho),ho=void 0)}}function Dy(e,t){return typeof e=="function"?zF(e):_F(e,t)}function BF(e){return R0(e)&&e.tagName==="svg"}const VF=[...F2,ot,Hn],$F=e=>VF.find(_2(e)),_y=()=>({translate:0,scale:1,origin:0,originPoint:0}),po=()=>({x:_y(),y:_y()}),Fy=()=>({min:0,max:0}),lt=()=>({x:Fy(),y:Fy()}),UF=new WeakMap;function ff(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Ol(e){return typeof e=="string"||Array.isArray(e)}const A0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],O0=["initial",...A0];function hf(e){return ff(e.animate)||O0.some(t=>Ol(e[t]))}function G2(e){return!!(hf(e)||e.variants)}function HF(e,t,n){for(const r in t){const s=t[r],i=n[r];if(Ct(s))e.addValue(r,s);else if(Ct(i))e.addValue(r,Go(s,{owner:e}));else if(i!==s)if(e.hasValue(r)){const o=e.getValue(r);o.liveStyle===!0?o.jump(s):o.hasAnimated||o.set(s)}else{const o=e.getStaticValue(r);e.addValue(r,Go(o!==void 0?o:s,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const km={current:null},q2={current:!1},WF=typeof window<"u";function KF(){if(q2.current=!0,!!WF)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>km.current=e.matches;e.addEventListener("change",t),t()}else km.current=!1}const zy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let cd={};function Z2(e){cd=e}function GF(){return cd}class qF{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:s,skipAnimations:i,blockInitialAnimation:o,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=C0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=_t.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,$e.render(this.render,!1,!0))};const{latestValues:d,renderState:f}=l;this.latestValues=d,this.baseTarget={...d},this.initialValues=n.initial?{...d}:{},this.renderState=f,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=i,this.options=c,this.blockInitialAnimation=!!o,this.isControllingVariants=hf(n),this.isVariantNode=G2(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const g=p[m];d[m]!==void 0&&Ct(g)&&g.set(d[m])}}mount(t){var n,r;if(this.hasBeenMounted)for(const s in this.initialValues)(n=this.values.get(s))==null||n.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=t,UF.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,i)=>this.bindToMotionValue(i,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(q2.current||KF(),this.shouldReduceMotion=km.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),zs(this.notifyUpdate),zs(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&P2.has(t)&&this.current instanceof HTMLElement){const{factory:o,keyframes:l,times:c,ease:d,duration:f}=n.accelerate,h=new N2({element:this.current,name:t,keyframes:l,times:c,ease:d,duration:un(f)}),p=o(h);this.valueSubscriptions.set(t,()=>{p(),h.cancel()});return}const r=aa.has(t);r&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&$e.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;typeof window<"u"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),i&&i(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in cd){const n=cd[t];if(!n)continue;const{isEnabled:r,Feature:s}=n;if(!this.features[t]&&s&&r(this.props)&&(this.features[t]=new s(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):lt()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<zy.length;r++){const s=zy[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i="on"+s,o=t[i];o&&(this.propEventSubscriptions[s]=this.on(s,o))}this.prevMotionValues=HF(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Go(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Gj(r)||Zj(r))?r=parseFloat(r):!$F(r)&&Hn.test(n)&&(r=B2(t,n)),this.setBaseTarget(t,Ct(r)?r.get():r)),Ct(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var i;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const o=N0(this.props,n,(i=this.presenceContext)==null?void 0:i.custom);o&&(r=o[t])}if(n&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!Ct(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new m0),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){T0.render(this.render)}}class Y2 extends qF{constructor(){super(...arguments),this.KeyframeResolver=wF}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ct(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Ws{constructor(t){this.isMounted=!1,this.node=t}update(){}}function X2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function ZF({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function YF(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function vh(e){return e===void 0||e===1}function Cm({scale:e,scaleX:t,scaleY:n}){return!vh(e)||!vh(t)||!vh(n)}function si(e){return Cm(e)||Q2(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function Q2(e){return By(e.x)||By(e.y)}function By(e){return e&&e!=="0%"}function ud(e,t,n){const r=e-n,s=t*r;return n+s}function Vy(e,t,n,r,s){return s!==void 0&&(e=ud(e,s,r)),ud(e,n,r)+t}function jm(e,t=0,n=1,r,s){e.min=Vy(e.min,t,n,r,s),e.max=Vy(e.max,t,n,r,s)}function J2(e,{x:t,y:n}){jm(e.x,t.translate,t.scale,t.originPoint),jm(e.y,n.translate,n.scale,n.originPoint)}const $y=.999999999999,Uy=1.0000000000001;function XF(e,t,n,r=!1){var l;const s=n.length;if(!s)return;t.x=t.y=1;let i,o;for(let c=0;c<s;c++){i=n[c],o=i.projectionDelta;const{visualElement:d}=i.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(or(e.x,-i.scroll.offset.x),or(e.y,-i.scroll.offset.y)),o&&(t.x*=o.x.scale,t.y*=o.y.scale,J2(e,o)),r&&si(i.latestValues)&&xu(e,i.latestValues,(l=i.layout)==null?void 0:l.layoutBox))}t.x<Uy&&t.x>$y&&(t.x=1),t.y<Uy&&t.y>$y&&(t.y=1)}function or(e,t){e.min+=t,e.max+=t}function Hy(e,t,n,r,s=.5){const i=qe(e.min,e.max,s);jm(e,t,n,i,r)}function Wy(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function xu(e,t,n){const r=n??e;Hy(e.x,Wy(t.x,r.x),t.scaleX,t.scale,t.originX),Hy(e.y,Wy(t.y,r.y),t.scaleY,t.scale,t.originY)}function eE(e,t){return X2(YF(e.getBoundingClientRect(),t))}function QF(e,t,n){const r=eE(e,n),{scroll:s}=t;return s&&(or(r.x,s.offset.x),or(r.y,s.offset.y)),r}const JF={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},ez=oa.length;function tz(e,t,n){let r="",s=!0;for(let i=0;i<ez;i++){const o=oa[i],l=e[o];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(o.startsWith("scale")?1:0);else{const d=parseFloat(l);c=o.startsWith("scale")?d===1:d===0}if(!c||n){const d=$2(l,P0[o]);if(!c){s=!1;const f=JF[o]||o;r+=`${f}(${d}) `}n&&(t[o]=d)}}return r=r.trim(),n?r=n(t,s?"":r):s&&(r="none"),r}function I0(e,t,n){const{style:r,vars:s,transformOrigin:i}=e;let o=!1,l=!1;for(const c in t){const d=t[c];if(aa.has(c)){o=!0;continue}else if(u2(c)){s[c]=d;continue}else{const f=$2(d,P0[c]);c.startsWith("origin")?(l=!0,i[c]=f):r[c]=f}}if(t.transform||(o||n?r.transform=tz(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:d="50%",originZ:f=0}=i;r.transformOrigin=`${c} ${d} ${f}`}}function tE(e,{style:t,vars:n},r,s){const i=e.style;let o;for(o in t)i[o]=t[o];s==null||s.applyProjectionStyles(i,r);for(o in n)i.setProperty(o,n[o])}function Ky(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Sa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(ue.test(e))e=parseFloat(e);else return e;const n=Ky(e,t.target.x),r=Ky(e,t.target.y);return`${n}% ${r}%`}},nz={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,s=Hn.parse(e);if(s.length>5)return r;const i=Hn.createTransformer(e),o=typeof s[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;s[0+o]/=l,s[1+o]/=c;const d=qe(l,c,.5);return typeof s[2+o]=="number"&&(s[2+o]/=d),typeof s[3+o]=="number"&&(s[3+o]/=d),i(s)}},Em={borderRadius:{...Sa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Sa,borderTopRightRadius:Sa,borderBottomLeftRadius:Sa,borderBottomRightRadius:Sa,boxShadow:nz};function nE(e,{layout:t,layoutId:n}){return aa.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!Em[e]||e==="opacity")}function D0(e,t,n){var o;const r=e.style,s=t==null?void 0:t.style,i={};if(!r)return i;for(const l in r)(Ct(r[l])||s&&Ct(s[l])||nE(l,e)||((o=n==null?void 0:n.getValue(l))==null?void 0:o.liveStyle)!==void 0)&&(i[l]=r[l]);return i}function rz(e){return window.getComputedStyle(e)}class sz extends Y2{constructor(){super(...arguments),this.type="html",this.renderInstance=tE}readValueFromInstance(t,n){var r;if(aa.has(n))return(r=this.projection)!=null&&r.isProjecting?fm(n):k3(t,n);{const s=rz(t),i=(u2(n)?s.getPropertyValue(n):s[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return eE(t,n)}build(t,n,r){I0(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return D0(t,n,r)}}const iz={offset:"stroke-dashoffset",array:"stroke-dasharray"},oz={offset:"strokeDashoffset",array:"strokeDasharray"};function az(e,t,n=1,r=0,s=!0){e.pathLength=1;const i=s?iz:oz;e[i.offset]=`${-r}`,e[i.array]=`${t} ${n}`}const lz=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function rE(e,{attrX:t,attrY:n,attrScale:r,pathLength:s,pathSpacing:i=1,pathOffset:o=0,...l},c,d,f){if(I0(e,l,d),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:p}=e;h.transform&&(p.transform=h.transform,delete h.transform),(p.transform||h.transformOrigin)&&(p.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),p.transform&&(p.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete h.transformBox);for(const m of lz)h[m]!==void 0&&(p[m]=h[m],delete h[m]);t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),s!==void 0&&az(h,s,i,o,!1)}const sE=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),iE=e=>typeof e=="string"&&e.toLowerCase()==="svg";function cz(e,t,n,r){tE(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(sE.has(s)?s:L0(s),t.attrs[s])}function oE(e,t,n){const r=D0(e,t,n);for(const s in e)if(Ct(e[s])||Ct(t[s])){const i=oa.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[i]=e[s]}return r}class uz extends Y2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=lt}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(aa.has(n)){const r=z2(n);return r&&r.default||0}return n=sE.has(n)?n:L0(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return oE(t,n,r)}build(t,n,r){rE(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,s){cz(t,n,r,s)}mount(t){this.isSVGTag=iE(t.tagName),super.mount(t)}}const dz=O0.length;function aE(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?aE(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<dz;n++){const r=O0[n],s=e.props[r];(Ol(s)||s===!1)&&(t[r]=s)}return t}function lE(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const fz=[...A0].reverse(),hz=A0.length;function pz(e){return t=>Promise.all(t.map(({animation:n,options:r})=>uF(e,n,r)))}function mz(e){let t=pz(e),n=Gy(),r=!0,s=!1;const i=d=>(f,h)=>{var m;const p=Si(e,h,d==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);if(p){const{transition:g,transitionEnd:v,...x}=p;f={...f,...x,...v}}return f};function o(d){t=d(e)}function l(d){const{props:f}=e,h=aE(e.parent)||{},p=[],m=new Set;let g={},v=1/0;for(let b=0;b<hz;b++){const y=fz[b],w=n[y],S=f[y]!==void 0?f[y]:h[y],k=Ol(S),C=y===d?w.isActive:null;C===!1&&(v=b);let j=S===h[y]&&S!==f[y]&&k;if(j&&(r||s)&&e.manuallyAnimateOnMount&&(j=!1),w.protectedKeys={...g},!w.isActive&&C===null||!S&&!w.prevProp||ff(S)||typeof S=="boolean")continue;if(y==="exit"&&w.isActive&&C!==!0){w.prevResolvedValues&&(g={...g,...w.prevResolvedValues});continue}const E=gz(w.prevProp,S);let L=E||y===d&&w.isActive&&!j&&k||b>v&&k,N=!1;const R=Array.isArray(S)?S:[S];let D=R.reduce(i(y),{});C===!1&&(D={});const{prevResolvedValues:F={}}=w,_={...F,...D},z=T=>{L=!0,m.has(T)&&(N=!0,m.delete(T)),w.needsAnimating[T]=!0;const O=e.getValue(T);O&&(O.liveStyle=!1)};for(const T in _){const O=D[T],I=F[T];if(g.hasOwnProperty(T))continue;let V=!1;xm(O)&&xm(I)?V=!lE(O,I):V=O!==I,V?O!=null?z(T):m.add(T):O!==void 0&&m.has(T)?z(T):w.protectedKeys[T]=!0}w.prevProp=S,w.prevResolvedValues=D,w.isActive&&(g={...g,...D}),(r||s)&&e.blockInitialAnimation&&(L=!1);const A=j&&E;L&&(!A||N)&&p.push(...R.map(T=>{const O={type:y};if(typeof T=="string"&&(r||s)&&!A&&e.manuallyAnimateOnMount&&e.parent){const{parent:I}=e,V=Si(I,T);if(I.enteringChildren&&V){const{delayChildren:Z}=V.transition||{};O.delay=T2(I.enteringChildren,e,Z)}}return{animation:T,options:O}}))}if(m.size){const b={};if(typeof f.initial!="boolean"){const y=Si(e,Array.isArray(f.initial)?f.initial[0]:f.initial);y&&y.transition&&(b.transition=y.transition)}m.forEach(y=>{const w=e.getBaseTarget(y),S=e.getValue(y);S&&(S.liveStyle=!0),b[y]=w??null}),p.push({animation:b})}let x=!!p.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(x=!1),r=!1,s=!1,x?t(p):Promise.resolve()}function c(d,f){var p;if(n[d].isActive===f)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(m=>{var g;return(g=m.animationState)==null?void 0:g.setActive(d,f)}),n[d].isActive=f;const h=l(d);for(const m in n)n[m].protectedKeys={};return h}return{animateChanges:l,setActive:c,setAnimateFunction:o,getState:()=>n,reset:()=>{n=Gy(),s=!0}}}function gz(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!lE(t,e):!1}function ei(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Gy(){return{animate:ei(!0),whileInView:ei(),whileHover:ei(),whileTap:ei(),whileDrag:ei(),whileFocus:ei(),exit:ei()}}function Nm(e,t){e.min=t.min,e.max=t.max}function On(e,t){Nm(e.x,t.x),Nm(e.y,t.y)}function qy(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const cE=1e-4,vz=1-cE,xz=1+cE,uE=.01,yz=0-uE,bz=0+uE;function Ft(e){return e.max-e.min}function wz(e,t,n){return Math.abs(e-t)<=n}function Zy(e,t,n,r=.5){e.origin=r,e.originPoint=qe(t.min,t.max,e.origin),e.scale=Ft(n)/Ft(t),e.translate=qe(n.min,n.max,e.origin)-e.originPoint,(e.scale>=vz&&e.scale<=xz||isNaN(e.scale))&&(e.scale=1),(e.translate>=yz&&e.translate<=bz||isNaN(e.translate))&&(e.translate=0)}function Ja(e,t,n,r){Zy(e.x,t.x,n.x,r?r.originX:void 0),Zy(e.y,t.y,n.y,r?r.originY:void 0)}function Yy(e,t,n,r=0){const s=r?qe(n.min,n.max,r):n.min;e.min=s+t.min,e.max=e.min+Ft(t)}function Sz(e,t,n,r){Yy(e.x,t.x,n.x,r==null?void 0:r.x),Yy(e.y,t.y,n.y,r==null?void 0:r.y)}function Xy(e,t,n,r=0){const s=r?qe(n.min,n.max,r):n.min;e.min=t.min-s,e.max=e.min+Ft(t)}function dd(e,t,n,r){Xy(e.x,t.x,n.x,r==null?void 0:r.x),Xy(e.y,t.y,n.y,r==null?void 0:r.y)}function Qy(e,t,n,r,s){return e-=t,e=ud(e,1/n,r),s!==void 0&&(e=ud(e,1/s,r)),e}function kz(e,t=0,n=1,r=.5,s,i=e,o=e){if(hr.test(t)&&(t=parseFloat(t),t=qe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=qe(i.min,i.max,r);e===i&&(l-=t),e.min=Qy(e.min,t,n,l,s),e.max=Qy(e.max,t,n,l,s)}function Jy(e,t,[n,r,s],i,o){kz(e,t[n],t[r],t[s],t.scale,i,o)}const Cz=["x","scaleX","originX"],jz=["y","scaleY","originY"];function eb(e,t,n,r){Jy(e.x,t,Cz,n?n.x:void 0,r?r.x:void 0),Jy(e.y,t,jz,n?n.y:void 0,r?r.y:void 0)}function tb(e){return e.translate===0&&e.scale===1}function dE(e){return tb(e.x)&&tb(e.y)}function nb(e,t){return e.min===t.min&&e.max===t.max}function Ez(e,t){return nb(e.x,t.x)&&nb(e.y,t.y)}function rb(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function fE(e,t){return rb(e.x,t.x)&&rb(e.y,t.y)}function sb(e){return Ft(e.x)/Ft(e.y)}function ib(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function tr(e){return[e("x"),e("y")]}function Nz(e,t,n){let r="";const s=e.x.translate/t.x,i=e.y.translate/t.y,o=(n==null?void 0:n.z)||0;if((s||i||o)&&(r=`translate3d(${s}px, ${i}px, ${o}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:d,rotate:f,rotateX:h,rotateY:p,skewX:m,skewY:g}=n;d&&(r=`perspective(${d}px) ${r}`),f&&(r+=`rotate(${f}deg) `),h&&(r+=`rotateX(${h}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),g&&(r+=`skewY(${g}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const hE=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],Lz=hE.length,ob=e=>typeof e=="string"?parseFloat(e):e,ab=e=>typeof e=="number"||ue.test(e);function Pz(e,t,n,r,s,i){s?(e.opacity=qe(0,n.opacity??1,Tz(r)),e.opacityExit=qe(t.opacity??1,0,Mz(r))):i&&(e.opacity=qe(t.opacity??1,n.opacity??1,r));for(let o=0;o<Lz;o++){const l=hE[o];let c=lb(t,l),d=lb(n,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||ab(c)===ab(d)?(e[l]=Math.max(qe(ob(c),ob(d),r),0),(hr.test(d)||hr.test(c))&&(e[l]+="%")):e[l]=d}(t.rotate||n.rotate)&&(e.rotate=qe(t.rotate||0,n.rotate||0,r))}function lb(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Tz=pE(0,.5,s2),Mz=pE(.5,.95,jn);function pE(e,t,n){return r=>r<e?0:r>t?1:n(Rl(e,t,r))}function Rz(e,t,n){const r=Ct(e)?e:Go(e);return r.start(E0("",r,t,n)),r.animation}function Il(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const Az=(e,t)=>e.depth-t.depth;class Oz{constructor(){this.children=[],this.isDirty=!1}add(t){h0(this.children,t),this.isDirty=!0}remove(t){sd(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Az),this.isDirty=!1,this.children.forEach(t)}}function Iz(e,t){const n=_t.now(),r=({timestamp:s})=>{const i=s-n;i>=t&&(zs(r),e(i-t))};return $e.setup(r,!0),()=>zs(r)}function yu(e){return Ct(e)?e.get():e}class Dz{constructor(){this.members=[]}add(t){h0(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const s=r.instance;(!s||s.isConnected===!1)&&!r.snapshot&&(sd(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(sd(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1&&((n=s.instance)==null?void 0:n.isConnected)!==!1)return this.promote(s),!0}return!1}promote(t,n){var s;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:i}=r.options,{layoutDependency:o}=t.options;(i===void 0||i!==o)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(s=t.root)!=null&&s.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,s,i,o;(r=(n=t.options).onExitComplete)==null||r.call(n),(o=(s=t.resumingFrom)==null?void 0:(i=s.options).onExitComplete)==null||o.call(i)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const bu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},xh=["","X","Y","Z"],_z=1e3;let Fz=0;function yh(e,t,n,r){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),r&&(r[e]=0))}function mE(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=I2(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",$e,!(s||i))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&mE(r)}function gE({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(o={},l=t==null?void 0:t()){this.id=Fz++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(Vz),this.nodes.forEach(Gz),this.nodes.forEach(qz),this.nodes.forEach($z)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Oz)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new m0),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=R0(o)&&!BF(o),this.instance=o;const{layoutId:l,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let f,h=0;const p=()=>this.root.updateBlockedByResize=!1;$e.read(()=>{h=window.innerWidth}),e(o,()=>{const m=window.innerWidth;m!==h&&(h=m,this.root.updateBlockedByResize=!0,f&&f(),f=Iz(p,250),bu.hasAnimatedSinceResize&&(bu.hasAnimatedSinceResize=!1,this.nodes.forEach(db)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&d&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||d.getDefaultTransition()||Jz,{onLayoutAnimationStart:v,onLayoutAnimationComplete:x}=d.getProps(),b=!this.targetLayout||!fE(this.targetLayout,m),y=!h&&p;if(this.options.layoutRoot||this.resumeFrom||y||h&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...j0(g,"layout"),onPlay:v,onComplete:x};(d.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(f,y)}else h||db(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),zs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(Zz),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&mE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const h=this.path[f];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(Hz),this.nodes.forEach(cb);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(ub);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(Wz),this.nodes.forEach(Kz),this.nodes.forEach(zz),this.nodes.forEach(Bz)):this.nodes.forEach(ub),this.clearAllSnapshots();const l=_t.now();wt.delta=pr(0,1e3/60,l-wt.timestamp),wt.timestamp=l,wt.isProcessing=!0,uh.update.process(wt),uh.preRender.process(wt),uh.render.process(wt),wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,T0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(Uz),this.sharedNodes.forEach(Yz)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,$e.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){$e.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Ft(this.snapshot.measuredBox.x)&&!Ft(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=lt()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!dE(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,f=d!==this.prevTransformTemplateValue;o&&this.instance&&(l||si(this.latestValues)||f)&&(s(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),e6(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var d;const{visualElement:o}=this.options;if(!o)return lt();const l=o.measureViewportBox();if(!(((d=this.scroll)==null?void 0:d.wasRoot)||this.path.some(t6))){const{scroll:f}=this.root;f&&(or(l.x,f.offset.x),or(l.y,f.offset.y))}return l}removeElementScroll(o){var c;const l=lt();if(On(l,o),(c=this.scroll)!=null&&c.wasRoot)return l;for(let d=0;d<this.path.length;d++){const f=this.path[d],{scroll:h,options:p}=f;f!==this.root&&h&&p.layoutScroll&&(h.wasRoot&&On(l,o),or(l.x,h.offset.x),or(l.y,h.offset.y))}return l}applyTransform(o,l=!1,c){var f,h;const d=c||lt();On(d,o);for(let p=0;p<this.path.length;p++){const m=this.path[p];!l&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(or(d.x,-m.scroll.offset.x),or(d.y,-m.scroll.offset.y)),si(m.latestValues)&&xu(d,m.latestValues,(f=m.layout)==null?void 0:f.layoutBox)}return si(this.latestValues)&&xu(d,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),d}removeTransform(o){var c;const l=lt();On(l,o);for(let d=0;d<this.path.length;d++){const f=this.path[d];if(!si(f.latestValues))continue;let h;f.instance&&(Cm(f.latestValues)&&f.updateSnapshot(),h=lt(),On(h,f.measurePageBox())),eb(l,f.latestValues,(c=f.snapshot)==null?void 0:c.layoutBox,h)}return si(this.latestValues)&&eb(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var m;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(o||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!this.layout||!(f||h))return;this.resolvedRelativeTargetAt=wt.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=lt(),this.targetWithTransforms=lt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),Sz(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):On(this.target,this.layout.layoutBox),J2(this.target,this.targetDelta)):On(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Cm(this.parent.latestValues)||Q2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,l,c){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=lt(),this.relativeTargetOrigin=lt(),dd(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),On(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),l=!!this.resumingFrom||this!==o;let c=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===wt.timestamp&&(c=!1),c)return;const{layout:d,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(d||f))return;On(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;XF(this.layoutCorrected,this.treeScale,this.path,l),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=lt());const{target:m}=o;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(qy(this.prevProjectionDelta.x,this.projectionDelta.x),qy(this.prevProjectionDelta.y,this.projectionDelta.y)),Ja(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!ib(this.projectionDelta.x,this.prevProjectionDelta.x)||!ib(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),o){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=po(),this.projectionDelta=po(),this.projectionDeltaWithTransform=po()}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},f={...this.latestValues},h=po();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=lt(),m=c?c.source:void 0,g=this.layout?this.layout.source:void 0,v=m!==g,x=this.getStack(),b=!x||x.members.length<=1,y=!!(v&&!b&&this.options.crossfade===!0&&!this.path.some(Qz));this.animationProgress=0;let w;this.mixTargetDelta=S=>{const k=S/1e3;fb(h.x,o.x,k),fb(h.y,o.y,k),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(dd(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Xz(this.relativeTarget,this.relativeTargetOrigin,p,k),w&&Ez(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=lt()),On(w,this.relativeTarget)),v&&(this.animationValues=f,Pz(f,d,this.latestValues,k,y,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var l,c,d;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(d=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||d.stop(),this.pendingAnimation&&(zs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=$e.update(()=>{bu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Go(0)),this.motionValue.jump(0,!1),this.currentAnimation=Rz(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(_z),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:f}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&vE(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||lt();const h=Ft(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+h;const p=Ft(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+p}On(l,c),xu(l,f),Ja(this.projectionDeltaWithTransform,this.layoutCorrected,l,f)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Dz),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var l;const{layoutId:o}=this.options;return o?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:o}=this.options;return o?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const d={};c.z&&yh("z",o,d,this.animationValues);for(let f=0;f<xh.length;f++)yh(`rotate${xh[f]}`,o,d,this.animationValues),yh(`skew${xh[f]}`,o,d,this.animationValues);o.render();for(const f in d)o.setStaticValue(f,d[f]),this.animationValues&&(this.animationValues[f]=d[f]);o.scheduleRender()}applyProjectionStyles(o,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=yu(l==null?void 0:l.pointerEvents)||"",o.transform=c?c(this.latestValues,""):"none";return}const d=this.getLead();if(!this.projectionDelta||!this.layout||!d.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=yu(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!si(this.latestValues)&&(o.transform=c?c({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=d.animationValues||d.latestValues;this.applyTransformsToTarget();let h=Nz(this.projectionDeltaWithTransform,this.treeScale,f);c&&(h=c(f,h)),o.transform=h;const{x:p,y:m}=this.projectionDelta;o.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,d.animationValues?o.opacity=d===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=d===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in Em){if(f[g]===void 0)continue;const{correct:v,applyTo:x,isCSSVariable:b}=Em[g],y=h==="none"?f[g]:v(f[g],d);if(x){const w=x.length;for(let S=0;S<w;S++)o[x[S]]=y}else b?this.options.visualElement.renderState.vars[g]=y:o[g]=y}this.options.layoutId&&(o.pointerEvents=d===this?yu(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(cb),this.root.sharedNodes.clear()}}}function zz(e){e.updateLayout()}function Bz(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:i}=e.options,o=t.source!==e.layout.source;if(i==="size")tr(h=>{const p=o?t.measuredBox[h]:t.layoutBox[h],m=Ft(p);p.min=r[h].min,p.max=p.min+m});else if(i==="x"||i==="y"){const h=i==="x"?"y":"x";Nm(o?t.measuredBox[h]:t.layoutBox[h],r[h])}else vE(i,t.layoutBox,r)&&tr(h=>{const p=o?t.measuredBox[h]:t.layoutBox[h],m=Ft(r[h]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+m)});const l=po();Ja(l,r,t.layoutBox);const c=po();o?Ja(c,e.applyTransform(s,!0),t.measuredBox):Ja(c,r,t.layoutBox);const d=!dE(l);let f=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:p,layout:m}=h;if(p&&m){const g=e.options.layoutAnchor||void 0,v=lt();dd(v,t.layoutBox,p.layoutBox,g);const x=lt();dd(x,r,m.layoutBox,g),fE(v,x)||(f=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=v,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeLayoutChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function Vz(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function $z(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function Uz(e){e.clearSnapshot()}function cb(e){e.clearMeasurements()}function Hz(e){e.isLayoutDirty=!0,e.updateLayout()}function ub(e){e.isLayoutDirty=!1}function Wz(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function Kz(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function db(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function Gz(e){e.resolveTargetDelta()}function qz(e){e.calcProjection()}function Zz(e){e.resetSkewAndRotation()}function Yz(e){e.removeLeadSnapshot()}function fb(e,t,n){e.translate=qe(t.translate,0,n),e.scale=qe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function hb(e,t,n,r){e.min=qe(t.min,n.min,r),e.max=qe(t.max,n.max,r)}function Xz(e,t,n,r){hb(e.x,t.x,n.x,r),hb(e.y,t.y,n.y,r)}function Qz(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Jz={duration:.45,ease:[.4,0,.1,1]},pb=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),mb=pb("applewebkit/")&&!pb("chrome/")?Math.round:jn;function gb(e){e.min=mb(e.min),e.max=mb(e.max)}function e6(e){gb(e.x),gb(e.y)}function vE(e,t,n){return e==="position"||e==="preserve-aspect"&&!wz(sb(t),sb(n),.2)}function t6(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const n6=gE({attachResizeListener:(e,t)=>Il(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),bh={current:void 0},xE=gE({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!bh.current){const e=new n6({});e.mount(window),e.setOptions({layoutScroll:!0}),bh.current=e}return bh.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),yE=u.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function r6(e=!0){const t=u.useContext(f0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:s}=t,i=u.useId();u.useEffect(()=>{if(e)return s(i)},[e]);const o=u.useCallback(()=>e&&r&&r(i),[i,r,e]);return!n&&r?[!1,o]:[!0]}const bE=u.createContext({strict:!1}),vb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let xb=!1;function s6(){if(xb)return;const e={};for(const t in vb)e[t]={isEnabled:n=>vb[t].some(r=>!!n[r])};Z2(e),xb=!0}function wE(){return s6(),GF()}function i6(e){const t=wE();for(const n in e)t[n]={...t[n],...e[n]};Z2(t)}const o6=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function fd(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||o6.has(e)}let SE=e=>!fd(e);function a6(e){typeof e=="function"&&(SE=t=>t.startsWith("on")?!fd(t):e(t))}try{a6(require("@emotion/is-prop-valid").default)}catch{}function l6(e,t,n){const r={};for(const s in e)s==="values"&&typeof e.values=="object"||Ct(e[s])||(SE(s)||n===!0&&fd(s)||!t&&!fd(s)||e.draggable&&s.startsWith("onDrag"))&&(r[s]=e[s]);return r}const pf=u.createContext({});function c6(e,t){if(hf(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Ol(n)?n:void 0,animate:Ol(r)?r:void 0}}return e.inherit!==!1?t:{}}function u6(e){const{initial:t,animate:n}=c6(e,u.useContext(pf));return u.useMemo(()=>({initial:t,animate:n}),[yb(t),yb(n)])}function yb(e){return Array.isArray(e)?e.join(" "):e}const _0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function kE(e,t,n){for(const r in t)!Ct(t[r])&&!nE(r,n)&&(e[r]=t[r])}function d6({transformTemplate:e},t){return u.useMemo(()=>{const n=_0();return I0(n,t,e),Object.assign({},n.vars,n.style)},[t])}function f6(e,t){const n=e.style||{},r={};return kE(r,n,e),Object.assign(r,d6(e,t)),r}function h6(e,t){const n={},r=f6(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const CE=()=>({..._0(),attrs:{}});function p6(e,t,n,r){const s=u.useMemo(()=>{const i=CE();return rE(i,t,iE(r),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};kE(i,e.style,e),s.style={...i,...s.style}}return s}const m6=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function F0(e){return typeof e!="string"||e.includes("-")?!1:!!(m6.indexOf(e)>-1||/[A-Z]/u.test(e))}function g6(e,t,n,{latestValues:r},s,i=!1,o){const c=(o??F0(e)?p6:h6)(t,r,s,e),d=l6(t,typeof e=="string",i),f=e!==u.Fragment?{...d,...c,ref:n}:{},{children:h}=t,p=u.useMemo(()=>Ct(h)?h.get():h,[h]);return u.createElement(e,{...f,children:p})}function v6({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,s){return{latestValues:x6(n,r,s,e),renderState:t()}}function x6(e,t,n,r){const s={},i=r(e,{});for(const p in i)s[p]=yu(i[p]);let{initial:o,animate:l}=e;const c=hf(e),d=G2(e);t&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const h=f?l:o;if(h&&typeof h!="boolean"&&!ff(h)){const p=Array.isArray(h)?h:[h];for(let m=0;m<p.length;m++){const g=N0(e,p[m]);if(g){const{transitionEnd:v,transition:x,...b}=g;for(const y in b){let w=b[y];if(Array.isArray(w)){const S=f?w.length-1:0;w=w[S]}w!==null&&(s[y]=w)}for(const y in v)s[y]=v[y]}}}return s}const jE=e=>(t,n)=>{const r=u.useContext(pf),s=u.useContext(f0),i=()=>v6(e,t,r,s);return n?i():m_(i)},y6=jE({scrapeMotionValuesFromProps:D0,createRenderState:_0}),b6=jE({scrapeMotionValuesFromProps:oE,createRenderState:CE}),w6=Symbol.for("motionComponentSymbol");function S6(e,t,n){const r=u.useRef(n);u.useInsertionEffect(()=>{r.current=n});const s=u.useRef(null);return u.useCallback(i=>{var l;i&&((l=e.onMount)==null||l.call(e,i));const o=r.current;if(typeof o=="function")if(i){const c=o(i);typeof c=="function"&&(s.current=c)}else s.current?(s.current(),s.current=null):o(i);else o&&(o.current=i);t&&(i?t.mount(i):t.unmount())},[t])}const EE=u.createContext({});function Xi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function k6(e,t,n,r,s,i){var w,S;const{visualElement:o}=u.useContext(pf),l=u.useContext(bE),c=u.useContext(f0),d=u.useContext(yE),f=d.reducedMotion,h=d.skipAnimations,p=u.useRef(null),m=u.useRef(!1);r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:o,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:f,skipAnimations:h,isSVG:i}),m.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const g=p.current,v=u.useContext(EE);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&C6(p.current,n,s,v);const x=u.useRef(!1);u.useInsertionEffect(()=>{g&&x.current&&g.update(n,c)});const b=n[O2],y=u.useRef(!!b&&typeof window<"u"&&!((w=window.MotionHandoffIsComplete)!=null&&w.call(window,b))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,b)));return v_(()=>{m.current=!0,g&&(x.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),y.current&&g.animationState&&g.animationState.animateChanges())}),u.useEffect(()=>{g&&(!y.current&&g.animationState&&g.animationState.animateChanges(),y.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,b)}),y.current=!1),g.enteringChildren=void 0)}),g}function C6(e,t,n,r){const{layoutId:s,layout:i,drag:o,dragConstraints:l,layoutScroll:c,layoutRoot:d,layoutAnchor:f,layoutCrossfade:h}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:NE(e.parent)),e.projection.setOptions({layoutId:s,layout:i,alwaysMeasureLayout:!!o||l&&Xi(l),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,crossfade:h,layoutScroll:c,layoutRoot:d,layoutAnchor:f})}function NE(e){if(e)return e.options.allowProjection!==!1?e.projection:NE(e.parent)}function wh(e,{forwardMotionProps:t=!1,type:n}={},r,s){r&&i6(r);const i=n?n==="svg":F0(e),o=i?b6:y6;function l(d,f){let h;const p={...u.useContext(yE),...d,layoutId:j6(d)},{isStatic:m}=p,g=u6(d),v=o(d,m);if(!m&&typeof window<"u"){E6();const x=N6(p);h=x.MeasureLayout,g.visualElement=k6(e,v,p,s,x.ProjectionNode,i)}return a.jsxs(pf.Provider,{value:g,children:[h&&g.visualElement?a.jsx(h,{visualElement:g.visualElement,...p}):null,g6(e,d,S6(v,g.visualElement,f),v,m,t,i)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=u.forwardRef(l);return c[w6]=e,c}function j6({layoutId:e}){const t=u.useContext(Kj).id;return t&&e!==void 0?t+"-"+e:e}function E6(e,t){u.useContext(bE).strict}function N6(e){const t=wE(),{drag:n,layout:r}=t;if(!n&&!r)return{};const s={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function L6(e,t){if(typeof Proxy>"u")return wh;const n=new Map,r=(i,o)=>wh(i,o,e,t),s=(i,o)=>r(i,o);return new Proxy(s,{get:(i,o)=>o==="create"?r:(n.has(o)||n.set(o,wh(o,void 0,e,t)),n.get(o))})}const P6=(e,t)=>t.isSVG??F0(e)?new uz(t):new sz(t,{allowProjection:e!==u.Fragment});class T6 extends Ws{constructor(t){super(t),t.animationState||(t.animationState=mz(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();ff(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let M6=0;class R6 extends Ws{constructor(){super(...arguments),this.id=M6++,this.isExitComplete=!1}update(){var i;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:o,custom:l}=this.node.getProps();if(typeof o=="string"){const c=Si(this.node,o,l);if(c){const{transition:d,transitionEnd:f,...h}=c;for(const p in h)(i=this.node.getValue(p))==null||i.jump(h[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const A6={animation:{Feature:T6},exit:{Feature:R6}};function lc(e){return{point:{x:e.pageX,y:e.pageY}}}const O6=e=>t=>M0(t)&&e(t,lc(t));function el(e,t,n,r){return Il(e,t,O6(n),r)}const LE=({current:e})=>e?e.ownerDocument.defaultView:null,bb=(e,t)=>Math.abs(e-t);function I6(e,t){const n=bb(e.x,t.x),r=bb(e.y,t.y);return Math.sqrt(n**2+r**2)}const wb=new Set(["auto","scroll"]);class PE{constructor(t,n,{transformPagePoint:r,contextWindow:s=window,dragSnapToOrigin:i=!1,distanceThreshold:o=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=zc(this.lastRawMoveEventInfo,this.transformPagePoint));const m=Sh(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,v=I6(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!v)return;const{point:x}=m,{timestamp:b}=wt;this.history.push({...x,timestamp:b});const{onStart:y,onMove:w}=this.handlers;g||(y&&y(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=zc(g,this.transformPagePoint),$e.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:v,onSessionEnd:x,resumeAnimation:b}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const y=Sh(m.type==="pointercancel"?this.lastMoveEventInfo:zc(g,this.transformPagePoint),this.history);this.startEvent&&v&&v(m,y),x&&x(m,y)},!M0(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=o,this.contextWindow=s||window;const c=lc(t),d=zc(c,this.transformPagePoint),{point:f}=d,{timestamp:h}=wt;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=n;p&&p(t,Sh(d,this.history)),this.removeListeners=ic(el(this.contextWindow,"pointermove",this.handlePointerMove),el(this.contextWindow,"pointerup",this.handlePointerUp),el(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(wb.has(r.overflowX)||wb.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,s=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:s.x-n.x,y:s.y-n.y};i.x===0&&i.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,s),$e.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),zs(this.updatePoint)}}function zc(e,t){return t?{point:t(e.point)}:e}function Sb(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Sh({point:e},t){return{point:e,delta:Sb(e,TE(t)),offset:Sb(e,D6(t)),velocity:_6(t,.1)}}function D6(e){return e[0]}function TE(e){return e[e.length-1]}function _6(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const s=TE(e);for(;n>=0&&(r=e[n],!(s.timestamp-r.timestamp>un(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&s.timestamp-r.timestamp>un(t)*2&&(r=e[1]);const i=Sn(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const o={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function F6(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?qe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?qe(n,e,r.max):Math.min(e,n)),e}function kb(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function z6(e,{top:t,left:n,bottom:r,right:s}){return{x:kb(e.x,n,s),y:kb(e.y,t,r)}}function Cb(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function B6(e,t){return{x:Cb(e.x,t.x),y:Cb(e.y,t.y)}}function V6(e,t){let n=.5;const r=Ft(e),s=Ft(t);return s>r?n=Rl(t.min,t.max-r,e.min):r>s&&(n=Rl(e.min,e.max-s,t.min)),pr(0,1,n)}function $6(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Lm=.35;function U6(e=Lm){return e===!1?e=0:e===!0&&(e=Lm),{x:jb(e,"left","right"),y:jb(e,"top","bottom")}}function jb(e,t,n){return{min:Eb(e,t),max:Eb(e,n)}}function Eb(e,t){return typeof e=="number"?e:e[t]||0}const H6=new WeakMap;class W6{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=lt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const i=h=>{n&&this.snapToCursor(lc(h).point),this.stopAnimation()},o=(h,p)=>{const{drag:m,dragPropagation:g,onDragStart:v}=this.getProps();if(m&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=kF(m),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),tr(b=>{let y=this.getAxisMotionValue(b).get()||0;if(hr.test(y)){const{projection:w}=this.visualElement;if(w&&w.layout){const S=w.layout.layoutBox[b];S&&(y=Ft(S)*(parseFloat(y)/100))}}this.originPoint[b]=y}),v&&$e.update(()=>v(h,p),!1,!0),ym(this.visualElement,"transform");const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},l=(h,p)=>{this.latestPointerEvent=h,this.latestPanInfo=p;const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:v,onDrag:x}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=p;if(g&&this.currentDirection===null){this.currentDirection=G6(b),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),x&&$e.update(()=>x(h,p),!1,!0)},c=(h,p)=>{this.latestPointerEvent=h,this.latestPanInfo=p,this.stop(h,p),this.latestPointerEvent=null,this.latestPanInfo=null},d=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new PE(t,{onSessionStart:i,onStart:o,onMove:l,onSessionEnd:c,resumeAnimation:d},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:r,contextWindow:LE(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,s=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!s||!r)return;const{velocity:o}=s;this.startAnimation(o);const{onDragEnd:l}=this.getProps();l&&$e.postRender(()=>l(r,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:s}=this.getProps();if(!r||!Bc(t,s,this.currentDirection))return;const i=this.getAxisMotionValue(t);let o=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(o=F6(o,this.constraints[t],this.elastic[t])),i.set(o)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,s=this.constraints;t&&Xi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=z6(r.layoutBox,t):this.constraints=!1,this.elastic=U6(n),s!==this.constraints&&!Xi(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&tr(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=$6(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Xi(t))return!1;const r=t.current,{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const i=QF(r,s.root,this.visualElement.getTransformPagePoint());let o=B6(s.layout.layoutBox,i);if(n){const l=n(ZF(o));this.hasMutatedConstraints=!!l,l&&(o=X2(l))}return o}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=tr(f=>{if(!Bc(f,n,this.currentDirection))return;let h=c&&c[f]||{};(o===!0||o===f)&&(h={min:0,max:0});const p=s?200:1e6,m=s?40:1e7,g={type:"inertia",velocity:r?t[f]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(f,g)});return Promise.all(d).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return ym(this.visualElement,t),r.start(E0(t,r,0,n,this.visualElement,!1))}stopAnimation(){tr(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),s=r[n];return s||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){tr(n=>{const{drag:r}=this.getProps();if(!Bc(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:o,max:l}=s.layout.layoutBox[n],c=i.get()||0;i.set(t[n]-qe(o,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Xi(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};tr(o=>{const l=this.getAxisMotionValue(o);if(l&&this.constraints!==!1){const c=l.get();s[o]=V6({min:c,max:c},this.constraints[o])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),tr(o=>{if(!Bc(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(qe(c,d,s[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;H6.set(this.visualElement,this);const t=this.visualElement.current,n=el(t,"pointerdown",d=>{const{drag:f,dragListener:h=!0}=this.getProps(),p=d.target,m=p!==t&&PF(p);f&&h&&!m&&this.start(d)});let r;const s=()=>{const{dragConstraints:d}=this.getProps();Xi(d)&&d.current&&(this.constraints=this.resolveRefConstraints(),r||(r=K6(t,d.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,o=i.addEventListener("measure",s);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),$e.read(s);const l=Il(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:d,hasLayoutChanged:f})=>{this.isDragging&&f&&(tr(h=>{const p=this.getAxisMotionValue(h);p&&(this.originPoint[h]+=d[h].translate,p.set(p.get()+d[h].translate))}),this.visualElement.render())});return()=>{l(),n(),o(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:o=Lm,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:o,dragMomentum:l}}}function Nb(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function K6(e,t,n){const r=Dy(e,Nb(n)),s=Dy(t,Nb(n));return()=>{r(),s()}}function Bc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function G6(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class q6 extends Ws{constructor(t){super(t),this.removeGroupControls=jn,this.removeListeners=jn,this.controls=new W6(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jn}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const kh=e=>(t,n)=>{e&&$e.update(()=>e(t,n),!1,!0)};class Z6 extends Ws{constructor(){super(...arguments),this.removePointerDownListener=jn}onPointerDown(t){this.session=new PE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:LE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:kh(t),onStart:kh(n),onMove:kh(r),onEnd:(i,o)=>{delete this.session,s&&$e.postRender(()=>s(i,o))}}}mount(){this.removePointerDownListener=el(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Ch=!1;class Y6 extends u.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),Ch&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),bu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,{projection:o}=r;return o&&(o.isPresent=i,t.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),Ch=!0,s||t.layoutDependency!==n||n===void 0||t.isPresent!==i?o.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?o.promote():o.relegate()||$e.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),T0.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=t;Ch=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ME(e){const[t,n]=r6(),r=u.useContext(Kj);return a.jsx(Y6,{...e,layoutGroup:r,switchLayoutGroup:u.useContext(EE),isPresent:t,safeToRemove:n})}const X6={pan:{Feature:Z6},drag:{Feature:q6,ProjectionNode:xE,MeasureLayout:ME}};function Lb(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,i=r[s];i&&$e.postRender(()=>i(t,lc(t)))}class Q6 extends Ws{mount(){const{current:t}=this.node;t&&(this.unmount=jF(t,(n,r)=>(Lb(this.node,r,"Start"),s=>Lb(this.node,s,"End"))))}unmount(){}}class J6 extends Ws{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=ic(Il(this.node.current,"focus",()=>this.onFocus()),Il(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function Pb(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),i=r[s];i&&$e.postRender(()=>i(t,lc(t)))}class e8 extends Ws{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=MF(t,(s,i)=>(Pb(this.node,i,"Start"),(o,{success:l})=>Pb(this.node,o,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const Pm=new WeakMap,jh=new WeakMap,t8=e=>{const t=Pm.get(e.target);t&&t(e)},n8=e=>{e.forEach(t8)};function r8({root:e,...t}){const n=e||document;jh.has(n)||jh.set(n,{});const r=jh.get(n),s=JSON.stringify(t);return r[s]||(r[s]=new IntersectionObserver(n8,{root:e,...t})),r[s]}function s8(e,t,n){const r=r8(t);return Pm.set(e,n),r.observe(e),()=>{Pm.delete(e),r.unobserve(e)}}const i8={some:0,all:1};class o8 extends Ws{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=t,o={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:i8[s]},l=d=>{const{isIntersecting:f}=d;if(this.isInView===f||(this.isInView=f,i&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:h,onViewportLeave:p}=this.node.getProps(),m=f?h:p;m&&m(d)};this.stopObserver=s8(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(a8(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function a8({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const l8={inView:{Feature:o8},tap:{Feature:e8},focus:{Feature:J6},hover:{Feature:Q6}},c8={layout:{ProjectionNode:xE,MeasureLayout:ME}},u8={...A6,...l8,...X6,...c8},X=L6(u8,P6),d8=()=>{const e=Gr(),{login:t}=Vj(),[n,r]=u.useState(""),[s,i]=u.useState(""),[o,l]=u.useState(!1),[c,d]=u.useState(!1),[f,h]=u.useState(!1),[p,m]=u.useState(!1);if(u.useEffect(()=>{const b=setTimeout(()=>{m(!0)},300);return()=>clearTimeout(b)},[]),!p)return a.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background",children:a.jsx("div",{className:"w-14 h-14 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin"})});const g={hidden:{},show:{transition:{staggerChildren:.12}}},v={hidden:{opacity:0,y:25},show:{opacity:1,y:0,transition:{duration:.5}}},x=async b=>{if(b.preventDefault(),!n||!s){oe({title:"Missing Credentials",description:"Please enter both email and password.",variant:"destructive"});return}d(!0);try{(await t(n,s)).success&&(oe({title:"Access Granted",description:"Welcome back to Barqi Operations."}),e("/dashboard"))}catch(y){console.error("Login Error:",y),oe({title:"Login Failed",description:y.message||"Unable to connect to the server.",variant:"destructive"})}finally{d(!1)}};return a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:"min-h-screen flex selection:bg-orange-100 selection:text-orange-900 font-sans overflow-hidden bg-[#03140F]",children:[a.jsxs(X.div,{initial:{x:-120,opacity:0,scale:1.05},animate:{x:0,opacity:1,scale:1},transition:{duration:1.2,ease:[.22,1,.36,1]},className:`\r
hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative overflow-hidden\r
text-white\r
`,children:[a.jsx("div",{className:`\r
absolute inset-0 z-0\r
bg-gradient-to-br\r
from-[#063B2E]\r
via-[#031E18]\r
to-black\r
`}),a.jsx("div",{className:`absolute inset-0 bg-[radial-gradient(#cbd5e120_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] z-0 pointer-events-none opacity-40`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:"absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/10 rounded-full blur-[100px] z-0"}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] z-0"}),a.jsx("div",{className:"absolute top-1/2 right-12 transform -translate-y-1/2 z-0 hidden xl:block",children:a.jsxs(X.div,{animate:{y:[0,-12,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},whileHover:{scale:1.03,rotate:2},className:"w-72 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] rotate-6 transition-all duration-500",children:[a.jsxs("div",{className:"flex items-center justify-between mb-4",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse",children:a.jsx(Qt,{className:"w-5 h-5 text-green-400"})}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-green-200 font-medium",children:"Network Status"}),a.jsx("p",{className:"text-sm font-bold text-white",children:"Operational"})]})]}),a.jsx("div",{className:"h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3 text-xs text-white/60",children:[a.jsx(Is,{className:"w-3.5 h-3.5 text-orange-400"}),a.jsx("span",{className:"flex-1",children:"Active Zones"}),a.jsx("span",{className:"text-white font-mono",children:"12"})]}),a.jsxs("div",{className:"flex items-center gap-3 text-xs text-white/60",children:[a.jsx(an,{className:"w-3.5 h-3.5 text-blue-400"}),a.jsx("span",{className:"flex-1",children:"Franchise Nodes"}),a.jsx("span",{className:"text-white font-mono",children:"48"})]}),a.jsx("div",{className:"w-full bg-white/10 rounded-full h-1 mt-2 overflow-hidden",children:a.jsx("div",{className:"bg-orange-500 h-full w-3/4 rounded-full"})})]})]})}),a.jsxs("div",{className:"relative z-10 flex items-center gap-4",children:[a.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white p-1.5 shadow-xl shadow-black/20 ring-1 ring-white/10",children:a.jsx("img",{src:im,alt:"Barqi Logo",className:"w-full h-full object-contain rounded-xl"})}),a.jsxs("div",{children:[a.jsx("h1",{className:"text-2xl font-bold tracking-tight text-white",children:"Barqi Operations"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500"}),a.jsx("p",{className:"text-xs text-green-200/80 font-medium uppercase tracking-wider",children:"Franchise Portal"})]})]})]}),a.jsxs("div",{className:"relative z-10 space-y-8 max-w-lg mt-12",children:[a.jsxs("h2",{className:"text-5xl font-extrabold leading-tight tracking-tight",children:["Manage your ",a.jsx("br",{}),a.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500",children:"city network"}),a.jsx("br",{}),"in real-time."]}),a.jsx("p",{className:"text-lg text-green-100/70 leading-relaxed",children:"The central command for franchise administrators. Oversee inventory, logistics, and city-wide performance from one dashboard."}),a.jsx("div",{className:"grid grid-cols-1 gap-4 pt-4",children:[{icon:Is,text:"Multi-City Territory Management"},{icon:an,text:"Live Inventory Sync"},{icon:gt,text:"Role-Based Access Control"}].map((b,y)=>a.jsxs("div",{className:"flex items-center gap-4 group",children:[a.jsx("div",{className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300",children:a.jsx(b.icon,{className:"w-5 h-5 text-green-200 group-hover:text-orange-400 transition-colors"})}),a.jsx("span",{className:"text-sm font-medium text-green-50",children:b.text})]},y))})]}),a.jsxs("div",{className:"relative z-10 text-xs text-green-400/40 font-medium flex justify-between items-center border-t border-white/5 pt-6",children:[a.jsx("p",{children:"© 2026 Barqi Bazar. Operations Division."}),a.jsxs("div",{className:"flex gap-4",children:[a.jsx("span",{className:"hover:text-orange-400 transition-colors cursor-pointer",children:"Support"}),a.jsx("span",{className:"hover:text-orange-400 transition-colors cursor-pointer",children:"System Status"})]})]})]}),a.jsxs("div",{className:"flex-1 flex items-center justify-center p-6 lg:p-12 relative",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#d1d5db_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#334155_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
pointer-events-none\r
`}),a.jsxs(X.div,{initial:{y:120,opacity:0,scale:.92,rotateX:12,filter:"blur(10px)"},animate:{y:0,opacity:1,scale:1,rotateX:0,filter:"blur(0px)"},transition:{duration:1.1,ease:[.22,1,.36,1]},className:"w-full max-w-[460px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] border border-white/30 dark:border-slate-800 relative overflow-hidden z-10",children:[a.jsx("div",{className:"absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600"}),a.jsxs("div",{className:"lg:hidden flex flex-col items-center gap-4 mb-8",children:[a.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white shadow-md border border-gray-100 p-2",children:a.jsx("img",{src:im,alt:"Barqi Logo",className:"w-full h-full object-contain"})}),a.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Franchise Portal"})]}),a.jsxs("div",{className:"mb-8 text-center lg:text-left space-y-2",children:[a.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wide mb-2",children:[a.jsx($g,{className:"w-3 h-3"})," Admin Access"]}),a.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Welcome Back"}),a.jsx("p",{className:"text-gray-500 dark:text-slate-400 text-sm",children:"Please sign in to manage your franchise node."})]}),a.jsxs(X.form,{variants:g,initial:"hidden",animate:"show",onSubmit:x,className:"space-y-5",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{htmlFor:"email",className:"text-gray-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wide",children:"Email Address"}),a.jsx(Ee,{id:"email",type:"email",value:n,onChange:b=>r(b.target.value),placeholder:"admin@barqi.com",required:!0,disabled:c,className:`\r
h-14\r
rounded-2xl\r
border\r
border-white/20\r
dark:border-slate-700/60\r
bg-white/70\r
dark:bg-slate-900/70\r
backdrop-blur-xl\r
px-4\r
text-[15px]\r
font-semibold\r
text-slate-800\r
dark:text-white\r
placeholder:text-slate-400\r
dark:placeholder:text-slate-500\r
shadow-[0_10px_30px_rgba(0,0,0,0.06)]\r
dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]\r
transition-all\r
duration-300\r
focus:border-orange-400\r
focus:ring-4\r
focus:ring-orange-500/10\r
focus:bg-white\r
dark:focus:bg-slate-900\r
hover:border-orange-300/60\r
hover:shadow-orange-500/10\r
`})]}),a.jsxs(X.div,{variants:v,className:"space-y-2",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx(ve,{htmlFor:"password",className:"text-gray-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wide",children:"Password"}),a.jsx("button",{type:"button",onClick:()=>h(!0),className:"text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline",children:"Forgot password?"})]}),a.jsxs("div",{className:"relative group",children:[a.jsx(Ee,{id:"password",type:o?"text":"password",value:s,onChange:b=>i(b.target.value),placeholder:"••••••••",required:!0,disabled:c,className:`\r
pr-12\r
h-14\r
rounded-2xl\r
border\r
border-white/20\r
dark:border-slate-700/60\r
bg-white/70\r
dark:bg-slate-900/70\r
backdrop-blur-xl\r
px-4\r
text-[15px]\r
font-semibold\r
text-slate-800\r
dark:text-white\r
placeholder:text-slate-400\r
dark:placeholder:text-slate-500\r
shadow-[0_10px_30px_rgba(0,0,0,0.06)]\r
dark:shadow-[0_10px_40px_rgba(0,0,0,0.35)]\r
transition-all\r
duration-300\r
focus:border-orange-400\r
focus:ring-4\r
focus:ring-orange-500/10\r
focus:bg-white\r
dark:focus:bg-slate-900\r
hover:border-orange-300/60\r
hover:shadow-orange-500/10\r
`}),a.jsx("button",{type:"button",onClick:()=>l(!o),className:"absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:text-orange-600 transition-colors focus:outline-none","aria-label":o?"Hide password":"Show password",children:o?a.jsx(kR,{className:"w-5 h-5"}):a.jsx(Yl,{className:"w-5 h-5"})})]})]}),a.jsx(X.div,{variants:v,whileHover:{scale:1.02},whileTap:{scale:.98},children:a.jsx(ne,{type:"submit",className:"w-full h-12 mt-4 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2",disabled:c,children:c?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),a.jsx("span",{children:"Authenticating..."})]}):a.jsxs(a.Fragment,{children:[a.jsx("span",{children:"Sign In to Dashboard"}),a.jsx($r,{className:"w-4 h-4 opacity-90"})]})})})]}),f&&a.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-in fade-in duration-200",children:[a.jsx("div",{className:"absolute inset-0",onClick:()=>h(!1)}),a.jsxs("div",{className:"relative w-full max-w-md mx-4 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_35px_90px_-20px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-300",children:[a.jsx("div",{className:"h-1.5 w-full bg-gradient-to-r from-green-900 via-green-800 to-orange-500"}),a.jsxs("div",{className:"px-8 pt-8 pb-8",children:[a.jsx("div",{className:"group mx-auto w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20",children:a.jsx(CR,{className:"w-7 h-7 text-orange-600 transition-transform duration-500 group-hover:rotate-12"})}),a.jsxs("div",{className:"text-center space-y-3",children:[a.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reset Password?"}),a.jsx("p",{className:"text-sm text-gray-500 dark:text-slate-400 leading-relaxed",children:"You’ll be redirected to the secure password recovery page to regain access to your account."})]}),a.jsxs("div",{className:"mt-8 flex gap-4",children:[a.jsx("button",{onClick:()=>h(!1),className:"flex-1 h-11 rounded-xl text-md tracking-wide font-bold bg-green-600 text-white  shadow-md shadow-green-600/25 hover:bg-green-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200",children:"Cancel"}),a.jsx("button",{type:"button",onClick:()=>{window.open("https://yourlink.com","_blank","noopener,noreferrer"),h(!1)},className:"flex-1 h-11 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-md tracking-wide font-bold shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200",children:"Forgot"})]})]})]})]}),a.jsx("div",{className:"mt-8 text-center pt-6 border-t border-gray-100 dark:border-slate-700",children:a.jsxs("p",{className:"text-sm text-gray-500 dark:text-slate-400 flex items-center justify-center gap-2",children:[a.jsx(Sl,{className:"w-3 h-3"}),"Secured by Barqi IAM"]})})]})]})]})},ka="https://api.barqibazar.org/franchise/api",Ia={getAll:async(e=1,t=10)=>(await pe.get(`${ka}/cities`,{params:{page:e,limit:t}})).data,getById:async e=>(await pe.get(`${ka}/cities/${e}`)).data,create:async e=>(await pe.post(`${ka}/cities`,e)).data,update:async(e,t)=>(await pe.patch(`${ka}/cities/${e}`,t)).data,deactivate:async e=>(await pe.delete(`${ka}/cities/${e}`)).data},mf=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(!1),[s,i]=u.useState(null),[o,l]=u.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=u.useCallback(async(p=1,m=10)=>{var g,v,x,b;r(!0),i(null);try{const y=await Ia.getAll(p,m),w=y.data||y;t(w.items||[]),l(S=>{var k,C,j,E,L,N;return{page:((k=w.pagination)==null?void 0:k.page)||p,limit:((C=w.pagination)==null?void 0:C.limit)||m,total:((j=w.pagination)==null?void 0:j.total)||0,totalPages:((E=w.pagination)==null?void 0:E.totalPages)||0,hasNext:((L=w.pagination)==null?void 0:L.hasNext)||!1,hasPrev:((N=w.pagination)==null?void 0:N.hasPrev)||!1}})}catch(y){i(((v=(g=y.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to fetch cities"),oe({title:"Error",description:((b=(x=y.response)==null?void 0:x.data)==null?void 0:b.message)||"Failed to fetch cities",variant:"destructive"})}finally{r(!1)}},[]);return{cities:e,loading:n,error:s,pagination:o,fetchCities:c,createCity:async p=>{var m,g;r(!0);try{const v=await Ia.create(p);return await c(o.page,o.limit),oe({title:"Success",description:"City created successfully"}),v}catch(v){const x=((g=(m=v.response)==null?void 0:m.data)==null?void 0:g.message)||"Failed to create city";throw oe({title:"Error",description:x,variant:"destructive"}),new Error(x)}finally{r(!1)}},updateCity:async(p,m)=>{var g,v;r(!0);try{const x=await Ia.update(p,m);return await c(o.page,o.limit),oe({title:"Success",description:"City updated successfully"}),x}catch(x){const b=((v=(g=x.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to update city";throw oe({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}},deactivateCity:async p=>{var m,g;r(!0);try{const v=await Ia.deactivate(p);return await c(o.page,o.limit),oe({title:"Success",description:"City deactivated successfully"}),v}catch(v){const x=((g=(m=v.response)==null?void 0:m.data)==null?void 0:g.message)||"Failed to deactivate city";throw oe({title:"Error",description:x,variant:"destructive"}),new Error(x)}finally{r(!1)}}}},Hi="https://api.barqibazar.org/franchise/api",Qi={getAll:async(e=1,t=10,n=null)=>(await pe.get(`${Hi}/franchises`)).data,getById:async e=>(await pe.get(`${Hi}/franchises/${e}`)).data,create:async e=>(await pe.post(`${Hi}/franchises`,e)).data,update:async(e,t)=>(await pe.patch(`${Hi}/franchises/${e}`,t)).data,terminate:async e=>(await pe.delete(`${Hi}/franchises/${e}`)).data,getMyFranchise:async()=>(await pe.get(`${Hi}/franchises/me/franchise`)).data},gf=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(!1),[s,i]=u.useState(null),[o,l]=u.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=u.useCallback(async(v=1,x=10,b=null)=>{var y,w,S,k;r(!0),i(null);try{const C=await Qi.getAll(v,x,b),j=C.data||C;t(j.items||[]),l(E=>{var L,N,R,D,F,_;return{page:((L=j.pagination)==null?void 0:L.page)||v,limit:((N=j.pagination)==null?void 0:N.limit)||x,total:((R=j.pagination)==null?void 0:R.total)||0,totalPages:((D=j.pagination)==null?void 0:D.totalPages)||0,hasNext:((F=j.pagination)==null?void 0:F.hasNext)||!1,hasPrev:((_=j.pagination)==null?void 0:_.hasPrev)||!1}})}catch(C){i(((w=(y=C.response)==null?void 0:y.data)==null?void 0:w.message)||"Failed to fetch franchises"),oe({title:"Error",description:((k=(S=C.response)==null?void 0:S.data)==null?void 0:k.message)||"Failed to fetch franchises",variant:"destructive"})}finally{r(!1)}},[]),d=async v=>{var x,b;r(!0);try{const y=await Qi.create(v);return await c(o.page,o.limit),oe({title:"Success",description:"Franchise created successfully"}),y}catch(y){const w=((b=(x=y.response)==null?void 0:x.data)==null?void 0:b.message)||"Failed to create franchise";throw oe({title:"Error",description:w,variant:"destructive"}),new Error(w)}finally{r(!1)}},f=async(v,x)=>{var b,y;r(!0);try{const w=await Qi.update(v,x);return await c(o.page,o.limit),oe({title:"Success",description:"Franchise updated successfully"}),w}catch(w){const S=((y=(b=w.response)==null?void 0:b.data)==null?void 0:y.message)||"Failed to update franchise";throw oe({title:"Error",description:S,variant:"destructive"}),new Error(S)}finally{r(!1)}},h=async v=>{var x,b;r(!0);try{const y=await Qi.terminate(v);return await c(o.page,o.limit),oe({title:"Success",description:"Franchise terminated successfully"}),y}catch(y){const w=((b=(x=y.response)==null?void 0:x.data)==null?void 0:b.message)||"Failed to terminate franchise";throw oe({title:"Error",description:w,variant:"destructive"}),new Error(w)}finally{r(!1)}},[p,m]=u.useState(null),g=u.useCallback(async()=>{var v,x,b,y;r(!0),i(null);try{const w=await Qi.getMyFranchise(),S=w.data||w;return m(S||null),S||null}catch(w){i(((x=(v=w.response)==null?void 0:v.data)==null?void 0:x.message)||"Failed to fetch my franchise"),oe({title:"Error",description:((y=(b=w.response)==null?void 0:b.data)==null?void 0:y.message)||"Failed to fetch my franchise",variant:"destructive"})}finally{r(!1)}},[]);return{franchises:e,myFranchise:p,loading:n,error:s,pagination:o,fetchFranchises:c,fetchMyFranchise:g,createFranchise:d,updateFranchise:f,terminateFranchise:h}},Wi="https://api.barqibazar.org/franchise/api",Ki={getAll:async(e=1,t=10,n=null,r=null)=>{const s={page:e,limit:t};return n&&(s.status=n),r&&(s.franchiseId=r),(await pe.get(`${Wi}/riders`,{params:s})).data},getById:async e=>(await pe.get(`${Wi}/riders/${e}`)).data,create:async e=>(await pe.post(`${Wi}/riders`,e)).data,update:async(e,t)=>(await pe.patch(`${Wi}/riders/${e}`,t)).data,changeStatus:async(e,t,n="")=>(await pe.patch(`${Wi}/riders/${e}/status`,{status:t,reason:n})).data,getStatusHistory:async e=>(await pe.get(`${Wi}/riders/${e}/history`)).data},z0=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(null),[s,i]=u.useState([]),[o,l]=u.useState(!1),[c,d]=u.useState(null),[f,h]=u.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),p=u.useCallback(async(y=1,w=10,S=null,k=null)=>{var C,j,E,L;l(!0),d(null);try{const N=await Ki.getAll(y,w,S,k),R=N.data||N;t(R.items||[]),h(D=>{var F,_,z,A,G,T;return{page:((F=R.pagination)==null?void 0:F.page)||y,limit:((_=R.pagination)==null?void 0:_.limit)||w,total:((z=R.pagination)==null?void 0:z.total)||0,totalPages:((A=R.pagination)==null?void 0:A.totalPages)||0,hasNext:((G=R.pagination)==null?void 0:G.hasNext)||!1,hasPrev:((T=R.pagination)==null?void 0:T.hasPrev)||!1}})}catch(N){d(((j=(C=N.response)==null?void 0:C.data)==null?void 0:j.message)||"Failed to fetch riders"),oe({title:"Error",description:((L=(E=N.response)==null?void 0:E.data)==null?void 0:L.message)||"Failed to fetch riders",variant:"destructive"})}finally{l(!1)}},[]),m=u.useCallback(async y=>{var w,S,k,C,j;l(!0),d(null);try{const E=await Ki.getById(y),L=((w=E.data)==null?void 0:w.data)||E.data||E;return r(L),L}catch(E){d(((k=(S=E.response)==null?void 0:S.data)==null?void 0:k.message)||"Failed to fetch rider"),oe({title:"Error",description:((j=(C=E.response)==null?void 0:C.data)==null?void 0:j.message)||"Failed to fetch rider",variant:"destructive"})}finally{l(!1)}},[]),g=async y=>{var w,S;l(!0);try{const k=await Ki.create(y);return await p(f.page,f.limit),oe({title:"Success",description:"Rider created successfully"}),k}catch(k){const C=(S=(w=k.response)==null?void 0:w.data)==null?void 0:S.message,j=Array.isArray(C)?C.join(", "):C||"Failed to create rider";throw oe({title:"Error",description:j,variant:"destructive"}),new Error(j)}finally{l(!1)}},v=async(y,w)=>{var S,k;l(!0);try{const C=await Ki.update(y,w);return await m(y),oe({title:"Success",description:"Rider updated successfully"}),C}catch(C){const j=((k=(S=C.response)==null?void 0:S.data)==null?void 0:k.message)||"Failed to update rider";throw oe({title:"Error",description:j,variant:"destructive"}),new Error(j)}finally{l(!1)}},x=async(y,w,S="")=>{var k,C;l(!0);try{const j=await Ki.changeStatus(y,w,S);return await m(y),oe({title:"Success",description:"Rider status changed successfully"}),j}catch(j){const E=((C=(k=j.response)==null?void 0:k.data)==null?void 0:C.message)||"Failed to change rider status";throw oe({title:"Error",description:E,variant:"destructive"}),new Error(E)}finally{l(!1)}},b=u.useCallback(async y=>{var w,S,k,C;l(!0);try{const j=await Ki.getStatusHistory(y),E=j.data||j;return i(E.items||[]),E}catch(j){d(((S=(w=j.response)==null?void 0:w.data)==null?void 0:S.message)||"Failed to fetch status history"),oe({title:"Error",description:((C=(k=j.response)==null?void 0:k.data)==null?void 0:C.message)||"Failed to fetch status history",variant:"destructive"})}finally{l(!1)}},[]);return{riders:e,rider:n,statusHistory:s,loading:o,error:c,pagination:f,fetchRiders:p,fetchRider:m,createRider:g,updateRider:v,changeStatus:x,fetchStatusHistory:b}},Yn=({title:e,subtitle:t})=>{var i,o,l,c;const{user:n}=Hs(),r=new Date().getHours(),s=r<12?"Good Morning":r<18?"Good Afternoon":"Good Evening";return a.jsx("header",{className:`\r
sticky\r
top-0\r
z-40\r
w-full\r
border-b\r
border-white/10\r
backdrop-blur-2xl\r
bg-white/80\r
dark:bg-[#041B15]/80\r
shadow-[0_8px_40px_rgba(0,0,0,0.04)]\r
dark:shadow-[0_10px_60px_rgba(0,0,0,0.35)]\r
transition-all\r
duration-500\r
`,children:a.jsxs("div",{className:`\r
relative\r
overflow-hidden\r
px-6\r
lg:px-8\r
h-[88px]\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-[radial-gradient(#0f172a10_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:22px_22px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{x:[0,25,0],y:[0,-20,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-80px]\r
left-[10%]\r
w-[220px]\r
h-[220px]\r
rounded-full\r
bg-indigo-500/10\r
blur-[80px]\r
`}),a.jsx(X.div,{animate:{x:[0,-20,0],y:[0,20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
right-[5%]\r
bottom-[-100px]\r
w-[220px]\r
h-[220px]\r
rounded-full\r
bg-emerald-500/10\r
blur-[90px]\r
`})]}),a.jsxs("div",{className:"flex items-center gap-5",children:[a.jsx(X.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:`\r
hidden\r
md:flex\r
w-14\r
h-14\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
via-violet-500\r
to-indigo-700\r
text-white\r
items-center\r
justify-center\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(gt,{size:24})}),a.jsxs("div",{children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Ug,{size:14,className:"text-yellow-500"}),a.jsx("span",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
dark:text-slate-400\r
`,children:s})]}),a.jsx("h1",{className:`\r
text-2xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
leading-tight\r
`,children:e}),t&&a.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
font-medium\r
mt-0.5\r
max-w-2xl\r
truncate\r
`,children:t})]})]}),a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:`\r
hidden\r
lg:flex\r
relative\r
w-[280px]\r
`,children:[a.jsx(jl,{size:16,className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
`}),a.jsx(Ee,{placeholder:"Search anything...",className:`\r
pl-11\r
h-12\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/60\r
backdrop-blur-xl\r
focus-visible:ring-2\r
focus-visible:ring-indigo-500\r
shadow-sm\r
`})]}),a.jsxs(X.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:`\r
relative\r
w-12\r
h-12\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/60\r
backdrop-blur-xl\r
flex\r
items-center\r
justify-center\r
text-slate-600\r
dark:text-slate-300\r
hover:text-indigo-600\r
transition-all\r
duration-300\r
shadow-sm\r
`,children:[a.jsx(xR,{size:18}),a.jsx("span",{className:`\r
absolute\r
top-2.5\r
right-2.5\r
w-2.5\r
h-2.5\r
rounded-full\r
bg-rose-500\r
animate-pulse\r
`})]}),a.jsxs(X.div,{whileHover:{y:-2},className:`\r
flex\r
items-center\r
gap-3\r
pl-3\r
pr-4\r
h-12\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/60\r
backdrop-blur-xl\r
shadow-sm\r
`,children:[a.jsx("div",{className:`\r
w-10\r
h-10\r
rounded-xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-violet-600\r
flex\r
items-center\r
justify-center\r
text-white\r
font-black\r
text-sm\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:((c=(l=(o=(i=n==null?void 0:n.fullName)==null?void 0:i.split(" "))==null?void 0:o.map(d=>d[0]))==null?void 0:l.join(""))==null?void 0:c.slice(0,2))||"U"}),a.jsxs("div",{className:"hidden sm:block",children:[a.jsx("p",{className:`\r
text-sm\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
leading-none\r
`,children:(n==null?void 0:n.fullName)||"Administrator"}),a.jsx("p",{className:`\r
text-[11px]\r
mt-1\r
uppercase\r
tracking-[0.18em]\r
font-bold\r
text-slate-500\r
dark:text-slate-400\r
`,children:(n==null?void 0:n.role)||"System Access"})]})]})]})]})})},RE=u.createContext(),f8=({children:e})=>{const t=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[n,r]=u.useState(()=>localStorage.getItem("theme")||t());u.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",n==="dark"),localStorage.setItem("theme",n)},[n]),u.useEffect(()=>{if(localStorage.getItem("theme"))return;const o=window.matchMedia("(prefers-color-scheme: dark)"),l=c=>{r(c.matches?"dark":"light")};return o.addEventListener("change",l),()=>{o.removeEventListener("change",l)}},[]);const s=()=>{r(i=>i==="dark"?"light":"dark")};return a.jsx(RE.Provider,{value:{theme:n,setTheme:r,toggleTheme:s},children:e})},h8=()=>u.useContext(RE),p8=()=>{var p,m;const[e,t]=u.useState(!1),{user:n,logout:r,isAdmin:s,isLoading:i}=Hs(),{pathname:o}=xr(),l=Gr(),{theme:c,toggleTheme:d}=h8(),f=u.useMemo(()=>{const g=[{path:"/dashboard",label:"Overview",icon:PR}];return s()?[...g,{path:"/cities",label:"City Network",icon:$g},{path:"/franchises",label:"Franchise Nodes",icon:an},{path:"/franchise-admins",label:"Franchise Admins",icon:qu},{path:"/stores",label:"Stores",icon:an},{path:"/storesAdmin",label:"Store Admins",icon:qu},{path:"/riders",label:"Fleet Management",icon:wl},{path:"/users",label:"IAM Users",icon:Ts},{path:"/roles",label:"IAM Roles",icon:lC}]:[...g,{path:"/riders",label:"My Riders",icon:wl},{path:"/stores",label:"My Stores",icon:an},{path:"/storesAdmin",label:"Store Admin",icon:an}]},[s]),h=()=>{r(),l("/login")};return a.jsxs(X.aside,{initial:{opacity:0,x:-12},animate:{opacity:1,x:0,width:e?88:288},transition:{opacity:{duration:.25},x:{duration:.25},width:{duration:.28,ease:[.22,1,.36,1]}},style:{willChange:"transform, opacity, width",backfaceVisibility:"hidden"},className:he("fixed left-0 top-0 h-screen z-50 flex flex-col antialiased transform-gpu [transform:translateZ(0)] ","bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-r border-white/20 dark:border-slate-800/80 shadow-2xl shadow-black/5 dark:shadow-black/30"),children:[a.jsx("div",{className:"relative flex items-center h-24 px-6 shrink-0 border-b border-slate-200/60 dark:border-slate-800/60",children:a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsxs("div",{className:"relative group",children:[a.jsx("div",{className:"absolute -inset-1 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"}),a.jsx("div",{className:"relative w-10 h-10 rounded-xl bg-white p-1 shadow-sm ring-1 ring-emerald-100",children:a.jsx("img",{src:im,alt:"Barqi",className:"w-full h-full object-contain rounded-lg"})})]}),a.jsx("span",{className:"font-black text-slate-900 dark:text-white leading-none tracking-tight",children:"BARQI OPS"}),a.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[a.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),a.jsx("span",{className:"text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]",children:"Command Node"})]}),a.jsx(X.div,{animate:{opacity:e?0:1,x:e?-10:0,width:e?0:"auto"},transition:{duration:.2},className:"flex flex-col overflow-hidden whitespace-nowrap"})]})}),a.jsxs("nav",{className:"flex-1 px-4 py-4 space-y-1.5 overflow-y-auto overflow-x-hidden custom-scrollbar",children:[!e&&a.jsx("p",{className:"px-4 mb-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]",children:"Operations Menu"}),f.map(g=>{const v=g.icon,x=o===g.path;return a.jsxs(mD,{to:g.path,className:he("group flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 relative overflow-hidden","before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500/0 before:to-yellow-500/0 hover:before:from-orange-500/5 hover:before:to-yellow-500/5 before:transition-all before:duration-500",x?"bg-gradient-to-r from-emerald-50 to-orange-50 dark:from-emerald-900/20 dark:to-orange-900/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 shadow-lg shadow-emerald-500/10":"text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/70 dark:hover:bg-slate-800/80 "),children:[a.jsx(v,{size:20,className:he("shrink-0 transition-all duration-500 ease-out",x?"scale-110 text-emerald-600":"group-hover:scale-[1.08] group-hover:text-orange-500")}),a.jsx(X.span,{animate:{opacity:e?0:1,x:e?-8:0,width:e?0:"auto"},transition:{duration:.2,ease:"easeOut"},className:"text-sm font-bold tracking-tight whitespace-nowrap overflow-hidden",children:g.label}),x&&!e&&a.jsx("div",{className:"absolute right-3 w-1 h-4 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"})]},g.path)})]}),a.jsx("div",{className:"p-4 mt-auto shrink-0",children:a.jsxs("div",{className:he("rounded-[1.7rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/30 dark:border-slate-800 p-4 transition-all duration-500 shadow-xl shadow-black/5",e?"flex flex-col items-center gap-4":"space-y-4"),children:[!e&&(i?a.jsxs("div",{className:"space-y-3 animate-pulse",children:[a.jsx("div",{className:"h-10 bg-muted rounded-lg"}),a.jsx("div",{className:"h-8 bg-muted rounded-lg"})]}):a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:"w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-200 shrink-0",children:a.jsx(gt,{size:18})}),a.jsxs("div",{className:"flex-1 min-w-0",children:[a.jsx("p",{className:"text-[9px] text-emerald-700 font-black uppercase tracking-widest",children:"Operator"}),a.jsx("p",{className:"text-sm font-black text-slate-800 dark:text-white truncate leading-none mt-1",children:(n==null?void 0:n.fullName)||((p=n==null?void 0:n.email)==null?void 0:p.split("@")[0])})]})]}),a.jsxs("div",{className:"flex items-center justify-between bg-white/80 dark:bg-slate-800/80 border border-yellow-200/60 dark:border-slate-700 px-3 py-2 rounded-xl shadow-sm backdrop-blur-md",children:[a.jsx("span",{className:"text-[10px] font-black text-orange-600 uppercase tracking-tighter",children:(m=n==null?void 0:n.role)==null?void 0:m.replace("_"," ")}),a.jsxs("div",{className:"flex items-center gap-1",children:[a.jsx(Qt,{size:10,className:"text-emerald-500"}),a.jsx("span",{className:"text-[9px] font-bold text-emerald-600 uppercase",children:"Live"})]})]})]})),a.jsxs("button",{onClick:d,className:he("flex items-center justify-center gap-3 w-full py-2.5 rounded-xl transition-all duration-300","text-[11px] font-black uppercase tracking-widest border","bg-white border-slate-200 text-slate-500","hover:bg-slate-100 hover:text-slate-800","dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300","dark:hover:bg-slate-800","shadow-sm active:scale-95"),children:[c==="dark"?a.jsx(_R,{size:16,className:"text-yellow-400"}):a.jsx(MR,{size:16,className:"text-slate-700"}),!e&&a.jsx("span",{children:c==="dark"?"Light Mode":"Dark Mode"})]}),a.jsxs("button",{onClick:h,className:he("flex items-center justify-center gap-3 w-full py-2.5 rounded-xl transition-all duration-300","text-[11px] font-black uppercase tracking-widest border transition-all","bg-white border-slate-200 text-slate-400 hover:text-red-600 hover:bg-red-50 hover:border-red-100 shadow-sm active:scale-95"),children:[a.jsx(TR,{size:16}),!e&&a.jsx("span",{children:"Terminate Session"})]})]})}),a.jsx("button",{onClick:()=>t(!e),className:"absolute -right-3 top-10 w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center shadow-xl hover:text-emerald-500 hover:border-emerald-500 hover:scale-110 transition-all duration-300 z-50 active:scale-95",children:e?a.jsx(Zl,{size:14,strokeWidth:3}):a.jsx(ql,{size:14,strokeWidth:3})})]})},m8=re.memo(p8),Pn=({children:e,loading:t=!1})=>{const[n,r]=u.useState(!1);return a.jsxs("div",{className:"flex min-h-screen bg-slate-50 font-sans",children:[a.jsx(m8,{collapsed:n,setCollapsed:r}),a.jsx("main",{className:he("flex-1 flex flex-col min-h-screen transition-all duration-500 ease-in-out",n?"ml-20":"ml-72"),children:t?a.jsx("div",{className:"flex-1 flex items-center justify-center animate-pulse",children:a.jsx("div",{className:"h-10 w-40 bg-muted rounded"})}):e})]})},g8=({cards:e,loading:t=!1})=>{const n={primary:"bg-primary/10 text-primary",accent:"bg-accent/10 text-accent",success:"bg-success/10 text-success",warning:"bg-warning/10 text-warning",info:"bg-info/10 text-info",destructive:"bg-destructive/10 text-destructive"};if(t)return a.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:e.map((r,s)=>{const i=r.icon;return a.jsx("div",{className:"bg-card rounded-xl border border-border p-5 hover:shadow-md transition-shadow animate-fade-in",style:{animationDelay:`${s*50}ms`},children:a.jsxs("div",{className:"flex items-start justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-sm text-muted-foreground mb-1",children:r.title}),a.jsx("p",{className:"text-2xl font-bold text-card-foreground",children:typeof r.value=="number"?r.value.toLocaleString():r.value}),r.change&&a.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:r.change})]}),a.jsx("div",{className:he("w-10 h-10 rounded-lg flex items-center justify-center",n[r.color]||n.primary),children:a.jsx(i,{size:20})})]})},s)})})},qn=({status:e,variant:t})=>{const n={success:"bg-success/10 text-success border-success/20",warning:"bg-warning/10 text-warning border-warning/20",destructive:"bg-destructive/10 text-destructive border-destructive/20",info:"bg-info/10 text-info border-info/20",muted:"bg-muted text-muted-foreground border-border",primary:"bg-primary/10 text-primary border-primary/20",accent:"bg-accent/10 text-accent border-accent/20"},s=t||(()=>{const i=e==null?void 0:e.toLowerCase();return["active","approved","verified","success"].includes(i)?"success":["pending","applied","document_submitted"].includes(i)?"info":["suspended","warning","inactive"].includes(i)?"warning":["terminated","rejected","failed","error"].includes(i)?"destructive":"muted"})();return a.jsx("span",{className:he("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",n[s]),children:e})};function v8(e,t=[]){let n=[];function r(i,o){const l=u.createContext(o);l.displayName=i+"Context";const c=n.length;n=[...n,o];const d=h=>{var b;const{scope:p,children:m,...g}=h,v=((b=p==null?void 0:p[e])==null?void 0:b[c])||l,x=u.useMemo(()=>g,Object.values(g));return a.jsx(v.Provider,{value:x,children:m})};d.displayName=i+"Provider";function f(h,p){var v;const m=((v=p==null?void 0:p[e])==null?void 0:v[c])||l,g=u.useContext(m);if(g)return g;if(o!==void 0)return o;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[d,f]}const s=()=>{const i=n.map(o=>u.createContext(o));return function(l){const c=(l==null?void 0:l[e])||i;return u.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return s.scopeName=e,[r,x8(s,...t)]}function x8(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const o=r.reduce((l,{useScope:c,scopeName:d})=>{const h=c(i)[`__scope${d}`];return{...l,...h}},{});return u.useMemo(()=>({[`__scope${t.scopeName}`]:o}),[o])}};return n.scopeName=t.scopeName,n}var B0="Progress",V0=100,[y8]=v8(B0),[b8,w8]=y8(B0),AE=u.forwardRef((e,t)=>{const{__scopeProgress:n,value:r=null,max:s,getValueLabel:i=S8,...o}=e;(s||s===0)&&!Tb(s)&&console.error(k8(`${s}`,"Progress"));const l=Tb(s)?s:V0;r!==null&&!Mb(r,l)&&console.error(C8(`${r}`,"Progress"));const c=Mb(r,l)?r:null,d=hd(c)?i(c,l):void 0;return a.jsx(b8,{scope:n,value:c,max:l,children:a.jsx(d0.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":hd(c)?c:void 0,"aria-valuetext":d,role:"progressbar","data-state":DE(c,l),"data-value":c??void 0,"data-max":l,...o,ref:t})})});AE.displayName=B0;var OE="ProgressIndicator",IE=u.forwardRef((e,t)=>{const{__scopeProgress:n,...r}=e,s=w8(OE,n);return a.jsx(d0.div,{"data-state":DE(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...r,ref:t})});IE.displayName=OE;function S8(e,t){return`${Math.round(e/t*100)}%`}function DE(e,t){return e==null?"indeterminate":e===t?"complete":"loading"}function hd(e){return typeof e=="number"}function Tb(e){return hd(e)&&!isNaN(e)&&e>0}function Mb(e,t){return hd(e)&&!isNaN(e)&&e<=t&&e>=0}function k8(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${V0}\`.`}function C8(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${V0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var _E=AE,j8=IE;const mr=u.forwardRef(({className:e,value:t,...n},r)=>a.jsx(_E,{ref:r,className:he("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...n,children:a.jsx(j8,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));mr.displayName=_E.displayName;const E8=u0,N8=()=>{var k;const e=Gr(),{user:t,isAdmin:n,isFranchiseAdmin:r}=Hs(),[s,i]=u.useState(0),[o,l]=u.useState(!1),{cities:c,loading:d,fetchCities:f}=mf(),{franchises:h,loading:p,fetchFranchises:m}=gf(),{riders:g,loading:v,fetchRiders:x}=z0();u.useEffect(()=>{const C=setTimeout(()=>{l(!0)},300);return()=>clearTimeout(C)},[]);const b=u.useCallback(async()=>{var C,j,E;try{const L=n()?"admin-root":(t==null?void 0:t.franchiseId)||(t==null?void 0:t.franchise_id)||((C=t==null?void 0:t.franchise)==null?void 0:C.id);if(!L){console.warn("Wallet ID missing:",t);return}const N=await Ve.get(`${E8}/wallets/${L}?currency=PKR`,{headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}});i(((E=(j=N.data)==null?void 0:j.data)==null?void 0:E.balance)||0)}catch{console.warn("Wallet data offline")}},[n,t]);u.useEffect(()=>{var C;if(n())f(),m(),x();else if(r()){const j=(t==null?void 0:t.franchiseId)||((C=t==null?void 0:t.franchise)==null?void 0:C.id);j&&x(null,null,null,j)}b()},[n,r,t,b]);const y=u.useMemo(()=>{var D;const C=g||[],j=C.length,E=C.filter(F=>["ACTIVE","APPROVED"].includes(F.status)).length,L=C.filter(F=>F.status==="APPLIED").length,N=((D=t==null?void 0:t.franchise)==null?void 0:D.maxActiveRiders)||100,R=Math.round(E/N*100);return{fleetGrowth:j>0?(E/j*100).toFixed(1):0,activeCount:E,pendingCount:L,totalCount:j,utilization:R,bikeMix:C.filter(F=>F.vehicleType==="BIKE").length,motoMix:C.filter(F=>F.vehicleType==="MOTORBIKE").length,nodeHealth:(h==null?void 0:h.filter(F=>F.status==="ACTIVE").length)||0}},[g,h,t]),w=u.useMemo(()=>n()?[{title:"Global Liquidity",value:`Rs. ${s.toLocaleString()}`,icon:El,color:"emerald",change:"Network Total"},{title:"Active Nodes",value:y.nodeHealth,icon:Us,color:"blue",change:`${h==null?void 0:h.length} Registered`},{title:"Fleet Deployment",value:y.activeCount,icon:wl,color:"indigo",change:`${y.totalCount} Units`},{title:"Audit Queue",value:y.pendingCount,icon:DR,color:"orange",change:"Awaiting Action"}]:[{title:"Node Balance",value:`Rs. ${s.toLocaleString()}`,icon:NR,color:"emerald",change:"Available Funds"},{title:"Fleet Utilization",value:`${y.utilization}%`,icon:yx,color:"blue",change:"Capacity Used"},{title:"Ready Fleet",value:y.activeCount,icon:SR,color:"indigo",change:"Operational Units"},{title:"Compliance Wait",value:y.pendingCount,icon:Qt,color:"orange",change:"New Applications"}],[n,y,s,h]),S=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:scale-[1.01]
hover:shadow-orange-500/10
`;return o?a.jsx(Pn,{children:a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Operations Intelligence",subtitle:`Live Command Data • ${(t==null?void 0:t.fullName)||"System Admin"}`}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
min-h-screen\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsx(X.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
opacity-0\r
animate-in\r
fade-in\r
duration-700\r
fill-mode-forwards\r
`,children:a.jsx(g8,{cards:w,loading:d||p||v})}),a.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[a.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-3},className:`${S} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(zR,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"Deployment Stream"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-500 ",children:"Latest fleet status updates"})]})]}),a.jsxs(ne,{variant:"ghost",onClick:()=>e("/riders"),className:`\r
rounded-2xl\r
font-bold\r
text-indigo-500\r
hover:bg-indigo-500/10\r
transition-all\r
duration-500\r
`,children:["Full Fleet",a.jsx($r,{size:16,className:"ml-2"})]})]}),a.jsx("div",{className:"divide-y divide-white/5",children:v?a.jsxs("div",{className:"p-6 space-y-4 animate-pulse",children:[a.jsx("div",{className:"h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"}),a.jsx("div",{className:"h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"}),a.jsx("div",{className:"h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"})]}):g==null?void 0:g.slice(0,5).map(C=>{var j;return a.jsxs(X.div,{whileHover:{scale:1.01,x:4},onClick:()=>e(`/riders/${C.id}`),className:`\r
p-5\r
flex\r
items-center\r
justify-between\r
hover:bg-slate-50\r
dark:bg-slate-900/10\r
dark:hover:bg-slate-800/30\r
transition-all\r
duration-500\r
cursor-pointer\r
group\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-12\r
h-12\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
font-black\r
text-lg\r
group-hover:scale-110\r
transition-transform\r
duration-500\r
`,children:(j=C.fullName)==null?void 0:j.charAt(0)}),a.jsxs("div",{children:[a.jsx("p",{className:"text-sm font-black text-slate-700 dark:text-white",children:C.fullName}),a.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[a.jsx("span",{className:`\r
text-[10px]\r
bg-slate-100\r
dark:bg-slate-800\r
px-2\r
py-1\r
rounded-full\r
font-bold\r
text-slate-600 dark:text-slate-500\r
uppercase\r
tracking-tight\r
`,children:C.vehicleType}),a.jsx("span",{className:`\r
text-[10px]\r
text-slate-600 dark:text-slate-500 \r
font-mono\r
tracking-widest\r
`,children:C.phone})]})]})]}),a.jsx(qn,{status:C.status})]},C.id)})})]}),n()&&a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.9},whileHover:{y:-3},className:`${S} p-8 rounded-[2.5rem]`,children:[a.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[a.jsx("div",{className:`\r
p-3\r
bg-blue-500/10\r
text-blue-500\r
rounded-2xl\r
`,children:a.jsx(Ur,{size:20})}),a.jsx("h3",{className:"text-lg font-black text-slate-800 dark:text-white",children:"Node Concentration by Region"})]}),a.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8",children:d?a.jsxs("div",{className:"space-y-6 animate-pulse col-span-2",children:[a.jsx("div",{className:"h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"}),a.jsx("div",{className:"h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"})]}):c==null?void 0:c.slice(0,4).map(C=>{const j=(h==null?void 0:h.filter(L=>L.cityId===C.id).length)||0,E=Math.min(j/10*100,100);return a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{className:"flex justify-between items-end",children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
text-slate-600 dark:text-slate-500 \r
tracking-[0.2em]\r
`,children:C.name}),a.jsxs("p",{className:"text-sm font-bold text-slate-700 dark:text-white",children:[j," Active Hubs"]})]}),a.jsx("span",{className:"text-xs font-bold text-blue-500",children:j>0?"High Growth":"Expansion Target"})]}),a.jsx(mr,{value:E,className:"h-2 rounded-full bg-slate-100 dark:bg-slate-800"})]},C.id)})})]})]}),a.jsxs("div",{className:"space-y-8",children:[a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:1},whileHover:{y:-3},className:`${S} p-8 rounded-[2.5rem]`,children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx("div",{className:`\r
p-3\r
bg-emerald-500/10\r
text-emerald-500\r
rounded-2xl\r
`,children:a.jsx(yR,{size:20})}),a.jsx("h3",{className:"text-lg font-black text-slate-800 dark:text-white",children:"Fleet Mix"})]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:`\r
p-4\r
bg-blue-500/5\r
rounded-2xl\r
border\r
border-blue-500/10\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(wl,{size:20,className:"text-blue-500"}),a.jsx("span",{className:"text-sm font-bold text-slate-600 dark:text-slate-300",children:"Standard Bikes"})]}),a.jsx("span",{className:"text-lg font-black text-blue-500",children:y.bikeMix})]}),a.jsxs("div",{className:`\r
p-4\r
bg-indigo-500/5\r
rounded-2xl\r
border\r
border-indigo-500/10\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(yx,{size:20,className:"text-indigo-500"}),a.jsx("span",{className:"text-sm font-bold text-slate-600 dark:text-slate-300",children:"Motorbikes"})]}),a.jsx("span",{className:"text-lg font-black text-indigo-500",children:y.motoMix})]})]})]}),a.jsxs(X.div,{animate:{y:[0,-8,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},className:`\r
relative\r
overflow-hidden\r
rounded-[2.5rem]\r
p-8\r
bg-gradient-to-br\r
bg-gradient-to-br\r
from-white\r
via-slate-50\r
to-slate-100\r
dark:from-[#081A17]\r
dark:via-[#03140F]\r
dark:to-black\r
text-slate-900\r
dark:text-white\r
border\r
border-slate-200\r
dark:border-slate-800\r
shadow-[0_25px_80px_rgba(0,0,0,0.35)]\r
`,children:[a.jsx("div",{className:`\r
absolute\r
top-[-20%]\r
right-[-20%]\r
w-72\r
h-72\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsxs("div",{className:"relative z-10",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[a.jsx("div",{className:`\r
w-2\r
h-2\r
bg-emerald-400\r
rounded-full\r
animate-pulse\r
shadow-[0_0_10px_#22c55e]\r
`}),a.jsx("span",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.3em]\r
text-emerald-400\r
`,children:"System Handshake: Optimal"})]}),a.jsxs("h4",{className:"text-2xl font-black mb-2 tracking-tight",children:["Node:"," ",((k=t==null?void 0:t.franchise)==null?void 0:k.code)||"Barqi-Root"]}),a.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-500 dark:text-slate-600 dark:text-slate-500 dark:text-slate-400 leading-relaxed mb-6",children:["Currently overseeing"," ",y.totalCount," ","assets in the regional mesh network."]}),a.jsxs("div",{className:"space-y-4",children:[a.jsxs("div",{className:`\r
flex\r
justify-between\r
text-[10px]\r
font-black\r
uppercase\r
tracking-widest\r
text-slate-600 dark:text-slate-500\r
`,children:[a.jsx("span",{children:"Operational Efficiency"}),a.jsxs("span",{className:"text-white",children:[y.utilization,"%"]})]}),a.jsx(mr,{value:y.utilization,className:"h-1.5 bg-slate-800"})]})]}),a.jsx(Qt,{className:`\r
absolute\r
-right-8\r
-bottom-8\r
text-white/5\r
rotate-12\r
`,size:200})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs(ne,{onClick:()=>e("/stores"),variant:"outline",className:`\r
h-28\r
rounded-[2rem]\r
flex\r
flex-col\r
gap-3\r
border-slate-200\r
dark:border-slate-800\r
bg-white\r
dark:bg-slate-900/60\r
backdrop-blur-2xl\r
hover:border-indigo-500\r
hover:scale-[1.03]\r
transition-all\r
duration-500\r
group\r
shadow-xl\r
`,children:[a.jsx(an,{size:24,className:`\r
text-indigo-500\r
group-hover:scale-110\r
transition-transform\r
duration-500\r
`}),a.jsx("span",{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-widest\r
text-slate-600 dark:text-slate-500\r
group-hover:text-indigo-500\r
`,children:"Hubs"})]}),a.jsxs(ne,{onClick:()=>e("/franchise-admins"),variant:"outline",className:`\r
h-28\r
rounded-[2rem]\r
flex\r
flex-col\r
gap-3\r
border-slate-200\r
dark:border-slate-800\r
bg-white\r
dark:bg-slate-900/60\r
backdrop-blur-2xl\r
hover:border-blue-500\r
hover:scale-[1.03]\r
transition-all\r
duration-500\r
group\r
shadow-xl\r
`,children:[a.jsx(Ts,{size:24,className:`\r
text-blue-500\r
group-hover:scale-110\r
transition-transform\r
duration-500\r
`}),a.jsx("span",{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-widest\r
text-slate-600 dark:text-slate-500\r
group-hover:text-blue-500\r
`,children:"Admins"})]})]})]})]})]})]})}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})},FE=u.forwardRef(({className:e,...t},n)=>a.jsx("div",{className:"relative w-full overflow-auto",children:a.jsx("table",{ref:n,className:he("w-full caption-bottom text-sm",e),...t})}));FE.displayName="Table";const zE=u.forwardRef(({className:e,...t},n)=>a.jsx("thead",{ref:n,className:he("[&_tr]:border-b",e),...t}));zE.displayName="TableHeader";const BE=u.forwardRef(({className:e,...t},n)=>a.jsx("tbody",{ref:n,className:he("[&_tr:last-child]:border-0",e),...t}));BE.displayName="TableBody";const L8=u.forwardRef(({className:e,...t},n)=>a.jsx("tfoot",{ref:n,className:he("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));L8.displayName="TableFooter";const Tm=u.forwardRef(({className:e,...t},n)=>a.jsx("tr",{ref:n,className:he("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50",e),...t}));Tm.displayName="TableRow";const VE=u.forwardRef(({className:e,...t},n)=>a.jsx("th",{ref:n,className:he("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));VE.displayName="TableHead";const $E=u.forwardRef(({className:e,...t},n)=>a.jsx("td",{ref:n,className:he("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));$E.displayName="TableCell";const P8=u.forwardRef(({className:e,...t},n)=>a.jsx("caption",{ref:n,className:he("mt-4 text-sm text-muted-foreground",e),...t}));P8.displayName="TableCaption";const T8=({currentPage:e,totalPages:t,onPageChange:n,className:r,loading:s=!1})=>{if(t<=1)return null;const i=()=>{const o=[];let c=Math.max(1,e-Math.floor(2.5)),d=Math.min(t,c+5-1);d-c+1<5&&(c=Math.max(1,d-5+1));for(let f=c;f<=d;f++)o.push(f);return o};return a.jsxs("div",{className:he("flex items-center justify-center gap-1",r),children:[a.jsx("button",{onClick:()=>n(e-1),disabled:e===1||s,className:"p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:a.jsx(ql,{size:18})}),i().map(o=>a.jsx("button",{onClick:()=>n(o),disabled:s,className:he("w-9 h-9 rounded-lg text-sm font-medium transition-colors",o===e?"bg-primary text-primary-foreground":"hover:bg-muted text-muted-foreground"),children:o},o)),a.jsx("button",{onClick:()=>n(e+1),disabled:e===t||s,className:"p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:a.jsx(Zl,{size:18})})]})},zi=({rows:e=5})=>a.jsx("div",{className:"space-y-3",children:Array.from({length:e}).map((t,n)=>a.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white rounded-xl border animate-pulse",children:[a.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-xl"}),a.jsxs("div",{className:"flex-1 space-y-2",children:[a.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3"}),a.jsx("div",{className:"h-3 bg-gray-200 rounded w-1/4"})]}),a.jsx("div",{className:"h-4 bg-gray-200 rounded w-20"}),a.jsx("div",{className:"h-4 bg-gray-200 rounded w-16"})]},n))}),Ks=({columns:e,data:t,loading:n,pagination:r,onPageChange:s,emptyMessage:i="No data found"})=>n?a.jsx(zi,{rows:6,columns:e.length}):!t||t.length===0?a.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4",children:a.jsx(ER,{className:"w-6 h-6 text-muted-foreground"})}),a.jsx("p",{className:"text-muted-foreground",children:i})]}):a.jsxs("div",{className:"space-y-4",children:[a.jsx("div",{className:"rounded-lg border border-border overflow-hidden",children:a.jsxs(FE,{children:[a.jsx(zE,{children:a.jsx(Tm,{className:"bg-muted/50 hover:bg-muted/50",children:e.map(o=>a.jsx(VE,{className:o.className,style:{width:o.width},children:o.label},o.key))})}),a.jsx(BE,{children:t.map((o,l)=>a.jsx(Tm,{className:"hover:bg-muted/30",children:e.map(c=>a.jsx($E,{className:c.cellClassName,children:c.render?c.render(o[c.key],o):o[c.key]??"-"},c.key))},o.id||l))})]})}),r&&(r.totalPages>1||r.hasNext||r.hasPrev)&&a.jsx(T8,{currentPage:r.page,totalPages:r.totalPages,onPageChange:s})]}),kn=({isOpen:e,onClose:t,title:n,children:r,size:s="md"})=>{const i=u.useRef(null),o=u.useRef(null);u.useEffect(()=>{const d=f=>{f.key==="Escape"&&t()};return e&&(document.addEventListener("keydown",d),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",d),document.body.style.overflow=""}},[e,t]);const l=d=>{d.target===i.current&&t()};if(!e)return null;const c={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl"};return a.jsx("div",{ref:i,onClick:l,className:"fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in",children:a.jsxs("div",{ref:o,className:he("bg-card rounded-xl shadow-xl w-full animate-modal-in",c[s]),children:[a.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border",children:[a.jsx("h2",{className:"text-lg font-semibold text-card-foreground",children:n}),a.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-muted transition-colors",children:a.jsx(Qo,{size:18,className:"text-muted-foreground"})})]}),a.jsx("div",{className:"p-6",children:r})]})})},gr=({isOpen:e,onClose:t,onConfirm:n,title:r="Confirm Action",message:s="Are you sure you want to proceed?",confirmText:i="Confirm",cancelText:o="Cancel",variant:l="destructive",loading:c=!1})=>{const d=async()=>{await n(),t()};return a.jsx(kn,{isOpen:e,onClose:t,title:r,size:"sm",children:a.jsxs("div",{className:"flex flex-col items-center text-center",children:[a.jsx("div",{className:"w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4",children:a.jsx(BR,{className:"w-6 h-6 text-destructive"})}),a.jsx("p",{className:"text-muted-foreground mb-6",children:s}),a.jsxs("div",{className:"flex gap-3 w-full",children:[a.jsx(ne,{variant:"outline",onClick:t,disabled:c,className:"flex-1",children:o}),a.jsx(ne,{variant:l,onClick:d,disabled:c,className:"flex-1 flex items-center justify-center",children:a.jsxs(a.Fragment,{children:[c&&a.jsx(_r,{className:"w-4 h-4 animate-spin mr-2"}),c?"Processing...":i]})})]})]})})},M8=()=>{const{cities:e,loading:t,fetchCities:n,createCity:r,updateCity:s,deactivateCity:i}=mf(),[o,l]=u.useState(!1),[c,d]=u.useState(!1),[f,h]=u.useState(null),[p,m]=u.useState({name:"",code:""}),[g,v]=u.useState(!1),[x,b]=u.useState(!1),[y,w]=u.useState(1),[S,k]=u.useState(10);u.useEffect(()=>{n()},[n]),u.useEffect(()=>{const A=setTimeout(()=>{b(!0)},250);return()=>clearTimeout(A)},[]);const C=u.useMemo(()=>{const A=(e==null?void 0:e.length)||0,G=(e==null?void 0:e.filter(I=>I.status==="ACTIVE").length)||0,T=A-G,O=A>0?Math.round(G/A*100):0;return{total:A,active:G,inactive:T,efficiency:O}},[e]),j=Math.ceil(e.length/S),E=u.useMemo(()=>{const A=(y-1)*S;return e.slice(A,A+S)},[e,y,S]),L=[{key:"name",label:"Regional Node",render:A=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-orange-500/20\r
to-orange-600/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
shadow-lg\r
shadow-orange-500/10\r
`,children:a.jsx(Is,{size:18})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:A}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:"Regional Infrastructure"})]})]})},{key:"code",label:"Node Code",render:A=>a.jsx("code",{className:`\r
px-3\r
py-1.5\r
rounded-xl\r
bg-slate-100\r
dark:bg-slate-800\r
text-[11px]\r
font-mono\r
tracking-[0.2em]\r
font-bold\r
text-indigo-500\r
border\r
border-slate-200\r
dark:border-slate-700\r
`,children:A})},{key:"status",label:"Network Status",render:A=>a.jsx(qn,{status:A})},{key:"createdAt",label:"Deployment Date",render:A=>a.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:A?new Date(A).toLocaleDateString():"-"})},{key:"actions",label:"Controls",render:(A,G)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>N(G),className:`\r
rounded-xl\r
hover:bg-blue-500/10\r
hover:text-blue-500\r
transition-all\r
duration-300\r
`,children:a.jsx(Hg,{size:16})}),a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>R(G),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,children:a.jsx(_i,{size:16})})]})}],N=A=>{h(A),m({name:A.name,code:A.code}),l(!0)},R=A=>{h(A),d(!0)},D=async A=>{A.preventDefault(),v(!0);try{f?await s(f.id,p):await r(p),l(!1),m({name:"",code:""}),h(null)}catch(G){console.error("Operation failed:",G)}finally{v(!1)}},F=async()=>{if(f){try{await i(f.id)}catch(A){console.error("Status update failed:",A)}d(!1),h(null)}},_=()=>{h(null),m({name:"",code:""}),l(!0)},z=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-orange-500/10
`;return x?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Regional Infrastructure",subtitle:"Configure and manage active city nodes within the Barqi network"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[a.jsx(X.div,{whileHover:{y:-4},className:`${z} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Regions"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:C.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
`,children:a.jsx(Us,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${z} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Active Nodes"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:C.active})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(gt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${z} rounded-[2rem] p-6`,children:a.jsx("div",{className:"flex items-center justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"Network Efficiency"}),a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[C.efficiency,"%"]}),a.jsx(Qt,{size:18,className:"text-indigo-500"})]}),a.jsx(mr,{value:C.efficiency,className:"h-2 bg-slate-200 dark:bg-slate-800"})]})})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${z} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"City Directory"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Active regional mesh infrastructure"})]})]}),a.jsxs(ne,{onClick:_,disabled:t,className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-black\r
shadow-xl\r
shadow-orange-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
active:scale-95\r
`,children:[a.jsx(Xo,{size:18,className:"mr-2"}),"Register Node",a.jsx($r,{size:16,className:"ml-2"})]})]}),a.jsx("div",{className:"overflow-hidden",children:a.jsx(Ks,{columns:L,data:E,loading:t,emptyMessage:"No regional nodes established"})}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(y-1)*S+1," - ",Math.min(y*S,e.length)," ","of"," ",e.length]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:y===1,onClick:()=>w(A=>A-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-orange-500\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-orange-500/20\r
`,children:[y," / ",j]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:y===j,onClick:()=>w(A=>A+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),a.jsx(kn,{isOpen:o,onClose:()=>l(!1),title:f?"Modify Regional Node":"Initialize Regional Node",children:a.jsxs("form",{onSubmit:D,className:"space-y-6 py-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Is,{size:14}),"City Designation"]}),a.jsx(Ee,{className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,placeholder:"e.g. Islamabad",value:p.name,onChange:A=>m({...p,name:A.target.value}),required:!0})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Wd,{size:14}),"Identification Code"]}),a.jsx(Ee,{className:`\r
h-12\r
rounded-2xl\r
font-mono\r
tracking-[0.2em]\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"e.g. ISB",value:p.code,onChange:A=>m({...p,code:A.target.value}),required:!0})]}),a.jsxs("div",{className:"flex gap-4 pt-4",children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>l(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,disabled:g,children:"Cancel"}),a.jsx(ne,{type:"submit",disabled:g,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-bold\r
shadow-xl\r
shadow-orange-500/20\r
`,children:g?"Processing...":f?"Apply Changes":"Confirm Registration"})]})]})}),a.jsx(gr,{isOpen:c,onClose:()=>d(!1),onConfirm:F,title:"Deactivate Regional Node",message:`Warning: Deactivating ${f==null?void 0:f.name} will restrict operational activities in this region. Continue?`})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})};function Rb(e,[t,n]){return Math.min(n,Math.max(t,e))}var R8=u.createContext(void 0);function $0(e){const t=u.useContext(R8);return e||t||"ltr"}var Eh=0;function UE(){u.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??Ab()),document.body.insertAdjacentElement("beforeend",e[1]??Ab()),Eh++,()=>{Eh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),Eh--}},[])}function Ab(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var Nh="focusScope.autoFocusOnMount",Lh="focusScope.autoFocusOnUnmount",Ob={bubbles:!1,cancelable:!0},A8="FocusScope",U0=u.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:i,...o}=e,[l,c]=u.useState(null),d=Ln(s),f=Ln(i),h=u.useRef(null),p=Be(t,v=>c(v)),m=u.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;u.useEffect(()=>{if(r){let v=function(w){if(m.paused||!l)return;const S=w.target;l.contains(S)?h.current=S:ns(h.current,{select:!0})},x=function(w){if(m.paused||!l)return;const S=w.relatedTarget;S!==null&&(l.contains(S)||ns(h.current,{select:!0}))},b=function(w){if(document.activeElement===document.body)for(const k of w)k.removedNodes.length>0&&ns(l)};document.addEventListener("focusin",v),document.addEventListener("focusout",x);const y=new MutationObserver(b);return l&&y.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",x),y.disconnect()}}},[r,l,m.paused]),u.useEffect(()=>{if(l){Db.add(m);const v=document.activeElement;if(!l.contains(v)){const b=new CustomEvent(Nh,Ob);l.addEventListener(Nh,d),l.dispatchEvent(b),b.defaultPrevented||(O8(z8(HE(l)),{select:!0}),document.activeElement===v&&ns(l))}return()=>{l.removeEventListener(Nh,d),setTimeout(()=>{const b=new CustomEvent(Lh,Ob);l.addEventListener(Lh,f),l.dispatchEvent(b),b.defaultPrevented||ns(v??document.body,{select:!0}),l.removeEventListener(Lh,f),Db.remove(m)},0)}}},[l,d,f,m]);const g=u.useCallback(v=>{if(!n&&!r||m.paused)return;const x=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,b=document.activeElement;if(x&&b){const y=v.currentTarget,[w,S]=I8(y);w&&S?!v.shiftKey&&b===S?(v.preventDefault(),n&&ns(w,{select:!0})):v.shiftKey&&b===w&&(v.preventDefault(),n&&ns(S,{select:!0})):b===y&&v.preventDefault()}},[n,r,m.paused]);return a.jsx(Ce.div,{tabIndex:-1,...o,ref:p,onKeyDown:g})});U0.displayName=A8;function O8(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(ns(r,{select:t}),document.activeElement!==n)return}function I8(e){const t=HE(e),n=Ib(t,e),r=Ib(t.reverse(),e);return[n,r]}function HE(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Ib(e,t){for(const n of e)if(!D8(n,{upTo:t}))return n}function D8(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function _8(e){return e instanceof HTMLInputElement&&"select"in e}function ns(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&_8(e)&&t&&e.select()}}var Db=F8();function F8(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=_b(e,t),e.unshift(t)},remove(t){var n;e=_b(e,t),(n=e[0])==null||n.resume()}}}function _b(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function z8(e){return e.filter(t=>t.tagName!=="A")}function WE(e){const t=u.useRef({value:e,previous:e});return u.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var B8=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Gi=new WeakMap,Vc=new WeakMap,$c={},Ph=0,KE=function(e){return e&&(e.host||KE(e.parentNode))},V8=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=KE(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},$8=function(e,t,n,r){var s=V8(t,Array.isArray(e)?e:[e]);$c[n]||($c[n]=new WeakMap);var i=$c[n],o=[],l=new Set,c=new Set(s),d=function(h){!h||l.has(h)||(l.add(h),d(h.parentNode))};s.forEach(d);var f=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(p){if(l.has(p))f(p);else try{var m=p.getAttribute(r),g=m!==null&&m!=="false",v=(Gi.get(p)||0)+1,x=(i.get(p)||0)+1;Gi.set(p,v),i.set(p,x),o.push(p),v===1&&g&&Vc.set(p,!0),x===1&&p.setAttribute(n,"true"),g||p.setAttribute(r,"true")}catch(b){console.error("aria-hidden: cannot operate on ",p,b)}})};return f(t),l.clear(),Ph++,function(){o.forEach(function(h){var p=Gi.get(h)-1,m=i.get(h)-1;Gi.set(h,p),i.set(h,m),p||(Vc.has(h)||h.removeAttribute(r),Vc.delete(h)),m||h.removeAttribute(n)}),Ph--,Ph||(Gi=new WeakMap,Gi=new WeakMap,Vc=new WeakMap,$c={})}},GE=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),s=B8(e);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live], script"))),$8(r,s,n,"aria-hidden")):function(){return null}},lr=function(){return lr=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},lr.apply(this,arguments)};function qE(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function U8(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var wu="right-scroll-bar-position",Su="width-before-scroll-bar",H8="with-scroll-bars-hidden",W8="--removed-body-scroll-bar-size";function Th(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function K8(e,t){var n=u.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var s=n.value;s!==r&&(n.value=r,n.callback(r,s))}}}})[0];return n.callback=t,n.facade}var G8=typeof window<"u"?u.useLayoutEffect:u.useEffect,Fb=new WeakMap;function q8(e,t){var n=K8(null,function(r){return e.forEach(function(s){return Th(s,r)})});return G8(function(){var r=Fb.get(n);if(r){var s=new Set(r),i=new Set(e),o=n.current;s.forEach(function(l){i.has(l)||Th(l,null)}),i.forEach(function(l){s.has(l)||Th(l,o)})}Fb.set(n,e)},[e]),n}function Z8(e){return e}function Y8(e,t){t===void 0&&(t=Z8);var n=[],r=!1,s={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var o=t(i,r);return n.push(o),function(){n=n.filter(function(l){return l!==o})}},assignSyncMedium:function(i){for(r=!0;n.length;){var o=n;n=[],o.forEach(i)}n={push:function(l){return i(l)},filter:function(){return n}}},assignMedium:function(i){r=!0;var o=[];if(n.length){var l=n;n=[],l.forEach(i),o=n}var c=function(){var f=o;o=[],f.forEach(i)},d=function(){return Promise.resolve().then(c)};d(),n={push:function(f){o.push(f),d()},filter:function(f){return o=o.filter(f),n}}}};return s}function X8(e){e===void 0&&(e={});var t=Y8(null);return t.options=lr({async:!0,ssr:!1},e),t}var ZE=function(e){var t=e.sideCar,n=qE(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return u.createElement(r,lr({},n))};ZE.isSideCarExport=!0;function Q8(e,t){return e.useMedium(t),ZE}var YE=X8(),Mh=function(){},vf=u.forwardRef(function(e,t){var n=u.useRef(null),r=u.useState({onScrollCapture:Mh,onWheelCapture:Mh,onTouchMoveCapture:Mh}),s=r[0],i=r[1],o=e.forwardProps,l=e.children,c=e.className,d=e.removeScrollBar,f=e.enabled,h=e.shards,p=e.sideCar,m=e.noRelative,g=e.noIsolation,v=e.inert,x=e.allowPinchZoom,b=e.as,y=b===void 0?"div":b,w=e.gapMode,S=qE(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=p,C=q8([n,t]),j=lr(lr({},S),s);return u.createElement(u.Fragment,null,f&&u.createElement(k,{sideCar:YE,removeScrollBar:d,shards:h,noRelative:m,noIsolation:g,inert:v,setCallbacks:i,allowPinchZoom:!!x,lockRef:n,gapMode:w}),o?u.cloneElement(u.Children.only(l),lr(lr({},j),{ref:C})):u.createElement(y,lr({},j,{className:c,ref:C}),l))});vf.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};vf.classNames={fullWidth:Su,zeroRight:wu};var J8=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function eB(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=J8();return t&&e.setAttribute("nonce",t),e}function tB(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function nB(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var rB=function(){var e=0,t=null;return{add:function(n){e==0&&(t=eB())&&(tB(t,n),nB(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},sB=function(){var e=rB();return function(t,n){u.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},XE=function(){var e=sB(),t=function(n){var r=n.styles,s=n.dynamic;return e(r,s),null};return t},iB={left:0,top:0,right:0,gap:0},Rh=function(e){return parseInt(e||"",10)||0},oB=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],s=t[e==="padding"?"paddingRight":"marginRight"];return[Rh(n),Rh(r),Rh(s)]},aB=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return iB;var t=oB(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},lB=XE(),Co="data-scroll-locked",cB=function(e,t,n,r){var s=e.left,i=e.top,o=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(H8,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(Co,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(o,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(wu,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(Su,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(wu," .").concat(wu,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(Su," .").concat(Su,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(Co,`] {
    `).concat(W8,": ").concat(l,`px;
  }
`)},zb=function(){var e=parseInt(document.body.getAttribute(Co)||"0",10);return isFinite(e)?e:0},uB=function(){u.useEffect(function(){return document.body.setAttribute(Co,(zb()+1).toString()),function(){var e=zb()-1;e<=0?document.body.removeAttribute(Co):document.body.setAttribute(Co,e.toString())}},[])},dB=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,s=r===void 0?"margin":r;uB();var i=u.useMemo(function(){return aB(s)},[s]);return u.createElement(lB,{styles:cB(i,!t,s,n?"":"!important")})},Mm=!1;if(typeof window<"u")try{var Uc=Object.defineProperty({},"passive",{get:function(){return Mm=!0,!0}});window.addEventListener("test",Uc,Uc),window.removeEventListener("test",Uc,Uc)}catch{Mm=!1}var qi=Mm?{passive:!1}:!1,fB=function(e){return e.tagName==="TEXTAREA"},QE=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!fB(e)&&n[t]==="visible")},hB=function(e){return QE(e,"overflowY")},pB=function(e){return QE(e,"overflowX")},Bb=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var s=JE(e,r);if(s){var i=eN(e,r),o=i[1],l=i[2];if(o>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},mB=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},gB=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},JE=function(e,t){return e==="v"?hB(t):pB(t)},eN=function(e,t){return e==="v"?mB(t):gB(t)},vB=function(e,t){return e==="h"&&t==="rtl"?-1:1},xB=function(e,t,n,r,s){var i=vB(e,window.getComputedStyle(t).direction),o=i*r,l=n.target,c=t.contains(l),d=!1,f=o>0,h=0,p=0;do{if(!l)break;var m=eN(e,l),g=m[0],v=m[1],x=m[2],b=v-x-i*g;(g||b)&&JE(e,l)&&(h+=b,p+=g);var y=l.parentNode;l=y&&y.nodeType===Node.DOCUMENT_FRAGMENT_NODE?y.host:y}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(f&&Math.abs(h)<1||!f&&Math.abs(p)<1)&&(d=!0),d},Hc=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Vb=function(e){return[e.deltaX,e.deltaY]},$b=function(e){return e&&"current"in e?e.current:e},yB=function(e,t){return e[0]===t[0]&&e[1]===t[1]},bB=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},wB=0,Zi=[];function SB(e){var t=u.useRef([]),n=u.useRef([0,0]),r=u.useRef(),s=u.useState(wB++)[0],i=u.useState(XE)[0],o=u.useRef(e);u.useEffect(function(){o.current=e},[e]),u.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var v=U8([e.lockRef.current],(e.shards||[]).map($b),!0).filter(Boolean);return v.forEach(function(x){return x.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),v.forEach(function(x){return x.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var l=u.useCallback(function(v,x){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!o.current.allowPinchZoom;var b=Hc(v),y=n.current,w="deltaX"in v?v.deltaX:y[0]-b[0],S="deltaY"in v?v.deltaY:y[1]-b[1],k,C=v.target,j=Math.abs(w)>Math.abs(S)?"h":"v";if("touches"in v&&j==="h"&&C.type==="range")return!1;var E=window.getSelection(),L=E&&E.anchorNode,N=L?L===C||L.contains(C):!1;if(N)return!1;var R=Bb(j,C);if(!R)return!0;if(R?k=j:(k=j==="v"?"h":"v",R=Bb(j,C)),!R)return!1;if(!r.current&&"changedTouches"in v&&(w||S)&&(r.current=k),!k)return!0;var D=r.current||k;return xB(D,x,v,D==="h"?w:S)},[]),c=u.useCallback(function(v){var x=v;if(!(!Zi.length||Zi[Zi.length-1]!==i)){var b="deltaY"in x?Vb(x):Hc(x),y=t.current.filter(function(k){return k.name===x.type&&(k.target===x.target||x.target===k.shadowParent)&&yB(k.delta,b)})[0];if(y&&y.should){x.cancelable&&x.preventDefault();return}if(!y){var w=(o.current.shards||[]).map($b).filter(Boolean).filter(function(k){return k.contains(x.target)}),S=w.length>0?l(x,w[0]):!o.current.noIsolation;S&&x.cancelable&&x.preventDefault()}}},[]),d=u.useCallback(function(v,x,b,y){var w={name:v,delta:x,target:b,should:y,shadowParent:kB(b)};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(S){return S!==w})},1)},[]),f=u.useCallback(function(v){n.current=Hc(v),r.current=void 0},[]),h=u.useCallback(function(v){d(v.type,Vb(v),v.target,l(v,e.lockRef.current))},[]),p=u.useCallback(function(v){d(v.type,Hc(v),v.target,l(v,e.lockRef.current))},[]);u.useEffect(function(){return Zi.push(i),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",c,qi),document.addEventListener("touchmove",c,qi),document.addEventListener("touchstart",f,qi),function(){Zi=Zi.filter(function(v){return v!==i}),document.removeEventListener("wheel",c,qi),document.removeEventListener("touchmove",c,qi),document.removeEventListener("touchstart",f,qi)}},[]);var m=e.removeScrollBar,g=e.inert;return u.createElement(u.Fragment,null,g?u.createElement(i,{styles:bB(s)}):null,m?u.createElement(dB,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function kB(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const CB=Q8(YE,SB);var H0=u.forwardRef(function(e,t){return u.createElement(vf,lr({},e,{ref:t,sideCar:CB}))});H0.classNames=vf.classNames;var jB=[" ","Enter","ArrowUp","ArrowDown"],EB=[" ","Enter"],Mi="Select",[xf,yf,NB]=_g(Mi),[la]=Vr(Mi,[NB,Yd]),bf=Yd(),[LB,Gs]=la(Mi),[PB,TB]=la(Mi),tN=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:s,onOpenChange:i,value:o,defaultValue:l,onValueChange:c,dir:d,name:f,autoComplete:h,disabled:p,required:m,form:g}=e,v=bf(t),[x,b]=u.useState(null),[y,w]=u.useState(null),[S,k]=u.useState(!1),C=$0(d),[j,E]=Li({prop:r,defaultProp:s??!1,onChange:i,caller:Mi}),[L,N]=Li({prop:o,defaultProp:l,onChange:c,caller:Mi}),R=u.useRef(null),D=x?g||!!x.closest("form"):!0,[F,_]=u.useState(new Set),z=Array.from(F).map(A=>A.props.value).join(";");return a.jsx(vO,{...v,children:a.jsxs(LB,{required:m,scope:t,trigger:x,onTriggerChange:b,valueNode:y,onValueNodeChange:w,valueNodeHasChildren:S,onValueNodeHasChildrenChange:k,contentId:Ms(),value:L,onValueChange:N,open:j,onOpenChange:E,dir:C,triggerPointerDownPosRef:R,disabled:p,children:[a.jsx(xf.Provider,{scope:t,children:a.jsx(PB,{scope:e.__scopeSelect,onNativeOptionAdd:u.useCallback(A=>{_(G=>new Set(G).add(A))},[]),onNativeOptionRemove:u.useCallback(A=>{_(G=>{const T=new Set(G);return T.delete(A),T})},[]),children:n})}),D?a.jsxs(jN,{"aria-hidden":!0,required:m,tabIndex:-1,name:f,autoComplete:h,value:L,onChange:A=>N(A.target.value),disabled:p,form:g,children:[L===void 0?a.jsx("option",{value:""}):null,Array.from(F)]},z):null]})})};tN.displayName=Mi;var nN="SelectTrigger",rN=u.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...s}=e,i=bf(n),o=Gs(nN,n),l=o.disabled||r,c=Be(t,o.onTriggerChange),d=yf(n),f=u.useRef("touch"),[h,p,m]=NN(v=>{const x=d().filter(w=>!w.disabled),b=x.find(w=>w.value===o.value),y=LN(x,v,b);y!==void 0&&o.onValueChange(y.value)}),g=v=>{l||(o.onOpenChange(!0),m()),v&&(o.triggerPointerDownPosRef.current={x:Math.round(v.pageX),y:Math.round(v.pageY)})};return a.jsx($C,{asChild:!0,...i,children:a.jsx(Ce.button,{type:"button",role:"combobox","aria-controls":o.contentId,"aria-expanded":o.open,"aria-required":o.required,"aria-autocomplete":"none",dir:o.dir,"data-state":o.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":EN(o.value)?"":void 0,...s,ref:c,onClick:ye(s.onClick,v=>{v.currentTarget.focus(),f.current!=="mouse"&&g(v)}),onPointerDown:ye(s.onPointerDown,v=>{f.current=v.pointerType;const x=v.target;x.hasPointerCapture(v.pointerId)&&x.releasePointerCapture(v.pointerId),v.button===0&&v.ctrlKey===!1&&v.pointerType==="mouse"&&(g(v),v.preventDefault())}),onKeyDown:ye(s.onKeyDown,v=>{const x=h.current!=="";!(v.ctrlKey||v.altKey||v.metaKey)&&v.key.length===1&&p(v.key),!(x&&v.key===" ")&&jB.includes(v.key)&&(g(),v.preventDefault())})})})});rN.displayName=nN;var sN="SelectValue",iN=u.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:s,children:i,placeholder:o="",...l}=e,c=Gs(sN,n),{onValueNodeHasChildrenChange:d}=c,f=i!==void 0,h=Be(t,c.onValueNodeChange);return Nt(()=>{d(f)},[d,f]),a.jsx(Ce.span,{...l,ref:h,style:{pointerEvents:"none"},children:EN(c.value)?a.jsx(a.Fragment,{children:o}):i})});iN.displayName=sN;var MB="SelectIcon",oN=u.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...s}=e;return a.jsx(Ce.span,{"aria-hidden":!0,...s,ref:t,children:r||"▼"})});oN.displayName=MB;var RB="SelectPortal",aN=e=>a.jsx($d,{asChild:!0,...e});aN.displayName=RB;var Ri="SelectContent",lN=u.forwardRef((e,t)=>{const n=Gs(Ri,e.__scopeSelect),[r,s]=u.useState();if(Nt(()=>{s(new DocumentFragment)},[]),!n.open){const i=r;return i?pn.createPortal(a.jsx(cN,{scope:e.__scopeSelect,children:a.jsx(xf.Slot,{scope:e.__scopeSelect,children:a.jsx("div",{children:e.children})})}),i):null}return a.jsx(uN,{...e,ref:t})});lN.displayName=Ri;var Dn=10,[cN,qs]=la(Ri),AB="SelectContentImpl",OB=bl("SelectContent.RemoveScroll"),uN=u.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:i,onPointerDownOutside:o,side:l,sideOffset:c,align:d,alignOffset:f,arrowPadding:h,collisionBoundary:p,collisionPadding:m,sticky:g,hideWhenDetached:v,avoidCollisions:x,...b}=e,y=Gs(Ri,n),[w,S]=u.useState(null),[k,C]=u.useState(null),j=Be(t,W=>S(W)),[E,L]=u.useState(null),[N,R]=u.useState(null),D=yf(n),[F,_]=u.useState(!1),z=u.useRef(!1);u.useEffect(()=>{if(w)return GE(w)},[w]),UE();const A=u.useCallback(W=>{const[te,...de]=D().map(me=>me.ref.current),[Q]=de.slice(-1),ie=document.activeElement;for(const me of W)if(me===ie||(me==null||me.scrollIntoView({block:"nearest"}),me===te&&k&&(k.scrollTop=0),me===Q&&k&&(k.scrollTop=k.scrollHeight),me==null||me.focus(),document.activeElement!==ie))return},[D,k]),G=u.useCallback(()=>A([E,w]),[A,E,w]);u.useEffect(()=>{F&&G()},[F,G]);const{onOpenChange:T,triggerPointerDownPosRef:O}=y;u.useEffect(()=>{if(w){let W={x:0,y:0};const te=Q=>{var ie,me;W={x:Math.abs(Math.round(Q.pageX)-(((ie=O.current)==null?void 0:ie.x)??0)),y:Math.abs(Math.round(Q.pageY)-(((me=O.current)==null?void 0:me.y)??0))}},de=Q=>{W.x<=10&&W.y<=10?Q.preventDefault():w.contains(Q.target)||T(!1),document.removeEventListener("pointermove",te),O.current=null};return O.current!==null&&(document.addEventListener("pointermove",te),document.addEventListener("pointerup",de,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",te),document.removeEventListener("pointerup",de,{capture:!0})}}},[w,T,O]),u.useEffect(()=>{const W=()=>T(!1);return window.addEventListener("blur",W),window.addEventListener("resize",W),()=>{window.removeEventListener("blur",W),window.removeEventListener("resize",W)}},[T]);const[I,V]=NN(W=>{const te=D().filter(ie=>!ie.disabled),de=te.find(ie=>ie.ref.current===document.activeElement),Q=LN(te,W,de);Q&&setTimeout(()=>Q.ref.current.focus())}),Z=u.useCallback((W,te,de)=>{const Q=!z.current&&!de;(y.value!==void 0&&y.value===te||Q)&&(L(W),Q&&(z.current=!0))},[y.value]),K=u.useCallback(()=>w==null?void 0:w.focus(),[w]),P=u.useCallback((W,te,de)=>{const Q=!z.current&&!de;(y.value!==void 0&&y.value===te||Q)&&R(W)},[y.value]),M=r==="popper"?Rm:dN,se=M===Rm?{side:l,sideOffset:c,align:d,alignOffset:f,arrowPadding:h,collisionBoundary:p,collisionPadding:m,sticky:g,hideWhenDetached:v,avoidCollisions:x}:{};return a.jsx(cN,{scope:n,content:w,viewport:k,onViewportChange:C,itemRefCallback:Z,selectedItem:E,onItemLeave:K,itemTextRefCallback:P,focusSelectedItem:G,selectedItemText:N,position:r,isPositioned:F,searchRef:I,children:a.jsx(H0,{as:OB,allowPinchZoom:!0,children:a.jsx(U0,{asChild:!0,trapped:y.open,onMountAutoFocus:W=>{W.preventDefault()},onUnmountAutoFocus:ye(s,W=>{var te;(te=y.trigger)==null||te.focus({preventScroll:!0}),W.preventDefault()}),children:a.jsx(Kl,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:o,onFocusOutside:W=>W.preventDefault(),onDismiss:()=>y.onOpenChange(!1),children:a.jsx(M,{role:"listbox",id:y.contentId,"data-state":y.open?"open":"closed",dir:y.dir,onContextMenu:W=>W.preventDefault(),...b,...se,onPlaced:()=>_(!0),ref:j,style:{display:"flex",flexDirection:"column",outline:"none",...b.style},onKeyDown:ye(b.onKeyDown,W=>{const te=W.ctrlKey||W.altKey||W.metaKey;if(W.key==="Tab"&&W.preventDefault(),!te&&W.key.length===1&&V(W.key),["ArrowUp","ArrowDown","Home","End"].includes(W.key)){let Q=D().filter(ie=>!ie.disabled).map(ie=>ie.ref.current);if(["ArrowUp","End"].includes(W.key)&&(Q=Q.slice().reverse()),["ArrowUp","ArrowDown"].includes(W.key)){const ie=W.target,me=Q.indexOf(ie);Q=Q.slice(me+1)}setTimeout(()=>A(Q)),W.preventDefault()}})})})})})})});uN.displayName=AB;var IB="SelectItemAlignedPosition",dN=u.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...s}=e,i=Gs(Ri,n),o=qs(Ri,n),[l,c]=u.useState(null),[d,f]=u.useState(null),h=Be(t,j=>f(j)),p=yf(n),m=u.useRef(!1),g=u.useRef(!0),{viewport:v,selectedItem:x,selectedItemText:b,focusSelectedItem:y}=o,w=u.useCallback(()=>{if(i.trigger&&i.valueNode&&l&&d&&v&&x&&b){const j=i.trigger.getBoundingClientRect(),E=d.getBoundingClientRect(),L=i.valueNode.getBoundingClientRect(),N=b.getBoundingClientRect();if(i.dir!=="rtl"){const ie=N.left-E.left,me=L.left-ie,J=j.left-me,q=j.width+J,$=Math.max(q,E.width),ae=window.innerWidth-Dn,le=Rb(me,[Dn,Math.max(Dn,ae-$)]);l.style.minWidth=q+"px",l.style.left=le+"px"}else{const ie=E.right-N.right,me=window.innerWidth-L.right-ie,J=window.innerWidth-j.right-me,q=j.width+J,$=Math.max(q,E.width),ae=window.innerWidth-Dn,le=Rb(me,[Dn,Math.max(Dn,ae-$)]);l.style.minWidth=q+"px",l.style.right=le+"px"}const R=p(),D=window.innerHeight-Dn*2,F=v.scrollHeight,_=window.getComputedStyle(d),z=parseInt(_.borderTopWidth,10),A=parseInt(_.paddingTop,10),G=parseInt(_.borderBottomWidth,10),T=parseInt(_.paddingBottom,10),O=z+A+F+T+G,I=Math.min(x.offsetHeight*5,O),V=window.getComputedStyle(v),Z=parseInt(V.paddingTop,10),K=parseInt(V.paddingBottom,10),P=j.top+j.height/2-Dn,M=D-P,se=x.offsetHeight/2,W=x.offsetTop+se,te=z+A+W,de=O-te;if(te<=P){const ie=R.length>0&&x===R[R.length-1].ref.current;l.style.bottom="0px";const me=d.clientHeight-v.offsetTop-v.offsetHeight,J=Math.max(M,se+(ie?K:0)+me+G),q=te+J;l.style.height=q+"px"}else{const ie=R.length>0&&x===R[0].ref.current;l.style.top="0px";const J=Math.max(P,z+v.offsetTop+(ie?Z:0)+se)+de;l.style.height=J+"px",v.scrollTop=te-P+v.offsetTop}l.style.margin=`${Dn}px 0`,l.style.minHeight=I+"px",l.style.maxHeight=D+"px",r==null||r(),requestAnimationFrame(()=>m.current=!0)}},[p,i.trigger,i.valueNode,l,d,v,x,b,i.dir,r]);Nt(()=>w(),[w]);const[S,k]=u.useState();Nt(()=>{d&&k(window.getComputedStyle(d).zIndex)},[d]);const C=u.useCallback(j=>{j&&g.current===!0&&(w(),y==null||y(),g.current=!1)},[w,y]);return a.jsx(_B,{scope:n,contentWrapper:l,shouldExpandOnScrollRef:m,onScrollButtonChange:C,children:a.jsx("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:S},children:a.jsx(Ce.div,{...s,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});dN.displayName=IB;var DB="SelectPopperPosition",Rm=u.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:s=Dn,...i}=e,o=bf(n);return a.jsx(UC,{...o,...i,ref:t,align:r,collisionPadding:s,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});Rm.displayName=DB;var[_B,W0]=la(Ri,{}),Am="SelectViewport",fN=u.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:r,...s}=e,i=qs(Am,n),o=W0(Am,n),l=Be(t,i.onViewportChange),c=u.useRef(0);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),a.jsx(xf.Slot,{scope:n,children:a.jsx(Ce.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:ye(s.onScroll,d=>{const f=d.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:p}=o;if(p!=null&&p.current&&h){const m=Math.abs(c.current-f.scrollTop);if(m>0){const g=window.innerHeight-Dn*2,v=parseFloat(h.style.minHeight),x=parseFloat(h.style.height),b=Math.max(v,x);if(b<g){const y=b+m,w=Math.min(g,y),S=y-w;h.style.height=w+"px",h.style.bottom==="0px"&&(f.scrollTop=S>0?S:0,h.style.justifyContent="flex-end")}}}c.current=f.scrollTop})})})]})});fN.displayName=Am;var hN="SelectGroup",[FB,zB]=la(hN),BB=u.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,s=Ms();return a.jsx(FB,{scope:n,id:s,children:a.jsx(Ce.div,{role:"group","aria-labelledby":s,...r,ref:t})})});BB.displayName=hN;var pN="SelectLabel",mN=u.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,s=zB(pN,n);return a.jsx(Ce.div,{id:s.id,...r,ref:t})});mN.displayName=pN;var pd="SelectItem",[VB,gN]=la(pd),vN=u.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:s=!1,textValue:i,...o}=e,l=Gs(pd,n),c=qs(pd,n),d=l.value===r,[f,h]=u.useState(i??""),[p,m]=u.useState(!1),g=Be(t,y=>{var w;return(w=c.itemRefCallback)==null?void 0:w.call(c,y,r,s)}),v=Ms(),x=u.useRef("touch"),b=()=>{s||(l.onValueChange(r),l.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return a.jsx(VB,{scope:n,value:r,disabled:s,textId:v,isSelected:d,onItemTextChange:u.useCallback(y=>{h(w=>w||((y==null?void 0:y.textContent)??"").trim())},[]),children:a.jsx(xf.ItemSlot,{scope:n,value:r,disabled:s,textValue:f,children:a.jsx(Ce.div,{role:"option","aria-labelledby":v,"data-highlighted":p?"":void 0,"aria-selected":d&&p,"data-state":d?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...o,ref:g,onFocus:ye(o.onFocus,()=>m(!0)),onBlur:ye(o.onBlur,()=>m(!1)),onClick:ye(o.onClick,()=>{x.current!=="mouse"&&b()}),onPointerUp:ye(o.onPointerUp,()=>{x.current==="mouse"&&b()}),onPointerDown:ye(o.onPointerDown,y=>{x.current=y.pointerType}),onPointerMove:ye(o.onPointerMove,y=>{var w;x.current=y.pointerType,s?(w=c.onItemLeave)==null||w.call(c):x.current==="mouse"&&y.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ye(o.onPointerLeave,y=>{var w;y.currentTarget===document.activeElement&&((w=c.onItemLeave)==null||w.call(c))}),onKeyDown:ye(o.onKeyDown,y=>{var S;((S=c.searchRef)==null?void 0:S.current)!==""&&y.key===" "||(EB.includes(y.key)&&b(),y.key===" "&&y.preventDefault())})})})})});vN.displayName=pd;var Da="SelectItemText",xN=u.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:s,...i}=e,o=Gs(Da,n),l=qs(Da,n),c=gN(Da,n),d=TB(Da,n),[f,h]=u.useState(null),p=Be(t,b=>h(b),c.onItemTextChange,b=>{var y;return(y=l.itemTextRefCallback)==null?void 0:y.call(l,b,c.value,c.disabled)}),m=f==null?void 0:f.textContent,g=u.useMemo(()=>a.jsx("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:v,onNativeOptionRemove:x}=d;return Nt(()=>(v(g),()=>x(g)),[v,x,g]),a.jsxs(a.Fragment,{children:[a.jsx(Ce.span,{id:c.textId,...i,ref:p}),c.isSelected&&o.valueNode&&!o.valueNodeHasChildren?pn.createPortal(i.children,o.valueNode):null]})});xN.displayName=Da;var yN="SelectItemIndicator",bN=u.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return gN(yN,n).isSelected?a.jsx(Ce.span,{"aria-hidden":!0,...r,ref:t}):null});bN.displayName=yN;var Om="SelectScrollUpButton",wN=u.forwardRef((e,t)=>{const n=qs(Om,e.__scopeSelect),r=W0(Om,e.__scopeSelect),[s,i]=u.useState(!1),o=Be(t,r.onScrollButtonChange);return Nt(()=>{if(n.viewport&&n.isPositioned){let l=function(){const d=c.scrollTop>0;i(d)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),s?a.jsx(kN,{...e,ref:o,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop-c.offsetHeight)}}):null});wN.displayName=Om;var Im="SelectScrollDownButton",SN=u.forwardRef((e,t)=>{const n=qs(Im,e.__scopeSelect),r=W0(Im,e.__scopeSelect),[s,i]=u.useState(!1),o=Be(t,r.onScrollButtonChange);return Nt(()=>{if(n.viewport&&n.isPositioned){let l=function(){const d=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<d;i(f)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),s?a.jsx(kN,{...e,ref:o,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop+c.offsetHeight)}}):null});SN.displayName=Im;var kN=u.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...s}=e,i=qs("SelectScrollButton",n),o=u.useRef(null),l=yf(n),c=u.useCallback(()=>{o.current!==null&&(window.clearInterval(o.current),o.current=null)},[]);return u.useEffect(()=>()=>c(),[c]),Nt(()=>{var f;const d=l().find(h=>h.ref.current===document.activeElement);(f=d==null?void 0:d.ref.current)==null||f.scrollIntoView({block:"nearest"})},[l]),a.jsx(Ce.div,{"aria-hidden":!0,...s,ref:t,style:{flexShrink:0,...s.style},onPointerDown:ye(s.onPointerDown,()=>{o.current===null&&(o.current=window.setInterval(r,50))}),onPointerMove:ye(s.onPointerMove,()=>{var d;(d=i.onItemLeave)==null||d.call(i),o.current===null&&(o.current=window.setInterval(r,50))}),onPointerLeave:ye(s.onPointerLeave,()=>{c()})})}),$B="SelectSeparator",CN=u.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return a.jsx(Ce.div,{"aria-hidden":!0,...r,ref:t})});CN.displayName=$B;var Dm="SelectArrow",UB=u.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,s=bf(n),i=Gs(Dm,n),o=qs(Dm,n);return i.open&&o.position==="popper"?a.jsx(HC,{...s,...r,ref:t}):null});UB.displayName=Dm;var HB="SelectBubbleInput",jN=u.forwardRef(({__scopeSelect:e,value:t,...n},r)=>{const s=u.useRef(null),i=Be(r,s),o=WE(t);return u.useEffect(()=>{const l=s.current;if(!l)return;const c=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(c,"value").set;if(o!==t&&f){const h=new Event("change",{bubbles:!0});f.call(l,t),l.dispatchEvent(h)}},[o,t]),a.jsx(Ce.select,{...n,style:{...Dk,...n.style},ref:i,defaultValue:t})});jN.displayName=HB;function EN(e){return e===""||e===void 0}function NN(e){const t=Ln(e),n=u.useRef(""),r=u.useRef(0),s=u.useCallback(o=>{const l=n.current+o;t(l),function c(d){n.current=d,window.clearTimeout(r.current),d!==""&&(r.current=window.setTimeout(()=>c(""),1e3))}(l)},[t]),i=u.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return u.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,s,i]}function LN(e,t,n){const s=t.length>1&&Array.from(t).every(d=>d===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let o=WB(e,Math.max(i,0));s.length===1&&(o=o.filter(d=>d!==n));const c=o.find(d=>d.textValue.toLowerCase().startsWith(s.toLowerCase()));return c!==n?c:void 0}function WB(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var KB=tN,PN=rN,GB=iN,qB=oN,ZB=aN,TN=lN,YB=fN,MN=mN,RN=vN,XB=xN,QB=bN,AN=wN,ON=SN,IN=CN;const St=KB,kt=GB,pt=u.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(PN,{ref:r,className:he("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,a.jsx(qB,{asChild:!0,children:a.jsx(oC,{className:"h-4 w-4 opacity-50"})})]}));pt.displayName=PN.displayName;const DN=u.forwardRef(({className:e,...t},n)=>a.jsx(AN,{ref:n,className:he("flex cursor-default items-center justify-center py-1",e),...t,children:a.jsx(wR,{className:"h-4 w-4"})}));DN.displayName=AN.displayName;const _N=u.forwardRef(({className:e,...t},n)=>a.jsx(ON,{ref:n,className:he("flex cursor-default items-center justify-center py-1",e),...t,children:a.jsx(oC,{className:"h-4 w-4"})}));_N.displayName=ON.displayName;const mt=u.forwardRef(({className:e,children:t,position:n="popper",...r},s)=>a.jsx(ZB,{children:a.jsxs(TN,{ref:s,className:he("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[a.jsx(DN,{}),a.jsx(YB,{className:he("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),a.jsx(_N,{})]})}));mt.displayName=TN.displayName;const JB=u.forwardRef(({className:e,...t},n)=>a.jsx(MN,{ref:n,className:he("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));JB.displayName=MN.displayName;const Ie=u.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(RN,{ref:r,className:he("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",e),...n,children:[a.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:a.jsx(QB,{children:a.jsx(bR,{className:"h-4 w-4"})})}),a.jsx(XB,{children:t})]}));Ie.displayName=RN.displayName;const eV=u.forwardRef(({className:e,...t},n)=>a.jsx(IN,{ref:n,className:he("-mx-1 my-1 h-px bg-muted",e),...t}));eV.displayName=IN.displayName;const tV=()=>{const{franchises:e,loading:t,fetchFranchises:n,createFranchise:r,updateFranchise:s,terminateFranchise:i}=gf(),{cities:o,fetchCities:l}=mf(),[c,d]=u.useState(!1),[f,h]=u.useState(!1),[p,m]=u.useState(null),[g,v]=u.useState(!1),[x,b]=u.useState(!1),[y,w]=u.useState(!1),[S,k]=u.useState(1),[C,j]=u.useState(10),[E,L]=u.useState({cityId:"",name:"",code:"",maxActiveRiders:""});u.useEffect(()=>{l(),n()},[]),u.useEffect(()=>{const I=setTimeout(()=>{w(!0)},250);return()=>clearTimeout(I)},[]);const N=u.useMemo(()=>{const I=(e==null?void 0:e.length)||0,V=(e==null?void 0:e.reduce((P,M)=>P+(M.maxActiveRiders||0),0))||0,Z=I>0?Math.round(V/I):0,K=I>0?Math.min(Math.round(V/(I*100)*100),100):0;return{total:I,totalRiders:V,avgCapacity:Z,efficiency:K}},[e]),R=Math.ceil(((e==null?void 0:e.length)||0)/C),D=u.useMemo(()=>{const I=(S-1)*C;return e.slice(I,I+C)},[e,S,C]),F=I=>{var V;m(I),L({cityId:I.cityId||"",name:I.name||"",code:I.code||"",maxActiveRiders:((V=I.maxActiveRiders)==null?void 0:V.toString())||""}),d(!0)},_=I=>{m(I),h(!0)},z=async I=>{I.preventDefault(),v(!0);try{const V={cityId:E.cityId,name:E.name,code:E.code,maxActiveRiders:parseInt(E.maxActiveRiders)||0};p?await s(p.id,V):await r(V),d(!1),L({cityId:"",name:"",code:"",maxActiveRiders:""}),m(null)}catch(V){console.error("Error saving franchise:",V)}finally{v(!1)}},A=async()=>{if(p)try{b(!0),await i(p.id)}catch(I){console.error("Error terminating franchise:",I)}finally{b(!1),h(!1),m(null)}},G=()=>{m(null),L({cityId:"",name:"",code:"",maxActiveRiders:""}),d(!0)},T=[{key:"name",label:"Franchise Node",render:I=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-blue-500/20\r
to-blue-600/10\r
flex\r
items-center\r
justify-center\r
text-blue-500\r
shadow-lg\r
shadow-blue-500/10\r
`,children:a.jsx(an,{size:18})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:I}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:"Operational Franchise"})]})]})},{key:"code",label:"Node ID",render:I=>a.jsx("code",{className:`\r
px-3\r
py-1.5\r
rounded-xl\r
bg-slate-100\r
dark:bg-slate-800\r
text-[11px]\r
font-mono\r
tracking-[0.2em]\r
font-bold\r
text-indigo-500\r
border\r
border-slate-200\r
dark:border-slate-700\r
`,children:I})},{key:"city",label:"Region",render:I=>a.jsxs("div",{className:"flex items-center gap-2 text-slate-500 dark:text-slate-400",children:[a.jsx(Is,{size:14}),a.jsx("span",{className:"font-semibold",children:(I==null?void 0:I.name)||"Global"})]})},{key:"maxActiveRiders",label:"Rider Capacity",render:I=>a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-2\r
font-bold\r
text-slate-700\r
dark:text-slate-200\r
`,children:[a.jsx(Ts,{size:15,className:"text-orange-500"}),I]})},{key:"createdAt",label:"Deployment Date",render:I=>a.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:I?new Date(I).toLocaleDateString():"-"})},{key:"actions",label:"Controls",render:(I,V)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>F(V),className:`\r
rounded-xl\r
hover:bg-blue-500/10\r
hover:text-blue-500\r
transition-all\r
duration-300\r
`,children:a.jsx(Hg,{size:16})}),a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>_(V),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,children:a.jsx(_i,{size:16})})]})}],O=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-blue-500/10
`;return y?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Franchise Intelligence",subtitle:"Monitor and scale operational capacity across regional networks"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[a.jsx(X.div,{whileHover:{y:-4},className:`${O} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Nodes"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:N.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-blue-500/10\r
flex\r
items-center\r
justify-center\r
text-blue-500\r
`,children:a.jsx(Us,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${O} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Rider Capacity"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:N.totalRiders})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
`,children:a.jsx(Ts,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${O} rounded-[2rem] p-6`,children:a.jsx("div",{className:"flex items-center justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"Network Efficiency"}),a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[N.efficiency,"%"]}),a.jsx(Qt,{size:18,className:"text-indigo-500"})]}),a.jsx(mr,{value:N.efficiency,className:"h-2 bg-slate-200 dark:bg-slate-800"})]})})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${O} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-blue-500\r
to-blue-700\r
text-white\r
shadow-xl\r
shadow-blue-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"Franchise Directory"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Distributed operational network"})]})]}),a.jsxs(ne,{onClick:G,disabled:t,className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-blue-600\r
hover:bg-blue-700\r
text-white\r
font-black\r
shadow-xl\r
shadow-blue-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
active:scale-95\r
`,children:[a.jsx(Xo,{size:18,className:"mr-2"}),"Add Franchise",a.jsx($r,{size:16,className:"ml-2"})]})]}),a.jsx(Ks,{columns:T,data:D,loading:t,emptyMessage:"No franchise nodes found in system"}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(S-1)*C+1," - ",Math.min(S*C,(e==null?void 0:e.length)||0)," ","of"," ",(e==null?void 0:e.length)||0]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:S===1,onClick:()=>k(I=>I-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-blue-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-blue-500/20\r
`,children:[S," / ",R]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:S===R,onClick:()=>k(I=>I+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),a.jsx(kn,{isOpen:c,onClose:()=>d(!1),title:p?"Reconfigure Franchise":"Provision New Franchise",children:a.jsxs("form",{onSubmit:z,className:"space-y-6 py-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Is,{size:14}),"Assigned Region"]}),a.jsxs(St,{value:E.cityId,onValueChange:I=>L({...E,cityId:I}),children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
bg-white\r
dark:bg-slate-900\r
`,children:a.jsx(kt,{placeholder:"Select target city"})}),a.jsx(mt,{children:o.map(I=>a.jsx(Ie,{value:I.id,children:I.name},I.id))})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(an,{size:14}),"Franchise Name"]}),a.jsx(Ee,{className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-blue-500\r
`,placeholder:"e.g. Barqi Lahore",value:E.name,onChange:I=>L({...E,name:I.target.value}),required:!0})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Wd,{size:14}),"Node Identification"]}),a.jsx(Ee,{className:`\r
h-12\r
rounded-2xl\r
font-mono\r
tracking-[0.2em]\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"e.g. BARQILHR",value:E.code,onChange:I=>L({...E,code:I.target.value}),required:!0})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Ts,{size:14}),"Rider Operational Capacity"]}),a.jsx(Ee,{type:"number",className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,placeholder:"e.g. 50",value:E.maxActiveRiders,onChange:I=>L({...E,maxActiveRiders:I.target.value}),required:!0})]}),a.jsxs("div",{className:`\r
rounded-3xl\r
border\r
border-blue-500/10\r
bg-gradient-to-br\r
from-blue-500/5\r
to-indigo-500/5\r
p-5\r
flex\r
items-start\r
gap-4\r
`,children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-blue-500/10\r
flex\r
items-center\r
justify-center\r
text-blue-500\r
`,children:a.jsx(gt,{size:18})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-black text-slate-800 dark:text-white text-sm",children:"Operational Intelligence"}),a.jsx("p",{className:"text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1",children:"Franchise nodes inherit regional deployment rules and rider operational thresholds from the selected city infrastructure."})]})]}),a.jsxs("div",{className:"flex gap-4 pt-2",children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>d(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
`,disabled:g,children:"Cancel"}),a.jsx(ne,{type:"submit",disabled:g,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-blue-600\r
hover:bg-blue-700\r
text-white\r
font-bold\r
shadow-xl\r
shadow-blue-500/20\r
transition-all\r
duration-500\r
hover:scale-[1.02]\r
active:scale-[0.98]\r
`,children:g?"Processing Node...":p?"Commit Update":"Initialize Node"})]})]})}),a.jsx(gr,{isOpen:f,onClose:()=>h(!1),onConfirm:A,title:"Decommission Franchise",message:`Warning: You are about to terminate operational node ${p==null?void 0:p.name}. This action cannot be undone.`,loading:x})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-blue-500/20\r
border-t-blue-500\r
animate-spin\r
`})})};var wf="Dialog",[FN]=Vr(wf),[nV,Xn]=FN(wf),zN=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:s,onOpenChange:i,modal:o=!0}=e,l=u.useRef(null),c=u.useRef(null),[d,f]=Li({prop:r,defaultProp:s??!1,onChange:i,caller:wf});return a.jsx(nV,{scope:t,triggerRef:l,contentRef:c,contentId:Ms(),titleId:Ms(),descriptionId:Ms(),open:d,onOpenChange:f,onOpenToggle:u.useCallback(()=>f(h=>!h),[f]),modal:o,children:n})};zN.displayName=wf;var BN="DialogTrigger",rV=u.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=Xn(BN,n),i=Be(t,s.triggerRef);return a.jsx(Ce.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":q0(s.open),...r,ref:i,onClick:ye(e.onClick,s.onOpenToggle)})});rV.displayName=BN;var K0="DialogPortal",[sV,VN]=FN(K0,{forceMount:void 0}),$N=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:s}=e,i=Xn(K0,t);return a.jsx(sV,{scope:t,forceMount:n,children:u.Children.map(r,o=>a.jsx(Di,{present:n||i.open,children:a.jsx($d,{asChild:!0,container:s,children:o})}))})};$N.displayName=K0;var md="DialogOverlay",UN=u.forwardRef((e,t)=>{const n=VN(md,e.__scopeDialog),{forceMount:r=n.forceMount,...s}=e,i=Xn(md,e.__scopeDialog);return i.modal?a.jsx(Di,{present:r||i.open,children:a.jsx(oV,{...s,ref:t})}):null});UN.displayName=md;var iV=bl("DialogOverlay.RemoveScroll"),oV=u.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=Xn(md,n);return a.jsx(H0,{as:iV,allowPinchZoom:!0,shards:[s.contentRef],children:a.jsx(Ce.div,{"data-state":q0(s.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Ai="DialogContent",HN=u.forwardRef((e,t)=>{const n=VN(Ai,e.__scopeDialog),{forceMount:r=n.forceMount,...s}=e,i=Xn(Ai,e.__scopeDialog);return a.jsx(Di,{present:r||i.open,children:i.modal?a.jsx(aV,{...s,ref:t}):a.jsx(lV,{...s,ref:t})})});HN.displayName=Ai;var aV=u.forwardRef((e,t)=>{const n=Xn(Ai,e.__scopeDialog),r=u.useRef(null),s=Be(t,n.contentRef,r);return u.useEffect(()=>{const i=r.current;if(i)return GE(i)},[]),a.jsx(WN,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ye(e.onCloseAutoFocus,i=>{var o;i.preventDefault(),(o=n.triggerRef.current)==null||o.focus()}),onPointerDownOutside:ye(e.onPointerDownOutside,i=>{const o=i.detail.originalEvent,l=o.button===0&&o.ctrlKey===!0;(o.button===2||l)&&i.preventDefault()}),onFocusOutside:ye(e.onFocusOutside,i=>i.preventDefault())})}),lV=u.forwardRef((e,t)=>{const n=Xn(Ai,e.__scopeDialog),r=u.useRef(!1),s=u.useRef(!1);return a.jsx(WN,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var o,l;(o=e.onCloseAutoFocus)==null||o.call(e,i),i.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),i.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:i=>{var c,d;(c=e.onInteractOutside)==null||c.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const o=i.target;((d=n.triggerRef.current)==null?void 0:d.contains(o))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})}),WN=u.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,...o}=e,l=Xn(Ai,n),c=u.useRef(null),d=Be(t,c);return UE(),a.jsxs(a.Fragment,{children:[a.jsx(U0,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:i,children:a.jsx(Kl,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":q0(l.open),...o,ref:d,onDismiss:()=>l.onOpenChange(!1)})}),a.jsxs(a.Fragment,{children:[a.jsx(cV,{titleId:l.titleId}),a.jsx(dV,{contentRef:c,descriptionId:l.descriptionId})]})]})}),G0="DialogTitle",KN=u.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=Xn(G0,n);return a.jsx(Ce.h2,{id:s.titleId,...r,ref:t})});KN.displayName=G0;var GN="DialogDescription",qN=u.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=Xn(GN,n);return a.jsx(Ce.p,{id:s.descriptionId,...r,ref:t})});qN.displayName=GN;var ZN="DialogClose",YN=u.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=Xn(ZN,n);return a.jsx(Ce.button,{type:"button",...r,ref:t,onClick:ye(e.onClick,()=>s.onOpenChange(!1))})});YN.displayName=ZN;function q0(e){return e?"open":"closed"}var XN="DialogTitleWarning",[E7,QN]=jM(XN,{contentName:Ai,titleName:G0,docsSlug:"dialog"}),cV=({titleId:e})=>{const t=QN(XN),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return u.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},uV="DialogDescriptionWarning",dV=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${QN(uV).contentName}}.`;return u.useEffect(()=>{var i;const s=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&s&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},fV=zN,hV=$N,JN=UN,eL=HN,tL=KN,nL=qN,pV=YN;const mV=fV,gV=hV,rL=u.forwardRef(({className:e,...t},n)=>a.jsx(JN,{ref:n,className:he("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));rL.displayName=JN.displayName;const sL=u.forwardRef(({className:e,children:t,...n},r)=>a.jsxs(gV,{children:[a.jsx(rL,{}),a.jsxs(eL,{ref:r,className:he("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,a.jsxs(pV,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[a.jsx(Qo,{className:"h-4 w-4"}),a.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));sL.displayName=eL.displayName;const iL=({className:e,...t})=>a.jsx("div",{className:he("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});iL.displayName="DialogHeader";const oL=u.forwardRef(({className:e,...t},n)=>a.jsx(tL,{ref:n,className:he("text-lg font-semibold leading-none tracking-tight",e),...t}));oL.displayName=tL.displayName;const vV=u.forwardRef(({className:e,...t},n)=>a.jsx(nL,{ref:n,className:he("text-sm text-muted-foreground",e),...t}));vV.displayName=nL.displayName;const Ca="https://api.barqibazar.org/franchise/api",Wc={getAll:async(e=1,t=10,n=null)=>{const r={page:e,limit:t};return n&&(r.franchiseId=n),(await pe.get(`${Ca}/franchise-admins`,{params:r})).data},getById:async e=>(await pe.get(`${Ca}/franchise-admins/${e}`)).data,create:async e=>(await pe.post(`${Ca}/franchise-admins`,e)).data,delete:async e=>(await pe.delete(`${Ca}/franchise-admins/${e}`)).data,changeStatus:async(e,t)=>(await pe.patch(`${Ca}/franchise-admins/${e}/status`,{status:t})).data},xV=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(!1),[s,i]=u.useState(null),[o,l]=u.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=u.useCallback(async(p=1,m=10,g=null)=>{var v,x,b,y;r(!0),i(null);try{const w=await Wc.getAll(p,m,g),S=w.data||w,k=S.meta||S.pagination||{};t(S.items||[]),l({page:k.page||p,limit:k.limit||m,total:k.total||0,totalPages:k.totalPages||0,hasNext:k.hasNext||!1,hasPrev:k.hasPrev||!1})}catch(w){i(((x=(v=w.response)==null?void 0:v.data)==null?void 0:x.message)||"Failed to fetch franchise admins"),oe({title:"Error",description:((y=(b=w.response)==null?void 0:b.data)==null?void 0:y.message)||"Failed to fetch franchise admins",variant:"destructive"})}finally{r(!1)}},[]);return{admins:e,loading:n,error:s,pagination:o,fetchAdmins:c,createAdmin:async p=>{var m,g;r(!0);try{const v=await Wc.create(p);return await c(o.page,o.limit),oe({title:"Success",description:"Franchise admin created successfully"}),v}catch(v){const x=(m=v.response)==null?void 0:m.data,b=(x==null?void 0:x.status)==="fail"&&(((g=x==null?void 0:x.data)==null?void 0:g.message)||typeof(x==null?void 0:x.data)=="object"&&Object.values((x==null?void 0:x.data)??{})[0])||(x==null?void 0:x.message)||v.message||"Failed to create franchise admin";throw oe({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}},deleteAdmin:async p=>{var m,g;r(!0);try{const v=await Wc.delete(p);return await c(o.page,o.limit),oe({title:"Success",description:"Franchise admin removed successfully"}),v}catch(v){const x=((g=(m=v.response)==null?void 0:m.data)==null?void 0:g.message)||"Failed to remove franchise admin";throw oe({title:"Error",description:x,variant:"destructive"}),new Error(x)}finally{r(!1)}},changeStatus:async(p,m)=>{var g,v;try{const x=await Wc.changeStatus(p,m);return t(b=>b.map(y=>y.id===p?{...y,status:m}:y)),oe({title:"Status Updated",description:`Admin has been ${m==="ACTIVE"?"activated":"suspended"} successfully`}),x}catch(x){const b=((v=(g=x.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to update admin status";throw oe({title:"Error",description:b,variant:"destructive"}),new Error(b)}}}},yV=()=>{const{admins:e,loading:t,fetchAdmins:n,createAdmin:r,deleteAdmin:s,changeStatus:i}=xV(),{franchises:o,fetchFranchises:l}=gf(),[c,d]=u.useState(!1),[f,h]=u.useState(!1),[p,m]=u.useState(!1),[g,v]=u.useState(null),[x,b]=u.useState(!1),[y,w]=u.useState(!1),[S,k]=u.useState(!1),[C,j]=u.useState(!1),[E,L]=u.useState(1),[N,R]=u.useState(10),[D,F]=u.useState({franchiseId:"",fullName:"",email:"",password:"",phone:""});u.useEffect(()=>{l(),n()},[]),u.useEffect(()=>{const P=setTimeout(()=>{j(!0)},250);return()=>clearTimeout(P)},[]);const _=u.useMemo(()=>{const P=(e==null?void 0:e.length)||0,M=(e==null?void 0:e.filter(te=>te.status==="ACTIVE").length)||0,se=P-M,W=P>0?Math.round(M/P*100):0;return{total:P,active:M,suspended:se,efficiency:W}},[e]),z=Math.max(1,Math.ceil(((e==null?void 0:e.length)||0)/N)),A=u.useMemo(()=>{const P=(E-1)*N;return e.slice(P,P+N)},[e,E,N]),G=P=>{v(P),h(!0)},T=P=>{v(P),m(!0)},O=async()=>{if(!g)return;const P=g.status==="ACTIVE"?"SUSPENDED":"ACTIVE";try{k(!0),await i(g.id,P)}catch(M){console.error("Status change error:",M)}finally{k(!1),m(!1),v(null)}},I=async()=>{if(g)try{w(!0),await s(g.id)}catch(P){console.error("Deletion error:",P)}finally{w(!1),h(!1),v(null)}},V=async P=>{if(P.preventDefault(),!D.franchiseId){alert("Please select a franchise before provisioning an admin.");return}b(!0);try{await r(D),await n(),d(!1),F({franchiseId:"",fullName:"",email:"",password:"",phone:""})}catch(M){console.error("Error creating admin:",M)}finally{b(!1)}},Z=[{key:"fullName",label:"Administrator",render:(P,M)=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500/20\r
to-indigo-600/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
shadow-lg\r
shadow-indigo-500/10\r
`,children:a.jsx(qu,{size:18})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:(M==null?void 0:M.fullName)||"N/A"}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:"Franchise Administrator"})]})]})},{key:"email",label:"Email Address",render:(P,M)=>a.jsxs("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-300",children:[a.jsx(kl,{size:14,className:"text-indigo-500"}),a.jsx("span",{className:"font-medium break-all",children:(M==null?void 0:M.email)||"-"})]})},{key:"phone",label:"Contact Number",render:(P,M)=>a.jsxs("div",{className:"flex items-center gap-2 text-slate-600 dark:text-slate-300",children:[a.jsx(Cl,{size:14,className:"text-emerald-500"}),a.jsx("span",{className:"font-semibold",children:(M==null?void 0:M.phone)||"-"})]})},{key:"franchise",label:"Franchise Node",render:(P,M)=>{var se;return a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx($g,{size:14,className:"text-orange-500"}),a.jsx("span",{className:"font-semibold text-slate-700 dark:text-slate-200",children:((se=M==null?void 0:M.franchise)==null?void 0:se.name)||"N/A"})]})}},{key:"role",label:"Role",render:(P,M)=>a.jsx("span",{className:`\r
px-3\r
py-1.5\r
rounded-xl\r
bg-indigo-500/10\r
text-indigo-500\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.2em]\r
`,children:(M==null?void 0:M.role)||"ADMIN"})},{key:"status",label:"Access Status",render:(P,M)=>a.jsx("button",{onClick:()=>T(M),title:P==="ACTIVE"?"Click to suspend":"Click to activate",className:`\r
cursor-pointer\r
hover:opacity-70\r
transition-all\r
duration-300\r
`,children:a.jsx(qn,{status:P})})},{key:"actions",label:"Controls",render:(P,M)=>a.jsx(ne,{size:"sm",variant:"ghost",className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,onClick:()=>G(M),children:a.jsx(_i,{size:16})})}],K=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-indigo-500/10
`;return C?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Administrative Command",subtitle:"Manage franchise-level operational administrators across the Barqi network"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[a.jsx(X.div,{whileHover:{y:-4},className:`${K} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Admins"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:_.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:a.jsx(Us,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${K} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Active Access"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:_.active})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(gt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${K} rounded-[2rem] p-6`,children:a.jsx("div",{className:"flex items-center justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"Network Stability"}),a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[_.efficiency,"%"]}),a.jsx(Qt,{size:18,className:"text-indigo-500"})]}),a.jsx(mr,{value:_.efficiency,className:"h-2 bg-slate-200 dark:bg-slate-800"})]})})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${K} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"Administrative Directory"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Franchise management infrastructure"})]})]}),a.jsxs(ne,{onClick:()=>d(!0),disabled:t,className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-indigo-600\r
hover:bg-indigo-700\r
text-white\r
font-black\r
shadow-xl\r
shadow-indigo-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
active:scale-95\r
`,children:[a.jsx(Xo,{size:18,className:"mr-2"}),"Provision Admin",a.jsx($r,{size:16,className:"ml-2"})]})]}),a.jsx(Ks,{columns:Z,data:A,loading:t,emptyMessage:"No administrative nodes found in network"}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(E-1)*N+1," - ",Math.min(E*N,(e==null?void 0:e.length)||0)," ","of"," ",(e==null?void 0:e.length)||0]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:E===1,onClick:()=>L(P=>P-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[E," / ",z]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:E===z,onClick:()=>L(P=>P+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),a.jsx(mV,{open:c,onOpenChange:d,children:a.jsxs(sL,{className:`\r
max-w-2xl\r
w-full\r
p-0\r
overflow-hidden\r
rounded-[2rem]\r
border\r
border-slate-200\r
dark:border-slate-800\r
bg-white\r
dark:bg-slate-950\r
max-h-[92vh]\r
overflow-y-auto\r
`,children:[a.jsx(iL,{className:`\r
sticky\r
top-0\r
z-20\r
bg-white/90\r
dark:bg-slate-950/90\r
backdrop-blur-xl\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
px-8\r
py-6\r
`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx(oL,{className:`\r
text-2xl\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:"Provision New Administrator"}),a.jsx("p",{className:"text-sm text-slate-500 mt-1",children:"Create and assign administrative access"})]}),a.jsx("button",{onClick:()=>d(!1),className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
flex\r
items-center\r
justify-center\r
text-slate-500\r
hover:bg-red-500\r
hover:text-white\r
transition-all\r
duration-300\r
`,children:a.jsx(Qo,{size:18})})]})}),a.jsx("div",{className:"p-8",children:a.jsxs("form",{onSubmit:V,className:"space-y-6",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Target Franchise Node"}),a.jsxs(St,{value:D.franchiseId,onValueChange:P=>F({...D,franchiseId:P}),children:[a.jsx(pt,{className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,children:a.jsx(kt,{placeholder:"Select target node"})}),a.jsx(mt,{children:o.map(P=>a.jsx(Ie,{value:P.id,children:P.name},P.id))})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Full Name"}),a.jsx(Ee,{className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"Ali Khan",value:D.fullName,onChange:P=>F({...D,fullName:P.target.value}),required:!0})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Contact Number"}),a.jsx(Ee,{className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"03001234567",value:D.phone,onChange:P=>F({...D,phone:P.target.value}),required:!0})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Email Address"}),a.jsx(Ee,{type:"email",className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"admin@barqi.pk",value:D.email,onChange:P=>F({...D,email:P.target.value}),required:!0})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Temporary Password"}),a.jsx(Ee,{type:"password",className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"••••••••",value:D.password,onChange:P=>F({...D,password:P.target.value}),required:!0})]}),a.jsxs("div",{className:`\r
rounded-3xl\r
border\r
border-indigo-500/10\r
bg-gradient-to-br\r
from-indigo-500/5\r
to-blue-500/5\r
p-5\r
flex\r
items-start\r
gap-4\r
`,children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:a.jsx(gt,{size:18})}),a.jsxs("div",{children:[a.jsx("h4",{className:"font-black text-slate-800 dark:text-white text-sm",children:"Administrative Access"}),a.jsx("p",{className:"text-xs leading-relaxed text-slate-500 dark:text-slate-400 mt-1",children:"Administrators inherit operational permissions and access controls from the assigned franchise node."})]})]}),a.jsxs("div",{className:`\r
sticky\r
bottom-0\r
bg-white\r
dark:bg-slate-950\r
pt-4\r
flex\r
gap-4\r
`,children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>d(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Cancel"}),a.jsx(ne,{type:"submit",className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
text-white\r
font-bold\r
shadow-xl\r
shadow-indigo-500/20\r
`,disabled:x,children:x?"Provisioning...":"Confirm Provision"})]})]})})]})}),a.jsx(gr,{isOpen:f,onClose:()=>h(!1),onConfirm:I,title:"Revoke Admin Access",message:`Are you sure you want to permanently remove access for ${g==null?void 0:g.fullName}?`,loading:y}),a.jsx(gr,{isOpen:p,onClose:()=>{m(!1),v(null)},onConfirm:O,title:(g==null?void 0:g.status)==="ACTIVE"?"Suspend Admin":"Activate Admin",message:(g==null?void 0:g.status)==="ACTIVE"?`Suspend access for ${g==null?void 0:g.fullName}? They will not be able to log in until reactivated.`:`Reactivate access for ${g==null?void 0:g.fullName}? They will regain full login access.`,confirmText:(g==null?void 0:g.status)==="ACTIVE"?"Suspend":"Activate",variant:(g==null?void 0:g.status)==="ACTIVE"?"destructive":"default",loading:S})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-indigo-500/20\r
border-t-indigo-500\r
animate-spin\r
`})})};function Dl(e){"@babel/helpers - typeof";return Dl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Dl(e)}function bV(e,t){if(Dl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(Dl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function wV(e){var t=bV(e,"string");return Dl(t)=="symbol"?t:t+""}function U(e,t,n){return(t=wV(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function aL(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ah,Ub;function SV(){if(Ub)return Ah;Ub=1;var e=function(n,r,s,i,o,l,c,d){if(!n){var f;if(r===void 0)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[s,i,o,l,c,d],p=0;f=new Error(r.replace(/%s/g,function(){return h[p++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}};return Ah=e,Ah}var kV=SV(),dt=aL(kV),je=u.createContext(null);function CV(){dt(!!u.useContext,"useGoogleMap is React hook and requires React version 16.8+");var e=u.useContext(je);return dt(!!e,"useGoogleMap needs a GoogleMap available up in the tree"),e}function jV(e,t,n){return Object.keys(e).reduce(function(s,i){return t(s,e[i],i)},n)}function EV(e,t){Object.keys(e).forEach(n=>t(e[n],n))}function NV(e,t,n,r){var s={},i=(o,l)=>{var c=n[l];c!==t[l]&&(s[l]=c,o(r,c))};return EV(e,i),s}function LV(e,t,n){var r=jV(n,function(i,o,l){return typeof e[l]=="function"&&i.push(google.maps.event.addListener(t,o,e[l])),i},[]);return r}function PV(e){google.maps.event.removeListener(e)}function Le(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];e.forEach(PV)}function Ne(e){var{updaterMap:t,eventMap:n,prevProps:r,nextProps:s,instance:i}=e,o=LV(s,i,n);return NV(t,r,s,i),o}var Hb={onDblClick:"dblclick",onDragEnd:"dragend",onDragStart:"dragstart",onMapTypeIdChanged:"maptypeid_changed",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseDown:"mousedown",onMouseUp:"mouseup",onRightClick:"rightclick",onTilesLoaded:"tilesloaded",onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onDrag:"drag",onHeadingChanged:"heading_changed",onIdle:"idle",onProjectionChanged:"projection_changed",onResize:"resize",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed"},Wb={extraMapTypes(e,t){t.forEach(function(r,s){e.mapTypes.set(String(s),r)})},center(e,t){e.setCenter(t)},clickableIcons(e,t){e.setClickableIcons(t)},heading(e,t){e.setHeading(t)},mapTypeId(e,t){e.setMapTypeId(t)},options(e,t){e.setOptions(t)},streetView(e,t){e.setStreetView(t)},tilt(e,t){e.setTilt(t)},zoom(e,t){e.setZoom(t)}};function TV(e){var{children:t,options:n,id:r,mapContainerStyle:s,mapContainerClassName:i,center:o,onClick:l,onDblClick:c,onDrag:d,onDragEnd:f,onDragStart:h,onMouseMove:p,onMouseOut:m,onMouseOver:g,onMouseDown:v,onMouseUp:x,onRightClick:b,onCenterChanged:y,onLoad:w,onUnmount:S}=e,[k,C]=u.useState(null),j=u.useRef(null),[E,L]=u.useState(null),[N,R]=u.useState(null),[D,F]=u.useState(null),[_,z]=u.useState(null),[A,G]=u.useState(null),[T,O]=u.useState(null),[I,V]=u.useState(null),[Z,K]=u.useState(null),[P,M]=u.useState(null),[se,W]=u.useState(null),[te,de]=u.useState(null),[Q,ie]=u.useState(null);return u.useEffect(()=>{n&&k!==null&&k.setOptions(n)},[k,n]),u.useEffect(()=>{k!==null&&typeof o<"u"&&k.setCenter(o)},[k,o]),u.useEffect(()=>{k&&c&&(N!==null&&google.maps.event.removeListener(N),R(google.maps.event.addListener(k,"dblclick",c)))},[c]),u.useEffect(()=>{k&&f&&(D!==null&&google.maps.event.removeListener(D),F(google.maps.event.addListener(k,"dragend",f)))},[f]),u.useEffect(()=>{k&&h&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(k,"dragstart",h)))},[h]),u.useEffect(()=>{k&&v&&(A!==null&&google.maps.event.removeListener(A),G(google.maps.event.addListener(k,"mousedown",v)))},[v]),u.useEffect(()=>{k&&p&&(T!==null&&google.maps.event.removeListener(T),O(google.maps.event.addListener(k,"mousemove",p)))},[p]),u.useEffect(()=>{k&&m&&(I!==null&&google.maps.event.removeListener(I),V(google.maps.event.addListener(k,"mouseout",m)))},[m]),u.useEffect(()=>{k&&g&&(Z!==null&&google.maps.event.removeListener(Z),K(google.maps.event.addListener(k,"mouseover",g)))},[g]),u.useEffect(()=>{k&&x&&(P!==null&&google.maps.event.removeListener(P),M(google.maps.event.addListener(k,"mouseup",x)))},[x]),u.useEffect(()=>{k&&b&&(se!==null&&google.maps.event.removeListener(se),W(google.maps.event.addListener(k,"rightclick",b)))},[b]),u.useEffect(()=>{k&&l&&(te!==null&&google.maps.event.removeListener(te),de(google.maps.event.addListener(k,"click",l)))},[l]),u.useEffect(()=>{k&&d&&(Q!==null&&google.maps.event.removeListener(Q),ie(google.maps.event.addListener(k,"drag",d)))},[d]),u.useEffect(()=>{k&&y&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(k,"center_changed",y)))},[l]),u.useEffect(()=>{var me=j.current===null?null:new google.maps.Map(j.current,n);return C(me),me!==null&&w&&w(me),()=>{me!==null&&S&&S(me)}},[]),a.jsx("div",{id:r,ref:j,style:s,className:i,children:a.jsx(je.Provider,{value:k,children:k!==null?t:null})})}u.memo(TV);class MV extends u.PureComponent{constructor(){super(...arguments),U(this,"state",{map:null}),U(this,"registeredEvents",[]),U(this,"mapRef",null),U(this,"getInstance",()=>this.mapRef===null?null:new google.maps.Map(this.mapRef,this.props.options)),U(this,"panTo",t=>{var n=this.getInstance();n&&n.panTo(t)}),U(this,"setMapCallback",()=>{this.state.map!==null&&this.props.onLoad&&this.props.onLoad(this.state.map)}),U(this,"getRef",t=>{this.mapRef=t})}componentDidMount(){var t=this.getInstance();this.registeredEvents=Ne({updaterMap:Wb,eventMap:Hb,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{map:t}},this.setMapCallback)}componentDidUpdate(t){this.state.map!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Wb,eventMap:Hb,prevProps:t,nextProps:this.props,instance:this.state.map}))}componentWillUnmount(){this.state.map!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.map),Le(this.registeredEvents))}render(){return a.jsx("div",{id:this.props.id,ref:this.getRef,style:this.props.mapContainerStyle,className:this.props.mapContainerClassName,children:a.jsx(je.Provider,{value:this.state.map,children:this.state.map!==null?this.props.children:null})})}}function Kb(e,t,n,r,s,i,o){try{var l=e[i](o),c=l.value}catch(d){return void n(d)}l.done?t(c):Promise.resolve(c).then(r,s)}function lL(e){return function(){var t=this,n=arguments;return new Promise(function(r,s){var i=e.apply(t,n);function o(c){Kb(i,r,s,o,l,"next",c)}function l(c){Kb(i,r,s,o,l,"throw",c)}o(void 0)})}}function cL(e){var{googleMapsApiKey:t,googleMapsClientId:n,version:r="weekly",language:s,region:i,libraries:o,channel:l,mapIds:c,authReferrerPolicy:d,apiUrl:f="https://maps.googleapis.com"}=e,h=[];return dt(t&&n||!(t&&n),"You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."),t?h.push("key=".concat(t)):n&&h.push("client=".concat(n)),r&&h.push("v=".concat(r)),s&&h.push("language=".concat(s)),i&&h.push("region=".concat(i)),o&&o.length&&h.push("libraries=".concat(o.sort().join(","))),l&&h.push("channel=".concat(l)),c&&c.length&&h.push("map_ids=".concat(c.join(","))),d&&h.push("auth_referrer_policy=".concat(d)),h.push("loading=async"),h.push("callback=initMap"),"".concat(f,"/maps/api/js?").concat(h.join("&"))}var ys=typeof document<"u";function uL(e){var{url:t,id:n,nonce:r}=e;return ys?new Promise(function(i,o){var l=document.getElementById(n),c=window;if(l){var d=l.getAttribute("data-state");if(l.src===t&&d!=="error"){if(d==="ready")return i(n);var f=c.initMap,h=l.onerror;c.initMap=function(){f&&f(),i(n)},l.onerror=function(m){h&&h(m),o(m)};return}else l.remove()}var p=document.createElement("script");p.type="text/javascript",p.src=t,p.id=n,p.async=!0,p.nonce=r||"",p.onerror=function(g){p.setAttribute("data-state","error"),o(g)},c.initMap=function(){p.setAttribute("data-state","ready"),i(n)},document.head.appendChild(p)}).catch(s=>{throw console.error("injectScript error: ",s),s}):Promise.reject(new Error("document is undefined"))}function Gb(e){var t=e.href;return t&&(t.indexOf("https://fonts.googleapis.com/css?family=Roboto")===0||t.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")===0)?!0:e.tagName.toLowerCase()==="style"&&e.styleSheet&&e.styleSheet.cssText&&e.styleSheet.cssText.replace(`\r
`,"").indexOf(".gm-style")===0?(e.styleSheet.cssText="",!0):e.tagName.toLowerCase()==="style"&&e.innerHTML&&e.innerHTML.replace(`\r
`,"").indexOf(".gm-style")===0?(e.innerHTML="",!0):e.tagName.toLowerCase()==="style"&&!e.styleSheet&&!e.innerHTML}function Z0(){var e=document.getElementsByTagName("head")[0];if(e){var t=e.insertBefore.bind(e);e.insertBefore=function(s,i){return Gb(s)||Reflect.apply(t,e,[s,i]),s};var n=e.appendChild.bind(e);e.appendChild=function(s){return Gb(s)||Reflect.apply(n,e,[s]),s}}}var ja=!1;function dL(){return a.jsx("div",{children:"Loading..."})}var _l={id:"script-loader",version:"weekly"};class RV extends u.PureComponent{constructor(){super(...arguments),U(this,"check",null),U(this,"state",{loaded:!1}),U(this,"cleanupCallback",()=>{delete window.google.maps,this.injectScript()}),U(this,"isCleaningUp",lL(function*(){function t(n){if(!ja)n();else if(ys)var r=window.setInterval(function(){ja||(window.clearInterval(r),n())},1)}return new Promise(t)})),U(this,"cleanup",()=>{ja=!0;var t=document.getElementById(this.props.id);t&&t.parentNode&&t.parentNode.removeChild(t),Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(r){return typeof r.src=="string"&&r.src.includes("maps.googleapis")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(r){return r.href==="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans"}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(r){return r.innerText!==void 0&&r.innerText.length>0&&r.innerText.includes(".gm-")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)})}),U(this,"injectScript",()=>{this.props.preventGoogleFontsLoading&&Z0(),dt(!!this.props.id,'LoadScript requires "id" prop to be a string: %s',this.props.id);var t={id:this.props.id,nonce:this.props.nonce,url:cL(this.props)};uL(t).then(()=>{this.props.onLoad&&this.props.onLoad(),this.setState(function(){return{loaded:!0}})}).catch(n=>{this.props.onError&&this.props.onError(n),console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(this.props.googleMapsApiKey||"-",") or Client ID (").concat(this.props.googleMapsClientId||"-",`) to <LoadScript />
          Otherwise it is a Network issue.
        `))})}),U(this,"getRef",t=>{this.check=t})}componentDidMount(){if(ys){if(window.google&&window.google.maps&&!ja){console.error("google api is already presented");return}this.isCleaningUp().then(this.injectScript).catch(function(n){console.error("Error at injecting script after cleaning up: ",n)})}}componentDidUpdate(t){this.props.libraries!==t.libraries&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),ys&&t.language!==this.props.language&&(this.cleanup(),this.setState(function(){return{loaded:!1}},this.cleanupCallback))}componentWillUnmount(){if(ys){this.cleanup();var t=()=>{this.check||(delete window.google,ja=!1)};window.setTimeout(t,1),this.props.onUnmount&&this.props.onUnmount()}}render(){return a.jsxs(a.Fragment,{children:[a.jsx("div",{ref:this.getRef}),this.state.loaded?this.props.children:this.props.loadingElement||a.jsx(dL,{})]})}}U(RV,"defaultProps",_l);function AV(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function Y0(e,t){if(e==null)return{};var n,r,s=AV(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var qb;function OV(e){var{id:t=_l.id,version:n=_l.version,nonce:r,googleMapsApiKey:s,googleMapsClientId:i,language:o,region:l,libraries:c,preventGoogleFontsLoading:d,channel:f,mapIds:h,authReferrerPolicy:p,apiUrl:m="https://maps.googleapis.com"}=e,g=u.useRef(!1),[v,x]=u.useState(!1),[b,y]=u.useState(void 0);u.useEffect(function(){return g.current=!0,()=>{g.current=!1}},[]),u.useEffect(function(){ys&&d&&Z0()},[d]),u.useEffect(function(){v&&dt(!!window.google,"useLoadScript was marked as loaded, but window.google is not present. Something went wrong.")},[v]);var w=cL({version:n,googleMapsApiKey:s,googleMapsClientId:i,language:o,region:l,libraries:c,channel:f,mapIds:h,authReferrerPolicy:p,apiUrl:m});u.useEffect(function(){if(!ys)return;function C(){g.current&&(x(!0),qb=w)}if(window.google&&window.google.maps&&qb===w){C();return}uL({id:t,url:w,nonce:r}).then(C).catch(function(E){g.current&&y(E),console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(s||"-",") or Client ID (").concat(i||"-",`)
        Otherwise it is a Network issue.
      `)),console.error(E)})},[t,w,r]);var S=u.useRef(void 0);return u.useEffect(function(){S.current&&c!==S.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),S.current=c},[c]),{isLoaded:v,loadError:b,url:w}}var IV=["loadingElement","onLoad","onError","onUnmount","children"],DV=a.jsx(dL,{});function _V(e){var{loadingElement:t,onLoad:n,onError:r,onUnmount:s,children:i}=e,o=Y0(e,IV),{isLoaded:l,loadError:c}=OV(o);return u.useEffect(function(){l&&typeof n=="function"&&n()},[l,n]),u.useEffect(function(){c&&typeof r=="function"&&r(c)},[c,r]),u.useEffect(function(){return()=>{s&&s()}},[s]),l?i:t||DV}u.memo(_V);function FV(e,t,n,r){function s(i){return i instanceof n?i:new n(function(o){o(i)})}return new(n||(n=Promise))(function(i,o){function l(f){try{d(r.next(f))}catch(h){o(h)}}function c(f){try{d(r.throw(f))}catch(h){o(h)}}function d(f){f.done?i(f.value):s(f.value).then(l,c)}d((r=r.apply(e,[])).next())})}function zV(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var BV=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,s,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(s=r;s--!==0;)if(!e(t[s],n[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[s]))return!1;for(s=r;s--!==0;){var o=i[s];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n},VV=zV(BV),Zb="__googleMapsScriptId",mo;(function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"})(mo||(mo={}));class ii{constructor(t){var{apiKey:n,authReferrerPolicy:r,channel:s,client:i,id:o=Zb,language:l,libraries:c=[],mapIds:d,nonce:f,region:h,retries:p=3,url:m="https://maps.googleapis.com/maps/api/js",version:g}=t;if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=n,this.authReferrerPolicy=r,this.channel=s,this.client=i,this.id=o||Zb,this.language=l,this.libraries=c,this.mapIds=d,this.nonce=f,this.region=h,this.retries=p,this.url=m,this.version=g,ii.instance){if(!VV(this.options,ii.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(ii.instance.options)));return ii.instance}ii.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?mo.FAILURE:this.done?mo.SUCCESS:this.loading?mo.LOADING:mo.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){var t=this.url;return t+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),this.authReferrerPolicy&&(t+="&auth_referrer_policy=".concat(this.authReferrerPolicy)),t}deleteScript(){var t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((t,n)=>{this.loadCallback(r=>{r?n(r.error):t(window.google)})})}importLibrary(t){return this.execute(),google.maps.importLibrary(t)}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){var t,n;if(document.getElementById(this.id)){this.callback();return}var r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(i=>!r[i]&&delete r[i]),!((n=(t=window==null?void 0:window.google)===null||t===void 0?void 0:t.maps)===null||n===void 0)&&n.importLibrary||(i=>{var o,l,c,d="The Google Maps JavaScript API",f="google",h="importLibrary",p="__ib__",m=document,g=window;g=g[f]||(g[f]={});var v=g.maps||(g.maps={}),x=new Set,b=new URLSearchParams,y=()=>o||(o=new Promise((w,S)=>FV(this,void 0,void 0,function*(){var k;yield l=m.createElement("script"),l.id=this.id,b.set("libraries",[...x]+"");for(c in i)b.set(c.replace(/[A-Z]/g,C=>"_"+C[0].toLowerCase()),i[c]);b.set("callback",f+".maps."+p),l.src=this.url+"?"+b,v[p]=w,l.onerror=()=>o=S(Error(d+" could not load.")),l.nonce=this.nonce||((k=m.querySelector("script[nonce]"))===null||k===void 0?void 0:k.nonce)||"",m.head.append(l)})));v[h]?console.warn(d+" only loads once. Ignoring:",i):v[h]=function(w){for(var S=arguments.length,k=new Array(S>1?S-1:0),C=1;C<S;C++)k[C-1]=arguments[C];return x.add(w)&&y().then(()=>v[h](w,...k))}})(r);var s=this.libraries.map(i=>this.importLibrary(i));s.length||s.push(this.importLibrary("core")),Promise.all(s).then(()=>this.callback(),i=>{var o=new ErrorEvent("error",{error:i});this.loadErrorCallback(o)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){var n=this.errors.length*Math.pow(2,this.errors.length);console.error("Failed to load Google Maps script, retrying in ".concat(n," ms.")),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=t,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}var $V=["maps"];function UV(e){var{id:t=_l.id,version:n=_l.version,nonce:r,googleMapsApiKey:s,language:i,region:o,libraries:l=$V,preventGoogleFontsLoading:c,mapIds:d,authReferrerPolicy:f}=e,h=u.useRef(!1),[p,m]=u.useState(!1),[g,v]=u.useState(void 0);u.useEffect(function(){return h.current=!0,()=>{h.current=!1}},[]);var x=u.useMemo(()=>new ii({id:t,apiKey:s,version:n,libraries:l,language:i||"en",region:o||"US",mapIds:d||[],nonce:r||"",authReferrerPolicy:f||"origin"}),[t,s,n,l,i,o,d,r,f]);u.useEffect(function(){p||x.load().then(()=>{h.current&&m(!0)}).catch(w=>{v(w)})},[]),u.useEffect(()=>{ys&&c&&Z0()},[c]);var b=u.useRef();return u.useEffect(()=>{b.current&&l!==b.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),b.current=l},[l]),{isLoaded:p,loadError:g}}function Yb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function gd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Yb(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Yb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Xb={},Qb={options(e,t){e.setOptions(t)}};function HV(e){var{options:t,onLoad:n,onUnmount:r}=e,s=u.useContext(je),[i,o]=u.useState(null);return u.useEffect(()=>{i!==null&&i.setMap(s)},[s]),u.useEffect(()=>{t&&i!==null&&i.setOptions(t)},[i,t]),u.useEffect(()=>{var l=new google.maps.TrafficLayer(gd(gd({},t),{},{map:s}));return o(l),n&&n(l),()=>{i!==null&&(r&&r(i),i.setMap(null))}},[]),null}u.memo(HV);class WV extends u.PureComponent{constructor(){super(...arguments),U(this,"state",{trafficLayer:null}),U(this,"setTrafficLayerCallback",()=>{this.state.trafficLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.trafficLayer)}),U(this,"registeredEvents",[])}componentDidMount(){var t=new google.maps.TrafficLayer(gd(gd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:Qb,eventMap:Xb,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{trafficLayer:t}},this.setTrafficLayerCallback)}componentDidUpdate(t){this.state.trafficLayer!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Qb,eventMap:Xb,prevProps:t,nextProps:this.props,instance:this.state.trafficLayer}))}componentWillUnmount(){this.state.trafficLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),Le(this.registeredEvents),this.state.trafficLayer.setMap(null))}render(){return null}}U(WV,"contextType",je);function KV(e){var{onLoad:t,onUnmount:n}=e,r=u.useContext(je),[s,i]=u.useState(null);return u.useEffect(()=>{s!==null&&s.setMap(r)},[r]),u.useEffect(()=>{var o=new google.maps.BicyclingLayer;return i(o),o.setMap(r),t&&t(o),()=>{o!==null&&(n&&n(o),o.setMap(null))}},[]),null}u.memo(KV);class GV extends u.PureComponent{constructor(){super(...arguments),U(this,"state",{bicyclingLayer:null}),U(this,"setBicyclingLayerCallback",()=>{this.state.bicyclingLayer!==null&&(this.state.bicyclingLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.bicyclingLayer))})}componentDidMount(){var t=new google.maps.BicyclingLayer;this.setState(()=>({bicyclingLayer:t}),this.setBicyclingLayerCallback)}componentWillUnmount(){this.state.bicyclingLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))}render(){return null}}U(GV,"contextType",je);function qV(e){var{onLoad:t,onUnmount:n}=e,r=u.useContext(je),[s,i]=u.useState(null);return u.useEffect(()=>{s!==null&&s.setMap(r)},[r]),u.useEffect(()=>{var o=new google.maps.TransitLayer;return i(o),o.setMap(r),t&&t(o),()=>{s!==null&&(n&&n(s),s.setMap(null))}},[]),null}u.memo(qV);class ZV extends u.PureComponent{constructor(){super(...arguments),U(this,"state",{transitLayer:null}),U(this,"setTransitLayerCallback",()=>{this.state.transitLayer!==null&&(this.state.transitLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.transitLayer))})}componentDidMount(){var t=new google.maps.TransitLayer;this.setState(function(){return{transitLayer:t}},this.setTransitLayerCallback)}componentWillUnmount(){this.state.transitLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))}render(){return null}}U(ZV,"contextType",je);function Jb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Jb(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ew={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},tw={drawingMode(e,t){e.setDrawingMode(t)},options(e,t){e.setOptions(t)}};function YV(e){var{options:t,drawingMode:n,onCircleComplete:r,onMarkerComplete:s,onOverlayComplete:i,onPolygonComplete:o,onPolylineComplete:l,onRectangleComplete:c,onLoad:d,onUnmount:f}=e,h=u.useContext(je),[p,m]=u.useState(null),[g,v]=u.useState(null),[x,b]=u.useState(null),[y,w]=u.useState(null),[S,k]=u.useState(null),[C,j]=u.useState(null),[E,L]=u.useState(null);return u.useEffect(()=>{p!==null&&p.setMap(h)},[h]),u.useEffect(()=>{t&&p!==null&&p.setOptions(t)},[p,t]),u.useEffect(()=>{p!==null&&p.setDrawingMode(n??null)},[p,n]),u.useEffect(()=>{p&&r&&(g!==null&&google.maps.event.removeListener(g),v(google.maps.event.addListener(p,"circlecomplete",r)))},[p,r]),u.useEffect(()=>{p&&s&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(p,"markercomplete",s)))},[p,s]),u.useEffect(()=>{p&&i&&(y!==null&&google.maps.event.removeListener(y),w(google.maps.event.addListener(p,"overlaycomplete",i)))},[p,i]),u.useEffect(()=>{p&&o&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(p,"polygoncomplete",o)))},[p,o]),u.useEffect(()=>{p&&l&&(C!==null&&google.maps.event.removeListener(C),j(google.maps.event.addListener(p,"polylinecomplete",l)))},[p,l]),u.useEffect(()=>{p&&c&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(p,"rectanglecomplete",c)))},[p,c]),u.useEffect(()=>{dt(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing);var N=new google.maps.drawing.DrawingManager(vd(vd({},t),{},{map:h}));return n&&N.setDrawingMode(n),r&&v(google.maps.event.addListener(N,"circlecomplete",r)),s&&b(google.maps.event.addListener(N,"markercomplete",s)),i&&w(google.maps.event.addListener(N,"overlaycomplete",i)),o&&k(google.maps.event.addListener(N,"polygoncomplete",o)),l&&j(google.maps.event.addListener(N,"polylinecomplete",l)),c&&L(google.maps.event.addListener(N,"rectanglecomplete",c)),m(N),d&&d(N),()=>{p!==null&&(g&&google.maps.event.removeListener(g),x&&google.maps.event.removeListener(x),y&&google.maps.event.removeListener(y),S&&google.maps.event.removeListener(S),C&&google.maps.event.removeListener(C),E&&google.maps.event.removeListener(E),f&&f(p),p.setMap(null))}},[]),null}u.memo(YV);class XV extends u.PureComponent{constructor(t){super(t),U(this,"registeredEvents",[]),U(this,"state",{drawingManager:null}),U(this,"setDrawingManagerCallback",()=>{this.state.drawingManager!==null&&this.props.onLoad&&this.props.onLoad(this.state.drawingManager)}),dt(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing)}componentDidMount(){var t=new google.maps.drawing.DrawingManager(vd(vd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:tw,eventMap:ew,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{drawingManager:t}},this.setDrawingManagerCallback)}componentDidUpdate(t){this.state.drawingManager!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:tw,eventMap:ew,prevProps:t,nextProps:this.props,instance:this.state.drawingManager}))}componentWillUnmount(){this.state.drawingManager!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),Le(this.registeredEvents),this.state.drawingManager.setMap(null))}render(){return null}}U(XV,"contextType",je);function nw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function jo(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var rw={onAnimationChanged:"animation_changed",onClick:"click",onClickableChanged:"clickable_changed",onCursorChanged:"cursor_changed",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDraggableChanged:"draggable_changed",onDragStart:"dragstart",onFlatChanged:"flat_changed",onIconChanged:"icon_changed",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPositionChanged:"position_changed",onRightClick:"rightclick",onShapeChanged:"shape_changed",onTitleChanged:"title_changed",onVisibleChanged:"visible_changed",onZindexChanged:"zindex_changed"},sw={animation(e,t){e.setAnimation(t)},clickable(e,t){e.setClickable(t)},cursor(e,t){e.setCursor(t)},draggable(e,t){e.setDraggable(t)},icon(e,t){e.setIcon(t)},label(e,t){e.setLabel(t)},map(e,t){e.setMap(t)},opacity(e,t){e.setOpacity(t)},options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},shape(e,t){e.setShape(t)},title(e,t){e.setTitle(t)},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},xd={};function QV(e){var{position:t,options:n,clusterer:r,noClustererRedraw:s,children:i,draggable:o,visible:l,animation:c,clickable:d,cursor:f,icon:h,label:p,opacity:m,shape:g,title:v,zIndex:x,onClick:b,onDblClick:y,onDrag:w,onDragEnd:S,onDragStart:k,onMouseOut:C,onMouseOver:j,onMouseUp:E,onMouseDown:L,onRightClick:N,onClickableChanged:R,onCursorChanged:D,onAnimationChanged:F,onDraggableChanged:_,onFlatChanged:z,onIconChanged:A,onPositionChanged:G,onShapeChanged:T,onTitleChanged:O,onVisibleChanged:I,onZindexChanged:V,onLoad:Z,onUnmount:K}=e,P=u.useContext(je),[M,se]=u.useState(null),[W,te]=u.useState(null),[de,Q]=u.useState(null),[ie,me]=u.useState(null),[J,q]=u.useState(null),[$,ae]=u.useState(null),[le,De]=u.useState(null),[Xe,yr]=u.useState(null),[mn,Zs]=u.useState(null),[xt,Ys]=u.useState(null),[Y,ge]=u.useState(null),[Me,Ue]=u.useState(null),[We,Qn]=u.useState(null),[br,wr]=u.useState(null),[qr,Sr]=u.useState(null),[Xs,kr]=u.useState(null),[Bi,uc]=u.useState(null),[Qs,ua]=u.useState(null),[dc,Vi]=u.useState(null),[Jt,fc]=u.useState(null),[we,Oe]=u.useState(null),[_e,$t]=u.useState(null);u.useEffect(()=>{M!==null&&M.setMap(P)},[P]),u.useEffect(()=>{typeof n<"u"&&M!==null&&M.setOptions(n)},[M,n]),u.useEffect(()=>{typeof o<"u"&&M!==null&&M.setDraggable(o)},[M,o]),u.useEffect(()=>{t&&M!==null&&M.setPosition(t)},[M,t]),u.useEffect(()=>{typeof l<"u"&&M!==null&&M.setVisible(l)},[M,l]),u.useEffect(()=>{M==null||M.setAnimation(c)},[M,c]),u.useEffect(()=>{M&&d!==void 0&&M.setClickable(d)},[M,d]),u.useEffect(()=>{M&&f!==void 0&&M.setCursor(f)},[M,f]),u.useEffect(()=>{M&&h!==void 0&&M.setIcon(h)},[M,h]),u.useEffect(()=>{M&&p!==void 0&&M.setLabel(p)},[M,p]),u.useEffect(()=>{M&&m!==void 0&&M.setOpacity(m)},[M,m]),u.useEffect(()=>{M&&g!==void 0&&M.setShape(g)},[M,g]),u.useEffect(()=>{M&&v!==void 0&&M.setTitle(v)},[M,v]),u.useEffect(()=>{M&&x!==void 0&&M.setZIndex(x)},[M,x]),u.useEffect(()=>{M&&y&&(W!==null&&google.maps.event.removeListener(W),te(google.maps.event.addListener(M,"dblclick",y)))},[y]),u.useEffect(()=>{M&&S&&(de!==null&&google.maps.event.removeListener(de),Q(google.maps.event.addListener(M,"dragend",S)))},[S]),u.useEffect(()=>{M&&k&&(ie!==null&&google.maps.event.removeListener(ie),me(google.maps.event.addListener(M,"dragstart",k)))},[k]),u.useEffect(()=>{M&&L&&(J!==null&&google.maps.event.removeListener(J),q(google.maps.event.addListener(M,"mousedown",L)))},[L]),u.useEffect(()=>{M&&C&&($!==null&&google.maps.event.removeListener($),ae(google.maps.event.addListener(M,"mouseout",C)))},[C]),u.useEffect(()=>{M&&j&&(le!==null&&google.maps.event.removeListener(le),De(google.maps.event.addListener(M,"mouseover",j)))},[j]),u.useEffect(()=>{M&&E&&(Xe!==null&&google.maps.event.removeListener(Xe),yr(google.maps.event.addListener(M,"mouseup",E)))},[E]),u.useEffect(()=>{M&&N&&(mn!==null&&google.maps.event.removeListener(mn),Zs(google.maps.event.addListener(M,"rightclick",N)))},[N]),u.useEffect(()=>{M&&b&&(xt!==null&&google.maps.event.removeListener(xt),Ys(google.maps.event.addListener(M,"click",b)))},[b]),u.useEffect(()=>{M&&w&&(Y!==null&&google.maps.event.removeListener(Y),ge(google.maps.event.addListener(M,"drag",w)))},[w]),u.useEffect(()=>{M&&R&&(Me!==null&&google.maps.event.removeListener(Me),Ue(google.maps.event.addListener(M,"clickable_changed",R)))},[R]),u.useEffect(()=>{M&&D&&(We!==null&&google.maps.event.removeListener(We),Qn(google.maps.event.addListener(M,"cursor_changed",D)))},[D]),u.useEffect(()=>{M&&F&&(br!==null&&google.maps.event.removeListener(br),wr(google.maps.event.addListener(M,"animation_changed",F)))},[F]),u.useEffect(()=>{M&&_&&(qr!==null&&google.maps.event.removeListener(qr),Sr(google.maps.event.addListener(M,"draggable_changed",_)))},[_]),u.useEffect(()=>{M&&z&&(Xs!==null&&google.maps.event.removeListener(Xs),kr(google.maps.event.addListener(M,"flat_changed",z)))},[z]),u.useEffect(()=>{M&&A&&(Bi!==null&&google.maps.event.removeListener(Bi),uc(google.maps.event.addListener(M,"icon_changed",A)))},[A]),u.useEffect(()=>{M&&G&&(Qs!==null&&google.maps.event.removeListener(Qs),ua(google.maps.event.addListener(M,"position_changed",G)))},[G]),u.useEffect(()=>{M&&T&&(dc!==null&&google.maps.event.removeListener(dc),Vi(google.maps.event.addListener(M,"shape_changed",T)))},[T]),u.useEffect(()=>{M&&O&&(Jt!==null&&google.maps.event.removeListener(Jt),fc(google.maps.event.addListener(M,"title_changed",O)))},[O]),u.useEffect(()=>{M&&I&&(we!==null&&google.maps.event.removeListener(we),Oe(google.maps.event.addListener(M,"visible_changed",I)))},[I]),u.useEffect(()=>{M&&V&&(_e!==null&&google.maps.event.removeListener(_e),$t(google.maps.event.addListener(M,"zindex_changed",V)))},[V]),u.useEffect(()=>{var Ut=jo(jo(jo({},n||xd),r?xd:{map:P}),{},{position:t}),be=new google.maps.Marker(Ut);return r?r.addMarker(be,!!s):be.setMap(P),t&&be.setPosition(t),typeof l<"u"&&be.setVisible(l),typeof o<"u"&&be.setDraggable(o),typeof d<"u"&&be.setClickable(d),typeof f=="string"&&be.setCursor(f),h&&be.setIcon(h),typeof p<"u"&&be.setLabel(p),typeof m<"u"&&be.setOpacity(m),g&&be.setShape(g),typeof v=="string"&&be.setTitle(v),typeof x=="number"&&be.setZIndex(x),y&&te(google.maps.event.addListener(be,"dblclick",y)),S&&Q(google.maps.event.addListener(be,"dragend",S)),k&&me(google.maps.event.addListener(be,"dragstart",k)),L&&q(google.maps.event.addListener(be,"mousedown",L)),C&&ae(google.maps.event.addListener(be,"mouseout",C)),j&&De(google.maps.event.addListener(be,"mouseover",j)),E&&yr(google.maps.event.addListener(be,"mouseup",E)),N&&Zs(google.maps.event.addListener(be,"rightclick",N)),b&&Ys(google.maps.event.addListener(be,"click",b)),w&&ge(google.maps.event.addListener(be,"drag",w)),R&&Ue(google.maps.event.addListener(be,"clickable_changed",R)),D&&Qn(google.maps.event.addListener(be,"cursor_changed",D)),F&&wr(google.maps.event.addListener(be,"animation_changed",F)),_&&Sr(google.maps.event.addListener(be,"draggable_changed",_)),z&&kr(google.maps.event.addListener(be,"flat_changed",z)),A&&uc(google.maps.event.addListener(be,"icon_changed",A)),G&&ua(google.maps.event.addListener(be,"position_changed",G)),T&&Vi(google.maps.event.addListener(be,"shape_changed",T)),O&&fc(google.maps.event.addListener(be,"title_changed",O)),I&&Oe(google.maps.event.addListener(be,"visible_changed",I)),V&&$t(google.maps.event.addListener(be,"zindex_changed",V)),se(be),Z&&Z(be),()=>{W!==null&&google.maps.event.removeListener(W),de!==null&&google.maps.event.removeListener(de),ie!==null&&google.maps.event.removeListener(ie),J!==null&&google.maps.event.removeListener(J),$!==null&&google.maps.event.removeListener($),le!==null&&google.maps.event.removeListener(le),Xe!==null&&google.maps.event.removeListener(Xe),mn!==null&&google.maps.event.removeListener(mn),xt!==null&&google.maps.event.removeListener(xt),Me!==null&&google.maps.event.removeListener(Me),We!==null&&google.maps.event.removeListener(We),br!==null&&google.maps.event.removeListener(br),qr!==null&&google.maps.event.removeListener(qr),Xs!==null&&google.maps.event.removeListener(Xs),Bi!==null&&google.maps.event.removeListener(Bi),Qs!==null&&google.maps.event.removeListener(Qs),Jt!==null&&google.maps.event.removeListener(Jt),we!==null&&google.maps.event.removeListener(we),_e!==null&&google.maps.event.removeListener(_e),K&&K(be),r?r.removeMarker(be,!!s):be&&be.setMap(null)}},[]);var en=u.useMemo(()=>i?u.Children.map(i,Ut=>{if(!u.isValidElement(Ut))return Ut;var be=Ut;return u.cloneElement(be,{anchor:M})}):null,[i,M]);return a.jsx(a.Fragment,{children:en})||null}u.memo(QV);class fL extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[])}componentDidMount(){var t=this;return lL(function*(){var n=jo(jo(jo({},t.props.options||xd),t.props.clusterer?xd:{map:t.context}),{},{position:t.props.position});t.marker=new google.maps.Marker(n),t.props.clusterer?t.props.clusterer.addMarker(t.marker,!!t.props.noClustererRedraw):t.marker.setMap(t.context),t.registeredEvents=Ne({updaterMap:sw,eventMap:rw,prevProps:{},nextProps:t.props,instance:t.marker}),t.props.onLoad&&t.props.onLoad(t.marker)})()}componentDidUpdate(t){this.marker&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:sw,eventMap:rw,prevProps:t,nextProps:this.props,instance:this.marker}))}componentWillUnmount(){this.marker&&(this.props.onUnmount&&this.props.onUnmount(this.marker),Le(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.marker,!!this.props.noClustererRedraw):this.marker&&this.marker.setMap(null))}render(){var t=this.props.children?u.Children.map(this.props.children,n=>{if(!u.isValidElement(n))return n;var r=n;return u.cloneElement(r,{anchor:this.marker})}):null;return t||null}}U(fL,"contextType",je);var JV=function(){function e(t,n){t.getClusterer().extend(e,google.maps.OverlayView),this.cluster=t,this.clusterClassName=this.cluster.getClusterer().getClusterClass(),this.className=this.clusterClassName,this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url="",this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor="black",this.textSize=11,this.textDecoration="none",this.fontWeight="bold",this.fontStyle="normal",this.fontFamily="Arial,sans-serif",this.backgroundPosition="0 0",this.cMouseDownInCluster=null,this.cDraggingMapByCluster=null,this.timeOut=null,this.setMap(t.getMap()),this.onBoundsChanged=this.onBoundsChanged.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.draw=this.draw.bind(this),this.hide=this.hide.bind(this),this.show=this.show.bind(this),this.useStyle=this.useStyle.bind(this),this.setCenter=this.setCenter.bind(this),this.getPosFromLatLng=this.getPosFromLatLng.bind(this)}return e.prototype.onBoundsChanged=function(){this.cDraggingMapByCluster=this.cMouseDownInCluster},e.prototype.onMouseDown=function(){this.cMouseDownInCluster=!0,this.cDraggingMapByCluster=!1},e.prototype.onClick=function(t){if(this.cMouseDownInCluster=!1,!this.cDraggingMapByCluster){var n=this.cluster.getClusterer();if(google.maps.event.trigger(n,"click",this.cluster),google.maps.event.trigger(n,"clusterclick",this.cluster),n.getZoomOnClick()){var r=n.getMaxZoom(),s=this.cluster.getBounds(),i=n.getMap();i!==null&&"fitBounds"in i&&i.fitBounds(s),this.timeOut=window.setTimeout(function(){var o=n.getMap();if(o!==null){"fitBounds"in o&&o.fitBounds(s);var l=o.getZoom()||0;r!==null&&l>r&&o.setZoom(r+1)}},100)}t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}},e.prototype.onMouseOver=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseover",this.cluster)},e.prototype.onMouseOut=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseout",this.cluster)},e.prototype.onAdd=function(){var t;this.div=document.createElement("div"),this.div.className=this.className,this.visible&&this.show(),(t=this.getPanes())===null||t===void 0||t.overlayMouseTarget.appendChild(this.div);var n=this.getMap();n!==null&&(this.boundsChangedListener=google.maps.event.addListener(n,"bounds_changed",this.onBoundsChanged),this.div.addEventListener("mousedown",this.onMouseDown),this.div.addEventListener("click",this.onClick),this.div.addEventListener("mouseover",this.onMouseOver),this.div.addEventListener("mouseout",this.onMouseOut))},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),this.boundsChangedListener!==null&&google.maps.event.removeListener(this.boundsChangedListener),this.div.removeEventListener("mousedown",this.onMouseDown),this.div.removeEventListener("click",this.onClick),this.div.removeEventListener("mouseover",this.onMouseOver),this.div.removeEventListener("mouseout",this.onMouseOut),this.div.parentNode.removeChild(this.div),this.timeOut!==null&&(window.clearTimeout(this.timeOut),this.timeOut=null),this.div=null)},e.prototype.draw=function(){if(this.visible&&this.div!==null&&this.center){var t=this.getPosFromLatLng(this.center);this.div.style.top=t!==null?"".concat(t.y,"px"):"0",this.div.style.left=t!==null?"".concat(t.x,"px"):"0"}},e.prototype.hide=function(){this.div&&(this.div.style.display="none"),this.visible=!1},e.prototype.show=function(){var t,n,r,s,i,o;if(this.div&&this.center){var l=this.sums===null||typeof this.sums.title>"u"||this.sums.title===""?this.cluster.getClusterer().getTitle():this.sums.title,c=this.backgroundPosition.split(" "),d=parseInt(((t=c[0])===null||t===void 0?void 0:t.replace(/^\s+|\s+$/g,""))||"0",10),f=parseInt(((n=c[1])===null||n===void 0?void 0:n.replace(/^\s+|\s+$/g,""))||"0",10),h=this.getPosFromLatLng(this.center);this.div.className=this.className,this.div.setAttribute("style","cursor: pointer; position: absolute; top: ".concat(h!==null?"".concat(h.y,"px"):"0","; left: ").concat(h!==null?"".concat(h.x,"px"):"0","; width: ").concat(this.width,"px; height: ").concat(this.height,"px; "));var p=document.createElement("img");p.alt=l,p.src=this.url,p.width=this.width,p.height=this.height,p.setAttribute("style","position: absolute; top: ".concat(f,"px; left: ").concat(d,"px")),this.cluster.getClusterer().enableRetinaIcons||(p.style.clip="rect(-".concat(f,"px, -").concat(d+this.width,"px, -").concat(f+this.height,", -").concat(d,")"));var m=document.createElement("div");m.setAttribute("style","position: absolute; top: ".concat(this.anchorText[0],"px; left: ").concat(this.anchorText[1],"px; color: ").concat(this.textColor,"; font-size: ").concat(this.textSize,"px; font-family: ").concat(this.fontFamily,"; font-weight: ").concat(this.fontWeight,"; fontStyle: ").concat(this.fontStyle,"; text-decoration: ").concat(this.textDecoration,"; text-align: center; width: ").concat(this.width,"px; line-height: ").concat(this.height,"px")),!((r=this.sums)===null||r===void 0)&&r.text&&(m.innerText="".concat((s=this.sums)===null||s===void 0?void 0:s.text)),!((i=this.sums)===null||i===void 0)&&i.html&&(m.innerHTML="".concat((o=this.sums)===null||o===void 0?void 0:o.html)),this.div.innerHTML="",this.div.appendChild(p),this.div.appendChild(m),this.div.title=l,this.div.style.display=""}this.visible=!0},e.prototype.useStyle=function(t){this.sums=t;var n=this.cluster.getClusterer().getStyles(),r=n[Math.min(n.length-1,Math.max(0,t.index-1))];r&&(this.url=r.url,this.height=r.height,this.width=r.width,r.className&&(this.className="".concat(this.clusterClassName," ").concat(r.className)),this.anchorText=r.anchorText||[0,0],this.anchorIcon=r.anchorIcon||[this.height/2,this.width/2],this.textColor=r.textColor||"black",this.textSize=r.textSize||11,this.textDecoration=r.textDecoration||"none",this.fontWeight=r.fontWeight||"bold",this.fontStyle=r.fontStyle||"normal",this.fontFamily=r.fontFamily||"Arial,sans-serif",this.backgroundPosition=r.backgroundPosition||"0 0")},e.prototype.setCenter=function(t){this.center=t},e.prototype.getPosFromLatLng=function(t){var n=this.getProjection().fromLatLngToDivPixel(t);return n!==null&&(n.x-=this.anchorIcon[1],n.y-=this.anchorIcon[0]),n},e}(),e$=function(){function e(t){this.markerClusterer=t,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new JV(this,this.markerClusterer.getStyles()),this.getSize=this.getSize.bind(this),this.getMarkers=this.getMarkers.bind(this),this.getCenter=this.getCenter.bind(this),this.getMap=this.getMap.bind(this),this.getClusterer=this.getClusterer.bind(this),this.getBounds=this.getBounds.bind(this),this.remove=this.remove.bind(this),this.addMarker=this.addMarker.bind(this),this.isMarkerInClusterBounds=this.isMarkerInClusterBounds.bind(this),this.calculateBounds=this.calculateBounds.bind(this),this.updateIcon=this.updateIcon.bind(this),this.isMarkerAlreadyAdded=this.isMarkerAlreadyAdded.bind(this)}return e.prototype.getSize=function(){return this.markers.length},e.prototype.getMarkers=function(){return this.markers},e.prototype.getCenter=function(){return this.center},e.prototype.getMap=function(){return this.map},e.prototype.getClusterer=function(){return this.markerClusterer},e.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center,this.center),n=this.getMarkers(),r=0,s=n;r<s.length;r++){var i=s[r],o=i.getPosition();o&&t.extend(o)}return t},e.prototype.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},e.prototype.addMarker=function(t){var n;if(this.isMarkerAlreadyAdded(t))return!1;if(this.center){if(this.averageCenter){var r=t.getPosition();if(r){var s=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(s-1)+r.lat())/s,(this.center.lng()*(s-1)+r.lng())/s),this.calculateBounds()}}}else{var r=t.getPosition();r&&(this.center=r,this.calculateBounds())}t.isAdded=!0,this.markers.push(t);var i=this.markers.length,o=this.markerClusterer.getMaxZoom(),l=(n=this.map)===null||n===void 0?void 0:n.getZoom();if(o!==null&&typeof l<"u"&&l>o)t.getMap()!==this.map&&t.setMap(this.map);else if(i<this.minClusterSize)t.getMap()!==this.map&&t.setMap(this.map);else if(i===this.minClusterSize)for(var c=0,d=this.markers;c<d.length;c++){var f=d[c];f.setMap(null)}else t.setMap(null);return!0},e.prototype.isMarkerInClusterBounds=function(t){if(this.bounds!==null){var n=t.getPosition();if(n)return this.bounds.contains(n)}return!1},e.prototype.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},e.prototype.updateIcon=function(){var t,n=this.markers.length,r=this.markerClusterer.getMaxZoom(),s=(t=this.map)===null||t===void 0?void 0:t.getZoom();if(r!==null&&typeof s<"u"&&s>r){this.clusterIcon.hide();return}if(n<this.minClusterSize){this.clusterIcon.hide();return}this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show()},e.prototype.isMarkerAlreadyAdded=function(t){if(this.markers.includes)return this.markers.includes(t);for(var n=0;n<this.markers.length;n++)if(t===this.markers[n])return!0;return!1},e}();function t$(e,t){var n=e.length,r=n.toString().length,s=Math.min(r,t);return{text:n.toString(),index:s,title:""}}var n$=2e3,r$=500,s$="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",i$="png",o$=[53,56,66,78,90],a$="cluster",hL=function(){function e(t,n,r){n===void 0&&(n=[]),r===void 0&&(r={}),this.getMinimumClusterSize=this.getMinimumClusterSize.bind(this),this.setMinimumClusterSize=this.setMinimumClusterSize.bind(this),this.getEnableRetinaIcons=this.getEnableRetinaIcons.bind(this),this.setEnableRetinaIcons=this.setEnableRetinaIcons.bind(this),this.addToClosestCluster=this.addToClosestCluster.bind(this),this.getImageExtension=this.getImageExtension.bind(this),this.setImageExtension=this.setImageExtension.bind(this),this.getExtendedBounds=this.getExtendedBounds.bind(this),this.getAverageCenter=this.getAverageCenter.bind(this),this.setAverageCenter=this.setAverageCenter.bind(this),this.getTotalClusters=this.getTotalClusters.bind(this),this.fitMapToMarkers=this.fitMapToMarkers.bind(this),this.getIgnoreHidden=this.getIgnoreHidden.bind(this),this.setIgnoreHidden=this.setIgnoreHidden.bind(this),this.getClusterClass=this.getClusterClass.bind(this),this.setClusterClass=this.setClusterClass.bind(this),this.getTotalMarkers=this.getTotalMarkers.bind(this),this.getZoomOnClick=this.getZoomOnClick.bind(this),this.setZoomOnClick=this.setZoomOnClick.bind(this),this.getBatchSizeIE=this.getBatchSizeIE.bind(this),this.setBatchSizeIE=this.setBatchSizeIE.bind(this),this.createClusters=this.createClusters.bind(this),this.onZoomChanged=this.onZoomChanged.bind(this),this.getImageSizes=this.getImageSizes.bind(this),this.setImageSizes=this.setImageSizes.bind(this),this.getCalculator=this.getCalculator.bind(this),this.setCalculator=this.setCalculator.bind(this),this.removeMarkers=this.removeMarkers.bind(this),this.resetViewport=this.resetViewport.bind(this),this.getImagePath=this.getImagePath.bind(this),this.setImagePath=this.setImagePath.bind(this),this.pushMarkerTo=this.pushMarkerTo.bind(this),this.removeMarker=this.removeMarker.bind(this),this.clearMarkers=this.clearMarkers.bind(this),this.setupStyles=this.setupStyles.bind(this),this.getGridSize=this.getGridSize.bind(this),this.setGridSize=this.setGridSize.bind(this),this.getClusters=this.getClusters.bind(this),this.getMaxZoom=this.getMaxZoom.bind(this),this.setMaxZoom=this.setMaxZoom.bind(this),this.getMarkers=this.getMarkers.bind(this),this.addMarkers=this.addMarkers.bind(this),this.getStyles=this.getStyles.bind(this),this.setStyles=this.setStyles.bind(this),this.addMarker=this.addMarker.bind(this),this.onRemove=this.onRemove.bind(this),this.getTitle=this.getTitle.bind(this),this.setTitle=this.setTitle.bind(this),this.repaint=this.repaint.bind(this),this.onIdle=this.onIdle.bind(this),this.redraw=this.redraw.bind(this),this.onAdd=this.onAdd.bind(this),this.draw=this.draw.bind(this),this.extend=this.extend.bind(this),this.extend(e,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=r.gridSize||60,this.minClusterSize=r.minimumClusterSize||2,this.maxZoom=r.maxZoom||null,this.styles=r.styles||[],this.title=r.title||"",this.zoomOnClick=!0,r.zoomOnClick!==void 0&&(this.zoomOnClick=r.zoomOnClick),this.averageCenter=!1,r.averageCenter!==void 0&&(this.averageCenter=r.averageCenter),this.ignoreHidden=!1,r.ignoreHidden!==void 0&&(this.ignoreHidden=r.ignoreHidden),this.enableRetinaIcons=!1,r.enableRetinaIcons!==void 0&&(this.enableRetinaIcons=r.enableRetinaIcons),this.imagePath=r.imagePath||s$,this.imageExtension=r.imageExtension||i$,this.imageSizes=r.imageSizes||o$,this.calculator=r.calculator||t$,this.batchSize=r.batchSize||n$,this.batchSizeIE=r.batchSizeIE||r$,this.clusterClass=r.clusterClass||a$,navigator.userAgent.toLowerCase().indexOf("msie")!==-1&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(t)}return e.prototype.onZoomChanged=function(){var t,n;this.resetViewport(!1),(((t=this.getMap())===null||t===void 0?void 0:t.getZoom())===(this.get("minZoom")||0)||((n=this.getMap())===null||n===void 0?void 0:n.getZoom())===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")},e.prototype.onIdle=function(){this.redraw()},e.prototype.onAdd=function(){var t=this.getMap();this.activeMap=t,this.ready=!0,this.repaint(),t!==null&&(this.listeners=[google.maps.event.addListener(t,"zoom_changed",this.onZoomChanged),google.maps.event.addListener(t,"idle",this.onIdle)])},e.prototype.onRemove=function(){for(var t=0,n=this.markers;t<n.length;t++){var r=n[t];r.getMap()!==this.activeMap&&r.setMap(this.activeMap)}for(var s=0,i=this.clusters;s<i.length;s++){var o=i[s];o.remove()}this.clusters=[];for(var l=0,c=this.listeners;l<c.length;l++){var d=c[l];google.maps.event.removeListener(d)}this.listeners=[],this.activeMap=null,this.ready=!1},e.prototype.draw=function(){},e.prototype.getMap=function(){return null},e.prototype.getPanes=function(){return null},e.prototype.getProjection=function(){return{fromContainerPixelToLatLng:function(){return null},fromDivPixelToLatLng:function(){return null},fromLatLngToContainerPixel:function(){return null},fromLatLngToDivPixel:function(){return null},getVisibleRegion:function(){return null},getWorldWidth:function(){return 0}}},e.prototype.setMap=function(){},e.prototype.addListener=function(){return{remove:function(){}}},e.prototype.bindTo=function(){},e.prototype.get=function(){},e.prototype.notify=function(){},e.prototype.set=function(){},e.prototype.setValues=function(){},e.prototype.unbind=function(){},e.prototype.unbindAll=function(){},e.prototype.setupStyles=function(){if(!(this.styles.length>0))for(var t=0;t<this.imageSizes.length;t++)this.styles.push({url:"".concat(this.imagePath+(t+1),".").concat(this.imageExtension),height:this.imageSizes[t]||0,width:this.imageSizes[t]||0})},e.prototype.fitMapToMarkers=function(){for(var t=this.getMarkers(),n=new google.maps.LatLngBounds,r=0,s=t;r<s.length;r++){var i=s[r],o=i.getPosition();o&&n.extend(o)}var l=this.getMap();l!==null&&"fitBounds"in l&&l.fitBounds(n)},e.prototype.getGridSize=function(){return this.gridSize},e.prototype.setGridSize=function(t){this.gridSize=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize=t},e.prototype.getMaxZoom=function(){return this.maxZoom},e.prototype.setMaxZoom=function(t){this.maxZoom=t},e.prototype.getStyles=function(){return this.styles},e.prototype.setStyles=function(t){this.styles=t},e.prototype.getTitle=function(){return this.title},e.prototype.setTitle=function(t){this.title=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick},e.prototype.setZoomOnClick=function(t){this.zoomOnClick=t},e.prototype.getAverageCenter=function(){return this.averageCenter},e.prototype.setAverageCenter=function(t){this.averageCenter=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons=t},e.prototype.getImageExtension=function(){return this.imageExtension},e.prototype.setImageExtension=function(t){this.imageExtension=t},e.prototype.getImagePath=function(){return this.imagePath},e.prototype.setImagePath=function(t){this.imagePath=t},e.prototype.getImageSizes=function(){return this.imageSizes},e.prototype.setImageSizes=function(t){this.imageSizes=t},e.prototype.getCalculator=function(){return this.calculator},e.prototype.setCalculator=function(t){this.calculator=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE=t},e.prototype.getClusterClass=function(){return this.clusterClass},e.prototype.setClusterClass=function(t){this.clusterClass=t},e.prototype.getMarkers=function(){return this.markers},e.prototype.getTotalMarkers=function(){return this.markers.length},e.prototype.getClusters=function(){return this.clusters},e.prototype.getTotalClusters=function(){return this.clusters.length},e.prototype.addMarker=function(t,n){this.pushMarkerTo(t),n||this.redraw()},e.prototype.addMarkers=function(t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var s=t[r];s&&this.pushMarkerTo(s)}n||this.redraw()},e.prototype.pushMarkerTo=function(t){var n=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",function(){n.ready&&(t.isAdded=!1,n.repaint())}),t.isAdded=!1,this.markers.push(t)},e.prototype.removeMarker_=function(t){var n=-1;if(this.markers.indexOf)n=this.markers.indexOf(t);else for(var r=0;r<this.markers.length;r++)if(t===this.markers[r]){n=r;break}return n===-1?!1:(t.setMap(null),this.markers.splice(n,1),!0)},e.prototype.removeMarker=function(t,n){var r=this.removeMarker_(t);return!n&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,n){for(var r=!1,s=0,i=t;s<i.length;s++){var o=i[s];r=r||this.removeMarker_(o)}return!n&&r&&this.repaint(),r},e.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},e.prototype.repaint=function(){var t=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout(function(){for(var r=0,s=t;r<s.length;r++){var i=s[r];i.remove()}},0)},e.prototype.getExtendedBounds=function(t){var n=this.getProjection(),r=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()));r!==null&&(r.x+=this.gridSize,r.y-=this.gridSize);var s=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()));if(s!==null&&(s.x-=this.gridSize,s.y+=this.gridSize),r!==null){var i=n.fromDivPixelToLatLng(r);i!==null&&t.extend(i)}if(s!==null){var o=n.fromDivPixelToLatLng(s);o!==null&&t.extend(o)}return t},e.prototype.redraw=function(){this.createClusters(0)},e.prototype.resetViewport=function(t){for(var n=0,r=this.clusters;n<r.length;n++){var s=r[n];s.remove()}this.clusters=[];for(var i=0,o=this.markers;i<o.length;i++){var l=o[i];l.isAdded=!1,t&&l.setMap(null)}},e.prototype.distanceBetweenPoints=function(t,n){var r=6371,s=(n.lat()-t.lat())*Math.PI/180,i=(n.lng()-t.lng())*Math.PI/180,o=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(n.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2);return r*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},e.prototype.isMarkerInBounds=function(t,n){var r=t.getPosition();return r?n.contains(r):!1},e.prototype.addToClosestCluster=function(t){for(var n,r=4e4,s=null,i=0,o=this.clusters;i<o.length;i++){var l=o[i];n=l;var c=n.getCenter(),d=t.getPosition();if(c&&d){var f=this.distanceBetweenPoints(c,d);f<r&&(r=f,s=n)}}s&&s.isMarkerInClusterBounds(t)?s.addMarker(t):(n=new e$(this),n.addMarker(t),this.clusters.push(n))},e.prototype.createClusters=function(t){var n=this;if(this.ready){t===0&&(google.maps.event.trigger(this,"clusteringbegin",this),this.timerRefStatic!==null&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var r=this.getMap(),s=r!==null&&("getBounds"in r)?r.getBounds():null,i=(r==null?void 0:r.getZoom())||0,o=i>3?new google.maps.LatLngBounds(s==null?void 0:s.getSouthWest(),s==null?void 0:s.getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),l=this.getExtendedBounds(o),c=Math.min(t+this.batchSize,this.markers.length),d=t;d<c;d++){var f=this.markers[d];f&&!f.isAdded&&this.isMarkerInBounds(f,l)&&(!this.ignoreHidden||this.ignoreHidden&&f.getVisible())&&this.addToClosestCluster(f)}if(c<this.markers.length)this.timerRefStatic=window.setTimeout(function(){n.createClusters(c)},0);else{this.timerRefStatic=null,google.maps.event.trigger(this,"clusteringend",this);for(var h=0,p=this.clusters;h<p.length;h++){var m=p[h];m.updateIcon()}}}},e.prototype.extend=function(t,n){return(function(s){for(var i in s.prototype){var o=i;this.prototype[o]=s.prototype[o]}return this}).apply(t,[n])},e}();function iw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function l$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?iw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):iw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var vn={onClick:"click",onClusteringBegin:"clusteringbegin",onClusteringEnd:"clusteringend",onMouseOut:"mouseout",onMouseOver:"mouseover"},Ae={averageCenter(e,t){e.setAverageCenter(t)},batchSizeIE(e,t){e.setBatchSizeIE(t)},calculator(e,t){e.setCalculator(t)},clusterClass(e,t){e.setClusterClass(t)},enableRetinaIcons(e,t){e.setEnableRetinaIcons(t)},gridSize(e,t){e.setGridSize(t)},ignoreHidden(e,t){e.setIgnoreHidden(t)},imageExtension(e,t){e.setImageExtension(t)},imagePath(e,t){e.setImagePath(t)},imageSizes(e,t){e.setImageSizes(t)},maxZoom(e,t){e.setMaxZoom(t)},minimumClusterSize(e,t){e.setMinimumClusterSize(t)},styles(e,t){e.setStyles(t)},title(e,t){e.setTitle(t)},zoomOnClick(e,t){e.setZoomOnClick(t)}},c$={};function u$(e){var{children:t,options:n,averageCenter:r,batchSizeIE:s,calculator:i,clusterClass:o,enableRetinaIcons:l,gridSize:c,ignoreHidden:d,imageExtension:f,imagePath:h,imageSizes:p,maxZoom:m,minimumClusterSize:g,styles:v,title:x,zoomOnClick:b,onClick:y,onClusteringBegin:w,onClusteringEnd:S,onMouseOver:k,onMouseOut:C,onLoad:j,onUnmount:E}=e,[L,N]=u.useState(null),R=u.useContext(je),[D,F]=u.useState(null),[_,z]=u.useState(null),[A,G]=u.useState(null),[T,O]=u.useState(null),[I,V]=u.useState(null);return u.useEffect(()=>{L&&C&&(T!==null&&google.maps.event.removeListener(T),O(google.maps.event.addListener(L,vn.onMouseOut,C)))},[C]),u.useEffect(()=>{L&&k&&(I!==null&&google.maps.event.removeListener(I),V(google.maps.event.addListener(L,vn.onMouseOver,k)))},[k]),u.useEffect(()=>{L&&y&&(D!==null&&google.maps.event.removeListener(D),F(google.maps.event.addListener(L,vn.onClick,y)))},[y]),u.useEffect(()=>{L&&w&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(L,vn.onClusteringBegin,w)))},[w]),u.useEffect(()=>{L&&S&&(A!==null&&google.maps.event.removeListener(A),z(google.maps.event.addListener(L,vn.onClusteringEnd,S)))},[S]),u.useEffect(()=>{typeof r<"u"&&L!==null&&Ae.averageCenter(L,r)},[L,r]),u.useEffect(()=>{typeof s<"u"&&L!==null&&Ae.batchSizeIE(L,s)},[L,s]),u.useEffect(()=>{typeof i<"u"&&L!==null&&Ae.calculator(L,i)},[L,i]),u.useEffect(()=>{typeof o<"u"&&L!==null&&Ae.clusterClass(L,o)},[L,o]),u.useEffect(()=>{typeof l<"u"&&L!==null&&Ae.enableRetinaIcons(L,l)},[L,l]),u.useEffect(()=>{typeof c<"u"&&L!==null&&Ae.gridSize(L,c)},[L,c]),u.useEffect(()=>{typeof d<"u"&&L!==null&&Ae.ignoreHidden(L,d)},[L,d]),u.useEffect(()=>{typeof f<"u"&&L!==null&&Ae.imageExtension(L,f)},[L,f]),u.useEffect(()=>{typeof h<"u"&&L!==null&&Ae.imagePath(L,h)},[L,h]),u.useEffect(()=>{typeof p<"u"&&L!==null&&Ae.imageSizes(L,p)},[L,p]),u.useEffect(()=>{typeof m<"u"&&L!==null&&Ae.maxZoom(L,m)},[L,m]),u.useEffect(()=>{typeof g<"u"&&L!==null&&Ae.minimumClusterSize(L,g)},[L,g]),u.useEffect(()=>{typeof v<"u"&&L!==null&&Ae.styles(L,v)},[L,v]),u.useEffect(()=>{typeof x<"u"&&L!==null&&Ae.title(L,x)},[L,x]),u.useEffect(()=>{typeof b<"u"&&L!==null&&Ae.zoomOnClick(L,b)},[L,b]),u.useEffect(()=>{if(R){var Z=l$({},n||c$),K=new hL(R,[],Z);return r&&Ae.averageCenter(K,r),s&&Ae.batchSizeIE(K,s),i&&Ae.calculator(K,i),o&&Ae.clusterClass(K,o),l&&Ae.enableRetinaIcons(K,l),c&&Ae.gridSize(K,c),d&&Ae.ignoreHidden(K,d),f&&Ae.imageExtension(K,f),h&&Ae.imagePath(K,h),p&&Ae.imageSizes(K,p),m&&Ae.maxZoom(K,m),g&&Ae.minimumClusterSize(K,g),v&&Ae.styles(K,v),x&&Ae.title(K,x),b&&Ae.zoomOnClick(K,b),C&&O(google.maps.event.addListener(K,vn.onMouseOut,C)),k&&V(google.maps.event.addListener(K,vn.onMouseOver,k)),y&&F(google.maps.event.addListener(K,vn.onClick,y)),w&&z(google.maps.event.addListener(K,vn.onClusteringBegin,w)),S&&G(google.maps.event.addListener(K,vn.onClusteringEnd,S)),N(K),j&&j(K),()=>{T!==null&&google.maps.event.removeListener(T),I!==null&&google.maps.event.removeListener(I),D!==null&&google.maps.event.removeListener(D),_!==null&&google.maps.event.removeListener(_),A!==null&&google.maps.event.removeListener(A),E&&E(K)}}},[]),L!==null&&t(L)||null}u.memo(u$);class d$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{markerClusterer:null}),U(this,"setClustererCallback",()=>{this.state.markerClusterer!==null&&this.props.onLoad&&this.props.onLoad(this.state.markerClusterer)})}componentDidMount(){if(this.context){var t=new hL(this.context,[],this.props.options);this.registeredEvents=Ne({updaterMap:Ae,eventMap:vn,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({markerClusterer:t}),this.setClustererCallback)}}componentDidUpdate(t){this.state.markerClusterer&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Ae,eventMap:vn,prevProps:t,nextProps:this.props,instance:this.state.markerClusterer}))}componentWillUnmount(){this.state.markerClusterer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),Le(this.registeredEvents),this.state.markerClusterer.setMap(null))}render(){return this.state.markerClusterer!==null?this.props.children(this.state.markerClusterer):null}}U(d$,"contextType",je);function ow(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}var pL=function(){function e(t){t===void 0&&(t={}),this.getCloseClickHandler=this.getCloseClickHandler.bind(this),this.closeClickHandler=this.closeClickHandler.bind(this),this.createInfoBoxDiv=this.createInfoBoxDiv.bind(this),this.addClickHandler=this.addClickHandler.bind(this),this.getCloseBoxImg=this.getCloseBoxImg.bind(this),this.getBoxWidths=this.getBoxWidths.bind(this),this.setBoxStyle=this.setBoxStyle.bind(this),this.setPosition=this.setPosition.bind(this),this.getPosition=this.getPosition.bind(this),this.setOptions=this.setOptions.bind(this),this.setContent=this.setContent.bind(this),this.setVisible=this.setVisible.bind(this),this.getContent=this.getContent.bind(this),this.getVisible=this.getVisible.bind(this),this.setZIndex=this.setZIndex.bind(this),this.getZIndex=this.getZIndex.bind(this),this.onRemove=this.onRemove.bind(this),this.panBox=this.panBox.bind(this),this.extend=this.extend.bind(this),this.close=this.close.bind(this),this.draw=this.draw.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.open=this.open.bind(this),this.extend(e,google.maps.OverlayView),this.content=t.content||"",this.disableAutoPan=t.disableAutoPan||!1,this.maxWidth=t.maxWidth||0,this.pixelOffset=t.pixelOffset||new google.maps.Size(0,0),this.position=t.position||new google.maps.LatLng(0,0),this.zIndex=t.zIndex||null,this.boxClass=t.boxClass||"infoBox",this.boxStyle=t.boxStyle||{},this.closeBoxMargin=t.closeBoxMargin||"2px",this.closeBoxURL=t.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",t.closeBoxURL===""&&(this.closeBoxURL=""),this.infoBoxClearance=t.infoBoxClearance||new google.maps.Size(1,1),typeof t.visible>"u"&&(typeof t.isHidden>"u"?t.visible=!0:t.visible=!t.isHidden),this.isHidden=!t.visible,this.alignBottom=t.alignBottom||!1,this.pane=t.pane||"floatPane",this.enableEventPropagation=t.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}return e.prototype.createInfoBoxDiv=function(){var t=this,n=function(f){f.returnValue=!1,f.preventDefault&&f.preventDefault(),t.enableEventPropagation||ow(f)};if(!this.div){this.div=document.createElement("div"),this.setBoxStyle(),typeof this.content=="string"?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content));var r=this.getPanes();if(r!==null&&r[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(this.maxWidth!==0&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+"px",this.fixedWidthSet=!0;else{var s=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-s.left-s.right+"px",this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var i=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],o=0,l=i;o<l.length;o++){var c=l[o];this.eventListeners.push(google.maps.event.addListener(this.div,c,ow))}this.eventListeners.push(google.maps.event.addListener(this.div,"mouseover",function(){t.div&&(t.div.style.cursor="default")}))}this.contextListener=google.maps.event.addListener(this.div,"contextmenu",n),google.maps.event.trigger(this,"domready")}},e.prototype.getCloseBoxImg=function(){var t="";return this.closeBoxURL!==""&&(t='<img alt=""',t+=' aria-hidden="true"',t+=" src='"+this.closeBoxURL+"'",t+=" align=right",t+=" style='",t+=" position: relative;",t+=" cursor: pointer;",t+=" margin: "+this.closeBoxMargin+";",t+="'>"),t},e.prototype.addClickHandler=function(){this.closeListener=this.div&&this.div.firstChild&&this.closeBoxURL!==""?google.maps.event.addListener(this.div.firstChild,"click",this.getCloseClickHandler()):null},e.prototype.closeClickHandler=function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(this,"closeclick"),this.close()},e.prototype.getCloseClickHandler=function(){return this.closeClickHandler},e.prototype.panBox=function(t){if(this.div&&!t){var n=this.getMap();if(n instanceof google.maps.Map){var r=0,s=0,i=n.getBounds();i&&!i.contains(this.position)&&n.setCenter(this.position);var o=n.getDiv(),l=o.offsetWidth,c=o.offsetHeight,d=this.pixelOffset.width,f=this.pixelOffset.height,h=this.div.offsetWidth,p=this.div.offsetHeight,m=this.infoBoxClearance.width,g=this.infoBoxClearance.height,v=this.getProjection(),x=v.fromLatLngToContainerPixel(this.position);x!==null&&(x.x<-d+m?r=x.x+d-m:x.x+h+d+m>l&&(r=x.x+h+d+m-l),this.alignBottom?x.y<-f+g+p?s=x.y+f-g-p:x.y+f+g>c&&(s=x.y+f+g-c):x.y<-f+g?s=x.y+f-g:x.y+p+f+g>c&&(s=x.y+p+f+g-c)),r===0&&s===0||n.panBy(r,s)}}},e.prototype.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText="";var t=this.boxStyle;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this.div.style[n]=t[n]);if(this.div.style.webkitTransform="translateZ(0)",typeof this.div.style.opacity<"u"&&this.div.style.opacity!==""){var r=parseFloat(this.div.style.opacity||"");this.div.style.msFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+r*100+')"',this.div.style.filter="alpha(opacity="+r*100+")"}this.div.style.position="absolute",this.div.style.visibility="hidden",this.zIndex!==null&&(this.div.style.zIndex=this.zIndex+""),this.div.style.overflow||(this.div.style.overflow="auto")}},e.prototype.getBoxWidths=function(){var t={top:0,bottom:0,left:0,right:0};if(!this.div)return t;if(document.defaultView){var n=this.div.ownerDocument,r=n&&n.defaultView?n.defaultView.getComputedStyle(this.div,""):null;r&&(t.top=parseInt(r.borderTopWidth||"",10)||0,t.bottom=parseInt(r.borderBottomWidth||"",10)||0,t.left=parseInt(r.borderLeftWidth||"",10)||0,t.right=parseInt(r.borderRightWidth||"",10)||0)}else if(document.documentElement.currentStyle){var s=this.div.currentStyle;s&&(t.top=parseInt(s.borderTopWidth||"",10)||0,t.bottom=parseInt(s.borderBottomWidth||"",10)||0,t.left=parseInt(s.borderLeftWidth||"",10)||0,t.right=parseInt(s.borderRightWidth||"",10)||0)}return t},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},e.prototype.draw=function(){if(this.createInfoBoxDiv(),this.div){var t=this.getProjection(),n=t.fromLatLngToDivPixel(this.position);n!==null&&(this.div.style.left=n.x+this.pixelOffset.width+"px",this.alignBottom?this.div.style.bottom=-(n.y+this.pixelOffset.height)+"px":this.div.style.top=n.y+this.pixelOffset.height+"px"),this.isHidden?this.div.style.visibility="hidden":this.div.style.visibility="visible"}},e.prototype.setOptions=function(t){t===void 0&&(t={}),typeof t.boxClass<"u"&&(this.boxClass=t.boxClass,this.setBoxStyle()),typeof t.boxStyle<"u"&&(this.boxStyle=t.boxStyle,this.setBoxStyle()),typeof t.content<"u"&&this.setContent(t.content),typeof t.disableAutoPan<"u"&&(this.disableAutoPan=t.disableAutoPan),typeof t.maxWidth<"u"&&(this.maxWidth=t.maxWidth),typeof t.pixelOffset<"u"&&(this.pixelOffset=t.pixelOffset),typeof t.alignBottom<"u"&&(this.alignBottom=t.alignBottom),typeof t.position<"u"&&this.setPosition(t.position),typeof t.zIndex<"u"&&this.setZIndex(t.zIndex),typeof t.closeBoxMargin<"u"&&(this.closeBoxMargin=t.closeBoxMargin),typeof t.closeBoxURL<"u"&&(this.closeBoxURL=t.closeBoxURL),typeof t.infoBoxClearance<"u"&&(this.infoBoxClearance=t.infoBoxClearance),typeof t.isHidden<"u"&&(this.isHidden=t.isHidden),typeof t.visible<"u"&&(this.isHidden=!t.visible),typeof t.enableEventPropagation<"u"&&(this.enableEventPropagation=t.enableEventPropagation),this.div&&this.draw()},e.prototype.setContent=function(t){this.content=t,this.div&&(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.fixedWidthSet||(this.div.style.width=""),typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+"px",typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t))),this.addClickHandler()),google.maps.event.trigger(this,"content_changed")},e.prototype.setPosition=function(t){this.position=t,this.div&&this.draw(),google.maps.event.trigger(this,"position_changed")},e.prototype.setVisible=function(t){this.isHidden=!t,this.div&&(this.div.style.visibility=this.isHidden?"hidden":"visible")},e.prototype.setZIndex=function(t){this.zIndex=t,this.div&&(this.div.style.zIndex=t+""),google.maps.event.trigger(this,"zindex_changed")},e.prototype.getContent=function(){return this.content},e.prototype.getPosition=function(){return this.position},e.prototype.getZIndex=function(){return this.zIndex},e.prototype.getVisible=function(){var t=this.getMap();return typeof t>"u"||t===null?!1:!this.isHidden},e.prototype.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility="visible")},e.prototype.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility="hidden")},e.prototype.open=function(t,n){var r=this;n&&(this.position=n.getPosition(),this.moveListener=google.maps.event.addListener(n,"position_changed",function(){var s=n.getPosition();r.setPosition(s)}),this.mapListener=google.maps.event.addListener(n,"map_changed",function(){r.setMap(n.map)})),this.setMap(t),this.div&&this.panBox()},e.prototype.close=function(){if(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.eventListeners){for(var t=0,n=this.eventListeners;t<n.length;t++){var r=n[t];google.maps.event.removeListener(r)}this.eventListeners=null}this.moveListener&&(google.maps.event.removeListener(this.moveListener),this.moveListener=null),this.mapListener&&(google.maps.event.removeListener(this.mapListener),this.mapListener=null),this.contextListener&&(google.maps.event.removeListener(this.contextListener),this.contextListener=null),this.setMap(null)},e.prototype.extend=function(t,n){return(function(s){for(var i in s.prototype)Object.prototype.hasOwnProperty.call(this,i)||(this.prototype[i]=s.prototype[i]);return this}).apply(t,[n])},e}(),f$=["position"],h$=["position"];function aw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function yd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?aw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):aw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var lw={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},cw={options(e,t){e.setOptions(t)},position(e,t){t instanceof google.maps.LatLng?e.setPosition(t):e.setPosition(new google.maps.LatLng(t.lat,t.lng))},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},p$={};function m$(e){var{children:t,anchor:n,options:r,position:s,zIndex:i,onCloseClick:o,onDomReady:l,onContentChanged:c,onPositionChanged:d,onZindexChanged:f,onLoad:h,onUnmount:p}=e,m=u.useContext(je),[g,v]=u.useState(null),[x,b]=u.useState(null),[y,w]=u.useState(null),[S,k]=u.useState(null),[C,j]=u.useState(null),[E,L]=u.useState(null),N=u.useRef(null);return u.useEffect(()=>{m&&g!==null&&(g.close(),n?g.open(m,n):g.getPosition()&&g.open(m))},[m,g,n]),u.useEffect(()=>{r&&g!==null&&g.setOptions(r)},[g,r]),u.useEffect(()=>{if(s&&g!==null){var R=s instanceof google.maps.LatLng?s:new google.maps.LatLng(s.lat,s.lng);g.setPosition(R)}},[s]),u.useEffect(()=>{typeof i=="number"&&g!==null&&g.setZIndex(i)},[i]),u.useEffect(()=>{g&&o&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(g,"closeclick",o)))},[o]),u.useEffect(()=>{g&&l&&(y!==null&&google.maps.event.removeListener(y),w(google.maps.event.addListener(g,"domready",l)))},[l]),u.useEffect(()=>{g&&c&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(g,"content_changed",c)))},[c]),u.useEffect(()=>{g&&d&&(C!==null&&google.maps.event.removeListener(C),j(google.maps.event.addListener(g,"position_changed",d)))},[d]),u.useEffect(()=>{g&&f&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(g,"zindex_changed",f)))},[f]),u.useEffect(()=>{if(m){var R=r||p$,{position:D}=R,F=Y0(R,f$),_;D&&!(D instanceof google.maps.LatLng)&&(_=new google.maps.LatLng(D.lat,D.lng));var z=new pL(yd(yd({},F),_?{position:_}:{}));N.current=document.createElement("div"),v(z),o&&b(google.maps.event.addListener(z,"closeclick",o)),l&&w(google.maps.event.addListener(z,"domready",l)),c&&k(google.maps.event.addListener(z,"content_changed",c)),d&&j(google.maps.event.addListener(z,"position_changed",d)),f&&L(google.maps.event.addListener(z,"zindex_changed",f)),z.setContent(N.current),n?z.open(m,n):z.getPosition()?z.open(m):dt(!1,"You must provide either an anchor or a position prop for <InfoBox>."),h&&h(z)}return()=>{g!==null&&(x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),y&&google.maps.event.removeListener(y),C&&google.maps.event.removeListener(C),E&&google.maps.event.removeListener(E),p&&p(g),g.close())}},[]),N.current?pn.createPortal(u.Children.only(t),N.current):null}u.memo(m$);class g$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"containerElement",null),U(this,"state",{infoBox:null}),U(this,"open",(t,n)=>{n?this.context!==null&&t.open(this.context,n):t.getPosition()?this.context!==null&&t.open(this.context):dt(!1,"You must provide either an anchor or a position prop for <InfoBox>.")}),U(this,"setInfoBoxCallback",()=>{this.state.infoBox!==null&&this.containerElement!==null&&(this.state.infoBox.setContent(this.containerElement),this.open(this.state.infoBox,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoBox))})}componentDidMount(){var t=this.props.options||{},{position:n}=t,r=Y0(t,h$),s;n&&!(n instanceof google.maps.LatLng)&&(s=new google.maps.LatLng(n.lat,n.lng));var i=new pL(yd(yd({},r),s?{position:s}:{}));this.containerElement=document.createElement("div"),this.registeredEvents=Ne({updaterMap:cw,eventMap:lw,prevProps:{},nextProps:this.props,instance:i}),this.setState({infoBox:i},this.setInfoBoxCallback)}componentDidUpdate(t){var{infoBox:n}=this.state;n!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:cw,eventMap:lw,prevProps:t,nextProps:this.props,instance:n}))}componentWillUnmount(){var{onUnmount:t}=this.props,{infoBox:n}=this.state;n!==null&&(t&&t(n),Le(this.registeredEvents),n.close())}render(){return this.containerElement?pn.createPortal(u.Children.only(this.props.children),this.containerElement):null}}U(g$,"contextType",je);var Oh,uw;function v$(){return uw||(uw=1,Oh=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,s,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(s=r;s--!==0;)if(!e(t[s],n[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[s]))return!1;for(s=r;s--!==0;){var o=i[s];if(!e(t[o],n[o]))return!1}return!0}return t!==t&&n!==n}),Oh}var x$=v$(),dw=aL(x$),fw=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Ih=1,Ea=8;class X0{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");var[n,r]=new Uint8Array(t,0,2);if(n!==219)throw new Error("Data does not appear to be in a KDBush format.");var s=r>>4;if(s!==Ih)throw new Error("Got v".concat(s," data when expected v").concat(Ih,"."));var i=fw[r&15];if(!i)throw new Error("Unrecognized array type.");var[o]=new Uint16Array(t,2,1),[l]=new Uint32Array(t,4,1);return new X0(l,o,i,t)}constructor(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:64,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Float64Array,s=arguments.length>3?arguments[3]:void 0;if(isNaN(t)||t<0)throw new Error("Unpexpected numItems value: ".concat(t,"."));this.numItems=+t,this.nodeSize=Math.min(Math.max(+n,2),65535),this.ArrayType=r,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;var i=fw.indexOf(this.ArrayType),o=t*2*this.ArrayType.BYTES_PER_ELEMENT,l=t*this.IndexArrayType.BYTES_PER_ELEMENT,c=(8-l%8)%8;if(i<0)throw new Error("Unexpected typed array class: ".concat(r,"."));s&&s instanceof ArrayBuffer?(this.data=s,this.ids=new this.IndexArrayType(this.data,Ea,t),this.coords=new this.ArrayType(this.data,Ea+l+c,t*2),this._pos=t*2,this._finished=!0):(this.data=new ArrayBuffer(Ea+o+l+c),this.ids=new this.IndexArrayType(this.data,Ea,t),this.coords=new this.ArrayType(this.data,Ea+l+c,t*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(Ih<<4)+i]),new Uint16Array(this.data,2,1)[0]=n,new Uint32Array(this.data,4,1)[0]=t)}add(t,n){var r=this._pos>>1;return this.ids[r]=r,this.coords[this._pos++]=t,this.coords[this._pos++]=n,r}finish(){var t=this._pos>>1;if(t!==this.numItems)throw new Error("Added ".concat(t," items when expected ").concat(this.numItems,"."));return _m(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,n,r,s){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");for(var{ids:i,coords:o,nodeSize:l}=this,c=[0,i.length-1,0],d=[];c.length;){var f=c.pop()||0,h=c.pop()||0,p=c.pop()||0;if(h-p<=l){for(var m=p;m<=h;m++){var g=o[2*m],v=o[2*m+1];g>=t&&g<=r&&v>=n&&v<=s&&d.push(i[m])}continue}var x=p+h>>1,b=o[2*x],y=o[2*x+1];b>=t&&b<=r&&y>=n&&y<=s&&d.push(i[x]),(f===0?t<=b:n<=y)&&(c.push(p),c.push(x-1),c.push(1-f)),(f===0?r>=b:s>=y)&&(c.push(x+1),c.push(h),c.push(1-f))}return d}within(t,n,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");for(var{ids:s,coords:i,nodeSize:o}=this,l=[0,s.length-1,0],c=[],d=r*r;l.length;){var f=l.pop()||0,h=l.pop()||0,p=l.pop()||0;if(h-p<=o){for(var m=p;m<=h;m++)hw(i[2*m],i[2*m+1],t,n)<=d&&c.push(s[m]);continue}var g=p+h>>1,v=i[2*g],x=i[2*g+1];hw(v,x,t,n)<=d&&c.push(s[g]),(f===0?t-r<=v:n-r<=x)&&(l.push(p),l.push(g-1),l.push(1-f)),(f===0?t+r>=v:n+r>=x)&&(l.push(g+1),l.push(h),l.push(1-f))}return c}}function _m(e,t,n,r,s,i){if(!(s-r<=n)){var o=r+s>>1;mL(e,t,o,r,s,i),_m(e,t,n,r,o-1,1-i),_m(e,t,n,o+1,s,1-i)}}function mL(e,t,n,r,s,i){for(;s>r;){if(s-r>600){var o=s-r+1,l=n-r+1,c=Math.log(o),d=.5*Math.exp(2*c/3),f=.5*Math.sqrt(c*d*(o-d)/o)*(l-o/2<0?-1:1),h=Math.max(r,Math.floor(n-l*d/o+f)),p=Math.min(s,Math.floor(n+(o-l)*d/o+f));mL(e,t,n,h,p,i)}var m=t[2*n+i],g=r,v=s;for(Na(e,t,r,n),t[2*s+i]>m&&Na(e,t,r,s);g<v;){for(Na(e,t,g,v),g++,v--;t[2*g+i]<m;)g++;for(;t[2*v+i]>m;)v--}t[2*r+i]===m?Na(e,t,r,v):(v++,Na(e,t,v,s)),v<=n&&(r=v+1),n<=v&&(s=v-1)}}function Na(e,t,n,r){Dh(e,n,r),Dh(t,2*n,2*r),Dh(t,2*n+1,2*r+1)}function Dh(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function hw(e,t,n,r){var s=e-n,i=t-r;return s*s+i*i}var y$={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},pw=Math.fround||(e=>t=>(e[0]=+t,e[0]))(new Float32Array(1)),ti=2,os=3,_h=4,rs=5,gL=6;class b${constructor(t){this.options=Object.assign(Object.create(y$),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){var{log:n,minZoom:r,maxZoom:s}=this.options;n&&console.time("total time");var i="prepare ".concat(t.length," points");n&&console.time(i),this.points=t;for(var o=[],l=0;l<t.length;l++){var c=t[l];if(c.geometry){var[d,f]=c.geometry.coordinates,h=pw(Kc(d)),p=pw(Gc(f));o.push(h,p,1/0,l,-1,1),this.options.reduce&&o.push(0)}}var m=this.trees[s+1]=this._createTree(o);n&&console.timeEnd(i);for(var g=s;g>=r;g--){var v=+Date.now();m=this.trees[g]=this._createTree(this._cluster(m,g)),n&&console.log("z%d: %d clusters in %dms",g,m.numItems,+Date.now()-v)}return n&&console.timeEnd("total time"),this}getClusters(t,n){var r=((t[0]+180)%360+360)%360-180,s=Math.max(-90,Math.min(90,t[1])),i=t[2]===180?180:((t[2]+180)%360+360)%360-180,o=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,i=180;else if(r>i){var l=this.getClusters([r,s,180,o],n),c=this.getClusters([-180,s,i,o],n);return l.concat(c)}var d=this.trees[this._limitZoom(n)],f=d.range(Kc(r),Gc(o),Kc(i),Gc(s)),h=d.data,p=[];for(var m of f){var g=this.stride*m;p.push(h[g+rs]>1?mw(h,g,this.clusterProps):this.points[h[g+os]])}return p}getChildren(t){var n=this._getOriginId(t),r=this._getOriginZoom(t),s="No cluster with the specified id.",i=this.trees[r];if(!i)throw new Error(s);var o=i.data;if(n*this.stride>=o.length)throw new Error(s);var l=this.options.radius/(this.options.extent*Math.pow(2,r-1)),c=o[n*this.stride],d=o[n*this.stride+1],f=i.within(c,d,l),h=[];for(var p of f){var m=p*this.stride;o[m+_h]===t&&h.push(o[m+rs]>1?mw(o,m,this.clusterProps):this.points[o[m+os]])}if(h.length===0)throw new Error(s);return h}getLeaves(t,n,r){n=n||10,r=r||0;var s=[];return this._appendLeaves(s,t,n,r,0),s}getTile(t,n,r){var s=this.trees[this._limitZoom(t)],i=Math.pow(2,t),{extent:o,radius:l}=this.options,c=l/o,d=(r-c)/i,f=(r+1+c)/i,h={features:[]};return this._addTileFeatures(s.range((n-c)/i,d,(n+1+c)/i,f),s.data,n,r,i,h),n===0&&this._addTileFeatures(s.range(1-c/i,d,1,f),s.data,i,r,i,h),n===i-1&&this._addTileFeatures(s.range(0,d,c/i,f),s.data,-1,r,i,h),h.features.length?h:null}getClusterExpansionZoom(t){for(var n=this._getOriginZoom(t)-1;n<=this.options.maxZoom;){var r=this.getChildren(t);if(n++,r.length!==1)break;t=r[0].properties.cluster_id}return n}_appendLeaves(t,n,r,s,i){var o=this.getChildren(n);for(var l of o){var c=l.properties;if(c&&c.cluster?i+c.point_count<=s?i+=c.point_count:i=this._appendLeaves(t,c.cluster_id,r,s,i):i<s?i++:t.push(l),t.length===r)break}return i}_createTree(t){for(var n=new X0(t.length/this.stride|0,this.options.nodeSize,Float32Array),r=0;r<t.length;r+=this.stride)n.add(t[r],t[r+1]);return n.finish(),n.data=t,n}_addTileFeatures(t,n,r,s,i,o){for(var l of t){var c=l*this.stride,d=n[c+rs]>1,f=void 0,h=void 0,p=void 0;if(d)f=vL(n,c,this.clusterProps),h=n[c],p=n[c+1];else{var m=this.points[n[c+os]];f=m.properties;var[g,v]=m.geometry.coordinates;h=Kc(g),p=Gc(v)}var x={type:1,geometry:[[Math.round(this.options.extent*(h*i-r)),Math.round(this.options.extent*(p*i-s))]],tags:f},b=void 0;d||this.options.generateId?b=n[c+os]:b=this.points[n[c+os]].id,b!==void 0&&(x.id=b),o.features.push(x)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,n){for(var{radius:r,extent:s,reduce:i,minPoints:o}=this.options,l=r/(s*Math.pow(2,n)),c=t.data,d=[],f=this.stride,h=0;h<c.length;h+=f)if(!(c[h+ti]<=n)){c[h+ti]=n;var p=c[h],m=c[h+1],g=t.within(c[h],c[h+1],l),v=c[h+rs],x=v;for(var b of g){var y=b*f;c[y+ti]>n&&(x+=c[y+rs])}if(x>v&&x>=o){var w=p*v,S=m*v,k=void 0,C=-1,j=((h/f|0)<<5)+(n+1)+this.points.length;for(var E of g){var L=E*f;if(!(c[L+ti]<=n)){c[L+ti]=n;var N=c[L+rs];w+=c[L]*N,S+=c[L+1]*N,c[L+_h]=j,i&&(k||(k=this._map(c,h,!0),C=this.clusterProps.length,this.clusterProps.push(k)),i(k,this._map(c,L)))}}c[h+_h]=j,d.push(w/x,S/x,1/0,j,-1,x),i&&d.push(C)}else{for(var R=0;R<f;R++)d.push(c[h+R]);if(x>1)for(var D of g){var F=D*f;if(!(c[F+ti]<=n)){c[F+ti]=n;for(var _=0;_<f;_++)d.push(c[F+_])}}}}return d}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,n,r){if(t[n+rs]>1){var s=this.clusterProps[t[n+gL]];return r?Object.assign({},s):s}var i=this.points[t[n+os]].properties,o=this.options.map(i);return r&&o===i?Object.assign({},o):o}}function mw(e,t,n){return{type:"Feature",id:e[t+os],properties:vL(e,t,n),geometry:{type:"Point",coordinates:[w$(e[t]),S$(e[t+1])]}}}function vL(e,t,n){var r=e[t+rs],s=r>=1e4?"".concat(Math.round(r/1e3),"k"):r>=1e3?"".concat(Math.round(r/100)/10,"k"):r,i=e[t+gL],o=i===-1?{}:Object.assign({},n[i]);return Object.assign(o,{cluster:!0,cluster_id:e[t+os],point_count:r,point_count_abbreviated:s})}function Kc(e){return e/360+.5}function Gc(e){var t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function w$(e){return(e-.5)*360}function S$(e){var t=(180-e*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function k$(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}class sn{static isAdvancedMarkerAvailable(t){return google.maps.marker&&t.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(t){return google.maps.marker&&t instanceof google.maps.marker.AdvancedMarkerElement}static setMap(t,n){this.isAdvancedMarker(t)?t.map=n:t.setMap(n)}static getPosition(t){if(this.isAdvancedMarker(t)){if(t.position){if(t.position instanceof google.maps.LatLng)return t.position;if(t.position.lat&&t.position.lng)return new google.maps.LatLng(t.position.lat,t.position.lng)}return new google.maps.LatLng(null)}return t.getPosition()}static getVisible(t){return this.isAdvancedMarker(t)?!0:t.getVisible()}}class Fm{constructor(t){var{markers:n,position:r}=t;this.markers=n,r&&(r instanceof google.maps.LatLng?this._position=r:this._position=new google.maps.LatLng(r))}get bounds(){if(!(this.markers.length===0&&!this._position)){var t=new google.maps.LatLngBounds(this._position,this._position);for(var n of this.markers)t.extend(sn.getPosition(n));return t}}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(t=>sn.getVisible(t)).length}push(t){this.markers.push(t)}delete(){this.marker&&(sn.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}class C${constructor(t){var{maxZoom:n=16}=t;this.maxZoom=n}noop(t){var{markers:n}=t;return j$(n)}}var j$=e=>{var t=e.map(n=>new Fm({position:sn.getPosition(n),markers:[n]}));return t};class E$ extends C${constructor(t){var{maxZoom:n,radius:r=60}=t,s=k$(t,["maxZoom","radius"]);super({maxZoom:n}),this.state={zoom:-1},this.superCluster=new b$(Object.assign({maxZoom:this.maxZoom,radius:r},s))}calculate(t){var n=!1,r={zoom:t.map.getZoom()};if(!dw(t.markers,this.markers)){n=!0,this.markers=[...t.markers];var s=this.markers.map(i=>{var o=sn.getPosition(i),l=[o.lng(),o.lat()];return{type:"Feature",geometry:{type:"Point",coordinates:l},properties:{marker:i}}});this.superCluster.load(s)}return n||(this.state.zoom<=this.maxZoom||r.zoom<=this.maxZoom)&&(n=!dw(this.state,r)),this.state=r,n&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:n}}cluster(t){var{map:n}=t;return this.superCluster.getClusters([-180,-90,180,90],Math.round(n.getZoom())).map(r=>this.transformCluster(r))}transformCluster(t){var{geometry:{coordinates:[n,r]},properties:s}=t;if(s.cluster)return new Fm({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map(o=>o.properties.marker),position:{lat:r,lng:n}});var i=s.marker;return new Fm({markers:[i],position:sn.getPosition(i)})}}class N${constructor(t,n){this.markers={sum:t.length};var r=n.map(i=>i.count),s=r.reduce((i,o)=>i+o,0);this.clusters={count:n.length,markers:{mean:s/n.length,sum:s,min:Math.min(...r),max:Math.max(...r)}}}}class L${render(t,n,r){var{count:s,position:i}=t,o=s>Math.max(10,n.clusters.markers.mean)?"#ff0000":"#0000ff",l='<svg fill="'.concat(o,`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">`).concat(s,`</text>
</svg>`),c="Cluster of ".concat(s," markers"),d=Number(google.maps.Marker.MAX_ZINDEX)+s;if(sn.isAdvancedMarkerAvailable(r)){var f=new DOMParser,h=f.parseFromString(l,"image/svg+xml").documentElement;h.setAttribute("transform","translate(0 25)");var p={map:r,position:i,zIndex:d,title:c,content:h};return new google.maps.marker.AdvancedMarkerElement(p)}var m={position:i,zIndex:d,title:c,icon:{url:"data:image/svg+xml;base64,".concat(btoa(l)),anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(m)}}function P$(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}class Q0{constructor(){P$(Q0,google.maps.OverlayView)}}var tl;(function(e){e.CLUSTERING_BEGIN="clusteringbegin",e.CLUSTERING_END="clusteringend",e.CLUSTER_CLICK="click"})(tl||(tl={}));var T$=(e,t,n)=>{n.fitBounds(t.bounds)};class M$ extends Q0{constructor(t){var{map:n,markers:r=[],algorithmOptions:s={},algorithm:i=new E$(s),renderer:o=new L$,onClusterClick:l=T$}=t;super(),this.markers=[...r],this.clusters=[],this.algorithm=i,this.renderer=o,this.onClusterClick=l,n&&this.setMap(n)}addMarker(t,n){this.markers.includes(t)||(this.markers.push(t),n||this.render())}addMarkers(t,n){t.forEach(r=>{this.addMarker(r,!0)}),n||this.render()}removeMarker(t,n){var r=this.markers.indexOf(t);return r===-1?!1:(sn.setMap(t,null),this.markers.splice(r,1),n||this.render(),!0)}removeMarkers(t,n){var r=!1;return t.forEach(s=>{r=this.removeMarker(s,!0)||r}),r&&!n&&this.render(),r}clearMarkers(t){this.markers.length=0,t||this.render()}render(){var t=this.getMap();if(t instanceof google.maps.Map&&t.getProjection()){google.maps.event.trigger(this,tl.CLUSTERING_BEGIN,this);var{clusters:n,changed:r}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});if(r||r==null){var s=new Set;for(var i of n)i.markers.length==1&&s.add(i.markers[0]);var o=[];for(var l of this.clusters)l.marker!=null&&(l.markers.length==1?s.has(l.marker)||sn.setMap(l.marker,null):o.push(l.marker));this.clusters=n,this.renderClusters(),requestAnimationFrame(()=>o.forEach(c=>sn.setMap(c,null)))}google.maps.event.trigger(this,tl.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(t=>sn.setMap(t,null)),this.clusters.forEach(t=>t.delete()),this.clusters=[]}renderClusters(){var t=new N$(this.markers,this.clusters),n=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,t,n),r.markers.forEach(s=>sn.setMap(s,null)),this.onClusterClick&&r.marker.addListener("click",s=>{google.maps.event.trigger(this,tl.CLUSTER_CLICK,r),this.onClusterClick(s,r,n)})),sn.setMap(r.marker,n)})}}function gw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function vw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function R$(e){var t=CV(),[n,r]=u.useState(null);return u.useEffect(()=>{if(t&&n===null){var s=new M$(vw(vw({},e),{},{map:t}));r(s)}},[t]),n}function A$(e){var{children:t,options:n}=e,r=R$(n);return r!==null?t(r):null}u.memo(A$);var xw={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},yw={options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},zIndex(e,t){e.setZIndex(t)}};function O$(e){var{children:t,anchor:n,options:r,position:s,zIndex:i,onCloseClick:o,onDomReady:l,onContentChanged:c,onPositionChanged:d,onZindexChanged:f,onLoad:h,onUnmount:p}=e,m=u.useContext(je),[g,v]=u.useState(null),[x,b]=u.useState(null),[y,w]=u.useState(null),[S,k]=u.useState(null),[C,j]=u.useState(null),[E,L]=u.useState(null),N=u.useRef(null);return u.useEffect(()=>{g!==null&&(g.close(),n?g.open(m,n):g.getPosition()&&g.open(m))},[m,g,n]),u.useEffect(()=>{r&&g!==null&&g.setOptions(r)},[g,r]),u.useEffect(()=>{s&&g!==null&&g.setPosition(s)},[s]),u.useEffect(()=>{typeof i=="number"&&g!==null&&g.setZIndex(i)},[i]),u.useEffect(()=>{g&&o&&(x!==null&&google.maps.event.removeListener(x),b(google.maps.event.addListener(g,"closeclick",o)))},[o]),u.useEffect(()=>{g&&l&&(y!==null&&google.maps.event.removeListener(y),w(google.maps.event.addListener(g,"domready",l)))},[l]),u.useEffect(()=>{g&&c&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(g,"content_changed",c)))},[c]),u.useEffect(()=>{g&&d&&(C!==null&&google.maps.event.removeListener(C),j(google.maps.event.addListener(g,"position_changed",d)))},[d]),u.useEffect(()=>{g&&f&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(g,"zindex_changed",f)))},[f]),u.useEffect(()=>{var R=new google.maps.InfoWindow(r);return v(R),N.current=document.createElement("div"),o&&b(google.maps.event.addListener(R,"closeclick",o)),l&&w(google.maps.event.addListener(R,"domready",l)),c&&k(google.maps.event.addListener(R,"content_changed",c)),d&&j(google.maps.event.addListener(R,"position_changed",d)),f&&L(google.maps.event.addListener(R,"zindex_changed",f)),R.setContent(N.current),s&&R.setPosition(s),i&&R.setZIndex(i),n?R.open(m,n):R.getPosition()?R.open(m):dt(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."),h&&h(R),()=>{x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),y&&google.maps.event.removeListener(y),C&&google.maps.event.removeListener(C),E&&google.maps.event.removeListener(E),p&&p(R),R.close()}},[]),N.current?pn.createPortal(u.Children.only(t),N.current):null}u.memo(O$);class I$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"containerElement",null),U(this,"state",{infoWindow:null}),U(this,"open",(t,n)=>{n?t.open(this.context,n):t.getPosition()?t.open(this.context):dt(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")}),U(this,"setInfoWindowCallback",()=>{this.state.infoWindow!==null&&this.containerElement!==null&&(this.state.infoWindow.setContent(this.containerElement),this.open(this.state.infoWindow,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoWindow))})}componentDidMount(){var t=new google.maps.InfoWindow(this.props.options);this.containerElement=document.createElement("div"),this.registeredEvents=Ne({updaterMap:yw,eventMap:xw,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({infoWindow:t}),this.setInfoWindowCallback)}componentDidUpdate(t){this.state.infoWindow!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:yw,eventMap:xw,prevProps:t,nextProps:this.props,instance:this.state.infoWindow}))}componentWillUnmount(){this.state.infoWindow!==null&&(Le(this.registeredEvents),this.props.onUnmount&&this.props.onUnmount(this.state.infoWindow),this.state.infoWindow.close())}render(){return this.containerElement?pn.createPortal(u.Children.only(this.props.children),this.containerElement):null}}U(I$,"contextType",je);function bw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function bd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?bw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var ww={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Sw={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},visible(e,t){e.setVisible(t)}},D$={};function _$(e){var{options:t,draggable:n,editable:r,visible:s,path:i,onDblClick:o,onDragEnd:l,onDragStart:c,onMouseDown:d,onMouseMove:f,onMouseOut:h,onMouseOver:p,onMouseUp:m,onRightClick:g,onClick:v,onDrag:x,onLoad:b,onUnmount:y}=e,w=u.useContext(je),[S,k]=u.useState(null),[C,j]=u.useState(null),[E,L]=u.useState(null),[N,R]=u.useState(null),[D,F]=u.useState(null),[_,z]=u.useState(null),[A,G]=u.useState(null),[T,O]=u.useState(null),[I,V]=u.useState(null),[Z,K]=u.useState(null),[P,M]=u.useState(null),[se,W]=u.useState(null);return u.useEffect(()=>{S!==null&&S.setMap(w)},[w]),u.useEffect(()=>{typeof t<"u"&&S!==null&&S.setOptions(t)},[S,t]),u.useEffect(()=>{typeof n<"u"&&S!==null&&S.setDraggable(n)},[S,n]),u.useEffect(()=>{typeof r<"u"&&S!==null&&S.setEditable(r)},[S,r]),u.useEffect(()=>{typeof s<"u"&&S!==null&&S.setVisible(s)},[S,s]),u.useEffect(()=>{typeof i<"u"&&S!==null&&S.setPath(i)},[S,i]),u.useEffect(()=>{S&&o&&(C!==null&&google.maps.event.removeListener(C),j(google.maps.event.addListener(S,"dblclick",o)))},[o]),u.useEffect(()=>{S&&l&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(S,"dragend",l)))},[l]),u.useEffect(()=>{S&&c&&(N!==null&&google.maps.event.removeListener(N),R(google.maps.event.addListener(S,"dragstart",c)))},[c]),u.useEffect(()=>{S&&d&&(D!==null&&google.maps.event.removeListener(D),F(google.maps.event.addListener(S,"mousedown",d)))},[d]),u.useEffect(()=>{S&&f&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(S,"mousemove",f)))},[f]),u.useEffect(()=>{S&&h&&(A!==null&&google.maps.event.removeListener(A),G(google.maps.event.addListener(S,"mouseout",h)))},[h]),u.useEffect(()=>{S&&p&&(T!==null&&google.maps.event.removeListener(T),O(google.maps.event.addListener(S,"mouseover",p)))},[p]),u.useEffect(()=>{S&&m&&(I!==null&&google.maps.event.removeListener(I),V(google.maps.event.addListener(S,"mouseup",m)))},[m]),u.useEffect(()=>{S&&g&&(Z!==null&&google.maps.event.removeListener(Z),K(google.maps.event.addListener(S,"rightclick",g)))},[g]),u.useEffect(()=>{S&&v&&(P!==null&&google.maps.event.removeListener(P),M(google.maps.event.addListener(S,"click",v)))},[v]),u.useEffect(()=>{S&&x&&(se!==null&&google.maps.event.removeListener(se),W(google.maps.event.addListener(S,"drag",x)))},[x]),u.useEffect(()=>{var te=new google.maps.Polyline(bd(bd({},t||D$),{},{map:w}));return i&&te.setPath(i),typeof s<"u"&&te.setVisible(s),typeof r<"u"&&te.setEditable(r),typeof n<"u"&&te.setDraggable(n),o&&j(google.maps.event.addListener(te,"dblclick",o)),l&&L(google.maps.event.addListener(te,"dragend",l)),c&&R(google.maps.event.addListener(te,"dragstart",c)),d&&F(google.maps.event.addListener(te,"mousedown",d)),f&&z(google.maps.event.addListener(te,"mousemove",f)),h&&G(google.maps.event.addListener(te,"mouseout",h)),p&&O(google.maps.event.addListener(te,"mouseover",p)),m&&V(google.maps.event.addListener(te,"mouseup",m)),g&&K(google.maps.event.addListener(te,"rightclick",g)),v&&M(google.maps.event.addListener(te,"click",v)),x&&W(google.maps.event.addListener(te,"drag",x)),k(te),b&&b(te),()=>{C!==null&&google.maps.event.removeListener(C),E!==null&&google.maps.event.removeListener(E),N!==null&&google.maps.event.removeListener(N),D!==null&&google.maps.event.removeListener(D),_!==null&&google.maps.event.removeListener(_),A!==null&&google.maps.event.removeListener(A),T!==null&&google.maps.event.removeListener(T),I!==null&&google.maps.event.removeListener(I),Z!==null&&google.maps.event.removeListener(Z),P!==null&&google.maps.event.removeListener(P),y&&y(te),te.setMap(null)}},[]),null}u.memo(_$);class F$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{polyline:null}),U(this,"setPolylineCallback",()=>{this.state.polyline!==null&&this.props.onLoad&&this.props.onLoad(this.state.polyline)})}componentDidMount(){var t=new google.maps.Polyline(bd(bd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:Sw,eventMap:ww,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{polyline:t}},this.setPolylineCallback)}componentDidUpdate(t){this.state.polyline!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Sw,eventMap:ww,prevProps:t,nextProps:this.props,instance:this.state.polyline}))}componentWillUnmount(){this.state.polyline!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),Le(this.registeredEvents),this.state.polyline.setMap(null))}render(){return null}}U(F$,"contextType",je);function kw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Cw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var jw={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Ew={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},paths(e,t){e.setPaths(t)},visible(e,t){e.setVisible(t)}};function z$(e){var{options:t,draggable:n,editable:r,visible:s,path:i,paths:o,onDblClick:l,onDragEnd:c,onDragStart:d,onMouseDown:f,onMouseMove:h,onMouseOut:p,onMouseOver:m,onMouseUp:g,onRightClick:v,onClick:x,onDrag:b,onLoad:y,onUnmount:w,onEdit:S}=e,k=u.useContext(je),[C,j]=u.useState(null),[E,L]=u.useState(null),[N,R]=u.useState(null),[D,F]=u.useState(null),[_,z]=u.useState(null),[A,G]=u.useState(null),[T,O]=u.useState(null),[I,V]=u.useState(null),[Z,K]=u.useState(null),[P,M]=u.useState(null),[se,W]=u.useState(null),[te,de]=u.useState(null);return u.useEffect(()=>{C!==null&&C.setMap(k)},[k]),u.useEffect(()=>{typeof t<"u"&&C!==null&&C.setOptions(t)},[C,t]),u.useEffect(()=>{typeof n<"u"&&C!==null&&C.setDraggable(n)},[C,n]),u.useEffect(()=>{typeof r<"u"&&C!==null&&C.setEditable(r)},[C,r]),u.useEffect(()=>{typeof s<"u"&&C!==null&&C.setVisible(s)},[C,s]),u.useEffect(()=>{typeof i<"u"&&C!==null&&C.setPath(i)},[C,i]),u.useEffect(()=>{typeof o<"u"&&C!==null&&C.setPaths(o)},[C,o]),u.useEffect(()=>{C&&typeof l=="function"&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(C,"dblclick",l)))},[l]),u.useEffect(()=>{C&&(google.maps.event.addListener(C.getPath(),"insert_at",()=>{S==null||S(C)}),google.maps.event.addListener(C.getPath(),"set_at",()=>{S==null||S(C)}),google.maps.event.addListener(C.getPath(),"remove_at",()=>{S==null||S(C)}))},[C,S]),u.useEffect(()=>{C&&typeof c=="function"&&(N!==null&&google.maps.event.removeListener(N),R(google.maps.event.addListener(C,"dragend",c)))},[c]),u.useEffect(()=>{C&&typeof d=="function"&&(D!==null&&google.maps.event.removeListener(D),F(google.maps.event.addListener(C,"dragstart",d)))},[d]),u.useEffect(()=>{C&&typeof f=="function"&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(C,"mousedown",f)))},[f]),u.useEffect(()=>{C&&typeof h=="function"&&(A!==null&&google.maps.event.removeListener(A),G(google.maps.event.addListener(C,"mousemove",h)))},[h]),u.useEffect(()=>{C&&typeof p=="function"&&(T!==null&&google.maps.event.removeListener(T),O(google.maps.event.addListener(C,"mouseout",p)))},[p]),u.useEffect(()=>{C&&typeof m=="function"&&(I!==null&&google.maps.event.removeListener(I),V(google.maps.event.addListener(C,"mouseover",m)))},[m]),u.useEffect(()=>{C&&typeof g=="function"&&(Z!==null&&google.maps.event.removeListener(Z),K(google.maps.event.addListener(C,"mouseup",g)))},[g]),u.useEffect(()=>{C&&typeof v=="function"&&(P!==null&&google.maps.event.removeListener(P),M(google.maps.event.addListener(C,"rightclick",v)))},[v]),u.useEffect(()=>{C&&typeof x=="function"&&(se!==null&&google.maps.event.removeListener(se),W(google.maps.event.addListener(C,"click",x)))},[x]),u.useEffect(()=>{C&&typeof b=="function"&&(te!==null&&google.maps.event.removeListener(te),de(google.maps.event.addListener(C,"drag",b)))},[b]),u.useEffect(()=>{var Q=new google.maps.Polygon(Cw(Cw({},t),{},{map:k}));return i&&Q.setPath(i),o&&Q.setPaths(o),typeof s<"u"&&Q.setVisible(s),typeof r<"u"&&Q.setEditable(r),typeof n<"u"&&Q.setDraggable(n),l&&L(google.maps.event.addListener(Q,"dblclick",l)),c&&R(google.maps.event.addListener(Q,"dragend",c)),d&&F(google.maps.event.addListener(Q,"dragstart",d)),f&&z(google.maps.event.addListener(Q,"mousedown",f)),h&&G(google.maps.event.addListener(Q,"mousemove",h)),p&&O(google.maps.event.addListener(Q,"mouseout",p)),m&&V(google.maps.event.addListener(Q,"mouseover",m)),g&&K(google.maps.event.addListener(Q,"mouseup",g)),v&&M(google.maps.event.addListener(Q,"rightclick",v)),x&&W(google.maps.event.addListener(Q,"click",x)),b&&de(google.maps.event.addListener(Q,"drag",b)),j(Q),y&&y(Q),()=>{E!==null&&google.maps.event.removeListener(E),N!==null&&google.maps.event.removeListener(N),D!==null&&google.maps.event.removeListener(D),_!==null&&google.maps.event.removeListener(_),A!==null&&google.maps.event.removeListener(A),T!==null&&google.maps.event.removeListener(T),I!==null&&google.maps.event.removeListener(I),Z!==null&&google.maps.event.removeListener(Z),P!==null&&google.maps.event.removeListener(P),se!==null&&google.maps.event.removeListener(se),w&&w(Q),Q.setMap(null)}},[]),null}u.memo(z$);class B$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[])}componentDidMount(){var t=this.props.options||{};this.polygon=new google.maps.Polygon(t),this.polygon.setMap(this.context),this.registeredEvents=Ne({updaterMap:Ew,eventMap:jw,prevProps:{},nextProps:this.props,instance:this.polygon}),this.props.onLoad&&this.props.onLoad(this.polygon)}componentDidUpdate(t){this.polygon&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Ew,eventMap:jw,prevProps:t,nextProps:this.props,instance:this.polygon}))}componentWillUnmount(){this.polygon&&(this.props.onUnmount&&this.props.onUnmount(this.polygon),Le(this.registeredEvents),this.polygon&&this.polygon.setMap(null))}render(){return null}}U(B$,"contextType",je);function Nw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function wd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Lw={onBoundsChanged:"bounds_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Pw={bounds(e,t){e.setBounds(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},visible(e,t){e.setVisible(t)}};function V$(e){var{options:t,bounds:n,draggable:r,editable:s,visible:i,onDblClick:o,onDragEnd:l,onDragStart:c,onMouseDown:d,onMouseMove:f,onMouseOut:h,onMouseOver:p,onMouseUp:m,onRightClick:g,onClick:v,onDrag:x,onBoundsChanged:b,onLoad:y,onUnmount:w}=e,S=u.useContext(je),[k,C]=u.useState(null),[j,E]=u.useState(null),[L,N]=u.useState(null),[R,D]=u.useState(null),[F,_]=u.useState(null),[z,A]=u.useState(null),[G,T]=u.useState(null),[O,I]=u.useState(null),[V,Z]=u.useState(null),[K,P]=u.useState(null),[M,se]=u.useState(null),[W,te]=u.useState(null),[de,Q]=u.useState(null);return u.useEffect(()=>{k!==null&&k.setMap(S)},[S]),u.useEffect(()=>{typeof t<"u"&&k!==null&&k.setOptions(t)},[k,t]),u.useEffect(()=>{typeof r<"u"&&k!==null&&k.setDraggable(r)},[k,r]),u.useEffect(()=>{typeof s<"u"&&k!==null&&k.setEditable(s)},[k,s]),u.useEffect(()=>{typeof i<"u"&&k!==null&&k.setVisible(i)},[k,i]),u.useEffect(()=>{typeof n<"u"&&k!==null&&k.setBounds(n)},[k,n]),u.useEffect(()=>{k&&o&&(j!==null&&google.maps.event.removeListener(j),E(google.maps.event.addListener(k,"dblclick",o)))},[o]),u.useEffect(()=>{k&&l&&(L!==null&&google.maps.event.removeListener(L),N(google.maps.event.addListener(k,"dragend",l)))},[l]),u.useEffect(()=>{k&&c&&(R!==null&&google.maps.event.removeListener(R),D(google.maps.event.addListener(k,"dragstart",c)))},[c]),u.useEffect(()=>{k&&d&&(F!==null&&google.maps.event.removeListener(F),_(google.maps.event.addListener(k,"mousedown",d)))},[d]),u.useEffect(()=>{k&&f&&(z!==null&&google.maps.event.removeListener(z),A(google.maps.event.addListener(k,"mousemove",f)))},[f]),u.useEffect(()=>{k&&h&&(G!==null&&google.maps.event.removeListener(G),T(google.maps.event.addListener(k,"mouseout",h)))},[h]),u.useEffect(()=>{k&&p&&(O!==null&&google.maps.event.removeListener(O),I(google.maps.event.addListener(k,"mouseover",p)))},[p]),u.useEffect(()=>{k&&m&&(V!==null&&google.maps.event.removeListener(V),Z(google.maps.event.addListener(k,"mouseup",m)))},[m]),u.useEffect(()=>{k&&g&&(K!==null&&google.maps.event.removeListener(K),P(google.maps.event.addListener(k,"rightclick",g)))},[g]),u.useEffect(()=>{k&&v&&(M!==null&&google.maps.event.removeListener(M),se(google.maps.event.addListener(k,"click",v)))},[v]),u.useEffect(()=>{k&&x&&(W!==null&&google.maps.event.removeListener(W),te(google.maps.event.addListener(k,"drag",x)))},[x]),u.useEffect(()=>{k&&b&&(de!==null&&google.maps.event.removeListener(de),Q(google.maps.event.addListener(k,"bounds_changed",b)))},[b]),u.useEffect(()=>{var ie=new google.maps.Rectangle(wd(wd({},t),{},{map:S}));return typeof i<"u"&&ie.setVisible(i),typeof s<"u"&&ie.setEditable(s),typeof r<"u"&&ie.setDraggable(r),typeof n<"u"&&ie.setBounds(n),o&&E(google.maps.event.addListener(ie,"dblclick",o)),l&&N(google.maps.event.addListener(ie,"dragend",l)),c&&D(google.maps.event.addListener(ie,"dragstart",c)),d&&_(google.maps.event.addListener(ie,"mousedown",d)),f&&A(google.maps.event.addListener(ie,"mousemove",f)),h&&T(google.maps.event.addListener(ie,"mouseout",h)),p&&I(google.maps.event.addListener(ie,"mouseover",p)),m&&Z(google.maps.event.addListener(ie,"mouseup",m)),g&&P(google.maps.event.addListener(ie,"rightclick",g)),v&&se(google.maps.event.addListener(ie,"click",v)),x&&te(google.maps.event.addListener(ie,"drag",x)),b&&Q(google.maps.event.addListener(ie,"bounds_changed",b)),C(ie),y&&y(ie),()=>{j!==null&&google.maps.event.removeListener(j),L!==null&&google.maps.event.removeListener(L),R!==null&&google.maps.event.removeListener(R),F!==null&&google.maps.event.removeListener(F),z!==null&&google.maps.event.removeListener(z),G!==null&&google.maps.event.removeListener(G),O!==null&&google.maps.event.removeListener(O),V!==null&&google.maps.event.removeListener(V),K!==null&&google.maps.event.removeListener(K),M!==null&&google.maps.event.removeListener(M),W!==null&&google.maps.event.removeListener(W),de!==null&&google.maps.event.removeListener(de),w&&w(ie),ie.setMap(null)}},[]),null}u.memo(V$);class $$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{rectangle:null}),U(this,"setRectangleCallback",()=>{this.state.rectangle!==null&&this.props.onLoad&&this.props.onLoad(this.state.rectangle)})}componentDidMount(){var t=new google.maps.Rectangle(wd(wd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:Pw,eventMap:Lw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{rectangle:t}},this.setRectangleCallback)}componentDidUpdate(t){this.state.rectangle!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Pw,eventMap:Lw,prevProps:t,nextProps:this.props,instance:this.state.rectangle}))}componentWillUnmount(){this.state.rectangle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),Le(this.registeredEvents),this.state.rectangle.setMap(null))}render(){return null}}U($$,"contextType",je);function Tw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Sd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Mw={onCenterChanged:"center_changed",onRadiusChanged:"radius_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},Rw={center(e,t){e.setCenter(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},radius(e,t){e.setRadius(t)},visible(e,t){e.setVisible(t)}},U$={};function H$(e){var{options:t,center:n,radius:r,draggable:s,editable:i,visible:o,onDblClick:l,onDragEnd:c,onDragStart:d,onMouseDown:f,onMouseMove:h,onMouseOut:p,onMouseOver:m,onMouseUp:g,onRightClick:v,onClick:x,onDrag:b,onCenterChanged:y,onRadiusChanged:w,onLoad:S,onUnmount:k}=e,C=u.useContext(je),[j,E]=u.useState(null),[L,N]=u.useState(null),[R,D]=u.useState(null),[F,_]=u.useState(null),[z,A]=u.useState(null),[G,T]=u.useState(null),[O,I]=u.useState(null),[V,Z]=u.useState(null),[K,P]=u.useState(null),[M,se]=u.useState(null),[W,te]=u.useState(null),[de,Q]=u.useState(null),[ie,me]=u.useState(null),[J,q]=u.useState(null);return u.useEffect(()=>{j!==null&&j.setMap(C)},[C]),u.useEffect(()=>{typeof t<"u"&&j!==null&&j.setOptions(t)},[j,t]),u.useEffect(()=>{typeof s<"u"&&j!==null&&j.setDraggable(s)},[j,s]),u.useEffect(()=>{typeof i<"u"&&j!==null&&j.setEditable(i)},[j,i]),u.useEffect(()=>{typeof o<"u"&&j!==null&&j.setVisible(o)},[j,o]),u.useEffect(()=>{typeof r=="number"&&j!==null&&j.setRadius(r)},[j,r]),u.useEffect(()=>{typeof n<"u"&&j!==null&&j.setCenter(n)},[j,n]),u.useEffect(()=>{j&&l&&(L!==null&&google.maps.event.removeListener(L),N(google.maps.event.addListener(j,"dblclick",l)))},[l]),u.useEffect(()=>{j&&c&&(R!==null&&google.maps.event.removeListener(R),D(google.maps.event.addListener(j,"dragend",c)))},[c]),u.useEffect(()=>{j&&d&&(F!==null&&google.maps.event.removeListener(F),_(google.maps.event.addListener(j,"dragstart",d)))},[d]),u.useEffect(()=>{j&&f&&(z!==null&&google.maps.event.removeListener(z),A(google.maps.event.addListener(j,"mousedown",f)))},[f]),u.useEffect(()=>{j&&h&&(G!==null&&google.maps.event.removeListener(G),T(google.maps.event.addListener(j,"mousemove",h)))},[h]),u.useEffect(()=>{j&&p&&(O!==null&&google.maps.event.removeListener(O),I(google.maps.event.addListener(j,"mouseout",p)))},[p]),u.useEffect(()=>{j&&m&&(V!==null&&google.maps.event.removeListener(V),Z(google.maps.event.addListener(j,"mouseover",m)))},[m]),u.useEffect(()=>{j&&g&&(K!==null&&google.maps.event.removeListener(K),P(google.maps.event.addListener(j,"mouseup",g)))},[g]),u.useEffect(()=>{j&&v&&(M!==null&&google.maps.event.removeListener(M),se(google.maps.event.addListener(j,"rightclick",v)))},[v]),u.useEffect(()=>{j&&x&&(W!==null&&google.maps.event.removeListener(W),te(google.maps.event.addListener(j,"click",x)))},[x]),u.useEffect(()=>{j&&b&&(de!==null&&google.maps.event.removeListener(de),Q(google.maps.event.addListener(j,"drag",b)))},[b]),u.useEffect(()=>{j&&y&&(ie!==null&&google.maps.event.removeListener(ie),me(google.maps.event.addListener(j,"center_changed",y)))},[x]),u.useEffect(()=>{j&&w&&(J!==null&&google.maps.event.removeListener(J),q(google.maps.event.addListener(j,"radius_changed",w)))},[w]),u.useEffect(()=>{var $=new google.maps.Circle(Sd(Sd({},t||U$),{},{map:C}));return typeof r=="number"&&$.setRadius(r),typeof n<"u"&&$.setCenter(n),typeof r=="number"&&$.setRadius(r),typeof o<"u"&&$.setVisible(o),typeof i<"u"&&$.setEditable(i),typeof s<"u"&&$.setDraggable(s),l&&N(google.maps.event.addListener($,"dblclick",l)),c&&D(google.maps.event.addListener($,"dragend",c)),d&&_(google.maps.event.addListener($,"dragstart",d)),f&&A(google.maps.event.addListener($,"mousedown",f)),h&&T(google.maps.event.addListener($,"mousemove",h)),p&&I(google.maps.event.addListener($,"mouseout",p)),m&&Z(google.maps.event.addListener($,"mouseover",m)),g&&P(google.maps.event.addListener($,"mouseup",g)),v&&se(google.maps.event.addListener($,"rightclick",v)),x&&te(google.maps.event.addListener($,"click",x)),b&&Q(google.maps.event.addListener($,"drag",b)),y&&me(google.maps.event.addListener($,"center_changed",y)),w&&q(google.maps.event.addListener($,"radius_changed",w)),E($),S&&S($),()=>{L!==null&&google.maps.event.removeListener(L),R!==null&&google.maps.event.removeListener(R),F!==null&&google.maps.event.removeListener(F),z!==null&&google.maps.event.removeListener(z),G!==null&&google.maps.event.removeListener(G),O!==null&&google.maps.event.removeListener(O),V!==null&&google.maps.event.removeListener(V),K!==null&&google.maps.event.removeListener(K),M!==null&&google.maps.event.removeListener(M),W!==null&&google.maps.event.removeListener(W),ie!==null&&google.maps.event.removeListener(ie),J!==null&&google.maps.event.removeListener(J),k&&k($),$.setMap(null)}},[]),null}u.memo(H$);class W$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{circle:null}),U(this,"setCircleCallback",()=>{this.state.circle!==null&&this.props.onLoad&&this.props.onLoad(this.state.circle)})}componentDidMount(){var t=new google.maps.Circle(Sd(Sd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:Rw,eventMap:Mw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{circle:t}},this.setCircleCallback)}componentDidUpdate(t){this.state.circle!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Rw,eventMap:Mw,prevProps:t,nextProps:this.props,instance:this.state.circle}))}componentWillUnmount(){if(this.state.circle!==null){var t;this.props.onUnmount&&this.props.onUnmount(this.state.circle),Le(this.registeredEvents),(t=this.state.circle)===null||t===void 0||t.setMap(null)}}render(){return null}}U(W$,"contextType",je);function Aw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function kd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Aw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Aw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Ow={onClick:"click",onDblClick:"dblclick",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick",onAddFeature:"addfeature",onRemoveFeature:"removefeature",onRemoveProperty:"removeproperty",onSetGeometry:"setgeometry",onSetProperty:"setproperty"},Iw={add(e,t){e.add(t)},addgeojson(e,t,n){e.addGeoJson(t,n)},contains(e,t){e.contains(t)},foreach(e,t){e.forEach(t)},loadgeojson(e,t,n,r){e.loadGeoJson(t,n,r)},overridestyle(e,t,n){e.overrideStyle(t,n)},remove(e,t){e.remove(t)},revertstyle(e,t){e.revertStyle(t)},controlposition(e,t){e.setControlPosition(t)},controls(e,t){e.setControls(t)},drawingmode(e,t){e.setDrawingMode(t)},map(e,t){e.setMap(t)},style(e,t){e.setStyle(t)},togeojson(e,t){e.toGeoJson(t)}};function K$(e){var{options:t,onClick:n,onDblClick:r,onMouseDown:s,onMouseMove:i,onMouseOut:o,onMouseOver:l,onMouseUp:c,onRightClick:d,onAddFeature:f,onRemoveFeature:h,onRemoveProperty:p,onSetGeometry:m,onSetProperty:g,onLoad:v,onUnmount:x}=e,b=u.useContext(je),[y,w]=u.useState(null),[S,k]=u.useState(null),[C,j]=u.useState(null),[E,L]=u.useState(null),[N,R]=u.useState(null),[D,F]=u.useState(null),[_,z]=u.useState(null),[A,G]=u.useState(null),[T,O]=u.useState(null),[I,V]=u.useState(null),[Z,K]=u.useState(null),[P,M]=u.useState(null),[se,W]=u.useState(null),[te,de]=u.useState(null);return u.useEffect(()=>{y!==null&&y.setMap(b)},[b]),u.useEffect(()=>{y&&r&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(y,"dblclick",r)))},[r]),u.useEffect(()=>{y&&s&&(C!==null&&google.maps.event.removeListener(C),j(google.maps.event.addListener(y,"mousedown",s)))},[s]),u.useEffect(()=>{y&&i&&(E!==null&&google.maps.event.removeListener(E),L(google.maps.event.addListener(y,"mousemove",i)))},[i]),u.useEffect(()=>{y&&o&&(N!==null&&google.maps.event.removeListener(N),R(google.maps.event.addListener(y,"mouseout",o)))},[o]),u.useEffect(()=>{y&&l&&(D!==null&&google.maps.event.removeListener(D),F(google.maps.event.addListener(y,"mouseover",l)))},[l]),u.useEffect(()=>{y&&c&&(_!==null&&google.maps.event.removeListener(_),z(google.maps.event.addListener(y,"mouseup",c)))},[c]),u.useEffect(()=>{y&&d&&(A!==null&&google.maps.event.removeListener(A),G(google.maps.event.addListener(y,"rightclick",d)))},[d]),u.useEffect(()=>{y&&n&&(T!==null&&google.maps.event.removeListener(T),O(google.maps.event.addListener(y,"click",n)))},[n]),u.useEffect(()=>{y&&f&&(I!==null&&google.maps.event.removeListener(I),V(google.maps.event.addListener(y,"addfeature",f)))},[f]),u.useEffect(()=>{y&&h&&(Z!==null&&google.maps.event.removeListener(Z),K(google.maps.event.addListener(y,"removefeature",h)))},[h]),u.useEffect(()=>{y&&p&&(P!==null&&google.maps.event.removeListener(P),M(google.maps.event.addListener(y,"removeproperty",p)))},[p]),u.useEffect(()=>{y&&m&&(se!==null&&google.maps.event.removeListener(se),W(google.maps.event.addListener(y,"setgeometry",m)))},[m]),u.useEffect(()=>{y&&g&&(te!==null&&google.maps.event.removeListener(te),de(google.maps.event.addListener(y,"setproperty",g)))},[g]),u.useEffect(()=>{if(b!==null){var Q=new google.maps.Data(kd(kd({},t),{},{map:b}));r&&k(google.maps.event.addListener(Q,"dblclick",r)),s&&j(google.maps.event.addListener(Q,"mousedown",s)),i&&L(google.maps.event.addListener(Q,"mousemove",i)),o&&R(google.maps.event.addListener(Q,"mouseout",o)),l&&F(google.maps.event.addListener(Q,"mouseover",l)),c&&z(google.maps.event.addListener(Q,"mouseup",c)),d&&G(google.maps.event.addListener(Q,"rightclick",d)),n&&O(google.maps.event.addListener(Q,"click",n)),f&&V(google.maps.event.addListener(Q,"addfeature",f)),h&&K(google.maps.event.addListener(Q,"removefeature",h)),p&&M(google.maps.event.addListener(Q,"removeproperty",p)),m&&W(google.maps.event.addListener(Q,"setgeometry",m)),g&&de(google.maps.event.addListener(Q,"setproperty",g)),w(Q),v&&v(Q)}return()=>{y&&(S!==null&&google.maps.event.removeListener(S),C!==null&&google.maps.event.removeListener(C),E!==null&&google.maps.event.removeListener(E),N!==null&&google.maps.event.removeListener(N),D!==null&&google.maps.event.removeListener(D),_!==null&&google.maps.event.removeListener(_),A!==null&&google.maps.event.removeListener(A),T!==null&&google.maps.event.removeListener(T),I!==null&&google.maps.event.removeListener(I),Z!==null&&google.maps.event.removeListener(Z),P!==null&&google.maps.event.removeListener(P),se!==null&&google.maps.event.removeListener(se),te!==null&&google.maps.event.removeListener(te),x&&x(y),y.setMap(null))}},[]),null}u.memo(K$);class G$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{data:null}),U(this,"setDataCallback",()=>{this.state.data!==null&&this.props.onLoad&&this.props.onLoad(this.state.data)})}componentDidMount(){if(this.context!==null){var t=new google.maps.Data(kd(kd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:Iw,eventMap:Ow,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({data:t}),this.setDataCallback)}}componentDidUpdate(t){this.state.data!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Iw,eventMap:Ow,prevProps:t,nextProps:this.props,instance:this.state.data}))}componentWillUnmount(){this.state.data!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),Le(this.registeredEvents),this.state.data&&this.state.data.setMap(null))}render(){return null}}U(G$,"contextType",je);function Dw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function _w(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Dw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Fw={onClick:"click",onDefaultViewportChanged:"defaultviewport_changed",onStatusChanged:"status_changed"},zw={options(e,t){e.setOptions(t)},url(e,t){e.setUrl(t)},zIndex(e,t){e.setZIndex(t)}};class q$ extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{kmlLayer:null}),U(this,"setKmlLayerCallback",()=>{this.state.kmlLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.kmlLayer)})}componentDidMount(){var t=new google.maps.KmlLayer(_w(_w({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:zw,eventMap:Fw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{kmlLayer:t}},this.setKmlLayerCallback)}componentDidUpdate(t){this.state.kmlLayer!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:zw,eventMap:Fw,prevProps:t,nextProps:this.props,instance:this.state.kmlLayer}))}componentWillUnmount(){this.state.kmlLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),Le(this.registeredEvents),this.state.kmlLayer.setMap(null))}render(){return null}}U(q$,"contextType",je);function xL(e,t){return typeof t=="function"?t(e.offsetWidth,e.offsetHeight):{x:0,y:0}}function Z$(e,t){return new t(e.lat,e.lng)}function Y$(e,t){return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))}function X$(e,t,n){return e instanceof t?e:n(e,t)}function Q$(e,t,n){return e instanceof t?e:n(e,t)}function J$(e,t,n){var r=e&&e.fromLatLngToDivPixel(n.getNorthEast()),s=e&&e.fromLatLngToDivPixel(n.getSouthWest());return r&&s?{left:"".concat(s.x+t.x,"px"),top:"".concat(r.y+t.y,"px"),width:"".concat(r.x-s.x-t.x,"px"),height:"".concat(s.y-r.y-t.y,"px")}:{left:"-9999px",top:"-9999px"}}function eU(e,t,n){var r=e&&e.fromLatLngToDivPixel(n);if(r){var{x:s,y:i}=r;return{left:"".concat(s+t.x,"px"),top:"".concat(i+t.y,"px")}}return{left:"-9999px",top:"-9999px"}}function yL(e,t,n,r){return n!==void 0?J$(e,t,Q$(n,google.maps.LatLngBounds,Y$)):eU(e,t,X$(r,google.maps.LatLng,Z$))}function tU(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.height&&e.height===t.height}function Bw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function nU(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Bw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Bw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function rU(e,t,n,r,s){class i extends google.maps.OverlayView{constructor(l,c,d,f){super(),this.container=l,this.pane=c,this.position=d,this.bounds=f}onAdd(){var l,c=(l=this.getPanes())===null||l===void 0?void 0:l[this.pane];c==null||c.appendChild(this.container)}draw(){var l=this.getProjection(),c=nU({},this.container?xL(this.container,s):{x:0,y:0}),d=yL(l,c,this.bounds,this.position);for(var[f,h]of Object.entries(d))this.container.style[f]=h}onRemove(){this.container.parentNode!==null&&this.container.parentNode.removeChild(this.container)}}return new i(e,t,n,r)}function Vw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function sU(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Vw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $w(e){if(!e)return"";var t=e instanceof google.maps.LatLng?e:new google.maps.LatLng(e.lat,e.lng);return t+""}function Uw(e){if(!e)return"";var t=e instanceof google.maps.LatLngBounds?e:new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,e.west));return t+""}function iU(e){var{position:t,bounds:n,mapPaneName:r,zIndex:s,onLoad:i,onUnmount:o,getPixelPositionOffset:l,children:c}=e,d=u.useContext(je),f=u.useMemo(()=>{var p=document.createElement("div");return p.style.position="absolute",p},[]),h=u.useMemo(()=>rU(f,r,t,n,l),[f,r,t,n]);return u.useEffect(()=>(i==null||i(h),h==null||h.setMap(d),()=>{o==null||o(h),h==null||h.setMap(null)}),[d,h]),u.useEffect(()=>{f.style.zIndex="".concat(s)},[s,f]),pn.createPortal(c,f)}u.memo(iU);class ca extends u.PureComponent{constructor(t){super(t),U(this,"state",{paneEl:null,containerStyle:{position:"absolute"}}),U(this,"updatePane",()=>{var r=this.props.mapPaneName,s=this.overlayView.getPanes();dt(!!r,"OverlayView requires props.mapPaneName but got %s",r),s?this.setState({paneEl:s[r]}):this.setState({paneEl:null})}),U(this,"onAdd",()=>{var r,s;this.updatePane(),(r=(s=this.props).onLoad)===null||r===void 0||r.call(s,this.overlayView)}),U(this,"onPositionElement",()=>{var r=this.overlayView.getProjection(),s=sU({x:0,y:0},this.containerRef.current?xL(this.containerRef.current,this.props.getPixelPositionOffset):{}),i=yL(r,s,this.props.bounds,this.props.position);if(!tU(i,{left:this.state.containerStyle.left,top:this.state.containerStyle.top,width:this.state.containerStyle.width,height:this.state.containerStyle.height})){var o,l,c,d;this.setState({containerStyle:{top:(o=i.top)!==null&&o!==void 0?o:0,left:(l=i.left)!==null&&l!==void 0?l:0,width:(c=i.width)!==null&&c!==void 0?c:0,height:(d=i.height)!==null&&d!==void 0?d:0,position:"absolute"}})}}),U(this,"draw",()=>{this.onPositionElement()}),U(this,"onRemove",()=>{var r,s;this.setState(()=>({paneEl:null})),(r=(s=this.props).onUnmount)===null||r===void 0||r.call(s,this.overlayView)}),this.containerRef=u.createRef();var n=new google.maps.OverlayView;n.onAdd=this.onAdd,n.draw=this.draw,n.onRemove=this.onRemove,this.overlayView=n}componentDidMount(){this.overlayView.setMap(this.context)}componentDidUpdate(t){var n=$w(t.position),r=$w(this.props.position),s=Uw(t.bounds),i=Uw(this.props.bounds);(n!==r||s!==i)&&this.overlayView.draw(),t.mapPaneName!==this.props.mapPaneName&&this.updatePane()}componentWillUnmount(){this.overlayView.setMap(null)}render(){var t=this.state.paneEl;return t?pn.createPortal(a.jsx("div",{ref:this.containerRef,style:this.state.containerStyle,children:u.Children.only(this.props.children)}),t):null}}U(ca,"FLOAT_PANE","floatPane");U(ca,"MAP_PANE","mapPane");U(ca,"MARKER_LAYER","markerLayer");U(ca,"OVERLAY_LAYER","overlayLayer");U(ca,"OVERLAY_MOUSE_TARGET","overlayMouseTarget");U(ca,"contextType",je);function oU(){}function Hw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Ww(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Kw={onDblClick:"dblclick",onClick:"click"},Gw={opacity(e,t){e.setOpacity(t)}};function aU(e){var{url:t,bounds:n,options:r,visible:s}=e,i=u.useContext(je),o=new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east)),l=u.useMemo(()=>new google.maps.GroundOverlay(t,o,r),[]);return u.useEffect(()=>{l!==null&&l.setMap(i)},[i]),u.useEffect(()=>{typeof t<"u"&&l!==null&&(l.set("url",t),l.setMap(i))},[l,t]),u.useEffect(()=>{typeof s<"u"&&l!==null&&l.setOpacity(s?1:0)},[l,s]),u.useEffect(()=>{var c=new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east));typeof n<"u"&&l!==null&&(l.set("bounds",c),l.setMap(i))},[l,n]),null}u.memo(aU);class bL extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{groundOverlay:null}),U(this,"setGroundOverlayCallback",()=>{this.state.groundOverlay!==null&&this.props.onLoad&&this.props.onLoad(this.state.groundOverlay)})}componentDidMount(){dt(!!this.props.url||!!this.props.bounds,"For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");var t=new google.maps.GroundOverlay(this.props.url,this.props.bounds,Ww(Ww({},this.props.options),{},{map:this.context}));this.registeredEvents=Ne({updaterMap:Gw,eventMap:Kw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{groundOverlay:t}},this.setGroundOverlayCallback)}componentDidUpdate(t){this.state.groundOverlay!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Gw,eventMap:Kw,prevProps:t,nextProps:this.props,instance:this.state.groundOverlay}))}componentWillUnmount(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))}render(){return null}}U(bL,"defaultProps",{onLoad:oU});U(bL,"contextType",je);function qw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Cd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?qw(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Zw={},Yw={data(e,t){e.setData(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)}};function lU(e){var{data:t,onLoad:n,onUnmount:r,options:s}=e,i=u.useContext(je),[o,l]=u.useState(null);return u.useEffect(()=>{google.maps.visualization||dt(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} in useJsApiScript? %s',google.maps.visualization)},[]),u.useEffect(()=>{dt(!!t,"data property is required in HeatmapLayer %s",t)},[t]),u.useEffect(()=>{o!==null&&o.setMap(i)},[i]),u.useEffect(()=>{s&&o!==null&&o.setOptions(s)},[o,s]),u.useEffect(()=>{var c=new google.maps.visualization.HeatmapLayer(Cd(Cd({},s),{},{data:t,map:i}));return l(c),n&&n(c),()=>{o!==null&&(r&&r(o),o.setMap(null))}},[]),null}u.memo(lU);class cU extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{heatmapLayer:null}),U(this,"setHeatmapLayerCallback",()=>{this.state.heatmapLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.heatmapLayer)})}componentDidMount(){dt(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} to <LoadScript />? %s',google.maps.visualization),dt(!!this.props.data,"data property is required in HeatmapLayer %s",this.props.data);var t=new google.maps.visualization.HeatmapLayer(Cd(Cd({},this.props.options),{},{data:this.props.data,map:this.context}));this.registeredEvents=Ne({updaterMap:Yw,eventMap:Zw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{heatmapLayer:t}},this.setHeatmapLayerCallback)}componentDidUpdate(t){Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Yw,eventMap:Zw,prevProps:t,nextProps:this.props,instance:this.state.heatmapLayer})}componentWillUnmount(){this.state.heatmapLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),Le(this.registeredEvents),this.state.heatmapLayer.setMap(null))}render(){return null}}U(cU,"contextType",je);var Xw={onCloseClick:"closeclick",onPanoChanged:"pano_changed",onPositionChanged:"position_changed",onPovChanged:"pov_changed",onResize:"resize",onStatusChanged:"status_changed",onVisibleChanged:"visible_changed",onZoomChanged:"zoom_changed"},Qw={register(e,t,n){e.registerPanoProvider(t,n)},links(e,t){e.setLinks(t)},motionTracking(e,t){e.setMotionTracking(t)},options(e,t){e.setOptions(t)},pano(e,t){e.setPano(t)},position(e,t){e.setPosition(t)},pov(e,t){e.setPov(t)},visible(e,t){e.setVisible(t)},zoom(e,t){e.setZoom(t)}};class uU extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{streetViewPanorama:null}),U(this,"setStreetViewPanoramaCallback",()=>{this.state.streetViewPanorama!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewPanorama)})}componentDidMount(){var t,n,r=(t=(n=this.context)===null||n===void 0?void 0:n.getStreetView())!==null&&t!==void 0?t:null;this.registeredEvents=Ne({updaterMap:Qw,eventMap:Xw,prevProps:{},nextProps:this.props,instance:r}),this.setState(()=>({streetViewPanorama:r}),this.setStreetViewPanoramaCallback)}componentDidUpdate(t){this.state.streetViewPanorama!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:Qw,eventMap:Xw,prevProps:t,nextProps:this.props,instance:this.state.streetViewPanorama}))}componentWillUnmount(){this.state.streetViewPanorama!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),Le(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))}render(){return null}}U(uU,"contextType",je);class dU extends u.PureComponent{constructor(){super(...arguments),U(this,"state",{streetViewService:null}),U(this,"setStreetViewServiceCallback",()=>{this.state.streetViewService!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewService)})}componentDidMount(){var t=new google.maps.StreetViewService;this.setState(function(){return{streetViewService:t}},this.setStreetViewServiceCallback)}componentWillUnmount(){this.state.streetViewService!==null&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)}render(){return null}}U(dU,"contextType",je);var Jw={onDirectionsChanged:"directions_changed"},e1={directions(e,t){e.setDirections(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},panel(e,t){e.setPanel(t)},routeIndex(e,t){e.setRouteIndex(t)}};class fU extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"state",{directionsRenderer:null}),U(this,"setDirectionsRendererCallback",()=>{this.state.directionsRenderer!==null&&(this.state.directionsRenderer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.directionsRenderer))})}componentDidMount(){var t=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=Ne({updaterMap:e1,eventMap:Jw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{directionsRenderer:t}},this.setDirectionsRendererCallback)}componentDidUpdate(t){this.state.directionsRenderer!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:e1,eventMap:Jw,prevProps:t,nextProps:this.props,instance:this.state.directionsRenderer}))}componentWillUnmount(){this.state.directionsRenderer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),Le(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))}render(){return null}}U(fU,"contextType",je);var t1={onPlacesChanged:"places_changed"},n1={bounds(e,t){e.setBounds(t)}};class hU extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"containerElement",u.createRef()),U(this,"state",{searchBox:null}),U(this,"setSearchBoxCallback",()=>{this.state.searchBox!==null&&this.props.onLoad&&this.props.onLoad(this.state.searchBox)})}componentDidMount(){if(dt(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places),this.containerElement!==null&&this.containerElement.current!==null){var t=this.containerElement.current.querySelector("input");if(t!==null){var n=new google.maps.places.SearchBox(t,this.props.options);this.registeredEvents=Ne({updaterMap:n1,eventMap:t1,prevProps:{},nextProps:this.props,instance:n}),this.setState(function(){return{searchBox:n}},this.setSearchBoxCallback)}}}componentDidUpdate(t){this.state.searchBox!==null&&(Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:n1,eventMap:t1,prevProps:t,nextProps:this.props,instance:this.state.searchBox}))}componentWillUnmount(){this.state.searchBox!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),Le(this.registeredEvents))}render(){return a.jsx("div",{ref:this.containerElement,children:u.Children.only(this.props.children)})}}U(hU,"contextType",je);var r1={onPlaceChanged:"place_changed"},s1={bounds(e,t){e.setBounds(t)},restrictions(e,t){e.setComponentRestrictions(t)},fields(e,t){e.setFields(t)},options(e,t){e.setOptions(t)},types(e,t){e.setTypes(t)}};class J0 extends u.PureComponent{constructor(){super(...arguments),U(this,"registeredEvents",[]),U(this,"containerElement",u.createRef()),U(this,"state",{autocomplete:null}),U(this,"setAutocompleteCallback",()=>{this.state.autocomplete!==null&&this.props.onLoad&&this.props.onLoad(this.state.autocomplete)})}componentDidMount(){var t;dt(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places);var n=(t=this.containerElement.current)===null||t===void 0?void 0:t.querySelector("input");if(n){var r=new google.maps.places.Autocomplete(n,this.props.options);this.registeredEvents=Ne({updaterMap:s1,eventMap:r1,prevProps:{},nextProps:this.props,instance:r}),this.setState(()=>({autocomplete:r}),this.setAutocompleteCallback)}}componentDidUpdate(t){Le(this.registeredEvents),this.registeredEvents=Ne({updaterMap:s1,eventMap:r1,prevProps:t,nextProps:this.props,instance:this.state.autocomplete})}componentWillUnmount(){this.state.autocomplete!==null&&Le(this.registeredEvents)}render(){return a.jsx("div",{ref:this.containerElement,className:this.props.className,children:u.Children.only(this.props.children)})}}U(J0,"defaultProps",{className:""});U(J0,"contextType",je);const La=rc,nl={getAll:async(e=1,t=100,n=null)=>{const r={page:e,limit:t};return n&&(r.franchiseId=n),(await pe.get(`${La}/stores`,{params:r})).data},create:async e=>(await pe.post(`${La}/stores`,e)).data,update:async(e,t)=>(await pe.patch(`${La}/stores/${e}`,t)).data,changeStatus:async(e,t)=>(await pe.patch(`${La}/stores/${e}/status`,{status:t})).data,hardDelete:async e=>(await pe.delete(`${La}/stores/${e}/hard`)).data},pU=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(!1),s=u.useCallback(async(l=1,c=100,d=null)=>{var f,h;r(!0);try{const p=await nl.getAll(l,c,d),m=p.data||p;t(m.items||m||[])}catch(p){oe({title:"Error",description:((h=(f=p.response)==null?void 0:f.data)==null?void 0:h.message)||"Failed to fetch stores",variant:"destructive"})}finally{r(!1)}},[]);return{stores:e,loading:n,fetchStores:s,changeStoreStatus:async(l,c)=>{var d,f;try{await nl.changeStatus(l,c),t(h=>h.map(p=>p.id===l?{...p,status:c}:p)),oe({title:"Status Updated",description:`Store status set to ${c}`})}catch(h){const p=((f=(d=h.response)==null?void 0:d.data)==null?void 0:f.message)||"Failed to update store status";throw oe({title:"Error",description:p,variant:"destructive"}),new Error(p)}},hardDeleteStore:async l=>{var c,d;try{await nl.hardDelete(l),t(f=>f.filter(h=>h.id!==l)),oe({title:"Store Deleted",description:"Store has been permanently removed"})}catch(f){const h=((d=(c=f.response)==null?void 0:c.data)==null?void 0:d.message)||"Failed to delete store";throw oe({title:"Error",description:h,variant:"destructive"}),new Error(h)}}}},mU=rc,gU="AIzaSyDP6KnwXJ9tyIbT4qAC7XIX3rdmqABnVco",vU=["places"],xU=()=>{const e=Gr(),{isFranchiseAdmin:t,isAdmin:n}=Hs(),{stores:r,loading:s,fetchStores:i,hardDeleteStore:o}=pU(),[l,c]=u.useState(!1),[d,f]=u.useState(!1),[h,p]=u.useState(null),[m,g]=u.useState(!1),[v,x]=u.useState(!1),[b,y]=u.useState(null),[w,S]=u.useState(!1),[k,C]=u.useState(1),[j,E]=u.useState(10),[L,N]=u.useState(!1),[R,D]=u.useState(""),F=s||m,_=u.useRef(null),[z,A]=u.useState({localStoreid:"",name:"",address:"",latitude:33.6844,longitude:73.0479}),{isLoaded:G}=UV({googleMapsApiKey:gU,libraries:vU});u.useEffect(()=>{const q=setTimeout(()=>{N(!0)},300);return()=>clearTimeout(q)},[]),u.useEffect(()=>{l||A({localStoreid:"",name:"",address:"",latitude:33.6844,longitude:73.0479})},[l]);const T=u.useCallback(async(q,$="GET",ae=null)=>{const le=localStorage.getItem("access_token");return Ve({method:$,url:Fi(mU,q),headers:{Authorization:`Bearer ${le}`},data:ae})},[]),O=u.useCallback(async()=>{var q;if(t()){g(!0);try{const $=await T("/franchises/me/franchise");((q=$.data)==null?void 0:q.status)==="success"&&p($.data.data)}catch{Fe.error("Failed to load franchise data")}finally{g(!1)}}},[T,t]);u.useEffect(()=>{i(),O()},[i,O]);const I=q=>{if(!window.google||!(q!=null&&q.latLng))return;const $=q.latLng.lat(),ae=q.latLng.lng();A(De=>({...De,latitude:$,longitude:ae})),new window.google.maps.Geocoder().geocode({location:{lat:$,lng:ae}},(De,Xe)=>{Xe==="OK"&&(De!=null&&De[0])&&A(yr=>({...yr,address:De[0].formatted_address}))})},V=()=>{if(!_.current)return;const q=_.current.getPlace();if(!(q!=null&&q.geometry))return;const $=q.geometry.location.lat(),ae=q.geometry.location.lng();A(le=>({...le,latitude:$,longitude:ae,address:q.formatted_address||le.address}))},Z=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,K=async q=>{var $,ae;if(q.preventDefault(),!(h!=null&&h.id)){Fe.error("Franchise not loaded. Please refresh and try again.");return}if(z.localStoreid&&!Z.test(z.localStoreid)){Fe.error("Store Identifier must be valid UUID");return}f(!0);try{await nl.create({...z,latitude:Number(z.latitude),longitude:Number(z.longitude),franchiseId:h.id,cityId:h.cityId}),Fe.success("New Hub Provisioned Successfully"),c(!1),i()}catch(le){Fe.error(((ae=($=le==null?void 0:le.response)==null?void 0:$.data)==null?void 0:ae.message)||(le==null?void 0:le.message)||"Provisioning failed")}finally{f(!1)}},P=u.useMemo(()=>R?r.filter(q=>{var $,ae;return(($=q.name)==null?void 0:$.toLowerCase().includes(R.toLowerCase()))||((ae=q.address)==null?void 0:ae.toLowerCase().includes(R.toLowerCase()))||String(q.localStoreid||"").toLowerCase().includes(R.toLowerCase())}):r,[r,R]);u.useEffect(()=>{C(1)},[R]);const M=k*j,se=M-j,W=P.slice(se,M),te=j?Math.ceil(P.length/j):1,de=u.useMemo(()=>{const q=(r==null?void 0:r.length)||0,$=(r==null?void 0:r.filter(De=>De.status==="ACTIVE").length)||0,ae=q-$,le=q>0?Math.round($/q*100):0;return{total:q,active:$,inactive:ae,efficiency:le}},[r]),Q=q=>{y(q),x(!0)},ie=async()=>{if(b)try{S(!0),await o(b.id)}catch{}finally{S(!1),x(!1),y(null)}},me=u.useMemo(()=>[{key:"name",label:"Hub Identity",render:(q,$)=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-orange-500/20\r
to-orange-600/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
shadow-lg\r
shadow-orange-500/10\r
`,children:a.jsx(an,{size:18})}),a.jsxs("div",{children:[a.jsx("p",{className:`\r
font-black\r
text-slate-700\r
dark:text-white\r
tracking-tight\r
`,children:q}),a.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
font-bold\r
`,children:"Hub Infrastructure"})]})]})},{key:"address",label:"Location",render:q=>a.jsx("div",{className:`\r
max-w-[250px]\r
`,children:a.jsx("p",{className:`\r
text-sm\r
font-medium\r
text-slate-600\r
dark:text-slate-300\r
truncate\r
`,children:q})})},{key:"status",label:"Status",render:q=>a.jsx(qn,{status:q})},{key:"actions",label:"Controls",render:(q,$)=>a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>e(`/stores/${$.id}`),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
hover:text-indigo-500\r
`,children:a.jsx(Yl,{size:16})}),t()&&a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>e(`/stores/${$.id}`,{state:{editMode:!0}}),className:`\r
rounded-xl\r
hover:bg-blue-500/10\r
hover:text-blue-500\r
`,children:a.jsx(Hg,{size:16})}),n()&&a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>Q($),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
`,children:a.jsx(_i,{size:16})})]})}],[e,n]),J=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-orange-500/10
`;return L?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Hub Control Center",subtitle:"Provision and manage intelligent franchise store infrastructure"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:`\r
absolute\r
inset-0\r
-z-10\r
overflow-hidden\r
`,children:[a.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsxs("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-3\r
gap-6\r
`,children:[a.jsx(X.div,{whileHover:{y:-4},className:`${J} rounded-[2rem] p-6`,children:a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
font-black\r
`,children:"Total Hubs"}),a.jsx("h3",{className:`\r
text-3xl\r
font-black\r
mt-2\r
text-slate-800\r
dark:text-white\r
`,children:de.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
`,children:a.jsx(Us,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${J} rounded-[2rem] p-6`,children:a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
font-black\r
`,children:"Active Stores"}),a.jsx("h3",{className:`\r
text-3xl\r
font-black\r
mt-2\r
text-slate-800\r
dark:text-white\r
`,children:de.active})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(gt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${J} rounded-[2rem] p-6`,children:a.jsx("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
font-black\r
mb-3\r
`,children:"Operational Efficiency"}),a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
mb-2\r
`,children:[a.jsxs("span",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:[de.efficiency,"%"]}),a.jsx(Qt,{size:18,className:`\r
text-indigo-500\r
`})]}),a.jsx(mr,{value:de.efficiency,className:`\r
h-2\r
bg-slate-200\r
dark:bg-slate-800\r
`})]})})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},className:`${J} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
flex-col\r
lg:flex-row\r
justify-between\r
lg:items-center\r
gap-5\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-4\r
`,children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:`\r
text-lg\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Store Registry"}),a.jsx("p",{className:`\r
text-xs\r
text-slate-600\r
dark:text-slate-400\r
`,children:"Intelligent franchise network infrastructure"})]})]}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
gap-3\r
w-full\r
lg:w-auto\r
`,children:[a.jsxs("div",{className:`\r
relative\r
w-full\r
md:w-80\r
`,children:[a.jsx(jl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-transform\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{value:R,onChange:q=>D(q.target.value),placeholder:"Search store network...",className:`\r
pl-10\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/50\r
`})]}),a.jsx("select",{value:j,onChange:q=>{E(Number(q.target.value)),C(1)},className:`\r
h-12\r
px-4\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-700\r
bg-white\r
dark:bg-slate-900\r
font-bold\r
text-sm\r
outline-none\r
`,children:[5,10,20,50].map(q=>a.jsx("option",{value:q,children:q},q))}),t()&&a.jsxs(ne,{onClick:()=>c(!0),className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-black\r
shadow-xl\r
shadow-orange-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
`,children:[a.jsx(Xo,{size:18,className:"mr-2"}),"Register Hub",a.jsx($r,{size:16,className:"ml-2"})]})]})]}),a.jsx("div",{className:`\r
overflow-hidden\r
`,children:F?a.jsx(zi,{rows:6}):P.length===0?a.jsx("div",{className:`\r
p-20\r
text-center\r
text-slate-400\r
`,children:"No stores found."}):a.jsx(Ks,{columns:me,data:W})}),!F&&te>1&&a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",se+1," - ",Math.min(M,P.length)," ","of"," ",P.length]}),a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:k===1,onClick:()=>C(q=>q-1),className:`\r
rounded-xl\r
`,children:"Prev"}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-orange-500\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-orange-500/20\r
`,children:[k," / ",te]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:k===te,onClick:()=>C(q=>q+1),className:`\r
rounded-xl\r
`,children:"Next"})]})]})]})]})]}),a.jsx(gr,{isOpen:v,onClose:()=>{x(!1),y(null)},onConfirm:ie,title:"Delete Store Hub",message:`This will permanently remove "${b==null?void 0:b.name}". Continue?`,confirmText:"Delete",variant:"destructive",loading:w}),l&&t()&&a.jsx(kn,{isOpen:!0,onClose:()=>c(!1),title:"Initialize Store Hub",size:"xl",children:a.jsxs("form",{onSubmit:K,className:`\r
grid\r
grid-cols-1\r
lg:grid-cols-12\r
gap-8\r
p-1\r
`,children:[a.jsxs("div",{className:`\r
lg:col-span-5\r
space-y-5\r
`,children:[a.jsxs("div",{className:`\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-5\r
rounded-[2rem]\r
border\r
border-slate-100\r
dark:border-slate-800\r
space-y-5\r
`,children:[a.jsxs("div",{className:`\r
space-y-2\r
`,children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Wd,{size:14}),"Store Identifier"]}),a.jsx(Ee,{placeholder:"UUID...",className:`\r
h-12\r
rounded-2xl\r
font-mono\r
border-slate-200\r
dark:border-slate-700\r
`,value:z.localStoreid,onChange:q=>A($=>({...$,localStoreid:q.target.value}))})]}),a.jsxs("div",{className:`\r
space-y-2\r
`,children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(an,{size:14}),"Store Name"]}),a.jsx(Ee,{placeholder:"Barqi DHA Store",className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
`,value:z.name,onChange:q=>A($=>({...$,name:q.target.value})),required:!0})]}),a.jsxs("div",{className:`\r
space-y-2\r
`,children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Is,{size:14}),"Address"]}),a.jsx("textarea",{className:`\r
w-full\r
min-h-[120px]\r
p-4\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-700\r
bg-white\r
dark:bg-slate-900\r
outline-none\r
focus:ring-2\r
focus:ring-orange-500\r
`,value:z.address,onChange:q=>A($=>({...$,address:q.target.value})),required:!0})]})]}),a.jsxs("div",{className:`\r
grid\r
grid-cols-2\r
gap-4\r
`,children:[a.jsxs("div",{className:`\r
p-4\r
rounded-2xl\r
bg-slate-900\r
text-white\r
`,children:[a.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
text-orange-500\r
font-black\r
mb-2\r
`,children:"Latitude"}),a.jsx("p",{className:`\r
font-mono\r
text-sm\r
`,children:Number(z.latitude).toFixed(6)})]}),a.jsxs("div",{className:`\r
p-4\r
rounded-2xl\r
bg-slate-900\r
text-white\r
`,children:[a.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
text-orange-500\r
font-black\r
mb-2\r
`,children:"Longitude"}),a.jsx("p",{className:`\r
font-mono\r
text-sm\r
`,children:Number(z.longitude).toFixed(6)})]})]}),a.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-2\r
`,children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>c(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),a.jsx(ne,{type:"submit",disabled:d,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-bold\r
shadow-xl\r
shadow-orange-500/20\r
`,children:d?a.jsx(_r,{className:`\r
animate-spin\r
`}):"Provision Store"})]})]}),a.jsxs("div",{className:`\r
lg:col-span-7\r
space-y-4\r
`,children:[a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs(ve,{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(RR,{size:14,className:`\r
text-orange-500\r
`}),"Geographical Positioning"]}),G&&a.jsx(J0,{onLoad:q=>_.current=q,onPlaceChanged:V,children:a.jsxs("div",{className:`\r
relative\r
w-64\r
`,children:[a.jsx(jl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-transform\r
-translate-y-1/2\r
size-3\r
text-slate-400\r
`}),a.jsx(Ee,{placeholder:"Search location...",className:`\r
h-9\r
pl-8\r
text-xs\r
bg-slate-100\r
border-none\r
rounded-full\r
`})]})})]}),a.jsxs("div",{className:`\r
h-[450px]\r
rounded-[2rem]\r
overflow-hidden\r
border-[10px]\r
border-slate-50\r
shadow-2xl\r
relative\r
`,children:[G?a.jsx(MV,{mapContainerStyle:{width:"100%",height:"100%"},center:{lat:z.latitude,lng:z.longitude},zoom:14,onClick:I,options:{disableDefaultUI:!1,mapTypeControl:!1,streetViewControl:!1,styles:yU},children:a.jsx(fL,{position:{lat:z.latitude,lng:z.longitude}})}):a.jsx("div",{className:`\r
h-full\r
bg-slate-50\r
animate-pulse\r
flex\r
items-center\r
justify-center\r
text-xs\r
`,children:"Initializing Maps..."}),a.jsxs("div",{className:`\r
absolute\r
bottom-4\r
left-4\r
right-4\r
bg-white/90\r
backdrop-blur-md\r
p-4\r
rounded-2xl\r
border\r
border-white\r
shadow-lg\r
pointer-events-none\r
`,children:[a.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
mb-2\r
`,children:"Current Position"}),a.jsx("p",{className:`\r
text-xs\r
font-medium\r
truncate\r
text-slate-800\r
`,children:z.address||"Click map to select location"})]})]})]})]})})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})},yU=[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}];var Fh="rovingFocusGroup.onEntryFocus",bU={bubbles:!1,cancelable:!0},cc="RovingFocusGroup",[zm,wL,wU]=_g(cc),[SU,SL]=Vr(cc,[wU]),[kU,CU]=SU(cc),kL=u.forwardRef((e,t)=>a.jsx(zm.Provider,{scope:e.__scopeRovingFocusGroup,children:a.jsx(zm.Slot,{scope:e.__scopeRovingFocusGroup,children:a.jsx(jU,{...e,ref:t})})}));kL.displayName=cc;var jU=u.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:s=!1,dir:i,currentTabStopId:o,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:d,preventScrollOnEntryFocus:f=!1,...h}=e,p=u.useRef(null),m=Be(t,p),g=$0(i),[v,x]=Li({prop:o,defaultProp:l??null,onChange:c,caller:cc}),[b,y]=u.useState(!1),w=Ln(d),S=wL(n),k=u.useRef(!1),[C,j]=u.useState(0);return u.useEffect(()=>{const E=p.current;if(E)return E.addEventListener(Fh,w),()=>E.removeEventListener(Fh,w)},[w]),a.jsx(kU,{scope:n,orientation:r,dir:g,loop:s,currentTabStopId:v,onItemFocus:u.useCallback(E=>x(E),[x]),onItemShiftTab:u.useCallback(()=>y(!0),[]),onFocusableItemAdd:u.useCallback(()=>j(E=>E+1),[]),onFocusableItemRemove:u.useCallback(()=>j(E=>E-1),[]),children:a.jsx(Ce.div,{tabIndex:b||C===0?-1:0,"data-orientation":r,...h,ref:m,style:{outline:"none",...e.style},onMouseDown:ye(e.onMouseDown,()=>{k.current=!0}),onFocus:ye(e.onFocus,E=>{const L=!k.current;if(E.target===E.currentTarget&&L&&!b){const N=new CustomEvent(Fh,bU);if(E.currentTarget.dispatchEvent(N),!N.defaultPrevented){const R=S().filter(A=>A.focusable),D=R.find(A=>A.active),F=R.find(A=>A.id===v),z=[D,F,...R].filter(Boolean).map(A=>A.ref.current);EL(z,f)}}k.current=!1}),onBlur:ye(e.onBlur,()=>y(!1))})})}),CL="RovingFocusGroupItem",jL=u.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:s=!1,tabStopId:i,children:o,...l}=e,c=Ms(),d=i||c,f=CU(CL,n),h=f.currentTabStopId===d,p=wL(n),{onFocusableItemAdd:m,onFocusableItemRemove:g,currentTabStopId:v}=f;return u.useEffect(()=>{if(r)return m(),()=>g()},[r,m,g]),a.jsx(zm.ItemSlot,{scope:n,id:d,focusable:r,active:s,children:a.jsx(Ce.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...l,ref:t,onMouseDown:ye(e.onMouseDown,x=>{r?f.onItemFocus(d):x.preventDefault()}),onFocus:ye(e.onFocus,()=>f.onItemFocus(d)),onKeyDown:ye(e.onKeyDown,x=>{if(x.key==="Tab"&&x.shiftKey){f.onItemShiftTab();return}if(x.target!==x.currentTarget)return;const b=LU(x,f.orientation,f.dir);if(b!==void 0){if(x.metaKey||x.ctrlKey||x.altKey||x.shiftKey)return;x.preventDefault();let w=p().filter(S=>S.focusable).map(S=>S.ref.current);if(b==="last")w.reverse();else if(b==="prev"||b==="next"){b==="prev"&&w.reverse();const S=w.indexOf(x.currentTarget);w=f.loop?PU(w,S+1):w.slice(S+1)}setTimeout(()=>EL(w))}}),children:typeof o=="function"?o({isCurrentTabStop:h,hasTabStop:v!=null}):o})})});jL.displayName=CL;var EU={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function NU(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function LU(e,t,n){const r=NU(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return EU[r]}function EL(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function PU(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var TU=kL,MU=jL,Sf="Tabs",[RU]=Vr(Sf,[SL]),NL=SL(),[AU,ev]=RU(Sf),LL=u.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:s,defaultValue:i,orientation:o="horizontal",dir:l,activationMode:c="automatic",...d}=e,f=$0(l),[h,p]=Li({prop:r,onChange:s,defaultProp:i??"",caller:Sf});return a.jsx(AU,{scope:n,baseId:Ms(),value:h,onValueChange:p,orientation:o,dir:f,activationMode:c,children:a.jsx(Ce.div,{dir:f,"data-orientation":o,...d,ref:t})})});LL.displayName=Sf;var PL="TabsList",TL=u.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...s}=e,i=ev(PL,n),o=NL(n);return a.jsx(TU,{asChild:!0,...o,orientation:i.orientation,dir:i.dir,loop:r,children:a.jsx(Ce.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:t})})});TL.displayName=PL;var ML="TabsTrigger",RL=u.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:s=!1,...i}=e,o=ev(ML,n),l=NL(n),c=IL(o.baseId,r),d=DL(o.baseId,r),f=r===o.value;return a.jsx(MU,{asChild:!0,...l,focusable:!s,active:f,children:a.jsx(Ce.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":d,"data-state":f?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:c,...i,ref:t,onMouseDown:ye(e.onMouseDown,h=>{!s&&h.button===0&&h.ctrlKey===!1?o.onValueChange(r):h.preventDefault()}),onKeyDown:ye(e.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&o.onValueChange(r)}),onFocus:ye(e.onFocus,()=>{const h=o.activationMode!=="manual";!f&&!s&&h&&o.onValueChange(r)})})})});RL.displayName=ML;var AL="TabsContent",OL=u.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:s,children:i,...o}=e,l=ev(AL,n),c=IL(l.baseId,r),d=DL(l.baseId,r),f=r===l.value,h=u.useRef(f);return u.useEffect(()=>{const p=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(p)},[]),a.jsx(Di,{present:s||f,children:({present:p})=>a.jsx(Ce.div,{"data-state":f?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!p,id:d,tabIndex:0,...o,ref:t,style:{...e.style,animationDuration:h.current?"0s":void 0},children:p&&i})})});OL.displayName=AL;function IL(e,t){return`${e}-trigger-${t}`}function DL(e,t){return`${e}-content-${t}`}var OU=LL,_L=TL,FL=RL,zL=OL;const BL=OU,tv=u.forwardRef(({className:e,...t},n)=>a.jsx(_L,{ref:n,className:he("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));tv.displayName=_L.displayName;const bs=u.forwardRef(({className:e,...t},n)=>a.jsx(FL,{ref:n,className:he("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",e),...t}));bs.displayName=FL.displayName;const ws=u.forwardRef(({className:e,...t},n)=>a.jsx(zL,{ref:n,className:he("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));ws.displayName=zL.displayName;const _a=u.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:he("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));_a.displayName="Card";const Fa=u.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:he("flex flex-col space-y-1.5 p-6",e),...t}));Fa.displayName="CardHeader";const za=u.forwardRef(({className:e,...t},n)=>a.jsx("h3",{ref:n,className:he("text-2xl font-semibold leading-none tracking-tight",e),...t}));za.displayName="CardTitle";const IU=u.forwardRef(({className:e,...t},n)=>a.jsx("p",{ref:n,className:he("text-sm text-muted-foreground",e),...t}));IU.displayName="CardDescription";const Ba=u.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:he("p-6 pt-0",e),...t}));Ba.displayName="CardContent";const DU=u.forwardRef(({className:e,...t},n)=>a.jsx("div",{ref:n,className:he("flex items-center p-6 pt-0",e),...t}));DU.displayName="CardFooter";const _U=u0,FU=rc;function zU(){var ie,me,J,q;const{id:e}=hj(),t=Gr(),n=xr(),{isAdmin:r}=Hs(),s=u.useMemo(()=>Ve.create({baseURL:_U,headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}}),[]),i=u.useMemo(()=>Ve.create({baseURL:FU,headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}}),[]),[o,l]=u.useState("info"),[c,d]=u.useState(null),[f,h]=u.useState(!0),[p,m]=u.useState(null),[g,v]=u.useState(!1),[x,b]=u.useState(""),[y,w]=u.useState("STORE_TOPUP"),[S,k]=u.useState(!1),[C,j]=u.useState(!!((ie=n.state)!=null&&ie.editMode)),[E,L]=u.useState(null),[N,R]=u.useState({open:!1,status:null,label:""}),[D,F]=u.useState(!1),[_,z]=u.useState(!1),[A,G]=u.useState(!1),[T,O]=u.useState(1),I=6,V=u.useMemo(()=>{const $=(p==null?void 0:p.transactions)||[],ae=(T-1)*I;return $.slice(ae,ae+I)},[p,T]),Z=Math.ceil((((me=p==null?void 0:p.transactions)==null?void 0:me.length)||0)/I),K=u.useCallback(async()=>{var $,ae;h(!0);try{const le=await i.get(`/stores/${e}`);d(($=le.data)==null?void 0:$.data),L((ae=le.data)==null?void 0:ae.data)}catch{Fe.error("Failed to load store details")}finally{h(!1)}},[e,i]),P=u.useCallback(async()=>{var $,ae,le;v(!0);try{const De=await s.get(`/wallets/${e}?currency=PKR`);m(($=De.data)==null?void 0:$.data)}catch(De){if(((ae=De.response)==null?void 0:ae.status)===404){const Xe=await s.post("/wallets",{ownerId:e,ownerType:"STORE",currency:"PKR"});m((le=Xe.data)==null?void 0:le.data),Fe.success("Store wallet initialized")}else Fe.error("Wallet data currently unavailable")}finally{v(!1)}},[e,s]);u.useEffect(()=>{e&&(K(),P())},[e,K,P]);const M=async()=>{var $,ae;try{await i.patch(`/stores/${e}`,{name:c==null?void 0:c.name,address:c==null?void 0:c.address}),Fe.success("Store details updated"),j(!1),K()}catch(le){Fe.error(((ae=($=le.response)==null?void 0:$.data)==null?void 0:ae.message)||"Update failed")}},se=async()=>{var $,ae;if(!x||parseFloat(x)<=0)return Fe.error("Enter a valid amount");k(!0);try{await s.post(`/wallets/owner/${e}/credit`,{amount:parseFloat(x),reason:y,currency:"PKR",referenceId:`STORE-REF-${Date.now()}`,idempotencyKey:`credit-store-${e}-${Date.now()}`}),Fe.success(`PKR ${x} added to store wallet`),b(""),P()}catch(le){Fe.error("Credit failed: "+(((ae=($=le.response)==null?void 0:$.data)==null?void 0:ae.message)||"Server error"))}finally{k(!1)}},W=async()=>{var $,ae;if(N.status){F(!0);try{await i.patch(`/stores/${e}/status`,{status:N.status}),Fe.success(`Store set to ${N.status}`),d(le=>({...le,status:N.status}))}catch(le){Fe.error(((ae=($=le.response)==null?void 0:$.data)==null?void 0:ae.message)||"Status update failed")}finally{F(!1),R({open:!1,status:null,label:""})}}},te=async()=>{var $,ae;G(!0);try{await i.delete(`/stores/${e}/hard`),Fe.success("Store permanently deleted"),t("/stores")}catch(le){Fe.error(((ae=($=le.response)==null?void 0:$.data)==null?void 0:ae.message)||"Deletion failed")}finally{G(!1),z(!1)}},de=u.useMemo(()=>{var $;return{balance:(p==null?void 0:p.balance)||0,transactions:(($=p==null?void 0:p.transactions)==null?void 0:$.length)||0,status:p!=null&&p.isActive?"ACTIVE":"LOCKED",health:p!=null&&p.isActive?92:35}},[p]),Q=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
`;return f?a.jsx(Pn,{children:a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})}):a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Hub Intelligence Center",subtitle:"Advanced operational monitoring & financial infrastructure"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1700px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsx("div",{className:`\r
flex\r
flex-col\r
xl:flex-row\r
justify-between\r
gap-6\r
`,children:a.jsx(X.div,{whileHover:{y:-4},className:`
${Q}
flex-1
rounded-[2.5rem]
p-8
`,children:a.jsxs("div",{className:`\r
flex\r
flex-col\r
lg:flex-row\r
justify-between\r
gap-6\r
`,children:[a.jsxs("div",{className:"flex gap-5",children:[a.jsx("div",{className:`\r
w-20\r
h-20\r
rounded-[2rem]\r
bg-gradient-to-br\r
from-orange-500\r
to-orange-600\r
text-white\r
flex\r
items-center\r
justify-center\r
shadow-2xl\r
shadow-orange-500/30\r
`,children:a.jsx(an,{size:34})}),a.jsxs("div",{children:[a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
flex-wrap\r
`,children:[a.jsx("h2",{className:`\r
text-3xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:c==null?void 0:c.name}),a.jsx(qn,{status:(c==null?void 0:c.status)||"ACTIVE"})]}),a.jsxs("p",{className:`\r
mt-2\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Is,{size:15}),c==null?void 0:c.address]}),a.jsxs("div",{className:`\r
mt-5\r
flex\r
gap-3\r
flex-wrap\r
`,children:[a.jsxs(ne,{onClick:()=>t(-1),className:`\r
rounded-2xl\r
bg-slate-900\r
hover:bg-slate-800\r
text-white\r
h-11\r
px-5\r
`,children:[a.jsx(iC,{size:16,className:"mr-2"}),"Back"]}),a.jsxs(ne,{onClick:()=>j(!C),className:`\r
rounded-2xl\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
h-11\r
px-5\r
shadow-xl\r
shadow-orange-500/20\r
`,children:[a.jsx(AR,{size:16,className:"mr-2"}),C?"Editing Enabled":"Enable Edit"]})]})]})]}),a.jsxs("div",{className:`\r
min-w-[320px]\r
rounded-[2rem]\r
bg-gradient-to-br\r
from-slate-900\r
to-slate-800\r
text-white\r
p-6\r
border\r
border-white/10\r
relative\r
overflow-hidden\r
`,children:[a.jsx("div",{className:`\r
absolute\r
top-0\r
right-0\r
w-40\r
h-40\r
bg-orange-500/10\r
rounded-full\r
blur-3xl\r
`}),a.jsxs("div",{className:`\r
relative\r
z-10\r
`,children:[a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.3em]\r
text-slate-400\r
font-black\r
`,children:"Hub Wallet"}),a.jsx("h3",{className:`\r
mt-3\r
text-4xl\r
font-black\r
font-mono\r
text-emerald-400\r
`,children:"PKR"})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-400\r
flex\r
items-center\r
justify-center\r
`,children:a.jsx(El,{size:24})})]}),a.jsx("p",{className:`\r
mt-4\r
text-3xl\r
font-black\r
font-mono\r
`,children:g?"Loading...":((J=p==null?void 0:p.balance)==null?void 0:J.toLocaleString())||"0.00"}),a.jsxs("div",{className:`\r
mt-5\r
flex\r
items-center\r
justify-between\r
text-xs\r
text-slate-400\r
`,children:[a.jsx("span",{children:"Live Financial State"}),a.jsx("span",{children:de.status})]})]})]})]})})}),a.jsxs("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-2\r
xl:grid-cols-4\r
gap-6\r
`,children:[a.jsx(X.div,{whileHover:{y:-5},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Transactions"}),a.jsx("h3",{className:`\r
text-3xl\r
font-black\r
mt-2\r
text-slate-800\r
dark:text-white\r
`,children:de.transactions})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:a.jsx(zp,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-5},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Wallet Health"}),a.jsxs("h3",{className:`\r
text-3xl\r
font-black\r
mt-2\r
text-slate-800\r
dark:text-white\r
`,children:[de.health,"%"]})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(Qt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-5},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Network State"}),a.jsx("h3",{className:`\r
text-2xl\r
font-black\r
mt-2\r
text-slate-800\r
dark:text-white\r
`,children:"Stable"})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
`,children:a.jsx(Us,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-5},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"System Security"}),a.jsx("h3",{className:`\r
text-2xl\r
font-black\r
mt-2\r
text-slate-800\r
dark:text-white\r
`,children:"Protected"})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-rose-500/10\r
flex\r
items-center\r
justify-center\r
text-rose-500\r
`,children:a.jsx(gt,{size:24})})]})})]}),a.jsxs(BL,{value:o,onValueChange:l,className:"w-full",children:[a.jsxs(tv,{className:`\r
bg-white/70\r
dark:bg-slate-900/60\r
backdrop-blur-xl\r
rounded-2xl\r
p-2\r
border\r
border-slate-200\r
dark:border-slate-800\r
h-auto\r
flex\r
flex-wrap\r
gap-2\r
`,children:[a.jsx(bs,{value:"info",className:"rounded-xl px-5 py-3",children:"Hub Information"}),a.jsx(bs,{value:"wallet",className:"rounded-xl px-5 py-3",children:"Wallet & Finance"}),a.jsx(bs,{value:"settings",className:"rounded-xl px-5 py-3",children:"Admin Controls"})]}),a.jsx(ws,{value:"info",className:"mt-6",children:a.jsxs(X.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},className:`
${Q}
rounded-[2.5rem]
overflow-hidden
`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
items-center\r
gap-4\r
bg-slate-50\r
dark:bg-slate-900/10\r
`,children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:`\r
text-xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Hub Information Matrix"}),a.jsx("p",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
`,children:"Infrastructure & location intelligence"})]})]}),a.jsxs("div",{className:"p-8 space-y-6",children:[a.jsxs("div",{className:`\r
grid\r
md:grid-cols-2\r
gap-6\r
`,children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
`,children:"Store Name"}),C?a.jsx(Ee,{className:`\r
h-14\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
`,value:(c==null?void 0:c.name)??"",onChange:$=>d(ae=>({...ae,name:$.target.value}))}):a.jsx("div",{className:`\r
h-14\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
flex\r
items-center\r
px-5\r
font-bold\r
`,children:c==null?void 0:c.name})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
`,children:"Local Store ID"}),a.jsx("div",{className:`\r
h-14\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
flex\r
items-center\r
px-5\r
font-mono\r
tracking-[0.15em]\r
text-slate-500\r
`,children:c==null?void 0:c.localStoreid})]})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
`,children:"Full Address"}),C?a.jsx(Ee,{className:`\r
h-14\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
`,value:(c==null?void 0:c.address)??"",onChange:$=>d(ae=>({...ae,address:$.target.value}))}):a.jsx("div",{className:`\r
h-14\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
flex\r
items-center\r
px-5\r
`,children:c==null?void 0:c.address})]}),a.jsxs("div",{className:`\r
grid\r
md:grid-cols-2\r
gap-6\r
`,children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
`,children:"Latitude"}),a.jsx("div",{className:`\r
h-14\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
flex\r
items-center\r
px-5\r
font-mono\r
`,children:c==null?void 0:c.latitude})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
`,children:"Longitude"}),a.jsx("div",{className:`\r
h-14\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
flex\r
items-center\r
px-5\r
font-mono\r
`,children:c==null?void 0:c.longitude})]})]}),C&&a.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-6\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[a.jsxs(ne,{variant:"outline",className:`\r
h-12\r
rounded-2xl\r
px-6\r
`,onClick:()=>{d(E),j(!1)},children:[a.jsx(Qo,{size:16,className:"mr-2"}),"Cancel"]}),a.jsxs(ne,{onClick:M,className:`\r
h-12\r
rounded-2xl\r
px-6\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
shadow-xl\r
shadow-orange-500/20\r
`,children:[a.jsx(Ug,{size:16,className:"mr-2"}),"Save Hub Information"]})]})]})]})}),a.jsxs(ws,{value:"wallet",className:"mt-6 space-y-6",children:[a.jsxs("div",{className:`\r
grid\r
xl:grid-cols-3\r
gap-6\r
`,children:[a.jsx(X.div,{whileHover:{y:-4},className:`\r
xl:col-span-2\r
`,children:a.jsxs(_a,{className:`\r
rounded-[2rem]\r
border-slate-200\r
dark:border-slate-800\r
shadow-xl\r
`,children:[a.jsx(Fa,{className:`\r
border-b\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
rounded-t-[2rem]\r
`,children:a.jsxs(za,{className:`\r
flex\r
items-center\r
gap-3\r
text-xl\r
font-black\r
`,children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
`,children:a.jsx(Fp,{size:20})}),"Credit Hub Wallet"]})}),a.jsxs(Ba,{className:`\r
p-8\r
grid\r
md:grid-cols-3\r
gap-5\r
`,children:[a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{children:"Top-up Amount"}),a.jsx(Ee,{type:"number",className:`\r
h-14\r
rounded-2xl\r
`,placeholder:"0.00",value:x,onChange:$=>b($.target.value)})]}),a.jsxs("div",{className:"space-y-3",children:[a.jsx(ve,{children:"Adjustment Reason"}),a.jsxs(St,{value:y,onValueChange:w,children:[a.jsx(pt,{className:`\r
h-14\r
rounded-2xl\r
`,children:a.jsx(kt,{})}),a.jsxs(mt,{children:[a.jsx(Ie,{value:"STORE_TOPUP",children:"Standard Store Top-up"}),a.jsx(Ie,{value:"REVENUE_SHARE",children:"Monthly Revenue Share"}),a.jsx(Ie,{value:"CORRECTION",children:"Ledger Rectification"})]})]})]}),a.jsx(ne,{onClick:se,disabled:S||g,className:`\r
h-14\r
mt-auto\r
rounded-2xl\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-black\r
shadow-xl\r
shadow-orange-500/20\r
`,children:S?a.jsx(_r,{className:"animate-spin"}):a.jsxs(a.Fragment,{children:[a.jsx(El,{size:16,className:"mr-2"}),"Apply Credit"]})})]})]})}),a.jsx(X.div,{whileHover:{y:-4},children:a.jsxs(_a,{className:`\r
rounded-[2rem]\r
border-slate-200\r
dark:border-slate-800\r
shadow-xl\r
h-full\r
`,children:[a.jsx(Fa,{children:a.jsx(za,{className:`\r
text-sm\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Wallet Health"})}),a.jsxs(Ba,{className:`\r
space-y-5\r
`,children:[a.jsxs("div",{className:`\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsx("span",{className:`\r
text-sm\r
text-slate-500\r
`,children:"Status"}),a.jsx(qn,{status:p!=null&&p.isActive?"ACTIVE":"LOCKED"})]}),a.jsxs("div",{className:`\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsx("span",{className:`\r
text-sm\r
text-slate-500\r
`,children:"Currency"}),a.jsx("span",{className:`\r
font-black\r
font-mono\r
`,children:"PKR"})]}),a.jsxs("div",{className:`\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsx("span",{className:`\r
text-sm\r
text-slate-500\r
`,children:"Last Synced"}),a.jsx("span",{className:`\r
text-xs\r
font-semibold\r
`,children:new Date().toLocaleTimeString()})]})]})]})})]}),a.jsx(X.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},children:a.jsxs(_a,{className:`\r
rounded-[2.5rem]\r
overflow-hidden\r
border-slate-200\r
dark:border-slate-800\r
shadow-xl\r
`,children:[a.jsxs(Fa,{className:`\r
flex\r
flex-row\r
items-center\r
justify-between\r
border-b\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs(za,{className:`\r
flex\r
items-center\r
gap-3\r
text-lg\r
font-black\r
`,children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:a.jsx(zp,{size:18})}),"Financial Ledger"]}),a.jsxs(ne,{variant:"outline",size:"sm",className:`\r
rounded-xl\r
`,onClick:P,children:[g?a.jsx(_r,{size:14,className:`\r
mr-2\r
animate-spin\r
`}):a.jsx(OR,{size:14,className:"mr-2"}),"Refresh"]})]}),a.jsx(Ba,{className:"p-0",children:g?a.jsx(zi,{rows:6}):(q=p==null?void 0:p.transactions)!=null&&q.length?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`\r
divide-y\r
max-h-[700px]\r
overflow-y-auto\r
`,children:V.map($=>a.jsxs("div",{className:`\r
p-6\r
flex\r
items-center\r
justify-between\r
hover:bg-slate-50\r
dark:hover:bg-slate-900/30\r
transition-colors\r
`,children:[a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-5\r
`,children:[a.jsx("div",{className:`
p-3
rounded-2xl
${$.type==="CREDIT"?"bg-emerald-100 text-emerald-700":"bg-rose-100 text-rose-700"}
`,children:$.type==="CREDIT"?a.jsx(Fp,{size:22}):a.jsx(aC,{size:22})}),a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-sm\r
font-black\r
text-slate-800\r
dark:text-white\r
uppercase\r
`,children:$.reason.replace(/_/g," ")}),a.jsx("p",{className:`\r
text-[11px]\r
text-slate-500\r
mt-1\r
`,children:new Date($.createdAt).toLocaleString()})]})]}),a.jsxs("div",{className:"text-right",children:[a.jsxs("p",{className:`
text-lg
font-black
font-mono
${$.type==="CREDIT"?"text-emerald-500":"text-rose-500"}
`,children:[$.type==="CREDIT"?"+":"-"," ",$.amount.toLocaleString()]}),a.jsxs("p",{className:`\r
text-[10px]\r
text-slate-400\r
font-mono\r
mt-1\r
`,children:["TXID:"," ",$.id.slice(0,8)]})]})]},$.id))}),Z>1&&a.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
p-5\r
border-t\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
`,children:["Page"," ",T," ","of"," ",Z]}),a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:T===1,onClick:()=>O($=>$-1),className:`\r
rounded-xl\r
`,children:a.jsx(ql,{size:15})}),a.jsx(ne,{size:"sm",variant:"outline",disabled:T===Z,onClick:()=>O($=>$+1),className:`\r
rounded-xl\r
`,children:a.jsx(Zl,{size:15})})]})]})]}):a.jsx("div",{className:`\r
p-20\r
text-center\r
text-slate-400\r
italic\r
`,children:"No financial activity recorded."})})]})})]}),a.jsx(ws,{value:"settings",className:"mt-6",children:a.jsx(X.div,{whileHover:{y:-3},children:a.jsxs(_a,{className:`\r
rounded-[2.5rem]\r
overflow-hidden\r
border-rose-200\r
shadow-xl\r
`,children:[a.jsx(Fa,{className:`\r
bg-gradient-to-r\r
from-rose-500/10\r
to-orange-500/10\r
border-b\r
`,children:a.jsxs(za,{className:`\r
flex\r
items-center\r
gap-3\r
text-xl\r
font-black\r
text-rose-600\r
`,children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-rose-500/10\r
`,children:a.jsx(IR,{size:20})}),"Critical Hub Controls"]})}),a.jsxs(Ba,{className:`\r
p-8\r
space-y-6\r
`,children:[a.jsx("p",{className:`\r
text-sm\r
text-slate-600\r
dark:text-slate-400\r
leading-relaxed\r
`,children:"Modify the operational state of this Hub. Changes affect logistics routing, rider dispatching and order allocation instantly across the network."}),a.jsxs("div",{className:`\r
flex\r
gap-4\r
flex-wrap\r
`,children:[a.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
h-12\r
px-6\r
text-emerald-600\r
border-emerald-200\r
`,disabled:(c==null?void 0:c.status)==="ACTIVE",onClick:()=>R({open:!0,status:"ACTIVE",label:"Re-Activate Hub"}),children:"Re-Activate Hub"}),a.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
h-12\r
px-6\r
text-amber-600\r
border-amber-200\r
`,disabled:(c==null?void 0:c.status)==="SUSPENDED",onClick:()=>R({open:!0,status:"SUSPENDED",label:"Maintenance Mode"}),children:"Maintenance Mode"}),r()&&a.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
h-12\r
px-6\r
text-rose-600\r
border-rose-200\r
`,onClick:()=>z(!0),children:"De-commission Hub"})]})]})]})})})]})]})]}),a.jsx(gr,{isOpen:N.open,onClose:()=>R({open:!1,status:null,label:""}),onConfirm:W,title:N.label,message:N.status==="ACTIVE"?`Reactivate "${c==null?void 0:c.name}"? It will immediately resume accepting orders.`:`Put "${c==null?void 0:c.name}" into maintenance mode? Order routing will be paused.`,confirmText:N.label,variant:N.status==="ACTIVE"?"default":"destructive",loading:D}),a.jsx(gr,{isOpen:_,onClose:()=>z(!1),onConfirm:te,title:"De-commission Hub",message:`Permanently delete "${c==null?void 0:c.name}"? All linked admins must be removed first. This cannot be undone.`,confirmText:"De-commission",variant:"destructive",loading:A})]})}const qc=rc,Zc={getAll:async(e=1,t=50,n=null)=>{const r={page:e,limit:t};return n&&(r.storeId=n),(await pe.get(`${qc}/store-admins`,{params:r})).data},create:async e=>(await pe.post(`${qc}/store-admins`,e)).data,changeStatus:async(e,t)=>(await pe.patch(`${qc}/store-admins/${e}/status`,{status:t})).data,delete:async e=>(await pe.delete(`${qc}/store-admins/${e}`)).data},BU=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(!1),s=u.useCallback(async(c=1,d=50,f=null)=>{var h,p;r(!0);try{const m=await Zc.getAll(c,d,f),g=m.data||m;t(g.items||g||[])}catch(m){oe({title:"Error",description:((p=(h=m.response)==null?void 0:h.data)==null?void 0:p.message)||"Failed to fetch store admins",variant:"destructive"})}finally{r(!1)}},[]);return{admins:e,loading:n,fetchAdmins:s,createAdmin:async c=>{var d,f;try{const h=await Zc.create(c);return await s(),oe({title:"Success",description:"Store admin created successfully"}),h}catch(h){const p=((f=(d=h.response)==null?void 0:d.data)==null?void 0:f.message)||"Failed to create store admin";throw oe({title:"Error",description:p,variant:"destructive"}),new Error(p)}},changeStatus:async(c,d)=>{var f,h;try{await Zc.changeStatus(c,d),t(p=>p.map(m=>m.id===c?{...m,status:d}:m)),oe({title:"Status Updated",description:`Admin has been ${d==="ACTIVE"?"activated":"suspended"} successfully`})}catch(p){const m=((h=(f=p.response)==null?void 0:f.data)==null?void 0:h.message)||"Failed to update admin status";throw oe({title:"Error",description:m,variant:"destructive"}),new Error(m)}},deleteAdmin:async c=>{var d,f;try{await Zc.delete(c),t(h=>h.filter(p=>p.id!==c)),oe({title:"Removed",description:"Store admin permanently deleted"})}catch(h){const p=((f=(d=h.response)==null?void 0:d.data)==null?void 0:f.message)||"Failed to delete store admin";throw oe({title:"Error",description:p,variant:"destructive"}),new Error(p)}}}},jr=e=>Fi(sc,e),nr={getAll:async(e=1,t=10)=>(await pe.get(jr("/users"),{params:{page:e,limit:t}})).data,getById:async e=>(await pe.get(jr(`/users/${e}`))).data,getIamByAuthId:async e=>(await pe.get(Fi(sc,`/iam/users/${e}`))).data,create:async e=>(await pe.post(jr("/users"),e)).data,createStaff:async e=>(await pe.post(jr("/users/staff"),e)).data,updateStatus:async(e,t)=>(await pe.patch(jr(`/users/${e}/status`),{isActive:t})).data,assignRole:async(e,t)=>(await pe.post(jr(`/users/${e}/role`),{roleCode:t})).data,assignScope:async(e,t,n)=>(await pe.post(jr(`/users/${e}/scope`),{scopeType:t,scopeId:t==="GLOBAL"?null:n})).data,getScope:async e=>(await pe.get(jr(`/users/${e}/scope`))).data,removeScope:async e=>(await pe.delete(jr(`/users/${e}/scope`))).data},VU=()=>{var ie,me;const{admins:e,loading:t,fetchAdmins:n,createAdmin:r,changeStatus:s,deleteAdmin:i}=BU(),[o,l]=u.useState([]),[c,d]=u.useState(""),[f,h]=u.useState(!1),[p,m]=u.useState(!1),[g,v]=u.useState(null),[x,b]=u.useState(!1),[y,w]=u.useState(!1),[S,k]=u.useState(!1),[C,j]=u.useState(!1),[E,L]=u.useState(!1),[N,R]=u.useState([]),[D,F]=u.useState(!1),[_,z]=u.useState(1),[A,G]=u.useState(10),[T,O]=u.useState({storeId:"",fullName:"",email:"",password:"",phone:""});u.useEffect(()=>{n(),nl.getAll(1,100).then(J=>{const q=J.data||J;l(q.items||q||[])}).catch(()=>Fe.error("Failed to load stores"))},[n]),u.useEffect(()=>{const J=setTimeout(()=>{F(!0)},250);return()=>clearTimeout(J)},[]),u.useEffect(()=>{(async()=>{if(!e||e.length===0)return;const q=await Promise.all(e.map(async $=>{try{await nr.getIamByAuthId($.authUserId);const ae=await nr.getById($.authUserId),le=ae==null?void 0:ae.data;return{...$,fullName:(le==null?void 0:le.name)||"N/A",email:(le==null?void 0:le.email)||"N/A",phone:(le==null?void 0:le.phone)||"N/A"}}catch{return $}}));R(q)})()},[e]);const I=u.useMemo(()=>{if(!c)return N;const J=c.toLowerCase();return N.filter(q=>{var $,ae,le,De,Xe;return(($=q.fullName)==null?void 0:$.toLowerCase().includes(J))||((ae=q.email)==null?void 0:ae.toLowerCase().includes(J))||((le=q.phone)==null?void 0:le.toLowerCase().includes(J))||((Xe=(De=q.store)==null?void 0:De.name)==null?void 0:Xe.toLowerCase().includes(J))})},[N,c]),V=u.useMemo(()=>{const J=(I==null?void 0:I.length)||0,q=(I==null?void 0:I.filter(le=>le.status==="ACTIVE").length)||0,$=J-q,ae=J>0?Math.round(q/J*100):0;return{total:J,active:q,suspended:$,efficiency:ae}},[I]),Z=Math.ceil(I.length/A),K=u.useMemo(()=>{const J=(_-1)*A;return I.slice(J,J+A)},[I,_,A]),P=async J=>{if(J.preventDefault(),!T.storeId){Fe.error("Please select a store first.");return}m(!0);try{await r(T),h(!1),O({storeId:"",fullName:"",email:"",password:"",phone:""})}finally{m(!1)}},M=J=>{v(J),b(!0)},se=J=>{v(J),w(!0)},W=async()=>{if(!g)return;const J=g.status==="ACTIVE"?"SUSPENDED":"ACTIVE";try{k(!0),await s(g.id,J)}finally{k(!1),w(!1),v(null)}},te=J=>{v(J),j(!0)},de=async()=>{if(g)try{L(!0),await i(g.id)}finally{L(!1),j(!1),v(null)}},Q=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-orange-500/10
`;return D?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Store Access Control",subtitle:"Manage personnel authorized to oversee local hub operations"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[a.jsx(X.div,{whileHover:{y:-4},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Admins"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:V.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
`,children:a.jsx(Ts,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Active Access"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:V.active})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(gt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Suspended"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:V.suspended})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-red-500/10\r
flex\r
items-center\r
justify-center\r
text-red-500\r
`,children:a.jsx(Us,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${Q} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"System Stability"}),a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[V.efficiency,"%"]}),a.jsx(Qt,{size:18,className:"text-indigo-500"})]}),a.jsx(mr,{value:V.efficiency,className:"h-2 bg-slate-200 dark:bg-slate-800"})]})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${Q} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
flex-col\r
lg:flex-row\r
justify-between\r
items-center\r
gap-5\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"Store Administrator Matrix"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Monitor and control operational access"})]})]}),a.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto",children:[a.jsxs("div",{className:"relative w-full sm:w-80",children:[a.jsx(jl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{placeholder:"Search administrators...",value:c,onChange:J=>d(J.target.value),className:`\r
pl-10\r
h-12\r
rounded-2xl\r
bg-white/70\r
dark:bg-slate-900/40\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`})]}),a.jsxs(ne,{onClick:()=>h(!0),className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-black\r
shadow-xl\r
shadow-orange-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
active:scale-95\r
`,children:[a.jsx(cC,{size:18,className:"mr-2"}),"Add Admin",a.jsx($r,{size:16,className:"ml-2"})]})]})]}),a.jsx("div",{className:"overflow-hidden",children:t?a.jsx(zi,{rows:6}):a.jsx(Ks,{data:K,columns:[{key:"fullName",label:"Administrator",render:(J,q)=>{var le,De,Xe;const $=q.fullName||q.name||((le=q.user)==null?void 0:le.fullName)||((De=q.user)==null?void 0:De.name)||"-",ae=q.email||((Xe=q.user)==null?void 0:Xe.email)||"-";return a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-orange-500/20\r
to-orange-600/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
shadow-lg\r
shadow-orange-500/10\r
font-black\r
uppercase\r
`,children:$!=="-"?$.charAt(0):"?"}),a.jsxs("div",{children:[a.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:$}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:ae})]})]})}},{key:"store",label:"Assigned Hub",render:(J,q)=>{var $;return a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:`\r
w-9\r
h-9\r
rounded-xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:a.jsx(an,{size:16})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-bold text-slate-700 dark:text-white",children:(($=q.store)==null?void 0:$.name)||"Unassigned"}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.2em] text-slate-400",children:"Retail Node"})]})]})}},{key:"phone",label:"Contact",render:(J,q)=>{var ae,le;const $=q.phone||q.phoneNumber||((ae=q.user)==null?void 0:ae.phone)||((le=q.user)==null?void 0:le.phoneNumber)||"-";return a.jsx("code",{className:`\r
px-3\r
py-1.5\r
rounded-xl\r
bg-slate-100\r
dark:bg-slate-800\r
text-[11px]\r
font-mono\r
tracking-[0.2em]\r
font-bold\r
text-indigo-500\r
border\r
border-slate-200\r
dark:border-slate-700\r
`,children:$})}},{key:"status",label:"Access Status",render:(J,q)=>a.jsx("button",{onClick:()=>se(q),className:"cursor-pointer",children:a.jsx(qn,{status:J})})},{key:"actions",label:"Controls",render:(J,q)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>M(q),className:`\r
rounded-xl\r
hover:bg-blue-500/10\r
hover:text-blue-500\r
transition-all\r
duration-300\r
`,children:a.jsx(Yl,{size:16})}),a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>te(q),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,children:a.jsx(_i,{size:16})})]})}]})}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(_-1)*A+1," - ",Math.min(_*A,I.length)," ","of"," ",I.length]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:_===1,onClick:()=>z(J=>J-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-orange-500\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-orange-500/20\r
`,children:[_," / ",Z||1]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:_===Z||Z===0,onClick:()=>z(J=>J+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),a.jsx(kn,{isOpen:f,onClose:()=>h(!1),title:"Initialize Store Administrator",size:"lg",children:a.jsxs("form",{onSubmit:P,className:"space-y-6 py-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Assigned Store Hub"}),a.jsxs(St,{value:T.storeId,onValueChange:J=>O({...T,storeId:J}),children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:a.jsx(kt,{placeholder:"Select store"})}),a.jsx(mt,{children:o.map(J=>a.jsx(Ie,{value:J.id,children:J.name},J.id))})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Full Name"}),a.jsxs("div",{className:"relative",children:[a.jsx(gt,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{className:`\r
pl-10\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,placeholder:"e.g. Usman Ali",value:T.fullName,onChange:J=>O({...T,fullName:J.target.value}),required:!0})]})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Official Email"}),a.jsxs("div",{className:"relative",children:[a.jsx(kl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{className:`\r
pl-10\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,type:"email",placeholder:"admin@barqi.pk",value:T.email,onChange:J=>O({...T,email:J.target.value}),required:!0})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Phone Number"}),a.jsxs("div",{className:"relative",children:[a.jsx(Cl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{className:`\r
pl-10\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,placeholder:"03001234567",value:T.phone,onChange:J=>O({...T,phone:J.target.value}),required:!0})]})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Temporary Password"}),a.jsxs("div",{className:"relative",children:[a.jsx(Sl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{className:`\r
pl-10\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,type:"password",placeholder:"••••••••",value:T.password,onChange:J=>O({...T,password:J.target.value}),required:!0})]})]}),a.jsxs("div",{className:"flex gap-4 pt-4",children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>h(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,disabled:p,children:"Cancel"}),a.jsx(ne,{type:"submit",disabled:p,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-orange-500\r
hover:bg-orange-600\r
text-white\r
font-bold\r
shadow-xl\r
shadow-orange-500/20\r
`,children:p?a.jsx(_r,{className:"animate-spin mr-2"}):"Create Administrator"})]})]})}),x&&g&&a.jsx(kn,{isOpen:x,onClose:()=>{b(!1),v(null)},title:"Administrator Details",children:a.jsxs("div",{className:"space-y-5 py-3",children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-16\r
h-16\r
rounded-3xl\r
bg-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-orange-500\r
font-black\r
text-2xl\r
uppercase\r
`,children:(ie=g.fullName)==null?void 0:ie.charAt(0)}),a.jsxs("div",{children:[a.jsx("p",{className:"text-xl font-black text-slate-800 dark:text-white",children:g.fullName}),a.jsx("p",{className:"text-sm text-slate-500",children:g.email})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-2xl p-4",children:[a.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2",children:"Phone"}),a.jsx("p",{className:"font-semibold",children:g.phone||"-"})]}),a.jsxs("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-2xl p-4",children:[a.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2",children:"Status"}),a.jsx(qn,{status:g.status})]}),a.jsxs("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-2xl p-4",children:[a.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2",children:"Assigned Store"}),a.jsx("p",{className:"font-semibold",children:((me=g.store)==null?void 0:me.name)||"Unassigned"})]}),a.jsxs("div",{className:"bg-slate-100 dark:bg-slate-800 rounded-2xl p-4",children:[a.jsx("p",{className:"text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2",children:"Role"}),a.jsx("p",{className:"font-black uppercase",children:g.role})]})]}),a.jsx("div",{className:"flex justify-end pt-2",children:a.jsx(ne,{variant:"outline",onClick:()=>{b(!1),v(null)},className:"rounded-2xl",children:"Close"})})]})}),a.jsx(gr,{isOpen:y,onClose:()=>{w(!1),v(null)},onConfirm:W,title:(g==null?void 0:g.status)==="ACTIVE"?"Suspend Administrator":"Activate Administrator",message:`Are you sure you want to ${(g==null?void 0:g.status)==="ACTIVE"?"suspend":"activate"} ${g==null?void 0:g.fullName}?`,loading:S}),a.jsx(gr,{isOpen:C,onClose:()=>{j(!1),v(null)},onConfirm:de,title:"Remove Store Administrator",message:`Are you sure you want to permanently remove ${g==null?void 0:g.fullName}?`,loading:E})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})},$U=()=>{if(!my)throw new Error("Missing env var: VITE_BASE_URL_FILE_UPLOAD");return my},VL=async e=>{const t=$U(),n=new FormData;e.forEach(r=>{n.append("files",r)});try{const r=await Ve.post(Fi(t,"/files/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});if(r.data.status==="success")return r.data.data.files.map(s=>({id:s.id,url:s.url,originalName:s.originalName,size:s.size,type:s.type}));throw new Error("Upload failed")}catch(r){throw console.error("File upload error:",r),r}},i1={fullName:"",phone:"",vehicleType:"BIKE",franchiseId:"",cityId:"",email:"",password:""},UU=()=>{const e=Gr(),{isFranchiseAdmin:t}=Hs(),{riders:n,loading:r,fetchRiders:s,createRider:i}=z0(),{cities:o,fetchCities:l}=mf(),{franchises:c,myFranchise:d,fetchFranchises:f,fetchMyFranchise:h}=gf(),p=t()?d?[d]:[]:c,[m,g]=u.useState(!1),[v,x]=u.useState(!1),[b,y]=u.useState(!1),[w,S]=u.useState(i1),[k,C]=u.useState([]),[j,E]=u.useState("CNIC"),[L,N]=u.useState(""),[R,D]=u.useState(1),F=10,_=u.useRef(null);u.useEffect(()=>{s(),l({page:1,limit:100}),t()?h():f({page:1,limit:100})},[]);const z=u.useMemo(()=>{const P=(n==null?void 0:n.length)||0,M=(n==null?void 0:n.filter(W=>["ACTIVE","APPROVED"].includes(W.status)).length)||0,se=(n==null?void 0:n.filter(W=>W.status==="APPLIED").length)||0;return{total:P,active:M,pending:se}},[n]),A=()=>{const P=p==null?void 0:p[0];S({...i1,franchiseId:(P==null?void 0:P.id)||"",cityId:(P==null?void 0:P.cityId)||""}),C([]),g(!0)},G=async P=>{const M=Array.from(P.target.files||[]);if(M.length){y(!0);try{const W=(await VL(M)).map(te=>({documentType:j,documentUrl:te.url,originalName:te.originalName,id:crypto.randomUUID()}));C(te=>[...te,...W]),Fe.success("Document attached")}catch{Fe.error("Upload failed")}finally{y(!1),_.current&&(_.current.value="")}}},T=async P=>{if(P.preventDefault(),!w.franchiseId||!w.cityId)return Fe.error("Franchise and City are required");x(!0);try{await i({...w,documents:k.map(({documentType:M,documentUrl:se})=>({documentType:M,documentUrl:se}))}),g(!1)}catch{}finally{x(!1)}},O=u.useMemo(()=>L?n.filter(P=>{var M,se,W;return((M=P.fullName)==null?void 0:M.toLowerCase().includes(L.toLowerCase()))||((se=P.phone)==null?void 0:se.toLowerCase().includes(L.toLowerCase()))||((W=P.email)==null?void 0:W.toLowerCase().includes(L.toLowerCase()))}):n,[n,L]),I=Math.ceil(O.length/F),V=u.useMemo(()=>{const P=(R-1)*F;return O.slice(P,P+F)},[O,R]),Z=u.useMemo(()=>[{key:"fullName",label:"Rider",render:(P,M)=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
font-black\r
text-sm\r
transition-all\r
duration-500\r
group-hover:scale-110\r
`,children:P==null?void 0:P[0]}),a.jsxs("div",{children:[a.jsx("div",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:P}),a.jsx("div",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
`,children:M.email})]})]})},{key:"phone",label:"Phone"},{key:"vehicleType",label:"Vehicle",render:P=>a.jsx("span",{className:`\r
px-3\r
py-1\r
rounded-full\r
bg-slate-100\r
dark:bg-slate-800\r
text-[10px]\r
font-black\r
tracking-[0.2em]\r
uppercase\r
text-slate-600\r
dark:text-slate-300\r
`,children:P})},{key:"status",label:"Status",render:P=>a.jsx(qn,{status:P})},{key:"actions",label:"",render:(P,M)=>a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>e(`/riders/${M.id}`),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
transition-all\r
duration-300\r
`,children:a.jsx(Yl,{size:16,className:"text-slate-500"})})}],[e]),K=`
bg-white/90
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
`;return a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Fleet Operations",subtitle:"Manage your delivery personnel"}),a.jsxs(X.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[a.jsx(X.div,{whileHover:{y:-3},className:`${K} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Fleet"}),a.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:z.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:a.jsx(Ts,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-3},className:`${K} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Active Riders"}),a.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:z.active})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:a.jsx(gt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-3},className:`${K} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Pending Review"}),a.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:z.pending})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:a.jsx(Qt,{size:24})})]})})]}),a.jsxs(X.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${K} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
flex-col\r
lg:flex-row\r
lg:items-center\r
justify-between\r
gap-4\r
bg-white/60\r
dark:bg-slate-900/40\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{children:[a.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:"Rider Command Stream"}),a.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Live fleet personnel overview"})]}),a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[a.jsxs("div",{className:"relative w-72",children:[a.jsx(jl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),a.jsx(Ee,{className:`\r
pl-10\r
h-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/50\r
backdrop-blur-xl\r
transition-all\r
duration-300\r
focus-visible:ring-2\r
focus-visible:ring-indigo-500/20\r
`,placeholder:"Search riders...",value:L,onChange:P=>N(P.target.value)})]}),a.jsxs(ne,{onClick:A,className:`\r
h-11\r
rounded-2xl\r
px-5\r
font-bold\r
gap-2\r
bg-indigo-600\r
hover:bg-indigo-700\r
shadow-lg\r
shadow-indigo-500/20\r
transition-all\r
duration-500\r
hover:scale-[1.02]\r
`,children:[a.jsx(Xo,{size:18}),"Initialize Rider"]})]})]}),a.jsx("div",{className:"p-4",children:r?a.jsx(zi,{rows:6}):a.jsx(Ks,{columns:Z,data:V})}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(R-1)*F+1," - ",Math.min(R*F,O.length)," ","of"," ",O.length]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:R===1,onClick:()=>D(P=>P-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[R," / ",I]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:R===I,onClick:()=>D(P=>P+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),m&&a.jsx(kn,{isOpen:!0,onClose:()=>g(!1),title:"Create New Rider",size:"lg",children:a.jsxs("form",{onSubmit:T,className:"space-y-5",children:[a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Franchise"}),a.jsxs(St,{value:w.franchiseId,onValueChange:P=>{const M=c.find(se=>se.id===P);S(se=>({...se,franchiseId:P,cityId:(M==null?void 0:M.cityId)||se.cityId}))},children:[a.jsx(pt,{className:"rounded-2xl h-11",children:a.jsx(kt,{placeholder:"Select Franchise"})}),a.jsx(mt,{children:p.map(P=>a.jsx(Ie,{value:P.id,children:P.name},P.id))})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"City"}),a.jsxs(St,{value:w.cityId,onValueChange:P=>S(M=>({...M,cityId:P})),children:[a.jsx(pt,{className:"rounded-2xl h-11",children:a.jsx(kt,{placeholder:"Select City"})}),a.jsx(mt,{children:o.map(P=>a.jsx(Ie,{value:P.id,children:P.name},P.id))})]})]})]}),a.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[a.jsx(Ee,{className:"rounded-2xl h-11",placeholder:"Full Name",value:w.fullName,onChange:P=>S(M=>({...M,fullName:P.target.value}))}),a.jsx(Ee,{className:"rounded-2xl h-11",placeholder:"Phone Number",value:w.phone,onChange:P=>S(M=>({...M,phone:P.target.value}))})]}),a.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[a.jsxs(St,{value:w.vehicleType,onValueChange:P=>S(M=>({...M,vehicleType:P})),children:[a.jsx(pt,{className:"rounded-2xl h-11",children:a.jsx(kt,{})}),a.jsxs(mt,{children:[a.jsx(Ie,{value:"BIKE",children:"Bike"}),a.jsx(Ie,{value:"MOTORBIKE",children:"Motorbike"}),a.jsx(Ie,{value:"VAN",children:"Van"})]})]}),a.jsx(Ee,{className:"col-span-2 rounded-2xl h-11",type:"email",placeholder:"Email Address",value:w.email,onChange:P=>S(M=>({...M,email:P.target.value}))})]}),a.jsx(Ee,{className:"rounded-2xl h-11",type:"password",placeholder:"Account Password",value:w.password,onChange:P=>S(M=>({...M,password:P.target.value}))}),a.jsxs("div",{className:`\r
border\r
border-dashed\r
border-slate-300\r
dark:border-slate-700\r
rounded-3xl\r
p-5\r
bg-slate-50/70\r
dark:bg-slate-900/40\r
space-y-4\r
`,children:[a.jsx(ve,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Rider Documents"}),a.jsxs("div",{className:"flex gap-3",children:[a.jsxs(St,{value:j,onValueChange:E,children:[a.jsx(pt,{className:"w-[220px] rounded-2xl h-11",children:a.jsx(kt,{})}),a.jsxs(mt,{children:[a.jsx(Ie,{value:"CNIC",children:"CNIC"}),a.jsx(Ie,{value:"DRIVING_LICENSE",children:"License"}),a.jsx(Ie,{value:"VEHICLE_REGISTRATION",children:"Vehicle Reg"})]})]}),a.jsx(ne,{type:"button",variant:"outline",onClick:()=>_.current.click(),disabled:b,className:"rounded-2xl h-11",children:b?a.jsx(_r,{className:"animate-spin mr-2",size:15}):"Select File"}),a.jsx("input",{hidden:!0,ref:_,type:"file",onChange:G})]}),a.jsx("div",{className:"space-y-2",children:k.map(P=>a.jsxs(X.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`\r
flex\r
justify-between\r
items-center\r
bg-white\r
dark:bg-slate-900/60\r
border\r
border-slate-200\r
dark:border-slate-800\r
rounded-2xl\r
p-3\r
`,children:[a.jsxs("span",{className:`\r
text-sm\r
font-medium\r
text-slate-700\r
dark:text-slate-300\r
`,children:[P.documentType,":"," ",a.jsx("span",{className:"text-slate-500",children:P.originalName})]}),a.jsx(Qo,{size:16,onClick:()=>C(M=>M.filter(se=>se.id!==P.id)),className:`\r
cursor-pointer\r
text-red-400\r
hover:text-red-500\r
transition-colors\r
`})]},P.id))})]}),a.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[a.jsx(ne,{type:"button",variant:"ghost",onClick:()=>g(!1),className:"rounded-2xl",children:"Cancel"}),a.jsx(ne,{disabled:v,type:"submit",className:`\r
min-w-[140px]\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,children:v?a.jsx(_r,{className:"animate-spin"}):"Create Rider"})]})]})})]})},Yi="https://api.barqibazar.org/franchise/api",Pa={getAll:async(e=1,t=10)=>(await pe.get(`${Yi}/rider-docs`,{params:{page:e,limit:t}})).data,getByRiderId:async e=>(await pe.get(`${Yi}/rider-docs/${e}`)).data,getById:async e=>(await pe.get(`${Yi}/rider-docs/single/${e}`)).data,create:async e=>(await pe.post(`${Yi}/rider-docs`,e)).data,update:async(e,t)=>(await pe.patch(`${Yi}/rider-docs/${e}`,t)).data,delete:async e=>(await pe.delete(`${Yi}/rider-docs/${e}`)).data},HU=()=>{const[e,t]=u.useState([]),[n,r]=u.useState(!1),[s,i]=u.useState(null),[o,l]=u.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=u.useCallback(async(m=1,g=10)=>{var v,x,b,y;r(!0),i(null);try{const w=await Pa.getAll(m,g),S=w.data||w;return t(S.items||[]),l(k=>{var C,j,E,L,N,R;return{page:((C=S.pagination)==null?void 0:C.page)||m,limit:((j=S.pagination)==null?void 0:j.limit)||g,total:((E=S.pagination)==null?void 0:E.total)||0,totalPages:((L=S.pagination)==null?void 0:L.totalPages)||0,hasNext:((N=S.pagination)==null?void 0:N.hasNext)||!1,hasPrev:((R=S.pagination)==null?void 0:R.hasPrev)||!1}}),S}catch(w){i(((x=(v=w.response)==null?void 0:v.data)==null?void 0:x.message)||"Failed to fetch documents"),oe({title:"Error",description:((y=(b=w.response)==null?void 0:b.data)==null?void 0:y.message)||"Failed to fetch documents",variant:"destructive"})}finally{r(!1)}},[]),d=u.useCallback(async m=>{var g,v,x,b;r(!0),i(null);try{const y=await Pa.getByRiderId(m),w=y.data||y;return t(w.items||[]),w}catch(y){i(((v=(g=y.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to fetch rider documents"),oe({title:"Error",description:((b=(x=y.response)==null?void 0:x.data)==null?void 0:b.message)||"Failed to fetch rider documents",variant:"destructive"})}finally{r(!1)}},[]);return{documents:e,loading:n,error:s,pagination:o,fetchDocuments:c,fetchDocumentsByRider:d,createDocument:async m=>{var g,v;r(!0);try{const x=await Pa.create(m);return oe({title:"Success",description:"Document created successfully"}),x}catch(x){const b=((v=(g=x.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to create document";throw oe({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}},updateDocument:async(m,g)=>{var v,x;r(!0);try{const b=await Pa.update(m,g);return await c(o.page,o.limit),oe({title:"Success",description:"Document updated successfully"}),b}catch(b){const y=((x=(v=b.response)==null?void 0:v.data)==null?void 0:x.message)||"Failed to update document";throw oe({title:"Error",description:y,variant:"destructive"}),new Error(y)}finally{r(!1)}},deleteDocument:async m=>{var g,v;r(!0);try{const x=await Pa.delete(m);return oe({title:"Success",description:"Document deleted successfully"}),x}catch(x){const b=((v=(g=x.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to delete document";throw oe({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}}}},WU=u0;function KU(){var O,I,V,Z,K;const{id:e}=hj(),t=Gr(),{isAdmin:n,isFranchiseAdmin:r}=Hs(),s=n()||r(),{rider:i,fetchRider:o,updateRider:l,changeStatus:c}=z0(),{createDocument:d,deleteDocument:f}=HU(),h=u.useMemo(()=>Ve.create({baseURL:WU,headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}}),[]),[p,m]=u.useState("info"),[g,v]=u.useState({fullName:"",phone:"",email:"",vehicleType:""}),[x,b]=u.useState("CNIC"),y=u.useRef(null),[w,S]=u.useState(null),[k,C]=u.useState(!1),[j,E]=u.useState(""),[L,N]=u.useState("ADMIN_TOPUP"),[R,D]=u.useState(!1),F=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-orange-500/10
`,_=u.useCallback(async()=>{const P=await o(e);P&&v({fullName:P.fullName||"",phone:P.phone||"",email:P.email||"",vehicleType:P.vehicleType||""})},[e,o]),z=u.useCallback(async()=>{var P,M,se;C(!0);try{const W=await h.get(`/wallets/${e}?currency=PKR`);S((P=W.data)==null?void 0:P.data)}catch(W){if(((M=W.response)==null?void 0:M.status)===404){const te=await h.post("/wallets",{ownerId:e,ownerType:"RIDER",currency:"PKR"});S((se=te.data)==null?void 0:se.data),Fe.success("New wallet initialized for rider")}else Fe.error("Financial records unavailable")}finally{C(!1)}},[e,h]);u.useEffect(()=>{_(),z()},[_,z]);const A=async()=>{if(!j||parseFloat(j)<=0)return Fe.error("Enter valid amount");D(!0);try{await h.post(`/wallets/owner/${e}/credit`,{amount:parseFloat(j),reason:L,currency:"PKR",referenceId:`REF-${Date.now()}`,idempotencyKey:`credit-${e}-${Date.now()}`}),Fe.success(`Credited PKR ${j}`),E(""),z()}catch{Fe.error("Transaction failed")}finally{D(!1)}},G=async P=>{const M=Array.from(P.target.files||[]);if(M.length)try{const se=await VL(M);await d({riderId:e,documentType:x,documentUrl:se[0].url}),Fe.success("Document uploaded"),_()}catch{Fe.error("Upload failed")}},T=Math.min(w!=null&&w.balance?w.balance/1e3:0,100);return a.jsx(Pn,{children:a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Rider Intelligence",subtitle:`Live Operational Profile • ${e==null?void 0:e.slice(0,8)}`}),a.jsxs(X.div,{initial:{opacity:0,y:20,filter:"blur(10px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:.7},className:`\r
relative\r
overflow-hidden\r
p-6\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsx(X.div,{whileHover:{y:-2},className:`
${F}
rounded-[2.5rem]
overflow-hidden
`,children:a.jsxs("div",{className:`\r
p-8\r
flex\r
flex-col\r
lg:flex-row\r
justify-between\r
gap-8\r
`,children:[a.jsxs("div",{className:"flex items-start gap-5",children:[a.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>t("/riders"),className:`\r
rounded-2xl\r
hover:bg-slate-100\r
dark:hover:bg-slate-800\r
`,children:a.jsx(iC,{size:20})}),a.jsx("div",{className:`\r
w-20\r
h-20\r
rounded-[2rem]\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
flex\r
items-center\r
justify-center\r
text-3xl\r
font-black\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:(O=g.fullName)==null?void 0:O[0]}),a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("h2",{className:`\r
text-3xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:g.fullName||"Loading..."}),a.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[a.jsx(qn,{status:i==null?void 0:i.status}),a.jsx("span",{className:`\r
text-xs\r
uppercase\r
font-black\r
tracking-[0.2em]\r
text-emerald-500\r
`,children:"Fleet Active"})]})]}),a.jsxs("div",{className:`\r
flex\r
flex-wrap\r
gap-4\r
text-sm\r
text-slate-600\r
dark:text-slate-400\r
`,children:[a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(Cl,{size:14}),g.phone]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(kl,{size:14}),g.email]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(wl,{size:14}),g.vehicleType]})]})]})]}),a.jsxs("div",{className:`\r
min-w-[280px]\r
rounded-[2rem]\r
p-6\r
bg-gradient-to-br\r
from-[#081A17]\r
via-[#03140F]\r
to-black\r
text-white\r
border\r
border-white/10\r
shadow-[0_20px_80px_rgba(0,0,0,0.45)]\r
relative\r
overflow-hidden\r
`,children:[a.jsx("div",{className:`\r
absolute\r
top-[-30%]\r
right-[-20%]\r
w-56\r
h-56\r
bg-emerald-500/10\r
rounded-full\r
blur-[100px]\r
`}),a.jsxs("div",{className:"relative z-10",children:[a.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[a.jsx(Ug,{size:14,className:"text-emerald-400"}),a.jsx("span",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.3em]\r
font-black\r
text-emerald-400\r
`,children:"Financial Node"})]}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs text-slate-400",children:"Wallet Balance"}),a.jsx("h3",{className:"text-3xl font-black mt-2",children:k?"...":`PKR ${((I=w==null?void 0:w.balance)==null?void 0:I.toLocaleString())||0}`})]}),a.jsx(El,{className:"text-emerald-400",size:32})]}),a.jsxs("div",{className:"mt-6 space-y-2",children:[a.jsxs("div",{className:`\r
flex\r
justify-between\r
text-[10px]\r
uppercase\r
tracking-widest\r
font-black\r
text-slate-400\r
`,children:[a.jsx("span",{children:"Wallet Health"}),a.jsxs("span",{children:[T,"%"]})]}),a.jsx(mr,{value:T,className:`\r
h-1.5\r
bg-slate-800\r
`})]})]})]})]})}),a.jsxs(BL,{value:p,onValueChange:m,className:"space-y-8",children:[a.jsxs(tv,{className:`\r
bg-white\r
dark:bg-slate-900/70\r
border\r
border-slate-200\r
dark:border-slate-800\r
rounded-2xl\r
p-1\r
h-auto\r
grid\r
grid-cols-4\r
w-full\r
md:w-[700px]\r
`,children:[a.jsx(bs,{value:"info",children:"Info"}),a.jsx(bs,{value:"wallet",children:"Wallet"}),a.jsx(bs,{value:"docs",children:"Documents"}),s&&a.jsx(bs,{value:"admin",children:"Admin"})]}),a.jsx(ws,{value:"info",children:a.jsxs(X.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`
${F}
rounded-[2.5rem]
p-8
`,children:[a.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:a.jsx($R,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:`\r
text-xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Rider Identity"}),a.jsx("p",{className:"text-sm text-slate-500",children:"Operational profile information"})]})]}),a.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Full Name"}),a.jsx(Ee,{value:g.fullName,onChange:P=>v(M=>({...M,fullName:P.target.value})),className:`\r
h-12\r
rounded-2xl\r
`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Vehicle Type"}),a.jsxs(St,{value:g.vehicleType,onValueChange:P=>v(M=>({...M,vehicleType:P})),children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{})}),a.jsxs(mt,{children:[a.jsx(Ie,{value:"BIKE",children:"Bike"}),a.jsx(Ie,{value:"MOTORBIKE",children:"Motorbike"}),a.jsx(Ie,{value:"CAR",children:"Car"}),a.jsx(Ie,{value:"VAN",children:"Van"})]})]})]})]}),a.jsxs("div",{className:"space-y-5",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Phone"}),a.jsx(Ee,{disabled:!0,value:g.phone,className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Email"}),a.jsx(Ee,{disabled:!0,value:g.email,className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
`})]})]})]}),s&&a.jsx("div",{className:"mt-8",children:a.jsx(ne,{onClick:()=>l(e,g),className:`\r
h-12\r
px-8\r
rounded-2xl\r
font-bold\r
`,children:"Update Rider"})})]})}),a.jsx(ws,{value:"wallet",children:a.jsxs("div",{className:"space-y-8",children:[a.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[a.jsxs(X.div,{whileHover:{y:-3},className:`
${F}
rounded-[2.5rem]
p-8
`,children:[a.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
`,children:a.jsx(El,{size:20})}),a.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Wallet Stats"})]}),a.jsxs("h2",{className:`\r
text-4xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:["Rs."," ",((V=w==null?void 0:w.balance)==null?void 0:V.toLocaleString())||0]}),a.jsxs("div",{className:"mt-6 space-y-3",children:[a.jsxs("div",{className:`\r
flex\r
justify-between\r
text-sm\r
`,children:[a.jsx("span",{className:"text-slate-500",children:"Status"}),a.jsx("span",{className:"font-bold text-emerald-500",children:(w==null?void 0:w.status)||"ACTIVE"})]}),a.jsxs("div",{className:`\r
flex\r
justify-between\r
text-sm\r
`,children:[a.jsx("span",{className:"text-slate-500",children:"Currency"}),a.jsx("span",{className:"font-bold",children:"PKR"})]})]})]}),s&&a.jsxs(X.div,{whileHover:{y:-3},className:`
${F}
lg:col-span-2
rounded-[2.5rem]
p-8
`,children:[a.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:a.jsx(Qt,{size:20})}),a.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Credit Wallet"})]}),a.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Amount"}),a.jsx(Ee,{type:"number",value:j,onChange:P=>E(P.target.value),placeholder:"0.00",className:`\r
h-12\r
rounded-2xl\r
`})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{children:"Reason"}),a.jsxs(St,{value:L,onValueChange:N,children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{})}),a.jsxs(mt,{children:[a.jsx(Ie,{value:"ADMIN_TOPUP",children:"Admin Top-up"}),a.jsx(Ie,{value:"BONUS",children:"Bonus"}),a.jsx(Ie,{value:"CORRECTION",children:"Correction"}),a.jsx(Ie,{value:"REFERRAL",children:"Referral"})]})]})]}),a.jsx("div",{className:"flex items-end",children:a.jsx(ne,{onClick:A,disabled:R,className:`\r
w-full\r
h-12\r
rounded-2xl\r
font-bold\r
`,children:R?a.jsx(_r,{className:"animate-spin"}):"Credit Wallet"})})]})]})]}),a.jsxs(X.div,{whileHover:{y:-3},className:`
${F}
rounded-[2.5rem]
overflow-hidden
`,children:[a.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
`,children:a.jsx(zp,{size:18})}),a.jsxs("div",{children:[a.jsx("h3",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Transaction Ledger"}),a.jsx("p",{className:"text-xs text-slate-500",children:"Latest financial activity"})]})]}),a.jsx(ne,{variant:"ghost",onClick:z,className:`\r
rounded-2xl\r
`,children:"Refresh"})]}),a.jsx("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:(Z=w==null?void 0:w.transactions)!=null&&Z.length?w.transactions.map(P=>a.jsxs(X.div,{whileHover:{x:4},className:`\r
p-5\r
flex\r
items-center\r
justify-between\r
hover:bg-slate-50\r
dark:hover:bg-slate-900/40\r
transition-all\r
duration-500\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`
p-3
rounded-2xl
${P.type==="CREDIT"?"bg-emerald-500/10 text-emerald-500":"bg-red-500/10 text-red-500"}
`,children:P.type==="CREDIT"?a.jsx(Fp,{size:20}):a.jsx(aC,{size:20})}),a.jsxs("div",{children:[a.jsx("p",{className:`\r
font-bold\r
text-slate-800\r
dark:text-white\r
`,children:P.reason.replace(/_/g," ")}),a.jsx("p",{className:"text-xs text-slate-500 mt-1",children:new Date(P.createdAt).toLocaleString()})]})]}),a.jsxs("div",{className:"text-right",children:[a.jsxs("p",{className:`
font-black
${P.type==="CREDIT"?"text-emerald-500":"text-red-500"}
`,children:[P.type==="CREDIT"?"+":"-"," ",P.amount.toLocaleString()]}),a.jsxs("p",{className:"text-xs text-slate-500 font-mono",children:["REF:"," ",P.id.slice(0,8)]})]})]},P.id)):a.jsx("div",{className:`\r
p-16\r
text-center\r
text-slate-500\r
`,children:"No transaction history"})})]})]})}),a.jsx(ws,{value:"docs",children:a.jsxs(X.div,{whileHover:{y:-3},className:`
${F}
rounded-[2.5rem]
overflow-hidden
`,children:[a.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsxs("div",{children:[a.jsx("h3",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Compliance Documents"}),a.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Rider verification records"})]}),a.jsxs("div",{className:"flex gap-3",children:[a.jsxs(St,{value:x,onValueChange:b,children:[a.jsx(pt,{className:`\r
w-40\r
h-10\r
rounded-2xl\r
`,children:a.jsx(kt,{})}),a.jsx(mt,{children:["CNIC","LICENSE","VEHICLE","REGISTRATION"].map(P=>a.jsx(Ie,{value:P,children:P},P))})]}),a.jsxs(ne,{onClick:()=>y.current.click(),className:`\r
rounded-2xl\r
`,children:[a.jsx(VR,{size:14,className:"mr-2"}),"Upload"]}),a.jsx("input",{hidden:!0,ref:y,type:"file",onChange:G})]})]}),a.jsx("div",{className:"p-6 space-y-3",children:(K=i==null?void 0:i.documents)!=null&&K.length?i.documents.map(P=>a.jsxs(X.div,{whileHover:{scale:1.01},className:`\r
p-4\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-800\r
bg-slate-50\r
dark:bg-slate-900/40\r
flex\r
justify-between\r
items-center\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:a.jsx(jR,{size:18})}),a.jsxs("div",{children:[a.jsx("p",{className:`\r
font-bold\r
text-slate-800\r
dark:text-white\r
`,children:P.documentType}),a.jsx("a",{href:P.documentUrl,target:"_blank",rel:"noreferrer",className:`\r
text-xs\r
text-indigo-500\r
hover:underline\r
`,children:"View Attachment"})]})]}),a.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>f(P.id),className:`\r
rounded-2xl\r
hover:bg-red-500/10\r
`,children:a.jsx(_i,{size:16,className:"text-red-500"})})]},P.id)):a.jsx("div",{className:`\r
p-16\r
text-center\r
text-slate-500\r
`,children:"No documents uploaded"})})]})}),a.jsx(ws,{value:"admin",children:a.jsxs(X.div,{whileHover:{y:-3},className:`\r
rounded-[2.5rem]\r
overflow-hidden\r
border\r
border-red-200\r
dark:border-red-900/30\r
bg-white\r
dark:bg-slate-900/70\r
shadow-[0_10px_40px_rgba(0,0,0,0.06)]\r
`,children:[a.jsx("div",{className:`\r
p-6\r
border-b\r
border-red-100\r
dark:border-red-900/20\r
bg-red-50/70\r
dark:bg-red-950/10\r
`,children:a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-red-500/10\r
text-red-500\r
`,children:a.jsx(gt,{size:18})}),a.jsxs("div",{children:[a.jsx("h3",{className:"font-black text-red-500",children:"System Controls"}),a.jsx("p",{className:"text-xs text-red-400 mt-1",children:"Administrative rider management"})]})]})}),a.jsx("div",{className:"p-8",children:a.jsxs("div",{className:"flex flex-wrap gap-4",children:[a.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
border-emerald-200\r
text-emerald-500\r
hover:bg-emerald-50\r
`,onClick:()=>c(e,"ACTIVE","Admin Action"),children:"Set Active"}),a.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
border-yellow-200\r
text-yellow-500\r
hover:bg-yellow-50\r
`,onClick:()=>c(e,"SUSPENDED","Admin Action"),children:"Suspend"}),a.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
border-red-200\r
text-red-500\r
hover:bg-red-50\r
`,onClick:()=>c(e,"BLOCKED","Admin Action"),children:"Block Account"})]})})]})})]})]})]})})}var kf="Switch",[GU]=Vr(kf),[qU,ZU]=GU(kf),$L=u.forwardRef((e,t)=>{const{__scopeSwitch:n,name:r,checked:s,defaultChecked:i,required:o,disabled:l,value:c="on",onCheckedChange:d,form:f,...h}=e,[p,m]=u.useState(null),g=Be(t,w=>m(w)),v=u.useRef(!1),x=p?f||!!p.closest("form"):!0,[b,y]=Li({prop:s,defaultProp:i??!1,onChange:d,caller:kf});return a.jsxs(qU,{scope:n,checked:b,disabled:l,children:[a.jsx(Ce.button,{type:"button",role:"switch","aria-checked":b,"aria-required":o,"data-state":KL(b),"data-disabled":l?"":void 0,disabled:l,value:c,...h,ref:g,onClick:ye(e.onClick,w=>{y(S=>!S),x&&(v.current=w.isPropagationStopped(),v.current||w.stopPropagation())})}),x&&a.jsx(WL,{control:p,bubbles:!v.current,name:r,value:c,checked:b,required:o,disabled:l,form:f,style:{transform:"translateX(-100%)"}})]})});$L.displayName=kf;var UL="SwitchThumb",HL=u.forwardRef((e,t)=>{const{__scopeSwitch:n,...r}=e,s=ZU(UL,n);return a.jsx(Ce.span,{"data-state":KL(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:t})});HL.displayName=UL;var YU="SwitchBubbleInput",WL=u.forwardRef(({__scopeSwitch:e,control:t,checked:n,bubbles:r=!0,...s},i)=>{const o=u.useRef(null),l=Be(o,i),c=WE(n),d=RC(t);return u.useEffect(()=>{const f=o.current;if(!f)return;const h=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(h,"checked").set;if(c!==n&&m){const g=new Event("click",{bubbles:r});m.call(f,n),f.dispatchEvent(g)}},[c,n,r]),a.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...s,tabIndex:-1,ref:l,style:{...s.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});WL.displayName=YU;function KL(e){return e?"checked":"unchecked"}var GL=$L,XU=HL;const Bm=u.forwardRef(({className:e,...t},n)=>a.jsx(GL,{className:he("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",e),...t,ref:n,children:a.jsx(XU,{className:he("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));Bm.displayName=GL.displayName;const zh=e=>Fi(sc,e),ku={getAll:async(e=1,t=100)=>(await pe.get(zh("/roles"),{params:{page:e,limit:t}})).data,create:async e=>(await pe.post(zh("/roles"),e)).data,delete:async e=>(await pe.delete(zh(`/roles/${e}`))).data},o1=["GLOBAL","CITY","FRANCHISE","STORE"],Bh={email:"",password:"",fullName:"",phone:""},Vh={roleCode:"",scopeType:"GLOBAL",scopeId:""};function QU(){var Ys;const[e,t]=u.useState([]),[n,r]=u.useState([]),[s,i]=u.useState(!0),[o,l]=u.useState({total:0,page:1,limit:10,totalPages:1}),[c,d]=u.useState(1),[f]=u.useState(10),[h,p]=u.useState(!1),[m,g]=u.useState(!1),[v,x]=u.useState(!1),[b,y]=u.useState(Bh),[w,S]=u.useState(Vh),[k,C]=u.useState(!1),[j,E]=u.useState(null),[L,N]=u.useState(!1),[R,D]=u.useState(null),[F,_]=u.useState(""),[z,A]=u.useState(!1),[G,T]=u.useState(!1),[O,I]=u.useState(null),[V,Z]=u.useState("GLOBAL"),[K,P]=u.useState(""),[M,se]=u.useState(!1),[W,te]=u.useState([]),[de,Q]=u.useState(!1);u.useEffect(()=>{const Y=setTimeout(()=>{p(!0)},250);return()=>clearTimeout(Y)},[]);const ie=u.useCallback(async Y=>{var ge;if(Y==="GLOBAL"){te([]);return}Q(!0),te([]);try{let Me=[];if(Y==="CITY"){const Ue=await Ia.getAll(1,100),We=(Ue==null?void 0:Ue.data)||Ue;Me=(We==null?void 0:We.items)||[]}else if(Y==="FRANCHISE"){const Ue=await Qi.getAll(1,100),We=(Ue==null?void 0:Ue.data)||Ue;Me=(We==null?void 0:We.items)||[]}else if(Y==="STORE"){const Ue=await pe.get(`${rc}/stores`,{params:{page:1,limit:100}}),We=((ge=Ue==null?void 0:Ue.data)==null?void 0:ge.data)||(Ue==null?void 0:Ue.data)||{};Me=(We==null?void 0:We.items)||[]}te(Me)}catch{te([])}finally{Q(!1)}},[]),me=u.useCallback(async()=>{try{const Y=await ku.getAll(),ge=(Y==null?void 0:Y.data)||Y;r((ge==null?void 0:ge.items)||[])}catch{oe({title:"Failed to load roles",variant:"destructive"})}},[]),J=u.useCallback(async()=>{i(!0);try{const Y=await nr.getAll(c,f),ge=(Y==null?void 0:Y.data)||Y;t((ge==null?void 0:ge.items)||[]);const Me=(ge==null?void 0:ge.meta)||(ge==null?void 0:ge.pagination)||{};l({total:Me.total||0,page:Me.page||c,limit:Me.limit||f,totalPages:Me.totalPages||1})}catch{oe({title:"Failed to load users",variant:"destructive"})}finally{i(!1)}},[c,f]);u.useEffect(()=>{J(),me()},[J]);const q=u.useMemo(()=>{const Y=o.total||0,ge=e.filter(We=>We.isActive).length||0,Me=e.filter(We=>!We.isActive).length||0,Ue=Y>0?Math.round(ge/Y*100):0;return{total:Y,active:ge,inactive:Me,efficiency:Ue}},[e,o]),$=async Y=>{var ge,Me,Ue,We,Qn;if(Y.preventDefault(),v){if(!w.roleCode){oe({title:"Role is required for staff user",variant:"destructive"});return}if(w.scopeType!=="GLOBAL"&&!w.scopeId){oe({title:"Scope ID required for non-global scope",variant:"destructive"});return}}C(!0);try{v?await nr.createStaff({...b,...w,phone:b.phone||void 0,scopeId:w.scopeType==="GLOBAL"?void 0:w.scopeId}):await nr.create({...b,phone:b.phone||void 0}),oe({title:"User created successfully"}),g(!1),y(Bh),S(Vh),x(!1),J()}catch(br){const wr=((Ue=(Me=(ge=br.response)==null?void 0:ge.data)==null?void 0:Me.data)==null?void 0:Ue.message)||((Qn=(We=br.response)==null?void 0:We.data)==null?void 0:Qn.message)||"Failed to create user";oe({title:Array.isArray(wr)?wr.join(", "):wr,variant:"destructive"})}finally{C(!1)}},ae=async Y=>{try{await nr.updateStatus(Y.id,!Y.isActive),oe({title:`User ${Y.isActive?"deactivated":"activated"}`}),J()}catch{oe({title:"Failed to update status",variant:"destructive"})}},le=Y=>{D(Y),_(""),N(!0)},De=async()=>{if(!(!R||!F)){A(!0);try{await nr.assignRole(R.id,F),oe({title:"Role assigned successfully"}),N(!1),D(null),J()}catch{oe({title:"Failed to assign role",variant:"destructive"})}finally{A(!1)}}},Xe=async Y=>{I(Y),Z("GLOBAL"),P(""),T(!0);try{const ge=await nr.getScope(Y.id),Me=(ge==null?void 0:ge.data)||ge;Me!=null&&Me.scopeType&&(Z(Me.scopeType),P(Me.scopeId||""),ie(Me.scopeType))}catch{}},yr=async()=>{if(O){se(!0);try{await nr.assignScope(O.id,V,K),oe({title:"Scope assigned successfully"}),T(!1),I(null)}catch{oe({title:"Failed to assign scope",variant:"destructive"})}finally{se(!1)}}},mn=async Y=>{try{await nr.removeScope(Y),oe({title:"Scope removed"}),T(!1),I(null)}catch{oe({title:"Failed to remove scope",variant:"destructive"})}},Zs=[{key:"fullName",label:"Identity",render:(Y,ge)=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500/20\r
to-indigo-600/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
shadow-lg\r
shadow-indigo-500/10\r
font-black\r
text-xs\r
uppercase\r
`,children:(Y==null?void 0:Y.split(" ").map(Me=>Me[0]).join("").slice(0,2))||"U"}),a.jsxs("div",{children:[a.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:Y}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:ge.email})]})]})},{key:"role",label:"Role Access",render:Y=>Y?a.jsxs("div",{className:`\r
inline-flex\r
items-center\r
gap-2\r
px-3\r
py-1.5\r
rounded-xl\r
bg-indigo-500/10\r
text-indigo-500\r
border\r
border-indigo-500/10\r
text-[11px]\r
font-black\r
tracking-[0.15em]\r
uppercase\r
`,children:[a.jsx(gt,{size:12}),Y]}):a.jsx("span",{className:"text-xs text-slate-400",children:"—"})},{key:"scopeType",label:"Scope Layer",render:Y=>Y?a.jsxs("div",{className:`\r
inline-flex\r
items-center\r
gap-2\r
px-3\r
py-1.5\r
rounded-xl\r
bg-orange-500/10\r
text-orange-500\r
border\r
border-orange-500/10\r
text-[11px]\r
font-black\r
tracking-[0.15em]\r
uppercase\r
`,children:[a.jsx(Us,{size:12}),Y]}):a.jsx("span",{className:"text-xs text-slate-400",children:"—"})},{key:"isActive",label:"Network Status",render:(Y,ge)=>a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(Bm,{checked:!!Y,onCheckedChange:()=>ae(ge)}),a.jsx(qn,{status:Y?"ACTIVE":"INACTIVE"})]})},{key:"actions",label:"Controls",render:(Y,ge)=>a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>E(ge),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
hover:text-indigo-500\r
transition-all\r
duration-300\r
`,children:a.jsx(Yl,{size:15})}),a.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>le(ge),className:`\r
rounded-xl\r
hover:bg-blue-500/10\r
hover:text-blue-500\r
transition-all\r
duration-300\r
`,children:a.jsx(qu,{size:15})}),a.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>Xe(ge),className:`\r
rounded-xl\r
hover:bg-orange-500/10\r
hover:text-orange-500\r
transition-all\r
duration-300\r
`,children:a.jsx(FR,{size:15})})]})}],xt=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-indigo-500/10
`;return h?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"User Management",subtitle:"Provision and manage system-wide user accounts and permissions"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[a.jsx(X.div,{whileHover:{y:-4},className:`${xt} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Users"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:q.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:a.jsx(Ts,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${xt} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Active Accounts"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:q.active})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(gt,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${xt} rounded-[2rem] p-6`,children:a.jsx("div",{className:"flex items-center justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"System Efficiency"}),a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[q.efficiency,"%"]}),a.jsx(Qt,{size:18,className:"text-indigo-500"})]})]})})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${xt} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"User Directory"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Manage authenticated platform operators"})]})]}),a.jsxs(ne,{onClick:()=>{g(!0),y(Bh),S(Vh),x(!1)},className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-indigo-600\r
hover:bg-indigo-700\r
text-white\r
font-black\r
shadow-xl\r
shadow-indigo-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
active:scale-95\r
`,children:[a.jsx(cC,{size:18,className:"mr-2"}),"Create User",a.jsx($r,{size:16,className:"ml-2"})]})]}),a.jsx("div",{className:"overflow-hidden",children:s?a.jsx(zi,{rows:6}):a.jsx(Ks,{columns:Zs,data:e,emptyMessage:"No users found"})}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(o.page-1)*o.limit+1," - ",Math.min(o.page*o.limit,o.total)," ","of"," ",o.total]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:o.page<=1,onClick:()=>d(Y=>Math.max(1,Y-1)),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:a.jsx(ql,{size:14})}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[o.page," / ",o.totalPages]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:o.page>=o.totalPages,onClick:()=>d(Y=>Y+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:a.jsx(Zl,{size:14})})]})]})]})]})]}),a.jsx(kn,{isOpen:m,onClose:()=>g(!1),title:"Initialize User Account",children:a.jsx("div",{className:`\r
max-h-[85vh]\r
overflow-y-auto\r
pr-2\r
`,children:a.jsxs("form",{onSubmit:$,className:"space-y-5 py-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(gt,{size:14}),"Full Name"]}),a.jsxs("div",{className:"relative",children:[a.jsx(gt,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"Ali Khan",value:b.fullName,onChange:Y=>y({...b,fullName:Y.target.value}),required:!0})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(kl,{size:14}),"Email Address"]}),a.jsxs("div",{className:"relative",children:[a.jsx(kl,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{type:"email",className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"admin@barqi.pk",value:b.email,onChange:Y=>y({...b,email:Y.target.value}),required:!0})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Cl,{size:14}),"Contact Number"]}),a.jsxs("div",{className:"relative",children:[a.jsx(Cl,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"03001234567",value:b.phone,onChange:Y=>y({...b,phone:Y.target.value})})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Sl,{size:14}),"Password"]}),a.jsxs("div",{className:"relative",children:[a.jsx(Sl,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),a.jsx(Ee,{type:"password",className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"••••••••",value:b.password,onChange:Y=>y({...b,password:Y.target.value}),required:!0})]})]}),a.jsx("div",{className:`\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-800\r
p-4\r
bg-slate-50\r
dark:bg-slate-900/40\r
`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"font-black text-sm text-slate-800 dark:text-white",children:"Staff Permissions"}),a.jsx("p",{className:"text-xs text-slate-500",children:"Assign operational access"})]}),a.jsx(Bm,{checked:v,onCheckedChange:x})]})}),v&&a.jsxs("div",{className:`\r
space-y-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
pt-5\r
`,children:[a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Role"}),a.jsxs(St,{value:w.roleCode,onValueChange:Y=>S({...w,roleCode:Y}),children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{placeholder:"Select role"})}),a.jsx(mt,{children:n.map(Y=>a.jsx(Ie,{value:Y.code,children:Y.name},Y.id))})]})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope Type"}),a.jsxs(St,{value:w.scopeType,onValueChange:Y=>{S({...w,scopeType:Y,scopeId:""}),ie(Y)},children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{})}),a.jsx(mt,{children:o1.map(Y=>a.jsx(Ie,{value:Y,children:Y},Y))})]})]}),w.scopeType!=="GLOBAL"&&a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope ID"}),a.jsxs(St,{value:w.scopeId,onValueChange:Y=>S({...w,scopeId:Y}),disabled:de,children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{placeholder:de?"Loading...":`Select ${w.scopeType.toLowerCase()}`})}),a.jsx(mt,{children:W.map(Y=>a.jsxs(Ie,{value:Y.id,children:[Y.name,Y.code?` (${Y.code})`:""]},Y.id))})]})]})]}),a.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-5\r
border-t\r
`,children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>g(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),a.jsx(ne,{type:"submit",disabled:k,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
text-white\r
font-black\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:k?"Processing...":"Create User"})]})]})})}),a.jsx(kn,{isOpen:L,onClose:()=>{N(!1),D(null)},title:"Assign Role",children:a.jsxs("div",{className:"space-y-5 py-4",children:[a.jsxs("div",{className:`\r
rounded-2xl\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-4\r
border\r
border-slate-200\r
dark:border-slate-800\r
`,children:[a.jsx("p",{className:"text-sm text-slate-500",children:"Configure access role for"}),a.jsx("h3",{className:"font-black text-lg text-slate-800 dark:text-white mt-1",children:R==null?void 0:R.fullName})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Role"}),a.jsxs(St,{value:F,onValueChange:_,children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{placeholder:"Select role"})}),a.jsx(mt,{children:n.map(Y=>a.jsx(Ie,{value:Y.code,children:Y.name},Y.id))})]})]}),a.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-4\r
border-t\r
`,children:[a.jsx(ne,{variant:"outline",onClick:()=>N(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),a.jsx(ne,{disabled:!F||z,onClick:De,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,children:z?"Assigning...":"Assign Role"})]})]})}),a.jsx(kn,{isOpen:G,onClose:()=>{T(!1),I(null)},title:"Assign Scope",children:a.jsxs("div",{className:`\r
space-y-5\r
py-4\r
max-h-[80vh]\r
overflow-y-auto\r
pr-2\r
`,children:[a.jsxs("div",{className:`\r
rounded-2xl\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-4\r
border\r
border-slate-200\r
dark:border-slate-800\r
`,children:[a.jsx("p",{className:"text-sm text-slate-500",children:"Configure scope access for"}),a.jsx("h3",{className:"font-black text-lg text-slate-800 dark:text-white mt-1",children:O==null?void 0:O.fullName})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope Type"}),a.jsxs(St,{value:V,onValueChange:Y=>{Z(Y),P(""),ie(Y)},children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{})}),a.jsx(mt,{children:o1.map(Y=>a.jsx(Ie,{value:Y,children:Y},Y))})]})]}),V!=="GLOBAL"&&a.jsxs("div",{className:"space-y-2",children:[a.jsx(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope ID"}),a.jsxs(St,{value:K,onValueChange:P,disabled:de,children:[a.jsx(pt,{className:`\r
h-12\r
rounded-2xl\r
`,children:a.jsx(kt,{placeholder:de?"Loading...":`Select ${V.toLowerCase()}`})}),a.jsx(mt,{children:W.map(Y=>a.jsxs(Ie,{value:Y.id,children:[Y.name,Y.code?` (${Y.code})`:""]},Y.id))})]})]}),(O==null?void 0:O.scopeType)&&a.jsx("div",{className:`\r
rounded-2xl\r
bg-orange-500/10\r
border\r
border-orange-500/10\r
p-4\r
`,children:a.jsxs("p",{className:"text-sm text-orange-500 font-bold",children:["Current Scope:"," ",O.scopeType]})}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
gap-3\r
pt-4\r
border-t\r
`,children:[(O==null?void 0:O.scopeType)&&a.jsx(ne,{variant:"outline",className:`\r
h-12\r
rounded-2xl\r
text-red-600\r
border-red-200\r
hover:bg-red-50\r
`,onClick:()=>mn(O.id),children:"Remove Scope"}),a.jsx(ne,{variant:"outline",onClick:()=>T(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),a.jsx(ne,{disabled:M||V!=="GLOBAL"&&!K,onClick:yr,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-orange-600\r
hover:bg-orange-700\r
`,children:M?"Saving...":"Save Scope"})]})]})}),a.jsx(kn,{isOpen:!!j,onClose:()=>E(null),title:"User Intelligence",children:j&&a.jsxs("div",{className:`\r
space-y-4\r
py-4\r
`,children:[a.jsxs("div",{className:`\r
flex\r
items-center\r
gap-4\r
pb-5\r
border-b\r
`,children:[a.jsx("div",{className:`\r
w-16\r
h-16\r
rounded-3xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
flex\r
items-center\r
justify-center\r
font-black\r
text-xl\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:(Ys=j.fullName)==null?void 0:Ys.split(" ").map(Y=>Y[0]).join("").slice(0,2)}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-xl font-black text-slate-800 dark:text-white",children:j.fullName}),a.jsx("p",{className:"text-sm text-slate-500",children:j.email})]})]}),[["Phone",j.phone||"—"],["Role",j.role||"Not assigned"],["Scope",j.scopeType||"Not assigned"],["Provider",j.provider],["Verified",j.isVerified?"Yes":"No"],["Status",j.isActive?"Active":"Inactive"]].map(([Y,ge])=>a.jsxs("div",{className:`\r
grid\r
grid-cols-3\r
gap-4\r
items-center\r
rounded-2xl\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-4\r
`,children:[a.jsx("span",{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-[0.2em]\r
text-slate-500\r
`,children:Y}),a.jsx("span",{className:`\r
col-span-2\r
font-semibold\r
text-slate-800\r
dark:text-white\r
break-all\r
`,children:ge})]},Y)),a.jsx("div",{className:"pt-4",children:a.jsx(ne,{className:`\r
w-full\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,onClick:()=>E(null),children:"Close Window"})})]})})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-indigo-500/20\r
border-t-indigo-500\r
animate-spin\r
`})})}function JU(){const[e,t]=u.useState([]),[n,r]=u.useState(!0),[s,i]=u.useState({total:0,page:1,limit:10,totalPages:1}),[o,l]=u.useState(1),[c,d]=u.useState(!1),[f,h]=u.useState(!1),[p,m]=u.useState({code:"",name:""}),[g,v]=u.useState(!1),[x,b]=u.useState(null),[y,w]=u.useState(!1),S=u.useCallback(async()=>{r(!0);try{const N=await ku.getAll(o,10),R=(N==null?void 0:N.data)||N;t((R==null?void 0:R.items)||[]);const D=(R==null?void 0:R.meta)||(R==null?void 0:R.pagination)||{};i({total:D.total||0,page:D.page||o,limit:D.limit||10,totalPages:D.totalPages||1})}catch{oe({title:"Failed to load roles",variant:"destructive"})}finally{r(!1)}},[o]);u.useEffect(()=>{S()},[S]),u.useEffect(()=>{const N=setTimeout(()=>{d(!0)},250);return()=>clearTimeout(N)},[]);const k=u.useMemo(()=>{const N=s.total||0,R=(e==null?void 0:e.length)||0,D=N>0?Math.round(R/N*100):0;return{total:N,secured:R,efficiency:D}},[e,s]),C=async N=>{var R,D,F,_,z;N.preventDefault(),v(!0);try{await ku.create(p),oe({title:"Role created successfully"}),h(!1),m({code:"",name:""}),S()}catch(A){const G=((F=(D=(R=A.response)==null?void 0:R.data)==null?void 0:D.data)==null?void 0:F.message)||((z=(_=A.response)==null?void 0:_.data)==null?void 0:z.message)||"Failed to create role";oe({title:Array.isArray(G)?G.join(", "):G,variant:"destructive"})}finally{v(!1)}},j=async()=>{var N,R,D,F,_;if(x){w(!0);try{await ku.delete(x.id),oe({title:"Role deleted"}),b(null),S()}catch(z){const A=((D=(R=(N=z.response)==null?void 0:N.data)==null?void 0:R.data)==null?void 0:D.message)||((_=(F=z.response)==null?void 0:F.data)==null?void 0:_.message)||"Failed to delete role";oe({title:Array.isArray(A)?A.join(", "):A,variant:"destructive"})}finally{w(!1)}}},E=[{key:"name",label:"Security Role",render:(N,R)=>a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-gradient-to-br\r
from-yellow-500/20\r
to-orange-500/10\r
flex\r
items-center\r
justify-center\r
text-yellow-600\r
shadow-lg\r
shadow-yellow-500/10\r
`,children:a.jsx(gt,{size:18})}),a.jsxs("div",{children:[a.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:N}),a.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:"Access Authority"})]})]})},{key:"code",label:"Access Code",render:N=>a.jsx("code",{className:`\r
px-3\r
py-1.5\r
rounded-xl\r
bg-slate-100\r
dark:bg-slate-800\r
text-[11px]\r
font-mono\r
tracking-[0.2em]\r
font-bold\r
text-indigo-500\r
border\r
border-slate-200\r
dark:border-slate-700\r
`,children:N})},{key:"createdAt",label:"Initialized",render:N=>a.jsx("span",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300",children:N?new Date(N).toLocaleDateString():"-"})},{key:"actions",label:"Controls",render:(N,R)=>a.jsx("div",{className:"flex items-center gap-2",children:a.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>b(R),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,children:a.jsx(_i,{size:16})})})}],L=`
bg-white
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
hover:shadow-yellow-500/10
`;return c?a.jsxs(Pn,{children:[a.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[a.jsx(Yn,{title:"Role Authority Matrix",subtitle:"Configure and manage secure platform access roles"}),a.jsxs(X.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[a.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[a.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),a.jsx(X.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-yellow-500/10\r
rounded-full\r
blur-[120px]\r
`}),a.jsx(X.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),a.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[a.jsx(X.div,{whileHover:{y:-4},className:`${L} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Roles"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:k.total})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-yellow-500/10\r
flex\r
items-center\r
justify-center\r
text-yellow-500\r
`,children:a.jsx(LR,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${L} rounded-[2rem] p-6`,children:a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Active Authorities"}),a.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:k.secured})]}),a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:a.jsx(lC,{size:24})})]})}),a.jsx(X.div,{whileHover:{y:-4},className:`${L} rounded-[2rem] p-6`,children:a.jsx("div",{className:"flex items-center justify-between",children:a.jsxs("div",{className:"flex-1",children:[a.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"Security Coverage"}),a.jsxs("div",{className:"flex items-center justify-between mb-2",children:[a.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[k.efficiency,"%"]}),a.jsx(Qt,{size:18,className:"text-indigo-500"})]}),a.jsx(mr,{value:k.efficiency,className:"h-2 bg-slate-200 dark:bg-slate-800"})]})})})]}),a.jsxs(X.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${L} rounded-[2.5rem] overflow-hidden`,children:[a.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[a.jsxs("div",{className:"flex items-center gap-4",children:[a.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-yellow-500\r
to-orange-600\r
text-white\r
shadow-xl\r
shadow-yellow-500/20\r
`,children:a.jsx(Ur,{size:20})}),a.jsxs("div",{children:[a.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"Security Role Directory"}),a.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Centralized access control infrastructure"})]})]}),a.jsxs(ne,{onClick:()=>{h(!0),m({code:"",name:""})},disabled:n,className:`\r
rounded-2xl\r
h-12\r
px-6\r
bg-yellow-500\r
hover:bg-yellow-600\r
text-white\r
font-black\r
shadow-xl\r
shadow-yellow-500/20\r
transition-all\r
duration-500\r
hover:scale-105\r
active:scale-95\r
`,children:[a.jsx(Xo,{size:18,className:"mr-2"}),"Create Role",a.jsx($r,{size:16,className:"ml-2"})]})]}),a.jsx("div",{className:"overflow-hidden",children:n?a.jsx(zi,{rows:5}):a.jsx(Ks,{columns:E,data:e,emptyMessage:"No security roles configured"})}),a.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
justify-between\r
gap-4\r
p-5\r
border-t\r
border-white/5\r
bg-slate-50/50\r
dark:bg-slate-900/20\r
`,children:[a.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(s.page-1)*s.limit+1," - ",Math.min(s.page*s.limit,s.total)," ","of"," ",s.total]}),a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(ne,{size:"sm",variant:"outline",disabled:s.page<=1,onClick:()=>l(N=>Math.max(1,N-1)),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:a.jsx(ql,{size:16})}),a.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-yellow-500\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-yellow-500/20\r
`,children:[s.page," / ",s.totalPages]}),a.jsx(ne,{size:"sm",variant:"outline",disabled:s.page>=s.totalPages,onClick:()=>l(N=>N+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:a.jsx(Zl,{size:16})})]})]})]})]})]}),a.jsx(kn,{isOpen:f,onClose:()=>h(!1),title:"Initialize Security Role",children:a.jsxs("form",{onSubmit:C,className:"space-y-6 py-4",children:[a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Wd,{size:14}),"Access Code"]}),a.jsx(Ee,{className:`\r
h-12\r
rounded-2xl\r
font-mono\r
uppercase\r
tracking-[0.15em]\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-yellow-500\r
`,placeholder:"e.g. STORE_MANAGER",value:p.code,onChange:N=>m({...p,code:N.target.value.toUpperCase().replace(/\s/g,"_")}),required:!0}),a.jsx("p",{className:"text-[11px] text-slate-400",children:"Uppercase letters and underscores only"})]}),a.jsxs("div",{className:"space-y-2",children:[a.jsxs(ve,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[a.jsx(Sl,{size:14}),"Role Display Name"]}),a.jsx(Ee,{className:`\r
h-12\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-orange-500\r
`,placeholder:"e.g. Store Manager",value:p.name,onChange:N=>m({...p,name:N.target.value}),required:!0})]}),a.jsxs("div",{className:"flex gap-4 pt-4",children:[a.jsx(ne,{type:"button",variant:"outline",onClick:()=>h(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,disabled:g,children:"Cancel"}),a.jsx(ne,{type:"submit",disabled:g,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-yellow-500\r
hover:bg-yellow-600\r
text-white\r
font-bold\r
shadow-xl\r
shadow-yellow-500/20\r
`,children:g?"Processing...":"Create Role"})]})]})}),a.jsx(gr,{isOpen:!!x,onClose:()=>b(null),onConfirm:j,title:"Delete Security Role",message:`Deleting "${x==null?void 0:x.name}" may affect users currently assigned to this authority role. Continue?`,loading:y})]}):a.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:a.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-yellow-500/20\r
border-t-yellow-500\r
animate-spin\r
`})})}const e7=()=>{const e=xr();return u.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),a.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:a.jsxs("div",{className:"text-center",children:[a.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),a.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),a.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},t7=new dI,n7=()=>a.jsx(hI,{client:t7,children:a.jsx(e_,{children:a.jsxs(IO,{children:[a.jsx(C5,{}),a.jsx(nA,{}),a.jsx(dD,{children:a.jsxs(rD,{children:[a.jsx(Ot,{path:"/login",element:a.jsx(d8,{})}),a.jsx(Ot,{path:"/",element:a.jsx(Qp,{to:"/dashboard",replace:!0})}),a.jsx(Ot,{path:"/dashboard",element:a.jsx(An,{children:a.jsx(N8,{})})}),a.jsx(Ot,{path:"/cities",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN"],children:a.jsx(M8,{})})}),a.jsx(Ot,{path:"/franchises",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN"],children:a.jsx(tV,{})})}),a.jsx(Ot,{path:"/franchise-admins",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN"],children:a.jsx(yV,{})})}),a.jsx(Ot,{path:"/stores",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:a.jsx(xU,{})})}),a.jsx(Ot,{path:"/stores/:id",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:a.jsx(zU,{})})}),a.jsx(Ot,{path:"/storesAdmin",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:a.jsx(VU,{})})}),a.jsx(Ot,{path:"/riders",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:a.jsx(UU,{})})}),a.jsx(Ot,{path:"/riders/:id",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:a.jsx(KU,{})})}),a.jsx(Ot,{path:"/users",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN"],children:a.jsx(QU,{})})}),a.jsx(Ot,{path:"/roles",element:a.jsx(An,{allowedRoles:["SUPER_ADMIN"],children:a.jsx(JU,{})})}),a.jsx(Ot,{path:"*",element:a.jsx(e7,{})})]})})]})})});Tk(document.getElementById("root")).render(a.jsx(f8,{children:a.jsx(n7,{})}));
