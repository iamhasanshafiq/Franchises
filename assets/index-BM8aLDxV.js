var H0=e=>{throw TypeError(e)};var xf=(e,t,n)=>t.has(e)||H0("Cannot "+n);var Y=(e,t,n)=>(xf(e,t,"read from private field"),n?n.call(e):t.get(e)),Re=(e,t,n)=>t.has(e)?H0("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Se=(e,t,n,r)=>(xf(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),Lt=(e,t,n)=>(xf(e,t,"access private method"),n);var ic=(e,t,n,r)=>({set _(s){Se(e,t,s,n)},get _(){return Y(e,t,r)}});function IL(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const s in r)if(s!=="default"&&!(s in e)){const i=Object.getOwnPropertyDescriptor(r,s);i&&Object.defineProperty(e,s,i.get?i:{enumerable:!0,get:()=>r[s]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function t1(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var n1={exports:{}},yd={},r1={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Al=Symbol.for("react.element"),DL=Symbol.for("react.portal"),_L=Symbol.for("react.fragment"),FL=Symbol.for("react.strict_mode"),zL=Symbol.for("react.profiler"),BL=Symbol.for("react.provider"),VL=Symbol.for("react.context"),$L=Symbol.for("react.forward_ref"),UL=Symbol.for("react.suspense"),HL=Symbol.for("react.memo"),WL=Symbol.for("react.lazy"),W0=Symbol.iterator;function KL(e){return e===null||typeof e!="object"?null:(e=W0&&e[W0]||e["@@iterator"],typeof e=="function"?e:null)}var s1={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},i1=Object.assign,o1={};function Ko(e,t,n){this.props=e,this.context=t,this.refs=o1,this.updater=n||s1}Ko.prototype.isReactComponent={};Ko.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Ko.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function a1(){}a1.prototype=Ko.prototype;function Rm(e,t,n){this.props=e,this.context=t,this.refs=o1,this.updater=n||s1}var Am=Rm.prototype=new a1;Am.constructor=Rm;i1(Am,Ko.prototype);Am.isPureReactComponent=!0;var K0=Array.isArray,l1=Object.prototype.hasOwnProperty,Om={current:null},c1={key:!0,ref:!0,__self:!0,__source:!0};function u1(e,t,n){var r,s={},i=null,a=null;if(t!=null)for(r in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)l1.call(t,r)&&!c1.hasOwnProperty(r)&&(s[r]=t[r]);var l=arguments.length-2;if(l===1)s.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];s.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)s[r]===void 0&&(s[r]=l[r]);return{$$typeof:Al,type:e,key:i,ref:a,props:s,_owner:Om.current}}function GL(e,t){return{$$typeof:Al,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Im(e){return typeof e=="object"&&e!==null&&e.$$typeof===Al}function qL(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var G0=/\/+/g;function yf(e,t){return typeof e=="object"&&e!==null&&e.key!=null?qL(""+e.key):t.toString(36)}function $c(e,t,n,r,s){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Al:case DL:a=!0}}if(a)return a=e,s=s(a),e=r===""?"."+yf(a,0):r,K0(s)?(n="",e!=null&&(n=e.replace(G0,"$&/")+"/"),$c(s,t,n,"",function(u){return u})):s!=null&&(Im(s)&&(s=GL(s,n+(!s.key||a&&a.key===s.key?"":(""+s.key).replace(G0,"$&/")+"/")+e)),t.push(s)),1;if(a=0,r=r===""?".":r+":",K0(e))for(var l=0;l<e.length;l++){i=e[l];var c=r+yf(i,l);a+=$c(i,t,n,c,s)}else if(c=KL(e),typeof c=="function")for(e=c.call(e),l=0;!(i=e.next()).done;)i=i.value,c=r+yf(i,l++),a+=$c(i,t,n,c,s);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function oc(e,t,n){if(e==null)return e;var r=[],s=0;return $c(e,r,"","",function(i){return t.call(n,i,s++)}),r}function ZL(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Ut={current:null},Uc={transition:null},YL={ReactCurrentDispatcher:Ut,ReactCurrentBatchConfig:Uc,ReactCurrentOwner:Om};function d1(){throw Error("act(...) is not supported in production builds of React.")}Le.Children={map:oc,forEach:function(e,t,n){oc(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return oc(e,function(){t++}),t},toArray:function(e){return oc(e,function(t){return t})||[]},only:function(e){if(!Im(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Component=Ko;Le.Fragment=_L;Le.Profiler=zL;Le.PureComponent=Rm;Le.StrictMode=FL;Le.Suspense=UL;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=YL;Le.act=d1;Le.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=i1({},e.props),s=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Om.current),t.key!==void 0&&(s=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)l1.call(t,c)&&!c1.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Al,type:e.type,key:s,ref:i,props:r,_owner:a}};Le.createContext=function(e){return e={$$typeof:VL,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:BL,_context:e},e.Consumer=e};Le.createElement=u1;Le.createFactory=function(e){var t=u1.bind(null,e);return t.type=e,t};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:$L,render:e}};Le.isValidElement=Im;Le.lazy=function(e){return{$$typeof:WL,_payload:{_status:-1,_result:e},_init:ZL}};Le.memo=function(e,t){return{$$typeof:HL,type:e,compare:t===void 0?null:t}};Le.startTransition=function(e){var t=Uc.transition;Uc.transition={};try{e()}finally{Uc.transition=t}};Le.unstable_act=d1;Le.useCallback=function(e,t){return Ut.current.useCallback(e,t)};Le.useContext=function(e){return Ut.current.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e){return Ut.current.useDeferredValue(e)};Le.useEffect=function(e,t){return Ut.current.useEffect(e,t)};Le.useId=function(){return Ut.current.useId()};Le.useImperativeHandle=function(e,t,n){return Ut.current.useImperativeHandle(e,t,n)};Le.useInsertionEffect=function(e,t){return Ut.current.useInsertionEffect(e,t)};Le.useLayoutEffect=function(e,t){return Ut.current.useLayoutEffect(e,t)};Le.useMemo=function(e,t){return Ut.current.useMemo(e,t)};Le.useReducer=function(e,t,n){return Ut.current.useReducer(e,t,n)};Le.useRef=function(e){return Ut.current.useRef(e)};Le.useState=function(e){return Ut.current.useState(e)};Le.useSyncExternalStore=function(e,t,n){return Ut.current.useSyncExternalStore(e,t,n)};Le.useTransition=function(){return Ut.current.useTransition()};Le.version="18.3.1";r1.exports=Le;var d=r1.exports;const re=t1(d),Dm=IL({__proto__:null,default:re},[d]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var QL=d,XL=Symbol.for("react.element"),JL=Symbol.for("react.fragment"),eP=Object.prototype.hasOwnProperty,tP=QL.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,nP={key:!0,ref:!0,__self:!0,__source:!0};function f1(e,t,n){var r,s={},i=null,a=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(r in t)eP.call(t,r)&&!nP.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)s[r]===void 0&&(s[r]=t[r]);return{$$typeof:XL,type:e,key:i,ref:a,props:s,_owner:tP.current}}yd.Fragment=JL;yd.jsx=f1;yd.jsxs=f1;n1.exports=yd;var o=n1.exports,h1={exports:{}},hn={},p1={exports:{}},m1={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(M,O){var _=M.length;M.push(O);e:for(;0<_;){var U=_-1>>>1,q=M[U];if(0<s(q,O))M[U]=O,M[_]=q,_=U;else break e}}function n(M){return M.length===0?null:M[0]}function r(M){if(M.length===0)return null;var O=M[0],_=M.pop();if(_!==O){M[0]=_;e:for(var U=0,q=M.length,G=q>>>1;U<G;){var D=2*(U+1)-1,P=M[D],X=D+1,V=M[X];if(0>s(P,_))X<q&&0>s(V,P)?(M[U]=V,M[X]=_,U=X):(M[U]=P,M[D]=_,U=D);else if(X<q&&0>s(V,_))M[U]=V,M[X]=_,U=X;else break e}}return O}function s(M,O){var _=M.sortIndex-O.sortIndex;return _!==0?_:M.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,l=a.now();e.unstable_now=function(){return a.now()-l}}var c=[],u=[],f=1,h=null,p=3,m=!1,g=!1,v=!1,y=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function w(M){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=M)r(u),O.sortIndex=O.expirationTime,t(c,O);else break;O=n(u)}}function S(M){if(v=!1,w(M),!g)if(n(c)!==null)g=!0,A(k);else{var O=n(u);O!==null&&W(S,O.startTime-M)}}function k(M,O){g=!1,v&&(v=!1,b(E),E=-1),m=!0;var _=p;try{for(w(O),h=n(c);h!==null&&(!(h.expirationTime>O)||M&&!T());){var U=h.callback;if(typeof U=="function"){h.callback=null,p=h.priorityLevel;var q=U(h.expirationTime<=O);O=e.unstable_now(),typeof q=="function"?h.callback=q:h===n(c)&&r(c),w(O)}else r(c);h=n(c)}if(h!==null)var G=!0;else{var D=n(u);D!==null&&W(S,D.startTime-O),G=!1}return G}finally{h=null,p=_,m=!1}}var j=!1,C=null,E=-1,N=5,L=-1;function T(){return!(e.unstable_now()-L<N)}function R(){if(C!==null){var M=e.unstable_now();L=M;var O=!0;try{O=C(!0,M)}finally{O?z():(j=!1,C=null)}}else j=!1}var z;if(typeof x=="function")z=function(){x(R)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,F=I.port2;I.port1.onmessage=R,z=function(){F.postMessage(null)}}else z=function(){y(R,0)};function A(M){C=M,j||(j=!0,z())}function W(M,O){E=y(function(){M(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(M){M.callback=null},e.unstable_continueExecution=function(){g||m||(g=!0,A(k))},e.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<M?Math.floor(1e3/M):5},e.unstable_getCurrentPriorityLevel=function(){return p},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(M){switch(p){case 1:case 2:case 3:var O=3;break;default:O=p}var _=p;p=O;try{return M()}finally{p=_}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(M,O){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var _=p;p=M;try{return O()}finally{p=_}},e.unstable_scheduleCallback=function(M,O,_){var U=e.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?U+_:U):_=U,M){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=_+q,M={id:f++,callback:O,priorityLevel:M,startTime:_,expirationTime:q,sortIndex:-1},_>U?(M.sortIndex=_,t(u,M),n(c)===null&&M===n(u)&&(v?(b(E),E=-1):v=!0,W(S,_-U))):(M.sortIndex=q,t(c,M),g||m||(g=!0,A(k))),M},e.unstable_shouldYield=T,e.unstable_wrapCallback=function(M){var O=p;return function(){var _=p;p=O;try{return M.apply(this,arguments)}finally{p=_}}}})(m1);p1.exports=m1;var rP=p1.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sP=d,dn=rP;function te(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g1=new Set,Ja={};function Ri(e,t){Mo(e,t),Mo(e+"Capture",t)}function Mo(e,t){for(Ja[e]=t,e=0;e<t.length;e++)g1.add(t[e])}var Fr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_h=Object.prototype.hasOwnProperty,iP=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,q0={},Z0={};function oP(e){return _h.call(Z0,e)?!0:_h.call(q0,e)?!1:iP.test(e)?Z0[e]=!0:(q0[e]=!0,!1)}function aP(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function lP(e,t,n,r){if(t===null||typeof t>"u"||aP(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ht(e,t,n,r,s,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=s,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){jt[e]=new Ht(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];jt[t]=new Ht(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){jt[e]=new Ht(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){jt[e]=new Ht(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){jt[e]=new Ht(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){jt[e]=new Ht(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){jt[e]=new Ht(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){jt[e]=new Ht(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){jt[e]=new Ht(e,5,!1,e.toLowerCase(),null,!1,!1)});var _m=/[\-:]([a-z])/g;function Fm(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(_m,Fm);jt[t]=new Ht(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(_m,Fm);jt[t]=new Ht(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(_m,Fm);jt[t]=new Ht(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){jt[e]=new Ht(e,1,!1,e.toLowerCase(),null,!1,!1)});jt.xlinkHref=new Ht("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){jt[e]=new Ht(e,1,!1,e.toLowerCase(),null,!0,!0)});function zm(e,t,n,r){var s=jt.hasOwnProperty(t)?jt[t]:null;(s!==null?s.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(lP(t,n,s,r)&&(n=null),r||s===null?oP(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):s.mustUseProperty?e[s.propertyName]=n===null?s.type===3?!1:"":n:(t=s.attributeName,r=s.attributeNamespace,n===null?e.removeAttribute(t):(s=s.type,n=s===3||s===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Wr=sP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ac=Symbol.for("react.element"),Zi=Symbol.for("react.portal"),Yi=Symbol.for("react.fragment"),Bm=Symbol.for("react.strict_mode"),Fh=Symbol.for("react.profiler"),v1=Symbol.for("react.provider"),x1=Symbol.for("react.context"),Vm=Symbol.for("react.forward_ref"),zh=Symbol.for("react.suspense"),Bh=Symbol.for("react.suspense_list"),$m=Symbol.for("react.memo"),is=Symbol.for("react.lazy"),y1=Symbol.for("react.offscreen"),Y0=Symbol.iterator;function ua(e){return e===null||typeof e!="object"?null:(e=Y0&&e[Y0]||e["@@iterator"],typeof e=="function"?e:null)}var rt=Object.assign,bf;function Ta(e){if(bf===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);bf=t&&t[1]||""}return`
`+bf+e}var wf=!1;function Sf(e,t){if(!e||wf)return"";wf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var s=u.stack.split(`
`),i=r.stack.split(`
`),a=s.length-1,l=i.length-1;1<=a&&0<=l&&s[a]!==i[l];)l--;for(;1<=a&&0<=l;a--,l--)if(s[a]!==i[l]){if(a!==1||l!==1)do if(a--,l--,0>l||s[a]!==i[l]){var c=`
`+s[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=l);break}}}finally{wf=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ta(e):""}function cP(e){switch(e.tag){case 5:return Ta(e.type);case 16:return Ta("Lazy");case 13:return Ta("Suspense");case 19:return Ta("SuspenseList");case 0:case 2:case 15:return e=Sf(e.type,!1),e;case 11:return e=Sf(e.type.render,!1),e;case 1:return e=Sf(e.type,!0),e;default:return""}}function Vh(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Yi:return"Fragment";case Zi:return"Portal";case Fh:return"Profiler";case Bm:return"StrictMode";case zh:return"Suspense";case Bh:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x1:return(e.displayName||"Context")+".Consumer";case v1:return(e._context.displayName||"Context")+".Provider";case Vm:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $m:return t=e.displayName||null,t!==null?t:Vh(e.type)||"Memo";case is:t=e._payload,e=e._init;try{return Vh(e(t))}catch{}}return null}function uP(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vh(t);case 8:return t===Bm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Rs(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function b1(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function dP(e){var t=b1(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var s=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return s.call(this)},set:function(a){r=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function lc(e){e._valueTracker||(e._valueTracker=dP(e))}function w1(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=b1(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function gu(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function $h(e,t){var n=t.checked;return rt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Q0(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Rs(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function S1(e,t){t=t.checked,t!=null&&zm(e,"checked",t,!1)}function Uh(e,t){S1(e,t);var n=Rs(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hh(e,t.type,n):t.hasOwnProperty("defaultValue")&&Hh(e,t.type,Rs(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function X0(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Hh(e,t,n){(t!=="number"||gu(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Ma=Array.isArray;function fo(e,t,n,r){if(e=e.options,t){t={};for(var s=0;s<n.length;s++)t["$"+n[s]]=!0;for(n=0;n<e.length;n++)s=t.hasOwnProperty("$"+e[n].value),e[n].selected!==s&&(e[n].selected=s),s&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Rs(n),t=null,s=0;s<e.length;s++){if(e[s].value===n){e[s].selected=!0,r&&(e[s].defaultSelected=!0);return}t!==null||e[s].disabled||(t=e[s])}t!==null&&(t.selected=!0)}}function Wh(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(te(91));return rt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function J0(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(te(92));if(Ma(n)){if(1<n.length)throw Error(te(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Rs(n)}}function k1(e,t){var n=Rs(t.value),r=Rs(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ev(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function C1(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kh(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?C1(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var cc,j1=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,s){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,s)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(cc=cc||document.createElement("div"),cc.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=cc.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function el(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var _a={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fP=["Webkit","ms","Moz","O"];Object.keys(_a).forEach(function(e){fP.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),_a[t]=_a[e]})});function E1(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||_a.hasOwnProperty(e)&&_a[e]?(""+t).trim():t+"px"}function N1(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,s=E1(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,s):e[n]=s}}var hP=rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gh(e,t){if(t){if(hP[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(te(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(te(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(te(61))}if(t.style!=null&&typeof t.style!="object")throw Error(te(62))}}function qh(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zh=null;function Um(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Yh=null,ho=null,po=null;function tv(e){if(e=Dl(e)){if(typeof Yh!="function")throw Error(te(280));var t=e.stateNode;t&&(t=Cd(t),Yh(e.stateNode,e.type,t))}}function L1(e){ho?po?po.push(e):po=[e]:ho=e}function P1(){if(ho){var e=ho,t=po;if(po=ho=null,tv(e),t)for(e=0;e<t.length;e++)tv(t[e])}}function T1(e,t){return e(t)}function M1(){}var kf=!1;function R1(e,t,n){if(kf)return e(t,n);kf=!0;try{return T1(e,t,n)}finally{kf=!1,(ho!==null||po!==null)&&(M1(),P1())}}function tl(e,t){var n=e.stateNode;if(n===null)return null;var r=Cd(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(te(231,t,typeof n));return n}var Qh=!1;if(Fr)try{var da={};Object.defineProperty(da,"passive",{get:function(){Qh=!0}}),window.addEventListener("test",da,da),window.removeEventListener("test",da,da)}catch{Qh=!1}function pP(e,t,n,r,s,i,a,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(f){this.onError(f)}}var Fa=!1,vu=null,xu=!1,Xh=null,mP={onError:function(e){Fa=!0,vu=e}};function gP(e,t,n,r,s,i,a,l,c){Fa=!1,vu=null,pP.apply(mP,arguments)}function vP(e,t,n,r,s,i,a,l,c){if(gP.apply(this,arguments),Fa){if(Fa){var u=vu;Fa=!1,vu=null}else throw Error(te(198));xu||(xu=!0,Xh=u)}}function Ai(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function A1(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function nv(e){if(Ai(e)!==e)throw Error(te(188))}function xP(e){var t=e.alternate;if(!t){if(t=Ai(e),t===null)throw Error(te(188));return t!==e?null:e}for(var n=e,r=t;;){var s=n.return;if(s===null)break;var i=s.alternate;if(i===null){if(r=s.return,r!==null){n=r;continue}break}if(s.child===i.child){for(i=s.child;i;){if(i===n)return nv(s),e;if(i===r)return nv(s),t;i=i.sibling}throw Error(te(188))}if(n.return!==r.return)n=s,r=i;else{for(var a=!1,l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a){for(l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a)throw Error(te(189))}}if(n.alternate!==r)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?e:t}function O1(e){return e=xP(e),e!==null?I1(e):null}function I1(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=I1(e);if(t!==null)return t;e=e.sibling}return null}var D1=dn.unstable_scheduleCallback,rv=dn.unstable_cancelCallback,yP=dn.unstable_shouldYield,bP=dn.unstable_requestPaint,ot=dn.unstable_now,wP=dn.unstable_getCurrentPriorityLevel,Hm=dn.unstable_ImmediatePriority,_1=dn.unstable_UserBlockingPriority,yu=dn.unstable_NormalPriority,SP=dn.unstable_LowPriority,F1=dn.unstable_IdlePriority,bd=null,mr=null;function kP(e){if(mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(bd,e,void 0,(e.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:EP,CP=Math.log,jP=Math.LN2;function EP(e){return e>>>=0,e===0?32:31-(CP(e)/jP|0)|0}var uc=64,dc=4194304;function Ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function bu(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,s=e.suspendedLanes,i=e.pingedLanes,a=n&268435455;if(a!==0){var l=a&~s;l!==0?r=Ra(l):(i&=a,i!==0&&(r=Ra(i)))}else a=n&~s,a!==0?r=Ra(a):i!==0&&(r=Ra(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&s)&&(s=r&-r,i=t&-t,s>=i||s===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Kn(t),s=1<<n,r|=e[n],t&=~s;return r}function NP(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function LP(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,s=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Kn(i),l=1<<a,c=s[a];c===-1?(!(l&n)||l&r)&&(s[a]=NP(l,t)):c<=t&&(e.expiredLanes|=l),i&=~l}}function Jh(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function z1(){var e=uc;return uc<<=1,!(uc&4194240)&&(uc=64),e}function Cf(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ol(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Kn(t),e[t]=n}function PP(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var s=31-Kn(n),i=1<<s;t[s]=0,r[s]=-1,e[s]=-1,n&=~i}}function Wm(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Kn(n),s=1<<r;s&t|e[r]&t&&(e[r]|=t),n&=~s}}var Be=0;function B1(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var V1,Km,$1,U1,H1,ep=!1,fc=[],Ss=null,ks=null,Cs=null,nl=new Map,rl=new Map,ls=[],TP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function sv(e,t){switch(e){case"focusin":case"focusout":Ss=null;break;case"dragenter":case"dragleave":ks=null;break;case"mouseover":case"mouseout":Cs=null;break;case"pointerover":case"pointerout":nl.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":rl.delete(t.pointerId)}}function fa(e,t,n,r,s,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[s]},t!==null&&(t=Dl(t),t!==null&&Km(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,s!==null&&t.indexOf(s)===-1&&t.push(s),e)}function MP(e,t,n,r,s){switch(t){case"focusin":return Ss=fa(Ss,e,t,n,r,s),!0;case"dragenter":return ks=fa(ks,e,t,n,r,s),!0;case"mouseover":return Cs=fa(Cs,e,t,n,r,s),!0;case"pointerover":var i=s.pointerId;return nl.set(i,fa(nl.get(i)||null,e,t,n,r,s)),!0;case"gotpointercapture":return i=s.pointerId,rl.set(i,fa(rl.get(i)||null,e,t,n,r,s)),!0}return!1}function W1(e){var t=ti(e.target);if(t!==null){var n=Ai(t);if(n!==null){if(t=n.tag,t===13){if(t=A1(n),t!==null){e.blockedOn=t,H1(e.priority,function(){$1(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=tp(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Zh=r,n.target.dispatchEvent(r),Zh=null}else return t=Dl(n),t!==null&&Km(t),e.blockedOn=n,!1;t.shift()}return!0}function iv(e,t,n){Hc(e)&&n.delete(t)}function RP(){ep=!1,Ss!==null&&Hc(Ss)&&(Ss=null),ks!==null&&Hc(ks)&&(ks=null),Cs!==null&&Hc(Cs)&&(Cs=null),nl.forEach(iv),rl.forEach(iv)}function ha(e,t){e.blockedOn===t&&(e.blockedOn=null,ep||(ep=!0,dn.unstable_scheduleCallback(dn.unstable_NormalPriority,RP)))}function sl(e){function t(s){return ha(s,e)}if(0<fc.length){ha(fc[0],e);for(var n=1;n<fc.length;n++){var r=fc[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Ss!==null&&ha(Ss,e),ks!==null&&ha(ks,e),Cs!==null&&ha(Cs,e),nl.forEach(t),rl.forEach(t),n=0;n<ls.length;n++)r=ls[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ls.length&&(n=ls[0],n.blockedOn===null);)W1(n),n.blockedOn===null&&ls.shift()}var mo=Wr.ReactCurrentBatchConfig,wu=!0;function AP(e,t,n,r){var s=Be,i=mo.transition;mo.transition=null;try{Be=1,Gm(e,t,n,r)}finally{Be=s,mo.transition=i}}function OP(e,t,n,r){var s=Be,i=mo.transition;mo.transition=null;try{Be=4,Gm(e,t,n,r)}finally{Be=s,mo.transition=i}}function Gm(e,t,n,r){if(wu){var s=tp(e,t,n,r);if(s===null)Of(e,t,r,Su,n),sv(e,r);else if(MP(s,e,t,n,r))r.stopPropagation();else if(sv(e,r),t&4&&-1<TP.indexOf(e)){for(;s!==null;){var i=Dl(s);if(i!==null&&V1(i),i=tp(e,t,n,r),i===null&&Of(e,t,r,Su,n),i===s)break;s=i}s!==null&&r.stopPropagation()}else Of(e,t,r,null,n)}}var Su=null;function tp(e,t,n,r){if(Su=null,e=Um(r),e=ti(e),e!==null)if(t=Ai(e),t===null)e=null;else if(n=t.tag,n===13){if(e=A1(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Su=e,null}function K1(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wP()){case Hm:return 1;case _1:return 4;case yu:case SP:return 16;case F1:return 536870912;default:return 16}default:return 16}}var ms=null,qm=null,Wc=null;function G1(){if(Wc)return Wc;var e,t=qm,n=t.length,r,s="value"in ms?ms.value:ms.textContent,i=s.length;for(e=0;e<n&&t[e]===s[e];e++);var a=n-e;for(r=1;r<=a&&t[n-r]===s[i-r];r++);return Wc=s.slice(e,1<r?1-r:void 0)}function Kc(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function hc(){return!0}function ov(){return!1}function pn(e){function t(n,r,s,i,a){this._reactName=n,this._targetInst=s,this.type=r,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(i):i[l]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?hc:ov,this.isPropagationStopped=ov,this}return rt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=hc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=hc)},persist:function(){},isPersistent:hc}),t}var Go={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zm=pn(Go),Il=rt({},Go,{view:0,detail:0}),IP=pn(Il),jf,Ef,pa,wd=rt({},Il,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ym,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==pa&&(pa&&e.type==="mousemove"?(jf=e.screenX-pa.screenX,Ef=e.screenY-pa.screenY):Ef=jf=0,pa=e),jf)},movementY:function(e){return"movementY"in e?e.movementY:Ef}}),av=pn(wd),DP=rt({},wd,{dataTransfer:0}),_P=pn(DP),FP=rt({},Il,{relatedTarget:0}),Nf=pn(FP),zP=rt({},Go,{animationName:0,elapsedTime:0,pseudoElement:0}),BP=pn(zP),VP=rt({},Go,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$P=pn(VP),UP=rt({},Go,{data:0}),lv=pn(UP),HP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},WP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function GP(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=KP[e])?!!t[e]:!1}function Ym(){return GP}var qP=rt({},Il,{key:function(e){if(e.key){var t=HP[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Kc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?WP[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ym,charCode:function(e){return e.type==="keypress"?Kc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Kc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ZP=pn(qP),YP=rt({},wd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cv=pn(YP),QP=rt({},Il,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ym}),XP=pn(QP),JP=rt({},Go,{propertyName:0,elapsedTime:0,pseudoElement:0}),eT=pn(JP),tT=rt({},wd,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),nT=pn(tT),rT=[9,13,27,32],Qm=Fr&&"CompositionEvent"in window,za=null;Fr&&"documentMode"in document&&(za=document.documentMode);var sT=Fr&&"TextEvent"in window&&!za,q1=Fr&&(!Qm||za&&8<za&&11>=za),uv=" ",dv=!1;function Z1(e,t){switch(e){case"keyup":return rT.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Y1(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Qi=!1;function iT(e,t){switch(e){case"compositionend":return Y1(t);case"keypress":return t.which!==32?null:(dv=!0,uv);case"textInput":return e=t.data,e===uv&&dv?null:e;default:return null}}function oT(e,t){if(Qi)return e==="compositionend"||!Qm&&Z1(e,t)?(e=G1(),Wc=qm=ms=null,Qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return q1&&t.locale!=="ko"?null:t.data;default:return null}}var aT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function fv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!aT[e.type]:t==="textarea"}function Q1(e,t,n,r){L1(r),t=ku(t,"onChange"),0<t.length&&(n=new Zm("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ba=null,il=null;function lT(e){lS(e,0)}function Sd(e){var t=eo(e);if(w1(t))return e}function cT(e,t){if(e==="change")return t}var X1=!1;if(Fr){var Lf;if(Fr){var Pf="oninput"in document;if(!Pf){var hv=document.createElement("div");hv.setAttribute("oninput","return;"),Pf=typeof hv.oninput=="function"}Lf=Pf}else Lf=!1;X1=Lf&&(!document.documentMode||9<document.documentMode)}function pv(){Ba&&(Ba.detachEvent("onpropertychange",J1),il=Ba=null)}function J1(e){if(e.propertyName==="value"&&Sd(il)){var t=[];Q1(t,il,e,Um(e)),R1(lT,t)}}function uT(e,t,n){e==="focusin"?(pv(),Ba=t,il=n,Ba.attachEvent("onpropertychange",J1)):e==="focusout"&&pv()}function dT(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sd(il)}function fT(e,t){if(e==="click")return Sd(t)}function hT(e,t){if(e==="input"||e==="change")return Sd(t)}function pT(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zn=typeof Object.is=="function"?Object.is:pT;function ol(e,t){if(Zn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var s=n[r];if(!_h.call(t,s)||!Zn(e[s],t[s]))return!1}return!0}function mv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function gv(e,t){var n=mv(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mv(n)}}function eS(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?eS(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function tS(){for(var e=window,t=gu();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=gu(e.document)}return t}function Xm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function mT(e){var t=tS(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&eS(n.ownerDocument.documentElement,n)){if(r!==null&&Xm(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var s=n.textContent.length,i=Math.min(r.start,s);r=r.end===void 0?i:Math.min(r.end,s),!e.extend&&i>r&&(s=r,r=i,i=s),s=gv(n,i);var a=gv(n,r);s&&a&&(e.rangeCount!==1||e.anchorNode!==s.node||e.anchorOffset!==s.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(s.node,s.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gT=Fr&&"documentMode"in document&&11>=document.documentMode,Xi=null,np=null,Va=null,rp=!1;function vv(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rp||Xi==null||Xi!==gu(r)||(r=Xi,"selectionStart"in r&&Xm(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Va&&ol(Va,r)||(Va=r,r=ku(np,"onSelect"),0<r.length&&(t=new Zm("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Xi)))}function pc(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Ji={animationend:pc("Animation","AnimationEnd"),animationiteration:pc("Animation","AnimationIteration"),animationstart:pc("Animation","AnimationStart"),transitionend:pc("Transition","TransitionEnd")},Tf={},nS={};Fr&&(nS=document.createElement("div").style,"AnimationEvent"in window||(delete Ji.animationend.animation,delete Ji.animationiteration.animation,delete Ji.animationstart.animation),"TransitionEvent"in window||delete Ji.transitionend.transition);function kd(e){if(Tf[e])return Tf[e];if(!Ji[e])return e;var t=Ji[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in nS)return Tf[e]=t[n];return e}var rS=kd("animationend"),sS=kd("animationiteration"),iS=kd("animationstart"),oS=kd("transitionend"),aS=new Map,xv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Fs(e,t){aS.set(e,t),Ri(t,[e])}for(var Mf=0;Mf<xv.length;Mf++){var Rf=xv[Mf],vT=Rf.toLowerCase(),xT=Rf[0].toUpperCase()+Rf.slice(1);Fs(vT,"on"+xT)}Fs(rS,"onAnimationEnd");Fs(sS,"onAnimationIteration");Fs(iS,"onAnimationStart");Fs("dblclick","onDoubleClick");Fs("focusin","onFocus");Fs("focusout","onBlur");Fs(oS,"onTransitionEnd");Mo("onMouseEnter",["mouseout","mouseover"]);Mo("onMouseLeave",["mouseout","mouseover"]);Mo("onPointerEnter",["pointerout","pointerover"]);Mo("onPointerLeave",["pointerout","pointerover"]);Ri("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ri("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ri("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ri("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ri("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function yv(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,vP(r,t,void 0,e),e.currentTarget=null}function lS(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],s=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var l=r[a],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==i&&s.isPropagationStopped())break e;yv(s,l,u),i=c}else for(a=0;a<r.length;a++){if(l=r[a],c=l.instance,u=l.currentTarget,l=l.listener,c!==i&&s.isPropagationStopped())break e;yv(s,l,u),i=c}}}if(xu)throw e=Xh,xu=!1,Xh=null,e}function Ze(e,t){var n=t[lp];n===void 0&&(n=t[lp]=new Set);var r=e+"__bubble";n.has(r)||(cS(t,e,2,!1),n.add(r))}function Af(e,t,n){var r=0;t&&(r|=4),cS(n,e,r,t)}var mc="_reactListening"+Math.random().toString(36).slice(2);function al(e){if(!e[mc]){e[mc]=!0,g1.forEach(function(n){n!=="selectionchange"&&(yT.has(n)||Af(n,!1,e),Af(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[mc]||(t[mc]=!0,Af("selectionchange",!1,t))}}function cS(e,t,n,r){switch(K1(t)){case 1:var s=AP;break;case 4:s=OP;break;default:s=Gm}n=s.bind(null,t,n,e),s=void 0,!Qh||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(s=!0),r?s!==void 0?e.addEventListener(t,n,{capture:!0,passive:s}):e.addEventListener(t,n,!0):s!==void 0?e.addEventListener(t,n,{passive:s}):e.addEventListener(t,n,!1)}function Of(e,t,n,r,s){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===s||l.nodeType===8&&l.parentNode===s)break;if(a===4)for(a=r.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===s||c.nodeType===8&&c.parentNode===s))return;a=a.return}for(;l!==null;){if(a=ti(l),a===null)return;if(c=a.tag,c===5||c===6){r=i=a;continue e}l=l.parentNode}}r=r.return}R1(function(){var u=i,f=Um(n),h=[];e:{var p=aS.get(e);if(p!==void 0){var m=Zm,g=e;switch(e){case"keypress":if(Kc(n)===0)break e;case"keydown":case"keyup":m=ZP;break;case"focusin":g="focus",m=Nf;break;case"focusout":g="blur",m=Nf;break;case"beforeblur":case"afterblur":m=Nf;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=av;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_P;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=XP;break;case rS:case sS:case iS:m=BP;break;case oS:m=eT;break;case"scroll":m=IP;break;case"wheel":m=nT;break;case"copy":case"cut":case"paste":m=$P;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=cv}var v=(t&4)!==0,y=!v&&e==="scroll",b=v?p!==null?p+"Capture":null:p;v=[];for(var x=u,w;x!==null;){w=x;var S=w.stateNode;if(w.tag===5&&S!==null&&(w=S,b!==null&&(S=tl(x,b),S!=null&&v.push(ll(x,S,w)))),y)break;x=x.return}0<v.length&&(p=new m(p,g,null,n,f),h.push({event:p,listeners:v}))}}if(!(t&7)){e:{if(p=e==="mouseover"||e==="pointerover",m=e==="mouseout"||e==="pointerout",p&&n!==Zh&&(g=n.relatedTarget||n.fromElement)&&(ti(g)||g[zr]))break e;if((m||p)&&(p=f.window===f?f:(p=f.ownerDocument)?p.defaultView||p.parentWindow:window,m?(g=n.relatedTarget||n.toElement,m=u,g=g?ti(g):null,g!==null&&(y=Ai(g),g!==y||g.tag!==5&&g.tag!==6)&&(g=null)):(m=null,g=u),m!==g)){if(v=av,S="onMouseLeave",b="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(v=cv,S="onPointerLeave",b="onPointerEnter",x="pointer"),y=m==null?p:eo(m),w=g==null?p:eo(g),p=new v(S,x+"leave",m,n,f),p.target=y,p.relatedTarget=w,S=null,ti(f)===u&&(v=new v(b,x+"enter",g,n,f),v.target=w,v.relatedTarget=y,S=v),y=S,m&&g)t:{for(v=m,b=g,x=0,w=v;w;w=zi(w))x++;for(w=0,S=b;S;S=zi(S))w++;for(;0<x-w;)v=zi(v),x--;for(;0<w-x;)b=zi(b),w--;for(;x--;){if(v===b||b!==null&&v===b.alternate)break t;v=zi(v),b=zi(b)}v=null}else v=null;m!==null&&bv(h,p,m,v,!1),g!==null&&y!==null&&bv(h,y,g,v,!0)}}e:{if(p=u?eo(u):window,m=p.nodeName&&p.nodeName.toLowerCase(),m==="select"||m==="input"&&p.type==="file")var k=cT;else if(fv(p))if(X1)k=hT;else{k=dT;var j=uT}else(m=p.nodeName)&&m.toLowerCase()==="input"&&(p.type==="checkbox"||p.type==="radio")&&(k=fT);if(k&&(k=k(e,u))){Q1(h,k,n,f);break e}j&&j(e,p,u),e==="focusout"&&(j=p._wrapperState)&&j.controlled&&p.type==="number"&&Hh(p,"number",p.value)}switch(j=u?eo(u):window,e){case"focusin":(fv(j)||j.contentEditable==="true")&&(Xi=j,np=u,Va=null);break;case"focusout":Va=np=Xi=null;break;case"mousedown":rp=!0;break;case"contextmenu":case"mouseup":case"dragend":rp=!1,vv(h,n,f);break;case"selectionchange":if(gT)break;case"keydown":case"keyup":vv(h,n,f)}var C;if(Qm)e:{switch(e){case"compositionstart":var E="onCompositionStart";break e;case"compositionend":E="onCompositionEnd";break e;case"compositionupdate":E="onCompositionUpdate";break e}E=void 0}else Qi?Z1(e,n)&&(E="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(E="onCompositionStart");E&&(q1&&n.locale!=="ko"&&(Qi||E!=="onCompositionStart"?E==="onCompositionEnd"&&Qi&&(C=G1()):(ms=f,qm="value"in ms?ms.value:ms.textContent,Qi=!0)),j=ku(u,E),0<j.length&&(E=new lv(E,e,null,n,f),h.push({event:E,listeners:j}),C?E.data=C:(C=Y1(n),C!==null&&(E.data=C)))),(C=sT?iT(e,n):oT(e,n))&&(u=ku(u,"onBeforeInput"),0<u.length&&(f=new lv("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:u}),f.data=C))}lS(h,t)})}function ll(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ku(e,t){for(var n=t+"Capture",r=[];e!==null;){var s=e,i=s.stateNode;s.tag===5&&i!==null&&(s=i,i=tl(e,n),i!=null&&r.unshift(ll(e,i,s)),i=tl(e,t),i!=null&&r.push(ll(e,i,s))),e=e.return}return r}function zi(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bv(e,t,n,r,s){for(var i=t._reactName,a=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,s?(c=tl(n,i),c!=null&&a.unshift(ll(n,c,l))):s||(c=tl(n,i),c!=null&&a.push(ll(n,c,l)))),n=n.return}a.length!==0&&e.push({event:t,listeners:a})}var bT=/\r\n?/g,wT=/\u0000|\uFFFD/g;function wv(e){return(typeof e=="string"?e:""+e).replace(bT,`
`).replace(wT,"")}function gc(e,t,n){if(t=wv(t),wv(e)!==t&&n)throw Error(te(425))}function Cu(){}var sp=null,ip=null;function op(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ap=typeof setTimeout=="function"?setTimeout:void 0,ST=typeof clearTimeout=="function"?clearTimeout:void 0,Sv=typeof Promise=="function"?Promise:void 0,kT=typeof queueMicrotask=="function"?queueMicrotask:typeof Sv<"u"?function(e){return Sv.resolve(null).then(e).catch(CT)}:ap;function CT(e){setTimeout(function(){throw e})}function If(e,t){var n=t,r=0;do{var s=n.nextSibling;if(e.removeChild(n),s&&s.nodeType===8)if(n=s.data,n==="/$"){if(r===0){e.removeChild(s),sl(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=s}while(n);sl(t)}function js(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function kv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var qo=Math.random().toString(36).slice(2),fr="__reactFiber$"+qo,cl="__reactProps$"+qo,zr="__reactContainer$"+qo,lp="__reactEvents$"+qo,jT="__reactListeners$"+qo,ET="__reactHandles$"+qo;function ti(e){var t=e[fr];if(t)return t;for(var n=e.parentNode;n;){if(t=n[zr]||n[fr]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=kv(e);e!==null;){if(n=e[fr])return n;e=kv(e)}return t}e=n,n=e.parentNode}return null}function Dl(e){return e=e[fr]||e[zr],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function eo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(te(33))}function Cd(e){return e[cl]||null}var cp=[],to=-1;function zs(e){return{current:e}}function Qe(e){0>to||(e.current=cp[to],cp[to]=null,to--)}function Ke(e,t){to++,cp[to]=e.current,e.current=t}var As={},Ot=zs(As),Yt=zs(!1),xi=As;function Ro(e,t){var n=e.type.contextTypes;if(!n)return As;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var s={},i;for(i in n)s[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=s),s}function Qt(e){return e=e.childContextTypes,e!=null}function ju(){Qe(Yt),Qe(Ot)}function Cv(e,t,n){if(Ot.current!==As)throw Error(te(168));Ke(Ot,t),Ke(Yt,n)}function uS(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var s in r)if(!(s in t))throw Error(te(108,uP(e)||"Unknown",s));return rt({},n,r)}function Eu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||As,xi=Ot.current,Ke(Ot,e),Ke(Yt,Yt.current),!0}function jv(e,t,n){var r=e.stateNode;if(!r)throw Error(te(169));n?(e=uS(e,t,xi),r.__reactInternalMemoizedMergedChildContext=e,Qe(Yt),Qe(Ot),Ke(Ot,e)):Qe(Yt),Ke(Yt,n)}var Ar=null,jd=!1,Df=!1;function dS(e){Ar===null?Ar=[e]:Ar.push(e)}function NT(e){jd=!0,dS(e)}function Bs(){if(!Df&&Ar!==null){Df=!0;var e=0,t=Be;try{var n=Ar;for(Be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Ar=null,jd=!1}catch(s){throw Ar!==null&&(Ar=Ar.slice(e+1)),D1(Hm,Bs),s}finally{Be=t,Df=!1}}return null}var no=[],ro=0,Nu=null,Lu=0,yn=[],bn=0,yi=null,Ir=1,Dr="";function Qs(e,t){no[ro++]=Lu,no[ro++]=Nu,Nu=e,Lu=t}function fS(e,t,n){yn[bn++]=Ir,yn[bn++]=Dr,yn[bn++]=yi,yi=e;var r=Ir;e=Dr;var s=32-Kn(r)-1;r&=~(1<<s),n+=1;var i=32-Kn(t)+s;if(30<i){var a=s-s%5;i=(r&(1<<a)-1).toString(32),r>>=a,s-=a,Ir=1<<32-Kn(t)+s|n<<s|r,Dr=i+e}else Ir=1<<i|n<<s|r,Dr=e}function Jm(e){e.return!==null&&(Qs(e,1),fS(e,1,0))}function eg(e){for(;e===Nu;)Nu=no[--ro],no[ro]=null,Lu=no[--ro],no[ro]=null;for(;e===yi;)yi=yn[--bn],yn[bn]=null,Dr=yn[--bn],yn[bn]=null,Ir=yn[--bn],yn[bn]=null}var cn=null,ln=null,Xe=!1,Hn=null;function hS(e,t){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ev(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,cn=e,ln=js(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,cn=e,ln=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=yi!==null?{id:Ir,overflow:Dr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,cn=e,ln=null,!0):!1;default:return!1}}function up(e){return(e.mode&1)!==0&&(e.flags&128)===0}function dp(e){if(Xe){var t=ln;if(t){var n=t;if(!Ev(e,t)){if(up(e))throw Error(te(418));t=js(n.nextSibling);var r=cn;t&&Ev(e,t)?hS(r,n):(e.flags=e.flags&-4097|2,Xe=!1,cn=e)}}else{if(up(e))throw Error(te(418));e.flags=e.flags&-4097|2,Xe=!1,cn=e}}}function Nv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;cn=e}function vc(e){if(e!==cn)return!1;if(!Xe)return Nv(e),Xe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!op(e.type,e.memoizedProps)),t&&(t=ln)){if(up(e))throw pS(),Error(te(418));for(;t;)hS(e,t),t=js(t.nextSibling)}if(Nv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(te(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ln=js(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ln=null}}else ln=cn?js(e.stateNode.nextSibling):null;return!0}function pS(){for(var e=ln;e;)e=js(e.nextSibling)}function Ao(){ln=cn=null,Xe=!1}function tg(e){Hn===null?Hn=[e]:Hn.push(e)}var LT=Wr.ReactCurrentBatchConfig;function ma(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var r=n.stateNode}if(!r)throw Error(te(147,e));var s=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var l=s.refs;a===null?delete l[i]:l[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,e))}return e}function xc(e,t){throw e=Object.prototype.toString.call(t),Error(te(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Lv(e){var t=e._init;return t(e._payload)}function mS(e){function t(b,x){if(e){var w=b.deletions;w===null?(b.deletions=[x],b.flags|=16):w.push(x)}}function n(b,x){if(!e)return null;for(;x!==null;)t(b,x),x=x.sibling;return null}function r(b,x){for(b=new Map;x!==null;)x.key!==null?b.set(x.key,x):b.set(x.index,x),x=x.sibling;return b}function s(b,x){return b=Ps(b,x),b.index=0,b.sibling=null,b}function i(b,x,w){return b.index=w,e?(w=b.alternate,w!==null?(w=w.index,w<x?(b.flags|=2,x):w):(b.flags|=2,x)):(b.flags|=1048576,x)}function a(b){return e&&b.alternate===null&&(b.flags|=2),b}function l(b,x,w,S){return x===null||x.tag!==6?(x=Uf(w,b.mode,S),x.return=b,x):(x=s(x,w),x.return=b,x)}function c(b,x,w,S){var k=w.type;return k===Yi?f(b,x,w.props.children,S,w.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===is&&Lv(k)===x.type)?(S=s(x,w.props),S.ref=ma(b,x,w),S.return=b,S):(S=Jc(w.type,w.key,w.props,null,b.mode,S),S.ref=ma(b,x,w),S.return=b,S)}function u(b,x,w,S){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=Hf(w,b.mode,S),x.return=b,x):(x=s(x,w.children||[]),x.return=b,x)}function f(b,x,w,S,k){return x===null||x.tag!==7?(x=pi(w,b.mode,S,k),x.return=b,x):(x=s(x,w),x.return=b,x)}function h(b,x,w){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Uf(""+x,b.mode,w),x.return=b,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ac:return w=Jc(x.type,x.key,x.props,null,b.mode,w),w.ref=ma(b,null,x),w.return=b,w;case Zi:return x=Hf(x,b.mode,w),x.return=b,x;case is:var S=x._init;return h(b,S(x._payload),w)}if(Ma(x)||ua(x))return x=pi(x,b.mode,w,null),x.return=b,x;xc(b,x)}return null}function p(b,x,w,S){var k=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number")return k!==null?null:l(b,x,""+w,S);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ac:return w.key===k?c(b,x,w,S):null;case Zi:return w.key===k?u(b,x,w,S):null;case is:return k=w._init,p(b,x,k(w._payload),S)}if(Ma(w)||ua(w))return k!==null?null:f(b,x,w,S,null);xc(b,w)}return null}function m(b,x,w,S,k){if(typeof S=="string"&&S!==""||typeof S=="number")return b=b.get(w)||null,l(x,b,""+S,k);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ac:return b=b.get(S.key===null?w:S.key)||null,c(x,b,S,k);case Zi:return b=b.get(S.key===null?w:S.key)||null,u(x,b,S,k);case is:var j=S._init;return m(b,x,w,j(S._payload),k)}if(Ma(S)||ua(S))return b=b.get(w)||null,f(x,b,S,k,null);xc(x,S)}return null}function g(b,x,w,S){for(var k=null,j=null,C=x,E=x=0,N=null;C!==null&&E<w.length;E++){C.index>E?(N=C,C=null):N=C.sibling;var L=p(b,C,w[E],S);if(L===null){C===null&&(C=N);break}e&&C&&L.alternate===null&&t(b,C),x=i(L,x,E),j===null?k=L:j.sibling=L,j=L,C=N}if(E===w.length)return n(b,C),Xe&&Qs(b,E),k;if(C===null){for(;E<w.length;E++)C=h(b,w[E],S),C!==null&&(x=i(C,x,E),j===null?k=C:j.sibling=C,j=C);return Xe&&Qs(b,E),k}for(C=r(b,C);E<w.length;E++)N=m(C,b,E,w[E],S),N!==null&&(e&&N.alternate!==null&&C.delete(N.key===null?E:N.key),x=i(N,x,E),j===null?k=N:j.sibling=N,j=N);return e&&C.forEach(function(T){return t(b,T)}),Xe&&Qs(b,E),k}function v(b,x,w,S){var k=ua(w);if(typeof k!="function")throw Error(te(150));if(w=k.call(w),w==null)throw Error(te(151));for(var j=k=null,C=x,E=x=0,N=null,L=w.next();C!==null&&!L.done;E++,L=w.next()){C.index>E?(N=C,C=null):N=C.sibling;var T=p(b,C,L.value,S);if(T===null){C===null&&(C=N);break}e&&C&&T.alternate===null&&t(b,C),x=i(T,x,E),j===null?k=T:j.sibling=T,j=T,C=N}if(L.done)return n(b,C),Xe&&Qs(b,E),k;if(C===null){for(;!L.done;E++,L=w.next())L=h(b,L.value,S),L!==null&&(x=i(L,x,E),j===null?k=L:j.sibling=L,j=L);return Xe&&Qs(b,E),k}for(C=r(b,C);!L.done;E++,L=w.next())L=m(C,b,E,L.value,S),L!==null&&(e&&L.alternate!==null&&C.delete(L.key===null?E:L.key),x=i(L,x,E),j===null?k=L:j.sibling=L,j=L);return e&&C.forEach(function(R){return t(b,R)}),Xe&&Qs(b,E),k}function y(b,x,w,S){if(typeof w=="object"&&w!==null&&w.type===Yi&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case ac:e:{for(var k=w.key,j=x;j!==null;){if(j.key===k){if(k=w.type,k===Yi){if(j.tag===7){n(b,j.sibling),x=s(j,w.props.children),x.return=b,b=x;break e}}else if(j.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===is&&Lv(k)===j.type){n(b,j.sibling),x=s(j,w.props),x.ref=ma(b,j,w),x.return=b,b=x;break e}n(b,j);break}else t(b,j);j=j.sibling}w.type===Yi?(x=pi(w.props.children,b.mode,S,w.key),x.return=b,b=x):(S=Jc(w.type,w.key,w.props,null,b.mode,S),S.ref=ma(b,x,w),S.return=b,b=S)}return a(b);case Zi:e:{for(j=w.key;x!==null;){if(x.key===j)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){n(b,x.sibling),x=s(x,w.children||[]),x.return=b,b=x;break e}else{n(b,x);break}else t(b,x);x=x.sibling}x=Hf(w,b.mode,S),x.return=b,b=x}return a(b);case is:return j=w._init,y(b,x,j(w._payload),S)}if(Ma(w))return g(b,x,w,S);if(ua(w))return v(b,x,w,S);xc(b,w)}return typeof w=="string"&&w!==""||typeof w=="number"?(w=""+w,x!==null&&x.tag===6?(n(b,x.sibling),x=s(x,w),x.return=b,b=x):(n(b,x),x=Uf(w,b.mode,S),x.return=b,b=x),a(b)):n(b,x)}return y}var Oo=mS(!0),gS=mS(!1),Pu=zs(null),Tu=null,so=null,ng=null;function rg(){ng=so=Tu=null}function sg(e){var t=Pu.current;Qe(Pu),e._currentValue=t}function fp(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function go(e,t){Tu=e,ng=so=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Zt=!0),e.firstContext=null)}function En(e){var t=e._currentValue;if(ng!==e)if(e={context:e,memoizedValue:t,next:null},so===null){if(Tu===null)throw Error(te(308));so=e,Tu.dependencies={lanes:0,firstContext:e}}else so=so.next=e;return t}var ni=null;function ig(e){ni===null?ni=[e]:ni.push(e)}function vS(e,t,n,r){var s=t.interleaved;return s===null?(n.next=n,ig(t)):(n.next=s.next,s.next=n),t.interleaved=n,Br(e,r)}function Br(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var os=!1;function og(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xS(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _r(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Es(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Me&2){var s=r.pending;return s===null?t.next=t:(t.next=s.next,s.next=t),r.pending=t,Br(e,n)}return s=r.interleaved,s===null?(t.next=t,ig(r)):(t.next=s.next,s.next=t),r.interleaved=t,Br(e,n)}function Gc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wm(e,n)}}function Pv(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var s=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?s=i=a:i=i.next=a,n=n.next}while(n!==null);i===null?s=i=t:i=i.next=t}else s=i=t;n={baseState:r.baseState,firstBaseUpdate:s,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Mu(e,t,n,r){var s=e.updateQueue;os=!1;var i=s.firstBaseUpdate,a=s.lastBaseUpdate,l=s.shared.pending;if(l!==null){s.shared.pending=null;var c=l,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=u:l.next=u,f.lastBaseUpdate=c))}if(i!==null){var h=s.baseState;a=0,f=u=c=null,l=i;do{var p=l.lane,m=l.eventTime;if((r&p)===p){f!==null&&(f=f.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,v=l;switch(p=t,m=n,v.tag){case 1:if(g=v.payload,typeof g=="function"){h=g.call(m,h,p);break e}h=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=v.payload,p=typeof g=="function"?g.call(m,h,p):g,p==null)break e;h=rt({},h,p);break e;case 2:os=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,p=s.effects,p===null?s.effects=[l]:p.push(l))}else m={eventTime:m,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(u=f=m,c=h):f=f.next=m,a|=p;if(l=l.next,l===null){if(l=s.shared.pending,l===null)break;p=l,l=p.next,p.next=null,s.lastBaseUpdate=p,s.shared.pending=null}}while(!0);if(f===null&&(c=h),s.baseState=c,s.firstBaseUpdate=u,s.lastBaseUpdate=f,t=s.shared.interleaved,t!==null){s=t;do a|=s.lane,s=s.next;while(s!==t)}else i===null&&(s.shared.lanes=0);wi|=a,e.lanes=a,e.memoizedState=h}}function Tv(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],s=r.callback;if(s!==null){if(r.callback=null,r=n,typeof s!="function")throw Error(te(191,s));s.call(r)}}}var _l={},gr=zs(_l),ul=zs(_l),dl=zs(_l);function ri(e){if(e===_l)throw Error(te(174));return e}function ag(e,t){switch(Ke(dl,t),Ke(ul,e),Ke(gr,_l),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Kh(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Kh(t,e)}Qe(gr),Ke(gr,t)}function Io(){Qe(gr),Qe(ul),Qe(dl)}function yS(e){ri(dl.current);var t=ri(gr.current),n=Kh(t,e.type);t!==n&&(Ke(ul,e),Ke(gr,n))}function lg(e){ul.current===e&&(Qe(gr),Qe(ul))}var et=zs(0);function Ru(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _f=[];function cg(){for(var e=0;e<_f.length;e++)_f[e]._workInProgressVersionPrimary=null;_f.length=0}var qc=Wr.ReactCurrentDispatcher,Ff=Wr.ReactCurrentBatchConfig,bi=0,tt=null,dt=null,pt=null,Au=!1,$a=!1,fl=0,PT=0;function Pt(){throw Error(te(321))}function ug(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zn(e[n],t[n]))return!1;return!0}function dg(e,t,n,r,s,i){if(bi=i,tt=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,qc.current=e===null||e.memoizedState===null?AT:OT,e=n(r,s),$a){i=0;do{if($a=!1,fl=0,25<=i)throw Error(te(301));i+=1,pt=dt=null,t.updateQueue=null,qc.current=IT,e=n(r,s)}while($a)}if(qc.current=Ou,t=dt!==null&&dt.next!==null,bi=0,pt=dt=tt=null,Au=!1,t)throw Error(te(300));return e}function fg(){var e=fl!==0;return fl=0,e}function ir(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?tt.memoizedState=pt=e:pt=pt.next=e,pt}function Nn(){if(dt===null){var e=tt.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var t=pt===null?tt.memoizedState:pt.next;if(t!==null)pt=t,dt=e;else{if(e===null)throw Error(te(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},pt===null?tt.memoizedState=pt=e:pt=pt.next=e}return pt}function hl(e,t){return typeof t=="function"?t(e):t}function zf(e){var t=Nn(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=dt,s=r.baseQueue,i=n.pending;if(i!==null){if(s!==null){var a=s.next;s.next=i.next,i.next=a}r.baseQueue=s=i,n.pending=null}if(s!==null){i=s.next,r=r.baseState;var l=a=null,c=null,u=i;do{var f=u.lane;if((bi&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var h={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=h,a=r):c=c.next=h,tt.lanes|=f,wi|=f}u=u.next}while(u!==null&&u!==i);c===null?a=r:c.next=l,Zn(r,t.memoizedState)||(Zt=!0),t.memoizedState=r,t.baseState=a,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){s=e;do i=s.lane,tt.lanes|=i,wi|=i,s=s.next;while(s!==e)}else s===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Bf(e){var t=Nn(),n=t.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=e;var r=n.dispatch,s=n.pending,i=t.memoizedState;if(s!==null){n.pending=null;var a=s=s.next;do i=e(i,a.action),a=a.next;while(a!==s);Zn(i,t.memoizedState)||(Zt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function bS(){}function wS(e,t){var n=tt,r=Nn(),s=t(),i=!Zn(r.memoizedState,s);if(i&&(r.memoizedState=s,Zt=!0),r=r.queue,hg(CS.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||pt!==null&&pt.memoizedState.tag&1){if(n.flags|=2048,pl(9,kS.bind(null,n,r,s,t),void 0,null),xt===null)throw Error(te(349));bi&30||SS(n,t,s)}return s}function SS(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function kS(e,t,n,r){t.value=n,t.getSnapshot=r,jS(t)&&ES(e)}function CS(e,t,n){return n(function(){jS(t)&&ES(e)})}function jS(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zn(e,n)}catch{return!0}}function ES(e){var t=Br(e,1);t!==null&&Gn(t,e,1,-1)}function Mv(e){var t=ir();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hl,lastRenderedState:e},t.queue=e,e=e.dispatch=RT.bind(null,tt,e),[t.memoizedState,e]}function pl(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=tt.updateQueue,t===null?(t={lastEffect:null,stores:null},tt.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function NS(){return Nn().memoizedState}function Zc(e,t,n,r){var s=ir();tt.flags|=e,s.memoizedState=pl(1|t,n,void 0,r===void 0?null:r)}function Ed(e,t,n,r){var s=Nn();r=r===void 0?null:r;var i=void 0;if(dt!==null){var a=dt.memoizedState;if(i=a.destroy,r!==null&&ug(r,a.deps)){s.memoizedState=pl(t,n,i,r);return}}tt.flags|=e,s.memoizedState=pl(1|t,n,i,r)}function Rv(e,t){return Zc(8390656,8,e,t)}function hg(e,t){return Ed(2048,8,e,t)}function LS(e,t){return Ed(4,2,e,t)}function PS(e,t){return Ed(4,4,e,t)}function TS(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function MS(e,t,n){return n=n!=null?n.concat([e]):null,Ed(4,4,TS.bind(null,t,e),n)}function pg(){}function RS(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ug(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function AS(e,t){var n=Nn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&ug(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function OS(e,t,n){return bi&21?(Zn(n,t)||(n=z1(),tt.lanes|=n,wi|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Zt=!0),e.memoizedState=n)}function TT(e,t){var n=Be;Be=n!==0&&4>n?n:4,e(!0);var r=Ff.transition;Ff.transition={};try{e(!1),t()}finally{Be=n,Ff.transition=r}}function IS(){return Nn().memoizedState}function MT(e,t,n){var r=Ls(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},DS(e))_S(t,n);else if(n=vS(e,t,n,r),n!==null){var s=$t();Gn(n,e,r,s),FS(n,t,r)}}function RT(e,t,n){var r=Ls(e),s={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(DS(e))_S(t,s);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,l=i(a,n);if(s.hasEagerState=!0,s.eagerState=l,Zn(l,a)){var c=t.interleaved;c===null?(s.next=s,ig(t)):(s.next=c.next,c.next=s),t.interleaved=s;return}}catch{}finally{}n=vS(e,t,s,r),n!==null&&(s=$t(),Gn(n,e,r,s),FS(n,t,r))}}function DS(e){var t=e.alternate;return e===tt||t!==null&&t===tt}function _S(e,t){$a=Au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function FS(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Wm(e,n)}}var Ou={readContext:En,useCallback:Pt,useContext:Pt,useEffect:Pt,useImperativeHandle:Pt,useInsertionEffect:Pt,useLayoutEffect:Pt,useMemo:Pt,useReducer:Pt,useRef:Pt,useState:Pt,useDebugValue:Pt,useDeferredValue:Pt,useTransition:Pt,useMutableSource:Pt,useSyncExternalStore:Pt,useId:Pt,unstable_isNewReconciler:!1},AT={readContext:En,useCallback:function(e,t){return ir().memoizedState=[e,t===void 0?null:t],e},useContext:En,useEffect:Rv,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Zc(4194308,4,TS.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Zc(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zc(4,2,e,t)},useMemo:function(e,t){var n=ir();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=ir();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=MT.bind(null,tt,e),[r.memoizedState,e]},useRef:function(e){var t=ir();return e={current:e},t.memoizedState=e},useState:Mv,useDebugValue:pg,useDeferredValue:function(e){return ir().memoizedState=e},useTransition:function(){var e=Mv(!1),t=e[0];return e=TT.bind(null,e[1]),ir().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=tt,s=ir();if(Xe){if(n===void 0)throw Error(te(407));n=n()}else{if(n=t(),xt===null)throw Error(te(349));bi&30||SS(r,t,n)}s.memoizedState=n;var i={value:n,getSnapshot:t};return s.queue=i,Rv(CS.bind(null,r,i,e),[e]),r.flags|=2048,pl(9,kS.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=ir(),t=xt.identifierPrefix;if(Xe){var n=Dr,r=Ir;n=(r&~(1<<32-Kn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=fl++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=PT++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},OT={readContext:En,useCallback:RS,useContext:En,useEffect:hg,useImperativeHandle:MS,useInsertionEffect:LS,useLayoutEffect:PS,useMemo:AS,useReducer:zf,useRef:NS,useState:function(){return zf(hl)},useDebugValue:pg,useDeferredValue:function(e){var t=Nn();return OS(t,dt.memoizedState,e)},useTransition:function(){var e=zf(hl)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:bS,useSyncExternalStore:wS,useId:IS,unstable_isNewReconciler:!1},IT={readContext:En,useCallback:RS,useContext:En,useEffect:hg,useImperativeHandle:MS,useInsertionEffect:LS,useLayoutEffect:PS,useMemo:AS,useReducer:Bf,useRef:NS,useState:function(){return Bf(hl)},useDebugValue:pg,useDeferredValue:function(e){var t=Nn();return dt===null?t.memoizedState=e:OS(t,dt.memoizedState,e)},useTransition:function(){var e=Bf(hl)[0],t=Nn().memoizedState;return[e,t]},useMutableSource:bS,useSyncExternalStore:wS,useId:IS,unstable_isNewReconciler:!1};function zn(e,t){if(e&&e.defaultProps){t=rt({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function hp(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:rt({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Nd={isMounted:function(e){return(e=e._reactInternals)?Ai(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=$t(),s=Ls(e),i=_r(r,s);i.payload=t,n!=null&&(i.callback=n),t=Es(e,i,s),t!==null&&(Gn(t,e,s,r),Gc(t,e,s))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=$t(),s=Ls(e),i=_r(r,s);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Es(e,i,s),t!==null&&(Gn(t,e,s,r),Gc(t,e,s))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=$t(),r=Ls(e),s=_r(n,r);s.tag=2,t!=null&&(s.callback=t),t=Es(e,s,r),t!==null&&(Gn(t,e,r,n),Gc(t,e,r))}};function Av(e,t,n,r,s,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,a):t.prototype&&t.prototype.isPureReactComponent?!ol(n,r)||!ol(s,i):!0}function zS(e,t,n){var r=!1,s=As,i=t.contextType;return typeof i=="object"&&i!==null?i=En(i):(s=Qt(t)?xi:Ot.current,r=t.contextTypes,i=(r=r!=null)?Ro(e,s):As),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Nd,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=s,e.__reactInternalMemoizedMaskedChildContext=i),t}function Ov(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Nd.enqueueReplaceState(t,t.state,null)}function pp(e,t,n,r){var s=e.stateNode;s.props=n,s.state=e.memoizedState,s.refs={},og(e);var i=t.contextType;typeof i=="object"&&i!==null?s.context=En(i):(i=Qt(t)?xi:Ot.current,s.context=Ro(e,i)),s.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(hp(e,t,i,n),s.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(t=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),t!==s.state&&Nd.enqueueReplaceState(s,s.state,null),Mu(e,n,s,r),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308)}function Do(e,t){try{var n="",r=t;do n+=cP(r),r=r.return;while(r);var s=n}catch(i){s=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:s,digest:null}}function Vf(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function mp(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var DT=typeof WeakMap=="function"?WeakMap:Map;function BS(e,t,n){n=_r(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Du||(Du=!0,jp=r),mp(e,t)},n}function VS(e,t,n){n=_r(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var s=t.value;n.payload=function(){return r(s)},n.callback=function(){mp(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){mp(e,t),typeof r!="function"&&(Ns===null?Ns=new Set([this]):Ns.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),n}function Iv(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new DT;var s=new Set;r.set(t,s)}else s=r.get(t),s===void 0&&(s=new Set,r.set(t,s));s.has(n)||(s.add(n),e=YT.bind(null,e,t,n),t.then(e,e))}function Dv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function _v(e,t,n,r,s){return e.mode&1?(e.flags|=65536,e.lanes=s,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_r(-1,1),t.tag=2,Es(n,t,1))),n.lanes|=1),e)}var _T=Wr.ReactCurrentOwner,Zt=!1;function Ft(e,t,n,r){t.child=e===null?gS(t,null,n,r):Oo(t,e.child,n,r)}function Fv(e,t,n,r,s){n=n.render;var i=t.ref;return go(t,s),r=dg(e,t,n,r,i,s),n=fg(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Vr(e,t,s)):(Xe&&n&&Jm(t),t.flags|=1,Ft(e,t,r,s),t.child)}function zv(e,t,n,r,s){if(e===null){var i=n.type;return typeof i=="function"&&!Sg(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,$S(e,t,i,r,s)):(e=Jc(n.type,null,r,t,t.mode,s),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&s)){var a=i.memoizedProps;if(n=n.compare,n=n!==null?n:ol,n(a,r)&&e.ref===t.ref)return Vr(e,t,s)}return t.flags|=1,e=Ps(i,r),e.ref=t.ref,e.return=t,t.child=e}function $S(e,t,n,r,s){if(e!==null){var i=e.memoizedProps;if(ol(i,r)&&e.ref===t.ref)if(Zt=!1,t.pendingProps=r=i,(e.lanes&s)!==0)e.flags&131072&&(Zt=!0);else return t.lanes=e.lanes,Vr(e,t,s)}return gp(e,t,n,r,s)}function US(e,t,n){var r=t.pendingProps,s=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ke(oo,sn),sn|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ke(oo,sn),sn|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,Ke(oo,sn),sn|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ke(oo,sn),sn|=r;return Ft(e,t,s,n),t.child}function HS(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function gp(e,t,n,r,s){var i=Qt(n)?xi:Ot.current;return i=Ro(t,i),go(t,s),n=dg(e,t,n,r,i,s),r=fg(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s,Vr(e,t,s)):(Xe&&r&&Jm(t),t.flags|=1,Ft(e,t,n,s),t.child)}function Bv(e,t,n,r,s){if(Qt(n)){var i=!0;Eu(t)}else i=!1;if(go(t,s),t.stateNode===null)Yc(e,t),zS(t,n,r),pp(t,n,r,s),r=!0;else if(e===null){var a=t.stateNode,l=t.memoizedProps;a.props=l;var c=a.context,u=n.contextType;typeof u=="object"&&u!==null?u=En(u):(u=Qt(n)?xi:Ot.current,u=Ro(t,u));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||c!==u)&&Ov(t,a,r,u),os=!1;var p=t.memoizedState;a.state=p,Mu(t,r,a,s),c=t.memoizedState,l!==r||p!==c||Yt.current||os?(typeof f=="function"&&(hp(t,n,f,r),c=t.memoizedState),(l=os||Av(t,n,l,r,p,c,u))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=u,r=l):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,xS(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:zn(t.type,l),a.props=u,h=t.pendingProps,p=a.context,c=n.contextType,typeof c=="object"&&c!==null?c=En(c):(c=Qt(n)?xi:Ot.current,c=Ro(t,c));var m=n.getDerivedStateFromProps;(f=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==h||p!==c)&&Ov(t,a,r,c),os=!1,p=t.memoizedState,a.state=p,Mu(t,r,a,s);var g=t.memoizedState;l!==h||p!==g||Yt.current||os?(typeof m=="function"&&(hp(t,n,m,r),g=t.memoizedState),(u=os||Av(t,n,u,r,p,g,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,g,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,g,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),a.props=r,a.state=g,a.context=c,r=u):(typeof a.componentDidUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return vp(e,t,n,r,i,s)}function vp(e,t,n,r,s,i){HS(e,t);var a=(t.flags&128)!==0;if(!r&&!a)return s&&jv(t,n,!1),Vr(e,t,i);r=t.stateNode,_T.current=t;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&a?(t.child=Oo(t,e.child,null,i),t.child=Oo(t,null,l,i)):Ft(e,t,l,i),t.memoizedState=r.state,s&&jv(t,n,!0),t.child}function WS(e){var t=e.stateNode;t.pendingContext?Cv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Cv(e,t.context,!1),ag(e,t.containerInfo)}function Vv(e,t,n,r,s){return Ao(),tg(s),t.flags|=256,Ft(e,t,n,r),t.child}var xp={dehydrated:null,treeContext:null,retryLane:0};function yp(e){return{baseLanes:e,cachePool:null,transitions:null}}function KS(e,t,n){var r=t.pendingProps,s=et.current,i=!1,a=(t.flags&128)!==0,l;if((l=a)||(l=e!==null&&e.memoizedState===null?!1:(s&2)!==0),l?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(s|=1),Ke(et,s&1),e===null)return dp(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=r.children,e=r.fallback,i?(r=t.mode,i=t.child,a={mode:"hidden",children:a},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=Td(a,r,0,null),e=pi(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=yp(n),t.memoizedState=xp,e):mg(t,a));if(s=e.memoizedState,s!==null&&(l=s.dehydrated,l!==null))return FT(e,t,a,r,l,s,n);if(i){i=r.fallback,a=t.mode,s=e.child,l=s.sibling;var c={mode:"hidden",children:r.children};return!(a&1)&&t.child!==s?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Ps(s,c),r.subtreeFlags=s.subtreeFlags&14680064),l!==null?i=Ps(l,i):(i=pi(i,a,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,a=e.child.memoizedState,a=a===null?yp(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~n,t.memoizedState=xp,r}return i=e.child,e=i.sibling,r=Ps(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function mg(e,t){return t=Td({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function yc(e,t,n,r){return r!==null&&tg(r),Oo(t,e.child,null,n),e=mg(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function FT(e,t,n,r,s,i,a){if(n)return t.flags&256?(t.flags&=-257,r=Vf(Error(te(422))),yc(e,t,a,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,s=t.mode,r=Td({mode:"visible",children:r.children},s,0,null),i=pi(i,s,a,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&Oo(t,e.child,null,a),t.child.memoizedState=yp(a),t.memoizedState=xp,i);if(!(t.mode&1))return yc(e,t,a,null);if(s.data==="$!"){if(r=s.nextSibling&&s.nextSibling.dataset,r)var l=r.dgst;return r=l,i=Error(te(419)),r=Vf(i,r,void 0),yc(e,t,a,r)}if(l=(a&e.childLanes)!==0,Zt||l){if(r=xt,r!==null){switch(a&-a){case 4:s=2;break;case 16:s=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:s=32;break;case 536870912:s=268435456;break;default:s=0}s=s&(r.suspendedLanes|a)?0:s,s!==0&&s!==i.retryLane&&(i.retryLane=s,Br(e,s),Gn(r,e,s,-1))}return wg(),r=Vf(Error(te(421))),yc(e,t,a,r)}return s.data==="$?"?(t.flags|=128,t.child=e.child,t=QT.bind(null,e),s._reactRetry=t,null):(e=i.treeContext,ln=js(s.nextSibling),cn=t,Xe=!0,Hn=null,e!==null&&(yn[bn++]=Ir,yn[bn++]=Dr,yn[bn++]=yi,Ir=e.id,Dr=e.overflow,yi=t),t=mg(t,r.children),t.flags|=4096,t)}function $v(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),fp(e.return,t,n)}function $f(e,t,n,r,s){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:s}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=s)}function GS(e,t,n){var r=t.pendingProps,s=r.revealOrder,i=r.tail;if(Ft(e,t,r.children,n),r=et.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&$v(e,n,t);else if(e.tag===19)$v(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ke(et,r),!(t.mode&1))t.memoizedState=null;else switch(s){case"forwards":for(n=t.child,s=null;n!==null;)e=n.alternate,e!==null&&Ru(e)===null&&(s=n),n=n.sibling;n=s,n===null?(s=t.child,t.child=null):(s=n.sibling,n.sibling=null),$f(t,!1,s,n,i);break;case"backwards":for(n=null,s=t.child,t.child=null;s!==null;){if(e=s.alternate,e!==null&&Ru(e)===null){t.child=s;break}e=s.sibling,s.sibling=n,n=s,s=e}$f(t,!0,n,null,i);break;case"together":$f(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Yc(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),wi|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(te(153));if(t.child!==null){for(e=t.child,n=Ps(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Ps(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function zT(e,t,n){switch(t.tag){case 3:WS(t),Ao();break;case 5:yS(t);break;case 1:Qt(t.type)&&Eu(t);break;case 4:ag(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,s=t.memoizedProps.value;Ke(Pu,r._currentValue),r._currentValue=s;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Ke(et,et.current&1),t.flags|=128,null):n&t.child.childLanes?KS(e,t,n):(Ke(et,et.current&1),e=Vr(e,t,n),e!==null?e.sibling:null);Ke(et,et.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return GS(e,t,n);t.flags|=128}if(s=t.memoizedState,s!==null&&(s.rendering=null,s.tail=null,s.lastEffect=null),Ke(et,et.current),r)break;return null;case 22:case 23:return t.lanes=0,US(e,t,n)}return Vr(e,t,n)}var qS,bp,ZS,YS;qS=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};bp=function(){};ZS=function(e,t,n,r){var s=e.memoizedProps;if(s!==r){e=t.stateNode,ri(gr.current);var i=null;switch(n){case"input":s=$h(e,s),r=$h(e,r),i=[];break;case"select":s=rt({},s,{value:void 0}),r=rt({},r,{value:void 0}),i=[];break;case"textarea":s=Wh(e,s),r=Wh(e,r),i=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Cu)}Gh(n,r);var a;n=null;for(u in s)if(!r.hasOwnProperty(u)&&s.hasOwnProperty(u)&&s[u]!=null)if(u==="style"){var l=s[u];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ja.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var c=r[u];if(l=s!=null?s[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(a in l)!l.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in c)c.hasOwnProperty(a)&&l[a]!==c[a]&&(n||(n={}),n[a]=c[a])}else n||(i||(i=[]),i.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ja.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ze("scroll",e),i||l===c||(i=[])):(i=i||[]).push(u,c))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};YS=function(e,t,n,r){n!==r&&(t.flags|=4)};function ga(e,t){if(!Xe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Tt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags&14680064,r|=s.flags&14680064,s.return=e,s=s.sibling;else for(s=e.child;s!==null;)n|=s.lanes|s.childLanes,r|=s.subtreeFlags,r|=s.flags,s.return=e,s=s.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function BT(e,t,n){var r=t.pendingProps;switch(eg(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Tt(t),null;case 1:return Qt(t.type)&&ju(),Tt(t),null;case 3:return r=t.stateNode,Io(),Qe(Yt),Qe(Ot),cg(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(vc(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Hn!==null&&(Lp(Hn),Hn=null))),bp(e,t),Tt(t),null;case 5:lg(t);var s=ri(dl.current);if(n=t.type,e!==null&&t.stateNode!=null)ZS(e,t,n,r,s),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(te(166));return Tt(t),null}if(e=ri(gr.current),vc(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[fr]=t,r[cl]=i,e=(t.mode&1)!==0,n){case"dialog":Ze("cancel",r),Ze("close",r);break;case"iframe":case"object":case"embed":Ze("load",r);break;case"video":case"audio":for(s=0;s<Aa.length;s++)Ze(Aa[s],r);break;case"source":Ze("error",r);break;case"img":case"image":case"link":Ze("error",r),Ze("load",r);break;case"details":Ze("toggle",r);break;case"input":Q0(r,i),Ze("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Ze("invalid",r);break;case"textarea":J0(r,i),Ze("invalid",r)}Gh(n,i),s=null;for(var a in i)if(i.hasOwnProperty(a)){var l=i[a];a==="children"?typeof l=="string"?r.textContent!==l&&(i.suppressHydrationWarning!==!0&&gc(r.textContent,l,e),s=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(i.suppressHydrationWarning!==!0&&gc(r.textContent,l,e),s=["children",""+l]):Ja.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&Ze("scroll",r)}switch(n){case"input":lc(r),X0(r,i,!0);break;case"textarea":lc(r),ev(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Cu)}r=s,t.updateQueue=r,r!==null&&(t.flags|=4)}else{a=s.nodeType===9?s:s.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=C1(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=a.createElement(n,{is:r.is}):(e=a.createElement(n),n==="select"&&(a=e,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):e=a.createElementNS(e,n),e[fr]=t,e[cl]=r,qS(e,t,!1,!1),t.stateNode=e;e:{switch(a=qh(n,r),n){case"dialog":Ze("cancel",e),Ze("close",e),s=r;break;case"iframe":case"object":case"embed":Ze("load",e),s=r;break;case"video":case"audio":for(s=0;s<Aa.length;s++)Ze(Aa[s],e);s=r;break;case"source":Ze("error",e),s=r;break;case"img":case"image":case"link":Ze("error",e),Ze("load",e),s=r;break;case"details":Ze("toggle",e),s=r;break;case"input":Q0(e,r),s=$h(e,r),Ze("invalid",e);break;case"option":s=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},s=rt({},r,{value:void 0}),Ze("invalid",e);break;case"textarea":J0(e,r),s=Wh(e,r),Ze("invalid",e);break;default:s=r}Gh(n,s),l=s;for(i in l)if(l.hasOwnProperty(i)){var c=l[i];i==="style"?N1(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&j1(e,c)):i==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&el(e,c):typeof c=="number"&&el(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Ja.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ze("scroll",e):c!=null&&zm(e,i,c,a))}switch(n){case"input":lc(e),X0(e,r,!1);break;case"textarea":lc(e),ev(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Rs(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?fo(e,!!r.multiple,i,!1):r.defaultValue!=null&&fo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof s.onClick=="function"&&(e.onclick=Cu)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Tt(t),null;case 6:if(e&&t.stateNode!=null)YS(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(te(166));if(n=ri(dl.current),ri(gr.current),vc(t)){if(r=t.stateNode,n=t.memoizedProps,r[fr]=t,(i=r.nodeValue!==n)&&(e=cn,e!==null))switch(e.tag){case 3:gc(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&gc(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[fr]=t,t.stateNode=r}return Tt(t),null;case 13:if(Qe(et),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Xe&&ln!==null&&t.mode&1&&!(t.flags&128))pS(),Ao(),t.flags|=98560,i=!1;else if(i=vc(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(te(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(te(317));i[fr]=t}else Ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Tt(t),i=!1}else Hn!==null&&(Lp(Hn),Hn=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||et.current&1?ft===0&&(ft=3):wg())),t.updateQueue!==null&&(t.flags|=4),Tt(t),null);case 4:return Io(),bp(e,t),e===null&&al(t.stateNode.containerInfo),Tt(t),null;case 10:return sg(t.type._context),Tt(t),null;case 17:return Qt(t.type)&&ju(),Tt(t),null;case 19:if(Qe(et),i=t.memoizedState,i===null)return Tt(t),null;if(r=(t.flags&128)!==0,a=i.rendering,a===null)if(r)ga(i,!1);else{if(ft!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Ru(e),a!==null){for(t.flags|=128,ga(i,!1),r=a.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ke(et,et.current&1|2),t.child}e=e.sibling}i.tail!==null&&ot()>_o&&(t.flags|=128,r=!0,ga(i,!1),t.lanes=4194304)}else{if(!r)if(e=Ru(a),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ga(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!Xe)return Tt(t),null}else 2*ot()-i.renderingStartTime>_o&&n!==1073741824&&(t.flags|=128,r=!0,ga(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(n=i.last,n!==null?n.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ot(),t.sibling=null,n=et.current,Ke(et,r?n&1|2:n&1),t):(Tt(t),null);case 22:case 23:return bg(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?sn&1073741824&&(Tt(t),t.subtreeFlags&6&&(t.flags|=8192)):Tt(t),null;case 24:return null;case 25:return null}throw Error(te(156,t.tag))}function VT(e,t){switch(eg(t),t.tag){case 1:return Qt(t.type)&&ju(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Io(),Qe(Yt),Qe(Ot),cg(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return lg(t),null;case 13:if(Qe(et),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(te(340));Ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Qe(et),null;case 4:return Io(),null;case 10:return sg(t.type._context),null;case 22:case 23:return bg(),null;case 24:return null;default:return null}}var bc=!1,Rt=!1,$T=typeof WeakSet=="function"?WeakSet:Set,ae=null;function io(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){it(e,t,r)}else n.current=null}function wp(e,t,n){try{n()}catch(r){it(e,t,r)}}var Uv=!1;function UT(e,t){if(sp=wu,e=tS(),Xm(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var s=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var a=0,l=-1,c=-1,u=0,f=0,h=e,p=null;t:for(;;){for(var m;h!==n||s!==0&&h.nodeType!==3||(l=a+s),h!==i||r!==0&&h.nodeType!==3||(c=a+r),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)p=h,h=m;for(;;){if(h===e)break t;if(p===n&&++u===s&&(l=a),p===i&&++f===r&&(c=a),(m=h.nextSibling)!==null)break;h=p,p=h.parentNode}h=m}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(ip={focusedElem:e,selectionRange:n},wu=!1,ae=t;ae!==null;)if(t=ae,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ae=e;else for(;ae!==null;){t=ae;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var v=g.memoizedProps,y=g.memoizedState,b=t.stateNode,x=b.getSnapshotBeforeUpdate(t.elementType===t.type?v:zn(t.type,v),y);b.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var w=t.stateNode.containerInfo;w.nodeType===1?w.textContent="":w.nodeType===9&&w.documentElement&&w.removeChild(w.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(S){it(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,ae=e;break}ae=t.return}return g=Uv,Uv=!1,g}function Ua(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&e)===e){var i=s.destroy;s.destroy=void 0,i!==void 0&&wp(t,n,i)}s=s.next}while(s!==r)}}function Ld(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Sp(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function QS(e){var t=e.alternate;t!==null&&(e.alternate=null,QS(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[fr],delete t[cl],delete t[lp],delete t[jT],delete t[ET])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function XS(e){return e.tag===5||e.tag===3||e.tag===4}function Hv(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||XS(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function kp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Cu));else if(r!==4&&(e=e.child,e!==null))for(kp(e,t,n),e=e.sibling;e!==null;)kp(e,t,n),e=e.sibling}function Cp(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Cp(e,t,n),e=e.sibling;e!==null;)Cp(e,t,n),e=e.sibling}var yt=null,Un=!1;function Qr(e,t,n){for(n=n.child;n!==null;)JS(e,t,n),n=n.sibling}function JS(e,t,n){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(bd,n)}catch{}switch(n.tag){case 5:Rt||io(n,t);case 6:var r=yt,s=Un;yt=null,Qr(e,t,n),yt=r,Un=s,yt!==null&&(Un?(e=yt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):yt.removeChild(n.stateNode));break;case 18:yt!==null&&(Un?(e=yt,n=n.stateNode,e.nodeType===8?If(e.parentNode,n):e.nodeType===1&&If(e,n),sl(e)):If(yt,n.stateNode));break;case 4:r=yt,s=Un,yt=n.stateNode.containerInfo,Un=!0,Qr(e,t,n),yt=r,Un=s;break;case 0:case 11:case 14:case 15:if(!Rt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){s=r=r.next;do{var i=s,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&wp(n,t,a),s=s.next}while(s!==r)}Qr(e,t,n);break;case 1:if(!Rt&&(io(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){it(n,t,l)}Qr(e,t,n);break;case 21:Qr(e,t,n);break;case 22:n.mode&1?(Rt=(r=Rt)||n.memoizedState!==null,Qr(e,t,n),Rt=r):Qr(e,t,n);break;default:Qr(e,t,n)}}function Wv(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new $T),t.forEach(function(r){var s=XT.bind(null,e,r);n.has(r)||(n.add(r),r.then(s,s))})}}function An(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var s=n[r];try{var i=e,a=t,l=a;e:for(;l!==null;){switch(l.tag){case 5:yt=l.stateNode,Un=!1;break e;case 3:yt=l.stateNode.containerInfo,Un=!0;break e;case 4:yt=l.stateNode.containerInfo,Un=!0;break e}l=l.return}if(yt===null)throw Error(te(160));JS(i,a,s),yt=null,Un=!1;var c=s.alternate;c!==null&&(c.return=null),s.return=null}catch(u){it(s,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)ek(t,e),t=t.sibling}function ek(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(An(t,e),rr(e),r&4){try{Ua(3,e,e.return),Ld(3,e)}catch(v){it(e,e.return,v)}try{Ua(5,e,e.return)}catch(v){it(e,e.return,v)}}break;case 1:An(t,e),rr(e),r&512&&n!==null&&io(n,n.return);break;case 5:if(An(t,e),rr(e),r&512&&n!==null&&io(n,n.return),e.flags&32){var s=e.stateNode;try{el(s,"")}catch(v){it(e,e.return,v)}}if(r&4&&(s=e.stateNode,s!=null)){var i=e.memoizedProps,a=n!==null?n.memoizedProps:i,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&i.type==="radio"&&i.name!=null&&S1(s,i),qh(l,a);var u=qh(l,i);for(a=0;a<c.length;a+=2){var f=c[a],h=c[a+1];f==="style"?N1(s,h):f==="dangerouslySetInnerHTML"?j1(s,h):f==="children"?el(s,h):zm(s,f,h,u)}switch(l){case"input":Uh(s,i);break;case"textarea":k1(s,i);break;case"select":var p=s._wrapperState.wasMultiple;s._wrapperState.wasMultiple=!!i.multiple;var m=i.value;m!=null?fo(s,!!i.multiple,m,!1):p!==!!i.multiple&&(i.defaultValue!=null?fo(s,!!i.multiple,i.defaultValue,!0):fo(s,!!i.multiple,i.multiple?[]:"",!1))}s[cl]=i}catch(v){it(e,e.return,v)}}break;case 6:if(An(t,e),rr(e),r&4){if(e.stateNode===null)throw Error(te(162));s=e.stateNode,i=e.memoizedProps;try{s.nodeValue=i}catch(v){it(e,e.return,v)}}break;case 3:if(An(t,e),rr(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{sl(t.containerInfo)}catch(v){it(e,e.return,v)}break;case 4:An(t,e),rr(e);break;case 13:An(t,e),rr(e),s=e.child,s.flags&8192&&(i=s.memoizedState!==null,s.stateNode.isHidden=i,!i||s.alternate!==null&&s.alternate.memoizedState!==null||(xg=ot())),r&4&&Wv(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Rt=(u=Rt)||f,An(t,e),Rt=u):An(t,e),rr(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(ae=e,f=e.child;f!==null;){for(h=ae=f;ae!==null;){switch(p=ae,m=p.child,p.tag){case 0:case 11:case 14:case 15:Ua(4,p,p.return);break;case 1:io(p,p.return);var g=p.stateNode;if(typeof g.componentWillUnmount=="function"){r=p,n=p.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(v){it(r,n,v)}}break;case 5:io(p,p.return);break;case 22:if(p.memoizedState!==null){Gv(h);continue}}m!==null?(m.return=p,ae=m):Gv(h)}f=f.sibling}e:for(f=null,h=e;;){if(h.tag===5){if(f===null){f=h;try{s=h.stateNode,u?(i=s.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(l=h.stateNode,c=h.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=E1("display",a))}catch(v){it(e,e.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(v){it(e,e.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===e)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===e)break e;for(;h.sibling===null;){if(h.return===null||h.return===e)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:An(t,e),rr(e),r&4&&Wv(e);break;case 21:break;default:An(t,e),rr(e)}}function rr(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(XS(n)){var r=n;break e}n=n.return}throw Error(te(160))}switch(r.tag){case 5:var s=r.stateNode;r.flags&32&&(el(s,""),r.flags&=-33);var i=Hv(e);Cp(e,i,s);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Hv(e);kp(e,l,a);break;default:throw Error(te(161))}}catch(c){it(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function HT(e,t,n){ae=e,tk(e)}function tk(e,t,n){for(var r=(e.mode&1)!==0;ae!==null;){var s=ae,i=s.child;if(s.tag===22&&r){var a=s.memoizedState!==null||bc;if(!a){var l=s.alternate,c=l!==null&&l.memoizedState!==null||Rt;l=bc;var u=Rt;if(bc=a,(Rt=c)&&!u)for(ae=s;ae!==null;)a=ae,c=a.child,a.tag===22&&a.memoizedState!==null?qv(s):c!==null?(c.return=a,ae=c):qv(s);for(;i!==null;)ae=i,tk(i),i=i.sibling;ae=s,bc=l,Rt=u}Kv(e)}else s.subtreeFlags&8772&&i!==null?(i.return=s,ae=i):Kv(e)}}function Kv(e){for(;ae!==null;){var t=ae;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Rt||Ld(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Rt)if(n===null)r.componentDidMount();else{var s=t.elementType===t.type?n.memoizedProps:zn(t.type,n.memoizedProps);r.componentDidUpdate(s,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Tv(t,i,r);break;case 3:var a=t.updateQueue;if(a!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Tv(t,a,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&sl(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Rt||t.flags&512&&Sp(t)}catch(p){it(t,t.return,p)}}if(t===e){ae=null;break}if(n=t.sibling,n!==null){n.return=t.return,ae=n;break}ae=t.return}}function Gv(e){for(;ae!==null;){var t=ae;if(t===e){ae=null;break}var n=t.sibling;if(n!==null){n.return=t.return,ae=n;break}ae=t.return}}function qv(e){for(;ae!==null;){var t=ae;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ld(4,t)}catch(c){it(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var s=t.return;try{r.componentDidMount()}catch(c){it(t,s,c)}}var i=t.return;try{Sp(t)}catch(c){it(t,i,c)}break;case 5:var a=t.return;try{Sp(t)}catch(c){it(t,a,c)}}}catch(c){it(t,t.return,c)}if(t===e){ae=null;break}var l=t.sibling;if(l!==null){l.return=t.return,ae=l;break}ae=t.return}}var WT=Math.ceil,Iu=Wr.ReactCurrentDispatcher,gg=Wr.ReactCurrentOwner,Cn=Wr.ReactCurrentBatchConfig,Me=0,xt=null,lt=null,Ct=0,sn=0,oo=zs(0),ft=0,ml=null,wi=0,Pd=0,vg=0,Ha=null,qt=null,xg=0,_o=1/0,Rr=null,Du=!1,jp=null,Ns=null,wc=!1,gs=null,_u=0,Wa=0,Ep=null,Qc=-1,Xc=0;function $t(){return Me&6?ot():Qc!==-1?Qc:Qc=ot()}function Ls(e){return e.mode&1?Me&2&&Ct!==0?Ct&-Ct:LT.transition!==null?(Xc===0&&(Xc=z1()),Xc):(e=Be,e!==0||(e=window.event,e=e===void 0?16:K1(e.type)),e):1}function Gn(e,t,n,r){if(50<Wa)throw Wa=0,Ep=null,Error(te(185));Ol(e,n,r),(!(Me&2)||e!==xt)&&(e===xt&&(!(Me&2)&&(Pd|=n),ft===4&&cs(e,Ct)),Xt(e,r),n===1&&Me===0&&!(t.mode&1)&&(_o=ot()+500,jd&&Bs()))}function Xt(e,t){var n=e.callbackNode;LP(e,t);var r=bu(e,e===xt?Ct:0);if(r===0)n!==null&&rv(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&rv(n),t===1)e.tag===0?NT(Zv.bind(null,e)):dS(Zv.bind(null,e)),kT(function(){!(Me&6)&&Bs()}),n=null;else{switch(B1(r)){case 1:n=Hm;break;case 4:n=_1;break;case 16:n=yu;break;case 536870912:n=F1;break;default:n=yu}n=ck(n,nk.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nk(e,t){if(Qc=-1,Xc=0,Me&6)throw Error(te(327));var n=e.callbackNode;if(vo()&&e.callbackNode!==n)return null;var r=bu(e,e===xt?Ct:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Fu(e,r);else{t=r;var s=Me;Me|=2;var i=sk();(xt!==e||Ct!==t)&&(Rr=null,_o=ot()+500,hi(e,t));do try{qT();break}catch(l){rk(e,l)}while(!0);rg(),Iu.current=i,Me=s,lt!==null?t=0:(xt=null,Ct=0,t=ft)}if(t!==0){if(t===2&&(s=Jh(e),s!==0&&(r=s,t=Np(e,s))),t===1)throw n=ml,hi(e,0),cs(e,r),Xt(e,ot()),n;if(t===6)cs(e,r);else{if(s=e.current.alternate,!(r&30)&&!KT(s)&&(t=Fu(e,r),t===2&&(i=Jh(e),i!==0&&(r=i,t=Np(e,i))),t===1))throw n=ml,hi(e,0),cs(e,r),Xt(e,ot()),n;switch(e.finishedWork=s,e.finishedLanes=r,t){case 0:case 1:throw Error(te(345));case 2:Xs(e,qt,Rr);break;case 3:if(cs(e,r),(r&130023424)===r&&(t=xg+500-ot(),10<t)){if(bu(e,0)!==0)break;if(s=e.suspendedLanes,(s&r)!==r){$t(),e.pingedLanes|=e.suspendedLanes&s;break}e.timeoutHandle=ap(Xs.bind(null,e,qt,Rr),t);break}Xs(e,qt,Rr);break;case 4:if(cs(e,r),(r&4194240)===r)break;for(t=e.eventTimes,s=-1;0<r;){var a=31-Kn(r);i=1<<a,a=t[a],a>s&&(s=a),r&=~i}if(r=s,r=ot()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*WT(r/1960))-r,10<r){e.timeoutHandle=ap(Xs.bind(null,e,qt,Rr),r);break}Xs(e,qt,Rr);break;case 5:Xs(e,qt,Rr);break;default:throw Error(te(329))}}}return Xt(e,ot()),e.callbackNode===n?nk.bind(null,e):null}function Np(e,t){var n=Ha;return e.current.memoizedState.isDehydrated&&(hi(e,t).flags|=256),e=Fu(e,t),e!==2&&(t=qt,qt=n,t!==null&&Lp(t)),e}function Lp(e){qt===null?qt=e:qt.push.apply(qt,e)}function KT(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var s=n[r],i=s.getSnapshot;s=s.value;try{if(!Zn(i(),s))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function cs(e,t){for(t&=~vg,t&=~Pd,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Kn(t),r=1<<n;e[n]=-1,t&=~r}}function Zv(e){if(Me&6)throw Error(te(327));vo();var t=bu(e,0);if(!(t&1))return Xt(e,ot()),null;var n=Fu(e,t);if(e.tag!==0&&n===2){var r=Jh(e);r!==0&&(t=r,n=Np(e,r))}if(n===1)throw n=ml,hi(e,0),cs(e,t),Xt(e,ot()),n;if(n===6)throw Error(te(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Xs(e,qt,Rr),Xt(e,ot()),null}function yg(e,t){var n=Me;Me|=1;try{return e(t)}finally{Me=n,Me===0&&(_o=ot()+500,jd&&Bs())}}function Si(e){gs!==null&&gs.tag===0&&!(Me&6)&&vo();var t=Me;Me|=1;var n=Cn.transition,r=Be;try{if(Cn.transition=null,Be=1,e)return e()}finally{Be=r,Cn.transition=n,Me=t,!(Me&6)&&Bs()}}function bg(){sn=oo.current,Qe(oo)}function hi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,ST(n)),lt!==null)for(n=lt.return;n!==null;){var r=n;switch(eg(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ju();break;case 3:Io(),Qe(Yt),Qe(Ot),cg();break;case 5:lg(r);break;case 4:Io();break;case 13:Qe(et);break;case 19:Qe(et);break;case 10:sg(r.type._context);break;case 22:case 23:bg()}n=n.return}if(xt=e,lt=e=Ps(e.current,null),Ct=sn=t,ft=0,ml=null,vg=Pd=wi=0,qt=Ha=null,ni!==null){for(t=0;t<ni.length;t++)if(n=ni[t],r=n.interleaved,r!==null){n.interleaved=null;var s=r.next,i=n.pending;if(i!==null){var a=i.next;i.next=s,r.next=a}n.pending=r}ni=null}return e}function rk(e,t){do{var n=lt;try{if(rg(),qc.current=Ou,Au){for(var r=tt.memoizedState;r!==null;){var s=r.queue;s!==null&&(s.pending=null),r=r.next}Au=!1}if(bi=0,pt=dt=tt=null,$a=!1,fl=0,gg.current=null,n===null||n.return===null){ft=1,ml=t,lt=null;break}e:{var i=e,a=n.return,l=n,c=t;if(t=Ct,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=l,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var p=f.alternate;p?(f.updateQueue=p.updateQueue,f.memoizedState=p.memoizedState,f.lanes=p.lanes):(f.updateQueue=null,f.memoizedState=null)}var m=Dv(a);if(m!==null){m.flags&=-257,_v(m,a,l,i,t),m.mode&1&&Iv(i,u,t),t=m,c=u;var g=t.updateQueue;if(g===null){var v=new Set;v.add(c),t.updateQueue=v}else g.add(c);break e}else{if(!(t&1)){Iv(i,u,t),wg();break e}c=Error(te(426))}}else if(Xe&&l.mode&1){var y=Dv(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),_v(y,a,l,i,t),tg(Do(c,l));break e}}i=c=Do(c,l),ft!==4&&(ft=2),Ha===null?Ha=[i]:Ha.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var b=BS(i,c,t);Pv(i,b);break e;case 1:l=c;var x=i.type,w=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||w!==null&&typeof w.componentDidCatch=="function"&&(Ns===null||!Ns.has(w)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=VS(i,l,t);Pv(i,S);break e}}i=i.return}while(i!==null)}ok(n)}catch(k){t=k,lt===n&&n!==null&&(lt=n=n.return);continue}break}while(!0)}function sk(){var e=Iu.current;return Iu.current=Ou,e===null?Ou:e}function wg(){(ft===0||ft===3||ft===2)&&(ft=4),xt===null||!(wi&268435455)&&!(Pd&268435455)||cs(xt,Ct)}function Fu(e,t){var n=Me;Me|=2;var r=sk();(xt!==e||Ct!==t)&&(Rr=null,hi(e,t));do try{GT();break}catch(s){rk(e,s)}while(!0);if(rg(),Me=n,Iu.current=r,lt!==null)throw Error(te(261));return xt=null,Ct=0,ft}function GT(){for(;lt!==null;)ik(lt)}function qT(){for(;lt!==null&&!yP();)ik(lt)}function ik(e){var t=lk(e.alternate,e,sn);e.memoizedProps=e.pendingProps,t===null?ok(e):lt=t,gg.current=null}function ok(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=VT(n,t),n!==null){n.flags&=32767,lt=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ft=6,lt=null;return}}else if(n=BT(n,t,sn),n!==null){lt=n;return}if(t=t.sibling,t!==null){lt=t;return}lt=t=e}while(t!==null);ft===0&&(ft=5)}function Xs(e,t,n){var r=Be,s=Cn.transition;try{Cn.transition=null,Be=1,ZT(e,t,n,r)}finally{Cn.transition=s,Be=r}return null}function ZT(e,t,n,r){do vo();while(gs!==null);if(Me&6)throw Error(te(327));n=e.finishedWork;var s=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(te(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(PP(e,i),e===xt&&(lt=xt=null,Ct=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wc||(wc=!0,ck(yu,function(){return vo(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=Cn.transition,Cn.transition=null;var a=Be;Be=1;var l=Me;Me|=4,gg.current=null,UT(e,n),ek(n,e),mT(ip),wu=!!sp,ip=sp=null,e.current=n,HT(n),bP(),Me=l,Be=a,Cn.transition=i}else e.current=n;if(wc&&(wc=!1,gs=e,_u=s),i=e.pendingLanes,i===0&&(Ns=null),kP(n.stateNode),Xt(e,ot()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)s=t[n],r(s.value,{componentStack:s.stack,digest:s.digest});if(Du)throw Du=!1,e=jp,jp=null,e;return _u&1&&e.tag!==0&&vo(),i=e.pendingLanes,i&1?e===Ep?Wa++:(Wa=0,Ep=e):Wa=0,Bs(),null}function vo(){if(gs!==null){var e=B1(_u),t=Cn.transition,n=Be;try{if(Cn.transition=null,Be=16>e?16:e,gs===null)var r=!1;else{if(e=gs,gs=null,_u=0,Me&6)throw Error(te(331));var s=Me;for(Me|=4,ae=e.current;ae!==null;){var i=ae,a=i.child;if(ae.flags&16){var l=i.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(ae=u;ae!==null;){var f=ae;switch(f.tag){case 0:case 11:case 15:Ua(8,f,i)}var h=f.child;if(h!==null)h.return=f,ae=h;else for(;ae!==null;){f=ae;var p=f.sibling,m=f.return;if(QS(f),f===u){ae=null;break}if(p!==null){p.return=m,ae=p;break}ae=m}}}var g=i.alternate;if(g!==null){var v=g.child;if(v!==null){g.child=null;do{var y=v.sibling;v.sibling=null,v=y}while(v!==null)}}ae=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,ae=a;else e:for(;ae!==null;){if(i=ae,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ua(9,i,i.return)}var b=i.sibling;if(b!==null){b.return=i.return,ae=b;break e}ae=i.return}}var x=e.current;for(ae=x;ae!==null;){a=ae;var w=a.child;if(a.subtreeFlags&2064&&w!==null)w.return=a,ae=w;else e:for(a=x;ae!==null;){if(l=ae,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ld(9,l)}}catch(k){it(l,l.return,k)}if(l===a){ae=null;break e}var S=l.sibling;if(S!==null){S.return=l.return,ae=S;break e}ae=l.return}}if(Me=s,Bs(),mr&&typeof mr.onPostCommitFiberRoot=="function")try{mr.onPostCommitFiberRoot(bd,e)}catch{}r=!0}return r}finally{Be=n,Cn.transition=t}}return!1}function Yv(e,t,n){t=Do(n,t),t=BS(e,t,1),e=Es(e,t,1),t=$t(),e!==null&&(Ol(e,1,t),Xt(e,t))}function it(e,t,n){if(e.tag===3)Yv(e,e,n);else for(;t!==null;){if(t.tag===3){Yv(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ns===null||!Ns.has(r))){e=Do(n,e),e=VS(t,e,1),t=Es(t,e,1),e=$t(),t!==null&&(Ol(t,1,e),Xt(t,e));break}}t=t.return}}function YT(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=$t(),e.pingedLanes|=e.suspendedLanes&n,xt===e&&(Ct&n)===n&&(ft===4||ft===3&&(Ct&130023424)===Ct&&500>ot()-xg?hi(e,0):vg|=n),Xt(e,t)}function ak(e,t){t===0&&(e.mode&1?(t=dc,dc<<=1,!(dc&130023424)&&(dc=4194304)):t=1);var n=$t();e=Br(e,t),e!==null&&(Ol(e,t,n),Xt(e,n))}function QT(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),ak(e,n)}function XT(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,s=e.memoizedState;s!==null&&(n=s.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(te(314))}r!==null&&r.delete(t),ak(e,n)}var lk;lk=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Yt.current)Zt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return Zt=!1,zT(e,t,n);Zt=!!(e.flags&131072)}else Zt=!1,Xe&&t.flags&1048576&&fS(t,Lu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Yc(e,t),e=t.pendingProps;var s=Ro(t,Ot.current);go(t,n),s=dg(null,t,r,e,s,n);var i=fg();return t.flags|=1,typeof s=="object"&&s!==null&&typeof s.render=="function"&&s.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Qt(r)?(i=!0,Eu(t)):i=!1,t.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,og(t),s.updater=Nd,t.stateNode=s,s._reactInternals=t,pp(t,r,e,n),t=vp(null,t,r,!0,i,n)):(t.tag=0,Xe&&i&&Jm(t),Ft(null,t,s,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Yc(e,t),e=t.pendingProps,s=r._init,r=s(r._payload),t.type=r,s=t.tag=eM(r),e=zn(r,e),s){case 0:t=gp(null,t,r,e,n);break e;case 1:t=Bv(null,t,r,e,n);break e;case 11:t=Fv(null,t,r,e,n);break e;case 14:t=zv(null,t,r,zn(r.type,e),n);break e}throw Error(te(306,r,""))}return t;case 0:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:zn(r,s),gp(e,t,r,s,n);case 1:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:zn(r,s),Bv(e,t,r,s,n);case 3:e:{if(WS(t),e===null)throw Error(te(387));r=t.pendingProps,i=t.memoizedState,s=i.element,xS(e,t),Mu(t,r,null,n);var a=t.memoizedState;if(r=a.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){s=Do(Error(te(423)),t),t=Vv(e,t,r,n,s);break e}else if(r!==s){s=Do(Error(te(424)),t),t=Vv(e,t,r,n,s);break e}else for(ln=js(t.stateNode.containerInfo.firstChild),cn=t,Xe=!0,Hn=null,n=gS(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),r===s){t=Vr(e,t,n);break e}Ft(e,t,r,n)}t=t.child}return t;case 5:return yS(t),e===null&&dp(t),r=t.type,s=t.pendingProps,i=e!==null?e.memoizedProps:null,a=s.children,op(r,s)?a=null:i!==null&&op(r,i)&&(t.flags|=32),HS(e,t),Ft(e,t,a,n),t.child;case 6:return e===null&&dp(t),null;case 13:return KS(e,t,n);case 4:return ag(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Oo(t,null,r,n):Ft(e,t,r,n),t.child;case 11:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:zn(r,s),Fv(e,t,r,s,n);case 7:return Ft(e,t,t.pendingProps,n),t.child;case 8:return Ft(e,t,t.pendingProps.children,n),t.child;case 12:return Ft(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,s=t.pendingProps,i=t.memoizedProps,a=s.value,Ke(Pu,r._currentValue),r._currentValue=a,i!==null)if(Zn(i.value,a)){if(i.children===s.children&&!Yt.current){t=Vr(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var l=i.dependencies;if(l!==null){a=i.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(i.tag===1){c=_r(-1,n&-n),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=n,c=i.alternate,c!==null&&(c.lanes|=n),fp(i.return,n,t),l.lanes|=n;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(te(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),fp(a,n,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ft(e,t,s.children,n),t=t.child}return t;case 9:return s=t.type,r=t.pendingProps.children,go(t,n),s=En(s),r=r(s),t.flags|=1,Ft(e,t,r,n),t.child;case 14:return r=t.type,s=zn(r,t.pendingProps),s=zn(r.type,s),zv(e,t,r,s,n);case 15:return $S(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,s=t.pendingProps,s=t.elementType===r?s:zn(r,s),Yc(e,t),t.tag=1,Qt(r)?(e=!0,Eu(t)):e=!1,go(t,n),zS(t,r,s),pp(t,r,s,n),vp(null,t,r,!0,e,n);case 19:return GS(e,t,n);case 22:return US(e,t,n)}throw Error(te(156,t.tag))};function ck(e,t){return D1(e,t)}function JT(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(e,t,n,r){return new JT(e,t,n,r)}function Sg(e){return e=e.prototype,!(!e||!e.isReactComponent)}function eM(e){if(typeof e=="function")return Sg(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Vm)return 11;if(e===$m)return 14}return 2}function Ps(e,t){var n=e.alternate;return n===null?(n=wn(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Jc(e,t,n,r,s,i){var a=2;if(r=e,typeof e=="function")Sg(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case Yi:return pi(n.children,s,i,t);case Bm:a=8,s|=8;break;case Fh:return e=wn(12,n,t,s|2),e.elementType=Fh,e.lanes=i,e;case zh:return e=wn(13,n,t,s),e.elementType=zh,e.lanes=i,e;case Bh:return e=wn(19,n,t,s),e.elementType=Bh,e.lanes=i,e;case y1:return Td(n,s,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case v1:a=10;break e;case x1:a=9;break e;case Vm:a=11;break e;case $m:a=14;break e;case is:a=16,r=null;break e}throw Error(te(130,e==null?e:typeof e,""))}return t=wn(a,n,t,s),t.elementType=e,t.type=r,t.lanes=i,t}function pi(e,t,n,r){return e=wn(7,e,r,t),e.lanes=n,e}function Td(e,t,n,r){return e=wn(22,e,r,t),e.elementType=y1,e.lanes=n,e.stateNode={isHidden:!1},e}function Uf(e,t,n){return e=wn(6,e,null,t),e.lanes=n,e}function Hf(e,t,n){return t=wn(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tM(e,t,n,r,s){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cf(0),this.expirationTimes=Cf(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cf(0),this.identifierPrefix=r,this.onRecoverableError=s,this.mutableSourceEagerHydrationData=null}function kg(e,t,n,r,s,i,a,l,c){return e=new tM(e,t,n,l,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=wn(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},og(i),e}function nM(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Zi,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function uk(e){if(!e)return As;e=e._reactInternals;e:{if(Ai(e)!==e||e.tag!==1)throw Error(te(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Qt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(te(171))}if(e.tag===1){var n=e.type;if(Qt(n))return uS(e,n,t)}return t}function dk(e,t,n,r,s,i,a,l,c){return e=kg(n,r,!0,e,s,i,a,l,c),e.context=uk(null),n=e.current,r=$t(),s=Ls(n),i=_r(r,s),i.callback=t??null,Es(n,i,s),e.current.lanes=s,Ol(e,s,r),Xt(e,r),e}function Md(e,t,n,r){var s=t.current,i=$t(),a=Ls(s);return n=uk(n),t.context===null?t.context=n:t.pendingContext=n,t=_r(i,a),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Es(s,t,a),e!==null&&(Gn(e,s,a,i),Gc(e,s,a)),a}function zu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qv(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Cg(e,t){Qv(e,t),(e=e.alternate)&&Qv(e,t)}function rM(){return null}var fk=typeof reportError=="function"?reportError:function(e){console.error(e)};function jg(e){this._internalRoot=e}Rd.prototype.render=jg.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(te(409));Md(e,t,null,null)};Rd.prototype.unmount=jg.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Si(function(){Md(null,e,null,null)}),t[zr]=null}};function Rd(e){this._internalRoot=e}Rd.prototype.unstable_scheduleHydration=function(e){if(e){var t=U1();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ls.length&&t!==0&&t<ls[n].priority;n++);ls.splice(n,0,e),n===0&&W1(e)}};function Eg(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Xv(){}function sM(e,t,n,r,s){if(s){if(typeof r=="function"){var i=r;r=function(){var u=zu(a);i.call(u)}}var a=dk(t,r,e,0,null,!1,!1,"",Xv);return e._reactRootContainer=a,e[zr]=a.current,al(e.nodeType===8?e.parentNode:e),Si(),a}for(;s=e.lastChild;)e.removeChild(s);if(typeof r=="function"){var l=r;r=function(){var u=zu(c);l.call(u)}}var c=kg(e,0,!1,null,null,!1,!1,"",Xv);return e._reactRootContainer=c,e[zr]=c.current,al(e.nodeType===8?e.parentNode:e),Si(function(){Md(t,c,n,r)}),c}function Od(e,t,n,r,s){var i=n._reactRootContainer;if(i){var a=i;if(typeof s=="function"){var l=s;s=function(){var c=zu(a);l.call(c)}}Md(t,a,e,s)}else a=sM(n,t,e,s,r);return zu(a)}V1=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Ra(t.pendingLanes);n!==0&&(Wm(t,n|1),Xt(t,ot()),!(Me&6)&&(_o=ot()+500,Bs()))}break;case 13:Si(function(){var r=Br(e,1);if(r!==null){var s=$t();Gn(r,e,1,s)}}),Cg(e,1)}};Km=function(e){if(e.tag===13){var t=Br(e,134217728);if(t!==null){var n=$t();Gn(t,e,134217728,n)}Cg(e,134217728)}};$1=function(e){if(e.tag===13){var t=Ls(e),n=Br(e,t);if(n!==null){var r=$t();Gn(n,e,t,r)}Cg(e,t)}};U1=function(){return Be};H1=function(e,t){var n=Be;try{return Be=e,t()}finally{Be=n}};Yh=function(e,t,n){switch(t){case"input":if(Uh(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var s=Cd(r);if(!s)throw Error(te(90));w1(r),Uh(r,s)}}}break;case"textarea":k1(e,n);break;case"select":t=n.value,t!=null&&fo(e,!!n.multiple,t,!1)}};T1=yg;M1=Si;var iM={usingClientEntryPoint:!1,Events:[Dl,eo,Cd,L1,P1,yg]},va={findFiberByHostInstance:ti,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},oM={bundleType:va.bundleType,version:va.version,rendererPackageName:va.rendererPackageName,rendererConfig:va.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Wr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=O1(e),e===null?null:e.stateNode},findFiberByHostInstance:va.findFiberByHostInstance||rM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Sc.isDisabled&&Sc.supportsFiber)try{bd=Sc.inject(oM),mr=Sc}catch{}}hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iM;hn.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Eg(t))throw Error(te(200));return nM(e,t,null,n)};hn.createRoot=function(e,t){if(!Eg(e))throw Error(te(299));var n=!1,r="",s=fk;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=kg(e,1,!1,null,null,n,!1,r,s),e[zr]=t.current,al(e.nodeType===8?e.parentNode:e),new jg(t)};hn.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(te(188)):(e=Object.keys(e).join(","),Error(te(268,e)));return e=O1(t),e=e===null?null:e.stateNode,e};hn.flushSync=function(e){return Si(e)};hn.hydrate=function(e,t,n){if(!Ad(t))throw Error(te(200));return Od(null,e,t,!0,n)};hn.hydrateRoot=function(e,t,n){if(!Eg(e))throw Error(te(405));var r=n!=null&&n.hydratedSources||null,s=!1,i="",a=fk;if(n!=null&&(n.unstable_strictMode===!0&&(s=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),t=dk(t,null,e,1,n??null,s,!1,i,a),e[zr]=t.current,al(e),r)for(e=0;e<r.length;e++)n=r[e],s=n._getVersion,s=s(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,s]:t.mutableSourceEagerHydrationData.push(n,s);return new Rd(t)};hn.render=function(e,t,n){if(!Ad(t))throw Error(te(200));return Od(null,e,t,!1,n)};hn.unmountComponentAtNode=function(e){if(!Ad(e))throw Error(te(40));return e._reactRootContainer?(Si(function(){Od(null,null,e,!1,function(){e._reactRootContainer=null,e[zr]=null})}),!0):!1};hn.unstable_batchedUpdates=yg;hn.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ad(n))throw Error(te(200));if(e==null||e._reactInternals===void 0)throw Error(te(38));return Od(e,t,n,!1,r)};hn.version="18.3.1-next-f1338f8080-20240426";function hk(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hk)}catch(e){console.error(e)}}hk(),h1.exports=hn;var mn=h1.exports;const pk=t1(mn);var mk,Jv=mn;mk=Jv.createRoot,Jv.hydrateRoot;const aM=1,lM=1e6;let Wf=0;function cM(){return Wf=(Wf+1)%Number.MAX_SAFE_INTEGER,Wf.toString()}const Kf=new Map,ex=e=>{if(Kf.has(e))return;const t=setTimeout(()=>{Kf.delete(e),Ka({type:"REMOVE_TOAST",toastId:e})},lM);Kf.set(e,t)},uM=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,aM)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(n=>n.id===t.toast.id?{...n,...t.toast}:n)};case"DISMISS_TOAST":{const{toastId:n}=t;return n?ex(n):e.toasts.forEach(r=>{ex(r.id)}),{...e,toasts:e.toasts.map(r=>r.id===n||n===void 0?{...r,open:!1}:r)}}case"REMOVE_TOAST":return t.toastId===void 0?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(n=>n.id!==t.toastId)}}},eu=[];let tu={toasts:[]};function Ka(e){tu=uM(tu,e),eu.forEach(t=>{t(tu)})}function ie({...e}){const t=cM(),n=s=>Ka({type:"UPDATE_TOAST",toast:{...s,id:t}}),r=()=>Ka({type:"DISMISS_TOAST",toastId:t});return Ka({type:"ADD_TOAST",toast:{...e,id:t,open:!0,onOpenChange:s=>{s||r()}}}),{id:t,dismiss:r,update:n}}function dM(){const[e,t]=d.useState(tu);return d.useEffect(()=>(eu.push(t),()=>{const n=eu.indexOf(t);n>-1&&eu.splice(n,1)}),[e]),{...e,toast:ie,dismiss:n=>Ka({type:"DISMISS_TOAST",toastId:n})}}function ge(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function tx(e,t){if(typeof e=="function")return e(t);e!=null&&(e.current=t)}function gk(...e){return t=>{let n=!1;const r=e.map(s=>{const i=tx(s,t);return!n&&typeof i=="function"&&(n=!0),i});if(n)return()=>{for(let s=0;s<r.length;s++){const i=r[s];typeof i=="function"?i():tx(e[s],null)}}}}function Ve(...e){return d.useCallback(gk(...e),e)}function fM(e,t){const n=d.createContext(t),r=i=>{const{children:a,...l}=i,c=d.useMemo(()=>l,Object.values(l));return o.jsx(n.Provider,{value:c,children:a})};r.displayName=e+"Provider";function s(i){const a=d.useContext(n);if(a)return a;if(t!==void 0)return t;throw new Error(`\`${i}\` must be used within \`${e}\``)}return[r,s]}function Sr(e,t=[]){let n=[];function r(i,a){const l=d.createContext(a),c=n.length;n=[...n,a];const u=h=>{var b;const{scope:p,children:m,...g}=h,v=((b=p==null?void 0:p[e])==null?void 0:b[c])||l,y=d.useMemo(()=>g,Object.values(g));return o.jsx(v.Provider,{value:y,children:m})};u.displayName=i+"Provider";function f(h,p){var v;const m=((v=p==null?void 0:p[e])==null?void 0:v[c])||l,g=d.useContext(m);if(g)return g;if(a!==void 0)return a;throw new Error(`\`${h}\` must be used within \`${i}\``)}return[u,f]}const s=()=>{const i=n.map(a=>d.createContext(a));return function(l){const c=(l==null?void 0:l[e])||i;return d.useMemo(()=>({[`__scope${e}`]:{...l,[e]:c}}),[l,c])}};return s.scopeName=e,[r,hM(s,...t)]}function hM(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const r=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(i){const a=r.reduce((l,{useScope:c,scopeName:u})=>{const h=c(i)[`__scope${u}`];return{...l,...h}},{});return d.useMemo(()=>({[`__scope${t.scopeName}`]:a}),[a])}};return n.scopeName=t.scopeName,n}function Fo(e){const t=mM(e),n=d.forwardRef((r,s)=>{const{children:i,...a}=r,l=d.Children.toArray(i),c=l.find(vM);if(c){const u=c.props.children,f=l.map(h=>h===c?d.Children.count(u)>1?d.Children.only(null):d.isValidElement(u)?u.props.children:null:h);return o.jsx(t,{...a,ref:s,children:d.isValidElement(u)?d.cloneElement(u,void 0,f):null})}return o.jsx(t,{...a,ref:s,children:i})});return n.displayName=`${e}.Slot`,n}var pM=Fo("Slot");function mM(e){const t=d.forwardRef((n,r)=>{const{children:s,...i}=n;if(d.isValidElement(s)){const a=yM(s),l=xM(i,s.props);return s.type!==d.Fragment&&(l.ref=r?gk(r,a):a),d.cloneElement(s,l)}return d.Children.count(s)>1?d.Children.only(null):null});return t.displayName=`${e}.SlotClone`,t}var vk=Symbol("radix.slottable");function gM(e){const t=({children:n})=>o.jsx(o.Fragment,{children:n});return t.displayName=`${e}.Slottable`,t.__radixId=vk,t}function vM(e){return d.isValidElement(e)&&typeof e.type=="function"&&"__radixId"in e.type&&e.type.__radixId===vk}function xM(e,t){const n={...t};for(const r in t){const s=e[r],i=t[r];/^on[A-Z]/.test(r)?s&&i?n[r]=(...l)=>{const c=i(...l);return s(...l),c}:s&&(n[r]=s):r==="style"?n[r]={...s,...i}:r==="className"&&(n[r]=[s,i].filter(Boolean).join(" "))}return{...e,...n}}function yM(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}function Ng(e){const t=e+"CollectionProvider",[n,r]=Sr(t),[s,i]=n(t,{collectionRef:{current:null},itemMap:new Map}),a=v=>{const{scope:y,children:b}=v,x=re.useRef(null),w=re.useRef(new Map).current;return o.jsx(s,{scope:y,itemMap:w,collectionRef:x,children:b})};a.displayName=t;const l=e+"CollectionSlot",c=Fo(l),u=re.forwardRef((v,y)=>{const{scope:b,children:x}=v,w=i(l,b),S=Ve(y,w.collectionRef);return o.jsx(c,{ref:S,children:x})});u.displayName=l;const f=e+"CollectionItemSlot",h="data-radix-collection-item",p=Fo(f),m=re.forwardRef((v,y)=>{const{scope:b,children:x,...w}=v,S=re.useRef(null),k=Ve(y,S),j=i(f,b);return re.useEffect(()=>(j.itemMap.set(S,{ref:S,...w}),()=>void j.itemMap.delete(S))),o.jsx(p,{[h]:"",ref:k,children:x})});m.displayName=f;function g(v){const y=i(e+"CollectionConsumer",v);return re.useCallback(()=>{const x=y.collectionRef.current;if(!x)return[];const w=Array.from(x.querySelectorAll(`[${h}]`));return Array.from(y.itemMap.values()).sort((j,C)=>w.indexOf(j.ref.current)-w.indexOf(C.ref.current))},[y.collectionRef,y.itemMap])}return[{Provider:a,Slot:u,ItemSlot:m},g,r]}var bM=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],we=bM.reduce((e,t)=>{const n=Fo(`Primitive.${t}`),r=d.forwardRef((s,i)=>{const{asChild:a,...l}=s,c=a?n:t;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),o.jsx(c,{...l,ref:i})});return r.displayName=`Primitive.${t}`,{...e,[t]:r}},{});function xk(e,t){e&&mn.flushSync(()=>e.dispatchEvent(t))}function Ln(e){const t=d.useRef(e);return d.useEffect(()=>{t.current=e}),d.useMemo(()=>(...n)=>{var r;return(r=t.current)==null?void 0:r.call(t,...n)},[])}function wM(e,t=globalThis==null?void 0:globalThis.document){const n=Ln(e);d.useEffect(()=>{const r=s=>{s.key==="Escape"&&n(s)};return t.addEventListener("keydown",r,{capture:!0}),()=>t.removeEventListener("keydown",r,{capture:!0})},[n,t])}var SM="DismissableLayer",Pp="dismissableLayer.update",kM="dismissableLayer.pointerDownOutside",CM="dismissableLayer.focusOutside",nx,yk=d.createContext({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),Fl=d.forwardRef((e,t)=>{const{disableOutsidePointerEvents:n=!1,onEscapeKeyDown:r,onPointerDownOutside:s,onFocusOutside:i,onInteractOutside:a,onDismiss:l,...c}=e,u=d.useContext(yk),[f,h]=d.useState(null),p=(f==null?void 0:f.ownerDocument)??(globalThis==null?void 0:globalThis.document),[,m]=d.useState({}),g=Ve(t,C=>h(C)),v=Array.from(u.layers),[y]=[...u.layersWithOutsidePointerEventsDisabled].slice(-1),b=v.indexOf(y),x=f?v.indexOf(f):-1,w=u.layersWithOutsidePointerEventsDisabled.size>0,S=x>=b,k=EM(C=>{const E=C.target,N=[...u.branches].some(L=>L.contains(E));!S||N||(s==null||s(C),a==null||a(C),C.defaultPrevented||l==null||l())},p),j=NM(C=>{const E=C.target;[...u.branches].some(L=>L.contains(E))||(i==null||i(C),a==null||a(C),C.defaultPrevented||l==null||l())},p);return wM(C=>{x===u.layers.size-1&&(r==null||r(C),!C.defaultPrevented&&l&&(C.preventDefault(),l()))},p),d.useEffect(()=>{if(f)return n&&(u.layersWithOutsidePointerEventsDisabled.size===0&&(nx=p.body.style.pointerEvents,p.body.style.pointerEvents="none"),u.layersWithOutsidePointerEventsDisabled.add(f)),u.layers.add(f),rx(),()=>{n&&u.layersWithOutsidePointerEventsDisabled.size===1&&(p.body.style.pointerEvents=nx)}},[f,p,n,u]),d.useEffect(()=>()=>{f&&(u.layers.delete(f),u.layersWithOutsidePointerEventsDisabled.delete(f),rx())},[f,u]),d.useEffect(()=>{const C=()=>m({});return document.addEventListener(Pp,C),()=>document.removeEventListener(Pp,C)},[]),o.jsx(we.div,{...c,ref:g,style:{pointerEvents:w?S?"auto":"none":void 0,...e.style},onFocusCapture:ge(e.onFocusCapture,j.onFocusCapture),onBlurCapture:ge(e.onBlurCapture,j.onBlurCapture),onPointerDownCapture:ge(e.onPointerDownCapture,k.onPointerDownCapture)})});Fl.displayName=SM;var jM="DismissableLayerBranch",bk=d.forwardRef((e,t)=>{const n=d.useContext(yk),r=d.useRef(null),s=Ve(t,r);return d.useEffect(()=>{const i=r.current;if(i)return n.branches.add(i),()=>{n.branches.delete(i)}},[n.branches]),o.jsx(we.div,{...e,ref:s})});bk.displayName=jM;function EM(e,t=globalThis==null?void 0:globalThis.document){const n=Ln(e),r=d.useRef(!1),s=d.useRef(()=>{});return d.useEffect(()=>{const i=l=>{if(l.target&&!r.current){let c=function(){wk(kM,n,u,{discrete:!0})};const u={originalEvent:l};l.pointerType==="touch"?(t.removeEventListener("click",s.current),s.current=c,t.addEventListener("click",s.current,{once:!0})):c()}else t.removeEventListener("click",s.current);r.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",i)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",i),t.removeEventListener("click",s.current)}},[t,n]),{onPointerDownCapture:()=>r.current=!0}}function NM(e,t=globalThis==null?void 0:globalThis.document){const n=Ln(e),r=d.useRef(!1);return d.useEffect(()=>{const s=i=>{i.target&&!r.current&&wk(CM,n,{originalEvent:i},{discrete:!1})};return t.addEventListener("focusin",s),()=>t.removeEventListener("focusin",s)},[t,n]),{onFocusCapture:()=>r.current=!0,onBlurCapture:()=>r.current=!1}}function rx(){const e=new CustomEvent(Pp);document.dispatchEvent(e)}function wk(e,t,n,{discrete:r}){const s=n.originalEvent.target,i=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?xk(s,i):s.dispatchEvent(i)}var LM=Fl,PM=bk,Et=globalThis!=null&&globalThis.document?d.useLayoutEffect:()=>{},TM="Portal",Id=d.forwardRef((e,t)=>{var l;const{container:n,...r}=e,[s,i]=d.useState(!1);Et(()=>i(!0),[]);const a=n||s&&((l=globalThis==null?void 0:globalThis.document)==null?void 0:l.body);return a?pk.createPortal(o.jsx(we.div,{...r,ref:t}),a):null});Id.displayName=TM;function MM(e,t){return d.useReducer((n,r)=>t[n][r]??n,e)}var Oi=e=>{const{present:t,children:n}=e,r=RM(t),s=typeof n=="function"?n({present:r.isPresent}):d.Children.only(n),i=Ve(r.ref,AM(s));return typeof n=="function"||r.isPresent?d.cloneElement(s,{ref:i}):null};Oi.displayName="Presence";function RM(e){const[t,n]=d.useState(),r=d.useRef(null),s=d.useRef(e),i=d.useRef("none"),a=e?"mounted":"unmounted",[l,c]=MM(a,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return d.useEffect(()=>{const u=kc(r.current);i.current=l==="mounted"?u:"none"},[l]),Et(()=>{const u=r.current,f=s.current;if(f!==e){const p=i.current,m=kc(u);e?c("MOUNT"):m==="none"||(u==null?void 0:u.display)==="none"?c("UNMOUNT"):c(f&&p!==m?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,c]),Et(()=>{if(t){let u;const f=t.ownerDocument.defaultView??window,h=m=>{const v=kc(r.current).includes(m.animationName);if(m.target===t&&v&&(c("ANIMATION_END"),!s.current)){const y=t.style.animationFillMode;t.style.animationFillMode="forwards",u=f.setTimeout(()=>{t.style.animationFillMode==="forwards"&&(t.style.animationFillMode=y)})}},p=m=>{m.target===t&&(i.current=kc(r.current))};return t.addEventListener("animationstart",p),t.addEventListener("animationcancel",h),t.addEventListener("animationend",h),()=>{f.clearTimeout(u),t.removeEventListener("animationstart",p),t.removeEventListener("animationcancel",h),t.removeEventListener("animationend",h)}}else c("ANIMATION_END")},[t,c]),{isPresent:["mounted","unmountSuspended"].includes(l),ref:d.useCallback(u=>{r.current=u?getComputedStyle(u):null,n(u)},[])}}function kc(e){return(e==null?void 0:e.animationName)||"none"}function AM(e){var r,s;let t=(r=Object.getOwnPropertyDescriptor(e.props,"ref"))==null?void 0:r.get,n=t&&"isReactWarning"in t&&t.isReactWarning;return n?e.ref:(t=(s=Object.getOwnPropertyDescriptor(e,"ref"))==null?void 0:s.get,n=t&&"isReactWarning"in t&&t.isReactWarning,n?e.props.ref:e.props.ref||e.ref)}var OM=Dm[" useInsertionEffect ".trim().toString()]||Et;function ki({prop:e,defaultProp:t,onChange:n=()=>{},caller:r}){const[s,i,a]=IM({defaultProp:t,onChange:n}),l=e!==void 0,c=l?e:s;{const f=d.useRef(e!==void 0);d.useEffect(()=>{const h=f.current;h!==l&&console.warn(`${r} is changing from ${h?"controlled":"uncontrolled"} to ${l?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),f.current=l},[l,r])}const u=d.useCallback(f=>{var h;if(l){const p=DM(f)?f(e):f;p!==e&&((h=a.current)==null||h.call(a,p))}else i(f)},[l,e,i,a]);return[c,u]}function IM({defaultProp:e,onChange:t}){const[n,r]=d.useState(e),s=d.useRef(n),i=d.useRef(t);return OM(()=>{i.current=t},[t]),d.useEffect(()=>{var a;s.current!==n&&((a=i.current)==null||a.call(i,n),s.current=n)},[n,s]),[n,r,i]}function DM(e){return typeof e=="function"}var Sk=Object.freeze({position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal"}),_M="VisuallyHidden",Dd=d.forwardRef((e,t)=>o.jsx(we.span,{...e,ref:t,style:{...Sk,...e.style}}));Dd.displayName=_M;var FM=Dd,Lg="ToastProvider",[Pg,zM,BM]=Ng("Toast"),[kk,MU]=Sr("Toast",[BM]),[VM,_d]=kk(Lg),Ck=e=>{const{__scopeToast:t,label:n="Notification",duration:r=5e3,swipeDirection:s="right",swipeThreshold:i=50,children:a}=e,[l,c]=d.useState(null),[u,f]=d.useState(0),h=d.useRef(!1),p=d.useRef(!1);return n.trim()||console.error(`Invalid prop \`label\` supplied to \`${Lg}\`. Expected non-empty \`string\`.`),o.jsx(Pg.Provider,{scope:t,children:o.jsx(VM,{scope:t,label:n,duration:r,swipeDirection:s,swipeThreshold:i,toastCount:u,viewport:l,onViewportChange:c,onToastAdd:d.useCallback(()=>f(m=>m+1),[]),onToastRemove:d.useCallback(()=>f(m=>m-1),[]),isFocusedToastEscapeKeyDownRef:h,isClosePausedRef:p,children:a})})};Ck.displayName=Lg;var jk="ToastViewport",$M=["F8"],Tp="toast.viewportPause",Mp="toast.viewportResume",Ek=d.forwardRef((e,t)=>{const{__scopeToast:n,hotkey:r=$M,label:s="Notifications ({hotkey})",...i}=e,a=_d(jk,n),l=zM(n),c=d.useRef(null),u=d.useRef(null),f=d.useRef(null),h=d.useRef(null),p=Ve(t,h,a.onViewportChange),m=r.join("+").replace(/Key/g,"").replace(/Digit/g,""),g=a.toastCount>0;d.useEffect(()=>{const y=b=>{var w;r.length!==0&&r.every(S=>b[S]||b.code===S)&&((w=h.current)==null||w.focus())};return document.addEventListener("keydown",y),()=>document.removeEventListener("keydown",y)},[r]),d.useEffect(()=>{const y=c.current,b=h.current;if(g&&y&&b){const x=()=>{if(!a.isClosePausedRef.current){const j=new CustomEvent(Tp);b.dispatchEvent(j),a.isClosePausedRef.current=!0}},w=()=>{if(a.isClosePausedRef.current){const j=new CustomEvent(Mp);b.dispatchEvent(j),a.isClosePausedRef.current=!1}},S=j=>{!y.contains(j.relatedTarget)&&w()},k=()=>{y.contains(document.activeElement)||w()};return y.addEventListener("focusin",x),y.addEventListener("focusout",S),y.addEventListener("pointermove",x),y.addEventListener("pointerleave",k),window.addEventListener("blur",x),window.addEventListener("focus",w),()=>{y.removeEventListener("focusin",x),y.removeEventListener("focusout",S),y.removeEventListener("pointermove",x),y.removeEventListener("pointerleave",k),window.removeEventListener("blur",x),window.removeEventListener("focus",w)}}},[g,a.isClosePausedRef]);const v=d.useCallback(({tabbingDirection:y})=>{const x=l().map(w=>{const S=w.ref.current,k=[S,...tR(S)];return y==="forwards"?k:k.reverse()});return(y==="forwards"?x.reverse():x).flat()},[l]);return d.useEffect(()=>{const y=h.current;if(y){const b=x=>{var k,j,C;const w=x.altKey||x.ctrlKey||x.metaKey;if(x.key==="Tab"&&!w){const E=document.activeElement,N=x.shiftKey;if(x.target===y&&N){(k=u.current)==null||k.focus();return}const R=v({tabbingDirection:N?"backwards":"forwards"}),z=R.findIndex(I=>I===E);Gf(R.slice(z+1))?x.preventDefault():N?(j=u.current)==null||j.focus():(C=f.current)==null||C.focus()}};return y.addEventListener("keydown",b),()=>y.removeEventListener("keydown",b)}},[l,v]),o.jsxs(PM,{ref:c,role:"region","aria-label":s.replace("{hotkey}",m),tabIndex:-1,style:{pointerEvents:g?void 0:"none"},children:[g&&o.jsx(Rp,{ref:u,onFocusFromOutsideViewport:()=>{const y=v({tabbingDirection:"forwards"});Gf(y)}}),o.jsx(Pg.Slot,{scope:n,children:o.jsx(we.ol,{tabIndex:-1,...i,ref:p})}),g&&o.jsx(Rp,{ref:f,onFocusFromOutsideViewport:()=>{const y=v({tabbingDirection:"backwards"});Gf(y)}})]})});Ek.displayName=jk;var Nk="ToastFocusProxy",Rp=d.forwardRef((e,t)=>{const{__scopeToast:n,onFocusFromOutsideViewport:r,...s}=e,i=_d(Nk,n);return o.jsx(Dd,{"aria-hidden":!0,tabIndex:0,...s,ref:t,style:{position:"fixed"},onFocus:a=>{var u;const l=a.relatedTarget;!((u=i.viewport)!=null&&u.contains(l))&&r()}})});Rp.displayName=Nk;var zl="Toast",UM="toast.swipeStart",HM="toast.swipeMove",WM="toast.swipeCancel",KM="toast.swipeEnd",Lk=d.forwardRef((e,t)=>{const{forceMount:n,open:r,defaultOpen:s,onOpenChange:i,...a}=e,[l,c]=ki({prop:r,defaultProp:s??!0,onChange:i,caller:zl});return o.jsx(Oi,{present:n||l,children:o.jsx(ZM,{open:l,...a,ref:t,onClose:()=>c(!1),onPause:Ln(e.onPause),onResume:Ln(e.onResume),onSwipeStart:ge(e.onSwipeStart,u=>{u.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:ge(e.onSwipeMove,u=>{const{x:f,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","move"),u.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${h}px`)}),onSwipeCancel:ge(e.onSwipeCancel,u=>{u.currentTarget.setAttribute("data-swipe","cancel"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:ge(e.onSwipeEnd,u=>{const{x:f,y:h}=u.detail.delta;u.currentTarget.setAttribute("data-swipe","end"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),u.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${f}px`),u.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${h}px`),c(!1)})})})});Lk.displayName=zl;var[GM,qM]=kk(zl,{onClose(){}}),ZM=d.forwardRef((e,t)=>{const{__scopeToast:n,type:r="foreground",duration:s,open:i,onClose:a,onEscapeKeyDown:l,onPause:c,onResume:u,onSwipeStart:f,onSwipeMove:h,onSwipeCancel:p,onSwipeEnd:m,...g}=e,v=_d(zl,n),[y,b]=d.useState(null),x=Ve(t,I=>b(I)),w=d.useRef(null),S=d.useRef(null),k=s||v.duration,j=d.useRef(0),C=d.useRef(k),E=d.useRef(0),{onToastAdd:N,onToastRemove:L}=v,T=Ln(()=>{var F;(y==null?void 0:y.contains(document.activeElement))&&((F=v.viewport)==null||F.focus()),a()}),R=d.useCallback(I=>{!I||I===1/0||(window.clearTimeout(E.current),j.current=new Date().getTime(),E.current=window.setTimeout(T,I))},[T]);d.useEffect(()=>{const I=v.viewport;if(I){const F=()=>{R(C.current),u==null||u()},A=()=>{const W=new Date().getTime()-j.current;C.current=C.current-W,window.clearTimeout(E.current),c==null||c()};return I.addEventListener(Tp,A),I.addEventListener(Mp,F),()=>{I.removeEventListener(Tp,A),I.removeEventListener(Mp,F)}}},[v.viewport,k,c,u,R]),d.useEffect(()=>{i&&!v.isClosePausedRef.current&&R(k)},[i,k,v.isClosePausedRef,R]),d.useEffect(()=>(N(),()=>L()),[N,L]);const z=d.useMemo(()=>y?Ik(y):null,[y]);return v.viewport?o.jsxs(o.Fragment,{children:[z&&o.jsx(YM,{__scopeToast:n,role:"status","aria-live":r==="foreground"?"assertive":"polite","aria-atomic":!0,children:z}),o.jsx(GM,{scope:n,onClose:T,children:mn.createPortal(o.jsx(Pg.ItemSlot,{scope:n,children:o.jsx(LM,{asChild:!0,onEscapeKeyDown:ge(l,()=>{v.isFocusedToastEscapeKeyDownRef.current||T(),v.isFocusedToastEscapeKeyDownRef.current=!1}),children:o.jsx(we.li,{role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":i?"open":"closed","data-swipe-direction":v.swipeDirection,...g,ref:x,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:ge(e.onKeyDown,I=>{I.key==="Escape"&&(l==null||l(I.nativeEvent),I.nativeEvent.defaultPrevented||(v.isFocusedToastEscapeKeyDownRef.current=!0,T()))}),onPointerDown:ge(e.onPointerDown,I=>{I.button===0&&(w.current={x:I.clientX,y:I.clientY})}),onPointerMove:ge(e.onPointerMove,I=>{if(!w.current)return;const F=I.clientX-w.current.x,A=I.clientY-w.current.y,W=!!S.current,M=["left","right"].includes(v.swipeDirection),O=["left","up"].includes(v.swipeDirection)?Math.min:Math.max,_=M?O(0,F):0,U=M?0:O(0,A),q=I.pointerType==="touch"?10:2,G={x:_,y:U},D={originalEvent:I,delta:G};W?(S.current=G,Cc(HM,h,D,{discrete:!1})):sx(G,v.swipeDirection,q)?(S.current=G,Cc(UM,f,D,{discrete:!1}),I.target.setPointerCapture(I.pointerId)):(Math.abs(F)>q||Math.abs(A)>q)&&(w.current=null)}),onPointerUp:ge(e.onPointerUp,I=>{const F=S.current,A=I.target;if(A.hasPointerCapture(I.pointerId)&&A.releasePointerCapture(I.pointerId),S.current=null,w.current=null,F){const W=I.currentTarget,M={originalEvent:I,delta:F};sx(F,v.swipeDirection,v.swipeThreshold)?Cc(KM,m,M,{discrete:!0}):Cc(WM,p,M,{discrete:!0}),W.addEventListener("click",O=>O.preventDefault(),{once:!0})}})})})}),v.viewport)})]}):null}),YM=e=>{const{__scopeToast:t,children:n,...r}=e,s=_d(zl,t),[i,a]=d.useState(!1),[l,c]=d.useState(!1);return JM(()=>a(!0)),d.useEffect(()=>{const u=window.setTimeout(()=>c(!0),1e3);return()=>window.clearTimeout(u)},[]),l?null:o.jsx(Id,{asChild:!0,children:o.jsx(Dd,{...r,children:i&&o.jsxs(o.Fragment,{children:[s.label," ",n]})})})},QM="ToastTitle",Pk=d.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(we.div,{...r,ref:t})});Pk.displayName=QM;var XM="ToastDescription",Tk=d.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e;return o.jsx(we.div,{...r,ref:t})});Tk.displayName=XM;var Mk="ToastAction",Rk=d.forwardRef((e,t)=>{const{altText:n,...r}=e;return n.trim()?o.jsx(Ok,{altText:n,asChild:!0,children:o.jsx(Tg,{...r,ref:t})}):(console.error(`Invalid prop \`altText\` supplied to \`${Mk}\`. Expected non-empty \`string\`.`),null)});Rk.displayName=Mk;var Ak="ToastClose",Tg=d.forwardRef((e,t)=>{const{__scopeToast:n,...r}=e,s=qM(Ak,n);return o.jsx(Ok,{asChild:!0,children:o.jsx(we.button,{type:"button",...r,ref:t,onClick:ge(e.onClick,s.onClose)})})});Tg.displayName=Ak;var Ok=d.forwardRef((e,t)=>{const{__scopeToast:n,altText:r,...s}=e;return o.jsx(we.div,{"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":r||void 0,...s,ref:t})});function Ik(e){const t=[];return Array.from(e.childNodes).forEach(r=>{if(r.nodeType===r.TEXT_NODE&&r.textContent&&t.push(r.textContent),eR(r)){const s=r.ariaHidden||r.hidden||r.style.display==="none",i=r.dataset.radixToastAnnounceExclude==="";if(!s)if(i){const a=r.dataset.radixToastAnnounceAlt;a&&t.push(a)}else t.push(...Ik(r))}}),t}function Cc(e,t,n,{discrete:r}){const s=n.originalEvent.currentTarget,i=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:n});t&&s.addEventListener(e,t,{once:!0}),r?xk(s,i):s.dispatchEvent(i)}var sx=(e,t,n=0)=>{const r=Math.abs(e.x),s=Math.abs(e.y),i=r>s;return t==="left"||t==="right"?i&&r>n:!i&&s>n};function JM(e=()=>{}){const t=Ln(e);Et(()=>{let n=0,r=0;return n=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(n),window.cancelAnimationFrame(r)}},[t])}function eR(e){return e.nodeType===e.ELEMENT_NODE}function tR(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function Gf(e){const t=document.activeElement;return e.some(n=>n===t?!0:(n.focus(),document.activeElement!==t))}var nR=Ck,Dk=Ek,_k=Lk,Fk=Pk,zk=Tk,Bk=Rk,Vk=Tg;function $k(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=$k(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Uk(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=$k(e))&&(r&&(r+=" "),r+=t);return r}const ix=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,ox=Uk,Mg=(e,t)=>n=>{var r;if((t==null?void 0:t.variants)==null)return ox(e,n==null?void 0:n.class,n==null?void 0:n.className);const{variants:s,defaultVariants:i}=t,a=Object.keys(s).map(u=>{const f=n==null?void 0:n[u],h=i==null?void 0:i[u];if(f===null)return null;const p=ix(f)||ix(h);return s[u][p]}),l=n&&Object.entries(n).reduce((u,f)=>{let[h,p]=f;return p===void 0||(u[h]=p),u},{}),c=t==null||(r=t.compoundVariants)===null||r===void 0?void 0:r.reduce((u,f)=>{let{class:h,className:p,...m}=f;return Object.entries(m).every(g=>{let[v,y]=g;return Array.isArray(y)?y.includes({...i,...l}[v]):{...i,...l}[v]===y})?[...u,h,p]:u},[]);return ox(e,a,c,n==null?void 0:n.class,n==null?void 0:n.className)};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rR=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hk=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var sR={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iR=d.forwardRef(({color:e="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:s="",children:i,iconNode:a,...l},c)=>d.createElement("svg",{ref:c,...sR,width:t,height:t,stroke:e,strokeWidth:r?Number(n)*24/Number(t):n,className:Hk("lucide",s),...l},[...a.map(([u,f])=>d.createElement(u,f)),...Array.isArray(i)?i:[i]]));/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=(e,t)=>{const n=d.forwardRef(({className:r,...s},i)=>d.createElement(iR,{ref:i,iconNode:t,className:Hk(`lucide-${rR(e)}`,r),...s}));return n.displayName=`${e}`,n};/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=ue("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=ue("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=ue("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oR=ue("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=ue("Bike",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=ue("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=ue("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aR=ue("ChartPie",[["path",{d:"M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z",key:"pzmjnu"}],["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lR=ue("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=ue("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=ue("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=ue("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cR=ue("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=ue("CircleArrowDown",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=ue("CircleArrowUp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uR=ue("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dR=ue("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fR=ue("Earth",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17",key:"1tzkfa"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"14pb5j"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hR=ue("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=ue("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pR=ue("FileKey",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mR=ue("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gR=ue("FileX",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ue("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=ue("Hash",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=ue("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vR=ue("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xR=ue("Layers3",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yR=ue("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=ue("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=ue("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bR=ue("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=ue("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=ue("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wR=ue("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SR=ue("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=ue("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=ue("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=ue("Radar",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kR=ue("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CR=ue("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=ue("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jR=ue("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=ue("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rg=ue("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=ue("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ag=ue("SquarePen",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",key:"ohrbg2"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=ue("Store",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7",key:"6c3vgh"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ER=ue("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NR=ue("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=ue("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LR=ue("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PR=ue("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TR=ue("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=ue("UserCog",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=ue("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MR=ue("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=ue("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=ue("Wallet",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ue("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=ue("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Og="-",RR=e=>{const t=OR(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:a=>{const l=a.split(Og);return l[0]===""&&l.length!==1&&l.shift(),Jk(l,t)||AR(a)},getConflictingClassGroupIds:(a,l)=>{const c=n[a]||[];return l&&r[a]?[...c,...r[a]]:c}}},Jk=(e,t)=>{var a;if(e.length===0)return t.classGroupId;const n=e[0],r=t.nextPart.get(n),s=r?Jk(e.slice(1),r):void 0;if(s)return s;if(t.validators.length===0)return;const i=e.join(Og);return(a=t.validators.find(({validator:l})=>l(i)))==null?void 0:a.classGroupId},lx=/^\[(.+)\]$/,AR=e=>{if(lx.test(e)){const t=lx.exec(e)[1],n=t==null?void 0:t.substring(0,t.indexOf(":"));if(n)return"arbitrary.."+n}},OR=e=>{const{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return DR(Object.entries(e.classGroups),n).forEach(([i,a])=>{Op(a,r,i,t)}),r},Op=(e,t,n,r)=>{e.forEach(s=>{if(typeof s=="string"){const i=s===""?t:cx(t,s);i.classGroupId=n;return}if(typeof s=="function"){if(IR(s)){Op(s(r),t,n,r);return}t.validators.push({validator:s,classGroupId:n});return}Object.entries(s).forEach(([i,a])=>{Op(a,cx(t,i),n,r)})})},cx=(e,t)=>{let n=e;return t.split(Og).forEach(r=>{n.nextPart.has(r)||n.nextPart.set(r,{nextPart:new Map,validators:[]}),n=n.nextPart.get(r)}),n},IR=e=>e.isThemeGetter,DR=(e,t)=>t?e.map(([n,r])=>{const s=r.map(i=>typeof i=="string"?t+i:typeof i=="object"?Object.fromEntries(Object.entries(i).map(([a,l])=>[t+a,l])):i);return[n,s]}):e,_R=e=>{if(e<1)return{get:()=>{},set:()=>{}};let t=0,n=new Map,r=new Map;const s=(i,a)=>{n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(i){let a=n.get(i);if(a!==void 0)return a;if((a=r.get(i))!==void 0)return s(i,a),a},set(i,a){n.has(i)?n.set(i,a):s(i,a)}}},eC="!",FR=e=>{const{separator:t,experimentalParseClassName:n}=e,r=t.length===1,s=t[0],i=t.length,a=l=>{const c=[];let u=0,f=0,h;for(let y=0;y<l.length;y++){let b=l[y];if(u===0){if(b===s&&(r||l.slice(y,y+i)===t)){c.push(l.slice(f,y)),f=y+i;continue}if(b==="/"){h=y;continue}}b==="["?u++:b==="]"&&u--}const p=c.length===0?l:l.substring(f),m=p.startsWith(eC),g=m?p.substring(1):p,v=h&&h>f?h-f:void 0;return{modifiers:c,hasImportantModifier:m,baseClassName:g,maybePostfixModifierPosition:v}};return n?l=>n({className:l,parseClassName:a}):a},zR=e=>{if(e.length<=1)return e;const t=[];let n=[];return e.forEach(r=>{r[0]==="["?(t.push(...n.sort(),r),n=[]):n.push(r)}),t.push(...n.sort()),t},BR=e=>({cache:_R(e.cacheSize),parseClassName:FR(e),...RR(e)}),VR=/\s+/,$R=(e,t)=>{const{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:s}=t,i=[],a=e.trim().split(VR);let l="";for(let c=a.length-1;c>=0;c-=1){const u=a[c],{modifiers:f,hasImportantModifier:h,baseClassName:p,maybePostfixModifierPosition:m}=n(u);let g=!!m,v=r(g?p.substring(0,m):p);if(!v){if(!g){l=u+(l.length>0?" "+l:l);continue}if(v=r(p),!v){l=u+(l.length>0?" "+l:l);continue}g=!1}const y=zR(f).join(":"),b=h?y+eC:y,x=b+v;if(i.includes(x))continue;i.push(x);const w=s(v,g);for(let S=0;S<w.length;++S){const k=w[S];i.push(b+k)}l=u+(l.length>0?" "+l:l)}return l};function UR(){let e=0,t,n,r="";for(;e<arguments.length;)(t=arguments[e++])&&(n=tC(t))&&(r&&(r+=" "),r+=n);return r}const tC=e=>{if(typeof e=="string")return e;let t,n="";for(let r=0;r<e.length;r++)e[r]&&(t=tC(e[r]))&&(n&&(n+=" "),n+=t);return n};function HR(e,...t){let n,r,s,i=a;function a(c){const u=t.reduce((f,h)=>h(f),e());return n=BR(u),r=n.cache.get,s=n.cache.set,i=l,l(c)}function l(c){const u=r(c);if(u)return u;const f=$R(c,n);return s(c,f),f}return function(){return i(UR.apply(null,arguments))}}const qe=e=>{const t=n=>n[e]||[];return t.isThemeGetter=!0,t},nC=/^\[(?:([a-z-]+):)?(.+)\]$/i,WR=/^\d+\/\d+$/,KR=new Set(["px","full","screen"]),GR=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,qR=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ZR=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,YR=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,QR=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Pr=e=>yo(e)||KR.has(e)||WR.test(e),Xr=e=>Qo(e,"length",i5),yo=e=>!!e&&!Number.isNaN(Number(e)),qf=e=>Qo(e,"number",yo),xa=e=>!!e&&Number.isInteger(Number(e)),XR=e=>e.endsWith("%")&&yo(e.slice(0,-1)),Ce=e=>nC.test(e),Jr=e=>GR.test(e),JR=new Set(["length","size","percentage"]),e5=e=>Qo(e,JR,rC),t5=e=>Qo(e,"position",rC),n5=new Set(["image","url"]),r5=e=>Qo(e,n5,a5),s5=e=>Qo(e,"",o5),ya=()=>!0,Qo=(e,t,n)=>{const r=nC.exec(e);return r?r[1]?typeof t=="string"?r[1]===t:t.has(r[1]):n(r[2]):!1},i5=e=>qR.test(e)&&!ZR.test(e),rC=()=>!1,o5=e=>YR.test(e),a5=e=>QR.test(e),l5=()=>{const e=qe("colors"),t=qe("spacing"),n=qe("blur"),r=qe("brightness"),s=qe("borderColor"),i=qe("borderRadius"),a=qe("borderSpacing"),l=qe("borderWidth"),c=qe("contrast"),u=qe("grayscale"),f=qe("hueRotate"),h=qe("invert"),p=qe("gap"),m=qe("gradientColorStops"),g=qe("gradientColorStopPositions"),v=qe("inset"),y=qe("margin"),b=qe("opacity"),x=qe("padding"),w=qe("saturate"),S=qe("scale"),k=qe("sepia"),j=qe("skew"),C=qe("space"),E=qe("translate"),N=()=>["auto","contain","none"],L=()=>["auto","hidden","clip","visible","scroll"],T=()=>["auto",Ce,t],R=()=>[Ce,t],z=()=>["",Pr,Xr],I=()=>["auto",yo,Ce],F=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],A=()=>["solid","dashed","dotted","double","none"],W=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],M=()=>["start","end","center","between","around","evenly","stretch"],O=()=>["","0",Ce],_=()=>["auto","avoid","all","avoid-page","page","left","right","column"],U=()=>[yo,Ce];return{cacheSize:500,separator:":",theme:{colors:[ya],spacing:[Pr,Xr],blur:["none","",Jr,Ce],brightness:U(),borderColor:[e],borderRadius:["none","","full",Jr,Ce],borderSpacing:R(),borderWidth:z(),contrast:U(),grayscale:O(),hueRotate:U(),invert:O(),gap:R(),gradientColorStops:[e],gradientColorStopPositions:[XR,Xr],inset:T(),margin:T(),opacity:U(),padding:R(),saturate:U(),scale:U(),sepia:O(),skew:U(),space:R(),translate:R()},classGroups:{aspect:[{aspect:["auto","square","video",Ce]}],container:["container"],columns:[{columns:[Jr]}],"break-after":[{"break-after":_()}],"break-before":[{"break-before":_()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...F(),Ce]}],overflow:[{overflow:L()}],"overflow-x":[{"overflow-x":L()}],"overflow-y":[{"overflow-y":L()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[v]}],"inset-x":[{"inset-x":[v]}],"inset-y":[{"inset-y":[v]}],start:[{start:[v]}],end:[{end:[v]}],top:[{top:[v]}],right:[{right:[v]}],bottom:[{bottom:[v]}],left:[{left:[v]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",xa,Ce]}],basis:[{basis:T()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",Ce]}],grow:[{grow:O()}],shrink:[{shrink:O()}],order:[{order:["first","last","none",xa,Ce]}],"grid-cols":[{"grid-cols":[ya]}],"col-start-end":[{col:["auto",{span:["full",xa,Ce]},Ce]}],"col-start":[{"col-start":I()}],"col-end":[{"col-end":I()}],"grid-rows":[{"grid-rows":[ya]}],"row-start-end":[{row:["auto",{span:[xa,Ce]},Ce]}],"row-start":[{"row-start":I()}],"row-end":[{"row-end":I()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",Ce]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",Ce]}],gap:[{gap:[p]}],"gap-x":[{"gap-x":[p]}],"gap-y":[{"gap-y":[p]}],"justify-content":[{justify:["normal",...M()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...M(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...M(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[x]}],px:[{px:[x]}],py:[{py:[x]}],ps:[{ps:[x]}],pe:[{pe:[x]}],pt:[{pt:[x]}],pr:[{pr:[x]}],pb:[{pb:[x]}],pl:[{pl:[x]}],m:[{m:[y]}],mx:[{mx:[y]}],my:[{my:[y]}],ms:[{ms:[y]}],me:[{me:[y]}],mt:[{mt:[y]}],mr:[{mr:[y]}],mb:[{mb:[y]}],ml:[{ml:[y]}],"space-x":[{"space-x":[C]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[C]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",Ce,t]}],"min-w":[{"min-w":[Ce,t,"min","max","fit"]}],"max-w":[{"max-w":[Ce,t,"none","full","min","max","fit","prose",{screen:[Jr]},Jr]}],h:[{h:[Ce,t,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[Ce,t,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[Ce,t,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[Ce,t,"auto","min","max","fit"]}],"font-size":[{text:["base",Jr,Xr]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",qf]}],"font-family":[{font:[ya]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",Ce]}],"line-clamp":[{"line-clamp":["none",yo,qf]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",Pr,Ce]}],"list-image":[{"list-image":["none",Ce]}],"list-style-type":[{list:["none","disc","decimal",Ce]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[b]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[b]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...A(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",Pr,Xr]}],"underline-offset":[{"underline-offset":["auto",Pr,Ce]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:R()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",Ce]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",Ce]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[b]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...F(),t5]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",e5]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},r5]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[g]}],"gradient-via-pos":[{via:[g]}],"gradient-to-pos":[{to:[g]}],"gradient-from":[{from:[m]}],"gradient-via":[{via:[m]}],"gradient-to":[{to:[m]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[b]}],"border-style":[{border:[...A(),"hidden"]}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[b]}],"divide-style":[{divide:A()}],"border-color":[{border:[s]}],"border-color-x":[{"border-x":[s]}],"border-color-y":[{"border-y":[s]}],"border-color-s":[{"border-s":[s]}],"border-color-e":[{"border-e":[s]}],"border-color-t":[{"border-t":[s]}],"border-color-r":[{"border-r":[s]}],"border-color-b":[{"border-b":[s]}],"border-color-l":[{"border-l":[s]}],"divide-color":[{divide:[s]}],"outline-style":[{outline:["",...A()]}],"outline-offset":[{"outline-offset":[Pr,Ce]}],"outline-w":[{outline:[Pr,Xr]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:z()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[b]}],"ring-offset-w":[{"ring-offset":[Pr,Xr]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",Jr,s5]}],"shadow-color":[{shadow:[ya]}],opacity:[{opacity:[b]}],"mix-blend":[{"mix-blend":[...W(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":W()}],filter:[{filter:["","none"]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",Jr,Ce]}],grayscale:[{grayscale:[u]}],"hue-rotate":[{"hue-rotate":[f]}],invert:[{invert:[h]}],saturate:[{saturate:[w]}],sepia:[{sepia:[k]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[u]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[f]}],"backdrop-invert":[{"backdrop-invert":[h]}],"backdrop-opacity":[{"backdrop-opacity":[b]}],"backdrop-saturate":[{"backdrop-saturate":[w]}],"backdrop-sepia":[{"backdrop-sepia":[k]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",Ce]}],duration:[{duration:U()}],ease:[{ease:["linear","in","out","in-out",Ce]}],delay:[{delay:U()}],animate:[{animate:["none","spin","ping","pulse","bounce",Ce]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[S]}],"scale-x":[{"scale-x":[S]}],"scale-y":[{"scale-y":[S]}],rotate:[{rotate:[xa,Ce]}],"translate-x":[{"translate-x":[E]}],"translate-y":[{"translate-y":[E]}],"skew-x":[{"skew-x":[j]}],"skew-y":[{"skew-y":[j]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",Ce]}],accent:[{accent:["auto",e]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",Ce]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":R()}],"scroll-mx":[{"scroll-mx":R()}],"scroll-my":[{"scroll-my":R()}],"scroll-ms":[{"scroll-ms":R()}],"scroll-me":[{"scroll-me":R()}],"scroll-mt":[{"scroll-mt":R()}],"scroll-mr":[{"scroll-mr":R()}],"scroll-mb":[{"scroll-mb":R()}],"scroll-ml":[{"scroll-ml":R()}],"scroll-p":[{"scroll-p":R()}],"scroll-px":[{"scroll-px":R()}],"scroll-py":[{"scroll-py":R()}],"scroll-ps":[{"scroll-ps":R()}],"scroll-pe":[{"scroll-pe":R()}],"scroll-pt":[{"scroll-pt":R()}],"scroll-pr":[{"scroll-pr":R()}],"scroll-pb":[{"scroll-pb":R()}],"scroll-pl":[{"scroll-pl":R()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",Ce]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[Pr,Xr,qf]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},c5=HR(l5);function de(...e){return c5(Uk(e))}const u5=nR,sC=d.forwardRef(({className:e,...t},n)=>o.jsx(Dk,{ref:n,className:de("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",e),...t}));sC.displayName=Dk.displayName;const d5=Mg("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",{variants:{variant:{default:"border bg-background text-foreground",destructive:"destructive group border-destructive bg-destructive text-destructive-foreground"}},defaultVariants:{variant:"default"}}),iC=d.forwardRef(({className:e,variant:t,...n},r)=>o.jsx(_k,{ref:r,className:de(d5({variant:t}),e),...n}));iC.displayName=_k.displayName;const f5=d.forwardRef(({className:e,...t},n)=>o.jsx(Bk,{ref:n,className:de("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",e),...t}));f5.displayName=Bk.displayName;const oC=d.forwardRef(({className:e,...t},n)=>o.jsx(Vk,{ref:n,className:de("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",e),"toast-close":"",...t,children:o.jsx(Yo,{className:"h-4 w-4"})}));oC.displayName=Vk.displayName;const aC=d.forwardRef(({className:e,...t},n)=>o.jsx(Fk,{ref:n,className:de("text-sm font-semibold",e),...t}));aC.displayName=Fk.displayName;const lC=d.forwardRef(({className:e,...t},n)=>o.jsx(zk,{ref:n,className:de("text-sm opacity-90",e),...t}));lC.displayName=zk.displayName;function h5(){const{toasts:e}=dM();return o.jsxs(u5,{children:[e.map(function({id:t,title:n,description:r,action:s,...i}){return o.jsxs(iC,{...i,children:[o.jsxs("div",{className:"grid gap-1",children:[n&&o.jsx(aC,{children:n}),r&&o.jsx(lC,{children:r})]}),s,o.jsx(oC,{})]},t)}),o.jsx(sC,{})]})}var ux=["light","dark"],p5="(prefers-color-scheme: dark)",m5=d.createContext(void 0),g5={setTheme:e=>{},themes:[]},v5=()=>{var e;return(e=d.useContext(m5))!=null?e:g5};d.memo(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:s,defaultTheme:i,value:a,attrs:l,nonce:c})=>{let u=i==="system",f=n==="class"?`var d=document.documentElement,c=d.classList;${`c.remove(${l.map(g=>`'${g}'`).join(",")})`};`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=s?ux.includes(i)&&i?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(g,v=!1,y=!0)=>{let b=a?a[g]:g,x=v?g+"|| ''":`'${b}'`,w="";return s&&y&&!v&&ux.includes(g)&&(w+=`d.style.colorScheme = '${g}';`),n==="class"?v||b?w+=`c.add(${x})`:w+="null":b&&(w+=`d[s](n,${x})`),w},m=e?`!function(){${f}${p(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${p5}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}${u?"":"else{"+p(i,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${a?`var x=${JSON.stringify(a)};`:""}${p(a?"x[e]":"e",!0)}}else{${p(i,!1,!1)};}${h}}catch(t){}}();`;return d.createElement("script",{nonce:c,dangerouslySetInnerHTML:{__html:m}})});var x5=e=>{switch(e){case"success":return w5;case"info":return k5;case"warning":return S5;case"error":return C5;default:return null}},y5=Array(12).fill(0),b5=({visible:e,className:t})=>re.createElement("div",{className:["sonner-loading-wrapper",t].filter(Boolean).join(" "),"data-visible":e},re.createElement("div",{className:"sonner-spinner"},y5.map((n,r)=>re.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${r}`})))),w5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),S5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),k5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),C5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},re.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),j5=re.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},re.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),re.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),E5=()=>{let[e,t]=re.useState(document.hidden);return re.useEffect(()=>{let n=()=>{t(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),e},Ip=1,N5=class{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{let t=this.subscribers.indexOf(e);this.subscribers.splice(t,1)}),this.publish=e=>{this.subscribers.forEach(t=>t(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var t;let{message:n,...r}=e,s=typeof(e==null?void 0:e.id)=="number"||((t=e.id)==null?void 0:t.length)>0?e.id:Ip++,i=this.toasts.find(l=>l.id===s),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),i?this.toasts=this.toasts.map(l=>l.id===s?(this.publish({...l,...e,id:s,title:n}),{...l,...e,id:s,dismissible:a,title:n}):l):this.addToast({title:n,...r,dismissible:a,id:s}),s},this.dismiss=e=>(this.dismissedToasts.add(e),e||this.toasts.forEach(t=>{this.subscribers.forEach(n=>n({id:t.id,dismiss:!0}))}),this.subscribers.forEach(t=>t({id:e,dismiss:!0})),e),this.message=(e,t)=>this.create({...t,message:e}),this.error=(e,t)=>this.create({...t,message:e,type:"error"}),this.success=(e,t)=>this.create({...t,type:"success",message:e}),this.info=(e,t)=>this.create({...t,type:"info",message:e}),this.warning=(e,t)=>this.create({...t,type:"warning",message:e}),this.loading=(e,t)=>this.create({...t,type:"loading",message:e}),this.promise=(e,t)=>{if(!t)return;let n;t.loading!==void 0&&(n=this.create({...t,promise:e,type:"loading",message:t.loading,description:typeof t.description!="function"?t.description:void 0}));let r=e instanceof Promise?e:e(),s=n!==void 0,i,a=r.then(async c=>{if(i=["resolve",c],re.isValidElement(c))s=!1,this.create({id:n,type:"default",message:c});else if(P5(c)&&!c.ok){s=!1;let u=typeof t.error=="function"?await t.error(`HTTP error! status: ${c.status}`):t.error,f=typeof t.description=="function"?await t.description(`HTTP error! status: ${c.status}`):t.description;this.create({id:n,type:"error",message:u,description:f})}else if(t.success!==void 0){s=!1;let u=typeof t.success=="function"?await t.success(c):t.success,f=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"success",message:u,description:f})}}).catch(async c=>{if(i=["reject",c],t.error!==void 0){s=!1;let u=typeof t.error=="function"?await t.error(c):t.error,f=typeof t.description=="function"?await t.description(c):t.description;this.create({id:n,type:"error",message:u,description:f})}}).finally(()=>{var c;s&&(this.dismiss(n),n=void 0),(c=t.finally)==null||c.call(t)}),l=()=>new Promise((c,u)=>a.then(()=>i[0]==="reject"?u(i[1]):c(i[1])).catch(u));return typeof n!="string"&&typeof n!="number"?{unwrap:l}:Object.assign(n,{unwrap:l})},this.custom=(e,t)=>{let n=(t==null?void 0:t.id)||Ip++;return this.create({jsx:e(n),id:n,...t}),n},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}},Gt=new N5,L5=(e,t)=>{let n=(t==null?void 0:t.id)||Ip++;return Gt.addToast({title:e,...t,id:n}),n},P5=e=>e&&typeof e=="object"&&"ok"in e&&typeof e.ok=="boolean"&&"status"in e&&typeof e.status=="number",T5=L5,M5=()=>Gt.toasts,R5=()=>Gt.getActiveToasts(),ze=Object.assign(T5,{success:Gt.success,info:Gt.info,warning:Gt.warning,error:Gt.error,custom:Gt.custom,message:Gt.message,promise:Gt.promise,dismiss:Gt.dismiss,loading:Gt.loading},{getHistory:M5,getToasts:R5});function A5(e,{insertAt:t}={}){if(typeof document>"u")return;let n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",t==="top"&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}A5(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);function jc(e){return e.label!==void 0}var O5=3,I5="32px",D5="16px",dx=4e3,_5=356,F5=14,z5=20,B5=200;function On(...e){return e.filter(Boolean).join(" ")}function V5(e){let[t,n]=e.split("-"),r=[];return t&&r.push(t),n&&r.push(n),r}var $5=e=>{var t,n,r,s,i,a,l,c,u,f,h;let{invert:p,toast:m,unstyled:g,interacting:v,setHeights:y,visibleToasts:b,heights:x,index:w,toasts:S,expanded:k,removeToast:j,defaultRichColors:C,closeButton:E,style:N,cancelButtonStyle:L,actionButtonStyle:T,className:R="",descriptionClassName:z="",duration:I,position:F,gap:A,loadingIcon:W,expandByDefault:M,classNames:O,icons:_,closeButtonAriaLabel:U="Close toast",pauseWhenPageIsHidden:q}=e,[G,D]=re.useState(null),[P,X]=re.useState(null),[V,J]=re.useState(!1),[ce,$]=re.useState(!1),[Z,H]=re.useState(!1),[se,he]=re.useState(!1),[oe,Oe]=re.useState(!1),[ct,It]=re.useState(0),[Nt,ve]=re.useState(0),Pe=re.useRef(m.duration||I||dx),$e=re.useRef(null),De=re.useRef(null),gn=w===0,Q=w+1<=b,pe=m.type,Te=m.dismissible!==!1,We=m.className||"",Ge=m.descriptionClassName||"",nr=re.useMemo(()=>x.findIndex(ye=>ye.toastId===m.id)||0,[x,m.id]),jr=re.useMemo(()=>{var ye;return(ye=m.closeButton)!=null?ye:E},[m.closeButton,E]),Er=re.useMemo(()=>m.duration||I||dx,[m.duration,I]),Zr=re.useRef(0),Nr=re.useRef(0),Gs=re.useRef(0),Lr=re.useRef(null),[_i,nc]=F.split("-"),qs=re.useMemo(()=>x.reduce((ye,Ie,Fe)=>Fe>=nr?ye:ye+Ie.height,0),[x,nr]),ca=E5(),rc=m.invert||p,Fi=pe==="loading";Nr.current=re.useMemo(()=>nr*A+qs,[nr,qs]),re.useEffect(()=>{Pe.current=Er},[Er]),re.useEffect(()=>{J(!0)},[]),re.useEffect(()=>{let ye=De.current;if(ye){let Ie=ye.getBoundingClientRect().height;return ve(Ie),y(Fe=>[{toastId:m.id,height:Ie,position:m.position},...Fe]),()=>y(Fe=>Fe.filter(Wt=>Wt.toastId!==m.id))}},[y,m.id]),re.useLayoutEffect(()=>{if(!V)return;let ye=De.current,Ie=ye.style.height;ye.style.height="auto";let Fe=ye.getBoundingClientRect().height;ye.style.height=Ie,ve(Fe),y(Wt=>Wt.find(rn=>rn.toastId===m.id)?Wt.map(rn=>rn.toastId===m.id?{...rn,height:Fe}:rn):[{toastId:m.id,height:Fe,position:m.position},...Wt])},[V,m.title,m.description,y,m.id]);let nn=re.useCallback(()=>{$(!0),It(Nr.current),y(ye=>ye.filter(Ie=>Ie.toastId!==m.id)),setTimeout(()=>{j(m)},B5)},[m,j,y,Nr]);re.useEffect(()=>{if(m.promise&&pe==="loading"||m.duration===1/0||m.type==="loading")return;let ye;return k||v||q&&ca?(()=>{if(Gs.current<Zr.current){let Ie=new Date().getTime()-Zr.current;Pe.current=Pe.current-Ie}Gs.current=new Date().getTime()})():Pe.current!==1/0&&(Zr.current=new Date().getTime(),ye=setTimeout(()=>{var Ie;(Ie=m.onAutoClose)==null||Ie.call(m,m),nn()},Pe.current)),()=>clearTimeout(ye)},[k,v,m,pe,q,ca,nn]),re.useEffect(()=>{m.delete&&nn()},[nn,m.delete]);function sc(){var ye,Ie,Fe;return _!=null&&_.loading?re.createElement("div",{className:On(O==null?void 0:O.loader,(ye=m==null?void 0:m.classNames)==null?void 0:ye.loader,"sonner-loader"),"data-visible":pe==="loading"},_.loading):W?re.createElement("div",{className:On(O==null?void 0:O.loader,(Ie=m==null?void 0:m.classNames)==null?void 0:Ie.loader,"sonner-loader"),"data-visible":pe==="loading"},W):re.createElement(b5,{className:On(O==null?void 0:O.loader,(Fe=m==null?void 0:m.classNames)==null?void 0:Fe.loader),visible:pe==="loading"})}return re.createElement("li",{tabIndex:0,ref:De,className:On(R,We,O==null?void 0:O.toast,(t=m==null?void 0:m.classNames)==null?void 0:t.toast,O==null?void 0:O.default,O==null?void 0:O[pe],(n=m==null?void 0:m.classNames)==null?void 0:n[pe]),"data-sonner-toast":"","data-rich-colors":(r=m.richColors)!=null?r:C,"data-styled":!(m.jsx||m.unstyled||g),"data-mounted":V,"data-promise":!!m.promise,"data-swiped":oe,"data-removed":ce,"data-visible":Q,"data-y-position":_i,"data-x-position":nc,"data-index":w,"data-front":gn,"data-swiping":Z,"data-dismissible":Te,"data-type":pe,"data-invert":rc,"data-swipe-out":se,"data-swipe-direction":P,"data-expanded":!!(k||M&&V),style:{"--index":w,"--toasts-before":w,"--z-index":S.length-w,"--offset":`${ce?ct:Nr.current}px`,"--initial-height":M?"auto":`${Nt}px`,...N,...m.style},onDragEnd:()=>{H(!1),D(null),Lr.current=null},onPointerDown:ye=>{Fi||!Te||($e.current=new Date,It(Nr.current),ye.target.setPointerCapture(ye.pointerId),ye.target.tagName!=="BUTTON"&&(H(!0),Lr.current={x:ye.clientX,y:ye.clientY}))},onPointerUp:()=>{var ye,Ie,Fe,Wt;if(se||!Te)return;Lr.current=null;let rn=Number(((ye=De.current)==null?void 0:ye.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Kt=Number(((Ie=De.current)==null?void 0:Ie.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),xe=new Date().getTime()-((Fe=$e.current)==null?void 0:Fe.getTime()),Rn=G==="x"?rn:Kt,Yr=Math.abs(Rn)/xe;if(Math.abs(Rn)>=z5||Yr>.11){It(Nr.current),(Wt=m.onDismiss)==null||Wt.call(m,m),X(G==="x"?rn>0?"right":"left":Kt>0?"down":"up"),nn(),he(!0),Oe(!1);return}H(!1),D(null)},onPointerMove:ye=>{var Ie,Fe,Wt,rn;if(!Lr.current||!Te||((Ie=window.getSelection())==null?void 0:Ie.toString().length)>0)return;let Kt=ye.clientY-Lr.current.y,xe=ye.clientX-Lr.current.x,Rn=(Fe=e.swipeDirections)!=null?Fe:V5(F);!G&&(Math.abs(xe)>1||Math.abs(Kt)>1)&&D(Math.abs(xe)>Math.abs(Kt)?"x":"y");let Yr={x:0,y:0};G==="y"?(Rn.includes("top")||Rn.includes("bottom"))&&(Rn.includes("top")&&Kt<0||Rn.includes("bottom")&&Kt>0)&&(Yr.y=Kt):G==="x"&&(Rn.includes("left")||Rn.includes("right"))&&(Rn.includes("left")&&xe<0||Rn.includes("right")&&xe>0)&&(Yr.x=xe),(Math.abs(Yr.x)>0||Math.abs(Yr.y)>0)&&Oe(!0),(Wt=De.current)==null||Wt.style.setProperty("--swipe-amount-x",`${Yr.x}px`),(rn=De.current)==null||rn.style.setProperty("--swipe-amount-y",`${Yr.y}px`)}},jr&&!m.jsx?re.createElement("button",{"aria-label":U,"data-disabled":Fi,"data-close-button":!0,onClick:Fi||!Te?()=>{}:()=>{var ye;nn(),(ye=m.onDismiss)==null||ye.call(m,m)},className:On(O==null?void 0:O.closeButton,(s=m==null?void 0:m.classNames)==null?void 0:s.closeButton)},(i=_==null?void 0:_.close)!=null?i:j5):null,m.jsx||d.isValidElement(m.title)?m.jsx?m.jsx:typeof m.title=="function"?m.title():m.title:re.createElement(re.Fragment,null,pe||m.icon||m.promise?re.createElement("div",{"data-icon":"",className:On(O==null?void 0:O.icon,(a=m==null?void 0:m.classNames)==null?void 0:a.icon)},m.promise||m.type==="loading"&&!m.icon?m.icon||sc():null,m.type!=="loading"?m.icon||(_==null?void 0:_[pe])||x5(pe):null):null,re.createElement("div",{"data-content":"",className:On(O==null?void 0:O.content,(l=m==null?void 0:m.classNames)==null?void 0:l.content)},re.createElement("div",{"data-title":"",className:On(O==null?void 0:O.title,(c=m==null?void 0:m.classNames)==null?void 0:c.title)},typeof m.title=="function"?m.title():m.title),m.description?re.createElement("div",{"data-description":"",className:On(z,Ge,O==null?void 0:O.description,(u=m==null?void 0:m.classNames)==null?void 0:u.description)},typeof m.description=="function"?m.description():m.description):null),d.isValidElement(m.cancel)?m.cancel:m.cancel&&jc(m.cancel)?re.createElement("button",{"data-button":!0,"data-cancel":!0,style:m.cancelButtonStyle||L,onClick:ye=>{var Ie,Fe;jc(m.cancel)&&Te&&((Fe=(Ie=m.cancel).onClick)==null||Fe.call(Ie,ye),nn())},className:On(O==null?void 0:O.cancelButton,(f=m==null?void 0:m.classNames)==null?void 0:f.cancelButton)},m.cancel.label):null,d.isValidElement(m.action)?m.action:m.action&&jc(m.action)?re.createElement("button",{"data-button":!0,"data-action":!0,style:m.actionButtonStyle||T,onClick:ye=>{var Ie,Fe;jc(m.action)&&((Fe=(Ie=m.action).onClick)==null||Fe.call(Ie,ye),!ye.defaultPrevented&&nn())},className:On(O==null?void 0:O.actionButton,(h=m==null?void 0:m.classNames)==null?void 0:h.actionButton)},m.action.label):null))};function fx(){if(typeof window>"u"||typeof document>"u")return"ltr";let e=document.documentElement.getAttribute("dir");return e==="auto"||!e?window.getComputedStyle(document.documentElement).direction:e}function U5(e,t){let n={};return[e,t].forEach((r,s)=>{let i=s===1,a=i?"--mobile-offset":"--offset",l=i?D5:I5;function c(u){["top","right","bottom","left"].forEach(f=>{n[`${a}-${f}`]=typeof u=="number"?`${u}px`:u})}typeof r=="number"||typeof r=="string"?c(r):typeof r=="object"?["top","right","bottom","left"].forEach(u=>{r[u]===void 0?n[`${a}-${u}`]=l:n[`${a}-${u}`]=typeof r[u]=="number"?`${r[u]}px`:r[u]}):c(l)}),n}var H5=d.forwardRef(function(e,t){let{invert:n,position:r="bottom-right",hotkey:s=["altKey","KeyT"],expand:i,closeButton:a,className:l,offset:c,mobileOffset:u,theme:f="light",richColors:h,duration:p,style:m,visibleToasts:g=O5,toastOptions:v,dir:y=fx(),gap:b=F5,loadingIcon:x,icons:w,containerAriaLabel:S="Notifications",pauseWhenPageIsHidden:k}=e,[j,C]=re.useState([]),E=re.useMemo(()=>Array.from(new Set([r].concat(j.filter(q=>q.position).map(q=>q.position)))),[j,r]),[N,L]=re.useState([]),[T,R]=re.useState(!1),[z,I]=re.useState(!1),[F,A]=re.useState(f!=="system"?f:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),W=re.useRef(null),M=s.join("+").replace(/Key/g,"").replace(/Digit/g,""),O=re.useRef(null),_=re.useRef(!1),U=re.useCallback(q=>{C(G=>{var D;return(D=G.find(P=>P.id===q.id))!=null&&D.delete||Gt.dismiss(q.id),G.filter(({id:P})=>P!==q.id)})},[]);return re.useEffect(()=>Gt.subscribe(q=>{if(q.dismiss){C(G=>G.map(D=>D.id===q.id?{...D,delete:!0}:D));return}setTimeout(()=>{pk.flushSync(()=>{C(G=>{let D=G.findIndex(P=>P.id===q.id);return D!==-1?[...G.slice(0,D),{...G[D],...q},...G.slice(D+1)]:[q,...G]})})})}),[]),re.useEffect(()=>{if(f!=="system"){A(f);return}if(f==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?A("dark"):A("light")),typeof window>"u")return;let q=window.matchMedia("(prefers-color-scheme: dark)");try{q.addEventListener("change",({matches:G})=>{A(G?"dark":"light")})}catch{q.addListener(({matches:D})=>{try{A(D?"dark":"light")}catch(P){console.error(P)}})}},[f]),re.useEffect(()=>{j.length<=1&&R(!1)},[j]),re.useEffect(()=>{let q=G=>{var D,P;s.every(X=>G[X]||G.code===X)&&(R(!0),(D=W.current)==null||D.focus()),G.code==="Escape"&&(document.activeElement===W.current||(P=W.current)!=null&&P.contains(document.activeElement))&&R(!1)};return document.addEventListener("keydown",q),()=>document.removeEventListener("keydown",q)},[s]),re.useEffect(()=>{if(W.current)return()=>{O.current&&(O.current.focus({preventScroll:!0}),O.current=null,_.current=!1)}},[W.current]),re.createElement("section",{ref:t,"aria-label":`${S} ${M}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},E.map((q,G)=>{var D;let[P,X]=q.split("-");return j.length?re.createElement("ol",{key:q,dir:y==="auto"?fx():y,tabIndex:-1,ref:W,className:l,"data-sonner-toaster":!0,"data-theme":F,"data-y-position":P,"data-lifted":T&&j.length>1&&!i,"data-x-position":X,style:{"--front-toast-height":`${((D=N[0])==null?void 0:D.height)||0}px`,"--width":`${_5}px`,"--gap":`${b}px`,...m,...U5(c,u)},onBlur:V=>{_.current&&!V.currentTarget.contains(V.relatedTarget)&&(_.current=!1,O.current&&(O.current.focus({preventScroll:!0}),O.current=null))},onFocus:V=>{V.target instanceof HTMLElement&&V.target.dataset.dismissible==="false"||_.current||(_.current=!0,O.current=V.relatedTarget)},onMouseEnter:()=>R(!0),onMouseMove:()=>R(!0),onMouseLeave:()=>{z||R(!1)},onDragEnd:()=>R(!1),onPointerDown:V=>{V.target instanceof HTMLElement&&V.target.dataset.dismissible==="false"||I(!0)},onPointerUp:()=>I(!1)},j.filter(V=>!V.position&&G===0||V.position===q).map((V,J)=>{var ce,$;return re.createElement($5,{key:V.id,icons:w,index:J,toast:V,defaultRichColors:h,duration:(ce=v==null?void 0:v.duration)!=null?ce:p,className:v==null?void 0:v.className,descriptionClassName:v==null?void 0:v.descriptionClassName,invert:n,visibleToasts:g,closeButton:($=v==null?void 0:v.closeButton)!=null?$:a,interacting:z,position:q,style:v==null?void 0:v.style,unstyled:v==null?void 0:v.unstyled,classNames:v==null?void 0:v.classNames,cancelButtonStyle:v==null?void 0:v.cancelButtonStyle,actionButtonStyle:v==null?void 0:v.actionButtonStyle,removeToast:U,toasts:j.filter(Z=>Z.position==V.position),heights:N.filter(Z=>Z.position==V.position),setHeights:L,expandByDefault:i,gap:b,loadingIcon:x,expanded:T,pauseWhenPageIsHidden:k,swipeDirections:e.swipeDirections})})):null}))});const W5=({...e})=>{const{theme:t="system"}=v5();return o.jsx(H5,{theme:t,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",description:"group-[.toast]:text-muted-foreground",actionButton:"group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",cancelButton:"group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"}},...e})};var K5=Dm[" useId ".trim().toString()]||(()=>{}),G5=0;function Ts(e){const[t,n]=d.useState(K5());return Et(()=>{n(r=>r??String(G5++))},[e]),t?`radix-${t}`:""}const q5=["top","right","bottom","left"],Os=Math.min,on=Math.max,$u=Math.round,Ec=Math.floor,vr=e=>({x:e,y:e}),Z5={left:"right",right:"left",bottom:"top",top:"bottom"},Y5={start:"end",end:"start"};function Dp(e,t,n){return on(e,Os(t,n))}function Ur(e,t){return typeof e=="function"?e(t):e}function Hr(e){return e.split("-")[0]}function Xo(e){return e.split("-")[1]}function Ig(e){return e==="x"?"y":"x"}function Dg(e){return e==="y"?"height":"width"}const Q5=new Set(["top","bottom"]);function pr(e){return Q5.has(Hr(e))?"y":"x"}function _g(e){return Ig(pr(e))}function X5(e,t,n){n===void 0&&(n=!1);const r=Xo(e),s=_g(e),i=Dg(s);let a=s==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=Uu(a)),[a,Uu(a)]}function J5(e){const t=Uu(e);return[_p(e),t,_p(t)]}function _p(e){return e.replace(/start|end/g,t=>Y5[t])}const hx=["left","right"],px=["right","left"],eA=["top","bottom"],tA=["bottom","top"];function nA(e,t,n){switch(e){case"top":case"bottom":return n?t?px:hx:t?hx:px;case"left":case"right":return t?eA:tA;default:return[]}}function rA(e,t,n,r){const s=Xo(e);let i=nA(Hr(e),n==="start",r);return s&&(i=i.map(a=>a+"-"+s),t&&(i=i.concat(i.map(_p)))),i}function Uu(e){return e.replace(/left|right|bottom|top/g,t=>Z5[t])}function sA(e){return{top:0,right:0,bottom:0,left:0,...e}}function cC(e){return typeof e!="number"?sA(e):{top:e,right:e,bottom:e,left:e}}function Hu(e){const{x:t,y:n,width:r,height:s}=e;return{width:r,height:s,top:n,left:t,right:t+r,bottom:n+s,x:t,y:n}}function mx(e,t,n){let{reference:r,floating:s}=e;const i=pr(t),a=_g(t),l=Dg(a),c=Hr(t),u=i==="y",f=r.x+r.width/2-s.width/2,h=r.y+r.height/2-s.height/2,p=r[l]/2-s[l]/2;let m;switch(c){case"top":m={x:f,y:r.y-s.height};break;case"bottom":m={x:f,y:r.y+r.height};break;case"right":m={x:r.x+r.width,y:h};break;case"left":m={x:r.x-s.width,y:h};break;default:m={x:r.x,y:r.y}}switch(Xo(t)){case"start":m[a]-=p*(n&&u?-1:1);break;case"end":m[a]+=p*(n&&u?-1:1);break}return m}const iA=async(e,t,n)=>{const{placement:r="bottom",strategy:s="absolute",middleware:i=[],platform:a}=n,l=i.filter(Boolean),c=await(a.isRTL==null?void 0:a.isRTL(t));let u=await a.getElementRects({reference:e,floating:t,strategy:s}),{x:f,y:h}=mx(u,r,c),p=r,m={},g=0;for(let v=0;v<l.length;v++){const{name:y,fn:b}=l[v],{x,y:w,data:S,reset:k}=await b({x:f,y:h,initialPlacement:r,placement:p,strategy:s,middlewareData:m,rects:u,platform:a,elements:{reference:e,floating:t}});f=x??f,h=w??h,m={...m,[y]:{...m[y],...S}},k&&g<=50&&(g++,typeof k=="object"&&(k.placement&&(p=k.placement),k.rects&&(u=k.rects===!0?await a.getElementRects({reference:e,floating:t,strategy:s}):k.rects),{x:f,y:h}=mx(u,p,c)),v=-1)}return{x:f,y:h,placement:p,strategy:s,middlewareData:m}};async function yl(e,t){var n;t===void 0&&(t={});const{x:r,y:s,platform:i,rects:a,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:f="viewport",elementContext:h="floating",altBoundary:p=!1,padding:m=0}=Ur(t,e),g=cC(m),y=l[p?h==="floating"?"reference":"floating":h],b=Hu(await i.getClippingRect({element:(n=await(i.isElement==null?void 0:i.isElement(y)))==null||n?y:y.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(l.floating)),boundary:u,rootBoundary:f,strategy:c})),x=h==="floating"?{x:r,y:s,width:a.floating.width,height:a.floating.height}:a.reference,w=await(i.getOffsetParent==null?void 0:i.getOffsetParent(l.floating)),S=await(i.isElement==null?void 0:i.isElement(w))?await(i.getScale==null?void 0:i.getScale(w))||{x:1,y:1}:{x:1,y:1},k=Hu(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:w,strategy:c}):x);return{top:(b.top-k.top+g.top)/S.y,bottom:(k.bottom-b.bottom+g.bottom)/S.y,left:(b.left-k.left+g.left)/S.x,right:(k.right-b.right+g.right)/S.x}}const oA=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:s,rects:i,platform:a,elements:l,middlewareData:c}=t,{element:u,padding:f=0}=Ur(e,t)||{};if(u==null)return{};const h=cC(f),p={x:n,y:r},m=_g(s),g=Dg(m),v=await a.getDimensions(u),y=m==="y",b=y?"top":"left",x=y?"bottom":"right",w=y?"clientHeight":"clientWidth",S=i.reference[g]+i.reference[m]-p[m]-i.floating[g],k=p[m]-i.reference[m],j=await(a.getOffsetParent==null?void 0:a.getOffsetParent(u));let C=j?j[w]:0;(!C||!await(a.isElement==null?void 0:a.isElement(j)))&&(C=l.floating[w]||i.floating[g]);const E=S/2-k/2,N=C/2-v[g]/2-1,L=Os(h[b],N),T=Os(h[x],N),R=L,z=C-v[g]-T,I=C/2-v[g]/2+E,F=Dp(R,I,z),A=!c.arrow&&Xo(s)!=null&&I!==F&&i.reference[g]/2-(I<R?L:T)-v[g]/2<0,W=A?I<R?I-R:I-z:0;return{[m]:p[m]+W,data:{[m]:F,centerOffset:I-F-W,...A&&{alignmentOffset:W}},reset:A}}}),aA=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:s,middlewareData:i,rects:a,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:f=!0,crossAxis:h=!0,fallbackPlacements:p,fallbackStrategy:m="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:v=!0,...y}=Ur(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};const b=Hr(s),x=pr(l),w=Hr(l)===l,S=await(c.isRTL==null?void 0:c.isRTL(u.floating)),k=p||(w||!v?[Uu(l)]:J5(l)),j=g!=="none";!p&&j&&k.push(...rA(l,v,g,S));const C=[l,...k],E=await yl(t,y),N=[];let L=((r=i.flip)==null?void 0:r.overflows)||[];if(f&&N.push(E[b]),h){const I=X5(s,a,S);N.push(E[I[0]],E[I[1]])}if(L=[...L,{placement:s,overflows:N}],!N.every(I=>I<=0)){var T,R;const I=(((T=i.flip)==null?void 0:T.index)||0)+1,F=C[I];if(F&&(!(h==="alignment"?x!==pr(F):!1)||L.every(M=>M.overflows[0]>0&&pr(M.placement)===x)))return{data:{index:I,overflows:L},reset:{placement:F}};let A=(R=L.filter(W=>W.overflows[0]<=0).sort((W,M)=>W.overflows[1]-M.overflows[1])[0])==null?void 0:R.placement;if(!A)switch(m){case"bestFit":{var z;const W=(z=L.filter(M=>{if(j){const O=pr(M.placement);return O===x||O==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(O=>O>0).reduce((O,_)=>O+_,0)]).sort((M,O)=>M[1]-O[1])[0])==null?void 0:z[0];W&&(A=W);break}case"initialPlacement":A=l;break}if(s!==A)return{reset:{placement:A}}}return{}}}};function gx(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function vx(e){return q5.some(t=>e[t]>=0)}const lA=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...s}=Ur(e,t);switch(r){case"referenceHidden":{const i=await yl(t,{...s,elementContext:"reference"}),a=gx(i,n.reference);return{data:{referenceHiddenOffsets:a,referenceHidden:vx(a)}}}case"escaped":{const i=await yl(t,{...s,altBoundary:!0}),a=gx(i,n.floating);return{data:{escapedOffsets:a,escaped:vx(a)}}}default:return{}}}}},uC=new Set(["left","top"]);async function cA(e,t){const{placement:n,platform:r,elements:s}=e,i=await(r.isRTL==null?void 0:r.isRTL(s.floating)),a=Hr(n),l=Xo(n),c=pr(n)==="y",u=uC.has(a)?-1:1,f=i&&c?-1:1,h=Ur(t,e);let{mainAxis:p,crossAxis:m,alignmentAxis:g}=typeof h=="number"?{mainAxis:h,crossAxis:0,alignmentAxis:null}:{mainAxis:h.mainAxis||0,crossAxis:h.crossAxis||0,alignmentAxis:h.alignmentAxis};return l&&typeof g=="number"&&(m=l==="end"?g*-1:g),c?{x:m*f,y:p*u}:{x:p*u,y:m*f}}const uA=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:s,y:i,placement:a,middlewareData:l}=t,c=await cA(t,e);return a===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:s+c.x,y:i+c.y,data:{...c,placement:a}}}}},dA=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:s}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:l={fn:y=>{let{x:b,y:x}=y;return{x:b,y:x}}},...c}=Ur(e,t),u={x:n,y:r},f=await yl(t,c),h=pr(Hr(s)),p=Ig(h);let m=u[p],g=u[h];if(i){const y=p==="y"?"top":"left",b=p==="y"?"bottom":"right",x=m+f[y],w=m-f[b];m=Dp(x,m,w)}if(a){const y=h==="y"?"top":"left",b=h==="y"?"bottom":"right",x=g+f[y],w=g-f[b];g=Dp(x,g,w)}const v=l.fn({...t,[p]:m,[h]:g});return{...v,data:{x:v.x-n,y:v.y-r,enabled:{[p]:i,[h]:a}}}}}},fA=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:s,rects:i,middlewareData:a}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=Ur(e,t),f={x:n,y:r},h=pr(s),p=Ig(h);let m=f[p],g=f[h];const v=Ur(l,t),y=typeof v=="number"?{mainAxis:v,crossAxis:0}:{mainAxis:0,crossAxis:0,...v};if(c){const w=p==="y"?"height":"width",S=i.reference[p]-i.floating[w]+y.mainAxis,k=i.reference[p]+i.reference[w]-y.mainAxis;m<S?m=S:m>k&&(m=k)}if(u){var b,x;const w=p==="y"?"width":"height",S=uC.has(Hr(s)),k=i.reference[h]-i.floating[w]+(S&&((b=a.offset)==null?void 0:b[h])||0)+(S?0:y.crossAxis),j=i.reference[h]+i.reference[w]+(S?0:((x=a.offset)==null?void 0:x[h])||0)-(S?y.crossAxis:0);g<k?g=k:g>j&&(g=j)}return{[p]:m,[h]:g}}}},hA=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){var n,r;const{placement:s,rects:i,platform:a,elements:l}=t,{apply:c=()=>{},...u}=Ur(e,t),f=await yl(t,u),h=Hr(s),p=Xo(s),m=pr(s)==="y",{width:g,height:v}=i.floating;let y,b;h==="top"||h==="bottom"?(y=h,b=p===(await(a.isRTL==null?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(b=h,y=p==="end"?"top":"bottom");const x=v-f.top-f.bottom,w=g-f.left-f.right,S=Os(v-f[y],x),k=Os(g-f[b],w),j=!t.middlewareData.shift;let C=S,E=k;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(E=w),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(C=x),j&&!p){const L=on(f.left,0),T=on(f.right,0),R=on(f.top,0),z=on(f.bottom,0);m?E=g-2*(L!==0||T!==0?L+T:on(f.left,f.right)):C=v-2*(R!==0||z!==0?R+z:on(f.top,f.bottom))}await c({...t,availableWidth:E,availableHeight:C});const N=await a.getDimensions(l.floating);return g!==N.width||v!==N.height?{reset:{rects:!0}}:{}}}};function Bd(){return typeof window<"u"}function Jo(e){return dC(e)?(e.nodeName||"").toLowerCase():"#document"}function un(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function kr(e){var t;return(t=(dC(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function dC(e){return Bd()?e instanceof Node||e instanceof un(e).Node:!1}function Yn(e){return Bd()?e instanceof Element||e instanceof un(e).Element:!1}function yr(e){return Bd()?e instanceof HTMLElement||e instanceof un(e).HTMLElement:!1}function xx(e){return!Bd()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof un(e).ShadowRoot}const pA=new Set(["inline","contents"]);function Hl(e){const{overflow:t,overflowX:n,overflowY:r,display:s}=Qn(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!pA.has(s)}const mA=new Set(["table","td","th"]);function gA(e){return mA.has(Jo(e))}const vA=[":popover-open",":modal"];function Vd(e){return vA.some(t=>{try{return e.matches(t)}catch{return!1}})}const xA=["transform","translate","scale","rotate","perspective"],yA=["transform","translate","scale","rotate","perspective","filter"],bA=["paint","layout","strict","content"];function Fg(e){const t=zg(),n=Yn(e)?Qn(e):e;return xA.some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||yA.some(r=>(n.willChange||"").includes(r))||bA.some(r=>(n.contain||"").includes(r))}function wA(e){let t=Is(e);for(;yr(t)&&!zo(t);){if(Fg(t))return t;if(Vd(t))return null;t=Is(t)}return null}function zg(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}const SA=new Set(["html","body","#document"]);function zo(e){return SA.has(Jo(e))}function Qn(e){return un(e).getComputedStyle(e)}function $d(e){return Yn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Is(e){if(Jo(e)==="html")return e;const t=e.assignedSlot||e.parentNode||xx(e)&&e.host||kr(e);return xx(t)?t.host:t}function fC(e){const t=Is(e);return zo(t)?e.ownerDocument?e.ownerDocument.body:e.body:yr(t)&&Hl(t)?t:fC(t)}function bl(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const s=fC(e),i=s===((r=e.ownerDocument)==null?void 0:r.body),a=un(s);if(i){const l=Fp(a);return t.concat(a,a.visualViewport||[],Hl(s)?s:[],l&&n?bl(l):[])}return t.concat(s,bl(s,[],n))}function Fp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function hC(e){const t=Qn(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const s=yr(e),i=s?e.offsetWidth:n,a=s?e.offsetHeight:r,l=$u(n)!==i||$u(r)!==a;return l&&(n=i,r=a),{width:n,height:r,$:l}}function Bg(e){return Yn(e)?e:e.contextElement}function bo(e){const t=Bg(e);if(!yr(t))return vr(1);const n=t.getBoundingClientRect(),{width:r,height:s,$:i}=hC(t);let a=(i?$u(n.width):n.width)/r,l=(i?$u(n.height):n.height)/s;return(!a||!Number.isFinite(a))&&(a=1),(!l||!Number.isFinite(l))&&(l=1),{x:a,y:l}}const kA=vr(0);function pC(e){const t=un(e);return!zg()||!t.visualViewport?kA:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function CA(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==un(e)?!1:t}function Ei(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const s=e.getBoundingClientRect(),i=Bg(e);let a=vr(1);t&&(r?Yn(r)&&(a=bo(r)):a=bo(e));const l=CA(i,n,r)?pC(i):vr(0);let c=(s.left+l.x)/a.x,u=(s.top+l.y)/a.y,f=s.width/a.x,h=s.height/a.y;if(i){const p=un(i),m=r&&Yn(r)?un(r):r;let g=p,v=Fp(g);for(;v&&r&&m!==g;){const y=bo(v),b=v.getBoundingClientRect(),x=Qn(v),w=b.left+(v.clientLeft+parseFloat(x.paddingLeft))*y.x,S=b.top+(v.clientTop+parseFloat(x.paddingTop))*y.y;c*=y.x,u*=y.y,f*=y.x,h*=y.y,c+=w,u+=S,g=un(v),v=Fp(g)}}return Hu({width:f,height:h,x:c,y:u})}function Vg(e,t){const n=$d(e).scrollLeft;return t?t.left+n:Ei(kr(e)).left+n}function mC(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),s=r.left+t.scrollLeft-(n?0:Vg(e,r)),i=r.top+t.scrollTop;return{x:s,y:i}}function jA(e){let{elements:t,rect:n,offsetParent:r,strategy:s}=e;const i=s==="fixed",a=kr(r),l=t?Vd(t.floating):!1;if(r===a||l&&i)return n;let c={scrollLeft:0,scrollTop:0},u=vr(1);const f=vr(0),h=yr(r);if((h||!h&&!i)&&((Jo(r)!=="body"||Hl(a))&&(c=$d(r)),yr(r))){const m=Ei(r);u=bo(r),f.x=m.x+r.clientLeft,f.y=m.y+r.clientTop}const p=a&&!h&&!i?mC(a,c,!0):vr(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+f.x+p.x,y:n.y*u.y-c.scrollTop*u.y+f.y+p.y}}function EA(e){return Array.from(e.getClientRects())}function NA(e){const t=kr(e),n=$d(e),r=e.ownerDocument.body,s=on(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=on(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Vg(e);const l=-n.scrollTop;return Qn(r).direction==="rtl"&&(a+=on(t.clientWidth,r.clientWidth)-s),{width:s,height:i,x:a,y:l}}function LA(e,t){const n=un(e),r=kr(e),s=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,l=0,c=0;if(s){i=s.width,a=s.height;const u=zg();(!u||u&&t==="fixed")&&(l=s.offsetLeft,c=s.offsetTop)}return{width:i,height:a,x:l,y:c}}const PA=new Set(["absolute","fixed"]);function TA(e,t){const n=Ei(e,!0,t==="fixed"),r=n.top+e.clientTop,s=n.left+e.clientLeft,i=yr(e)?bo(e):vr(1),a=e.clientWidth*i.x,l=e.clientHeight*i.y,c=s*i.x,u=r*i.y;return{width:a,height:l,x:c,y:u}}function yx(e,t,n){let r;if(t==="viewport")r=LA(e,n);else if(t==="document")r=NA(kr(e));else if(Yn(t))r=TA(t,n);else{const s=pC(e);r={x:t.x-s.x,y:t.y-s.y,width:t.width,height:t.height}}return Hu(r)}function gC(e,t){const n=Is(e);return n===t||!Yn(n)||zo(n)?!1:Qn(n).position==="fixed"||gC(n,t)}function MA(e,t){const n=t.get(e);if(n)return n;let r=bl(e,[],!1).filter(l=>Yn(l)&&Jo(l)!=="body"),s=null;const i=Qn(e).position==="fixed";let a=i?Is(e):e;for(;Yn(a)&&!zo(a);){const l=Qn(a),c=Fg(a);!c&&l.position==="fixed"&&(s=null),(i?!c&&!s:!c&&l.position==="static"&&!!s&&PA.has(s.position)||Hl(a)&&!c&&gC(e,a))?r=r.filter(f=>f!==a):s=l,a=Is(a)}return t.set(e,r),r}function RA(e){let{element:t,boundary:n,rootBoundary:r,strategy:s}=e;const a=[...n==="clippingAncestors"?Vd(t)?[]:MA(t,this._c):[].concat(n),r],l=a[0],c=a.reduce((u,f)=>{const h=yx(t,f,s);return u.top=on(h.top,u.top),u.right=Os(h.right,u.right),u.bottom=Os(h.bottom,u.bottom),u.left=on(h.left,u.left),u},yx(t,l,s));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function AA(e){const{width:t,height:n}=hC(e);return{width:t,height:n}}function OA(e,t,n){const r=yr(t),s=kr(t),i=n==="fixed",a=Ei(e,!0,i,t);let l={scrollLeft:0,scrollTop:0};const c=vr(0);function u(){c.x=Vg(s)}if(r||!r&&!i)if((Jo(t)!=="body"||Hl(s))&&(l=$d(t)),r){const m=Ei(t,!0,i,t);c.x=m.x+t.clientLeft,c.y=m.y+t.clientTop}else s&&u();i&&!r&&s&&u();const f=s&&!r&&!i?mC(s,l):vr(0),h=a.left+l.scrollLeft-c.x-f.x,p=a.top+l.scrollTop-c.y-f.y;return{x:h,y:p,width:a.width,height:a.height}}function Zf(e){return Qn(e).position==="static"}function bx(e,t){if(!yr(e)||Qn(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return kr(e)===n&&(n=n.ownerDocument.body),n}function vC(e,t){const n=un(e);if(Vd(e))return n;if(!yr(e)){let s=Is(e);for(;s&&!zo(s);){if(Yn(s)&&!Zf(s))return s;s=Is(s)}return n}let r=bx(e,t);for(;r&&gA(r)&&Zf(r);)r=bx(r,t);return r&&zo(r)&&Zf(r)&&!Fg(r)?n:r||wA(e)||n}const IA=async function(e){const t=this.getOffsetParent||vC,n=this.getDimensions,r=await n(e.floating);return{reference:OA(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function DA(e){return Qn(e).direction==="rtl"}const _A={convertOffsetParentRelativeRectToViewportRelativeRect:jA,getDocumentElement:kr,getClippingRect:RA,getOffsetParent:vC,getElementRects:IA,getClientRects:EA,getDimensions:AA,getScale:bo,isElement:Yn,isRTL:DA};function xC(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function FA(e,t){let n=null,r;const s=kr(e);function i(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function a(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),i();const u=e.getBoundingClientRect(),{left:f,top:h,width:p,height:m}=u;if(l||t(),!p||!m)return;const g=Ec(h),v=Ec(s.clientWidth-(f+p)),y=Ec(s.clientHeight-(h+m)),b=Ec(f),w={rootMargin:-g+"px "+-v+"px "+-y+"px "+-b+"px",threshold:on(0,Os(1,c))||1};let S=!0;function k(j){const C=j[0].intersectionRatio;if(C!==c){if(!S)return a();C?a(!1,C):r=setTimeout(()=>{a(!1,1e-7)},1e3)}C===1&&!xC(u,e.getBoundingClientRect())&&a(),S=!1}try{n=new IntersectionObserver(k,{...w,root:s.ownerDocument})}catch{n=new IntersectionObserver(k,w)}n.observe(e)}return a(!0),i}function zA(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:s=!0,ancestorResize:i=!0,elementResize:a=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Bg(e),f=s||i?[...u?bl(u):[],...bl(t)]:[];f.forEach(b=>{s&&b.addEventListener("scroll",n,{passive:!0}),i&&b.addEventListener("resize",n)});const h=u&&l?FA(u,n):null;let p=-1,m=null;a&&(m=new ResizeObserver(b=>{let[x]=b;x&&x.target===u&&m&&(m.unobserve(t),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var w;(w=m)==null||w.observe(t)})),n()}),u&&!c&&m.observe(u),m.observe(t));let g,v=c?Ei(e):null;c&&y();function y(){const b=Ei(e);v&&!xC(v,b)&&n(),v=b,g=requestAnimationFrame(y)}return n(),()=>{var b;f.forEach(x=>{s&&x.removeEventListener("scroll",n),i&&x.removeEventListener("resize",n)}),h==null||h(),(b=m)==null||b.disconnect(),m=null,c&&cancelAnimationFrame(g)}}const BA=uA,VA=dA,$A=aA,UA=hA,HA=lA,wx=oA,WA=fA,KA=(e,t,n)=>{const r=new Map,s={platform:_A,...n},i={...s.platform,_c:r};return iA(e,t,{...s,platform:i})};var GA=typeof document<"u",qA=function(){},nu=GA?d.useLayoutEffect:qA;function Wu(e,t){if(e===t)return!0;if(typeof e!=typeof t)return!1;if(typeof e=="function"&&e.toString()===t.toString())return!0;let n,r,s;if(e&&t&&typeof e=="object"){if(Array.isArray(e)){if(n=e.length,n!==t.length)return!1;for(r=n;r--!==0;)if(!Wu(e[r],t[r]))return!1;return!0}if(s=Object.keys(e),n=s.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!{}.hasOwnProperty.call(t,s[r]))return!1;for(r=n;r--!==0;){const i=s[r];if(!(i==="_owner"&&e.$$typeof)&&!Wu(e[i],t[i]))return!1}return!0}return e!==e&&t!==t}function yC(e){return typeof window>"u"?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function Sx(e,t){const n=yC(e);return Math.round(t*n)/n}function Yf(e){const t=d.useRef(e);return nu(()=>{t.current=e}),t}function ZA(e){e===void 0&&(e={});const{placement:t="bottom",strategy:n="absolute",middleware:r=[],platform:s,elements:{reference:i,floating:a}={},transform:l=!0,whileElementsMounted:c,open:u}=e,[f,h]=d.useState({x:0,y:0,strategy:n,placement:t,middlewareData:{},isPositioned:!1}),[p,m]=d.useState(r);Wu(p,r)||m(r);const[g,v]=d.useState(null),[y,b]=d.useState(null),x=d.useCallback(M=>{M!==j.current&&(j.current=M,v(M))},[]),w=d.useCallback(M=>{M!==C.current&&(C.current=M,b(M))},[]),S=i||g,k=a||y,j=d.useRef(null),C=d.useRef(null),E=d.useRef(f),N=c!=null,L=Yf(c),T=Yf(s),R=Yf(u),z=d.useCallback(()=>{if(!j.current||!C.current)return;const M={placement:t,strategy:n,middleware:p};T.current&&(M.platform=T.current),KA(j.current,C.current,M).then(O=>{const _={...O,isPositioned:R.current!==!1};I.current&&!Wu(E.current,_)&&(E.current=_,mn.flushSync(()=>{h(_)}))})},[p,t,n,T,R]);nu(()=>{u===!1&&E.current.isPositioned&&(E.current.isPositioned=!1,h(M=>({...M,isPositioned:!1})))},[u]);const I=d.useRef(!1);nu(()=>(I.current=!0,()=>{I.current=!1}),[]),nu(()=>{if(S&&(j.current=S),k&&(C.current=k),S&&k){if(L.current)return L.current(S,k,z);z()}},[S,k,z,L,N]);const F=d.useMemo(()=>({reference:j,floating:C,setReference:x,setFloating:w}),[x,w]),A=d.useMemo(()=>({reference:S,floating:k}),[S,k]),W=d.useMemo(()=>{const M={position:n,left:0,top:0};if(!A.floating)return M;const O=Sx(A.floating,f.x),_=Sx(A.floating,f.y);return l?{...M,transform:"translate("+O+"px, "+_+"px)",...yC(A.floating)>=1.5&&{willChange:"transform"}}:{position:n,left:O,top:_}},[n,l,A.floating,f.x,f.y]);return d.useMemo(()=>({...f,update:z,refs:F,elements:A,floatingStyles:W}),[f,z,F,A,W])}const YA=e=>{function t(n){return{}.hasOwnProperty.call(n,"current")}return{name:"arrow",options:e,fn(n){const{element:r,padding:s}=typeof e=="function"?e(n):e;return r&&t(r)?r.current!=null?wx({element:r.current,padding:s}).fn(n):{}:r?wx({element:r,padding:s}).fn(n):{}}}},QA=(e,t)=>({...BA(e),options:[e,t]}),XA=(e,t)=>({...VA(e),options:[e,t]}),JA=(e,t)=>({...WA(e),options:[e,t]}),eO=(e,t)=>({...$A(e),options:[e,t]}),tO=(e,t)=>({...UA(e),options:[e,t]}),nO=(e,t)=>({...HA(e),options:[e,t]}),rO=(e,t)=>({...YA(e),options:[e,t]});var sO="Arrow",bC=d.forwardRef((e,t)=>{const{children:n,width:r=10,height:s=5,...i}=e;return o.jsx(we.svg,{...i,ref:t,width:r,height:s,viewBox:"0 0 30 10",preserveAspectRatio:"none",children:e.asChild?n:o.jsx("polygon",{points:"0,0 30,0 15,10"})})});bC.displayName=sO;var iO=bC;function wC(e){const[t,n]=d.useState(void 0);return Et(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const r=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const i=s[0];let a,l;if("borderBoxSize"in i){const c=i.borderBoxSize,u=Array.isArray(c)?c[0]:c;a=u.inlineSize,l=u.blockSize}else a=e.offsetWidth,l=e.offsetHeight;n({width:a,height:l})});return r.observe(e,{box:"border-box"}),()=>r.unobserve(e)}else n(void 0)},[e]),t}var $g="Popper",[SC,Ud]=Sr($g),[oO,kC]=SC($g),CC=e=>{const{__scopePopper:t,children:n}=e,[r,s]=d.useState(null);return o.jsx(oO,{scope:t,anchor:r,onAnchorChange:s,children:n})};CC.displayName=$g;var jC="PopperAnchor",EC=d.forwardRef((e,t)=>{const{__scopePopper:n,virtualRef:r,...s}=e,i=kC(jC,n),a=d.useRef(null),l=Ve(t,a);return d.useEffect(()=>{i.onAnchorChange((r==null?void 0:r.current)||a.current)}),r?null:o.jsx(we.div,{...s,ref:l})});EC.displayName=jC;var Ug="PopperContent",[aO,lO]=SC(Ug),NC=d.forwardRef((e,t)=>{var V,J,ce,$,Z,H;const{__scopePopper:n,side:r="bottom",sideOffset:s=0,align:i="center",alignOffset:a=0,arrowPadding:l=0,avoidCollisions:c=!0,collisionBoundary:u=[],collisionPadding:f=0,sticky:h="partial",hideWhenDetached:p=!1,updatePositionStrategy:m="optimized",onPlaced:g,...v}=e,y=kC(Ug,n),[b,x]=d.useState(null),w=Ve(t,se=>x(se)),[S,k]=d.useState(null),j=wC(S),C=(j==null?void 0:j.width)??0,E=(j==null?void 0:j.height)??0,N=r+(i!=="center"?"-"+i:""),L=typeof f=="number"?f:{top:0,right:0,bottom:0,left:0,...f},T=Array.isArray(u)?u:[u],R=T.length>0,z={padding:L,boundary:T.filter(uO),altBoundary:R},{refs:I,floatingStyles:F,placement:A,isPositioned:W,middlewareData:M}=ZA({strategy:"fixed",placement:N,whileElementsMounted:(...se)=>zA(...se,{animationFrame:m==="always"}),elements:{reference:y.anchor},middleware:[QA({mainAxis:s+E,alignmentAxis:a}),c&&XA({mainAxis:!0,crossAxis:!1,limiter:h==="partial"?JA():void 0,...z}),c&&eO({...z}),tO({...z,apply:({elements:se,rects:he,availableWidth:oe,availableHeight:Oe})=>{const{width:ct,height:It}=he.reference,Nt=se.floating.style;Nt.setProperty("--radix-popper-available-width",`${oe}px`),Nt.setProperty("--radix-popper-available-height",`${Oe}px`),Nt.setProperty("--radix-popper-anchor-width",`${ct}px`),Nt.setProperty("--radix-popper-anchor-height",`${It}px`)}}),S&&rO({element:S,padding:l}),dO({arrowWidth:C,arrowHeight:E}),p&&nO({strategy:"referenceHidden",...z})]}),[O,_]=TC(A),U=Ln(g);Et(()=>{W&&(U==null||U())},[W,U]);const q=(V=M.arrow)==null?void 0:V.x,G=(J=M.arrow)==null?void 0:J.y,D=((ce=M.arrow)==null?void 0:ce.centerOffset)!==0,[P,X]=d.useState();return Et(()=>{b&&X(window.getComputedStyle(b).zIndex)},[b]),o.jsx("div",{ref:I.setFloating,"data-radix-popper-content-wrapper":"",style:{...F,transform:W?F.transform:"translate(0, -200%)",minWidth:"max-content",zIndex:P,"--radix-popper-transform-origin":[($=M.transformOrigin)==null?void 0:$.x,(Z=M.transformOrigin)==null?void 0:Z.y].join(" "),...((H=M.hide)==null?void 0:H.referenceHidden)&&{visibility:"hidden",pointerEvents:"none"}},dir:e.dir,children:o.jsx(aO,{scope:n,placedSide:O,onArrowChange:k,arrowX:q,arrowY:G,shouldHideArrow:D,children:o.jsx(we.div,{"data-side":O,"data-align":_,...v,ref:w,style:{...v.style,animation:W?void 0:"none"}})})})});NC.displayName=Ug;var LC="PopperArrow",cO={top:"bottom",right:"left",bottom:"top",left:"right"},PC=d.forwardRef(function(t,n){const{__scopePopper:r,...s}=t,i=lO(LC,r),a=cO[i.placedSide];return o.jsx("span",{ref:i.onArrowChange,style:{position:"absolute",left:i.arrowX,top:i.arrowY,[a]:0,transformOrigin:{top:"",right:"0 0",bottom:"center 0",left:"100% 0"}[i.placedSide],transform:{top:"translateY(100%)",right:"translateY(50%) rotate(90deg) translateX(-50%)",bottom:"rotate(180deg)",left:"translateY(50%) rotate(-90deg) translateX(50%)"}[i.placedSide],visibility:i.shouldHideArrow?"hidden":void 0},children:o.jsx(iO,{...s,ref:n,style:{...s.style,display:"block"}})})});PC.displayName=LC;function uO(e){return e!==null}var dO=e=>({name:"transformOrigin",options:e,fn(t){var y,b,x;const{placement:n,rects:r,middlewareData:s}=t,a=((y=s.arrow)==null?void 0:y.centerOffset)!==0,l=a?0:e.arrowWidth,c=a?0:e.arrowHeight,[u,f]=TC(n),h={start:"0%",center:"50%",end:"100%"}[f],p=(((b=s.arrow)==null?void 0:b.x)??0)+l/2,m=(((x=s.arrow)==null?void 0:x.y)??0)+c/2;let g="",v="";return u==="bottom"?(g=a?h:`${p}px`,v=`${-c}px`):u==="top"?(g=a?h:`${p}px`,v=`${r.floating.height+c}px`):u==="right"?(g=`${-c}px`,v=a?h:`${m}px`):u==="left"&&(g=`${r.floating.width+c}px`,v=a?h:`${m}px`),{data:{x:g,y:v}}}});function TC(e){const[t,n="center"]=e.split("-");return[t,n]}var fO=CC,MC=EC,RC=NC,AC=PC,[Hd,RU]=Sr("Tooltip",[Ud]),Hg=Ud(),OC="TooltipProvider",hO=700,kx="tooltip.open",[pO,IC]=Hd(OC),DC=e=>{const{__scopeTooltip:t,delayDuration:n=hO,skipDelayDuration:r=300,disableHoverableContent:s=!1,children:i}=e,a=d.useRef(!0),l=d.useRef(!1),c=d.useRef(0);return d.useEffect(()=>{const u=c.current;return()=>window.clearTimeout(u)},[]),o.jsx(pO,{scope:t,isOpenDelayedRef:a,delayDuration:n,onOpen:d.useCallback(()=>{window.clearTimeout(c.current),a.current=!1},[]),onClose:d.useCallback(()=>{window.clearTimeout(c.current),c.current=window.setTimeout(()=>a.current=!0,r)},[r]),isPointerInTransitRef:l,onPointerInTransitChange:d.useCallback(u=>{l.current=u},[]),disableHoverableContent:s,children:i})};DC.displayName=OC;var _C="Tooltip",[AU,Wd]=Hd(_C),zp="TooltipTrigger",mO=d.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,s=Wd(zp,n),i=IC(zp,n),a=Hg(n),l=d.useRef(null),c=Ve(t,l,s.onTriggerChange),u=d.useRef(!1),f=d.useRef(!1),h=d.useCallback(()=>u.current=!1,[]);return d.useEffect(()=>()=>document.removeEventListener("pointerup",h),[h]),o.jsx(MC,{asChild:!0,...a,children:o.jsx(we.button,{"aria-describedby":s.open?s.contentId:void 0,"data-state":s.stateAttribute,...r,ref:c,onPointerMove:ge(e.onPointerMove,p=>{p.pointerType!=="touch"&&!f.current&&!i.isPointerInTransitRef.current&&(s.onTriggerEnter(),f.current=!0)}),onPointerLeave:ge(e.onPointerLeave,()=>{s.onTriggerLeave(),f.current=!1}),onPointerDown:ge(e.onPointerDown,()=>{s.open&&s.onClose(),u.current=!0,document.addEventListener("pointerup",h,{once:!0})}),onFocus:ge(e.onFocus,()=>{u.current||s.onOpen()}),onBlur:ge(e.onBlur,s.onClose),onClick:ge(e.onClick,s.onClose)})})});mO.displayName=zp;var gO="TooltipPortal",[OU,vO]=Hd(gO,{forceMount:void 0}),Bo="TooltipContent",FC=d.forwardRef((e,t)=>{const n=vO(Bo,e.__scopeTooltip),{forceMount:r=n.forceMount,side:s="top",...i}=e,a=Wd(Bo,e.__scopeTooltip);return o.jsx(Oi,{present:r||a.open,children:a.disableHoverableContent?o.jsx(zC,{side:s,...i,ref:t}):o.jsx(xO,{side:s,...i,ref:t})})}),xO=d.forwardRef((e,t)=>{const n=Wd(Bo,e.__scopeTooltip),r=IC(Bo,e.__scopeTooltip),s=d.useRef(null),i=Ve(t,s),[a,l]=d.useState(null),{trigger:c,onClose:u}=n,f=s.current,{onPointerInTransitChange:h}=r,p=d.useCallback(()=>{l(null),h(!1)},[h]),m=d.useCallback((g,v)=>{const y=g.currentTarget,b={x:g.clientX,y:g.clientY},x=kO(b,y.getBoundingClientRect()),w=CO(b,x),S=jO(v.getBoundingClientRect()),k=NO([...w,...S]);l(k),h(!0)},[h]);return d.useEffect(()=>()=>p(),[p]),d.useEffect(()=>{if(c&&f){const g=y=>m(y,f),v=y=>m(y,c);return c.addEventListener("pointerleave",g),f.addEventListener("pointerleave",v),()=>{c.removeEventListener("pointerleave",g),f.removeEventListener("pointerleave",v)}}},[c,f,m,p]),d.useEffect(()=>{if(a){const g=v=>{const y=v.target,b={x:v.clientX,y:v.clientY},x=(c==null?void 0:c.contains(y))||(f==null?void 0:f.contains(y)),w=!EO(b,a);x?p():w&&(p(),u())};return document.addEventListener("pointermove",g),()=>document.removeEventListener("pointermove",g)}},[c,f,a,u,p]),o.jsx(zC,{...e,ref:i})}),[yO,bO]=Hd(_C,{isInside:!1}),wO=gM("TooltipContent"),zC=d.forwardRef((e,t)=>{const{__scopeTooltip:n,children:r,"aria-label":s,onEscapeKeyDown:i,onPointerDownOutside:a,...l}=e,c=Wd(Bo,n),u=Hg(n),{onClose:f}=c;return d.useEffect(()=>(document.addEventListener(kx,f),()=>document.removeEventListener(kx,f)),[f]),d.useEffect(()=>{if(c.trigger){const h=p=>{const m=p.target;m!=null&&m.contains(c.trigger)&&f()};return window.addEventListener("scroll",h,{capture:!0}),()=>window.removeEventListener("scroll",h,{capture:!0})}},[c.trigger,f]),o.jsx(Fl,{asChild:!0,disableOutsidePointerEvents:!1,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:h=>h.preventDefault(),onDismiss:f,children:o.jsxs(RC,{"data-state":c.stateAttribute,...u,...l,ref:t,style:{...l.style,"--radix-tooltip-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-tooltip-content-available-width":"var(--radix-popper-available-width)","--radix-tooltip-content-available-height":"var(--radix-popper-available-height)","--radix-tooltip-trigger-width":"var(--radix-popper-anchor-width)","--radix-tooltip-trigger-height":"var(--radix-popper-anchor-height)"},children:[o.jsx(wO,{children:r}),o.jsx(yO,{scope:n,isInside:!0,children:o.jsx(FM,{id:c.contentId,role:"tooltip",children:s||r})})]})})});FC.displayName=Bo;var BC="TooltipArrow",SO=d.forwardRef((e,t)=>{const{__scopeTooltip:n,...r}=e,s=Hg(n);return bO(BC,n).isInside?null:o.jsx(AC,{...s,...r,ref:t})});SO.displayName=BC;function kO(e,t){const n=Math.abs(t.top-e.y),r=Math.abs(t.bottom-e.y),s=Math.abs(t.right-e.x),i=Math.abs(t.left-e.x);switch(Math.min(n,r,s,i)){case i:return"left";case s:return"right";case n:return"top";case r:return"bottom";default:throw new Error("unreachable")}}function CO(e,t,n=5){const r=[];switch(t){case"top":r.push({x:e.x-n,y:e.y+n},{x:e.x+n,y:e.y+n});break;case"bottom":r.push({x:e.x-n,y:e.y-n},{x:e.x+n,y:e.y-n});break;case"left":r.push({x:e.x+n,y:e.y-n},{x:e.x+n,y:e.y+n});break;case"right":r.push({x:e.x-n,y:e.y-n},{x:e.x-n,y:e.y+n});break}return r}function jO(e){const{top:t,right:n,bottom:r,left:s}=e;return[{x:s,y:t},{x:n,y:t},{x:n,y:r},{x:s,y:r}]}function EO(e,t){const{x:n,y:r}=e;let s=!1;for(let i=0,a=t.length-1;i<t.length;a=i++){const l=t[i],c=t[a],u=l.x,f=l.y,h=c.x,p=c.y;f>r!=p>r&&n<(h-u)*(r-f)/(p-f)+u&&(s=!s)}return s}function NO(e){const t=e.slice();return t.sort((n,r)=>n.x<r.x?-1:n.x>r.x?1:n.y<r.y?-1:n.y>r.y?1:0),LO(t)}function LO(e){if(e.length<=1)return e.slice();const t=[];for(let r=0;r<e.length;r++){const s=e[r];for(;t.length>=2;){const i=t[t.length-1],a=t[t.length-2];if((i.x-a.x)*(s.y-a.y)>=(i.y-a.y)*(s.x-a.x))t.pop();else break}t.push(s)}t.pop();const n=[];for(let r=e.length-1;r>=0;r--){const s=e[r];for(;n.length>=2;){const i=n[n.length-1],a=n[n.length-2];if((i.x-a.x)*(s.y-a.y)>=(i.y-a.y)*(s.x-a.x))n.pop();else break}n.push(s)}return n.pop(),t.length===1&&n.length===1&&t[0].x===n[0].x&&t[0].y===n[0].y?t:t.concat(n)}var PO=DC,VC=FC;const TO=PO,MO=d.forwardRef(({className:e,sideOffset:t=4,...n},r)=>o.jsx(VC,{ref:r,sideOffset:t,className:de("z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",e),...n}));MO.displayName=VC.displayName;var Kd=class{constructor(){this.listeners=new Set,this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.add(e),this.onSubscribe(),()=>{this.listeners.delete(e),this.onUnsubscribe()}}hasListeners(){return this.listeners.size>0}onSubscribe(){}onUnsubscribe(){}},Gd=typeof window>"u"||"Deno"in globalThis;function Bn(){}function RO(e,t){return typeof e=="function"?e(t):e}function AO(e){return typeof e=="number"&&e>=0&&e!==1/0}function OO(e,t){return Math.max(e+(t||0)-Date.now(),0)}function Bp(e,t){return typeof e=="function"?e(t):e}function IO(e,t){return typeof e=="function"?e(t):e}function Cx(e,t){const{type:n="all",exact:r,fetchStatus:s,predicate:i,queryKey:a,stale:l}=e;if(a){if(r){if(t.queryHash!==Wg(a,t.options))return!1}else if(!Sl(t.queryKey,a))return!1}if(n!=="all"){const c=t.isActive();if(n==="active"&&!c||n==="inactive"&&c)return!1}return!(typeof l=="boolean"&&t.isStale()!==l||s&&s!==t.state.fetchStatus||i&&!i(t))}function jx(e,t){const{exact:n,status:r,predicate:s,mutationKey:i}=e;if(i){if(!t.options.mutationKey)return!1;if(n){if(wl(t.options.mutationKey)!==wl(i))return!1}else if(!Sl(t.options.mutationKey,i))return!1}return!(r&&t.state.status!==r||s&&!s(t))}function Wg(e,t){return((t==null?void 0:t.queryKeyHashFn)||wl)(e)}function wl(e){return JSON.stringify(e,(t,n)=>Vp(n)?Object.keys(n).sort().reduce((r,s)=>(r[s]=n[s],r),{}):n)}function Sl(e,t){return e===t?!0:typeof e!=typeof t?!1:e&&t&&typeof e=="object"&&typeof t=="object"?Object.keys(t).every(n=>Sl(e[n],t[n])):!1}function $C(e,t){if(e===t)return e;const n=Ex(e)&&Ex(t);if(n||Vp(e)&&Vp(t)){const r=n?e:Object.keys(e),s=r.length,i=n?t:Object.keys(t),a=i.length,l=n?[]:{},c=new Set(r);let u=0;for(let f=0;f<a;f++){const h=n?f:i[f];(!n&&c.has(h)||n)&&e[h]===void 0&&t[h]===void 0?(l[h]=void 0,u++):(l[h]=$C(e[h],t[h]),l[h]===e[h]&&e[h]!==void 0&&u++)}return s===a&&u===s?e:l}return t}function Ex(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function Vp(e){if(!Nx(e))return!1;const t=e.constructor;if(t===void 0)return!0;const n=t.prototype;return!(!Nx(n)||!n.hasOwnProperty("isPrototypeOf")||Object.getPrototypeOf(e)!==Object.prototype)}function Nx(e){return Object.prototype.toString.call(e)==="[object Object]"}function DO(e){return new Promise(t=>{setTimeout(t,e)})}function _O(e,t,n){return typeof n.structuralSharing=="function"?n.structuralSharing(e,t):n.structuralSharing!==!1?$C(e,t):t}function FO(e,t,n=0){const r=[...e,t];return n&&r.length>n?r.slice(1):r}function zO(e,t,n=0){const r=[t,...e];return n&&r.length>n?r.slice(0,-1):r}var Kg=Symbol();function UC(e,t){return!e.queryFn&&(t!=null&&t.initialPromise)?()=>t.initialPromise:!e.queryFn||e.queryFn===Kg?()=>Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)):e.queryFn}var ai,us,ko,Gw,BO=(Gw=class extends Kd{constructor(){super();Re(this,ai);Re(this,us);Re(this,ko);Se(this,ko,t=>{if(!Gd&&window.addEventListener){const n=()=>t();return window.addEventListener("visibilitychange",n,!1),()=>{window.removeEventListener("visibilitychange",n)}}})}onSubscribe(){Y(this,us)||this.setEventListener(Y(this,ko))}onUnsubscribe(){var t;this.hasListeners()||((t=Y(this,us))==null||t.call(this),Se(this,us,void 0))}setEventListener(t){var n;Se(this,ko,t),(n=Y(this,us))==null||n.call(this),Se(this,us,t(r=>{typeof r=="boolean"?this.setFocused(r):this.onFocus()}))}setFocused(t){Y(this,ai)!==t&&(Se(this,ai,t),this.onFocus())}onFocus(){const t=this.isFocused();this.listeners.forEach(n=>{n(t)})}isFocused(){var t;return typeof Y(this,ai)=="boolean"?Y(this,ai):((t=globalThis.document)==null?void 0:t.visibilityState)!=="hidden"}},ai=new WeakMap,us=new WeakMap,ko=new WeakMap,Gw),HC=new BO,Co,ds,jo,qw,VO=(qw=class extends Kd{constructor(){super();Re(this,Co,!0);Re(this,ds);Re(this,jo);Se(this,jo,t=>{if(!Gd&&window.addEventListener){const n=()=>t(!0),r=()=>t(!1);return window.addEventListener("online",n,!1),window.addEventListener("offline",r,!1),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",r)}}})}onSubscribe(){Y(this,ds)||this.setEventListener(Y(this,jo))}onUnsubscribe(){var t;this.hasListeners()||((t=Y(this,ds))==null||t.call(this),Se(this,ds,void 0))}setEventListener(t){var n;Se(this,jo,t),(n=Y(this,ds))==null||n.call(this),Se(this,ds,t(this.setOnline.bind(this)))}setOnline(t){Y(this,Co)!==t&&(Se(this,Co,t),this.listeners.forEach(r=>{r(t)}))}isOnline(){return Y(this,Co)}},Co=new WeakMap,ds=new WeakMap,jo=new WeakMap,qw),Ku=new VO;function $O(){let e,t;const n=new Promise((s,i)=>{e=s,t=i});n.status="pending",n.catch(()=>{});function r(s){Object.assign(n,s),delete n.resolve,delete n.reject}return n.resolve=s=>{r({status:"fulfilled",value:s}),e(s)},n.reject=s=>{r({status:"rejected",reason:s}),t(s)},n}function UO(e){return Math.min(1e3*2**e,3e4)}function WC(e){return(e??"online")==="online"?Ku.isOnline():!0}var KC=class extends Error{constructor(e){super("CancelledError"),this.revert=e==null?void 0:e.revert,this.silent=e==null?void 0:e.silent}};function Qf(e){return e instanceof KC}function GC(e){let t=!1,n=0,r=!1,s;const i=$O(),a=v=>{var y;r||(p(new KC(v)),(y=e.abort)==null||y.call(e))},l=()=>{t=!0},c=()=>{t=!1},u=()=>HC.isFocused()&&(e.networkMode==="always"||Ku.isOnline())&&e.canRun(),f=()=>WC(e.networkMode)&&e.canRun(),h=v=>{var y;r||(r=!0,(y=e.onSuccess)==null||y.call(e,v),s==null||s(),i.resolve(v))},p=v=>{var y;r||(r=!0,(y=e.onError)==null||y.call(e,v),s==null||s(),i.reject(v))},m=()=>new Promise(v=>{var y;s=b=>{(r||u())&&v(b)},(y=e.onPause)==null||y.call(e)}).then(()=>{var v;s=void 0,r||(v=e.onContinue)==null||v.call(e)}),g=()=>{if(r)return;let v;const y=n===0?e.initialPromise:void 0;try{v=y??e.fn()}catch(b){v=Promise.reject(b)}Promise.resolve(v).then(h).catch(b=>{var j;if(r)return;const x=e.retry??(Gd?0:3),w=e.retryDelay??UO,S=typeof w=="function"?w(n,b):w,k=x===!0||typeof x=="number"&&n<x||typeof x=="function"&&x(n,b);if(t||!k){p(b);return}n++,(j=e.onFail)==null||j.call(e,n,b),DO(S).then(()=>u()?void 0:m()).then(()=>{t?p(b):g()})})};return{promise:i,cancel:a,continue:()=>(s==null||s(),i),cancelRetry:l,continueRetry:c,canStart:f,start:()=>(f()?g():m().then(g),i)}}var HO=e=>setTimeout(e,0);function WO(){let e=[],t=0,n=l=>{l()},r=l=>{l()},s=HO;const i=l=>{t?e.push(l):s(()=>{n(l)})},a=()=>{const l=e;e=[],l.length&&s(()=>{r(()=>{l.forEach(c=>{n(c)})})})};return{batch:l=>{let c;t++;try{c=l()}finally{t--,t||a()}return c},batchCalls:l=>(...c)=>{i(()=>{l(...c)})},schedule:i,setNotifyFunction:l=>{n=l},setBatchNotifyFunction:l=>{r=l},setScheduler:l=>{s=l}}}var zt=WO(),li,Zw,qC=(Zw=class{constructor(){Re(this,li)}destroy(){this.clearGcTimeout()}scheduleGc(){this.clearGcTimeout(),AO(this.gcTime)&&Se(this,li,setTimeout(()=>{this.optionalRemove()},this.gcTime))}updateGcTime(e){this.gcTime=Math.max(this.gcTime||0,e??(Gd?1/0:5*60*1e3))}clearGcTimeout(){Y(this,li)&&(clearTimeout(Y(this,li)),Se(this,li,void 0))}},li=new WeakMap,Zw),Eo,ci,xn,ui,Mt,Ml,di,Vn,Mr,Yw,KO=(Yw=class extends qC{constructor(t){super();Re(this,Vn);Re(this,Eo);Re(this,ci);Re(this,xn);Re(this,ui);Re(this,Mt);Re(this,Ml);Re(this,di);Se(this,di,!1),Se(this,Ml,t.defaultOptions),this.setOptions(t.options),this.observers=[],Se(this,ui,t.client),Se(this,xn,Y(this,ui).getQueryCache()),this.queryKey=t.queryKey,this.queryHash=t.queryHash,Se(this,Eo,qO(this.options)),this.state=t.state??Y(this,Eo),this.scheduleGc()}get meta(){return this.options.meta}get promise(){var t;return(t=Y(this,Mt))==null?void 0:t.promise}setOptions(t){this.options={...Y(this,Ml),...t},this.updateGcTime(this.options.gcTime)}optionalRemove(){!this.observers.length&&this.state.fetchStatus==="idle"&&Y(this,xn).remove(this)}setData(t,n){const r=_O(this.state.data,t,this.options);return Lt(this,Vn,Mr).call(this,{data:r,type:"success",dataUpdatedAt:n==null?void 0:n.updatedAt,manual:n==null?void 0:n.manual}),r}setState(t,n){Lt(this,Vn,Mr).call(this,{type:"setState",state:t,setStateOptions:n})}cancel(t){var r,s;const n=(r=Y(this,Mt))==null?void 0:r.promise;return(s=Y(this,Mt))==null||s.cancel(t),n?n.then(Bn).catch(Bn):Promise.resolve()}destroy(){super.destroy(),this.cancel({silent:!0})}reset(){this.destroy(),this.setState(Y(this,Eo))}isActive(){return this.observers.some(t=>IO(t.options.enabled,this)!==!1)}isDisabled(){return this.getObserversCount()>0?!this.isActive():this.options.queryFn===Kg||this.state.dataUpdateCount+this.state.errorUpdateCount===0}isStatic(){return this.getObserversCount()>0?this.observers.some(t=>Bp(t.options.staleTime,this)==="static"):!1}isStale(){return this.getObserversCount()>0?this.observers.some(t=>t.getCurrentResult().isStale):this.state.data===void 0||this.state.isInvalidated}isStaleByTime(t=0){return this.state.data===void 0?!0:t==="static"?!1:this.state.isInvalidated?!0:!OO(this.state.dataUpdatedAt,t)}onFocus(){var n;const t=this.observers.find(r=>r.shouldFetchOnWindowFocus());t==null||t.refetch({cancelRefetch:!1}),(n=Y(this,Mt))==null||n.continue()}onOnline(){var n;const t=this.observers.find(r=>r.shouldFetchOnReconnect());t==null||t.refetch({cancelRefetch:!1}),(n=Y(this,Mt))==null||n.continue()}addObserver(t){this.observers.includes(t)||(this.observers.push(t),this.clearGcTimeout(),Y(this,xn).notify({type:"observerAdded",query:this,observer:t}))}removeObserver(t){this.observers.includes(t)&&(this.observers=this.observers.filter(n=>n!==t),this.observers.length||(Y(this,Mt)&&(Y(this,di)?Y(this,Mt).cancel({revert:!0}):Y(this,Mt).cancelRetry()),this.scheduleGc()),Y(this,xn).notify({type:"observerRemoved",query:this,observer:t}))}getObserversCount(){return this.observers.length}invalidate(){this.state.isInvalidated||Lt(this,Vn,Mr).call(this,{type:"invalidate"})}fetch(t,n){var u,f,h;if(this.state.fetchStatus!=="idle"){if(this.state.data!==void 0&&(n!=null&&n.cancelRefetch))this.cancel({silent:!0});else if(Y(this,Mt))return Y(this,Mt).continueRetry(),Y(this,Mt).promise}if(t&&this.setOptions(t),!this.options.queryFn){const p=this.observers.find(m=>m.options.queryFn);p&&this.setOptions(p.options)}const r=new AbortController,s=p=>{Object.defineProperty(p,"signal",{enumerable:!0,get:()=>(Se(this,di,!0),r.signal)})},i=()=>{const p=UC(this.options,n),g=(()=>{const v={client:Y(this,ui),queryKey:this.queryKey,meta:this.meta};return s(v),v})();return Se(this,di,!1),this.options.persister?this.options.persister(p,g,this):p(g)},l=(()=>{const p={fetchOptions:n,options:this.options,queryKey:this.queryKey,client:Y(this,ui),state:this.state,fetchFn:i};return s(p),p})();(u=this.options.behavior)==null||u.onFetch(l,this),Se(this,ci,this.state),(this.state.fetchStatus==="idle"||this.state.fetchMeta!==((f=l.fetchOptions)==null?void 0:f.meta))&&Lt(this,Vn,Mr).call(this,{type:"fetch",meta:(h=l.fetchOptions)==null?void 0:h.meta});const c=p=>{var m,g,v,y;Qf(p)&&p.silent||Lt(this,Vn,Mr).call(this,{type:"error",error:p}),Qf(p)||((g=(m=Y(this,xn).config).onError)==null||g.call(m,p,this),(y=(v=Y(this,xn).config).onSettled)==null||y.call(v,this.state.data,p,this)),this.scheduleGc()};return Se(this,Mt,GC({initialPromise:n==null?void 0:n.initialPromise,fn:l.fetchFn,abort:r.abort.bind(r),onSuccess:p=>{var m,g,v,y;if(p===void 0){c(new Error(`${this.queryHash} data is undefined`));return}try{this.setData(p)}catch(b){c(b);return}(g=(m=Y(this,xn).config).onSuccess)==null||g.call(m,p,this),(y=(v=Y(this,xn).config).onSettled)==null||y.call(v,p,this.state.error,this),this.scheduleGc()},onError:c,onFail:(p,m)=>{Lt(this,Vn,Mr).call(this,{type:"failed",failureCount:p,error:m})},onPause:()=>{Lt(this,Vn,Mr).call(this,{type:"pause"})},onContinue:()=>{Lt(this,Vn,Mr).call(this,{type:"continue"})},retry:l.options.retry,retryDelay:l.options.retryDelay,networkMode:l.options.networkMode,canRun:()=>!0})),Y(this,Mt).start()}},Eo=new WeakMap,ci=new WeakMap,xn=new WeakMap,ui=new WeakMap,Mt=new WeakMap,Ml=new WeakMap,di=new WeakMap,Vn=new WeakSet,Mr=function(t){const n=r=>{switch(t.type){case"failed":return{...r,fetchFailureCount:t.failureCount,fetchFailureReason:t.error};case"pause":return{...r,fetchStatus:"paused"};case"continue":return{...r,fetchStatus:"fetching"};case"fetch":return{...r,...GO(r.data,this.options),fetchMeta:t.meta??null};case"success":return Se(this,ci,void 0),{...r,data:t.data,dataUpdateCount:r.dataUpdateCount+1,dataUpdatedAt:t.dataUpdatedAt??Date.now(),error:null,isInvalidated:!1,status:"success",...!t.manual&&{fetchStatus:"idle",fetchFailureCount:0,fetchFailureReason:null}};case"error":const s=t.error;return Qf(s)&&s.revert&&Y(this,ci)?{...Y(this,ci),fetchStatus:"idle"}:{...r,error:s,errorUpdateCount:r.errorUpdateCount+1,errorUpdatedAt:Date.now(),fetchFailureCount:r.fetchFailureCount+1,fetchFailureReason:s,fetchStatus:"idle",status:"error"};case"invalidate":return{...r,isInvalidated:!0};case"setState":return{...r,...t.state}}};this.state=n(this.state),zt.batch(()=>{this.observers.forEach(r=>{r.onQueryUpdate()}),Y(this,xn).notify({query:this,type:"updated",action:t})})},Yw);function GO(e,t){return{fetchFailureCount:0,fetchFailureReason:null,fetchStatus:WC(t.networkMode)?"fetching":"paused",...e===void 0&&{error:null,status:"pending"}}}function qO(e){const t=typeof e.initialData=="function"?e.initialData():e.initialData,n=t!==void 0,r=n?typeof e.initialDataUpdatedAt=="function"?e.initialDataUpdatedAt():e.initialDataUpdatedAt:0;return{data:t,dataUpdateCount:0,dataUpdatedAt:n?r??Date.now():0,error:null,errorUpdateCount:0,errorUpdatedAt:0,fetchFailureCount:0,fetchFailureReason:null,fetchMeta:null,isInvalidated:!1,status:n?"success":"pending",fetchStatus:"idle"}}var lr,Qw,ZO=(Qw=class extends Kd{constructor(t={}){super();Re(this,lr);this.config=t,Se(this,lr,new Map)}build(t,n,r){const s=n.queryKey,i=n.queryHash??Wg(s,n);let a=this.get(i);return a||(a=new KO({client:t,queryKey:s,queryHash:i,options:t.defaultQueryOptions(n),state:r,defaultOptions:t.getQueryDefaults(s)}),this.add(a)),a}add(t){Y(this,lr).has(t.queryHash)||(Y(this,lr).set(t.queryHash,t),this.notify({type:"added",query:t}))}remove(t){const n=Y(this,lr).get(t.queryHash);n&&(t.destroy(),n===t&&Y(this,lr).delete(t.queryHash),this.notify({type:"removed",query:t}))}clear(){zt.batch(()=>{this.getAll().forEach(t=>{this.remove(t)})})}get(t){return Y(this,lr).get(t)}getAll(){return[...Y(this,lr).values()]}find(t){const n={exact:!0,...t};return this.getAll().find(r=>Cx(n,r))}findAll(t={}){const n=this.getAll();return Object.keys(t).length>0?n.filter(r=>Cx(t,r)):n}notify(t){zt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}onFocus(){zt.batch(()=>{this.getAll().forEach(t=>{t.onFocus()})})}onOnline(){zt.batch(()=>{this.getAll().forEach(t=>{t.onOnline()})})}},lr=new WeakMap,Qw),cr,_t,fi,ur,es,Xw,YO=(Xw=class extends qC{constructor(t){super();Re(this,ur);Re(this,cr);Re(this,_t);Re(this,fi);this.mutationId=t.mutationId,Se(this,_t,t.mutationCache),Se(this,cr,[]),this.state=t.state||QO(),this.setOptions(t.options),this.scheduleGc()}setOptions(t){this.options=t,this.updateGcTime(this.options.gcTime)}get meta(){return this.options.meta}addObserver(t){Y(this,cr).includes(t)||(Y(this,cr).push(t),this.clearGcTimeout(),Y(this,_t).notify({type:"observerAdded",mutation:this,observer:t}))}removeObserver(t){Se(this,cr,Y(this,cr).filter(n=>n!==t)),this.scheduleGc(),Y(this,_t).notify({type:"observerRemoved",mutation:this,observer:t})}optionalRemove(){Y(this,cr).length||(this.state.status==="pending"?this.scheduleGc():Y(this,_t).remove(this))}continue(){var t;return((t=Y(this,fi))==null?void 0:t.continue())??this.execute(this.state.variables)}async execute(t){var i,a,l,c,u,f,h,p,m,g,v,y,b,x,w,S,k,j,C,E;const n=()=>{Lt(this,ur,es).call(this,{type:"continue"})};Se(this,fi,GC({fn:()=>this.options.mutationFn?this.options.mutationFn(t):Promise.reject(new Error("No mutationFn found")),onFail:(N,L)=>{Lt(this,ur,es).call(this,{type:"failed",failureCount:N,error:L})},onPause:()=>{Lt(this,ur,es).call(this,{type:"pause"})},onContinue:n,retry:this.options.retry??0,retryDelay:this.options.retryDelay,networkMode:this.options.networkMode,canRun:()=>Y(this,_t).canRun(this)}));const r=this.state.status==="pending",s=!Y(this,fi).canStart();try{if(r)n();else{Lt(this,ur,es).call(this,{type:"pending",variables:t,isPaused:s}),await((a=(i=Y(this,_t).config).onMutate)==null?void 0:a.call(i,t,this));const L=await((c=(l=this.options).onMutate)==null?void 0:c.call(l,t));L!==this.state.context&&Lt(this,ur,es).call(this,{type:"pending",context:L,variables:t,isPaused:s})}const N=await Y(this,fi).start();return await((f=(u=Y(this,_t).config).onSuccess)==null?void 0:f.call(u,N,t,this.state.context,this)),await((p=(h=this.options).onSuccess)==null?void 0:p.call(h,N,t,this.state.context)),await((g=(m=Y(this,_t).config).onSettled)==null?void 0:g.call(m,N,null,this.state.variables,this.state.context,this)),await((y=(v=this.options).onSettled)==null?void 0:y.call(v,N,null,t,this.state.context)),Lt(this,ur,es).call(this,{type:"success",data:N}),N}catch(N){try{throw await((x=(b=Y(this,_t).config).onError)==null?void 0:x.call(b,N,t,this.state.context,this)),await((S=(w=this.options).onError)==null?void 0:S.call(w,N,t,this.state.context)),await((j=(k=Y(this,_t).config).onSettled)==null?void 0:j.call(k,void 0,N,this.state.variables,this.state.context,this)),await((E=(C=this.options).onSettled)==null?void 0:E.call(C,void 0,N,t,this.state.context)),N}finally{Lt(this,ur,es).call(this,{type:"error",error:N})}}finally{Y(this,_t).runNext(this)}}},cr=new WeakMap,_t=new WeakMap,fi=new WeakMap,ur=new WeakSet,es=function(t){const n=r=>{switch(t.type){case"failed":return{...r,failureCount:t.failureCount,failureReason:t.error};case"pause":return{...r,isPaused:!0};case"continue":return{...r,isPaused:!1};case"pending":return{...r,context:t.context,data:void 0,failureCount:0,failureReason:null,error:null,isPaused:t.isPaused,status:"pending",variables:t.variables,submittedAt:Date.now()};case"success":return{...r,data:t.data,failureCount:0,failureReason:null,error:null,status:"success",isPaused:!1};case"error":return{...r,data:void 0,error:t.error,failureCount:r.failureCount+1,failureReason:t.error,isPaused:!1,status:"error"}}};this.state=n(this.state),zt.batch(()=>{Y(this,cr).forEach(r=>{r.onMutationUpdate(t)}),Y(this,_t).notify({mutation:this,type:"updated",action:t})})},Xw);function QO(){return{context:void 0,data:void 0,error:null,failureCount:0,failureReason:null,isPaused:!1,status:"idle",variables:void 0,submittedAt:0}}var Or,$n,Rl,Jw,XO=(Jw=class extends Kd{constructor(t={}){super();Re(this,Or);Re(this,$n);Re(this,Rl);this.config=t,Se(this,Or,new Set),Se(this,$n,new Map),Se(this,Rl,0)}build(t,n,r){const s=new YO({mutationCache:this,mutationId:++ic(this,Rl)._,options:t.defaultMutationOptions(n),state:r});return this.add(s),s}add(t){Y(this,Or).add(t);const n=Nc(t);if(typeof n=="string"){const r=Y(this,$n).get(n);r?r.push(t):Y(this,$n).set(n,[t])}this.notify({type:"added",mutation:t})}remove(t){if(Y(this,Or).delete(t)){const n=Nc(t);if(typeof n=="string"){const r=Y(this,$n).get(n);if(r)if(r.length>1){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}else r[0]===t&&Y(this,$n).delete(n)}}this.notify({type:"removed",mutation:t})}canRun(t){const n=Nc(t);if(typeof n=="string"){const r=Y(this,$n).get(n),s=r==null?void 0:r.find(i=>i.state.status==="pending");return!s||s===t}else return!0}runNext(t){var r;const n=Nc(t);if(typeof n=="string"){const s=(r=Y(this,$n).get(n))==null?void 0:r.find(i=>i!==t&&i.state.isPaused);return(s==null?void 0:s.continue())??Promise.resolve()}else return Promise.resolve()}clear(){zt.batch(()=>{Y(this,Or).forEach(t=>{this.notify({type:"removed",mutation:t})}),Y(this,Or).clear(),Y(this,$n).clear()})}getAll(){return Array.from(Y(this,Or))}find(t){const n={exact:!0,...t};return this.getAll().find(r=>jx(n,r))}findAll(t={}){return this.getAll().filter(n=>jx(t,n))}notify(t){zt.batch(()=>{this.listeners.forEach(n=>{n(t)})})}resumePausedMutations(){const t=this.getAll().filter(n=>n.state.isPaused);return zt.batch(()=>Promise.all(t.map(n=>n.continue().catch(Bn))))}},Or=new WeakMap,$n=new WeakMap,Rl=new WeakMap,Jw);function Nc(e){var t;return(t=e.options.scope)==null?void 0:t.id}function Lx(e){return{onFetch:(t,n)=>{var f,h,p,m,g;const r=t.options,s=(p=(h=(f=t.fetchOptions)==null?void 0:f.meta)==null?void 0:h.fetchMore)==null?void 0:p.direction,i=((m=t.state.data)==null?void 0:m.pages)||[],a=((g=t.state.data)==null?void 0:g.pageParams)||[];let l={pages:[],pageParams:[]},c=0;const u=async()=>{let v=!1;const y=w=>{Object.defineProperty(w,"signal",{enumerable:!0,get:()=>(t.signal.aborted?v=!0:t.signal.addEventListener("abort",()=>{v=!0}),t.signal)})},b=UC(t.options,t.fetchOptions),x=async(w,S,k)=>{if(v)return Promise.reject();if(S==null&&w.pages.length)return Promise.resolve(w);const C=(()=>{const T={client:t.client,queryKey:t.queryKey,pageParam:S,direction:k?"backward":"forward",meta:t.options.meta};return y(T),T})(),E=await b(C),{maxPages:N}=t.options,L=k?zO:FO;return{pages:L(w.pages,E,N),pageParams:L(w.pageParams,S,N)}};if(s&&i.length){const w=s==="backward",S=w?JO:Px,k={pages:i,pageParams:a},j=S(r,k);l=await x(k,j,w)}else{const w=e??i.length;do{const S=c===0?a[0]??r.initialPageParam:Px(r,l);if(c>0&&S==null)break;l=await x(l,S),c++}while(c<w)}return l};t.options.persister?t.fetchFn=()=>{var v,y;return(y=(v=t.options).persister)==null?void 0:y.call(v,u,{client:t.client,queryKey:t.queryKey,meta:t.options.meta,signal:t.signal},n)}:t.fetchFn=u}}}function Px(e,{pages:t,pageParams:n}){const r=t.length-1;return t.length>0?e.getNextPageParam(t[r],t,n[r],n):void 0}function JO(e,{pages:t,pageParams:n}){var r;return t.length>0?(r=e.getPreviousPageParam)==null?void 0:r.call(e,t[0],t,n[0],n):void 0}var st,fs,hs,No,Lo,ps,Po,To,e1,eI=(e1=class{constructor(e={}){Re(this,st);Re(this,fs);Re(this,hs);Re(this,No);Re(this,Lo);Re(this,ps);Re(this,Po);Re(this,To);Se(this,st,e.queryCache||new ZO),Se(this,fs,e.mutationCache||new XO),Se(this,hs,e.defaultOptions||{}),Se(this,No,new Map),Se(this,Lo,new Map),Se(this,ps,0)}mount(){ic(this,ps)._++,Y(this,ps)===1&&(Se(this,Po,HC.subscribe(async e=>{e&&(await this.resumePausedMutations(),Y(this,st).onFocus())})),Se(this,To,Ku.subscribe(async e=>{e&&(await this.resumePausedMutations(),Y(this,st).onOnline())})))}unmount(){var e,t;ic(this,ps)._--,Y(this,ps)===0&&((e=Y(this,Po))==null||e.call(this),Se(this,Po,void 0),(t=Y(this,To))==null||t.call(this),Se(this,To,void 0))}isFetching(e){return Y(this,st).findAll({...e,fetchStatus:"fetching"}).length}isMutating(e){return Y(this,fs).findAll({...e,status:"pending"}).length}getQueryData(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=Y(this,st).get(t.queryHash))==null?void 0:n.state.data}ensureQueryData(e){const t=this.defaultQueryOptions(e),n=Y(this,st).build(this,t),r=n.state.data;return r===void 0?this.fetchQuery(e):(e.revalidateIfStale&&n.isStaleByTime(Bp(t.staleTime,n))&&this.prefetchQuery(t),Promise.resolve(r))}getQueriesData(e){return Y(this,st).findAll(e).map(({queryKey:t,state:n})=>{const r=n.data;return[t,r]})}setQueryData(e,t,n){const r=this.defaultQueryOptions({queryKey:e}),s=Y(this,st).get(r.queryHash),i=s==null?void 0:s.state.data,a=RO(t,i);if(a!==void 0)return Y(this,st).build(this,r).setData(a,{...n,manual:!0})}setQueriesData(e,t,n){return zt.batch(()=>Y(this,st).findAll(e).map(({queryKey:r})=>[r,this.setQueryData(r,t,n)]))}getQueryState(e){var n;const t=this.defaultQueryOptions({queryKey:e});return(n=Y(this,st).get(t.queryHash))==null?void 0:n.state}removeQueries(e){const t=Y(this,st);zt.batch(()=>{t.findAll(e).forEach(n=>{t.remove(n)})})}resetQueries(e,t){const n=Y(this,st);return zt.batch(()=>(n.findAll(e).forEach(r=>{r.reset()}),this.refetchQueries({type:"active",...e},t)))}cancelQueries(e,t={}){const n={revert:!0,...t},r=zt.batch(()=>Y(this,st).findAll(e).map(s=>s.cancel(n)));return Promise.all(r).then(Bn).catch(Bn)}invalidateQueries(e,t={}){return zt.batch(()=>(Y(this,st).findAll(e).forEach(n=>{n.invalidate()}),(e==null?void 0:e.refetchType)==="none"?Promise.resolve():this.refetchQueries({...e,type:(e==null?void 0:e.refetchType)??(e==null?void 0:e.type)??"active"},t)))}refetchQueries(e,t={}){const n={...t,cancelRefetch:t.cancelRefetch??!0},r=zt.batch(()=>Y(this,st).findAll(e).filter(s=>!s.isDisabled()&&!s.isStatic()).map(s=>{let i=s.fetch(void 0,n);return n.throwOnError||(i=i.catch(Bn)),s.state.fetchStatus==="paused"?Promise.resolve():i}));return Promise.all(r).then(Bn)}fetchQuery(e){const t=this.defaultQueryOptions(e);t.retry===void 0&&(t.retry=!1);const n=Y(this,st).build(this,t);return n.isStaleByTime(Bp(t.staleTime,n))?n.fetch(t):Promise.resolve(n.state.data)}prefetchQuery(e){return this.fetchQuery(e).then(Bn).catch(Bn)}fetchInfiniteQuery(e){return e.behavior=Lx(e.pages),this.fetchQuery(e)}prefetchInfiniteQuery(e){return this.fetchInfiniteQuery(e).then(Bn).catch(Bn)}ensureInfiniteQueryData(e){return e.behavior=Lx(e.pages),this.ensureQueryData(e)}resumePausedMutations(){return Ku.isOnline()?Y(this,fs).resumePausedMutations():Promise.resolve()}getQueryCache(){return Y(this,st)}getMutationCache(){return Y(this,fs)}getDefaultOptions(){return Y(this,hs)}setDefaultOptions(e){Se(this,hs,e)}setQueryDefaults(e,t){Y(this,No).set(wl(e),{queryKey:e,defaultOptions:t})}getQueryDefaults(e){const t=[...Y(this,No).values()],n={};return t.forEach(r=>{Sl(e,r.queryKey)&&Object.assign(n,r.defaultOptions)}),n}setMutationDefaults(e,t){Y(this,Lo).set(wl(e),{mutationKey:e,defaultOptions:t})}getMutationDefaults(e){const t=[...Y(this,Lo).values()],n={};return t.forEach(r=>{Sl(e,r.mutationKey)&&Object.assign(n,r.defaultOptions)}),n}defaultQueryOptions(e){if(e._defaulted)return e;const t={...Y(this,hs).queries,...this.getQueryDefaults(e.queryKey),...e,_defaulted:!0};return t.queryHash||(t.queryHash=Wg(t.queryKey,t)),t.refetchOnReconnect===void 0&&(t.refetchOnReconnect=t.networkMode!=="always"),t.throwOnError===void 0&&(t.throwOnError=!!t.suspense),!t.networkMode&&t.persister&&(t.networkMode="offlineFirst"),t.queryFn===Kg&&(t.enabled=!1),t}defaultMutationOptions(e){return e!=null&&e._defaulted?e:{...Y(this,hs).mutations,...(e==null?void 0:e.mutationKey)&&this.getMutationDefaults(e.mutationKey),...e,_defaulted:!0}}clear(){Y(this,st).clear(),Y(this,fs).clear()}},st=new WeakMap,fs=new WeakMap,hs=new WeakMap,No=new WeakMap,Lo=new WeakMap,ps=new WeakMap,Po=new WeakMap,To=new WeakMap,e1),tI=d.createContext(void 0),nI=({client:e,children:t})=>(d.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]),o.jsx(tI.Provider,{value:e,children:t}));/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kl(){return kl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},kl.apply(this,arguments)}var vs;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(vs||(vs={}));const Tx="popstate";function rI(e){e===void 0&&(e={});function t(r,s){let{pathname:i,search:a,hash:l}=r.location;return $p("",{pathname:i,search:a,hash:l},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function n(r,s){return typeof s=="string"?s:Gu(s)}return iI(t,n,null,e)}function nt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ZC(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function sI(){return Math.random().toString(36).substr(2,8)}function Mx(e,t){return{usr:e.state,key:e.key,idx:t}}function $p(e,t,n,r){return n===void 0&&(n=null),kl({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?ea(t):t,{state:n,key:t&&t.key||r||sI()})}function Gu(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function ea(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function iI(e,t,n,r){r===void 0&&(r={});let{window:s=document.defaultView,v5Compat:i=!1}=r,a=s.history,l=vs.Pop,c=null,u=f();u==null&&(u=0,a.replaceState(kl({},a.state,{idx:u}),""));function f(){return(a.state||{idx:null}).idx}function h(){l=vs.Pop;let y=f(),b=y==null?null:y-u;u=y,c&&c({action:l,location:v.location,delta:b})}function p(y,b){l=vs.Push;let x=$p(v.location,y,b);u=f()+1;let w=Mx(x,u),S=v.createHref(x);try{a.pushState(w,"",S)}catch(k){if(k instanceof DOMException&&k.name==="DataCloneError")throw k;s.location.assign(S)}i&&c&&c({action:l,location:v.location,delta:1})}function m(y,b){l=vs.Replace;let x=$p(v.location,y,b);u=f();let w=Mx(x,u),S=v.createHref(x);a.replaceState(w,"",S),i&&c&&c({action:l,location:v.location,delta:0})}function g(y){let b=s.location.origin!=="null"?s.location.origin:s.location.href,x=typeof y=="string"?y:Gu(y);return x=x.replace(/ $/,"%20"),nt(b,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,b)}let v={get action(){return l},get location(){return e(s,a)},listen(y){if(c)throw new Error("A history only accepts one active listener");return s.addEventListener(Tx,h),c=y,()=>{s.removeEventListener(Tx,h),c=null}},createHref(y){return t(s,y)},createURL:g,encodeLocation(y){let b=g(y);return{pathname:b.pathname,search:b.search,hash:b.hash}},push:p,replace:m,go(y){return a.go(y)}};return v}var Rx;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Rx||(Rx={}));function oI(e,t,n){return n===void 0&&(n="/"),aI(e,t,n,!1)}function aI(e,t,n,r){let s=typeof t=="string"?ea(t):t,i=Vo(s.pathname||"/",n);if(i==null)return null;let a=YC(e);lI(a);let l=null;for(let c=0;l==null&&c<a.length;++c){let u=yI(i);l=vI(a[c],u,r)}return l}function YC(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let s=(i,a,l)=>{let c={relativePath:l===void 0?i.path||"":l,caseSensitive:i.caseSensitive===!0,childrenIndex:a,route:i};c.relativePath.startsWith("/")&&(nt(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=Ms([r,c.relativePath]),f=n.concat(c);i.children&&i.children.length>0&&(nt(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),YC(i.children,t,f,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:mI(u,i.index),routesMeta:f})};return e.forEach((i,a)=>{var l;if(i.path===""||!((l=i.path)!=null&&l.includes("?")))s(i,a);else for(let c of QC(i.path))s(i,a,c)}),t}function QC(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,s=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return s?[i,""]:[i];let a=QC(r.join("/")),l=[];return l.push(...a.map(c=>c===""?i:[i,c].join("/"))),s&&l.push(...a),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function lI(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:gI(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const cI=/^:[\w-]+$/,uI=3,dI=2,fI=1,hI=10,pI=-2,Ax=e=>e==="*";function mI(e,t){let n=e.split("/"),r=n.length;return n.some(Ax)&&(r+=pI),t&&(r+=dI),n.filter(s=>!Ax(s)).reduce((s,i)=>s+(cI.test(i)?uI:i===""?fI:hI),r)}function gI(e,t){return e.length===t.length&&e.slice(0,-1).every((r,s)=>r===t[s])?e[e.length-1]-t[t.length-1]:0}function vI(e,t,n){let{routesMeta:r}=e,s={},i="/",a=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,f=i==="/"?t:t.slice(i.length)||"/",h=qu({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},f),p=c.route;if(!h&&u&&n&&!r[r.length-1].route.index&&(h=qu({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},f)),!h)return null;Object.assign(s,h.params),a.push({params:s,pathname:Ms([i,h.pathname]),pathnameBase:kI(Ms([i,h.pathnameBase])),route:p}),h.pathnameBase!=="/"&&(i=Ms([i,h.pathnameBase]))}return a}function qu(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=xI(e.path,e.caseSensitive,e.end),s=t.match(n);if(!s)return null;let i=s[0],a=i.replace(/(.)\/+$/,"$1"),l=s.slice(1);return{params:r.reduce((u,f,h)=>{let{paramName:p,isOptional:m}=f;if(p==="*"){let v=l[h]||"";a=i.slice(0,i.length-v.length).replace(/(.)\/+$/,"$1")}const g=l[h];return m&&!g?u[p]=void 0:u[p]=(g||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:a,pattern:e}}function xI(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),ZC(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),r]}function yI(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ZC(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Vo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function bI(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:s=""}=typeof e=="string"?ea(e):e;return{pathname:n?n.startsWith("/")?n:wI(n,t):t,search:CI(r),hash:jI(s)}}function wI(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(s=>{s===".."?n.length>1&&n.pop():s!=="."&&n.push(s)}),n.length>1?n.join("/"):"/"}function Xf(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function SI(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gg(e,t){let n=SI(e);return t?n.map((r,s)=>s===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function qg(e,t,n,r){r===void 0&&(r=!1);let s;typeof e=="string"?s=ea(e):(s=kl({},e),nt(!s.pathname||!s.pathname.includes("?"),Xf("?","pathname","search",s)),nt(!s.pathname||!s.pathname.includes("#"),Xf("#","pathname","hash",s)),nt(!s.search||!s.search.includes("#"),Xf("#","search","hash",s)));let i=e===""||s.pathname==="",a=i?"/":s.pathname,l;if(a==null)l=n;else{let h=t.length-1;if(!r&&a.startsWith("..")){let p=a.split("/");for(;p[0]==="..";)p.shift(),h-=1;s.pathname=p.join("/")}l=h>=0?t[h]:"/"}let c=bI(s,l),u=a&&a!=="/"&&a.endsWith("/"),f=(i||a===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||f)&&(c.pathname+="/"),c}const Ms=e=>e.join("/").replace(/\/\/+/g,"/"),kI=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),CI=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,jI=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function EI(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const XC=["post","put","patch","delete"];new Set(XC);const NI=["get",...XC];new Set(NI);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cl(){return Cl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Cl.apply(this,arguments)}const qd=d.createContext(null),JC=d.createContext(null),Kr=d.createContext(null),Zd=d.createContext(null),Gr=d.createContext({outlet:null,matches:[],isDataRoute:!1}),ej=d.createContext(null);function LI(e,t){let{relative:n}=t===void 0?{}:t;ta()||nt(!1);let{basename:r,navigator:s}=d.useContext(Kr),{hash:i,pathname:a,search:l}=Yd(e,{relative:n}),c=a;return r!=="/"&&(c=a==="/"?r:Ms([r,a])),s.createHref({pathname:c,search:l,hash:i})}function ta(){return d.useContext(Zd)!=null}function Cr(){return ta()||nt(!1),d.useContext(Zd).location}function tj(e){d.useContext(Kr).static||d.useLayoutEffect(e)}function qr(){let{isDataRoute:e}=d.useContext(Gr);return e?VI():PI()}function PI(){ta()||nt(!1);let e=d.useContext(qd),{basename:t,future:n,navigator:r}=d.useContext(Kr),{matches:s}=d.useContext(Gr),{pathname:i}=Cr(),a=JSON.stringify(Gg(s,n.v7_relativeSplatPath)),l=d.useRef(!1);return tj(()=>{l.current=!0}),d.useCallback(function(u,f){if(f===void 0&&(f={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let h=qg(u,JSON.parse(a),i,f.relative==="path");e==null&&t!=="/"&&(h.pathname=h.pathname==="/"?t:Ms([t,h.pathname])),(f.replace?r.replace:r.push)(h,f.state,f)},[t,r,a,i,e])}function nj(){let{matches:e}=d.useContext(Gr),t=e[e.length-1];return t?t.params:{}}function Yd(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=d.useContext(Kr),{matches:s}=d.useContext(Gr),{pathname:i}=Cr(),a=JSON.stringify(Gg(s,r.v7_relativeSplatPath));return d.useMemo(()=>qg(e,JSON.parse(a),i,n==="path"),[e,a,i,n])}function TI(e,t){return MI(e,t)}function MI(e,t,n,r){ta()||nt(!1);let{navigator:s}=d.useContext(Kr),{matches:i}=d.useContext(Gr),a=i[i.length-1],l=a?a.params:{};a&&a.pathname;let c=a?a.pathnameBase:"/";a&&a.route;let u=Cr(),f;if(t){var h;let y=typeof t=="string"?ea(t):t;c==="/"||(h=y.pathname)!=null&&h.startsWith(c)||nt(!1),f=y}else f=u;let p=f.pathname||"/",m=p;if(c!=="/"){let y=c.replace(/^\//,"").split("/");m="/"+p.replace(/^\//,"").split("/").slice(y.length).join("/")}let g=oI(e,{pathname:m}),v=DI(g&&g.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Ms([c,s.encodeLocation?s.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?c:Ms([c,s.encodeLocation?s.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),i,n,r);return t&&v?d.createElement(Zd.Provider,{value:{location:Cl({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:vs.Pop}},v):v}function RI(){let e=BI(),t=EI(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return d.createElement(d.Fragment,null,d.createElement("h2",null,"Unexpected Application Error!"),d.createElement("h3",{style:{fontStyle:"italic"}},t),n?d.createElement("pre",{style:s},n):null,null)}const AI=d.createElement(RI,null);class OI extends d.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?d.createElement(Gr.Provider,{value:this.props.routeContext},d.createElement(ej.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function II(e){let{routeContext:t,match:n,children:r}=e,s=d.useContext(qd);return s&&s.static&&s.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=n.route.id),d.createElement(Gr.Provider,{value:t},r)}function DI(e,t,n,r){var s;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,l=(s=n)==null?void 0:s.errors;if(l!=null){let f=a.findIndex(h=>h.route.id&&(l==null?void 0:l[h.route.id])!==void 0);f>=0||nt(!1),a=a.slice(0,Math.min(a.length,f+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let h=a[f];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(u=f),h.route.id){let{loaderData:p,errors:m}=n,g=h.route.loader&&p[h.route.id]===void 0&&(!m||m[h.route.id]===void 0);if(h.route.lazy||g){c=!0,u>=0?a=a.slice(0,u+1):a=[a[0]];break}}}return a.reduceRight((f,h,p)=>{let m,g=!1,v=null,y=null;n&&(m=l&&h.route.id?l[h.route.id]:void 0,v=h.route.errorElement||AI,c&&(u<0&&p===0?(g=!0,y=null):u===p&&(g=!0,y=h.route.hydrateFallbackElement||null)));let b=t.concat(a.slice(0,p+1)),x=()=>{let w;return m?w=v:g?w=y:h.route.Component?w=d.createElement(h.route.Component,null):h.route.element?w=h.route.element:w=f,d.createElement(II,{match:h,routeContext:{outlet:f,matches:b,isDataRoute:n!=null},children:w})};return n&&(h.route.ErrorBoundary||h.route.errorElement||p===0)?d.createElement(OI,{location:n.location,revalidation:n.revalidation,component:v,error:m,children:x(),routeContext:{outlet:null,matches:b,isDataRoute:!0}}):x()},null)}var rj=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(rj||{}),Zu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Zu||{});function _I(e){let t=d.useContext(qd);return t||nt(!1),t}function FI(e){let t=d.useContext(JC);return t||nt(!1),t}function zI(e){let t=d.useContext(Gr);return t||nt(!1),t}function sj(e){let t=zI(),n=t.matches[t.matches.length-1];return n.route.id||nt(!1),n.route.id}function BI(){var e;let t=d.useContext(ej),n=FI(Zu.UseRouteError),r=sj(Zu.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function VI(){let{router:e}=_I(rj.UseNavigateStable),t=sj(Zu.UseNavigateStable),n=d.useRef(!1);return tj(()=>{n.current=!0}),d.useCallback(function(s,i){i===void 0&&(i={}),n.current&&(typeof s=="number"?e.navigate(s):e.navigate(s,Cl({fromRouteId:t},i)))},[e,t])}function $I(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function Up(e){let{to:t,replace:n,state:r,relative:s}=e;ta()||nt(!1);let{future:i,static:a}=d.useContext(Kr),{matches:l}=d.useContext(Gr),{pathname:c}=Cr(),u=qr(),f=qg(t,Gg(l,i.v7_relativeSplatPath),c,s==="path"),h=JSON.stringify(f);return d.useEffect(()=>u(JSON.parse(h),{replace:n,state:r,relative:s}),[u,h,s,n,r]),null}function Dt(e){nt(!1)}function UI(e){let{basename:t="/",children:n=null,location:r,navigationType:s=vs.Pop,navigator:i,static:a=!1,future:l}=e;ta()&&nt(!1);let c=t.replace(/^\/*/,"/"),u=d.useMemo(()=>({basename:c,navigator:i,static:a,future:Cl({v7_relativeSplatPath:!1},l)}),[c,l,i,a]);typeof r=="string"&&(r=ea(r));let{pathname:f="/",search:h="",hash:p="",state:m=null,key:g="default"}=r,v=d.useMemo(()=>{let y=Vo(f,c);return y==null?null:{location:{pathname:y,search:h,hash:p,state:m,key:g},navigationType:s}},[c,f,h,p,m,g,s]);return v==null?null:d.createElement(Kr.Provider,{value:u},d.createElement(Zd.Provider,{children:n,value:v}))}function HI(e){let{children:t,location:n}=e;return TI(Hp(t),n)}new Promise(()=>{});function Hp(e,t){t===void 0&&(t=[]);let n=[];return d.Children.forEach(e,(r,s)=>{if(!d.isValidElement(r))return;let i=[...t,s];if(r.type===d.Fragment){n.push.apply(n,Hp(r.props.children,i));return}r.type!==Dt&&nt(!1),!r.props.index||!r.props.children||nt(!1);let a={id:r.props.id||i.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Hp(r.props.children,i)),n.push(a)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Yu(){return Yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Yu.apply(this,arguments)}function ij(e,t){if(e==null)return{};var n={},r=Object.keys(e),s,i;for(i=0;i<r.length;i++)s=r[i],!(t.indexOf(s)>=0)&&(n[s]=e[s]);return n}function WI(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function KI(e,t){return e.button===0&&(!t||t==="_self")&&!WI(e)}const GI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qI=["aria-current","caseSensitive","className","end","style","to","viewTransition","children"],ZI="6";try{window.__reactRouterVersion=ZI}catch{}const YI=d.createContext({isTransitioning:!1}),QI="startTransition",Ox=Dm[QI];function XI(e){let{basename:t,children:n,future:r,window:s}=e,i=d.useRef();i.current==null&&(i.current=rI({window:s,v5Compat:!0}));let a=i.current,[l,c]=d.useState({action:a.action,location:a.location}),{v7_startTransition:u}=r||{},f=d.useCallback(h=>{u&&Ox?Ox(()=>c(h)):c(h)},[c,u]);return d.useLayoutEffect(()=>a.listen(f),[a,f]),d.useEffect(()=>$I(r),[r]),d.createElement(UI,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}const JI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",eD=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tD=d.forwardRef(function(t,n){let{onClick:r,relative:s,reloadDocument:i,replace:a,state:l,target:c,to:u,preventScrollReset:f,viewTransition:h}=t,p=ij(t,GI),{basename:m}=d.useContext(Kr),g,v=!1;if(typeof u=="string"&&eD.test(u)&&(g=u,JI))try{let w=new URL(window.location.href),S=u.startsWith("//")?new URL(w.protocol+u):new URL(u),k=Vo(S.pathname,m);S.origin===w.origin&&k!=null?u=k+S.search+S.hash:v=!0}catch{}let y=LI(u,{relative:s}),b=sD(u,{replace:a,state:l,target:c,preventScrollReset:f,relative:s,viewTransition:h});function x(w){r&&r(w),w.defaultPrevented||b(w)}return d.createElement("a",Yu({},p,{href:g||y,onClick:v||i?r:x,ref:n,target:c}))}),nD=d.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:s=!1,className:i="",end:a=!1,style:l,to:c,viewTransition:u,children:f}=t,h=ij(t,qI),p=Yd(c,{relative:h.relative}),m=Cr(),g=d.useContext(JC),{navigator:v,basename:y}=d.useContext(Kr),b=g!=null&&iD(p)&&u===!0,x=v.encodeLocation?v.encodeLocation(p).pathname:p.pathname,w=m.pathname,S=g&&g.navigation&&g.navigation.location?g.navigation.location.pathname:null;s||(w=w.toLowerCase(),S=S?S.toLowerCase():null,x=x.toLowerCase()),S&&y&&(S=Vo(S,y)||S);const k=x!=="/"&&x.endsWith("/")?x.length-1:x.length;let j=w===x||!a&&w.startsWith(x)&&w.charAt(k)==="/",C=S!=null&&(S===x||!a&&S.startsWith(x)&&S.charAt(x.length)==="/"),E={isActive:j,isPending:C,isTransitioning:b},N=j?r:void 0,L;typeof i=="function"?L=i(E):L=[i,j?"active":null,C?"pending":null,b?"transitioning":null].filter(Boolean).join(" ");let T=typeof l=="function"?l(E):l;return d.createElement(tD,Yu({},h,{"aria-current":N,className:L,ref:n,style:T,to:c,viewTransition:u}),typeof f=="function"?f(E):f)});var Wp;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Wp||(Wp={}));var Ix;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ix||(Ix={}));function rD(e){let t=d.useContext(qd);return t||nt(!1),t}function sD(e,t){let{target:n,replace:r,state:s,preventScrollReset:i,relative:a,viewTransition:l}=t===void 0?{}:t,c=qr(),u=Cr(),f=Yd(e,{relative:a});return d.useCallback(h=>{if(KI(h,n)){h.preventDefault();let p=r!==void 0?r:Gu(u)===Gu(f);c(e,{replace:p,state:s,preventScrollReset:i,relative:a,viewTransition:l})}},[u,c,f,r,s,n,e,i,a,l])}function iD(e,t){t===void 0&&(t={});let n=d.useContext(YI);n==null&&nt(!1);let{basename:r}=rD(Wp.useViewTransitionState),s=Yd(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Vo(n.currentLocation.pathname,r)||n.currentLocation.pathname,a=Vo(n.nextLocation.pathname,r)||n.nextLocation.pathname;return qu(s.pathname,a)!=null||qu(s.pathname,i)!=null}function oj(e,t){return function(){return e.apply(t,arguments)}}const{toString:oD}=Object.prototype,{getPrototypeOf:Zg}=Object,{iterator:Qd,toStringTag:aj}=Symbol,Xd=(e=>t=>{const n=oD.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),er=e=>(e=e.toLowerCase(),t=>Xd(t)===e),Jd=e=>t=>typeof t===e,{isArray:na}=Array,$o=Jd("undefined");function Wl(e){return e!==null&&!$o(e)&&e.constructor!==null&&!$o(e.constructor)&&Jt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const lj=er("ArrayBuffer");function aD(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&lj(e.buffer),t}const lD=Jd("string"),Jt=Jd("function"),cj=Jd("number"),Kl=e=>e!==null&&typeof e=="object",cD=e=>e===!0||e===!1,ru=e=>{if(Xd(e)!=="object")return!1;const t=Zg(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(aj in e)&&!(Qd in e)},uD=e=>{if(!Kl(e)||Wl(e))return!1;try{return Object.keys(e).length===0&&Object.getPrototypeOf(e)===Object.prototype}catch{return!1}},dD=er("Date"),fD=er("File"),hD=er("Blob"),pD=er("FileList"),mD=e=>Kl(e)&&Jt(e.pipe),gD=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Jt(e.append)&&((t=Xd(e))==="formdata"||t==="object"&&Jt(e.toString)&&e.toString()==="[object FormData]"))},vD=er("URLSearchParams"),[xD,yD,bD,wD]=["ReadableStream","Request","Response","Headers"].map(er),SD=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gl(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),na(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{if(Wl(e))return;const i=n?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let l;for(r=0;r<a;r++)l=i[r],t.call(null,e[l],l,e)}}function uj(e,t){if(Wl(e))return null;t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const si=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,dj=e=>!$o(e)&&e!==si;function Kp(){const{caseless:e,skipUndefined:t}=dj(this)&&this||{},n={},r=(s,i)=>{const a=e&&uj(n,i)||i;ru(n[a])&&ru(s)?n[a]=Kp(n[a],s):ru(s)?n[a]=Kp({},s):na(s)?n[a]=s.slice():(!t||!$o(s))&&(n[a]=s)};for(let s=0,i=arguments.length;s<i;s++)arguments[s]&&Gl(arguments[s],r);return n}const kD=(e,t,n,{allOwnKeys:r}={})=>(Gl(t,(s,i)=>{n&&Jt(s)?e[i]=oj(s,n):e[i]=s},{allOwnKeys:r}),e),CD=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),jD=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ED=(e,t,n,r)=>{let s,i,a;const l={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)a=s[i],(!r||r(a,e,t))&&!l[a]&&(t[a]=e[a],l[a]=!0);e=n!==!1&&Zg(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},ND=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},LD=e=>{if(!e)return null;if(na(e))return e;let t=e.length;if(!cj(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},PD=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Zg(Uint8Array)),TD=(e,t)=>{const r=(e&&e[Qd]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},MD=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},RD=er("HTMLFormElement"),AD=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Dx=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),OD=er("RegExp"),fj=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Gl(n,(s,i)=>{let a;(a=t(s,i,e))!==!1&&(r[i]=a||s)}),Object.defineProperties(e,r)},ID=e=>{fj(e,(t,n)=>{if(Jt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Jt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},DD=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return na(e)?r(e):r(String(e).split(t)),n},_D=()=>{},FD=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function zD(e){return!!(e&&Jt(e.append)&&e[aj]==="FormData"&&e[Qd])}const BD=e=>{const t=new Array(10),n=(r,s)=>{if(Kl(r)){if(t.indexOf(r)>=0)return;if(Wl(r))return r;if(!("toJSON"in r)){t[s]=r;const i=na(r)?[]:{};return Gl(r,(a,l)=>{const c=n(a,s+1);!$o(c)&&(i[l]=c)}),t[s]=void 0,i}}return r};return n(e,0)},VD=er("AsyncFunction"),$D=e=>e&&(Kl(e)||Jt(e))&&Jt(e.then)&&Jt(e.catch),hj=((e,t)=>e?setImmediate:t?((n,r)=>(si.addEventListener("message",({source:s,data:i})=>{s===si&&i===n&&r.length&&r.shift()()},!1),s=>{r.push(s),si.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",Jt(si.postMessage)),UD=typeof queueMicrotask<"u"?queueMicrotask.bind(si):typeof process<"u"&&process.nextTick||hj,HD=e=>e!=null&&Jt(e[Qd]),B={isArray:na,isArrayBuffer:lj,isBuffer:Wl,isFormData:gD,isArrayBufferView:aD,isString:lD,isNumber:cj,isBoolean:cD,isObject:Kl,isPlainObject:ru,isEmptyObject:uD,isReadableStream:xD,isRequest:yD,isResponse:bD,isHeaders:wD,isUndefined:$o,isDate:dD,isFile:fD,isBlob:hD,isRegExp:OD,isFunction:Jt,isStream:mD,isURLSearchParams:vD,isTypedArray:PD,isFileList:pD,forEach:Gl,merge:Kp,extend:kD,trim:SD,stripBOM:CD,inherits:jD,toFlatObject:ED,kindOf:Xd,kindOfTest:er,endsWith:ND,toArray:LD,forEachEntry:TD,matchAll:MD,isHTMLForm:RD,hasOwnProperty:Dx,hasOwnProp:Dx,reduceDescriptors:fj,freezeMethods:ID,toObjectSet:DD,toCamelCase:AD,noop:_D,toFiniteNumber:FD,findKey:uj,global:si,isContextDefined:dj,isSpecCompliantForm:zD,toJSONObject:BD,isAsyncFn:VD,isThenable:$D,setImmediate:hj,asap:UD,isIterable:HD};function ke(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}B.inherits(ke,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:B.toJSONObject(this.config),code:this.code,status:this.status}}});const pj=ke.prototype,mj={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{mj[e]={value:e}});Object.defineProperties(ke,mj);Object.defineProperty(pj,"isAxiosError",{value:!0});ke.from=(e,t,n,r,s,i)=>{const a=Object.create(pj);B.toFlatObject(e,a,function(f){return f!==Error.prototype},u=>u!=="isAxiosError");const l=e&&e.message?e.message:"Error",c=t==null&&e?e.code:t;return ke.call(a,l,c,n,r,s),e&&a.cause==null&&Object.defineProperty(a,"cause",{value:e,configurable:!0}),a.name=e&&e.name||"Error",i&&Object.assign(a,i),a};const WD=null;function Gp(e){return B.isPlainObject(e)||B.isArray(e)}function gj(e){return B.endsWith(e,"[]")?e.slice(0,-2):e}function _x(e,t,n){return e?e.concat(t).map(function(s,i){return s=gj(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function KD(e){return B.isArray(e)&&!e.some(Gp)}const GD=B.toFlatObject(B,{},null,function(t){return/^is[A-Z]/.test(t)});function ef(e,t,n){if(!B.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=B.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,y){return!B.isUndefined(y[v])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,a=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&B.isSpecCompliantForm(t);if(!B.isFunction(s))throw new TypeError("visitor must be a function");function u(g){if(g===null)return"";if(B.isDate(g))return g.toISOString();if(B.isBoolean(g))return g.toString();if(!c&&B.isBlob(g))throw new ke("Blob is not supported. Use a Buffer instead.");return B.isArrayBuffer(g)||B.isTypedArray(g)?c&&typeof Blob=="function"?new Blob([g]):Buffer.from(g):g}function f(g,v,y){let b=g;if(g&&!y&&typeof g=="object"){if(B.endsWith(v,"{}"))v=r?v:v.slice(0,-2),g=JSON.stringify(g);else if(B.isArray(g)&&KD(g)||(B.isFileList(g)||B.endsWith(v,"[]"))&&(b=B.toArray(g)))return v=gj(v),b.forEach(function(w,S){!(B.isUndefined(w)||w===null)&&t.append(a===!0?_x([v],S,i):a===null?v:v+"[]",u(w))}),!1}return Gp(g)?!0:(t.append(_x(y,v,i),u(g)),!1)}const h=[],p=Object.assign(GD,{defaultVisitor:f,convertValue:u,isVisitable:Gp});function m(g,v){if(!B.isUndefined(g)){if(h.indexOf(g)!==-1)throw Error("Circular reference detected in "+v.join("."));h.push(g),B.forEach(g,function(b,x){(!(B.isUndefined(b)||b===null)&&s.call(t,b,B.isString(x)?x.trim():x,v,p))===!0&&m(b,v?v.concat(x):[x])}),h.pop()}}if(!B.isObject(e))throw new TypeError("data must be an object");return m(e),t}function Fx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Yg(e,t){this._pairs=[],e&&ef(e,this,t)}const vj=Yg.prototype;vj.append=function(t,n){this._pairs.push([t,n])};vj.toString=function(t){const n=t?function(r){return t.call(this,r,Fx)}:Fx;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function qD(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+")}function xj(e,t,n){if(!t)return e;const r=n&&n.encode||qD;B.isFunction(n)&&(n={serialize:n});const s=n&&n.serialize;let i;if(s?i=s(t,n):i=B.isURLSearchParams(t)?t.toString():new Yg(t,n).toString(r),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class zx{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){B.forEach(this.handlers,function(r){r!==null&&t(r)})}}const yj={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ZD=typeof URLSearchParams<"u"?URLSearchParams:Yg,YD=typeof FormData<"u"?FormData:null,QD=typeof Blob<"u"?Blob:null,XD={isBrowser:!0,classes:{URLSearchParams:ZD,FormData:YD,Blob:QD},protocols:["http","https","file","blob","url","data"]},Qg=typeof window<"u"&&typeof document<"u",qp=typeof navigator=="object"&&navigator||void 0,JD=Qg&&(!qp||["ReactNative","NativeScript","NS"].indexOf(qp.product)<0),e4=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",t4=Qg&&window.location.href||"http://localhost",n4=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Qg,hasStandardBrowserEnv:JD,hasStandardBrowserWebWorkerEnv:e4,navigator:qp,origin:t4},Symbol.toStringTag,{value:"Module"})),At={...n4,...XD};function r4(e,t){return ef(e,new At.classes.URLSearchParams,{visitor:function(n,r,s,i){return At.isNode&&B.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)},...t})}function s4(e){return B.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function i4(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function bj(e){function t(n,r,s,i){let a=n[i++];if(a==="__proto__")return!0;const l=Number.isFinite(+a),c=i>=n.length;return a=!a&&B.isArray(s)?s.length:a,c?(B.hasOwnProp(s,a)?s[a]=[s[a],r]:s[a]=r,!l):((!s[a]||!B.isObject(s[a]))&&(s[a]=[]),t(n,r,s[a],i)&&B.isArray(s[a])&&(s[a]=i4(s[a])),!l)}if(B.isFormData(e)&&B.isFunction(e.entries)){const n={};return B.forEachEntry(e,(r,s)=>{t(s4(r),s,n,0)}),n}return null}function o4(e,t,n){if(B.isString(e))try{return(t||JSON.parse)(e),B.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const ql={transitional:yj,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=B.isObject(t);if(i&&B.isHTMLForm(t)&&(t=new FormData(t)),B.isFormData(t))return s?JSON.stringify(bj(t)):t;if(B.isArrayBuffer(t)||B.isBuffer(t)||B.isStream(t)||B.isFile(t)||B.isBlob(t)||B.isReadableStream(t))return t;if(B.isArrayBufferView(t))return t.buffer;if(B.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return r4(t,this.formSerializer).toString();if((l=B.isFileList(t))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ef(l?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),o4(t)):t}],transformResponse:[function(t){const n=this.transitional||ql.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(B.isResponse(t)||B.isReadableStream(t))return t;if(t&&B.isString(t)&&(r&&!this.responseType||s)){const a=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t,this.parseReviver)}catch(l){if(a)throw l.name==="SyntaxError"?ke.from(l,ke.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:At.classes.FormData,Blob:At.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};B.forEach(["delete","get","head","post","put","patch"],e=>{ql.headers[e]={}});const a4=B.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),l4=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(a){s=a.indexOf(":"),n=a.substring(0,s).trim().toLowerCase(),r=a.substring(s+1).trim(),!(!n||t[n]&&a4[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Bx=Symbol("internals");function ba(e){return e&&String(e).trim().toLowerCase()}function su(e){return e===!1||e==null?e:B.isArray(e)?e.map(su):String(e)}function c4(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const u4=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Jf(e,t,n,r,s){if(B.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!B.isString(t)){if(B.isString(r))return t.indexOf(r)!==-1;if(B.isRegExp(r))return r.test(t)}}function d4(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function f4(e,t){const n=B.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,a){return this[r].call(this,t,s,i,a)},configurable:!0})})}class en{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(l,c,u){const f=ba(c);if(!f)throw new Error("header name must be a non-empty string");const h=B.findKey(s,f);(!h||s[h]===void 0||u===!0||u===void 0&&s[h]!==!1)&&(s[h||c]=su(l))}const a=(l,c)=>B.forEach(l,(u,f)=>i(u,f,c));if(B.isPlainObject(t)||t instanceof this.constructor)a(t,n);else if(B.isString(t)&&(t=t.trim())&&!u4(t))a(l4(t),n);else if(B.isObject(t)&&B.isIterable(t)){let l={},c,u;for(const f of t){if(!B.isArray(f))throw TypeError("Object iterator must return a key-value pair");l[u=f[0]]=(c=l[u])?B.isArray(c)?[...c,f[1]]:[c,f[1]]:f[1]}a(l,n)}else t!=null&&i(n,t,r);return this}get(t,n){if(t=ba(t),t){const r=B.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return c4(s);if(B.isFunction(n))return n.call(this,s,r);if(B.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ba(t),t){const r=B.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Jf(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(a){if(a=ba(a),a){const l=B.findKey(r,a);l&&(!n||Jf(r,r[l],l,n))&&(delete r[l],s=!0)}}return B.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||Jf(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return B.forEach(this,(s,i)=>{const a=B.findKey(r,i);if(a){n[a]=su(s),delete n[i];return}const l=t?d4(i):String(i).trim();l!==i&&delete n[i],n[l]=su(s),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return B.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&B.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Bx]=this[Bx]={accessors:{}}).accessors,s=this.prototype;function i(a){const l=ba(a);r[l]||(f4(s,a),r[l]=!0)}return B.isArray(t)?t.forEach(i):i(t),this}}en.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);B.reduceDescriptors(en.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});B.freezeMethods(en);function eh(e,t){const n=this||ql,r=t||n,s=en.from(r.headers);let i=r.data;return B.forEach(e,function(l){i=l.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function wj(e){return!!(e&&e.__CANCEL__)}function ra(e,t,n){ke.call(this,e??"canceled",ke.ERR_CANCELED,t,n),this.name="CanceledError"}B.inherits(ra,ke,{__CANCEL__:!0});function Sj(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new ke("Request failed with status code "+n.status,[ke.ERR_BAD_REQUEST,ke.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function h4(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function p4(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),f=r[i];a||(a=u),n[s]=c,r[s]=u;let h=i,p=0;for(;h!==s;)p+=n[h++],h=h%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),u-a<t)return;const m=f&&u-f;return m?Math.round(p*1e3/m):void 0}}function m4(e,t){let n=0,r=1e3/t,s,i;const a=(u,f=Date.now())=>{n=f,s=null,i&&(clearTimeout(i),i=null),e(...u)};return[(...u)=>{const f=Date.now(),h=f-n;h>=r?a(u,f):(s=u,i||(i=setTimeout(()=>{i=null,a(s)},r-h)))},()=>s&&a(s)]}const Qu=(e,t,n=3)=>{let r=0;const s=p4(50,250);return m4(i=>{const a=i.loaded,l=i.lengthComputable?i.total:void 0,c=a-r,u=s(c),f=a<=l;r=a;const h={loaded:a,total:l,progress:l?a/l:void 0,bytes:c,rate:u||void 0,estimated:u&&l&&f?(l-a)/u:void 0,event:i,lengthComputable:l!=null,[t?"download":"upload"]:!0};e(h)},n)},Vx=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},$x=e=>(...t)=>B.asap(()=>e(...t)),g4=At.hasStandardBrowserEnv?((e,t)=>n=>(n=new URL(n,At.origin),e.protocol===n.protocol&&e.host===n.host&&(t||e.port===n.port)))(new URL(At.origin),At.navigator&&/(msie|trident)/i.test(At.navigator.userAgent)):()=>!0,v4=At.hasStandardBrowserEnv?{write(e,t,n,r,s,i,a){if(typeof document>"u")return;const l=[`${e}=${encodeURIComponent(t)}`];B.isNumber(n)&&l.push(`expires=${new Date(n).toUTCString()}`),B.isString(r)&&l.push(`path=${r}`),B.isString(s)&&l.push(`domain=${s}`),i===!0&&l.push("secure"),B.isString(a)&&l.push(`SameSite=${a}`),document.cookie=l.join("; ")},read(e){if(typeof document>"u")return null;const t=document.cookie.match(new RegExp("(?:^|; )"+e+"=([^;]*)"));return t?decodeURIComponent(t[1]):null},remove(e){this.write(e,"",Date.now()-864e5,"/")}}:{write(){},read(){return null},remove(){}};function x4(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function y4(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function kj(e,t,n){let r=!x4(t);return e&&(r||n==!1)?y4(e,t):t}const Ux=e=>e instanceof en?{...e}:e;function Ni(e,t){t=t||{};const n={};function r(u,f,h,p){return B.isPlainObject(u)&&B.isPlainObject(f)?B.merge.call({caseless:p},u,f):B.isPlainObject(f)?B.merge({},f):B.isArray(f)?f.slice():f}function s(u,f,h,p){if(B.isUndefined(f)){if(!B.isUndefined(u))return r(void 0,u,h,p)}else return r(u,f,h,p)}function i(u,f){if(!B.isUndefined(f))return r(void 0,f)}function a(u,f){if(B.isUndefined(f)){if(!B.isUndefined(u))return r(void 0,u)}else return r(void 0,f)}function l(u,f,h){if(h in t)return r(u,f);if(h in e)return r(void 0,u)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:l,headers:(u,f,h)=>s(Ux(u),Ux(f),h,!0)};return B.forEach(Object.keys({...e,...t}),function(f){const h=c[f]||s,p=h(e[f],t[f],f);B.isUndefined(p)&&h!==l||(n[f]=p)}),n}const Cj=e=>{const t=Ni({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:i,headers:a,auth:l}=t;if(t.headers=a=en.from(a),t.url=xj(kj(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),l&&a.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):""))),B.isFormData(n)){if(At.hasStandardBrowserEnv||At.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(B.isFunction(n.getHeaders)){const c=n.getHeaders(),u=["content-type","content-length"];Object.entries(c).forEach(([f,h])=>{u.includes(f.toLowerCase())&&a.set(f,h)})}}if(At.hasStandardBrowserEnv&&(r&&B.isFunction(r)&&(r=r(t)),r||r!==!1&&g4(t.url))){const c=s&&i&&v4.read(i);c&&a.set(s,c)}return t},b4=typeof XMLHttpRequest<"u",w4=b4&&function(e){return new Promise(function(n,r){const s=Cj(e);let i=s.data;const a=en.from(s.headers).normalize();let{responseType:l,onUploadProgress:c,onDownloadProgress:u}=s,f,h,p,m,g;function v(){m&&m(),g&&g(),s.cancelToken&&s.cancelToken.unsubscribe(f),s.signal&&s.signal.removeEventListener("abort",f)}let y=new XMLHttpRequest;y.open(s.method.toUpperCase(),s.url,!0),y.timeout=s.timeout;function b(){if(!y)return;const w=en.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),k={data:!l||l==="text"||l==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:w,config:e,request:y};Sj(function(C){n(C),v()},function(C){r(C),v()},k),y=null}"onloadend"in y?y.onloadend=b:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(b)},y.onabort=function(){y&&(r(new ke("Request aborted",ke.ECONNABORTED,e,y)),y=null)},y.onerror=function(S){const k=S&&S.message?S.message:"Network Error",j=new ke(k,ke.ERR_NETWORK,e,y);j.event=S||null,r(j),y=null},y.ontimeout=function(){let S=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const k=s.transitional||yj;s.timeoutErrorMessage&&(S=s.timeoutErrorMessage),r(new ke(S,k.clarifyTimeoutError?ke.ETIMEDOUT:ke.ECONNABORTED,e,y)),y=null},i===void 0&&a.setContentType(null),"setRequestHeader"in y&&B.forEach(a.toJSON(),function(S,k){y.setRequestHeader(k,S)}),B.isUndefined(s.withCredentials)||(y.withCredentials=!!s.withCredentials),l&&l!=="json"&&(y.responseType=s.responseType),u&&([p,g]=Qu(u,!0),y.addEventListener("progress",p)),c&&y.upload&&([h,m]=Qu(c),y.upload.addEventListener("progress",h),y.upload.addEventListener("loadend",m)),(s.cancelToken||s.signal)&&(f=w=>{y&&(r(!w||w.type?new ra(null,e,y):w),y.abort(),y=null)},s.cancelToken&&s.cancelToken.subscribe(f),s.signal&&(s.signal.aborted?f():s.signal.addEventListener("abort",f)));const x=h4(s.url);if(x&&At.protocols.indexOf(x)===-1){r(new ke("Unsupported protocol "+x+":",ke.ERR_BAD_REQUEST,e));return}y.send(i||null)})},S4=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const i=function(u){if(!s){s=!0,l();const f=u instanceof Error?u:this.reason;r.abort(f instanceof ke?f:new ra(f instanceof Error?f.message:f))}};let a=t&&setTimeout(()=>{a=null,i(new ke(`timeout ${t} of ms exceeded`,ke.ETIMEDOUT))},t);const l=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=r;return c.unsubscribe=()=>B.asap(l),c}},k4=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},C4=async function*(e,t){for await(const n of j4(e))yield*k4(n,t)},j4=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},Hx=(e,t,n,r)=>{const s=C4(e,t);let i=0,a,l=c=>{a||(a=!0,r&&r(c))};return new ReadableStream({async pull(c){try{const{done:u,value:f}=await s.next();if(u){l(),c.close();return}let h=f.byteLength;if(n){let p=i+=h;n(p)}c.enqueue(new Uint8Array(f))}catch(u){throw l(u),u}},cancel(c){return l(c),s.return()}},{highWaterMark:2})},Wx=64*1024,{isFunction:Lc}=B,E4=(({Request:e,Response:t})=>({Request:e,Response:t}))(B.global),{ReadableStream:Kx,TextEncoder:Gx}=B.global,qx=(e,...t)=>{try{return!!e(...t)}catch{return!1}},N4=e=>{e=B.merge.call({skipUndefined:!0},E4,e);const{fetch:t,Request:n,Response:r}=e,s=t?Lc(t):typeof fetch=="function",i=Lc(n),a=Lc(r);if(!s)return!1;const l=s&&Lc(Kx),c=s&&(typeof Gx=="function"?(g=>v=>g.encode(v))(new Gx):async g=>new Uint8Array(await new n(g).arrayBuffer())),u=i&&l&&qx(()=>{let g=!1;const v=new n(At.origin,{body:new Kx,method:"POST",get duplex(){return g=!0,"half"}}).headers.has("Content-Type");return g&&!v}),f=a&&l&&qx(()=>B.isReadableStream(new r("").body)),h={stream:f&&(g=>g.body)};s&&["text","arrayBuffer","blob","formData","stream"].forEach(g=>{!h[g]&&(h[g]=(v,y)=>{let b=v&&v[g];if(b)return b.call(v);throw new ke(`Response type '${g}' is not supported`,ke.ERR_NOT_SUPPORT,y)})});const p=async g=>{if(g==null)return 0;if(B.isBlob(g))return g.size;if(B.isSpecCompliantForm(g))return(await new n(At.origin,{method:"POST",body:g}).arrayBuffer()).byteLength;if(B.isArrayBufferView(g)||B.isArrayBuffer(g))return g.byteLength;if(B.isURLSearchParams(g)&&(g=g+""),B.isString(g))return(await c(g)).byteLength},m=async(g,v)=>{const y=B.toFiniteNumber(g.getContentLength());return y??p(v)};return async g=>{let{url:v,method:y,data:b,signal:x,cancelToken:w,timeout:S,onDownloadProgress:k,onUploadProgress:j,responseType:C,headers:E,withCredentials:N="same-origin",fetchOptions:L}=Cj(g),T=t||fetch;C=C?(C+"").toLowerCase():"text";let R=S4([x,w&&w.toAbortSignal()],S),z=null;const I=R&&R.unsubscribe&&(()=>{R.unsubscribe()});let F;try{if(j&&u&&y!=="get"&&y!=="head"&&(F=await m(E,b))!==0){let U=new n(v,{method:"POST",body:b,duplex:"half"}),q;if(B.isFormData(b)&&(q=U.headers.get("content-type"))&&E.setContentType(q),U.body){const[G,D]=Vx(F,Qu($x(j)));b=Hx(U.body,Wx,G,D)}}B.isString(N)||(N=N?"include":"omit");const A=i&&"credentials"in n.prototype,W={...L,signal:R,method:y.toUpperCase(),headers:E.normalize().toJSON(),body:b,duplex:"half",credentials:A?N:void 0};z=i&&new n(v,W);let M=await(i?T(z,L):T(v,W));const O=f&&(C==="stream"||C==="response");if(f&&(k||O&&I)){const U={};["status","statusText","headers"].forEach(P=>{U[P]=M[P]});const q=B.toFiniteNumber(M.headers.get("content-length")),[G,D]=k&&Vx(q,Qu($x(k),!0))||[];M=new r(Hx(M.body,Wx,G,()=>{D&&D(),I&&I()}),U)}C=C||"text";let _=await h[B.findKey(h,C)||"text"](M,g);return!O&&I&&I(),await new Promise((U,q)=>{Sj(U,q,{data:_,headers:en.from(M.headers),status:M.status,statusText:M.statusText,config:g,request:z})})}catch(A){throw I&&I(),A&&A.name==="TypeError"&&/Load failed|fetch/i.test(A.message)?Object.assign(new ke("Network Error",ke.ERR_NETWORK,g,z),{cause:A.cause||A}):ke.from(A,A&&A.code,g,z)}}},L4=new Map,jj=e=>{let t=e&&e.env||{};const{fetch:n,Request:r,Response:s}=t,i=[r,s,n];let a=i.length,l=a,c,u,f=L4;for(;l--;)c=i[l],u=f.get(c),u===void 0&&f.set(c,u=l?new Map:N4(t)),f=u;return u};jj();const Xg={http:WD,xhr:w4,fetch:{get:jj}};B.forEach(Xg,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Zx=e=>`- ${e}`,P4=e=>B.isFunction(e)||e===null||e===!1;function T4(e,t){e=B.isArray(e)?e:[e];const{length:n}=e;let r,s;const i={};for(let a=0;a<n;a++){r=e[a];let l;if(s=r,!P4(r)&&(s=Xg[(l=String(r)).toLowerCase()],s===void 0))throw new ke(`Unknown adapter '${l}'`);if(s&&(B.isFunction(s)||(s=s.get(t))))break;i[l||"#"+a]=s}if(!s){const a=Object.entries(i).map(([c,u])=>`adapter ${c} `+(u===!1?"is not supported by the environment":"is not available in the build"));let l=n?a.length>1?`since :
`+a.map(Zx).join(`
`):" "+Zx(a[0]):"as no adapter specified";throw new ke("There is no suitable adapter to dispatch the request "+l,"ERR_NOT_SUPPORT")}return s}const Ej={getAdapter:T4,adapters:Xg};function th(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ra(null,e)}function Yx(e){return th(e),e.headers=en.from(e.headers),e.data=eh.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ej.getAdapter(e.adapter||ql.adapter,e)(e).then(function(r){return th(e),r.data=eh.call(e,e.transformResponse,r),r.headers=en.from(r.headers),r},function(r){return wj(r)||(th(e),r&&r.response&&(r.response.data=eh.call(e,e.transformResponse,r.response),r.response.headers=en.from(r.response.headers))),Promise.reject(r)})}const Nj="1.13.2",tf={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{tf[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Qx={};tf.transitional=function(t,n,r){function s(i,a){return"[Axios v"+Nj+"] Transitional option '"+i+"'"+a+(r?". "+r:"")}return(i,a,l)=>{if(t===!1)throw new ke(s(a," has been removed"+(n?" in "+n:"")),ke.ERR_DEPRECATED);return n&&!Qx[a]&&(Qx[a]=!0,console.warn(s(a," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,a,l):!0}};tf.spelling=function(t){return(n,r)=>(console.warn(`${r} is likely a misspelling of ${t}`),!0)};function M4(e,t,n){if(typeof e!="object")throw new ke("options must be an object",ke.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],a=t[i];if(a){const l=e[i],c=l===void 0||a(l,i,e);if(c!==!0)throw new ke("option "+i+" must be "+c,ke.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new ke("Unknown option "+i,ke.ERR_BAD_OPTION)}}const iu={assertOptions:M4,validators:tf},sr=iu.validators;class mi{constructor(t){this.defaults=t||{},this.interceptors={request:new zx,response:new zx}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s={};Error.captureStackTrace?Error.captureStackTrace(s):s=new Error;const i=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?i&&!String(r.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+i):r.stack=i}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Ni(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&iu.assertOptions(r,{silentJSONParsing:sr.transitional(sr.boolean),forcedJSONParsing:sr.transitional(sr.boolean),clarifyTimeoutError:sr.transitional(sr.boolean)},!1),s!=null&&(B.isFunction(s)?n.paramsSerializer={serialize:s}:iu.assertOptions(s,{encode:sr.function,serialize:sr.function},!0)),n.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?n.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:n.allowAbsoluteUrls=!0),iu.assertOptions(n,{baseUrl:sr.spelling("baseURL"),withXsrfToken:sr.spelling("withXSRFToken")},!0),n.method=(n.method||this.defaults.method||"get").toLowerCase();let a=i&&B.merge(i.common,i[n.method]);i&&B.forEach(["delete","get","head","post","put","patch","common"],g=>{delete i[g]}),n.headers=en.concat(a,i);const l=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,l.unshift(v.fulfilled,v.rejected))});const u=[];this.interceptors.response.forEach(function(v){u.push(v.fulfilled,v.rejected)});let f,h=0,p;if(!c){const g=[Yx.bind(this),void 0];for(g.unshift(...l),g.push(...u),p=g.length,f=Promise.resolve(n);h<p;)f=f.then(g[h++],g[h++]);return f}p=l.length;let m=n;for(;h<p;){const g=l[h++],v=l[h++];try{m=g(m)}catch(y){v.call(this,y);break}}try{f=Yx.call(this,m)}catch(g){return Promise.reject(g)}for(h=0,p=u.length;h<p;)f=f.then(u[h++],u[h++]);return f}getUri(t){t=Ni(this.defaults,t);const n=kj(t.baseURL,t.url,t.allowAbsoluteUrls);return xj(n,t.params,t.paramsSerializer)}}B.forEach(["delete","get","head","options"],function(t){mi.prototype[t]=function(n,r){return this.request(Ni(r||{},{method:t,url:n,data:(r||{}).data}))}});B.forEach(["post","put","patch"],function(t){function n(r){return function(i,a,l){return this.request(Ni(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}mi.prototype[t]=n(),mi.prototype[t+"Form"]=n(!0)});class Jg{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const a=new Promise(l=>{r.subscribe(l),i=l}).then(s);return a.cancel=function(){r.unsubscribe(i)},a},t(function(i,a,l){r.reason||(r.reason=new ra(i,a,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Jg(function(s){t=s}),cancel:t}}}function R4(e){return function(n){return e.apply(null,n)}}function A4(e){return B.isObject(e)&&e.isAxiosError===!0}const Zp={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511,WebServerIsDown:521,ConnectionTimedOut:522,OriginIsUnreachable:523,TimeoutOccurred:524,SslHandshakeFailed:525,InvalidSslCertificate:526};Object.entries(Zp).forEach(([e,t])=>{Zp[t]=e});function Lj(e){const t=new mi(e),n=oj(mi.prototype.request,t);return B.extend(n,mi.prototype,t,{allOwnKeys:!0}),B.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Lj(Ni(e,s))},n}const He=Lj(ql);He.Axios=mi;He.CanceledError=ra;He.CancelToken=Jg;He.isCancel=wj;He.VERSION=Nj;He.toFormData=ef;He.AxiosError=ke;He.Cancel=He.CanceledError;He.all=function(t){return Promise.all(t)};He.spread=R4;He.isAxiosError=A4;He.mergeConfig=Ni;He.AxiosHeaders=en;He.formToJSON=e=>bj(B.isHTMLForm(e)?new FormData(e):e);He.getAdapter=Ej.getAdapter;He.HttpStatusCode=Zp;He.default=He;const nf=e=>e?e.replace(/\/+$/,""):"",Zl=nf("https://api.barqibazar.org/franchise/api"),e0=nf("https://api.barqibazar.org/wallet"),Yl=nf("https://api.barqibazar.org"),Xx=nf("https://api.barqibazar.org/media/api"),Di=(e,t)=>e?t?`${e}${t.startsWith("/")?"":"/"}${t}`:e:t||"",fe=He.create({headers:{"Content-Type":"application/json"}});fe.interceptors.request.use(e=>{const t=localStorage.getItem("access_token");return t&&(e.headers.Authorization=`Bearer ${t}`),e},e=>Promise.reject(e));fe.interceptors.response.use(e=>e,async e=>{var n;const t=e.config;if(((n=e.response)==null?void 0:n.status)===401&&!t._retry){t._retry=!0;const r=localStorage.getItem("refresh_token");if(r)try{const s=await He.post(Di(Yl,"/users/refresh"),{refresh:r}),{access:i}=s.data.data;return localStorage.setItem("access_token",i),t.headers.Authorization=`Bearer ${i}`,fe(t)}catch(s){return localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user"),window.location.href="/login",Promise.reject(s)}}return Promise.reject(e)});const nh={login:async(e,t)=>(await fe.post(Di(Yl,"/auth/login/"),{email:e,password:t})).data,logout:async()=>{localStorage.removeItem("access_token"),localStorage.removeItem("refresh_token"),localStorage.removeItem("user")},getCurrentUser:()=>{const e=localStorage.getItem("user");return e?JSON.parse(e):null},isAuthenticated:()=>!!localStorage.getItem("access_token")},Pj=d.createContext(null),Tj=()=>{const e=d.useContext(Pj);if(!e)throw new Error("useAuth must be used within an AuthProvider");return e},O4=({children:e})=>{const[t,n]=d.useState(null),[r,s]=d.useState(!0),i="https://api.barqibazar.org";d.useEffect(()=>{const u=nh.getCurrentUser();u&&nh.isAuthenticated()&&n(u),s(!1)},[]);const c={user:t,isLoading:r,isAuthenticated:!!t,isAdmin:()=>(t==null?void 0:t.role)==="SUPER_ADMIN",isFranchiseAdmin:()=>(t==null?void 0:t.role)==="FRANCHISE_ADMIN",login:async(u,f)=>{const p=await(await fetch(i+"/iam/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:u,password:f})})).json();if(p.status==="success"){const{access:m,refresh:g,role:v,email:y}=p.data;localStorage.setItem("access_token",m),localStorage.setItem("refresh_token",g);const b={email:y,role:v};return localStorage.setItem("user",JSON.stringify(b)),n(b),{success:!0}}throw new Error(p.message||"Login failed")},logout:()=>{nh.logout(),n(null)}};return o.jsx(Pj.Provider,{value:c,children:e})},$s=()=>Tj(),I4=({size:e="md",className:t})=>{const n={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8",xl:"w-12 h-12"};return o.jsx(fn,{className:de("animate-spin text-primary",n[e],t)})},D4=({message:e="Loading..."})=>o.jsx("div",{className:"fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center",children:o.jsxs("div",{className:"flex flex-col items-center gap-3",children:[o.jsx(I4,{size:"xl"}),o.jsx("p",{className:"text-muted-foreground font-medium",children:e})]})}),In=({children:e,allowedRoles:t})=>{const{isAuthenticated:n,isLoading:r,user:s}=$s(),i=Cr();return r?o.jsx(D4,{message:"Checking authentication..."}):n?t&&t.length>0&&!t.includes(s==null?void 0:s.role)?o.jsx(Up,{to:"/dashboard",replace:!0}):e:o.jsx(Up,{to:"/login",state:{from:i},replace:!0})},_4=Mg("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),ne=d.forwardRef(({className:e,variant:t,size:n,asChild:r=!1,...s},i)=>{const a=r?pM:"button";return o.jsx(a,{className:de(_4({variant:t,size:n,className:e})),ref:i,...s})});ne.displayName="Button";const be=d.forwardRef(({className:e,type:t,...n},r)=>o.jsx("input",{type:t,className:de("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:r,...n}));be.displayName="Input";var F4="Label",Mj=d.forwardRef((e,t)=>o.jsx(we.label,{...e,ref:t,onMouseDown:n=>{var s;n.target.closest("button, input, select, textarea")||((s=e.onMouseDown)==null||s.call(e,n),!n.defaultPrevented&&n.detail>1&&n.preventDefault())}}));Mj.displayName=F4;var Rj=Mj;const z4=Mg("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),me=d.forwardRef(({className:e,...t},n)=>o.jsx(Rj,{ref:n,className:de(z4(),e),...t}));me.displayName=Rj.displayName;const Yp="/Franchises/assets/barqibazarimg-D4VaA-8Y.jpeg",Aj=d.createContext({});function B4(e){const t=d.useRef(null);return t.current===null&&(t.current=e()),t.current}const V4=typeof window<"u",$4=V4?d.useLayoutEffect:d.useEffect,t0=d.createContext(null);function n0(e,t){e.indexOf(t)===-1&&e.push(t)}function Xu(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}const br=(e,t,n)=>n>t?t:n<e?e:n;let rf=()=>{},Uo=()=>{};const Ds={},Oj=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);function Ij(e){return typeof e=="object"&&e!==null}const Dj=e=>/^0[^.\s]+$/u.test(e);function _j(e){let t;return()=>(t===void 0&&(t=e()),t)}const jn=e=>e,U4=(e,t)=>n=>t(e(n)),Ql=(...e)=>e.reduce(U4),jl=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r};class r0{constructor(){this.subscriptions=[]}add(t){return n0(this.subscriptions,t),()=>Xu(this.subscriptions,t)}notify(t,n,r){const s=this.subscriptions.length;if(s)if(s===1)this.subscriptions[0](t,n,r);else for(let i=0;i<s;i++){const a=this.subscriptions[i];a&&a(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const tn=e=>e*1e3,Sn=e=>e/1e3;function Fj(e,t){return t?e*(1e3/t):0}const zj=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,H4=1e-7,W4=12;function K4(e,t,n,r,s){let i,a,l=0;do a=t+(n-t)/2,i=zj(a,r,s)-e,i>0?n=a:t=a;while(Math.abs(i)>H4&&++l<W4);return a}function Xl(e,t,n,r){if(e===t&&n===r)return jn;const s=i=>K4(i,0,1,e,n);return i=>i===0||i===1?i:zj(s(i),t,r)}const Bj=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Vj=e=>t=>1-e(1-t),$j=Xl(.33,1.53,.69,.99),s0=Vj($j),Uj=Bj(s0),Hj=e=>e>=1?1:(e*=2)<1?.5*s0(e):.5*(2-Math.pow(2,-10*(e-1))),i0=e=>1-Math.sin(Math.acos(e)),Wj=Vj(i0),Kj=Bj(i0),G4=Xl(.42,0,1,1),q4=Xl(0,0,.58,1),Gj=Xl(.42,0,.58,1),Z4=e=>Array.isArray(e)&&typeof e[0]!="number",qj=e=>Array.isArray(e)&&typeof e[0]=="number",Jx={linear:jn,easeIn:G4,easeInOut:Gj,easeOut:q4,circIn:i0,circInOut:Kj,circOut:Wj,backIn:s0,backInOut:Uj,backOut:$j,anticipate:Hj},Y4=e=>typeof e=="string",ey=e=>{if(qj(e)){Uo(e.length===4,"Cubic bezier arrays must contain four numerical values.","cubic-bezier-length");const[t,n,r,s]=e;return Xl(t,n,r,s)}else if(Y4(e))return Uo(Jx[e]!==void 0,`Invalid easing type '${e}'`,"invalid-easing-type"),Jx[e];return e},Pc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"],ty={value:null,addProjectionMetrics:null};function Q4(e,t){let n=new Set,r=new Set,s=!1,i=!1;const a=new WeakSet;let l={delta:0,timestamp:0,isProcessing:!1},c=0;function u(h){a.has(h)&&(f.schedule(h),e()),c++,h(l)}const f={schedule:(h,p=!1,m=!1)=>{const v=m&&s?n:r;return p&&a.add(h),v.add(h),h},cancel:h=>{r.delete(h),a.delete(h)},process:h=>{if(l=h,s){i=!0;return}s=!0;const p=n;n=r,r=p,n.forEach(u),t&&ty.value&&ty.value.frameloop[t].push(c),c=0,n.clear(),s=!1,i&&(i=!1,f.process(h))}};return f}const X4=40;function Zj(e,t){let n=!1,r=!0;const s={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,a=Pc.reduce((w,S)=>(w[S]=Q4(i,t?S:void 0),w),{}),{setup:l,read:c,resolveKeyframes:u,preUpdate:f,update:h,preRender:p,render:m,postRender:g}=a,v=()=>{const w=Ds.useManualTiming,S=w?s.timestamp:performance.now();n=!1,w||(s.delta=r?1e3/60:Math.max(Math.min(S-s.timestamp,X4),1)),s.timestamp=S,s.isProcessing=!0,l.process(s),c.process(s),u.process(s),f.process(s),h.process(s),p.process(s),m.process(s),g.process(s),s.isProcessing=!1,n&&t&&(r=!1,e(v))},y=()=>{n=!0,r=!0,s.isProcessing||e(v)};return{schedule:Pc.reduce((w,S)=>{const k=a[S];return w[S]=(j,C=!1,E=!1)=>(n||y(),k.schedule(j,C,E)),w},{}),cancel:w=>{for(let S=0;S<Pc.length;S++)a[Pc[S]].cancel(w)},state:s,steps:a}}const{schedule:Ue,cancel:_s,state:bt,steps:rh}=Zj(typeof requestAnimationFrame<"u"?requestAnimationFrame:jn,!0);let ou;function J4(){ou=void 0}const Bt={now:()=>(ou===void 0&&Bt.set(bt.isProcessing||Ds.useManualTiming?bt.timestamp:performance.now()),ou),set:e=>{ou=e,queueMicrotask(J4)}},Yj=e=>t=>typeof t=="string"&&t.startsWith(e),Qj=Yj("--"),e_=Yj("var(--"),o0=e=>e_(e)?t_.test(e.split("/*")[0].trim()):!1,t_=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function ny(e){return typeof e!="string"?!1:e.split("/*")[0].includes("var(--")}const sa={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},El={...sa,transform:e=>br(0,1,e)},Tc={...sa,default:1},Ga=e=>Math.round(e*1e5)/1e5,a0=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function n_(e){return e==null}const r_=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,l0=(e,t)=>n=>!!(typeof n=="string"&&r_.test(n)&&n.startsWith(e)||t&&!n_(n)&&Object.prototype.hasOwnProperty.call(n,t)),Xj=(e,t,n)=>r=>{if(typeof r!="string")return r;const[s,i,a,l]=r.match(a0);return{[e]:parseFloat(s),[t]:parseFloat(i),[n]:parseFloat(a),alpha:l!==void 0?parseFloat(l):1}},s_=e=>br(0,255,e),sh={...sa,transform:e=>Math.round(s_(e))},ii={test:l0("rgb","red"),parse:Xj("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+sh.transform(e)+", "+sh.transform(t)+", "+sh.transform(n)+", "+Ga(El.transform(r))+")"};function i_(e){let t="",n="",r="",s="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),s=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),s=e.substring(4,5),t+=t,n+=n,r+=r,s+=s),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Qp={test:l0("#"),parse:i_,transform:ii.transform},Jl=e=>({test:t=>typeof t=="string"&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),ts=Jl("deg"),xr=Jl("%"),le=Jl("px"),o_=Jl("vh"),a_=Jl("vw"),ry={...xr,parse:e=>xr.parse(e)/100,transform:e=>xr.transform(e*100)},ao={test:l0("hsl","hue"),parse:Xj("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+xr.transform(Ga(t))+", "+xr.transform(Ga(n))+", "+Ga(El.transform(r))+")"},at={test:e=>ii.test(e)||Qp.test(e)||ao.test(e),parse:e=>ii.test(e)?ii.parse(e):ao.test(e)?ao.parse(e):Qp.parse(e),transform:e=>typeof e=="string"?e:e.hasOwnProperty("red")?ii.transform(e):ao.transform(e),getAnimatableNone:e=>{const t=at.parse(e);return t.alpha=0,at.transform(t)}},l_=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function c_(e){var t,n;return isNaN(e)&&typeof e=="string"&&(((t=e.match(a0))==null?void 0:t.length)||0)+(((n=e.match(l_))==null?void 0:n.length)||0)>0}const Jj="number",e2="color",u_="var",d_="var(",sy="${}",f_=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ho(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},s=[];let i=0;const l=t.replace(f_,c=>(at.test(c)?(r.color.push(i),s.push(e2),n.push(at.parse(c))):c.startsWith(d_)?(r.var.push(i),s.push(u_),n.push(c)):(r.number.push(i),s.push(Jj),n.push(parseFloat(c))),++i,sy)).split(sy);return{values:n,split:l,indexes:r,types:s}}function h_(e){return Ho(e).values}function t2({split:e,types:t}){const n=e.length;return r=>{let s="";for(let i=0;i<n;i++)if(s+=e[i],r[i]!==void 0){const a=t[i];a===Jj?s+=Ga(r[i]):a===e2?s+=at.transform(r[i]):s+=r[i]}return s}}function p_(e){return t2(Ho(e))}const m_=e=>typeof e=="number"?0:at.test(e)?at.getAnimatableNone(e):e,g_=(e,t)=>typeof e=="number"?t!=null&&t.trim().endsWith("/")?e:0:m_(e);function v_(e){const t=Ho(e);return t2(t)(t.values.map((r,s)=>g_(r,t.split[s])))}const qn={test:c_,parse:h_,createTransformer:p_,getAnimatableNone:v_};function ih(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function x_({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let s=0,i=0,a=0;if(!t)s=i=a=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;s=ih(c,l,e+1/3),i=ih(c,l,e),a=ih(c,l,e-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(a*255),alpha:r}}function Ju(e,t){return n=>n>0?t:e}const Ye=(e,t,n)=>e+(t-e)*n,oh=(e,t,n)=>{const r=e*e,s=n*(t*t-r)+r;return s<0?0:Math.sqrt(s)},y_=[Qp,ii,ao],b_=e=>y_.find(t=>t.test(e));function iy(e){const t=b_(e);if(rf(!!t,`'${e}' is not an animatable color. Use the equivalent color code instead.`,"color-not-animatable"),!t)return!1;let n=t.parse(e);return t===ao&&(n=x_(n)),n}const oy=(e,t)=>{const n=iy(e),r=iy(t);if(!n||!r)return Ju(e,t);const s={...n};return i=>(s.red=oh(n.red,r.red,i),s.green=oh(n.green,r.green,i),s.blue=oh(n.blue,r.blue,i),s.alpha=Ye(n.alpha,r.alpha,i),ii.transform(s))},Xp=new Set(["none","hidden"]);function w_(e,t){return Xp.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}function S_(e,t){return n=>Ye(e,t,n)}function c0(e){return typeof e=="number"?S_:typeof e=="string"?o0(e)?Ju:at.test(e)?oy:j_:Array.isArray(e)?n2:typeof e=="object"?at.test(e)?oy:k_:Ju}function n2(e,t){const n=[...e],r=n.length,s=e.map((i,a)=>c0(i)(i,t[a]));return i=>{for(let a=0;a<r;a++)n[a]=s[a](i);return n}}function k_(e,t){const n={...e,...t},r={};for(const s in n)e[s]!==void 0&&t[s]!==void 0&&(r[s]=c0(e[s])(e[s],t[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}}function C_(e,t){const n=[],r={color:0,var:0,number:0};for(let s=0;s<t.values.length;s++){const i=t.types[s],a=e.indexes[i][r[i]],l=e.values[a]??0;n[s]=l,r[i]++}return n}const j_=(e,t)=>{const n=qn.createTransformer(t),r=Ho(e),s=Ho(t);return r.indexes.var.length===s.indexes.var.length&&r.indexes.color.length===s.indexes.color.length&&r.indexes.number.length>=s.indexes.number.length?Xp.has(e)&&!s.values.length||Xp.has(t)&&!r.values.length?w_(e,t):Ql(n2(C_(r,s),s.values),n):(rf(!0,`Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`,"complex-values-different"),Ju(e,t))};function r2(e,t,n){return typeof e=="number"&&typeof t=="number"&&typeof n=="number"?Ye(e,t,n):c0(e)(e,t)}const E_=e=>{const t=({timestamp:n})=>e(n);return{start:(n=!0)=>Ue.update(t,n),stop:()=>_s(t),now:()=>bt.isProcessing?bt.timestamp:Bt.now()}},s2=(e,t,n=10)=>{let r="";const s=Math.max(Math.round(t/n),2);for(let i=0;i<s;i++)r+=Math.round(e(i/(s-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},ed=2e4;function u0(e){let t=0;const n=50;let r=e.next(t);for(;!r.done&&t<ed;)t+=n,r=e.next(t);return t>=ed?1/0:t}function N_(e,t=100,n){const r=n({...e,keyframes:[0,t]}),s=Math.min(u0(r),ed);return{type:"keyframes",ease:i=>r.next(s*i).value/t,duration:Sn(s)}}const Je={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Jp(e,t){return e*Math.sqrt(1-t*t)}const L_=12;function P_(e,t,n){let r=n;for(let s=1;s<L_;s++)r=r-e(r)/t(r);return r}const ah=.001;function T_({duration:e=Je.duration,bounce:t=Je.bounce,velocity:n=Je.velocity,mass:r=Je.mass}){let s,i;rf(e<=tn(Je.maxDuration),"Spring duration must be 10 seconds or less","spring-duration-limit");let a=1-t;a=br(Je.minDamping,Je.maxDamping,a),e=br(Je.minDuration,Je.maxDuration,Sn(e)),a<1?(s=u=>{const f=u*a,h=f*e,p=f-n,m=Jp(u,a),g=Math.exp(-h);return ah-p/m*g},i=u=>{const h=u*a*e,p=h*n+n,m=Math.pow(a,2)*Math.pow(u,2)*e,g=Math.exp(-h),v=Jp(Math.pow(u,2),a);return(-s(u)+ah>0?-1:1)*((p-m)*g)/v}):(s=u=>{const f=Math.exp(-u*e),h=(u-n)*e+1;return-ah+f*h},i=u=>{const f=Math.exp(-u*e),h=(n-u)*(e*e);return f*h});const l=5/e,c=P_(s,i,l);if(e=tn(e),isNaN(c))return{stiffness:Je.stiffness,damping:Je.damping,duration:e};{const u=Math.pow(c,2)*r;return{stiffness:u,damping:a*2*Math.sqrt(r*u),duration:e}}}const M_=["duration","bounce"],R_=["stiffness","damping","mass"];function ay(e,t){return t.some(n=>e[n]!==void 0)}function A_(e){let t={velocity:Je.velocity,stiffness:Je.stiffness,damping:Je.damping,mass:Je.mass,isResolvedFromDuration:!1,...e};if(!ay(e,R_)&&ay(e,M_))if(t.velocity=0,e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(n*1.2),s=r*r,i=2*br(.05,1,1-(e.bounce||0))*Math.sqrt(s);t={...t,mass:Je.mass,stiffness:s,damping:i}}else{const n=T_({...e,velocity:0});t={...t,...n,mass:Je.mass},t.isResolvedFromDuration=!0}return t}function td(e=Je.visualDuration,t=Je.bounce){const n=typeof e!="object"?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:s}=n;const i=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],l={done:!1,value:i},{stiffness:c,damping:u,mass:f,duration:h,velocity:p,isResolvedFromDuration:m}=A_({...n,velocity:-Sn(n.velocity||0)}),g=p||0,v=u/(2*Math.sqrt(c*f)),y=a-i,b=Sn(Math.sqrt(c/f)),x=Math.abs(y)<5;r||(r=x?Je.restSpeed.granular:Je.restSpeed.default),s||(s=x?Je.restDelta.granular:Je.restDelta.default);let w,S,k,j,C,E;if(v<1)k=Jp(b,v),j=(g+v*b*y)/k,w=L=>{const T=Math.exp(-v*b*L);return a-T*(j*Math.sin(k*L)+y*Math.cos(k*L))},C=v*b*j+y*k,E=v*b*y-j*k,S=L=>Math.exp(-v*b*L)*(C*Math.sin(k*L)+E*Math.cos(k*L));else if(v===1){w=T=>a-Math.exp(-b*T)*(y+(g+b*y)*T);const L=g+b*y;S=T=>Math.exp(-b*T)*(b*L*T-g)}else{const L=b*Math.sqrt(v*v-1);w=I=>{const F=Math.exp(-v*b*I),A=Math.min(L*I,300);return a-F*((g+v*b*y)*Math.sinh(A)+L*y*Math.cosh(A))/L};const T=(g+v*b*y)/L,R=v*b*T-y*L,z=v*b*y-T*L;S=I=>{const F=Math.exp(-v*b*I),A=Math.min(L*I,300);return F*(R*Math.sinh(A)+z*Math.cosh(A))}}const N={calculatedDuration:m&&h||null,velocity:L=>tn(S(L)),next:L=>{if(!m&&v<1){const R=Math.exp(-v*b*L),z=Math.sin(k*L),I=Math.cos(k*L),F=a-R*(j*z+y*I),A=tn(R*(C*z+E*I));return l.done=Math.abs(A)<=r&&Math.abs(a-F)<=s,l.value=l.done?a:F,l}const T=w(L);if(m)l.done=L>=h;else{const R=tn(S(L));l.done=Math.abs(R)<=r&&Math.abs(a-T)<=s}return l.value=l.done?a:T,l},toString:()=>{const L=Math.min(u0(N),ed),T=s2(R=>N.next(L*R).value,L,30);return L+"ms "+T},toTransition:()=>{}};return N}td.applyToOptions=e=>{const t=N_(e,100,td);return e.ease=t.ease,e.duration=tn(t.duration),e.type="keyframes",e};const O_=5;function i2(e,t,n){const r=Math.max(t-O_,0);return Fj(n-e(r),t-r)}function em({keyframes:e,velocity:t=0,power:n=.8,timeConstant:r=325,bounceDamping:s=10,bounceStiffness:i=500,modifyTarget:a,min:l,max:c,restDelta:u=.5,restSpeed:f}){const h=e[0],p={done:!1,value:h},m=E=>l!==void 0&&E<l||c!==void 0&&E>c,g=E=>l===void 0?c:c===void 0||Math.abs(l-E)<Math.abs(c-E)?l:c;let v=n*t;const y=h+v,b=a===void 0?y:a(y);b!==y&&(v=b-h);const x=E=>-v*Math.exp(-E/r),w=E=>b+x(E),S=E=>{const N=x(E),L=w(E);p.done=Math.abs(N)<=u,p.value=p.done?b:L};let k,j;const C=E=>{m(p.value)&&(k=E,j=td({keyframes:[p.value,g(p.value)],velocity:i2(w,E,p.value),damping:s,stiffness:i,restDelta:u,restSpeed:f}))};return C(0),{calculatedDuration:null,next:E=>{let N=!1;return!j&&k===void 0&&(N=!0,S(E),C(E)),k!==void 0&&E>=k?j.next(E-k):(!N&&S(E),p)}}}function I_(e,t,n){const r=[],s=n||Ds.mix||r2,i=e.length-1;for(let a=0;a<i;a++){let l=s(e[a],e[a+1]);if(t){const c=Array.isArray(t)?t[a]||jn:t;l=Ql(c,l)}r.push(l)}return r}function D_(e,t,{clamp:n=!0,ease:r,mixer:s}={}){const i=e.length;if(Uo(i===t.length,"Both input and output ranges must be the same length","range-length"),i===1)return()=>t[0];if(i===2&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const l=I_(t,r,s),c=l.length,u=f=>{if(a&&f<e[0])return t[0];let h=0;if(c>1)for(;h<e.length-2&&!(f<e[h+1]);h++);const p=jl(e[h],e[h+1],f);return l[h](p)};return n?f=>u(br(e[0],e[i-1],f)):u}function __(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const s=jl(0,t,r);e.push(Ye(n,1,s))}}function F_(e){const t=[0];return __(t,e.length-1),t}function z_(e,t){return e.map(n=>n*t)}function B_(e,t){return e.map(()=>t||Gj).splice(0,e.length-1)}function qa({duration:e=300,keyframes:t,times:n,ease:r="easeInOut"}){const s=Z4(r)?r.map(ey):ey(r),i={done:!1,value:t[0]},a=z_(n&&n.length===t.length?n:F_(t),e),l=D_(a,t,{ease:Array.isArray(s)?s:B_(t,s)});return{calculatedDuration:e,next:c=>(i.value=l(c),i.done=c>=e,i)}}const V_=e=>e!==null;function sf(e,{repeat:t,repeatType:n="loop"},r,s=1){const i=e.filter(V_),l=s<0||t&&n!=="loop"&&t%2===1?0:i.length-1;return!l||r===void 0?i[l]:r}const $_={decay:em,inertia:em,tween:qa,keyframes:qa,spring:td};function o2(e){typeof e.type=="string"&&(e.type=$_[e.type])}class d0{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const U_=e=>e/100;class nd extends d0{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.delayState={done:!1,value:void 0},this.stop=()=>{var r,s;const{motionValue:n}=this.options;n&&n.updatedAt!==Bt.now()&&this.tick(Bt.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(s=(r=this.options).onStop)==null||s.call(r))},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;o2(t);const{type:n=qa,repeat:r=0,repeatDelay:s=0,repeatType:i,velocity:a=0}=t;let{keyframes:l}=t;const c=n||qa;c!==qa&&typeof l[0]!="number"&&(this.mixKeyframes=Ql(U_,r2(l[0],l[1])),l=[0,100]);const u=c({...t,keyframes:l});i==="mirror"&&(this.mirroredGenerator=c({...t,keyframes:[...l].reverse(),velocity:-a})),u.calculatedDuration===null&&(u.calculatedDuration=u0(u));const{calculatedDuration:f}=u;this.calculatedDuration=f,this.resolvedDuration=f+s,this.totalDuration=this.resolvedDuration*(r+1)-s,this.generator=u}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:r,totalDuration:s,mixKeyframes:i,mirroredGenerator:a,resolvedDuration:l,calculatedDuration:c}=this;if(this.startTime===null)return r.next(0);const{delay:u=0,keyframes:f,repeat:h,repeatType:p,repeatDelay:m,type:g,onUpdate:v,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-s/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const b=this.currentTime-u*(this.playbackSpeed>=0?1:-1),x=this.playbackSpeed>=0?b<0:b>s;this.currentTime=Math.max(b,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=s);let w=this.currentTime,S=r;if(h){const E=Math.min(this.currentTime,s)/l;let N=Math.floor(E),L=E%1;!L&&E>=1&&(L=1),L===1&&N--,N=Math.min(N,h+1),!!(N%2)&&(p==="reverse"?(L=1-L,m&&(L-=m/l)):p==="mirror"&&(S=a)),w=br(0,1,L)*l}let k;x?(this.delayState.value=f[0],k=this.delayState):k=S.next(w),i&&!x&&(k.value=i(k.value));let{done:j}=k;!x&&c!==null&&(j=this.playbackSpeed>=0?this.currentTime>=s:this.currentTime<=0);const C=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&j);return C&&g!==em&&(k.value=sf(f,this.options,y,this.speed)),v&&v(k.value),C&&this.finish(),k}then(t,n){return this.finished.then(t,n)}get duration(){return Sn(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Sn(t)}get time(){return Sn(this.currentTime)}set time(t){t=tn(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=t,this.tick(t))}getGeneratorVelocity(){const t=this.currentTime;if(t<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(t);const n=this.generator.next(t).value;return i2(r=>this.generator.next(r).value,t,n)}get speed(){return this.playbackSpeed}set speed(t){const n=this.playbackSpeed!==t;n&&this.driver&&this.updateTime(Bt.now()),this.playbackSpeed=t,n&&this.driver&&(this.time=Sn(this.currentTime))}play(){var s,i;if(this.isStopped)return;const{driver:t=E_,startTime:n}=this.options;this.driver||(this.driver=t(a=>this.tick(a))),(i=(s=this.options).onPlay)==null||i.call(s);const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=n??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bt.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var t,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(t=this.options).onComplete)==null||n.call(t)}cancel(){var t,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(t=this.options).onCancel)==null||n.call(t)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),t.observe(this)}}function H_(e){for(let t=1;t<e.length;t++)e[t]??(e[t]=e[t-1])}const oi=e=>e*180/Math.PI,tm=e=>{const t=oi(Math.atan2(e[1],e[0]));return nm(t)},W_={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:tm,rotateZ:tm,skewX:e=>oi(Math.atan(e[1])),skewY:e=>oi(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},nm=e=>(e=e%360,e<0&&(e+=360),e),ly=tm,cy=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),uy=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),K_={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cy,scaleY:uy,scale:e=>(cy(e)+uy(e))/2,rotateX:e=>nm(oi(Math.atan2(e[6],e[5]))),rotateY:e=>nm(oi(Math.atan2(-e[2],e[0]))),rotateZ:ly,rotate:ly,skewX:e=>oi(Math.atan(e[4])),skewY:e=>oi(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function rm(e){return e.includes("scale")?1:0}function sm(e,t){if(!e||e==="none")return rm(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,s;if(n)r=K_,s=n;else{const l=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=W_,s=l}if(!s)return rm(t);const i=r[t],a=s[1].split(",").map(q_);return typeof i=="function"?i(a):a[i]}const G_=(e,t)=>{const{transform:n="none"}=getComputedStyle(e);return sm(n,t)};function q_(e){return parseFloat(e.trim())}const ia=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],oa=new Set(ia),dy=e=>e===sa||e===le,Z_=new Set(["x","y","z"]),Y_=ia.filter(e=>!Z_.has(e));function Q_(e){const t=[];return Y_.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t}const xs={width:({x:e},{paddingLeft:t="0",paddingRight:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},height:({y:e},{paddingTop:t="0",paddingBottom:n="0",boxSizing:r})=>{const s=e.max-e.min;return r==="border-box"?s:s-parseFloat(t)-parseFloat(n)},top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:(e,{transform:t})=>sm(t,"x"),y:(e,{transform:t})=>sm(t,"y")};xs.translateX=xs.x;xs.translateY=xs.y;const gi=new Set;let im=!1,om=!1,am=!1;function a2(){if(om){const e=Array.from(gi).filter(r=>r.needsMeasurement),t=new Set(e.map(r=>r.element)),n=new Map;t.forEach(r=>{const s=Q_(r);s.length&&(n.set(r,s),r.render())}),e.forEach(r=>r.measureInitialState()),t.forEach(r=>{r.render();const s=n.get(r);s&&s.forEach(([i,a])=>{var l;(l=r.getValue(i))==null||l.set(a)})}),e.forEach(r=>r.measureEndState()),e.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}om=!1,im=!1,gi.forEach(e=>e.complete(am)),gi.clear()}function l2(){gi.forEach(e=>{e.readKeyframes(),e.needsMeasurement&&(om=!0)})}function X_(){am=!0,l2(),a2(),am=!1}class f0{constructor(t,n,r,s,i,a=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...t],this.onComplete=n,this.name=r,this.motionValue=s,this.element=i,this.isAsync=a}scheduleResolve(){this.state="scheduled",this.isAsync?(gi.add(this),im||(im=!0,Ue.read(l2),Ue.resolveKeyframes(a2))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:t,name:n,element:r,motionValue:s}=this;if(t[0]===null){const i=s==null?void 0:s.get(),a=t[t.length-1];if(i!==void 0)t[0]=i;else if(r&&n){const l=r.readValue(n,a);l!=null&&(t[0]=l)}t[0]===void 0&&(t[0]=a),s&&i===void 0&&s.set(t[0])}H_(t)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(t=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,t),gi.delete(this)}cancel(){this.state==="scheduled"&&(gi.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const J_=e=>e.startsWith("--");function c2(e,t,n){J_(t)?e.style.setProperty(t,n):e.style[t]=n}const e3={};function u2(e,t){const n=_j(e);return()=>e3[t]??n()}const t3=u2(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),d2=u2(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Oa=([e,t,n,r])=>`cubic-bezier(${e}, ${t}, ${n}, ${r})`,fy={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Oa([0,.65,.55,1]),circOut:Oa([.55,0,1,.45]),backIn:Oa([.31,.01,.66,-.59]),backOut:Oa([.33,1.53,.69,.99])};function f2(e,t){if(e)return typeof e=="function"?d2()?s2(e,t):"ease-out":qj(e)?Oa(e):Array.isArray(e)?e.map(n=>f2(n,t)||fy.easeOut):fy[e]}function n3(e,t,n,{delay:r=0,duration:s=300,repeat:i=0,repeatType:a="loop",ease:l="easeOut",times:c}={},u=void 0){const f={[t]:n};c&&(f.offset=c);const h=f2(l,s);Array.isArray(h)&&(f.easing=h);const p={delay:r,duration:s,easing:Array.isArray(h)?"linear":h,fill:"both",iterations:i+1,direction:a==="reverse"?"alternate":"normal"};return u&&(p.pseudoElement=u),e.animate(f,p)}function h2(e){return typeof e=="function"&&"applyToOptions"in e}function r3({type:e,...t}){return h2(e)&&d2()?e.applyToOptions(t):(t.duration??(t.duration=300),t.ease??(t.ease="easeOut"),t)}class p2 extends d0{constructor(t){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!t)return;const{element:n,name:r,keyframes:s,pseudoElement:i,allowFlatten:a=!1,finalKeyframe:l,onComplete:c}=t;this.isPseudoElement=!!i,this.allowFlatten=a,this.options=t,Uo(typeof t.type!="string",`Mini animate() doesn't support "type" as a string.`,"mini-spring");const u=r3(t);this.animation=n3(n,r,s,u,i),u.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!i){const f=sf(s,this.options,l,this.speed);this.updateMotionValue&&this.updateMotionValue(f),c2(n,r,f),this.animation.cancel()}c==null||c(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var t,n;(n=(t=this.animation).finish)==null||n.call(t)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:t}=this;t==="idle"||t==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,r,s;const t=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(t!=null&&t.isConnected)&&((s=(r=this.animation).commitStyles)==null||s.call(r))}get duration(){var n,r;const t=((r=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:r.call(n).duration)||0;return Sn(Number(t))}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+Sn(t)}get time(){return Sn(Number(this.animation.currentTime)||0)}set time(t){const n=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=tn(t),n&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(t){t<0&&(this.finishedTime=null),this.animation.playbackRate=t}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(t){this.manualStartTime=this.animation.startTime=t}attachTimeline({timeline:t,rangeStart:n,rangeEnd:r,observe:s}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,t&&t3()?(this.animation.timeline=t,n&&(this.animation.rangeStart=n),r&&(this.animation.rangeEnd=r),jn):s(this)}}const m2={anticipate:Hj,backInOut:Uj,circInOut:Kj};function s3(e){return e in m2}function i3(e){typeof e.ease=="string"&&s3(e.ease)&&(e.ease=m2[e.ease])}const lh=10;class o3 extends p2{constructor(t){i3(t),o2(t),super(t),t.startTime!==void 0&&t.autoplay!==!1&&(this.startTime=t.startTime),this.options=t}updateMotionValue(t){const{motionValue:n,onUpdate:r,onComplete:s,element:i,...a}=this.options;if(!n)return;if(t!==void 0){n.set(t);return}const l=new nd({...a,autoplay:!1}),c=Math.max(lh,Bt.now()-this.startTime),u=br(0,lh,c-lh),f=l.sample(c).value,{name:h}=this.options;i&&h&&c2(i,h,f),n.setWithVelocity(l.sample(Math.max(0,c-u)).value,f,u),l.stop()}}const hy=(e,t)=>t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&(qn.test(e)||e==="0")&&!e.startsWith("url("));function a3(e){const t=e[0];if(e.length===1)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}function l3(e,t,n,r){const s=e[0];if(s===null)return!1;if(t==="display"||t==="visibility")return!0;const i=e[e.length-1],a=hy(s,t),l=hy(i,t);return rf(a===l,`You are trying to animate ${t} from "${s}" to "${i}". "${a?i:s}" is not an animatable value.`,"value-not-animatable"),!a||!l?!1:a3(e)||(n==="spring"||h2(n))&&r}function lm(e){e.duration=0,e.type="keyframes"}const g2=new Set(["opacity","clipPath","filter","transform"]),c3=/^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;function u3(e){for(let t=0;t<e.length;t++)if(typeof e[t]=="string"&&c3.test(e[t]))return!0;return!1}const d3=new Set(["color","backgroundColor","outlineColor","fill","stroke","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor"]),f3=_j(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function h3(e){var h;const{motionValue:t,name:n,repeatDelay:r,repeatType:s,damping:i,type:a,keyframes:l}=e;if(!(((h=t==null?void 0:t.owner)==null?void 0:h.current)instanceof HTMLElement))return!1;const{onUpdate:u,transformTemplate:f}=t.owner.getProps();return f3()&&n&&(g2.has(n)||d3.has(n)&&u3(l))&&(n!=="transform"||!f)&&!u&&!r&&s!=="mirror"&&i!==0&&a!=="inertia"}const p3=40;class m3 extends d0{constructor({autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:s=0,repeatDelay:i=0,repeatType:a="loop",keyframes:l,name:c,motionValue:u,element:f,...h}){var g;super(),this.stop=()=>{var v,y;this._animation&&(this._animation.stop(),(v=this.stopTimeline)==null||v.call(this)),(y=this.keyframeResolver)==null||y.cancel()},this.createdAt=Bt.now();const p={autoplay:t,delay:n,type:r,repeat:s,repeatDelay:i,repeatType:a,name:c,motionValue:u,element:f,...h},m=(f==null?void 0:f.KeyframeResolver)||f0;this.keyframeResolver=new m(l,(v,y,b)=>this.onKeyframesResolved(v,y,p,!b),c,u,f),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(t,n,r,s){var b,x;this.keyframeResolver=void 0;const{name:i,type:a,velocity:l,delay:c,isHandoff:u,onUpdate:f}=r;this.resolvedAt=Bt.now();let h=!0;l3(t,i,a,l)||(h=!1,(Ds.instantAnimations||!c)&&(f==null||f(sf(t,r,n))),t[0]=t[t.length-1],lm(r),r.repeat=0);const m={startTime:s?this.resolvedAt?this.resolvedAt-this.createdAt>p3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...r,keyframes:t},g=h&&!u&&h3(m),v=(x=(b=m.motionValue)==null?void 0:b.owner)==null?void 0:x.current;let y;if(g)try{y=new o3({...m,element:v})}catch{y=new nd(m)}else y=new nd(m);y.finished.then(()=>{this.notifyFinished()}).catch(jn),this.pendingTimeline&&(this.stopTimeline=y.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=y}get finished(){return this._animation?this.animation.finished:this._finished}then(t,n){return this.finished.finally(t).then(()=>{})}get animation(){var t;return this._animation||((t=this.keyframeResolver)==null||t.resume(),X_()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(t){this.animation.time=t}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(t){this.animation.speed=t}get startTime(){return this.animation.startTime}attachTimeline(t){return this._animation?this.stopTimeline=this.animation.attachTimeline(t):this.pendingTimeline=t,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var t;this._animation&&this.animation.cancel(),(t=this.keyframeResolver)==null||t.cancel()}}function v2(e,t,n,r=0,s=1){const i=Array.from(e).sort((u,f)=>u.sortNodePosition(f)).indexOf(t),a=e.size,l=(a-1)*r;return typeof n=="function"?n(i,a):s===1?i*r:l-i*r}const g3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function v3(e){const t=g3.exec(e);if(!t)return[,];const[,n,r,s]=t;return[`--${n??r}`,s]}const x3=4;function x2(e,t,n=1){Uo(n<=x3,`Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`,"max-css-var-depth");const[r,s]=v3(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const a=i.trim();return Oj(a)?parseFloat(a):a}return o0(s)?x2(s,t,n+1):s}const y3={type:"spring",stiffness:500,damping:25,restSpeed:10},b3=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),w3={type:"keyframes",duration:.8},S3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},k3=(e,{keyframes:t})=>t.length>2?w3:oa.has(e)?e.startsWith("scale")?b3(t[1]):y3:S3;function y2(e,t){if(e!=null&&e.inherit&&t){const{inherit:n,...r}=e;return{...t,...r}}return e}function h0(e,t){const n=(e==null?void 0:e[t])??(e==null?void 0:e.default)??e;return n!==e?y2(n,e):n}const C3=new Set(["when","delay","delayChildren","staggerChildren","staggerDirection","repeat","repeatType","repeatDelay","from","elapsed"]);function j3(e){for(const t in e)if(!C3.has(t))return!0;return!1}const p0=(e,t,n,r={},s,i)=>a=>{const l=h0(r,e)||{},c=l.delay||r.delay||0;let{elapsed:u=0}=r;u=u-tn(c);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...l,delay:-u,onUpdate:p=>{t.set(p),l.onUpdate&&l.onUpdate(p)},onComplete:()=>{a(),l.onComplete&&l.onComplete()},name:e,motionValue:t,element:i?void 0:s};j3(l)||Object.assign(f,k3(e,f)),f.duration&&(f.duration=tn(f.duration)),f.repeatDelay&&(f.repeatDelay=tn(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let h=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(lm(f),f.delay===0&&(h=!0)),(Ds.instantAnimations||Ds.skipAnimations||s!=null&&s.shouldSkipAnimations)&&(h=!0,lm(f),f.delay=0),f.allowFlatten=!l.type&&!l.ease,h&&!i&&t.get()!==void 0){const p=sf(f.keyframes,l);if(p!==void 0){Ue.update(()=>{f.onUpdate(p),f.onComplete()});return}}return l.isSync?new nd(f):new m3(f)};function py(e){const t=[{},{}];return e==null||e.values.forEach((n,r)=>{t[0][r]=n.get(),t[1][r]=n.getVelocity()}),t}function m0(e,t,n,r){if(typeof t=="function"){const[s,i]=py(r);t=t(n!==void 0?n:e.custom,s,i)}if(typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"){const[s,i]=py(r);t=t(n!==void 0?n:e.custom,s,i)}return t}function vi(e,t,n){const r=e.getProps();return m0(r,t,n!==void 0?n:r.custom,e)}const b2=new Set(["width","height","top","left","right","bottom",...ia]),my=30,E3=e=>!isNaN(parseFloat(e));class N3{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{var i;const s=Bt.now();if(this.updatedAt!==s&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&((i=this.events.change)==null||i.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=Bt.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=E3(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new r0);const r=this.events[t].add(n);return t==="change"?()=>{r(),Ue.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,r){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-r}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var t;(t=this.events.change)==null||t.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const t=Bt.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>my)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,my);return Fj(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var t,n;(t=this.dependents)==null||t.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Wo(e,t){return new N3(e,t)}const cm=e=>Array.isArray(e);function L3(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Wo(n))}function P3(e){return cm(e)?e[e.length-1]||0:e}function T3(e,t){const n=vi(e,t);let{transitionEnd:r={},transition:s={},...i}=n||{};i={...i,...r};for(const a in i){const l=P3(i[a]);L3(e,a,l)}}const kt=e=>!!(e&&e.getVelocity);function M3(e){return!!(kt(e)&&e.add)}function um(e,t){const n=e.getValue("willChange");if(M3(n))return n.add(t);if(!n&&Ds.WillChange){const r=new Ds.WillChange("auto");e.addValue("willChange",r),r.add(t)}}function g0(e){return e.replace(/([A-Z])/g,t=>`-${t.toLowerCase()}`)}const R3="framerAppearId",w2="data-"+g0(R3);function S2(e){return e.props[w2]}function A3({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}function k2(e,t,{delay:n=0,transitionOverride:r,type:s}={}){let{transition:i,transitionEnd:a,...l}=t;const c=e.getDefaultTransition();i=i?y2(i,c):c;const u=i==null?void 0:i.reduceMotion;r&&(i=r);const f=[],h=s&&e.animationState&&e.animationState.getState()[s];for(const p in l){const m=e.getValue(p,e.latestValues[p]??null),g=l[p];if(g===void 0||h&&A3(h,p))continue;const v={delay:n,...h0(i||{},p)},y=m.get();if(y!==void 0&&!m.isAnimating()&&!Array.isArray(g)&&g===y&&!v.velocity){Ue.update(()=>m.set(g));continue}let b=!1;if(window.MotionHandoffAnimation){const S=S2(e);if(S){const k=window.MotionHandoffAnimation(S,p,Ue);k!==null&&(v.startTime=k,b=!0)}}um(e,p);const x=u??e.shouldReduceMotion;m.start(p0(p,m,g,x&&b2.has(p)?{type:!1}:v,e,b));const w=m.animation;w&&f.push(w)}if(a){const p=()=>Ue.update(()=>{a&&T3(e,a)});f.length?Promise.all(f).then(p):p()}return f}function dm(e,t,n={}){var c;const r=vi(e,t,n.type==="exit"?(c=e.presenceContext)==null?void 0:c.custom:void 0);let{transition:s=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(s=n.transitionOverride);const i=r?()=>Promise.all(k2(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?(u=0)=>{const{delayChildren:f=0,staggerChildren:h,staggerDirection:p}=s;return O3(e,t,u,f,h,p,n)}:()=>Promise.resolve(),{when:l}=s;if(l){const[u,f]=l==="beforeChildren"?[i,a]:[a,i];return u().then(()=>f())}else return Promise.all([i(),a(n.delay)])}function O3(e,t,n=0,r=0,s=0,i=1,a){const l=[];for(const c of e.variantChildren)c.notify("AnimationStart",t),l.push(dm(c,t,{...a,delay:n+(typeof r=="function"?0:r)+v2(e.variantChildren,c,r,s,i)}).then(()=>c.notify("AnimationComplete",t)));return Promise.all(l)}function I3(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const s=t.map(i=>dm(e,i,n));r=Promise.all(s)}else if(typeof t=="string")r=dm(e,t,n);else{const s=typeof t=="function"?vi(e,t,n.custom):t;r=Promise.all(k2(e,s,n))}return r.then(()=>{e.notify("AnimationComplete",t)})}const D3={test:e=>e==="auto",parse:e=>e},C2=e=>t=>t.test(e),j2=[sa,le,xr,ts,a_,o_,D3],gy=e=>j2.find(C2(e));function _3(e){return typeof e=="number"?e===0:e!==null?e==="none"||e==="0"||Dj(e):!0}const F3=new Set(["brightness","contrast","saturate","opacity"]);function z3(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(a0)||[];if(!r)return e;const s=n.replace(r,"");let i=F3.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+s+")"}const B3=/\b([a-z-]*)\(.*?\)/gu,fm={...qn,getAnimatableNone:e=>{const t=e.match(B3);return t?t.map(z3).join(" "):e}},hm={...qn,getAnimatableNone:e=>{const t=qn.parse(e);return qn.createTransformer(e)(t.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},vy={...sa,transform:Math.round},V3={rotate:ts,rotateX:ts,rotateY:ts,rotateZ:ts,scale:Tc,scaleX:Tc,scaleY:Tc,scaleZ:Tc,skew:ts,skewX:ts,skewY:ts,distance:le,translateX:le,translateY:le,translateZ:le,x:le,y:le,z:le,perspective:le,transformPerspective:le,opacity:El,originX:ry,originY:ry,originZ:le},v0={borderWidth:le,borderTopWidth:le,borderRightWidth:le,borderBottomWidth:le,borderLeftWidth:le,borderRadius:le,borderTopLeftRadius:le,borderTopRightRadius:le,borderBottomRightRadius:le,borderBottomLeftRadius:le,width:le,maxWidth:le,height:le,maxHeight:le,top:le,right:le,bottom:le,left:le,inset:le,insetBlock:le,insetBlockStart:le,insetBlockEnd:le,insetInline:le,insetInlineStart:le,insetInlineEnd:le,padding:le,paddingTop:le,paddingRight:le,paddingBottom:le,paddingLeft:le,paddingBlock:le,paddingBlockStart:le,paddingBlockEnd:le,paddingInline:le,paddingInlineStart:le,paddingInlineEnd:le,margin:le,marginTop:le,marginRight:le,marginBottom:le,marginLeft:le,marginBlock:le,marginBlockStart:le,marginBlockEnd:le,marginInline:le,marginInlineStart:le,marginInlineEnd:le,fontSize:le,backgroundPositionX:le,backgroundPositionY:le,...V3,zIndex:vy,fillOpacity:El,strokeOpacity:El,numOctaves:vy},$3={...v0,color:at,backgroundColor:at,outlineColor:at,fill:at,stroke:at,borderColor:at,borderTopColor:at,borderRightColor:at,borderBottomColor:at,borderLeftColor:at,filter:fm,WebkitFilter:fm,mask:hm,WebkitMask:hm},E2=e=>$3[e],U3=new Set([fm,hm]);function N2(e,t){let n=E2(e);return U3.has(n)||(n=qn),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const H3=new Set(["auto","none","0"]);function W3(e,t,n){let r=0,s;for(;r<e.length&&!s;){const i=e[r];typeof i=="string"&&!H3.has(i)&&Ho(i).values.length&&(s=e[r]),r++}if(s&&n)for(const i of t)e[i]=N2(n,s)}class K3 extends f0{constructor(t,n,r,s,i){super(t,n,r,s,i,!0)}readKeyframes(){const{unresolvedKeyframes:t,element:n,name:r}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<t.length;f++){let h=t[f];if(typeof h=="string"&&(h=h.trim(),o0(h))){const p=x2(h,n.current);p!==void 0&&(t[f]=p),f===t.length-1&&(this.finalKeyframe=h)}}if(this.resolveNoneKeyframes(),!b2.has(r)||t.length!==2)return;const[s,i]=t,a=gy(s),l=gy(i),c=ny(s),u=ny(i);if(c!==u&&xs[r]){this.needsMeasurement=!0;return}if(a!==l)if(dy(a)&&dy(l))for(let f=0;f<t.length;f++){const h=t[f];typeof h=="string"&&(t[f]=parseFloat(h))}else xs[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:t,name:n}=this,r=[];for(let s=0;s<t.length;s++)(t[s]===null||_3(t[s]))&&r.push(s);r.length&&W3(t,r,n)}measureInitialState(){const{element:t,unresolvedKeyframes:n,name:r}=this;if(!t||!t.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=xs[r](t.measureViewportBox(),window.getComputedStyle(t.current)),n[0]=this.measuredOrigin;const s=n[n.length-1];s!==void 0&&t.getValue(r,s).jump(s,!1)}measureEndState(){var l;const{element:t,name:n,unresolvedKeyframes:r}=this;if(!t||!t.current)return;const s=t.getValue(n);s&&s.jump(this.measuredOrigin,!1);const i=r.length-1,a=r[i];r[i]=xs[n](t.measureViewportBox(),window.getComputedStyle(t.current)),a!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=a),(l=this.removedTransforms)!=null&&l.length&&this.removedTransforms.forEach(([c,u])=>{t.getValue(c).set(u)}),this.resolveNoneKeyframes()}}function L2(e,t,n){if(e==null)return[];if(e instanceof EventTarget)return[e];if(typeof e=="string"){const s=document.querySelectorAll(e);return s?Array.from(s):[]}return Array.from(e).filter(r=>r!=null)}const P2=(e,t)=>t&&typeof e=="number"?t.transform(e):e;function G3(e){return Ij(e)&&"offsetHeight"in e&&!("ownerSVGElement"in e)}const{schedule:x0,cancel:IU}=Zj(queueMicrotask,!1),_n={x:!1,y:!1};function T2(){return _n.x||_n.y}function q3(e){return e==="x"||e==="y"?_n[e]?null:(_n[e]=!0,()=>{_n[e]=!1}):_n.x||_n.y?null:(_n.x=_n.y=!0,()=>{_n.x=_n.y=!1})}function M2(e,t){const n=L2(e),r=new AbortController,s={passive:!0,...t,signal:r.signal};return[n,s,()=>r.abort()]}function Z3(e){return!(e.pointerType==="touch"||T2())}function Y3(e,t,n={}){const[r,s,i]=M2(e,n);return r.forEach(a=>{let l=!1,c=!1,u;const f=()=>{a.removeEventListener("pointerleave",g)},h=y=>{u&&(u(y),u=void 0),f()},p=y=>{l=!1,window.removeEventListener("pointerup",p),window.removeEventListener("pointercancel",p),c&&(c=!1,h(y))},m=()=>{l=!0,window.addEventListener("pointerup",p,s),window.addEventListener("pointercancel",p,s)},g=y=>{if(y.pointerType!=="touch"){if(l){c=!0;return}h(y)}},v=y=>{if(!Z3(y))return;c=!1;const b=t(a,y);typeof b=="function"&&(u=b,a.addEventListener("pointerleave",g,s))};a.addEventListener("pointerenter",v,s),a.addEventListener("pointerdown",m,s)}),i}const R2=(e,t)=>t?e===t?!0:R2(e,t.parentElement):!1,y0=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1,Q3=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function X3(e){return Q3.has(e.tagName)||e.isContentEditable===!0}const J3=new Set(["INPUT","SELECT","TEXTAREA"]);function eF(e){return J3.has(e.tagName)||e.isContentEditable===!0}const au=new WeakSet;function xy(e){return t=>{t.key==="Enter"&&e(t)}}function ch(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}const tF=(e,t)=>{const n=e.currentTarget;if(!n)return;const r=xy(()=>{if(au.has(n))return;ch(n,"down");const s=xy(()=>{ch(n,"up")}),i=()=>ch(n,"cancel");n.addEventListener("keyup",s,t),n.addEventListener("blur",i,t)});n.addEventListener("keydown",r,t),n.addEventListener("blur",()=>n.removeEventListener("keydown",r),t)};function yy(e){return y0(e)&&!T2()}const by=new WeakSet;function nF(e,t,n={}){const[r,s,i]=M2(e,n),a=l=>{const c=l.currentTarget;if(!yy(l)||by.has(l))return;au.add(c),n.stopPropagation&&by.add(l);const u=t(c,l),f=(m,g)=>{window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",p),au.has(c)&&au.delete(c),yy(m)&&typeof u=="function"&&u(m,{success:g})},h=m=>{f(m,c===window||c===document||n.useGlobalTarget||R2(c,m.target))},p=m=>{f(m,!1)};window.addEventListener("pointerup",h,s),window.addEventListener("pointercancel",p,s)};return r.forEach(l=>{(n.useGlobalTarget?window:l).addEventListener("pointerdown",a,s),G3(l)&&(l.addEventListener("focus",u=>tF(u,s)),!X3(l)&&!l.hasAttribute("tabindex")&&(l.tabIndex=0))}),i}function b0(e){return Ij(e)&&"ownerSVGElement"in e}const lu=new WeakMap;let ns;const A2=(e,t,n)=>(r,s)=>s&&s[0]?s[0][e+"Size"]:b0(r)&&"getBBox"in r?r.getBBox()[t]:r[n],rF=A2("inline","width","offsetWidth"),sF=A2("block","height","offsetHeight");function iF({target:e,borderBoxSize:t}){var n;(n=lu.get(e))==null||n.forEach(r=>{r(e,{get width(){return rF(e,t)},get height(){return sF(e,t)}})})}function oF(e){e.forEach(iF)}function aF(){typeof ResizeObserver>"u"||(ns=new ResizeObserver(oF))}function lF(e,t){ns||aF();const n=L2(e);return n.forEach(r=>{let s=lu.get(r);s||(s=new Set,lu.set(r,s)),s.add(t),ns==null||ns.observe(r)}),()=>{n.forEach(r=>{const s=lu.get(r);s==null||s.delete(t),s!=null&&s.size||ns==null||ns.unobserve(r)})}}const cu=new Set;let lo;function cF(){lo=()=>{const e={get width(){return window.innerWidth},get height(){return window.innerHeight}};cu.forEach(t=>t(e))},window.addEventListener("resize",lo)}function uF(e){return cu.add(e),lo||cF(),()=>{cu.delete(e),!cu.size&&typeof lo=="function"&&(window.removeEventListener("resize",lo),lo=void 0)}}function wy(e,t){return typeof e=="function"?uF(e):lF(e,t)}function dF(e){return b0(e)&&e.tagName==="svg"}const fF=[...j2,at,qn],hF=e=>fF.find(C2(e)),Sy=()=>({translate:0,scale:1,origin:0,originPoint:0}),co=()=>({x:Sy(),y:Sy()}),ky=()=>({min:0,max:0}),ut=()=>({x:ky(),y:ky()}),pF=new WeakMap;function of(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}function Nl(e){return typeof e=="string"||Array.isArray(e)}const w0=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],S0=["initial",...w0];function af(e){return of(e.animate)||S0.some(t=>Nl(e[t]))}function O2(e){return!!(af(e)||e.variants)}function mF(e,t,n){for(const r in t){const s=t[r],i=n[r];if(kt(s))e.addValue(r,s);else if(kt(i))e.addValue(r,Wo(s,{owner:e}));else if(i!==s)if(e.hasValue(r)){const a=e.getValue(r);a.liveStyle===!0?a.jump(s):a.hasAnimated||a.set(s)}else{const a=e.getStaticValue(r);e.addValue(r,Wo(a!==void 0?a:s,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const pm={current:null},I2={current:!1},gF=typeof window<"u";function vF(){if(I2.current=!0,!!gF)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>pm.current=e.matches;e.addEventListener("change",t),t()}else pm.current=!1}const Cy=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let rd={};function D2(e){rd=e}function xF(){return rd}class yF{scrapeMotionValuesFromProps(t,n,r){return{}}constructor({parent:t,props:n,presenceContext:r,reducedMotionConfig:s,skipAnimations:i,blockInitialAnimation:a,visualState:l},c={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=f0,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const m=Bt.now();this.renderScheduledAt<m&&(this.renderScheduledAt=m,Ue.render(this.render,!1,!0))};const{latestValues:u,renderState:f}=l;this.latestValues=u,this.baseTarget={...u},this.initialValues=n.initial?{...u}:{},this.renderState=f,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=s,this.skipAnimationsConfig=i,this.options=c,this.blockInitialAnimation=!!a,this.isControllingVariants=af(n),this.isVariantNode=O2(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:h,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const m in p){const g=p[m];u[m]!==void 0&&kt(g)&&g.set(u[m])}}mount(t){var n,r;if(this.hasBeenMounted)for(const s in this.initialValues)(n=this.values.get(s))==null||n.jump(this.initialValues[s]),this.latestValues[s]=this.initialValues[s];this.current=t,pF.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((s,i)=>this.bindToMotionValue(i,s)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(I2.current||vF(),this.shouldReduceMotion=pm.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(r=this.parent)==null||r.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var t;this.projection&&this.projection.unmount(),_s(this.notifyUpdate),_s(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(t=this.parent)==null||t.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const r=this.features[n];r&&(r.unmount(),r.isMounted=!1)}this.current=null}addChild(t){this.children.add(t),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(t)}removeChild(t){this.children.delete(t),this.enteringChildren&&this.enteringChildren.delete(t)}bindToMotionValue(t,n){if(this.valueSubscriptions.has(t)&&this.valueSubscriptions.get(t)(),n.accelerate&&g2.has(t)&&this.current instanceof HTMLElement){const{factory:a,keyframes:l,times:c,ease:u,duration:f}=n.accelerate,h=new p2({element:this.current,name:t,keyframes:l,times:c,ease:u,duration:tn(f)}),p=a(h);this.valueSubscriptions.set(t,()=>{p(),h.cancel()});return}const r=oa.has(t);r&&this.onBindTransform&&this.onBindTransform();const s=n.on("change",a=>{this.latestValues[t]=a,this.props.onUpdate&&Ue.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let i;typeof window<"u"&&window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,t,n)),this.valueSubscriptions.set(t,()=>{s(),i&&i(),n.owner&&n.stop()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}updateFeatures(){let t="animation";for(t in rd){const n=rd[t];if(!n)continue;const{isEnabled:r,Feature:s}=n;if(!this.features[t]&&s&&r(this.props)&&(this.features[t]=new s(this)),this.features[t]){const i=this.features[t];i.isMounted?i.update():(i.mount(),i.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):ut()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let r=0;r<Cy.length;r++){const s=Cy[r];this.propEventSubscriptions[s]&&(this.propEventSubscriptions[s](),delete this.propEventSubscriptions[s]);const i="on"+s,a=t[i];a&&(this.propEventSubscriptions[s]=this.on(s,a))}this.prevMotionValues=mF(this,this.scrapeMotionValuesFromProps(t,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){const r=this.values.get(t);n!==r&&(r&&this.removeValue(t),this.bindToMotionValue(t,n),this.values.set(t,n),this.latestValues[t]=n.get())}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Wo(n===null?void 0:n,{owner:this}),this.addValue(t,r)),r}readValue(t,n){let r=this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.getBaseTargetFromProps(this.props,t)??this.readValueFromInstance(this.current,t,this.options);return r!=null&&(typeof r=="string"&&(Oj(r)||Dj(r))?r=parseFloat(r):!hF(r)&&qn.test(n)&&(r=N2(t,n)),this.setBaseTarget(t,kt(r)?r.get():r)),kt(r)?r.get():r}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var i;const{initial:n}=this.props;let r;if(typeof n=="string"||typeof n=="object"){const a=m0(this.props,n,(i=this.presenceContext)==null?void 0:i.custom);a&&(r=a[t])}if(n&&r!==void 0)return r;const s=this.getBaseTargetFromProps(this.props,t);return s!==void 0&&!kt(s)?s:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new r0),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}scheduleRenderMicrotask(){x0.render(this.render)}}class _2 extends yF{constructor(){super(...arguments),this.KeyframeResolver=K3}sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){const r=t.style;return r?r[n]:void 0}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;kt(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Us{constructor(t){this.isMounted=!1,this.node=t}update(){}}function F2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function bF({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function wF(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function uh(e){return e===void 0||e===1}function mm({scale:e,scaleX:t,scaleY:n}){return!uh(e)||!uh(t)||!uh(n)}function Js(e){return mm(e)||z2(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function z2(e){return jy(e.x)||jy(e.y)}function jy(e){return e&&e!=="0%"}function sd(e,t,n){const r=e-n,s=t*r;return n+s}function Ey(e,t,n,r,s){return s!==void 0&&(e=sd(e,s,r)),sd(e,n,r)+t}function gm(e,t=0,n=1,r,s){e.min=Ey(e.min,t,n,r,s),e.max=Ey(e.max,t,n,r,s)}function B2(e,{x:t,y:n}){gm(e.x,t.translate,t.scale,t.originPoint),gm(e.y,n.translate,n.scale,n.originPoint)}const Ny=.999999999999,Ly=1.0000000000001;function SF(e,t,n,r=!1){var l;const s=n.length;if(!s)return;t.x=t.y=1;let i,a;for(let c=0;c<s;c++){i=n[c],a=i.projectionDelta;const{visualElement:u}=i.options;u&&u.props.style&&u.props.style.display==="contents"||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&(dr(e.x,-i.scroll.offset.x),dr(e.y,-i.scroll.offset.y)),a&&(t.x*=a.x.scale,t.y*=a.y.scale,B2(e,a)),r&&Js(i.latestValues)&&uu(e,i.latestValues,(l=i.layout)==null?void 0:l.layoutBox))}t.x<Ly&&t.x>Ny&&(t.x=1),t.y<Ly&&t.y>Ny&&(t.y=1)}function dr(e,t){e.min+=t,e.max+=t}function Py(e,t,n,r,s=.5){const i=Ye(e.min,e.max,s);gm(e,t,n,i,r)}function Ty(e,t){return typeof e=="string"?parseFloat(e)/100*(t.max-t.min):e}function uu(e,t,n){const r=n??e;Py(e.x,Ty(t.x,r.x),t.scaleX,t.scale,t.originX),Py(e.y,Ty(t.y,r.y),t.scaleY,t.scale,t.originY)}function V2(e,t){return F2(wF(e.getBoundingClientRect(),t))}function kF(e,t,n){const r=V2(e,n),{scroll:s}=t;return s&&(dr(r.x,s.offset.x),dr(r.y,s.offset.y)),r}const CF={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},jF=ia.length;function EF(e,t,n){let r="",s=!0;for(let i=0;i<jF;i++){const a=ia[i],l=e[a];if(l===void 0)continue;let c=!0;if(typeof l=="number")c=l===(a.startsWith("scale")?1:0);else{const u=parseFloat(l);c=a.startsWith("scale")?u===1:u===0}if(!c||n){const u=P2(l,v0[a]);if(!c){s=!1;const f=CF[a]||a;r+=`${f}(${u}) `}n&&(t[a]=u)}}return r=r.trim(),n?r=n(t,s?"":r):s&&(r="none"),r}function k0(e,t,n){const{style:r,vars:s,transformOrigin:i}=e;let a=!1,l=!1;for(const c in t){const u=t[c];if(oa.has(c)){a=!0;continue}else if(Qj(c)){s[c]=u;continue}else{const f=P2(u,v0[c]);c.startsWith("origin")?(l=!0,i[c]=f):r[c]=f}}if(t.transform||(a||n?r.transform=EF(t,e.transform,n):r.transform&&(r.transform="none")),l){const{originX:c="50%",originY:u="50%",originZ:f=0}=i;r.transformOrigin=`${c} ${u} ${f}`}}function $2(e,{style:t,vars:n},r,s){const i=e.style;let a;for(a in t)i[a]=t[a];s==null||s.applyProjectionStyles(i,r);for(a in n)i.setProperty(a,n[a])}function My(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const wa={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(le.test(e))e=parseFloat(e);else return e;const n=My(e,t.target.x),r=My(e,t.target.y);return`${n}% ${r}%`}},NF={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,s=qn.parse(e);if(s.length>5)return r;const i=qn.createTransformer(e),a=typeof s[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;s[0+a]/=l,s[1+a]/=c;const u=Ye(l,c,.5);return typeof s[2+a]=="number"&&(s[2+a]/=u),typeof s[3+a]=="number"&&(s[3+a]/=u),i(s)}},vm={borderRadius:{...wa,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:wa,borderTopRightRadius:wa,borderBottomLeftRadius:wa,borderBottomRightRadius:wa,boxShadow:NF};function U2(e,{layout:t,layoutId:n}){return oa.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!vm[e]||e==="opacity")}function C0(e,t,n){var a;const r=e.style,s=t==null?void 0:t.style,i={};if(!r)return i;for(const l in r)(kt(r[l])||s&&kt(s[l])||U2(l,e)||((a=n==null?void 0:n.getValue(l))==null?void 0:a.liveStyle)!==void 0)&&(i[l]=r[l]);return i}function LF(e){return window.getComputedStyle(e)}class PF extends _2{constructor(){super(...arguments),this.type="html",this.renderInstance=$2}readValueFromInstance(t,n){var r;if(oa.has(n))return(r=this.projection)!=null&&r.isProjecting?rm(n):G_(t,n);{const s=LF(t),i=(Qj(n)?s.getPropertyValue(n):s[n])||0;return typeof i=="string"?i.trim():i}}measureInstanceViewportBox(t,{transformPagePoint:n}){return V2(t,n)}build(t,n,r){k0(t,n,r.transformTemplate)}scrapeMotionValuesFromProps(t,n,r){return C0(t,n,r)}}const TF={offset:"stroke-dashoffset",array:"stroke-dasharray"},MF={offset:"strokeDashoffset",array:"strokeDasharray"};function RF(e,t,n=1,r=0,s=!0){e.pathLength=1;const i=s?TF:MF;e[i.offset]=`${-r}`,e[i.array]=`${t} ${n}`}const AF=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function H2(e,{attrX:t,attrY:n,attrScale:r,pathLength:s,pathSpacing:i=1,pathOffset:a=0,...l},c,u,f){if(k0(e,l,u),c){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:h,style:p}=e;h.transform&&(p.transform=h.transform,delete h.transform),(p.transform||h.transformOrigin)&&(p.transformOrigin=h.transformOrigin??"50% 50%",delete h.transformOrigin),p.transform&&(p.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete h.transformBox);for(const m of AF)h[m]!==void 0&&(p[m]=h[m],delete h[m]);t!==void 0&&(h.x=t),n!==void 0&&(h.y=n),r!==void 0&&(h.scale=r),s!==void 0&&RF(h,s,i,a,!1)}const W2=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),K2=e=>typeof e=="string"&&e.toLowerCase()==="svg";function OF(e,t,n,r){$2(e,t,void 0,r);for(const s in t.attrs)e.setAttribute(W2.has(s)?s:g0(s),t.attrs[s])}function G2(e,t,n){const r=C0(e,t,n);for(const s in e)if(kt(e[s])||kt(t[s])){const i=ia.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;r[i]=e[s]}return r}class IF extends _2{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=ut}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(oa.has(n)){const r=E2(n);return r&&r.default||0}return n=W2.has(n)?n:g0(n),t.getAttribute(n)}scrapeMotionValuesFromProps(t,n,r){return G2(t,n,r)}build(t,n,r){H2(t,n,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(t,n,r,s){OF(t,n,r,s)}mount(t){this.isSVGTag=K2(t.tagName),super.mount(t)}}const DF=S0.length;function q2(e){if(!e)return;if(!e.isControllingVariants){const n=e.parent?q2(e.parent)||{}:{};return e.props.initial!==void 0&&(n.initial=e.props.initial),n}const t={};for(let n=0;n<DF;n++){const r=S0[n],s=e.props[r];(Nl(s)||s===!1)&&(t[r]=s)}return t}function Z2(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const _F=[...w0].reverse(),FF=w0.length;function zF(e){return t=>Promise.all(t.map(({animation:n,options:r})=>I3(e,n,r)))}function BF(e){let t=zF(e),n=Ry(),r=!0,s=!1;const i=u=>(f,h)=>{var m;const p=vi(e,h,u==="exit"?(m=e.presenceContext)==null?void 0:m.custom:void 0);if(p){const{transition:g,transitionEnd:v,...y}=p;f={...f,...y,...v}}return f};function a(u){t=u(e)}function l(u){const{props:f}=e,h=q2(e.parent)||{},p=[],m=new Set;let g={},v=1/0;for(let b=0;b<FF;b++){const x=_F[b],w=n[x],S=f[x]!==void 0?f[x]:h[x],k=Nl(S),j=x===u?w.isActive:null;j===!1&&(v=b);let C=S===h[x]&&S!==f[x]&&k;if(C&&(r||s)&&e.manuallyAnimateOnMount&&(C=!1),w.protectedKeys={...g},!w.isActive&&j===null||!S&&!w.prevProp||of(S)||typeof S=="boolean")continue;if(x==="exit"&&w.isActive&&j!==!0){w.prevResolvedValues&&(g={...g,...w.prevResolvedValues});continue}const E=VF(w.prevProp,S);let N=E||x===u&&w.isActive&&!C&&k||b>v&&k,L=!1;const T=Array.isArray(S)?S:[S];let R=T.reduce(i(x),{});j===!1&&(R={});const{prevResolvedValues:z={}}=w,I={...z,...R},F=M=>{N=!0,m.has(M)&&(L=!0,m.delete(M)),w.needsAnimating[M]=!0;const O=e.getValue(M);O&&(O.liveStyle=!1)};for(const M in I){const O=R[M],_=z[M];if(g.hasOwnProperty(M))continue;let U=!1;cm(O)&&cm(_)?U=!Z2(O,_):U=O!==_,U?O!=null?F(M):m.add(M):O!==void 0&&m.has(M)?F(M):w.protectedKeys[M]=!0}w.prevProp=S,w.prevResolvedValues=R,w.isActive&&(g={...g,...R}),(r||s)&&e.blockInitialAnimation&&(N=!1);const A=C&&E;N&&(!A||L)&&p.push(...T.map(M=>{const O={type:x};if(typeof M=="string"&&(r||s)&&!A&&e.manuallyAnimateOnMount&&e.parent){const{parent:_}=e,U=vi(_,M);if(_.enteringChildren&&U){const{delayChildren:q}=U.transition||{};O.delay=v2(_.enteringChildren,e,q)}}return{animation:M,options:O}}))}if(m.size){const b={};if(typeof f.initial!="boolean"){const x=vi(e,Array.isArray(f.initial)?f.initial[0]:f.initial);x&&x.transition&&(b.transition=x.transition)}m.forEach(x=>{const w=e.getBaseTarget(x),S=e.getValue(x);S&&(S.liveStyle=!0),b[x]=w??null}),p.push({animation:b})}let y=!!p.length;return r&&(f.initial===!1||f.initial===f.animate)&&!e.manuallyAnimateOnMount&&(y=!1),r=!1,s=!1,y?t(p):Promise.resolve()}function c(u,f){var p;if(n[u].isActive===f)return Promise.resolve();(p=e.variantChildren)==null||p.forEach(m=>{var g;return(g=m.animationState)==null?void 0:g.setActive(u,f)}),n[u].isActive=f;const h=l(u);for(const m in n)n[m].protectedKeys={};return h}return{animateChanges:l,setActive:c,setAnimateFunction:a,getState:()=>n,reset:()=>{n=Ry(),s=!0}}}function VF(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Z2(t,e):!1}function Zs(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Ry(){return{animate:Zs(!0),whileInView:Zs(),whileHover:Zs(),whileTap:Zs(),whileDrag:Zs(),whileFocus:Zs(),exit:Zs()}}function xm(e,t){e.min=t.min,e.max=t.max}function Dn(e,t){xm(e.x,t.x),xm(e.y,t.y)}function Ay(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}const Y2=1e-4,$F=1-Y2,UF=1+Y2,Q2=.01,HF=0-Q2,WF=0+Q2;function Vt(e){return e.max-e.min}function KF(e,t,n){return Math.abs(e-t)<=n}function Oy(e,t,n,r=.5){e.origin=r,e.originPoint=Ye(t.min,t.max,e.origin),e.scale=Vt(n)/Vt(t),e.translate=Ye(n.min,n.max,e.origin)-e.originPoint,(e.scale>=$F&&e.scale<=UF||isNaN(e.scale))&&(e.scale=1),(e.translate>=HF&&e.translate<=WF||isNaN(e.translate))&&(e.translate=0)}function Za(e,t,n,r){Oy(e.x,t.x,n.x,r?r.originX:void 0),Oy(e.y,t.y,n.y,r?r.originY:void 0)}function Iy(e,t,n,r=0){const s=r?Ye(n.min,n.max,r):n.min;e.min=s+t.min,e.max=e.min+Vt(t)}function GF(e,t,n,r){Iy(e.x,t.x,n.x,r==null?void 0:r.x),Iy(e.y,t.y,n.y,r==null?void 0:r.y)}function Dy(e,t,n,r=0){const s=r?Ye(n.min,n.max,r):n.min;e.min=t.min-s,e.max=e.min+Vt(t)}function id(e,t,n,r){Dy(e.x,t.x,n.x,r==null?void 0:r.x),Dy(e.y,t.y,n.y,r==null?void 0:r.y)}function _y(e,t,n,r,s){return e-=t,e=sd(e,1/n,r),s!==void 0&&(e=sd(e,1/s,r)),e}function qF(e,t=0,n=1,r=.5,s,i=e,a=e){if(xr.test(t)&&(t=parseFloat(t),t=Ye(a.min,a.max,t/100)-a.min),typeof t!="number")return;let l=Ye(i.min,i.max,r);e===i&&(l-=t),e.min=_y(e.min,t,n,l,s),e.max=_y(e.max,t,n,l,s)}function Fy(e,t,[n,r,s],i,a){qF(e,t[n],t[r],t[s],t.scale,i,a)}const ZF=["x","scaleX","originX"],YF=["y","scaleY","originY"];function zy(e,t,n,r){Fy(e.x,t,ZF,n?n.x:void 0,r?r.x:void 0),Fy(e.y,t,YF,n?n.y:void 0,r?r.y:void 0)}function By(e){return e.translate===0&&e.scale===1}function X2(e){return By(e.x)&&By(e.y)}function Vy(e,t){return e.min===t.min&&e.max===t.max}function QF(e,t){return Vy(e.x,t.x)&&Vy(e.y,t.y)}function $y(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function J2(e,t){return $y(e.x,t.x)&&$y(e.y,t.y)}function Uy(e){return Vt(e.x)/Vt(e.y)}function Hy(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}function or(e){return[e("x"),e("y")]}function XF(e,t,n){let r="";const s=e.x.translate/t.x,i=e.y.translate/t.y,a=(n==null?void 0:n.z)||0;if((s||i||a)&&(r=`translate3d(${s}px, ${i}px, ${a}px) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:u,rotate:f,rotateX:h,rotateY:p,skewX:m,skewY:g}=n;u&&(r=`perspective(${u}px) ${r}`),f&&(r+=`rotate(${f}deg) `),h&&(r+=`rotateX(${h}deg) `),p&&(r+=`rotateY(${p}deg) `),m&&(r+=`skewX(${m}deg) `),g&&(r+=`skewY(${g}deg) `)}const l=e.x.scale*t.x,c=e.y.scale*t.y;return(l!==1||c!==1)&&(r+=`scale(${l}, ${c})`),r||"none"}const eE=["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"],JF=eE.length,Wy=e=>typeof e=="string"?parseFloat(e):e,Ky=e=>typeof e=="number"||le.test(e);function ez(e,t,n,r,s,i){s?(e.opacity=Ye(0,n.opacity??1,tz(r)),e.opacityExit=Ye(t.opacity??1,0,nz(r))):i&&(e.opacity=Ye(t.opacity??1,n.opacity??1,r));for(let a=0;a<JF;a++){const l=eE[a];let c=Gy(t,l),u=Gy(n,l);if(c===void 0&&u===void 0)continue;c||(c=0),u||(u=0),c===0||u===0||Ky(c)===Ky(u)?(e[l]=Math.max(Ye(Wy(c),Wy(u),r),0),(xr.test(u)||xr.test(c))&&(e[l]+="%")):e[l]=u}(t.rotate||n.rotate)&&(e.rotate=Ye(t.rotate||0,n.rotate||0,r))}function Gy(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const tz=tE(0,.5,Wj),nz=tE(.5,.95,jn);function tE(e,t,n){return r=>r<e?0:r>t?1:n(jl(e,t,r))}function rz(e,t,n){const r=kt(e)?e:Wo(e);return r.start(p0("",r,t,n)),r.animation}function Ll(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const sz=(e,t)=>e.depth-t.depth;class iz{constructor(){this.children=[],this.isDirty=!1}add(t){n0(this.children,t),this.isDirty=!0}remove(t){Xu(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(sz),this.isDirty=!1,this.children.forEach(t)}}function oz(e,t){const n=Bt.now(),r=({timestamp:s})=>{const i=s-n;i>=t&&(_s(r),e(i-t))};return Ue.setup(r,!0),()=>_s(r)}function du(e){return kt(e)?e.get():e}class az{constructor(){this.members=[]}add(t){n0(this.members,t);for(let n=this.members.length-1;n>=0;n--){const r=this.members[n];if(r===t||r===this.lead||r===this.prevLead)continue;const s=r.instance;(!s||s.isConnected===!1)&&!r.snapshot&&(Xu(this.members,r),r.unmount())}t.scheduleRender()}remove(t){if(Xu(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){var n;for(let r=this.members.indexOf(t)-1;r>=0;r--){const s=this.members[r];if(s.isPresent!==!1&&((n=s.instance)==null?void 0:n.isConnected)!==!1)return this.promote(s),!0}return!1}promote(t,n){var s;const r=this.lead;if(t!==r&&(this.prevLead=r,this.lead=t,t.show(),r)){r.updateSnapshot(),t.scheduleRender();const{layoutDependency:i}=r.options,{layoutDependency:a}=t.options;(i===void 0||i!==a)&&(t.resumeFrom=r,n&&(r.preserveOpacity=!0),r.snapshot&&(t.snapshot=r.snapshot,t.snapshot.latestValues=r.animationValues||r.latestValues),(s=t.root)!=null&&s.isUpdating&&(t.isLayoutDirty=!0)),t.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,s,i,a;(r=(n=t.options).onExitComplete)==null||r.call(n),(a=(s=t.resumingFrom)==null?void 0:(i=s.options).onExitComplete)==null||a.call(i)})}scheduleRender(){this.members.forEach(t=>t.instance&&t.scheduleRender(!1))}removeLeadSnapshot(){var t;(t=this.lead)!=null&&t.snapshot&&(this.lead.snapshot=void 0)}}const fu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},dh=["","X","Y","Z"],lz=1e3;let cz=0;function fh(e,t,n,r){const{latestValues:s}=t;s[e]&&(n[e]=s[e],t.setStaticValue(e,0),r&&(r[e]=0))}function nE(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=S2(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:s,layoutId:i}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",Ue,!(s||i))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&nE(r)}function rE({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:s}){return class{constructor(a={},l=t==null?void 0:t()){this.id=cz++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(fz),this.nodes.forEach(xz),this.nodes.forEach(yz),this.nodes.forEach(hz)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=a,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new iz)}addEventListener(a,l){return this.eventHandlers.has(a)||this.eventHandlers.set(a,new r0),this.eventHandlers.get(a).add(l)}notifyListeners(a,...l){const c=this.eventHandlers.get(a);c&&c.notify(...l)}hasListeners(a){return this.eventHandlers.has(a)}mount(a){if(this.instance)return;this.isSVG=b0(a)&&!dF(a),this.instance=a;const{layoutId:l,layout:c,visualElement:u}=this.options;if(u&&!u.current&&u.mount(a),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(c||l)&&(this.isLayoutDirty=!0),e){let f,h=0;const p=()=>this.root.updateBlockedByResize=!1;Ue.read(()=>{h=window.innerWidth}),e(a,()=>{const m=window.innerWidth;m!==h&&(h=m,this.root.updateBlockedByResize=!0,f&&f(),f=oz(p,250),fu.hasAnimatedSinceResize&&(fu.hasAnimatedSinceResize=!1,this.nodes.forEach(Yy)))})}l&&this.root.registerSharedNode(l,this),this.options.animate!==!1&&u&&(l||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:h,hasRelativeLayoutChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||u.getDefaultTransition()||Cz,{onLayoutAnimationStart:v,onLayoutAnimationComplete:y}=u.getProps(),b=!this.targetLayout||!J2(this.targetLayout,m),x=!h&&p;if(this.options.layoutRoot||this.resumeFrom||x||h&&(b||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const w={...h0(g,"layout"),onPlay:v,onComplete:y};(u.shouldReduceMotion||this.options.layoutRoot)&&(w.delay=0,w.type=!1),this.startAnimation(w),this.setAnimationOrigin(f,x)}else h||Yy(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const a=this.getStack();a&&a.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),_s(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(bz),this.animationId++)}getTransformTemplate(){const{visualElement:a}=this.options;return a&&a.getProps().transformTemplate}willUpdate(a=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&nE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const h=this.path[f];h.shouldResetTransform=!0,(typeof h.latestValues.x=="string"||typeof h.latestValues.y=="string")&&(h.isLayoutDirty=!0),h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const u=this.getTransformTemplate();this.prevTransformTemplateValue=u?u(this.latestValues,""):void 0,this.updateSnapshot(),a&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){const c=this.updateBlockedByResize;this.unblockUpdate(),this.updateBlockedByResize=!1,this.clearAllSnapshots(),c&&this.nodes.forEach(mz),this.nodes.forEach(qy);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(Zy);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(gz),this.nodes.forEach(vz),this.nodes.forEach(uz),this.nodes.forEach(dz)):this.nodes.forEach(Zy),this.clearAllSnapshots();const l=Bt.now();bt.delta=br(0,1e3/60,l-bt.timestamp),bt.timestamp=l,bt.isProcessing=!0,rh.update.process(bt),rh.preRender.process(bt),rh.render.process(bt),bt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,x0.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(pz),this.sharedNodes.forEach(wz)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Ue.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Ue.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!Vt(this.snapshot.measuredBox.x)&&!Vt(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const a=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected||(this.layoutCorrected=ut()),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,a?a.layoutBox:void 0)}updateScroll(a="measure"){let l=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===a&&(l=!1),l&&this.instance){const c=r(this.instance);this.scroll={animationId:this.root.animationId,phase:a,isRoot:c,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:c}}}resetTransform(){if(!s)return;const a=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,l=this.projectionDelta&&!X2(this.projectionDelta),c=this.getTransformTemplate(),u=c?c(this.latestValues,""):void 0,f=u!==this.prevTransformTemplateValue;a&&this.instance&&(l||Js(this.latestValues)||f)&&(s(this.instance,u),this.shouldResetTransform=!1,this.scheduleRender())}measure(a=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return a&&(c=this.removeTransform(c)),jz(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){var u;const{visualElement:a}=this.options;if(!a)return ut();const l=a.measureViewportBox();if(!(((u=this.scroll)==null?void 0:u.wasRoot)||this.path.some(Ez))){const{scroll:f}=this.root;f&&(dr(l.x,f.offset.x),dr(l.y,f.offset.y))}return l}removeElementScroll(a){var c;const l=ut();if(Dn(l,a),(c=this.scroll)!=null&&c.wasRoot)return l;for(let u=0;u<this.path.length;u++){const f=this.path[u],{scroll:h,options:p}=f;f!==this.root&&h&&p.layoutScroll&&(h.wasRoot&&Dn(l,a),dr(l.x,h.offset.x),dr(l.y,h.offset.y))}return l}applyTransform(a,l=!1,c){var f,h;const u=c||ut();Dn(u,a);for(let p=0;p<this.path.length;p++){const m=this.path[p];!l&&m.options.layoutScroll&&m.scroll&&m!==m.root&&(dr(u.x,-m.scroll.offset.x),dr(u.y,-m.scroll.offset.y)),Js(m.latestValues)&&uu(u,m.latestValues,(f=m.layout)==null?void 0:f.layoutBox)}return Js(this.latestValues)&&uu(u,this.latestValues,(h=this.layout)==null?void 0:h.layoutBox),u}removeTransform(a){var c;const l=ut();Dn(l,a);for(let u=0;u<this.path.length;u++){const f=this.path[u];if(!Js(f.latestValues))continue;let h;f.instance&&(mm(f.latestValues)&&f.updateSnapshot(),h=ut(),Dn(h,f.measurePageBox())),zy(l,f.latestValues,(c=f.snapshot)==null?void 0:c.layoutBox,h)}return Js(this.latestValues)&&zy(l,this.latestValues),l}setTargetDelta(a){this.targetDelta=a,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(a){this.options={...this.options,...a,crossfade:a.crossfade!==void 0?a.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==bt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(a=!1){var m;const l=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=l.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=l.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=l.isSharedProjectionDirty);const c=!!this.resumingFrom||this!==l;if(!(a||c&&this.isSharedProjectionDirty||this.isProjectionDirty||(m=this.parent)!=null&&m.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:h}=this.options;if(!this.layout||!(f||h))return;this.resolvedRelativeTargetAt=bt.timestamp;const p=this.getClosestProjectingParent();p&&this.linkedParentVersion!==p.layoutVersion&&!p.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(this.options.layoutAnchor!==!1&&p&&p.layout?this.createRelativeTarget(p,this.layout.layoutBox,p.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=ut(),this.targetWithTransforms=ut()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),GF(this.target,this.relativeTarget,this.relativeParent.target,this.options.layoutAnchor||void 0)):this.targetDelta?(this.resumingFrom?this.applyTransform(this.layout.layoutBox,!1,this.target):Dn(this.target,this.layout.layoutBox),B2(this.target,this.targetDelta)):Dn(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,this.options.layoutAnchor!==!1&&p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?this.createRelativeTarget(p,this.target,p.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||mm(this.parent.latestValues)||z2(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(a,l,c){this.relativeParent=a,this.linkedParentVersion=a.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=ut(),this.relativeTargetOrigin=ut(),id(this.relativeTargetOrigin,l,c,this.options.layoutAnchor||void 0),Dn(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const a=this.getLead(),l=!!this.resumingFrom||this!==a;let c=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(c=!1),l&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(c=!1),this.resolvedRelativeTargetAt===bt.timestamp&&(c=!1),c)return;const{layout:u,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||f))return;Dn(this.layoutCorrected,this.layout.layoutBox);const h=this.treeScale.x,p=this.treeScale.y;SF(this.layoutCorrected,this.treeScale,this.path,l),a.layout&&!a.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(a.target=a.layout.layoutBox,a.targetWithTransforms=ut());const{target:m}=a;if(!m){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Ay(this.prevProjectionDelta.x,this.projectionDelta.x),Ay(this.prevProjectionDelta.y,this.projectionDelta.y)),Za(this.projectionDelta,this.layoutCorrected,m,this.latestValues),(this.treeScale.x!==h||this.treeScale.y!==p||!Hy(this.projectionDelta.x,this.prevProjectionDelta.x)||!Hy(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(a=!0){var l;if((l=this.options.visualElement)==null||l.scheduleRender(),a){const c=this.getStack();c&&c.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=co(),this.projectionDelta=co(),this.projectionDeltaWithTransform=co()}setAnimationOrigin(a,l=!1){const c=this.snapshot,u=c?c.latestValues:{},f={...this.latestValues},h=co();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const p=ut(),m=c?c.source:void 0,g=this.layout?this.layout.source:void 0,v=m!==g,y=this.getStack(),b=!y||y.members.length<=1,x=!!(v&&!b&&this.options.crossfade===!0&&!this.path.some(kz));this.animationProgress=0;let w;this.mixTargetDelta=S=>{const k=S/1e3;Qy(h.x,a.x,k),Qy(h.y,a.y,k),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(id(p,this.layout.layoutBox,this.relativeParent.layout.layoutBox,this.options.layoutAnchor||void 0),Sz(this.relativeTarget,this.relativeTargetOrigin,p,k),w&&QF(this.relativeTarget,w)&&(this.isProjectionDirty=!1),w||(w=ut()),Dn(w,this.relativeTarget)),v&&(this.animationValues=f,ez(f,u,this.latestValues,k,x,b)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=k},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(a){var l,c,u;this.notifyListeners("animationStart"),(l=this.currentAnimation)==null||l.stop(),(u=(c=this.resumingFrom)==null?void 0:c.currentAnimation)==null||u.stop(),this.pendingAnimation&&(_s(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Ue.update(()=>{fu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=Wo(0)),this.motionValue.jump(0,!1),this.currentAnimation=rz(this.motionValue,[0,1e3],{...a,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),a.onUpdate&&a.onUpdate(f)},onStop:()=>{},onComplete:()=>{a.onComplete&&a.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const a=this.getStack();a&&a.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(lz),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const a=this.getLead();let{targetWithTransforms:l,target:c,layout:u,latestValues:f}=a;if(!(!l||!c||!u)){if(this!==a&&this.layout&&u&&sE(this.options.animationType,this.layout.layoutBox,u.layoutBox)){c=this.target||ut();const h=Vt(this.layout.layoutBox.x);c.x.min=a.target.x.min,c.x.max=c.x.min+h;const p=Vt(this.layout.layoutBox.y);c.y.min=a.target.y.min,c.y.max=c.y.min+p}Dn(l,c),uu(l,f),Za(this.projectionDeltaWithTransform,this.layoutCorrected,l,f)}}registerSharedNode(a,l){this.sharedNodes.has(a)||this.sharedNodes.set(a,new az),this.sharedNodes.get(a).add(l);const u=l.options.initialPromotionConfig;l.promote({transition:u?u.transition:void 0,preserveFollowOpacity:u&&u.shouldPreserveFollowOpacity?u.shouldPreserveFollowOpacity(l):void 0})}isLead(){const a=this.getStack();return a?a.lead===this:!0}getLead(){var l;const{layoutId:a}=this.options;return a?((l=this.getStack())==null?void 0:l.lead)||this:this}getPrevLead(){var l;const{layoutId:a}=this.options;return a?(l=this.getStack())==null?void 0:l.prevLead:void 0}getStack(){const{layoutId:a}=this.options;if(a)return this.root.sharedNodes.get(a)}promote({needsReset:a,transition:l,preserveFollowOpacity:c}={}){const u=this.getStack();u&&u.promote(this,c),a&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const a=this.getStack();return a?a.relegate(this):!1}resetSkewAndRotation(){const{visualElement:a}=this.options;if(!a)return;let l=!1;const{latestValues:c}=a;if((c.z||c.rotate||c.rotateX||c.rotateY||c.rotateZ||c.skewX||c.skewY)&&(l=!0),!l)return;const u={};c.z&&fh("z",a,u,this.animationValues);for(let f=0;f<dh.length;f++)fh(`rotate${dh[f]}`,a,u,this.animationValues),fh(`skew${dh[f]}`,a,u,this.animationValues);a.render();for(const f in u)a.setStaticValue(f,u[f]),this.animationValues&&(this.animationValues[f]=u[f]);a.scheduleRender()}applyProjectionStyles(a,l){if(!this.instance||this.isSVG)return;if(!this.isVisible){a.visibility="hidden";return}const c=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,a.visibility="",a.opacity="",a.pointerEvents=du(l==null?void 0:l.pointerEvents)||"",a.transform=c?c(this.latestValues,""):"none";return}const u=this.getLead();if(!this.projectionDelta||!this.layout||!u.target){this.options.layoutId&&(a.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,a.pointerEvents=du(l==null?void 0:l.pointerEvents)||""),this.hasProjected&&!Js(this.latestValues)&&(a.transform=c?c({},""):"none",this.hasProjected=!1);return}a.visibility="";const f=u.animationValues||u.latestValues;this.applyTransformsToTarget();let h=XF(this.projectionDeltaWithTransform,this.treeScale,f);c&&(h=c(f,h)),a.transform=h;const{x:p,y:m}=this.projectionDelta;a.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,u.animationValues?a.opacity=u===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:a.opacity=u===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in vm){if(f[g]===void 0)continue;const{correct:v,applyTo:y,isCSSVariable:b}=vm[g],x=h==="none"?f[g]:v(f[g],u);if(y){const w=y.length;for(let S=0;S<w;S++)a[y[S]]=x}else b?this.options.visualElement.renderState.vars[g]=x:a[g]=x}this.options.layoutId&&(a.pointerEvents=u===this?du(l==null?void 0:l.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(a=>{var l;return(l=a.currentAnimation)==null?void 0:l.stop()}),this.root.nodes.forEach(qy),this.root.sharedNodes.clear()}}}function uz(e){e.updateLayout()}function dz(e){var n;const t=((n=e.resumeFrom)==null?void 0:n.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:r,measuredBox:s}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;if(i==="size")or(h=>{const p=a?t.measuredBox[h]:t.layoutBox[h],m=Vt(p);p.min=r[h].min,p.max=p.min+m});else if(i==="x"||i==="y"){const h=i==="x"?"y":"x";xm(a?t.measuredBox[h]:t.layoutBox[h],r[h])}else sE(i,t.layoutBox,r)&&or(h=>{const p=a?t.measuredBox[h]:t.layoutBox[h],m=Vt(r[h]);p.max=p.min+m,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+m)});const l=co();Za(l,r,t.layoutBox);const c=co();a?Za(c,e.applyTransform(s,!0),t.measuredBox):Za(c,r,t.layoutBox);const u=!X2(l);let f=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:p,layout:m}=h;if(p&&m){const g=e.options.layoutAnchor||void 0,v=ut();id(v,t.layoutBox,p.layoutBox,g);const y=ut();id(y,r,m.layoutBox,g),J2(v,y)||(f=!0),h.options.layoutRoot&&(e.relativeTarget=y,e.relativeTargetOrigin=v,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:r,snapshot:t,delta:c,layoutDelta:l,hasLayoutChanged:u,hasRelativeLayoutChanged:f})}else if(e.isLead()){const{onExitComplete:r}=e.options;r&&r()}e.options.transition=void 0}function fz(e){e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function hz(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function pz(e){e.clearSnapshot()}function qy(e){e.clearMeasurements()}function mz(e){e.isLayoutDirty=!0,e.updateLayout()}function Zy(e){e.isLayoutDirty=!1}function gz(e){e.isAnimationBlocked&&e.layout&&!e.isLayoutDirty&&(e.snapshot=e.layout,e.isLayoutDirty=!0)}function vz(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Yy(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function xz(e){e.resolveTargetDelta()}function yz(e){e.calcProjection()}function bz(e){e.resetSkewAndRotation()}function wz(e){e.removeLeadSnapshot()}function Qy(e,t,n){e.translate=Ye(t.translate,0,n),e.scale=Ye(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Xy(e,t,n,r){e.min=Ye(t.min,n.min,r),e.max=Ye(t.max,n.max,r)}function Sz(e,t,n,r){Xy(e.x,t.x,n.x,r),Xy(e.y,t.y,n.y,r)}function kz(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const Cz={duration:.45,ease:[.4,0,.1,1]},Jy=e=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),eb=Jy("applewebkit/")&&!Jy("chrome/")?Math.round:jn;function tb(e){e.min=eb(e.min),e.max=eb(e.max)}function jz(e){tb(e.x),tb(e.y)}function sE(e,t,n){return e==="position"||e==="preserve-aspect"&&!KF(Uy(t),Uy(n),.2)}function Ez(e){var t;return e!==e.root&&((t=e.scroll)==null?void 0:t.wasRoot)}const Nz=rE({attachResizeListener:(e,t)=>Ll(e,"resize",t),measureScroll:()=>{var e,t;return{x:document.documentElement.scrollLeft||((e=document.body)==null?void 0:e.scrollLeft)||0,y:document.documentElement.scrollTop||((t=document.body)==null?void 0:t.scrollTop)||0}},checkIsScrollRoot:()=>!0}),hh={current:void 0},iE=rE({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!hh.current){const e=new Nz({});e.mount(window),e.setOptions({layoutScroll:!0}),hh.current=e}return hh.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),oE=d.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"});function Lz(e=!0){const t=d.useContext(t0);if(t===null)return[!0,null];const{isPresent:n,onExitComplete:r,register:s}=t,i=d.useId();d.useEffect(()=>{if(e)return s(i)},[e]);const a=d.useCallback(()=>e&&r&&r(i),[i,r,e]);return!n&&r?[!1,a]:[!0]}const aE=d.createContext({strict:!1}),nb={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let rb=!1;function Pz(){if(rb)return;const e={};for(const t in nb)e[t]={isEnabled:n=>nb[t].some(r=>!!n[r])};D2(e),rb=!0}function lE(){return Pz(),xF()}function Tz(e){const t=lE();for(const n in e)t[n]={...t[n],...e[n]};D2(t)}const Mz=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function od(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||Mz.has(e)}let cE=e=>!od(e);function Rz(e){typeof e=="function"&&(cE=t=>t.startsWith("on")?!od(t):e(t))}try{Rz(require("@emotion/is-prop-valid").default)}catch{}function Az(e,t,n){const r={};for(const s in e)s==="values"&&typeof e.values=="object"||kt(e[s])||(cE(s)||n===!0&&od(s)||!t&&!od(s)||e.draggable&&s.startsWith("onDrag"))&&(r[s]=e[s]);return r}const lf=d.createContext({});function Oz(e,t){if(af(e)){const{initial:n,animate:r}=e;return{initial:n===!1||Nl(n)?n:void 0,animate:Nl(r)?r:void 0}}return e.inherit!==!1?t:{}}function Iz(e){const{initial:t,animate:n}=Oz(e,d.useContext(lf));return d.useMemo(()=>({initial:t,animate:n}),[sb(t),sb(n)])}function sb(e){return Array.isArray(e)?e.join(" "):e}const j0=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function uE(e,t,n){for(const r in t)!kt(t[r])&&!U2(r,n)&&(e[r]=t[r])}function Dz({transformTemplate:e},t){return d.useMemo(()=>{const n=j0();return k0(n,t,e),Object.assign({},n.vars,n.style)},[t])}function _z(e,t){const n=e.style||{},r={};return uE(r,n,e),Object.assign(r,Dz(e,t)),r}function Fz(e,t){const n={},r=_z(e,t);return e.drag&&e.dragListener!==!1&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const dE=()=>({...j0(),attrs:{}});function zz(e,t,n,r){const s=d.useMemo(()=>{const i=dE();return H2(i,t,K2(r),e.transformTemplate,e.style),{...i.attrs,style:{...i.style}}},[t]);if(e.style){const i={};uE(i,e.style,e),s.style={...i,...s.style}}return s}const Bz=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function E0(e){return typeof e!="string"||e.includes("-")?!1:!!(Bz.indexOf(e)>-1||/[A-Z]/u.test(e))}function Vz(e,t,n,{latestValues:r},s,i=!1,a){const c=(a??E0(e)?zz:Fz)(t,r,s,e),u=Az(t,typeof e=="string",i),f=e!==d.Fragment?{...u,...c,ref:n}:{},{children:h}=t,p=d.useMemo(()=>kt(h)?h.get():h,[h]);return d.createElement(e,{...f,children:p})}function $z({scrapeMotionValuesFromProps:e,createRenderState:t},n,r,s){return{latestValues:Uz(n,r,s,e),renderState:t()}}function Uz(e,t,n,r){const s={},i=r(e,{});for(const p in i)s[p]=du(i[p]);let{initial:a,animate:l}=e;const c=af(e),u=O2(e);t&&u&&!c&&e.inherit!==!1&&(a===void 0&&(a=t.initial),l===void 0&&(l=t.animate));let f=n?n.initial===!1:!1;f=f||a===!1;const h=f?l:a;if(h&&typeof h!="boolean"&&!of(h)){const p=Array.isArray(h)?h:[h];for(let m=0;m<p.length;m++){const g=m0(e,p[m]);if(g){const{transitionEnd:v,transition:y,...b}=g;for(const x in b){let w=b[x];if(Array.isArray(w)){const S=f?w.length-1:0;w=w[S]}w!==null&&(s[x]=w)}for(const x in v)s[x]=v[x]}}}return s}const fE=e=>(t,n)=>{const r=d.useContext(lf),s=d.useContext(t0),i=()=>$z(e,t,r,s);return n?i():B4(i)},Hz=fE({scrapeMotionValuesFromProps:C0,createRenderState:j0}),Wz=fE({scrapeMotionValuesFromProps:G2,createRenderState:dE}),Kz=Symbol.for("motionComponentSymbol");function Gz(e,t,n){const r=d.useRef(n);d.useInsertionEffect(()=>{r.current=n});const s=d.useRef(null);return d.useCallback(i=>{var l;i&&((l=e.onMount)==null||l.call(e,i));const a=r.current;if(typeof a=="function")if(i){const c=a(i);typeof c=="function"&&(s.current=c)}else s.current?(s.current(),s.current=null):a(i);else a&&(a.current=i);t&&(i?t.mount(i):t.unmount())},[t])}const hE=d.createContext({});function Gi(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function qz(e,t,n,r,s,i){var w,S;const{visualElement:a}=d.useContext(lf),l=d.useContext(aE),c=d.useContext(t0),u=d.useContext(oE),f=u.reducedMotion,h=u.skipAnimations,p=d.useRef(null),m=d.useRef(!1);r=r||l.renderer,!p.current&&r&&(p.current=r(e,{visualState:t,parent:a,props:n,presenceContext:c,blockInitialAnimation:c?c.initial===!1:!1,reducedMotionConfig:f,skipAnimations:h,isSVG:i}),m.current&&p.current&&(p.current.manuallyAnimateOnMount=!0));const g=p.current,v=d.useContext(hE);g&&!g.projection&&s&&(g.type==="html"||g.type==="svg")&&Zz(p.current,n,s,v);const y=d.useRef(!1);d.useInsertionEffect(()=>{g&&y.current&&g.update(n,c)});const b=n[w2],x=d.useRef(!!b&&typeof window<"u"&&!((w=window.MotionHandoffIsComplete)!=null&&w.call(window,b))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,b)));return $4(()=>{m.current=!0,g&&(y.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),x.current&&g.animationState&&g.animationState.animateChanges())}),d.useEffect(()=>{g&&(!x.current&&g.animationState&&g.animationState.animateChanges(),x.current&&(queueMicrotask(()=>{var k;(k=window.MotionHandoffMarkAsComplete)==null||k.call(window,b)}),x.current=!1),g.enteringChildren=void 0)}),g}function Zz(e,t,n,r){const{layoutId:s,layout:i,drag:a,dragConstraints:l,layoutScroll:c,layoutRoot:u,layoutAnchor:f,layoutCrossfade:h}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:pE(e.parent)),e.projection.setOptions({layoutId:s,layout:i,alwaysMeasureLayout:!!a||l&&Gi(l),visualElement:e,animationType:typeof i=="string"?i:"both",initialPromotionConfig:r,crossfade:h,layoutScroll:c,layoutRoot:u,layoutAnchor:f})}function pE(e){if(e)return e.options.allowProjection!==!1?e.projection:pE(e.parent)}function ph(e,{forwardMotionProps:t=!1,type:n}={},r,s){r&&Tz(r);const i=n?n==="svg":E0(e),a=i?Wz:Hz;function l(u,f){let h;const p={...d.useContext(oE),...u,layoutId:Yz(u)},{isStatic:m}=p,g=Iz(u),v=a(u,m);if(!m&&typeof window<"u"){Qz();const y=Xz(p);h=y.MeasureLayout,g.visualElement=qz(e,v,p,s,y.ProjectionNode,i)}return o.jsxs(lf.Provider,{value:g,children:[h&&g.visualElement?o.jsx(h,{visualElement:g.visualElement,...p}):null,Vz(e,u,Gz(v,g.visualElement,f),v,m,t,i)]})}l.displayName=`motion.${typeof e=="string"?e:`create(${e.displayName??e.name??""})`}`;const c=d.forwardRef(l);return c[Kz]=e,c}function Yz({layoutId:e}){const t=d.useContext(Aj).id;return t&&e!==void 0?t+"-"+e:e}function Qz(e,t){d.useContext(aE).strict}function Xz(e){const t=lE(),{drag:n,layout:r}=t;if(!n&&!r)return{};const s={...n,...r};return{MeasureLayout:n!=null&&n.isEnabled(e)||r!=null&&r.isEnabled(e)?s.MeasureLayout:void 0,ProjectionNode:s.ProjectionNode}}function Jz(e,t){if(typeof Proxy>"u")return ph;const n=new Map,r=(i,a)=>ph(i,a,e,t),s=(i,a)=>r(i,a);return new Proxy(s,{get:(i,a)=>a==="create"?r:(n.has(a)||n.set(a,ph(a,void 0,e,t)),n.get(a))})}const e6=(e,t)=>t.isSVG??E0(e)?new IF(t):new PF(t,{allowProjection:e!==d.Fragment});class t6 extends Us{constructor(t){super(t),t.animationState||(t.animationState=BF(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();of(t)&&(this.unmountControls=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){var t;this.node.animationState.reset(),(t=this.unmountControls)==null||t.call(this)}}let n6=0;class r6 extends Us{constructor(){super(...arguments),this.id=n6++,this.isExitComplete=!1}update(){var i;if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;if(t&&r===!1){if(this.isExitComplete){const{initial:a,custom:l}=this.node.getProps();if(typeof a=="string"){const c=vi(this.node,a,l);if(c){const{transition:u,transitionEnd:f,...h}=c;for(const p in h)(i=this.node.getValue(p))==null||i.jump(h[p])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const s=this.node.animationState.setActive("exit",!t);n&&!t&&s.then(()=>{this.isExitComplete=!0,n(this.id)})}mount(){const{register:t,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),t&&(this.unmount=t(this.id))}unmount(){}}const s6={animation:{Feature:t6},exit:{Feature:r6}};function ec(e){return{point:{x:e.pageX,y:e.pageY}}}const i6=e=>t=>y0(t)&&e(t,ec(t));function Ya(e,t,n,r){return Ll(e,t,i6(n),r)}const mE=({current:e})=>e?e.ownerDocument.defaultView:null,ib=(e,t)=>Math.abs(e-t);function o6(e,t){const n=ib(e.x,t.x),r=ib(e.y,t.y);return Math.sqrt(n**2+r**2)}const ob=new Set(["auto","scroll"]);class gE{constructor(t,n,{transformPagePoint:r,contextWindow:s=window,dragSnapToOrigin:i=!1,distanceThreshold:a=3,element:l}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=m=>{this.handleScroll(m.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Mc(this.lastRawMoveEventInfo,this.transformPagePoint));const m=mh(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,v=o6(m.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!v)return;const{point:y}=m,{timestamp:b}=bt;this.history.push({...y,timestamp:b});const{onStart:x,onMove:w}=this.handlers;g||(x&&x(this.lastMoveEvent,m),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,m)},this.handlePointerMove=(m,g)=>{this.lastMoveEvent=m,this.lastRawMoveEventInfo=g,this.lastMoveEventInfo=Mc(g,this.transformPagePoint),Ue.update(this.updatePoint,!0)},this.handlePointerUp=(m,g)=>{this.end();const{onEnd:v,onSessionEnd:y,resumeAnimation:b}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&b&&b(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const x=mh(m.type==="pointercancel"?this.lastMoveEventInfo:Mc(g,this.transformPagePoint),this.history);this.startEvent&&v&&v(m,x),y&&y(m,x)},!y0(t))return;this.dragSnapToOrigin=i,this.handlers=n,this.transformPagePoint=r,this.distanceThreshold=a,this.contextWindow=s||window;const c=ec(t),u=Mc(c,this.transformPagePoint),{point:f}=u,{timestamp:h}=bt;this.history=[{...f,timestamp:h}];const{onSessionStart:p}=n;p&&p(t,mh(u,this.history)),this.removeListeners=Ql(Ya(this.contextWindow,"pointermove",this.handlePointerMove),Ya(this.contextWindow,"pointerup",this.handlePointerUp),Ya(this.contextWindow,"pointercancel",this.handlePointerUp)),l&&this.startScrollTracking(l)}startScrollTracking(t){let n=t.parentElement;for(;n;){const r=getComputedStyle(n);(ob.has(r.overflowX)||ob.has(r.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(t){const n=this.scrollPositions.get(t);if(!n)return;const r=t===window,s=r?{x:window.scrollX,y:window.scrollY}:{x:t.scrollLeft,y:t.scrollTop},i={x:s.x-n.x,y:s.y-n.y};i.x===0&&i.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=i.x,this.lastMoveEventInfo.point.y+=i.y):this.history.length>0&&(this.history[0].x-=i.x,this.history[0].y-=i.y),this.scrollPositions.set(t,s),Ue.update(this.updatePoint,!0))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),_s(this.updatePoint)}}function Mc(e,t){return t?{point:t(e.point)}:e}function ab(e,t){return{x:e.x-t.x,y:e.y-t.y}}function mh({point:e},t){return{point:e,delta:ab(e,vE(t)),offset:ab(e,a6(t)),velocity:l6(t,.1)}}function a6(e){return e[0]}function vE(e){return e[e.length-1]}function l6(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const s=vE(e);for(;n>=0&&(r=e[n],!(s.timestamp-r.timestamp>tn(t)));)n--;if(!r)return{x:0,y:0};r===e[0]&&e.length>2&&s.timestamp-r.timestamp>tn(t)*2&&(r=e[1]);const i=Sn(s.timestamp-r.timestamp);if(i===0)return{x:0,y:0};const a={x:(s.x-r.x)/i,y:(s.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function c6(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Ye(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Ye(n,e,r.max):Math.min(e,n)),e}function lb(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function u6(e,{top:t,left:n,bottom:r,right:s}){return{x:lb(e.x,n,s),y:lb(e.y,t,r)}}function cb(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function d6(e,t){return{x:cb(e.x,t.x),y:cb(e.y,t.y)}}function f6(e,t){let n=.5;const r=Vt(e),s=Vt(t);return s>r?n=jl(t.min,t.max-r,e.min):r>s&&(n=jl(e.min,e.max-s,t.min)),br(0,1,n)}function h6(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const ym=.35;function p6(e=ym){return e===!1?e=0:e===!0&&(e=ym),{x:ub(e,"left","right"),y:ub(e,"top","bottom")}}function ub(e,t,n){return{min:db(e,t),max:db(e,n)}}function db(e,t){return typeof e=="number"?e:e[t]||0}const m6=new WeakMap;class g6{constructor(t){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=ut(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=t}start(t,{snapToCursor:n=!1,distanceThreshold:r}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const i=h=>{n&&this.snapToCursor(ec(h).point),this.stopAnimation()},a=(h,p)=>{const{drag:m,dragPropagation:g,onDragStart:v}=this.getProps();if(m&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=q3(m),!this.openDragLock))return;this.latestPointerEvent=h,this.latestPanInfo=p,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),or(b=>{let x=this.getAxisMotionValue(b).get()||0;if(xr.test(x)){const{projection:w}=this.visualElement;if(w&&w.layout){const S=w.layout.layoutBox[b];S&&(x=Vt(S)*(parseFloat(x)/100))}}this.originPoint[b]=x}),v&&Ue.update(()=>v(h,p),!1,!0),um(this.visualElement,"transform");const{animationState:y}=this.visualElement;y&&y.setActive("whileDrag",!0)},l=(h,p)=>{this.latestPointerEvent=h,this.latestPanInfo=p;const{dragPropagation:m,dragDirectionLock:g,onDirectionLock:v,onDrag:y}=this.getProps();if(!m&&!this.openDragLock)return;const{offset:b}=p;if(g&&this.currentDirection===null){this.currentDirection=x6(b),this.currentDirection!==null&&v&&v(this.currentDirection);return}this.updateAxis("x",p.point,b),this.updateAxis("y",p.point,b),this.visualElement.render(),y&&Ue.update(()=>y(h,p),!1,!0)},c=(h,p)=>{this.latestPointerEvent=h,this.latestPanInfo=p,this.stop(h,p),this.latestPointerEvent=null,this.latestPanInfo=null},u=()=>{const{dragSnapToOrigin:h}=this.getProps();(h||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new gE(t,{onSessionStart:i,onStart:a,onMove:l,onSessionEnd:c,resumeAnimation:u},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:r,contextWindow:mE(this.visualElement),element:this.visualElement.current})}stop(t,n){const r=t||this.latestPointerEvent,s=n||this.latestPanInfo,i=this.isDragging;if(this.cancel(),!i||!s||!r)return;const{velocity:a}=s;this.startAnimation(a);const{onDragEnd:l}=this.getProps();l&&Ue.postRender(()=>l(r,s))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(t,n,r){const{drag:s}=this.getProps();if(!r||!Rc(t,s,this.currentDirection))return;const i=this.getAxisMotionValue(t);let a=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(a=c6(a,this.constraints[t],this.elastic[t])),i.set(a)}resolveConstraints(){var i;const{dragConstraints:t,dragElastic:n}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(i=this.visualElement.projection)==null?void 0:i.layout,s=this.constraints;t&&Gi(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=u6(r.layoutBox,t):this.constraints=!1,this.elastic=p6(n),s!==this.constraints&&!Gi(t)&&r&&this.constraints&&!this.hasMutatedConstraints&&or(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=h6(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!Gi(t))return!1;const r=t.current;Uo(r!==null,"If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.","drag-constraints-ref");const{projection:s}=this.visualElement;if(!s||!s.layout)return!1;const i=kF(r,s.root,this.visualElement.getTransformPagePoint());let a=d6(s.layout.layoutBox,i);if(n){const l=n(bF(a));this.hasMutatedConstraints=!!l,l&&(a=F2(l))}return a}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:s,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},u=or(f=>{if(!Rc(f,n,this.currentDirection))return;let h=c&&c[f]||{};(a===!0||a===f)&&(h={min:0,max:0});const p=s?200:1e6,m=s?40:1e7,g={type:"inertia",velocity:r?t[f]:0,bounceStiffness:p,bounceDamping:m,timeConstant:750,restDelta:1,restSpeed:10,...i,...h};return this.startAxisValueAnimation(f,g)});return Promise.all(u).then(l)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return um(this.visualElement,t),r.start(p0(t,r,0,n,this.visualElement,!1))}stopAnimation(){or(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){const n=`_drag${t.toUpperCase()}`,r=this.visualElement.getProps(),s=r[n];return s||this.visualElement.getValue(t,(r.initial?r.initial[t]:void 0)||0)}snapToCursor(t){or(n=>{const{drag:r}=this.getProps();if(!Rc(n,r,this.currentDirection))return;const{projection:s}=this.visualElement,i=this.getAxisMotionValue(n);if(s&&s.layout){const{min:a,max:l}=s.layout.layoutBox[n],c=i.get()||0;i.set(t[n]-Ye(a,l,.5)+c)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:r}=this.visualElement;if(!Gi(n)||!r||!this.constraints)return;this.stopAnimation();const s={x:0,y:0};or(a=>{const l=this.getAxisMotionValue(a);if(l&&this.constraints!==!1){const c=l.get();s[a]=f6({min:c,max:c},this.constraints[a])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),or(a=>{if(!Rc(a,t,null))return;const l=this.getAxisMotionValue(a),{min:c,max:u}=this.constraints[a];l.set(Ye(c,u,s[a]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;m6.set(this.visualElement,this);const t=this.visualElement.current,n=Ya(t,"pointerdown",u=>{const{drag:f,dragListener:h=!0}=this.getProps(),p=u.target,m=p!==t&&eF(p);f&&h&&!m&&this.start(u)});let r;const s=()=>{const{dragConstraints:u}=this.getProps();Gi(u)&&u.current&&(this.constraints=this.resolveRefConstraints(),r||(r=v6(t,u.current,()=>this.scalePositionWithinConstraints())))},{projection:i}=this.visualElement,a=i.addEventListener("measure",s);i&&!i.layout&&(i.root&&i.root.updateScroll(),i.updateLayout()),Ue.read(s);const l=Ll(window,"resize",()=>this.scalePositionWithinConstraints()),c=i.addEventListener("didUpdate",({delta:u,hasLayoutChanged:f})=>{this.isDragging&&f&&(or(h=>{const p=this.getAxisMotionValue(h);p&&(this.originPoint[h]+=u[h].translate,p.set(p.get()+u[h].translate))}),this.visualElement.render())});return()=>{l(),n(),a(),c&&c(),r&&r()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:s=!1,dragConstraints:i=!1,dragElastic:a=ym,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:s,dragConstraints:i,dragElastic:a,dragMomentum:l}}}function fb(e){let t=!0;return()=>{if(t){t=!1;return}e()}}function v6(e,t,n){const r=wy(e,fb(n)),s=wy(t,fb(n));return()=>{r(),s()}}function Rc(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function x6(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class y6 extends Us{constructor(t){super(t),this.removeGroupControls=jn,this.removeListeners=jn,this.controls=new g6(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||jn}update(){const{dragControls:t}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};t!==n&&(this.removeGroupControls(),t&&(this.removeGroupControls=t.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const gh=e=>(t,n)=>{e&&Ue.update(()=>e(t,n),!1,!0)};class b6 extends Us{constructor(){super(...arguments),this.removePointerDownListener=jn}onPointerDown(t){this.session=new gE(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:mE(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:r,onPanEnd:s}=this.node.getProps();return{onSessionStart:gh(t),onStart:gh(n),onMove:gh(r),onEnd:(i,a)=>{delete this.session,s&&Ue.postRender(()=>s(i,a))}}}mount(){this.removePointerDownListener=Ya(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let vh=!1;class w6 extends d.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:s}=this.props,{projection:i}=t;i&&(n.group&&n.group.add(i),r&&r.register&&s&&r.register(i),vh&&i.root.didUpdate(),i.addEventListener("animationComplete",()=>{this.safeToRemove()}),i.setOptions({...i.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),fu.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:s,isPresent:i}=this.props,{projection:a}=r;return a&&(a.isPresent=i,t.layoutDependency!==n&&a.setOptions({...a.options,layoutDependency:n}),vh=!0,s||t.layoutDependency!==n||n===void 0||t.isPresent!==i?a.willUpdate():this.safeToRemove(),t.isPresent!==i&&(i?a.promote():a.relegate()||Ue.postRender(()=>{const l=a.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{visualElement:t,layoutAnchor:n}=this.props,{projection:r}=t;r&&(r.options.layoutAnchor=n,r.root.didUpdate(),x0.postRender(()=>{!r.currentAnimation&&r.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:s}=t;vh=!0,s&&(s.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(s),r&&r.deregister&&r.deregister(s))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function xE(e){const[t,n]=Lz(),r=d.useContext(Aj);return o.jsx(w6,{...e,layoutGroup:r,switchLayoutGroup:d.useContext(hE),isPresent:t,safeToRemove:n})}const S6={pan:{Feature:b6},drag:{Feature:y6,ProjectionNode:iE,MeasureLayout:xE}};function hb(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover",n==="Start");const s="onHover"+n,i=r[s];i&&Ue.postRender(()=>i(t,ec(t)))}class k6 extends Us{mount(){const{current:t}=this.node;t&&(this.unmount=Y3(t,(n,r)=>(hb(this.node,r,"Start"),s=>hb(this.node,s,"End"))))}unmount(){}}class C6 extends Us{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=Ql(Ll(this.node.current,"focus",()=>this.onFocus()),Ll(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function pb(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap",n==="Start");const s="onTap"+(n==="End"?"":n),i=r[s];i&&Ue.postRender(()=>i(t,ec(t)))}class j6 extends Us{mount(){const{current:t}=this.node;if(!t)return;const{globalTapTarget:n,propagate:r}=this.node.props;this.unmount=nF(t,(s,i)=>(pb(this.node,i,"Start"),(a,{success:l})=>pb(this.node,a,l?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(r==null?void 0:r.tap)===!1})}unmount(){}}const bm=new WeakMap,xh=new WeakMap,E6=e=>{const t=bm.get(e.target);t&&t(e)},N6=e=>{e.forEach(E6)};function L6({root:e,...t}){const n=e||document;xh.has(n)||xh.set(n,{});const r=xh.get(n),s=JSON.stringify(t);return r[s]||(r[s]=new IntersectionObserver(N6,{root:e,...t})),r[s]}function P6(e,t,n){const r=L6(t);return bm.set(e,n),r.observe(e),()=>{bm.delete(e),r.unobserve(e)}}const T6={some:0,all:1};class M6 extends Us{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){var c;(c=this.stopObserver)==null||c.call(this);const{viewport:t={}}=this.node.getProps(),{root:n,margin:r,amount:s="some",once:i}=t,a={root:n?n.current:void 0,rootMargin:r,threshold:typeof s=="number"?s:T6[s]},l=u=>{const{isIntersecting:f}=u;if(this.isInView===f||(this.isInView=f,i&&!f&&this.hasEnteredView))return;f&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",f);const{onViewportEnter:h,onViewportLeave:p}=this.node.getProps(),m=f?h:p;m&&m(u)};this.stopObserver=P6(this.node.current,a,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(R6(t,n))&&this.startObserver()}unmount(){var t;(t=this.stopObserver)==null||t.call(this),this.hasEnteredView=!1,this.isInView=!1}}function R6({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const A6={inView:{Feature:M6},tap:{Feature:j6},focus:{Feature:C6},hover:{Feature:k6}},O6={layout:{ProjectionNode:iE,MeasureLayout:xE}},I6={...s6,...A6,...S6,...O6},ee=Jz(I6,e6),D6=()=>{const e=qr(),{login:t}=Tj(),[n,r]=d.useState(""),[s,i]=d.useState(""),[a,l]=d.useState(!1),[c,u]=d.useState(!1),[f,h]=d.useState(!1),[p,m]=d.useState(!1);if(d.useEffect(()=>{const b=setTimeout(()=>{m(!0)},300);return()=>clearTimeout(b)},[]),!p)return o.jsx("div",{className:"min-h-screen flex items-center justify-center bg-background",children:o.jsx("div",{className:"w-14 h-14 rounded-full border-4 border-orange-500/20 border-t-orange-500 animate-spin"})});const g={hidden:{},show:{transition:{staggerChildren:.12}}},v={hidden:{opacity:0,y:25},show:{opacity:1,y:0,transition:{duration:.5}}},y=async b=>{if(b.preventDefault(),!n||!s){ie({title:"Missing Credentials",description:"Please enter both email and password.",variant:"destructive"});return}u(!0);try{(await t(n,s)).success&&(ie({title:"Access Granted",description:"Welcome back to Barqi Operations."}),e("/dashboard"))}catch(x){console.error("Login Error:",x),ie({title:"Login Failed",description:x.message||"Unable to connect to the server.",variant:"destructive"})}finally{u(!1)}};return o.jsxs(ee.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:"min-h-screen flex selection:bg-orange-100 selection:text-orange-900 font-sans overflow-hidden bg-[#03140F]",children:[o.jsxs(ee.div,{initial:{x:-120,opacity:0,scale:1.05},animate:{x:0,opacity:1,scale:1},transition:{duration:1.2,ease:[.22,1,.36,1]},className:`\r
hidden lg:flex lg:w-1/2 p-12 flex-col justify-between relative overflow-hidden\r
text-white\r
`,children:[o.jsx("div",{className:`\r
absolute inset-0 z-0\r
bg-gradient-to-br\r
from-[#063B2E]\r
via-[#031E18]\r
to-black\r
`}),o.jsx("div",{className:`absolute inset-0 bg-[radial-gradient(#cbd5e120_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff10_1px,transparent_1px)] [background-size:24px_24px] z-0 pointer-events-none opacity-40`}),o.jsx(ee.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:"absolute top-[-10%] left-[-10%] w-96 h-96 bg-green-500/10 rounded-full blur-[100px] z-0"}),o.jsx(ee.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},className:"absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[120px] z-0"}),o.jsx("div",{className:"absolute top-1/2 right-12 transform -translate-y-1/2 z-0 hidden xl:block",children:o.jsxs(ee.div,{animate:{y:[0,-12,0]},transition:{duration:4,repeat:1/0,ease:"easeInOut"},whileHover:{scale:1.03,rotate:2},className:"w-72 bg-white/10 backdrop-blur-2xl border border-white/10 rounded-3xl p-5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] rotate-6 transition-all duration-500",children:[o.jsxs("div",{className:"flex items-center justify-between mb-4",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center animate-pulse",children:o.jsx(Pn,{className:"w-5 h-5 text-green-400"})}),o.jsxs("div",{children:[o.jsx("p",{className:"text-xs text-green-200 font-medium",children:"Network Status"}),o.jsx("p",{className:"text-sm font-bold text-white",children:"Operational"})]})]}),o.jsx("div",{className:"h-2 w-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"})]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center gap-3 text-xs text-white/60",children:[o.jsx(Ci,{className:"w-3.5 h-3.5 text-orange-400"}),o.jsx("span",{className:"flex-1",children:"Active Zones"}),o.jsx("span",{className:"text-white font-mono",children:"12"})]}),o.jsxs("div",{className:"flex items-center gap-3 text-xs text-white/60",children:[o.jsx(Wn,{className:"w-3.5 h-3.5 text-blue-400"}),o.jsx("span",{className:"flex-1",children:"Franchise Nodes"}),o.jsx("span",{className:"text-white font-mono",children:"48"})]}),o.jsx("div",{className:"w-full bg-white/10 rounded-full h-1 mt-2 overflow-hidden",children:o.jsx("div",{className:"bg-orange-500 h-full w-3/4 rounded-full"})})]})]})}),o.jsxs("div",{className:"relative z-10 flex items-center gap-4",children:[o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-white p-1.5 shadow-xl shadow-black/20 ring-1 ring-white/10",children:o.jsx("img",{src:Yp,alt:"Barqi Logo",className:"w-full h-full object-contain rounded-xl"})}),o.jsxs("div",{children:[o.jsx("h1",{className:"text-2xl font-bold tracking-tight text-white",children:"Barqi Operations"}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-orange-500"}),o.jsx("p",{className:"text-xs text-green-200/80 font-medium uppercase tracking-wider",children:"Franchise Portal"})]})]})]}),o.jsxs("div",{className:"relative z-10 space-y-8 max-w-lg mt-12",children:[o.jsxs("h2",{className:"text-5xl font-extrabold leading-tight tracking-tight",children:["Manage your ",o.jsx("br",{}),o.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500",children:"city network"}),o.jsx("br",{}),"in real-time."]}),o.jsx("p",{className:"text-lg text-green-100/70 leading-relaxed",children:"The central command for franchise administrators. Oversee inventory, logistics, and city-wide performance from one dashboard."}),o.jsx("div",{className:"grid grid-cols-1 gap-4 pt-4",children:[{icon:Ci,text:"Multi-City Territory Management"},{icon:Wn,text:"Live Inventory Sync"},{icon:vt,text:"Role-Based Access Control"}].map((b,x)=>o.jsxs("div",{className:"flex items-center gap-4 group",children:[o.jsx("div",{className:"w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-orange-500/20 group-hover:border-orange-500/50 transition-all duration-300",children:o.jsx(b.icon,{className:"w-5 h-5 text-green-200 group-hover:text-orange-400 transition-colors"})}),o.jsx("span",{className:"text-sm font-medium text-green-50",children:b.text})]},x))})]}),o.jsxs("div",{className:"relative z-10 text-xs text-green-400/40 font-medium flex justify-between items-center border-t border-white/5 pt-6",children:[o.jsx("p",{children:"© 2026 Barqi Bazar. Operations Division."}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx("span",{className:"hover:text-orange-400 transition-colors cursor-pointer",children:"Support"}),o.jsx("span",{className:"hover:text-orange-400 transition-colors cursor-pointer",children:"System Status"})]})]})]}),o.jsxs("div",{className:"flex-1 flex items-center justify-center p-6 lg:p-12 relative",children:[o.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#d1d5db_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#334155_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
pointer-events-none\r
`}),o.jsxs(ee.div,{initial:{y:120,opacity:0,scale:.92,rotateX:12,filter:"blur(10px)"},animate:{y:0,opacity:1,scale:1,rotateX:0,filter:"blur(0px)"},transition:{duration:1.1,ease:[.22,1,.36,1]},className:"w-full max-w-[460px] bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl p-8 sm:p-12 rounded-[2rem] shadow-[0_25px_80px_-15px_rgba(0,0,0,0.15)] border border-white/30 dark:border-slate-800 relative overflow-hidden z-10",children:[o.jsx("div",{className:"absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-600 via-orange-500 to-green-600"}),o.jsxs("div",{className:"lg:hidden flex flex-col items-center gap-4 mb-8",children:[o.jsx("div",{className:"w-16 h-16 rounded-2xl bg-white shadow-md border border-gray-100 p-2",children:o.jsx("img",{src:Yp,alt:"Barqi Logo",className:"w-full h-full object-contain"})}),o.jsx("h1",{className:"text-xl font-bold text-gray-900 dark:text-white",children:"Franchise Portal"})]}),o.jsxs("div",{className:"mb-8 text-center lg:text-left space-y-2",children:[o.jsxs("div",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-orange-700 text-[10px] font-bold uppercase tracking-wide mb-2",children:[o.jsx(Bl,{className:"w-3 h-3"})," Admin Access"]}),o.jsx("h2",{className:"text-3xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Welcome Back"}),o.jsx("p",{className:"text-gray-500 dark:text-slate-400 text-sm",children:"Please sign in to manage your franchise node."})]}),o.jsxs(ee.form,{variants:g,initial:"hidden",animate:"show",onSubmit:y,className:"space-y-5",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{htmlFor:"email",className:"text-gray-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wide",children:"Email Address"}),o.jsx(be,{id:"email",type:"email",value:n,onChange:b=>r(b.target.value),placeholder:"admin@barqi.com",required:!0,disabled:c,className:`\r
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
`})]}),o.jsxs(ee.div,{variants:v,className:"space-y-2",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsx(me,{htmlFor:"password",className:"text-gray-700 dark:text-slate-300 font-semibold text-xs uppercase tracking-wide",children:"Password"}),o.jsx("button",{type:"button",onClick:()=>h(!0),className:"text-xs font-semibold text-orange-600 hover:text-orange-700 hover:underline",children:"Forgot password?"})]}),o.jsxs("div",{className:"relative group",children:[o.jsx(be,{id:"password",type:a?"text":"password",value:s,onChange:b=>i(b.target.value),placeholder:"••••••••",required:!0,disabled:c,className:`\r
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
`}),o.jsx("button",{type:"button",onClick:()=>l(!a),className:"absolute right-0 top-0 bottom-0 w-12 flex items-center justify-center text-gray-400 hover:text-gray-600 focus:text-orange-600 transition-colors focus:outline-none","aria-label":a?"Hide password":"Show password",children:a?o.jsx(hR,{className:"w-5 h-5"}):o.jsx(Ul,{className:"w-5 h-5"})})]})]}),o.jsx(ee.div,{variants:v,whileHover:{scale:1.02},whileTap:{scale:.98},children:o.jsx(ne,{type:"submit",className:"w-full h-12 mt-4 text-base font-bold bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 rounded-xl transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2",disabled:c,children:c?o.jsxs(o.Fragment,{children:[o.jsx("div",{className:"w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"}),o.jsx("span",{children:"Authenticating..."})]}):o.jsxs(o.Fragment,{children:[o.jsx("span",{children:"Sign In to Dashboard"}),o.jsx(Fd,{className:"w-4 h-4 opacity-90"})]})})})]}),f&&o.jsxs("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-md animate-in fade-in duration-200",children:[o.jsx("div",{className:"absolute inset-0",onClick:()=>h(!1)}),o.jsxs("div",{className:"relative w-full max-w-md mx-4 bg-white dark:bg-slate-900 rounded-3xl shadow-[0_35px_90px_-20px_rgba(0,0,0,0.3)] border border-gray-200 overflow-hidden animate-in zoom-in-95 duration-300",children:[o.jsx("div",{className:"h-1.5 w-full bg-gradient-to-r from-green-900 via-green-800 to-orange-500"}),o.jsxs("div",{className:"px-8 pt-8 pb-8",children:[o.jsx("div",{className:"group mx-auto w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 transition-all duration-500 hover:rotate-6 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/20",children:o.jsx(pR,{className:"w-7 h-7 text-orange-600 transition-transform duration-500 group-hover:rotate-12"})}),o.jsxs("div",{className:"text-center space-y-3",children:[o.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white tracking-tight",children:"Reset Password?"}),o.jsx("p",{className:"text-sm text-gray-500 dark:text-slate-400 leading-relaxed",children:"You’ll be redirected to the secure password recovery page to regain access to your account."})]}),o.jsxs("div",{className:"mt-8 flex gap-4",children:[o.jsx("button",{onClick:()=>h(!1),className:"flex-1 h-11 rounded-xl text-md tracking-wide font-bold bg-green-600 text-white  shadow-md shadow-green-600/25 hover:bg-green-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200",children:"Cancel"}),o.jsx("button",{type:"button",onClick:()=>{window.open("https://yourlink.com","_blank","noopener,noreferrer"),h(!1)},className:"flex-1 h-11 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white text-md tracking-wide font-bold shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200",children:"Forgot"})]})]})]})]}),o.jsx("div",{className:"mt-8 text-center pt-6 border-t border-gray-100 dark:border-slate-700",children:o.jsxs("p",{className:"text-sm text-gray-500 dark:text-slate-400 flex items-center justify-center gap-2",children:[o.jsx(Bu,{className:"w-3 h-3"}),"Secured by Barqi IAM"]})})]})]})]})},Sa="https://api.barqibazar.org/franchise/api",Ia={getAll:async(e=1,t=10)=>(await fe.get(`${Sa}/cities`,{params:{page:e,limit:t}})).data,getById:async e=>(await fe.get(`${Sa}/cities/${e}`)).data,create:async e=>(await fe.post(`${Sa}/cities`,e)).data,update:async(e,t)=>(await fe.patch(`${Sa}/cities/${e}`,t)).data,deactivate:async e=>(await fe.delete(`${Sa}/cities/${e}`)).data},cf=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(!1),[s,i]=d.useState(null),[a,l]=d.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=d.useCallback(async(p=1,m=10)=>{var g,v,y,b;r(!0),i(null);try{const x=await Ia.getAll(p,m),w=x.data||x;t(w.items||[]),l(S=>{var k,j,C,E,N,L;return{page:((k=w.pagination)==null?void 0:k.page)||p,limit:((j=w.pagination)==null?void 0:j.limit)||m,total:((C=w.pagination)==null?void 0:C.total)||0,totalPages:((E=w.pagination)==null?void 0:E.totalPages)||0,hasNext:((N=w.pagination)==null?void 0:N.hasNext)||!1,hasPrev:((L=w.pagination)==null?void 0:L.hasPrev)||!1}})}catch(x){i(((v=(g=x.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to fetch cities"),ie({title:"Error",description:((b=(y=x.response)==null?void 0:y.data)==null?void 0:b.message)||"Failed to fetch cities",variant:"destructive"})}finally{r(!1)}},[]);return{cities:e,loading:n,error:s,pagination:a,fetchCities:c,createCity:async p=>{var m,g;r(!0);try{const v=await Ia.create(p);return await c(a.page,a.limit),ie({title:"Success",description:"City created successfully"}),v}catch(v){const y=((g=(m=v.response)==null?void 0:m.data)==null?void 0:g.message)||"Failed to create city";throw ie({title:"Error",description:y,variant:"destructive"}),new Error(y)}finally{r(!1)}},updateCity:async(p,m)=>{var g,v;r(!0);try{const y=await Ia.update(p,m);return await c(a.page,a.limit),ie({title:"Success",description:"City updated successfully"}),y}catch(y){const b=((v=(g=y.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to update city";throw ie({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}},deactivateCity:async p=>{var m,g;r(!0);try{const v=await Ia.deactivate(p);return await c(a.page,a.limit),ie({title:"Success",description:"City deactivated successfully"}),v}catch(v){const y=((g=(m=v.response)==null?void 0:m.data)==null?void 0:g.message)||"Failed to deactivate city";throw ie({title:"Error",description:y,variant:"destructive"}),new Error(y)}finally{r(!1)}}}},Bi="https://api.barqibazar.org/franchise/api",qi={getAll:async(e=1,t=10,n=null)=>(await fe.get(`${Bi}/franchises`)).data,getById:async e=>(await fe.get(`${Bi}/franchises/${e}`)).data,create:async e=>(await fe.post(`${Bi}/franchises`,e)).data,update:async(e,t)=>(await fe.patch(`${Bi}/franchises/${e}`,t)).data,terminate:async e=>(await fe.delete(`${Bi}/franchises/${e}`)).data,getMyFranchise:async()=>(await fe.get(`${Bi}/franchises/me/franchise`)).data},uf=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(!1),[s,i]=d.useState(null),[a,l]=d.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=d.useCallback(async(v=1,y=10,b=null)=>{var x,w,S,k;r(!0),i(null);try{const j=await qi.getAll(v,y,b),C=j.data||j;t(C.items||[]),l(E=>{var N,L,T,R,z,I;return{page:((N=C.pagination)==null?void 0:N.page)||v,limit:((L=C.pagination)==null?void 0:L.limit)||y,total:((T=C.pagination)==null?void 0:T.total)||0,totalPages:((R=C.pagination)==null?void 0:R.totalPages)||0,hasNext:((z=C.pagination)==null?void 0:z.hasNext)||!1,hasPrev:((I=C.pagination)==null?void 0:I.hasPrev)||!1}})}catch(j){i(((w=(x=j.response)==null?void 0:x.data)==null?void 0:w.message)||"Failed to fetch franchises"),ie({title:"Error",description:((k=(S=j.response)==null?void 0:S.data)==null?void 0:k.message)||"Failed to fetch franchises",variant:"destructive"})}finally{r(!1)}},[]),u=async v=>{var y,b;r(!0);try{const x=await qi.create(v);return await c(a.page,a.limit),ie({title:"Success",description:"Franchise created successfully"}),x}catch(x){const w=((b=(y=x.response)==null?void 0:y.data)==null?void 0:b.message)||"Failed to create franchise";throw ie({title:"Error",description:w,variant:"destructive"}),new Error(w)}finally{r(!1)}},f=async(v,y)=>{var b,x;r(!0);try{const w=await qi.update(v,y);return await c(a.page,a.limit),ie({title:"Success",description:"Franchise updated successfully"}),w}catch(w){const S=((x=(b=w.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to update franchise";throw ie({title:"Error",description:S,variant:"destructive"}),new Error(S)}finally{r(!1)}},h=async v=>{var y,b;r(!0);try{const x=await qi.terminate(v);return await c(a.page,a.limit),ie({title:"Success",description:"Franchise terminated successfully"}),x}catch(x){const w=((b=(y=x.response)==null?void 0:y.data)==null?void 0:b.message)||"Failed to terminate franchise";throw ie({title:"Error",description:w,variant:"destructive"}),new Error(w)}finally{r(!1)}},[p,m]=d.useState(null),g=d.useCallback(async()=>{var v,y,b,x;r(!0),i(null);try{const w=await qi.getMyFranchise(),S=w.data||w;return m(S||null),S||null}catch(w){i(((y=(v=w.response)==null?void 0:v.data)==null?void 0:y.message)||"Failed to fetch my franchise"),ie({title:"Error",description:((x=(b=w.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to fetch my franchise",variant:"destructive"})}finally{r(!1)}},[]);return{franchises:e,myFranchise:p,loading:n,error:s,pagination:a,fetchFranchises:c,fetchMyFranchise:g,createFranchise:u,updateFranchise:f,terminateFranchise:h}},Vi="https://api.barqibazar.org/franchise/api",$i={getAll:async(e=1,t=10,n=null,r=null)=>{const s={page:e,limit:t};return n&&(s.status=n),r&&(s.franchiseId=r),(await fe.get(`${Vi}/riders`,{params:s})).data},getById:async e=>(await fe.get(`${Vi}/riders/${e}`)).data,create:async e=>(await fe.post(`${Vi}/riders`,e)).data,update:async(e,t)=>(await fe.patch(`${Vi}/riders/${e}`,t)).data,changeStatus:async(e,t,n="")=>(await fe.patch(`${Vi}/riders/${e}/status`,{status:t,reason:n})).data,getStatusHistory:async e=>(await fe.get(`${Vi}/riders/${e}/history`)).data},N0=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(null),[s,i]=d.useState([]),[a,l]=d.useState(!1),[c,u]=d.useState(null),[f,h]=d.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),p=d.useCallback(async(x=1,w=10,S=null,k=null)=>{var j,C,E,N;l(!0),u(null);try{const L=await $i.getAll(x,w,S,k),T=L.data||L;t(T.items||[]),h(R=>{var z,I,F,A,W,M;return{page:((z=T.pagination)==null?void 0:z.page)||x,limit:((I=T.pagination)==null?void 0:I.limit)||w,total:((F=T.pagination)==null?void 0:F.total)||0,totalPages:((A=T.pagination)==null?void 0:A.totalPages)||0,hasNext:((W=T.pagination)==null?void 0:W.hasNext)||!1,hasPrev:((M=T.pagination)==null?void 0:M.hasPrev)||!1}})}catch(L){u(((C=(j=L.response)==null?void 0:j.data)==null?void 0:C.message)||"Failed to fetch riders"),ie({title:"Error",description:((N=(E=L.response)==null?void 0:E.data)==null?void 0:N.message)||"Failed to fetch riders",variant:"destructive"})}finally{l(!1)}},[]),m=d.useCallback(async x=>{var w,S,k,j,C;l(!0),u(null);try{const E=await $i.getById(x),N=((w=E.data)==null?void 0:w.data)||E.data||E;return r(N),N}catch(E){u(((k=(S=E.response)==null?void 0:S.data)==null?void 0:k.message)||"Failed to fetch rider"),ie({title:"Error",description:((C=(j=E.response)==null?void 0:j.data)==null?void 0:C.message)||"Failed to fetch rider",variant:"destructive"})}finally{l(!1)}},[]),g=async x=>{var w,S;l(!0);try{const k=await $i.create(x);return await p(f.page,f.limit),ie({title:"Success",description:"Rider created successfully"}),k}catch(k){const j=(S=(w=k.response)==null?void 0:w.data)==null?void 0:S.message,C=Array.isArray(j)?j.join(", "):j||"Failed to create rider";throw ie({title:"Error",description:C,variant:"destructive"}),new Error(C)}finally{l(!1)}},v=async(x,w)=>{var S,k;l(!0);try{const j=await $i.update(x,w);return await m(x),ie({title:"Success",description:"Rider updated successfully"}),j}catch(j){const C=((k=(S=j.response)==null?void 0:S.data)==null?void 0:k.message)||"Failed to update rider";throw ie({title:"Error",description:C,variant:"destructive"}),new Error(C)}finally{l(!1)}},y=async(x,w,S="")=>{var k,j;l(!0);try{const C=await $i.changeStatus(x,w,S);return await m(x),ie({title:"Success",description:"Rider status changed successfully"}),C}catch(C){const E=((j=(k=C.response)==null?void 0:k.data)==null?void 0:j.message)||"Failed to change rider status";throw ie({title:"Error",description:E,variant:"destructive"}),new Error(E)}finally{l(!1)}},b=d.useCallback(async x=>{var w,S,k,j;l(!0);try{const C=await $i.getStatusHistory(x),E=C.data||C;return i(E.items||[]),E}catch(C){u(((S=(w=C.response)==null?void 0:w.data)==null?void 0:S.message)||"Failed to fetch status history"),ie({title:"Error",description:((j=(k=C.response)==null?void 0:k.data)==null?void 0:j.message)||"Failed to fetch status history",variant:"destructive"})}finally{l(!1)}},[]);return{riders:e,rider:n,statusHistory:s,loading:a,error:c,pagination:f,fetchRiders:p,fetchRider:m,createRider:g,updateRider:v,changeStatus:y,fetchStatusHistory:b}},Tn=({title:e,subtitle:t})=>{var i,a,l,c;const{user:n}=$s(),r=new Date().getHours(),s=r<12?"Good Morning":r<18?"Good Afternoon":"Good Evening";return o.jsx("header",{className:`\r
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
`,children:o.jsxs("div",{className:`\r
relative\r
overflow-hidden\r
px-6\r
lg:px-8\r
h-[88px]\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
inset-0\r
bg-[radial-gradient(#0f172a10_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:22px_22px]\r
opacity-40\r
`}),o.jsx(ee.div,{animate:{x:[0,25,0],y:[0,-20,0]},transition:{duration:12,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-80px]\r
left-[10%]\r
w-[220px]\r
h-[220px]\r
rounded-full\r
bg-indigo-500/10\r
blur-[80px]\r
`}),o.jsx(ee.div,{animate:{x:[0,-20,0],y:[0,20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
right-[5%]\r
bottom-[-100px]\r
w-[220px]\r
h-[220px]\r
rounded-full\r
bg-emerald-500/10\r
blur-[90px]\r
`})]}),o.jsxs("div",{className:"flex items-center gap-5",children:[o.jsx(ee.div,{initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.5},className:`\r
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
`,children:o.jsx(vt,{size:24})}),o.jsxs("div",{children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Ii,{size:14,className:"text-yellow-500"}),o.jsx("span",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
dark:text-slate-400\r
`,children:s})]}),o.jsx("h1",{className:`\r
text-2xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
leading-tight\r
`,children:e}),t&&o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
font-medium\r
mt-0.5\r
max-w-2xl\r
truncate\r
`,children:t})]})]}),o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsxs("div",{className:`\r
hidden\r
lg:flex\r
relative\r
w-[280px]\r
`,children:[o.jsx($r,{size:16,className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
`}),o.jsx(be,{placeholder:"Search anything...",className:`\r
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
`})]}),o.jsxs(ee.button,{whileHover:{scale:1.05},whileTap:{scale:.95},className:`\r
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
`,children:[o.jsx(oR,{size:18}),o.jsx("span",{className:`\r
absolute\r
top-2.5\r
right-2.5\r
w-2.5\r
h-2.5\r
rounded-full\r
bg-rose-500\r
animate-pulse\r
`})]}),o.jsxs(ee.div,{whileHover:{y:-2},className:`\r
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
`,children:[o.jsx("div",{className:`\r
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
`,children:((c=(l=(a=(i=n==null?void 0:n.fullName)==null?void 0:i.split(" "))==null?void 0:a.map(u=>u[0]))==null?void 0:l.join(""))==null?void 0:c.slice(0,2))||"U"}),o.jsxs("div",{className:"hidden sm:block",children:[o.jsx("p",{className:`\r
text-sm\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
leading-none\r
`,children:(n==null?void 0:n.fullName)||"Administrator"}),o.jsx("p",{className:`\r
text-[11px]\r
mt-1\r
uppercase\r
tracking-[0.18em]\r
font-bold\r
text-slate-500\r
dark:text-slate-400\r
`,children:(n==null?void 0:n.role)||"System Access"})]})]})]})]})})},yE=d.createContext(),_6=({children:e})=>{const t=()=>window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",[n,r]=d.useState(()=>localStorage.getItem("theme")||t());d.useLayoutEffect(()=>{document.documentElement.classList.toggle("dark",n==="dark"),localStorage.setItem("theme",n)},[n]),d.useEffect(()=>{if(localStorage.getItem("theme"))return;const a=window.matchMedia("(prefers-color-scheme: dark)"),l=c=>{r(c.matches?"dark":"light")};return a.addEventListener("change",l),()=>{a.removeEventListener("change",l)}},[]);const s=()=>{r(i=>i==="dark"?"light":"dark")};return o.jsx(yE.Provider,{value:{theme:n,setTheme:r,toggleTheme:s},children:e})},F6=()=>d.useContext(yE),z6=({collapsed:e,setCollapsed:t})=>{var m,g;const{user:n,logout:r,isAdmin:s,isLoading:i}=$s(),{pathname:a}=Cr(),l=qr(),{theme:c,toggleTheme:u}=F6(),f=e?88:288,h=d.useMemo(()=>{const v=[{path:"/dashboard",label:"Overview",icon:yR}];return s()?[...v,{path:"/cities",label:"City Network",icon:Bl},{path:"/franchises",label:"Franchise Nodes",icon:Wn},{path:"/franchise-admins",label:"Franchise Admins",icon:Vu},{path:"/stores",label:"Stores",icon:Wn},{path:"/storesAdmin",label:"Store Admins",icon:Vu},{path:"/riders",label:"Fleet Management",icon:gl},{path:"/users",label:"IAM Users",icon:ji},{path:"/roles",label:"IAM Roles",icon:Rg}]:[...v,{path:"/riders",label:"My Riders",icon:gl},{path:"/stores",label:"My Stores",icon:Wn},{path:"/storesAdmin",label:"Store Admin",icon:Wn}]},[s]),p=()=>{r(),l("/login")};return o.jsxs(ee.aside,{initial:!1,animate:{width:f},transition:{type:"tween",duration:.65,ease:[.25,1,.5,1]},style:{width:f},className:de("fixed left-0 top-0 h-screen z-50 flex flex-col","bg-slate-100/95 dark:bg-slate-950/95 backdrop-blur-2xl","border-r border-white/20 dark:border-slate-800/80","shadow-2xl shadow-black/5 dark:shadow-black/30"),children:[o.jsx("div",{className:de("relative flex items-center h-24 shrink-0 border-b border-slate-200/60 dark:border-slate-800/60",e?"justify-center px-2":"px-6"),children:o.jsxs("div",{className:de("flex items-center",e?"justify-center":"gap-4"),children:[o.jsxs("div",{className:"relative group shrink-0",children:[o.jsx("div",{className:"absolute -inset-1 bg-gradient-to-tr from-orange-400 to-yellow-400 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"}),o.jsx("div",{className:"relative w-10 h-10 rounded-xl bg-white p-1 shadow-sm ring-1 ring-emerald-100",children:o.jsx("img",{src:Yp,alt:"Barqi",className:"w-full h-full object-contain rounded-lg"})})]}),o.jsx(ee.div,{animate:{opacity:e?0:1,x:e?-10:0,width:e?0:"auto"},transition:{duration:.45},className:"overflow-hidden whitespace-nowrap",children:o.jsxs(ee.div,{animate:{opacity:e?0:1,x:e?-20:0},transition:{duration:.45},className:"overflow-hidden",children:[o.jsx("span",{className:"block font-black text-slate-900 dark:text-white leading-none tracking-tight whitespace-nowrap",children:"BARQI OPS"}),o.jsxs("div",{className:"flex items-center gap-1.5 mt-1.5",children:[o.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),o.jsx("span",{className:"text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] whitespace-nowrap",children:"Command Node"})]})]})})]})}),o.jsxs("nav",{className:"flex-1 px-4 py-4 space-y-1.5 overflow-y-auto overflow-x-hidden custom-scrollbar",children:[!e&&o.jsx("p",{className:"px-4 mb-3 text-[10px] font-black text-slate-400 uppercase tracking-[0.25em]",children:"Operations Menu"}),h.map(v=>{const y=v.icon,b=a===v.path;return o.jsxs(nD,{to:v.path,className:de("group flex items-center rounded-2xl transition-all duration-300 relative overflow-hidden",e?"justify-center px-3 py-3":"justify-start gap-4 px-4 py-3","before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-500/0 before:to-yellow-500/0 hover:before:from-orange-500/5 hover:before:to-yellow-500/5 before:transition-all before:duration-500",b?"bg-gradient-to-r from-emerald-50 to-orange-50 dark:from-emerald-900/20 dark:to-orange-900/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-800 shadow-lg shadow-emerald-500/10":"text-slate-500 dark:text-slate-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50/70 dark:hover:bg-slate-800/80"),children:[o.jsx(y,{size:20,className:de("shrink-0 transition-all duration-500 ease-out",b?"scale-110 text-emerald-600":"group-hover:scale-[1.08] group-hover:text-orange-500")}),!e&&o.jsx("span",{className:"text-sm font-bold tracking-tight whitespace-nowrap overflow-hidden",children:v.label}),b&&!e&&o.jsx("div",{className:"absolute right-3 w-1 h-4 rounded-full bg-orange-500 shadow-[0_0_8px_#f97316]"})]},v.path)})]}),o.jsx("div",{className:"p-4 mt-auto shrink-0",children:o.jsxs("div",{className:de("rounded-[1.7rem] bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-white/30 dark:border-slate-800 p-4 transition-all duration-500 shadow-xl shadow-black/5",e?"flex flex-col items-center gap-4":"space-y-4"),children:[!e&&(i?o.jsxs("div",{className:"space-y-3 animate-pulse",children:[o.jsx("div",{className:"h-10 bg-muted rounded-lg"}),o.jsx("div",{className:"h-8 bg-muted rounded-lg"})]}):o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:"w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-200 shrink-0",children:o.jsx(vt,{size:18})}),o.jsxs("div",{className:"flex-1 min-w-0",children:[o.jsx("p",{className:"text-[9px] text-emerald-700 font-black uppercase tracking-widest",children:"Operator"}),o.jsx("p",{className:"text-sm font-black text-slate-800 dark:text-white truncate leading-none mt-1",children:(n==null?void 0:n.fullName)||((m=n==null?void 0:n.email)==null?void 0:m.split("@")[0])})]})]}),o.jsxs("div",{className:"flex items-center justify-between bg-white/80 dark:bg-slate-800/80 border border-yellow-200/60 dark:border-slate-700 px-3 py-2 rounded-xl shadow-sm backdrop-blur-md",children:[o.jsx("span",{className:"text-[10px] font-black text-orange-600 uppercase tracking-tighter",children:(g=n==null?void 0:n.role)==null?void 0:g.replace("_"," ")}),o.jsxs("div",{className:"flex items-center gap-1",children:[o.jsx(Pn,{size:10,className:"text-emerald-500"}),o.jsx("span",{className:"text-[9px] font-bold text-emerald-600 uppercase",children:"Live"})]})]})]})),o.jsxs("button",{onClick:u,className:de("flex items-center justify-center rounded-xl transition-all duration-300","text-[11px] font-black uppercase tracking-widest border","bg-white border-slate-200 text-slate-500","hover:bg-slate-100 hover:text-slate-800","dark:bg-slate-900 dark:border-slate-700 dark:text-slate-300","dark:hover:bg-slate-800","shadow-sm active:scale-95",e?"w-11 h-11":"w-full py-2.5 gap-3"),children:[c==="dark"?o.jsx(ER,{size:16,className:"text-yellow-400"}):o.jsx(wR,{size:16,className:"text-slate-700"}),!e&&o.jsx("span",{children:c==="dark"?"Light Mode":"Dark Mode"})]}),o.jsxs("button",{onClick:p,className:de("flex items-center justify-center rounded-xl transition-all duration-300","text-[11px] font-black uppercase tracking-widest border","bg-white border-slate-200 text-slate-400","hover:text-red-600 hover:bg-red-50 hover:border-red-100","shadow-sm active:scale-95",e?"w-11 h-11":"w-full py-2.5 gap-3"),children:[o.jsx(bR,{size:16}),!e&&o.jsx("span",{children:"Terminate Session"})]})]})}),o.jsx("button",{onClick:()=>t(!e),className:"absolute -right-3 top-10 w-8 h-8 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-400 flex items-center justify-center shadow-xl hover:text-emerald-500 hover:border-emerald-500 hover:scale-110 transition-all duration-300 z-50 active:scale-95",children:e?o.jsx($l,{size:14,strokeWidth:3}):o.jsx(Vl,{size:14,strokeWidth:3})})]})},B6=re.memo(z6),Mn=({children:e,loading:t=!1})=>{const[n,r]=d.useState(!1);return o.jsxs("div",{className:"flex min-h-screen bg-[#F8FAFC] dark:bg-[#020617] font-sans overflow-hidden",children:[o.jsx(B6,{collapsed:n,setCollapsed:r}),o.jsx("main",{style:{marginLeft:n?88:288},className:`\r
flex-1\r
flex\r
flex-col\r
min-h-screen\r
transition-[margin]\r
duration-700\r
ease-[cubic-bezier(0.22,1,0.36,1)]\r
will-change-[margin]\r
bg-transparent\r
`,children:t?o.jsx("div",{className:"flex-1 flex items-center justify-center animate-pulse",children:o.jsx("div",{className:"h-10 w-40 bg-muted rounded"})}):e})]})},V6=({cards:e,loading:t=!1})=>{const n={primary:"from-primary/20 to-primary/5 text-primary border-primary/20",accent:"from-accent/20 to-accent/5 text-accent border-accent/20",success:"from-emerald-500/20 to-emerald-500/5 text-emerald-600 border-emerald-500/20",warning:"from-amber-500/20 to-amber-500/5 text-amber-600 border-amber-500/20",info:"from-sky-500/20 to-sky-500/5 text-sky-600 border-sky-500/20",destructive:"from-red-500/20 to-red-500/5 text-red-600 border-red-500/20"};return t?o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5",children:e.map((r,s)=>o.jsx("div",{className:"relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-6",children:o.jsx("div",{className:"animate-pulse",children:o.jsxs("div",{className:"flex items-start justify-between",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("div",{className:"h-3 w-24 rounded bg-muted mb-4"}),o.jsx("div",{className:"h-8 w-28 rounded bg-muted mb-3"}),o.jsx("div",{className:"h-3 w-20 rounded bg-muted"})]}),o.jsx("div",{className:"w-14 h-14 rounded-2xl bg-muted"})]})})},s))}):o.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5",children:e.map((r,s)=>{const i=r.icon;return o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.35,delay:s*.08},whileHover:{y:-5,transition:{duration:.2}},className:"group relative overflow-hidden rounded-3xl border border-border/50 bg-card/80 backdrop-blur-sm p-6 shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300",children:[o.jsx("div",{className:"absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),o.jsx("div",{className:"absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary/60 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"}),o.jsxs("div",{className:"relative flex items-start justify-between",children:[o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-sm font-medium text-muted-foreground tracking-wide mb-2",children:r.title}),o.jsx("h3",{className:"text-3xl font-bold text-foreground tracking-tight",children:typeof r.value=="number"?r.value.toLocaleString():r.value}),r.change&&o.jsxs("div",{className:"mt-4 inline-flex items-center gap-1 rounded-full border border-border/50 bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground",children:[o.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-500 animate-pulse"}),r.change]})]}),o.jsxs("div",{className:de("relative flex items-center justify-center w-14 h-14 rounded-2xl border bg-gradient-to-br shadow-inner transition-all duration-300 group-hover:scale-110",n[r.color]||n.primary),children:[o.jsx("div",{className:"absolute inset-0 rounded-2xl bg-white/10"}),o.jsx(i,{size:24,className:"relative z-10 transition-transform duration-300 group-hover:rotate-6"})]})]}),o.jsx("div",{className:"absolute -bottom-10 -right-10 w-28 h-28 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-all duration-500"})]},s)})})},Xn=({status:e,variant:t})=>{const n={success:"bg-success/10 text-success border-success/20",warning:"bg-warning/10 text-warning border-warning/20",destructive:"bg-destructive/10 text-destructive border-destructive/20",info:"bg-info/10 text-info border-info/20",muted:"bg-muted text-muted-foreground border-border",primary:"bg-primary/10 text-primary border-primary/20",accent:"bg-accent/10 text-accent border-accent/20"},s=t||(()=>{const i=e==null?void 0:e.toLowerCase();return["active","approved","verified","success"].includes(i)?"success":["pending","applied","document_submitted"].includes(i)?"info":["suspended","warning","inactive"].includes(i)?"warning":["terminated","rejected","failed","error"].includes(i)?"destructive":"muted"})();return o.jsx("span",{className:de("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border",n[s]),children:e})};var L0="Progress",P0=100,[$6,_U]=Sr(L0),[U6,H6]=$6(L0),bE=d.forwardRef((e,t)=>{const{__scopeProgress:n,value:r=null,max:s,getValueLabel:i=W6,...a}=e;(s||s===0)&&!mb(s)&&console.error(K6(`${s}`,"Progress"));const l=mb(s)?s:P0;r!==null&&!gb(r,l)&&console.error(G6(`${r}`,"Progress"));const c=gb(r,l)?r:null,u=ad(c)?i(c,l):void 0;return o.jsx(U6,{scope:n,value:c,max:l,children:o.jsx(we.div,{"aria-valuemax":l,"aria-valuemin":0,"aria-valuenow":ad(c)?c:void 0,"aria-valuetext":u,role:"progressbar","data-state":kE(c,l),"data-value":c??void 0,"data-max":l,...a,ref:t})})});bE.displayName=L0;var wE="ProgressIndicator",SE=d.forwardRef((e,t)=>{const{__scopeProgress:n,...r}=e,s=H6(wE,n);return o.jsx(we.div,{"data-state":kE(s.value,s.max),"data-value":s.value??void 0,"data-max":s.max,...r,ref:t})});SE.displayName=wE;function W6(e,t){return`${Math.round(e/t*100)}%`}function kE(e,t){return e==null?"indeterminate":e===t?"complete":"loading"}function ad(e){return typeof e=="number"}function mb(e){return ad(e)&&!isNaN(e)&&e>0}function gb(e,t){return ad(e)&&!isNaN(e)&&e<=t&&e>=0}function K6(e,t){return`Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${P0}\`.`}function G6(e,t){return`Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${P0} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`}var CE=bE,q6=SE;const Li=d.forwardRef(({className:e,value:t,...n},r)=>o.jsx(CE,{ref:r,className:de("relative h-4 w-full overflow-hidden rounded-full bg-secondary",e),...n,children:o.jsx(q6,{className:"h-full w-full flex-1 bg-primary transition-all",style:{transform:`translateX(-${100-(t||0)}%)`}})}));Li.displayName=CE.displayName;const Z6=e0,Y6=()=>{var k;const e=qr(),{user:t,isAdmin:n,isFranchiseAdmin:r}=$s(),[s,i]=d.useState(0),[a,l]=d.useState(!1),{cities:c,loading:u,fetchCities:f}=cf(),{franchises:h,loading:p,fetchFranchises:m}=uf(),{riders:g,loading:v,fetchRiders:y}=N0();d.useEffect(()=>{const j=setTimeout(()=>{l(!0)},300);return()=>clearTimeout(j)},[]);const b=d.useCallback(async()=>{var j,C,E;try{const N=n()?"admin-root":(t==null?void 0:t.franchiseId)||(t==null?void 0:t.franchise_id)||((j=t==null?void 0:t.franchise)==null?void 0:j.id);if(!N){console.warn("Wallet ID missing:",t);return}const L=await He.get(`${Z6}/wallets/${N}?currency=PKR`,{headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}});i(((E=(C=L.data)==null?void 0:C.data)==null?void 0:E.balance)||0)}catch{console.warn("Wallet data offline")}},[n,t]);d.useEffect(()=>{var j;if(n())f(),m(),y();else if(r()){const C=(t==null?void 0:t.franchiseId)||((j=t==null?void 0:t.franchise)==null?void 0:j.id);C&&y(null,null,null,C)}b()},[n,r,t,b]);const x=d.useMemo(()=>{var R;const j=g||[],C=j.length,E=j.filter(z=>["ACTIVE","APPROVED"].includes(z.status)).length,N=j.filter(z=>z.status==="APPLIED").length,L=((R=t==null?void 0:t.franchise)==null?void 0:R.maxActiveRiders)||100,T=Math.round(E/L*100);return{fleetGrowth:C>0?(E/C*100).toFixed(1):0,activeCount:E,pendingCount:N,totalCount:C,utilization:T,bikeMix:j.filter(z=>z.vehicleType==="BIKE").length,motoMix:j.filter(z=>z.vehicleType==="MOTORBIKE").length,nodeHealth:(h==null?void 0:h.filter(z=>z.status==="ACTIVE").length)||0}},[g,h,t]),w=d.useMemo(()=>n()?[{title:"Global Liquidity",value:`Rs. ${s.toLocaleString()}`,icon:xo,color:"emerald",change:"Network Total"},{title:"Active Nodes",value:x.nodeHealth,icon:zd,color:"blue",change:`${h==null?void 0:h.length} Registered`},{title:"Fleet Deployment",value:x.activeCount,icon:gl,color:"indigo",change:`${x.totalCount} Units`},{title:"Audit Queue",value:x.pendingCount,icon:jR,color:"orange",change:"Awaiting Action"}]:[{title:"Node Balance",value:`Rs. ${s.toLocaleString()}`,icon:vR,color:"emerald",change:"Available Funds"},{title:"Fleet Utilization",value:`${x.utilization}%`,icon:ax,color:"blue",change:"Capacity Used"},{title:"Ready Fleet",value:x.activeCount,icon:uR,color:"indigo",change:"Operational Units"},{title:"Compliance Wait",value:x.pendingCount,icon:Pn,color:"orange",change:"New Applications"}],[n,x,s,h]),S=`
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
`;return a?o.jsx(Mn,{children:o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Operations Intelligence",subtitle:`Live Command Data • ${(t==null?void 0:t.fullName)||"System Admin"}`}),o.jsxs(ee.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
min-h-screen\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),o.jsx(ee.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx(ee.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsx(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
opacity-0\r
animate-in\r
fade-in\r
duration-700\r
fill-mode-forwards\r
`,children:o.jsx(V6,{cards:w,loading:u||p||v})}),o.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-8",children:[o.jsxs("div",{className:"lg:col-span-2 space-y-8",children:[o.jsxs(ee.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-3},className:`${S} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:o.jsx(LR,{size:20})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"Deployment Stream"}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-500 ",children:"Latest fleet status updates"})]})]}),o.jsxs(ne,{variant:"ghost",onClick:()=>e("/riders"),className:`\r
rounded-2xl\r
font-bold\r
text-indigo-500\r
hover:bg-indigo-500/10\r
transition-all\r
duration-500\r
`,children:["Full Fleet",o.jsx(Fd,{size:16,className:"ml-2"})]})]}),o.jsx("div",{className:"divide-y divide-white/5",children:v?o.jsxs("div",{className:"p-6 space-y-4 animate-pulse",children:[o.jsx("div",{className:"h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"}),o.jsx("div",{className:"h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"}),o.jsx("div",{className:"h-16 rounded-2xl bg-slate-200 dark:bg-slate-800"})]}):g==null?void 0:g.slice(0,5).map(j=>{var C;return o.jsxs(ee.div,{whileHover:{scale:1.01,x:4},onClick:()=>e(`/riders/${j.id}`),className:`\r
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
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
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
`,children:(C=j.fullName)==null?void 0:C.charAt(0)}),o.jsxs("div",{children:[o.jsx("p",{className:"text-sm font-black text-slate-700 dark:text-white",children:j.fullName}),o.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[o.jsx("span",{className:`\r
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
`,children:j.vehicleType}),o.jsx("span",{className:`\r
text-[10px]\r
text-slate-600 dark:text-slate-500 \r
font-mono\r
tracking-widest\r
`,children:j.phone})]})]})]}),o.jsx(Xn,{status:j.status})]},j.id)})})]}),n()&&o.jsxs(ee.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.9},whileHover:{y:-3},className:`${S} p-8 rounded-[2.5rem]`,children:[o.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[o.jsx("div",{className:`\r
p-3\r
bg-blue-500/10\r
text-blue-500\r
rounded-2xl\r
`,children:o.jsx(Kk,{size:20})}),o.jsx("h3",{className:"text-lg font-black text-slate-800 dark:text-white",children:"Node Concentration by Region"})]}),o.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8",children:u?o.jsxs("div",{className:"space-y-6 animate-pulse col-span-2",children:[o.jsx("div",{className:"h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"}),o.jsx("div",{className:"h-12 bg-slate-200 dark:bg-slate-800 rounded-xl"})]}):c==null?void 0:c.slice(0,4).map(j=>{const C=(h==null?void 0:h.filter(N=>N.cityId===j.id).length)||0,E=Math.min(C/10*100,100);return o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:"flex justify-between items-end",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
text-slate-600 dark:text-slate-500 \r
tracking-[0.2em]\r
`,children:j.name}),o.jsxs("p",{className:"text-sm font-bold text-slate-700 dark:text-white",children:[C," Active Hubs"]})]}),o.jsx("span",{className:"text-xs font-bold text-blue-500",children:C>0?"High Growth":"Expansion Target"})]}),o.jsx(Li,{value:E,className:"h-2 rounded-full bg-slate-100 dark:bg-slate-800"})]},j.id)})})]})]}),o.jsxs("div",{className:"space-y-8",children:[o.jsxs(ee.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:1},whileHover:{y:-3},className:`${S} p-8 rounded-[2.5rem]`,children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx("div",{className:`\r
p-3\r
bg-emerald-500/10\r
text-emerald-500\r
rounded-2xl\r
`,children:o.jsx(aR,{size:20})}),o.jsx("h3",{className:"text-lg font-black text-slate-800 dark:text-white",children:"Fleet Mix"})]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:`\r
p-4\r
bg-blue-500/5\r
rounded-2xl\r
border\r
border-blue-500/10\r
flex\r
justify-between\r
items-center\r
`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(gl,{size:20,className:"text-blue-500"}),o.jsx("span",{className:"text-sm font-bold text-slate-600 dark:text-slate-300",children:"Standard Bikes"})]}),o.jsx("span",{className:"text-lg font-black text-blue-500",children:x.bikeMix})]}),o.jsxs("div",{className:`\r
p-4\r
bg-indigo-500/5\r
rounded-2xl\r
border\r
border-indigo-500/10\r
flex\r
justify-between\r
items-center\r
`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ax,{size:20,className:"text-indigo-500"}),o.jsx("span",{className:"text-sm font-bold text-slate-600 dark:text-slate-300",children:"Motorbikes"})]}),o.jsx("span",{className:"text-lg font-black text-indigo-500",children:x.motoMix})]})]})]}),o.jsxs(ee.div,{animate:{y:[0,-8,0]},transition:{duration:5,repeat:1/0,ease:"easeInOut"},className:`\r
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
`,children:[o.jsx("div",{className:`\r
absolute\r
top-[-20%]\r
right-[-20%]\r
w-72\r
h-72\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-6",children:[o.jsx("div",{className:`\r
w-2\r
h-2\r
bg-emerald-400\r
rounded-full\r
animate-pulse\r
shadow-[0_0_10px_#22c55e]\r
`}),o.jsx("span",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.3em]\r
text-emerald-400\r
`,children:"System Handshake: Optimal"})]}),o.jsxs("h4",{className:"text-2xl font-black mb-2 tracking-tight",children:["Node:"," ",((k=t==null?void 0:t.franchise)==null?void 0:k.code)||"Barqi-Root"]}),o.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-500 dark:text-slate-600 dark:text-slate-500 dark:text-slate-400 leading-relaxed mb-6",children:["Currently overseeing"," ",x.totalCount," ","assets in the regional mesh network."]}),o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:`\r
flex\r
justify-between\r
text-[10px]\r
font-black\r
uppercase\r
tracking-widest\r
text-slate-600 dark:text-slate-500\r
`,children:[o.jsx("span",{children:"Operational Efficiency"}),o.jsxs("span",{className:"text-white",children:[x.utilization,"%"]})]}),o.jsx(Li,{value:x.utilization,className:"h-1.5 bg-slate-800"})]})]}),o.jsx(Pn,{className:`\r
absolute\r
-right-8\r
-bottom-8\r
text-white/5\r
rotate-12\r
`,size:200})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs(ne,{onClick:()=>e("/stores"),variant:"outline",className:`\r
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
`,children:[o.jsx(Wn,{size:24,className:`\r
text-indigo-500\r
group-hover:scale-110\r
transition-transform\r
duration-500\r
`}),o.jsx("span",{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-widest\r
text-slate-600 dark:text-slate-500\r
group-hover:text-indigo-500\r
`,children:"Hubs"})]}),o.jsxs(ne,{onClick:()=>e("/franchise-admins"),variant:"outline",className:`\r
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
`,children:[o.jsx(ji,{size:24,className:`\r
text-blue-500\r
group-hover:scale-110\r
transition-transform\r
duration-500\r
`}),o.jsx("span",{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-widest\r
text-slate-600 dark:text-slate-500\r
group-hover:text-blue-500\r
`,children:"Admins"})]})]})]})]})]})]})}):o.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})},jE=d.forwardRef(({className:e,...t},n)=>o.jsx("div",{className:"relative w-full overflow-auto",children:o.jsx("table",{ref:n,className:de("w-full caption-bottom text-sm",e),...t})}));jE.displayName="Table";const EE=d.forwardRef(({className:e,...t},n)=>o.jsx("thead",{ref:n,className:de("[&_tr]:border-b",e),...t}));EE.displayName="TableHeader";const NE=d.forwardRef(({className:e,...t},n)=>o.jsx("tbody",{ref:n,className:de("[&_tr:last-child]:border-0",e),...t}));NE.displayName="TableBody";const Q6=d.forwardRef(({className:e,...t},n)=>o.jsx("tfoot",{ref:n,className:de("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",e),...t}));Q6.displayName="TableFooter";const wm=d.forwardRef(({className:e,...t},n)=>o.jsx("tr",{ref:n,className:de("border-b transition-colors data-[state=selected]:bg-muted hover:bg-muted/50",e),...t}));wm.displayName="TableRow";const LE=d.forwardRef(({className:e,...t},n)=>o.jsx("th",{ref:n,className:de("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",e),...t}));LE.displayName="TableHead";const PE=d.forwardRef(({className:e,...t},n)=>o.jsx("td",{ref:n,className:de("p-4 align-middle [&:has([role=checkbox])]:pr-0",e),...t}));PE.displayName="TableCell";const X6=d.forwardRef(({className:e,...t},n)=>o.jsx("caption",{ref:n,className:de("mt-4 text-sm text-muted-foreground",e),...t}));X6.displayName="TableCaption";const J6=({currentPage:e,totalPages:t,onPageChange:n,className:r,loading:s=!1})=>{if(t<=1)return null;const i=()=>{const a=[];let c=Math.max(1,e-Math.floor(2.5)),u=Math.min(t,c+5-1);u-c+1<5&&(c=Math.max(1,u-5+1));for(let f=c;f<=u;f++)a.push(f);return a};return o.jsxs("div",{className:de("flex items-center justify-center gap-1",r),children:[o.jsx("button",{onClick:()=>n(e-1),disabled:e===1||s,className:"p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:o.jsx(Vl,{size:18})}),i().map(a=>o.jsx("button",{onClick:()=>n(a),disabled:s,className:de("w-9 h-9 rounded-lg text-sm font-medium transition-colors",a===e?"bg-primary text-primary-foreground":"hover:bg-muted text-muted-foreground"),children:a},a)),o.jsx("button",{onClick:()=>n(e+1),disabled:e===t||s,className:"p-2 rounded-lg hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors",children:o.jsx($l,{size:18})})]})},Jn=({rows:e=5})=>o.jsx("div",{className:"space-y-3",children:Array.from({length:e}).map((t,n)=>o.jsxs("div",{className:"flex items-center gap-4 p-4 bg-white rounded-xl border animate-pulse",children:[o.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-xl"}),o.jsxs("div",{className:"flex-1 space-y-2",children:[o.jsx("div",{className:"h-4 bg-gray-200 rounded w-1/3"}),o.jsx("div",{className:"h-3 bg-gray-200 rounded w-1/4"})]}),o.jsx("div",{className:"h-4 bg-gray-200 rounded w-20"}),o.jsx("div",{className:"h-4 bg-gray-200 rounded w-16"})]},n))}),Hs=({columns:e,data:t,loading:n,pagination:r,onPageChange:s,emptyMessage:i="No data found"})=>n?o.jsx(Jn,{rows:6,columns:e.length}):!t||t.length===0?o.jsxs("div",{className:"flex flex-col items-center justify-center py-12 text-center",children:[o.jsx("div",{className:"w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4",children:o.jsx(gR,{className:"w-6 h-6 text-muted-foreground"})}),o.jsx("p",{className:"text-muted-foreground",children:i})]}):o.jsxs("div",{className:"space-y-4",children:[o.jsx("div",{className:"rounded-lg border border-border overflow-hidden",children:o.jsxs(jE,{children:[o.jsx(EE,{children:o.jsx(wm,{className:"bg-muted/50 hover:bg-muted/50",children:e.map(a=>o.jsx(LE,{className:a.className,style:{width:a.width},children:a.label},a.key))})}),o.jsx(NE,{children:t.map((a,l)=>o.jsx(wm,{className:"hover:bg-muted/30",children:e.map(c=>o.jsx(PE,{className:c.cellClassName,children:c.render?c.render(a[c.key],a):a[c.key]??"-"},c.key))},a.id||l))})]})}),r&&(r.totalPages>1||r.hasNext||r.hasPrev)&&o.jsx(J6,{currentPage:r.page,totalPages:r.totalPages,onPageChange:s})]}),kn=({isOpen:e,onClose:t,title:n,children:r,size:s="md"})=>{const i=d.useRef(null),a=d.useRef(null);d.useEffect(()=>{const u=f=>{f.key==="Escape"&&t()};return e&&(document.addEventListener("keydown",u),document.body.style.overflow="hidden"),()=>{document.removeEventListener("keydown",u),document.body.style.overflow=""}},[e,t]);const l=u=>{u.target===i.current&&t()};if(!e)return null;const c={sm:"max-w-md",md:"max-w-lg",lg:"max-w-2xl",xl:"max-w-4xl"};return o.jsx("div",{ref:i,onClick:l,className:"fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in",children:o.jsxs("div",{ref:a,className:de("bg-card rounded-xl shadow-xl w-full animate-modal-in",c[s]),children:[o.jsxs("div",{className:"flex items-center justify-between px-6 py-4 border-b border-border",children:[o.jsx("h2",{className:"text-lg font-semibold text-card-foreground",children:n}),o.jsx("button",{onClick:t,className:"p-1.5 rounded-lg hover:bg-muted transition-colors",children:o.jsx(Yo,{size:18,className:"text-muted-foreground"})})]}),o.jsx("div",{className:"p-6",children:r})]})})},wr=({isOpen:e,onClose:t,onConfirm:n,title:r="Confirm Action",message:s="Are you sure you want to proceed?",confirmText:i="Confirm",cancelText:a="Cancel",variant:l="destructive",loading:c=!1})=>{const u=async()=>{await n(),t()};return o.jsx(kn,{isOpen:e,onClose:t,title:r,size:"sm",children:o.jsxs("div",{className:"flex flex-col items-center text-center",children:[o.jsx("div",{className:"w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mb-4",children:o.jsx(PR,{className:"w-6 h-6 text-destructive"})}),o.jsx("p",{className:"text-muted-foreground mb-6",children:s}),o.jsxs("div",{className:"flex gap-3 w-full",children:[o.jsx(ne,{variant:"outline",onClick:t,disabled:c,className:"flex-1",children:a}),o.jsx(ne,{variant:l,onClick:u,disabled:c,className:"flex-1 flex items-center justify-center",children:o.jsxs(o.Fragment,{children:[c&&o.jsx(fn,{className:"w-4 h-4 animate-spin mr-2"}),c?"Processing...":i]})})]})]})})},yh={name:"",code:""},e8=()=>{const{cities:e,loading:t,fetchCities:n,createCity:r,updateCity:s,deactivateCity:i}=cf(),[a,l]=d.useState(!1),[c,u]=d.useState(!1),[f,h]=d.useState(null),[p,m]=d.useState(yh),[g,v]=d.useState(!1),[y,b]=d.useState(""),[x,w]=d.useState(1),S=10;d.useEffect(()=>{n()},[n]);const k=d.useMemo(()=>{const A=(e==null?void 0:e.length)||0,W=(e==null?void 0:e.filter(O=>["ACTIVE","APPROVED"].includes(O.status)).length)||0,M=(e==null?void 0:e.filter(O=>["INACTIVE","DEACTIVATED"].includes(O.status)).length)||0;return{total:A,active:W,inactive:M}},[e]),j=d.useMemo(()=>y?e.filter(A=>{var W,M;return((W=A.name)==null?void 0:W.toLowerCase().includes(y.toLowerCase()))||((M=A.code)==null?void 0:M.toLowerCase().includes(y.toLowerCase()))}):e,[e,y]),C=Math.ceil(j.length/S),E=d.useMemo(()=>{const A=(x-1)*S;return j.slice(A,A+S)},[j,x]),N=()=>{h(null),m(yh),l(!0)},L=A=>{h(A),m({name:A.name,code:A.code}),l(!0)},T=A=>{h(A),u(!0)},R=async A=>{A.preventDefault(),v(!0);try{f?await s(f.id,p):await r(p),l(!1),h(null),m(yh)}catch(W){console.error("Operation failed:",W)}finally{v(!1)}},z=async()=>{if(f)try{await i(f.id)}catch(A){console.error("Status update failed:",A)}finally{u(!1),h(null)}},I=d.useMemo(()=>[{key:"name",label:"City",render:(A,W)=>o.jsxs("div",{className:"flex items-center gap-4 group",children:[o.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
transition-all\r
duration-500\r
group-hover:scale-110\r
`,children:o.jsx(Ci,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:A}),o.jsx("div",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
tracking-wide\r
`,children:"Regional Node"})]})]})},{key:"code",label:"Region Code",render:A=>o.jsx("span",{className:`\r
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
font-mono\r
`,children:A})},{key:"status",label:"Status",render:A=>o.jsx(Xn,{status:A})},{key:"createdAt",label:"Created",render:A=>o.jsx("span",{className:`\r
text-sm\r
text-slate-600\r
dark:text-slate-300\r
font-medium\r
`,children:A?new Date(A).toLocaleDateString():"-"})},{key:"actions",label:"",render:(A,W)=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>L(W),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
transition-all\r
duration-300\r
`,children:o.jsx(Ag,{size:16,className:"text-slate-500"})}),o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>T(W),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
transition-all\r
duration-300\r
`,children:o.jsx(Vs,{size:16,className:"text-red-400"})})]})}],[]),F=`
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
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Regional Infrastructure",subtitle:"Configure and manage operational city nodes"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-cyan-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-3},className:`${F} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Cities"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:k.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(zd,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${F} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Active Regions"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:k.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-cyan-500/10\r
text-cyan-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${F} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Disabled Nodes"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:k.inactive})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Pn,{size:24})})]})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${F} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:"City Command Center"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Live infrastructure node management"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsxs("div",{className:"relative w-72",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{className:`\r
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
focus-visible:ring-emerald-500/20\r
`,placeholder:"Search cities...",value:y,onChange:A=>b(A.target.value)})]}),o.jsxs(ne,{onClick:N,disabled:t,className:`\r
h-11\r
rounded-2xl\r
px-5\r
font-bold\r
gap-2\r
bg-emerald-600\r
hover:bg-emerald-700\r
shadow-lg\r
shadow-emerald-500/20\r
transition-all\r
duration-500\r
hover:scale-[1.02]\r
`,children:[o.jsx(Zo,{size:18}),"Initialize City"]})]})]}),o.jsx("div",{className:"p-4",children:t?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:I,data:E,emptyMessage:"No regional nodes established"})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(x-1)*S+1," - ",Math.min(x*S,j.length)," ","of"," ",j.length]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:x===1,onClick:()=>w(A=>A-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-emerald-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-emerald-500/20\r
`,children:[x," / ",C||1]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:x===C||C===0,onClick:()=>w(A=>A+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),a&&o.jsx(kn,{isOpen:!0,onClose:()=>l(!1),title:f?"Modify Regional Node":"Initialize Regional Node",size:"md",children:o.jsxs("form",{onSubmit:R,className:"space-y-5",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Ci,{size:14}),"City Designation"]}),o.jsx(be,{className:`\r
rounded-2xl\r
h-11\r
`,placeholder:"e.g. Islamabad",value:p.name,onChange:A=>m(W=>({...W,name:A.target.value})),required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Zk,{size:14}),"Identification Code"]}),o.jsx(be,{className:`\r
rounded-2xl\r
h-11\r
font-mono\r
tracking-[0.15em]\r
uppercase\r
`,placeholder:"e.g. ISB",value:p.code,onChange:A=>m(W=>({...W,code:A.target.value.toUpperCase()})),required:!0})]}),o.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx(ne,{type:"button",variant:"ghost",onClick:()=>l(!1),className:"rounded-2xl",children:"Cancel"}),o.jsx(ne,{disabled:g,type:"submit",className:`\r
min-w-[160px]\r
rounded-2xl\r
bg-emerald-600\r
hover:bg-emerald-700\r
`,children:g?o.jsx(fn,{className:"animate-spin"}):f?"Apply Changes":"Create City"})]})]})}),o.jsx(wr,{isOpen:c,onClose:()=>u(!1),onConfirm:z,title:"Deactivate Regional Node",message:`Warning: Deactivating ${f==null?void 0:f.name} will restrict operational activities in this region. Continue?`})]})};function vb(e,[t,n]){return Math.min(n,Math.max(t,e))}var t8=d.createContext(void 0);function T0(e){const t=d.useContext(t8);return e||t||"ltr"}var bh=0;function TE(){d.useEffect(()=>{const e=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",e[0]??xb()),document.body.insertAdjacentElement("beforeend",e[1]??xb()),bh++,()=>{bh===1&&document.querySelectorAll("[data-radix-focus-guard]").forEach(t=>t.remove()),bh--}},[])}function xb(){const e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.outline="none",e.style.opacity="0",e.style.position="fixed",e.style.pointerEvents="none",e}var wh="focusScope.autoFocusOnMount",Sh="focusScope.autoFocusOnUnmount",yb={bubbles:!1,cancelable:!0},n8="FocusScope",M0=d.forwardRef((e,t)=>{const{loop:n=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:i,...a}=e,[l,c]=d.useState(null),u=Ln(s),f=Ln(i),h=d.useRef(null),p=Ve(t,v=>c(v)),m=d.useRef({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;d.useEffect(()=>{if(r){let v=function(w){if(m.paused||!l)return;const S=w.target;l.contains(S)?h.current=S:rs(h.current,{select:!0})},y=function(w){if(m.paused||!l)return;const S=w.relatedTarget;S!==null&&(l.contains(S)||rs(h.current,{select:!0}))},b=function(w){if(document.activeElement===document.body)for(const k of w)k.removedNodes.length>0&&rs(l)};document.addEventListener("focusin",v),document.addEventListener("focusout",y);const x=new MutationObserver(b);return l&&x.observe(l,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",v),document.removeEventListener("focusout",y),x.disconnect()}}},[r,l,m.paused]),d.useEffect(()=>{if(l){wb.add(m);const v=document.activeElement;if(!l.contains(v)){const b=new CustomEvent(wh,yb);l.addEventListener(wh,u),l.dispatchEvent(b),b.defaultPrevented||(r8(l8(ME(l)),{select:!0}),document.activeElement===v&&rs(l))}return()=>{l.removeEventListener(wh,u),setTimeout(()=>{const b=new CustomEvent(Sh,yb);l.addEventListener(Sh,f),l.dispatchEvent(b),b.defaultPrevented||rs(v??document.body,{select:!0}),l.removeEventListener(Sh,f),wb.remove(m)},0)}}},[l,u,f,m]);const g=d.useCallback(v=>{if(!n&&!r||m.paused)return;const y=v.key==="Tab"&&!v.altKey&&!v.ctrlKey&&!v.metaKey,b=document.activeElement;if(y&&b){const x=v.currentTarget,[w,S]=s8(x);w&&S?!v.shiftKey&&b===S?(v.preventDefault(),n&&rs(w,{select:!0})):v.shiftKey&&b===w&&(v.preventDefault(),n&&rs(S,{select:!0})):b===x&&v.preventDefault()}},[n,r,m.paused]);return o.jsx(we.div,{tabIndex:-1,...a,ref:p,onKeyDown:g})});M0.displayName=n8;function r8(e,{select:t=!1}={}){const n=document.activeElement;for(const r of e)if(rs(r,{select:t}),document.activeElement!==n)return}function s8(e){const t=ME(e),n=bb(t,e),r=bb(t.reverse(),e);return[n,r]}function ME(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:r=>{const s=r.tagName==="INPUT"&&r.type==="hidden";return r.disabled||r.hidden||s?NodeFilter.FILTER_SKIP:r.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function bb(e,t){for(const n of e)if(!i8(n,{upTo:t}))return n}function i8(e,{upTo:t}){if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(t!==void 0&&e===t)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1}function o8(e){return e instanceof HTMLInputElement&&"select"in e}function rs(e,{select:t=!1}={}){if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&o8(e)&&t&&e.select()}}var wb=a8();function a8(){let e=[];return{add(t){const n=e[0];t!==n&&(n==null||n.pause()),e=Sb(e,t),e.unshift(t)},remove(t){var n;e=Sb(e,t),(n=e[0])==null||n.resume()}}}function Sb(e,t){const n=[...e],r=n.indexOf(t);return r!==-1&&n.splice(r,1),n}function l8(e){return e.filter(t=>t.tagName!=="A")}function RE(e){const t=d.useRef({value:e,previous:e});return d.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}var c8=function(e){if(typeof document>"u")return null;var t=Array.isArray(e)?e[0]:e;return t.ownerDocument.body},Ui=new WeakMap,Ac=new WeakMap,Oc={},kh=0,AE=function(e){return e&&(e.host||AE(e.parentNode))},u8=function(e,t){return t.map(function(n){if(e.contains(n))return n;var r=AE(n);return r&&e.contains(r)?r:(console.error("aria-hidden",n,"in not contained inside",e,". Doing nothing"),null)}).filter(function(n){return!!n})},d8=function(e,t,n,r){var s=u8(t,Array.isArray(e)?e:[e]);Oc[n]||(Oc[n]=new WeakMap);var i=Oc[n],a=[],l=new Set,c=new Set(s),u=function(h){!h||l.has(h)||(l.add(h),u(h.parentNode))};s.forEach(u);var f=function(h){!h||c.has(h)||Array.prototype.forEach.call(h.children,function(p){if(l.has(p))f(p);else try{var m=p.getAttribute(r),g=m!==null&&m!=="false",v=(Ui.get(p)||0)+1,y=(i.get(p)||0)+1;Ui.set(p,v),i.set(p,y),a.push(p),v===1&&g&&Ac.set(p,!0),y===1&&p.setAttribute(n,"true"),g||p.setAttribute(r,"true")}catch(b){console.error("aria-hidden: cannot operate on ",p,b)}})};return f(t),l.clear(),kh++,function(){a.forEach(function(h){var p=Ui.get(h)-1,m=i.get(h)-1;Ui.set(h,p),i.set(h,m),p||(Ac.has(h)||h.removeAttribute(r),Ac.delete(h)),m||h.removeAttribute(n)}),kh--,kh||(Ui=new WeakMap,Ui=new WeakMap,Ac=new WeakMap,Oc={})}},OE=function(e,t,n){n===void 0&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),s=c8(e);return s?(r.push.apply(r,Array.from(s.querySelectorAll("[aria-live]"))),d8(r,s,n,"aria-hidden")):function(){return null}},hr=function(){return hr=Object.assign||function(t){for(var n,r=1,s=arguments.length;r<s;r++){n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},hr.apply(this,arguments)};function IE(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}function f8(e,t,n){if(n||arguments.length===2)for(var r=0,s=t.length,i;r<s;r++)(i||!(r in t))&&(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))}var hu="right-scroll-bar-position",pu="width-before-scroll-bar",h8="with-scroll-bars-hidden",p8="--removed-body-scroll-bar-size";function Ch(e,t){return typeof e=="function"?e(t):e&&(e.current=t),e}function m8(e,t){var n=d.useState(function(){return{value:e,callback:t,facade:{get current(){return n.value},set current(r){var s=n.value;s!==r&&(n.value=r,n.callback(r,s))}}}})[0];return n.callback=t,n.facade}var g8=typeof window<"u"?d.useLayoutEffect:d.useEffect,kb=new WeakMap;function v8(e,t){var n=m8(null,function(r){return e.forEach(function(s){return Ch(s,r)})});return g8(function(){var r=kb.get(n);if(r){var s=new Set(r),i=new Set(e),a=n.current;s.forEach(function(l){i.has(l)||Ch(l,null)}),i.forEach(function(l){s.has(l)||Ch(l,a)})}kb.set(n,e)},[e]),n}function x8(e){return e}function y8(e,t){t===void 0&&(t=x8);var n=[],r=!1,s={read:function(){if(r)throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return n.length?n[n.length-1]:e},useMedium:function(i){var a=t(i,r);return n.push(a),function(){n=n.filter(function(l){return l!==a})}},assignSyncMedium:function(i){for(r=!0;n.length;){var a=n;n=[],a.forEach(i)}n={push:function(l){return i(l)},filter:function(){return n}}},assignMedium:function(i){r=!0;var a=[];if(n.length){var l=n;n=[],l.forEach(i),a=n}var c=function(){var f=a;a=[],f.forEach(i)},u=function(){return Promise.resolve().then(c)};u(),n={push:function(f){a.push(f),u()},filter:function(f){return a=a.filter(f),n}}}};return s}function b8(e){e===void 0&&(e={});var t=y8(null);return t.options=hr({async:!0,ssr:!1},e),t}var DE=function(e){var t=e.sideCar,n=IE(e,["sideCar"]);if(!t)throw new Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw new Error("Sidecar medium not found");return d.createElement(r,hr({},n))};DE.isSideCarExport=!0;function w8(e,t){return e.useMedium(t),DE}var _E=b8(),jh=function(){},df=d.forwardRef(function(e,t){var n=d.useRef(null),r=d.useState({onScrollCapture:jh,onWheelCapture:jh,onTouchMoveCapture:jh}),s=r[0],i=r[1],a=e.forwardProps,l=e.children,c=e.className,u=e.removeScrollBar,f=e.enabled,h=e.shards,p=e.sideCar,m=e.noRelative,g=e.noIsolation,v=e.inert,y=e.allowPinchZoom,b=e.as,x=b===void 0?"div":b,w=e.gapMode,S=IE(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noRelative","noIsolation","inert","allowPinchZoom","as","gapMode"]),k=p,j=v8([n,t]),C=hr(hr({},S),s);return d.createElement(d.Fragment,null,f&&d.createElement(k,{sideCar:_E,removeScrollBar:u,shards:h,noRelative:m,noIsolation:g,inert:v,setCallbacks:i,allowPinchZoom:!!y,lockRef:n,gapMode:w}),a?d.cloneElement(d.Children.only(l),hr(hr({},C),{ref:j})):d.createElement(x,hr({},C,{className:c,ref:j}),l))});df.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1};df.classNames={fullWidth:pu,zeroRight:hu};var S8=function(){if(typeof __webpack_nonce__<"u")return __webpack_nonce__};function k8(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=S8();return t&&e.setAttribute("nonce",t),e}function C8(e,t){e.styleSheet?e.styleSheet.cssText=t:e.appendChild(document.createTextNode(t))}function j8(e){var t=document.head||document.getElementsByTagName("head")[0];t.appendChild(e)}var E8=function(){var e=0,t=null;return{add:function(n){e==0&&(t=k8())&&(C8(t,n),j8(t)),e++},remove:function(){e--,!e&&t&&(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},N8=function(){var e=E8();return function(t,n){d.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},FE=function(){var e=N8(),t=function(n){var r=n.styles,s=n.dynamic;return e(r,s),null};return t},L8={left:0,top:0,right:0,gap:0},Eh=function(e){return parseInt(e||"",10)||0},P8=function(e){var t=window.getComputedStyle(document.body),n=t[e==="padding"?"paddingLeft":"marginLeft"],r=t[e==="padding"?"paddingTop":"marginTop"],s=t[e==="padding"?"paddingRight":"marginRight"];return[Eh(n),Eh(r),Eh(s)]},T8=function(e){if(e===void 0&&(e="margin"),typeof window>"u")return L8;var t=P8(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},M8=FE(),wo="data-scroll-locked",R8=function(e,t,n,r){var s=e.left,i=e.top,a=e.right,l=e.gap;return n===void 0&&(n="margin"),`
  .`.concat(h8,` {
   overflow: hidden `).concat(r,`;
   padding-right: `).concat(l,"px ").concat(r,`;
  }
  body[`).concat(wo,`] {
    overflow: hidden `).concat(r,`;
    overscroll-behavior: contain;
    `).concat([t&&"position: relative ".concat(r,";"),n==="margin"&&`
    padding-left: `.concat(s,`px;
    padding-top: `).concat(i,`px;
    padding-right: `).concat(a,`px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(l,"px ").concat(r,`;
    `),n==="padding"&&"padding-right: ".concat(l,"px ").concat(r,";")].filter(Boolean).join(""),`
  }
  
  .`).concat(hu,` {
    right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(pu,` {
    margin-right: `).concat(l,"px ").concat(r,`;
  }
  
  .`).concat(hu," .").concat(hu,` {
    right: 0 `).concat(r,`;
  }
  
  .`).concat(pu," .").concat(pu,` {
    margin-right: 0 `).concat(r,`;
  }
  
  body[`).concat(wo,`] {
    `).concat(p8,": ").concat(l,`px;
  }
`)},Cb=function(){var e=parseInt(document.body.getAttribute(wo)||"0",10);return isFinite(e)?e:0},A8=function(){d.useEffect(function(){return document.body.setAttribute(wo,(Cb()+1).toString()),function(){var e=Cb()-1;e<=0?document.body.removeAttribute(wo):document.body.setAttribute(wo,e.toString())}},[])},O8=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,s=r===void 0?"margin":r;A8();var i=d.useMemo(function(){return T8(s)},[s]);return d.createElement(M8,{styles:R8(i,!t,s,n?"":"!important")})},Sm=!1;if(typeof window<"u")try{var Ic=Object.defineProperty({},"passive",{get:function(){return Sm=!0,!0}});window.addEventListener("test",Ic,Ic),window.removeEventListener("test",Ic,Ic)}catch{Sm=!1}var Hi=Sm?{passive:!1}:!1,I8=function(e){return e.tagName==="TEXTAREA"},zE=function(e,t){if(!(e instanceof Element))return!1;var n=window.getComputedStyle(e);return n[t]!=="hidden"&&!(n.overflowY===n.overflowX&&!I8(e)&&n[t]==="visible")},D8=function(e){return zE(e,"overflowY")},_8=function(e){return zE(e,"overflowX")},jb=function(e,t){var n=t.ownerDocument,r=t;do{typeof ShadowRoot<"u"&&r instanceof ShadowRoot&&(r=r.host);var s=BE(e,r);if(s){var i=VE(e,r),a=i[1],l=i[2];if(a>l)return!0}r=r.parentNode}while(r&&r!==n.body);return!1},F8=function(e){var t=e.scrollTop,n=e.scrollHeight,r=e.clientHeight;return[t,n,r]},z8=function(e){var t=e.scrollLeft,n=e.scrollWidth,r=e.clientWidth;return[t,n,r]},BE=function(e,t){return e==="v"?D8(t):_8(t)},VE=function(e,t){return e==="v"?F8(t):z8(t)},B8=function(e,t){return e==="h"&&t==="rtl"?-1:1},V8=function(e,t,n,r,s){var i=B8(e,window.getComputedStyle(t).direction),a=i*r,l=n.target,c=t.contains(l),u=!1,f=a>0,h=0,p=0;do{if(!l)break;var m=VE(e,l),g=m[0],v=m[1],y=m[2],b=v-y-i*g;(g||b)&&BE(e,l)&&(h+=b,p+=g);var x=l.parentNode;l=x&&x.nodeType===Node.DOCUMENT_FRAGMENT_NODE?x.host:x}while(!c&&l!==document.body||c&&(t.contains(l)||t===l));return(f&&(Math.abs(h)<1||!s)||!f&&(Math.abs(p)<1||!s))&&(u=!0),u},Dc=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},Eb=function(e){return[e.deltaX,e.deltaY]},Nb=function(e){return e&&"current"in e?e.current:e},$8=function(e,t){return e[0]===t[0]&&e[1]===t[1]},U8=function(e){return`
  .block-interactivity-`.concat(e,` {pointer-events: none;}
  .allow-interactivity-`).concat(e,` {pointer-events: all;}
`)},H8=0,Wi=[];function W8(e){var t=d.useRef([]),n=d.useRef([0,0]),r=d.useRef(),s=d.useState(H8++)[0],i=d.useState(FE)[0],a=d.useRef(e);d.useEffect(function(){a.current=e},[e]),d.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(s));var v=f8([e.lockRef.current],(e.shards||[]).map(Nb),!0).filter(Boolean);return v.forEach(function(y){return y.classList.add("allow-interactivity-".concat(s))}),function(){document.body.classList.remove("block-interactivity-".concat(s)),v.forEach(function(y){return y.classList.remove("allow-interactivity-".concat(s))})}}},[e.inert,e.lockRef.current,e.shards]);var l=d.useCallback(function(v,y){if("touches"in v&&v.touches.length===2||v.type==="wheel"&&v.ctrlKey)return!a.current.allowPinchZoom;var b=Dc(v),x=n.current,w="deltaX"in v?v.deltaX:x[0]-b[0],S="deltaY"in v?v.deltaY:x[1]-b[1],k,j=v.target,C=Math.abs(w)>Math.abs(S)?"h":"v";if("touches"in v&&C==="h"&&j.type==="range")return!1;var E=jb(C,j);if(!E)return!0;if(E?k=C:(k=C==="v"?"h":"v",E=jb(C,j)),!E)return!1;if(!r.current&&"changedTouches"in v&&(w||S)&&(r.current=k),!k)return!0;var N=r.current||k;return V8(N,y,v,N==="h"?w:S,!0)},[]),c=d.useCallback(function(v){var y=v;if(!(!Wi.length||Wi[Wi.length-1]!==i)){var b="deltaY"in y?Eb(y):Dc(y),x=t.current.filter(function(k){return k.name===y.type&&(k.target===y.target||y.target===k.shadowParent)&&$8(k.delta,b)})[0];if(x&&x.should){y.cancelable&&y.preventDefault();return}if(!x){var w=(a.current.shards||[]).map(Nb).filter(Boolean).filter(function(k){return k.contains(y.target)}),S=w.length>0?l(y,w[0]):!a.current.noIsolation;S&&y.cancelable&&y.preventDefault()}}},[]),u=d.useCallback(function(v,y,b,x){var w={name:v,delta:y,target:b,should:x,shadowParent:K8(b)};t.current.push(w),setTimeout(function(){t.current=t.current.filter(function(S){return S!==w})},1)},[]),f=d.useCallback(function(v){n.current=Dc(v),r.current=void 0},[]),h=d.useCallback(function(v){u(v.type,Eb(v),v.target,l(v,e.lockRef.current))},[]),p=d.useCallback(function(v){u(v.type,Dc(v),v.target,l(v,e.lockRef.current))},[]);d.useEffect(function(){return Wi.push(i),e.setCallbacks({onScrollCapture:h,onWheelCapture:h,onTouchMoveCapture:p}),document.addEventListener("wheel",c,Hi),document.addEventListener("touchmove",c,Hi),document.addEventListener("touchstart",f,Hi),function(){Wi=Wi.filter(function(v){return v!==i}),document.removeEventListener("wheel",c,Hi),document.removeEventListener("touchmove",c,Hi),document.removeEventListener("touchstart",f,Hi)}},[]);var m=e.removeScrollBar,g=e.inert;return d.createElement(d.Fragment,null,g?d.createElement(i,{styles:U8(s)}):null,m?d.createElement(O8,{noRelative:e.noRelative,gapMode:e.gapMode}):null)}function K8(e){for(var t=null;e!==null;)e instanceof ShadowRoot&&(t=e.host,e=e.host),e=e.parentNode;return t}const G8=w8(_E,W8);var R0=d.forwardRef(function(e,t){return d.createElement(df,hr({},e,{ref:t,sideCar:G8}))});R0.classNames=df.classNames;var q8=[" ","Enter","ArrowUp","ArrowDown"],Z8=[" ","Enter"],Pi="Select",[ff,hf,Y8]=Ng(Pi),[aa,FU]=Sr(Pi,[Y8,Ud]),pf=Ud(),[Q8,Ws]=aa(Pi),[X8,J8]=aa(Pi),$E=e=>{const{__scopeSelect:t,children:n,open:r,defaultOpen:s,onOpenChange:i,value:a,defaultValue:l,onValueChange:c,dir:u,name:f,autoComplete:h,disabled:p,required:m,form:g}=e,v=pf(t),[y,b]=d.useState(null),[x,w]=d.useState(null),[S,k]=d.useState(!1),j=T0(u),[C,E]=ki({prop:r,defaultProp:s??!1,onChange:i,caller:Pi}),[N,L]=ki({prop:a,defaultProp:l,onChange:c,caller:Pi}),T=d.useRef(null),R=y?g||!!y.closest("form"):!0,[z,I]=d.useState(new Set),F=Array.from(z).map(A=>A.props.value).join(";");return o.jsx(fO,{...v,children:o.jsxs(Q8,{required:m,scope:t,trigger:y,onTriggerChange:b,valueNode:x,onValueNodeChange:w,valueNodeHasChildren:S,onValueNodeHasChildrenChange:k,contentId:Ts(),value:N,onValueChange:L,open:C,onOpenChange:E,dir:j,triggerPointerDownPosRef:T,disabled:p,children:[o.jsx(ff.Provider,{scope:t,children:o.jsx(X8,{scope:e.__scopeSelect,onNativeOptionAdd:d.useCallback(A=>{I(W=>new Set(W).add(A))},[]),onNativeOptionRemove:d.useCallback(A=>{I(W=>{const M=new Set(W);return M.delete(A),M})},[]),children:n})}),R?o.jsxs(fN,{"aria-hidden":!0,required:m,tabIndex:-1,name:f,autoComplete:h,value:N,onChange:A=>L(A.target.value),disabled:p,form:g,children:[N===void 0?o.jsx("option",{value:""}):null,Array.from(z)]},F):null]})})};$E.displayName=Pi;var UE="SelectTrigger",HE=d.forwardRef((e,t)=>{const{__scopeSelect:n,disabled:r=!1,...s}=e,i=pf(n),a=Ws(UE,n),l=a.disabled||r,c=Ve(t,a.onTriggerChange),u=hf(n),f=d.useRef("touch"),[h,p,m]=pN(v=>{const y=u().filter(w=>!w.disabled),b=y.find(w=>w.value===a.value),x=mN(y,v,b);x!==void 0&&a.onValueChange(x.value)}),g=v=>{l||(a.onOpenChange(!0),m()),v&&(a.triggerPointerDownPosRef.current={x:Math.round(v.pageX),y:Math.round(v.pageY)})};return o.jsx(MC,{asChild:!0,...i,children:o.jsx(we.button,{type:"button",role:"combobox","aria-controls":a.contentId,"aria-expanded":a.open,"aria-required":a.required,"aria-autocomplete":"none",dir:a.dir,"data-state":a.open?"open":"closed",disabled:l,"data-disabled":l?"":void 0,"data-placeholder":hN(a.value)?"":void 0,...s,ref:c,onClick:ge(s.onClick,v=>{v.currentTarget.focus(),f.current!=="mouse"&&g(v)}),onPointerDown:ge(s.onPointerDown,v=>{f.current=v.pointerType;const y=v.target;y.hasPointerCapture(v.pointerId)&&y.releasePointerCapture(v.pointerId),v.button===0&&v.ctrlKey===!1&&v.pointerType==="mouse"&&(g(v),v.preventDefault())}),onKeyDown:ge(s.onKeyDown,v=>{const y=h.current!=="";!(v.ctrlKey||v.altKey||v.metaKey)&&v.key.length===1&&p(v.key),!(y&&v.key===" ")&&q8.includes(v.key)&&(g(),v.preventDefault())})})})});HE.displayName=UE;var WE="SelectValue",KE=d.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:s,children:i,placeholder:a="",...l}=e,c=Ws(WE,n),{onValueNodeHasChildrenChange:u}=c,f=i!==void 0,h=Ve(t,c.onValueNodeChange);return Et(()=>{u(f)},[u,f]),o.jsx(we.span,{...l,ref:h,style:{pointerEvents:"none"},children:hN(c.value)?o.jsx(o.Fragment,{children:a}):i})});KE.displayName=WE;var eB="SelectIcon",GE=d.forwardRef((e,t)=>{const{__scopeSelect:n,children:r,...s}=e;return o.jsx(we.span,{"aria-hidden":!0,...s,ref:t,children:r||"▼"})});GE.displayName=eB;var tB="SelectPortal",qE=e=>o.jsx(Id,{asChild:!0,...e});qE.displayName=tB;var Ti="SelectContent",ZE=d.forwardRef((e,t)=>{const n=Ws(Ti,e.__scopeSelect),[r,s]=d.useState();if(Et(()=>{s(new DocumentFragment)},[]),!n.open){const i=r;return i?mn.createPortal(o.jsx(YE,{scope:e.__scopeSelect,children:o.jsx(ff.Slot,{scope:e.__scopeSelect,children:o.jsx("div",{children:e.children})})}),i):null}return o.jsx(QE,{...e,ref:t})});ZE.displayName=Ti;var Fn=10,[YE,Ks]=aa(Ti),nB="SelectContentImpl",rB=Fo("SelectContent.RemoveScroll"),QE=d.forwardRef((e,t)=>{const{__scopeSelect:n,position:r="item-aligned",onCloseAutoFocus:s,onEscapeKeyDown:i,onPointerDownOutside:a,side:l,sideOffset:c,align:u,alignOffset:f,arrowPadding:h,collisionBoundary:p,collisionPadding:m,sticky:g,hideWhenDetached:v,avoidCollisions:y,...b}=e,x=Ws(Ti,n),[w,S]=d.useState(null),[k,j]=d.useState(null),C=Ve(t,V=>S(V)),[E,N]=d.useState(null),[L,T]=d.useState(null),R=hf(n),[z,I]=d.useState(!1),F=d.useRef(!1);d.useEffect(()=>{if(w)return OE(w)},[w]),TE();const A=d.useCallback(V=>{const[J,...ce]=R().map(H=>H.ref.current),[$]=ce.slice(-1),Z=document.activeElement;for(const H of V)if(H===Z||(H==null||H.scrollIntoView({block:"nearest"}),H===J&&k&&(k.scrollTop=0),H===$&&k&&(k.scrollTop=k.scrollHeight),H==null||H.focus(),document.activeElement!==Z))return},[R,k]),W=d.useCallback(()=>A([E,w]),[A,E,w]);d.useEffect(()=>{z&&W()},[z,W]);const{onOpenChange:M,triggerPointerDownPosRef:O}=x;d.useEffect(()=>{if(w){let V={x:0,y:0};const J=$=>{var Z,H;V={x:Math.abs(Math.round($.pageX)-(((Z=O.current)==null?void 0:Z.x)??0)),y:Math.abs(Math.round($.pageY)-(((H=O.current)==null?void 0:H.y)??0))}},ce=$=>{V.x<=10&&V.y<=10?$.preventDefault():w.contains($.target)||M(!1),document.removeEventListener("pointermove",J),O.current=null};return O.current!==null&&(document.addEventListener("pointermove",J),document.addEventListener("pointerup",ce,{capture:!0,once:!0})),()=>{document.removeEventListener("pointermove",J),document.removeEventListener("pointerup",ce,{capture:!0})}}},[w,M,O]),d.useEffect(()=>{const V=()=>M(!1);return window.addEventListener("blur",V),window.addEventListener("resize",V),()=>{window.removeEventListener("blur",V),window.removeEventListener("resize",V)}},[M]);const[_,U]=pN(V=>{const J=R().filter(Z=>!Z.disabled),ce=J.find(Z=>Z.ref.current===document.activeElement),$=mN(J,V,ce);$&&setTimeout(()=>$.ref.current.focus())}),q=d.useCallback((V,J,ce)=>{const $=!F.current&&!ce;(x.value!==void 0&&x.value===J||$)&&(N(V),$&&(F.current=!0))},[x.value]),G=d.useCallback(()=>w==null?void 0:w.focus(),[w]),D=d.useCallback((V,J,ce)=>{const $=!F.current&&!ce;(x.value!==void 0&&x.value===J||$)&&T(V)},[x.value]),P=r==="popper"?km:XE,X=P===km?{side:l,sideOffset:c,align:u,alignOffset:f,arrowPadding:h,collisionBoundary:p,collisionPadding:m,sticky:g,hideWhenDetached:v,avoidCollisions:y}:{};return o.jsx(YE,{scope:n,content:w,viewport:k,onViewportChange:j,itemRefCallback:q,selectedItem:E,onItemLeave:G,itemTextRefCallback:D,focusSelectedItem:W,selectedItemText:L,position:r,isPositioned:z,searchRef:_,children:o.jsx(R0,{as:rB,allowPinchZoom:!0,children:o.jsx(M0,{asChild:!0,trapped:x.open,onMountAutoFocus:V=>{V.preventDefault()},onUnmountAutoFocus:ge(s,V=>{var J;(J=x.trigger)==null||J.focus({preventScroll:!0}),V.preventDefault()}),children:o.jsx(Fl,{asChild:!0,disableOutsidePointerEvents:!0,onEscapeKeyDown:i,onPointerDownOutside:a,onFocusOutside:V=>V.preventDefault(),onDismiss:()=>x.onOpenChange(!1),children:o.jsx(P,{role:"listbox",id:x.contentId,"data-state":x.open?"open":"closed",dir:x.dir,onContextMenu:V=>V.preventDefault(),...b,...X,onPlaced:()=>I(!0),ref:C,style:{display:"flex",flexDirection:"column",outline:"none",...b.style},onKeyDown:ge(b.onKeyDown,V=>{const J=V.ctrlKey||V.altKey||V.metaKey;if(V.key==="Tab"&&V.preventDefault(),!J&&V.key.length===1&&U(V.key),["ArrowUp","ArrowDown","Home","End"].includes(V.key)){let $=R().filter(Z=>!Z.disabled).map(Z=>Z.ref.current);if(["ArrowUp","End"].includes(V.key)&&($=$.slice().reverse()),["ArrowUp","ArrowDown"].includes(V.key)){const Z=V.target,H=$.indexOf(Z);$=$.slice(H+1)}setTimeout(()=>A($)),V.preventDefault()}})})})})})})});QE.displayName=nB;var sB="SelectItemAlignedPosition",XE=d.forwardRef((e,t)=>{const{__scopeSelect:n,onPlaced:r,...s}=e,i=Ws(Ti,n),a=Ks(Ti,n),[l,c]=d.useState(null),[u,f]=d.useState(null),h=Ve(t,C=>f(C)),p=hf(n),m=d.useRef(!1),g=d.useRef(!0),{viewport:v,selectedItem:y,selectedItemText:b,focusSelectedItem:x}=a,w=d.useCallback(()=>{if(i.trigger&&i.valueNode&&l&&u&&v&&y&&b){const C=i.trigger.getBoundingClientRect(),E=u.getBoundingClientRect(),N=i.valueNode.getBoundingClientRect(),L=b.getBoundingClientRect();if(i.dir!=="rtl"){const Z=L.left-E.left,H=N.left-Z,se=C.left-H,he=C.width+se,oe=Math.max(he,E.width),Oe=window.innerWidth-Fn,ct=vb(H,[Fn,Math.max(Fn,Oe-oe)]);l.style.minWidth=he+"px",l.style.left=ct+"px"}else{const Z=E.right-L.right,H=window.innerWidth-N.right-Z,se=window.innerWidth-C.right-H,he=C.width+se,oe=Math.max(he,E.width),Oe=window.innerWidth-Fn,ct=vb(H,[Fn,Math.max(Fn,Oe-oe)]);l.style.minWidth=he+"px",l.style.right=ct+"px"}const T=p(),R=window.innerHeight-Fn*2,z=v.scrollHeight,I=window.getComputedStyle(u),F=parseInt(I.borderTopWidth,10),A=parseInt(I.paddingTop,10),W=parseInt(I.borderBottomWidth,10),M=parseInt(I.paddingBottom,10),O=F+A+z+M+W,_=Math.min(y.offsetHeight*5,O),U=window.getComputedStyle(v),q=parseInt(U.paddingTop,10),G=parseInt(U.paddingBottom,10),D=C.top+C.height/2-Fn,P=R-D,X=y.offsetHeight/2,V=y.offsetTop+X,J=F+A+V,ce=O-J;if(J<=D){const Z=T.length>0&&y===T[T.length-1].ref.current;l.style.bottom="0px";const H=u.clientHeight-v.offsetTop-v.offsetHeight,se=Math.max(P,X+(Z?G:0)+H+W),he=J+se;l.style.height=he+"px"}else{const Z=T.length>0&&y===T[0].ref.current;l.style.top="0px";const se=Math.max(D,F+v.offsetTop+(Z?q:0)+X)+ce;l.style.height=se+"px",v.scrollTop=J-D+v.offsetTop}l.style.margin=`${Fn}px 0`,l.style.minHeight=_+"px",l.style.maxHeight=R+"px",r==null||r(),requestAnimationFrame(()=>m.current=!0)}},[p,i.trigger,i.valueNode,l,u,v,y,b,i.dir,r]);Et(()=>w(),[w]);const[S,k]=d.useState();Et(()=>{u&&k(window.getComputedStyle(u).zIndex)},[u]);const j=d.useCallback(C=>{C&&g.current===!0&&(w(),x==null||x(),g.current=!1)},[w,x]);return o.jsx(oB,{scope:n,contentWrapper:l,shouldExpandOnScrollRef:m,onScrollButtonChange:j,children:o.jsx("div",{ref:c,style:{display:"flex",flexDirection:"column",position:"fixed",zIndex:S},children:o.jsx(we.div,{...s,ref:h,style:{boxSizing:"border-box",maxHeight:"100%",...s.style}})})})});XE.displayName=sB;var iB="SelectPopperPosition",km=d.forwardRef((e,t)=>{const{__scopeSelect:n,align:r="start",collisionPadding:s=Fn,...i}=e,a=pf(n);return o.jsx(RC,{...a,...i,ref:t,align:r,collisionPadding:s,style:{boxSizing:"border-box",...i.style,"--radix-select-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-select-content-available-width":"var(--radix-popper-available-width)","--radix-select-content-available-height":"var(--radix-popper-available-height)","--radix-select-trigger-width":"var(--radix-popper-anchor-width)","--radix-select-trigger-height":"var(--radix-popper-anchor-height)"}})});km.displayName=iB;var[oB,A0]=aa(Ti,{}),Cm="SelectViewport",JE=d.forwardRef((e,t)=>{const{__scopeSelect:n,nonce:r,...s}=e,i=Ks(Cm,n),a=A0(Cm,n),l=Ve(t,i.onViewportChange),c=d.useRef(0);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"},nonce:r}),o.jsx(ff.Slot,{scope:n,children:o.jsx(we.div,{"data-radix-select-viewport":"",role:"presentation",...s,ref:l,style:{position:"relative",flex:1,overflow:"hidden auto",...s.style},onScroll:ge(s.onScroll,u=>{const f=u.currentTarget,{contentWrapper:h,shouldExpandOnScrollRef:p}=a;if(p!=null&&p.current&&h){const m=Math.abs(c.current-f.scrollTop);if(m>0){const g=window.innerHeight-Fn*2,v=parseFloat(h.style.minHeight),y=parseFloat(h.style.height),b=Math.max(v,y);if(b<g){const x=b+m,w=Math.min(g,x),S=x-w;h.style.height=w+"px",h.style.bottom==="0px"&&(f.scrollTop=S>0?S:0,h.style.justifyContent="flex-end")}}}c.current=f.scrollTop})})})]})});JE.displayName=Cm;var eN="SelectGroup",[aB,lB]=aa(eN),cB=d.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,s=Ts();return o.jsx(aB,{scope:n,id:s,children:o.jsx(we.div,{role:"group","aria-labelledby":s,...r,ref:t})})});cB.displayName=eN;var tN="SelectLabel",nN=d.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,s=lB(tN,n);return o.jsx(we.div,{id:s.id,...r,ref:t})});nN.displayName=tN;var ld="SelectItem",[uB,rN]=aa(ld),sN=d.forwardRef((e,t)=>{const{__scopeSelect:n,value:r,disabled:s=!1,textValue:i,...a}=e,l=Ws(ld,n),c=Ks(ld,n),u=l.value===r,[f,h]=d.useState(i??""),[p,m]=d.useState(!1),g=Ve(t,x=>{var w;return(w=c.itemRefCallback)==null?void 0:w.call(c,x,r,s)}),v=Ts(),y=d.useRef("touch"),b=()=>{s||(l.onValueChange(r),l.onOpenChange(!1))};if(r==="")throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");return o.jsx(uB,{scope:n,value:r,disabled:s,textId:v,isSelected:u,onItemTextChange:d.useCallback(x=>{h(w=>w||((x==null?void 0:x.textContent)??"").trim())},[]),children:o.jsx(ff.ItemSlot,{scope:n,value:r,disabled:s,textValue:f,children:o.jsx(we.div,{role:"option","aria-labelledby":v,"data-highlighted":p?"":void 0,"aria-selected":u&&p,"data-state":u?"checked":"unchecked","aria-disabled":s||void 0,"data-disabled":s?"":void 0,tabIndex:s?void 0:-1,...a,ref:g,onFocus:ge(a.onFocus,()=>m(!0)),onBlur:ge(a.onBlur,()=>m(!1)),onClick:ge(a.onClick,()=>{y.current!=="mouse"&&b()}),onPointerUp:ge(a.onPointerUp,()=>{y.current==="mouse"&&b()}),onPointerDown:ge(a.onPointerDown,x=>{y.current=x.pointerType}),onPointerMove:ge(a.onPointerMove,x=>{var w;y.current=x.pointerType,s?(w=c.onItemLeave)==null||w.call(c):y.current==="mouse"&&x.currentTarget.focus({preventScroll:!0})}),onPointerLeave:ge(a.onPointerLeave,x=>{var w;x.currentTarget===document.activeElement&&((w=c.onItemLeave)==null||w.call(c))}),onKeyDown:ge(a.onKeyDown,x=>{var S;((S=c.searchRef)==null?void 0:S.current)!==""&&x.key===" "||(Z8.includes(x.key)&&b(),x.key===" "&&x.preventDefault())})})})})});sN.displayName=ld;var Da="SelectItemText",iN=d.forwardRef((e,t)=>{const{__scopeSelect:n,className:r,style:s,...i}=e,a=Ws(Da,n),l=Ks(Da,n),c=rN(Da,n),u=J8(Da,n),[f,h]=d.useState(null),p=Ve(t,b=>h(b),c.onItemTextChange,b=>{var x;return(x=l.itemTextRefCallback)==null?void 0:x.call(l,b,c.value,c.disabled)}),m=f==null?void 0:f.textContent,g=d.useMemo(()=>o.jsx("option",{value:c.value,disabled:c.disabled,children:m},c.value),[c.disabled,c.value,m]),{onNativeOptionAdd:v,onNativeOptionRemove:y}=u;return Et(()=>(v(g),()=>y(g)),[v,y,g]),o.jsxs(o.Fragment,{children:[o.jsx(we.span,{id:c.textId,...i,ref:p}),c.isSelected&&a.valueNode&&!a.valueNodeHasChildren?mn.createPortal(i.children,a.valueNode):null]})});iN.displayName=Da;var oN="SelectItemIndicator",aN=d.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return rN(oN,n).isSelected?o.jsx(we.span,{"aria-hidden":!0,...r,ref:t}):null});aN.displayName=oN;var jm="SelectScrollUpButton",lN=d.forwardRef((e,t)=>{const n=Ks(jm,e.__scopeSelect),r=A0(jm,e.__scopeSelect),[s,i]=d.useState(!1),a=Ve(t,r.onScrollButtonChange);return Et(()=>{if(n.viewport&&n.isPositioned){let l=function(){const u=c.scrollTop>0;i(u)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),s?o.jsx(uN,{...e,ref:a,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop-c.offsetHeight)}}):null});lN.displayName=jm;var Em="SelectScrollDownButton",cN=d.forwardRef((e,t)=>{const n=Ks(Em,e.__scopeSelect),r=A0(Em,e.__scopeSelect),[s,i]=d.useState(!1),a=Ve(t,r.onScrollButtonChange);return Et(()=>{if(n.viewport&&n.isPositioned){let l=function(){const u=c.scrollHeight-c.clientHeight,f=Math.ceil(c.scrollTop)<u;i(f)};const c=n.viewport;return l(),c.addEventListener("scroll",l),()=>c.removeEventListener("scroll",l)}},[n.viewport,n.isPositioned]),s?o.jsx(uN,{...e,ref:a,onAutoScroll:()=>{const{viewport:l,selectedItem:c}=n;l&&c&&(l.scrollTop=l.scrollTop+c.offsetHeight)}}):null});cN.displayName=Em;var uN=d.forwardRef((e,t)=>{const{__scopeSelect:n,onAutoScroll:r,...s}=e,i=Ks("SelectScrollButton",n),a=d.useRef(null),l=hf(n),c=d.useCallback(()=>{a.current!==null&&(window.clearInterval(a.current),a.current=null)},[]);return d.useEffect(()=>()=>c(),[c]),Et(()=>{var f;const u=l().find(h=>h.ref.current===document.activeElement);(f=u==null?void 0:u.ref.current)==null||f.scrollIntoView({block:"nearest"})},[l]),o.jsx(we.div,{"aria-hidden":!0,...s,ref:t,style:{flexShrink:0,...s.style},onPointerDown:ge(s.onPointerDown,()=>{a.current===null&&(a.current=window.setInterval(r,50))}),onPointerMove:ge(s.onPointerMove,()=>{var u;(u=i.onItemLeave)==null||u.call(i),a.current===null&&(a.current=window.setInterval(r,50))}),onPointerLeave:ge(s.onPointerLeave,()=>{c()})})}),dB="SelectSeparator",dN=d.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e;return o.jsx(we.div,{"aria-hidden":!0,...r,ref:t})});dN.displayName=dB;var Nm="SelectArrow",fB=d.forwardRef((e,t)=>{const{__scopeSelect:n,...r}=e,s=pf(n),i=Ws(Nm,n),a=Ks(Nm,n);return i.open&&a.position==="popper"?o.jsx(AC,{...s,...r,ref:t}):null});fB.displayName=Nm;var hB="SelectBubbleInput",fN=d.forwardRef(({__scopeSelect:e,value:t,...n},r)=>{const s=d.useRef(null),i=Ve(r,s),a=RE(t);return d.useEffect(()=>{const l=s.current;if(!l)return;const c=window.HTMLSelectElement.prototype,f=Object.getOwnPropertyDescriptor(c,"value").set;if(a!==t&&f){const h=new Event("change",{bubbles:!0});f.call(l,t),l.dispatchEvent(h)}},[a,t]),o.jsx(we.select,{...n,style:{...Sk,...n.style},ref:i,defaultValue:t})});fN.displayName=hB;function hN(e){return e===""||e===void 0}function pN(e){const t=Ln(e),n=d.useRef(""),r=d.useRef(0),s=d.useCallback(a=>{const l=n.current+a;t(l),function c(u){n.current=u,window.clearTimeout(r.current),u!==""&&(r.current=window.setTimeout(()=>c(""),1e3))}(l)},[t]),i=d.useCallback(()=>{n.current="",window.clearTimeout(r.current)},[]);return d.useEffect(()=>()=>window.clearTimeout(r.current),[]),[n,s,i]}function mN(e,t,n){const s=t.length>1&&Array.from(t).every(u=>u===t[0])?t[0]:t,i=n?e.indexOf(n):-1;let a=pB(e,Math.max(i,0));s.length===1&&(a=a.filter(u=>u!==n));const c=a.find(u=>u.textValue.toLowerCase().startsWith(s.toLowerCase()));return c!==n?c:void 0}function pB(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var mB=$E,gN=HE,gB=KE,vB=GE,xB=qE,vN=ZE,yB=JE,xN=nN,yN=sN,bB=iN,wB=aN,bN=lN,wN=cN,SN=dN;const wt=mB,St=gB,mt=d.forwardRef(({className:e,children:t,...n},r)=>o.jsxs(gN,{ref:r,className:de("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",e),...n,children:[t,o.jsx(vB,{asChild:!0,children:o.jsx(Gk,{className:"h-4 w-4 opacity-50"})})]}));mt.displayName=gN.displayName;const kN=d.forwardRef(({className:e,...t},n)=>o.jsx(bN,{ref:n,className:de("flex cursor-default items-center justify-center py-1",e),...t,children:o.jsx(cR,{className:"h-4 w-4"})}));kN.displayName=bN.displayName;const CN=d.forwardRef(({className:e,...t},n)=>o.jsx(wN,{ref:n,className:de("flex cursor-default items-center justify-center py-1",e),...t,children:o.jsx(Gk,{className:"h-4 w-4"})}));CN.displayName=wN.displayName;const gt=d.forwardRef(({className:e,children:t,position:n="popper",...r},s)=>o.jsx(xB,{children:o.jsxs(vN,{ref:s,className:de("relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",n==="popper"&&"data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",e),position:n,...r,children:[o.jsx(kN,{}),o.jsx(yB,{className:de("p-1",n==="popper"&&"h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),children:t}),o.jsx(CN,{})]})}));gt.displayName=vN.displayName;const SB=d.forwardRef(({className:e,...t},n)=>o.jsx(xN,{ref:n,className:de("py-1.5 pl-8 pr-2 text-sm font-semibold",e),...t}));SB.displayName=xN.displayName;const _e=d.forwardRef(({className:e,children:t,...n},r)=>o.jsxs(yN,{ref:r,className:de("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",e),...n,children:[o.jsx("span",{className:"absolute left-2 flex h-3.5 w-3.5 items-center justify-center",children:o.jsx(wB,{children:o.jsx(lR,{className:"h-4 w-4"})})}),o.jsx(bB,{children:t})]}));_e.displayName=yN.displayName;const kB=d.forwardRef(({className:e,...t},n)=>o.jsx(SN,{ref:n,className:de("-mx-1 my-1 h-px bg-muted",e),...t}));kB.displayName=SN.displayName;const CB=()=>{const{franchises:e,loading:t,fetchFranchises:n,createFranchise:r,updateFranchise:s,terminateFranchise:i}=uf(),{cities:a,fetchCities:l}=cf(),[c,u]=d.useState(!1),[f,h]=d.useState(!1),[p,m]=d.useState(null),[g,v]=d.useState(!1),[y,b]=d.useState(!1),[x,w]=d.useState(""),[S,k]=d.useState(1),j=10,[C,E]=d.useState({cityId:"",name:"",code:"",maxActiveRiders:""});d.useEffect(()=>{l(),n()},[]);const N=d.useMemo(()=>{const _=(e==null?void 0:e.length)||0,U=(e==null?void 0:e.reduce((D,P)=>D+(P.maxActiveRiders||0),0))||0,q=_>0?Math.round(U/_):0,G=_>0?Math.min(Math.round(U/(_*100)*100),100):0;return{total:_,totalRiders:U,avgCapacity:q,efficiency:G}},[e]),L=d.useMemo(()=>x?e.filter(_=>{var U,q,G,D;return((U=_.name)==null?void 0:U.toLowerCase().includes(x.toLowerCase()))||((q=_.code)==null?void 0:q.toLowerCase().includes(x.toLowerCase()))||((D=(G=_.city)==null?void 0:G.name)==null?void 0:D.toLowerCase().includes(x.toLowerCase()))}):e,[e,x]),T=Math.ceil(L.length/j),R=d.useMemo(()=>{const _=(S-1)*j;return L.slice(_,_+j)},[L,S]),z=_=>{var U;m(_),E({cityId:_.cityId||"",name:_.name||"",code:_.code||"",maxActiveRiders:((U=_.maxActiveRiders)==null?void 0:U.toString())||""}),u(!0)},I=_=>{m(_),h(!0)},F=async _=>{_.preventDefault(),v(!0);try{const U={cityId:C.cityId,name:C.name,code:C.code,maxActiveRiders:parseInt(C.maxActiveRiders)||0};p?await s(p.id,U):await r(U),u(!1),E({cityId:"",name:"",code:"",maxActiveRiders:""}),m(null)}catch(U){console.error("Error saving franchise:",U)}finally{v(!1)}},A=async()=>{if(p)try{b(!0),await i(p.id)}catch(_){console.error("Error terminating franchise:",_)}finally{b(!1),h(!1),m(null)}},W=()=>{m(null),E({cityId:"",name:"",code:"",maxActiveRiders:""}),u(!0)},M=d.useMemo(()=>[{key:"name",label:"Franchise",render:(_,U)=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
font-black\r
shadow-lg\r
shadow-indigo-500/10\r
transition-all\r
duration-500\r
group-hover:scale-110\r
`,children:o.jsx(Bl,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:_}),o.jsx("div",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
uppercase\r
tracking-[0.2em]\r
font-bold\r
`,children:U.code})]})]})},{key:"city",label:"Region",render:_=>o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-2\r
text-slate-600\r
dark:text-slate-300\r
font-semibold\r
`,children:[o.jsx(Ci,{size:15,className:"text-emerald-500"}),(_==null?void 0:_.name)||"Global"]})},{key:"maxActiveRiders",label:"Capacity",render:_=>o.jsxs("div",{className:`\r
inline-flex\r
items-center\r
gap-2\r
px-3\r
py-1.5\r
rounded-full\r
bg-orange-500/10\r
text-orange-500\r
font-black\r
text-xs\r
tracking-wide\r
`,children:[o.jsx(ji,{size:14}),_]})},{key:"createdAt",label:"Created",render:_=>o.jsx("span",{className:`\r
text-sm\r
font-semibold\r
text-slate-600\r
dark:text-slate-300\r
`,children:_?new Date(_).toLocaleDateString():"-"})},{key:"actions",label:"",render:(_,U)=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>z(U),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
hover:text-indigo-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Ag,{size:16})}),o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>I(U),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Vs,{size:16})})]})}],[]),O=`
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
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Franchise Network",subtitle:"Manage operational franchise infrastructure"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-3},className:`${O} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Nodes"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:N.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(zd,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${O} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Rider Capacity"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:N.totalRiders})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(ji,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${O} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Avg Capacity"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:N.avgCapacity})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${O} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"space-y-4",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Efficiency"}),o.jsxs("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:[N.efficiency,"%"]})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-cyan-500/10\r
text-cyan-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Pn,{size:24})})]}),o.jsx(Li,{value:N.efficiency,className:"h-2"})]})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${O} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:"Franchise Command Center"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Distributed operational intelligence"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsxs("div",{className:"relative w-72",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{className:`\r
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
`,placeholder:"Search franchises...",value:x,onChange:_=>w(_.target.value)})]}),o.jsxs(ne,{onClick:W,className:`\r
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
`,children:[o.jsx(Zo,{size:18}),"Initialize Node"]})]})]}),o.jsx("div",{className:"p-4",children:t?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:M,data:R,emptyMessage:"No franchises found"})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(S-1)*j+1," - ",Math.min(S*j,L.length)," ","of"," ",L.length]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:S===1,onClick:()=>k(_=>_-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[S," / ",T||1]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:S===T||T===0,onClick:()=>k(_=>_+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),o.jsx(kn,{isOpen:c,onClose:()=>u(!1),title:p?"Update Franchise":"Create New Franchise",size:"lg",children:o.jsxs("form",{onSubmit:F,className:"space-y-5",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"City"}),o.jsxs(wt,{value:C.cityId,onValueChange:_=>E({...C,cityId:_}),children:[o.jsx(mt,{className:"rounded-2xl h-11",children:o.jsx(St,{placeholder:"Select City"})}),o.jsx(gt,{children:a.map(_=>o.jsx(_e,{value:_.id,children:_.name},_.id))})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Franchise Name"}),o.jsx(be,{className:"rounded-2xl h-11",placeholder:"Enter franchise name",value:C.name,onChange:_=>E({...C,name:_.target.value}),required:!0})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Node Code"}),o.jsx(be,{className:`\r
rounded-2xl\r
h-11\r
font-mono\r
tracking-[0.2em]\r
`,placeholder:"e.g. LHR01",value:C.code,onChange:_=>E({...C,code:_.target.value}),required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Rider Capacity"}),o.jsx(be,{type:"number",className:"rounded-2xl h-11",placeholder:"e.g. 50",value:C.maxActiveRiders,onChange:_=>E({...C,maxActiveRiders:_.target.value}),required:!0})]})]}),o.jsxs("div",{className:`\r
rounded-3xl\r
border\r
border-indigo-500/10\r
bg-gradient-to-br\r
from-indigo-500/5\r
to-cyan-500/5\r
p-5\r
flex\r
items-start\r
gap-4\r
`,children:[o.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:o.jsx(Ii,{size:18})}),o.jsxs("div",{children:[o.jsx("h4",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
text-sm\r
`,children:"Network Intelligence"}),o.jsx("p",{className:`\r
text-xs\r
leading-relaxed\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Franchise nodes inherit operational deployment settings and regional scaling infrastructure automatically."})]})]}),o.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx(ne,{type:"button",variant:"ghost",onClick:()=>u(!1),className:"rounded-2xl",children:"Cancel"}),o.jsx(ne,{disabled:g,type:"submit",className:`\r
min-w-[150px]\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,children:g?o.jsx(fn,{className:"animate-spin"}):p?"Update Franchise":"Create Franchise"})]})]})}),o.jsx(wr,{isOpen:f,onClose:()=>h(!1),onConfirm:A,title:"Terminate Franchise",message:`You are about to terminate ${p==null?void 0:p.name}. This action cannot be undone.`,loading:y})]})};var mf="Dialog",[jN,zU]=Sr(mf),[jB,tr]=jN(mf),EN=e=>{const{__scopeDialog:t,children:n,open:r,defaultOpen:s,onOpenChange:i,modal:a=!0}=e,l=d.useRef(null),c=d.useRef(null),[u,f]=ki({prop:r,defaultProp:s??!1,onChange:i,caller:mf});return o.jsx(jB,{scope:t,triggerRef:l,contentRef:c,contentId:Ts(),titleId:Ts(),descriptionId:Ts(),open:u,onOpenChange:f,onOpenToggle:d.useCallback(()=>f(h=>!h),[f]),modal:a,children:n})};EN.displayName=mf;var NN="DialogTrigger",EB=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=tr(NN,n),i=Ve(t,s.triggerRef);return o.jsx(we.button,{type:"button","aria-haspopup":"dialog","aria-expanded":s.open,"aria-controls":s.contentId,"data-state":D0(s.open),...r,ref:i,onClick:ge(e.onClick,s.onOpenToggle)})});EB.displayName=NN;var O0="DialogPortal",[NB,LN]=jN(O0,{forceMount:void 0}),PN=e=>{const{__scopeDialog:t,forceMount:n,children:r,container:s}=e,i=tr(O0,t);return o.jsx(NB,{scope:t,forceMount:n,children:d.Children.map(r,a=>o.jsx(Oi,{present:n||i.open,children:o.jsx(Id,{asChild:!0,container:s,children:a})}))})};PN.displayName=O0;var cd="DialogOverlay",TN=d.forwardRef((e,t)=>{const n=LN(cd,e.__scopeDialog),{forceMount:r=n.forceMount,...s}=e,i=tr(cd,e.__scopeDialog);return i.modal?o.jsx(Oi,{present:r||i.open,children:o.jsx(PB,{...s,ref:t})}):null});TN.displayName=cd;var LB=Fo("DialogOverlay.RemoveScroll"),PB=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=tr(cd,n);return o.jsx(R0,{as:LB,allowPinchZoom:!0,shards:[s.contentRef],children:o.jsx(we.div,{"data-state":D0(s.open),...r,ref:t,style:{pointerEvents:"auto",...r.style}})})}),Mi="DialogContent",MN=d.forwardRef((e,t)=>{const n=LN(Mi,e.__scopeDialog),{forceMount:r=n.forceMount,...s}=e,i=tr(Mi,e.__scopeDialog);return o.jsx(Oi,{present:r||i.open,children:i.modal?o.jsx(TB,{...s,ref:t}):o.jsx(MB,{...s,ref:t})})});MN.displayName=Mi;var TB=d.forwardRef((e,t)=>{const n=tr(Mi,e.__scopeDialog),r=d.useRef(null),s=Ve(t,n.contentRef,r);return d.useEffect(()=>{const i=r.current;if(i)return OE(i)},[]),o.jsx(RN,{...e,ref:s,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:ge(e.onCloseAutoFocus,i=>{var a;i.preventDefault(),(a=n.triggerRef.current)==null||a.focus()}),onPointerDownOutside:ge(e.onPointerDownOutside,i=>{const a=i.detail.originalEvent,l=a.button===0&&a.ctrlKey===!0;(a.button===2||l)&&i.preventDefault()}),onFocusOutside:ge(e.onFocusOutside,i=>i.preventDefault())})}),MB=d.forwardRef((e,t)=>{const n=tr(Mi,e.__scopeDialog),r=d.useRef(!1),s=d.useRef(!1);return o.jsx(RN,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:i=>{var a,l;(a=e.onCloseAutoFocus)==null||a.call(e,i),i.defaultPrevented||(r.current||(l=n.triggerRef.current)==null||l.focus(),i.preventDefault()),r.current=!1,s.current=!1},onInteractOutside:i=>{var c,u;(c=e.onInteractOutside)==null||c.call(e,i),i.defaultPrevented||(r.current=!0,i.detail.originalEvent.type==="pointerdown"&&(s.current=!0));const a=i.target;((u=n.triggerRef.current)==null?void 0:u.contains(a))&&i.preventDefault(),i.detail.originalEvent.type==="focusin"&&s.current&&i.preventDefault()}})}),RN=d.forwardRef((e,t)=>{const{__scopeDialog:n,trapFocus:r,onOpenAutoFocus:s,onCloseAutoFocus:i,...a}=e,l=tr(Mi,n),c=d.useRef(null),u=Ve(t,c);return TE(),o.jsxs(o.Fragment,{children:[o.jsx(M0,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:s,onUnmountAutoFocus:i,children:o.jsx(Fl,{role:"dialog",id:l.contentId,"aria-describedby":l.descriptionId,"aria-labelledby":l.titleId,"data-state":D0(l.open),...a,ref:u,onDismiss:()=>l.onOpenChange(!1)})}),o.jsxs(o.Fragment,{children:[o.jsx(RB,{titleId:l.titleId}),o.jsx(OB,{contentRef:c,descriptionId:l.descriptionId})]})]})}),I0="DialogTitle",AN=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=tr(I0,n);return o.jsx(we.h2,{id:s.titleId,...r,ref:t})});AN.displayName=I0;var ON="DialogDescription",IN=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=tr(ON,n);return o.jsx(we.p,{id:s.descriptionId,...r,ref:t})});IN.displayName=ON;var DN="DialogClose",_N=d.forwardRef((e,t)=>{const{__scopeDialog:n,...r}=e,s=tr(DN,n);return o.jsx(we.button,{type:"button",...r,ref:t,onClick:ge(e.onClick,()=>s.onOpenChange(!1))})});_N.displayName=DN;function D0(e){return e?"open":"closed"}var FN="DialogTitleWarning",[BU,zN]=fM(FN,{contentName:Mi,titleName:I0,docsSlug:"dialog"}),RB=({titleId:e})=>{const t=zN(FN),n=`\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;return d.useEffect(()=>{e&&(document.getElementById(e)||console.error(n))},[n,e]),null},AB="DialogDescriptionWarning",OB=({contentRef:e,descriptionId:t})=>{const r=`Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${zN(AB).contentName}}.`;return d.useEffect(()=>{var i;const s=(i=e.current)==null?void 0:i.getAttribute("aria-describedby");t&&s&&(document.getElementById(t)||console.warn(r))},[r,e,t]),null},IB=EN,DB=PN,BN=TN,VN=MN,$N=AN,UN=IN,_B=_N;const FB=IB,zB=DB,HN=d.forwardRef(({className:e,...t},n)=>o.jsx(BN,{ref:n,className:de("fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));HN.displayName=BN.displayName;const WN=d.forwardRef(({className:e,children:t,...n},r)=>o.jsxs(zB,{children:[o.jsx(HN,{}),o.jsxs(VN,{ref:r,className:de("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...n,children:[t,o.jsxs(_B,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",children:[o.jsx(Yo,{className:"h-4 w-4"}),o.jsx("span",{className:"sr-only",children:"Close"})]})]})]}));WN.displayName=VN.displayName;const KN=({className:e,...t})=>o.jsx("div",{className:de("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});KN.displayName="DialogHeader";const GN=d.forwardRef(({className:e,...t},n)=>o.jsx($N,{ref:n,className:de("text-lg font-semibold leading-none tracking-tight",e),...t}));GN.displayName=$N.displayName;const BB=d.forwardRef(({className:e,...t},n)=>o.jsx(UN,{ref:n,className:de("text-sm text-muted-foreground",e),...t}));BB.displayName=UN.displayName;const ka="https://api.barqibazar.org/franchise/api",_c={getAll:async(e=1,t=10,n=null)=>{const r={page:e,limit:t};return n&&(r.franchiseId=n),(await fe.get(`${ka}/franchise-admins`,{params:r})).data},getById:async e=>(await fe.get(`${ka}/franchise-admins/${e}`)).data,create:async e=>(await fe.post(`${ka}/franchise-admins`,e)).data,delete:async e=>(await fe.delete(`${ka}/franchise-admins/${e}`)).data,changeStatus:async(e,t)=>(await fe.patch(`${ka}/franchise-admins/${e}/status`,{status:t})).data},VB=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(!1),[s,i]=d.useState(null),[a,l]=d.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=d.useCallback(async(p=1,m=10,g=null)=>{var v,y,b,x;r(!0),i(null);try{const w=await _c.getAll(p,m,g),S=w.data||w,k=S.meta||S.pagination||{};t(S.items||[]),l({page:k.page||p,limit:k.limit||m,total:k.total||0,totalPages:k.totalPages||0,hasNext:k.hasNext||!1,hasPrev:k.hasPrev||!1})}catch(w){i(((y=(v=w.response)==null?void 0:v.data)==null?void 0:y.message)||"Failed to fetch franchise admins"),ie({title:"Error",description:((x=(b=w.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to fetch franchise admins",variant:"destructive"})}finally{r(!1)}},[]);return{admins:e,loading:n,error:s,pagination:a,fetchAdmins:c,createAdmin:async p=>{var m,g;r(!0);try{const v=await _c.create(p);return await c(a.page,a.limit),ie({title:"Success",description:"Franchise admin created successfully"}),v}catch(v){const y=(m=v.response)==null?void 0:m.data,b=(y==null?void 0:y.status)==="fail"&&(((g=y==null?void 0:y.data)==null?void 0:g.message)||typeof(y==null?void 0:y.data)=="object"&&Object.values((y==null?void 0:y.data)??{})[0])||(y==null?void 0:y.message)||v.message||"Failed to create franchise admin";throw ie({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}},deleteAdmin:async p=>{var m,g;r(!0);try{const v=await _c.delete(p);return await c(a.page,a.limit),ie({title:"Success",description:"Franchise admin removed successfully"}),v}catch(v){const y=((g=(m=v.response)==null?void 0:m.data)==null?void 0:g.message)||"Failed to remove franchise admin";throw ie({title:"Error",description:y,variant:"destructive"}),new Error(y)}finally{r(!1)}},changeStatus:async(p,m)=>{var g,v;try{const y=await _c.changeStatus(p,m);return t(b=>b.map(x=>x.id===p?{...x,status:m}:x)),ie({title:"Status Updated",description:`Admin has been ${m==="ACTIVE"?"activated":"suspended"} successfully`}),y}catch(y){const b=((v=(g=y.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to update admin status";throw ie({title:"Error",description:b,variant:"destructive"}),new Error(b)}}}},Lb={franchiseId:"",fullName:"",email:"",password:"",phone:""},$B=()=>{const{admins:e,loading:t,fetchAdmins:n,createAdmin:r,deleteAdmin:s,changeStatus:i}=VB(),{franchises:a,fetchFranchises:l}=uf(),[c,u]=d.useState(!1),[f,h]=d.useState(!1),[p,m]=d.useState(!1),[g,v]=d.useState(null),[y,b]=d.useState(!1),[x,w]=d.useState(!1),[S,k]=d.useState(!1),[j,C]=d.useState(""),[E,N]=d.useState(1),L=10,[T,R]=d.useState(Lb);d.useEffect(()=>{l(),n()},[]);const z=d.useMemo(()=>{const D=(e==null?void 0:e.length)||0,P=(e==null?void 0:e.filter(J=>J.status==="ACTIVE").length)||0,X=D-P,V=D>0?Math.round(P/D*100):0;return{total:D,active:P,suspended:X,efficiency:V}},[e]),I=d.useMemo(()=>j?e.filter(D=>{var P,X,V,J,ce;return((P=D==null?void 0:D.fullName)==null?void 0:P.toLowerCase().includes(j.toLowerCase()))||((X=D==null?void 0:D.email)==null?void 0:X.toLowerCase().includes(j.toLowerCase()))||((V=D==null?void 0:D.phone)==null?void 0:V.toLowerCase().includes(j.toLowerCase()))||((ce=(J=D==null?void 0:D.franchise)==null?void 0:J.name)==null?void 0:ce.toLowerCase().includes(j.toLowerCase()))}):e,[e,j]),F=Math.max(1,Math.ceil(I.length/L)),A=d.useMemo(()=>{const D=(E-1)*L;return I.slice(D,D+L)},[I,E]),W=D=>{v(D),h(!0)},M=D=>{v(D),m(!0)},O=async()=>{if(!g)return;const D=g.status==="ACTIVE"?"SUSPENDED":"ACTIVE";try{k(!0),await i(g.id,D)}catch(P){console.error("Status change error:",P)}finally{k(!1),m(!1),v(null)}},_=async()=>{if(g)try{w(!0),await s(g.id)}catch(D){console.error("Deletion error:",D)}finally{w(!1),h(!1),v(null)}},U=async D=>{if(D.preventDefault(),!T.franchiseId){alert("Please select a franchise before provisioning an admin.");return}b(!0);try{await r(T),await n(),u(!1),R(Lb)}catch(P){console.error("Error creating admin:",P)}finally{b(!1)}},q=d.useMemo(()=>[{key:"fullName",label:"Administrator",render:(D,P)=>o.jsxs("div",{className:"flex items-center gap-4 group",children:[o.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
font-black\r
transition-all\r
duration-500\r
group-hover:scale-110\r
group-hover:rotate-3\r
`,children:o.jsx(Vu,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
font-black\r
text-sm\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:(P==null?void 0:P.fullName)||"N/A"}),o.jsx("div",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
`,children:"Franchise Administrator"})]})]})},{key:"email",label:"Email",render:(D,P)=>o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-2\r
text-slate-600\r
dark:text-slate-300\r
`,children:[o.jsx(vl,{size:14,className:"text-indigo-500"}),o.jsx("span",{className:"font-medium",children:(P==null?void 0:P.email)||"-"})]})},{key:"phone",label:"Phone",render:(D,P)=>o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-2\r
text-slate-600\r
dark:text-slate-300\r
`,children:[o.jsx(xl,{size:14,className:"text-emerald-500"}),o.jsx("span",{className:"font-semibold",children:(P==null?void 0:P.phone)||"-"})]})},{key:"franchise",label:"Franchise",render:(D,P)=>{var X;return o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(Bl,{size:14,className:"text-orange-500"}),o.jsx("span",{className:`\r
font-semibold\r
text-slate-700\r
dark:text-slate-200\r
`,children:((X=P==null?void 0:P.franchise)==null?void 0:X.name)||"N/A"})]})}},{key:"role",label:"Role",render:(D,P)=>o.jsx("span",{className:`\r
px-3\r
py-1\r
rounded-full\r
bg-indigo-500/10\r
text-indigo-500\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.2em]\r
`,children:(P==null?void 0:P.role)||"ADMIN"})},{key:"status",label:"Status",render:(D,P)=>o.jsx("button",{onClick:()=>M(P),className:`\r
transition-all\r
duration-300\r
hover:scale-105\r
`,children:o.jsx(Xn,{status:D})})},{key:"actions",label:"",render:(D,P)=>o.jsx(ne,{size:"sm",variant:"ghost",className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,onClick:()=>W(P),children:o.jsx(Vs,{size:16})})}],[]),G=`
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
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Administrative Command",subtitle:"Manage franchise-level operational administrators"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
relative\r
overflow-hidden\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-cyan-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-4},className:`${G} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Admins"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:z.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(fR,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${G} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Active Access"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:z.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${G} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Suspended"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:z.suspended})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-red-500/10\r
text-red-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Rg,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${G} rounded-[2rem] p-6`,children:o.jsxs("div",{children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
mb-3\r
`,children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Network Stability"}),o.jsxs("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
mt-2\r
`,children:[z.efficiency,"%"]})]}),o.jsx("div",{className:`\r
w-12\r
h-12\r
rounded-2xl\r
bg-cyan-500/10\r
text-cyan-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(dR,{size:20})})]}),o.jsx(Li,{value:z.efficiency,className:"h-2"})]})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${G} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-3xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
flex\r
items-center\r
justify-center\r
shadow-xl\r
shadow-indigo-500/30\r
`,children:o.jsx(Ii,{size:24})}),o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-lg\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Franchise Control Matrix"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Live administrative infrastructure overview"})]})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsxs("div",{className:"relative w-72",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{className:`\r
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
`,placeholder:"Search admins...",value:j,onChange:D=>C(D.target.value)})]}),o.jsxs(ne,{onClick:()=>u(!0),className:`\r
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
`,children:[o.jsx(Zo,{size:18}),"Provision Admin"]})]})]}),o.jsx("div",{className:"p-4",children:t?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:q,data:A,emptyMessage:"No administrative nodes found"})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(E-1)*L+1," - ",Math.min(E*L,I.length)," ","of"," ",I.length]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:E===1,onClick:()=>N(D=>D-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[E," / ",F]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:E===F,onClick:()=>N(D=>D+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),o.jsx(FB,{open:c,onOpenChange:u,children:o.jsxs(WN,{className:`\r
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
`,children:[o.jsx(KN,{className:`\r
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
`,children:o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs("div",{children:[o.jsx(GN,{className:`\r
text-2xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Initialize Administrator"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
mt-1\r
`,children:"Provision new franchise admin access"})]}),o.jsx("button",{onClick:()=>u(!1),className:`\r
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
`,children:o.jsx(Yo,{size:18})})]})}),o.jsx("div",{className:"p-8",children:o.jsxs("form",{onSubmit:U,className:"space-y-6",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Franchise Node"}),o.jsxs(wt,{value:T.franchiseId,onValueChange:D=>R({...T,franchiseId:D}),children:[o.jsx(mt,{className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx(St,{placeholder:"Select franchise"})}),o.jsx(gt,{children:a.map(D=>o.jsx(_e,{value:D.id,children:D.name},D.id))})]})]}),o.jsxs("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-2\r
gap-5\r
`,children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Full Name"}),o.jsx(be,{className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"Ali Khan",value:T.fullName,onChange:D=>R({...T,fullName:D.target.value}),required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Phone Number"}),o.jsx(be,{className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"03001234567",value:T.phone,onChange:D=>R({...T,phone:D.target.value}),required:!0})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Email Address"}),o.jsx(be,{type:"email",className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"admin@company.com",value:T.email,onChange:D=>R({...T,email:D.target.value}),required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Temporary Password"}),o.jsx(be,{type:"password",className:`\r
rounded-2xl\r
h-12\r
border-slate-200\r
dark:border-slate-700\r
`,placeholder:"••••••••",value:T.password,onChange:D=>R({...T,password:D.target.value}),required:!0})]}),o.jsxs("div",{className:`\r
rounded-3xl\r
border\r
border-indigo-500/10\r
bg-gradient-to-br\r
from-indigo-500/5\r
to-cyan-500/5\r
p-5\r
flex\r
items-start\r
gap-4\r
`,children:[o.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:o.jsx(vt,{size:18})}),o.jsxs("div",{children:[o.jsx("h4",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
text-sm\r
`,children:"Administrative Access"}),o.jsx("p",{className:`\r
text-xs\r
leading-relaxed\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Administrators inherit operational permissions and access controls from the assigned franchise node."})]})]}),o.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-2\r
`,children:[o.jsx(ne,{type:"button",variant:"outline",onClick:()=>u(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),o.jsx(ne,{type:"submit",disabled:y,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:y?o.jsx(fn,{className:"animate-spin"}):o.jsxs(o.Fragment,{children:["Confirm Provision",o.jsx(Fd,{size:16,className:"ml-2"})]})})]})]})})]})}),o.jsx(wr,{isOpen:f,onClose:()=>h(!1),onConfirm:_,title:"Revoke Admin Access",message:`Are you sure you want to permanently remove access for ${g==null?void 0:g.fullName}?`,loading:x}),o.jsx(wr,{isOpen:p,onClose:()=>{m(!1),v(null)},onConfirm:O,title:(g==null?void 0:g.status)==="ACTIVE"?"Suspend Admin":"Activate Admin",message:(g==null?void 0:g.status)==="ACTIVE"?`Suspend access for ${g==null?void 0:g.fullName}?`:`Reactivate access for ${g==null?void 0:g.fullName}?`,confirmText:(g==null?void 0:g.status)==="ACTIVE"?"Suspend":"Activate",variant:(g==null?void 0:g.status)==="ACTIVE"?"destructive":"default",loading:S})]})};function Pl(e){"@babel/helpers - typeof";return Pl=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Pl(e)}function UB(e,t){if(Pl(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(Pl(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function HB(e){var t=UB(e,"string");return Pl(t)=="symbol"?t:t+""}function K(e,t,n){return(t=HB(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function qN(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Nh,Pb;function WB(){if(Pb)return Nh;Pb=1;var e=function(n,r,s,i,a,l,c,u){if(!n){var f;if(r===void 0)f=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var h=[s,i,a,l,c,u],p=0;f=new Error(r.replace(/%s/g,function(){return h[p++]})),f.name="Invariant Violation"}throw f.framesToPop=1,f}};return Nh=e,Nh}var KB=WB(),ht=qN(KB),je=d.createContext(null);function GB(){ht(!!d.useContext,"useGoogleMap is React hook and requires React version 16.8+");var e=d.useContext(je);return ht(!!e,"useGoogleMap needs a GoogleMap available up in the tree"),e}function qB(e,t,n){return Object.keys(e).reduce(function(s,i){return t(s,e[i],i)},n)}function ZB(e,t){Object.keys(e).forEach(n=>t(e[n],n))}function YB(e,t,n,r){var s={},i=(a,l)=>{var c=n[l];c!==t[l]&&(s[l]=c,a(r,c))};return ZB(e,i),s}function QB(e,t,n){var r=qB(n,function(i,a,l){return typeof e[l]=="function"&&i.push(google.maps.event.addListener(t,a,e[l])),i},[]);return r}function XB(e){google.maps.event.removeListener(e)}function Ne(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];e.forEach(XB)}function Ee(e){var{updaterMap:t,eventMap:n,prevProps:r,nextProps:s,instance:i}=e,a=QB(s,i,n);return YB(t,r,s,i),a}var Tb={onDblClick:"dblclick",onDragEnd:"dragend",onDragStart:"dragstart",onMapTypeIdChanged:"maptypeid_changed",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseDown:"mousedown",onMouseUp:"mouseup",onRightClick:"rightclick",onTilesLoaded:"tilesloaded",onBoundsChanged:"bounds_changed",onCenterChanged:"center_changed",onClick:"click",onDrag:"drag",onHeadingChanged:"heading_changed",onIdle:"idle",onProjectionChanged:"projection_changed",onResize:"resize",onTiltChanged:"tilt_changed",onZoomChanged:"zoom_changed"},Mb={extraMapTypes(e,t){t.forEach(function(r,s){e.mapTypes.set(String(s),r)})},center(e,t){e.setCenter(t)},clickableIcons(e,t){e.setClickableIcons(t)},heading(e,t){e.setHeading(t)},mapTypeId(e,t){e.setMapTypeId(t)},options(e,t){e.setOptions(t)},streetView(e,t){e.setStreetView(t)},tilt(e,t){e.setTilt(t)},zoom(e,t){e.setZoom(t)}};function JB(e){var{children:t,options:n,id:r,mapContainerStyle:s,mapContainerClassName:i,center:a,onClick:l,onDblClick:c,onDrag:u,onDragEnd:f,onDragStart:h,onMouseMove:p,onMouseOut:m,onMouseOver:g,onMouseDown:v,onMouseUp:y,onRightClick:b,onCenterChanged:x,onLoad:w,onUnmount:S}=e,[k,j]=d.useState(null),C=d.useRef(null),[E,N]=d.useState(null),[L,T]=d.useState(null),[R,z]=d.useState(null),[I,F]=d.useState(null),[A,W]=d.useState(null),[M,O]=d.useState(null),[_,U]=d.useState(null),[q,G]=d.useState(null),[D,P]=d.useState(null),[X,V]=d.useState(null),[J,ce]=d.useState(null),[$,Z]=d.useState(null);return d.useEffect(()=>{n&&k!==null&&k.setOptions(n)},[k,n]),d.useEffect(()=>{k!==null&&typeof a<"u"&&k.setCenter(a)},[k,a]),d.useEffect(()=>{k&&c&&(L!==null&&google.maps.event.removeListener(L),T(google.maps.event.addListener(k,"dblclick",c)))},[c]),d.useEffect(()=>{k&&f&&(R!==null&&google.maps.event.removeListener(R),z(google.maps.event.addListener(k,"dragend",f)))},[f]),d.useEffect(()=>{k&&h&&(I!==null&&google.maps.event.removeListener(I),F(google.maps.event.addListener(k,"dragstart",h)))},[h]),d.useEffect(()=>{k&&v&&(A!==null&&google.maps.event.removeListener(A),W(google.maps.event.addListener(k,"mousedown",v)))},[v]),d.useEffect(()=>{k&&p&&(M!==null&&google.maps.event.removeListener(M),O(google.maps.event.addListener(k,"mousemove",p)))},[p]),d.useEffect(()=>{k&&m&&(_!==null&&google.maps.event.removeListener(_),U(google.maps.event.addListener(k,"mouseout",m)))},[m]),d.useEffect(()=>{k&&g&&(q!==null&&google.maps.event.removeListener(q),G(google.maps.event.addListener(k,"mouseover",g)))},[g]),d.useEffect(()=>{k&&y&&(D!==null&&google.maps.event.removeListener(D),P(google.maps.event.addListener(k,"mouseup",y)))},[y]),d.useEffect(()=>{k&&b&&(X!==null&&google.maps.event.removeListener(X),V(google.maps.event.addListener(k,"rightclick",b)))},[b]),d.useEffect(()=>{k&&l&&(J!==null&&google.maps.event.removeListener(J),ce(google.maps.event.addListener(k,"click",l)))},[l]),d.useEffect(()=>{k&&u&&($!==null&&google.maps.event.removeListener($),Z(google.maps.event.addListener(k,"drag",u)))},[u]),d.useEffect(()=>{k&&x&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(k,"center_changed",x)))},[l]),d.useEffect(()=>{var H=C.current===null?null:new google.maps.Map(C.current,n);return j(H),H!==null&&w&&w(H),()=>{H!==null&&S&&S(H)}},[]),o.jsx("div",{id:r,ref:C,style:s,className:i,children:o.jsx(je.Provider,{value:k,children:k!==null?t:null})})}d.memo(JB);class eV extends d.PureComponent{constructor(){super(...arguments),K(this,"state",{map:null}),K(this,"registeredEvents",[]),K(this,"mapRef",null),K(this,"getInstance",()=>this.mapRef===null?null:new google.maps.Map(this.mapRef,this.props.options)),K(this,"panTo",t=>{var n=this.getInstance();n&&n.panTo(t)}),K(this,"setMapCallback",()=>{this.state.map!==null&&this.props.onLoad&&this.props.onLoad(this.state.map)}),K(this,"getRef",t=>{this.mapRef=t})}componentDidMount(){var t=this.getInstance();this.registeredEvents=Ee({updaterMap:Mb,eventMap:Tb,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{map:t}},this.setMapCallback)}componentDidUpdate(t){this.state.map!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Mb,eventMap:Tb,prevProps:t,nextProps:this.props,instance:this.state.map}))}componentWillUnmount(){this.state.map!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.map),Ne(this.registeredEvents))}render(){return o.jsx("div",{id:this.props.id,ref:this.getRef,style:this.props.mapContainerStyle,className:this.props.mapContainerClassName,children:o.jsx(je.Provider,{value:this.state.map,children:this.state.map!==null?this.props.children:null})})}}function Rb(e,t,n,r,s,i,a){try{var l=e[i](a),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,s)}function ZN(e){return function(){var t=this,n=arguments;return new Promise(function(r,s){var i=e.apply(t,n);function a(c){Rb(i,r,s,a,l,"next",c)}function l(c){Rb(i,r,s,a,l,"throw",c)}a(void 0)})}}function YN(e){var{googleMapsApiKey:t,googleMapsClientId:n,version:r="weekly",language:s,region:i,libraries:a,channel:l,mapIds:c,authReferrerPolicy:u,apiUrl:f="https://maps.googleapis.com"}=e,h=[];return ht(t&&n||!(t&&n),"You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."),t?h.push("key=".concat(t)):n&&h.push("client=".concat(n)),r&&h.push("v=".concat(r)),s&&h.push("language=".concat(s)),i&&h.push("region=".concat(i)),a&&a.length&&h.push("libraries=".concat(a.sort().join(","))),l&&h.push("channel=".concat(l)),c&&c.length&&h.push("map_ids=".concat(c.join(","))),u&&h.push("auth_referrer_policy=".concat(u)),h.push("loading=async"),h.push("callback=initMap"),"".concat(f,"/maps/api/js?").concat(h.join("&"))}var ys=typeof document<"u";function QN(e){var{url:t,id:n,nonce:r}=e;return ys?new Promise(function(i,a){var l=document.getElementById(n),c=window;if(l){var u=l.getAttribute("data-state");if(l.src===t&&u!=="error"){if(u==="ready")return i(n);var f=c.initMap,h=l.onerror;c.initMap=function(){f&&f(),i(n)},l.onerror=function(m){h&&h(m),a(m)};return}else l.remove()}var p=document.createElement("script");p.type="text/javascript",p.src=t,p.id=n,p.async=!0,p.nonce=r||"",p.onerror=function(g){p.setAttribute("data-state","error"),a(g)},c.initMap=function(){p.setAttribute("data-state","ready"),i(n)},document.head.appendChild(p)}).catch(s=>{throw console.error("injectScript error: ",s),s}):Promise.reject(new Error("document is undefined"))}function Ab(e){var t=e.href;return t&&(t.indexOf("https://fonts.googleapis.com/css?family=Roboto")===0||t.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text")===0)?!0:e.tagName.toLowerCase()==="style"&&e.styleSheet&&e.styleSheet.cssText&&e.styleSheet.cssText.replace(`\r
`,"").indexOf(".gm-style")===0?(e.styleSheet.cssText="",!0):e.tagName.toLowerCase()==="style"&&e.innerHTML&&e.innerHTML.replace(`\r
`,"").indexOf(".gm-style")===0?(e.innerHTML="",!0):e.tagName.toLowerCase()==="style"&&!e.styleSheet&&!e.innerHTML}function _0(){var e=document.getElementsByTagName("head")[0];if(e){var t=e.insertBefore.bind(e);e.insertBefore=function(s,i){return Ab(s)||Reflect.apply(t,e,[s,i]),s};var n=e.appendChild.bind(e);e.appendChild=function(s){return Ab(s)||Reflect.apply(n,e,[s]),s}}}var Ca=!1;function XN(){return o.jsx("div",{children:"Loading..."})}var Tl={id:"script-loader",version:"weekly"};class tV extends d.PureComponent{constructor(){super(...arguments),K(this,"check",null),K(this,"state",{loaded:!1}),K(this,"cleanupCallback",()=>{delete window.google.maps,this.injectScript()}),K(this,"isCleaningUp",ZN(function*(){function t(n){if(!Ca)n();else if(ys)var r=window.setInterval(function(){Ca||(window.clearInterval(r),n())},1)}return new Promise(t)})),K(this,"cleanup",()=>{Ca=!0;var t=document.getElementById(this.props.id);t&&t.parentNode&&t.parentNode.removeChild(t),Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(r){return typeof r.src=="string"&&r.src.includes("maps.googleapis")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(r){return r.href==="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans"}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)}),Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(r){return r.innerText!==void 0&&r.innerText.length>0&&r.innerText.includes(".gm-")}).forEach(function(r){r.parentNode&&r.parentNode.removeChild(r)})}),K(this,"injectScript",()=>{this.props.preventGoogleFontsLoading&&_0(),ht(!!this.props.id,'LoadScript requires "id" prop to be a string: %s',this.props.id);var t={id:this.props.id,nonce:this.props.nonce,url:YN(this.props)};QN(t).then(()=>{this.props.onLoad&&this.props.onLoad(),this.setState(function(){return{loaded:!0}})}).catch(n=>{this.props.onError&&this.props.onError(n),console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(this.props.googleMapsApiKey||"-",") or Client ID (").concat(this.props.googleMapsClientId||"-",`) to <LoadScript />
          Otherwise it is a Network issue.
        `))})}),K(this,"getRef",t=>{this.check=t})}componentDidMount(){if(ys){if(window.google&&window.google.maps&&!Ca){console.error("google api is already presented");return}this.isCleaningUp().then(this.injectScript).catch(function(n){console.error("Error at injecting script after cleaning up: ",n)})}}componentDidUpdate(t){this.props.libraries!==t.libraries&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),ys&&t.language!==this.props.language&&(this.cleanup(),this.setState(function(){return{loaded:!1}},this.cleanupCallback))}componentWillUnmount(){if(ys){this.cleanup();var t=()=>{this.check||(delete window.google,Ca=!1)};window.setTimeout(t,1),this.props.onUnmount&&this.props.onUnmount()}}render(){return o.jsxs(o.Fragment,{children:[o.jsx("div",{ref:this.getRef}),this.state.loaded?this.props.children:this.props.loadingElement||o.jsx(XN,{})]})}}K(tV,"defaultProps",Tl);function nV(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}function F0(e,t){if(e==null)return{};var n,r,s=nV(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var Ob;function rV(e){var{id:t=Tl.id,version:n=Tl.version,nonce:r,googleMapsApiKey:s,googleMapsClientId:i,language:a,region:l,libraries:c,preventGoogleFontsLoading:u,channel:f,mapIds:h,authReferrerPolicy:p,apiUrl:m="https://maps.googleapis.com"}=e,g=d.useRef(!1),[v,y]=d.useState(!1),[b,x]=d.useState(void 0);d.useEffect(function(){return g.current=!0,()=>{g.current=!1}},[]),d.useEffect(function(){ys&&u&&_0()},[u]),d.useEffect(function(){v&&ht(!!window.google,"useLoadScript was marked as loaded, but window.google is not present. Something went wrong.")},[v]);var w=YN({version:n,googleMapsApiKey:s,googleMapsClientId:i,language:a,region:l,libraries:c,channel:f,mapIds:h,authReferrerPolicy:p,apiUrl:m});d.useEffect(function(){if(!ys)return;function j(){g.current&&(y(!0),Ob=w)}if(window.google&&window.google.maps&&Ob===w){j();return}QN({id:t,url:w,nonce:r}).then(j).catch(function(E){g.current&&x(E),console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(s||"-",") or Client ID (").concat(i||"-",`)
        Otherwise it is a Network issue.
      `)),console.error(E)})},[t,w,r]);var S=d.useRef(void 0);return d.useEffect(function(){S.current&&c!==S.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),S.current=c},[c]),{isLoaded:v,loadError:b,url:w}}var sV=["loadingElement","onLoad","onError","onUnmount","children"],iV=o.jsx(XN,{});function oV(e){var{loadingElement:t,onLoad:n,onError:r,onUnmount:s,children:i}=e,a=F0(e,sV),{isLoaded:l,loadError:c}=rV(a);return d.useEffect(function(){l&&typeof n=="function"&&n()},[l,n]),d.useEffect(function(){c&&typeof r=="function"&&r(c)},[c,r]),d.useEffect(function(){return()=>{s&&s()}},[s]),l?i:t||iV}d.memo(oV);function aV(e,t,n,r){function s(i){return i instanceof n?i:new n(function(a){a(i)})}return new(n||(n=Promise))(function(i,a){function l(f){try{u(r.next(f))}catch(h){a(h)}}function c(f){try{u(r.throw(f))}catch(h){a(h)}}function u(f){f.done?i(f.value):s(f.value).then(l,c)}u((r=r.apply(e,[])).next())})}function lV(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var cV=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,s,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(s=r;s--!==0;)if(!e(t[s],n[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[s]))return!1;for(s=r;s--!==0;){var a=i[s];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n},uV=lV(cV),Ib="__googleMapsScriptId",uo;(function(e){e[e.INITIALIZED=0]="INITIALIZED",e[e.LOADING=1]="LOADING",e[e.SUCCESS=2]="SUCCESS",e[e.FAILURE=3]="FAILURE"})(uo||(uo={}));class ei{constructor(t){var{apiKey:n,authReferrerPolicy:r,channel:s,client:i,id:a=Ib,language:l,libraries:c=[],mapIds:u,nonce:f,region:h,retries:p=3,url:m="https://maps.googleapis.com/maps/api/js",version:g}=t;if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=n,this.authReferrerPolicy=r,this.channel=s,this.client=i,this.id=a||Ib,this.language=l,this.libraries=c,this.mapIds=u,this.nonce=f,this.region=h,this.retries=p,this.url=m,this.version=g,ei.instance){if(!uV(this.options,ei.instance.options))throw new Error("Loader must not be called again with different options. ".concat(JSON.stringify(this.options)," !== ").concat(JSON.stringify(ei.instance.options)));return ei.instance}ei.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?uo.FAILURE:this.done?uo.SUCCESS:this.loading?uo.LOADING:uo.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){var t=this.url;return t+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(t+="&key=".concat(this.apiKey)),this.channel&&(t+="&channel=".concat(this.channel)),this.client&&(t+="&client=".concat(this.client)),this.libraries.length>0&&(t+="&libraries=".concat(this.libraries.join(","))),this.language&&(t+="&language=".concat(this.language)),this.region&&(t+="&region=".concat(this.region)),this.version&&(t+="&v=".concat(this.version)),this.mapIds&&(t+="&map_ids=".concat(this.mapIds.join(","))),this.authReferrerPolicy&&(t+="&auth_referrer_policy=".concat(this.authReferrerPolicy)),t}deleteScript(){var t=document.getElementById(this.id);t&&t.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((t,n)=>{this.loadCallback(r=>{r?n(r.error):t(window.google)})})}importLibrary(t){return this.execute(),google.maps.importLibrary(t)}loadCallback(t){this.callbacks.push(t),this.execute()}setScript(){var t,n;if(document.getElementById(this.id)){this.callback();return}var r={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(r).forEach(i=>!r[i]&&delete r[i]),!((n=(t=window==null?void 0:window.google)===null||t===void 0?void 0:t.maps)===null||n===void 0)&&n.importLibrary||(i=>{var a,l,c,u="The Google Maps JavaScript API",f="google",h="importLibrary",p="__ib__",m=document,g=window;g=g[f]||(g[f]={});var v=g.maps||(g.maps={}),y=new Set,b=new URLSearchParams,x=()=>a||(a=new Promise((w,S)=>aV(this,void 0,void 0,function*(){var k;yield l=m.createElement("script"),l.id=this.id,b.set("libraries",[...y]+"");for(c in i)b.set(c.replace(/[A-Z]/g,j=>"_"+j[0].toLowerCase()),i[c]);b.set("callback",f+".maps."+p),l.src=this.url+"?"+b,v[p]=w,l.onerror=()=>a=S(Error(u+" could not load.")),l.nonce=this.nonce||((k=m.querySelector("script[nonce]"))===null||k===void 0?void 0:k.nonce)||"",m.head.append(l)})));v[h]?console.warn(u+" only loads once. Ignoring:",i):v[h]=function(w){for(var S=arguments.length,k=new Array(S>1?S-1:0),j=1;j<S;j++)k[j-1]=arguments[j];return y.add(w)&&x().then(()=>v[h](w,...k))}})(r);var s=this.libraries.map(i=>this.importLibrary(i));s.length||s.push(this.importLibrary("core")),Promise.all(s).then(()=>this.callback(),i=>{var a=new ErrorEvent("error",{error:i});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(t){if(this.errors.push(t),this.errors.length<=this.retries){var n=this.errors.length*Math.pow(2,this.errors.length);console.error("Failed to load Google Maps script, retrying in ".concat(n," ms.")),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=t,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(t=>{t(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}var dV=["maps"];function fV(e){var{id:t=Tl.id,version:n=Tl.version,nonce:r,googleMapsApiKey:s,language:i,region:a,libraries:l=dV,preventGoogleFontsLoading:c,mapIds:u,authReferrerPolicy:f}=e,h=d.useRef(!1),[p,m]=d.useState(!1),[g,v]=d.useState(void 0);d.useEffect(function(){return h.current=!0,()=>{h.current=!1}},[]);var y=d.useMemo(()=>new ei({id:t,apiKey:s,version:n,libraries:l,language:i||"en",region:a||"US",mapIds:u||[],nonce:r||"",authReferrerPolicy:f||"origin"}),[t,s,n,l,i,a,u,r,f]);d.useEffect(function(){p||y.load().then(()=>{h.current&&m(!0)}).catch(w=>{v(w)})},[]),d.useEffect(()=>{ys&&c&&_0()},[c]);var b=d.useRef();return d.useEffect(()=>{b.current&&l!==b.current&&console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"),b.current=l},[l]),{isLoaded:p,loadError:g}}function Db(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function ud(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Db(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Db(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var _b={},Fb={options(e,t){e.setOptions(t)}};function hV(e){var{options:t,onLoad:n,onUnmount:r}=e,s=d.useContext(je),[i,a]=d.useState(null);return d.useEffect(()=>{i!==null&&i.setMap(s)},[s]),d.useEffect(()=>{t&&i!==null&&i.setOptions(t)},[i,t]),d.useEffect(()=>{var l=new google.maps.TrafficLayer(ud(ud({},t),{},{map:s}));return a(l),n&&n(l),()=>{i!==null&&(r&&r(i),i.setMap(null))}},[]),null}d.memo(hV);class pV extends d.PureComponent{constructor(){super(...arguments),K(this,"state",{trafficLayer:null}),K(this,"setTrafficLayerCallback",()=>{this.state.trafficLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.trafficLayer)}),K(this,"registeredEvents",[])}componentDidMount(){var t=new google.maps.TrafficLayer(ud(ud({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:Fb,eventMap:_b,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{trafficLayer:t}},this.setTrafficLayerCallback)}componentDidUpdate(t){this.state.trafficLayer!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Fb,eventMap:_b,prevProps:t,nextProps:this.props,instance:this.state.trafficLayer}))}componentWillUnmount(){this.state.trafficLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.trafficLayer),Ne(this.registeredEvents),this.state.trafficLayer.setMap(null))}render(){return null}}K(pV,"contextType",je);function mV(e){var{onLoad:t,onUnmount:n}=e,r=d.useContext(je),[s,i]=d.useState(null);return d.useEffect(()=>{s!==null&&s.setMap(r)},[r]),d.useEffect(()=>{var a=new google.maps.BicyclingLayer;return i(a),a.setMap(r),t&&t(a),()=>{a!==null&&(n&&n(a),a.setMap(null))}},[]),null}d.memo(mV);class gV extends d.PureComponent{constructor(){super(...arguments),K(this,"state",{bicyclingLayer:null}),K(this,"setBicyclingLayerCallback",()=>{this.state.bicyclingLayer!==null&&(this.state.bicyclingLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.bicyclingLayer))})}componentDidMount(){var t=new google.maps.BicyclingLayer;this.setState(()=>({bicyclingLayer:t}),this.setBicyclingLayerCallback)}componentWillUnmount(){this.state.bicyclingLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.bicyclingLayer),this.state.bicyclingLayer.setMap(null))}render(){return null}}K(gV,"contextType",je);function vV(e){var{onLoad:t,onUnmount:n}=e,r=d.useContext(je),[s,i]=d.useState(null);return d.useEffect(()=>{s!==null&&s.setMap(r)},[r]),d.useEffect(()=>{var a=new google.maps.TransitLayer;return i(a),a.setMap(r),t&&t(a),()=>{s!==null&&(n&&n(s),s.setMap(null))}},[]),null}d.memo(vV);class xV extends d.PureComponent{constructor(){super(...arguments),K(this,"state",{transitLayer:null}),K(this,"setTransitLayerCallback",()=>{this.state.transitLayer!==null&&(this.state.transitLayer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.transitLayer))})}componentDidMount(){var t=new google.maps.TransitLayer;this.setState(function(){return{transitLayer:t}},this.setTransitLayerCallback)}componentWillUnmount(){this.state.transitLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.transitLayer),this.state.transitLayer.setMap(null))}render(){return null}}K(xV,"contextType",je);function zb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function dd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?zb(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):zb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Bb={onCircleComplete:"circlecomplete",onMarkerComplete:"markercomplete",onOverlayComplete:"overlaycomplete",onPolygonComplete:"polygoncomplete",onPolylineComplete:"polylinecomplete",onRectangleComplete:"rectanglecomplete"},Vb={drawingMode(e,t){e.setDrawingMode(t)},options(e,t){e.setOptions(t)}};function yV(e){var{options:t,drawingMode:n,onCircleComplete:r,onMarkerComplete:s,onOverlayComplete:i,onPolygonComplete:a,onPolylineComplete:l,onRectangleComplete:c,onLoad:u,onUnmount:f}=e,h=d.useContext(je),[p,m]=d.useState(null),[g,v]=d.useState(null),[y,b]=d.useState(null),[x,w]=d.useState(null),[S,k]=d.useState(null),[j,C]=d.useState(null),[E,N]=d.useState(null);return d.useEffect(()=>{p!==null&&p.setMap(h)},[h]),d.useEffect(()=>{t&&p!==null&&p.setOptions(t)},[p,t]),d.useEffect(()=>{p!==null&&p.setDrawingMode(n??null)},[p,n]),d.useEffect(()=>{p&&r&&(g!==null&&google.maps.event.removeListener(g),v(google.maps.event.addListener(p,"circlecomplete",r)))},[p,r]),d.useEffect(()=>{p&&s&&(y!==null&&google.maps.event.removeListener(y),b(google.maps.event.addListener(p,"markercomplete",s)))},[p,s]),d.useEffect(()=>{p&&i&&(x!==null&&google.maps.event.removeListener(x),w(google.maps.event.addListener(p,"overlaycomplete",i)))},[p,i]),d.useEffect(()=>{p&&a&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(p,"polygoncomplete",a)))},[p,a]),d.useEffect(()=>{p&&l&&(j!==null&&google.maps.event.removeListener(j),C(google.maps.event.addListener(p,"polylinecomplete",l)))},[p,l]),d.useEffect(()=>{p&&c&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(p,"rectanglecomplete",c)))},[p,c]),d.useEffect(()=>{ht(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing);var L=new google.maps.drawing.DrawingManager(dd(dd({},t),{},{map:h}));return n&&L.setDrawingMode(n),r&&v(google.maps.event.addListener(L,"circlecomplete",r)),s&&b(google.maps.event.addListener(L,"markercomplete",s)),i&&w(google.maps.event.addListener(L,"overlaycomplete",i)),a&&k(google.maps.event.addListener(L,"polygoncomplete",a)),l&&C(google.maps.event.addListener(L,"polylinecomplete",l)),c&&N(google.maps.event.addListener(L,"rectanglecomplete",c)),m(L),u&&u(L),()=>{p!==null&&(g&&google.maps.event.removeListener(g),y&&google.maps.event.removeListener(y),x&&google.maps.event.removeListener(x),S&&google.maps.event.removeListener(S),j&&google.maps.event.removeListener(j),E&&google.maps.event.removeListener(E),f&&f(p),p.setMap(null))}},[]),null}d.memo(yV);class bV extends d.PureComponent{constructor(t){super(t),K(this,"registeredEvents",[]),K(this,"state",{drawingManager:null}),K(this,"setDrawingManagerCallback",()=>{this.state.drawingManager!==null&&this.props.onLoad&&this.props.onLoad(this.state.drawingManager)}),ht(!!google.maps.drawing,"Did you include prop libraries={['drawing']} in the URL? %s",google.maps.drawing)}componentDidMount(){var t=new google.maps.drawing.DrawingManager(dd(dd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:Vb,eventMap:Bb,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{drawingManager:t}},this.setDrawingManagerCallback)}componentDidUpdate(t){this.state.drawingManager!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Vb,eventMap:Bb,prevProps:t,nextProps:this.props,instance:this.state.drawingManager}))}componentWillUnmount(){this.state.drawingManager!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.drawingManager),Ne(this.registeredEvents),this.state.drawingManager.setMap(null))}render(){return null}}K(bV,"contextType",je);function $b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function So(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?$b(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):$b(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Ub={onAnimationChanged:"animation_changed",onClick:"click",onClickableChanged:"clickable_changed",onCursorChanged:"cursor_changed",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDraggableChanged:"draggable_changed",onDragStart:"dragstart",onFlatChanged:"flat_changed",onIconChanged:"icon_changed",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onPositionChanged:"position_changed",onRightClick:"rightclick",onShapeChanged:"shape_changed",onTitleChanged:"title_changed",onVisibleChanged:"visible_changed",onZindexChanged:"zindex_changed"},Hb={animation(e,t){e.setAnimation(t)},clickable(e,t){e.setClickable(t)},cursor(e,t){e.setCursor(t)},draggable(e,t){e.setDraggable(t)},icon(e,t){e.setIcon(t)},label(e,t){e.setLabel(t)},map(e,t){e.setMap(t)},opacity(e,t){e.setOpacity(t)},options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},shape(e,t){e.setShape(t)},title(e,t){e.setTitle(t)},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},fd={};function wV(e){var{position:t,options:n,clusterer:r,noClustererRedraw:s,children:i,draggable:a,visible:l,animation:c,clickable:u,cursor:f,icon:h,label:p,opacity:m,shape:g,title:v,zIndex:y,onClick:b,onDblClick:x,onDrag:w,onDragEnd:S,onDragStart:k,onMouseOut:j,onMouseOver:C,onMouseUp:E,onMouseDown:N,onRightClick:L,onClickableChanged:T,onCursorChanged:R,onAnimationChanged:z,onDraggableChanged:I,onFlatChanged:F,onIconChanged:A,onPositionChanged:W,onShapeChanged:M,onTitleChanged:O,onVisibleChanged:_,onZindexChanged:U,onLoad:q,onUnmount:G}=e,D=d.useContext(je),[P,X]=d.useState(null),[V,J]=d.useState(null),[ce,$]=d.useState(null),[Z,H]=d.useState(null),[se,he]=d.useState(null),[oe,Oe]=d.useState(null),[ct,It]=d.useState(null),[Nt,ve]=d.useState(null),[Pe,$e]=d.useState(null),[De,gn]=d.useState(null),[Q,pe]=d.useState(null),[Te,We]=d.useState(null),[Ge,nr]=d.useState(null),[jr,Er]=d.useState(null),[Zr,Nr]=d.useState(null),[Gs,Lr]=d.useState(null),[_i,nc]=d.useState(null),[qs,ca]=d.useState(null),[rc,Fi]=d.useState(null),[nn,sc]=d.useState(null),[ye,Ie]=d.useState(null),[Fe,Wt]=d.useState(null);d.useEffect(()=>{P!==null&&P.setMap(D)},[D]),d.useEffect(()=>{typeof n<"u"&&P!==null&&P.setOptions(n)},[P,n]),d.useEffect(()=>{typeof a<"u"&&P!==null&&P.setDraggable(a)},[P,a]),d.useEffect(()=>{t&&P!==null&&P.setPosition(t)},[P,t]),d.useEffect(()=>{typeof l<"u"&&P!==null&&P.setVisible(l)},[P,l]),d.useEffect(()=>{P==null||P.setAnimation(c)},[P,c]),d.useEffect(()=>{P&&u!==void 0&&P.setClickable(u)},[P,u]),d.useEffect(()=>{P&&f!==void 0&&P.setCursor(f)},[P,f]),d.useEffect(()=>{P&&h!==void 0&&P.setIcon(h)},[P,h]),d.useEffect(()=>{P&&p!==void 0&&P.setLabel(p)},[P,p]),d.useEffect(()=>{P&&m!==void 0&&P.setOpacity(m)},[P,m]),d.useEffect(()=>{P&&g!==void 0&&P.setShape(g)},[P,g]),d.useEffect(()=>{P&&v!==void 0&&P.setTitle(v)},[P,v]),d.useEffect(()=>{P&&y!==void 0&&P.setZIndex(y)},[P,y]),d.useEffect(()=>{P&&x&&(V!==null&&google.maps.event.removeListener(V),J(google.maps.event.addListener(P,"dblclick",x)))},[x]),d.useEffect(()=>{P&&S&&(ce!==null&&google.maps.event.removeListener(ce),$(google.maps.event.addListener(P,"dragend",S)))},[S]),d.useEffect(()=>{P&&k&&(Z!==null&&google.maps.event.removeListener(Z),H(google.maps.event.addListener(P,"dragstart",k)))},[k]),d.useEffect(()=>{P&&N&&(se!==null&&google.maps.event.removeListener(se),he(google.maps.event.addListener(P,"mousedown",N)))},[N]),d.useEffect(()=>{P&&j&&(oe!==null&&google.maps.event.removeListener(oe),Oe(google.maps.event.addListener(P,"mouseout",j)))},[j]),d.useEffect(()=>{P&&C&&(ct!==null&&google.maps.event.removeListener(ct),It(google.maps.event.addListener(P,"mouseover",C)))},[C]),d.useEffect(()=>{P&&E&&(Nt!==null&&google.maps.event.removeListener(Nt),ve(google.maps.event.addListener(P,"mouseup",E)))},[E]),d.useEffect(()=>{P&&L&&(Pe!==null&&google.maps.event.removeListener(Pe),$e(google.maps.event.addListener(P,"rightclick",L)))},[L]),d.useEffect(()=>{P&&b&&(De!==null&&google.maps.event.removeListener(De),gn(google.maps.event.addListener(P,"click",b)))},[b]),d.useEffect(()=>{P&&w&&(Q!==null&&google.maps.event.removeListener(Q),pe(google.maps.event.addListener(P,"drag",w)))},[w]),d.useEffect(()=>{P&&T&&(Te!==null&&google.maps.event.removeListener(Te),We(google.maps.event.addListener(P,"clickable_changed",T)))},[T]),d.useEffect(()=>{P&&R&&(Ge!==null&&google.maps.event.removeListener(Ge),nr(google.maps.event.addListener(P,"cursor_changed",R)))},[R]),d.useEffect(()=>{P&&z&&(jr!==null&&google.maps.event.removeListener(jr),Er(google.maps.event.addListener(P,"animation_changed",z)))},[z]),d.useEffect(()=>{P&&I&&(Zr!==null&&google.maps.event.removeListener(Zr),Nr(google.maps.event.addListener(P,"draggable_changed",I)))},[I]),d.useEffect(()=>{P&&F&&(Gs!==null&&google.maps.event.removeListener(Gs),Lr(google.maps.event.addListener(P,"flat_changed",F)))},[F]),d.useEffect(()=>{P&&A&&(_i!==null&&google.maps.event.removeListener(_i),nc(google.maps.event.addListener(P,"icon_changed",A)))},[A]),d.useEffect(()=>{P&&W&&(qs!==null&&google.maps.event.removeListener(qs),ca(google.maps.event.addListener(P,"position_changed",W)))},[W]),d.useEffect(()=>{P&&M&&(rc!==null&&google.maps.event.removeListener(rc),Fi(google.maps.event.addListener(P,"shape_changed",M)))},[M]),d.useEffect(()=>{P&&O&&(nn!==null&&google.maps.event.removeListener(nn),sc(google.maps.event.addListener(P,"title_changed",O)))},[O]),d.useEffect(()=>{P&&_&&(ye!==null&&google.maps.event.removeListener(ye),Ie(google.maps.event.addListener(P,"visible_changed",_)))},[_]),d.useEffect(()=>{P&&U&&(Fe!==null&&google.maps.event.removeListener(Fe),Wt(google.maps.event.addListener(P,"zindex_changed",U)))},[U]),d.useEffect(()=>{var Kt=So(So(So({},n||fd),r?fd:{map:D}),{},{position:t}),xe=new google.maps.Marker(Kt);return r?r.addMarker(xe,!!s):xe.setMap(D),t&&xe.setPosition(t),typeof l<"u"&&xe.setVisible(l),typeof a<"u"&&xe.setDraggable(a),typeof u<"u"&&xe.setClickable(u),typeof f=="string"&&xe.setCursor(f),h&&xe.setIcon(h),typeof p<"u"&&xe.setLabel(p),typeof m<"u"&&xe.setOpacity(m),g&&xe.setShape(g),typeof v=="string"&&xe.setTitle(v),typeof y=="number"&&xe.setZIndex(y),x&&J(google.maps.event.addListener(xe,"dblclick",x)),S&&$(google.maps.event.addListener(xe,"dragend",S)),k&&H(google.maps.event.addListener(xe,"dragstart",k)),N&&he(google.maps.event.addListener(xe,"mousedown",N)),j&&Oe(google.maps.event.addListener(xe,"mouseout",j)),C&&It(google.maps.event.addListener(xe,"mouseover",C)),E&&ve(google.maps.event.addListener(xe,"mouseup",E)),L&&$e(google.maps.event.addListener(xe,"rightclick",L)),b&&gn(google.maps.event.addListener(xe,"click",b)),w&&pe(google.maps.event.addListener(xe,"drag",w)),T&&We(google.maps.event.addListener(xe,"clickable_changed",T)),R&&nr(google.maps.event.addListener(xe,"cursor_changed",R)),z&&Er(google.maps.event.addListener(xe,"animation_changed",z)),I&&Nr(google.maps.event.addListener(xe,"draggable_changed",I)),F&&Lr(google.maps.event.addListener(xe,"flat_changed",F)),A&&nc(google.maps.event.addListener(xe,"icon_changed",A)),W&&ca(google.maps.event.addListener(xe,"position_changed",W)),M&&Fi(google.maps.event.addListener(xe,"shape_changed",M)),O&&sc(google.maps.event.addListener(xe,"title_changed",O)),_&&Ie(google.maps.event.addListener(xe,"visible_changed",_)),U&&Wt(google.maps.event.addListener(xe,"zindex_changed",U)),X(xe),q&&q(xe),()=>{V!==null&&google.maps.event.removeListener(V),ce!==null&&google.maps.event.removeListener(ce),Z!==null&&google.maps.event.removeListener(Z),se!==null&&google.maps.event.removeListener(se),oe!==null&&google.maps.event.removeListener(oe),ct!==null&&google.maps.event.removeListener(ct),Nt!==null&&google.maps.event.removeListener(Nt),Pe!==null&&google.maps.event.removeListener(Pe),De!==null&&google.maps.event.removeListener(De),Te!==null&&google.maps.event.removeListener(Te),Ge!==null&&google.maps.event.removeListener(Ge),jr!==null&&google.maps.event.removeListener(jr),Zr!==null&&google.maps.event.removeListener(Zr),Gs!==null&&google.maps.event.removeListener(Gs),_i!==null&&google.maps.event.removeListener(_i),qs!==null&&google.maps.event.removeListener(qs),nn!==null&&google.maps.event.removeListener(nn),ye!==null&&google.maps.event.removeListener(ye),Fe!==null&&google.maps.event.removeListener(Fe),G&&G(xe),r?r.removeMarker(xe,!!s):xe&&xe.setMap(null)}},[]);var rn=d.useMemo(()=>i?d.Children.map(i,Kt=>{if(!d.isValidElement(Kt))return Kt;var xe=Kt;return d.cloneElement(xe,{anchor:P})}):null,[i,P]);return o.jsx(o.Fragment,{children:rn})||null}d.memo(wV);class JN extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[])}componentDidMount(){var t=this;return ZN(function*(){var n=So(So(So({},t.props.options||fd),t.props.clusterer?fd:{map:t.context}),{},{position:t.props.position});t.marker=new google.maps.Marker(n),t.props.clusterer?t.props.clusterer.addMarker(t.marker,!!t.props.noClustererRedraw):t.marker.setMap(t.context),t.registeredEvents=Ee({updaterMap:Hb,eventMap:Ub,prevProps:{},nextProps:t.props,instance:t.marker}),t.props.onLoad&&t.props.onLoad(t.marker)})()}componentDidUpdate(t){this.marker&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Hb,eventMap:Ub,prevProps:t,nextProps:this.props,instance:this.marker}))}componentWillUnmount(){this.marker&&(this.props.onUnmount&&this.props.onUnmount(this.marker),Ne(this.registeredEvents),this.props.clusterer?this.props.clusterer.removeMarker(this.marker,!!this.props.noClustererRedraw):this.marker&&this.marker.setMap(null))}render(){var t=this.props.children?d.Children.map(this.props.children,n=>{if(!d.isValidElement(n))return n;var r=n;return d.cloneElement(r,{anchor:this.marker})}):null;return t||null}}K(JN,"contextType",je);var SV=function(){function e(t,n){t.getClusterer().extend(e,google.maps.OverlayView),this.cluster=t,this.clusterClassName=this.cluster.getClusterer().getClusterClass(),this.className=this.clusterClassName,this.styles=n,this.center=void 0,this.div=null,this.sums=null,this.visible=!1,this.boundsChangedListener=null,this.url="",this.height=0,this.width=0,this.anchorText=[0,0],this.anchorIcon=[0,0],this.textColor="black",this.textSize=11,this.textDecoration="none",this.fontWeight="bold",this.fontStyle="normal",this.fontFamily="Arial,sans-serif",this.backgroundPosition="0 0",this.cMouseDownInCluster=null,this.cDraggingMapByCluster=null,this.timeOut=null,this.setMap(t.getMap()),this.onBoundsChanged=this.onBoundsChanged.bind(this),this.onMouseDown=this.onMouseDown.bind(this),this.onClick=this.onClick.bind(this),this.onMouseOver=this.onMouseOver.bind(this),this.onMouseOut=this.onMouseOut.bind(this),this.onAdd=this.onAdd.bind(this),this.onRemove=this.onRemove.bind(this),this.draw=this.draw.bind(this),this.hide=this.hide.bind(this),this.show=this.show.bind(this),this.useStyle=this.useStyle.bind(this),this.setCenter=this.setCenter.bind(this),this.getPosFromLatLng=this.getPosFromLatLng.bind(this)}return e.prototype.onBoundsChanged=function(){this.cDraggingMapByCluster=this.cMouseDownInCluster},e.prototype.onMouseDown=function(){this.cMouseDownInCluster=!0,this.cDraggingMapByCluster=!1},e.prototype.onClick=function(t){if(this.cMouseDownInCluster=!1,!this.cDraggingMapByCluster){var n=this.cluster.getClusterer();if(google.maps.event.trigger(n,"click",this.cluster),google.maps.event.trigger(n,"clusterclick",this.cluster),n.getZoomOnClick()){var r=n.getMaxZoom(),s=this.cluster.getBounds(),i=n.getMap();i!==null&&"fitBounds"in i&&i.fitBounds(s),this.timeOut=window.setTimeout(function(){var a=n.getMap();if(a!==null){"fitBounds"in a&&a.fitBounds(s);var l=a.getZoom()||0;r!==null&&l>r&&a.setZoom(r+1)}},100)}t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation()}},e.prototype.onMouseOver=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseover",this.cluster)},e.prototype.onMouseOut=function(){google.maps.event.trigger(this.cluster.getClusterer(),"mouseout",this.cluster)},e.prototype.onAdd=function(){var t;this.div=document.createElement("div"),this.div.className=this.className,this.visible&&this.show(),(t=this.getPanes())===null||t===void 0||t.overlayMouseTarget.appendChild(this.div);var n=this.getMap();n!==null&&(this.boundsChangedListener=google.maps.event.addListener(n,"bounds_changed",this.onBoundsChanged),this.div.addEventListener("mousedown",this.onMouseDown),this.div.addEventListener("click",this.onClick),this.div.addEventListener("mouseover",this.onMouseOver),this.div.addEventListener("mouseout",this.onMouseOut))},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.hide(),this.boundsChangedListener!==null&&google.maps.event.removeListener(this.boundsChangedListener),this.div.removeEventListener("mousedown",this.onMouseDown),this.div.removeEventListener("click",this.onClick),this.div.removeEventListener("mouseover",this.onMouseOver),this.div.removeEventListener("mouseout",this.onMouseOut),this.div.parentNode.removeChild(this.div),this.timeOut!==null&&(window.clearTimeout(this.timeOut),this.timeOut=null),this.div=null)},e.prototype.draw=function(){if(this.visible&&this.div!==null&&this.center){var t=this.getPosFromLatLng(this.center);this.div.style.top=t!==null?"".concat(t.y,"px"):"0",this.div.style.left=t!==null?"".concat(t.x,"px"):"0"}},e.prototype.hide=function(){this.div&&(this.div.style.display="none"),this.visible=!1},e.prototype.show=function(){var t,n,r,s,i,a;if(this.div&&this.center){var l=this.sums===null||typeof this.sums.title>"u"||this.sums.title===""?this.cluster.getClusterer().getTitle():this.sums.title,c=this.backgroundPosition.split(" "),u=parseInt(((t=c[0])===null||t===void 0?void 0:t.replace(/^\s+|\s+$/g,""))||"0",10),f=parseInt(((n=c[1])===null||n===void 0?void 0:n.replace(/^\s+|\s+$/g,""))||"0",10),h=this.getPosFromLatLng(this.center);this.div.className=this.className,this.div.setAttribute("style","cursor: pointer; position: absolute; top: ".concat(h!==null?"".concat(h.y,"px"):"0","; left: ").concat(h!==null?"".concat(h.x,"px"):"0","; width: ").concat(this.width,"px; height: ").concat(this.height,"px; "));var p=document.createElement("img");p.alt=l,p.src=this.url,p.width=this.width,p.height=this.height,p.setAttribute("style","position: absolute; top: ".concat(f,"px; left: ").concat(u,"px")),this.cluster.getClusterer().enableRetinaIcons||(p.style.clip="rect(-".concat(f,"px, -").concat(u+this.width,"px, -").concat(f+this.height,", -").concat(u,")"));var m=document.createElement("div");m.setAttribute("style","position: absolute; top: ".concat(this.anchorText[0],"px; left: ").concat(this.anchorText[1],"px; color: ").concat(this.textColor,"; font-size: ").concat(this.textSize,"px; font-family: ").concat(this.fontFamily,"; font-weight: ").concat(this.fontWeight,"; fontStyle: ").concat(this.fontStyle,"; text-decoration: ").concat(this.textDecoration,"; text-align: center; width: ").concat(this.width,"px; line-height: ").concat(this.height,"px")),!((r=this.sums)===null||r===void 0)&&r.text&&(m.innerText="".concat((s=this.sums)===null||s===void 0?void 0:s.text)),!((i=this.sums)===null||i===void 0)&&i.html&&(m.innerHTML="".concat((a=this.sums)===null||a===void 0?void 0:a.html)),this.div.innerHTML="",this.div.appendChild(p),this.div.appendChild(m),this.div.title=l,this.div.style.display=""}this.visible=!0},e.prototype.useStyle=function(t){this.sums=t;var n=this.cluster.getClusterer().getStyles(),r=n[Math.min(n.length-1,Math.max(0,t.index-1))];r&&(this.url=r.url,this.height=r.height,this.width=r.width,r.className&&(this.className="".concat(this.clusterClassName," ").concat(r.className)),this.anchorText=r.anchorText||[0,0],this.anchorIcon=r.anchorIcon||[this.height/2,this.width/2],this.textColor=r.textColor||"black",this.textSize=r.textSize||11,this.textDecoration=r.textDecoration||"none",this.fontWeight=r.fontWeight||"bold",this.fontStyle=r.fontStyle||"normal",this.fontFamily=r.fontFamily||"Arial,sans-serif",this.backgroundPosition=r.backgroundPosition||"0 0")},e.prototype.setCenter=function(t){this.center=t},e.prototype.getPosFromLatLng=function(t){var n=this.getProjection().fromLatLngToDivPixel(t);return n!==null&&(n.x-=this.anchorIcon[1],n.y-=this.anchorIcon[0]),n},e}(),kV=function(){function e(t){this.markerClusterer=t,this.map=this.markerClusterer.getMap(),this.gridSize=this.markerClusterer.getGridSize(),this.minClusterSize=this.markerClusterer.getMinimumClusterSize(),this.averageCenter=this.markerClusterer.getAverageCenter(),this.markers=[],this.center=void 0,this.bounds=null,this.clusterIcon=new SV(this,this.markerClusterer.getStyles()),this.getSize=this.getSize.bind(this),this.getMarkers=this.getMarkers.bind(this),this.getCenter=this.getCenter.bind(this),this.getMap=this.getMap.bind(this),this.getClusterer=this.getClusterer.bind(this),this.getBounds=this.getBounds.bind(this),this.remove=this.remove.bind(this),this.addMarker=this.addMarker.bind(this),this.isMarkerInClusterBounds=this.isMarkerInClusterBounds.bind(this),this.calculateBounds=this.calculateBounds.bind(this),this.updateIcon=this.updateIcon.bind(this),this.isMarkerAlreadyAdded=this.isMarkerAlreadyAdded.bind(this)}return e.prototype.getSize=function(){return this.markers.length},e.prototype.getMarkers=function(){return this.markers},e.prototype.getCenter=function(){return this.center},e.prototype.getMap=function(){return this.map},e.prototype.getClusterer=function(){return this.markerClusterer},e.prototype.getBounds=function(){for(var t=new google.maps.LatLngBounds(this.center,this.center),n=this.getMarkers(),r=0,s=n;r<s.length;r++){var i=s[r],a=i.getPosition();a&&t.extend(a)}return t},e.prototype.remove=function(){this.clusterIcon.setMap(null),this.markers=[],delete this.markers},e.prototype.addMarker=function(t){var n;if(this.isMarkerAlreadyAdded(t))return!1;if(this.center){if(this.averageCenter){var r=t.getPosition();if(r){var s=this.markers.length+1;this.center=new google.maps.LatLng((this.center.lat()*(s-1)+r.lat())/s,(this.center.lng()*(s-1)+r.lng())/s),this.calculateBounds()}}}else{var r=t.getPosition();r&&(this.center=r,this.calculateBounds())}t.isAdded=!0,this.markers.push(t);var i=this.markers.length,a=this.markerClusterer.getMaxZoom(),l=(n=this.map)===null||n===void 0?void 0:n.getZoom();if(a!==null&&typeof l<"u"&&l>a)t.getMap()!==this.map&&t.setMap(this.map);else if(i<this.minClusterSize)t.getMap()!==this.map&&t.setMap(this.map);else if(i===this.minClusterSize)for(var c=0,u=this.markers;c<u.length;c++){var f=u[c];f.setMap(null)}else t.setMap(null);return!0},e.prototype.isMarkerInClusterBounds=function(t){if(this.bounds!==null){var n=t.getPosition();if(n)return this.bounds.contains(n)}return!1},e.prototype.calculateBounds=function(){this.bounds=this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center,this.center))},e.prototype.updateIcon=function(){var t,n=this.markers.length,r=this.markerClusterer.getMaxZoom(),s=(t=this.map)===null||t===void 0?void 0:t.getZoom();if(r!==null&&typeof s<"u"&&s>r){this.clusterIcon.hide();return}if(n<this.minClusterSize){this.clusterIcon.hide();return}this.center&&this.clusterIcon.setCenter(this.center),this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers,this.markerClusterer.getStyles().length)),this.clusterIcon.show()},e.prototype.isMarkerAlreadyAdded=function(t){if(this.markers.includes)return this.markers.includes(t);for(var n=0;n<this.markers.length;n++)if(t===this.markers[n])return!0;return!1},e}();function CV(e,t){var n=e.length,r=n.toString().length,s=Math.min(r,t);return{text:n.toString(),index:s,title:""}}var jV=2e3,EV=500,NV="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",LV="png",PV=[53,56,66,78,90],TV="cluster",eL=function(){function e(t,n,r){n===void 0&&(n=[]),r===void 0&&(r={}),this.getMinimumClusterSize=this.getMinimumClusterSize.bind(this),this.setMinimumClusterSize=this.setMinimumClusterSize.bind(this),this.getEnableRetinaIcons=this.getEnableRetinaIcons.bind(this),this.setEnableRetinaIcons=this.setEnableRetinaIcons.bind(this),this.addToClosestCluster=this.addToClosestCluster.bind(this),this.getImageExtension=this.getImageExtension.bind(this),this.setImageExtension=this.setImageExtension.bind(this),this.getExtendedBounds=this.getExtendedBounds.bind(this),this.getAverageCenter=this.getAverageCenter.bind(this),this.setAverageCenter=this.setAverageCenter.bind(this),this.getTotalClusters=this.getTotalClusters.bind(this),this.fitMapToMarkers=this.fitMapToMarkers.bind(this),this.getIgnoreHidden=this.getIgnoreHidden.bind(this),this.setIgnoreHidden=this.setIgnoreHidden.bind(this),this.getClusterClass=this.getClusterClass.bind(this),this.setClusterClass=this.setClusterClass.bind(this),this.getTotalMarkers=this.getTotalMarkers.bind(this),this.getZoomOnClick=this.getZoomOnClick.bind(this),this.setZoomOnClick=this.setZoomOnClick.bind(this),this.getBatchSizeIE=this.getBatchSizeIE.bind(this),this.setBatchSizeIE=this.setBatchSizeIE.bind(this),this.createClusters=this.createClusters.bind(this),this.onZoomChanged=this.onZoomChanged.bind(this),this.getImageSizes=this.getImageSizes.bind(this),this.setImageSizes=this.setImageSizes.bind(this),this.getCalculator=this.getCalculator.bind(this),this.setCalculator=this.setCalculator.bind(this),this.removeMarkers=this.removeMarkers.bind(this),this.resetViewport=this.resetViewport.bind(this),this.getImagePath=this.getImagePath.bind(this),this.setImagePath=this.setImagePath.bind(this),this.pushMarkerTo=this.pushMarkerTo.bind(this),this.removeMarker=this.removeMarker.bind(this),this.clearMarkers=this.clearMarkers.bind(this),this.setupStyles=this.setupStyles.bind(this),this.getGridSize=this.getGridSize.bind(this),this.setGridSize=this.setGridSize.bind(this),this.getClusters=this.getClusters.bind(this),this.getMaxZoom=this.getMaxZoom.bind(this),this.setMaxZoom=this.setMaxZoom.bind(this),this.getMarkers=this.getMarkers.bind(this),this.addMarkers=this.addMarkers.bind(this),this.getStyles=this.getStyles.bind(this),this.setStyles=this.setStyles.bind(this),this.addMarker=this.addMarker.bind(this),this.onRemove=this.onRemove.bind(this),this.getTitle=this.getTitle.bind(this),this.setTitle=this.setTitle.bind(this),this.repaint=this.repaint.bind(this),this.onIdle=this.onIdle.bind(this),this.redraw=this.redraw.bind(this),this.onAdd=this.onAdd.bind(this),this.draw=this.draw.bind(this),this.extend=this.extend.bind(this),this.extend(e,google.maps.OverlayView),this.markers=[],this.clusters=[],this.listeners=[],this.activeMap=null,this.ready=!1,this.gridSize=r.gridSize||60,this.minClusterSize=r.minimumClusterSize||2,this.maxZoom=r.maxZoom||null,this.styles=r.styles||[],this.title=r.title||"",this.zoomOnClick=!0,r.zoomOnClick!==void 0&&(this.zoomOnClick=r.zoomOnClick),this.averageCenter=!1,r.averageCenter!==void 0&&(this.averageCenter=r.averageCenter),this.ignoreHidden=!1,r.ignoreHidden!==void 0&&(this.ignoreHidden=r.ignoreHidden),this.enableRetinaIcons=!1,r.enableRetinaIcons!==void 0&&(this.enableRetinaIcons=r.enableRetinaIcons),this.imagePath=r.imagePath||NV,this.imageExtension=r.imageExtension||LV,this.imageSizes=r.imageSizes||PV,this.calculator=r.calculator||CV,this.batchSize=r.batchSize||jV,this.batchSizeIE=r.batchSizeIE||EV,this.clusterClass=r.clusterClass||TV,navigator.userAgent.toLowerCase().indexOf("msie")!==-1&&(this.batchSize=this.batchSizeIE),this.timerRefStatic=null,this.setupStyles(),this.addMarkers(n,!0),this.setMap(t)}return e.prototype.onZoomChanged=function(){var t,n;this.resetViewport(!1),(((t=this.getMap())===null||t===void 0?void 0:t.getZoom())===(this.get("minZoom")||0)||((n=this.getMap())===null||n===void 0?void 0:n.getZoom())===this.get("maxZoom"))&&google.maps.event.trigger(this,"idle")},e.prototype.onIdle=function(){this.redraw()},e.prototype.onAdd=function(){var t=this.getMap();this.activeMap=t,this.ready=!0,this.repaint(),t!==null&&(this.listeners=[google.maps.event.addListener(t,"zoom_changed",this.onZoomChanged),google.maps.event.addListener(t,"idle",this.onIdle)])},e.prototype.onRemove=function(){for(var t=0,n=this.markers;t<n.length;t++){var r=n[t];r.getMap()!==this.activeMap&&r.setMap(this.activeMap)}for(var s=0,i=this.clusters;s<i.length;s++){var a=i[s];a.remove()}this.clusters=[];for(var l=0,c=this.listeners;l<c.length;l++){var u=c[l];google.maps.event.removeListener(u)}this.listeners=[],this.activeMap=null,this.ready=!1},e.prototype.draw=function(){},e.prototype.getMap=function(){return null},e.prototype.getPanes=function(){return null},e.prototype.getProjection=function(){return{fromContainerPixelToLatLng:function(){return null},fromDivPixelToLatLng:function(){return null},fromLatLngToContainerPixel:function(){return null},fromLatLngToDivPixel:function(){return null},getVisibleRegion:function(){return null},getWorldWidth:function(){return 0}}},e.prototype.setMap=function(){},e.prototype.addListener=function(){return{remove:function(){}}},e.prototype.bindTo=function(){},e.prototype.get=function(){},e.prototype.notify=function(){},e.prototype.set=function(){},e.prototype.setValues=function(){},e.prototype.unbind=function(){},e.prototype.unbindAll=function(){},e.prototype.setupStyles=function(){if(!(this.styles.length>0))for(var t=0;t<this.imageSizes.length;t++)this.styles.push({url:"".concat(this.imagePath+(t+1),".").concat(this.imageExtension),height:this.imageSizes[t]||0,width:this.imageSizes[t]||0})},e.prototype.fitMapToMarkers=function(){for(var t=this.getMarkers(),n=new google.maps.LatLngBounds,r=0,s=t;r<s.length;r++){var i=s[r],a=i.getPosition();a&&n.extend(a)}var l=this.getMap();l!==null&&"fitBounds"in l&&l.fitBounds(n)},e.prototype.getGridSize=function(){return this.gridSize},e.prototype.setGridSize=function(t){this.gridSize=t},e.prototype.getMinimumClusterSize=function(){return this.minClusterSize},e.prototype.setMinimumClusterSize=function(t){this.minClusterSize=t},e.prototype.getMaxZoom=function(){return this.maxZoom},e.prototype.setMaxZoom=function(t){this.maxZoom=t},e.prototype.getStyles=function(){return this.styles},e.prototype.setStyles=function(t){this.styles=t},e.prototype.getTitle=function(){return this.title},e.prototype.setTitle=function(t){this.title=t},e.prototype.getZoomOnClick=function(){return this.zoomOnClick},e.prototype.setZoomOnClick=function(t){this.zoomOnClick=t},e.prototype.getAverageCenter=function(){return this.averageCenter},e.prototype.setAverageCenter=function(t){this.averageCenter=t},e.prototype.getIgnoreHidden=function(){return this.ignoreHidden},e.prototype.setIgnoreHidden=function(t){this.ignoreHidden=t},e.prototype.getEnableRetinaIcons=function(){return this.enableRetinaIcons},e.prototype.setEnableRetinaIcons=function(t){this.enableRetinaIcons=t},e.prototype.getImageExtension=function(){return this.imageExtension},e.prototype.setImageExtension=function(t){this.imageExtension=t},e.prototype.getImagePath=function(){return this.imagePath},e.prototype.setImagePath=function(t){this.imagePath=t},e.prototype.getImageSizes=function(){return this.imageSizes},e.prototype.setImageSizes=function(t){this.imageSizes=t},e.prototype.getCalculator=function(){return this.calculator},e.prototype.setCalculator=function(t){this.calculator=t},e.prototype.getBatchSizeIE=function(){return this.batchSizeIE},e.prototype.setBatchSizeIE=function(t){this.batchSizeIE=t},e.prototype.getClusterClass=function(){return this.clusterClass},e.prototype.setClusterClass=function(t){this.clusterClass=t},e.prototype.getMarkers=function(){return this.markers},e.prototype.getTotalMarkers=function(){return this.markers.length},e.prototype.getClusters=function(){return this.clusters},e.prototype.getTotalClusters=function(){return this.clusters.length},e.prototype.addMarker=function(t,n){this.pushMarkerTo(t),n||this.redraw()},e.prototype.addMarkers=function(t,n){for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var s=t[r];s&&this.pushMarkerTo(s)}n||this.redraw()},e.prototype.pushMarkerTo=function(t){var n=this;t.getDraggable()&&google.maps.event.addListener(t,"dragend",function(){n.ready&&(t.isAdded=!1,n.repaint())}),t.isAdded=!1,this.markers.push(t)},e.prototype.removeMarker_=function(t){var n=-1;if(this.markers.indexOf)n=this.markers.indexOf(t);else for(var r=0;r<this.markers.length;r++)if(t===this.markers[r]){n=r;break}return n===-1?!1:(t.setMap(null),this.markers.splice(n,1),!0)},e.prototype.removeMarker=function(t,n){var r=this.removeMarker_(t);return!n&&r&&this.repaint(),r},e.prototype.removeMarkers=function(t,n){for(var r=!1,s=0,i=t;s<i.length;s++){var a=i[s];r=r||this.removeMarker_(a)}return!n&&r&&this.repaint(),r},e.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers=[]},e.prototype.repaint=function(){var t=this.clusters.slice();this.clusters=[],this.resetViewport(!1),this.redraw(),setTimeout(function(){for(var r=0,s=t;r<s.length;r++){var i=s[r];i.remove()}},0)},e.prototype.getExtendedBounds=function(t){var n=this.getProjection(),r=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()));r!==null&&(r.x+=this.gridSize,r.y-=this.gridSize);var s=n.fromLatLngToDivPixel(new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()));if(s!==null&&(s.x-=this.gridSize,s.y+=this.gridSize),r!==null){var i=n.fromDivPixelToLatLng(r);i!==null&&t.extend(i)}if(s!==null){var a=n.fromDivPixelToLatLng(s);a!==null&&t.extend(a)}return t},e.prototype.redraw=function(){this.createClusters(0)},e.prototype.resetViewport=function(t){for(var n=0,r=this.clusters;n<r.length;n++){var s=r[n];s.remove()}this.clusters=[];for(var i=0,a=this.markers;i<a.length;i++){var l=a[i];l.isAdded=!1,t&&l.setMap(null)}},e.prototype.distanceBetweenPoints=function(t,n){var r=6371,s=(n.lat()-t.lat())*Math.PI/180,i=(n.lng()-t.lng())*Math.PI/180,a=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(n.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2);return r*(2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a)))},e.prototype.isMarkerInBounds=function(t,n){var r=t.getPosition();return r?n.contains(r):!1},e.prototype.addToClosestCluster=function(t){for(var n,r=4e4,s=null,i=0,a=this.clusters;i<a.length;i++){var l=a[i];n=l;var c=n.getCenter(),u=t.getPosition();if(c&&u){var f=this.distanceBetweenPoints(c,u);f<r&&(r=f,s=n)}}s&&s.isMarkerInClusterBounds(t)?s.addMarker(t):(n=new kV(this),n.addMarker(t),this.clusters.push(n))},e.prototype.createClusters=function(t){var n=this;if(this.ready){t===0&&(google.maps.event.trigger(this,"clusteringbegin",this),this.timerRefStatic!==null&&(window.clearTimeout(this.timerRefStatic),delete this.timerRefStatic));for(var r=this.getMap(),s=r!==null&&("getBounds"in r)?r.getBounds():null,i=(r==null?void 0:r.getZoom())||0,a=i>3?new google.maps.LatLngBounds(s==null?void 0:s.getSouthWest(),s==null?void 0:s.getNorthEast()):new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472,-178.48388434375),new google.maps.LatLng(-85.08136444384544,178.00048865625)),l=this.getExtendedBounds(a),c=Math.min(t+this.batchSize,this.markers.length),u=t;u<c;u++){var f=this.markers[u];f&&!f.isAdded&&this.isMarkerInBounds(f,l)&&(!this.ignoreHidden||this.ignoreHidden&&f.getVisible())&&this.addToClosestCluster(f)}if(c<this.markers.length)this.timerRefStatic=window.setTimeout(function(){n.createClusters(c)},0);else{this.timerRefStatic=null,google.maps.event.trigger(this,"clusteringend",this);for(var h=0,p=this.clusters;h<p.length;h++){var m=p[h];m.updateIcon()}}}},e.prototype.extend=function(t,n){return(function(s){for(var i in s.prototype){var a=i;this.prototype[a]=s.prototype[a]}return this}).apply(t,[n])},e}();function Wb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function MV(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wb(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var vn={onClick:"click",onClusteringBegin:"clusteringbegin",onClusteringEnd:"clusteringend",onMouseOut:"mouseout",onMouseOver:"mouseover"},Ae={averageCenter(e,t){e.setAverageCenter(t)},batchSizeIE(e,t){e.setBatchSizeIE(t)},calculator(e,t){e.setCalculator(t)},clusterClass(e,t){e.setClusterClass(t)},enableRetinaIcons(e,t){e.setEnableRetinaIcons(t)},gridSize(e,t){e.setGridSize(t)},ignoreHidden(e,t){e.setIgnoreHidden(t)},imageExtension(e,t){e.setImageExtension(t)},imagePath(e,t){e.setImagePath(t)},imageSizes(e,t){e.setImageSizes(t)},maxZoom(e,t){e.setMaxZoom(t)},minimumClusterSize(e,t){e.setMinimumClusterSize(t)},styles(e,t){e.setStyles(t)},title(e,t){e.setTitle(t)},zoomOnClick(e,t){e.setZoomOnClick(t)}},RV={};function AV(e){var{children:t,options:n,averageCenter:r,batchSizeIE:s,calculator:i,clusterClass:a,enableRetinaIcons:l,gridSize:c,ignoreHidden:u,imageExtension:f,imagePath:h,imageSizes:p,maxZoom:m,minimumClusterSize:g,styles:v,title:y,zoomOnClick:b,onClick:x,onClusteringBegin:w,onClusteringEnd:S,onMouseOver:k,onMouseOut:j,onLoad:C,onUnmount:E}=e,[N,L]=d.useState(null),T=d.useContext(je),[R,z]=d.useState(null),[I,F]=d.useState(null),[A,W]=d.useState(null),[M,O]=d.useState(null),[_,U]=d.useState(null);return d.useEffect(()=>{N&&j&&(M!==null&&google.maps.event.removeListener(M),O(google.maps.event.addListener(N,vn.onMouseOut,j)))},[j]),d.useEffect(()=>{N&&k&&(_!==null&&google.maps.event.removeListener(_),U(google.maps.event.addListener(N,vn.onMouseOver,k)))},[k]),d.useEffect(()=>{N&&x&&(R!==null&&google.maps.event.removeListener(R),z(google.maps.event.addListener(N,vn.onClick,x)))},[x]),d.useEffect(()=>{N&&w&&(I!==null&&google.maps.event.removeListener(I),F(google.maps.event.addListener(N,vn.onClusteringBegin,w)))},[w]),d.useEffect(()=>{N&&S&&(A!==null&&google.maps.event.removeListener(A),F(google.maps.event.addListener(N,vn.onClusteringEnd,S)))},[S]),d.useEffect(()=>{typeof r<"u"&&N!==null&&Ae.averageCenter(N,r)},[N,r]),d.useEffect(()=>{typeof s<"u"&&N!==null&&Ae.batchSizeIE(N,s)},[N,s]),d.useEffect(()=>{typeof i<"u"&&N!==null&&Ae.calculator(N,i)},[N,i]),d.useEffect(()=>{typeof a<"u"&&N!==null&&Ae.clusterClass(N,a)},[N,a]),d.useEffect(()=>{typeof l<"u"&&N!==null&&Ae.enableRetinaIcons(N,l)},[N,l]),d.useEffect(()=>{typeof c<"u"&&N!==null&&Ae.gridSize(N,c)},[N,c]),d.useEffect(()=>{typeof u<"u"&&N!==null&&Ae.ignoreHidden(N,u)},[N,u]),d.useEffect(()=>{typeof f<"u"&&N!==null&&Ae.imageExtension(N,f)},[N,f]),d.useEffect(()=>{typeof h<"u"&&N!==null&&Ae.imagePath(N,h)},[N,h]),d.useEffect(()=>{typeof p<"u"&&N!==null&&Ae.imageSizes(N,p)},[N,p]),d.useEffect(()=>{typeof m<"u"&&N!==null&&Ae.maxZoom(N,m)},[N,m]),d.useEffect(()=>{typeof g<"u"&&N!==null&&Ae.minimumClusterSize(N,g)},[N,g]),d.useEffect(()=>{typeof v<"u"&&N!==null&&Ae.styles(N,v)},[N,v]),d.useEffect(()=>{typeof y<"u"&&N!==null&&Ae.title(N,y)},[N,y]),d.useEffect(()=>{typeof b<"u"&&N!==null&&Ae.zoomOnClick(N,b)},[N,b]),d.useEffect(()=>{if(T){var q=MV({},n||RV),G=new eL(T,[],q);return r&&Ae.averageCenter(G,r),s&&Ae.batchSizeIE(G,s),i&&Ae.calculator(G,i),a&&Ae.clusterClass(G,a),l&&Ae.enableRetinaIcons(G,l),c&&Ae.gridSize(G,c),u&&Ae.ignoreHidden(G,u),f&&Ae.imageExtension(G,f),h&&Ae.imagePath(G,h),p&&Ae.imageSizes(G,p),m&&Ae.maxZoom(G,m),g&&Ae.minimumClusterSize(G,g),v&&Ae.styles(G,v),y&&Ae.title(G,y),b&&Ae.zoomOnClick(G,b),j&&O(google.maps.event.addListener(G,vn.onMouseOut,j)),k&&U(google.maps.event.addListener(G,vn.onMouseOver,k)),x&&z(google.maps.event.addListener(G,vn.onClick,x)),w&&F(google.maps.event.addListener(G,vn.onClusteringBegin,w)),S&&W(google.maps.event.addListener(G,vn.onClusteringEnd,S)),L(G),C&&C(G),()=>{M!==null&&google.maps.event.removeListener(M),_!==null&&google.maps.event.removeListener(_),R!==null&&google.maps.event.removeListener(R),I!==null&&google.maps.event.removeListener(I),A!==null&&google.maps.event.removeListener(A),E&&E(G)}}},[]),N!==null&&t(N)||null}d.memo(AV);class OV extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{markerClusterer:null}),K(this,"setClustererCallback",()=>{this.state.markerClusterer!==null&&this.props.onLoad&&this.props.onLoad(this.state.markerClusterer)})}componentDidMount(){if(this.context){var t=new eL(this.context,[],this.props.options);this.registeredEvents=Ee({updaterMap:Ae,eventMap:vn,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({markerClusterer:t}),this.setClustererCallback)}}componentDidUpdate(t){this.state.markerClusterer&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Ae,eventMap:vn,prevProps:t,nextProps:this.props,instance:this.state.markerClusterer}))}componentWillUnmount(){this.state.markerClusterer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.markerClusterer),Ne(this.registeredEvents),this.state.markerClusterer.setMap(null))}render(){return this.state.markerClusterer!==null?this.props.children(this.state.markerClusterer):null}}K(OV,"contextType",je);function Kb(e){e.cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}var tL=function(){function e(t){t===void 0&&(t={}),this.getCloseClickHandler=this.getCloseClickHandler.bind(this),this.closeClickHandler=this.closeClickHandler.bind(this),this.createInfoBoxDiv=this.createInfoBoxDiv.bind(this),this.addClickHandler=this.addClickHandler.bind(this),this.getCloseBoxImg=this.getCloseBoxImg.bind(this),this.getBoxWidths=this.getBoxWidths.bind(this),this.setBoxStyle=this.setBoxStyle.bind(this),this.setPosition=this.setPosition.bind(this),this.getPosition=this.getPosition.bind(this),this.setOptions=this.setOptions.bind(this),this.setContent=this.setContent.bind(this),this.setVisible=this.setVisible.bind(this),this.getContent=this.getContent.bind(this),this.getVisible=this.getVisible.bind(this),this.setZIndex=this.setZIndex.bind(this),this.getZIndex=this.getZIndex.bind(this),this.onRemove=this.onRemove.bind(this),this.panBox=this.panBox.bind(this),this.extend=this.extend.bind(this),this.close=this.close.bind(this),this.draw=this.draw.bind(this),this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.open=this.open.bind(this),this.extend(e,google.maps.OverlayView),this.content=t.content||"",this.disableAutoPan=t.disableAutoPan||!1,this.maxWidth=t.maxWidth||0,this.pixelOffset=t.pixelOffset||new google.maps.Size(0,0),this.position=t.position||new google.maps.LatLng(0,0),this.zIndex=t.zIndex||null,this.boxClass=t.boxClass||"infoBox",this.boxStyle=t.boxStyle||{},this.closeBoxMargin=t.closeBoxMargin||"2px",this.closeBoxURL=t.closeBoxURL||"http://www.google.com/intl/en_us/mapfiles/close.gif",t.closeBoxURL===""&&(this.closeBoxURL=""),this.infoBoxClearance=t.infoBoxClearance||new google.maps.Size(1,1),typeof t.visible>"u"&&(typeof t.isHidden>"u"?t.visible=!0:t.visible=!t.isHidden),this.isHidden=!t.visible,this.alignBottom=t.alignBottom||!1,this.pane=t.pane||"floatPane",this.enableEventPropagation=t.enableEventPropagation||!1,this.div=null,this.closeListener=null,this.moveListener=null,this.mapListener=null,this.contextListener=null,this.eventListeners=null,this.fixedWidthSet=null}return e.prototype.createInfoBoxDiv=function(){var t=this,n=function(f){f.returnValue=!1,f.preventDefault&&f.preventDefault(),t.enableEventPropagation||Kb(f)};if(!this.div){this.div=document.createElement("div"),this.setBoxStyle(),typeof this.content=="string"?this.div.innerHTML=this.getCloseBoxImg()+this.content:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(this.content));var r=this.getPanes();if(r!==null&&r[this.pane].appendChild(this.div),this.addClickHandler(),this.div.style.width)this.fixedWidthSet=!0;else if(this.maxWidth!==0&&this.div.offsetWidth>this.maxWidth)this.div.style.width=this.maxWidth+"px",this.fixedWidthSet=!0;else{var s=this.getBoxWidths();this.div.style.width=this.div.offsetWidth-s.left-s.right+"px",this.fixedWidthSet=!1}if(this.panBox(this.disableAutoPan),!this.enableEventPropagation){this.eventListeners=[];for(var i=["mousedown","mouseover","mouseout","mouseup","click","dblclick","touchstart","touchend","touchmove"],a=0,l=i;a<l.length;a++){var c=l[a];this.eventListeners.push(google.maps.event.addListener(this.div,c,Kb))}this.eventListeners.push(google.maps.event.addListener(this.div,"mouseover",function(){t.div&&(t.div.style.cursor="default")}))}this.contextListener=google.maps.event.addListener(this.div,"contextmenu",n),google.maps.event.trigger(this,"domready")}},e.prototype.getCloseBoxImg=function(){var t="";return this.closeBoxURL!==""&&(t='<img alt=""',t+=' aria-hidden="true"',t+=" src='"+this.closeBoxURL+"'",t+=" align=right",t+=" style='",t+=" position: relative;",t+=" cursor: pointer;",t+=" margin: "+this.closeBoxMargin+";",t+="'>"),t},e.prototype.addClickHandler=function(){this.closeListener=this.div&&this.div.firstChild&&this.closeBoxURL!==""?google.maps.event.addListener(this.div.firstChild,"click",this.getCloseClickHandler()):null},e.prototype.closeClickHandler=function(t){t.cancelBubble=!0,t.stopPropagation&&t.stopPropagation(),google.maps.event.trigger(this,"closeclick"),this.close()},e.prototype.getCloseClickHandler=function(){return this.closeClickHandler},e.prototype.panBox=function(t){if(this.div&&!t){var n=this.getMap();if(n instanceof google.maps.Map){var r=0,s=0,i=n.getBounds();i&&!i.contains(this.position)&&n.setCenter(this.position);var a=n.getDiv(),l=a.offsetWidth,c=a.offsetHeight,u=this.pixelOffset.width,f=this.pixelOffset.height,h=this.div.offsetWidth,p=this.div.offsetHeight,m=this.infoBoxClearance.width,g=this.infoBoxClearance.height,v=this.getProjection(),y=v.fromLatLngToContainerPixel(this.position);y!==null&&(y.x<-u+m?r=y.x+u-m:y.x+h+u+m>l&&(r=y.x+h+u+m-l),this.alignBottom?y.y<-f+g+p?s=y.y+f-g-p:y.y+f+g>c&&(s=y.y+f+g-c):y.y<-f+g?s=y.y+f-g:y.y+p+f+g>c&&(s=y.y+p+f+g-c)),r===0&&s===0||n.panBy(r,s)}}},e.prototype.setBoxStyle=function(){if(this.div){this.div.className=this.boxClass,this.div.style.cssText="";var t=this.boxStyle;for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(this.div.style[n]=t[n]);if(this.div.style.webkitTransform="translateZ(0)",typeof this.div.style.opacity<"u"&&this.div.style.opacity!==""){var r=parseFloat(this.div.style.opacity||"");this.div.style.msFilter='"progid:DXImageTransform.Microsoft.Alpha(Opacity='+r*100+')"',this.div.style.filter="alpha(opacity="+r*100+")"}this.div.style.position="absolute",this.div.style.visibility="hidden",this.zIndex!==null&&(this.div.style.zIndex=this.zIndex+""),this.div.style.overflow||(this.div.style.overflow="auto")}},e.prototype.getBoxWidths=function(){var t={top:0,bottom:0,left:0,right:0};if(!this.div)return t;if(document.defaultView){var n=this.div.ownerDocument,r=n&&n.defaultView?n.defaultView.getComputedStyle(this.div,""):null;r&&(t.top=parseInt(r.borderTopWidth||"",10)||0,t.bottom=parseInt(r.borderBottomWidth||"",10)||0,t.left=parseInt(r.borderLeftWidth||"",10)||0,t.right=parseInt(r.borderRightWidth||"",10)||0)}else if(document.documentElement.currentStyle){var s=this.div.currentStyle;s&&(t.top=parseInt(s.borderTopWidth||"",10)||0,t.bottom=parseInt(s.borderBottomWidth||"",10)||0,t.left=parseInt(s.borderLeftWidth||"",10)||0,t.right=parseInt(s.borderRightWidth||"",10)||0)}return t},e.prototype.onRemove=function(){this.div&&this.div.parentNode&&(this.div.parentNode.removeChild(this.div),this.div=null)},e.prototype.draw=function(){if(this.createInfoBoxDiv(),this.div){var t=this.getProjection(),n=t.fromLatLngToDivPixel(this.position);n!==null&&(this.div.style.left=n.x+this.pixelOffset.width+"px",this.alignBottom?this.div.style.bottom=-(n.y+this.pixelOffset.height)+"px":this.div.style.top=n.y+this.pixelOffset.height+"px"),this.isHidden?this.div.style.visibility="hidden":this.div.style.visibility="visible"}},e.prototype.setOptions=function(t){t===void 0&&(t={}),typeof t.boxClass<"u"&&(this.boxClass=t.boxClass,this.setBoxStyle()),typeof t.boxStyle<"u"&&(this.boxStyle=t.boxStyle,this.setBoxStyle()),typeof t.content<"u"&&this.setContent(t.content),typeof t.disableAutoPan<"u"&&(this.disableAutoPan=t.disableAutoPan),typeof t.maxWidth<"u"&&(this.maxWidth=t.maxWidth),typeof t.pixelOffset<"u"&&(this.pixelOffset=t.pixelOffset),typeof t.alignBottom<"u"&&(this.alignBottom=t.alignBottom),typeof t.position<"u"&&this.setPosition(t.position),typeof t.zIndex<"u"&&this.setZIndex(t.zIndex),typeof t.closeBoxMargin<"u"&&(this.closeBoxMargin=t.closeBoxMargin),typeof t.closeBoxURL<"u"&&(this.closeBoxURL=t.closeBoxURL),typeof t.infoBoxClearance<"u"&&(this.infoBoxClearance=t.infoBoxClearance),typeof t.isHidden<"u"&&(this.isHidden=t.isHidden),typeof t.visible<"u"&&(this.isHidden=!t.visible),typeof t.enableEventPropagation<"u"&&(this.enableEventPropagation=t.enableEventPropagation),this.div&&this.draw()},e.prototype.setContent=function(t){this.content=t,this.div&&(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.fixedWidthSet||(this.div.style.width=""),typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t)),this.fixedWidthSet||(this.div.style.width=this.div.offsetWidth+"px",typeof t=="string"?this.div.innerHTML=this.getCloseBoxImg()+t:(this.div.innerHTML=this.getCloseBoxImg(),this.div.appendChild(t))),this.addClickHandler()),google.maps.event.trigger(this,"content_changed")},e.prototype.setPosition=function(t){this.position=t,this.div&&this.draw(),google.maps.event.trigger(this,"position_changed")},e.prototype.setVisible=function(t){this.isHidden=!t,this.div&&(this.div.style.visibility=this.isHidden?"hidden":"visible")},e.prototype.setZIndex=function(t){this.zIndex=t,this.div&&(this.div.style.zIndex=t+""),google.maps.event.trigger(this,"zindex_changed")},e.prototype.getContent=function(){return this.content},e.prototype.getPosition=function(){return this.position},e.prototype.getZIndex=function(){return this.zIndex},e.prototype.getVisible=function(){var t=this.getMap();return typeof t>"u"||t===null?!1:!this.isHidden},e.prototype.show=function(){this.isHidden=!1,this.div&&(this.div.style.visibility="visible")},e.prototype.hide=function(){this.isHidden=!0,this.div&&(this.div.style.visibility="hidden")},e.prototype.open=function(t,n){var r=this;n&&(this.position=n.getPosition(),this.moveListener=google.maps.event.addListener(n,"position_changed",function(){var s=n.getPosition();r.setPosition(s)}),this.mapListener=google.maps.event.addListener(n,"map_changed",function(){r.setMap(n.map)})),this.setMap(t),this.div&&this.panBox()},e.prototype.close=function(){if(this.closeListener&&(google.maps.event.removeListener(this.closeListener),this.closeListener=null),this.eventListeners){for(var t=0,n=this.eventListeners;t<n.length;t++){var r=n[t];google.maps.event.removeListener(r)}this.eventListeners=null}this.moveListener&&(google.maps.event.removeListener(this.moveListener),this.moveListener=null),this.mapListener&&(google.maps.event.removeListener(this.mapListener),this.mapListener=null),this.contextListener&&(google.maps.event.removeListener(this.contextListener),this.contextListener=null),this.setMap(null)},e.prototype.extend=function(t,n){return(function(s){for(var i in s.prototype)Object.prototype.hasOwnProperty.call(this,i)||(this.prototype[i]=s.prototype[i]);return this}).apply(t,[n])},e}(),IV=["position"],DV=["position"];function Gb(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function hd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gb(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gb(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var qb={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},Zb={options(e,t){e.setOptions(t)},position(e,t){t instanceof google.maps.LatLng?e.setPosition(t):e.setPosition(new google.maps.LatLng(t.lat,t.lng))},visible(e,t){e.setVisible(t)},zIndex(e,t){e.setZIndex(t)}},_V={};function FV(e){var{children:t,anchor:n,options:r,position:s,zIndex:i,onCloseClick:a,onDomReady:l,onContentChanged:c,onPositionChanged:u,onZindexChanged:f,onLoad:h,onUnmount:p}=e,m=d.useContext(je),[g,v]=d.useState(null),[y,b]=d.useState(null),[x,w]=d.useState(null),[S,k]=d.useState(null),[j,C]=d.useState(null),[E,N]=d.useState(null),L=d.useRef(null);return d.useEffect(()=>{m&&g!==null&&(g.close(),n?g.open(m,n):g.getPosition()&&g.open(m))},[m,g,n]),d.useEffect(()=>{r&&g!==null&&g.setOptions(r)},[g,r]),d.useEffect(()=>{if(s&&g!==null){var T=s instanceof google.maps.LatLng?s:new google.maps.LatLng(s.lat,s.lng);g.setPosition(T)}},[s]),d.useEffect(()=>{typeof i=="number"&&g!==null&&g.setZIndex(i)},[i]),d.useEffect(()=>{g&&a&&(y!==null&&google.maps.event.removeListener(y),b(google.maps.event.addListener(g,"closeclick",a)))},[a]),d.useEffect(()=>{g&&l&&(x!==null&&google.maps.event.removeListener(x),w(google.maps.event.addListener(g,"domready",l)))},[l]),d.useEffect(()=>{g&&c&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(g,"content_changed",c)))},[c]),d.useEffect(()=>{g&&u&&(j!==null&&google.maps.event.removeListener(j),C(google.maps.event.addListener(g,"position_changed",u)))},[u]),d.useEffect(()=>{g&&f&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(g,"zindex_changed",f)))},[f]),d.useEffect(()=>{if(m){var T=r||_V,{position:R}=T,z=F0(T,IV),I;R&&!(R instanceof google.maps.LatLng)&&(I=new google.maps.LatLng(R.lat,R.lng));var F=new tL(hd(hd({},z),I?{position:I}:{}));L.current=document.createElement("div"),v(F),a&&b(google.maps.event.addListener(F,"closeclick",a)),l&&w(google.maps.event.addListener(F,"domready",l)),c&&k(google.maps.event.addListener(F,"content_changed",c)),u&&C(google.maps.event.addListener(F,"position_changed",u)),f&&N(google.maps.event.addListener(F,"zindex_changed",f)),F.setContent(L.current),n?F.open(m,n):F.getPosition()?F.open(m):ht(!1,"You must provide either an anchor or a position prop for <InfoBox>."),h&&h(F)}return()=>{g!==null&&(y&&google.maps.event.removeListener(y),S&&google.maps.event.removeListener(S),x&&google.maps.event.removeListener(x),j&&google.maps.event.removeListener(j),E&&google.maps.event.removeListener(E),p&&p(g),g.close())}},[]),L.current?mn.createPortal(d.Children.only(t),L.current):null}d.memo(FV);class zV extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"containerElement",null),K(this,"state",{infoBox:null}),K(this,"open",(t,n)=>{n?this.context!==null&&t.open(this.context,n):t.getPosition()?this.context!==null&&t.open(this.context):ht(!1,"You must provide either an anchor or a position prop for <InfoBox>.")}),K(this,"setInfoBoxCallback",()=>{this.state.infoBox!==null&&this.containerElement!==null&&(this.state.infoBox.setContent(this.containerElement),this.open(this.state.infoBox,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoBox))})}componentDidMount(){var t=this.props.options||{},{position:n}=t,r=F0(t,DV),s;n&&!(n instanceof google.maps.LatLng)&&(s=new google.maps.LatLng(n.lat,n.lng));var i=new tL(hd(hd({},r),s?{position:s}:{}));this.containerElement=document.createElement("div"),this.registeredEvents=Ee({updaterMap:Zb,eventMap:qb,prevProps:{},nextProps:this.props,instance:i}),this.setState({infoBox:i},this.setInfoBoxCallback)}componentDidUpdate(t){var{infoBox:n}=this.state;n!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Zb,eventMap:qb,prevProps:t,nextProps:this.props,instance:n}))}componentWillUnmount(){var{onUnmount:t}=this.props,{infoBox:n}=this.state;n!==null&&(t&&t(n),Ne(this.registeredEvents),n.close())}render(){return this.containerElement?mn.createPortal(d.Children.only(this.props.children),this.containerElement):null}}K(zV,"contextType",je);var Lh,Yb;function BV(){return Yb||(Yb=1,Lh=function e(t,n){if(t===n)return!0;if(t&&n&&typeof t=="object"&&typeof n=="object"){if(t.constructor!==n.constructor)return!1;var r,s,i;if(Array.isArray(t)){if(r=t.length,r!=n.length)return!1;for(s=r;s--!==0;)if(!e(t[s],n[s]))return!1;return!0}if(t.constructor===RegExp)return t.source===n.source&&t.flags===n.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===n.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===n.toString();if(i=Object.keys(t),r=i.length,r!==Object.keys(n).length)return!1;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(n,i[s]))return!1;for(s=r;s--!==0;){var a=i[s];if(!e(t[a],n[a]))return!1}return!0}return t!==t&&n!==n}),Lh}var VV=BV(),Qb=qN(VV),Xb=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],Ph=1,ja=8;class z0{static from(t){if(!(t instanceof ArrayBuffer))throw new Error("Data must be an instance of ArrayBuffer.");var[n,r]=new Uint8Array(t,0,2);if(n!==219)throw new Error("Data does not appear to be in a KDBush format.");var s=r>>4;if(s!==Ph)throw new Error("Got v".concat(s," data when expected v").concat(Ph,"."));var i=Xb[r&15];if(!i)throw new Error("Unrecognized array type.");var[a]=new Uint16Array(t,2,1),[l]=new Uint32Array(t,4,1);return new z0(l,a,i,t)}constructor(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:64,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Float64Array,s=arguments.length>3?arguments[3]:void 0;if(isNaN(t)||t<0)throw new Error("Unpexpected numItems value: ".concat(t,"."));this.numItems=+t,this.nodeSize=Math.min(Math.max(+n,2),65535),this.ArrayType=r,this.IndexArrayType=t<65536?Uint16Array:Uint32Array;var i=Xb.indexOf(this.ArrayType),a=t*2*this.ArrayType.BYTES_PER_ELEMENT,l=t*this.IndexArrayType.BYTES_PER_ELEMENT,c=(8-l%8)%8;if(i<0)throw new Error("Unexpected typed array class: ".concat(r,"."));s&&s instanceof ArrayBuffer?(this.data=s,this.ids=new this.IndexArrayType(this.data,ja,t),this.coords=new this.ArrayType(this.data,ja+l+c,t*2),this._pos=t*2,this._finished=!0):(this.data=new ArrayBuffer(ja+a+l+c),this.ids=new this.IndexArrayType(this.data,ja,t),this.coords=new this.ArrayType(this.data,ja+l+c,t*2),this._pos=0,this._finished=!1,new Uint8Array(this.data,0,2).set([219,(Ph<<4)+i]),new Uint16Array(this.data,2,1)[0]=n,new Uint32Array(this.data,4,1)[0]=t)}add(t,n){var r=this._pos>>1;return this.ids[r]=r,this.coords[this._pos++]=t,this.coords[this._pos++]=n,r}finish(){var t=this._pos>>1;if(t!==this.numItems)throw new Error("Added ".concat(t," items when expected ").concat(this.numItems,"."));return Lm(this.ids,this.coords,this.nodeSize,0,this.numItems-1,0),this._finished=!0,this}range(t,n,r,s){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");for(var{ids:i,coords:a,nodeSize:l}=this,c=[0,i.length-1,0],u=[];c.length;){var f=c.pop()||0,h=c.pop()||0,p=c.pop()||0;if(h-p<=l){for(var m=p;m<=h;m++){var g=a[2*m],v=a[2*m+1];g>=t&&g<=r&&v>=n&&v<=s&&u.push(i[m])}continue}var y=p+h>>1,b=a[2*y],x=a[2*y+1];b>=t&&b<=r&&x>=n&&x<=s&&u.push(i[y]),(f===0?t<=b:n<=x)&&(c.push(p),c.push(y-1),c.push(1-f)),(f===0?r>=b:s>=x)&&(c.push(y+1),c.push(h),c.push(1-f))}return u}within(t,n,r){if(!this._finished)throw new Error("Data not yet indexed - call index.finish().");for(var{ids:s,coords:i,nodeSize:a}=this,l=[0,s.length-1,0],c=[],u=r*r;l.length;){var f=l.pop()||0,h=l.pop()||0,p=l.pop()||0;if(h-p<=a){for(var m=p;m<=h;m++)Jb(i[2*m],i[2*m+1],t,n)<=u&&c.push(s[m]);continue}var g=p+h>>1,v=i[2*g],y=i[2*g+1];Jb(v,y,t,n)<=u&&c.push(s[g]),(f===0?t-r<=v:n-r<=y)&&(l.push(p),l.push(g-1),l.push(1-f)),(f===0?t+r>=v:n+r>=y)&&(l.push(g+1),l.push(h),l.push(1-f))}return c}}function Lm(e,t,n,r,s,i){if(!(s-r<=n)){var a=r+s>>1;nL(e,t,a,r,s,i),Lm(e,t,n,r,a-1,1-i),Lm(e,t,n,a+1,s,1-i)}}function nL(e,t,n,r,s,i){for(;s>r;){if(s-r>600){var a=s-r+1,l=n-r+1,c=Math.log(a),u=.5*Math.exp(2*c/3),f=.5*Math.sqrt(c*u*(a-u)/a)*(l-a/2<0?-1:1),h=Math.max(r,Math.floor(n-l*u/a+f)),p=Math.min(s,Math.floor(n+(a-l)*u/a+f));nL(e,t,n,h,p,i)}var m=t[2*n+i],g=r,v=s;for(Ea(e,t,r,n),t[2*s+i]>m&&Ea(e,t,r,s);g<v;){for(Ea(e,t,g,v),g++,v--;t[2*g+i]<m;)g++;for(;t[2*v+i]>m;)v--}t[2*r+i]===m?Ea(e,t,r,v):(v++,Ea(e,t,v,s)),v<=n&&(r=v+1),n<=v&&(s=v-1)}}function Ea(e,t,n,r){Th(e,n,r),Th(t,2*n,2*r),Th(t,2*n+1,2*r+1)}function Th(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function Jb(e,t,n,r){var s=e-n,i=t-r;return s*s+i*i}var $V={minZoom:0,maxZoom:16,minPoints:2,radius:40,extent:512,nodeSize:64,log:!1,generateId:!1,reduce:null,map:e=>e},ew=Math.fround||(e=>t=>(e[0]=+t,e[0]))(new Float32Array(1)),Ys=2,as=3,Mh=4,ss=5,rL=6;class UV{constructor(t){this.options=Object.assign(Object.create($V),t),this.trees=new Array(this.options.maxZoom+1),this.stride=this.options.reduce?7:6,this.clusterProps=[]}load(t){var{log:n,minZoom:r,maxZoom:s}=this.options;n&&console.time("total time");var i="prepare ".concat(t.length," points");n&&console.time(i),this.points=t;for(var a=[],l=0;l<t.length;l++){var c=t[l];if(c.geometry){var[u,f]=c.geometry.coordinates,h=ew(Fc(u)),p=ew(zc(f));a.push(h,p,1/0,l,-1,1),this.options.reduce&&a.push(0)}}var m=this.trees[s+1]=this._createTree(a);n&&console.timeEnd(i);for(var g=s;g>=r;g--){var v=+Date.now();m=this.trees[g]=this._createTree(this._cluster(m,g)),n&&console.log("z%d: %d clusters in %dms",g,m.numItems,+Date.now()-v)}return n&&console.timeEnd("total time"),this}getClusters(t,n){var r=((t[0]+180)%360+360)%360-180,s=Math.max(-90,Math.min(90,t[1])),i=t[2]===180?180:((t[2]+180)%360+360)%360-180,a=Math.max(-90,Math.min(90,t[3]));if(t[2]-t[0]>=360)r=-180,i=180;else if(r>i){var l=this.getClusters([r,s,180,a],n),c=this.getClusters([-180,s,i,a],n);return l.concat(c)}var u=this.trees[this._limitZoom(n)],f=u.range(Fc(r),zc(a),Fc(i),zc(s)),h=u.data,p=[];for(var m of f){var g=this.stride*m;p.push(h[g+ss]>1?tw(h,g,this.clusterProps):this.points[h[g+as]])}return p}getChildren(t){var n=this._getOriginId(t),r=this._getOriginZoom(t),s="No cluster with the specified id.",i=this.trees[r];if(!i)throw new Error(s);var a=i.data;if(n*this.stride>=a.length)throw new Error(s);var l=this.options.radius/(this.options.extent*Math.pow(2,r-1)),c=a[n*this.stride],u=a[n*this.stride+1],f=i.within(c,u,l),h=[];for(var p of f){var m=p*this.stride;a[m+Mh]===t&&h.push(a[m+ss]>1?tw(a,m,this.clusterProps):this.points[a[m+as]])}if(h.length===0)throw new Error(s);return h}getLeaves(t,n,r){n=n||10,r=r||0;var s=[];return this._appendLeaves(s,t,n,r,0),s}getTile(t,n,r){var s=this.trees[this._limitZoom(t)],i=Math.pow(2,t),{extent:a,radius:l}=this.options,c=l/a,u=(r-c)/i,f=(r+1+c)/i,h={features:[]};return this._addTileFeatures(s.range((n-c)/i,u,(n+1+c)/i,f),s.data,n,r,i,h),n===0&&this._addTileFeatures(s.range(1-c/i,u,1,f),s.data,i,r,i,h),n===i-1&&this._addTileFeatures(s.range(0,u,c/i,f),s.data,-1,r,i,h),h.features.length?h:null}getClusterExpansionZoom(t){for(var n=this._getOriginZoom(t)-1;n<=this.options.maxZoom;){var r=this.getChildren(t);if(n++,r.length!==1)break;t=r[0].properties.cluster_id}return n}_appendLeaves(t,n,r,s,i){var a=this.getChildren(n);for(var l of a){var c=l.properties;if(c&&c.cluster?i+c.point_count<=s?i+=c.point_count:i=this._appendLeaves(t,c.cluster_id,r,s,i):i<s?i++:t.push(l),t.length===r)break}return i}_createTree(t){for(var n=new z0(t.length/this.stride|0,this.options.nodeSize,Float32Array),r=0;r<t.length;r+=this.stride)n.add(t[r],t[r+1]);return n.finish(),n.data=t,n}_addTileFeatures(t,n,r,s,i,a){for(var l of t){var c=l*this.stride,u=n[c+ss]>1,f=void 0,h=void 0,p=void 0;if(u)f=sL(n,c,this.clusterProps),h=n[c],p=n[c+1];else{var m=this.points[n[c+as]];f=m.properties;var[g,v]=m.geometry.coordinates;h=Fc(g),p=zc(v)}var y={type:1,geometry:[[Math.round(this.options.extent*(h*i-r)),Math.round(this.options.extent*(p*i-s))]],tags:f},b=void 0;u||this.options.generateId?b=n[c+as]:b=this.points[n[c+as]].id,b!==void 0&&(y.id=b),a.features.push(y)}}_limitZoom(t){return Math.max(this.options.minZoom,Math.min(Math.floor(+t),this.options.maxZoom+1))}_cluster(t,n){for(var{radius:r,extent:s,reduce:i,minPoints:a}=this.options,l=r/(s*Math.pow(2,n)),c=t.data,u=[],f=this.stride,h=0;h<c.length;h+=f)if(!(c[h+Ys]<=n)){c[h+Ys]=n;var p=c[h],m=c[h+1],g=t.within(c[h],c[h+1],l),v=c[h+ss],y=v;for(var b of g){var x=b*f;c[x+Ys]>n&&(y+=c[x+ss])}if(y>v&&y>=a){var w=p*v,S=m*v,k=void 0,j=-1,C=((h/f|0)<<5)+(n+1)+this.points.length;for(var E of g){var N=E*f;if(!(c[N+Ys]<=n)){c[N+Ys]=n;var L=c[N+ss];w+=c[N]*L,S+=c[N+1]*L,c[N+Mh]=C,i&&(k||(k=this._map(c,h,!0),j=this.clusterProps.length,this.clusterProps.push(k)),i(k,this._map(c,N)))}}c[h+Mh]=C,u.push(w/y,S/y,1/0,C,-1,y),i&&u.push(j)}else{for(var T=0;T<f;T++)u.push(c[h+T]);if(y>1)for(var R of g){var z=R*f;if(!(c[z+Ys]<=n)){c[z+Ys]=n;for(var I=0;I<f;I++)u.push(c[z+I])}}}}return u}_getOriginId(t){return t-this.points.length>>5}_getOriginZoom(t){return(t-this.points.length)%32}_map(t,n,r){if(t[n+ss]>1){var s=this.clusterProps[t[n+rL]];return r?Object.assign({},s):s}var i=this.points[t[n+as]].properties,a=this.options.map(i);return r&&a===i?Object.assign({},a):a}}function tw(e,t,n){return{type:"Feature",id:e[t+as],properties:sL(e,t,n),geometry:{type:"Point",coordinates:[HV(e[t]),WV(e[t+1])]}}}function sL(e,t,n){var r=e[t+ss],s=r>=1e4?"".concat(Math.round(r/1e3),"k"):r>=1e3?"".concat(Math.round(r/100)/10,"k"):r,i=e[t+rL],a=i===-1?{}:Object.assign({},n[i]);return Object.assign(a,{cluster:!0,cluster_id:e[t+as],point_count:r,point_count_abbreviated:s})}function Fc(e){return e/360+.5}function zc(e){var t=Math.sin(e*Math.PI/180),n=.5-.25*Math.log((1+t)/(1-t))/Math.PI;return n<0?0:n>1?1:n}function HV(e){return(e-.5)*360}function WV(e){var t=(180-e*360)*Math.PI/180;return 360*Math.atan(Math.exp(t))/Math.PI-90}/*! *****************************************************************************
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
***************************************************************************** */function KV(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]]);return n}class an{static isAdvancedMarkerAvailable(t){return google.maps.marker&&t.getMapCapabilities().isAdvancedMarkersAvailable===!0}static isAdvancedMarker(t){return google.maps.marker&&t instanceof google.maps.marker.AdvancedMarkerElement}static setMap(t,n){this.isAdvancedMarker(t)?t.map=n:t.setMap(n)}static getPosition(t){if(this.isAdvancedMarker(t)){if(t.position){if(t.position instanceof google.maps.LatLng)return t.position;if(t.position.lat&&t.position.lng)return new google.maps.LatLng(t.position.lat,t.position.lng)}return new google.maps.LatLng(null)}return t.getPosition()}static getVisible(t){return this.isAdvancedMarker(t)?!0:t.getVisible()}}class Pm{constructor(t){var{markers:n,position:r}=t;this.markers=n,r&&(r instanceof google.maps.LatLng?this._position=r:this._position=new google.maps.LatLng(r))}get bounds(){if(!(this.markers.length===0&&!this._position)){var t=new google.maps.LatLngBounds(this._position,this._position);for(var n of this.markers)t.extend(an.getPosition(n));return t}}get position(){return this._position||this.bounds.getCenter()}get count(){return this.markers.filter(t=>an.getVisible(t)).length}push(t){this.markers.push(t)}delete(){this.marker&&(an.setMap(this.marker,null),this.marker=void 0),this.markers.length=0}}class GV{constructor(t){var{maxZoom:n=16}=t;this.maxZoom=n}noop(t){var{markers:n}=t;return qV(n)}}var qV=e=>{var t=e.map(n=>new Pm({position:an.getPosition(n),markers:[n]}));return t};class ZV extends GV{constructor(t){var{maxZoom:n,radius:r=60}=t,s=KV(t,["maxZoom","radius"]);super({maxZoom:n}),this.state={zoom:-1},this.superCluster=new UV(Object.assign({maxZoom:this.maxZoom,radius:r},s))}calculate(t){var n=!1,r={zoom:t.map.getZoom()};if(!Qb(t.markers,this.markers)){n=!0,this.markers=[...t.markers];var s=this.markers.map(i=>{var a=an.getPosition(i),l=[a.lng(),a.lat()];return{type:"Feature",geometry:{type:"Point",coordinates:l},properties:{marker:i}}});this.superCluster.load(s)}return n||(this.state.zoom<=this.maxZoom||r.zoom<=this.maxZoom)&&(n=!Qb(this.state,r)),this.state=r,n&&(this.clusters=this.cluster(t)),{clusters:this.clusters,changed:n}}cluster(t){var{map:n}=t;return this.superCluster.getClusters([-180,-90,180,90],Math.round(n.getZoom())).map(r=>this.transformCluster(r))}transformCluster(t){var{geometry:{coordinates:[n,r]},properties:s}=t;if(s.cluster)return new Pm({markers:this.superCluster.getLeaves(s.cluster_id,1/0).map(a=>a.properties.marker),position:{lat:r,lng:n}});var i=s.marker;return new Pm({markers:[i],position:an.getPosition(i)})}}class YV{constructor(t,n){this.markers={sum:t.length};var r=n.map(i=>i.count),s=r.reduce((i,a)=>i+a,0);this.clusters={count:n.length,markers:{mean:s/n.length,sum:s,min:Math.min(...r),max:Math.max(...r)}}}}class QV{render(t,n,r){var{count:s,position:i}=t,a=s>Math.max(10,n.clusters.markers.mean)?"#ff0000":"#0000ff",l='<svg fill="'.concat(a,`" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">`).concat(s,`</text>
</svg>`),c="Cluster of ".concat(s," markers"),u=Number(google.maps.Marker.MAX_ZINDEX)+s;if(an.isAdvancedMarkerAvailable(r)){var f=new DOMParser,h=f.parseFromString(l,"image/svg+xml").documentElement;h.setAttribute("transform","translate(0 25)");var p={map:r,position:i,zIndex:u,title:c,content:h};return new google.maps.marker.AdvancedMarkerElement(p)}var m={position:i,zIndex:u,title:c,icon:{url:"data:image/svg+xml;base64,".concat(btoa(l)),anchor:new google.maps.Point(25,25)}};return new google.maps.Marker(m)}}function XV(e,t){for(var n in t.prototype)e.prototype[n]=t.prototype[n]}class B0{constructor(){XV(B0,google.maps.OverlayView)}}var Qa;(function(e){e.CLUSTERING_BEGIN="clusteringbegin",e.CLUSTERING_END="clusteringend",e.CLUSTER_CLICK="click"})(Qa||(Qa={}));var JV=(e,t,n)=>{n.fitBounds(t.bounds)};class e$ extends B0{constructor(t){var{map:n,markers:r=[],algorithmOptions:s={},algorithm:i=new ZV(s),renderer:a=new QV,onClusterClick:l=JV}=t;super(),this.markers=[...r],this.clusters=[],this.algorithm=i,this.renderer=a,this.onClusterClick=l,n&&this.setMap(n)}addMarker(t,n){this.markers.includes(t)||(this.markers.push(t),n||this.render())}addMarkers(t,n){t.forEach(r=>{this.addMarker(r,!0)}),n||this.render()}removeMarker(t,n){var r=this.markers.indexOf(t);return r===-1?!1:(an.setMap(t,null),this.markers.splice(r,1),n||this.render(),!0)}removeMarkers(t,n){var r=!1;return t.forEach(s=>{r=this.removeMarker(s,!0)||r}),r&&!n&&this.render(),r}clearMarkers(t){this.markers.length=0,t||this.render()}render(){var t=this.getMap();if(t instanceof google.maps.Map&&t.getProjection()){google.maps.event.trigger(this,Qa.CLUSTERING_BEGIN,this);var{clusters:n,changed:r}=this.algorithm.calculate({markers:this.markers,map:t,mapCanvasProjection:this.getProjection()});if(r||r==null){var s=new Set;for(var i of n)i.markers.length==1&&s.add(i.markers[0]);var a=[];for(var l of this.clusters)l.marker!=null&&(l.markers.length==1?s.has(l.marker)||an.setMap(l.marker,null):a.push(l.marker));this.clusters=n,this.renderClusters(),requestAnimationFrame(()=>a.forEach(c=>an.setMap(c,null)))}google.maps.event.trigger(this,Qa.CLUSTERING_END,this)}}onAdd(){this.idleListener=this.getMap().addListener("idle",this.render.bind(this)),this.render()}onRemove(){google.maps.event.removeListener(this.idleListener),this.reset()}reset(){this.markers.forEach(t=>an.setMap(t,null)),this.clusters.forEach(t=>t.delete()),this.clusters=[]}renderClusters(){var t=new YV(this.markers,this.clusters),n=this.getMap();this.clusters.forEach(r=>{r.markers.length===1?r.marker=r.markers[0]:(r.marker=this.renderer.render(r,t,n),r.markers.forEach(s=>an.setMap(s,null)),this.onClusterClick&&r.marker.addListener("click",s=>{google.maps.event.trigger(this,Qa.CLUSTER_CLICK,r),this.onClusterClick(s,r,n)})),an.setMap(r.marker,n)})}}function nw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function rw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?nw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function t$(e){var t=GB(),[n,r]=d.useState(null);return d.useEffect(()=>{if(t&&n===null){var s=new e$(rw(rw({},e),{},{map:t}));r(s)}},[t]),n}function n$(e){var{children:t,options:n}=e,r=t$(n);return r!==null?t(r):null}d.memo(n$);var sw={onCloseClick:"closeclick",onContentChanged:"content_changed",onDomReady:"domready",onPositionChanged:"position_changed",onZindexChanged:"zindex_changed"},iw={options(e,t){e.setOptions(t)},position(e,t){e.setPosition(t)},zIndex(e,t){e.setZIndex(t)}};function r$(e){var{children:t,anchor:n,options:r,position:s,zIndex:i,onCloseClick:a,onDomReady:l,onContentChanged:c,onPositionChanged:u,onZindexChanged:f,onLoad:h,onUnmount:p}=e,m=d.useContext(je),[g,v]=d.useState(null),[y,b]=d.useState(null),[x,w]=d.useState(null),[S,k]=d.useState(null),[j,C]=d.useState(null),[E,N]=d.useState(null),L=d.useRef(null);return d.useEffect(()=>{g!==null&&(g.close(),n?g.open(m,n):g.getPosition()&&g.open(m))},[m,g,n]),d.useEffect(()=>{r&&g!==null&&g.setOptions(r)},[g,r]),d.useEffect(()=>{s&&g!==null&&g.setPosition(s)},[s]),d.useEffect(()=>{typeof i=="number"&&g!==null&&g.setZIndex(i)},[i]),d.useEffect(()=>{g&&a&&(y!==null&&google.maps.event.removeListener(y),b(google.maps.event.addListener(g,"closeclick",a)))},[a]),d.useEffect(()=>{g&&l&&(x!==null&&google.maps.event.removeListener(x),w(google.maps.event.addListener(g,"domready",l)))},[l]),d.useEffect(()=>{g&&c&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(g,"content_changed",c)))},[c]),d.useEffect(()=>{g&&u&&(j!==null&&google.maps.event.removeListener(j),C(google.maps.event.addListener(g,"position_changed",u)))},[u]),d.useEffect(()=>{g&&f&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(g,"zindex_changed",f)))},[f]),d.useEffect(()=>{var T=new google.maps.InfoWindow(r);return v(T),L.current=document.createElement("div"),a&&b(google.maps.event.addListener(T,"closeclick",a)),l&&w(google.maps.event.addListener(T,"domready",l)),c&&k(google.maps.event.addListener(T,"content_changed",c)),u&&C(google.maps.event.addListener(T,"position_changed",u)),f&&N(google.maps.event.addListener(T,"zindex_changed",f)),T.setContent(L.current),s&&T.setPosition(s),i&&T.setZIndex(i),n?T.open(m,n):T.getPosition()?T.open(m):ht(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."),h&&h(T),()=>{y&&google.maps.event.removeListener(y),S&&google.maps.event.removeListener(S),x&&google.maps.event.removeListener(x),j&&google.maps.event.removeListener(j),E&&google.maps.event.removeListener(E),p&&p(T),T.close()}},[]),L.current?mn.createPortal(d.Children.only(t),L.current):null}d.memo(r$);class s$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"containerElement",null),K(this,"state",{infoWindow:null}),K(this,"open",(t,n)=>{n?t.open(this.context,n):t.getPosition()?t.open(this.context):ht(!1,"You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.")}),K(this,"setInfoWindowCallback",()=>{this.state.infoWindow!==null&&this.containerElement!==null&&(this.state.infoWindow.setContent(this.containerElement),this.open(this.state.infoWindow,this.props.anchor),this.props.onLoad&&this.props.onLoad(this.state.infoWindow))})}componentDidMount(){var t=new google.maps.InfoWindow(this.props.options);this.containerElement=document.createElement("div"),this.registeredEvents=Ee({updaterMap:iw,eventMap:sw,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({infoWindow:t}),this.setInfoWindowCallback)}componentDidUpdate(t){this.state.infoWindow!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:iw,eventMap:sw,prevProps:t,nextProps:this.props,instance:this.state.infoWindow}))}componentWillUnmount(){this.state.infoWindow!==null&&(Ne(this.registeredEvents),this.props.onUnmount&&this.props.onUnmount(this.state.infoWindow),this.state.infoWindow.close())}render(){return this.containerElement?mn.createPortal(d.Children.only(this.props.children),this.containerElement):null}}K(s$,"contextType",je);function ow(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function pd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ow(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ow(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var aw={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},lw={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},visible(e,t){e.setVisible(t)}},i$={};function o$(e){var{options:t,draggable:n,editable:r,visible:s,path:i,onDblClick:a,onDragEnd:l,onDragStart:c,onMouseDown:u,onMouseMove:f,onMouseOut:h,onMouseOver:p,onMouseUp:m,onRightClick:g,onClick:v,onDrag:y,onLoad:b,onUnmount:x}=e,w=d.useContext(je),[S,k]=d.useState(null),[j,C]=d.useState(null),[E,N]=d.useState(null),[L,T]=d.useState(null),[R,z]=d.useState(null),[I,F]=d.useState(null),[A,W]=d.useState(null),[M,O]=d.useState(null),[_,U]=d.useState(null),[q,G]=d.useState(null),[D,P]=d.useState(null),[X,V]=d.useState(null);return d.useEffect(()=>{S!==null&&S.setMap(w)},[w]),d.useEffect(()=>{typeof t<"u"&&S!==null&&S.setOptions(t)},[S,t]),d.useEffect(()=>{typeof n<"u"&&S!==null&&S.setDraggable(n)},[S,n]),d.useEffect(()=>{typeof r<"u"&&S!==null&&S.setEditable(r)},[S,r]),d.useEffect(()=>{typeof s<"u"&&S!==null&&S.setVisible(s)},[S,s]),d.useEffect(()=>{typeof i<"u"&&S!==null&&S.setPath(i)},[S,i]),d.useEffect(()=>{S&&a&&(j!==null&&google.maps.event.removeListener(j),C(google.maps.event.addListener(S,"dblclick",a)))},[a]),d.useEffect(()=>{S&&l&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(S,"dragend",l)))},[l]),d.useEffect(()=>{S&&c&&(L!==null&&google.maps.event.removeListener(L),T(google.maps.event.addListener(S,"dragstart",c)))},[c]),d.useEffect(()=>{S&&u&&(R!==null&&google.maps.event.removeListener(R),z(google.maps.event.addListener(S,"mousedown",u)))},[u]),d.useEffect(()=>{S&&f&&(I!==null&&google.maps.event.removeListener(I),F(google.maps.event.addListener(S,"mousemove",f)))},[f]),d.useEffect(()=>{S&&h&&(A!==null&&google.maps.event.removeListener(A),W(google.maps.event.addListener(S,"mouseout",h)))},[h]),d.useEffect(()=>{S&&p&&(M!==null&&google.maps.event.removeListener(M),O(google.maps.event.addListener(S,"mouseover",p)))},[p]),d.useEffect(()=>{S&&m&&(_!==null&&google.maps.event.removeListener(_),U(google.maps.event.addListener(S,"mouseup",m)))},[m]),d.useEffect(()=>{S&&g&&(q!==null&&google.maps.event.removeListener(q),G(google.maps.event.addListener(S,"rightclick",g)))},[g]),d.useEffect(()=>{S&&v&&(D!==null&&google.maps.event.removeListener(D),P(google.maps.event.addListener(S,"click",v)))},[v]),d.useEffect(()=>{S&&y&&(X!==null&&google.maps.event.removeListener(X),V(google.maps.event.addListener(S,"drag",y)))},[y]),d.useEffect(()=>{var J=new google.maps.Polyline(pd(pd({},t||i$),{},{map:w}));return i&&J.setPath(i),typeof s<"u"&&J.setVisible(s),typeof r<"u"&&J.setEditable(r),typeof n<"u"&&J.setDraggable(n),a&&C(google.maps.event.addListener(J,"dblclick",a)),l&&N(google.maps.event.addListener(J,"dragend",l)),c&&T(google.maps.event.addListener(J,"dragstart",c)),u&&z(google.maps.event.addListener(J,"mousedown",u)),f&&F(google.maps.event.addListener(J,"mousemove",f)),h&&W(google.maps.event.addListener(J,"mouseout",h)),p&&O(google.maps.event.addListener(J,"mouseover",p)),m&&U(google.maps.event.addListener(J,"mouseup",m)),g&&G(google.maps.event.addListener(J,"rightclick",g)),v&&P(google.maps.event.addListener(J,"click",v)),y&&V(google.maps.event.addListener(J,"drag",y)),k(J),b&&b(J),()=>{j!==null&&google.maps.event.removeListener(j),E!==null&&google.maps.event.removeListener(E),L!==null&&google.maps.event.removeListener(L),R!==null&&google.maps.event.removeListener(R),I!==null&&google.maps.event.removeListener(I),A!==null&&google.maps.event.removeListener(A),M!==null&&google.maps.event.removeListener(M),_!==null&&google.maps.event.removeListener(_),q!==null&&google.maps.event.removeListener(q),D!==null&&google.maps.event.removeListener(D),x&&x(J),J.setMap(null)}},[]),null}d.memo(o$);class a$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{polyline:null}),K(this,"setPolylineCallback",()=>{this.state.polyline!==null&&this.props.onLoad&&this.props.onLoad(this.state.polyline)})}componentDidMount(){var t=new google.maps.Polyline(pd(pd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:lw,eventMap:aw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{polyline:t}},this.setPolylineCallback)}componentDidUpdate(t){this.state.polyline!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:lw,eventMap:aw,prevProps:t,nextProps:this.props,instance:this.state.polyline}))}componentWillUnmount(){this.state.polyline!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.polyline),Ne(this.registeredEvents),this.state.polyline.setMap(null))}render(){return null}}K(a$,"contextType",je);function cw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function uw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?cw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var dw={onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},fw={draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},path(e,t){e.setPath(t)},paths(e,t){e.setPaths(t)},visible(e,t){e.setVisible(t)}};function l$(e){var{options:t,draggable:n,editable:r,visible:s,path:i,paths:a,onDblClick:l,onDragEnd:c,onDragStart:u,onMouseDown:f,onMouseMove:h,onMouseOut:p,onMouseOver:m,onMouseUp:g,onRightClick:v,onClick:y,onDrag:b,onLoad:x,onUnmount:w,onEdit:S}=e,k=d.useContext(je),[j,C]=d.useState(null),[E,N]=d.useState(null),[L,T]=d.useState(null),[R,z]=d.useState(null),[I,F]=d.useState(null),[A,W]=d.useState(null),[M,O]=d.useState(null),[_,U]=d.useState(null),[q,G]=d.useState(null),[D,P]=d.useState(null),[X,V]=d.useState(null),[J,ce]=d.useState(null);return d.useEffect(()=>{j!==null&&j.setMap(k)},[k]),d.useEffect(()=>{typeof t<"u"&&j!==null&&j.setOptions(t)},[j,t]),d.useEffect(()=>{typeof n<"u"&&j!==null&&j.setDraggable(n)},[j,n]),d.useEffect(()=>{typeof r<"u"&&j!==null&&j.setEditable(r)},[j,r]),d.useEffect(()=>{typeof s<"u"&&j!==null&&j.setVisible(s)},[j,s]),d.useEffect(()=>{typeof i<"u"&&j!==null&&j.setPath(i)},[j,i]),d.useEffect(()=>{typeof a<"u"&&j!==null&&j.setPaths(a)},[j,a]),d.useEffect(()=>{j&&typeof l=="function"&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(j,"dblclick",l)))},[l]),d.useEffect(()=>{j&&(google.maps.event.addListener(j.getPath(),"insert_at",()=>{S==null||S(j)}),google.maps.event.addListener(j.getPath(),"set_at",()=>{S==null||S(j)}),google.maps.event.addListener(j.getPath(),"remove_at",()=>{S==null||S(j)}))},[j,S]),d.useEffect(()=>{j&&typeof c=="function"&&(L!==null&&google.maps.event.removeListener(L),T(google.maps.event.addListener(j,"dragend",c)))},[c]),d.useEffect(()=>{j&&typeof u=="function"&&(R!==null&&google.maps.event.removeListener(R),z(google.maps.event.addListener(j,"dragstart",u)))},[u]),d.useEffect(()=>{j&&typeof f=="function"&&(I!==null&&google.maps.event.removeListener(I),F(google.maps.event.addListener(j,"mousedown",f)))},[f]),d.useEffect(()=>{j&&typeof h=="function"&&(A!==null&&google.maps.event.removeListener(A),W(google.maps.event.addListener(j,"mousemove",h)))},[h]),d.useEffect(()=>{j&&typeof p=="function"&&(M!==null&&google.maps.event.removeListener(M),O(google.maps.event.addListener(j,"mouseout",p)))},[p]),d.useEffect(()=>{j&&typeof m=="function"&&(_!==null&&google.maps.event.removeListener(_),U(google.maps.event.addListener(j,"mouseover",m)))},[m]),d.useEffect(()=>{j&&typeof g=="function"&&(q!==null&&google.maps.event.removeListener(q),G(google.maps.event.addListener(j,"mouseup",g)))},[g]),d.useEffect(()=>{j&&typeof v=="function"&&(D!==null&&google.maps.event.removeListener(D),P(google.maps.event.addListener(j,"rightclick",v)))},[v]),d.useEffect(()=>{j&&typeof y=="function"&&(X!==null&&google.maps.event.removeListener(X),V(google.maps.event.addListener(j,"click",y)))},[y]),d.useEffect(()=>{j&&typeof b=="function"&&(J!==null&&google.maps.event.removeListener(J),ce(google.maps.event.addListener(j,"drag",b)))},[b]),d.useEffect(()=>{var $=new google.maps.Polygon(uw(uw({},t),{},{map:k}));return i&&$.setPath(i),a&&$.setPaths(a),typeof s<"u"&&$.setVisible(s),typeof r<"u"&&$.setEditable(r),typeof n<"u"&&$.setDraggable(n),l&&N(google.maps.event.addListener($,"dblclick",l)),c&&T(google.maps.event.addListener($,"dragend",c)),u&&z(google.maps.event.addListener($,"dragstart",u)),f&&F(google.maps.event.addListener($,"mousedown",f)),h&&W(google.maps.event.addListener($,"mousemove",h)),p&&O(google.maps.event.addListener($,"mouseout",p)),m&&U(google.maps.event.addListener($,"mouseover",m)),g&&G(google.maps.event.addListener($,"mouseup",g)),v&&P(google.maps.event.addListener($,"rightclick",v)),y&&V(google.maps.event.addListener($,"click",y)),b&&ce(google.maps.event.addListener($,"drag",b)),C($),x&&x($),()=>{E!==null&&google.maps.event.removeListener(E),L!==null&&google.maps.event.removeListener(L),R!==null&&google.maps.event.removeListener(R),I!==null&&google.maps.event.removeListener(I),A!==null&&google.maps.event.removeListener(A),M!==null&&google.maps.event.removeListener(M),_!==null&&google.maps.event.removeListener(_),q!==null&&google.maps.event.removeListener(q),D!==null&&google.maps.event.removeListener(D),X!==null&&google.maps.event.removeListener(X),w&&w($),$.setMap(null)}},[]),null}d.memo(l$);class c$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[])}componentDidMount(){var t=this.props.options||{};this.polygon=new google.maps.Polygon(t),this.polygon.setMap(this.context),this.registeredEvents=Ee({updaterMap:fw,eventMap:dw,prevProps:{},nextProps:this.props,instance:this.polygon}),this.props.onLoad&&this.props.onLoad(this.polygon)}componentDidUpdate(t){this.polygon&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:fw,eventMap:dw,prevProps:t,nextProps:this.props,instance:this.polygon}))}componentWillUnmount(){this.polygon&&(this.props.onUnmount&&this.props.onUnmount(this.polygon),Ne(this.registeredEvents),this.polygon&&this.polygon.setMap(null))}render(){return null}}K(c$,"contextType",je);function hw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function md(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?hw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):hw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var pw={onBoundsChanged:"bounds_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},mw={bounds(e,t){e.setBounds(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},visible(e,t){e.setVisible(t)}};function u$(e){var{options:t,bounds:n,draggable:r,editable:s,visible:i,onDblClick:a,onDragEnd:l,onDragStart:c,onMouseDown:u,onMouseMove:f,onMouseOut:h,onMouseOver:p,onMouseUp:m,onRightClick:g,onClick:v,onDrag:y,onBoundsChanged:b,onLoad:x,onUnmount:w}=e,S=d.useContext(je),[k,j]=d.useState(null),[C,E]=d.useState(null),[N,L]=d.useState(null),[T,R]=d.useState(null),[z,I]=d.useState(null),[F,A]=d.useState(null),[W,M]=d.useState(null),[O,_]=d.useState(null),[U,q]=d.useState(null),[G,D]=d.useState(null),[P,X]=d.useState(null),[V,J]=d.useState(null),[ce,$]=d.useState(null);return d.useEffect(()=>{k!==null&&k.setMap(S)},[S]),d.useEffect(()=>{typeof t<"u"&&k!==null&&k.setOptions(t)},[k,t]),d.useEffect(()=>{typeof r<"u"&&k!==null&&k.setDraggable(r)},[k,r]),d.useEffect(()=>{typeof s<"u"&&k!==null&&k.setEditable(s)},[k,s]),d.useEffect(()=>{typeof i<"u"&&k!==null&&k.setVisible(i)},[k,i]),d.useEffect(()=>{typeof n<"u"&&k!==null&&k.setBounds(n)},[k,n]),d.useEffect(()=>{k&&a&&(C!==null&&google.maps.event.removeListener(C),E(google.maps.event.addListener(k,"dblclick",a)))},[a]),d.useEffect(()=>{k&&l&&(N!==null&&google.maps.event.removeListener(N),L(google.maps.event.addListener(k,"dragend",l)))},[l]),d.useEffect(()=>{k&&c&&(T!==null&&google.maps.event.removeListener(T),R(google.maps.event.addListener(k,"dragstart",c)))},[c]),d.useEffect(()=>{k&&u&&(z!==null&&google.maps.event.removeListener(z),I(google.maps.event.addListener(k,"mousedown",u)))},[u]),d.useEffect(()=>{k&&f&&(F!==null&&google.maps.event.removeListener(F),A(google.maps.event.addListener(k,"mousemove",f)))},[f]),d.useEffect(()=>{k&&h&&(W!==null&&google.maps.event.removeListener(W),M(google.maps.event.addListener(k,"mouseout",h)))},[h]),d.useEffect(()=>{k&&p&&(O!==null&&google.maps.event.removeListener(O),_(google.maps.event.addListener(k,"mouseover",p)))},[p]),d.useEffect(()=>{k&&m&&(U!==null&&google.maps.event.removeListener(U),q(google.maps.event.addListener(k,"mouseup",m)))},[m]),d.useEffect(()=>{k&&g&&(G!==null&&google.maps.event.removeListener(G),D(google.maps.event.addListener(k,"rightclick",g)))},[g]),d.useEffect(()=>{k&&v&&(P!==null&&google.maps.event.removeListener(P),X(google.maps.event.addListener(k,"click",v)))},[v]),d.useEffect(()=>{k&&y&&(V!==null&&google.maps.event.removeListener(V),J(google.maps.event.addListener(k,"drag",y)))},[y]),d.useEffect(()=>{k&&b&&(ce!==null&&google.maps.event.removeListener(ce),$(google.maps.event.addListener(k,"bounds_changed",b)))},[b]),d.useEffect(()=>{var Z=new google.maps.Rectangle(md(md({},t),{},{map:S}));return typeof i<"u"&&Z.setVisible(i),typeof s<"u"&&Z.setEditable(s),typeof r<"u"&&Z.setDraggable(r),typeof n<"u"&&Z.setBounds(n),a&&E(google.maps.event.addListener(Z,"dblclick",a)),l&&L(google.maps.event.addListener(Z,"dragend",l)),c&&R(google.maps.event.addListener(Z,"dragstart",c)),u&&I(google.maps.event.addListener(Z,"mousedown",u)),f&&A(google.maps.event.addListener(Z,"mousemove",f)),h&&M(google.maps.event.addListener(Z,"mouseout",h)),p&&_(google.maps.event.addListener(Z,"mouseover",p)),m&&q(google.maps.event.addListener(Z,"mouseup",m)),g&&D(google.maps.event.addListener(Z,"rightclick",g)),v&&X(google.maps.event.addListener(Z,"click",v)),y&&J(google.maps.event.addListener(Z,"drag",y)),b&&$(google.maps.event.addListener(Z,"bounds_changed",b)),j(Z),x&&x(Z),()=>{C!==null&&google.maps.event.removeListener(C),N!==null&&google.maps.event.removeListener(N),T!==null&&google.maps.event.removeListener(T),z!==null&&google.maps.event.removeListener(z),F!==null&&google.maps.event.removeListener(F),W!==null&&google.maps.event.removeListener(W),O!==null&&google.maps.event.removeListener(O),U!==null&&google.maps.event.removeListener(U),G!==null&&google.maps.event.removeListener(G),P!==null&&google.maps.event.removeListener(P),V!==null&&google.maps.event.removeListener(V),ce!==null&&google.maps.event.removeListener(ce),w&&w(Z),Z.setMap(null)}},[]),null}d.memo(u$);class d$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{rectangle:null}),K(this,"setRectangleCallback",()=>{this.state.rectangle!==null&&this.props.onLoad&&this.props.onLoad(this.state.rectangle)})}componentDidMount(){var t=new google.maps.Rectangle(md(md({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:mw,eventMap:pw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{rectangle:t}},this.setRectangleCallback)}componentDidUpdate(t){this.state.rectangle!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:mw,eventMap:pw,prevProps:t,nextProps:this.props,instance:this.state.rectangle}))}componentWillUnmount(){this.state.rectangle!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.rectangle),Ne(this.registeredEvents),this.state.rectangle.setMap(null))}render(){return null}}K(d$,"contextType",je);function gw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function gd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?gw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):gw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var vw={onCenterChanged:"center_changed",onRadiusChanged:"radius_changed",onClick:"click",onDblClick:"dblclick",onDrag:"drag",onDragEnd:"dragend",onDragStart:"dragstart",onMouseDown:"mousedown",onMouseMove:"mousemove",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick"},xw={center(e,t){e.setCenter(t)},draggable(e,t){e.setDraggable(t)},editable(e,t){e.setEditable(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},radius(e,t){e.setRadius(t)},visible(e,t){e.setVisible(t)}},f$={};function h$(e){var{options:t,center:n,radius:r,draggable:s,editable:i,visible:a,onDblClick:l,onDragEnd:c,onDragStart:u,onMouseDown:f,onMouseMove:h,onMouseOut:p,onMouseOver:m,onMouseUp:g,onRightClick:v,onClick:y,onDrag:b,onCenterChanged:x,onRadiusChanged:w,onLoad:S,onUnmount:k}=e,j=d.useContext(je),[C,E]=d.useState(null),[N,L]=d.useState(null),[T,R]=d.useState(null),[z,I]=d.useState(null),[F,A]=d.useState(null),[W,M]=d.useState(null),[O,_]=d.useState(null),[U,q]=d.useState(null),[G,D]=d.useState(null),[P,X]=d.useState(null),[V,J]=d.useState(null),[ce,$]=d.useState(null),[Z,H]=d.useState(null),[se,he]=d.useState(null);return d.useEffect(()=>{C!==null&&C.setMap(j)},[j]),d.useEffect(()=>{typeof t<"u"&&C!==null&&C.setOptions(t)},[C,t]),d.useEffect(()=>{typeof s<"u"&&C!==null&&C.setDraggable(s)},[C,s]),d.useEffect(()=>{typeof i<"u"&&C!==null&&C.setEditable(i)},[C,i]),d.useEffect(()=>{typeof a<"u"&&C!==null&&C.setVisible(a)},[C,a]),d.useEffect(()=>{typeof r=="number"&&C!==null&&C.setRadius(r)},[C,r]),d.useEffect(()=>{typeof n<"u"&&C!==null&&C.setCenter(n)},[C,n]),d.useEffect(()=>{C&&l&&(N!==null&&google.maps.event.removeListener(N),L(google.maps.event.addListener(C,"dblclick",l)))},[l]),d.useEffect(()=>{C&&c&&(T!==null&&google.maps.event.removeListener(T),R(google.maps.event.addListener(C,"dragend",c)))},[c]),d.useEffect(()=>{C&&u&&(z!==null&&google.maps.event.removeListener(z),I(google.maps.event.addListener(C,"dragstart",u)))},[u]),d.useEffect(()=>{C&&f&&(F!==null&&google.maps.event.removeListener(F),A(google.maps.event.addListener(C,"mousedown",f)))},[f]),d.useEffect(()=>{C&&h&&(W!==null&&google.maps.event.removeListener(W),M(google.maps.event.addListener(C,"mousemove",h)))},[h]),d.useEffect(()=>{C&&p&&(O!==null&&google.maps.event.removeListener(O),_(google.maps.event.addListener(C,"mouseout",p)))},[p]),d.useEffect(()=>{C&&m&&(U!==null&&google.maps.event.removeListener(U),q(google.maps.event.addListener(C,"mouseover",m)))},[m]),d.useEffect(()=>{C&&g&&(G!==null&&google.maps.event.removeListener(G),D(google.maps.event.addListener(C,"mouseup",g)))},[g]),d.useEffect(()=>{C&&v&&(P!==null&&google.maps.event.removeListener(P),X(google.maps.event.addListener(C,"rightclick",v)))},[v]),d.useEffect(()=>{C&&y&&(V!==null&&google.maps.event.removeListener(V),J(google.maps.event.addListener(C,"click",y)))},[y]),d.useEffect(()=>{C&&b&&(ce!==null&&google.maps.event.removeListener(ce),$(google.maps.event.addListener(C,"drag",b)))},[b]),d.useEffect(()=>{C&&x&&(Z!==null&&google.maps.event.removeListener(Z),H(google.maps.event.addListener(C,"center_changed",x)))},[y]),d.useEffect(()=>{C&&w&&(se!==null&&google.maps.event.removeListener(se),he(google.maps.event.addListener(C,"radius_changed",w)))},[w]),d.useEffect(()=>{var oe=new google.maps.Circle(gd(gd({},t||f$),{},{map:j}));return typeof r=="number"&&oe.setRadius(r),typeof n<"u"&&oe.setCenter(n),typeof r=="number"&&oe.setRadius(r),typeof a<"u"&&oe.setVisible(a),typeof i<"u"&&oe.setEditable(i),typeof s<"u"&&oe.setDraggable(s),l&&L(google.maps.event.addListener(oe,"dblclick",l)),c&&R(google.maps.event.addListener(oe,"dragend",c)),u&&I(google.maps.event.addListener(oe,"dragstart",u)),f&&A(google.maps.event.addListener(oe,"mousedown",f)),h&&M(google.maps.event.addListener(oe,"mousemove",h)),p&&_(google.maps.event.addListener(oe,"mouseout",p)),m&&q(google.maps.event.addListener(oe,"mouseover",m)),g&&D(google.maps.event.addListener(oe,"mouseup",g)),v&&X(google.maps.event.addListener(oe,"rightclick",v)),y&&J(google.maps.event.addListener(oe,"click",y)),b&&$(google.maps.event.addListener(oe,"drag",b)),x&&H(google.maps.event.addListener(oe,"center_changed",x)),w&&he(google.maps.event.addListener(oe,"radius_changed",w)),E(oe),S&&S(oe),()=>{N!==null&&google.maps.event.removeListener(N),T!==null&&google.maps.event.removeListener(T),z!==null&&google.maps.event.removeListener(z),F!==null&&google.maps.event.removeListener(F),W!==null&&google.maps.event.removeListener(W),O!==null&&google.maps.event.removeListener(O),U!==null&&google.maps.event.removeListener(U),G!==null&&google.maps.event.removeListener(G),P!==null&&google.maps.event.removeListener(P),V!==null&&google.maps.event.removeListener(V),Z!==null&&google.maps.event.removeListener(Z),se!==null&&google.maps.event.removeListener(se),k&&k(oe),oe.setMap(null)}},[]),null}d.memo(h$);class p$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{circle:null}),K(this,"setCircleCallback",()=>{this.state.circle!==null&&this.props.onLoad&&this.props.onLoad(this.state.circle)})}componentDidMount(){var t=new google.maps.Circle(gd(gd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:xw,eventMap:vw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{circle:t}},this.setCircleCallback)}componentDidUpdate(t){this.state.circle!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:xw,eventMap:vw,prevProps:t,nextProps:this.props,instance:this.state.circle}))}componentWillUnmount(){if(this.state.circle!==null){var t;this.props.onUnmount&&this.props.onUnmount(this.state.circle),Ne(this.registeredEvents),(t=this.state.circle)===null||t===void 0||t.setMap(null)}}render(){return null}}K(p$,"contextType",je);function yw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function vd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var bw={onClick:"click",onDblClick:"dblclick",onMouseDown:"mousedown",onMouseOut:"mouseout",onMouseOver:"mouseover",onMouseUp:"mouseup",onRightClick:"rightclick",onAddFeature:"addfeature",onRemoveFeature:"removefeature",onRemoveProperty:"removeproperty",onSetGeometry:"setgeometry",onSetProperty:"setproperty"},ww={add(e,t){e.add(t)},addgeojson(e,t,n){e.addGeoJson(t,n)},contains(e,t){e.contains(t)},foreach(e,t){e.forEach(t)},loadgeojson(e,t,n,r){e.loadGeoJson(t,n,r)},overridestyle(e,t,n){e.overrideStyle(t,n)},remove(e,t){e.remove(t)},revertstyle(e,t){e.revertStyle(t)},controlposition(e,t){e.setControlPosition(t)},controls(e,t){e.setControls(t)},drawingmode(e,t){e.setDrawingMode(t)},map(e,t){e.setMap(t)},style(e,t){e.setStyle(t)},togeojson(e,t){e.toGeoJson(t)}};function m$(e){var{options:t,onClick:n,onDblClick:r,onMouseDown:s,onMouseMove:i,onMouseOut:a,onMouseOver:l,onMouseUp:c,onRightClick:u,onAddFeature:f,onRemoveFeature:h,onRemoveProperty:p,onSetGeometry:m,onSetProperty:g,onLoad:v,onUnmount:y}=e,b=d.useContext(je),[x,w]=d.useState(null),[S,k]=d.useState(null),[j,C]=d.useState(null),[E,N]=d.useState(null),[L,T]=d.useState(null),[R,z]=d.useState(null),[I,F]=d.useState(null),[A,W]=d.useState(null),[M,O]=d.useState(null),[_,U]=d.useState(null),[q,G]=d.useState(null),[D,P]=d.useState(null),[X,V]=d.useState(null),[J,ce]=d.useState(null);return d.useEffect(()=>{x!==null&&x.setMap(b)},[b]),d.useEffect(()=>{x&&r&&(S!==null&&google.maps.event.removeListener(S),k(google.maps.event.addListener(x,"dblclick",r)))},[r]),d.useEffect(()=>{x&&s&&(j!==null&&google.maps.event.removeListener(j),C(google.maps.event.addListener(x,"mousedown",s)))},[s]),d.useEffect(()=>{x&&i&&(E!==null&&google.maps.event.removeListener(E),N(google.maps.event.addListener(x,"mousemove",i)))},[i]),d.useEffect(()=>{x&&a&&(L!==null&&google.maps.event.removeListener(L),T(google.maps.event.addListener(x,"mouseout",a)))},[a]),d.useEffect(()=>{x&&l&&(R!==null&&google.maps.event.removeListener(R),z(google.maps.event.addListener(x,"mouseover",l)))},[l]),d.useEffect(()=>{x&&c&&(I!==null&&google.maps.event.removeListener(I),F(google.maps.event.addListener(x,"mouseup",c)))},[c]),d.useEffect(()=>{x&&u&&(A!==null&&google.maps.event.removeListener(A),W(google.maps.event.addListener(x,"rightclick",u)))},[u]),d.useEffect(()=>{x&&n&&(M!==null&&google.maps.event.removeListener(M),O(google.maps.event.addListener(x,"click",n)))},[n]),d.useEffect(()=>{x&&f&&(_!==null&&google.maps.event.removeListener(_),U(google.maps.event.addListener(x,"addfeature",f)))},[f]),d.useEffect(()=>{x&&h&&(q!==null&&google.maps.event.removeListener(q),G(google.maps.event.addListener(x,"removefeature",h)))},[h]),d.useEffect(()=>{x&&p&&(D!==null&&google.maps.event.removeListener(D),P(google.maps.event.addListener(x,"removeproperty",p)))},[p]),d.useEffect(()=>{x&&m&&(X!==null&&google.maps.event.removeListener(X),V(google.maps.event.addListener(x,"setgeometry",m)))},[m]),d.useEffect(()=>{x&&g&&(J!==null&&google.maps.event.removeListener(J),ce(google.maps.event.addListener(x,"setproperty",g)))},[g]),d.useEffect(()=>{if(b!==null){var $=new google.maps.Data(vd(vd({},t),{},{map:b}));r&&k(google.maps.event.addListener($,"dblclick",r)),s&&C(google.maps.event.addListener($,"mousedown",s)),i&&N(google.maps.event.addListener($,"mousemove",i)),a&&T(google.maps.event.addListener($,"mouseout",a)),l&&z(google.maps.event.addListener($,"mouseover",l)),c&&F(google.maps.event.addListener($,"mouseup",c)),u&&W(google.maps.event.addListener($,"rightclick",u)),n&&O(google.maps.event.addListener($,"click",n)),f&&U(google.maps.event.addListener($,"addfeature",f)),h&&G(google.maps.event.addListener($,"removefeature",h)),p&&P(google.maps.event.addListener($,"removeproperty",p)),m&&V(google.maps.event.addListener($,"setgeometry",m)),g&&ce(google.maps.event.addListener($,"setproperty",g)),w($),v&&v($)}return()=>{x&&(S!==null&&google.maps.event.removeListener(S),j!==null&&google.maps.event.removeListener(j),E!==null&&google.maps.event.removeListener(E),L!==null&&google.maps.event.removeListener(L),R!==null&&google.maps.event.removeListener(R),I!==null&&google.maps.event.removeListener(I),A!==null&&google.maps.event.removeListener(A),M!==null&&google.maps.event.removeListener(M),_!==null&&google.maps.event.removeListener(_),q!==null&&google.maps.event.removeListener(q),D!==null&&google.maps.event.removeListener(D),X!==null&&google.maps.event.removeListener(X),J!==null&&google.maps.event.removeListener(J),y&&y(x),x.setMap(null))}},[]),null}d.memo(m$);class g$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{data:null}),K(this,"setDataCallback",()=>{this.state.data!==null&&this.props.onLoad&&this.props.onLoad(this.state.data)})}componentDidMount(){if(this.context!==null){var t=new google.maps.Data(vd(vd({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:ww,eventMap:bw,prevProps:{},nextProps:this.props,instance:t}),this.setState(()=>({data:t}),this.setDataCallback)}}componentDidUpdate(t){this.state.data!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:ww,eventMap:bw,prevProps:t,nextProps:this.props,instance:this.state.data}))}componentWillUnmount(){this.state.data!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.data),Ne(this.registeredEvents),this.state.data&&this.state.data.setMap(null))}render(){return null}}K(g$,"contextType",je);function Sw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function kw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Sw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Cw={onClick:"click",onDefaultViewportChanged:"defaultviewport_changed",onStatusChanged:"status_changed"},jw={options(e,t){e.setOptions(t)},url(e,t){e.setUrl(t)},zIndex(e,t){e.setZIndex(t)}};class v$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{kmlLayer:null}),K(this,"setKmlLayerCallback",()=>{this.state.kmlLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.kmlLayer)})}componentDidMount(){var t=new google.maps.KmlLayer(kw(kw({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:jw,eventMap:Cw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{kmlLayer:t}},this.setKmlLayerCallback)}componentDidUpdate(t){this.state.kmlLayer!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:jw,eventMap:Cw,prevProps:t,nextProps:this.props,instance:this.state.kmlLayer}))}componentWillUnmount(){this.state.kmlLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.kmlLayer),Ne(this.registeredEvents),this.state.kmlLayer.setMap(null))}render(){return null}}K(v$,"contextType",je);function iL(e,t){return typeof t=="function"?t(e.offsetWidth,e.offsetHeight):{x:0,y:0}}function x$(e,t){return new t(e.lat,e.lng)}function y$(e,t){return new t(new google.maps.LatLng(e.ne.lat,e.ne.lng),new google.maps.LatLng(e.sw.lat,e.sw.lng))}function b$(e,t,n){return e instanceof t?e:n(e,t)}function w$(e,t,n){return e instanceof t?e:n(e,t)}function S$(e,t,n){var r=e&&e.fromLatLngToDivPixel(n.getNorthEast()),s=e&&e.fromLatLngToDivPixel(n.getSouthWest());return r&&s?{left:"".concat(s.x+t.x,"px"),top:"".concat(r.y+t.y,"px"),width:"".concat(r.x-s.x-t.x,"px"),height:"".concat(s.y-r.y-t.y,"px")}:{left:"-9999px",top:"-9999px"}}function k$(e,t,n){var r=e&&e.fromLatLngToDivPixel(n);if(r){var{x:s,y:i}=r;return{left:"".concat(s+t.x,"px"),top:"".concat(i+t.y,"px")}}return{left:"-9999px",top:"-9999px"}}function oL(e,t,n,r){return n!==void 0?S$(e,t,w$(n,google.maps.LatLngBounds,y$)):k$(e,t,b$(r,google.maps.LatLng,x$))}function C$(e,t){return e.left===t.left&&e.top===t.top&&e.width===t.height&&e.height===t.height}function Ew(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function j$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ew(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ew(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function E$(e,t,n,r,s){class i extends google.maps.OverlayView{constructor(l,c,u,f){super(),this.container=l,this.pane=c,this.position=u,this.bounds=f}onAdd(){var l,c=(l=this.getPanes())===null||l===void 0?void 0:l[this.pane];c==null||c.appendChild(this.container)}draw(){var l=this.getProjection(),c=j$({},this.container?iL(this.container,s):{x:0,y:0}),u=oL(l,c,this.bounds,this.position);for(var[f,h]of Object.entries(u))this.container.style[f]=h}onRemove(){this.container.parentNode!==null&&this.container.parentNode.removeChild(this.container)}}return new i(e,t,n,r)}function Nw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function N$(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Nw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Nw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Lw(e){if(!e)return"";var t=e instanceof google.maps.LatLng?e:new google.maps.LatLng(e.lat,e.lng);return t+""}function Pw(e){if(!e)return"";var t=e instanceof google.maps.LatLngBounds?e:new google.maps.LatLngBounds(new google.maps.LatLng(e.south,e.east),new google.maps.LatLng(e.north,e.west));return t+""}function L$(e){var{position:t,bounds:n,mapPaneName:r,zIndex:s,onLoad:i,onUnmount:a,getPixelPositionOffset:l,children:c}=e,u=d.useContext(je),f=d.useMemo(()=>{var p=document.createElement("div");return p.style.position="absolute",p},[]),h=d.useMemo(()=>E$(f,r,t,n,l),[f,r,t,n]);return d.useEffect(()=>(i==null||i(h),h==null||h.setMap(u),()=>{a==null||a(h),h==null||h.setMap(null)}),[u,h]),d.useEffect(()=>{f.style.zIndex="".concat(s)},[s,f]),mn.createPortal(c,f)}d.memo(L$);class la extends d.PureComponent{constructor(t){super(t),K(this,"state",{paneEl:null,containerStyle:{position:"absolute"}}),K(this,"updatePane",()=>{var r=this.props.mapPaneName,s=this.overlayView.getPanes();ht(!!r,"OverlayView requires props.mapPaneName but got %s",r),s?this.setState({paneEl:s[r]}):this.setState({paneEl:null})}),K(this,"onAdd",()=>{var r,s;this.updatePane(),(r=(s=this.props).onLoad)===null||r===void 0||r.call(s,this.overlayView)}),K(this,"onPositionElement",()=>{var r=this.overlayView.getProjection(),s=N$({x:0,y:0},this.containerRef.current?iL(this.containerRef.current,this.props.getPixelPositionOffset):{}),i=oL(r,s,this.props.bounds,this.props.position);if(!C$(i,{left:this.state.containerStyle.left,top:this.state.containerStyle.top,width:this.state.containerStyle.width,height:this.state.containerStyle.height})){var a,l,c,u;this.setState({containerStyle:{top:(a=i.top)!==null&&a!==void 0?a:0,left:(l=i.left)!==null&&l!==void 0?l:0,width:(c=i.width)!==null&&c!==void 0?c:0,height:(u=i.height)!==null&&u!==void 0?u:0,position:"absolute"}})}}),K(this,"draw",()=>{this.onPositionElement()}),K(this,"onRemove",()=>{var r,s;this.setState(()=>({paneEl:null})),(r=(s=this.props).onUnmount)===null||r===void 0||r.call(s,this.overlayView)}),this.containerRef=d.createRef();var n=new google.maps.OverlayView;n.onAdd=this.onAdd,n.draw=this.draw,n.onRemove=this.onRemove,this.overlayView=n}componentDidMount(){this.overlayView.setMap(this.context)}componentDidUpdate(t){var n=Lw(t.position),r=Lw(this.props.position),s=Pw(t.bounds),i=Pw(this.props.bounds);(n!==r||s!==i)&&this.overlayView.draw(),t.mapPaneName!==this.props.mapPaneName&&this.updatePane()}componentWillUnmount(){this.overlayView.setMap(null)}render(){var t=this.state.paneEl;return t?mn.createPortal(o.jsx("div",{ref:this.containerRef,style:this.state.containerStyle,children:d.Children.only(this.props.children)}),t):null}}K(la,"FLOAT_PANE","floatPane");K(la,"MAP_PANE","mapPane");K(la,"MARKER_LAYER","markerLayer");K(la,"OVERLAY_LAYER","overlayLayer");K(la,"OVERLAY_MOUSE_TARGET","overlayMouseTarget");K(la,"contextType",je);function P$(){}function Tw(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function Mw(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Tw(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tw(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Rw={onDblClick:"dblclick",onClick:"click"},Aw={opacity(e,t){e.setOpacity(t)}};function T$(e){var{url:t,bounds:n,options:r,visible:s}=e,i=d.useContext(je),a=new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east)),l=d.useMemo(()=>new google.maps.GroundOverlay(t,a,r),[]);return d.useEffect(()=>{l!==null&&l.setMap(i)},[i]),d.useEffect(()=>{typeof t<"u"&&l!==null&&(l.set("url",t),l.setMap(i))},[l,t]),d.useEffect(()=>{typeof s<"u"&&l!==null&&l.setOpacity(s?1:0)},[l,s]),d.useEffect(()=>{var c=new google.maps.LatLngBounds(new google.maps.LatLng(n.south,n.west),new google.maps.LatLng(n.north,n.east));typeof n<"u"&&l!==null&&(l.set("bounds",c),l.setMap(i))},[l,n]),null}d.memo(T$);class aL extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{groundOverlay:null}),K(this,"setGroundOverlayCallback",()=>{this.state.groundOverlay!==null&&this.props.onLoad&&this.props.onLoad(this.state.groundOverlay)})}componentDidMount(){ht(!!this.props.url||!!this.props.bounds,"For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");var t=new google.maps.GroundOverlay(this.props.url,this.props.bounds,Mw(Mw({},this.props.options),{},{map:this.context}));this.registeredEvents=Ee({updaterMap:Aw,eventMap:Rw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{groundOverlay:t}},this.setGroundOverlayCallback)}componentDidUpdate(t){this.state.groundOverlay!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Aw,eventMap:Rw,prevProps:t,nextProps:this.props,instance:this.state.groundOverlay}))}componentWillUnmount(){this.state.groundOverlay&&(this.props.onUnmount&&this.props.onUnmount(this.state.groundOverlay),this.state.groundOverlay.setMap(null))}render(){return null}}K(aL,"defaultProps",{onLoad:P$});K(aL,"contextType",je);function Ow(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),n.push.apply(n,r)}return n}function xd(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ow(Object(n),!0).forEach(function(r){K(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ow(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}var Iw={},Dw={data(e,t){e.setData(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)}};function M$(e){var{data:t,onLoad:n,onUnmount:r,options:s}=e,i=d.useContext(je),[a,l]=d.useState(null);return d.useEffect(()=>{google.maps.visualization||ht(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} in useJsApiScript? %s',google.maps.visualization)},[]),d.useEffect(()=>{ht(!!t,"data property is required in HeatmapLayer %s",t)},[t]),d.useEffect(()=>{a!==null&&a.setMap(i)},[i]),d.useEffect(()=>{s&&a!==null&&a.setOptions(s)},[a,s]),d.useEffect(()=>{var c=new google.maps.visualization.HeatmapLayer(xd(xd({},s),{},{data:t,map:i}));return l(c),n&&n(c),()=>{a!==null&&(r&&r(a),a.setMap(null))}},[]),null}d.memo(M$);class R$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{heatmapLayer:null}),K(this,"setHeatmapLayerCallback",()=>{this.state.heatmapLayer!==null&&this.props.onLoad&&this.props.onLoad(this.state.heatmapLayer)})}componentDidMount(){ht(!!google.maps.visualization,'Did you include prop libraries={["visualization"]} to <LoadScript />? %s',google.maps.visualization),ht(!!this.props.data,"data property is required in HeatmapLayer %s",this.props.data);var t=new google.maps.visualization.HeatmapLayer(xd(xd({},this.props.options),{},{data:this.props.data,map:this.context}));this.registeredEvents=Ee({updaterMap:Dw,eventMap:Iw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{heatmapLayer:t}},this.setHeatmapLayerCallback)}componentDidUpdate(t){Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Dw,eventMap:Iw,prevProps:t,nextProps:this.props,instance:this.state.heatmapLayer})}componentWillUnmount(){this.state.heatmapLayer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.heatmapLayer),Ne(this.registeredEvents),this.state.heatmapLayer.setMap(null))}render(){return null}}K(R$,"contextType",je);var _w={onCloseClick:"closeclick",onPanoChanged:"pano_changed",onPositionChanged:"position_changed",onPovChanged:"pov_changed",onResize:"resize",onStatusChanged:"status_changed",onVisibleChanged:"visible_changed",onZoomChanged:"zoom_changed"},Fw={register(e,t,n){e.registerPanoProvider(t,n)},links(e,t){e.setLinks(t)},motionTracking(e,t){e.setMotionTracking(t)},options(e,t){e.setOptions(t)},pano(e,t){e.setPano(t)},position(e,t){e.setPosition(t)},pov(e,t){e.setPov(t)},visible(e,t){e.setVisible(t)},zoom(e,t){e.setZoom(t)}};class A$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{streetViewPanorama:null}),K(this,"setStreetViewPanoramaCallback",()=>{this.state.streetViewPanorama!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewPanorama)})}componentDidMount(){var t,n,r=(t=(n=this.context)===null||n===void 0?void 0:n.getStreetView())!==null&&t!==void 0?t:null;this.registeredEvents=Ee({updaterMap:Fw,eventMap:_w,prevProps:{},nextProps:this.props,instance:r}),this.setState(()=>({streetViewPanorama:r}),this.setStreetViewPanoramaCallback)}componentDidUpdate(t){this.state.streetViewPanorama!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Fw,eventMap:_w,prevProps:t,nextProps:this.props,instance:this.state.streetViewPanorama}))}componentWillUnmount(){this.state.streetViewPanorama!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.streetViewPanorama),Ne(this.registeredEvents),this.state.streetViewPanorama.setVisible(!1))}render(){return null}}K(A$,"contextType",je);class O$ extends d.PureComponent{constructor(){super(...arguments),K(this,"state",{streetViewService:null}),K(this,"setStreetViewServiceCallback",()=>{this.state.streetViewService!==null&&this.props.onLoad&&this.props.onLoad(this.state.streetViewService)})}componentDidMount(){var t=new google.maps.StreetViewService;this.setState(function(){return{streetViewService:t}},this.setStreetViewServiceCallback)}componentWillUnmount(){this.state.streetViewService!==null&&this.props.onUnmount&&this.props.onUnmount(this.state.streetViewService)}render(){return null}}K(O$,"contextType",je);var zw={onDirectionsChanged:"directions_changed"},Bw={directions(e,t){e.setDirections(t)},map(e,t){e.setMap(t)},options(e,t){e.setOptions(t)},panel(e,t){e.setPanel(t)},routeIndex(e,t){e.setRouteIndex(t)}};class I$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"state",{directionsRenderer:null}),K(this,"setDirectionsRendererCallback",()=>{this.state.directionsRenderer!==null&&(this.state.directionsRenderer.setMap(this.context),this.props.onLoad&&this.props.onLoad(this.state.directionsRenderer))})}componentDidMount(){var t=new google.maps.DirectionsRenderer(this.props.options);this.registeredEvents=Ee({updaterMap:Bw,eventMap:zw,prevProps:{},nextProps:this.props,instance:t}),this.setState(function(){return{directionsRenderer:t}},this.setDirectionsRendererCallback)}componentDidUpdate(t){this.state.directionsRenderer!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Bw,eventMap:zw,prevProps:t,nextProps:this.props,instance:this.state.directionsRenderer}))}componentWillUnmount(){this.state.directionsRenderer!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.directionsRenderer),Ne(this.registeredEvents),this.state.directionsRenderer&&this.state.directionsRenderer.setMap(null))}render(){return null}}K(I$,"contextType",je);var Vw={onPlacesChanged:"places_changed"},$w={bounds(e,t){e.setBounds(t)}};class D$ extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"containerElement",d.createRef()),K(this,"state",{searchBox:null}),K(this,"setSearchBoxCallback",()=>{this.state.searchBox!==null&&this.props.onLoad&&this.props.onLoad(this.state.searchBox)})}componentDidMount(){if(ht(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places),this.containerElement!==null&&this.containerElement.current!==null){var t=this.containerElement.current.querySelector("input");if(t!==null){var n=new google.maps.places.SearchBox(t,this.props.options);this.registeredEvents=Ee({updaterMap:$w,eventMap:Vw,prevProps:{},nextProps:this.props,instance:n}),this.setState(function(){return{searchBox:n}},this.setSearchBoxCallback)}}}componentDidUpdate(t){this.state.searchBox!==null&&(Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:$w,eventMap:Vw,prevProps:t,nextProps:this.props,instance:this.state.searchBox}))}componentWillUnmount(){this.state.searchBox!==null&&(this.props.onUnmount&&this.props.onUnmount(this.state.searchBox),Ne(this.registeredEvents))}render(){return o.jsx("div",{ref:this.containerElement,children:d.Children.only(this.props.children)})}}K(D$,"contextType",je);var Uw={onPlaceChanged:"place_changed"},Hw={bounds(e,t){e.setBounds(t)},restrictions(e,t){e.setComponentRestrictions(t)},fields(e,t){e.setFields(t)},options(e,t){e.setOptions(t)},types(e,t){e.setTypes(t)}};class V0 extends d.PureComponent{constructor(){super(...arguments),K(this,"registeredEvents",[]),K(this,"containerElement",d.createRef()),K(this,"state",{autocomplete:null}),K(this,"setAutocompleteCallback",()=>{this.state.autocomplete!==null&&this.props.onLoad&&this.props.onLoad(this.state.autocomplete)})}componentDidMount(){var t;ht(!!google.maps.places,'You need to provide libraries={["places"]} prop to <LoadScript /> component %s',google.maps.places);var n=(t=this.containerElement.current)===null||t===void 0?void 0:t.querySelector("input");if(n){var r=new google.maps.places.Autocomplete(n,this.props.options);this.registeredEvents=Ee({updaterMap:Hw,eventMap:Uw,prevProps:{},nextProps:this.props,instance:r}),this.setState(()=>({autocomplete:r}),this.setAutocompleteCallback)}}componentDidUpdate(t){Ne(this.registeredEvents),this.registeredEvents=Ee({updaterMap:Hw,eventMap:Uw,prevProps:t,nextProps:this.props,instance:this.state.autocomplete})}componentWillUnmount(){this.state.autocomplete!==null&&Ne(this.registeredEvents)}render(){return o.jsx("div",{ref:this.containerElement,className:this.props.className,children:d.Children.only(this.props.children)})}}K(V0,"defaultProps",{className:""});K(V0,"contextType",je);const Na=Zl,Xa={getAll:async(e=1,t=100,n=null)=>{const r={page:e,limit:t};return n&&(r.franchiseId=n),(await fe.get(`${Na}/stores`,{params:r})).data},create:async e=>(await fe.post(`${Na}/stores`,e)).data,update:async(e,t)=>(await fe.patch(`${Na}/stores/${e}`,t)).data,changeStatus:async(e,t)=>(await fe.patch(`${Na}/stores/${e}/status`,{status:t})).data,hardDelete:async e=>(await fe.delete(`${Na}/stores/${e}/hard`)).data},_$=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(!1),s=d.useCallback(async(l=1,c=100,u=null)=>{var f,h;r(!0);try{const p=await Xa.getAll(l,c,u),m=p.data||p;t(m.items||m||[])}catch(p){ie({title:"Error",description:((h=(f=p.response)==null?void 0:f.data)==null?void 0:h.message)||"Failed to fetch stores",variant:"destructive"})}finally{r(!1)}},[]);return{stores:e,loading:n,fetchStores:s,changeStoreStatus:async(l,c)=>{var u,f;try{await Xa.changeStatus(l,c),t(h=>h.map(p=>p.id===l?{...p,status:c}:p)),ie({title:"Status Updated",description:`Store status set to ${c}`})}catch(h){const p=((f=(u=h.response)==null?void 0:u.data)==null?void 0:f.message)||"Failed to update store status";throw ie({title:"Error",description:p,variant:"destructive"}),new Error(p)}},hardDeleteStore:async l=>{var c,u;try{await Xa.hardDelete(l),t(f=>f.filter(h=>h.id!==l)),ie({title:"Store Deleted",description:"Store has been permanently removed"})}catch(f){const h=((u=(c=f.response)==null?void 0:c.data)==null?void 0:u.message)||"Failed to delete store";throw ie({title:"Error",description:h,variant:"destructive"}),new Error(h)}}}},F$=Zl,z$="AIzaSyDP6KnwXJ9tyIbT4qAC7XIX3rdmqABnVco",B$=["places"],V$=()=>{const e=qr(),{isFranchiseAdmin:t,isAdmin:n}=$s(),{stores:r,loading:s,fetchStores:i,hardDeleteStore:a}=_$(),[l,c]=d.useState(!1),[u,f]=d.useState(!1),[h,p]=d.useState(null),[m,g]=d.useState(!1),[v,y]=d.useState(!1),[b,x]=d.useState(null),[w,S]=d.useState(!1),[k,j]=d.useState(1),[C,E]=d.useState(10),[N,L]=d.useState(!1),[T,R]=d.useState(""),z=s||m,I=d.useRef(null),[F,A]=d.useState({localStoreid:"",name:"",address:"",latitude:33.6844,longitude:73.0479}),{isLoaded:W}=fV({googleMapsApiKey:z$,libraries:B$});d.useEffect(()=>{const H=setTimeout(()=>{L(!0)},300);return()=>clearTimeout(H)},[]),d.useEffect(()=>{l||A({localStoreid:"",name:"",address:"",latitude:33.6844,longitude:73.0479})},[l]);const M=d.useCallback(async(H,se="GET",he=null)=>{const oe=localStorage.getItem("access_token");return He({method:se,url:Di(F$,H),headers:{Authorization:`Bearer ${oe}`},data:he})},[]),O=d.useCallback(async()=>{var H;if(t()){g(!0);try{const se=await M("/franchises/me/franchise");((H=se.data)==null?void 0:H.status)==="success"&&p(se.data.data)}catch{ze.error("Failed to load franchise data")}finally{g(!1)}}},[M,t]);d.useEffect(()=>{i(),O()},[i,O]);const _=H=>{if(!window.google||!(H!=null&&H.latLng))return;const se=H.latLng.lat(),he=H.latLng.lng();A(Oe=>({...Oe,latitude:se,longitude:he})),new window.google.maps.Geocoder().geocode({location:{lat:se,lng:he}},(Oe,ct)=>{ct==="OK"&&(Oe!=null&&Oe[0])&&A(It=>({...It,address:Oe[0].formatted_address}))})},U=()=>{if(!I.current)return;const H=I.current.getPlace();if(!(H!=null&&H.geometry))return;const se=H.geometry.location.lat(),he=H.geometry.location.lng();A(oe=>({...oe,latitude:se,longitude:he,address:H.formatted_address||oe.address}))},q=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,G=async H=>{var se,he;if(H.preventDefault(),!(h!=null&&h.id)){ze.error("Franchise not loaded. Please refresh and try again.");return}if(F.localStoreid&&!q.test(F.localStoreid)){ze.error("Store Identifier must be valid UUID");return}f(!0);try{await Xa.create({...F,latitude:Number(F.latitude),longitude:Number(F.longitude),franchiseId:h.id,cityId:h.cityId}),ze.success("New Hub Provisioned Successfully"),c(!1),i()}catch(oe){ze.error(((he=(se=oe==null?void 0:oe.response)==null?void 0:se.data)==null?void 0:he.message)||(oe==null?void 0:oe.message)||"Provisioning failed")}finally{f(!1)}},D=d.useMemo(()=>T?r.filter(H=>{var se,he;return((se=H.name)==null?void 0:se.toLowerCase().includes(T.toLowerCase()))||((he=H.address)==null?void 0:he.toLowerCase().includes(T.toLowerCase()))||String(H.localStoreid||"").toLowerCase().includes(T.toLowerCase())}):r,[r,T]);d.useEffect(()=>{j(1)},[T]);const P=Math.ceil(D.length/C),X=d.useMemo(()=>{const H=(k-1)*C;return D.slice(H,H+C)},[D,k,C]),V=d.useMemo(()=>{const H=(r==null?void 0:r.length)||0,se=(r==null?void 0:r.filter(Oe=>Oe.status==="ACTIVE").length)||0,he=H-se,oe=H>0?Math.round(se/H*100):0;return{total:H,active:se,inactive:he,efficiency:oe}},[r]),J=H=>{x(H),y(!0)},ce=async()=>{if(b)try{S(!0),await a(b.id)}catch{}finally{S(!1),y(!1),x(null)}},$=d.useMemo(()=>[{key:"name",label:"Store Hub",render:(H,se)=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
w-12\r
h-12\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
shadow-lg\r
shadow-orange-500/10\r
group-hover:scale-110\r
transition-all\r
duration-500\r
`,children:o.jsx(Wn,{size:20})}),o.jsxs("div",{children:[o.jsx("p",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:H}),o.jsx("p",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:se.localStoreid||"No UUID"})]})]})},{key:"address",label:"Location",render:H=>o.jsx("div",{className:"max-w-[280px]",children:o.jsx("p",{className:`\r
text-sm\r
text-slate-600\r
dark:text-slate-300\r
truncate\r
`,children:H})})},{key:"status",label:"Status",render:H=>o.jsx(Xn,{status:H})},{key:"actions",label:"",render:(H,se)=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>e(`/stores/${se.id}`),className:`\r
rounded-xl\r
hover:bg-orange-500/10\r
hover:text-orange-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Ul,{size:16})}),t()&&o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>e(`/stores/${se.id}`,{state:{editMode:!0}}),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
hover:text-indigo-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Ag,{size:16})}),n()&&o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>J(se),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
hover:text-red-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Vs,{size:16})})]})}],[e,n]),Z=`
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
`;return N?o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Franchise Infrastructure",subtitle:"Manage intelligent store ecosystem"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},className:`\r
relative\r
overflow-hidden\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-4},className:`${Z} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Hubs"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:V.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Bl,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${Z} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Active Stores"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:V.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${Z} rounded-[2rem] p-6`,children:o.jsx("div",{className:"flex items-center justify-between",children:o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-3\r
`,children:"Efficiency"}),o.jsxs("div",{className:"flex items-center justify-between mb-3",children:[o.jsxs("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:[V.efficiency,"%"]}),o.jsx(Qk,{size:20,className:"text-indigo-500"})]}),o.jsx(Li,{value:V.efficiency,className:`\r
h-2\r
bg-slate-200\r
dark:bg-slate-800\r
`})]})})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${Z} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
flex-col\r
lg:flex-row\r
justify-between\r
lg:items-center\r
gap-5\r
bg-white/60\r
dark:bg-slate-900/40\r
backdrop-blur-xl\r
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-orange-500\r
to-orange-600\r
text-white\r
shadow-lg\r
shadow-orange-500/20\r
`,children:o.jsx(Ii,{size:20})}),o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-lg\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Franchise Store Matrix"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Real-time infrastructure overview"})]})]}),o.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
items-center\r
gap-3\r
w-full\r
lg:w-auto\r
`,children:[o.jsxs("div",{className:"relative w-full md:w-80",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{value:T,onChange:H=>R(H.target.value),placeholder:"Search stores...",className:`\r
pl-10\r
h-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/50\r
`})]}),o.jsx("select",{value:C,onChange:H=>{E(Number(H.target.value)),j(1)},className:`\r
h-11\r
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
`,children:[5,10,20,50].map(H=>o.jsx("option",{value:H,children:H},H))}),t()&&o.jsxs(ne,{onClick:()=>c(!0),className:`\r
h-11\r
rounded-2xl\r
px-5\r
font-bold\r
gap-2\r
bg-orange-500\r
hover:bg-orange-600\r
shadow-lg\r
shadow-orange-500/20\r
transition-all\r
duration-500\r
hover:scale-[1.02]\r
`,children:[o.jsx(Zo,{size:18}),"Initialize Hub"]})]})]}),o.jsx("div",{className:"p-4",children:z?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:$,data:X})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(k-1)*C+1," - ",Math.min(k*C,D.length)," ","of"," ",D.length]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:k===1,onClick:()=>j(H=>H-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-orange-500\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-orange-500/20\r
`,children:[k," / ",P]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:k===P,onClick:()=>j(H=>H+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),o.jsx(wr,{isOpen:v,onClose:()=>{y(!1),x(null)},onConfirm:ce,title:"Delete Store Hub",message:`This will permanently remove "${b==null?void 0:b.name}". Continue?`,confirmText:"Delete",variant:"destructive",loading:w}),l&&t()&&o.jsx(kn,{isOpen:!0,onClose:()=>c(!1),title:"Initialize Store Hub",size:"xl",children:o.jsxs("form",{onSubmit:G,className:`\r
grid\r
grid-cols-1\r
lg:grid-cols-12\r
gap-8\r
`,children:[o.jsxs("div",{className:`\r
lg:col-span-5\r
space-y-5\r
`,children:[o.jsxs("div",{className:`\r
rounded-[2rem]\r
border\r
border-slate-200\r
dark:border-slate-800\r
bg-slate-50/80\r
dark:bg-slate-900/40\r
p-5\r
space-y-5\r
`,children:[o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Zk,{size:14}),"Store UUID"]}),o.jsx(be,{placeholder:"UUID...",className:`\r
h-11\r
rounded-2xl\r
font-mono\r
`,value:F.localStoreid,onChange:H=>A(se=>({...se,localStoreid:H.target.value}))})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Wn,{size:14}),"Store Name"]}),o.jsx(be,{placeholder:"DHA Hub",className:`\r
h-11\r
rounded-2xl\r
`,value:F.name,onChange:H=>A(se=>({...se,name:H.target.value})),required:!0})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Ci,{size:14}),"Address"]}),o.jsx("textarea",{value:F.address,onChange:H=>A(se=>({...se,address:H.target.value})),required:!0,className:`\r
w-full\r
min-h-[120px]\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-700\r
bg-white\r
dark:bg-slate-900\r
p-4\r
outline-none\r
focus:ring-2\r
focus:ring-orange-500/20\r
`})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:`\r
rounded-2xl\r
bg-slate-900\r
text-white\r
p-4\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
text-orange-500\r
font-black\r
mb-2\r
`,children:"Latitude"}),o.jsx("p",{className:"font-mono text-sm",children:Number(F.latitude).toFixed(6)})]}),o.jsxs("div",{className:`\r
rounded-2xl\r
bg-slate-900\r
text-white\r
p-4\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
text-orange-500\r
font-black\r
mb-2\r
`,children:"Longitude"}),o.jsx("p",{className:"font-mono text-sm",children:Number(F.longitude).toFixed(6)})]})]}),o.jsxs("div",{className:"flex gap-4",children:[o.jsx(ne,{type:"button",variant:"outline",onClick:()=>c(!1),className:`\r
flex-1\r
h-11\r
rounded-2xl\r
`,children:"Cancel"}),o.jsx(ne,{type:"submit",disabled:u,className:`\r
flex-1\r
h-11\r
rounded-2xl\r
bg-orange-500\r
hover:bg-orange-600\r
shadow-lg\r
shadow-orange-500/20\r
`,children:u?o.jsx(fn,{className:"animate-spin"}):"Provision Store"})]})]}),o.jsxs("div",{className:`\r
lg:col-span-7\r
space-y-4\r
`,children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(SR,{size:14,className:"text-orange-500"}),"Geo Positioning"]}),W&&o.jsx(V0,{onLoad:H=>I.current=H,onPlaceChanged:U,children:o.jsxs("div",{className:"relative w-64",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-3\r
h-3\r
text-slate-400\r
`}),o.jsx(be,{placeholder:"Search location...",className:`\r
h-10\r
pl-8\r
rounded-full\r
bg-slate-100\r
dark:bg-slate-900\r
border-none\r
text-xs\r
`})]})})]}),o.jsxs("div",{className:`\r
h-[460px]\r
rounded-[2rem]\r
overflow-hidden\r
border-[10px]\r
border-slate-50\r
dark:border-slate-900\r
shadow-2xl\r
relative\r
`,children:[W?o.jsx(eV,{mapContainerStyle:{width:"100%",height:"100%"},center:{lat:F.latitude,lng:F.longitude},zoom:14,onClick:_,options:{mapTypeControl:!1,streetViewControl:!1,styles:$$},children:o.jsx(JN,{position:{lat:F.latitude,lng:F.longitude}})}):o.jsx("div",{className:`\r
h-full\r
flex\r
items-center\r
justify-center\r
bg-slate-100\r
dark:bg-slate-900\r
`,children:"Initializing Maps..."}),o.jsxs("div",{className:`\r
absolute\r
bottom-4\r
left-4\r
right-4\r
bg-white/90\r
dark:bg-slate-900/80\r
backdrop-blur-xl\r
rounded-2xl\r
p-4\r
border\r
border-white/20\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-500\r
mb-2\r
`,children:"Current Position"}),o.jsx("p",{className:`\r
text-sm\r
truncate\r
text-slate-700\r
dark:text-slate-300\r
`,children:F.address||"Click map to select location"})]})]})]})]})})]}):o.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-orange-500/20\r
border-t-orange-500\r
animate-spin\r
`})})},$$=[{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]}];var Rh="rovingFocusGroup.onEntryFocus",U$={bubbles:!1,cancelable:!0},tc="RovingFocusGroup",[Tm,lL,H$]=Ng(tc),[W$,cL]=Sr(tc,[H$]),[K$,G$]=W$(tc),uL=d.forwardRef((e,t)=>o.jsx(Tm.Provider,{scope:e.__scopeRovingFocusGroup,children:o.jsx(Tm.Slot,{scope:e.__scopeRovingFocusGroup,children:o.jsx(q$,{...e,ref:t})})}));uL.displayName=tc;var q$=d.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,orientation:r,loop:s=!1,dir:i,currentTabStopId:a,defaultCurrentTabStopId:l,onCurrentTabStopIdChange:c,onEntryFocus:u,preventScrollOnEntryFocus:f=!1,...h}=e,p=d.useRef(null),m=Ve(t,p),g=T0(i),[v,y]=ki({prop:a,defaultProp:l??null,onChange:c,caller:tc}),[b,x]=d.useState(!1),w=Ln(u),S=lL(n),k=d.useRef(!1),[j,C]=d.useState(0);return d.useEffect(()=>{const E=p.current;if(E)return E.addEventListener(Rh,w),()=>E.removeEventListener(Rh,w)},[w]),o.jsx(K$,{scope:n,orientation:r,dir:g,loop:s,currentTabStopId:v,onItemFocus:d.useCallback(E=>y(E),[y]),onItemShiftTab:d.useCallback(()=>x(!0),[]),onFocusableItemAdd:d.useCallback(()=>C(E=>E+1),[]),onFocusableItemRemove:d.useCallback(()=>C(E=>E-1),[]),children:o.jsx(we.div,{tabIndex:b||j===0?-1:0,"data-orientation":r,...h,ref:m,style:{outline:"none",...e.style},onMouseDown:ge(e.onMouseDown,()=>{k.current=!0}),onFocus:ge(e.onFocus,E=>{const N=!k.current;if(E.target===E.currentTarget&&N&&!b){const L=new CustomEvent(Rh,U$);if(E.currentTarget.dispatchEvent(L),!L.defaultPrevented){const T=S().filter(A=>A.focusable),R=T.find(A=>A.active),z=T.find(A=>A.id===v),F=[R,z,...T].filter(Boolean).map(A=>A.ref.current);hL(F,f)}}k.current=!1}),onBlur:ge(e.onBlur,()=>x(!1))})})}),dL="RovingFocusGroupItem",fL=d.forwardRef((e,t)=>{const{__scopeRovingFocusGroup:n,focusable:r=!0,active:s=!1,tabStopId:i,children:a,...l}=e,c=Ts(),u=i||c,f=G$(dL,n),h=f.currentTabStopId===u,p=lL(n),{onFocusableItemAdd:m,onFocusableItemRemove:g,currentTabStopId:v}=f;return d.useEffect(()=>{if(r)return m(),()=>g()},[r,m,g]),o.jsx(Tm.ItemSlot,{scope:n,id:u,focusable:r,active:s,children:o.jsx(we.span,{tabIndex:h?0:-1,"data-orientation":f.orientation,...l,ref:t,onMouseDown:ge(e.onMouseDown,y=>{r?f.onItemFocus(u):y.preventDefault()}),onFocus:ge(e.onFocus,()=>f.onItemFocus(u)),onKeyDown:ge(e.onKeyDown,y=>{if(y.key==="Tab"&&y.shiftKey){f.onItemShiftTab();return}if(y.target!==y.currentTarget)return;const b=Q$(y,f.orientation,f.dir);if(b!==void 0){if(y.metaKey||y.ctrlKey||y.altKey||y.shiftKey)return;y.preventDefault();let w=p().filter(S=>S.focusable).map(S=>S.ref.current);if(b==="last")w.reverse();else if(b==="prev"||b==="next"){b==="prev"&&w.reverse();const S=w.indexOf(y.currentTarget);w=f.loop?X$(w,S+1):w.slice(S+1)}setTimeout(()=>hL(w))}}),children:typeof a=="function"?a({isCurrentTabStop:h,hasTabStop:v!=null}):a})})});fL.displayName=dL;var Z$={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function Y$(e,t){return t!=="rtl"?e:e==="ArrowLeft"?"ArrowRight":e==="ArrowRight"?"ArrowLeft":e}function Q$(e,t,n){const r=Y$(e.key,n);if(!(t==="vertical"&&["ArrowLeft","ArrowRight"].includes(r))&&!(t==="horizontal"&&["ArrowUp","ArrowDown"].includes(r)))return Z$[r]}function hL(e,t=!1){const n=document.activeElement;for(const r of e)if(r===n||(r.focus({preventScroll:t}),document.activeElement!==n))return}function X$(e,t){return e.map((n,r)=>e[(t+r)%e.length])}var J$=uL,eU=fL,gf="Tabs",[tU,VU]=Sr(gf,[cL]),pL=cL(),[nU,$0]=tU(gf),mL=d.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,onValueChange:s,defaultValue:i,orientation:a="horizontal",dir:l,activationMode:c="automatic",...u}=e,f=T0(l),[h,p]=ki({prop:r,onChange:s,defaultProp:i??"",caller:gf});return o.jsx(nU,{scope:n,baseId:Ts(),value:h,onValueChange:p,orientation:a,dir:f,activationMode:c,children:o.jsx(we.div,{dir:f,"data-orientation":a,...u,ref:t})})});mL.displayName=gf;var gL="TabsList",vL=d.forwardRef((e,t)=>{const{__scopeTabs:n,loop:r=!0,...s}=e,i=$0(gL,n),a=pL(n);return o.jsx(J$,{asChild:!0,...a,orientation:i.orientation,dir:i.dir,loop:r,children:o.jsx(we.div,{role:"tablist","aria-orientation":i.orientation,...s,ref:t})})});vL.displayName=gL;var xL="TabsTrigger",yL=d.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,disabled:s=!1,...i}=e,a=$0(xL,n),l=pL(n),c=SL(a.baseId,r),u=kL(a.baseId,r),f=r===a.value;return o.jsx(eU,{asChild:!0,...l,focusable:!s,active:f,children:o.jsx(we.button,{type:"button",role:"tab","aria-selected":f,"aria-controls":u,"data-state":f?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:c,...i,ref:t,onMouseDown:ge(e.onMouseDown,h=>{!s&&h.button===0&&h.ctrlKey===!1?a.onValueChange(r):h.preventDefault()}),onKeyDown:ge(e.onKeyDown,h=>{[" ","Enter"].includes(h.key)&&a.onValueChange(r)}),onFocus:ge(e.onFocus,()=>{const h=a.activationMode!=="manual";!f&&!s&&h&&a.onValueChange(r)})})})});yL.displayName=xL;var bL="TabsContent",wL=d.forwardRef((e,t)=>{const{__scopeTabs:n,value:r,forceMount:s,children:i,...a}=e,l=$0(bL,n),c=SL(l.baseId,r),u=kL(l.baseId,r),f=r===l.value,h=d.useRef(f);return d.useEffect(()=>{const p=requestAnimationFrame(()=>h.current=!1);return()=>cancelAnimationFrame(p)},[]),o.jsx(Oi,{present:s||f,children:({present:p})=>o.jsx(we.div,{"data-state":f?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!p,id:u,tabIndex:0,...a,ref:t,style:{...e.style,animationDuration:h.current?"0s":void 0},children:p&&i})})});wL.displayName=bL;function SL(e,t){return`${e}-trigger-${t}`}function kL(e,t){return`${e}-content-${t}`}var rU=mL,CL=vL,jL=yL,EL=wL;const NL=rU,U0=d.forwardRef(({className:e,...t},n)=>o.jsx(CL,{ref:n,className:de("inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",e),...t}));U0.displayName=CL.displayName;const bs=d.forwardRef(({className:e,...t},n)=>o.jsx(jL,{ref:n,className:de("inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",e),...t}));bs.displayName=jL.displayName;const ws=d.forwardRef(({className:e,...t},n)=>o.jsx(EL,{ref:n,className:de("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",e),...t}));ws.displayName=EL.displayName;const sU=d.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:de("rounded-lg border bg-card text-card-foreground shadow-sm",e),...t}));sU.displayName="Card";const iU=d.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:de("flex flex-col space-y-1.5 p-6",e),...t}));iU.displayName="CardHeader";const oU=d.forwardRef(({className:e,...t},n)=>o.jsx("h3",{ref:n,className:de("text-2xl font-semibold leading-none tracking-tight",e),...t}));oU.displayName="CardTitle";const aU=d.forwardRef(({className:e,...t},n)=>o.jsx("p",{ref:n,className:de("text-sm text-muted-foreground",e),...t}));aU.displayName="CardDescription";const lU=d.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:de("p-6 pt-0",e),...t}));lU.displayName="CardContent";const cU=d.forwardRef(({className:e,...t},n)=>o.jsx("div",{ref:n,className:de("flex items-center p-6 pt-0",e),...t}));cU.displayName="CardFooter";const uU=e0,dU=Zl;function fU(){var H,se,he,oe,Oe,ct,It,Nt;const{id:e}=nj(),t=qr(),n=Cr(),{isAdmin:r,isFranchiseAdmin:s}=$s(),i=d.useMemo(()=>He.create({baseURL:uU,headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}}),[]),a=d.useMemo(()=>He.create({baseURL:dU,headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}}),[]),[l,c]=d.useState("info"),[u,f]=d.useState(null),[h,p]=d.useState(!0),[m,g]=d.useState(null),[v,y]=d.useState(!1),[b,x]=d.useState(""),[w,S]=d.useState("STORE_TOPUP"),[k,j]=d.useState(!1),[C,E]=d.useState(!!((H=n.state)!=null&&H.editMode)),[N,L]=d.useState(null),[T,R]=d.useState({open:!1,status:null,label:""}),[z,I]=d.useState(!1),[F,A]=d.useState(!1),[W,M]=d.useState(!1),[O,_]=d.useState(1),U=8,q=Math.ceil((((se=m==null?void 0:m.transactions)==null?void 0:se.length)||0)/U),G=d.useMemo(()=>{if(!(m!=null&&m.transactions))return[];const ve=(O-1)*U;return m.transactions.slice(ve,ve+U)},[m,O]),D=d.useCallback(async()=>{var ve,Pe;p(!0);try{const $e=await a.get(`/stores/${e}`);f((ve=$e.data)==null?void 0:ve.data),L((Pe=$e.data)==null?void 0:Pe.data)}catch{ze.error("Failed to load store details")}finally{p(!1)}},[e,a]),P=d.useCallback(async()=>{var ve,Pe,$e;y(!0);try{const De=await i.get(`/wallets/${e}?currency=PKR`);g((ve=De.data)==null?void 0:ve.data)}catch(De){if(((Pe=De.response)==null?void 0:Pe.status)===404){const gn=await i.post("/wallets",{ownerId:e,ownerType:"STORE",currency:"PKR"});g(($e=gn.data)==null?void 0:$e.data),ze.success("Store wallet initialized")}else ze.error("Wallet data currently unavailable")}finally{y(!1)}},[e,i]);d.useEffect(()=>{e&&(D(),P())},[e,D,P]);const X=d.useMemo(()=>{var De,gn;const ve=(m==null?void 0:m.balance)||0,Pe=((De=m==null?void 0:m.transactions)==null?void 0:De.length)||0,$e=((gn=m==null?void 0:m.transactions)==null?void 0:gn.filter(Q=>Q.type==="CREDIT").length)||0;return{balance:ve,totalTransactions:Pe,credits:$e}},[m]),V=async()=>{var ve,Pe,$e;try{console.log("Updating Store ID:",e);const De=await a.patch(`/stores/${e}`,{name:u==null?void 0:u.name,address:u==null?void 0:u.address});console.log("Update Response:",De.data),ze.success("Store details updated"),E(!1),D()}catch(De){console.error("Update Error:",((ve=De.response)==null?void 0:ve.data)||De.message),ze.error((($e=(Pe=De.response)==null?void 0:Pe.data)==null?void 0:$e.message)||"Update failed")}},J=async()=>{var ve,Pe;if(!b||parseFloat(b)<=0)return ze.error("Enter a valid amount");j(!0);try{await i.post(`/wallets/owner/${e}/credit`,{amount:parseFloat(b),reason:w,currency:"PKR",referenceId:`STORE-REF-${Date.now()}`,idempotencyKey:`credit-store-${e}-${Date.now()}`}),ze.success(`PKR ${b} added to store wallet`),x(""),P()}catch($e){ze.error("Credit failed: "+(((Pe=(ve=$e.response)==null?void 0:ve.data)==null?void 0:Pe.message)||"Server error"))}finally{j(!1)}},ce=async()=>{var ve,Pe;if(T.status){I(!0);try{await a.patch(`/stores/${e}/status`,{status:T.status}),ze.success(`Store set to ${T.status}`),f($e=>({...$e,status:T.status}))}catch($e){ze.error(((Pe=(ve=$e.response)==null?void 0:ve.data)==null?void 0:Pe.message)||"Status update failed")}finally{I(!1),R({open:!1,status:null,label:""})}}},$=async()=>{var ve,Pe;M(!0);try{await a.delete(`/stores/${e}/hard`),ze.success("Store permanently deleted"),t("/stores")}catch($e){ze.error(((Pe=(ve=$e.response)==null?void 0:ve.data)==null?void 0:Pe.message)||"Deletion failed")}finally{M(!1),A(!1)}};if(h)return o.jsx(Mn,{children:o.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-slate-50\r
via-white\r
to-slate-100\r
dark:from-[#03140F]\r
dark:via-[#041B15]\r
dark:to-[#020617]\r
`,children:[o.jsx(Tn,{title:"Hub Command Center",subtitle:"Loading hub infrastructure..."}),o.jsx("div",{className:"p-6",children:o.jsx(Jn,{rows:6})})]})});const Z=`
bg-white/80
dark:bg-slate-900/70
backdrop-blur-2xl
border
border-slate-200
dark:border-slate-800
shadow-[0_10px_40px_rgba(0,0,0,0.06)]
dark:shadow-[0_20px_80px_rgba(0,0,0,0.45)]
transition-all
duration-500
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Hub Command Center",subtitle:"Advanced franchise operations"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[o.jsxs("div",{className:`\r
absolute\r
inset-0\r
overflow-hidden\r
pointer-events-none\r
-z-10\r
`,children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsx(ee.div,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},children:o.jsxs(ne,{variant:"outline",onClick:()=>t(-1),className:`\r
h-12\r
px-5\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
bg-white/70\r
dark:bg-slate-900/60\r
backdrop-blur-xl\r
hover:bg-white\r
hover:text-slate-800\r
dark:hover:bg-slate-800\r
shadow-sm\r
flex\r
items-center\r
gap-2\r
font-bold\r
`,children:[o.jsx(Wk,{size:18}),"Back"]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${Z} rounded-[2.5rem] p-8`,children:o.jsxs("div",{className:`\r
flex\r
flex-col\r
xl:flex-row\r
justify-between\r
gap-8\r
`,children:[o.jsxs("div",{className:`\r
flex\r
items-start\r
gap-5\r
`,children:[o.jsx("div",{className:`\r
w-20\r
h-20\r
rounded-[2rem]\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
shadow-lg\r
shadow-indigo-500/10\r
`,children:o.jsx(Wn,{size:34})}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{className:`\r
flex\r
flex-wrap\r
items-center\r
gap-3\r
`,children:[o.jsx("h1",{className:`\r
text-3xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:u==null?void 0:u.name}),o.jsx(Xn,{status:(u==null?void 0:u.status)||"ACTIVE"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-2\r
text-slate-500\r
dark:text-slate-400\r
`,children:[o.jsx(Ci,{size:15}),o.jsx("span",{className:"text-sm",children:u==null?void 0:u.address})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
flex-wrap\r
`,children:[o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
text-xs\r
font-black\r
tracking-[0.2em]\r
uppercase\r
text-slate-600\r
dark:text-slate-300\r
`,children:["Store ID:"," ",u==null?void 0:u.localStoreid]}),o.jsx("div",{className:`\r
px-4\r
py-2\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-600\r
text-xs\r
font-black\r
tracking-[0.2em]\r
uppercase\r
`,children:"Live Operations"})]})]})]}),o.jsxs("div",{className:`\r
min-w-[320px]\r
rounded-[2rem]\r
bg-gradient-to-br\r
from-slate-900\r
to-slate-800\r
p-6\r
text-white\r
relative\r
overflow-hidden\r
`,children:[o.jsx("div",{className:`\r
absolute\r
top-[-20px]\r
right-[-20px]\r
w-32\r
h-32\r
bg-emerald-500/20\r
blur-3xl\r
rounded-full\r
`}),o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
mb-6\r
`,children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.25em]\r
font-black\r
text-slate-400\r
mb-2\r
`,children:"Hub Wallet"}),v?o.jsx("div",{className:`\r
w-32\r
h-8\r
rounded-xl\r
bg-white/10\r
animate-pulse\r
`}):o.jsxs("h2",{className:`\r
text-4xl\r
font-black\r
font-mono\r
text-emerald-400\r
`,children:["PKR"," ",(he=X.balance)==null?void 0:he.toLocaleString()]})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-400\r
`,children:o.jsx(xo,{size:28})})]}),o.jsxs("div",{className:`\r
grid\r
grid-cols-2\r
gap-4\r
`,children:[o.jsxs("div",{className:`\r
rounded-2xl\r
bg-white/5\r
p-4\r
border\r
border-white/5\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.2em]\r
text-slate-400\r
font-black\r
mb-2\r
`,children:"Transactions"}),o.jsx("h3",{className:`\r
text-2xl\r
font-black\r
`,children:X.totalTransactions})]}),o.jsxs("div",{className:`\r
rounded-2xl\r
bg-white/5\r
p-4\r
border\r
border-white/5\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.2em]\r
text-slate-400\r
font-black\r
mb-2\r
`,children:"Credits"}),o.jsx("h3",{className:`\r
text-2xl\r
font-black\r
`,children:X.credits})]})]})]})]})}),o.jsxs("div",{className:`\r
grid\r
grid-cols-1\r
md:grid-cols-3\r
gap-6\r
`,children:[o.jsx(ee.div,{whileHover:{y:-3},className:`${Z} rounded-[2rem] p-6`,children:o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Wallet Balance"}),o.jsxs("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:["PKR"," ",(oe=X.balance)==null?void 0:oe.toLocaleString()]})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(xo,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${Z} rounded-[2rem] p-6`,children:o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Financial Logs"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:X.totalTransactions})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Yk,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${Z} rounded-[2rem] p-6`,children:o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Hub Status"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:u==null?void 0:u.status})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Qk,{size:24})})]})})]}),o.jsxs(NL,{value:l,onValueChange:c,className:"space-y-6",children:[o.jsxs(U0,{className:`\r
h-auto\r
p-2\r
rounded-[1.5rem]\r
bg-white/70\r
dark:bg-slate-900/60\r
backdrop-blur-xl\r
border\r
border-slate-200\r
dark:border-slate-800\r
flex\r
flex-wrap\r
gap-2\r
`,children:[o.jsx(bs,{value:"info",className:`\r
rounded-xl\r
px-5\r
py-2.5\r
font-bold\r
`,children:"Hub Information"}),C&&o.jsx(bs,{value:"wallet",className:`\r
rounded-xl\r
px-5\r
py-2.5\r
font-bold\r
`,children:"Wallet & Finance"}),C&&o.jsx(bs,{value:"settings",className:`\r
rounded-xl\r
px-5\r
py-2.5\r
font-bold\r
`,children:"Admin Controls"})]}),o.jsx(ws,{value:"info",children:o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`${Z} rounded-[2.5rem] p-8`,children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
mb-8\r
`,children:[o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-2xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Hub Details"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Operational store configuration"})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Ii,{size:24})})]}),o.jsxs("div",{className:`\r
grid\r
md:grid-cols-2\r
gap-6\r
`,children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Store Name"}),C?o.jsx(be,{className:`\r
h-12\r
rounded-2xl\r
`,value:(u==null?void 0:u.name)??"",onChange:ve=>f(Pe=>({...Pe,name:ve.target.value}))}):o.jsx("div",{className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
px-4\r
flex\r
items-center\r
text-sm\r
font-bold\r
`,children:u==null?void 0:u.name})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Local Store ID"}),o.jsx("div",{className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
px-4\r
flex\r
items-center\r
font-mono\r
text-sm\r
text-slate-500\r
`,children:u==null?void 0:u.localStoreid})]})]}),o.jsxs("div",{className:`\r
space-y-2\r
mt-6\r
`,children:[o.jsx(me,{children:"Full Address"}),C?o.jsx(be,{className:`\r
h-12\r
rounded-2xl\r
`,value:(u==null?void 0:u.address)??"",onChange:ve=>f(Pe=>({...Pe,address:ve.target.value}))}):o.jsx("div",{className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
px-4\r
flex\r
items-center\r
text-sm\r
`,children:u==null?void 0:u.address})]}),o.jsxs("div",{className:`\r
grid\r
md:grid-cols-2\r
gap-6\r
mt-6\r
`,children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Latitude"}),o.jsx("div",{className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
px-4\r
flex\r
items-center\r
font-mono\r
text-sm\r
text-slate-500\r
`,children:u==null?void 0:u.latitude})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Longitude"}),o.jsx("div",{className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
px-4\r
flex\r
items-center\r
font-mono\r
text-sm\r
text-slate-500\r
`,children:u==null?void 0:u.longitude})]})]}),C&&o.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-8\r
mt-8\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsxs(ne,{variant:"ghost",className:`\r
rounded-2xl\r
`,onClick:()=>{f(N),E(!1),c("info")},children:[o.jsx(Yo,{size:15,className:"mr-2"}),"Cancel"]}),o.jsxs(ne,{onClick:V,className:`\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[o.jsx(CR,{size:15,className:"mr-2"}),"Save Changes"]})]})]})}),o.jsxs(ws,{value:"wallet",className:"space-y-6",children:[o.jsxs("div",{className:`\r
grid\r
xl:grid-cols-3\r
gap-6\r
`,children:[o.jsxs(ee.div,{whileHover:{y:-3},className:`
xl:col-span-2
${Z}
rounded-[2.5rem]
p-8
`,children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
mb-8\r
`,children:[o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-2xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Wallet Credit Engine"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Secure balance operations"})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Ap,{size:24})})]}),C?o.jsxs("div",{className:`\r
grid\r
md:grid-cols-3\r
gap-5\r
`,children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Amount"}),o.jsx(be,{type:"number",placeholder:"0.00",value:b,onChange:ve=>x(ve.target.value),className:`\r
h-12\r
rounded-2xl\r
`})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Reason"}),o.jsxs(wt,{value:w,onValueChange:S,children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{})}),o.jsxs(gt,{children:[o.jsx(_e,{value:"STORE_TOPUP",children:"Standard Store Top-up"}),o.jsx(_e,{value:"REVENUE_SHARE",children:"Monthly Revenue Share"}),o.jsx(_e,{value:"CORRECTION",children:"Ledger Rectification"})]})]})]}),o.jsx("div",{className:`\r
flex\r
items-end\r
`,children:o.jsx(ne,{onClick:J,disabled:k||v,className:`\r
w-full\r
h-12\r
rounded-2xl\r
bg-emerald-600\r
hover:bg-emerald-700\r
shadow-lg\r
shadow-emerald-500/20\r
`,children:k?o.jsx(fn,{className:`\r
animate-spin\r
`}):o.jsxs(o.Fragment,{children:[o.jsx(xo,{size:16,className:`\r
mr-2\r
`}),"Apply Credit"]})})})]}):o.jsx("div",{className:`\r
h-[180px]\r
rounded-[2rem]\r
border\r
border-dashed\r
border-slate-300\r
dark:border-slate-700\r
flex\r
items-center\r
justify-center\r
text-slate-400\r
text-sm\r
`,children:"Credit operations are available in edit mode only."})]}),o.jsxs(ee.div,{whileHover:{y:-3},className:`${Z} rounded-[2.5rem] p-8`,children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
mb-8\r
`,children:[o.jsx("div",{children:o.jsx("h2",{className:`\r
text-xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Wallet Health"})}),o.jsx(Pn,{className:`\r
text-orange-500\r
`,size:24})]}),o.jsxs("div",{className:`\r
space-y-5\r
`,children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
pb-4\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx("span",{className:`\r
text-sm\r
text-slate-500\r
`,children:"Status"}),o.jsx(Xn,{status:m!=null&&m.isActive?"ACTIVE":"LOCKED"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
pb-4\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx("span",{className:`\r
text-sm\r
text-slate-500\r
`,children:"Currency"}),o.jsx("span",{className:`\r
font-black\r
font-mono\r
`,children:"PKR"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsx("span",{className:`\r
text-sm\r
text-slate-500\r
`,children:"Last Sync"}),o.jsx("span",{className:`\r
text-xs\r
font-medium\r
`,children:new Date().toLocaleTimeString()})]})]})]})]}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`${Z} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
flex-col\r
md:flex-row\r
justify-between\r
gap-4\r
bg-white/60\r
dark:bg-slate-900/40\r
backdrop-blur-xl\r
`,children:[o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:"Financial Activity Stream"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Real-time ledger operations"})]}),o.jsxs(ne,{variant:"outline",onClick:P,disabled:v,className:`\r
rounded-2xl\r
h-11\r
`,children:[v?o.jsx(fn,{size:15,className:`\r
animate-spin\r
mr-2\r
`}):o.jsx(kR,{size:15,className:`\r
mr-2\r
`}),"Refresh Ledger"]})]}),o.jsx("div",{className:"p-4",children:v?o.jsx(Jn,{rows:6}):(Oe=m==null?void 0:m.transactions)!=null&&Oe.length?o.jsx("div",{className:`\r
space-y-4\r
`,children:G.map(ve=>o.jsxs(ee.div,{whileHover:{scale:1.01},className:`\r
flex\r
items-center\r
justify-between\r
rounded-[1.8rem]\r
border\r
border-slate-200\r
dark:border-slate-800\r
bg-white/70\r
dark:bg-slate-900/40\r
backdrop-blur-xl\r
p-5\r
transition-all\r
duration-300\r
`,children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-4\r
`,children:[o.jsx("div",{className:`
w-14
h-14
rounded-2xl
flex
items-center
justify-center
${ve.type==="CREDIT"?"bg-emerald-500/10 text-emerald-500":"bg-rose-500/10 text-rose-500"}
`,children:ve.type==="CREDIT"?o.jsx(Ap,{size:24}):o.jsx(qk,{size:24})}),o.jsxs("div",{children:[o.jsx("h4",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:ve.reason.replace(/_/g," ")}),o.jsx("p",{className:`\r
text-xs\r
uppercase\r
tracking-[0.2em]\r
text-slate-400\r
mt-1\r
`,children:new Date(ve.createdAt).toLocaleString()})]})]}),o.jsxs("div",{className:`\r
text-right\r
`,children:[o.jsxs("h3",{className:`
text-xl
font-black
font-mono
${ve.type==="CREDIT"?"text-emerald-500":"text-rose-500"}
`,children:[ve.type==="CREDIT"?"+":"-"," ",ve.amount.toLocaleString()]}),o.jsxs("p",{className:`\r
text-[10px]\r
text-slate-400\r
font-mono\r
mt-1\r
`,children:["TXID:"," ",ve.id.slice(0,8)]})]})]},ve.id))}):o.jsx("div",{className:`\r
py-24\r
text-center\r
text-slate-400\r
italic\r
`,children:"No financial activity recorded."})}),!!((ct=m==null?void 0:m.transactions)!=null&&ct.length)&&o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(O-1)*U+1," - ",Math.min(O*U,(It=m==null?void 0:m.transactions)==null?void 0:It.length)," ","of"," ",(Nt=m==null?void 0:m.transactions)==null?void 0:Nt.length]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:O===1,onClick:()=>_(ve=>ve-1),className:`\r
rounded-xl\r
`,children:"Prev"}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[O," / ",q]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:O===q,onClick:()=>_(ve=>ve+1),className:`\r
rounded-xl\r
`,children:"Next"})]})]})]})]}),o.jsx(ws,{value:"settings",children:o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`\r
rounded-[2.5rem]\r
border\r
border-rose-200/30\r
bg-rose-500/5\r
backdrop-blur-2xl\r
overflow-hidden\r
`,children:[o.jsx("div",{className:`\r
p-8\r
border-b\r
border-rose-200/20\r
bg-rose-500/5\r
`,children:o.jsxs("div",{className:`\r
flex\r
items-center\r
justify-between\r
`,children:[o.jsxs("div",{children:[o.jsxs("h2",{className:`\r
text-2xl\r
font-black\r
tracking-tight\r
text-rose-600\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsx(vt,{size:24}),"Critical Hub Controls"]}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
mt-2\r
`,children:"High-impact operational controls"})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-rose-500/10\r
text-rose-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Vs,{size:24})})]})}),o.jsx("div",{className:`\r
p-8\r
space-y-6\r
`,children:C?o.jsxs(o.Fragment,{children:[o.jsx("p",{className:`\r
text-sm\r
text-slate-600\r
dark:text-slate-400\r
leading-relaxed\r
`,children:"Modify operational status instantly. Changes affect routing, order allocation, and rider visibility."}),o.jsxs("div",{className:`\r
flex\r
flex-wrap\r
gap-4\r
`,children:[o.jsx(ne,{variant:"outline",disabled:(u==null?void 0:u.status)==="ACTIVE",onClick:()=>R({open:!0,status:"ACTIVE",label:"Re-Activate Hub"}),className:`\r
rounded-2xl\r
border-emerald-200\r
text-emerald-600\r
hover:bg-emerald-50\r
`,children:"Re-Activate Hub"}),o.jsx(ne,{variant:"outline",disabled:(u==null?void 0:u.status)==="SUSPENDED",onClick:()=>R({open:!0,status:"SUSPENDED",label:"Maintenance Mode"}),className:`\r
rounded-2xl\r
border-orange-200\r
text-orange-600\r
hover:bg-orange-50\r
`,children:"Maintenance Mode"}),r()&&o.jsx(ne,{variant:"outline",onClick:()=>A(!0),className:`\r
rounded-2xl\r
border-rose-200\r
text-rose-600\r
hover:bg-rose-50\r
`,children:"De-commission Hub"})]})]}):o.jsx("div",{className:`\r
h-[160px]\r
rounded-[2rem]\r
border\r
border-dashed\r
border-slate-300\r
dark:border-slate-700\r
flex\r
items-center\r
justify-center\r
text-slate-400\r
text-sm\r
`,children:"Admin controls are available in edit mode only."})})]})})]})]})]}),o.jsx(wr,{isOpen:T.open,onClose:()=>R({open:!1,status:null,label:""}),onConfirm:ce,title:T.label,message:T.status==="ACTIVE"?`Reactivate "${u==null?void 0:u.name}"? It will immediately resume accepting orders.`:`Put "${u==null?void 0:u.name}" into maintenance mode? Order routing will be paused.`,confirmText:T.label,variant:T.status==="ACTIVE"?"default":"destructive",loading:z}),o.jsx(wr,{isOpen:F,onClose:()=>A(!1),onConfirm:$,title:"De-commission Hub",message:`Permanently delete "${u==null?void 0:u.name}"? All linked admins must be removed first. This cannot be undone.`,confirmText:"De-commission",variant:"destructive",loading:W})]})}const Bc=Zl,Vc={getAll:async(e=1,t=50,n=null)=>{const r={page:e,limit:t};return n&&(r.storeId=n),(await fe.get(`${Bc}/store-admins`,{params:r})).data},create:async e=>(await fe.post(`${Bc}/store-admins`,e)).data,changeStatus:async(e,t)=>(await fe.patch(`${Bc}/store-admins/${e}/status`,{status:t})).data,delete:async e=>(await fe.delete(`${Bc}/store-admins/${e}`)).data},hU=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(!1),s=d.useCallback(async(c=1,u=50,f=null)=>{var h,p;r(!0);try{const m=await Vc.getAll(c,u,f),g=m.data||m;t(g.items||g||[])}catch(m){ie({title:"Error",description:((p=(h=m.response)==null?void 0:h.data)==null?void 0:p.message)||"Failed to fetch store admins",variant:"destructive"})}finally{r(!1)}},[]);return{admins:e,loading:n,fetchAdmins:s,createAdmin:async c=>{var u,f;try{const h=await Vc.create(c);return await s(),ie({title:"Success",description:"Store admin created successfully"}),h}catch(h){const p=((f=(u=h.response)==null?void 0:u.data)==null?void 0:f.message)||"Failed to create store admin";throw ie({title:"Error",description:p,variant:"destructive"}),new Error(p)}},changeStatus:async(c,u)=>{var f,h;try{await Vc.changeStatus(c,u),t(p=>p.map(m=>m.id===c?{...m,status:u}:m)),ie({title:"Status Updated",description:`Admin has been ${u==="ACTIVE"?"activated":"suspended"} successfully`})}catch(p){const m=((h=(f=p.response)==null?void 0:f.data)==null?void 0:h.message)||"Failed to update admin status";throw ie({title:"Error",description:m,variant:"destructive"}),new Error(m)}},deleteAdmin:async c=>{var u,f;try{await Vc.delete(c),t(h=>h.filter(p=>p.id!==c)),ie({title:"Removed",description:"Store admin permanently deleted"})}catch(h){const p=((f=(u=h.response)==null?void 0:u.data)==null?void 0:f.message)||"Failed to delete store admin";throw ie({title:"Error",description:p,variant:"destructive"}),new Error(p)}}}},Tr=e=>Di(Yl,e),ar={getAll:async(e=1,t=10)=>(await fe.get(Tr("/users"),{params:{page:e,limit:t}})).data,getById:async e=>(await fe.get(Tr(`/users/${e}`))).data,getIamByAuthId:async e=>(await fe.get(Di(Yl,`/iam/users/${e}`))).data,create:async e=>(await fe.post(Tr("/users"),e)).data,createStaff:async e=>(await fe.post(Tr("/users/staff"),e)).data,updateStatus:async(e,t)=>(await fe.patch(Tr(`/users/${e}/status`),{isActive:t})).data,assignRole:async(e,t)=>(await fe.post(Tr(`/users/${e}/role`),{roleCode:t})).data,assignScope:async(e,t,n)=>(await fe.post(Tr(`/users/${e}/scope`),{scopeType:t,scopeId:t==="GLOBAL"?null:n})).data,getScope:async e=>(await fe.get(Tr(`/users/${e}/scope`))).data,removeScope:async e=>(await fe.delete(Tr(`/users/${e}/scope`))).data},La=10,pU=()=>{var J,ce;const{admins:e,loading:t,fetchAdmins:n,createAdmin:r,changeStatus:s,deleteAdmin:i}=hU(),[a,l]=d.useState([]),[c,u]=d.useState(""),[f,h]=d.useState(!1),[p,m]=d.useState(!1),[g,v]=d.useState(null),[y,b]=d.useState(!1),[x,w]=d.useState(!1),[S,k]=d.useState(!1),[j,C]=d.useState(!1),[E,N]=d.useState(!1),[L,T]=d.useState([]),[R,z]=d.useState(1),[I,F]=d.useState({storeId:"",fullName:"",email:"",password:"",phone:""});d.useEffect(()=>{n(),Xa.getAll(1,100).then($=>{console.log("STORES:",$);const Z=$.data||$;l(Z.items||Z||[])}).catch(()=>ze.error("Failed to load stores"))},[n]),d.useEffect(()=>{(async()=>{if(!e||e.length===0)return;const Z=await Promise.all(e.map(async H=>{console.log("ADMIN:",H),console.log("AUTH USER ID:",H.authUserId);try{const se=await ar.getIamByAuthId(H.authUserId),he=await ar.getById(H.authUserId);console.log("USER RES:",he);const oe=he==null?void 0:he.data;return{...H,fullName:(oe==null?void 0:oe.name)||"N/A",email:(oe==null?void 0:oe.email)||"N/A",phone:(oe==null?void 0:oe.phone)||"N/A"}}catch{return H}}));T(Z)})()},[e]);const A=d.useMemo(()=>{if(!c)return L;const $=c.toLowerCase();return L.filter(Z=>{var H,se,he,oe,Oe;return((H=Z.fullName)==null?void 0:H.toLowerCase().includes($))||((se=Z.email)==null?void 0:se.toLowerCase().includes($))||((he=Z.phone)==null?void 0:he.toLowerCase().includes($))||((Oe=(oe=Z.store)==null?void 0:oe.name)==null?void 0:Oe.toLowerCase().includes($))})},[L,c]),W=d.useMemo(()=>{const $=(L==null?void 0:L.length)||0,Z=(L==null?void 0:L.filter(se=>se.status==="ACTIVE").length)||0,H=(L==null?void 0:L.filter(se=>se.status==="SUSPENDED").length)||0;return{total:$,active:Z,suspended:H}},[L]),M=Math.ceil(A.length/La),O=d.useMemo(()=>{const $=(R-1)*La;return A.slice($,$+La)},[A,R]),_=async $=>{if($.preventDefault(),!I.storeId){ze.error("Please select a store first.");return}m(!0);try{await r(I),h(!1),F({storeId:"",fullName:"",email:"",password:"",phone:""})}catch{}finally{m(!1)}},U=$=>{v($),b(!0)},q=$=>{v($),w(!0)},G=async()=>{if(!g)return;const $=g.status==="ACTIVE"?"SUSPENDED":"ACTIVE";try{k(!0),await s(g.id,$)}catch{}finally{k(!1),w(!1),v(null)}},D=$=>{v($),C(!0)},P=async()=>{if(g)try{N(!0),await i(g.id)}catch{}finally{N(!1),C(!1),v(null)}},X=d.useMemo(()=>[{key:"fullName",label:"Administrator",render:($,Z)=>{var he,oe,Oe;const H=Z.fullName||Z.name||((he=Z.user)==null?void 0:he.fullName)||((oe=Z.user)==null?void 0:oe.name)||"-",se=Z.email||((Oe=Z.user)==null?void 0:Oe.email)||"-";return o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
w-12\r
h-12\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
font-black\r
text-sm\r
transition-all\r
duration-500\r
group-hover:scale-110\r
shadow-lg\r
shadow-orange-500/10\r
`,children:H!=="-"?H.charAt(0):"?"}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:H}),o.jsx("div",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
`,children:se})]})]})}},{key:"store",label:"Assigned Hub",render:($,Z)=>{var H;return o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx("div",{className:`\r
w-8\r
h-8\r
rounded-xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Wn,{size:14,className:"text-indigo-500"})}),o.jsx("span",{className:`\r
text-sm\r
font-bold\r
text-slate-700\r
dark:text-slate-200\r
`,children:((H=Z.store)==null?void 0:H.name)||"Unassigned"})]})}},{key:"phone",label:"Contact",render:($,Z)=>{var se,he;const H=Z.phone||Z.phoneNumber||((se=Z.user)==null?void 0:se.phone)||((he=Z.user)==null?void 0:he.phoneNumber)||"-";return o.jsx("span",{className:`\r
text-xs\r
font-mono\r
font-bold\r
text-slate-600\r
dark:text-slate-300\r
`,children:H})}},{key:"status",label:"Status",render:($,Z)=>o.jsx("button",{onClick:()=>q(Z),className:"cursor-pointer",children:o.jsx(Xn,{status:$})})},{key:"actions",label:"",render:($,Z)=>o.jsxs("div",{className:"flex gap-2",children:[o.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>U(Z),className:`\r
rounded-xl\r
hover:bg-orange-500/10\r
transition-all\r
duration-300\r
`,children:o.jsx(Ul,{size:16,className:"text-slate-500"})}),o.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>D(Z),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
transition-all\r
duration-300\r
`,children:o.jsx(Vs,{size:16,className:"text-slate-500"})})]})}],[]),V=`
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
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
min-h-screen\r
bg-gradient-to-br\r
from-orange-50\r
via-white\r
to-amber-50\r
dark:from-[#140903]\r
dark:via-[#1A0B04]\r
dark:to-[#020617]\r
transition-colors\r
duration-500\r
`,children:[o.jsx(Tn,{title:"Store Access Control",subtitle:"Manage personnel authorized to oversee local hub operations"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-3},className:`${V} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Admins"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:W.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(ji,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${V} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Active Access"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:W.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${V} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Suspended"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:W.suspended})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-rose-500/10\r
text-rose-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Pn,{size:24})})]})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${V} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{children:[o.jsxs("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Ii,{size:18,className:"text-orange-500"}),"Store Authority Matrix"]}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Live overview of all administrative operators"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
flex-col\r
sm:flex-row\r
w-full\r
sm:w-auto\r
`,children:[o.jsxs("div",{className:"relative w-full sm:w-72",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{className:`\r
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
focus-visible:ring-orange-500/20\r
`,placeholder:"Search administrators...",value:c,onChange:$=>u($.target.value)})]}),o.jsxs(ne,{onClick:()=>h(!0),className:`\r
h-11\r
rounded-2xl\r
px-5\r
font-bold\r
gap-2\r
bg-orange-600\r
hover:bg-orange-700\r
shadow-lg\r
shadow-orange-500/20\r
transition-all\r
duration-500\r
hover:scale-[1.02]\r
w-full\r
sm:w-auto\r
`,children:[o.jsx(Xk,{size:18}),"Add Store Admin"]})]})]}),o.jsx("div",{className:"p-4",children:t?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:X,data:O})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(R-1)*La+1," - ",Math.min(R*La,A.length)," ","of"," ",A.length]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:R===1,onClick:()=>z($=>$-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx(Vl,{size:16})}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-orange-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-orange-500/20\r
`,children:[R," / ",M||1]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:R===M||M===0,onClick:()=>z($=>$+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx($l,{size:16})})]})]})]})]})]}),f&&o.jsx(kn,{isOpen:f,onClose:()=>h(!1),title:"Initialize Store Administrator",size:"lg",children:o.jsxs("form",{onSubmit:_,className:"space-y-6 py-2",children:[o.jsxs("div",{className:`\r
border\r
border-dashed\r
border-orange-200\r
dark:border-orange-900/40\r
rounded-3xl\r
p-5\r
bg-orange-50/60\r
dark:bg-orange-950/10\r
space-y-4\r
`,children:[o.jsx(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-orange-600\r
font-black\r
`,children:"Target Store Hub"}),o.jsxs(wt,{value:I.storeId,onValueChange:$=>F({...I,storeId:$}),children:[o.jsx(mt,{className:"rounded-2xl h-11",children:o.jsx(St,{placeholder:"Select store for management"})}),o.jsx(gt,{children:a.map($=>o.jsx(_e,{value:$.id,children:$.name},$.id))})]})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Full Name"}),o.jsxs("div",{className:"relative",children:[o.jsx(vt,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{className:"pl-10 h-11 rounded-2xl",placeholder:"e.g. Usman Ali",value:I.fullName,onChange:$=>F({...I,fullName:$.target.value}),required:!0})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Phone Number"}),o.jsxs("div",{className:"relative",children:[o.jsx(xl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{className:"pl-10 h-11 rounded-2xl",placeholder:"03001234567",value:I.phone,onChange:$=>F({...I,phone:$.target.value}),required:!0})]})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Email Address"}),o.jsxs("div",{className:"relative",children:[o.jsx(vl,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{className:"pl-10 h-11 rounded-2xl",type:"email",placeholder:"store@barqi.pk",value:I.email,onChange:$=>F({...I,email:$.target.value}),required:!0})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Temporary Password"}),o.jsxs("div",{className:"relative",children:[o.jsx(Bu,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{className:"pl-10 h-11 rounded-2xl",type:"password",placeholder:"••••••••",value:I.password,onChange:$=>F({...I,password:$.target.value}),required:!0})]}),o.jsx("p",{className:`\r
text-[11px]\r
text-slate-400\r
italic\r
`,children:"User will be prompted to change password after first login."})]}),o.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx(ne,{type:"button",variant:"ghost",onClick:()=>h(!1),className:"rounded-2xl",children:"Cancel"}),o.jsx(ne,{disabled:p,type:"submit",className:`\r
min-w-[160px]\r
rounded-2xl\r
bg-orange-600\r
hover:bg-orange-700\r
shadow-lg\r
shadow-orange-500/20\r
`,children:p?o.jsx(fn,{className:"animate-spin"}):"Create Administrator"})]})]})}),y&&g&&o.jsx(kn,{isOpen:y,onClose:()=>{b(!1),v(null)},title:"Administrator Detail",size:"md",children:o.jsxs("div",{className:"space-y-5 py-2",children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
size-16\r
rounded-3xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
font-black\r
text-2xl\r
uppercase\r
shadow-lg\r
shadow-orange-500/10\r
`,children:(J=g.fullName)==null?void 0:J.charAt(0)}),o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:g.fullName}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
`,children:g.email})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:`\r
bg-slate-50\r
dark:bg-slate-900/50\r
rounded-2xl\r
p-4\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
font-black\r
tracking-[0.2em]\r
text-slate-400\r
mb-2\r
`,children:"Phone"}),o.jsx("p",{className:"font-semibold",children:g.phone||"-"})]}),o.jsxs("div",{className:`\r
bg-slate-50\r
dark:bg-slate-900/50\r
rounded-2xl\r
p-4\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
font-black\r
tracking-[0.2em]\r
text-slate-400\r
mb-2\r
`,children:"Status"}),o.jsx(Xn,{status:g.status})]}),o.jsxs("div",{className:`\r
bg-slate-50\r
dark:bg-slate-900/50\r
rounded-2xl\r
p-4\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
font-black\r
tracking-[0.2em]\r
text-slate-400\r
mb-2\r
`,children:"Assigned Store"}),o.jsx("p",{className:"font-semibold",children:((ce=g.store)==null?void 0:ce.name)||"Unassigned"})]}),o.jsxs("div",{className:`\r
bg-slate-50\r
dark:bg-slate-900/50\r
rounded-2xl\r
p-4\r
`,children:[o.jsx("p",{className:`\r
text-[10px]\r
uppercase\r
font-black\r
tracking-[0.2em]\r
text-slate-400\r
mb-2\r
`,children:"Role"}),o.jsx("p",{className:"font-black uppercase",children:g.role})]})]}),o.jsx("div",{className:"flex justify-end pt-2",children:o.jsx(ne,{variant:"outline",onClick:()=>{b(!1),v(null)},className:"rounded-2xl",children:"Close"})})]})}),o.jsx(wr,{isOpen:x,onClose:()=>{w(!1),v(null)},onConfirm:G,title:(g==null?void 0:g.status)==="ACTIVE"?"Suspend Admin":"Activate Admin",message:`Are you sure you want to ${(g==null?void 0:g.status)==="ACTIVE"?"suspend":"activate"} ${g==null?void 0:g.fullName}?`,loading:S}),o.jsx(wr,{isOpen:j,onClose:()=>{C(!1),v(null)},onConfirm:P,title:"Remove Store Admin",message:`Are you sure you want to permanently remove ${g==null?void 0:g.fullName} as store admin?`,loading:E})]})},mU=()=>{if(!Xx)throw new Error("Missing env var: VITE_BASE_URL_FILE_UPLOAD");return Xx},LL=async e=>{const t=mU(),n=new FormData;e.forEach(r=>{n.append("files",r)});try{const r=await He.post(Di(t,"/files/upload"),n,{headers:{"Content-Type":"multipart/form-data"}});if(r.data.status==="success")return r.data.data.files.map(s=>({id:s.id,url:s.url,originalName:s.originalName,size:s.size,type:s.type}));throw new Error("Upload failed")}catch(r){throw console.error("File upload error:",r),r}},Ww={fullName:"",phone:"",vehicleType:"BIKE",franchiseId:"",cityId:"",email:"",password:""},gU=()=>{const e=qr(),{isFranchiseAdmin:t}=$s(),{riders:n,loading:r,fetchRiders:s,createRider:i}=N0(),{cities:a,fetchCities:l}=cf(),{franchises:c,myFranchise:u,loading:f,fetchFranchises:h,fetchMyFranchise:p}=uf(),m=t()?u?[u]:[]:c,[g,v]=d.useState(!1),[y,b]=d.useState(!1),[x,w]=d.useState(!1),[S,k]=d.useState(Ww),[j,C]=d.useState([]),[E,N]=d.useState("CNIC"),[L,T]=d.useState(""),[R,z]=d.useState(1),I=10,F=d.useRef(null);d.useEffect(()=>{s(),l({page:1,limit:100}),t()?p():h({page:1,limit:100})},[]);const A=d.useMemo(()=>{const P=(n==null?void 0:n.length)||0,X=(n==null?void 0:n.filter(J=>["ACTIVE","APPROVED"].includes(J.status)).length)||0,V=(n==null?void 0:n.filter(J=>J.status==="APPLIED").length)||0;return{total:P,active:X,pending:V}},[n]),W=()=>{const P=m==null?void 0:m[0];k({...Ww,franchiseId:(P==null?void 0:P.id)||"",cityId:(P==null?void 0:P.cityId)||""}),C([]),v(!0)},M=async P=>{const X=Array.from(P.target.files||[]);if(X.length){w(!0);try{const J=(await LL(X)).map(ce=>({documentType:E,documentUrl:ce.url,originalName:ce.originalName,id:crypto.randomUUID()}));C(ce=>[...ce,...J]),ze.success("Document attached")}catch{ze.error("Upload failed")}finally{w(!1),F.current&&(F.current.value="")}}},O=async P=>{if(P.preventDefault(),!S.franchiseId||!S.cityId)return ze.error("Franchise and City are required");b(!0);try{await i({...S,documents:j.map(({documentType:X,documentUrl:V})=>({documentType:X,documentUrl:V}))}),v(!1)}catch{}finally{b(!1)}},_=d.useMemo(()=>L?n.filter(P=>{var X,V,J;return((X=P.fullName)==null?void 0:X.toLowerCase().includes(L.toLowerCase()))||((V=P.phone)==null?void 0:V.toLowerCase().includes(L.toLowerCase()))||((J=P.email)==null?void 0:J.toLowerCase().includes(L.toLowerCase()))}):n,[n,L]),U=Math.ceil(_.length/I),q=d.useMemo(()=>{const P=(R-1)*I;return _.slice(P,P+I)},[_,R]),G=d.useMemo(()=>[{key:"fullName",label:"Rider",render:(P,X)=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
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
`,children:P==null?void 0:P[0]}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:P}),o.jsx("div",{className:`\r
text-xs\r
text-slate-500\r
dark:text-slate-400\r
`,children:X.email})]})]})},{key:"phone",label:"Phone"},{key:"vehicleType",label:"Vehicle",render:P=>o.jsx("span",{className:`\r
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
`,children:P})},{key:"status",label:"Status",render:P=>o.jsx(Xn,{status:P})},{key:"actions",label:"",render:(P,X)=>o.jsx(ne,{size:"sm",variant:"ghost",onClick:()=>e(`/riders/${X.id}`),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
transition-all\r
duration-300\r
`,children:o.jsx(Ul,{size:16,className:"text-slate-500"})})}],[e]),D=`
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
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Fleet Operations",subtitle:"Manage your delivery personnel"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-8\r
space-y-8\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-emerald-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-3},className:`${D} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Fleet"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:A.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(ji,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${D} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Active Riders"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:A.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-3},className:`${D} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Pending Review"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:A.pending})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Pn,{size:24})})]})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${D} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:"Rider Command Stream"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"Live fleet personnel overview"})]}),o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-3\r
`,children:[o.jsxs("div",{className:"relative w-72",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{className:`\r
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
`,placeholder:"Search riders...",value:L,onChange:P=>T(P.target.value)})]}),o.jsxs(ne,{onClick:W,className:`\r
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
`,children:[o.jsx(Zo,{size:18}),"Initialize Rider"]})]})]}),o.jsx("div",{className:"p-4",children:r?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:G,data:q})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(R-1)*I+1," - ",Math.min(R*I,_.length)," ","of"," ",_.length]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:R===1,onClick:()=>z(P=>P-1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Prev"}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[R," / ",U]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:R===U,onClick:()=>z(P=>P+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:"Next"})]})]})]})]})]}),g&&o.jsx(kn,{isOpen:!0,onClose:()=>v(!1),title:"Create New Rider",size:"lg",children:o.jsxs("form",{onSubmit:O,className:"space-y-5",children:[o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Franchise"}),o.jsxs(wt,{value:S.franchiseId,onValueChange:P=>{const X=c.find(V=>V.id===P);k(V=>({...V,franchiseId:P,cityId:(X==null?void 0:X.cityId)||V.cityId}))},children:[o.jsx(mt,{className:"rounded-2xl h-11",children:o.jsx(St,{placeholder:"Select Franchise"})}),o.jsx(gt,{children:m.map(P=>o.jsx(_e,{value:P.id,children:P.name},P.id))})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"City"}),o.jsxs(wt,{value:S.cityId,onValueChange:P=>k(X=>({...X,cityId:P})),children:[o.jsx(mt,{className:"rounded-2xl h-11",children:o.jsx(St,{placeholder:"Select City"})}),o.jsx(gt,{children:a.map(P=>o.jsx(_e,{value:P.id,children:P.name},P.id))})]})]})]}),o.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[o.jsx(be,{className:"rounded-2xl h-11",placeholder:"Full Name",value:S.fullName,onChange:P=>k(X=>({...X,fullName:P.target.value}))}),o.jsx(be,{className:"rounded-2xl h-11",placeholder:"Phone Number",value:S.phone,onChange:P=>k(X=>({...X,phone:P.target.value}))})]}),o.jsxs("div",{className:"grid grid-cols-3 gap-4",children:[o.jsxs(wt,{value:S.vehicleType,onValueChange:P=>k(X=>({...X,vehicleType:P})),children:[o.jsx(mt,{className:"rounded-2xl h-11",children:o.jsx(St,{})}),o.jsxs(gt,{children:[o.jsx(_e,{value:"BIKE",children:"Bike"}),o.jsx(_e,{value:"MOTORBIKE",children:"Motorbike"}),o.jsx(_e,{value:"VAN",children:"Van"})]})]}),o.jsx(be,{className:"col-span-2 rounded-2xl h-11",type:"email",placeholder:"Email Address",value:S.email,onChange:P=>k(X=>({...X,email:P.target.value}))})]}),o.jsx(be,{className:"rounded-2xl h-11",type:"password",placeholder:"Account Password",value:S.password,onChange:P=>k(X=>({...X,password:P.target.value}))}),o.jsxs("div",{className:`\r
border\r
border-dashed\r
border-slate-300\r
dark:border-slate-700\r
rounded-3xl\r
p-5\r
bg-slate-50/70\r
dark:bg-slate-900/40\r
space-y-4\r
`,children:[o.jsx(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Rider Documents"}),o.jsxs("div",{className:"flex gap-3",children:[o.jsxs(wt,{value:E,onValueChange:N,children:[o.jsx(mt,{className:"w-[220px] rounded-2xl h-11",children:o.jsx(St,{})}),o.jsxs(gt,{children:[o.jsx(_e,{value:"CNIC",children:"CNIC"}),o.jsx(_e,{value:"DRIVING_LICENSE",children:"License"}),o.jsx(_e,{value:"VEHICLE_REGISTRATION",children:"Vehicle Reg"})]})]}),o.jsx(ne,{type:"button",variant:"outline",onClick:()=>F.current.click(),disabled:x,className:"rounded-2xl h-11",children:x?o.jsx(fn,{className:"animate-spin mr-2",size:15}):"Select File"}),o.jsx("input",{hidden:!0,ref:F,type:"file",onChange:M})]}),o.jsx("div",{className:"space-y-2",children:j.map(P=>o.jsxs(ee.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},className:`\r
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
`,children:[o.jsxs("span",{className:`\r
text-sm\r
font-medium\r
text-slate-700\r
dark:text-slate-300\r
`,children:[P.documentType,":"," ",o.jsx("span",{className:"text-slate-500",children:P.originalName})]}),o.jsx(Yo,{size:16,onClick:()=>C(X=>X.filter(V=>V.id!==P.id)),className:`\r
cursor-pointer\r
text-red-400\r
hover:text-red-500\r
transition-colors\r
`})]},P.id))})]}),o.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx(ne,{type:"button",variant:"ghost",onClick:()=>v(!1),className:"rounded-2xl",children:"Cancel"}),o.jsx(ne,{disabled:y,type:"submit",className:`\r
min-w-[140px]\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,children:y?o.jsx(fn,{className:"animate-spin"}):"Create Rider"})]})]})})]})},Ki="https://api.barqibazar.org/franchise/api",Pa={getAll:async(e=1,t=10)=>(await fe.get(`${Ki}/rider-docs`,{params:{page:e,limit:t}})).data,getByRiderId:async e=>(await fe.get(`${Ki}/rider-docs/${e}`)).data,getById:async e=>(await fe.get(`${Ki}/rider-docs/single/${e}`)).data,create:async e=>(await fe.post(`${Ki}/rider-docs`,e)).data,update:async(e,t)=>(await fe.patch(`${Ki}/rider-docs/${e}`,t)).data,delete:async e=>(await fe.delete(`${Ki}/rider-docs/${e}`)).data},vU=()=>{const[e,t]=d.useState([]),[n,r]=d.useState(!1),[s,i]=d.useState(null),[a,l]=d.useState({page:1,limit:10,total:0,totalPages:0,hasNext:!1,hasPrev:!1}),c=d.useCallback(async(m=1,g=10)=>{var v,y,b,x;r(!0),i(null);try{const w=await Pa.getAll(m,g),S=w.data||w;return t(S.items||[]),l(k=>{var j,C,E,N,L,T;return{page:((j=S.pagination)==null?void 0:j.page)||m,limit:((C=S.pagination)==null?void 0:C.limit)||g,total:((E=S.pagination)==null?void 0:E.total)||0,totalPages:((N=S.pagination)==null?void 0:N.totalPages)||0,hasNext:((L=S.pagination)==null?void 0:L.hasNext)||!1,hasPrev:((T=S.pagination)==null?void 0:T.hasPrev)||!1}}),S}catch(w){i(((y=(v=w.response)==null?void 0:v.data)==null?void 0:y.message)||"Failed to fetch documents"),ie({title:"Error",description:((x=(b=w.response)==null?void 0:b.data)==null?void 0:x.message)||"Failed to fetch documents",variant:"destructive"})}finally{r(!1)}},[]),u=d.useCallback(async m=>{var g,v,y,b;r(!0),i(null);try{const x=await Pa.getByRiderId(m),w=x.data||x;return t(w.items||[]),w}catch(x){i(((v=(g=x.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to fetch rider documents"),ie({title:"Error",description:((b=(y=x.response)==null?void 0:y.data)==null?void 0:b.message)||"Failed to fetch rider documents",variant:"destructive"})}finally{r(!1)}},[]);return{documents:e,loading:n,error:s,pagination:a,fetchDocuments:c,fetchDocumentsByRider:u,createDocument:async m=>{var g,v;r(!0);try{const y=await Pa.create(m);return ie({title:"Success",description:"Document created successfully"}),y}catch(y){const b=((v=(g=y.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to create document";throw ie({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}},updateDocument:async(m,g)=>{var v,y;r(!0);try{const b=await Pa.update(m,g);return await c(a.page,a.limit),ie({title:"Success",description:"Document updated successfully"}),b}catch(b){const x=((y=(v=b.response)==null?void 0:v.data)==null?void 0:y.message)||"Failed to update document";throw ie({title:"Error",description:x,variant:"destructive"}),new Error(x)}finally{r(!1)}},deleteDocument:async m=>{var g,v;r(!0);try{const y=await Pa.delete(m);return ie({title:"Success",description:"Document deleted successfully"}),y}catch(y){const b=((v=(g=y.response)==null?void 0:g.data)==null?void 0:v.message)||"Failed to delete document";throw ie({title:"Error",description:b,variant:"destructive"}),new Error(b)}finally{r(!1)}}}},xU=e0;function yU(){var O,_,U,q,G;const{id:e}=nj(),t=qr(),{isAdmin:n,isFranchiseAdmin:r}=$s(),s=n()||r(),{rider:i,fetchRider:a,updateRider:l,changeStatus:c}=N0(),{createDocument:u,deleteDocument:f}=vU(),h=d.useMemo(()=>He.create({baseURL:xU,headers:{Authorization:`Bearer ${localStorage.getItem("access_token")}`}}),[]),[p,m]=d.useState("info"),[g,v]=d.useState({fullName:"",phone:"",email:"",vehicleType:""}),[y,b]=d.useState("CNIC"),x=d.useRef(null),[w,S]=d.useState(null),[k,j]=d.useState(!1),[C,E]=d.useState(""),[N,L]=d.useState("ADMIN_TOPUP"),[T,R]=d.useState(!1),z=`
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
`,I=d.useCallback(async()=>{const D=await a(e);D&&v({fullName:D.fullName||"",phone:D.phone||"",email:D.email||"",vehicleType:D.vehicleType||""})},[e,a]),F=d.useCallback(async()=>{var D,P,X;j(!0);try{const V=await h.get(`/wallets/${e}?currency=PKR`);S((D=V.data)==null?void 0:D.data)}catch(V){if(((P=V.response)==null?void 0:P.status)===404){const J=await h.post("/wallets",{ownerId:e,ownerType:"RIDER",currency:"PKR"});S((X=J.data)==null?void 0:X.data),ze.success("New wallet initialized for rider")}else ze.error("Financial records unavailable")}finally{j(!1)}},[e,h]);d.useEffect(()=>{I(),F()},[I,F]);const A=async()=>{if(!C||parseFloat(C)<=0)return ze.error("Enter valid amount");R(!0);try{await h.post(`/wallets/owner/${e}/credit`,{amount:parseFloat(C),reason:N,currency:"PKR",referenceId:`REF-${Date.now()}`,idempotencyKey:`credit-${e}-${Date.now()}`}),ze.success(`Credited PKR ${C}`),E(""),F()}catch{ze.error("Transaction failed")}finally{R(!1)}},W=async D=>{const P=Array.from(D.target.files||[]);if(P.length)try{const X=await LL(P);await u({riderId:e,documentType:y,documentUrl:X[0].url}),ze.success("Document uploaded"),I()}catch{ze.error("Upload failed")}},M=Math.min(w!=null&&w.balance?w.balance/1e3:0,100);return o.jsx(Mn,{children:o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Rider Intelligence",subtitle:`Live Operational Profile • ${e==null?void 0:e.slice(0,8)}`}),o.jsxs(ee.div,{initial:{opacity:0,y:20,filter:"blur(10px)"},animate:{opacity:1,y:0,filter:"blur(0px)"},transition:{duration:.7},className:`\r
relative\r
overflow-hidden\r
p-6\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsx(ee.div,{whileHover:{y:-2},className:`
${z}
rounded-[2.5rem]
overflow-hidden
`,children:o.jsxs("div",{className:`\r
p-8\r
flex\r
flex-col\r
lg:flex-row\r
justify-between\r
gap-8\r
`,children:[o.jsxs("div",{className:"flex items-start gap-5",children:[o.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>t("/riders"),className:`\r
rounded-2xl\r
hover:bg-slate-100\r
dark:hover:bg-slate-800\r
`,children:o.jsx(Wk,{size:20})}),o.jsx("div",{className:`\r
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
`,children:(O=g.fullName)==null?void 0:O[0]}),o.jsxs("div",{className:"space-y-3",children:[o.jsxs("div",{children:[o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:g.fullName||"Loading..."}),o.jsxs("div",{className:"flex items-center gap-3 mt-2",children:[o.jsx(Xn,{status:i==null?void 0:i.status}),o.jsx("span",{className:`\r
text-xs\r
uppercase\r
font-black\r
tracking-[0.2em]\r
text-emerald-500\r
`,children:"Fleet Active"})]})]}),o.jsxs("div",{className:`\r
flex\r
flex-wrap\r
gap-4\r
text-sm\r
text-slate-600\r
dark:text-slate-400\r
`,children:[o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(xl,{size:14}),g.phone]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(vl,{size:14}),g.email]}),o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(gl,{size:14}),g.vehicleType]})]})]})]}),o.jsxs("div",{className:`\r
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
`,children:[o.jsx("div",{className:`\r
absolute\r
top-[-30%]\r
right-[-20%]\r
w-56\r
h-56\r
bg-emerald-500/10\r
rounded-full\r
blur-[100px]\r
`}),o.jsxs("div",{className:"relative z-10",children:[o.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[o.jsx(Ii,{size:14,className:"text-emerald-400"}),o.jsx("span",{className:`\r
text-[10px]\r
uppercase\r
tracking-[0.3em]\r
font-black\r
text-emerald-400\r
`,children:"Financial Node"})]}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs text-slate-400",children:"Wallet Balance"}),o.jsx("h3",{className:"text-3xl font-black mt-2",children:k?"...":`PKR ${((_=w==null?void 0:w.balance)==null?void 0:_.toLocaleString())||0}`})]}),o.jsx(xo,{className:"text-emerald-400",size:32})]}),o.jsxs("div",{className:"mt-6 space-y-2",children:[o.jsxs("div",{className:`\r
flex\r
justify-between\r
text-[10px]\r
uppercase\r
tracking-widest\r
font-black\r
text-slate-400\r
`,children:[o.jsx("span",{children:"Wallet Health"}),o.jsxs("span",{children:[M,"%"]})]}),o.jsx(Li,{value:M,className:`\r
h-1.5\r
bg-slate-800\r
`})]})]})]})]})}),o.jsxs(NL,{value:p,onValueChange:m,className:"space-y-8",children:[o.jsxs(U0,{className:`\r
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
`,children:[o.jsx(bs,{value:"info",children:"Info"}),o.jsx(bs,{value:"wallet",children:"Wallet"}),o.jsx(bs,{value:"docs",children:"Documents"}),s&&o.jsx(bs,{value:"admin",children:"Admin"})]}),o.jsx(ws,{value:"info",children:o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},className:`
${z}
rounded-[2.5rem]
p-8
`,children:[o.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:o.jsx(MR,{size:20})}),o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Rider Identity"}),o.jsx("p",{className:"text-sm text-slate-500",children:"Operational profile information"})]})]}),o.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[o.jsxs("div",{className:"space-y-5",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Full Name"}),o.jsx(be,{value:g.fullName,onChange:D=>v(P=>({...P,fullName:D.target.value})),className:`\r
h-12\r
rounded-2xl\r
`})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Vehicle Type"}),o.jsxs(wt,{value:g.vehicleType,onValueChange:D=>v(P=>({...P,vehicleType:D})),children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{})}),o.jsxs(gt,{children:[o.jsx(_e,{value:"BIKE",children:"Bike"}),o.jsx(_e,{value:"MOTORBIKE",children:"Motorbike"}),o.jsx(_e,{value:"CAR",children:"Car"}),o.jsx(_e,{value:"VAN",children:"Van"})]})]})]})]}),o.jsxs("div",{className:"space-y-5",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Phone"}),o.jsx(be,{disabled:!0,value:g.phone,className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
`})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Email"}),o.jsx(be,{disabled:!0,value:g.email,className:`\r
h-12\r
rounded-2xl\r
bg-slate-100\r
dark:bg-slate-800\r
`})]})]})]}),s&&o.jsx("div",{className:"mt-8",children:o.jsx(ne,{onClick:()=>l(e,g),className:`\r
h-12\r
px-8\r
rounded-2xl\r
font-bold\r
`,children:"Update Rider"})})]})}),o.jsx(ws,{value:"wallet",children:o.jsxs("div",{className:"space-y-8",children:[o.jsxs("div",{className:"grid lg:grid-cols-3 gap-6",children:[o.jsxs(ee.div,{whileHover:{y:-3},className:`
${z}
rounded-[2.5rem]
p-8
`,children:[o.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
`,children:o.jsx(xo,{size:20})}),o.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Wallet Stats"})]}),o.jsxs("h2",{className:`\r
text-4xl\r
font-black\r
tracking-tight\r
text-slate-800\r
dark:text-white\r
`,children:["Rs."," ",((U=w==null?void 0:w.balance)==null?void 0:U.toLocaleString())||0]}),o.jsxs("div",{className:"mt-6 space-y-3",children:[o.jsxs("div",{className:`\r
flex\r
justify-between\r
text-sm\r
`,children:[o.jsx("span",{className:"text-slate-500",children:"Status"}),o.jsx("span",{className:"font-bold text-emerald-500",children:(w==null?void 0:w.status)||"ACTIVE"})]}),o.jsxs("div",{className:`\r
flex\r
justify-between\r
text-sm\r
`,children:[o.jsx("span",{className:"text-slate-500",children:"Currency"}),o.jsx("span",{className:"font-bold",children:"PKR"})]})]})]}),s&&o.jsxs(ee.div,{whileHover:{y:-3},className:`
${z}
lg:col-span-2
rounded-[2.5rem]
p-8
`,children:[o.jsxs("div",{className:"flex items-center gap-3 mb-8",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:o.jsx(Pn,{size:20})}),o.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Credit Wallet"})]}),o.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Amount"}),o.jsx(be,{type:"number",value:C,onChange:D=>E(D.target.value),placeholder:"0.00",className:`\r
h-12\r
rounded-2xl\r
`})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{children:"Reason"}),o.jsxs(wt,{value:N,onValueChange:L,children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{})}),o.jsxs(gt,{children:[o.jsx(_e,{value:"ADMIN_TOPUP",children:"Admin Top-up"}),o.jsx(_e,{value:"BONUS",children:"Bonus"}),o.jsx(_e,{value:"CORRECTION",children:"Correction"}),o.jsx(_e,{value:"REFERRAL",children:"Referral"})]})]})]}),o.jsx("div",{className:"flex items-end",children:o.jsx(ne,{onClick:A,disabled:T,className:`\r
w-full\r
h-12\r
rounded-2xl\r
font-bold\r
`,children:T?o.jsx(fn,{className:"animate-spin"}):"Credit Wallet"})})]})]})]}),o.jsxs(ee.div,{whileHover:{y:-3},className:`
${z}
rounded-[2.5rem]
overflow-hidden
`,children:[o.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
justify-between\r
items-center\r
`,children:[o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-orange-500/10\r
text-orange-500\r
`,children:o.jsx(Yk,{size:18})}),o.jsxs("div",{children:[o.jsx("h3",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Transaction Ledger"}),o.jsx("p",{className:"text-xs text-slate-500",children:"Latest financial activity"})]})]}),o.jsx(ne,{variant:"ghost",onClick:F,className:`\r
rounded-2xl\r
`,children:"Refresh"})]}),o.jsx("div",{className:"divide-y divide-slate-100 dark:divide-slate-800",children:(q=w==null?void 0:w.transactions)!=null&&q.length?w.transactions.map(D=>o.jsxs(ee.div,{whileHover:{x:4},className:`\r
p-5\r
flex\r
items-center\r
justify-between\r
hover:bg-slate-50\r
dark:hover:bg-slate-900/40\r
transition-all\r
duration-500\r
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`
p-3
rounded-2xl
${D.type==="CREDIT"?"bg-emerald-500/10 text-emerald-500":"bg-red-500/10 text-red-500"}
`,children:D.type==="CREDIT"?o.jsx(Ap,{size:20}):o.jsx(qk,{size:20})}),o.jsxs("div",{children:[o.jsx("p",{className:`\r
font-bold\r
text-slate-800\r
dark:text-white\r
`,children:D.reason.replace(/_/g," ")}),o.jsx("p",{className:"text-xs text-slate-500 mt-1",children:new Date(D.createdAt).toLocaleString()})]})]}),o.jsxs("div",{className:"text-right",children:[o.jsxs("p",{className:`
font-black
${D.type==="CREDIT"?"text-emerald-500":"text-red-500"}
`,children:[D.type==="CREDIT"?"+":"-"," ",D.amount.toLocaleString()]}),o.jsxs("p",{className:"text-xs text-slate-500 font-mono",children:["REF:"," ",D.id.slice(0,8)]})]})]},D.id)):o.jsx("div",{className:`\r
p-16\r
text-center\r
text-slate-500\r
`,children:"No transaction history"})})]})]})}),o.jsx(ws,{value:"docs",children:o.jsxs(ee.div,{whileHover:{y:-3},className:`
${z}
rounded-[2.5rem]
overflow-hidden
`,children:[o.jsxs("div",{className:`\r
p-6\r
border-b\r
border-slate-200\r
dark:border-slate-800\r
flex\r
justify-between\r
items-center\r
`,children:[o.jsxs("div",{children:[o.jsx("h3",{className:`\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:"Compliance Documents"}),o.jsx("p",{className:"text-xs text-slate-500 mt-1",children:"Rider verification records"})]}),o.jsxs("div",{className:"flex gap-3",children:[o.jsxs(wt,{value:y,onValueChange:b,children:[o.jsx(mt,{className:`\r
w-40\r
h-10\r
rounded-2xl\r
`,children:o.jsx(St,{})}),o.jsx(gt,{children:["CNIC","LICENSE","VEHICLE","REGISTRATION"].map(D=>o.jsx(_e,{value:D,children:D},D))})]}),o.jsxs(ne,{onClick:()=>x.current.click(),className:`\r
rounded-2xl\r
`,children:[o.jsx(TR,{size:14,className:"mr-2"}),"Upload"]}),o.jsx("input",{hidden:!0,ref:x,type:"file",onChange:W})]})]}),o.jsx("div",{className:"p-6 space-y-3",children:(G=i==null?void 0:i.documents)!=null&&G.length?i.documents.map(D=>o.jsxs(ee.div,{whileHover:{scale:1.01},className:`\r
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
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
`,children:o.jsx(mR,{size:18})}),o.jsxs("div",{children:[o.jsx("p",{className:`\r
font-bold\r
text-slate-800\r
dark:text-white\r
`,children:D.documentType}),o.jsx("a",{href:D.documentUrl,target:"_blank",rel:"noreferrer",className:`\r
text-xs\r
text-indigo-500\r
hover:underline\r
`,children:"View Attachment"})]})]}),o.jsx(ne,{variant:"ghost",size:"icon",onClick:()=>f(D.id),className:`\r
rounded-2xl\r
hover:bg-red-500/10\r
`,children:o.jsx(Vs,{size:16,className:"text-red-500"})})]},D.id)):o.jsx("div",{className:`\r
p-16\r
text-center\r
text-slate-500\r
`,children:"No documents uploaded"})})]})}),o.jsx(ws,{value:"admin",children:o.jsxs(ee.div,{whileHover:{y:-3},className:`\r
rounded-[2.5rem]\r
overflow-hidden\r
border\r
border-red-200\r
dark:border-red-900/30\r
bg-white\r
dark:bg-slate-900/70\r
shadow-[0_10px_40px_rgba(0,0,0,0.06)]\r
`,children:[o.jsx("div",{className:`\r
p-6\r
border-b\r
border-red-100\r
dark:border-red-900/20\r
bg-red-50/70\r
dark:bg-red-950/10\r
`,children:o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-red-500/10\r
text-red-500\r
`,children:o.jsx(vt,{size:18})}),o.jsxs("div",{children:[o.jsx("h3",{className:"font-black text-red-500",children:"System Controls"}),o.jsx("p",{className:"text-xs text-red-400 mt-1",children:"Administrative rider management"})]})]})}),o.jsx("div",{className:"p-8",children:o.jsxs("div",{className:"flex flex-wrap gap-4",children:[o.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
border-emerald-200\r
text-emerald-500\r
hover:bg-emerald-50\r
hover:text-emerald-500\r
`,onClick:()=>c(e,"ACTIVE","Admin Action"),children:"Set Active"}),o.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
border-yellow-200\r
text-yellow-500\r
hover:text-yellow-500\r
hover:bg-yellow-50\r
`,onClick:()=>c(e,"SUSPENDED","Admin Action"),children:"Suspend"}),o.jsx(ne,{variant:"outline",className:`\r
rounded-2xl\r
border-red-200\r
text-red-500\r
hover:text-red-500\r
hover:bg-red-50\r
`,onClick:()=>c(e,"BLOCKED","Admin Action"),children:"Block Account"})]})})]})})]})]})]})})}var vf="Switch",[bU,$U]=Sr(vf),[wU,SU]=bU(vf),PL=d.forwardRef((e,t)=>{const{__scopeSwitch:n,name:r,checked:s,defaultChecked:i,required:a,disabled:l,value:c="on",onCheckedChange:u,form:f,...h}=e,[p,m]=d.useState(null),g=Ve(t,w=>m(w)),v=d.useRef(!1),y=p?f||!!p.closest("form"):!0,[b,x]=ki({prop:s,defaultProp:i??!1,onChange:u,caller:vf});return o.jsxs(wU,{scope:n,checked:b,disabled:l,children:[o.jsx(we.button,{type:"button",role:"switch","aria-checked":b,"aria-required":a,"data-state":AL(b),"data-disabled":l?"":void 0,disabled:l,value:c,...h,ref:g,onClick:ge(e.onClick,w=>{x(S=>!S),y&&(v.current=w.isPropagationStopped(),v.current||w.stopPropagation())})}),y&&o.jsx(RL,{control:p,bubbles:!v.current,name:r,value:c,checked:b,required:a,disabled:l,form:f,style:{transform:"translateX(-100%)"}})]})});PL.displayName=vf;var TL="SwitchThumb",ML=d.forwardRef((e,t)=>{const{__scopeSwitch:n,...r}=e,s=SU(TL,n);return o.jsx(we.span,{"data-state":AL(s.checked),"data-disabled":s.disabled?"":void 0,...r,ref:t})});ML.displayName=TL;var kU="SwitchBubbleInput",RL=d.forwardRef(({__scopeSwitch:e,control:t,checked:n,bubbles:r=!0,...s},i)=>{const a=d.useRef(null),l=Ve(a,i),c=RE(n),u=wC(t);return d.useEffect(()=>{const f=a.current;if(!f)return;const h=window.HTMLInputElement.prototype,m=Object.getOwnPropertyDescriptor(h,"checked").set;if(c!==n&&m){const g=new Event("click",{bubbles:r});m.call(f,n),f.dispatchEvent(g)}},[c,n,r]),o.jsx("input",{type:"checkbox","aria-hidden":!0,defaultChecked:n,...s,tabIndex:-1,ref:l,style:{...s.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}})});RL.displayName=kU;function AL(e){return e?"checked":"unchecked"}var OL=PL,CU=ML;const Mm=d.forwardRef(({className:e,...t},n)=>o.jsx(OL,{className:de("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",e),...t,ref:n,children:o.jsx(CU,{className:de("pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0")})}));Mm.displayName=OL.displayName;const Ah=e=>Di(Yl,e),mu={getAll:async(e=1,t=100)=>(await fe.get(Ah("/roles"),{params:{page:e,limit:t}})).data,create:async e=>(await fe.post(Ah("/roles"),e)).data,delete:async e=>(await fe.delete(Ah(`/roles/${e}`))).data},Kw=["GLOBAL","CITY","FRANCHISE","STORE"],Oh={email:"",password:"",fullName:"",phone:""},Ih={roleCode:"",scopeType:"GLOBAL",scopeId:""};function jU(){var gn;const[e,t]=d.useState([]),[n,r]=d.useState([]),[s,i]=d.useState(!0),[a,l]=d.useState({total:0,page:1,limit:10,totalPages:1}),[c,u]=d.useState(1),[f]=d.useState(10),[h,p]=d.useState(!1),[m,g]=d.useState(!1),[v,y]=d.useState(!1),[b,x]=d.useState(Oh),[w,S]=d.useState(Ih),[k,j]=d.useState(!1),[C,E]=d.useState(null),[N,L]=d.useState(!1),[T,R]=d.useState(null),[z,I]=d.useState(""),[F,A]=d.useState(!1),[W,M]=d.useState(!1),[O,_]=d.useState(null),[U,q]=d.useState("GLOBAL"),[G,D]=d.useState(""),[P,X]=d.useState(!1),[V,J]=d.useState([]),[ce,$]=d.useState(!1);d.useEffect(()=>{const Q=setTimeout(()=>{p(!0)},250);return()=>clearTimeout(Q)},[]);const Z=d.useCallback(async Q=>{var pe;if(Q==="GLOBAL"){J([]);return}$(!0),J([]);try{let Te=[];if(Q==="CITY"){const We=await Ia.getAll(1,100),Ge=(We==null?void 0:We.data)||We;Te=(Ge==null?void 0:Ge.items)||[]}else if(Q==="FRANCHISE"){const We=await qi.getAll(1,100),Ge=(We==null?void 0:We.data)||We;Te=(Ge==null?void 0:Ge.items)||[]}else if(Q==="STORE"){const We=await fe.get(`${Zl}/stores`,{params:{page:1,limit:100}}),Ge=((pe=We==null?void 0:We.data)==null?void 0:pe.data)||(We==null?void 0:We.data)||{};Te=(Ge==null?void 0:Ge.items)||[]}J(Te)}catch{J([])}finally{$(!1)}},[]),H=d.useCallback(async()=>{try{const Q=await mu.getAll(),pe=(Q==null?void 0:Q.data)||Q;r((pe==null?void 0:pe.items)||[])}catch{ie({title:"Failed to load roles",variant:"destructive"})}},[]),se=d.useCallback(async()=>{i(!0);try{const Q=await ar.getAll(c,f),pe=(Q==null?void 0:Q.data)||Q;t((pe==null?void 0:pe.items)||[]);const Te=(pe==null?void 0:pe.meta)||(pe==null?void 0:pe.pagination)||{};l({total:Te.total||0,page:Te.page||c,limit:Te.limit||f,totalPages:Te.totalPages||1})}catch{ie({title:"Failed to load users",variant:"destructive"})}finally{i(!1)}},[c,f]);d.useEffect(()=>{se(),H()},[se]);const he=d.useMemo(()=>{const Q=a.total||0,pe=e.filter(Ge=>Ge.isActive).length||0,Te=e.filter(Ge=>!Ge.isActive).length||0,We=Q>0?Math.round(pe/Q*100):0;return{total:Q,active:pe,inactive:Te,efficiency:We}},[e,a]),oe=async Q=>{var pe,Te,We,Ge,nr;if(Q.preventDefault(),v){if(!w.roleCode){ie({title:"Role is required for staff user",variant:"destructive"});return}if(w.scopeType!=="GLOBAL"&&!w.scopeId){ie({title:"Scope ID required for non-global scope",variant:"destructive"});return}}j(!0);try{v?await ar.createStaff({...b,...w,phone:b.phone||void 0,scopeId:w.scopeType==="GLOBAL"?void 0:w.scopeId}):await ar.create({...b,phone:b.phone||void 0}),ie({title:"User created successfully"}),g(!1),x(Oh),S(Ih),y(!1),se()}catch(jr){const Er=((We=(Te=(pe=jr.response)==null?void 0:pe.data)==null?void 0:Te.data)==null?void 0:We.message)||((nr=(Ge=jr.response)==null?void 0:Ge.data)==null?void 0:nr.message)||"Failed to create user";ie({title:Array.isArray(Er)?Er.join(", "):Er,variant:"destructive"})}finally{j(!1)}},Oe=async Q=>{try{await ar.updateStatus(Q.id,!Q.isActive),ie({title:`User ${Q.isActive?"deactivated":"activated"}`}),se()}catch{ie({title:"Failed to update status",variant:"destructive"})}},ct=Q=>{R(Q),I(""),L(!0)},It=async()=>{if(!(!T||!z)){A(!0);try{await ar.assignRole(T.id,z),ie({title:"Role assigned successfully"}),L(!1),R(null),se()}catch{ie({title:"Failed to assign role",variant:"destructive"})}finally{A(!1)}}},Nt=async Q=>{_(Q),q("GLOBAL"),D(""),M(!0);try{const pe=await ar.getScope(Q.id),Te=(pe==null?void 0:pe.data)||pe;Te!=null&&Te.scopeType&&(q(Te.scopeType),D(Te.scopeId||""),Z(Te.scopeType))}catch{}},ve=async()=>{if(O){X(!0);try{await ar.assignScope(O.id,U,G),ie({title:"Scope assigned successfully"}),M(!1),_(null)}catch{ie({title:"Failed to assign scope",variant:"destructive"})}finally{X(!1)}}},Pe=async Q=>{try{await ar.removeScope(Q),ie({title:"Scope removed"}),M(!1),_(null)}catch{ie({title:"Failed to remove scope",variant:"destructive"})}},$e=[{key:"fullName",label:"Identity",render:(Q,pe)=>o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
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
`,children:(Q==null?void 0:Q.split(" ").map(Te=>Te[0]).join("").slice(0,2))||"U"}),o.jsxs("div",{children:[o.jsx("p",{className:"font-black text-slate-700 dark:text-white tracking-tight",children:Q}),o.jsx("p",{className:"text-[10px] uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-bold",children:pe.email})]})]})},{key:"role",label:"Role Access",render:Q=>Q?o.jsxs("div",{className:`\r
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
`,children:[o.jsx(vt,{size:12}),Q]}):o.jsx("span",{className:"text-xs text-slate-400",children:"—"})},{key:"scopeType",label:"Scope Layer",render:Q=>Q?o.jsxs("div",{className:`\r
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
`,children:[o.jsx(zd,{size:12}),Q]}):o.jsx("span",{className:"text-xs text-slate-400",children:"—"})},{key:"isActive",label:"Network Status",render:(Q,pe)=>o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(Mm,{checked:!!Q,onCheckedChange:()=>Oe(pe)}),o.jsx(Xn,{status:Q?"ACTIVE":"INACTIVE"})]})},{key:"actions",label:"Controls",render:(Q,pe)=>o.jsxs("div",{className:"flex items-center gap-2",children:[o.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>E(pe),className:`\r
rounded-xl\r
hover:bg-indigo-500/10\r
hover:text-indigo-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Ul,{size:15})}),o.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>ct(pe),className:`\r
rounded-xl\r
hover:bg-blue-500/10\r
hover:text-blue-500\r
transition-all\r
duration-300\r
`,children:o.jsx(Vu,{size:15})}),o.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>Nt(pe),className:`\r
rounded-xl\r
hover:bg-orange-500/10\r
hover:text-orange-500\r
transition-all\r
duration-300\r
`,children:o.jsx(NR,{size:15})})]})}],De=`
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
`;return h?o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"User Management",subtitle:"Provision and manage system-wide user accounts and permissions"}),o.jsxs(ee.div,{initial:{opacity:0,scale:1.02,filter:"blur(12px)"},animate:{opacity:1,scale:1,filter:"blur(0px)"},transition:{duration:1,ease:[.22,1,.36,1]},className:`\r
relative\r
overflow-hidden\r
p-8\r
max-w-[1600px]\r
mx-auto\r
space-y-8\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute inset-0\r
bg-[radial-gradient(#0f172a12_1px,transparent_1px)]\r
dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)]\r
[background-size:24px_24px]\r
opacity-40\r
`}),o.jsx(ee.div,{animate:{y:[0,-30,0],x:[0,20,0]},transition:{duration:10,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-indigo-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx(ee.div,{animate:{y:[0,40,0],x:[0,-20,0]},transition:{duration:14,repeat:1/0,ease:"easeInOut"},className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[500px]\r
h-[500px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-4},className:`${De} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Total Users"}),o.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:he.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
flex\r
items-center\r
justify-center\r
text-indigo-500\r
`,children:o.jsx(ji,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${De} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black",children:"Active Accounts"}),o.jsx("h3",{className:"text-3xl font-black mt-2 text-slate-800 dark:text-white",children:he.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
flex\r
items-center\r
justify-center\r
text-emerald-500\r
`,children:o.jsx(vt,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${De} rounded-[2rem] p-6`,children:o.jsx("div",{className:"flex items-center justify-between",children:o.jsxs("div",{className:"flex-1",children:[o.jsx("p",{className:"text-xs uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400 font-black mb-3",children:"System Efficiency"}),o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("span",{className:"text-3xl font-black text-slate-800 dark:text-white",children:[he.efficiency,"%"]}),o.jsx(Pn,{size:18,className:"text-indigo-500"})]})]})})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:40},animate:{opacity:1,y:0},transition:{duration:.8},whileHover:{y:-2},className:`${De} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
p-8\r
border-b\r
border-white/10\r
flex\r
justify-between\r
items-center\r
bg-slate-50\r
dark:bg-slate-900/10\r
backdrop-blur-xl\r
`,children:[o.jsxs("div",{className:"flex items-center gap-4",children:[o.jsx("div",{className:`\r
p-3\r
rounded-2xl\r
bg-gradient-to-br\r
from-indigo-500\r
to-indigo-700\r
text-white\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:o.jsx(Kk,{size:20})}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-lg font-black tracking-tight text-slate-800 dark:text-white",children:"User Directory"}),o.jsx("p",{className:"text-xs text-slate-600 dark:text-slate-400",children:"Manage authenticated platform operators"})]})]}),o.jsxs(ne,{onClick:()=>{g(!0),x(Oh),S(Ih),y(!1)},className:`\r
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
`,children:[o.jsx(Xk,{size:18,className:"mr-2"}),"Create User",o.jsx(Fd,{size:16,className:"ml-2"})]})]}),o.jsx("div",{className:"overflow-hidden",children:s?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:$e,data:e,emptyMessage:"No users found"})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",(a.page-1)*a.limit+1," - ",Math.min(a.page*a.limit,a.total)," ","of"," ",a.total]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:a.page<=1,onClick:()=>u(Q=>Math.max(1,Q-1)),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx(Vl,{size:14})}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-indigo-600\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-indigo-500/20\r
`,children:[a.page," / ",a.totalPages]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:a.page>=a.totalPages,onClick:()=>u(Q=>Q+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx($l,{size:14})})]})]})]})]})]}),o.jsx(kn,{isOpen:m,onClose:()=>g(!1),title:"Initialize User Account",children:o.jsx("div",{className:`\r
max-h-[85vh]\r
overflow-y-auto\r
pr-2\r
`,children:o.jsxs("form",{onSubmit:oe,className:"space-y-5 py-4",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(vt,{size:14}),"Full Name"]}),o.jsxs("div",{className:"relative",children:[o.jsx(vt,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"Ali Khan",value:b.fullName,onChange:Q=>x({...b,fullName:Q.target.value}),required:!0})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(vl,{size:14}),"Email Address"]}),o.jsxs("div",{className:"relative",children:[o.jsx(vl,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{type:"email",className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"admin@barqi.pk",value:b.email,onChange:Q=>x({...b,email:Q.target.value}),required:!0})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(xl,{size:14}),"Contact Number"]}),o.jsxs("div",{className:"relative",children:[o.jsx(xl,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"03001234567",value:b.phone,onChange:Q=>x({...b,phone:Q.target.value})})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsxs(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
flex\r
items-center\r
gap-2\r
`,children:[o.jsx(Bu,{size:14}),"Password"]}),o.jsxs("div",{className:"relative",children:[o.jsx(Bu,{className:`\r
absolute\r
left-4\r
top-1/2\r
-translate-y-1/2\r
text-slate-400\r
size-4\r
`}),o.jsx(be,{type:"password",className:`\r
h-12\r
pl-11\r
rounded-2xl\r
border-slate-200\r
dark:border-slate-700\r
focus-visible:ring-indigo-500\r
`,placeholder:"••••••••",value:b.password,onChange:Q=>x({...b,password:Q.target.value}),required:!0})]})]}),o.jsx("div",{className:`\r
rounded-2xl\r
border\r
border-slate-200\r
dark:border-slate-800\r
p-4\r
bg-slate-50\r
dark:bg-slate-900/40\r
`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("h4",{className:"font-black text-sm text-slate-800 dark:text-white",children:"Staff Permissions"}),o.jsx("p",{className:"text-xs text-slate-500",children:"Assign operational access"})]}),o.jsx(Mm,{checked:v,onCheckedChange:y})]})}),v&&o.jsxs("div",{className:`\r
space-y-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
pt-5\r
`,children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Role"}),o.jsxs(wt,{value:w.roleCode,onValueChange:Q=>S({...w,roleCode:Q}),children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{placeholder:"Select role"})}),o.jsx(gt,{children:n.map(Q=>o.jsx(_e,{value:Q.code,children:Q.name},Q.id))})]})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope Type"}),o.jsxs(wt,{value:w.scopeType,onValueChange:Q=>{S({...w,scopeType:Q,scopeId:""}),Z(Q)},children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{})}),o.jsx(gt,{children:Kw.map(Q=>o.jsx(_e,{value:Q,children:Q},Q))})]})]}),w.scopeType!=="GLOBAL"&&o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope ID"}),o.jsxs(wt,{value:w.scopeId,onValueChange:Q=>S({...w,scopeId:Q}),disabled:ce,children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{placeholder:ce?"Loading...":`Select ${w.scopeType.toLowerCase()}`})}),o.jsx(gt,{children:V.map(Q=>o.jsxs(_e,{value:Q.id,children:[Q.name,Q.code?` (${Q.code})`:""]},Q.id))})]})]})]}),o.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-5\r
border-t\r
`,children:[o.jsx(ne,{type:"button",variant:"outline",onClick:()=>g(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),o.jsx(ne,{type:"submit",disabled:k,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
text-white\r
font-black\r
shadow-xl\r
shadow-indigo-500/20\r
`,children:k?"Processing...":"Create User"})]})]})})}),o.jsx(kn,{isOpen:N,onClose:()=>{L(!1),R(null)},title:"Assign Role",children:o.jsxs("div",{className:"space-y-5 py-4",children:[o.jsxs("div",{className:`\r
rounded-2xl\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-4\r
border\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx("p",{className:"text-sm text-slate-500",children:"Configure access role for"}),o.jsx("h3",{className:"font-black text-lg text-slate-800 dark:text-white mt-1",children:T==null?void 0:T.fullName})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Role"}),o.jsxs(wt,{value:z,onValueChange:I,children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{placeholder:"Select role"})}),o.jsx(gt,{children:n.map(Q=>o.jsx(_e,{value:Q.code,children:Q.name},Q.id))})]})]}),o.jsxs("div",{className:`\r
flex\r
gap-4\r
pt-4\r
border-t\r
`,children:[o.jsx(ne,{variant:"outline",onClick:()=>L(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),o.jsx(ne,{disabled:!z||F,onClick:It,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,children:F?"Assigning...":"Assign Role"})]})]})}),o.jsx(kn,{isOpen:W,onClose:()=>{M(!1),_(null)},title:"Assign Scope",children:o.jsxs("div",{className:`\r
space-y-5\r
py-4\r
max-h-[80vh]\r
overflow-y-auto\r
pr-2\r
`,children:[o.jsxs("div",{className:`\r
rounded-2xl\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-4\r
border\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx("p",{className:"text-sm text-slate-500",children:"Configure scope access for"}),o.jsx("h3",{className:"font-black text-lg text-slate-800 dark:text-white mt-1",children:O==null?void 0:O.fullName})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope Type"}),o.jsxs(wt,{value:U,onValueChange:Q=>{q(Q),D(""),Z(Q)},children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{})}),o.jsx(gt,{children:Kw.map(Q=>o.jsx(_e,{value:Q,children:Q},Q))})]})]}),U!=="GLOBAL"&&o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
`,children:"Scope ID"}),o.jsxs(wt,{value:G,onValueChange:D,disabled:ce,children:[o.jsx(mt,{className:`\r
h-12\r
rounded-2xl\r
`,children:o.jsx(St,{placeholder:ce?"Loading...":`Select ${U.toLowerCase()}`})}),o.jsx(gt,{children:V.map(Q=>o.jsxs(_e,{value:Q.id,children:[Q.name,Q.code?` (${Q.code})`:""]},Q.id))})]})]}),(O==null?void 0:O.scopeType)&&o.jsx("div",{className:`\r
rounded-2xl\r
bg-orange-500/10\r
border\r
border-orange-500/10\r
p-4\r
`,children:o.jsxs("p",{className:"text-sm text-orange-500 font-bold",children:["Current Scope:"," ",O.scopeType]})}),o.jsxs("div",{className:`\r
flex\r
flex-col\r
md:flex-row\r
gap-3\r
pt-4\r
border-t\r
`,children:[(O==null?void 0:O.scopeType)&&o.jsx(ne,{variant:"outline",className:`\r
h-12\r
rounded-2xl\r
text-red-600\r
border-red-200\r
hover:bg-red-50\r
`,onClick:()=>Pe(O.id),children:"Remove Scope"}),o.jsx(ne,{variant:"outline",onClick:()=>M(!1),className:`\r
flex-1\r
h-12\r
rounded-2xl\r
`,children:"Cancel"}),o.jsx(ne,{disabled:P||U!=="GLOBAL"&&!G,onClick:ve,className:`\r
flex-1\r
h-12\r
rounded-2xl\r
bg-orange-600\r
hover:bg-orange-700\r
`,children:P?"Saving...":"Save Scope"})]})]})}),o.jsx(kn,{isOpen:!!C,onClose:()=>E(null),title:"User Intelligence",children:C&&o.jsxs("div",{className:`\r
space-y-4\r
py-4\r
`,children:[o.jsxs("div",{className:`\r
flex\r
items-center\r
gap-4\r
pb-5\r
border-b\r
`,children:[o.jsx("div",{className:`\r
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
`,children:(gn=C.fullName)==null?void 0:gn.split(" ").map(Q=>Q[0]).join("").slice(0,2)}),o.jsxs("div",{children:[o.jsx("h3",{className:"text-xl font-black text-slate-800 dark:text-white",children:C.fullName}),o.jsx("p",{className:"text-sm text-slate-500",children:C.email})]})]}),[["Phone",C.phone||"—"],["Role",C.role||"Not assigned"],["Scope",C.scopeType||"Not assigned"],["Provider",C.provider],["Verified",C.isVerified?"Yes":"No"],["Status",C.isActive?"Active":"Inactive"]].map(([Q,pe])=>o.jsxs("div",{className:`\r
grid\r
grid-cols-3\r
gap-4\r
items-center\r
rounded-2xl\r
bg-slate-50\r
dark:bg-slate-900/40\r
p-4\r
`,children:[o.jsx("span",{className:`\r
text-xs\r
font-black\r
uppercase\r
tracking-[0.2em]\r
text-slate-500\r
`,children:Q}),o.jsx("span",{className:`\r
col-span-2\r
font-semibold\r
text-slate-800\r
dark:text-white\r
break-all\r
`,children:pe})]},Q)),o.jsx("div",{className:"pt-4",children:o.jsx(ne,{className:`\r
w-full\r
h-12\r
rounded-2xl\r
bg-indigo-600\r
hover:bg-indigo-700\r
`,onClick:()=>E(null),children:"Close Window"})})]})})]}):o.jsx("div",{className:`\r
min-h-screen\r
flex\r
items-center\r
justify-center\r
bg-[#03140F]\r
`,children:o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-full\r
border-4\r
border-indigo-500/20\r
border-t-indigo-500\r
animate-spin\r
`})})}const Dh={code:"",name:""};function EU(){const[e,t]=d.useState([]),[n,r]=d.useState(!0),[s,i]=d.useState({total:0,page:1,limit:10,totalPages:1}),[a,l]=d.useState(1),[c,u]=d.useState(""),[f,h]=d.useState(!1),[p,m]=d.useState(Dh),[g,v]=d.useState(!1),[y,b]=d.useState(null),[x,w]=d.useState(!1),S=d.useCallback(async()=>{r(!0);try{const T=await mu.getAll(a,10),R=(T==null?void 0:T.data)||T;t((R==null?void 0:R.items)||[]);const z=(R==null?void 0:R.meta)||(R==null?void 0:R.pagination)||{};i({total:z.total||0,page:z.page||a,limit:z.limit||10,totalPages:z.totalPages||1})}catch{ie({title:"Failed to load roles",variant:"destructive"})}finally{r(!1)}},[a]);d.useEffect(()=>{S()},[S]);const k=d.useMemo(()=>{const T=s.total||0,R=(e==null?void 0:e.length)||0,z=(e==null?void 0:e.filter(I=>{var F;return(F=I.code)==null?void 0:F.includes("ADMIN")}).length)||0;return{total:T,active:R,secured:z}},[e,s]),j=d.useMemo(()=>c?e.filter(T=>{var R,z;return((R=T.name)==null?void 0:R.toLowerCase().includes(c.toLowerCase()))||((z=T.code)==null?void 0:z.toLowerCase().includes(c.toLowerCase()))}):e,[e,c]),C=async T=>{var R,z,I,F,A;T.preventDefault(),v(!0);try{await mu.create(p),ie({title:"Role created successfully"}),h(!1),m(Dh),S()}catch(W){const M=((I=(z=(R=W.response)==null?void 0:R.data)==null?void 0:z.data)==null?void 0:I.message)||((A=(F=W.response)==null?void 0:F.data)==null?void 0:A.message)||"Failed to create role";ie({title:Array.isArray(M)?M.join(", "):M,variant:"destructive"})}finally{v(!1)}},E=async()=>{var T,R,z,I,F;if(y){w(!0);try{await mu.delete(y.id),ie({title:"Role deleted"}),b(null),S()}catch(A){const W=((z=(R=(T=A.response)==null?void 0:T.data)==null?void 0:R.data)==null?void 0:z.message)||((F=(I=A.response)==null?void 0:I.data)==null?void 0:F.message)||"Failed to delete role";ie({title:Array.isArray(W)?W.join(", "):W,variant:"destructive"})}finally{w(!1)}}},N=d.useMemo(()=>[{key:"name",label:"Role Identity",render:(T,R)=>o.jsxs("div",{className:"flex items-center gap-4 group",children:[o.jsx("div",{className:`\r
w-11\r
h-11\r
rounded-2xl\r
bg-yellow-500/10\r
text-yellow-500\r
flex\r
items-center\r
justify-center\r
transition-all\r
duration-500\r
group-hover:scale-110\r
group-hover:rotate-6\r
`,children:o.jsx(Rg,{size:18})}),o.jsxs("div",{children:[o.jsx("div",{className:`\r
font-black\r
text-sm\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:T}),o.jsx("div",{className:`\r
text-xs\r
font-mono\r
tracking-wide\r
text-slate-500\r
dark:text-slate-400\r
`,children:R.code})]})]})},{key:"code",label:"Access Code",render:T=>o.jsx("span",{className:`\r
px-3\r
py-1\r
rounded-full\r
bg-slate-100\r
dark:bg-slate-800\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.2em]\r
text-slate-600\r
dark:text-slate-300\r
`,children:T})},{key:"actions",label:"",render:(T,R)=>o.jsx(ne,{variant:"ghost",size:"sm",onClick:()=>b(R),className:`\r
rounded-xl\r
hover:bg-red-500/10\r
transition-all\r
duration-300\r
`,children:o.jsx(Vs,{size:15,className:"text-red-500"})})}],[]),L=`
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
`;return o.jsxs(Mn,{children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsx(Tn,{title:"Role Management",subtitle:"Manage system roles and access permissions"}),o.jsxs(ee.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.7},className:`\r
p-6\r
lg:p-6\r
space-y-6\r
max-w-[1600px]\r
mx-auto\r
relative\r
overflow-hidden\r
`,children:[o.jsxs("div",{className:"absolute inset-0 -z-10 overflow-hidden",children:[o.jsx("div",{className:`\r
absolute\r
top-[-10%]\r
left-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-yellow-500/10\r
rounded-full\r
blur-[120px]\r
`}),o.jsx("div",{className:`\r
absolute\r
bottom-[-10%]\r
right-[-10%]\r
w-[420px]\r
h-[420px]\r
bg-orange-500/10\r
rounded-full\r
blur-[120px]\r
`})]}),o.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[o.jsx(ee.div,{whileHover:{y:-4},className:`${L} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Total Roles"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:k.total})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-yellow-500/10\r
text-yellow-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(xR,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${L} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Loaded Roles"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:k.active})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-emerald-500/10\r
text-emerald-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(Pn,{size:24})})]})}),o.jsx(ee.div,{whileHover:{y:-4},className:`${L} rounded-[2rem] p-6`,children:o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{children:[o.jsx("p",{className:`\r
text-[11px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
mb-2\r
`,children:"Admin Roles"}),o.jsx("h2",{className:`\r
text-3xl\r
font-black\r
text-slate-800\r
dark:text-white\r
`,children:k.secured})]}),o.jsx("div",{className:`\r
w-14\r
h-14\r
rounded-2xl\r
bg-indigo-500/10\r
text-indigo-500\r
flex\r
items-center\r
justify-center\r
`,children:o.jsx(vt,{size:24})})]})})]}),o.jsxs(ee.div,{initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:.8},className:`${L} rounded-[2.5rem] overflow-hidden`,children:[o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{children:[o.jsx("h3",{className:`\r
text-lg\r
font-black\r
text-slate-800\r
dark:text-white\r
tracking-tight\r
`,children:"Access Control Matrix"}),o.jsx("p",{className:`\r
text-sm\r
text-slate-500\r
dark:text-slate-400\r
mt-1\r
`,children:"System permission roles overview"})]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsxs("div",{className:"relative w-72",children:[o.jsx($r,{className:`\r
absolute\r
left-3\r
top-1/2\r
-translate-y-1/2\r
w-4\r
h-4\r
text-slate-400\r
`}),o.jsx(be,{value:c,onChange:T=>u(T.target.value),placeholder:"Search roles...",className:`\r
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
focus-visible:ring-yellow-500/20\r
`})]}),o.jsxs(ne,{onClick:()=>{h(!0),m(Dh)},className:`\r
h-11\r
rounded-2xl\r
px-5\r
font-bold\r
gap-2\r
bg-yellow-500\r
hover:bg-yellow-600\r
shadow-lg\r
shadow-yellow-500/20\r
transition-all\r
duration-500\r
hover:scale-[1.02]\r
text-white\r
`,children:[o.jsx(Zo,{size:18}),"Create Role"]})]})]}),o.jsx("div",{className:"p-4",children:n?o.jsx(Jn,{rows:6}):o.jsx(Hs,{columns:N,data:j,emptyMessage:"No roles found"})}),o.jsxs("div",{className:`\r
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
`,children:[o.jsxs("div",{className:`\r
text-[10px]\r
font-black\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
dark:text-slate-400\r
`,children:["Showing"," ",e.length," ","of"," ",s.total]}),o.jsxs("div",{className:"flex items-center gap-3",children:[o.jsx(ne,{size:"sm",variant:"outline",disabled:s.page<=1,onClick:()=>l(T=>Math.max(1,T-1)),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx(Vl,{size:14})}),o.jsxs("div",{className:`\r
px-4\r
py-2\r
rounded-xl\r
bg-yellow-500\r
text-white\r
text-sm\r
font-black\r
shadow-lg\r
shadow-yellow-500/20\r
`,children:[s.page," / ",s.totalPages]}),o.jsx(ne,{size:"sm",variant:"outline",disabled:s.page>=s.totalPages,onClick:()=>l(T=>T+1),className:`\r
rounded-xl\r
border-slate-200\r
dark:border-slate-700\r
`,children:o.jsx($l,{size:14})})]})]})]})]})]}),o.jsx(kn,{isOpen:f,onClose:()=>h(!1),title:"Create New Role",size:"md",children:o.jsxs("form",{onSubmit:C,className:"space-y-5",children:[o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Role Code"}),o.jsx(be,{required:!0,value:p.code,placeholder:"e.g. STORE_MANAGER",className:`\r
h-11\r
rounded-2xl\r
font-mono\r
uppercase\r
`,onChange:T=>m({...p,code:T.target.value.toUpperCase().replace(/\s/g,"_")})}),o.jsx("p",{className:"text-[11px] text-slate-400",children:"Uppercase with underscores only"})]}),o.jsxs("div",{className:"space-y-2",children:[o.jsx(me,{className:`\r
text-[11px]\r
uppercase\r
tracking-[0.25em]\r
text-slate-500\r
font-black\r
`,children:"Display Name"}),o.jsx(be,{required:!0,value:p.name,placeholder:"e.g. Store Manager",className:`\r
h-11\r
rounded-2xl\r
`,onChange:T=>m({...p,name:T.target.value})})]}),o.jsxs("div",{className:`\r
flex\r
justify-end\r
gap-3\r
pt-5\r
border-t\r
border-slate-200\r
dark:border-slate-800\r
`,children:[o.jsx(ne,{type:"button",variant:"ghost",className:"rounded-2xl",onClick:()=>h(!1),children:"Cancel"}),o.jsx(ne,{type:"submit",disabled:g,className:`\r
min-w-[140px]\r
rounded-2xl\r
bg-yellow-500\r
hover:bg-yellow-600\r
text-white\r
`,children:g?o.jsx(fn,{className:"animate-spin"}):"Create Role"})]})]})}),o.jsx(wr,{isOpen:!!y,onClose:()=>b(null),onConfirm:E,title:"Delete Role",message:`Delete role "${y==null?void 0:y.name}"? This may affect users assigned to this role.`,loading:x})]})}const NU=()=>{const e=Cr();return d.useEffect(()=>{console.error("404 Error: User attempted to access non-existent route:",e.pathname)},[e.pathname]),o.jsx("div",{className:"flex min-h-screen items-center justify-center bg-muted",children:o.jsxs("div",{className:"text-center",children:[o.jsx("h1",{className:"mb-4 text-4xl font-bold",children:"404"}),o.jsx("p",{className:"mb-4 text-xl text-muted-foreground",children:"Oops! Page not found"}),o.jsx("a",{href:"/",className:"text-primary underline hover:text-primary/90",children:"Return to Home"})]})})},LU=new eI,PU=()=>o.jsx(nI,{client:LU,children:o.jsx(O4,{children:o.jsxs(TO,{children:[o.jsx(h5,{}),o.jsx(W5,{}),o.jsx(XI,{children:o.jsxs(HI,{children:[o.jsx(Dt,{path:"/login",element:o.jsx(D6,{})}),o.jsx(Dt,{path:"/",element:o.jsx(Up,{to:"/dashboard",replace:!0})}),o.jsx(Dt,{path:"/dashboard",element:o.jsx(In,{children:o.jsx(Y6,{})})}),o.jsx(Dt,{path:"/cities",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN"],children:o.jsx(e8,{})})}),o.jsx(Dt,{path:"/franchises",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN"],children:o.jsx(CB,{})})}),o.jsx(Dt,{path:"/franchise-admins",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN"],children:o.jsx($B,{})})}),o.jsx(Dt,{path:"/stores",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:o.jsx(V$,{})})}),o.jsx(Dt,{path:"/stores/:id",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:o.jsx(fU,{})})}),o.jsx(Dt,{path:"/storesAdmin",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:o.jsx(pU,{})})}),o.jsx(Dt,{path:"/riders",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:o.jsx(gU,{})})}),o.jsx(Dt,{path:"/riders/:id",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN","FRANCHISE_ADMIN"],children:o.jsx(yU,{})})}),o.jsx(Dt,{path:"/users",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN"],children:o.jsx(jU,{})})}),o.jsx(Dt,{path:"/roles",element:o.jsx(In,{allowedRoles:["SUPER_ADMIN"],children:o.jsx(EU,{})})}),o.jsx(Dt,{path:"*",element:o.jsx(NU,{})})]})})]})})});mk(document.getElementById("root")).render(o.jsx(_6,{children:o.jsx(PU,{})}));
