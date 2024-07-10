const __vite__fileDeps=["assets/App-wLwcmPiS.js","assets/App-CsNlyvJU.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
function By(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const Hy="modulepreload",Vy=function(t){return"/"+t},id={},Wy=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));i=Promise.all(n.map(u=>{if(u=Vy(u),u in id)return;id[u]=!0;const c=u.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${f}`))return;const k=document.createElement("link");if(k.rel=c?"stylesheet":Hy,c||(k.as="script",k.crossOrigin=""),k.href=u,l&&k.setAttribute("nonce",l),document.head.appendChild(k),c)return new Promise((I,S)=>{k.addEventListener("load",I),k.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}return i.then(()=>e()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function ju(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var dp={exports:{}},el={},fp={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var is=Symbol.for("react.element"),Ky=Symbol.for("react.portal"),Gy=Symbol.for("react.fragment"),qy=Symbol.for("react.strict_mode"),Xy=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),Qy=Symbol.for("react.context"),Jy=Symbol.for("react.forward_ref"),Zy=Symbol.for("react.suspense"),e0=Symbol.for("react.memo"),t0=Symbol.for("react.lazy"),sd=Symbol.iterator;function n0(t){return t===null||typeof t!="object"?null:(t=sd&&t[sd]||t["@@iterator"],typeof t=="function"?t:null)}var pp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},gp=Object.assign,mp={};function Vr(t,e,n){this.props=t,this.context=e,this.refs=mp,this.updater=n||pp}Vr.prototype.isReactComponent={};Vr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Vr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function vp(){}vp.prototype=Vr.prototype;function bu(t,e,n){this.props=t,this.context=e,this.refs=mp,this.updater=n||pp}var zu=bu.prototype=new vp;zu.constructor=bu;gp(zu,Vr.prototype);zu.isPureReactComponent=!0;var od=Array.isArray,yp=Object.prototype.hasOwnProperty,$u={current:null},_p={key:!0,ref:!0,__self:!0,__source:!0};function wp(t,e,n){var r,i={},s=null,l=null;if(e!=null)for(r in e.ref!==void 0&&(l=e.ref),e.key!==void 0&&(s=""+e.key),e)yp.call(e,r)&&!_p.hasOwnProperty(r)&&(i[r]=e[r]);var u=arguments.length-2;if(u===1)i.children=n;else if(1<u){for(var c=Array(u),f=0;f<u;f++)c[f]=arguments[f+2];i.children=c}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)i[r]===void 0&&(i[r]=u[r]);return{$$typeof:is,type:t,key:s,ref:l,props:i,_owner:$u.current}}function r0(t,e){return{$$typeof:is,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bu(t){return typeof t=="object"&&t!==null&&t.$$typeof===is}function i0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ld=/\/+/g;function ql(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i0(""+t.key):e.toString(36)}function eo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var l=!1;if(t===null)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case is:case Ky:l=!0}}if(l)return l=t,i=i(l),t=r===""?"."+ql(l,0):r,od(i)?(n="",t!=null&&(n=t.replace(ld,"$&/")+"/"),eo(i,e,n,"",function(f){return f})):i!=null&&(Bu(i)&&(i=r0(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(ld,"$&/")+"/")+t)),e.push(i)),1;if(l=0,r=r===""?".":r+":",od(t))for(var u=0;u<t.length;u++){s=t[u];var c=r+ql(s,u);l+=eo(s,e,n,c,i)}else if(c=n0(t),typeof c=="function")for(t=c.call(t),u=0;!(s=t.next()).done;)s=s.value,c=r+ql(s,u++),l+=eo(s,e,n,c,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return l}function Ns(t,e,n){if(t==null)return t;var r=[],i=0;return eo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function s0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Fe={current:null},to={transition:null},o0={ReactCurrentDispatcher:Fe,ReactCurrentBatchConfig:to,ReactCurrentOwner:$u};function Ep(){throw Error("act(...) is not supported in production builds of React.")}W.Children={map:Ns,forEach:function(t,e,n){Ns(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ns(t,function(){e++}),e},toArray:function(t){return Ns(t,function(e){return e})||[]},only:function(t){if(!Bu(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};W.Component=Vr;W.Fragment=Gy;W.Profiler=Xy;W.PureComponent=bu;W.StrictMode=qy;W.Suspense=Zy;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0;W.act=Ep;W.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=gp({},t.props),i=t.key,s=t.ref,l=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,l=$u.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(c in e)yp.call(e,c)&&!_p.hasOwnProperty(c)&&(r[c]=e[c]===void 0&&u!==void 0?u[c]:e[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){u=Array(c);for(var f=0;f<c;f++)u[f]=arguments[f+2];r.children=u}return{$$typeof:is,type:t.type,key:i,ref:s,props:r,_owner:l}};W.createContext=function(t){return t={$$typeof:Qy,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Yy,_context:t},t.Consumer=t};W.createElement=wp;W.createFactory=function(t){var e=wp.bind(null,t);return e.type=t,e};W.createRef=function(){return{current:null}};W.forwardRef=function(t){return{$$typeof:Jy,render:t}};W.isValidElement=Bu;W.lazy=function(t){return{$$typeof:t0,_payload:{_status:-1,_result:t},_init:s0}};W.memo=function(t,e){return{$$typeof:e0,type:t,compare:e===void 0?null:e}};W.startTransition=function(t){var e=to.transition;to.transition={};try{t()}finally{to.transition=e}};W.unstable_act=Ep;W.useCallback=function(t,e){return Fe.current.useCallback(t,e)};W.useContext=function(t){return Fe.current.useContext(t)};W.useDebugValue=function(){};W.useDeferredValue=function(t){return Fe.current.useDeferredValue(t)};W.useEffect=function(t,e){return Fe.current.useEffect(t,e)};W.useId=function(){return Fe.current.useId()};W.useImperativeHandle=function(t,e,n){return Fe.current.useImperativeHandle(t,e,n)};W.useInsertionEffect=function(t,e){return Fe.current.useInsertionEffect(t,e)};W.useLayoutEffect=function(t,e){return Fe.current.useLayoutEffect(t,e)};W.useMemo=function(t,e){return Fe.current.useMemo(t,e)};W.useReducer=function(t,e,n){return Fe.current.useReducer(t,e,n)};W.useRef=function(t){return Fe.current.useRef(t)};W.useState=function(t){return Fe.current.useState(t)};W.useSyncExternalStore=function(t,e,n){return Fe.current.useSyncExternalStore(t,e,n)};W.useTransition=function(){return Fe.current.useTransition()};W.version="18.3.1";fp.exports=W;var V=fp.exports;const Hu=ju(V),UI=By({__proto__:null,default:Hu},[V]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l0=V,a0=Symbol.for("react.element"),u0=Symbol.for("react.fragment"),c0=Object.prototype.hasOwnProperty,h0=l0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d0={key:!0,ref:!0,__self:!0,__source:!0};function Tp(t,e,n){var r,i={},s=null,l=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(l=e.ref);for(r in e)c0.call(e,r)&&!d0.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:a0,type:t,key:s,ref:l,props:i,_owner:h0.current}}el.Fragment=u0;el.jsx=Tp;el.jsxs=Tp;dp.exports=el;var B=dp.exports,Na={},kp={exports:{}},Ze={},Sp={exports:{}},Ip={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(F,$){var H=F.length;F.push($);e:for(;0<H;){var ie=H-1>>>1,Q=F[ie];if(0<i(Q,$))F[ie]=$,F[H]=Q,H=ie;else break e}}function n(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var $=F[0],H=F.pop();if(H!==$){F[0]=H;e:for(var ie=0,Q=F.length,ue=Q>>>1;ie<ue;){var xt=2*(ie+1)-1,Mt=F[xt],Ut=xt+1,Ft=F[Ut];if(0>i(Mt,H))Ut<Q&&0>i(Ft,Mt)?(F[ie]=Ft,F[Ut]=H,ie=Ut):(F[ie]=Mt,F[xt]=H,ie=xt);else if(Ut<Q&&0>i(Ft,H))F[ie]=Ft,F[Ut]=H,ie=Ut;else break e}}return $}function i(F,$){var H=F.sortIndex-$.sortIndex;return H!==0?H:F.id-$.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var l=Date,u=l.now();t.unstable_now=function(){return l.now()-u}}var c=[],f=[],k=1,I=null,S=3,O=!1,N=!1,D=!1,b=typeof setTimeout=="function"?setTimeout:null,T=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function E(F){for(var $=n(f);$!==null;){if($.callback===null)r(f);else if($.startTime<=F)r(f),$.sortIndex=$.expirationTime,e(c,$);else break;$=n(f)}}function P(F){if(D=!1,E(F),!N)if(n(c)!==null)N=!0,Yr(M);else{var $=n(f);$!==null&&Lt(P,$.startTime-F)}}function M(F,$){N=!1,D&&(D=!1,T(p),p=-1),O=!0;var H=S;try{for(E($),I=n(c);I!==null&&(!(I.expirationTime>$)||F&&!w());){var ie=I.callback;if(typeof ie=="function"){I.callback=null,S=I.priorityLevel;var Q=ie(I.expirationTime<=$);$=t.unstable_now(),typeof Q=="function"?I.callback=Q:I===n(c)&&r(c),E($)}else r(c);I=n(c)}if(I!==null)var ue=!0;else{var xt=n(f);xt!==null&&Lt(P,xt.startTime-$),ue=!1}return ue}finally{I=null,S=H,O=!1}}var U=!1,m=null,p=-1,g=5,y=-1;function w(){return!(t.unstable_now()-y<g)}function A(){if(m!==null){var F=t.unstable_now();y=F;var $=!0;try{$=m(!0,F)}finally{$?v():(U=!1,m=null)}}else U=!1}var v;if(typeof _=="function")v=function(){_(A)};else if(typeof MessageChannel<"u"){var nt=new MessageChannel,Un=nt.port2;nt.port1.onmessage=A,v=function(){Un.postMessage(null)}}else v=function(){b(A,0)};function Yr(F){m=F,U||(U=!0,v())}function Lt(F,$){p=b(function(){F(t.unstable_now())},$)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(F){F.callback=null},t.unstable_continueExecution=function(){N||O||(N=!0,Yr(M))},t.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):g=0<F?Math.floor(1e3/F):5},t.unstable_getCurrentPriorityLevel=function(){return S},t.unstable_getFirstCallbackNode=function(){return n(c)},t.unstable_next=function(F){switch(S){case 1:case 2:case 3:var $=3;break;default:$=S}var H=S;S=$;try{return F()}finally{S=H}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var H=S;S=F;try{return $()}finally{S=H}},t.unstable_scheduleCallback=function(F,$,H){var ie=t.unstable_now();switch(typeof H=="object"&&H!==null?(H=H.delay,H=typeof H=="number"&&0<H?ie+H:ie):H=ie,F){case 1:var Q=-1;break;case 2:Q=250;break;case 5:Q=1073741823;break;case 4:Q=1e4;break;default:Q=5e3}return Q=H+Q,F={id:k++,callback:$,priorityLevel:F,startTime:H,expirationTime:Q,sortIndex:-1},H>ie?(F.sortIndex=H,e(f,F),n(c)===null&&F===n(f)&&(D?(T(p),p=-1):D=!0,Lt(P,H-ie))):(F.sortIndex=Q,e(c,F),N||O||(N=!0,Yr(M))),F},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(F){var $=S;return function(){var H=S;S=$;try{return F.apply(this,arguments)}finally{S=H}}}})(Ip);Sp.exports=Ip;var f0=Sp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p0=V,Je=f0;function L(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Cp=new Set,Mi={};function nr(t,e){Ur(t,e),Ur(t+"Capture",e)}function Ur(t,e){for(Mi[t]=e,t=0;t<e.length;t++)Cp.add(e[t])}var Yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oa=Object.prototype.hasOwnProperty,g0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ad={},ud={};function m0(t){return Oa.call(ud,t)?!0:Oa.call(ad,t)?!1:g0.test(t)?ud[t]=!0:(ad[t]=!0,!1)}function v0(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function y0(t,e,n,r){if(e===null||typeof e>"u"||v0(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function je(t,e,n,r,i,s,l){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=l}var Ee={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ee[t]=new je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ee[e]=new je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ee[t]=new je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ee[t]=new je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ee[t]=new je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ee[t]=new je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ee[t]=new je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ee[t]=new je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ee[t]=new je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Vu=/[\-:]([a-z])/g;function Wu(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Vu,Wu);Ee[e]=new je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Vu,Wu);Ee[e]=new je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Vu,Wu);Ee[e]=new je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ee[t]=new je(t,1,!1,t.toLowerCase(),null,!1,!1)});Ee.xlinkHref=new je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ee[t]=new je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Ku(t,e,n,r){var i=Ee.hasOwnProperty(e)?Ee[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(y0(e,n,i,r)&&(n=null),r||i===null?m0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var nn=p0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Os=Symbol.for("react.element"),dr=Symbol.for("react.portal"),fr=Symbol.for("react.fragment"),Gu=Symbol.for("react.strict_mode"),Da=Symbol.for("react.profiler"),Ap=Symbol.for("react.provider"),Rp=Symbol.for("react.context"),qu=Symbol.for("react.forward_ref"),La=Symbol.for("react.suspense"),xa=Symbol.for("react.suspense_list"),Xu=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Pp=Symbol.for("react.offscreen"),cd=Symbol.iterator;function ci(t){return t===null||typeof t!="object"?null:(t=cd&&t[cd]||t["@@iterator"],typeof t=="function"?t:null)}var le=Object.assign,Xl;function yi(t){if(Xl===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Xl=e&&e[1]||""}return`
`+Xl+t}var Yl=!1;function Ql(t,e){if(!t||Yl)return"";Yl=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(f){var r=f}Reflect.construct(t,[],e)}else{try{e.call()}catch(f){r=f}t.call(e.prototype)}else{try{throw Error()}catch(f){r=f}t()}}catch(f){if(f&&r&&typeof f.stack=="string"){for(var i=f.stack.split(`
`),s=r.stack.split(`
`),l=i.length-1,u=s.length-1;1<=l&&0<=u&&i[l]!==s[u];)u--;for(;1<=l&&0<=u;l--,u--)if(i[l]!==s[u]){if(l!==1||u!==1)do if(l--,u--,0>u||i[l]!==s[u]){var c=`
`+i[l].replace(" at new "," at ");return t.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",t.displayName)),c}while(1<=l&&0<=u);break}}}finally{Yl=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?yi(t):""}function _0(t){switch(t.tag){case 5:return yi(t.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return t=Ql(t.type,!1),t;case 11:return t=Ql(t.type.render,!1),t;case 1:return t=Ql(t.type,!0),t;default:return""}}function Ma(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case dr:return"Portal";case Da:return"Profiler";case Gu:return"StrictMode";case La:return"Suspense";case xa:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Rp:return(t.displayName||"Context")+".Consumer";case Ap:return(t._context.displayName||"Context")+".Provider";case qu:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Xu:return e=t.displayName||null,e!==null?e:Ma(t.type)||"Memo";case dn:e=t._payload,t=t._init;try{return Ma(t(e))}catch{}}return null}function w0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ma(e);case 8:return e===Gu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function On(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Np(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function E0(t){var e=Np(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,s.call(this,l)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ds(t){t._valueTracker||(t._valueTracker=E0(t))}function Op(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Np(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function vo(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ua(t,e){var n=e.checked;return le({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function hd(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=On(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Dp(t,e){e=e.checked,e!=null&&Ku(t,"checked",e,!1)}function Fa(t,e){Dp(t,e);var n=On(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ja(t,e.type,n):e.hasOwnProperty("defaultValue")&&ja(t,e.type,On(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dd(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ja(t,e,n){(e!=="number"||vo(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _i=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+On(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function ba(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(L(91));return le({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function fd(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(L(92));if(_i(n)){if(1<n.length)throw Error(L(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:On(n)}}function Lp(t,e){var n=On(e.value),r=On(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function pd(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function xp(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function za(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?xp(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ls,Mp=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ls=Ls||document.createElement("div"),Ls.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ls.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ui(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Si={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},T0=["Webkit","ms","Moz","O"];Object.keys(Si).forEach(function(t){T0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Si[e]=Si[t]})});function Up(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Si.hasOwnProperty(t)&&Si[t]?(""+e).trim():e+"px"}function Fp(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Up(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var k0=le({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function $a(t,e){if(e){if(k0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(L(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(L(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(L(61))}if(e.style!=null&&typeof e.style!="object")throw Error(L(62))}}function Ba(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ha=null;function Yu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Va=null,Cr=null,Ar=null;function gd(t){if(t=ls(t)){if(typeof Va!="function")throw Error(L(280));var e=t.stateNode;e&&(e=sl(e),Va(t.stateNode,t.type,e))}}function jp(t){Cr?Ar?Ar.push(t):Ar=[t]:Cr=t}function bp(){if(Cr){var t=Cr,e=Ar;if(Ar=Cr=null,gd(t),e)for(t=0;t<e.length;t++)gd(e[t])}}function zp(t,e){return t(e)}function $p(){}var Jl=!1;function Bp(t,e,n){if(Jl)return t(e,n);Jl=!0;try{return zp(t,e,n)}finally{Jl=!1,(Cr!==null||Ar!==null)&&($p(),bp())}}function Fi(t,e){var n=t.stateNode;if(n===null)return null;var r=sl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(L(231,e,typeof n));return n}var Wa=!1;if(Yt)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){Wa=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{Wa=!1}function S0(t,e,n,r,i,s,l,u,c){var f=Array.prototype.slice.call(arguments,3);try{e.apply(n,f)}catch(k){this.onError(k)}}var Ii=!1,yo=null,_o=!1,Ka=null,I0={onError:function(t){Ii=!0,yo=t}};function C0(t,e,n,r,i,s,l,u,c){Ii=!1,yo=null,S0.apply(I0,arguments)}function A0(t,e,n,r,i,s,l,u,c){if(C0.apply(this,arguments),Ii){if(Ii){var f=yo;Ii=!1,yo=null}else throw Error(L(198));_o||(_o=!0,Ka=f)}}function rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hp(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function md(t){if(rr(t)!==t)throw Error(L(188))}function R0(t){var e=t.alternate;if(!e){if(e=rr(t),e===null)throw Error(L(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return md(i),t;if(s===r)return md(i),e;s=s.sibling}throw Error(L(188))}if(n.return!==r.return)n=i,r=s;else{for(var l=!1,u=i.child;u;){if(u===n){l=!0,n=i,r=s;break}if(u===r){l=!0,r=i,n=s;break}u=u.sibling}if(!l){for(u=s.child;u;){if(u===n){l=!0,n=s,r=i;break}if(u===r){l=!0,r=s,n=i;break}u=u.sibling}if(!l)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?t:e}function Vp(t){return t=R0(t),t!==null?Wp(t):null}function Wp(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wp(t);if(e!==null)return e;t=t.sibling}return null}var Kp=Je.unstable_scheduleCallback,vd=Je.unstable_cancelCallback,P0=Je.unstable_shouldYield,N0=Je.unstable_requestPaint,he=Je.unstable_now,O0=Je.unstable_getCurrentPriorityLevel,Qu=Je.unstable_ImmediatePriority,Gp=Je.unstable_UserBlockingPriority,wo=Je.unstable_NormalPriority,D0=Je.unstable_LowPriority,qp=Je.unstable_IdlePriority,tl=null,At=null;function L0(t){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(tl,t,void 0,(t.current.flags&128)===128)}catch{}}var yt=Math.clz32?Math.clz32:U0,x0=Math.log,M0=Math.LN2;function U0(t){return t>>>=0,t===0?32:31-(x0(t)/M0|0)|0}var xs=64,Ms=4194304;function wi(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Eo(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,l=n&268435455;if(l!==0){var u=l&~i;u!==0?r=wi(u):(s&=l,s!==0&&(r=wi(s)))}else l=n&~i,l!==0?r=wi(l):s!==0&&(r=wi(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-yt(e),i=1<<n,r|=t[n],e&=~i;return r}function F0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function j0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var l=31-yt(s),u=1<<l,c=i[l];c===-1?(!(u&n)||u&r)&&(i[l]=F0(u,e)):c<=e&&(t.expiredLanes|=u),s&=~u}}function Ga(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Xp(){var t=xs;return xs<<=1,!(xs&4194240)&&(xs=64),t}function Zl(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ss(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-yt(e),t[e]=n}function b0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Ju(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Y=0;function Yp(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Qp,Zu,Jp,Zp,eg,qa=!1,Us=[],En=null,Tn=null,kn=null,ji=new Map,bi=new Map,pn=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yd(t,e){switch(t){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":kn=null;break;case"pointerover":case"pointerout":ji.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":bi.delete(e.pointerId)}}function di(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ls(e),e!==null&&Zu(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function $0(t,e,n,r,i){switch(e){case"focusin":return En=di(En,t,e,n,r,i),!0;case"dragenter":return Tn=di(Tn,t,e,n,r,i),!0;case"mouseover":return kn=di(kn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return ji.set(s,di(ji.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,bi.set(s,di(bi.get(s)||null,t,e,n,r,i)),!0}return!1}function tg(t){var e=Hn(t.target);if(e!==null){var n=rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Hp(n),e!==null){t.blockedOn=e,eg(t.priority,function(){Jp(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function no(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xa(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Ha=r,n.target.dispatchEvent(r),Ha=null}else return e=ls(n),e!==null&&Zu(e),t.blockedOn=n,!1;e.shift()}return!0}function _d(t,e,n){no(t)&&n.delete(e)}function B0(){qa=!1,En!==null&&no(En)&&(En=null),Tn!==null&&no(Tn)&&(Tn=null),kn!==null&&no(kn)&&(kn=null),ji.forEach(_d),bi.forEach(_d)}function fi(t,e){t.blockedOn===e&&(t.blockedOn=null,qa||(qa=!0,Je.unstable_scheduleCallback(Je.unstable_NormalPriority,B0)))}function zi(t){function e(i){return fi(i,t)}if(0<Us.length){fi(Us[0],t);for(var n=1;n<Us.length;n++){var r=Us[n];r.blockedOn===t&&(r.blockedOn=null)}}for(En!==null&&fi(En,t),Tn!==null&&fi(Tn,t),kn!==null&&fi(kn,t),ji.forEach(e),bi.forEach(e),n=0;n<pn.length;n++)r=pn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<pn.length&&(n=pn[0],n.blockedOn===null);)tg(n),n.blockedOn===null&&pn.shift()}var Rr=nn.ReactCurrentBatchConfig,To=!0;function H0(t,e,n,r){var i=Y,s=Rr.transition;Rr.transition=null;try{Y=1,ec(t,e,n,r)}finally{Y=i,Rr.transition=s}}function V0(t,e,n,r){var i=Y,s=Rr.transition;Rr.transition=null;try{Y=4,ec(t,e,n,r)}finally{Y=i,Rr.transition=s}}function ec(t,e,n,r){if(To){var i=Xa(t,e,n,r);if(i===null)ua(t,e,r,ko,n),yd(t,r);else if($0(i,t,e,n,r))r.stopPropagation();else if(yd(t,r),e&4&&-1<z0.indexOf(t)){for(;i!==null;){var s=ls(i);if(s!==null&&Qp(s),s=Xa(t,e,n,r),s===null&&ua(t,e,r,ko,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ua(t,e,r,null,n)}}var ko=null;function Xa(t,e,n,r){if(ko=null,t=Yu(r),t=Hn(t),t!==null)if(e=rr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hp(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ko=t,null}function ng(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(O0()){case Qu:return 1;case Gp:return 4;case wo:case D0:return 16;case qp:return 536870912;default:return 16}default:return 16}}var _n=null,tc=null,ro=null;function rg(){if(ro)return ro;var t,e=tc,n=e.length,r,i="value"in _n?_n.value:_n.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var l=n-t;for(r=1;r<=l&&e[n-r]===i[s-r];r++);return ro=i.slice(t,1<r?1-r:void 0)}function io(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Fs(){return!0}function wd(){return!1}function et(t){function e(n,r,i,s,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=l,this.currentTarget=null;for(var u in t)t.hasOwnProperty(u)&&(n=t[u],this[u]=n?n(s):s[u]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Fs:wd,this.isPropagationStopped=wd,this}return le(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Fs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Fs)},persist:function(){},isPersistent:Fs}),e}var Wr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nc=et(Wr),os=le({},Wr,{view:0,detail:0}),W0=et(os),ea,ta,pi,nl=le({},os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==pi&&(pi&&t.type==="mousemove"?(ea=t.screenX-pi.screenX,ta=t.screenY-pi.screenY):ta=ea=0,pi=t),ea)},movementY:function(t){return"movementY"in t?t.movementY:ta}}),Ed=et(nl),K0=le({},nl,{dataTransfer:0}),G0=et(K0),q0=le({},os,{relatedTarget:0}),na=et(q0),X0=le({},Wr,{animationName:0,elapsedTime:0,pseudoElement:0}),Y0=et(X0),Q0=le({},Wr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),J0=et(Q0),Z0=le({},Wr,{data:0}),Td=et(Z0),e_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function r_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=n_[t])?!!e[t]:!1}function rc(){return r_}var i_=le({},os,{key:function(t){if(t.key){var e=e_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=io(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rc,charCode:function(t){return t.type==="keypress"?io(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?io(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s_=et(i_),o_=le({},nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kd=et(o_),l_=le({},os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rc}),a_=et(l_),u_=le({},Wr,{propertyName:0,elapsedTime:0,pseudoElement:0}),c_=et(u_),h_=le({},nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d_=et(h_),f_=[9,13,27,32],ic=Yt&&"CompositionEvent"in window,Ci=null;Yt&&"documentMode"in document&&(Ci=document.documentMode);var p_=Yt&&"TextEvent"in window&&!Ci,ig=Yt&&(!ic||Ci&&8<Ci&&11>=Ci),Sd=" ",Id=!1;function sg(t,e){switch(t){case"keyup":return f_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function og(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var pr=!1;function g_(t,e){switch(t){case"compositionend":return og(e);case"keypress":return e.which!==32?null:(Id=!0,Sd);case"textInput":return t=e.data,t===Sd&&Id?null:t;default:return null}}function m_(t,e){if(pr)return t==="compositionend"||!ic&&sg(t,e)?(t=rg(),ro=tc=_n=null,pr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ig&&e.locale!=="ko"?null:e.data;default:return null}}var v_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!v_[t.type]:e==="textarea"}function lg(t,e,n,r){jp(r),e=So(e,"onChange"),0<e.length&&(n=new nc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Ai=null,$i=null;function y_(t){yg(t,0)}function rl(t){var e=vr(t);if(Op(e))return t}function __(t,e){if(t==="change")return e}var ag=!1;if(Yt){var ra;if(Yt){var ia="oninput"in document;if(!ia){var Ad=document.createElement("div");Ad.setAttribute("oninput","return;"),ia=typeof Ad.oninput=="function"}ra=ia}else ra=!1;ag=ra&&(!document.documentMode||9<document.documentMode)}function Rd(){Ai&&(Ai.detachEvent("onpropertychange",ug),$i=Ai=null)}function ug(t){if(t.propertyName==="value"&&rl($i)){var e=[];lg(e,$i,t,Yu(t)),Bp(y_,e)}}function w_(t,e,n){t==="focusin"?(Rd(),Ai=e,$i=n,Ai.attachEvent("onpropertychange",ug)):t==="focusout"&&Rd()}function E_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return rl($i)}function T_(t,e){if(t==="click")return rl(e)}function k_(t,e){if(t==="input"||t==="change")return rl(e)}function S_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Et=typeof Object.is=="function"?Object.is:S_;function Bi(t,e){if(Et(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Oa.call(e,i)||!Et(t[i],e[i]))return!1}return!0}function Pd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Nd(t,e){var n=Pd(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pd(n)}}function cg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hg(){for(var t=window,e=vo();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=vo(t.document)}return e}function sc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function I_(t){var e=hg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cg(n.ownerDocument.documentElement,n)){if(r!==null&&sc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Nd(n,s);var l=Nd(n,r);i&&l&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==l.node||t.focusOffset!==l.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(l.node,l.offset)):(e.setEnd(l.node,l.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var C_=Yt&&"documentMode"in document&&11>=document.documentMode,gr=null,Ya=null,Ri=null,Qa=!1;function Od(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Qa||gr==null||gr!==vo(r)||(r=gr,"selectionStart"in r&&sc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ri&&Bi(Ri,r)||(Ri=r,r=So(Ya,"onSelect"),0<r.length&&(e=new nc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=gr)))}function js(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:js("Animation","AnimationEnd"),animationiteration:js("Animation","AnimationIteration"),animationstart:js("Animation","AnimationStart"),transitionend:js("Transition","TransitionEnd")},sa={},dg={};Yt&&(dg=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function il(t){if(sa[t])return sa[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dg)return sa[t]=e[n];return t}var fg=il("animationend"),pg=il("animationiteration"),gg=il("animationstart"),mg=il("transitionend"),vg=new Map,Dd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ln(t,e){vg.set(t,e),nr(e,[t])}for(var oa=0;oa<Dd.length;oa++){var la=Dd[oa],A_=la.toLowerCase(),R_=la[0].toUpperCase()+la.slice(1);Ln(A_,"on"+R_)}Ln(fg,"onAnimationEnd");Ln(pg,"onAnimationIteration");Ln(gg,"onAnimationStart");Ln("dblclick","onDoubleClick");Ln("focusin","onFocus");Ln("focusout","onBlur");Ln(mg,"onTransitionEnd");Ur("onMouseEnter",["mouseout","mouseover"]);Ur("onMouseLeave",["mouseout","mouseover"]);Ur("onPointerEnter",["pointerout","pointerover"]);Ur("onPointerLeave",["pointerout","pointerover"]);nr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));nr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));nr("onBeforeInput",["compositionend","keypress","textInput","paste"]);nr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));nr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ei="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),P_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ei));function Ld(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,A0(r,e,void 0,t),t.currentTarget=null}function yg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var l=r.length-1;0<=l;l--){var u=r[l],c=u.instance,f=u.currentTarget;if(u=u.listener,c!==s&&i.isPropagationStopped())break e;Ld(i,u,f),s=c}else for(l=0;l<r.length;l++){if(u=r[l],c=u.instance,f=u.currentTarget,u=u.listener,c!==s&&i.isPropagationStopped())break e;Ld(i,u,f),s=c}}}if(_o)throw t=Ka,_o=!1,Ka=null,t}function te(t,e){var n=e[nu];n===void 0&&(n=e[nu]=new Set);var r=t+"__bubble";n.has(r)||(_g(e,t,2,!1),n.add(r))}function aa(t,e,n){var r=0;e&&(r|=4),_g(n,t,r,e)}var bs="_reactListening"+Math.random().toString(36).slice(2);function Hi(t){if(!t[bs]){t[bs]=!0,Cp.forEach(function(n){n!=="selectionchange"&&(P_.has(n)||aa(n,!1,t),aa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[bs]||(e[bs]=!0,aa("selectionchange",!1,e))}}function _g(t,e,n,r){switch(ng(e)){case 1:var i=H0;break;case 4:i=V0;break;default:i=ec}n=i.bind(null,e,n,t),i=void 0,!Wa||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ua(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var u=r.stateNode.containerInfo;if(u===i||u.nodeType===8&&u.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var c=l.tag;if((c===3||c===4)&&(c=l.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;l=l.return}for(;u!==null;){if(l=Hn(u),l===null)return;if(c=l.tag,c===5||c===6){r=s=l;continue e}u=u.parentNode}}r=r.return}Bp(function(){var f=s,k=Yu(n),I=[];e:{var S=vg.get(t);if(S!==void 0){var O=nc,N=t;switch(t){case"keypress":if(io(n)===0)break e;case"keydown":case"keyup":O=s_;break;case"focusin":N="focus",O=na;break;case"focusout":N="blur",O=na;break;case"beforeblur":case"afterblur":O=na;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":O=Ed;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":O=G0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":O=a_;break;case fg:case pg:case gg:O=Y0;break;case mg:O=c_;break;case"scroll":O=W0;break;case"wheel":O=d_;break;case"copy":case"cut":case"paste":O=J0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":O=kd}var D=(e&4)!==0,b=!D&&t==="scroll",T=D?S!==null?S+"Capture":null:S;D=[];for(var _=f,E;_!==null;){E=_;var P=E.stateNode;if(E.tag===5&&P!==null&&(E=P,T!==null&&(P=Fi(_,T),P!=null&&D.push(Vi(_,P,E)))),b)break;_=_.return}0<D.length&&(S=new O(S,N,null,n,k),I.push({event:S,listeners:D}))}}if(!(e&7)){e:{if(S=t==="mouseover"||t==="pointerover",O=t==="mouseout"||t==="pointerout",S&&n!==Ha&&(N=n.relatedTarget||n.fromElement)&&(Hn(N)||N[Qt]))break e;if((O||S)&&(S=k.window===k?k:(S=k.ownerDocument)?S.defaultView||S.parentWindow:window,O?(N=n.relatedTarget||n.toElement,O=f,N=N?Hn(N):null,N!==null&&(b=rr(N),N!==b||N.tag!==5&&N.tag!==6)&&(N=null)):(O=null,N=f),O!==N)){if(D=Ed,P="onMouseLeave",T="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(D=kd,P="onPointerLeave",T="onPointerEnter",_="pointer"),b=O==null?S:vr(O),E=N==null?S:vr(N),S=new D(P,_+"leave",O,n,k),S.target=b,S.relatedTarget=E,P=null,Hn(k)===f&&(D=new D(T,_+"enter",N,n,k),D.target=E,D.relatedTarget=b,P=D),b=P,O&&N)t:{for(D=O,T=N,_=0,E=D;E;E=hr(E))_++;for(E=0,P=T;P;P=hr(P))E++;for(;0<_-E;)D=hr(D),_--;for(;0<E-_;)T=hr(T),E--;for(;_--;){if(D===T||T!==null&&D===T.alternate)break t;D=hr(D),T=hr(T)}D=null}else D=null;O!==null&&xd(I,S,O,D,!1),N!==null&&b!==null&&xd(I,b,N,D,!0)}}e:{if(S=f?vr(f):window,O=S.nodeName&&S.nodeName.toLowerCase(),O==="select"||O==="input"&&S.type==="file")var M=__;else if(Cd(S))if(ag)M=k_;else{M=E_;var U=w_}else(O=S.nodeName)&&O.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(M=T_);if(M&&(M=M(t,f))){lg(I,M,n,k);break e}U&&U(t,S,f),t==="focusout"&&(U=S._wrapperState)&&U.controlled&&S.type==="number"&&ja(S,"number",S.value)}switch(U=f?vr(f):window,t){case"focusin":(Cd(U)||U.contentEditable==="true")&&(gr=U,Ya=f,Ri=null);break;case"focusout":Ri=Ya=gr=null;break;case"mousedown":Qa=!0;break;case"contextmenu":case"mouseup":case"dragend":Qa=!1,Od(I,n,k);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":Od(I,n,k)}var m;if(ic)e:{switch(t){case"compositionstart":var p="onCompositionStart";break e;case"compositionend":p="onCompositionEnd";break e;case"compositionupdate":p="onCompositionUpdate";break e}p=void 0}else pr?sg(t,n)&&(p="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(p="onCompositionStart");p&&(ig&&n.locale!=="ko"&&(pr||p!=="onCompositionStart"?p==="onCompositionEnd"&&pr&&(m=rg()):(_n=k,tc="value"in _n?_n.value:_n.textContent,pr=!0)),U=So(f,p),0<U.length&&(p=new Td(p,t,null,n,k),I.push({event:p,listeners:U}),m?p.data=m:(m=og(n),m!==null&&(p.data=m)))),(m=p_?g_(t,n):m_(t,n))&&(f=So(f,"onBeforeInput"),0<f.length&&(k=new Td("onBeforeInput","beforeinput",null,n,k),I.push({event:k,listeners:f}),k.data=m))}yg(I,e)})}function Vi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function So(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Fi(t,n),s!=null&&r.unshift(Vi(t,s,i)),s=Fi(t,e),s!=null&&r.push(Vi(t,s,i))),t=t.return}return r}function hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function xd(t,e,n,r,i){for(var s=e._reactName,l=[];n!==null&&n!==r;){var u=n,c=u.alternate,f=u.stateNode;if(c!==null&&c===r)break;u.tag===5&&f!==null&&(u=f,i?(c=Fi(n,s),c!=null&&l.unshift(Vi(n,c,u))):i||(c=Fi(n,s),c!=null&&l.push(Vi(n,c,u)))),n=n.return}l.length!==0&&t.push({event:e,listeners:l})}var N_=/\r\n?/g,O_=/\u0000|\uFFFD/g;function Md(t){return(typeof t=="string"?t:""+t).replace(N_,`
`).replace(O_,"")}function zs(t,e,n){if(e=Md(e),Md(t)!==e&&n)throw Error(L(425))}function Io(){}var Ja=null,Za=null;function eu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var tu=typeof setTimeout=="function"?setTimeout:void 0,D_=typeof clearTimeout=="function"?clearTimeout:void 0,Ud=typeof Promise=="function"?Promise:void 0,L_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ud<"u"?function(t){return Ud.resolve(null).then(t).catch(x_)}:tu;function x_(t){setTimeout(function(){throw t})}function ca(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),zi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);zi(e)}function Sn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Fd(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),Ct="__reactFiber$"+Kr,Wi="__reactProps$"+Kr,Qt="__reactContainer$"+Kr,nu="__reactEvents$"+Kr,M_="__reactListeners$"+Kr,U_="__reactHandles$"+Kr;function Hn(t){var e=t[Ct];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qt]||n[Ct]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Fd(t);t!==null;){if(n=t[Ct])return n;t=Fd(t)}return e}t=n,n=t.parentNode}return null}function ls(t){return t=t[Ct]||t[Qt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(L(33))}function sl(t){return t[Wi]||null}var ru=[],yr=-1;function xn(t){return{current:t}}function ne(t){0>yr||(t.current=ru[yr],ru[yr]=null,yr--)}function Z(t,e){yr++,ru[yr]=t.current,t.current=e}var Dn={},Oe=xn(Dn),Be=xn(!1),Xn=Dn;function Fr(t,e){var n=t.type.contextTypes;if(!n)return Dn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function He(t){return t=t.childContextTypes,t!=null}function Co(){ne(Be),ne(Oe)}function jd(t,e,n){if(Oe.current!==Dn)throw Error(L(168));Z(Oe,e),Z(Be,n)}function wg(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(L(108,w0(t)||"Unknown",i));return le({},n,r)}function Ao(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dn,Xn=Oe.current,Z(Oe,t),Z(Be,Be.current),!0}function bd(t,e,n){var r=t.stateNode;if(!r)throw Error(L(169));n?(t=wg(t,e,Xn),r.__reactInternalMemoizedMergedChildContext=t,ne(Be),ne(Oe),Z(Oe,t)):ne(Be),Z(Be,n)}var $t=null,ol=!1,ha=!1;function Eg(t){$t===null?$t=[t]:$t.push(t)}function F_(t){ol=!0,Eg(t)}function Mn(){if(!ha&&$t!==null){ha=!0;var t=0,e=Y;try{var n=$t;for(Y=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}$t=null,ol=!1}catch(i){throw $t!==null&&($t=$t.slice(t+1)),Kp(Qu,Mn),i}finally{Y=e,ha=!1}}return null}var _r=[],wr=0,Ro=null,Po=0,it=[],st=0,Yn=null,Ht=1,Vt="";function zn(t,e){_r[wr++]=Po,_r[wr++]=Ro,Ro=t,Po=e}function Tg(t,e,n){it[st++]=Ht,it[st++]=Vt,it[st++]=Yn,Yn=t;var r=Ht;t=Vt;var i=32-yt(r)-1;r&=~(1<<i),n+=1;var s=32-yt(e)+i;if(30<s){var l=i-i%5;s=(r&(1<<l)-1).toString(32),r>>=l,i-=l,Ht=1<<32-yt(e)+i|n<<i|r,Vt=s+t}else Ht=1<<s|n<<i|r,Vt=t}function oc(t){t.return!==null&&(zn(t,1),Tg(t,1,0))}function lc(t){for(;t===Ro;)Ro=_r[--wr],_r[wr]=null,Po=_r[--wr],_r[wr]=null;for(;t===Yn;)Yn=it[--st],it[st]=null,Vt=it[--st],it[st]=null,Ht=it[--st],it[st]=null}var Ye=null,qe=null,re=!1,gt=null;function kg(t,e){var n=ot(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function zd(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ye=t,qe=Sn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ye=t,qe=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Yn!==null?{id:Ht,overflow:Vt}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=ot(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ye=t,qe=null,!0):!1;default:return!1}}function iu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function su(t){if(re){var e=qe;if(e){var n=e;if(!zd(t,e)){if(iu(t))throw Error(L(418));e=Sn(n.nextSibling);var r=Ye;e&&zd(t,e)?kg(r,n):(t.flags=t.flags&-4097|2,re=!1,Ye=t)}}else{if(iu(t))throw Error(L(418));t.flags=t.flags&-4097|2,re=!1,Ye=t}}}function $d(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ye=t}function $s(t){if(t!==Ye)return!1;if(!re)return $d(t),re=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!eu(t.type,t.memoizedProps)),e&&(e=qe)){if(iu(t))throw Sg(),Error(L(418));for(;e;)kg(t,e),e=Sn(e.nextSibling)}if($d(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(L(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){qe=Sn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}qe=null}}else qe=Ye?Sn(t.stateNode.nextSibling):null;return!0}function Sg(){for(var t=qe;t;)t=Sn(t.nextSibling)}function jr(){qe=Ye=null,re=!1}function ac(t){gt===null?gt=[t]:gt.push(t)}var j_=nn.ReactCurrentBatchConfig;function gi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(l){var u=i.refs;l===null?delete u[s]:u[s]=l},e._stringRef=s,e)}if(typeof t!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,t))}return t}function Bs(t,e){throw t=Object.prototype.toString.call(e),Error(L(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Bd(t){var e=t._init;return e(t._payload)}function Ig(t){function e(T,_){if(t){var E=T.deletions;E===null?(T.deletions=[_],T.flags|=16):E.push(_)}}function n(T,_){if(!t)return null;for(;_!==null;)e(T,_),_=_.sibling;return null}function r(T,_){for(T=new Map;_!==null;)_.key!==null?T.set(_.key,_):T.set(_.index,_),_=_.sibling;return T}function i(T,_){return T=Rn(T,_),T.index=0,T.sibling=null,T}function s(T,_,E){return T.index=E,t?(E=T.alternate,E!==null?(E=E.index,E<_?(T.flags|=2,_):E):(T.flags|=2,_)):(T.flags|=1048576,_)}function l(T){return t&&T.alternate===null&&(T.flags|=2),T}function u(T,_,E,P){return _===null||_.tag!==6?(_=ya(E,T.mode,P),_.return=T,_):(_=i(_,E),_.return=T,_)}function c(T,_,E,P){var M=E.type;return M===fr?k(T,_,E.props.children,P,E.key):_!==null&&(_.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===dn&&Bd(M)===_.type)?(P=i(_,E.props),P.ref=gi(T,_,E),P.return=T,P):(P=ho(E.type,E.key,E.props,null,T.mode,P),P.ref=gi(T,_,E),P.return=T,P)}function f(T,_,E,P){return _===null||_.tag!==4||_.stateNode.containerInfo!==E.containerInfo||_.stateNode.implementation!==E.implementation?(_=_a(E,T.mode,P),_.return=T,_):(_=i(_,E.children||[]),_.return=T,_)}function k(T,_,E,P,M){return _===null||_.tag!==7?(_=qn(E,T.mode,P,M),_.return=T,_):(_=i(_,E),_.return=T,_)}function I(T,_,E){if(typeof _=="string"&&_!==""||typeof _=="number")return _=ya(""+_,T.mode,E),_.return=T,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Os:return E=ho(_.type,_.key,_.props,null,T.mode,E),E.ref=gi(T,null,_),E.return=T,E;case dr:return _=_a(_,T.mode,E),_.return=T,_;case dn:var P=_._init;return I(T,P(_._payload),E)}if(_i(_)||ci(_))return _=qn(_,T.mode,E,null),_.return=T,_;Bs(T,_)}return null}function S(T,_,E,P){var M=_!==null?_.key:null;if(typeof E=="string"&&E!==""||typeof E=="number")return M!==null?null:u(T,_,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Os:return E.key===M?c(T,_,E,P):null;case dr:return E.key===M?f(T,_,E,P):null;case dn:return M=E._init,S(T,_,M(E._payload),P)}if(_i(E)||ci(E))return M!==null?null:k(T,_,E,P,null);Bs(T,E)}return null}function O(T,_,E,P,M){if(typeof P=="string"&&P!==""||typeof P=="number")return T=T.get(E)||null,u(_,T,""+P,M);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case Os:return T=T.get(P.key===null?E:P.key)||null,c(_,T,P,M);case dr:return T=T.get(P.key===null?E:P.key)||null,f(_,T,P,M);case dn:var U=P._init;return O(T,_,E,U(P._payload),M)}if(_i(P)||ci(P))return T=T.get(E)||null,k(_,T,P,M,null);Bs(_,P)}return null}function N(T,_,E,P){for(var M=null,U=null,m=_,p=_=0,g=null;m!==null&&p<E.length;p++){m.index>p?(g=m,m=null):g=m.sibling;var y=S(T,m,E[p],P);if(y===null){m===null&&(m=g);break}t&&m&&y.alternate===null&&e(T,m),_=s(y,_,p),U===null?M=y:U.sibling=y,U=y,m=g}if(p===E.length)return n(T,m),re&&zn(T,p),M;if(m===null){for(;p<E.length;p++)m=I(T,E[p],P),m!==null&&(_=s(m,_,p),U===null?M=m:U.sibling=m,U=m);return re&&zn(T,p),M}for(m=r(T,m);p<E.length;p++)g=O(m,T,p,E[p],P),g!==null&&(t&&g.alternate!==null&&m.delete(g.key===null?p:g.key),_=s(g,_,p),U===null?M=g:U.sibling=g,U=g);return t&&m.forEach(function(w){return e(T,w)}),re&&zn(T,p),M}function D(T,_,E,P){var M=ci(E);if(typeof M!="function")throw Error(L(150));if(E=M.call(E),E==null)throw Error(L(151));for(var U=M=null,m=_,p=_=0,g=null,y=E.next();m!==null&&!y.done;p++,y=E.next()){m.index>p?(g=m,m=null):g=m.sibling;var w=S(T,m,y.value,P);if(w===null){m===null&&(m=g);break}t&&m&&w.alternate===null&&e(T,m),_=s(w,_,p),U===null?M=w:U.sibling=w,U=w,m=g}if(y.done)return n(T,m),re&&zn(T,p),M;if(m===null){for(;!y.done;p++,y=E.next())y=I(T,y.value,P),y!==null&&(_=s(y,_,p),U===null?M=y:U.sibling=y,U=y);return re&&zn(T,p),M}for(m=r(T,m);!y.done;p++,y=E.next())y=O(m,T,p,y.value,P),y!==null&&(t&&y.alternate!==null&&m.delete(y.key===null?p:y.key),_=s(y,_,p),U===null?M=y:U.sibling=y,U=y);return t&&m.forEach(function(A){return e(T,A)}),re&&zn(T,p),M}function b(T,_,E,P){if(typeof E=="object"&&E!==null&&E.type===fr&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case Os:e:{for(var M=E.key,U=_;U!==null;){if(U.key===M){if(M=E.type,M===fr){if(U.tag===7){n(T,U.sibling),_=i(U,E.props.children),_.return=T,T=_;break e}}else if(U.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===dn&&Bd(M)===U.type){n(T,U.sibling),_=i(U,E.props),_.ref=gi(T,U,E),_.return=T,T=_;break e}n(T,U);break}else e(T,U);U=U.sibling}E.type===fr?(_=qn(E.props.children,T.mode,P,E.key),_.return=T,T=_):(P=ho(E.type,E.key,E.props,null,T.mode,P),P.ref=gi(T,_,E),P.return=T,T=P)}return l(T);case dr:e:{for(U=E.key;_!==null;){if(_.key===U)if(_.tag===4&&_.stateNode.containerInfo===E.containerInfo&&_.stateNode.implementation===E.implementation){n(T,_.sibling),_=i(_,E.children||[]),_.return=T,T=_;break e}else{n(T,_);break}else e(T,_);_=_.sibling}_=_a(E,T.mode,P),_.return=T,T=_}return l(T);case dn:return U=E._init,b(T,_,U(E._payload),P)}if(_i(E))return N(T,_,E,P);if(ci(E))return D(T,_,E,P);Bs(T,E)}return typeof E=="string"&&E!==""||typeof E=="number"?(E=""+E,_!==null&&_.tag===6?(n(T,_.sibling),_=i(_,E),_.return=T,T=_):(n(T,_),_=ya(E,T.mode,P),_.return=T,T=_),l(T)):n(T,_)}return b}var br=Ig(!0),Cg=Ig(!1),No=xn(null),Oo=null,Er=null,uc=null;function cc(){uc=Er=Oo=null}function hc(t){var e=No.current;ne(No),t._currentValue=e}function ou(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Pr(t,e){Oo=t,uc=Er=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ze=!0),t.firstContext=null)}function at(t){var e=t._currentValue;if(uc!==t)if(t={context:t,memoizedValue:e,next:null},Er===null){if(Oo===null)throw Error(L(308));Er=t,Oo.dependencies={lanes:0,firstContext:t}}else Er=Er.next=t;return e}var Vn=null;function dc(t){Vn===null?Vn=[t]:Vn.push(t)}function Ag(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dc(e)):(n.next=i.next,i.next=n),e.interleaved=n,Jt(t,r)}function Jt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var fn=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function qt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function In(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,G&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Jt(t,n)}return i=r.interleaved,i===null?(e.next=e,dc(r)):(e.next=i.next,i.next=e),r.interleaved=e,Jt(t,n)}function so(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ju(t,n)}}function Hd(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=l:s=s.next=l,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Do(t,e,n,r){var i=t.updateQueue;fn=!1;var s=i.firstBaseUpdate,l=i.lastBaseUpdate,u=i.shared.pending;if(u!==null){i.shared.pending=null;var c=u,f=c.next;c.next=null,l===null?s=f:l.next=f,l=c;var k=t.alternate;k!==null&&(k=k.updateQueue,u=k.lastBaseUpdate,u!==l&&(u===null?k.firstBaseUpdate=f:u.next=f,k.lastBaseUpdate=c))}if(s!==null){var I=i.baseState;l=0,k=f=c=null,u=s;do{var S=u.lane,O=u.eventTime;if((r&S)===S){k!==null&&(k=k.next={eventTime:O,lane:0,tag:u.tag,payload:u.payload,callback:u.callback,next:null});e:{var N=t,D=u;switch(S=e,O=n,D.tag){case 1:if(N=D.payload,typeof N=="function"){I=N.call(O,I,S);break e}I=N;break e;case 3:N.flags=N.flags&-65537|128;case 0:if(N=D.payload,S=typeof N=="function"?N.call(O,I,S):N,S==null)break e;I=le({},I,S);break e;case 2:fn=!0}}u.callback!==null&&u.lane!==0&&(t.flags|=64,S=i.effects,S===null?i.effects=[u]:S.push(u))}else O={eventTime:O,lane:S,tag:u.tag,payload:u.payload,callback:u.callback,next:null},k===null?(f=k=O,c=I):k=k.next=O,l|=S;if(u=u.next,u===null){if(u=i.shared.pending,u===null)break;S=u,u=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(k===null&&(c=I),i.baseState=c,i.firstBaseUpdate=f,i.lastBaseUpdate=k,e=i.shared.interleaved,e!==null){i=e;do l|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Jn|=l,t.lanes=l,t.memoizedState=I}}function Vd(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(L(191,i));i.call(r)}}}var as={},Rt=xn(as),Ki=xn(as),Gi=xn(as);function Wn(t){if(t===as)throw Error(L(174));return t}function pc(t,e){switch(Z(Gi,e),Z(Ki,t),Z(Rt,as),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:za(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=za(e,t)}ne(Rt),Z(Rt,e)}function zr(){ne(Rt),ne(Ki),ne(Gi)}function Pg(t){Wn(Gi.current);var e=Wn(Rt.current),n=za(e,t.type);e!==n&&(Z(Ki,t),Z(Rt,n))}function gc(t){Ki.current===t&&(ne(Rt),ne(Ki))}var se=xn(0);function Lo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var da=[];function mc(){for(var t=0;t<da.length;t++)da[t]._workInProgressVersionPrimary=null;da.length=0}var oo=nn.ReactCurrentDispatcher,fa=nn.ReactCurrentBatchConfig,Qn=0,oe=null,fe=null,me=null,xo=!1,Pi=!1,qi=0,b_=0;function Ie(){throw Error(L(321))}function vc(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Et(t[n],e[n]))return!1;return!0}function yc(t,e,n,r,i,s){if(Qn=s,oe=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,oo.current=t===null||t.memoizedState===null?H_:V_,t=n(r,i),Pi){s=0;do{if(Pi=!1,qi=0,25<=s)throw Error(L(301));s+=1,me=fe=null,e.updateQueue=null,oo.current=W_,t=n(r,i)}while(Pi)}if(oo.current=Mo,e=fe!==null&&fe.next!==null,Qn=0,me=fe=oe=null,xo=!1,e)throw Error(L(300));return t}function _c(){var t=qi!==0;return qi=0,t}function It(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return me===null?oe.memoizedState=me=t:me=me.next=t,me}function ut(){if(fe===null){var t=oe.alternate;t=t!==null?t.memoizedState:null}else t=fe.next;var e=me===null?oe.memoizedState:me.next;if(e!==null)me=e,fe=t;else{if(t===null)throw Error(L(310));fe=t,t={memoizedState:fe.memoizedState,baseState:fe.baseState,baseQueue:fe.baseQueue,queue:fe.queue,next:null},me===null?oe.memoizedState=me=t:me=me.next=t}return me}function Xi(t,e){return typeof e=="function"?e(t):e}function pa(t){var e=ut(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=fe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var l=i.next;i.next=s.next,s.next=l}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var u=l=null,c=null,f=s;do{var k=f.lane;if((Qn&k)===k)c!==null&&(c=c.next={lane:0,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),r=f.hasEagerState?f.eagerState:t(r,f.action);else{var I={lane:k,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null};c===null?(u=c=I,l=r):c=c.next=I,oe.lanes|=k,Jn|=k}f=f.next}while(f!==null&&f!==s);c===null?l=r:c.next=u,Et(r,e.memoizedState)||(ze=!0),e.memoizedState=r,e.baseState=l,e.baseQueue=c,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,oe.lanes|=s,Jn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ga(t){var e=ut(),n=e.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do s=t(s,l.action),l=l.next;while(l!==i);Et(s,e.memoizedState)||(ze=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Ng(){}function Og(t,e){var n=oe,r=ut(),i=e(),s=!Et(r.memoizedState,i);if(s&&(r.memoizedState=i,ze=!0),r=r.queue,wc(xg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||me!==null&&me.memoizedState.tag&1){if(n.flags|=2048,Yi(9,Lg.bind(null,n,r,i,e),void 0,null),ve===null)throw Error(L(349));Qn&30||Dg(n,e,i)}return i}function Dg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Lg(t,e,n,r){e.value=n,e.getSnapshot=r,Mg(e)&&Ug(t)}function xg(t,e,n){return n(function(){Mg(e)&&Ug(t)})}function Mg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Et(t,n)}catch{return!0}}function Ug(t){var e=Jt(t,1);e!==null&&_t(e,t,1,-1)}function Wd(t){var e=It();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:t},e.queue=t,t=t.dispatch=B_.bind(null,oe,t),[e.memoizedState,t]}function Yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=oe.updateQueue,e===null?(e={lastEffect:null,stores:null},oe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Fg(){return ut().memoizedState}function lo(t,e,n,r){var i=It();oe.flags|=t,i.memoizedState=Yi(1|e,n,void 0,r===void 0?null:r)}function ll(t,e,n,r){var i=ut();r=r===void 0?null:r;var s=void 0;if(fe!==null){var l=fe.memoizedState;if(s=l.destroy,r!==null&&vc(r,l.deps)){i.memoizedState=Yi(e,n,s,r);return}}oe.flags|=t,i.memoizedState=Yi(1|e,n,s,r)}function Kd(t,e){return lo(8390656,8,t,e)}function wc(t,e){return ll(2048,8,t,e)}function jg(t,e){return ll(4,2,t,e)}function bg(t,e){return ll(4,4,t,e)}function zg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function $g(t,e,n){return n=n!=null?n.concat([t]):null,ll(4,4,zg.bind(null,e,t),n)}function Ec(){}function Bg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vc(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Hg(t,e){var n=ut();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&vc(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Vg(t,e,n){return Qn&21?(Et(n,e)||(n=Xp(),oe.lanes|=n,Jn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ze=!0),t.memoizedState=n)}function z_(t,e){var n=Y;Y=n!==0&&4>n?n:4,t(!0);var r=fa.transition;fa.transition={};try{t(!1),e()}finally{Y=n,fa.transition=r}}function Wg(){return ut().memoizedState}function $_(t,e,n){var r=An(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Kg(t))Gg(e,n);else if(n=Ag(t,e,n,r),n!==null){var i=Ue();_t(n,t,r,i),qg(n,e,r)}}function B_(t,e,n){var r=An(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Kg(t))Gg(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var l=e.lastRenderedState,u=s(l,n);if(i.hasEagerState=!0,i.eagerState=u,Et(u,l)){var c=e.interleaved;c===null?(i.next=i,dc(e)):(i.next=c.next,c.next=i),e.interleaved=i;return}}catch{}finally{}n=Ag(t,e,i,r),n!==null&&(i=Ue(),_t(n,t,r,i),qg(n,e,r))}}function Kg(t){var e=t.alternate;return t===oe||e!==null&&e===oe}function Gg(t,e){Pi=xo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qg(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Ju(t,n)}}var Mo={readContext:at,useCallback:Ie,useContext:Ie,useEffect:Ie,useImperativeHandle:Ie,useInsertionEffect:Ie,useLayoutEffect:Ie,useMemo:Ie,useReducer:Ie,useRef:Ie,useState:Ie,useDebugValue:Ie,useDeferredValue:Ie,useTransition:Ie,useMutableSource:Ie,useSyncExternalStore:Ie,useId:Ie,unstable_isNewReconciler:!1},H_={readContext:at,useCallback:function(t,e){return It().memoizedState=[t,e===void 0?null:e],t},useContext:at,useEffect:Kd,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,lo(4194308,4,zg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return lo(4194308,4,t,e)},useInsertionEffect:function(t,e){return lo(4,2,t,e)},useMemo:function(t,e){var n=It();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=It();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=$_.bind(null,oe,t),[r.memoizedState,t]},useRef:function(t){var e=It();return t={current:t},e.memoizedState=t},useState:Wd,useDebugValue:Ec,useDeferredValue:function(t){return It().memoizedState=t},useTransition:function(){var t=Wd(!1),e=t[0];return t=z_.bind(null,t[1]),It().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=oe,i=It();if(re){if(n===void 0)throw Error(L(407));n=n()}else{if(n=e(),ve===null)throw Error(L(349));Qn&30||Dg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Kd(xg.bind(null,r,s,t),[t]),r.flags|=2048,Yi(9,Lg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=It(),e=ve.identifierPrefix;if(re){var n=Vt,r=Ht;n=(r&~(1<<32-yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=qi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=b_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},V_={readContext:at,useCallback:Bg,useContext:at,useEffect:wc,useImperativeHandle:$g,useInsertionEffect:jg,useLayoutEffect:bg,useMemo:Hg,useReducer:pa,useRef:Fg,useState:function(){return pa(Xi)},useDebugValue:Ec,useDeferredValue:function(t){var e=ut();return Vg(e,fe.memoizedState,t)},useTransition:function(){var t=pa(Xi)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Og,useId:Wg,unstable_isNewReconciler:!1},W_={readContext:at,useCallback:Bg,useContext:at,useEffect:wc,useImperativeHandle:$g,useInsertionEffect:jg,useLayoutEffect:bg,useMemo:Hg,useReducer:ga,useRef:Fg,useState:function(){return ga(Xi)},useDebugValue:Ec,useDeferredValue:function(t){var e=ut();return fe===null?e.memoizedState=t:Vg(e,fe.memoizedState,t)},useTransition:function(){var t=ga(Xi)[0],e=ut().memoizedState;return[t,e]},useMutableSource:Ng,useSyncExternalStore:Og,useId:Wg,unstable_isNewReconciler:!1};function ft(t,e){if(t&&t.defaultProps){e=le({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function lu(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:le({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var al={isMounted:function(t){return(t=t._reactInternals)?rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=An(t),s=qt(r,i);s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(_t(e,t,i,r),so(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Ue(),i=An(t),s=qt(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=In(t,s,i),e!==null&&(_t(e,t,i,r),so(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Ue(),r=An(t),i=qt(n,r);i.tag=2,e!=null&&(i.callback=e),e=In(t,i,r),e!==null&&(_t(e,t,r,n),so(e,t,r))}};function Gd(t,e,n,r,i,s,l){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,l):e.prototype&&e.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,s):!0}function Xg(t,e,n){var r=!1,i=Dn,s=e.contextType;return typeof s=="object"&&s!==null?s=at(s):(i=He(e)?Xn:Oe.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):Dn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=al,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function qd(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&al.enqueueReplaceState(e,e.state,null)}function au(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},fc(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=at(s):(s=He(e)?Xn:Oe.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(lu(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&al.enqueueReplaceState(i,i.state,null),Do(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function $r(t,e){try{var n="",r=e;do n+=_0(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ma(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function uu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var K_=typeof WeakMap=="function"?WeakMap:Map;function Yg(t,e,n){n=qt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fo||(Fo=!0,_u=r),uu(t,e)},n}function Qg(t,e,n){n=qt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){uu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){uu(t,e),typeof r!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var l=e.stack;this.componentDidCatch(e.value,{componentStack:l!==null?l:""})}),n}function Xd(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new K_;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=ow.bind(null,t,e,n),e.then(t,t))}function Yd(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qd(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=qt(-1,1),e.tag=2,In(n,e,1))),n.lanes|=1),t)}var G_=nn.ReactCurrentOwner,ze=!1;function Me(t,e,n,r){e.child=t===null?Cg(e,null,n,r):br(e,t.child,n,r)}function Jd(t,e,n,r,i){n=n.render;var s=e.ref;return Pr(e,i),r=yc(t,e,n,r,s,i),n=_c(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(re&&n&&oc(e),e.flags|=1,Me(t,e,r,i),e.child)}function Zd(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Pc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jg(t,e,s,r,i)):(t=ho(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var l=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(l,r)&&t.ref===e.ref)return Zt(t,e,i)}return e.flags|=1,t=Rn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jg(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Bi(s,r)&&t.ref===e.ref)if(ze=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ze=!0);else return e.lanes=t.lanes,Zt(t,e,i)}return cu(t,e,n,r,i)}function Zg(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Z(kr,Ge),Ge|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Z(kr,Ge),Ge|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Z(kr,Ge),Ge|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Z(kr,Ge),Ge|=r;return Me(t,e,i,n),e.child}function em(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function cu(t,e,n,r,i){var s=He(n)?Xn:Oe.current;return s=Fr(e,s),Pr(e,i),n=yc(t,e,n,r,s,i),r=_c(),t!==null&&!ze?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Zt(t,e,i)):(re&&r&&oc(e),e.flags|=1,Me(t,e,n,i),e.child)}function ef(t,e,n,r,i){if(He(n)){var s=!0;Ao(e)}else s=!1;if(Pr(e,i),e.stateNode===null)ao(t,e),Xg(e,n,r),au(e,n,r,i),r=!0;else if(t===null){var l=e.stateNode,u=e.memoizedProps;l.props=u;var c=l.context,f=n.contextType;typeof f=="object"&&f!==null?f=at(f):(f=He(n)?Xn:Oe.current,f=Fr(e,f));var k=n.getDerivedStateFromProps,I=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function";I||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==r||c!==f)&&qd(e,l,r,f),fn=!1;var S=e.memoizedState;l.state=S,Do(e,r,l,i),c=e.memoizedState,u!==r||S!==c||Be.current||fn?(typeof k=="function"&&(lu(e,n,k,r),c=e.memoizedState),(u=fn||Gd(e,n,u,r,S,c,f))?(I||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(e.flags|=4194308)):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=c),l.props=r,l.state=c,l.context=f,r=u):(typeof l.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{l=e.stateNode,Rg(t,e),u=e.memoizedProps,f=e.type===e.elementType?u:ft(e.type,u),l.props=f,I=e.pendingProps,S=l.context,c=n.contextType,typeof c=="object"&&c!==null?c=at(c):(c=He(n)?Xn:Oe.current,c=Fr(e,c));var O=n.getDerivedStateFromProps;(k=typeof O=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u!==I||S!==c)&&qd(e,l,r,c),fn=!1,S=e.memoizedState,l.state=S,Do(e,r,l,i);var N=e.memoizedState;u!==I||S!==N||Be.current||fn?(typeof O=="function"&&(lu(e,n,O,r),N=e.memoizedState),(f=fn||Gd(e,n,f,r,S,N,c)||!1)?(k||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,N,c),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,N,c)),typeof l.componentDidUpdate=="function"&&(e.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=N),l.props=r,l.state=N,l.context=c,r=f):(typeof l.componentDidUpdate!="function"||u===t.memoizedProps&&S===t.memoizedState||(e.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&S===t.memoizedState||(e.flags|=1024),r=!1)}return hu(t,e,n,r,s,i)}function hu(t,e,n,r,i,s){em(t,e);var l=(e.flags&128)!==0;if(!r&&!l)return i&&bd(e,n,!1),Zt(t,e,s);r=e.stateNode,G_.current=e;var u=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&l?(e.child=br(e,t.child,null,s),e.child=br(e,null,u,s)):Me(t,e,u,s),e.memoizedState=r.state,i&&bd(e,n,!0),e.child}function tm(t){var e=t.stateNode;e.pendingContext?jd(t,e.pendingContext,e.pendingContext!==e.context):e.context&&jd(t,e.context,!1),pc(t,e.containerInfo)}function tf(t,e,n,r,i){return jr(),ac(i),e.flags|=256,Me(t,e,n,r),e.child}var du={dehydrated:null,treeContext:null,retryLane:0};function fu(t){return{baseLanes:t,cachePool:null,transitions:null}}function nm(t,e,n){var r=e.pendingProps,i=se.current,s=!1,l=(e.flags&128)!==0,u;if((u=l)||(u=t!==null&&t.memoizedState===null?!1:(i&2)!==0),u?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Z(se,i&1),t===null)return su(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(l=r.children,t=r.fallback,s?(r=e.mode,s=e.child,l={mode:"hidden",children:l},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=l):s=hl(l,r,0,null),t=qn(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=fu(n),e.memoizedState=du,t):Tc(e,l));if(i=t.memoizedState,i!==null&&(u=i.dehydrated,u!==null))return q_(t,e,l,r,u,i,n);if(s){s=r.fallback,l=e.mode,i=t.child,u=i.sibling;var c={mode:"hidden",children:r.children};return!(l&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=c,e.deletions=null):(r=Rn(i,c),r.subtreeFlags=i.subtreeFlags&14680064),u!==null?s=Rn(u,s):(s=qn(s,l,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,l=t.child.memoizedState,l=l===null?fu(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},s.memoizedState=l,s.childLanes=t.childLanes&~n,e.memoizedState=du,r}return s=t.child,t=s.sibling,r=Rn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Tc(t,e){return e=hl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Hs(t,e,n,r){return r!==null&&ac(r),br(e,t.child,null,n),t=Tc(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function q_(t,e,n,r,i,s,l){if(n)return e.flags&256?(e.flags&=-257,r=ma(Error(L(422))),Hs(t,e,l,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=hl({mode:"visible",children:r.children},i,0,null),s=qn(s,i,l,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&br(e,t.child,null,l),e.child.memoizedState=fu(l),e.memoizedState=du,s);if(!(e.mode&1))return Hs(t,e,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var u=r.dgst;return r=u,s=Error(L(419)),r=ma(s,r,void 0),Hs(t,e,l,r)}if(u=(l&t.childLanes)!==0,ze||u){if(r=ve,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|l)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Jt(t,i),_t(r,t,i,-1))}return Rc(),r=ma(Error(L(421))),Hs(t,e,l,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=lw.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,qe=Sn(i.nextSibling),Ye=e,re=!0,gt=null,t!==null&&(it[st++]=Ht,it[st++]=Vt,it[st++]=Yn,Ht=t.id,Vt=t.overflow,Yn=e),e=Tc(e,r.children),e.flags|=4096,e)}function nf(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),ou(t.return,e,n)}function va(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Me(t,e,r.children,n),r=se.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&nf(t,n,e);else if(t.tag===19)nf(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Z(se,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Lo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),va(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Lo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}va(e,!0,n,null,s);break;case"together":va(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ao(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Zt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Jn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(L(153));if(e.child!==null){for(t=e.child,n=Rn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Rn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function X_(t,e,n){switch(e.tag){case 3:tm(e),jr();break;case 5:Pg(e);break;case 1:He(e.type)&&Ao(e);break;case 4:pc(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Z(No,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Z(se,se.current&1),e.flags|=128,null):n&e.child.childLanes?nm(t,e,n):(Z(se,se.current&1),t=Zt(t,e,n),t!==null?t.sibling:null);Z(se,se.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rm(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Z(se,se.current),r)break;return null;case 22:case 23:return e.lanes=0,Zg(t,e,n)}return Zt(t,e,n)}var im,pu,sm,om;im=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};pu=function(){};sm=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Wn(Rt.current);var s=null;switch(n){case"input":i=Ua(t,i),r=Ua(t,r),s=[];break;case"select":i=le({},i,{value:void 0}),r=le({},r,{value:void 0}),s=[];break;case"textarea":i=ba(t,i),r=ba(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Io)}$a(n,r);var l;n=null;for(f in i)if(!r.hasOwnProperty(f)&&i.hasOwnProperty(f)&&i[f]!=null)if(f==="style"){var u=i[f];for(l in u)u.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else f!=="dangerouslySetInnerHTML"&&f!=="children"&&f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(Mi.hasOwnProperty(f)?s||(s=[]):(s=s||[]).push(f,null));for(f in r){var c=r[f];if(u=i!=null?i[f]:void 0,r.hasOwnProperty(f)&&c!==u&&(c!=null||u!=null))if(f==="style")if(u){for(l in u)!u.hasOwnProperty(l)||c&&c.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in c)c.hasOwnProperty(l)&&u[l]!==c[l]&&(n||(n={}),n[l]=c[l])}else n||(s||(s=[]),s.push(f,n)),n=c;else f==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,u=u?u.__html:void 0,c!=null&&u!==c&&(s=s||[]).push(f,c)):f==="children"?typeof c!="string"&&typeof c!="number"||(s=s||[]).push(f,""+c):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(f)?(c!=null&&f==="onScroll"&&te("scroll",t),s||u===c||(s=[])):(s=s||[]).push(f,c))}n&&(s=s||[]).push("style",n);var f=s;(e.updateQueue=f)&&(e.flags|=4)}};om=function(t,e,n,r){n!==r&&(e.flags|=4)};function mi(t,e){if(!re)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Y_(t,e,n){var r=e.pendingProps;switch(lc(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return He(e.type)&&Co(),Ce(e),null;case 3:return r=e.stateNode,zr(),ne(Be),ne(Oe),mc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&($s(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,gt!==null&&(Tu(gt),gt=null))),pu(t,e),Ce(e),null;case 5:gc(e);var i=Wn(Gi.current);if(n=e.type,t!==null&&e.stateNode!=null)sm(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(L(166));return Ce(e),null}if(t=Wn(Rt.current),$s(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Ct]=e,r[Wi]=s,t=(e.mode&1)!==0,n){case"dialog":te("cancel",r),te("close",r);break;case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(i=0;i<Ei.length;i++)te(Ei[i],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"details":te("toggle",r);break;case"input":hd(r,s),te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r);break;case"textarea":fd(r,s),te("invalid",r)}$a(n,s),i=null;for(var l in s)if(s.hasOwnProperty(l)){var u=s[l];l==="children"?typeof u=="string"?r.textContent!==u&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,u,t),i=["children",u]):typeof u=="number"&&r.textContent!==""+u&&(s.suppressHydrationWarning!==!0&&zs(r.textContent,u,t),i=["children",""+u]):Mi.hasOwnProperty(l)&&u!=null&&l==="onScroll"&&te("scroll",r)}switch(n){case"input":Ds(r),dd(r,s,!0);break;case"textarea":Ds(r),pd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Io)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=xp(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=l.createElement(n,{is:r.is}):(t=l.createElement(n),n==="select"&&(l=t,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):t=l.createElementNS(t,n),t[Ct]=e,t[Wi]=r,im(t,e,!1,!1),e.stateNode=t;e:{switch(l=Ba(n,r),n){case"dialog":te("cancel",t),te("close",t),i=r;break;case"iframe":case"object":case"embed":te("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ei.length;i++)te(Ei[i],t);i=r;break;case"source":te("error",t),i=r;break;case"img":case"image":case"link":te("error",t),te("load",t),i=r;break;case"details":te("toggle",t),i=r;break;case"input":hd(t,r),i=Ua(t,r),te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=le({},r,{value:void 0}),te("invalid",t);break;case"textarea":fd(t,r),i=ba(t,r),te("invalid",t);break;default:i=r}$a(n,i),u=i;for(s in u)if(u.hasOwnProperty(s)){var c=u[s];s==="style"?Fp(t,c):s==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&Mp(t,c)):s==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&Ui(t,c):typeof c=="number"&&Ui(t,""+c):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mi.hasOwnProperty(s)?c!=null&&s==="onScroll"&&te("scroll",t):c!=null&&Ku(t,s,c,l))}switch(n){case"input":Ds(t),dd(t,r,!1);break;case"textarea":Ds(t),pd(t);break;case"option":r.value!=null&&t.setAttribute("value",""+On(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)om(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(L(166));if(n=Wn(Gi.current),Wn(Rt.current),$s(e)){if(r=e.stateNode,n=e.memoizedProps,r[Ct]=e,(s=r.nodeValue!==n)&&(t=Ye,t!==null))switch(t.tag){case 3:zs(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zs(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Ct]=e,e.stateNode=r}return Ce(e),null;case 13:if(ne(se),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(re&&qe!==null&&e.mode&1&&!(e.flags&128))Sg(),jr(),e.flags|=98560,s=!1;else if(s=$s(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(L(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(L(317));s[Ct]=e}else jr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else gt!==null&&(Tu(gt),gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||se.current&1?pe===0&&(pe=3):Rc())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return zr(),pu(t,e),t===null&&Hi(e.stateNode.containerInfo),Ce(e),null;case 10:return hc(e.type._context),Ce(e),null;case 17:return He(e.type)&&Co(),Ce(e),null;case 19:if(ne(se),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,l=s.rendering,l===null)if(r)mi(s,!1);else{if(pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(l=Lo(t),l!==null){for(e.flags|=128,mi(s,!1),r=l.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,l=s.alternate,l===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=l.childLanes,s.lanes=l.lanes,s.child=l.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=l.memoizedProps,s.memoizedState=l.memoizedState,s.updateQueue=l.updateQueue,s.type=l.type,t=l.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Z(se,se.current&1|2),e.child}t=t.sibling}s.tail!==null&&he()>Br&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Lo(l),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!l.alternate&&!re)return Ce(e),null}else 2*he()-s.renderingStartTime>Br&&n!==1073741824&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304);s.isBackwards?(l.sibling=e.child,e.child=l):(n=s.last,n!==null?n.sibling=l:e.child=l,s.last=l)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=he(),e.sibling=null,n=se.current,Z(se,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Ac(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ge&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(L(156,e.tag))}function Q_(t,e){switch(lc(e),e.tag){case 1:return He(e.type)&&Co(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zr(),ne(Be),ne(Oe),mc(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gc(e),null;case 13:if(ne(se),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(L(340));jr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ne(se),null;case 4:return zr(),null;case 10:return hc(e.type._context),null;case 22:case 23:return Ac(),null;case 24:return null;default:return null}}var Vs=!1,Re=!1,J_=typeof WeakSet=="function"?WeakSet:Set,j=null;function Tr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(t,e,r)}else n.current=null}function gu(t,e,n){try{n()}catch(r){ae(t,e,r)}}var rf=!1;function Z_(t,e){if(Ja=To,t=hg(),sc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var l=0,u=-1,c=-1,f=0,k=0,I=t,S=null;t:for(;;){for(var O;I!==n||i!==0&&I.nodeType!==3||(u=l+i),I!==s||r!==0&&I.nodeType!==3||(c=l+r),I.nodeType===3&&(l+=I.nodeValue.length),(O=I.firstChild)!==null;)S=I,I=O;for(;;){if(I===t)break t;if(S===n&&++f===i&&(u=l),S===s&&++k===r&&(c=l),(O=I.nextSibling)!==null)break;I=S,S=I.parentNode}I=O}n=u===-1||c===-1?null:{start:u,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(Za={focusedElem:t,selectionRange:n},To=!1,j=e;j!==null;)if(e=j,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,j=t;else for(;j!==null;){e=j;try{var N=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(N!==null){var D=N.memoizedProps,b=N.memoizedState,T=e.stateNode,_=T.getSnapshotBeforeUpdate(e.elementType===e.type?D:ft(e.type,D),b);T.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var E=e.stateNode.containerInfo;E.nodeType===1?E.textContent="":E.nodeType===9&&E.documentElement&&E.removeChild(E.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(P){ae(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,j=t;break}j=e.return}return N=rf,rf=!1,N}function Ni(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&gu(e,n,s)}i=i.next}while(i!==r)}}function ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function mu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function lm(t){var e=t.alternate;e!==null&&(t.alternate=null,lm(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ct],delete e[Wi],delete e[nu],delete e[M_],delete e[U_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function am(t){return t.tag===5||t.tag===3||t.tag===4}function sf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||am(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function vu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Io));else if(r!==4&&(t=t.child,t!==null))for(vu(t,e,n),t=t.sibling;t!==null;)vu(t,e,n),t=t.sibling}function yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(yu(t,e,n),t=t.sibling;t!==null;)yu(t,e,n),t=t.sibling}var _e=null,pt=!1;function cn(t,e,n){for(n=n.child;n!==null;)um(t,e,n),n=n.sibling}function um(t,e,n){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(tl,n)}catch{}switch(n.tag){case 5:Re||Tr(n,e);case 6:var r=_e,i=pt;_e=null,cn(t,e,n),_e=r,pt=i,_e!==null&&(pt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(pt?(t=_e,n=n.stateNode,t.nodeType===8?ca(t.parentNode,n):t.nodeType===1&&ca(t,n),zi(t)):ca(_e,n.stateNode));break;case 4:r=_e,i=pt,_e=n.stateNode.containerInfo,pt=!0,cn(t,e,n),_e=r,pt=i;break;case 0:case 11:case 14:case 15:if(!Re&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,l=s.destroy;s=s.tag,l!==void 0&&(s&2||s&4)&&gu(n,e,l),i=i.next}while(i!==r)}cn(t,e,n);break;case 1:if(!Re&&(Tr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(u){ae(n,e,u)}cn(t,e,n);break;case 21:cn(t,e,n);break;case 22:n.mode&1?(Re=(r=Re)||n.memoizedState!==null,cn(t,e,n),Re=r):cn(t,e,n);break;default:cn(t,e,n)}}function of(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new J_),e.forEach(function(r){var i=aw.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function dt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,l=e,u=l;e:for(;u!==null;){switch(u.tag){case 5:_e=u.stateNode,pt=!1;break e;case 3:_e=u.stateNode.containerInfo,pt=!0;break e;case 4:_e=u.stateNode.containerInfo,pt=!0;break e}u=u.return}if(_e===null)throw Error(L(160));um(s,l,i),_e=null,pt=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(f){ae(i,e,f)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cm(e,t),e=e.sibling}function cm(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(dt(e,t),St(t),r&4){try{Ni(3,t,t.return),ul(3,t)}catch(D){ae(t,t.return,D)}try{Ni(5,t,t.return)}catch(D){ae(t,t.return,D)}}break;case 1:dt(e,t),St(t),r&512&&n!==null&&Tr(n,n.return);break;case 5:if(dt(e,t),St(t),r&512&&n!==null&&Tr(n,n.return),t.flags&32){var i=t.stateNode;try{Ui(i,"")}catch(D){ae(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,l=n!==null?n.memoizedProps:s,u=t.type,c=t.updateQueue;if(t.updateQueue=null,c!==null)try{u==="input"&&s.type==="radio"&&s.name!=null&&Dp(i,s),Ba(u,l);var f=Ba(u,s);for(l=0;l<c.length;l+=2){var k=c[l],I=c[l+1];k==="style"?Fp(i,I):k==="dangerouslySetInnerHTML"?Mp(i,I):k==="children"?Ui(i,I):Ku(i,k,I,f)}switch(u){case"input":Fa(i,s);break;case"textarea":Lp(i,s);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var O=s.value;O!=null?Ir(i,!!s.multiple,O,!1):S!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wi]=s}catch(D){ae(t,t.return,D)}}break;case 6:if(dt(e,t),St(t),r&4){if(t.stateNode===null)throw Error(L(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){ae(t,t.return,D)}}break;case 3:if(dt(e,t),St(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{zi(e.containerInfo)}catch(D){ae(t,t.return,D)}break;case 4:dt(e,t),St(t);break;case 13:dt(e,t),St(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Ic=he())),r&4&&of(t);break;case 22:if(k=n!==null&&n.memoizedState!==null,t.mode&1?(Re=(f=Re)||k,dt(e,t),Re=f):dt(e,t),St(t),r&8192){if(f=t.memoizedState!==null,(t.stateNode.isHidden=f)&&!k&&t.mode&1)for(j=t,k=t.child;k!==null;){for(I=j=k;j!==null;){switch(S=j,O=S.child,S.tag){case 0:case 11:case 14:case 15:Ni(4,S,S.return);break;case 1:Tr(S,S.return);var N=S.stateNode;if(typeof N.componentWillUnmount=="function"){r=S,n=S.return;try{e=r,N.props=e.memoizedProps,N.state=e.memoizedState,N.componentWillUnmount()}catch(D){ae(r,n,D)}}break;case 5:Tr(S,S.return);break;case 22:if(S.memoizedState!==null){af(I);continue}}O!==null?(O.return=S,j=O):af(I)}k=k.sibling}e:for(k=null,I=t;;){if(I.tag===5){if(k===null){k=I;try{i=I.stateNode,f?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(u=I.stateNode,c=I.memoizedProps.style,l=c!=null&&c.hasOwnProperty("display")?c.display:null,u.style.display=Up("display",l))}catch(D){ae(t,t.return,D)}}}else if(I.tag===6){if(k===null)try{I.stateNode.nodeValue=f?"":I.memoizedProps}catch(D){ae(t,t.return,D)}}else if((I.tag!==22&&I.tag!==23||I.memoizedState===null||I===t)&&I.child!==null){I.child.return=I,I=I.child;continue}if(I===t)break e;for(;I.sibling===null;){if(I.return===null||I.return===t)break e;k===I&&(k=null),I=I.return}k===I&&(k=null),I.sibling.return=I.return,I=I.sibling}}break;case 19:dt(e,t),St(t),r&4&&of(t);break;case 21:break;default:dt(e,t),St(t)}}function St(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(am(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ui(i,""),r.flags&=-33);var s=sf(t);yu(t,s,i);break;case 3:case 4:var l=r.stateNode.containerInfo,u=sf(t);vu(t,u,l);break;default:throw Error(L(161))}}catch(c){ae(t,t.return,c)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ew(t,e,n){j=t,hm(t)}function hm(t,e,n){for(var r=(t.mode&1)!==0;j!==null;){var i=j,s=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||Vs;if(!l){var u=i.alternate,c=u!==null&&u.memoizedState!==null||Re;u=Vs;var f=Re;if(Vs=l,(Re=c)&&!f)for(j=i;j!==null;)l=j,c=l.child,l.tag===22&&l.memoizedState!==null?uf(i):c!==null?(c.return=l,j=c):uf(i);for(;s!==null;)j=s,hm(s),s=s.sibling;j=i,Vs=u,Re=f}lf(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,j=s):lf(t)}}function lf(t){for(;j!==null;){var e=j;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Re||ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Re)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ft(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Vd(e,s,r);break;case 3:var l=e.updateQueue;if(l!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Vd(e,l,n)}break;case 5:var u=e.stateNode;if(n===null&&e.flags&4){n=u;var c=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var f=e.alternate;if(f!==null){var k=f.memoizedState;if(k!==null){var I=k.dehydrated;I!==null&&zi(I)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Re||e.flags&512&&mu(e)}catch(S){ae(e,e.return,S)}}if(e===t){j=null;break}if(n=e.sibling,n!==null){n.return=e.return,j=n;break}j=e.return}}function af(t){for(;j!==null;){var e=j;if(e===t){j=null;break}var n=e.sibling;if(n!==null){n.return=e.return,j=n;break}j=e.return}}function uf(t){for(;j!==null;){var e=j;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ul(4,e)}catch(c){ae(e,n,c)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(c){ae(e,i,c)}}var s=e.return;try{mu(e)}catch(c){ae(e,s,c)}break;case 5:var l=e.return;try{mu(e)}catch(c){ae(e,l,c)}}}catch(c){ae(e,e.return,c)}if(e===t){j=null;break}var u=e.sibling;if(u!==null){u.return=e.return,j=u;break}j=e.return}}var tw=Math.ceil,Uo=nn.ReactCurrentDispatcher,kc=nn.ReactCurrentOwner,lt=nn.ReactCurrentBatchConfig,G=0,ve=null,de=null,we=0,Ge=0,kr=xn(0),pe=0,Qi=null,Jn=0,cl=0,Sc=0,Oi=null,be=null,Ic=0,Br=1/0,zt=null,Fo=!1,_u=null,Cn=null,Ws=!1,wn=null,jo=0,Di=0,wu=null,uo=-1,co=0;function Ue(){return G&6?he():uo!==-1?uo:uo=he()}function An(t){return t.mode&1?G&2&&we!==0?we&-we:j_.transition!==null?(co===0&&(co=Xp()),co):(t=Y,t!==0||(t=window.event,t=t===void 0?16:ng(t.type)),t):1}function _t(t,e,n,r){if(50<Di)throw Di=0,wu=null,Error(L(185));ss(t,n,r),(!(G&2)||t!==ve)&&(t===ve&&(!(G&2)&&(cl|=n),pe===4&&gn(t,we)),Ve(t,r),n===1&&G===0&&!(e.mode&1)&&(Br=he()+500,ol&&Mn()))}function Ve(t,e){var n=t.callbackNode;j0(t,e);var r=Eo(t,t===ve?we:0);if(r===0)n!==null&&vd(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&vd(n),e===1)t.tag===0?F_(cf.bind(null,t)):Eg(cf.bind(null,t)),L_(function(){!(G&6)&&Mn()}),n=null;else{switch(Yp(r)){case 1:n=Qu;break;case 4:n=Gp;break;case 16:n=wo;break;case 536870912:n=qp;break;default:n=wo}n=_m(n,dm.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dm(t,e){if(uo=-1,co=0,G&6)throw Error(L(327));var n=t.callbackNode;if(Nr()&&t.callbackNode!==n)return null;var r=Eo(t,t===ve?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=bo(t,r);else{e=r;var i=G;G|=2;var s=pm();(ve!==t||we!==e)&&(zt=null,Br=he()+500,Gn(t,e));do try{iw();break}catch(u){fm(t,u)}while(!0);cc(),Uo.current=s,G=i,de!==null?e=0:(ve=null,we=0,e=pe)}if(e!==0){if(e===2&&(i=Ga(t),i!==0&&(r=i,e=Eu(t,i))),e===1)throw n=Qi,Gn(t,0),gn(t,r),Ve(t,he()),n;if(e===6)gn(t,r);else{if(i=t.current.alternate,!(r&30)&&!nw(i)&&(e=bo(t,r),e===2&&(s=Ga(t),s!==0&&(r=s,e=Eu(t,s))),e===1))throw n=Qi,Gn(t,0),gn(t,r),Ve(t,he()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(L(345));case 2:$n(t,be,zt);break;case 3:if(gn(t,r),(r&130023424)===r&&(e=Ic+500-he(),10<e)){if(Eo(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Ue(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=tu($n.bind(null,t,be,zt),e);break}$n(t,be,zt);break;case 4:if(gn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var l=31-yt(r);s=1<<l,l=e[l],l>i&&(i=l),r&=~s}if(r=i,r=he()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*tw(r/1960))-r,10<r){t.timeoutHandle=tu($n.bind(null,t,be,zt),r);break}$n(t,be,zt);break;case 5:$n(t,be,zt);break;default:throw Error(L(329))}}}return Ve(t,he()),t.callbackNode===n?dm.bind(null,t):null}function Eu(t,e){var n=Oi;return t.current.memoizedState.isDehydrated&&(Gn(t,e).flags|=256),t=bo(t,e),t!==2&&(e=be,be=n,e!==null&&Tu(e)),t}function Tu(t){be===null?be=t:be.push.apply(be,t)}function nw(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Et(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function gn(t,e){for(e&=~Sc,e&=~cl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-yt(e),r=1<<n;t[n]=-1,e&=~r}}function cf(t){if(G&6)throw Error(L(327));Nr();var e=Eo(t,0);if(!(e&1))return Ve(t,he()),null;var n=bo(t,e);if(t.tag!==0&&n===2){var r=Ga(t);r!==0&&(e=r,n=Eu(t,r))}if(n===1)throw n=Qi,Gn(t,0),gn(t,e),Ve(t,he()),n;if(n===6)throw Error(L(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,$n(t,be,zt),Ve(t,he()),null}function Cc(t,e){var n=G;G|=1;try{return t(e)}finally{G=n,G===0&&(Br=he()+500,ol&&Mn())}}function Zn(t){wn!==null&&wn.tag===0&&!(G&6)&&Nr();var e=G;G|=1;var n=lt.transition,r=Y;try{if(lt.transition=null,Y=1,t)return t()}finally{Y=r,lt.transition=n,G=e,!(G&6)&&Mn()}}function Ac(){Ge=kr.current,ne(kr)}function Gn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,D_(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(lc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Co();break;case 3:zr(),ne(Be),ne(Oe),mc();break;case 5:gc(r);break;case 4:zr();break;case 13:ne(se);break;case 19:ne(se);break;case 10:hc(r.type._context);break;case 22:case 23:Ac()}n=n.return}if(ve=t,de=t=Rn(t.current,null),we=Ge=e,pe=0,Qi=null,Sc=cl=Jn=0,be=Oi=null,Vn!==null){for(e=0;e<Vn.length;e++)if(n=Vn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var l=s.next;s.next=i,r.next=l}n.pending=r}Vn=null}return t}function fm(t,e){do{var n=de;try{if(cc(),oo.current=Mo,xo){for(var r=oe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}xo=!1}if(Qn=0,me=fe=oe=null,Pi=!1,qi=0,kc.current=null,n===null||n.return===null){pe=1,Qi=e,de=null;break}e:{var s=t,l=n.return,u=n,c=e;if(e=we,u.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var f=c,k=u,I=k.tag;if(!(k.mode&1)&&(I===0||I===11||I===15)){var S=k.alternate;S?(k.updateQueue=S.updateQueue,k.memoizedState=S.memoizedState,k.lanes=S.lanes):(k.updateQueue=null,k.memoizedState=null)}var O=Yd(l);if(O!==null){O.flags&=-257,Qd(O,l,u,s,e),O.mode&1&&Xd(s,f,e),e=O,c=f;var N=e.updateQueue;if(N===null){var D=new Set;D.add(c),e.updateQueue=D}else N.add(c);break e}else{if(!(e&1)){Xd(s,f,e),Rc();break e}c=Error(L(426))}}else if(re&&u.mode&1){var b=Yd(l);if(b!==null){!(b.flags&65536)&&(b.flags|=256),Qd(b,l,u,s,e),ac($r(c,u));break e}}s=c=$r(c,u),pe!==4&&(pe=2),Oi===null?Oi=[s]:Oi.push(s),s=l;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var T=Yg(s,c,e);Hd(s,T);break e;case 1:u=c;var _=s.type,E=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||E!==null&&typeof E.componentDidCatch=="function"&&(Cn===null||!Cn.has(E)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=Qg(s,u,e);Hd(s,P);break e}}s=s.return}while(s!==null)}mm(n)}catch(M){e=M,de===n&&n!==null&&(de=n=n.return);continue}break}while(!0)}function pm(){var t=Uo.current;return Uo.current=Mo,t===null?Mo:t}function Rc(){(pe===0||pe===3||pe===2)&&(pe=4),ve===null||!(Jn&268435455)&&!(cl&268435455)||gn(ve,we)}function bo(t,e){var n=G;G|=2;var r=pm();(ve!==t||we!==e)&&(zt=null,Gn(t,e));do try{rw();break}catch(i){fm(t,i)}while(!0);if(cc(),G=n,Uo.current=r,de!==null)throw Error(L(261));return ve=null,we=0,pe}function rw(){for(;de!==null;)gm(de)}function iw(){for(;de!==null&&!P0();)gm(de)}function gm(t){var e=ym(t.alternate,t,Ge);t.memoizedProps=t.pendingProps,e===null?mm(t):de=e,kc.current=null}function mm(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Q_(n,e),n!==null){n.flags&=32767,de=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{pe=6,de=null;return}}else if(n=Y_(n,e,Ge),n!==null){de=n;return}if(e=e.sibling,e!==null){de=e;return}de=e=t}while(e!==null);pe===0&&(pe=5)}function $n(t,e,n){var r=Y,i=lt.transition;try{lt.transition=null,Y=1,sw(t,e,n,r)}finally{lt.transition=i,Y=r}return null}function sw(t,e,n,r){do Nr();while(wn!==null);if(G&6)throw Error(L(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(L(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(b0(t,s),t===ve&&(de=ve=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ws||(Ws=!0,_m(wo,function(){return Nr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=lt.transition,lt.transition=null;var l=Y;Y=1;var u=G;G|=4,kc.current=null,Z_(t,n),cm(n,t),I_(Za),To=!!Ja,Za=Ja=null,t.current=n,ew(n),N0(),G=u,Y=l,lt.transition=s}else t.current=n;if(Ws&&(Ws=!1,wn=t,jo=i),s=t.pendingLanes,s===0&&(Cn=null),L0(n.stateNode),Ve(t,he()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fo)throw Fo=!1,t=_u,_u=null,t;return jo&1&&t.tag!==0&&Nr(),s=t.pendingLanes,s&1?t===wu?Di++:(Di=0,wu=t):Di=0,Mn(),null}function Nr(){if(wn!==null){var t=Yp(jo),e=lt.transition,n=Y;try{if(lt.transition=null,Y=16>t?16:t,wn===null)var r=!1;else{if(t=wn,wn=null,jo=0,G&6)throw Error(L(331));var i=G;for(G|=4,j=t.current;j!==null;){var s=j,l=s.child;if(j.flags&16){var u=s.deletions;if(u!==null){for(var c=0;c<u.length;c++){var f=u[c];for(j=f;j!==null;){var k=j;switch(k.tag){case 0:case 11:case 15:Ni(8,k,s)}var I=k.child;if(I!==null)I.return=k,j=I;else for(;j!==null;){k=j;var S=k.sibling,O=k.return;if(lm(k),k===f){j=null;break}if(S!==null){S.return=O,j=S;break}j=O}}}var N=s.alternate;if(N!==null){var D=N.child;if(D!==null){N.child=null;do{var b=D.sibling;D.sibling=null,D=b}while(D!==null)}}j=s}}if(s.subtreeFlags&2064&&l!==null)l.return=s,j=l;else e:for(;j!==null;){if(s=j,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ni(9,s,s.return)}var T=s.sibling;if(T!==null){T.return=s.return,j=T;break e}j=s.return}}var _=t.current;for(j=_;j!==null;){l=j;var E=l.child;if(l.subtreeFlags&2064&&E!==null)E.return=l,j=E;else e:for(l=_;j!==null;){if(u=j,u.flags&2048)try{switch(u.tag){case 0:case 11:case 15:ul(9,u)}}catch(M){ae(u,u.return,M)}if(u===l){j=null;break e}var P=u.sibling;if(P!==null){P.return=u.return,j=P;break e}j=u.return}}if(G=i,Mn(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(tl,t)}catch{}r=!0}return r}finally{Y=n,lt.transition=e}}return!1}function hf(t,e,n){e=$r(n,e),e=Yg(t,e,1),t=In(t,e,1),e=Ue(),t!==null&&(ss(t,1,e),Ve(t,e))}function ae(t,e,n){if(t.tag===3)hf(t,t,n);else for(;e!==null;){if(e.tag===3){hf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Cn===null||!Cn.has(r))){t=$r(n,t),t=Qg(e,t,1),e=In(e,t,1),t=Ue(),e!==null&&(ss(e,1,t),Ve(e,t));break}}e=e.return}}function ow(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Ue(),t.pingedLanes|=t.suspendedLanes&n,ve===t&&(we&n)===n&&(pe===4||pe===3&&(we&130023424)===we&&500>he()-Ic?Gn(t,0):Sc|=n),Ve(t,e)}function vm(t,e){e===0&&(t.mode&1?(e=Ms,Ms<<=1,!(Ms&130023424)&&(Ms=4194304)):e=1);var n=Ue();t=Jt(t,e),t!==null&&(ss(t,e,n),Ve(t,n))}function lw(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),vm(t,n)}function aw(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(e),vm(t,n)}var ym;ym=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Be.current)ze=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ze=!1,X_(t,e,n);ze=!!(t.flags&131072)}else ze=!1,re&&e.flags&1048576&&Tg(e,Po,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ao(t,e),t=e.pendingProps;var i=Fr(e,Oe.current);Pr(e,n),i=yc(null,e,r,t,i,n);var s=_c();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,He(r)?(s=!0,Ao(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,fc(e),i.updater=al,e.stateNode=i,i._reactInternals=e,au(e,r,t,n),e=hu(null,e,r,!0,s,n)):(e.tag=0,re&&s&&oc(e),Me(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ao(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=cw(r),t=ft(r,t),i){case 0:e=cu(null,e,r,t,n);break e;case 1:e=ef(null,e,r,t,n);break e;case 11:e=Jd(null,e,r,t,n);break e;case 14:e=Zd(null,e,r,ft(r.type,t),n);break e}throw Error(L(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),cu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),ef(t,e,r,i,n);case 3:e:{if(tm(e),t===null)throw Error(L(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Rg(t,e),Do(e,r,null,n);var l=e.memoizedState;if(r=l.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=$r(Error(L(423)),e),e=tf(t,e,r,n,i);break e}else if(r!==i){i=$r(Error(L(424)),e),e=tf(t,e,r,n,i);break e}else for(qe=Sn(e.stateNode.containerInfo.firstChild),Ye=e,re=!0,gt=null,n=Cg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(jr(),r===i){e=Zt(t,e,n);break e}Me(t,e,r,n)}e=e.child}return e;case 5:return Pg(e),t===null&&su(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,l=i.children,eu(r,i)?l=null:s!==null&&eu(r,s)&&(e.flags|=32),em(t,e),Me(t,e,l,n),e.child;case 6:return t===null&&su(e),null;case 13:return nm(t,e,n);case 4:return pc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=br(e,null,r,n):Me(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),Jd(t,e,r,i,n);case 7:return Me(t,e,e.pendingProps,n),e.child;case 8:return Me(t,e,e.pendingProps.children,n),e.child;case 12:return Me(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,l=i.value,Z(No,r._currentValue),r._currentValue=l,s!==null)if(Et(s.value,l)){if(s.children===i.children&&!Be.current){e=Zt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var u=s.dependencies;if(u!==null){l=s.child;for(var c=u.firstContext;c!==null;){if(c.context===r){if(s.tag===1){c=qt(-1,n&-n),c.tag=2;var f=s.updateQueue;if(f!==null){f=f.shared;var k=f.pending;k===null?c.next=c:(c.next=k.next,k.next=c),f.pending=c}}s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),ou(s.return,n,e),u.lanes|=n;break}c=c.next}}else if(s.tag===10)l=s.type===e.type?null:s.child;else if(s.tag===18){if(l=s.return,l===null)throw Error(L(341));l.lanes|=n,u=l.alternate,u!==null&&(u.lanes|=n),ou(l,n,e),l=s.sibling}else l=s.child;if(l!==null)l.return=s;else for(l=s;l!==null;){if(l===e){l=null;break}if(s=l.sibling,s!==null){s.return=l.return,l=s;break}l=l.return}s=l}Me(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Pr(e,n),i=at(i),r=r(i),e.flags|=1,Me(t,e,r,n),e.child;case 14:return r=e.type,i=ft(r,e.pendingProps),i=ft(r.type,i),Zd(t,e,r,i,n);case 15:return Jg(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ft(r,i),ao(t,e),e.tag=1,He(r)?(t=!0,Ao(e)):t=!1,Pr(e,n),Xg(e,r,i),au(e,r,i,n),hu(null,e,r,!0,t,n);case 19:return rm(t,e,n);case 22:return Zg(t,e,n)}throw Error(L(156,e.tag))};function _m(t,e){return Kp(t,e)}function uw(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ot(t,e,n,r){return new uw(t,e,n,r)}function Pc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function cw(t){if(typeof t=="function")return Pc(t)?1:0;if(t!=null){if(t=t.$$typeof,t===qu)return 11;if(t===Xu)return 14}return 2}function Rn(t,e){var n=t.alternate;return n===null?(n=ot(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ho(t,e,n,r,i,s){var l=2;if(r=t,typeof t=="function")Pc(t)&&(l=1);else if(typeof t=="string")l=5;else e:switch(t){case fr:return qn(n.children,i,s,e);case Gu:l=8,i|=8;break;case Da:return t=ot(12,n,e,i|2),t.elementType=Da,t.lanes=s,t;case La:return t=ot(13,n,e,i),t.elementType=La,t.lanes=s,t;case xa:return t=ot(19,n,e,i),t.elementType=xa,t.lanes=s,t;case Pp:return hl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ap:l=10;break e;case Rp:l=9;break e;case qu:l=11;break e;case Xu:l=14;break e;case dn:l=16,r=null;break e}throw Error(L(130,t==null?t:typeof t,""))}return e=ot(l,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function qn(t,e,n,r){return t=ot(7,t,r,e),t.lanes=n,t}function hl(t,e,n,r){return t=ot(22,t,r,e),t.elementType=Pp,t.lanes=n,t.stateNode={isHidden:!1},t}function ya(t,e,n){return t=ot(6,t,null,e),t.lanes=n,t}function _a(t,e,n){return e=ot(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function hw(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zl(0),this.expirationTimes=Zl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nc(t,e,n,r,i,s,l,u,c){return t=new hw(t,e,n,u,c),e===1?(e=1,s===!0&&(e|=8)):e=0,s=ot(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},fc(s),t}function dw(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wm(t){if(!t)return Dn;t=t._reactInternals;e:{if(rr(t)!==t||t.tag!==1)throw Error(L(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(He(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(L(171))}if(t.tag===1){var n=t.type;if(He(n))return wg(t,n,e)}return e}function Em(t,e,n,r,i,s,l,u,c){return t=Nc(n,r,!0,t,i,s,l,u,c),t.context=wm(null),n=t.current,r=Ue(),i=An(n),s=qt(r,i),s.callback=e??null,In(n,s,i),t.current.lanes=i,ss(t,i,r),Ve(t,r),t}function dl(t,e,n,r){var i=e.current,s=Ue(),l=An(i);return n=wm(n),e.context===null?e.context=n:e.pendingContext=n,e=qt(s,l),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=In(i,e,l),t!==null&&(_t(t,i,l,s),so(t,i,l)),l}function zo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function df(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Oc(t,e){df(t,e),(t=t.alternate)&&df(t,e)}function fw(){return null}var Tm=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dc(t){this._internalRoot=t}fl.prototype.render=Dc.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(L(409));dl(t,e,null,null)};fl.prototype.unmount=Dc.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zn(function(){dl(null,t,null,null)}),e[Qt]=null}};function fl(t){this._internalRoot=t}fl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zp();t={blockedOn:null,target:t,priority:e};for(var n=0;n<pn.length&&e!==0&&e<pn[n].priority;n++);pn.splice(n,0,t),n===0&&tg(t)}};function Lc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function pl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ff(){}function pw(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var f=zo(l);s.call(f)}}var l=Em(e,r,t,0,null,!1,!1,"",ff);return t._reactRootContainer=l,t[Qt]=l.current,Hi(t.nodeType===8?t.parentNode:t),Zn(),l}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var u=r;r=function(){var f=zo(c);u.call(f)}}var c=Nc(t,0,!1,null,null,!1,!1,"",ff);return t._reactRootContainer=c,t[Qt]=c.current,Hi(t.nodeType===8?t.parentNode:t),Zn(function(){dl(e,c,n,r)}),c}function gl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var l=s;if(typeof i=="function"){var u=i;i=function(){var c=zo(l);u.call(c)}}dl(e,l,t,i)}else l=pw(n,e,t,i,r);return zo(l)}Qp=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=wi(e.pendingLanes);n!==0&&(Ju(e,n|1),Ve(e,he()),!(G&6)&&(Br=he()+500,Mn()))}break;case 13:Zn(function(){var r=Jt(t,1);if(r!==null){var i=Ue();_t(r,t,1,i)}}),Oc(t,1)}};Zu=function(t){if(t.tag===13){var e=Jt(t,134217728);if(e!==null){var n=Ue();_t(e,t,134217728,n)}Oc(t,134217728)}};Jp=function(t){if(t.tag===13){var e=An(t),n=Jt(t,e);if(n!==null){var r=Ue();_t(n,t,e,r)}Oc(t,e)}};Zp=function(){return Y};eg=function(t,e){var n=Y;try{return Y=t,e()}finally{Y=n}};Va=function(t,e,n){switch(e){case"input":if(Fa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=sl(r);if(!i)throw Error(L(90));Op(r),Fa(r,i)}}}break;case"textarea":Lp(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};zp=Cc;$p=Zn;var gw={usingClientEntryPoint:!1,Events:[ls,vr,sl,jp,bp,Cc]},vi={findFiberByHostInstance:Hn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},mw={bundleType:vi.bundleType,version:vi.version,rendererPackageName:vi.rendererPackageName,rendererConfig:vi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:nn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vp(t),t===null?null:t.stateNode},findFiberByHostInstance:vi.findFiberByHostInstance||fw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ks=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ks.isDisabled&&Ks.supportsFiber)try{tl=Ks.inject(mw),At=Ks}catch{}}Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gw;Ze.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Lc(e))throw Error(L(200));return dw(t,e,null,n)};Ze.createRoot=function(t,e){if(!Lc(t))throw Error(L(299));var n=!1,r="",i=Tm;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Nc(t,1,!1,null,null,n,!1,r,i),t[Qt]=e.current,Hi(t.nodeType===8?t.parentNode:t),new Dc(e)};Ze.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(L(188)):(t=Object.keys(t).join(","),Error(L(268,t)));return t=Vp(e),t=t===null?null:t.stateNode,t};Ze.flushSync=function(t){return Zn(t)};Ze.hydrate=function(t,e,n){if(!pl(e))throw Error(L(200));return gl(null,t,e,!0,n)};Ze.hydrateRoot=function(t,e,n){if(!Lc(t))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",l=Tm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),e=Em(e,null,t,1,n??null,i,!1,s,l),t[Qt]=e.current,Hi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new fl(e)};Ze.render=function(t,e,n){if(!pl(e))throw Error(L(200));return gl(null,t,e,!1,n)};Ze.unmountComponentAtNode=function(t){if(!pl(t))throw Error(L(40));return t._reactRootContainer?(Zn(function(){gl(null,null,t,!1,function(){t._reactRootContainer=null,t[Qt]=null})}),!0):!1};Ze.unstable_batchedUpdates=Cc;Ze.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!pl(n))throw Error(L(200));if(t==null||t._reactInternals===void 0)throw Error(L(38));return gl(t,e,n,!1,r)};Ze.version="18.3.1-next-f1338f8080-20240426";function km(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(km)}catch(t){console.error(t)}}km(),kp.exports=Ze;var Sm=kp.exports;const FI=ju(Sm);var pf=Sm;Na.createRoot=pf.createRoot,Na.hydrateRoot=pf.hydrateRoot;const vw=(t,e)=>{let n;return(...r)=>{clearTimeout(n),n=setTimeout(()=>{t(...r)},e)}},Im=V.createContext(),yw=({children:t,debounceDelay:e})=>{const[n,r]=V.useState({width:window.innerWidth,height:window.innerHeight}),i=vw(()=>{r({width:window.innerWidth,height:window.innerHeight})},e);return V.useEffect(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[]),B.jsx(Im.Provider,{value:n,children:t})},jI=()=>V.useContext(Im);var gf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_w=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],l=t[n++],u=t[n++],c=((i&7)<<18|(s&63)<<12|(l&63)<<6|u&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],l=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|l&63)}}return e.join("")},xc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],l=i+1<t.length,u=l?t[i+1]:0,c=i+2<t.length,f=c?t[i+2]:0,k=s>>2,I=(s&3)<<4|u>>4;let S=(u&15)<<2|f>>6,O=f&63;c||(O=64,l||(S=64)),r.push(n[k],n[I],n[S],n[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Cm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_w(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],u=i<t.length?n[t.charAt(i)]:0;++i;const f=i<t.length?n[t.charAt(i)]:64;++i;const I=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||u==null||f==null||I==null)throw new ww;const S=s<<2|u>>4;if(r.push(S),f!==64){const O=u<<4&240|f>>2;if(r.push(O),I!==64){const N=f<<6&192|I;r.push(N)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class ww extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Ew=function(t){const e=Cm(t);return xc.encodeByteArray(e,!0)},$o=function(t){return Ew(t).replace(/\./g,"")},Am=function(t){try{return xc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tw=()=>Rm().__FIREBASE_DEFAULTS__,kw=()=>{if(typeof process>"u"||typeof gf>"u")return;const t=gf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Sw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Am(t[1]);return e&&JSON.parse(e)},Mc=()=>{try{return Tw()||kw()||Sw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Pm=t=>{var e,n;return(n=(e=Mc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Uc=t=>{const e=Pm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Nm=()=>{var t;return(t=Mc())===null||t===void 0?void 0:t.config},Om=t=>{var e;return(e=Mc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[$o(JSON.stringify(n)),$o(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Iw(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(De())}function Cw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Aw(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Rw(){const t=De();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Fc(){try{return typeof indexedDB=="object"}catch{return!1}}function Pw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nw="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=Nw,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gr.prototype.create)}}class Gr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],l=s?Ow(s,r):"Error",u=`${this.serviceName}: ${l} (${i}).`;return new kt(i,u,r)}}function Ow(t,e){return t.replace(Dw,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Dw=/\{\$([^}]+)}/g;function Lw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Bo(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],l=e[i];if(mf(s)&&mf(l)){if(!Bo(s,l))return!1}else if(s!==l)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function mf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function us(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ki(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function xw(t,e){const n=new Mw(t,e);return n.subscribe.bind(n)}class Mw{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Uw(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=wa),i.error===void 0&&(i.error=wa),i.complete===void 0&&(i.complete=wa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Uw(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function wa(){}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fw=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,t=>{const e=Math.random()*16|0;return(t==="x"?e:e&3|8).toString(16)})};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw=1e3,bw=2,zw=4*60*60*1e3,$w=.5;function Bw(t,e=jw,n=bw){const r=e*Math.pow(n,t),i=Math.round($w*r*(Math.random()-.5)*2);return Math.min(zw,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(t){return t&&t._delegate?t._delegate:t}class Tt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hw{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Ji;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ww(e))try{this.getOrInitializeService({instanceIdentifier:Bn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Bn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Bn){return this.instances.has(e)}getOptions(e=Bn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,l]of this.instancesDeferred.entries()){const u=this.normalizeInstanceIdentifier(s);r===u&&l.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const l=this.instances.get(i);return l&&e(l,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Vw(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Bn){return this.component?this.component.multipleInstances?e:Bn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Vw(t){return t===Bn?void 0:t}function Ww(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kw{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Hw(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var X;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(X||(X={}));const Gw={debug:X.DEBUG,verbose:X.VERBOSE,info:X.INFO,warn:X.WARN,error:X.ERROR,silent:X.SILENT},qw=X.INFO,Xw={[X.DEBUG]:"log",[X.VERBOSE]:"log",[X.INFO]:"info",[X.WARN]:"warn",[X.ERROR]:"error"},Yw=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=Xw[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ml{constructor(e){this.name=e,this._logLevel=qw,this._logHandler=Yw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in X))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gw[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,X.DEBUG,...e),this._logHandler(this,X.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,X.VERBOSE,...e),this._logHandler(this,X.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,X.INFO,...e),this._logHandler(this,X.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,X.WARN,...e),this._logHandler(this,X.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,X.ERROR,...e),this._logHandler(this,X.ERROR,...e)}}const Qw=(t,e)=>e.some(n=>t instanceof n);let vf,yf;function Jw(){return vf||(vf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zw(){return yf||(yf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,ku=new WeakMap,xm=new WeakMap,Ea=new WeakMap,jc=new WeakMap;function eE(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",l)},s=()=>{n(Pn(t.result)),i()},l=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",l)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,t)}).catch(()=>{}),jc.set(e,t),e}function tE(t){if(ku.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",l),t.removeEventListener("abort",l)},s=()=>{n(),i()},l=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",l),t.addEventListener("abort",l)});ku.set(t,e)}let Su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ku.get(t);if(e==="objectStoreNames")return t.objectStoreNames||xm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Pn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function nE(t){Su=t(Su)}function rE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ta(this),e,...n);return xm.set(r,e.sort?e.sort():[e]),Pn(r)}:Zw().includes(t)?function(...e){return t.apply(Ta(this),e),Pn(Lm.get(this))}:function(...e){return Pn(t.apply(Ta(this),e))}}function iE(t){return typeof t=="function"?rE(t):(t instanceof IDBTransaction&&tE(t),Qw(t,Jw())?new Proxy(t,Su):t)}function Pn(t){if(t instanceof IDBRequest)return eE(t);if(Ea.has(t))return Ea.get(t);const e=iE(t);return e!==t&&(Ea.set(t,e),jc.set(e,t)),e}const Ta=t=>jc.get(t);function sE(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const l=indexedDB.open(t,e),u=Pn(l);return r&&l.addEventListener("upgradeneeded",c=>{r(Pn(l.result),c.oldVersion,c.newVersion,Pn(l.transaction),c)}),n&&l.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),u.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",f=>i(f.oldVersion,f.newVersion,f))}).catch(()=>{}),u}const oE=["get","getKey","getAll","getAllKeys","count"],lE=["put","add","delete","clear"],ka=new Map;function _f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=lE.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||oE.includes(n)))return;const s=async function(l,...u){const c=this.transaction(l,i?"readwrite":"readonly");let f=c.store;return r&&(f=f.index(u.shift())),(await Promise.all([f[n](...u),i&&c.done]))[0]};return ka.set(e,s),s}nE(t=>({...t,get:(e,n,r)=>_f(e,n)||t.get(e,n,r),has:(e,n)=>!!_f(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uE(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Iu="@firebase/app",wf="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new ml("@firebase/app"),cE="@firebase/app-compat",hE="@firebase/analytics-compat",dE="@firebase/analytics",fE="@firebase/app-check-compat",pE="@firebase/app-check",gE="@firebase/auth",mE="@firebase/auth-compat",vE="@firebase/database",yE="@firebase/database-compat",_E="@firebase/functions",wE="@firebase/functions-compat",EE="@firebase/installations",TE="@firebase/installations-compat",kE="@firebase/messaging",SE="@firebase/messaging-compat",IE="@firebase/performance",CE="@firebase/performance-compat",AE="@firebase/remote-config",RE="@firebase/remote-config-compat",PE="@firebase/storage",NE="@firebase/storage-compat",OE="@firebase/firestore",DE="@firebase/vertexai-preview",LE="@firebase/firestore-compat",xE="firebase",ME="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="[DEFAULT]",UE={[Iu]:"fire-core",[cE]:"fire-core-compat",[dE]:"fire-analytics",[hE]:"fire-analytics-compat",[pE]:"fire-app-check",[fE]:"fire-app-check-compat",[gE]:"fire-auth",[mE]:"fire-auth-compat",[vE]:"fire-rtdb",[yE]:"fire-rtdb-compat",[_E]:"fire-fn",[wE]:"fire-fn-compat",[EE]:"fire-iid",[TE]:"fire-iid-compat",[kE]:"fire-fcm",[SE]:"fire-fcm-compat",[IE]:"fire-perf",[CE]:"fire-perf-compat",[AE]:"fire-rc",[RE]:"fire-rc-compat",[PE]:"fire-gcs",[NE]:"fire-gcs-compat",[OE]:"fire-fst",[LE]:"fire-fst-compat",[DE]:"fire-vertex","fire-js":"fire-js",[xE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ho=new Map,FE=new Map,Au=new Map;function Ef(t,e){try{t.container.addComponent(e)}catch(n){er.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Nt(t){const e=t.name;if(Au.has(e))return er.debug(`There were multiple attempts to register component ${e}.`),!1;Au.set(e,t);for(const n of Ho.values())Ef(n,t);for(const n of FE.values())Ef(n,t);return!0}function ir(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function mt(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nn=new Gr("app","Firebase",jE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr=ME;function Mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Cu,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=Nm()),!n)throw Nn.create("no-options");const s=Ho.get(i);if(s){if(Bo(n,s.options)&&Bo(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const l=new Kw(i);for(const c of Au.values())l.addComponent(c);const u=new bE(n,r,l);return Ho.set(i,u),u}function cs(t=Cu){const e=Ho.get(t);if(!e&&t===Cu&&Nm())return Mm();if(!e)throw Nn.create("no-app",{appName:t});return e}function Qe(t,e,n){var r;let i=(r=UE[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),l=e.match(/\s|\//);if(s||l){const u=[`Unable to register library "${i}" with version "${e}":`];s&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),er.warn(u.join(" "));return}Nt(new Tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zE="firebase-heartbeat-database",$E=1,Zi="firebase-heartbeat-store";let Sa=null;function Um(){return Sa||(Sa=sE(zE,$E,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Zi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nn.create("idb-open",{originalErrorMessage:t.message})})),Sa}async function BE(t){try{const n=(await Um()).transaction(Zi),r=await n.objectStore(Zi).get(Fm(t));return await n.done,r}catch(e){if(e instanceof kt)er.warn(e.message);else{const n=Nn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});er.warn(n.message)}}}async function Tf(t,e){try{const r=(await Um()).transaction(Zi,"readwrite");await r.objectStore(Zi).put(e,Fm(t)),await r.done}catch(n){if(n instanceof kt)er.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function Fm(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HE=1024,VE=30*24*60*60*1e3;class WE{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new GE(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=kf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(l=>l.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(l=>{const u=new Date(l.date).valueOf();return Date.now()-u<=VE}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kf(),{heartbeatsToSend:r,unsentEntries:i}=KE(this._heartbeatsCache.heartbeats),s=$o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function kf(){return new Date().toISOString().substring(0,10)}function KE(t,e=HE){const n=[];let r=t.slice();for(const i of t){const s=n.find(l=>l.agent===i.agent);if(s){if(s.dates.push(i.date),Sf(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Sf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class GE{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Fc()?Pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await BE(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Tf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Sf(t){return $o(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qE(t){Nt(new Tt("platform-logger",e=>new aE(e),"PRIVATE")),Nt(new Tt("heartbeat",e=>new WE(e),"PRIVATE")),Qe(Iu,wf,t),Qe(Iu,wf,"esm2017"),Qe("fire-js","")}qE("");function bc(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function jm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const XE=jm,bm=new Gr("auth","Firebase",jm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vo=new ml("@firebase/auth");function YE(t,...e){Vo.logLevel<=X.WARN&&Vo.warn(`Auth (${sr}): ${t}`,...e)}function fo(t,...e){Vo.logLevel<=X.ERROR&&Vo.error(`Auth (${sr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(t,...e){throw $c(t,...e)}function wt(t,...e){return $c(t,...e)}function zc(t,e,n){const r=Object.assign(Object.assign({},XE()),{[e]:n});return new Gr("auth","Firebase",r).create(e,{appName:t.name})}function Xt(t){return zc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QE(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&ct(t,"argument-error"),zc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function $c(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bm.create(t,...e)}function z(t,e,...n){if(!t)throw $c(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fo(e),new Error(e)}function en(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ru(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function JE(){return If()==="http:"||If()==="https:"}function If(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(JE()||Cw()||"connection"in navigator)?navigator.onLine:!0}function e1(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hs{constructor(e,n){this.shortDelay=e,this.longDelay=n,en(n>e,"Short delay should be less than long delay!"),this.isMobile=Iw()||Aw()}get(){return ZE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(t,e){en(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n1=new hs(3e4,6e4);function rn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function sn(t,e,n,r,i={}){return $m(t,i,async()=>{let s={},l={};r&&(e==="GET"?l=r:s={body:JSON.stringify(r)});const u=us(Object.assign({key:t.config.apiKey},l)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),zm.fetch()(Bm(t,t.config.apiHost,n,u),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function $m(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},t1),e);try{const i=new i1(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const l=await s.json();if("needConfirmation"in l)throw Gs(t,"account-exists-with-different-credential",l);if(s.ok&&!("errorMessage"in l))return l;{const u=s.ok?l.errorMessage:l.error.message,[c,f]=u.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Gs(t,"credential-already-in-use",l);if(c==="EMAIL_EXISTS")throw Gs(t,"email-already-in-use",l);if(c==="USER_DISABLED")throw Gs(t,"user-disabled",l);const k=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw zc(t,k,f);ct(t,k)}}catch(i){if(i instanceof kt)throw i;ct(t,"network-request-failed",{message:String(i)})}}async function ds(t,e,n,r,i={}){const s=await sn(t,e,n,r,i);return"mfaPendingCredential"in s&&ct(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Bm(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Bc(t.config,i):`${t.config.apiScheme}://${i}`}function r1(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class i1{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wt(this.auth,"network-request-failed")),n1.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Gs(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=wt(t,e,r);return i.customData._tokenResponse=n,i}function Cf(t){return t!==void 0&&t.enterprise!==void 0}class s1{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return r1(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function o1(t,e){return sn(t,"GET","/v2/recaptchaConfig",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(t,e){return sn(t,"POST","/v1/accounts:delete",e)}async function Hm(t,e){return sn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a1(t,e=!1){const n=We(t),r=await n.getIdToken(e),i=Hc(r);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,l=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(Ia(i.auth_time)),issuedAtTime:Li(Ia(i.iat)),expirationTime:Li(Ia(i.exp)),signInProvider:l||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ia(t){return Number(t)*1e3}function Hc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Am(n);return i?JSON.parse(i):(fo("Failed to decode base64 JWT payload"),null)}catch(i){return fo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Af(t){const e=Hc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function es(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&u1(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function u1({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wo(t){var e;const n=t.auth,r=await t.getIdToken(),i=await es(t,Hm(n,{idToken:r}));z(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const l=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Vm(s.providerUserInfo):[],u=d1(t.providerData,l),c=t.isAnonymous,f=!(t.email&&s.passwordHash)&&!(u!=null&&u.length),k=c?f:!1,I={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:u,metadata:new Pu(s.createdAt,s.lastLoginAt),isAnonymous:k};Object.assign(t,I)}async function h1(t){const e=We(t);await Wo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function d1(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Vm(t){return t.map(e=>{var{providerId:n}=e,r=bc(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e){const n=await $m(t,{},async()=>{const r=us({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,l=Bm(t,i,"/v1/token",`key=${s}`),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/x-www-form-urlencoded",zm.fetch()(l,{method:"POST",headers:u,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function p1(t,e){return sn(t,"POST","/v2/accounts:revokeToken",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Or{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Af(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=Af(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await f1(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,l=new Or;return r&&(z(typeof r=="string","internal-error",{appName:e}),l.refreshToken=r),i&&(z(typeof i=="string","internal-error",{appName:e}),l.accessToken=i),s&&(z(typeof s=="number","internal-error",{appName:e}),l.expirationTime=s),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Or,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=bc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Pu(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await es(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a1(this,e)}reload(){return h1(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(mt(this.auth.app))return Promise.reject(Xt(this.auth));const e=await this.getIdToken();return await es(this,l1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,l,u,c,f,k;const I=(r=n.displayName)!==null&&r!==void 0?r:void 0,S=(i=n.email)!==null&&i!==void 0?i:void 0,O=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,N=(l=n.photoURL)!==null&&l!==void 0?l:void 0,D=(u=n.tenantId)!==null&&u!==void 0?u:void 0,b=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,T=(f=n.createdAt)!==null&&f!==void 0?f:void 0,_=(k=n.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:E,emailVerified:P,isAnonymous:M,providerData:U,stsTokenManager:m}=n;z(E&&m,e,"internal-error");const p=Or.fromJSON(this.name,m);z(typeof E=="string",e,"internal-error"),hn(I,e.name),hn(S,e.name),z(typeof P=="boolean",e,"internal-error"),z(typeof M=="boolean",e,"internal-error"),hn(O,e.name),hn(N,e.name),hn(D,e.name),hn(b,e.name),hn(T,e.name),hn(_,e.name);const g=new Kt({uid:E,auth:e,email:S,emailVerified:P,displayName:I,isAnonymous:M,photoURL:N,phoneNumber:O,tenantId:D,stsTokenManager:p,createdAt:T,lastLoginAt:_});return U&&Array.isArray(U)&&(g.providerData=U.map(y=>Object.assign({},y))),b&&(g._redirectEventId=b),g}static async _fromIdTokenResponse(e,n,r=!1){const i=new Or;i.updateFromServerResponse(n);const s=new Kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wo(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];z(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Vm(i.providerUserInfo):[],l=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),u=new Or;u.updateFromIdToken(r);const c=new Kt({uid:i.localId,auth:e,stsTokenManager:u,isAnonymous:l}),f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Pu(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,f),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rf=new Map;function Gt(t){en(t instanceof Function,"Expected a class definition");let e=Rf.get(t);return e?(en(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Rf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wm.type="NONE";const Pf=Wm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(t,e,n){return`firebase:${t}:${e}:${n}`}class Dr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=po(this.userKey,i.apiKey,s),this.fullPersistenceKey=po("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Kt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Dr(Gt(Pf),e,r);const i=(await Promise.all(n.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let s=i[0]||Gt(Pf);const l=po(r,e.config.apiKey,e.name);let u=null;for(const f of n)try{const k=await f._get(l);if(k){const I=Kt._fromJSON(e,k);f!==s&&(u=I),s=f;break}}catch{}const c=i.filter(f=>f._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Dr(s,e,r):(s=c[0],u&&await s._set(l,u.toJSON()),await Promise.all(n.map(async f=>{if(f!==s)try{await f._remove(l)}catch{}})),new Dr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(qm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Km(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ym(e))return"Blackberry";if(Qm(e))return"Webos";if(Vc(e))return"Safari";if((e.includes("chrome/")||Gm(e))&&!e.includes("edge/"))return"Chrome";if(Xm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Km(t=De()){return/firefox\//i.test(t)}function Vc(t=De()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gm(t=De()){return/crios\//i.test(t)}function qm(t=De()){return/iemobile/i.test(t)}function Xm(t=De()){return/android/i.test(t)}function Ym(t=De()){return/blackberry/i.test(t)}function Qm(t=De()){return/webos/i.test(t)}function vl(t=De()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g1(t=De()){var e;return vl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m1(){return Rw()&&document.documentMode===10}function Jm(t=De()){return vl(t)||Xm(t)||Qm(t)||Ym(t)||/windows phone/i.test(t)||qm(t)}function v1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t,e=[]){let n;switch(t){case"Browser":n=Nf(De());break;case"Worker":n=`${Nf(De())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${sr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((l,u)=>{try{const c=e(s);l(c)}catch(c){u(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(t,e={}){return sn(t,"GET","/v2/passwordPolicy",rn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=6;class E1{constructor(e){var n,r,i,s;const l=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=l.minPasswordLength)!==null&&n!==void 0?n:w1,l.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=l.maxPasswordLength),l.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=l.containsLowercaseCharacter),l.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=l.containsUppercaseCharacter),l.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=l.containsNumericCharacter),l.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=l.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,l,u;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(i=c.containsLowercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(s=c.containsUppercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(l=c.containsNumericCharacter)!==null&&l!==void 0?l:!0),c.isValid&&(c.isValid=(u=c.containsNonAlphanumericCharacter)!==null&&u!==void 0?u:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T1{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Of(this),this.idTokenSubscription=new Of(this),this.beforeStateQueue=new y1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Gt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Dr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Hm(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(mt(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(u=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(u,u))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,u=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!l||l===u)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(l){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=e1()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(mt(this.app))return Promise.reject(Xt(this));const n=e?We(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return mt(this.app)?Promise.reject(Xt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return mt(this.app)?Promise.reject(Xt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _1(this),n=new E1(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Gr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await p1(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Gt(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Dr.create(this,[Gt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let l=!1;const u=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(u,this,"internal-error"),u.then(()=>{l||s(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,i);return()=>{l=!0,c()}}else{const c=e.addObserver(n);return()=>{l=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function on(t){return We(t)}class Of{constructor(e){this.auth=e,this.observer=null,this.addObserver=xw(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function k1(t){yl=t}function ev(t){return yl.loadJS(t)}function S1(){return yl.recaptchaEnterpriseScript}function I1(){return yl.gapiScript}function C1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const A1="recaptcha-enterprise",R1="NO_RECAPTCHA";class P1{constructor(e){this.type=A1,this.auth=on(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(l,u)=>{o1(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)u(new Error("recaptcha Enterprise site key undefined"));else{const f=new s1(c);return s.tenantId==null?s._agentRecaptchaConfig=f:s._tenantRecaptchaConfigs[s.tenantId]=f,l(f.siteKey)}}).catch(c=>{u(c)})})}function i(s,l,u){const c=window.grecaptcha;Cf(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(f=>{l(f)}).catch(()=>{l(R1)})}):u(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,l)=>{r(this.auth).then(u=>{if(!n&&Cf(window.grecaptcha))i(u,s,l);else{if(typeof window>"u"){l(new Error("RecaptchaVerifier is only supported in browser"));return}let c=S1();c.length!==0&&(c+=u),ev(c).then(()=>{i(u,s,l)}).catch(f=>{l(f)})}}).catch(u=>{l(u)})})}}async function Df(t,e,n,r=!1){const i=new P1(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const l=Object.assign({},e);return r?Object.assign(l,{captchaResp:s}):Object.assign(l,{captchaResponse:s}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Ko(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await Df(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Df(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N1(t,e){const n=ir(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Bo(s,e??{}))return i;ct(i,"already-initialized")}return n.initialize({options:e})}function O1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Gt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function tv(t,e,n){const r=on(t);z(r._canInitEmulator,r,"emulator-config-failed"),z(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=nv(e),{host:l,port:u}=D1(e),c=u===null?"":`:${u}`;r.config.emulator={url:`${s}//${l}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:l,port:u,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),L1()}function nv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function D1(t){const e=nv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Lf(r.substr(s.length+1))}}else{const[s,l]=r.split(":");return{host:s,port:Lf(l)}}}function Lf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function L1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function x1(t,e){return sn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(t,e){return ds(t,"POST","/v1/accounts:signInWithPassword",rn(t,e))}async function rv(t,e){return sn(t,"POST","/v1/accounts:sendOobCode",rn(t,e))}async function U1(t,e){return rv(t,e)}async function F1(t,e){return rv(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j1(t,e){return ds(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}async function b1(t,e){return ds(t,"POST","/v1/accounts:signInWithEmailLink",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts extends Wc{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new ts(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new ts(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ko(e,n,"signInWithPassword",M1);case"emailLink":return j1(e,{email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ko(e,r,"signUpPassword",x1);case"emailLink":return b1(e,{idToken:n,email:this._email,oobCode:this._password});default:ct(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lr(t,e){return ds(t,"POST","/v1/accounts:signInWithIdp",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z1="http://localhost";class tn extends Wc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):ct("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=bc(n,["providerId","signInMethod"]);if(!r||!i)return null;const l=new tn(r,i);return l.idToken=s.idToken||void 0,l.accessToken=s.accessToken||void 0,l.secret=s.secret,l.nonce=s.nonce,l.pendingToken=s.pendingToken||null,l}_getIdTokenResponse(e){const n=this.buildRequest();return Lr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Lr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Lr(e,n)}buildRequest(){const e={requestUri:z1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=us(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function B1(t){const e=Ti(ki(t)).link,n=e?Ti(ki(e)).deep_link_id:null,r=Ti(ki(t)).deep_link_id;return(r?Ti(ki(r)).link:null)||r||n||e||t}class Kc{constructor(e){var n,r,i,s,l,u;const c=Ti(ki(e)),f=(n=c.apiKey)!==null&&n!==void 0?n:null,k=(r=c.oobCode)!==null&&r!==void 0?r:null,I=$1((i=c.mode)!==null&&i!==void 0?i:null);z(f&&k&&I,"argument-error"),this.apiKey=f,this.operation=I,this.code=k,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(l=c.languageCode)!==null&&l!==void 0?l:null,this.tenantId=(u=c.tenantId)!==null&&u!==void 0?u:null}static parseLink(e){const n=B1(e);try{return new Kc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.providerId=qr.PROVIDER_ID}static credential(e,n){return ts._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Kc.parseLink(n);return z(r,"argument-error"),ts._fromEmailAndCode(e,r.code,r.tenantId)}}qr.PROVIDER_ID="password";qr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";qr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends Gc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class xi extends Xr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return z("providerId"in n&&"signInMethod"in n,"argument-error"),tn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return z(e.idToken||e.accessToken,"argument-error"),tn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return xi.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return xi.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:l,providerId:u}=e;if(!r&&!i&&!n&&!s||!u)return null;try{return new xi(u)._credential({idToken:n,accessToken:r,nonce:l,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn extends Xr{constructor(){super("facebook.com")}static credential(e){return tn._fromParams({providerId:mn.PROVIDER_ID,signInMethod:mn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mn.credentialFromTaggedObject(e)}static credentialFromError(e){return mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mn.credential(e.oauthAccessToken)}catch{return null}}}mn.FACEBOOK_SIGN_IN_METHOD="facebook.com";mn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Xr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Xr{constructor(){super("github.com")}static credential(e){return tn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Xr{constructor(){super("twitter.com")}static credential(e,n){return tn._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.TWITTER_SIGN_IN_METHOD="twitter.com";yn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function H1(t,e){return ds(t,"POST","/v1/accounts:signUp",rn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kt._fromIdTokenResponse(e,r,i),l=xf(r);return new tr({user:s,providerId:l,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=xf(r);return new tr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function xf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go extends kt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Go(e,n,r,i)}}function iv(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,s,e,r):s})}async function V1(t,e,n=!1){const r=await es(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return tr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e,n=!1){const{auth:r}=t;if(mt(r.app))return Promise.reject(Xt(r));const i="reauthenticate";try{const s=await es(t,iv(r,i,e,t),n);z(s.idToken,r,"internal-error");const l=Hc(s.idToken);z(l,r,"internal-error");const{sub:u}=l;return z(t.uid===u,r,"user-mismatch"),tr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ct(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sv(t,e,n=!1){if(mt(t.app))return Promise.reject(Xt(t));const r="signIn",i=await iv(t,r,e),s=await tr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function K1(t,e){return sv(on(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ov(t){const e=on(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function bI(t,e,n){const r=on(t);await Ko(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",F1)}async function zI(t,e,n){if(mt(t.app))return Promise.reject(Xt(t));const r=on(t),l=await Ko(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",H1).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&ov(t),c}),u=await tr._fromIdTokenResponse(r,"signIn",l);return await r._updateCurrentUser(u.user),u}function $I(t,e,n){return mt(t.app)?Promise.reject(Xt(t)):K1(We(t),qr.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&ov(t),r})}async function BI(t,e){const n=We(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()},{email:s}=await U1(n.auth,i);s!==t.email&&await t.reload()}function G1(t,e,n,r){return We(t).onIdTokenChanged(e,n,r)}function q1(t,e,n){return We(t).beforeAuthStateChanged(e,n)}function X1(t,e,n,r){return We(t).onAuthStateChanged(e,n,r)}const qo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qo,"1"),this.storage.removeItem(qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y1(){const t=De();return Vc(t)||vl(t)}const Q1=1e3,J1=10;class av extends lv{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y1()&&v1(),this.fallbackToPolling=Jm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((l,u,c)=>{this.notifyListeners(l,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const l=this.storage.getItem(r);if(e.newValue!==l)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const l=this.storage.getItem(r);!n&&this.localCache[r]===l||this.notifyListeners(r,l)},s=this.storage.getItem(r);m1()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,J1):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Q1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}av.type="LOCAL";const Z1=av;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv extends lv{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}uv.type="SESSION";const cv=uv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new _l(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,l=this.handlersMap[i];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const u=Array.from(l).map(async f=>f(n.origin,s)),c=await eT(u);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}_l.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,l;return new Promise((u,c)=>{const f=qc("",20);i.port1.start();const k=setTimeout(()=>{c(new Error("unsupported_event"))},r);l={messageChannel:i,onMessage(I){const S=I;if(S.data.eventId===f)switch(S.data.status){case"ack":clearTimeout(k),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),u(S.data.response);break;default:clearTimeout(k),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(l),i.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:e,eventId:f,data:n},[i.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(){return window}function nT(t){Pt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hv(){return typeof Pt().WorkerGlobalScope<"u"&&typeof Pt().importScripts=="function"}async function rT(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function iT(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sT(){return hv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv="firebaseLocalStorageDb",oT=1,Xo="firebaseLocalStorage",fv="fbase_key";class fs{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wl(t,e){return t.transaction([Xo],e?"readwrite":"readonly").objectStore(Xo)}function lT(){const t=indexedDB.deleteDatabase(dv);return new fs(t).toPromise()}function Nu(){const t=indexedDB.open(dv,oT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Xo,{keyPath:fv})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Xo)?e(r):(r.close(),await lT(),e(await Nu()))})})}async function Mf(t,e,n){const r=wl(t,!0).put({[fv]:e,value:n});return new fs(r).toPromise()}async function aT(t,e){const n=wl(t,!1).get(e),r=await new fs(n).toPromise();return r===void 0?null:r.value}function Uf(t,e){const n=wl(t,!0).delete(e);return new fs(n).toPromise()}const uT=800,cT=3;class pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Nu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cT)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return hv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=_l._getInstance(sT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rT(),!this.activeServiceWorker)return;this.sender=new tT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||iT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Nu();return await Mf(e,qo,"1"),await Uf(e,qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Mf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>aT(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=wl(i,!1).getAll();return new fs(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}pv.type="LOCAL";const hT=pv;new hs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gv(t,e){return e?Gt(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc extends Wc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Lr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Lr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Lr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function dT(t){return sv(t.auth,new Xc(t),t.bypassAuthState)}function fT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),W1(n,new Xc(t),t.bypassAuthState)}async function pT(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),V1(n,new Xc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:l,type:u}=e;if(l){this.reject(l);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(u)(c))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return dT;case"linkViaPopup":case"linkViaRedirect":return pT;case"reauthViaPopup":case"reauthViaRedirect":return fT;default:ct(this.auth,"internal-error")}}resolve(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){en(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new hs(2e3,1e4);async function HI(t,e,n){if(mt(t.app))return Promise.reject(wt(t,"operation-not-supported-in-this-environment"));const r=on(t);QE(t,e,Gc);const i=gv(r,n);return new Kn(r,"signInViaPopup",e,i).executeNotNull()}class Kn extends mv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Kn.currentPopupAction&&Kn.currentPopupAction.cancel(),Kn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){en(this.filter.length===1,"Popup operations only handle one event");const e=qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Kn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,gT.get())};e()}}Kn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT="pendingRedirect",go=new Map;class vT extends mv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=go.get(this.auth._key());if(!e){try{const r=await yT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}go.set(this.auth._key(),e)}return this.bypassAuthState||go.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function yT(t,e){const n=ET(e),r=wT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function _T(t,e){go.set(t._key(),e)}function wT(t){return Gt(t._redirectPersistence)}function ET(t){return po(mT,t.config.apiKey,t.name)}async function TT(t,e,n=!1){if(mt(t.app))return Promise.reject(Xt(t));const r=on(t),i=gv(r,e),l=await new vT(r,i,n).execute();return l&&!n&&(delete l.user._redirectEventId,await r._persistUserIfCurrent(l.user),await r._setRedirectUser(null,e)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kT=10*60*1e3;class ST{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!IT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!vv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ff(e))}saveEventToCache(e){this.cachedEventUids.add(Ff(e)),this.lastProcessedEventTime=Date.now()}}function Ff(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function vv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function IT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function CT(t,e={}){return sn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RT=/^https?/;async function PT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await CT(t);for(const n of e)try{if(NT(n))return}catch{}ct(t,"unauthorized-domain")}function NT(t){const e=Ru(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const l=new URL(t);return l.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===r}if(!RT.test(n))return!1;if(AT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OT=new hs(3e4,6e4);function jf(){const t=Pt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function DT(t){return new Promise((e,n)=>{var r,i,s;function l(){jf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{jf(),n(wt(t,"network-request-failed"))},timeout:OT.get()})}if(!((i=(r=Pt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Pt().gapi)===null||s===void 0)&&s.load)l();else{const u=C1("iframefcb");return Pt()[u]=()=>{gapi.load?l():n(wt(t,"network-request-failed"))},ev(`${I1()}?onload=${u}`).catch(c=>n(c))}}).catch(e=>{throw mo=null,e})}let mo=null;function LT(t){return mo=mo||DT(t),mo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xT=new hs(5e3,15e3),MT="__/auth/iframe",UT="emulator/auth/iframe",FT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bT(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Bc(e,UT):`https://${t.config.authDomain}/${MT}`,r={apiKey:e.apiKey,appName:t.name,v:sr},i=jT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${us(r).slice(1)}`}async function zT(t){const e=await LT(t),n=Pt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:bT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:FT,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const l=wt(t,"network-request-failed"),u=Pt().setTimeout(()=>{s(l)},xT.get());function c(){Pt().clearTimeout(u),i(r)}r.ping(c).then(c,()=>{s(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $T={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},BT=500,HT=600,VT="_blank",WT="http://localhost";class bf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KT(t,e,n,r=BT,i=HT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),l=Math.max((window.screen.availWidth-r)/2,0).toString();let u="";const c=Object.assign(Object.assign({},$T),{width:r.toString(),height:i.toString(),top:s,left:l}),f=De().toLowerCase();n&&(u=Gm(f)?VT:n),Km(f)&&(e=e||WT,c.scrollbars="yes");const k=Object.entries(c).reduce((S,[O,N])=>`${S}${O}=${N},`,"");if(g1(f)&&u!=="_self")return GT(e||"",u),new bf(null);const I=window.open(e||"",u,k);z(I,t,"popup-blocked");try{I.focus()}catch{}return new bf(I)}function GT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT="__/auth/handler",XT="emulator/auth/handler",YT=encodeURIComponent("fac");async function zf(t,e,n,r,i,s){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const l={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:sr,eventId:i};if(e instanceof Gc){e.setDefaultLanguage(t.languageCode),l.providerId=e.providerId||"",Lw(e.getCustomParameters())||(l.customParameters=JSON.stringify(e.getCustomParameters()));for(const[k,I]of Object.entries({}))l[k]=I}if(e instanceof Xr){const k=e.getScopes().filter(I=>I!=="");k.length>0&&(l.scopes=k.join(","))}t.tenantId&&(l.tid=t.tenantId);const u=l;for(const k of Object.keys(u))u[k]===void 0&&delete u[k];const c=await t._getAppCheckToken(),f=c?`#${YT}=${encodeURIComponent(c)}`:"";return`${QT(t)}?${us(u).slice(1)}${f}`}function QT({config:t}){return t.emulator?Bc(t,XT):`https://${t.authDomain}/${qT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ca="webStorageSupport";class JT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=cv,this._completeRedirectFn=TT,this._overrideRedirectResult=_T}async _openPopup(e,n,r,i){var s;en((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const l=await zf(e,n,r,Ru(),i);return KT(e,l,qc())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await zf(e,n,r,Ru(),i);return nT(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(en(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await zT(e),r=new ST(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var s;const l=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ca];l!==void 0&&n(!!l),ct(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=PT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jm()||Vc()||vl()}}const ZT=JT;var $f="@firebase/auth",Bf="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tk(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function nk(t){Nt(new Tt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:l,authDomain:u}=r.options;z(l&&!l.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:l,authDomain:u,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zm(t)},f=new T1(r,i,s,c);return O1(f,n),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Nt(new Tt("auth-internal",e=>{const n=on(e.getProvider("auth").getImmediate());return(r=>new ek(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qe($f,Bf,tk(t)),Qe($f,Bf,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=5*60,ik=Om("authIdTokenMaxAge")||rk;let Hf=null;const sk=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>ik)return;const i=n==null?void 0:n.token;Hf!==i&&(Hf=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ok(t=cs()){const e=ir(t,"auth");if(e.isInitialized())return e.getImmediate();const n=N1(t,{popupRedirectResolver:ZT,persistence:[hT,Z1,cv]}),r=Om("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const l=sk(s.toString());q1(n,l,()=>l(n.currentUser)),G1(n,u=>l(u))}}const i=Pm("auth");return i&&tv(n,`http://${i}`),n}function lk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}k1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=wt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",lk().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});nk("Browser");var ak="firebase",uk="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qe(ak,uk,"app");var Vf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var yv;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(m,p){function g(){}g.prototype=p.prototype,m.D=p.prototype,m.prototype=new g,m.prototype.constructor=m,m.C=function(y,w,A){for(var v=Array(arguments.length-2),nt=2;nt<arguments.length;nt++)v[nt-2]=arguments[nt];return p.prototype[w].apply(y,v)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(m,p,g){g||(g=0);var y=Array(16);if(typeof p=="string")for(var w=0;16>w;++w)y[w]=p.charCodeAt(g++)|p.charCodeAt(g++)<<8|p.charCodeAt(g++)<<16|p.charCodeAt(g++)<<24;else for(w=0;16>w;++w)y[w]=p[g++]|p[g++]<<8|p[g++]<<16|p[g++]<<24;p=m.g[0],g=m.g[1],w=m.g[2];var A=m.g[3],v=p+(A^g&(w^A))+y[0]+3614090360&4294967295;p=g+(v<<7&4294967295|v>>>25),v=A+(w^p&(g^w))+y[1]+3905402710&4294967295,A=p+(v<<12&4294967295|v>>>20),v=w+(g^A&(p^g))+y[2]+606105819&4294967295,w=A+(v<<17&4294967295|v>>>15),v=g+(p^w&(A^p))+y[3]+3250441966&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(A^g&(w^A))+y[4]+4118548399&4294967295,p=g+(v<<7&4294967295|v>>>25),v=A+(w^p&(g^w))+y[5]+1200080426&4294967295,A=p+(v<<12&4294967295|v>>>20),v=w+(g^A&(p^g))+y[6]+2821735955&4294967295,w=A+(v<<17&4294967295|v>>>15),v=g+(p^w&(A^p))+y[7]+4249261313&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(A^g&(w^A))+y[8]+1770035416&4294967295,p=g+(v<<7&4294967295|v>>>25),v=A+(w^p&(g^w))+y[9]+2336552879&4294967295,A=p+(v<<12&4294967295|v>>>20),v=w+(g^A&(p^g))+y[10]+4294925233&4294967295,w=A+(v<<17&4294967295|v>>>15),v=g+(p^w&(A^p))+y[11]+2304563134&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(A^g&(w^A))+y[12]+1804603682&4294967295,p=g+(v<<7&4294967295|v>>>25),v=A+(w^p&(g^w))+y[13]+4254626195&4294967295,A=p+(v<<12&4294967295|v>>>20),v=w+(g^A&(p^g))+y[14]+2792965006&4294967295,w=A+(v<<17&4294967295|v>>>15),v=g+(p^w&(A^p))+y[15]+1236535329&4294967295,g=w+(v<<22&4294967295|v>>>10),v=p+(w^A&(g^w))+y[1]+4129170786&4294967295,p=g+(v<<5&4294967295|v>>>27),v=A+(g^w&(p^g))+y[6]+3225465664&4294967295,A=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(A^p))+y[11]+643717713&4294967295,w=A+(v<<14&4294967295|v>>>18),v=g+(A^p&(w^A))+y[0]+3921069994&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(w^A&(g^w))+y[5]+3593408605&4294967295,p=g+(v<<5&4294967295|v>>>27),v=A+(g^w&(p^g))+y[10]+38016083&4294967295,A=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(A^p))+y[15]+3634488961&4294967295,w=A+(v<<14&4294967295|v>>>18),v=g+(A^p&(w^A))+y[4]+3889429448&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(w^A&(g^w))+y[9]+568446438&4294967295,p=g+(v<<5&4294967295|v>>>27),v=A+(g^w&(p^g))+y[14]+3275163606&4294967295,A=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(A^p))+y[3]+4107603335&4294967295,w=A+(v<<14&4294967295|v>>>18),v=g+(A^p&(w^A))+y[8]+1163531501&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(w^A&(g^w))+y[13]+2850285829&4294967295,p=g+(v<<5&4294967295|v>>>27),v=A+(g^w&(p^g))+y[2]+4243563512&4294967295,A=p+(v<<9&4294967295|v>>>23),v=w+(p^g&(A^p))+y[7]+1735328473&4294967295,w=A+(v<<14&4294967295|v>>>18),v=g+(A^p&(w^A))+y[12]+2368359562&4294967295,g=w+(v<<20&4294967295|v>>>12),v=p+(g^w^A)+y[5]+4294588738&4294967295,p=g+(v<<4&4294967295|v>>>28),v=A+(p^g^w)+y[8]+2272392833&4294967295,A=p+(v<<11&4294967295|v>>>21),v=w+(A^p^g)+y[11]+1839030562&4294967295,w=A+(v<<16&4294967295|v>>>16),v=g+(w^A^p)+y[14]+4259657740&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(g^w^A)+y[1]+2763975236&4294967295,p=g+(v<<4&4294967295|v>>>28),v=A+(p^g^w)+y[4]+1272893353&4294967295,A=p+(v<<11&4294967295|v>>>21),v=w+(A^p^g)+y[7]+4139469664&4294967295,w=A+(v<<16&4294967295|v>>>16),v=g+(w^A^p)+y[10]+3200236656&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(g^w^A)+y[13]+681279174&4294967295,p=g+(v<<4&4294967295|v>>>28),v=A+(p^g^w)+y[0]+3936430074&4294967295,A=p+(v<<11&4294967295|v>>>21),v=w+(A^p^g)+y[3]+3572445317&4294967295,w=A+(v<<16&4294967295|v>>>16),v=g+(w^A^p)+y[6]+76029189&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(g^w^A)+y[9]+3654602809&4294967295,p=g+(v<<4&4294967295|v>>>28),v=A+(p^g^w)+y[12]+3873151461&4294967295,A=p+(v<<11&4294967295|v>>>21),v=w+(A^p^g)+y[15]+530742520&4294967295,w=A+(v<<16&4294967295|v>>>16),v=g+(w^A^p)+y[2]+3299628645&4294967295,g=w+(v<<23&4294967295|v>>>9),v=p+(w^(g|~A))+y[0]+4096336452&4294967295,p=g+(v<<6&4294967295|v>>>26),v=A+(g^(p|~w))+y[7]+1126891415&4294967295,A=p+(v<<10&4294967295|v>>>22),v=w+(p^(A|~g))+y[14]+2878612391&4294967295,w=A+(v<<15&4294967295|v>>>17),v=g+(A^(w|~p))+y[5]+4237533241&4294967295,g=w+(v<<21&4294967295|v>>>11),v=p+(w^(g|~A))+y[12]+1700485571&4294967295,p=g+(v<<6&4294967295|v>>>26),v=A+(g^(p|~w))+y[3]+2399980690&4294967295,A=p+(v<<10&4294967295|v>>>22),v=w+(p^(A|~g))+y[10]+4293915773&4294967295,w=A+(v<<15&4294967295|v>>>17),v=g+(A^(w|~p))+y[1]+2240044497&4294967295,g=w+(v<<21&4294967295|v>>>11),v=p+(w^(g|~A))+y[8]+1873313359&4294967295,p=g+(v<<6&4294967295|v>>>26),v=A+(g^(p|~w))+y[15]+4264355552&4294967295,A=p+(v<<10&4294967295|v>>>22),v=w+(p^(A|~g))+y[6]+2734768916&4294967295,w=A+(v<<15&4294967295|v>>>17),v=g+(A^(w|~p))+y[13]+1309151649&4294967295,g=w+(v<<21&4294967295|v>>>11),v=p+(w^(g|~A))+y[4]+4149444226&4294967295,p=g+(v<<6&4294967295|v>>>26),v=A+(g^(p|~w))+y[11]+3174756917&4294967295,A=p+(v<<10&4294967295|v>>>22),v=w+(p^(A|~g))+y[2]+718787259&4294967295,w=A+(v<<15&4294967295|v>>>17),v=g+(A^(w|~p))+y[9]+3951481745&4294967295,m.g[0]=m.g[0]+p&4294967295,m.g[1]=m.g[1]+(w+(v<<21&4294967295|v>>>11))&4294967295,m.g[2]=m.g[2]+w&4294967295,m.g[3]=m.g[3]+A&4294967295}r.prototype.u=function(m,p){p===void 0&&(p=m.length);for(var g=p-this.blockSize,y=this.B,w=this.h,A=0;A<p;){if(w==0)for(;A<=g;)i(this,m,A),A+=this.blockSize;if(typeof m=="string"){for(;A<p;)if(y[w++]=m.charCodeAt(A++),w==this.blockSize){i(this,y),w=0;break}}else for(;A<p;)if(y[w++]=m[A++],w==this.blockSize){i(this,y),w=0;break}}this.h=w,this.o+=p},r.prototype.v=function(){var m=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);m[0]=128;for(var p=1;p<m.length-8;++p)m[p]=0;var g=8*this.o;for(p=m.length-8;p<m.length;++p)m[p]=g&255,g/=256;for(this.u(m),m=Array(16),p=g=0;4>p;++p)for(var y=0;32>y;y+=8)m[g++]=this.g[p]>>>y&255;return m};function s(m,p){var g=u;return Object.prototype.hasOwnProperty.call(g,m)?g[m]:g[m]=p(m)}function l(m,p){this.h=p;for(var g=[],y=!0,w=m.length-1;0<=w;w--){var A=m[w]|0;y&&A==p||(g[w]=A,y=!1)}this.g=g}var u={};function c(m){return-128<=m&&128>m?s(m,function(p){return new l([p|0],0>p?-1:0)}):new l([m|0],0>m?-1:0)}function f(m){if(isNaN(m)||!isFinite(m))return I;if(0>m)return b(f(-m));for(var p=[],g=1,y=0;m>=g;y++)p[y]=m/g|0,g*=4294967296;return new l(p,0)}function k(m,p){if(m.length==0)throw Error("number format error: empty string");if(p=p||10,2>p||36<p)throw Error("radix out of range: "+p);if(m.charAt(0)=="-")return b(k(m.substring(1),p));if(0<=m.indexOf("-"))throw Error('number format error: interior "-" character');for(var g=f(Math.pow(p,8)),y=I,w=0;w<m.length;w+=8){var A=Math.min(8,m.length-w),v=parseInt(m.substring(w,w+A),p);8>A?(A=f(Math.pow(p,A)),y=y.j(A).add(f(v))):(y=y.j(g),y=y.add(f(v)))}return y}var I=c(0),S=c(1),O=c(16777216);t=l.prototype,t.m=function(){if(D(this))return-b(this).m();for(var m=0,p=1,g=0;g<this.g.length;g++){var y=this.i(g);m+=(0<=y?y:4294967296+y)*p,p*=4294967296}return m},t.toString=function(m){if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(N(this))return"0";if(D(this))return"-"+b(this).toString(m);for(var p=f(Math.pow(m,6)),g=this,y="";;){var w=P(g,p).g;g=T(g,w.j(p));var A=((0<g.g.length?g.g[0]:g.h)>>>0).toString(m);if(g=w,N(g))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},t.i=function(m){return 0>m?0:m<this.g.length?this.g[m]:this.h};function N(m){if(m.h!=0)return!1;for(var p=0;p<m.g.length;p++)if(m.g[p]!=0)return!1;return!0}function D(m){return m.h==-1}t.l=function(m){return m=T(this,m),D(m)?-1:N(m)?0:1};function b(m){for(var p=m.g.length,g=[],y=0;y<p;y++)g[y]=~m.g[y];return new l(g,~m.h).add(S)}t.abs=function(){return D(this)?b(this):this},t.add=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0,w=0;w<=p;w++){var A=y+(this.i(w)&65535)+(m.i(w)&65535),v=(A>>>16)+(this.i(w)>>>16)+(m.i(w)>>>16);y=v>>>16,A&=65535,v&=65535,g[w]=v<<16|A}return new l(g,g[g.length-1]&-2147483648?-1:0)};function T(m,p){return m.add(b(p))}t.j=function(m){if(N(this)||N(m))return I;if(D(this))return D(m)?b(this).j(b(m)):b(b(this).j(m));if(D(m))return b(this.j(b(m)));if(0>this.l(O)&&0>m.l(O))return f(this.m()*m.m());for(var p=this.g.length+m.g.length,g=[],y=0;y<2*p;y++)g[y]=0;for(y=0;y<this.g.length;y++)for(var w=0;w<m.g.length;w++){var A=this.i(y)>>>16,v=this.i(y)&65535,nt=m.i(w)>>>16,Un=m.i(w)&65535;g[2*y+2*w]+=v*Un,_(g,2*y+2*w),g[2*y+2*w+1]+=A*Un,_(g,2*y+2*w+1),g[2*y+2*w+1]+=v*nt,_(g,2*y+2*w+1),g[2*y+2*w+2]+=A*nt,_(g,2*y+2*w+2)}for(y=0;y<p;y++)g[y]=g[2*y+1]<<16|g[2*y];for(y=p;y<2*p;y++)g[y]=0;return new l(g,0)};function _(m,p){for(;(m[p]&65535)!=m[p];)m[p+1]+=m[p]>>>16,m[p]&=65535,p++}function E(m,p){this.g=m,this.h=p}function P(m,p){if(N(p))throw Error("division by zero");if(N(m))return new E(I,I);if(D(m))return p=P(b(m),p),new E(b(p.g),b(p.h));if(D(p))return p=P(m,b(p)),new E(b(p.g),p.h);if(30<m.g.length){if(D(m)||D(p))throw Error("slowDivide_ only works with positive integers.");for(var g=S,y=p;0>=y.l(m);)g=M(g),y=M(y);var w=U(g,1),A=U(y,1);for(y=U(y,2),g=U(g,2);!N(y);){var v=A.add(y);0>=v.l(m)&&(w=w.add(g),A=v),y=U(y,1),g=U(g,1)}return p=T(m,w.j(p)),new E(w,p)}for(w=I;0<=m.l(p);){for(g=Math.max(1,Math.floor(m.m()/p.m())),y=Math.ceil(Math.log(g)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=f(g),v=A.j(p);D(v)||0<v.l(m);)g-=y,A=f(g),v=A.j(p);N(A)&&(A=S),w=w.add(A),m=T(m,v)}return new E(w,m)}t.A=function(m){return P(this,m).h},t.and=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)&m.i(y);return new l(g,this.h&m.h)},t.or=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)|m.i(y);return new l(g,this.h|m.h)},t.xor=function(m){for(var p=Math.max(this.g.length,m.g.length),g=[],y=0;y<p;y++)g[y]=this.i(y)^m.i(y);return new l(g,this.h^m.h)};function M(m){for(var p=m.g.length+1,g=[],y=0;y<p;y++)g[y]=m.i(y)<<1|m.i(y-1)>>>31;return new l(g,m.h)}function U(m,p){var g=p>>5;p%=32;for(var y=m.g.length-g,w=[],A=0;A<y;A++)w[A]=0<p?m.i(A+g)>>>p|m.i(A+g+1)<<32-p:m.i(A+g);return new l(w,m.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.A,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=f,l.fromString=k,yv=l}).apply(typeof Vf<"u"?Vf:typeof self<"u"?self:typeof window<"u"?window:{});var qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,a,h){return o==Array.prototype||o==Object.prototype||(o[a]=h.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qs=="object"&&qs];for(var a=0;a<o.length;++a){var h=o[a];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=n(this);function i(o,a){if(a)e:{var h=r;o=o.split(".");for(var d=0;d<o.length-1;d++){var C=o[d];if(!(C in h))break e;h=h[C]}o=o[o.length-1],d=h[o],a=a(d),a!=d&&a!=null&&e(h,o,{configurable:!0,writable:!0,value:a})}}function s(o,a){o instanceof String&&(o+="");var h=0,d=!1,C={next:function(){if(!d&&h<o.length){var R=h++;return{value:a(R,o[R]),done:!1}}return d=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}i("Array.prototype.values",function(o){return o||function(){return s(this,function(a,h){return h})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var l=l||{},u=this||self;function c(o){var a=typeof o;return a=a!="object"?a:o?Array.isArray(o)?"array":a:"null",a=="array"||a=="object"&&typeof o.length=="number"}function f(o){var a=typeof o;return a=="object"&&o!=null||a=="function"}function k(o,a,h){return o.call.apply(o.bind,arguments)}function I(o,a,h){if(!o)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,d),o.apply(a,C)}}return function(){return o.apply(a,arguments)}}function S(o,a,h){return S=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?k:I,S.apply(null,arguments)}function O(o,a){var h=Array.prototype.slice.call(arguments,1);return function(){var d=h.slice();return d.push.apply(d,arguments),o.apply(this,d)}}function N(o,a){function h(){}h.prototype=a.prototype,o.aa=a.prototype,o.prototype=new h,o.prototype.constructor=o,o.Qb=function(d,C,R){for(var x=Array(arguments.length-2),J=2;J<arguments.length;J++)x[J-2]=arguments[J];return a.prototype[C].apply(d,x)}}function D(o){const a=o.length;if(0<a){const h=Array(a);for(let d=0;d<a;d++)h[d]=o[d];return h}return[]}function b(o,a){for(let h=1;h<arguments.length;h++){const d=arguments[h];if(c(d)){const C=o.length||0,R=d.length||0;o.length=C+R;for(let x=0;x<R;x++)o[C+x]=d[x]}else o.push(d)}}class T{constructor(a,h){this.i=a,this.j=h,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function _(o){return/^[\s\xa0]*$/.test(o)}function E(){var o=u.navigator;return o&&(o=o.userAgent)?o:""}function P(o){return P[" "](o),o}P[" "]=function(){};var M=E().indexOf("Gecko")!=-1&&!(E().toLowerCase().indexOf("webkit")!=-1&&E().indexOf("Edge")==-1)&&!(E().indexOf("Trident")!=-1||E().indexOf("MSIE")!=-1)&&E().indexOf("Edge")==-1;function U(o,a,h){for(const d in o)a.call(h,o[d],d,o)}function m(o,a){for(const h in o)a.call(void 0,o[h],h,o)}function p(o){const a={};for(const h in o)a[h]=o[h];return a}const g="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(o,a){let h,d;for(let C=1;C<arguments.length;C++){d=arguments[C];for(h in d)o[h]=d[h];for(let R=0;R<g.length;R++)h=g[R],Object.prototype.hasOwnProperty.call(d,h)&&(o[h]=d[h])}}function w(o){var a=1;o=o.split(":");const h=[];for(;0<a&&o.length;)h.push(o.shift()),a--;return o.length&&h.push(o.join(":")),h}function A(o){u.setTimeout(()=>{throw o},0)}function v(){var o=$;let a=null;return o.g&&(a=o.g,o.g=o.g.next,o.g||(o.h=null),a.next=null),a}class nt{constructor(){this.h=this.g=null}add(a,h){const d=Un.get();d.set(a,h),this.h?this.h.next=d:this.g=d,this.h=d}}var Un=new T(()=>new Yr,o=>o.reset());class Yr{constructor(){this.next=this.g=this.h=null}set(a,h){this.h=a,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let Lt,F=!1,$=new nt,H=()=>{const o=u.Promise.resolve(void 0);Lt=()=>{o.then(ie)}};var ie=()=>{for(var o;o=v();){try{o.h.call(o.g)}catch(h){A(h)}var a=Un;a.j(o),100>a.h&&(a.h++,o.next=a.g,a.g=o)}F=!1};function Q(){this.s=this.s,this.C=this.C}Q.prototype.s=!1,Q.prototype.ma=function(){this.s||(this.s=!0,this.N())},Q.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ue(o,a){this.type=o,this.g=this.target=a,this.defaultPrevented=!1}ue.prototype.h=function(){this.defaultPrevented=!0};var xt=function(){if(!u.addEventListener||!Object.defineProperty)return!1;var o=!1,a=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};u.addEventListener("test",h,a),u.removeEventListener("test",h,a)}catch{}return o}();function Mt(o,a){if(ue.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var h=this.type=o.type,d=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=a,a=o.relatedTarget){if(M){e:{try{P(a.nodeName);var C=!0;break e}catch{}C=!1}C||(a=null)}}else h=="mouseover"?a=o.fromElement:h=="mouseout"&&(a=o.toElement);this.relatedTarget=a,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Ut[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Mt.aa.h.call(this)}}N(Mt,ue);var Ut={2:"touch",3:"pen",4:"mouse"};Mt.prototype.h=function(){Mt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Ft="closure_listenable_"+(1e6*Math.random()|0),uy=0;function cy(o,a,h,d,C){this.listener=o,this.proxy=null,this.src=a,this.type=h,this.capture=!!d,this.ha=C,this.key=++uy,this.da=this.fa=!1}function gs(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function ms(o){this.src=o,this.g={},this.h=0}ms.prototype.add=function(o,a,h,d,C){var R=o.toString();o=this.g[R],o||(o=this.g[R]=[],this.h++);var x=Sl(o,a,d,C);return-1<x?(a=o[x],h||(a.fa=!1)):(a=new cy(a,this.src,R,!!d,C),a.fa=h,o.push(a)),a};function kl(o,a){var h=a.type;if(h in o.g){var d=o.g[h],C=Array.prototype.indexOf.call(d,a,void 0),R;(R=0<=C)&&Array.prototype.splice.call(d,C,1),R&&(gs(a),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Sl(o,a,h,d){for(var C=0;C<o.length;++C){var R=o[C];if(!R.da&&R.listener==a&&R.capture==!!h&&R.ha==d)return C}return-1}var Il="closure_lm_"+(1e6*Math.random()|0),Cl={};function lh(o,a,h,d,C){if(Array.isArray(a)){for(var R=0;R<a.length;R++)lh(o,a[R],h,d,C);return null}return h=ch(h),o&&o[Ft]?o.K(a,h,f(d)?!!d.capture:!!d,C):hy(o,a,h,!1,d,C)}function hy(o,a,h,d,C,R){if(!a)throw Error("Invalid event type");var x=f(C)?!!C.capture:!!C,J=Rl(o);if(J||(o[Il]=J=new ms(o)),h=J.add(a,h,d,x,R),h.proxy)return h;if(d=dy(),h.proxy=d,d.src=o,d.listener=h,o.addEventListener)xt||(C=x),C===void 0&&(C=!1),o.addEventListener(a.toString(),d,C);else if(o.attachEvent)o.attachEvent(uh(a.toString()),d);else if(o.addListener&&o.removeListener)o.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return h}function dy(){function o(h){return a.call(o.src,o.listener,h)}const a=fy;return o}function ah(o,a,h,d,C){if(Array.isArray(a))for(var R=0;R<a.length;R++)ah(o,a[R],h,d,C);else d=f(d)?!!d.capture:!!d,h=ch(h),o&&o[Ft]?(o=o.i,a=String(a).toString(),a in o.g&&(R=o.g[a],h=Sl(R,h,d,C),-1<h&&(gs(R[h]),Array.prototype.splice.call(R,h,1),R.length==0&&(delete o.g[a],o.h--)))):o&&(o=Rl(o))&&(a=o.g[a.toString()],o=-1,a&&(o=Sl(a,h,d,C)),(h=-1<o?a[o]:null)&&Al(h))}function Al(o){if(typeof o!="number"&&o&&!o.da){var a=o.src;if(a&&a[Ft])kl(a.i,o);else{var h=o.type,d=o.proxy;a.removeEventListener?a.removeEventListener(h,d,o.capture):a.detachEvent?a.detachEvent(uh(h),d):a.addListener&&a.removeListener&&a.removeListener(d),(h=Rl(a))?(kl(h,o),h.h==0&&(h.src=null,a[Il]=null)):gs(o)}}}function uh(o){return o in Cl?Cl[o]:Cl[o]="on"+o}function fy(o,a){if(o.da)o=!0;else{a=new Mt(a,this);var h=o.listener,d=o.ha||o.src;o.fa&&Al(o),o=h.call(d,a)}return o}function Rl(o){return o=o[Il],o instanceof ms?o:null}var Pl="__closure_events_fn_"+(1e9*Math.random()>>>0);function ch(o){return typeof o=="function"?o:(o[Pl]||(o[Pl]=function(a){return o.handleEvent(a)}),o[Pl])}function Te(){Q.call(this),this.i=new ms(this),this.M=this,this.F=null}N(Te,Q),Te.prototype[Ft]=!0,Te.prototype.removeEventListener=function(o,a,h,d){ah(this,o,a,h,d)};function Le(o,a){var h,d=o.F;if(d)for(h=[];d;d=d.F)h.push(d);if(o=o.M,d=a.type||a,typeof a=="string")a=new ue(a,o);else if(a instanceof ue)a.target=a.target||o;else{var C=a;a=new ue(d,o),y(a,C)}if(C=!0,h)for(var R=h.length-1;0<=R;R--){var x=a.g=h[R];C=vs(x,d,!0,a)&&C}if(x=a.g=o,C=vs(x,d,!0,a)&&C,C=vs(x,d,!1,a)&&C,h)for(R=0;R<h.length;R++)x=a.g=h[R],C=vs(x,d,!1,a)&&C}Te.prototype.N=function(){if(Te.aa.N.call(this),this.i){var o=this.i,a;for(a in o.g){for(var h=o.g[a],d=0;d<h.length;d++)gs(h[d]);delete o.g[a],o.h--}}this.F=null},Te.prototype.K=function(o,a,h,d){return this.i.add(String(o),a,!1,h,d)},Te.prototype.L=function(o,a,h,d){return this.i.add(String(o),a,!0,h,d)};function vs(o,a,h,d){if(a=o.i.g[String(a)],!a)return!0;a=a.concat();for(var C=!0,R=0;R<a.length;++R){var x=a[R];if(x&&!x.da&&x.capture==h){var J=x.listener,ye=x.ha||x.src;x.fa&&kl(o.i,x),C=J.call(ye,d)!==!1&&C}}return C&&!d.defaultPrevented}function hh(o,a,h){if(typeof o=="function")h&&(o=S(o,h));else if(o&&typeof o.handleEvent=="function")o=S(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:u.setTimeout(o,a||0)}function dh(o){o.g=hh(()=>{o.g=null,o.i&&(o.i=!1,dh(o))},o.l);const a=o.h;o.h=null,o.m.apply(null,a)}class py extends Q{constructor(a,h){super(),this.m=a,this.l=h,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:dh(this)}N(){super.N(),this.g&&(u.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Qr(o){Q.call(this),this.h=o,this.g={}}N(Qr,Q);var fh=[];function ph(o){U(o.g,function(a,h){this.g.hasOwnProperty(h)&&Al(a)},o),o.g={}}Qr.prototype.N=function(){Qr.aa.N.call(this),ph(this)},Qr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Nl=u.JSON.stringify,gy=u.JSON.parse,my=class{stringify(o){return u.JSON.stringify(o,void 0)}parse(o){return u.JSON.parse(o,void 0)}};function Ol(){}Ol.prototype.h=null;function gh(o){return o.h||(o.h=o.i())}function vy(){}var Jr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Dl(){ue.call(this,"d")}N(Dl,ue);function Ll(){ue.call(this,"c")}N(Ll,ue);var or={},mh=null;function xl(){return mh=mh||new Te}or.La="serverreachability";function vh(o){ue.call(this,or.La,o)}N(vh,ue);function Zr(o){const a=xl();Le(a,new vh(a))}or.STAT_EVENT="statevent";function yh(o,a){ue.call(this,or.STAT_EVENT,o),this.stat=a}N(yh,ue);function xe(o){const a=xl();Le(a,new yh(a,o))}or.Ma="timingevent";function _h(o,a){ue.call(this,or.Ma,o),this.size=a}N(_h,ue);function ei(o,a){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return u.setTimeout(function(){o()},a)}function ti(){this.g=!0}ti.prototype.xa=function(){this.g=!1};function yy(o,a,h,d,C,R){o.info(function(){if(o.g)if(R)for(var x="",J=R.split("&"),ye=0;ye<J.length;ye++){var q=J[ye].split("=");if(1<q.length){var ke=q[0];q=q[1];var Se=ke.split("_");x=2<=Se.length&&Se[1]=="type"?x+(ke+"="+q+"&"):x+(ke+"=redacted&")}}else x=null;else x=R;return"XMLHTTP REQ ("+d+") [attempt "+C+"]: "+a+`
`+h+`
`+x})}function _y(o,a,h,d,C,R,x){o.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+C+"]: "+a+`
`+h+`
`+R+" "+x})}function lr(o,a,h,d){o.info(function(){return"XMLHTTP TEXT ("+a+"): "+Ey(o,h)+(d?" "+d:"")})}function wy(o,a){o.info(function(){return"TIMEOUT: "+a})}ti.prototype.info=function(){};function Ey(o,a){if(!o.g)return a;if(!a)return null;try{var h=JSON.parse(a);if(h){for(o=0;o<h.length;o++)if(Array.isArray(h[o])){var d=h[o];if(!(2>d.length)){var C=d[1];if(Array.isArray(C)&&!(1>C.length)){var R=C[0];if(R!="noop"&&R!="stop"&&R!="close")for(var x=1;x<C.length;x++)C[x]=""}}}}return Nl(h)}catch{return a}}var Ml={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ty={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ul;function ys(){}N(ys,Ol),ys.prototype.g=function(){return new XMLHttpRequest},ys.prototype.i=function(){return{}},Ul=new ys;function ln(o,a,h,d){this.j=o,this.i=a,this.l=h,this.R=d||1,this.U=new Qr(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wh}function wh(){this.i=null,this.g="",this.h=!1}var Eh={},Fl={};function jl(o,a,h){o.L=1,o.v=Ts(jt(a)),o.m=h,o.P=!0,Th(o,null)}function Th(o,a){o.F=Date.now(),_s(o),o.A=jt(o.v);var h=o.A,d=o.R;Array.isArray(d)||(d=[String(d)]),Uh(h.i,"t",d),o.C=0,h=o.j.J,o.h=new wh,o.g=ed(o.j,h?a:null,!o.m),0<o.O&&(o.M=new py(S(o.Y,o,o.g),o.O)),a=o.U,h=o.g,d=o.ca;var C="readystatechange";Array.isArray(C)||(C&&(fh[0]=C.toString()),C=fh);for(var R=0;R<C.length;R++){var x=lh(h,C[R],d||a.handleEvent,!1,a.h||a);if(!x)break;a.g[x.key]=x}a=o.H?p(o.H):{},o.m?(o.u||(o.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,a)):(o.u="GET",o.g.ea(o.A,o.u,null,a)),Zr(),yy(o.i,o.u,o.A,o.l,o.R,o.m)}ln.prototype.ca=function(o){o=o.target;const a=this.M;a&&bt(o)==3?a.j():this.Y(o)},ln.prototype.Y=function(o){try{if(o==this.g)e:{const Se=bt(this.g);var a=this.g.Ba();const cr=this.g.Z();if(!(3>Se)&&(Se!=3||this.g&&(this.h.h||this.g.oa()||Hh(this.g)))){this.J||Se!=4||a==7||(a==8||0>=cr?Zr(3):Zr(2)),bl(this);var h=this.g.Z();this.X=h;t:if(kh(this)){var d=Hh(this.g);o="";var C=d.length,R=bt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Fn(this),ni(this);var x="";break t}this.h.i=new u.TextDecoder}for(a=0;a<C;a++)this.h.h=!0,o+=this.h.i.decode(d[a],{stream:!(R&&a==C-1)});d.length=0,this.h.g+=o,this.C=0,x=this.h.g}else x=this.g.oa();if(this.o=h==200,_y(this.i,this.u,this.A,this.l,this.R,Se,h),this.o){if(this.T&&!this.K){t:{if(this.g){var J,ye=this.g;if((J=ye.g?ye.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(J)){var q=J;break t}}q=null}if(h=q)lr(this.i,this.l,h,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zl(this,h);else{this.o=!1,this.s=3,xe(12),Fn(this),ni(this);break e}}if(this.P){h=!0;let ht;for(;!this.J&&this.C<x.length;)if(ht=ky(this,x),ht==Fl){Se==4&&(this.s=4,xe(14),h=!1),lr(this.i,this.l,null,"[Incomplete Response]");break}else if(ht==Eh){this.s=4,xe(15),lr(this.i,this.l,x,"[Invalid Chunk]"),h=!1;break}else lr(this.i,this.l,ht,null),zl(this,ht);if(kh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Se!=4||x.length!=0||this.h.h||(this.s=1,xe(16),h=!1),this.o=this.o&&h,!h)lr(this.i,this.l,x,"[Invalid Chunked Response]"),Fn(this),ni(this);else if(0<x.length&&!this.W){this.W=!0;var ke=this.j;ke.g==this&&ke.ba&&!ke.M&&(ke.j.info("Great, no buffering proxy detected. Bytes received: "+x.length),Kl(ke),ke.M=!0,xe(11))}}else lr(this.i,this.l,x,null),zl(this,x);Se==4&&Fn(this),this.o&&!this.J&&(Se==4?Yh(this.j,this):(this.o=!1,_s(this)))}else zy(this.g),h==400&&0<x.indexOf("Unknown SID")?(this.s=3,xe(12)):(this.s=0,xe(13)),Fn(this),ni(this)}}}catch{}finally{}};function kh(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function ky(o,a){var h=o.C,d=a.indexOf(`
`,h);return d==-1?Fl:(h=Number(a.substring(h,d)),isNaN(h)?Eh:(d+=1,d+h>a.length?Fl:(a=a.slice(d,d+h),o.C=d+h,a)))}ln.prototype.cancel=function(){this.J=!0,Fn(this)};function _s(o){o.S=Date.now()+o.I,Sh(o,o.I)}function Sh(o,a){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ei(S(o.ba,o),a)}function bl(o){o.B&&(u.clearTimeout(o.B),o.B=null)}ln.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(wy(this.i,this.A),this.L!=2&&(Zr(),xe(17)),Fn(this),this.s=2,ni(this)):Sh(this,this.S-o)};function ni(o){o.j.G==0||o.J||Yh(o.j,o)}function Fn(o){bl(o);var a=o.M;a&&typeof a.ma=="function"&&a.ma(),o.M=null,ph(o.U),o.g&&(a=o.g,o.g=null,a.abort(),a.ma())}function zl(o,a){try{var h=o.j;if(h.G!=0&&(h.g==o||$l(h.h,o))){if(!o.K&&$l(h.h,o)&&h.G==3){try{var d=h.Da.g.parse(a)}catch{d=null}if(Array.isArray(d)&&d.length==3){var C=d;if(C[0]==0){e:if(!h.u){if(h.g)if(h.g.F+3e3<o.F)Rs(h),Cs(h);else break e;Wl(h),xe(18)}}else h.za=C[1],0<h.za-h.T&&37500>C[2]&&h.F&&h.v==0&&!h.C&&(h.C=ei(S(h.Za,h),6e3));if(1>=Ah(h.h)&&h.ca){try{h.ca()}catch{}h.ca=void 0}}else bn(h,11)}else if((o.K||h.g==o)&&Rs(h),!_(a))for(C=h.Da.g.parse(a),a=0;a<C.length;a++){let q=C[a];if(h.T=q[0],q=q[1],h.G==2)if(q[0]=="c"){h.K=q[1],h.ia=q[2];const ke=q[3];ke!=null&&(h.la=ke,h.j.info("VER="+h.la));const Se=q[4];Se!=null&&(h.Aa=Se,h.j.info("SVER="+h.Aa));const cr=q[5];cr!=null&&typeof cr=="number"&&0<cr&&(d=1.5*cr,h.L=d,h.j.info("backChannelRequestTimeoutMs_="+d)),d=h;const ht=o.g;if(ht){const Ps=ht.g?ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ps){var R=d.h;R.g||Ps.indexOf("spdy")==-1&&Ps.indexOf("quic")==-1&&Ps.indexOf("h2")==-1||(R.j=R.l,R.g=new Set,R.h&&(Bl(R,R.h),R.h=null))}if(d.D){const Gl=ht.g?ht.g.getResponseHeader("X-HTTP-Session-Id"):null;Gl&&(d.ya=Gl,ee(d.I,d.D,Gl))}}h.G=3,h.l&&h.l.ua(),h.ba&&(h.R=Date.now()-o.F,h.j.info("Handshake RTT: "+h.R+"ms")),d=h;var x=o;if(d.qa=Zh(d,d.J?d.ia:null,d.W),x.K){Rh(d.h,x);var J=x,ye=d.L;ye&&(J.I=ye),J.B&&(bl(J),_s(J)),d.g=x}else qh(d);0<h.i.length&&As(h)}else q[0]!="stop"&&q[0]!="close"||bn(h,7);else h.G==3&&(q[0]=="stop"||q[0]=="close"?q[0]=="stop"?bn(h,7):Vl(h):q[0]!="noop"&&h.l&&h.l.ta(q),h.v=0)}}Zr(4)}catch{}}var Sy=class{constructor(o,a){this.g=o,this.map=a}};function Ih(o){this.l=o||10,u.PerformanceNavigationTiming?(o=u.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(u.chrome&&u.chrome.loadTimes&&u.chrome.loadTimes()&&u.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ch(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ah(o){return o.h?1:o.g?o.g.size:0}function $l(o,a){return o.h?o.h==a:o.g?o.g.has(a):!1}function Bl(o,a){o.g?o.g.add(a):o.h=a}function Rh(o,a){o.h&&o.h==a?o.h=null:o.g&&o.g.has(a)&&o.g.delete(a)}Ih.prototype.cancel=function(){if(this.i=Ph(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ph(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let a=o.i;for(const h of o.g.values())a=a.concat(h.D);return a}return D(o.i)}function Iy(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var a=[],h=o.length,d=0;d<h;d++)a.push(o[d]);return a}a=[],h=0;for(d in o)a[h++]=o[d];return a}function Cy(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var a=[];o=o.length;for(var h=0;h<o;h++)a.push(h);return a}a=[],h=0;for(const d in o)a[h++]=d;return a}}}function Nh(o,a){if(o.forEach&&typeof o.forEach=="function")o.forEach(a,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,a,void 0);else for(var h=Cy(o),d=Iy(o),C=d.length,R=0;R<C;R++)a.call(void 0,d[R],h&&h[R],o)}var Oh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ay(o,a){if(o){o=o.split("&");for(var h=0;h<o.length;h++){var d=o[h].indexOf("="),C=null;if(0<=d){var R=o[h].substring(0,d);C=o[h].substring(d+1)}else R=o[h];a(R,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function jn(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof jn){this.h=o.h,ws(this,o.j),this.o=o.o,this.g=o.g,Es(this,o.s),this.l=o.l;var a=o.i,h=new si;h.i=a.i,a.g&&(h.g=new Map(a.g),h.h=a.h),Dh(this,h),this.m=o.m}else o&&(a=String(o).match(Oh))?(this.h=!1,ws(this,a[1]||"",!0),this.o=ri(a[2]||""),this.g=ri(a[3]||"",!0),Es(this,a[4]),this.l=ri(a[5]||"",!0),Dh(this,a[6]||"",!0),this.m=ri(a[7]||"")):(this.h=!1,this.i=new si(null,this.h))}jn.prototype.toString=function(){var o=[],a=this.j;a&&o.push(ii(a,Lh,!0),":");var h=this.g;return(h||a=="file")&&(o.push("//"),(a=this.o)&&o.push(ii(a,Lh,!0),"@"),o.push(encodeURIComponent(String(h)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.s,h!=null&&o.push(":",String(h))),(h=this.l)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ii(h,h.charAt(0)=="/"?Ny:Py,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ii(h,Dy)),o.join("")};function jt(o){return new jn(o)}function ws(o,a,h){o.j=h?ri(a,!0):a,o.j&&(o.j=o.j.replace(/:$/,""))}function Es(o,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);o.s=a}else o.s=null}function Dh(o,a,h){a instanceof si?(o.i=a,Ly(o.i,o.h)):(h||(a=ii(a,Oy)),o.i=new si(a,o.h))}function ee(o,a,h){o.i.set(a,h)}function Ts(o){return ee(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function ri(o,a){return o?a?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ii(o,a,h){return typeof o=="string"?(o=encodeURI(o).replace(a,Ry),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ry(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Lh=/[#\/\?@]/g,Py=/[#\?:]/g,Ny=/[#\?]/g,Oy=/[#\?@]/g,Dy=/#/g;function si(o,a){this.h=this.g=null,this.i=o||null,this.j=!!a}function an(o){o.g||(o.g=new Map,o.h=0,o.i&&Ay(o.i,function(a,h){o.add(decodeURIComponent(a.replace(/\+/g," ")),h)}))}t=si.prototype,t.add=function(o,a){an(this),this.i=null,o=ar(this,o);var h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(a),this.h+=1,this};function xh(o,a){an(o),a=ar(o,a),o.g.has(a)&&(o.i=null,o.h-=o.g.get(a).length,o.g.delete(a))}function Mh(o,a){return an(o),a=ar(o,a),o.g.has(a)}t.forEach=function(o,a){an(this),this.g.forEach(function(h,d){h.forEach(function(C){o.call(a,C,d,this)},this)},this)},t.na=function(){an(this);const o=Array.from(this.g.values()),a=Array.from(this.g.keys()),h=[];for(let d=0;d<a.length;d++){const C=o[d];for(let R=0;R<C.length;R++)h.push(a[d])}return h},t.V=function(o){an(this);let a=[];if(typeof o=="string")Mh(this,o)&&(a=a.concat(this.g.get(ar(this,o))));else{o=Array.from(this.g.values());for(let h=0;h<o.length;h++)a=a.concat(o[h])}return a},t.set=function(o,a){return an(this),this.i=null,o=ar(this,o),Mh(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[a]),this.h+=1,this},t.get=function(o,a){return o?(o=this.V(o),0<o.length?String(o[0]):a):a};function Uh(o,a,h){xh(o,a),0<h.length&&(o.i=null,o.g.set(ar(o,a),D(h)),o.h+=h.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],a=Array.from(this.g.keys());for(var h=0;h<a.length;h++){var d=a[h];const R=encodeURIComponent(String(d)),x=this.V(d);for(d=0;d<x.length;d++){var C=R;x[d]!==""&&(C+="="+encodeURIComponent(String(x[d]))),o.push(C)}}return this.i=o.join("&")};function ar(o,a){return a=String(a),o.j&&(a=a.toLowerCase()),a}function Ly(o,a){a&&!o.j&&(an(o),o.i=null,o.g.forEach(function(h,d){var C=d.toLowerCase();d!=C&&(xh(this,d),Uh(this,C,h))},o)),o.j=a}function xy(o,a){const h=new ti;if(u.Image){const d=new Image;d.onload=O(un,h,"TestLoadImage: loaded",!0,a,d),d.onerror=O(un,h,"TestLoadImage: error",!1,a,d),d.onabort=O(un,h,"TestLoadImage: abort",!1,a,d),d.ontimeout=O(un,h,"TestLoadImage: timeout",!1,a,d),u.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=o}else a(!1)}function My(o,a){const h=new ti,d=new AbortController,C=setTimeout(()=>{d.abort(),un(h,"TestPingServer: timeout",!1,a)},1e4);fetch(o,{signal:d.signal}).then(R=>{clearTimeout(C),R.ok?un(h,"TestPingServer: ok",!0,a):un(h,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(C),un(h,"TestPingServer: error",!1,a)})}function un(o,a,h,d,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),d(h)}catch{}}function Uy(){this.g=new my}function Fy(o,a,h){const d=h||"";try{Nh(o,function(C,R){let x=C;f(C)&&(x=Nl(C)),a.push(d+R+"="+encodeURIComponent(x))})}catch(C){throw a.push(d+"type="+encodeURIComponent("_badmap")),C}}function ks(o){this.l=o.Ub||null,this.j=o.eb||!1}N(ks,Ol),ks.prototype.g=function(){return new Ss(this.l,this.j)},ks.prototype.i=function(o){return function(){return o}}({});function Ss(o,a){Te.call(this),this.D=o,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}N(Ss,Te),t=Ss.prototype,t.open=function(o,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=a,this.readyState=1,li(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(a.body=o),(this.D||u).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,oi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,li(this)),this.g&&(this.readyState=3,li(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof u.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Fh(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Fh(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var a=o.value?o.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!o.done}))&&(this.response=this.responseText+=a)}o.done?oi(this):li(this),this.readyState==3&&Fh(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,oi(this))},t.Qa=function(o){this.g&&(this.response=o,oi(this))},t.ga=function(){this.g&&oi(this)};function oi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,li(o)}t.setRequestHeader=function(o,a){this.u.append(o,a)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],a=this.h.entries();for(var h=a.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=a.next();return o.join(`\r
`)};function li(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function jh(o){let a="";return U(o,function(h,d){a+=d,a+=":",a+=h,a+=`\r
`}),a}function Hl(o,a,h){e:{for(d in h){var d=!1;break e}d=!0}d||(h=jh(h),typeof o=="string"?h!=null&&encodeURIComponent(String(h)):ee(o,a,h))}function ce(o){Te.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}N(ce,Te);var jy=/^https?$/i,by=["POST","PUT"];t=ce.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,a,h,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);a=a?a.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ul.g(),this.v=this.o?gh(this.o):gh(Ul),this.g.onreadystatechange=S(this.Ea,this);try{this.B=!0,this.g.open(a,String(o),!0),this.B=!1}catch(R){bh(this,R);return}if(o=h||"",h=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var C in d)h.set(C,d[C]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const R of d.keys())h.set(R,d.get(R));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(h.keys()).find(R=>R.toLowerCase()=="content-type"),C=u.FormData&&o instanceof u.FormData,!(0<=Array.prototype.indexOf.call(by,a,void 0))||d||C||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[R,x]of h)this.g.setRequestHeader(R,x);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Bh(this),this.u=!0,this.g.send(o),this.u=!1}catch(R){bh(this,R)}};function bh(o,a){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=a,o.m=5,zh(o),Is(o)}function zh(o){o.A||(o.A=!0,Le(o,"complete"),Le(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,Le(this,"complete"),Le(this,"abort"),Is(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Is(this,!0)),ce.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?$h(this):this.bb())},t.bb=function(){$h(this)};function $h(o){if(o.h&&typeof l<"u"&&(!o.v[1]||bt(o)!=4||o.Z()!=2)){if(o.u&&bt(o)==4)hh(o.Ea,0,o);else if(Le(o,"readystatechange"),bt(o)==4){o.h=!1;try{const x=o.Z();e:switch(x){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break e;default:a=!1}var h;if(!(h=a)){var d;if(d=x===0){var C=String(o.D).match(Oh)[1]||null;!C&&u.self&&u.self.location&&(C=u.self.location.protocol.slice(0,-1)),d=!jy.test(C?C.toLowerCase():"")}h=d}if(h)Le(o,"complete"),Le(o,"success");else{o.m=6;try{var R=2<bt(o)?o.g.statusText:""}catch{R=""}o.l=R+" ["+o.Z()+"]",zh(o)}}finally{Is(o)}}}}function Is(o,a){if(o.g){Bh(o);const h=o.g,d=o.v[0]?()=>{}:null;o.g=null,o.v=null,a||Le(o,"ready");try{h.onreadystatechange=d}catch{}}}function Bh(o){o.I&&(u.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function bt(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<bt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var a=this.g.responseText;return o&&a.indexOf(o)==0&&(a=a.substring(o.length)),gy(a)}};function Hh(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function zy(o){const a={};o=(o.g&&2<=bt(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<o.length;d++){if(_(o[d]))continue;var h=w(o[d]);const C=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const R=a[C]||[];a[C]=R,R.push(h)}m(a,function(d){return d.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function ai(o,a,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||a}function Vh(o){this.Aa=0,this.i=[],this.j=new ti,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=ai("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=ai("baseRetryDelayMs",5e3,o),this.cb=ai("retryDelaySeedMs",1e4,o),this.Wa=ai("forwardChannelMaxRetries",2,o),this.wa=ai("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new Ih(o&&o.concurrentRequestLimit),this.Da=new Uy,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Vh.prototype,t.la=8,t.G=1,t.connect=function(o,a,h,d){xe(0),this.W=o,this.H=a||{},h&&d!==void 0&&(this.H.OSID=h,this.H.OAID=d),this.F=this.X,this.I=Zh(this,null,this.W),As(this)};function Vl(o){if(Wh(o),o.G==3){var a=o.U++,h=jt(o.I);if(ee(h,"SID",o.K),ee(h,"RID",a),ee(h,"TYPE","terminate"),ui(o,h),a=new ln(o,o.j,a),a.L=2,a.v=Ts(jt(h)),h=!1,u.navigator&&u.navigator.sendBeacon)try{h=u.navigator.sendBeacon(a.v.toString(),"")}catch{}!h&&u.Image&&(new Image().src=a.v,h=!0),h||(a.g=ed(a.j,null),a.g.ea(a.v)),a.F=Date.now(),_s(a)}Jh(o)}function Cs(o){o.g&&(Kl(o),o.g.cancel(),o.g=null)}function Wh(o){Cs(o),o.u&&(u.clearTimeout(o.u),o.u=null),Rs(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&u.clearTimeout(o.s),o.s=null)}function As(o){if(!Ch(o.h)&&!o.s){o.s=!0;var a=o.Ga;Lt||H(),F||(Lt(),F=!0),$.add(a,o),o.B=0}}function $y(o,a){return Ah(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=a.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ei(S(o.Ga,o,a),Qh(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const C=new ln(this,this.j,o);let R=this.o;if(this.S&&(R?(R=p(R),y(R,this.S)):R=this.S),this.m!==null||this.O||(C.H=R,R=null),this.P)e:{for(var a=0,h=0;h<this.i.length;h++){t:{var d=this.i[h];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break t}d=void 0}if(d===void 0)break;if(a+=d,4096<a){a=h;break e}if(a===4096||h===this.i.length-1){a=h+1;break e}}a=1e3}else a=1e3;a=Gh(this,C,a),h=jt(this.I),ee(h,"RID",o),ee(h,"CVER",22),this.D&&ee(h,"X-HTTP-Session-Id",this.D),ui(this,h),R&&(this.O?a="headers="+encodeURIComponent(String(jh(R)))+"&"+a:this.m&&Hl(h,this.m,R)),Bl(this.h,C),this.Ua&&ee(h,"TYPE","init"),this.P?(ee(h,"$req",a),ee(h,"SID","null"),C.T=!0,jl(C,h,null)):jl(C,h,a),this.G=2}}else this.G==3&&(o?Kh(this,o):this.i.length==0||Ch(this.h)||Kh(this))};function Kh(o,a){var h;a?h=a.l:h=o.U++;const d=jt(o.I);ee(d,"SID",o.K),ee(d,"RID",h),ee(d,"AID",o.T),ui(o,d),o.m&&o.o&&Hl(d,o.m,o.o),h=new ln(o,o.j,h,o.B+1),o.m===null&&(h.H=o.o),a&&(o.i=a.D.concat(o.i)),a=Gh(o,h,1e3),h.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Bl(o.h,h),jl(h,d,a)}function ui(o,a){o.H&&U(o.H,function(h,d){ee(a,d,h)}),o.l&&Nh({},function(h,d){ee(a,d,h)})}function Gh(o,a,h){h=Math.min(o.i.length,h);var d=o.l?S(o.l.Na,o.l,o):null;e:{var C=o.i;let R=-1;for(;;){const x=["count="+h];R==-1?0<h?(R=C[0].g,x.push("ofs="+R)):R=0:x.push("ofs="+R);let J=!0;for(let ye=0;ye<h;ye++){let q=C[ye].g;const ke=C[ye].map;if(q-=R,0>q)R=Math.max(0,C[ye].g-100),J=!1;else try{Fy(ke,x,"req"+q+"_")}catch{d&&d(ke)}}if(J){d=x.join("&");break e}}}return o=o.i.splice(0,h),a.D=o,d}function qh(o){if(!o.g&&!o.u){o.Y=1;var a=o.Fa;Lt||H(),F||(Lt(),F=!0),$.add(a,o),o.v=0}}function Wl(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ei(S(o.Fa,o),Qh(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Xh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ei(S(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,xe(10),Cs(this),Xh(this))};function Kl(o){o.A!=null&&(u.clearTimeout(o.A),o.A=null)}function Xh(o){o.g=new ln(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var a=jt(o.qa);ee(a,"RID","rpc"),ee(a,"SID",o.K),ee(a,"AID",o.T),ee(a,"CI",o.F?"0":"1"),!o.F&&o.ja&&ee(a,"TO",o.ja),ee(a,"TYPE","xmlhttp"),ui(o,a),o.m&&o.o&&Hl(a,o.m,o.o),o.L&&(o.g.I=o.L);var h=o.g;o=o.ia,h.L=1,h.v=Ts(jt(a)),h.m=null,h.P=!0,Th(h,o)}t.Za=function(){this.C!=null&&(this.C=null,Cs(this),Wl(this),xe(19))};function Rs(o){o.C!=null&&(u.clearTimeout(o.C),o.C=null)}function Yh(o,a){var h=null;if(o.g==a){Rs(o),Kl(o),o.g=null;var d=2}else if($l(o.h,a))h=a.D,Rh(o.h,a),d=1;else return;if(o.G!=0){if(a.o)if(d==1){h=a.m?a.m.length:0,a=Date.now()-a.F;var C=o.B;d=xl(),Le(d,new _h(d,h)),As(o)}else qh(o);else if(C=a.s,C==3||C==0&&0<a.X||!(d==1&&$y(o,a)||d==2&&Wl(o)))switch(h&&0<h.length&&(a=o.h,a.i=a.i.concat(h)),C){case 1:bn(o,5);break;case 4:bn(o,10);break;case 3:bn(o,6);break;default:bn(o,2)}}}function Qh(o,a){let h=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(h*=2),h*a}function bn(o,a){if(o.j.info("Error code "+a),a==2){var h=S(o.fb,o),d=o.Xa;const C=!d;d=new jn(d||"//www.google.com/images/cleardot.gif"),u.location&&u.location.protocol=="http"||ws(d,"https"),Ts(d),C?xy(d.toString(),h):My(d.toString(),h)}else xe(2);o.G=0,o.l&&o.l.sa(a),Jh(o),Wh(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),xe(2)):(this.j.info("Failed to ping google.com"),xe(1))};function Jh(o){if(o.G=0,o.ka=[],o.l){const a=Ph(o.h);(a.length!=0||o.i.length!=0)&&(b(o.ka,a),b(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Zh(o,a,h){var d=h instanceof jn?jt(h):new jn(h);if(d.g!="")a&&(d.g=a+"."+d.g),Es(d,d.s);else{var C=u.location;d=C.protocol,a=a?a+"."+C.hostname:C.hostname,C=+C.port;var R=new jn(null);d&&ws(R,d),a&&(R.g=a),C&&Es(R,C),h&&(R.l=h),d=R}return h=o.D,a=o.ya,h&&a&&ee(d,h,a),ee(d,"VER",o.la),ui(o,d),d}function ed(o,a,h){if(a&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=o.Ca&&!o.pa?new ce(new ks({eb:h})):new ce(o.pa),a.Ha(o.J),a}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function td(){}t=td.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function rt(o,a){Te.call(this),this.g=new Vh(a),this.l=o,this.h=a&&a.messageUrlParams||null,o=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(o?o["X-WebChannel-Content-Type"]=a.messageContentType:o={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(o?o["X-WebChannel-Client-Profile"]=a.va:o={"X-WebChannel-Client-Profile":a.va}),this.g.S=o,(o=a&&a.Sb)&&!_(o)&&(this.g.m=o),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!_(a)&&(this.g.D=a,o=this.h,o!==null&&a in o&&(o=this.h,a in o&&delete o[a])),this.j=new ur(this)}N(rt,Te),rt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},rt.prototype.close=function(){Vl(this.g)},rt.prototype.o=function(o){var a=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.u&&(h={},h.__data__=Nl(o),o=h);a.i.push(new Sy(a.Ya++,o)),a.G==3&&As(a)},rt.prototype.N=function(){this.g.l=null,delete this.j,Vl(this.g),delete this.g,rt.aa.N.call(this)};function nd(o){Dl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var a=o.__sm__;if(a){e:{for(const h in a){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,a=a!==null&&o in a?a[o]:void 0),this.data=a}else this.data=o}N(nd,Dl);function rd(){Ll.call(this),this.status=1}N(rd,Ll);function ur(o){this.g=o}N(ur,td),ur.prototype.ua=function(){Le(this.g,"a")},ur.prototype.ta=function(o){Le(this.g,new nd(o))},ur.prototype.sa=function(o){Le(this.g,new rd)},ur.prototype.ra=function(){Le(this.g,"b")},rt.prototype.send=rt.prototype.o,rt.prototype.open=rt.prototype.m,rt.prototype.close=rt.prototype.close,Ml.NO_ERROR=0,Ml.TIMEOUT=8,Ml.HTTP_ERROR=6,Ty.COMPLETE="complete",vy.EventType=Jr,Jr.OPEN="a",Jr.CLOSE="b",Jr.ERROR="c",Jr.MESSAGE="d",Te.prototype.listen=Te.prototype.K,ce.prototype.listenOnce=ce.prototype.L,ce.prototype.getLastError=ce.prototype.Ka,ce.prototype.getLastErrorCode=ce.prototype.Ba,ce.prototype.getStatus=ce.prototype.Z,ce.prototype.getResponseJson=ce.prototype.Oa,ce.prototype.getResponseText=ce.prototype.oa,ce.prototype.send=ce.prototype.ea,ce.prototype.setWithCredentials=ce.prototype.Ha}).apply(typeof qs<"u"?qs:typeof self<"u"?self:typeof window<"u"?window:{});const Wf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ae.UNAUTHENTICATED=new Ae(null),Ae.GOOGLE_CREDENTIALS=new Ae("google-credentials-uid"),Ae.FIRST_PARTY=new Ae("first-party-uid"),Ae.MOCK_USER=new Ae("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ps="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new ml("@firebase/firestore");function Xe(t,...e){if(Hr.logLevel<=X.DEBUG){const n=e.map(Qc);Hr.debug(`Firestore (${ps}): ${t}`,...n)}}function Yc(t,...e){if(Hr.logLevel<=X.ERROR){const n=e.map(Qc);Hr.error(`Firestore (${ps}): ${t}`,...n)}}function ck(t,...e){if(Hr.logLevel<=X.WARN){const n=e.map(Qc);Hr.warn(`Firestore (${ps}): ${t}`,...n)}}function Qc(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t="Unexpected state"){const e=`FIRESTORE (${ps}) INTERNAL ASSERTION FAILED: `+t;throw Yc(e),new Error(e)}function Ou(t,e){t||Jc()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ne extends kt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ae.UNAUTHENTICATED))}shutdown(){}}class dk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fk{constructor(e){this.t=e,this.currentUser=Ae.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let s=new xr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new xr,e.enqueueRetryable(()=>i(this.currentUser))};const l=()=>{const c=s;e.enqueueRetryable(async()=>{await c.promise,await i(this.currentUser)})},u=c=>{Xe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),l()};this.t.onInit(c=>u(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?u(c):(Xe("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new xr)}},0),l()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Xe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ou(typeof r.accessToken=="string"),new _v(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ou(e===null||typeof e=="string"),new Ae(e)}}class pk{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ae.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class gk{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new pk(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ae.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class vk{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&Xe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const l=s.token!==this.R;return this.R=s.token,Xe("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{Xe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):Xe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ou(typeof n.token=="string"),this.R=n.token,new mk(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yk(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=yk(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function wv(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wk{constructor(e,n,r,i,s,l,u,c,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=l,this.autoDetectLongPolling=u,this.longPollingOptions=c,this.useFetchStreams=f}}class Yo{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Yo("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Yo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Kf,K;(K=Kf||(Kf={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new yv([4294967295,4294967295],0);function Aa(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ek{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=r,this.Lo=i,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),r=Math.max(0,Date.now()-this.Qo),i=Math.max(0,n-r);i>0&&Xe("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new xr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(l=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const l=Date.now()+r,u=new Zc(e,n,l,i,s);return u.start(r),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Ne(Pe.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Tk(t,e){if(Yc("AsyncQueue",`${e}: ${t}`),wv(t))return new Ne(Pe.UNAVAILABLE,`${e}: ${t}`);throw t}var Gf,qf;(qf=Gf||(Gf={})).J_="default",qf.Cache="cache";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kk{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ae.UNAUTHENTICATED,this.clientId=_k.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{Xe("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(Xe("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Ne(Pe.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new xr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Tk(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf=new Map;function Sk(t,e,n,r){if(e===!0&&r===!0)throw new Ne(Pe.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Ik(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Jc()}function Ck(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new Ne(Pe.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ik(t);throw new Ne(Pe.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new Ne(Pe.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new Ne(Pe.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Sk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Ev((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new Ne(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new Ne(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new Ne(Pe.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Tv{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Yf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new Ne(Pe.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new Ne(Pe.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Yf(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new hk;switch(r.type){case"firstParty":return new gk(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Ne(Pe.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Xf.get(n);r&&(Xe("ComponentProvider","Removing Datastore"),Xf.delete(n),r.terminate())}(this),Promise.resolve()}}function kv(t,e,n,r={}){var i;const s=(t=Ck(t,Tv))._getSettings(),l=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==l&&ck("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:l,ssl:!1})),r.mockUserToken){let u,c;if(typeof r.mockUserToken=="string")u=r.mockUserToken,c=Ae.MOCK_USER;else{u=Dm(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new Ne(Pe.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new Ae(f)}t._authCredentials=new dk(new _v(u,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ak{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Ek(this,"async_queue_retry"),this.hu=()=>{const n=Aa();n&&Xe("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Aa();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Aa();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new xr;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!wv(e))throw e;Xe("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(r=>{this.au=r,this.uu=!1;const i=function(l){let u=l.message||"";return l.stack&&(u=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),u}(r);throw Yc("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.uu=!1,r))));return this.iu=n,n}enqueueAfterDelay(e,n,r){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const i=Zc.createAndSchedule(this,e,n,r,s=>this.Eu(s));return this._u.push(i),i}Pu(){this.au&&Jc()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}class Rk extends Tv{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Ak}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Nk(this),this._firestoreClient.terminate()}}function Pk(t,e){const n=cs(),r="(default)",i=ir(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Uc("firestore");s&&kv(i,...s)}return i}function Nk(t){var e,n,r;const i=t._freezeSettings(),s=function(u,c,f,k){return new wk(u,c,f,k.host,k.ssl,k.experimentalForceLongPolling,k.experimentalAutoDetectLongPolling,Ev(k.experimentalLongPollingOptions),k.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new kk(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}(function(e,n=!0){(function(i){ps=i})(sr),Nt(new Tt("firestore",(r,{instanceIdentifier:i,options:s})=>{const l=r.getProvider("app").getImmediate(),u=new Rk(new fk(r.getProvider("auth-internal")),new vk(r.getProvider("app-check-internal")),function(f,k){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Ne(Pe.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Yo(f.options.projectId,k)}(l,i),l);return s=Object.assign({useFetchStreams:n},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Qe(Wf,"4.6.3",e),Qe(Wf,"4.6.3","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="firebasestorage.googleapis.com",Ok="storageBucket",Dk=2*60*1e3,Lk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt extends kt{constructor(e,n,r=0){super(Ra(e),`Firebase Storage: ${n} (${Ra(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Dt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ra(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ot;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ot||(Ot={}));function Ra(t){return"storage/"+t}function xk(){const t="An unknown error occurred, please check the error payload for server response.";return new Dt(Ot.UNKNOWN,t)}function Mk(){return new Dt(Ot.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Uk(){return new Dt(Ot.CANCELED,"User canceled the upload/download.")}function Fk(t){return new Dt(Ot.INVALID_URL,"Invalid URL '"+t+"'.")}function jk(t){return new Dt(Ot.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Qf(t){return new Dt(Ot.INVALID_ARGUMENT,t)}function Iv(){return new Dt(Ot.APP_DELETED,"The Firebase app was deleted.")}function bk(t){return new Dt(Ot.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=vt.makeFromUrl(e,n)}catch{return new vt(e,"")}if(r.path==="")return r;throw jk(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(P){P.path.charAt(P.path.length-1)==="/"&&(P.path_=P.path_.slice(0,-1))}const l="(/(.*))?$",u=new RegExp("^gs://"+i+l,"i"),c={bucket:1,path:3};function f(P){P.path_=decodeURIComponent(P.path)}const k="v[A-Za-z0-9_]+",I=n.replace(/[.]/g,"\\."),S="(/([^?#]*).*)?$",O=new RegExp(`^https?://${I}/${k}/b/${i}/o${S}`,"i"),N={bucket:1,path:3},D=n===Sv?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",T=new RegExp(`^https?://${D}/${i}/${b}`,"i"),E=[{regex:u,indices:c,postModify:s},{regex:O,indices:N,postModify:f},{regex:T,indices:{bucket:1,path:2},postModify:f}];for(let P=0;P<E.length;P++){const M=E[P],U=M.regex.exec(e);if(U){const m=U[M.indices.bucket];let p=U[M.indices.path];p||(p=""),r=new vt(m,p),M.postModify(r);break}}if(r==null)throw Fk(e);return r}}class zk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $k(t,e,n){let r=1,i=null,s=null,l=!1,u=0;function c(){return u===2}let f=!1;function k(...b){f||(f=!0,e.apply(null,b))}function I(b){i=setTimeout(()=>{i=null,t(O,c())},b)}function S(){s&&clearTimeout(s)}function O(b,...T){if(f){S();return}if(b){S(),k.call(null,b,...T);return}if(c()||l){S(),k.call(null,b,...T);return}r<64&&(r*=2);let E;u===1?(u=2,E=0):E=(r+Math.random())*1e3,I(E)}let N=!1;function D(b){N||(N=!0,S(),!f&&(i!==null?(b||(u=2),clearTimeout(i),I(0)):b||(u=1)))}return I(0),s=setTimeout(()=>{l=!0,D(!0)},n),D}function Bk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hk(t){return t!==void 0}function Jf(t,e,n,r){if(r<e)throw Qf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Qf(`Invalid value for '${t}'. Expected ${n} or less.`)}function Vk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qo;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Qo||(Qo={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e,n,r,i,s,l,u,c,f,k,I,S=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=l,this.callback_=u,this.errorCallback_=c,this.timeout_=f,this.progressCallback_=k,this.connectionFactory_=I,this.retry=S,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((O,N)=>{this.resolve_=O,this.reject_=N,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Xs(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const l=u=>{const c=u.loaded,f=u.lengthComputable?u.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,f)};this.progressCallback_!==null&&s.addUploadProgressListener(l),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(l),this.pendingConnection_=null;const u=s.getErrorCode()===Qo.NO_ERROR,c=s.getStatus();if(!u||Wk(c,this.additionalRetryCodes_)&&this.retry){const k=s.getErrorCode()===Qo.ABORT;r(!1,new Xs(!1,null,k));return}const f=this.successCodes_.indexOf(c)!==-1;r(!0,new Xs(f,s))})},n=(r,i)=>{const s=this.resolve_,l=this.reject_,u=i.connection;if(i.wasSuccessCode)try{const c=this.callback_(u,u.getResponse());Hk(c)?s(c):s()}catch(c){l(c)}else if(u!==null){const c=xk();c.serverResponse=u.getErrorText(),this.errorCallback_?l(this.errorCallback_(u,c)):l(c)}else if(i.canceled){const c=this.appDelete_?Iv():Uk();l(c)}else{const c=Mk();l(c)}};this.canceled_?n(!1,new Xs(!1,null,!0)):this.backoffId_=$k(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Bk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Xs{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Gk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function qk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Xk(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Yk(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Qk(t,e,n,r,i,s,l=!0){const u=Vk(t.urlParams),c=t.url+u,f=Object.assign({},t.headers);return Xk(f,e),Gk(f,n),qk(f,s),Yk(f,r),new Kk(c,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jk(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Zk(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,n){this._service=e,n instanceof vt?this._location=n:this._location=vt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Jo(e,n)}get root(){const e=new vt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Zk(this._location.path)}get storage(){return this._service}get parent(){const e=Jk(this._location.path);if(e===null)return null;const n=new vt(this._location.bucket,e);return new Jo(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bk(e)}}function Zf(t,e){const n=e==null?void 0:e[Ok];return n==null?null:vt.makeFromBucketSpec(n,t)}function eS(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Dm(i,t.app.options.projectId))}class tS{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Sv,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Dk,this._maxUploadRetryTime=Lk,this._requests=new Set,i!=null?this._bucket=vt.makeFromBucketSpec(i,this._host):this._bucket=Zf(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vt.makeFromBucketSpec(this._url,e):this._bucket=Zf(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Jf("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Jf("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Jo(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new zk(Iv());{const l=Qk(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(l),l.getPromise().then(()=>this._requests.delete(l),()=>this._requests.delete(l)),l}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const ep="@firebase/storage",tp="0.12.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cv="storage";function nS(t=cs(),e){t=We(t);const r=ir(t,Cv).getImmediate({identifier:e}),i=Uc("storage");return i&&Av(r,...i),r}function Av(t,e,n,r={}){eS(t,e,n,r)}function rS(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new tS(n,r,i,e,sr)}function iS(){Nt(new Tt(Cv,rS,"PUBLIC").setMultipleInstances(!0)),Qe(ep,tp,""),Qe(ep,tp,"esm2017")}iS();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sS="type.googleapis.com/google.protobuf.Int64Value",oS="type.googleapis.com/google.protobuf.UInt64Value";function Rv(t,e){const n={};for(const r in t)t.hasOwnProperty(r)&&(n[r]=e(t[r]));return n}function Du(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Du(e));if(typeof t=="function"||typeof t=="object")return Rv(t,e=>Du(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Zo(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case sS:case oS:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Zo(e)):typeof t=="function"||typeof t=="object"?Rv(t,e=>Zo(e)):t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Mr extends kt{constructor(e,n,r){super(`${eh}/${e}`,n||""),this.details=r}}function lS(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function aS(t,e){let n=lS(t),r=n,i;try{const s=e&&e.error;if(s){const l=s.status;if(typeof l=="string"){if(!np[l])return new Mr("internal","internal");n=np[l],r=l}const u=s.message;typeof u=="string"&&(r=u),i=s.details,i!==void 0&&(i=Zo(i))}}catch{}return n==="ok"?null:new Mr(n,r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uS{constructor(e,n,r){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(i=>this.auth=i,()=>{}),this.messaging||n.get().then(i=>this.messaging=i,()=>{}),this.appCheck||r.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),i=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:i}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="us-central1";function cS(t){let e=null;return{promise:new Promise((n,r)=>{e=setTimeout(()=>{r(new Mr("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}class hS{constructor(e,n,r,i,s=Lu,l){this.app=e,this.fetchImpl=l,this.emulatorOrigin=null,this.contextProvider=new uS(n,r,i),this.cancelAllRequests=new Promise(u=>{this.deleteService=()=>Promise.resolve(u())});try{const u=new URL(s);this.customDomain=u.origin,this.region=Lu}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function dS(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function fS(t,e,n){return r=>gS(t,e,r,{})}async function pS(t,e,n,r){n["Content-Type"]="application/json";let i;try{i=await r(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await i.json()}catch{}return{status:i.status,json:s}}function gS(t,e,n,r){const i=t._url(e);return mS(t,i,n,r)}async function mS(t,e,n,r){n=Du(n);const i={data:n},s={},l=await t.contextProvider.getContext(r.limitedUseAppCheckTokens);l.authToken&&(s.Authorization="Bearer "+l.authToken),l.messagingToken&&(s["Firebase-Instance-ID-Token"]=l.messagingToken),l.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=l.appCheckToken);const u=r.timeout||7e4,c=cS(u),f=await Promise.race([pS(e,i,s,t.fetchImpl),c.promise,t.cancelAllRequests]);if(c.cancel(),!f)throw new Mr("cancelled","Firebase Functions instance was deleted.");const k=aS(f.status,f.json);if(k)throw k;if(!f.json)throw new Mr("internal","Response is not valid JSON object.");let I=f.json.data;if(typeof I>"u"&&(I=f.json.result),typeof I>"u")throw new Mr("internal","Response is missing data field.");return{data:Zo(I)}}const rp="@firebase/functions",ip="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vS="auth-internal",yS="app-check-internal",_S="messaging-internal";function wS(t,e){const n=(r,{instanceIdentifier:i})=>{const s=r.getProvider("app").getImmediate(),l=r.getProvider(vS),u=r.getProvider(_S),c=r.getProvider(yS);return new hS(s,l,u,c,i,t)};Nt(new Tt(eh,n,"PUBLIC").setMultipleInstances(!0)),Qe(rp,ip,e),Qe(rp,ip,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ES(t=cs(),e=Lu){const r=ir(We(t),eh).getImmediate({identifier:e}),i=Uc("functions");return i&&Pv(r,...i),r}function Pv(t,e,n){dS(We(t),e,n)}function VI(t,e,n){return fS(We(t),e)}wS(fetch.bind(self));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu=new Map,Nv={activated:!1,tokenObservers:[]},TS={initialized:!1,enabled:!1};function ge(t){return xu.get(t)||Object.assign({},Nv)}function kS(t,e){return xu.set(t,e),xu.get(t)}function El(){return TS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ov="https://content-firebaseappcheck.googleapis.com/v1",SS="exchangeRecaptchaV3Token",IS="exchangeDebugToken",sp={OFFSET_DURATION:5*60*1e3,RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3},CS=24*60*60*1e3;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e,n,r,i,s){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=r,this.lowerBound=i,this.upperBound=s,this.pending=null,this.nextErrorWaitInterval=i,i>s)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new Ji,this.pending.promise.catch(n=>{}),await RS(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new Ji,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function RS(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.",throttled:"Requests throttled due to {$httpStatus} error. Attempts allowed again after {$time}"},$e=new Gr("appCheck","AppCheck",PS);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(t=!1){var e;return t?(e=self.grecaptcha)===null||e===void 0?void 0:e.enterprise:self.grecaptcha}function th(t){if(!ge(t).activated)throw $e.create("use-before-activation",{appName:t.name})}function Dv(t){const e=Math.round(t/1e3),n=Math.floor(e/(3600*24)),r=Math.floor((e-n*3600*24)/3600),i=Math.floor((e-n*3600*24-r*3600)/60),s=e-n*3600*24-r*3600-i*60;let l="";return n&&(l+=Ys(n)+"d:"),r&&(l+=Ys(r)+"h:"),l+=Ys(i)+"m:"+Ys(s)+"s",l}function Ys(t){return t===0?"00":t>=10?t.toString():"0"+t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nh({url:t,body:e},n){const r={"Content-Type":"application/json"},i=n.getImmediate({optional:!0});if(i){const I=await i.getHeartbeatsHeader();I&&(r["X-Firebase-Client"]=I)}const s={method:"POST",body:JSON.stringify(e),headers:r};let l;try{l=await fetch(t,s)}catch(I){throw $e.create("fetch-network-error",{originalErrorMessage:I==null?void 0:I.message})}if(l.status!==200)throw $e.create("fetch-status-error",{httpStatus:l.status});let u;try{u=await l.json()}catch(I){throw $e.create("fetch-parse-error",{originalErrorMessage:I==null?void 0:I.message})}const c=u.ttl.match(/^([\d.]+)(s)$/);if(!c||!c[2]||isNaN(Number(c[1])))throw $e.create("fetch-parse-error",{originalErrorMessage:`ttl field (timeToLive) is not in standard Protobuf Duration format: ${u.ttl}`});const f=Number(c[1])*1e3,k=Date.now();return{token:u.token,expireTimeMillis:k+f,issuedAtTimeMillis:k}}function NS(t,e){const{projectId:n,appId:r,apiKey:i}=t.options;return{url:`${Ov}/projects/${n}/apps/${r}:${SS}?key=${i}`,body:{recaptcha_v3_token:e}}}function Lv(t,e){const{projectId:n,appId:r,apiKey:i}=t.options;return{url:`${Ov}/projects/${n}/apps/${r}:${IS}?key=${i}`,body:{debug_token:e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OS="firebase-app-check-database",DS=1,ns="firebase-app-check-store",xv="debug-token";let Qs=null;function Mv(){return Qs||(Qs=new Promise((t,e)=>{try{const n=indexedDB.open(OS,DS);n.onsuccess=r=>{t(r.target.result)},n.onerror=r=>{var i;e($e.create("storage-open",{originalErrorMessage:(i=r.target.error)===null||i===void 0?void 0:i.message}))},n.onupgradeneeded=r=>{const i=r.target.result;switch(r.oldVersion){case 0:i.createObjectStore(ns,{keyPath:"compositeKey"})}}}catch(n){e($e.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),Qs)}function LS(t){return Fv(jv(t))}function xS(t,e){return Uv(jv(t),e)}function MS(t){return Uv(xv,t)}function US(){return Fv(xv)}async function Uv(t,e){const r=(await Mv()).transaction(ns,"readwrite"),s=r.objectStore(ns).put({compositeKey:t,value:e});return new Promise((l,u)=>{s.onsuccess=c=>{l()},r.onerror=c=>{var f;u($e.create("storage-set",{originalErrorMessage:(f=c.target.error)===null||f===void 0?void 0:f.message}))}})}async function Fv(t){const n=(await Mv()).transaction(ns,"readonly"),i=n.objectStore(ns).get(t);return new Promise((s,l)=>{i.onsuccess=u=>{const c=u.target.result;s(c?c.value:void 0)},n.onerror=u=>{var c;l($e.create("storage-get",{originalErrorMessage:(c=u.target.error)===null||c===void 0?void 0:c.message}))}})}function jv(t){return`${t.options.appId}-${t.name}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rs=new ml("@firebase/app-check");/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FS(t){if(Fc()){let e;try{e=await LS(t)}catch(n){rs.warn(`Failed to read token from IndexedDB. Error: ${n}`)}return e}}function Pa(t,e){return Fc()?xS(t,e).catch(n=>{rs.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}async function jS(){let t;try{t=await US()}catch{}if(t)return t;{const e=Fw();return MS(e).catch(n=>rs.warn(`Failed to persist debug token to IndexedDB. Error: ${n}`)),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rh(){return El().enabled}async function ih(){const t=El();if(t.enabled&&t.token)return t.token.promise;throw Error(`
            Can't get debug token in production mode.
        `)}function bS(){const t=Rm(),e=El();if(e.initialized=!0,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN!="string"&&t.FIREBASE_APPCHECK_DEBUG_TOKEN!==!0)return;e.enabled=!0;const n=new Ji;e.token=n,typeof t.FIREBASE_APPCHECK_DEBUG_TOKEN=="string"?n.resolve(t.FIREBASE_APPCHECK_DEBUG_TOKEN):n.resolve(jS())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zS={error:"UNKNOWN_ERROR"};function $S(t){return xc.encodeString(JSON.stringify(t),!1)}async function Mu(t,e=!1){const n=t.app;th(n);const r=ge(n);let i=r.token,s;if(i&&!Sr(i)&&(r.token=void 0,i=void 0),!i){const c=await r.cachedTokenPromise;c&&(Sr(c)?i=c:await Pa(n,void 0))}if(!e&&i&&Sr(i))return{token:i.token};let l=!1;if(rh()){r.exchangeTokenPromise||(r.exchangeTokenPromise=nh(Lv(n,await ih()),t.heartbeatServiceProvider).finally(()=>{r.exchangeTokenPromise=void 0}),l=!0);const c=await r.exchangeTokenPromise;return await Pa(n,c),r.token=c,{token:c.token}}try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),l=!0),i=await ge(n).exchangeTokenPromise}catch(c){c.code==="appCheck/throttled"?rs.warn(c.message):rs.error(c),s=c}let u;return i?s?Sr(i)?u={token:i.token,internalError:s}:u=ap(s):(u={token:i.token},r.token=i,await Pa(n,i)):u=ap(s),l&&$v(n,u),u}async function BS(t){const e=t.app;th(e);const{provider:n}=ge(e);if(rh()){const r=await ih(),{token:i}=await nh(Lv(e,r),t.heartbeatServiceProvider);return{token:i}}else{const{token:r}=await n.getToken();return{token:r}}}function bv(t,e,n,r){const{app:i}=t,s=ge(i),l={next:n,error:r,type:e};if(s.tokenObservers=[...s.tokenObservers,l],s.token&&Sr(s.token)){const u=s.token;Promise.resolve().then(()=>{n({token:u.token}),lp(t)}).catch(()=>{})}s.cachedTokenPromise.then(()=>lp(t))}function zv(t,e){const n=ge(t),r=n.tokenObservers.filter(i=>i.next!==e);r.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=r}function lp(t){const{app:e}=t,n=ge(e);let r=n.tokenRefresher;r||(r=HS(t),n.tokenRefresher=r),!r.isRunning()&&n.isTokenAutoRefreshEnabled&&r.start()}function HS(t){const{app:e}=t;return new AS(async()=>{const n=ge(e);let r;if(n.token?r=await Mu(t,!0):r=await Mu(t),r.error)throw r.error;if(r.internalError)throw r.internalError},()=>!0,()=>{const n=ge(e);if(n.token){let r=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const i=n.token.expireTimeMillis-5*60*1e3;return r=Math.min(r,i),Math.max(0,r-Date.now())}else return 0},sp.RETRIAL_MIN_WAIT,sp.RETRIAL_MAX_WAIT)}function $v(t,e){const n=ge(t).tokenObservers;for(const r of n)try{r.type==="EXTERNAL"&&e.error!=null?r.error(e.error):r.next(e)}catch{}}function Sr(t){return t.expireTimeMillis-Date.now()>0}function ap(t){return{token:$S(zS),error:t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VS{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=ge(this.app);for(const n of e)zv(this.app,n.next);return Promise.resolve()}}function WS(t,e){return new VS(t,e)}function KS(t){return{getToken:e=>Mu(t,e),getLimitedUseToken:()=>BS(t),addTokenListener:e=>bv(t,"INTERNAL",e),removeTokenListener:e=>zv(t.app,e)}}const GS="@firebase/app-check",qS="0.8.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="https://www.google.com/recaptcha/api.js";function YS(t,e){const n=new Ji,r=ge(t);r.reCAPTCHAState={initialized:n};const i=QS(t),s=op(!1);return s?up(t,e,s,i,n):eI(()=>{const l=op(!1);if(!l)throw new Error("no recaptcha");up(t,e,l,i,n)}),n.promise}function up(t,e,n,r,i){n.ready(()=>{ZS(t,e,n,r),i.resolve(n)})}function QS(t){const e=`fire_app_check_${t.name}`,n=document.createElement("div");return n.id=e,n.style.display="none",document.body.appendChild(n),e}async function JS(t){th(t);const n=await ge(t).reCAPTCHAState.initialized.promise;return new Promise((r,i)=>{const s=ge(t).reCAPTCHAState;n.ready(()=>{r(n.execute(s.widgetId,{action:"fire_app_check"}))})})}function ZS(t,e,n,r){const i=n.render(r,{sitekey:e,size:"invisible",callback:()=>{ge(t).reCAPTCHAState.succeeded=!0},"error-callback":()=>{ge(t).reCAPTCHAState.succeeded=!1}}),s=ge(t);s.reCAPTCHAState=Object.assign(Object.assign({},s.reCAPTCHAState),{widgetId:i})}function eI(t){const e=document.createElement("script");e.src=XS,e.onload=t,document.head.appendChild(e)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this._siteKey=e,this._throttleData=null}async getToken(){var e,n,r;nI(this._throttleData);const i=await JS(this._app).catch(l=>{throw $e.create("recaptcha-error")});if(!(!((e=ge(this._app).reCAPTCHAState)===null||e===void 0)&&e.succeeded))throw $e.create("recaptcha-error");let s;try{s=await nh(NS(this._app,i),this._heartbeatServiceProvider)}catch(l){throw!((n=l.code)===null||n===void 0)&&n.includes("fetch-status-error")?(this._throttleData=tI(Number((r=l.customData)===null||r===void 0?void 0:r.httpStatus),this._throttleData),$e.create("throttled",{time:Dv(this._throttleData.allowRequestsAfter-Date.now()),httpStatus:this._throttleData.httpStatus})):l}return this._throttleData=null,s}initialize(e){this._app=e,this._heartbeatServiceProvider=ir(e,"heartbeat"),YS(e,this._siteKey).catch(()=>{})}isEqual(e){return e instanceof sh?this._siteKey===e._siteKey:!1}}function tI(t,e){if(t===404||t===403)return{backoffCount:1,allowRequestsAfter:Date.now()+CS,httpStatus:t};{const n=e?e.backoffCount:0,r=Bw(n,1e3,2);return{backoffCount:n+1,allowRequestsAfter:Date.now()+r,httpStatus:t}}}function nI(t){if(t&&Date.now()-t.allowRequestsAfter<=0)throw $e.create("throttled",{time:Dv(t.allowRequestsAfter-Date.now()),httpStatus:t.httpStatus})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rI(t=cs(),e){t=We(t);const n=ir(t,"app-check");if(El().initialized||bS(),rh()&&ih().then(i=>console.log(`App Check debug token: ${i}. You will need to add it to your app's App Check settings in the Firebase console for it to work.`)),n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(s.isTokenAutoRefreshEnabled===e.isTokenAutoRefreshEnabled&&s.provider.isEqual(e.provider))return i;throw $e.create("already-initialized",{appName:t.name})}const r=n.initialize({options:e});return iI(t,e.provider,e.isTokenAutoRefreshEnabled),ge(t).isTokenAutoRefreshEnabled&&bv(r,"INTERNAL",()=>{}),r}function iI(t,e,n){const r=kS(t,Object.assign({},Nv));r.activated=!0,r.provider=e,r.cachedTokenPromise=FS(t).then(i=>(i&&Sr(i)&&(r.token=i,$v(t,{token:i.token})),i)),r.isTokenAutoRefreshEnabled=n===void 0?t.automaticDataCollectionEnabled:n,r.provider.initialize(t)}const sI="app-check",cp="app-check-internal";function oI(){Nt(new Tt(sI,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return WS(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(cp).initialize()})),Nt(new Tt(cp,t=>{const e=t.getProvider("app-check").getImmediate();return KS(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),Qe(GS,qS)}oI();const lI="8E217614-B085-40D1-9745-66B5452F8EAC",aI="192.168.0.121",uI=9099,cI=8086,hI=9199,dI=5005,fI="europe-west6",pI={apiKey:"AIzaSyCe73v-zNUndnOkOqy2zykyRPt-FFThag4",authDomain:"schoolos-69.firebaseapp.com",projectId:"schoolos-69",storageBucket:"schoolos-69.appspot.com",messagingSenderId:"151626248356",appId:"1:151626248356:web:8efe3bc5ded92cec07b631"},Bv=Mm(pI),gI=()=>{const t=location.hostname;return t==="localhost"||t===aI},Hv=ok(),WI=new Bt,hp=new xi("oidc.discord");hp.addScope("identify"),hp.addScope("email");const mI=Pk(),vI=nS(),yI=ES(Bv,fI),Js=location.hostname;gI()&&(self.FIREBASE_APPCHECK_DEBUG_TOKEN=lI,tv(Hv,"http://"+Js+":"+uI),kv(mI,""+Js,cI),Av(vI,""+Js,hI),Pv(yI,""+Js,dI));rI(Bv,{provider:new sh("6LdnMfkpAAAAAH5lnZVXxGsaEW69tQcpwpmbUzeZ"),isTokenAutoRefreshEnabled:!0});const Vv=V.createContext(),_I={user:null,disclaimerAccepted:!1},wI=(t,e)=>{switch(e.type){case"SET_USER":return{...t,user:e.payload};case"SET_DISCLAIMER_ACCEPTED":return{...t,disclaimerAccepted:e.payload};default:return t}},EI=({children:t})=>{const[e,n]=V.useReducer(wI,_I);return V.useEffect(()=>{const r=X1(Hv,i=>n({type:"SET_USER",payload:i}));return()=>r()},[]),B.jsx(Vv.Provider,{value:{state:e,dispatch:n},children:t})},TI=()=>V.useContext(Vv);var Wv={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var s="",l=0;l<arguments.length;l++){var u=arguments[l];u&&(s=i(s,r(u)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return n.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var l="";for(var u in s)e.call(s,u)&&s[u]&&(l=i(l,u));return l}function i(s,l){return l?s?s+" "+l:s+l:s}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(Wv);var kI=Wv.exports;const Ke=ju(kI),Kv=["xxl","xl","lg","md","sm","xs"],Gv="xs",Tl=V.createContext({prefixes:{},breakpoints:Kv,minBreakpoint:Gv});function tt(t,e){const{prefixes:n}=V.useContext(Tl);return t||n[e]||e}function SI(){const{breakpoints:t}=V.useContext(Tl);return t}function II(){const{minBreakpoint:t}=V.useContext(Tl);return t}function KI(){const{dir:t}=V.useContext(Tl);return t==="rtl"}const qv=t=>V.forwardRef((e,n)=>B.jsx("div",{...e,ref:n,className:Ke(e.className,t)})),CI=["as","disabled"];function AI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function RI(t){return!t||t.trim()==="#"}function Xv({tagName:t,disabled:e,href:n,target:r,rel:i,role:s,onClick:l,tabIndex:u=0,type:c}){t||(n!=null||r!=null||i!=null?t="a":t="button");const f={tagName:t};if(t==="button")return[{type:c||"button",disabled:e},f];const k=S=>{if((e||t==="a"&&RI(n))&&S.preventDefault(),e){S.stopPropagation();return}l==null||l(S)},I=S=>{S.key===" "&&(S.preventDefault(),k(S))};return t==="a"&&(n||(n="#"),e&&(n=void 0)),[{role:s??"button",disabled:void 0,tabIndex:e?void 0:u,href:n,target:t==="a"?r:void 0,"aria-disabled":e||void 0,rel:t==="a"?i:void 0,onClick:k,onKeyDown:I},f]}const Yv=V.forwardRef((t,e)=>{let{as:n,disabled:r}=t,i=AI(t,CI);const[s,{tagName:l}]=Xv(Object.assign({tagName:n,disabled:r},i));return B.jsx(l,Object.assign({},i,s,{ref:e}))});Yv.displayName="Button";const GI=Yv,Uu=V.forwardRef(({as:t,bsPrefix:e,variant:n="primary",size:r,active:i=!1,disabled:s=!1,className:l,...u},c)=>{const f=tt(e,"btn"),[k,{tagName:I}]=Xv({tagName:t,disabled:s,...u}),S=I;return B.jsx(S,{...k,...u,ref:c,disabled:s,className:Ke(l,f,i&&"active",n&&`${f}-${n}`,r&&`${f}-${r}`,u.href&&s&&"disabled")})});Uu.displayName="Button";const oh=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=tt(e,"card-body"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));oh.displayName="CardBody";const Qv=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=tt(e,"card-footer"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));Qv.displayName="CardFooter";const Jv=V.createContext(null);Jv.displayName="CardHeaderContext";const Zv=V.forwardRef(({bsPrefix:t,className:e,as:n="div",...r},i)=>{const s=tt(t,"card-header"),l=V.useMemo(()=>({cardHeaderBsPrefix:s}),[s]);return B.jsx(Jv.Provider,{value:l,children:B.jsx(n,{ref:i,...r,className:Ke(e,s)})})});Zv.displayName="CardHeader";const ey=V.forwardRef(({bsPrefix:t,className:e,variant:n,as:r="img",...i},s)=>{const l=tt(t,"card-img");return B.jsx(r,{ref:s,className:Ke(n?`${l}-${n}`:l,e),...i})});ey.displayName="CardImg";const ty=V.forwardRef(({className:t,bsPrefix:e,as:n="div",...r},i)=>(e=tt(e,"card-img-overlay"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));ty.displayName="CardImgOverlay";const ny=V.forwardRef(({className:t,bsPrefix:e,as:n="a",...r},i)=>(e=tt(e,"card-link"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));ny.displayName="CardLink";const PI=qv("h6"),ry=V.forwardRef(({className:t,bsPrefix:e,as:n=PI,...r},i)=>(e=tt(e,"card-subtitle"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));ry.displayName="CardSubtitle";const iy=V.forwardRef(({className:t,bsPrefix:e,as:n="p",...r},i)=>(e=tt(e,"card-text"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));iy.displayName="CardText";const NI=qv("h5"),sy=V.forwardRef(({className:t,bsPrefix:e,as:n=NI,...r},i)=>(e=tt(e,"card-title"),B.jsx(n,{ref:i,className:Ke(t,e),...r})));sy.displayName="CardTitle";const oy=V.forwardRef(({bsPrefix:t,className:e,bg:n,text:r,border:i,body:s=!1,children:l,as:u="div",...c},f)=>{const k=tt(t,"card");return B.jsx(u,{ref:f,...c,className:Ke(e,k,n&&`bg-${n}`,r&&`text-${r}`,i&&`border-${i}`),children:s?B.jsx(oh,{children:l}):l})});oy.displayName="Card";const Zs=Object.assign(oy,{Img:ey,Title:sy,Subtitle:ry,Body:oh,Link:ny,Text:iy,Header:Zv,Footer:Qv,ImgOverlay:ty}),Fu=V.forwardRef(({bsPrefix:t,fluid:e=!1,as:n="div",className:r,...i},s)=>{const l=tt(t,"container"),u=typeof e=="string"?`-${e}`:"-fluid";return B.jsx(n,{ref:s,...i,className:Ke(r,e?`${l}${u}`:l)})});Fu.displayName="Container";function OI(t,e=Kv,n=Gv){const r=[];return Object.entries(t).forEach(([i,s])=>{s!=null&&(typeof s=="object"?e.forEach(l=>{const u=s[l];if(u!=null){const c=l!==n?`-${l}`:"";r.push(`${i}${c}-${u}`)}}):r.push(`${i}-${s}`))}),r}const ly=V.forwardRef(({as:t="div",bsPrefix:e,className:n,direction:r,gap:i,...s},l)=>{e=tt(e,r==="horizontal"?"hstack":"vstack");const u=SI(),c=II();return B.jsx(t,{...s,ref:l,className:Ke(n,e,...OI({gap:i},u,c))})});ly.displayName="Stack";function ay({enterSiteCallback:t}){const e=()=>{localStorage.setItem("privacyDisclaimerAccepted","true"),t()},n=()=>history.back();return B.jsx(Fu,{className:"mt-5 text-center",style:{maxWidth:"900px"},children:B.jsxs(Zs,{children:[B.jsxs(Zs.Header,{className:"py-3 bg-primary",as:"h3",children:[B.jsx("i",{className:"bi bi-shield-fill-exclamation pe-2"}),"Disclaimer & Data Protection "]}),B.jsxs(Zs.Body,{className:"text-start",children:[B.jsxs(Zs.Text,{children:[B.jsx("h4",{children:"Test category"}),B.jsx("h4",{children:"Another thing"})]}),B.jsx(Fu,{children:B.jsxs(ly,{direction:"horizontal",gap:3,children:[B.jsx(Uu,{variant:"outline-success",className:"flex-fill",onClick:e,children:"I understand and accept"}),B.jsx(Uu,{variant:"outline-danger",className:"flex-fill",onClick:n,children:"I don't accept"})]})})]})]})})}const qI=Object.freeze(Object.defineProperty({__proto__:null,default:ay},Symbol.toStringTag,{value:"Module"})),DI=Hu.lazy(()=>Wy(()=>import("./App-wLwcmPiS.js").then(t=>t.A),__vite__mapDeps([0,1]))),LI=15,xI=()=>localStorage.getItem("privacyDisclaimerAccepted"),MI=()=>{const{state:t,dispatch:e}=TI(),[n,r]=V.useState(!1);V.useEffect(()=>{xI()==="true"?e({type:"SET_DISCLAIMER_ACCEPTED",payload:!0}):r(!0)},[]);const i=()=>{r(!1),e({type:"SET_DISCLAIMER_ACCEPTED",payload:!0})};return B.jsxs(B.Fragment,{children:[t.disclaimerAccepted&&B.jsx(V.Suspense,{fallback:B.jsx(B.Fragment,{}),children:B.jsx(DI,{})}),n&&B.jsx(ay,{enterSiteCallback:i})]})};Na.createRoot(document.getElementById("root")).render(B.jsx(Hu.StrictMode,{children:B.jsx(EI,{children:B.jsx(yw,{debounceDelay:LI,children:B.jsx(MI,{})})})}));const XI=Object.freeze(Object.defineProperty({__proto__:null},Symbol.toStringTag,{value:"Module"}));export{WI as A,Uu as B,Fu as C,XI as D,qI as I,Hu as R,ly as S,Wy as _,jI as a,Zs as b,Ke as c,TI as d,Hv as e,FI as f,ju as g,VI as h,Xv as i,B as j,SI as k,II as l,GI as m,KI as n,X1 as o,qv as p,Jv as q,V as r,UI as s,gI as t,tt as u,$I as v,HI as w,zI as x,BI as y,bI as z};
