var un=Object.defineProperty;var rr=Object.getOwnPropertySymbols;var cn=Object.prototype.hasOwnProperty,dn=Object.prototype.propertyIsEnumerable;var nr=(e,t,n)=>t in e?un(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,B=(e,t)=>{for(var n in t||(t={}))cn.call(t,n)&&nr(e,n,t[n]);if(rr)for(var n of rr(t))dn.call(t,n)&&nr(e,n,t[n]);return e};var pn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var le=(e,t,n)=>new Promise((r,a)=>{var l=p=>{try{u(n.next(p))}catch(g){a(g)}},s=p=>{try{u(n.throw(p))}catch(g){a(g)}},u=p=>p.done?r(p.value):Promise.resolve(p.value).then(l,s);u((n=n.apply(e,t)).next())});import{Y as mn,D as gn,a as Ar,n as fn,J as bn}from"./epic-5e5c79b8.js";import{E as hn,b as yn,j as vn,a as Sn,o as wn}from"./codemirror-1a556f17.js";var Va=pn(Lt=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const s of l.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=n(a);fetch(a.href,l)}})();const Ln={"&":"amp","<":"lt",">":"gt",'"':"quot","'":"#39","/":"#x2F"},or=e=>String(e).replace(/[&<>"'\/\\]/g,t=>`&${Ln[t]};`),Cn=e=>({tabIndex:"tabindex",className:"class",readOnly:"readonly"})[e]||e;function o(e,t,...n){t=t||{};const r=[...n];if(typeof e=="function")return t.children=r,e(t);const a=["svg","g","path"].includes(e)?document.createElementNS("http://www.w3.org/2000/svg",e):document.createElement(e);for(let[l,s]of Object.entries(t))l=or(Cn(l)),l.startsWith("on")&&l.toLowerCase()in window?a.addEventListener(l.toLowerCase().substring(2),s):l==="ref"?s(a):l==="style"?Object.assign(a.style,s):s===!0?a.setAttribute(l,l):s!==!1&&s!=null?a.setAttribute(l,or(s)):s===!1&&a.removeAttribute(l);for(;r.length;){const l=r.shift();Array.isArray(l)?r.push(...l):a.appendChild(l.nodeType==null?document.createTextNode(l.toString()):l)}return a}const Pn=["{","[",",",":"];let V=0,de="",q=[],A=0,_t="",oe=!1;function ar(e){q.splice(V+1,1,e," ")}function Nn(e){q.splice(V+1,1,e,`
`,de)}function lr(e){q.splice(V+1,1,`
`,de,e)}function sr(e){de=new Array(e).fill(" ").join("")}function In(){if(A===0){A=1,oe=!0;return}if(!oe){A+=1,oe=!0;return}const e=q[V],t=Pn.includes(e);A+=Number(t),oe=A%2===1}function ir(){A=0,oe=!1}function Gt(e){for(kn(e);~V;){const t=q[V--];if(t==='"'&&(In(),A%4===0)){lr(t);continue}if(!oe){if(t===":"&&(A+=A===0?2:0,ar(t),q.splice(V+1,1,": ")),t===","){ir(),ar(t);continue}if(t==="{"||t==="["){ir(),Nn(t),sr(de.length-2);continue}if(t==="}"||t==="]"){lr(t),sr(de.length+2);continue}}}return _t=q.join("").replace(/\n\s+\n/g,`
`),_t}function kn(e){V=e.length-1,de="",q=e.split(""),A=0,_t="",oe=!1}const An=`/* Container */\r
ue-player {\r
  background: black;\r
  cursor: pointer;\r
  display: block;\r
  height: 100%;\r
  position: relative;\r
  width: 100%;\r
  z-index: 0;\r
}\r
\r
/* Medias */\r
.ue-media-wrapper {\r
  position: relative;\r
}\r
.ue-media-wrapper video {\r
  height: 100%;\r
  width: 100%;\r
}\r
`,En=`.debug-close {\r
  float: right;\r
  font-size: 2em;\r
  margin: 0.5rem;\r
  padding-top: 0.5rem;\r
  padding-bottom: 0.5rem;\r
  padding-right: 0.5rem;\r
}\r
.debug-close::after {\r
  padding-left: 0.5rem;\r
  display: inline-block;\r
  content: '\\00d7';\r
}\r
.debug-close:hover {\r
  color: var(--color3);\r
  transform: scale(0.95);\r
}\r
\r
.debug-code {\r
  margin-top: 0.25rem;\r
}\r
\r
.debug-column {\r
  flex-grow: 1;\r
  padding: 0.15rem 10px 0.15rem 10px;\r
}\r
.debug-column textarea {\r
  width: 100%;\r
}\r
.debug-column-header {\r
  margin-bottom: 10px;\r
}\r
.debug-columns {\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  padding-top: 10px;\r
  padding-bottom: 10px;\r
}\r
\r
.debug-content {\r
  margin-left: 2rem;\r
  margin-right: 2rem;\r
}\r
\r
.debug-form {\r
  margin-left: 2rem;\r
  margin-right: 2rem;\r
  overflow-y: auto;\r
  padding: 1em;\r
}\r
\r
.debug-group {\r
  box-sizing: border-box;\r
  color-scheme: dark;\r
  display: flex;\r
  flex-direction: row;\r
  justify-content: space-between;\r
  padding: 0.15rem 10px 0.15rem 10px;\r
  width: 100%;\r
}\r
.debug-group input[type="textbox"] {\r
  caret-color: var(--color5);\r
  padding: 0 0.25rem;\r
  text-align: left;\r
}\r
.debug-group input[type="number"] {\r
  caret-color: var(--color5);\r
  text-align: right;\r
}\r
.debug-group input + input {\r
  margin-left: 0.5rem;\r
}\r
.debug-group select {\r
  padding: 0 0.25rem;\r
  text-align: left;\r
}\r
.debug-group select + input {\r
  margin-left: 0.5rem;\r
}\r
\r
.debug-header {\r
  color: var(--color3);\r
  font-style: italic;\r
  font-weight: bold;\r
}\r
.debug-header::after {\r
  content: '▾';\r
  float: right;\r
  font-style: normal;\r
  transform: rotate(0);\r
  transition-duration: .5s;\r
  transition-property: transform;\r
}\r
\r
.debug-heading {\r
  display: inline-block;\r
  font-size: 2em;\r
  margin-block-start: 0.67em;\r
  margin-block-end: 0.67em;\r
  margin-inline-start: 0px;\r
  margin-inline-end: 0px;\r
  padding: 0 0 0 2rem;\r
  position: relative;\r
}\r
\r
.debug-input {\r
  background-color: var(--color7);\r
  border: 2px solid var(--color7);\r
  border-radius: 4px;\r
  color: var(--color2);\r
  font-family: inherit;\r
}\r
\r
.debug-number-input {\r
  width: 75px;\r
}\r
\r
.debug-rows {\r
  border-bottom: 1px solid var(--color7);\r
  box-sizing: border-box;\r
  overflow: hidden;\r
  padding: 10px 0;\r
}\r
.debug-rows.collapsed {\r
  height: 2.5rem;\r
}\r
.debug-rows.collapsed .debug-header {\r
  color: var(--color2);\r
  margin-bottom: 1rem;\r
}\r
.debug-rows.collapsed .debug-header::after {\r
  transform: rotate(150deg);\r
}\r
\r
.debug-text {\r
  color: var(--color2);\r
  vertical-align: middle;\r
  font-weight: normal;\r
}\r
\r
.drawer-container {\r
  align-items: flex-end;\r
  color: var(--color2);\r
  display: flex;\r
  inset: 0;\r
  justify-content: center;\r
  overflow: hidden;\r
  pointer-events: none;\r
  position: absolute;\r
  z-index: 99;\r
}\r
\r
.drawer-wrap {\r
  backdrop-filter: blur(10px);\r
  -webkit-backdrop-filter: blur(10px);\r
  background-color: var(--color0);\r
  box-sizing: border-box;\r
  height: auto;\r
  max-height: 90%;\r
  min-height: 30%;\r
  overflow-y: auto;\r
  overflow-x: hidden;\r
  pointer-events: all;\r
  transform: translateY(100%);\r
  transition: .2s ease-out;\r
  width: 800px;\r
}\r
.drawer-wrap-visible {\r
  transform: translateY(0);\r
}\r
\r
#command-input {\r
  width: 300px;\r
}\r
\r
#debug-panel {\r
  min-width: 600px;\r
  width: 25%;\r
}\r
\r
textarea.silent {\r
  outline: none;\r
  resize: none;\r
}\r
`;function Tn(e,t){if(!(h!=null&&h.ready))return;const n=Dn(e);if(!n)return;const r=new CustomEvent(n,{detail:t});h.dispatchEvent(r)}function ct(e,t){if(!h)return;const n=new CustomEvent(e,{detail:t});h.dispatchEvent(n)}function Er(e){if(!h)return;const t=new ErrorEvent("error",{message:e});h.dispatchEvent(t)}function Dn(e){return/\w+(Click|Select)(ed)?/.test(e)?"pick":/\w+Hover(ed)?/.test(e)?"enter":/\w+Unhover(ed)?/.test(e)?"leave":/Measure\w+/.test(e)?"measure":null}const Rn=`ue-player {\r
  align-items: center;\r
  display: flex;\r
  justify-content: center;\r
}\r
\r
.ue-media-wrapper {\r
  aspect-ratio: 16 / 9;\r
}\r
\r
@media screen and (max-aspect-ratio: 16 / 9) {\r
  .ue-media-wrapper {\r
    width: 100%;\r
  }\r
}\r
@media screen and (min-aspect-ratio: 16 / 9) {\r
  .ue-media-wrapper {\r
    height: 100%;\r
  }\r
}\r
`;let Ge=null;function Tr(){const e=h==null?void 0:h.aspectRatio;return typeof e=="string"?e.replace(/\s/g,"").split("/").length>1:!1}function On(e){Ge=e}function ur(){if(!Ge)return;const e=h==null?void 0:h.aspectRatio;if(typeof e=="string"){const t=e.replace(/\s/g,"").split("/"),n=Tr();if(j==null||j.classList.toggle("fixed-size",n),n){const r=Number(t[0]),a=Number(t[1]);xn(r,a);return}}Ge.textContent=`
.ue-media-wrapper {
  height: 100%;
  width: 100%;
}
`}function xn(e=16,t=9){if(!Ge)return;const n=/aspect-ratio: (\d+) \/ (\d+)/g,r=`aspect-ratio: ${e} / ${t}`;Ge.textContent=Rn.replace(n,r)}mn.SetLoggerVerbosity(0);const cr=new gn({initialSettings:{AutoPlayVideo:!1,AutoConnect:!1,HoveringMouse:!0,MatchViewportRes:!0,MouseInput:!0,StartVideoMuted:!0,SuppressBrowserKeys:!1,WaitForStreamer:!0},useUrlParams:!1});let v=null,W=null,Dr=Bn,j=null;function Ut(e){var l;if(Rr(),!(h!=null&&h.isConnected))return;const t=e!=null?e:h.signalingURL,n=t!=="",r=n?t.replace(/^http/,"ws"):void 0;console.log("[ue] signaling-url ",r),cr.setSettings({AutoPlayVideo:n,AutoConnect:n,ss:r});const a=Dr(cr);j=a.videoElementParent,W==null||W.appendChild(j),v=a.pixelStreaming,j==null||j.classList.toggle("fixed-size",Tr()),(l=a==null?void 0:a.callback)==null||l.call(a),Mn()}function Bn(e){const t=document.createElement("div");return{pixelStreaming:new Ar(e,{videoElementParent:t}),videoElementParent:t}}function Rr(){h&&(v&&(v.disconnect(),v=null),W&&W.remove(),W=document.createElement("div"),W.className="ue-media-wrapper",h.appendChild(W),h.ready=!1)}function Ft(e){const t=JSON.parse(e),n=/^(\{|\[])|(\]|\})$/;return typeof t.Data=="string"&&n.test(t.Data)&&(t.Data=JSON.parse(t.Data)),t}function Or(e,t,n){v==null||v.addResponseEventListener(e,r=>{const a=Ft(r);(a==null?void 0:a.UID)===e&&(n(a),v==null||v.removeResponseEventListener(e))}),v==null||v.emitUIInteraction(t)}function Mn(){v&&(v.addEventListener("playStream",()=>{ct("start",Date.now())}),v.addEventListener("playStreamError",()=>{Er("Play Stream Error")}),v.addEventListener("playStreamRejected",()=>{ct("stop","Play Stream Rejected")}),v.addEventListener("webRtcConnected",()=>{h&&(h.ready=!0)}),v.addResponseEventListener("Action",e=>{const t=Ft(e);t.Action&&Tn(t.Action,t.Data)}),v.addResponseEventListener("Message",e=>{const t=Ft(e);ct("message",t)}))}function Hn(e){Dr=e}const _n=(e,t,n,r)=>{typeof window.ue.interface!="object"&&(window.ue.interface={});const l="10000000-1000-4000-8000-100000000000".replace(/[018]/g,p=>{const g=Number(p),m=crypto.getRandomValues(new Uint8Array(1));return(g^m[0]&15>>g/4).toString(16)});n&&(window.ue.interface[l]=n);const s=1e3*Math.max(2,r!=null?r:0);setTimeout(()=>{delete window.ue.interface[l]},s);const u=typeof t!="string"?JSON.stringify(t):"";window.ue.$receive.asyn(e,u,l)};function xr(e,t){var r;const n=(r=e.Command)!=null?r:e.Console;n&&_n(n,e,a=>{(a==null?void 0:a.UID)===(e==null?void 0:e.UID)&&t(a)})}function Br(e,t){const n=Mr(),r={Console:t?e+" "+t:e,UID:n};return new Promise((a,l)=>{console.warn("[ue] Execute UE Console Command ===> ",r),window.ue?xr(r,a):h?Or(n,r,a):l({Result:"[Error] Failed to get UE host!"})})}function Mr(){let t=16;const n="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=[];t=t||n.length;for(let a=0;a<8;a++)r[a]=n[0|Math.random()*t];return r.join("")}function d(e,t){const n=Mr(),r={Command:e,Data:{Parameters:t},UID:n};return new Promise((a,l)=>{console.warn("[ue] Execute Web Command ===> ",r),ct("command",r),window.ue?xr(r,a):h?Or(n,r,a):l({Result:"[Error] Failed to get UE host!"})})}let We=null;const Gn=(e,t=62.5,n=!1)=>(...r)=>{We&&clearTimeout(We),n&&e(...r),We=setTimeout(()=>{n||e(...r),We=null},t)};function Hr(e,t){return function(){return e.apply(t,arguments)}}const{toString:Un}=Object.prototype,{getPrototypeOf:Kt}=Object,Ct=(e=>t=>{const n=Un.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>Ct(t)===e),Pt=e=>t=>typeof t===e,{isArray:me}=Array,Ue=Pt("undefined");function Fn(e){return e!==null&&!Ue(e)&&e.constructor!==null&&!Ue(e.constructor)&&k(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const _r=T("ArrayBuffer");function zn(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&_r(e.buffer),t}const Wn=Pt("string"),k=Pt("function"),Gr=Pt("number"),Nt=e=>e!==null&&typeof e=="object",jn=e=>e===!0||e===!1,dt=e=>{if(Ct(e)!=="object")return!1;const t=Kt(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},Vn=T("Date"),qn=T("File"),Jn=T("Blob"),$n=T("FileList"),Kn=e=>Nt(e)&&k(e.pipe),Xn=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||k(e.append)&&((t=Ct(e))==="formdata"||t==="object"&&k(e.toString)&&e.toString()==="[object FormData]"))},Yn=T("URLSearchParams"),Zn=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Fe(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,a;if(typeof e!="object"&&(e=[e]),me(e))for(r=0,a=e.length;r<a;r++)t.call(null,e[r],r,e);else{const l=n?Object.getOwnPropertyNames(e):Object.keys(e),s=l.length;let u;for(r=0;r<s;r++)u=l[r],t.call(null,e[u],u,e)}}function Ur(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,a;for(;r-- >0;)if(a=n[r],t===a.toLowerCase())return a;return null}const Fr=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),zr=e=>!Ue(e)&&e!==Fr;function zt(){const{caseless:e}=zr(this)&&this||{},t={},n=(r,a)=>{const l=e&&Ur(t,a)||a;dt(t[l])&&dt(r)?t[l]=zt(t[l],r):dt(r)?t[l]=zt({},r):me(r)?t[l]=r.slice():t[l]=r};for(let r=0,a=arguments.length;r<a;r++)arguments[r]&&Fe(arguments[r],n);return t}const Qn=(e,t,n,{allOwnKeys:r}={})=>(Fe(t,(a,l)=>{n&&k(a)?e[l]=Hr(a,n):e[l]=a},{allOwnKeys:r}),e),eo=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),to=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},ro=(e,t,n,r)=>{let a,l,s;const u={};if(t=t||{},e==null)return t;do{for(a=Object.getOwnPropertyNames(e),l=a.length;l-- >0;)s=a[l],(!r||r(s,e,t))&&!u[s]&&(t[s]=e[s],u[s]=!0);e=n!==!1&&Kt(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},no=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},oo=e=>{if(!e)return null;if(me(e))return e;let t=e.length;if(!Gr(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},ao=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&Kt(Uint8Array)),lo=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let a;for(;(a=r.next())&&!a.done;){const l=a.value;t.call(e,l[0],l[1])}},so=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},io=T("HTMLFormElement"),uo=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,a){return r.toUpperCase()+a}),dr=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),co=T("RegExp"),Wr=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};Fe(n,(a,l)=>{let s;(s=t(a,l,e))!==!1&&(r[l]=s||a)}),Object.defineProperties(e,r)},po=e=>{Wr(e,(t,n)=>{if(k(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(k(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},mo=(e,t)=>{const n={},r=a=>{a.forEach(l=>{n[l]=!0})};return me(e)?r(e):r(String(e).split(t)),n},go=()=>{},fo=(e,t)=>(e=+e,Number.isFinite(e)?e:t),At="abcdefghijklmnopqrstuvwxyz",pr="0123456789",jr={DIGIT:pr,ALPHA:At,ALPHA_DIGIT:At+At.toUpperCase()+pr},bo=(e=16,t=jr.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function ho(e){return!!(e&&k(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const yo=e=>{const t=new Array(10),n=(r,a)=>{if(Nt(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[a]=r;const l=me(r)?[]:{};return Fe(r,(s,u)=>{const p=n(s,a+1);!Ue(p)&&(l[u]=p)}),t[a]=void 0,l}}return r};return n(e,0)},vo=T("AsyncFunction"),So=e=>e&&(Nt(e)||k(e))&&k(e.then)&&k(e.catch),i={isArray:me,isArrayBuffer:_r,isBuffer:Fn,isFormData:Xn,isArrayBufferView:zn,isString:Wn,isNumber:Gr,isBoolean:jn,isObject:Nt,isPlainObject:dt,isUndefined:Ue,isDate:Vn,isFile:qn,isBlob:Jn,isRegExp:co,isFunction:k,isStream:Kn,isURLSearchParams:Yn,isTypedArray:ao,isFileList:$n,forEach:Fe,merge:zt,extend:Qn,trim:Zn,stripBOM:eo,inherits:to,toFlatObject:ro,kindOf:Ct,kindOfTest:T,endsWith:no,toArray:oo,forEachEntry:lo,matchAll:so,isHTMLForm:io,hasOwnProperty:dr,hasOwnProp:dr,reduceDescriptors:Wr,freezeMethods:po,toObjectSet:mo,toCamelCase:uo,noop:go,toFiniteNumber:fo,findKey:Ur,global:Fr,isContextDefined:zr,ALPHABET:jr,generateString:bo,isSpecCompliantForm:ho,toJSONObject:yo,isAsyncFn:vo,isThenable:So};function y(e,t,n,r,a){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),a&&(this.response=a)}i.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:i.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Vr=y.prototype,qr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{qr[e]={value:e}});Object.defineProperties(y,qr);Object.defineProperty(Vr,"isAxiosError",{value:!0});y.from=(e,t,n,r,a,l)=>{const s=Object.create(Vr);return i.toFlatObject(e,s,function(p){return p!==Error.prototype},u=>u!=="isAxiosError"),y.call(s,e.message,t,n,r,a),s.cause=e,s.name=e.name,l&&Object.assign(s,l),s};const wo=null;function Wt(e){return i.isPlainObject(e)||i.isArray(e)}function Jr(e){return i.endsWith(e,"[]")?e.slice(0,-2):e}function mr(e,t,n){return e?e.concat(t).map(function(a,l){return a=Jr(a),!n&&l?"["+a+"]":a}).join(n?".":""):t}function Lo(e){return i.isArray(e)&&!e.some(Wt)}const Co=i.toFlatObject(i,{},null,function(t){return/^is[A-Z]/.test(t)});function It(e,t,n){if(!i.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=i.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,L){return!i.isUndefined(L[b])});const r=n.metaTokens,a=n.visitor||m,l=n.dots,s=n.indexes,p=(n.Blob||typeof Blob!="undefined"&&Blob)&&i.isSpecCompliantForm(t);if(!i.isFunction(a))throw new TypeError("visitor must be a function");function g(f){if(f===null)return"";if(i.isDate(f))return f.toISOString();if(!p&&i.isBlob(f))throw new y("Blob is not supported. Use a Buffer instead.");return i.isArrayBuffer(f)||i.isTypedArray(f)?p&&typeof Blob=="function"?new Blob([f]):Buffer.from(f):f}function m(f,b,L){let C=f;if(f&&!L&&typeof f=="object"){if(i.endsWith(b,"{}"))b=r?b:b.slice(0,-2),f=JSON.stringify(f);else if(i.isArray(f)&&Lo(f)||(i.isFileList(f)||i.endsWith(b,"[]"))&&(C=i.toArray(f)))return b=Jr(b),C.forEach(function(x,sn){!(i.isUndefined(x)||x===null)&&t.append(s===!0?mr([b],sn,l):s===null?b:b+"[]",g(x))}),!1}return Wt(f)?!0:(t.append(mr(L,b,l),g(f)),!1)}const c=[],w=Object.assign(Co,{defaultVisitor:m,convertValue:g,isVisitable:Wt});function P(f,b){if(!i.isUndefined(f)){if(c.indexOf(f)!==-1)throw Error("Circular reference detected in "+b.join("."));c.push(f),i.forEach(f,function(C,O){(!(i.isUndefined(C)||C===null)&&a.call(t,C,i.isString(O)?O.trim():O,b,w))===!0&&P(C,b?b.concat(O):[O])}),c.pop()}}if(!i.isObject(e))throw new TypeError("data must be an object");return P(e),t}function gr(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Xt(e,t){this._pairs=[],e&&It(e,this,t)}const $r=Xt.prototype;$r.append=function(t,n){this._pairs.push([t,n])};$r.toString=function(t){const n=t?function(r){return t.call(this,r,gr)}:gr;return this._pairs.map(function(a){return n(a[0])+"="+n(a[1])},"").join("&")};function Po(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Kr(e,t,n){if(!t)return e;const r=n&&n.encode||Po,a=n&&n.serialize;let l;if(a?l=a(t,n):l=i.isURLSearchParams(t)?t.toString():new Xt(t,n).toString(r),l){const s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+l}return e}class No{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){i.forEach(this.handlers,function(r){r!==null&&t(r)})}}const fr=No,Xr={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Io=typeof URLSearchParams!="undefined"?URLSearchParams:Xt,ko=typeof FormData!="undefined"?FormData:null,Ao=typeof Blob!="undefined"?Blob:null,Eo={isBrowser:!0,classes:{URLSearchParams:Io,FormData:ko,Blob:Ao},protocols:["http","https","file","blob","url","data"]},Yr=typeof window!="undefined"&&typeof document!="undefined",To=(e=>Yr&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator!="undefined"&&navigator.product),Do=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Ro=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Yr,hasStandardBrowserEnv:To,hasStandardBrowserWebWorkerEnv:Do},Symbol.toStringTag,{value:"Module"})),E=B(B({},Ro),Eo);function Oo(e,t){return It(e,new E.classes.URLSearchParams,Object.assign({visitor:function(n,r,a,l){return E.isNode&&i.isBuffer(n)?(this.append(r,n.toString("base64")),!1):l.defaultVisitor.apply(this,arguments)}},t))}function xo(e){return i.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function Bo(e){const t={},n=Object.keys(e);let r;const a=n.length;let l;for(r=0;r<a;r++)l=n[r],t[l]=e[l];return t}function Zr(e){function t(n,r,a,l){let s=n[l++];if(s==="__proto__")return!0;const u=Number.isFinite(+s),p=l>=n.length;return s=!s&&i.isArray(a)?a.length:s,p?(i.hasOwnProp(a,s)?a[s]=[a[s],r]:a[s]=r,!u):((!a[s]||!i.isObject(a[s]))&&(a[s]=[]),t(n,r,a[s],l)&&i.isArray(a[s])&&(a[s]=Bo(a[s])),!u)}if(i.isFormData(e)&&i.isFunction(e.entries)){const n={};return i.forEachEntry(e,(r,a)=>{t(xo(r),a,n,0)}),n}return null}function Mo(e,t,n){if(i.isString(e))try{return(t||JSON.parse)(e),i.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const Yt={transitional:Xr,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",a=r.indexOf("application/json")>-1,l=i.isObject(t);if(l&&i.isHTMLForm(t)&&(t=new FormData(t)),i.isFormData(t))return a?JSON.stringify(Zr(t)):t;if(i.isArrayBuffer(t)||i.isBuffer(t)||i.isStream(t)||i.isFile(t)||i.isBlob(t))return t;if(i.isArrayBufferView(t))return t.buffer;if(i.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(l){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Oo(t,this.formSerializer).toString();if((u=i.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return It(u?{"files[]":t}:t,p&&new p,this.formSerializer)}}return l||a?(n.setContentType("application/json",!1),Mo(t)):t}],transformResponse:[function(t){const n=this.transitional||Yt.transitional,r=n&&n.forcedJSONParsing,a=this.responseType==="json";if(t&&i.isString(t)&&(r&&!this.responseType||a)){const s=!(n&&n.silentJSONParsing)&&a;try{return JSON.parse(t)}catch(u){if(s)throw u.name==="SyntaxError"?y.from(u,y.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:E.classes.FormData,Blob:E.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};i.forEach(["delete","get","head","post","put","patch"],e=>{Yt.headers[e]={}});const Zt=Yt,Ho=i.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),_o=e=>{const t={};let n,r,a;return e&&e.split(`
`).forEach(function(s){a=s.indexOf(":"),n=s.substring(0,a).trim().toLowerCase(),r=s.substring(a+1).trim(),!(!n||t[n]&&Ho[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},br=Symbol("internals");function ge(e){return e&&String(e).trim().toLowerCase()}function pt(e){return e===!1||e==null?e:i.isArray(e)?e.map(pt):String(e)}function Go(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Uo=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Et(e,t,n,r,a){if(i.isFunction(r))return r.call(this,t,n);if(a&&(t=n),!!i.isString(t)){if(i.isString(r))return t.indexOf(r)!==-1;if(i.isRegExp(r))return r.test(t)}}function Fo(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function zo(e,t){const n=i.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(a,l,s){return this[r].call(this,t,a,l,s)},configurable:!0})})}class kt{constructor(t){t&&this.set(t)}set(t,n,r){const a=this;function l(u,p,g){const m=ge(p);if(!m)throw new Error("header name must be a non-empty string");const c=i.findKey(a,m);(!c||a[c]===void 0||g===!0||g===void 0&&a[c]!==!1)&&(a[c||p]=pt(u))}const s=(u,p)=>i.forEach(u,(g,m)=>l(g,m,p));return i.isPlainObject(t)||t instanceof this.constructor?s(t,n):i.isString(t)&&(t=t.trim())&&!Uo(t)?s(_o(t),n):t!=null&&l(n,t,r),this}get(t,n){if(t=ge(t),t){const r=i.findKey(this,t);if(r){const a=this[r];if(!n)return a;if(n===!0)return Go(a);if(i.isFunction(n))return n.call(this,a,r);if(i.isRegExp(n))return n.exec(a);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ge(t),t){const r=i.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||Et(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let a=!1;function l(s){if(s=ge(s),s){const u=i.findKey(r,s);u&&(!n||Et(r,r[u],u,n))&&(delete r[u],a=!0)}}return i.isArray(t)?t.forEach(l):l(t),a}clear(t){const n=Object.keys(this);let r=n.length,a=!1;for(;r--;){const l=n[r];(!t||Et(this,this[l],l,t,!0))&&(delete this[l],a=!0)}return a}normalize(t){const n=this,r={};return i.forEach(this,(a,l)=>{const s=i.findKey(r,l);if(s){n[s]=pt(a),delete n[l];return}const u=t?Fo(l):String(l).trim();u!==l&&delete n[l],n[u]=pt(a),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return i.forEach(this,(r,a)=>{r!=null&&r!==!1&&(n[a]=t&&i.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(a=>r.set(a)),r}static accessor(t){const r=(this[br]=this[br]={accessors:{}}).accessors,a=this.prototype;function l(s){const u=ge(s);r[u]||(zo(a,s),r[u]=!0)}return i.isArray(t)?t.forEach(l):l(t),this}}kt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);i.reduceDescriptors(kt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});i.freezeMethods(kt);const R=kt;function Tt(e,t){const n=this||Zt,r=t||n,a=R.from(r.headers);let l=r.data;return i.forEach(e,function(u){l=u.call(n,l,a.normalize(),t?t.status:void 0)}),a.normalize(),l}function Qr(e){return!!(e&&e.__CANCEL__)}function ze(e,t,n){y.call(this,e==null?"canceled":e,y.ERR_CANCELED,t,n),this.name="CanceledError"}i.inherits(ze,y,{__CANCEL__:!0});function Wo(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const jo=E.hasStandardBrowserEnv?{write(e,t,n,r,a,l){const s=[e+"="+encodeURIComponent(t)];i.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),i.isString(r)&&s.push("path="+r),i.isString(a)&&s.push("domain="+a),l===!0&&s.push("secure"),document.cookie=s.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Vo(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function qo(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function en(e,t){return e&&!Vo(t)?qo(e,t):t}const Jo=E.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function a(l){let s=l;return t&&(n.setAttribute("href",s),s=n.href),n.setAttribute("href",s),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=a(window.location.href),function(s){const u=i.isString(s)?a(s):s;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function $o(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function Ko(e,t){e=e||10;const n=new Array(e),r=new Array(e);let a=0,l=0,s;return t=t!==void 0?t:1e3,function(p){const g=Date.now(),m=r[l];s||(s=g),n[a]=p,r[a]=g;let c=l,w=0;for(;c!==a;)w+=n[c++],c=c%e;if(a=(a+1)%e,a===l&&(l=(l+1)%e),g-s<t)return;const P=m&&g-m;return P?Math.round(w*1e3/P):void 0}}function hr(e,t){let n=0;const r=Ko(50,250);return a=>{const l=a.loaded,s=a.lengthComputable?a.total:void 0,u=l-n,p=r(u),g=l<=s;n=l;const m={loaded:l,total:s,progress:s?l/s:void 0,bytes:u,rate:p||void 0,estimated:p&&s&&g?(s-l)/p:void 0,event:a};m[t?"download":"upload"]=!0,e(m)}}const Xo=typeof XMLHttpRequest!="undefined",Yo=Xo&&function(e){return new Promise(function(n,r){let a=e.data;const l=R.from(e.headers).normalize();let{responseType:s,withXSRFToken:u}=e,p;function g(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}let m;if(i.isFormData(a)){if(E.hasStandardBrowserEnv||E.hasStandardBrowserWebWorkerEnv)l.setContentType(!1);else if((m=l.getContentType())!==!1){const[b,...L]=m?m.split(";").map(C=>C.trim()).filter(Boolean):[];l.setContentType([b||"multipart/form-data",...L].join("; "))}}let c=new XMLHttpRequest;if(e.auth){const b=e.auth.username||"",L=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";l.set("Authorization","Basic "+btoa(b+":"+L))}const w=en(e.baseURL,e.url);c.open(e.method.toUpperCase(),Kr(w,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function P(){if(!c)return;const b=R.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),C={data:!s||s==="text"||s==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:b,config:e,request:c};Wo(function(x){n(x),g()},function(x){r(x),g()},C),c=null}if("onloadend"in c?c.onloadend=P:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(P)},c.onabort=function(){c&&(r(new y("Request aborted",y.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let L=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const C=e.transitional||Xr;e.timeoutErrorMessage&&(L=e.timeoutErrorMessage),r(new y(L,C.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,c)),c=null},E.hasStandardBrowserEnv&&(u&&i.isFunction(u)&&(u=u(e)),u||u!==!1&&Jo(w))){const b=e.xsrfHeaderName&&e.xsrfCookieName&&jo.read(e.xsrfCookieName);b&&l.set(e.xsrfHeaderName,b)}a===void 0&&l.setContentType(null),"setRequestHeader"in c&&i.forEach(l.toJSON(),function(L,C){c.setRequestHeader(C,L)}),i.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),s&&s!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",hr(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",hr(e.onUploadProgress)),(e.cancelToken||e.signal)&&(p=b=>{c&&(r(!b||b.type?new ze(null,e,c):b),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p)));const f=$o(w);if(f&&E.protocols.indexOf(f)===-1){r(new y("Unsupported protocol "+f+":",y.ERR_BAD_REQUEST,e));return}c.send(a||null)})},jt={http:wo,xhr:Yo};i.forEach(jt,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}});const yr=e=>`- ${e}`,Zo=e=>i.isFunction(e)||e===null||e===!1,tn={getAdapter:e=>{e=i.isArray(e)?e:[e];const{length:t}=e;let n,r;const a={};for(let l=0;l<t;l++){n=e[l];let s;if(r=n,!Zo(n)&&(r=jt[(s=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${s}'`);if(r)break;a[s||"#"+l]=r}if(!r){const l=Object.entries(a).map(([u,p])=>`adapter ${u} `+(p===!1?"is not supported by the environment":"is not available in the build"));let s=t?l.length>1?`since :
`+l.map(yr).join(`
`):" "+yr(l[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+s,"ERR_NOT_SUPPORT")}return r},adapters:jt};function Dt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ze(null,e)}function vr(e){return Dt(e),e.headers=R.from(e.headers),e.data=Tt.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),tn.getAdapter(e.adapter||Zt.adapter)(e).then(function(r){return Dt(e),r.data=Tt.call(e,e.transformResponse,r),r.headers=R.from(r.headers),r},function(r){return Qr(r)||(Dt(e),r&&r.response&&(r.response.data=Tt.call(e,e.transformResponse,r.response),r.response.headers=R.from(r.response.headers))),Promise.reject(r)})}const Sr=e=>e instanceof R?e.toJSON():e;function pe(e,t){t=t||{};const n={};function r(g,m,c){return i.isPlainObject(g)&&i.isPlainObject(m)?i.merge.call({caseless:c},g,m):i.isPlainObject(m)?i.merge({},m):i.isArray(m)?m.slice():m}function a(g,m,c){if(i.isUndefined(m)){if(!i.isUndefined(g))return r(void 0,g,c)}else return r(g,m,c)}function l(g,m){if(!i.isUndefined(m))return r(void 0,m)}function s(g,m){if(i.isUndefined(m)){if(!i.isUndefined(g))return r(void 0,g)}else return r(void 0,m)}function u(g,m,c){if(c in t)return r(g,m);if(c in e)return r(void 0,g)}const p={url:l,method:l,data:l,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,withXSRFToken:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:u,headers:(g,m)=>a(Sr(g),Sr(m),!0)};return i.forEach(Object.keys(Object.assign({},e,t)),function(m){const c=p[m]||a,w=c(e[m],t[m],m);i.isUndefined(w)&&c!==u||(n[m]=w)}),n}const rn="1.6.7",Qt={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Qt[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const wr={};Qt.transitional=function(t,n,r){function a(l,s){return"[Axios v"+rn+"] Transitional option '"+l+"'"+s+(r?". "+r:"")}return(l,s,u)=>{if(t===!1)throw new y(a(s," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!wr[s]&&(wr[s]=!0,console.warn(a(s," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(l,s,u):!0}};function Qo(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let a=r.length;for(;a-- >0;){const l=r[a],s=t[l];if(s){const u=e[l],p=u===void 0||s(u,l,e);if(p!==!0)throw new y("option "+l+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+l,y.ERR_BAD_OPTION)}}const Vt={assertOptions:Qo,validators:Qt},M=Vt.validators;class yt{constructor(t){this.defaults=t,this.interceptors={request:new fr,response:new fr}}request(t,n){return le(this,null,function*(){try{return yield this._request(t,n)}catch(r){if(r instanceof Error){let a;Error.captureStackTrace?Error.captureStackTrace(a={}):a=new Error;const l=a.stack?a.stack.replace(/^.+\n/,""):"";r.stack?l&&!String(r.stack).endsWith(l.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+l):r.stack=l}throw r}})}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=pe(this.defaults,n);const{transitional:r,paramsSerializer:a,headers:l}=n;r!==void 0&&Vt.assertOptions(r,{silentJSONParsing:M.transitional(M.boolean),forcedJSONParsing:M.transitional(M.boolean),clarifyTimeoutError:M.transitional(M.boolean)},!1),a!=null&&(i.isFunction(a)?n.paramsSerializer={serialize:a}:Vt.assertOptions(a,{encode:M.function,serialize:M.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let s=l&&i.merge(l.common,l[n.method]);l&&i.forEach(["delete","get","head","post","put","patch","common"],f=>{delete l[f]}),n.headers=R.concat(s,l);const u=[];let p=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(n)===!1||(p=p&&b.synchronous,u.unshift(b.fulfilled,b.rejected))});const g=[];this.interceptors.response.forEach(function(b){g.push(b.fulfilled,b.rejected)});let m,c=0,w;if(!p){const f=[vr.bind(this),void 0];for(f.unshift.apply(f,u),f.push.apply(f,g),w=f.length,m=Promise.resolve(n);c<w;)m=m.then(f[c++],f[c++]);return m}w=u.length;let P=n;for(c=0;c<w;){const f=u[c++],b=u[c++];try{P=f(P)}catch(L){b.call(this,L);break}}try{m=vr.call(this,P)}catch(f){return Promise.reject(f)}for(c=0,w=g.length;c<w;)m=m.then(g[c++],g[c++]);return m}getUri(t){t=pe(this.defaults,t);const n=en(t.baseURL,t.url);return Kr(n,t.params,t.paramsSerializer)}}i.forEach(["delete","get","head","options"],function(t){yt.prototype[t]=function(n,r){return this.request(pe(r||{},{method:t,url:n,data:(r||{}).data}))}});i.forEach(["post","put","patch"],function(t){function n(r){return function(l,s,u){return this.request(pe(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:l,data:s}))}}yt.prototype[t]=n(),yt.prototype[t+"Form"]=n(!0)});const mt=yt;class er{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(l){n=l});const r=this;this.promise.then(a=>{if(!r._listeners)return;let l=r._listeners.length;for(;l-- >0;)r._listeners[l](a);r._listeners=null}),this.promise.then=a=>{let l;const s=new Promise(u=>{r.subscribe(u),l=u}).then(a);return s.cancel=function(){r.unsubscribe(l)},s},t(function(l,s,u){r.reason||(r.reason=new ze(l,s,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new er(function(a){t=a}),cancel:t}}}const ea=er;function ta(e){return function(n){return e.apply(null,n)}}function ra(e){return i.isObject(e)&&e.isAxiosError===!0}const qt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qt).forEach(([e,t])=>{qt[t]=e});const na=qt;function nn(e){const t=new mt(e),n=Hr(mt.prototype.request,t);return i.extend(n,mt.prototype,t,{allOwnKeys:!0}),i.extend(n,t,null,{allOwnKeys:!0}),n.create=function(a){return nn(pe(e,a))},n}const S=nn(Zt);S.Axios=mt;S.CanceledError=ze;S.CancelToken=ea;S.isCancel=Qr;S.VERSION=rn;S.toFormData=It;S.AxiosError=y;S.Cancel=S.CanceledError;S.all=function(t){return Promise.all(t)};S.spread=ta;S.isAxiosError=ra;S.mergeConfig=pe;S.AxiosHeaders=R;S.formToJSON=e=>Zr(i.isHTMLForm(e)?new FormData(e):e);S.getAdapter=tn.getAdapter;S.HttpStatusCode=na;S.default=S;const oa=S,Jt=Gn((...e)=>{if(!(h!=null&&h.isConnected))return;const[t,n]=e,r=(t!=null?t:h.matchMakerURL).replace(/\/$/,""),a=n!=null?n:h.applicationName;if(!r||!a)return;const l=`${r}/GetPixelStreamingInstance?ApplicationName=${a}`,s=h.getAttribute("data-source");l!==s&&(h.setAttribute("data-source",l),on(l).then(u=>{h==null||h.setAttribute("signaling-url",u)}).catch(u=>{Er(u)}))});function on(e){return new Promise((t,n)=>{oa(e).then(r=>{const a=r.data;switch(a.Code){case"0":{a.Data?t(a.Data):n("Get Pixel Streaming Instance Failed!");break}case"3":{n(a);break}default:setTimeout(()=>{t(on(e))},1e3)}}).catch(r=>{n(r)})})}let h;function aa(e){const t="ue-player";customElements.get(t)||customElements.define(t,class extends HTMLElement{constructor(){super(),h=this,e==null||e(this)}get applicationName(){var r;return(r=this.getAttribute("application-name"))!=null?r:""}set applicationName(r){this.setAttribute("application-name",r)}get aspectRatio(){var r;return(r=this.getAttribute("aspect-ratio"))!=null?r:"auto"}set aspectRatio(r){this.setAttribute("aspect-ratio",r)}attributeChangedCallback(r,a,l){switch(r){case"application-name":case"match-maker-url":{Jt();break}case"signaling-url":{Ut();break}case"aspect-ratio":{ur();break}case"oncommand":case"onenter":case"onleave":case"onmessage":case"onpick":case"onstart":case"onstop":{const s=r.replace(/^on/,"");typeof l=="function"?this.addEventListener(s,l):typeof a=="function"&&this.removeEventListener(s,a);break}case"volume":{d("SetVolume",l);break}}}connectedCallback(){const r=document.createElement("style");r.id="ue-common-style",r.textContent=An;const a=document.createElement("style");a.id="ue-debug-style",a.textContent=En;const l=document.createElement("style");l.id="ue-specific-style",l.textContent=`
.ue-media-wrapper {
  height: 100%;
  width: 100%;
}
`,this.append(r,a,l),On(l),Ut(),ur()}disconnectedCallback(){Rr()}get height(){return Number(this.getAttribute("height"))}set height(r){this.setAttribute("height",r.toFixed(0))}get matchMakerURL(){var r;return(r=this.getAttribute("match-maker-url"))!=null?r:""}set matchMakerURL(r){this.setAttribute("match-maker-url",r)}static get observedAttributes(){return["application-name","aspect-ratio","match-maker-url","oncommand","onenter","onleave","onmessage","onpick","onstart","onstop","signaling-url","volume"]}set oncommand(r){this.addEventListener("command",r)}set onenter(r){this.addEventListener("enter",r)}set onleave(r){this.addEventListener("leave",r)}set onmessage(r){this.addEventListener("message",r)}set onpick(r){this.addEventListener("pick",r)}set onstart(r){this.addEventListener("start",r)}set onstop(r){this.addEventListener("stop",r)}get ready(){return this.hasAttribute("ready")}set ready(r){this.toggleAttribute("ready",r)}get signalingURL(){var r;return(r=this.getAttribute("signaling-url"))!=null?r:""}set signalingURL(r){this.setAttribute("signaling-url",r)}get volume(){const r=this.getAttribute("volume");return Number(typeof r!="string"?.3:r)}set volume(r){this.setAttribute("volume",r.toFixed(1))}get width(){return Number(this.getAttribute("width"))}set width(r){this.setAttribute("width",r.toFixed(0))}})}const la=`import { createDebugUI } from '~/utils/debug-ui'\r
import { useUI } from '~/utils/signaling'\r
import { defineContainer } from '~/utils/web-component'\r
\r
/** Use Debug UI */\r
useUI(createDebugUI)\r
\r
defineContainer((player) => {\r
  if (true) {\r
    player.signalingURL = location.origin\r
  }\r
\r
  /** When Player Got An Error */\r
  player.onerror = (evt) => {\r
    console.error('[debug] Error ===> ', evt)\r
  }\r
\r
  /** When Feature Got Selected/Clicked */\r
  player.onpick = (evt) => {\r
    console.log('[debug] Pick ===> ', evt.detail)\r
  }\r
\r
  /** When Web Got Message From UE */\r
  player.onerror = (evt) => {\r
    console.log('[debug] Error ===> ', evt.toString())\r
  }\r
})\r
`;let Lr=null,gt=null;function $t(e){gt&&gt.dispatch({changes:{from:0,insert:e,to:gt.state.doc.length}})}const sa=()=>o("div",{className:"debug-code",ref:e=>{Lr=e,gt=new hn({doc:la,extensions:[yn,vn({jsx:!1,typescript:!0}),Sn(),wn],parent:Lr})}}),Cr="drawer-wrap-visible",ia=[{group:"ActorController",label:"HideActorByTag",value:"hide"},{group:"ActorController",label:"ShowActorByTag",value:"show"},{group:"GisController",label:"AddWmtsLayer",value:"addCustomLayer"},{group:"GisController",label:"AddArcGISWmtsLayer",value:"addArcgisLayer"},{group:"GisController",label:"AddMapboxWmtsLayer",value:"addMapboxLayer"},{group:"GisController",label:"AddTianDiTuWmtsLayer",value:"addTiandituLayer"},{group:"GisController",label:"SetGeoReferencingParams",value:"config"},{group:"GisController",label:"HideWmtsLayer",value:"hideLayer"},{group:"GisController",label:"HideWmtsLayerByGroupID",value:"hideLayerGroup"},{group:"GisController",label:"DeleteWmtsLayer",value:"removeLayer"},{group:"GisController",label:"DeleteWmtsLayerByGroupID",value:"removeLayerGroup"},{group:"GisController",label:"ChangeWmtsLayer",value:"setCustomLayer"},{group:"GisController",label:"ChangeRequestHeaders",value:"setHeaders"},{group:"GisController",label:"ChangeWmtsLayerIndex",value:"setLayerIndex"},{group:"GisController",label:"SetTerrainLayerByCesiumIon",value:"setCesiumTerrainLayer"},{group:"GisController",label:"SetTerrainLayerByUrl",value:"setTerrainLayer"},{group:"GisController",label:"ShowWmtsLayer",value:"showLayer"},{group:"GisController",label:"ShowWmtsLayerByGroupID",value:"showLayerGroup"},{group:"GisController",label:"ChangeDebugMessages",value:"toggleDebug"},{group:"LevelController",label:"LoadStreamLevels",value:"loadStreamLevel"},{group:"LevelController",label:"OpenLevel",value:"openLevel"},{group:"LevelController",label:"UnloadStreamLevels",value:"unloadStreamLevel"},{group:"PointController",label:"CheckExistanceOfPoint",value:"checkExistance"},{group:"PointController",label:"CreatePoint",value:"create"},{group:"PointController",label:"HidePoint",value:"hide"},{group:"PointController",label:"SelectPoint",value:"pick"},{group:"PointController",label:"DeletePoint",value:"remove"},{group:"PointController",label:"ShowPoint",value:"show"},{group:"PointController",label:"UnselectPoint",value:"unpick"},{group:"PolygonController",label:"CheckExistanceOfPolygon",value:"checkExistance"},{group:"PolygonController",label:"CreatePolygon",value:"create"},{group:"PolygonController",label:"HidePolygon",value:"hide"},{group:"PolygonController",label:"SelectPolygon",value:"pick"},{group:"PolygonController",label:"DeletePolygon",value:"remove"},{group:"PolygonController",label:"ShowPolygon",value:"show"},{group:"PolygonController",label:"UnselectPolygon",value:"unpick"},{group:"PolylineController",label:"CheckExistanceOfPolyline",value:"checkExistance"},{group:"PolylineController",label:"CreatePolyline",value:"create"},{group:"PolylineController",label:"HidePolyline",value:"hide"},{group:"PolylineController",label:"SelectPolyline",value:"pick"},{group:"PolylineController",label:"DeletePolyline",value:"remove"},{group:"PolylineController",label:"ShowPolyline",value:"show"},{group:"PolylineController",label:"UnselectPolyline",value:"unpick"},{group:"PolymeshController",label:"CreatePolymesh",value:"create"},{group:"PolymeshController",label:"HidePolymesh",value:"hide"},{group:"PolymeshController",label:"SelectPolymesh",value:"pick"},{group:"PolymeshController",label:"DeletePolymesh",value:"remove"},{group:"PolymeshController",label:"ShowPolymesh",value:"show"},{group:"PolymeshController",label:"UnselectPolymesh",value:"unpick"},{group:"SequenceController",label:"PauseSequence",value:"pause"},{group:"SequenceController",label:"PlaySequence",value:"play"},{group:"SequenceController",label:"StopSequence",value:"stop"},{group:"SystemController",label:"Mute",value:"mute"},{group:"SystemController",label:"SetVolume",value:"setVolume"},{group:"SystemController",label:"Unmute",value:"unmute"},{group:"TimeController",label:"DisableRealtime",value:"disableRealtime"},{group:"TimeController",label:"EnableRealtime",value:"enableRealtime"},{group:"TimeController",label:"SetDateTime",value:"setDateTime"},{group:"ViewController",label:"ChangeViewMode",value:"changeMode"},{group:"ViewController",label:"FlyTo",value:"flyTo"},{group:"ViewController",label:"GetPosition",value:"getView"},{group:"ViewController",label:"ResetView",value:"resetView"},{group:"WeatherController",label:"ChangeWeatherByPreset",value:"changeByPreset"},{group:"WeatherController",label:"ChangeWeatherBySettings",value:"changeBySettings"}];let vt=null,ft=null,St={Command:"GetPosition",Data:{Parameters:void 0}},an={};function ua(){const e=ia.find(({label:a})=>a===St.Command);if(!e)return;const t=St.Data;let n="";switch(typeof t.Parameters){case"object":{n=Gt(JSON.stringify(t.Parameters));break}case"string":{n=`'${n}'`;break}case"boolean":case"number":{n=t.Parameters.toString();break}default:n=""}const r=`import { ${e.group} } from 'cve-connector'

${e.group}.${e.value}(${n})

`;$t(r)}function Pr(e){e.detail.Action||(e.detail.Type?an=e.detail:St=e.detail,tr())}function ln(e){if(!ft)return;typeof e!="boolean"&&(e=!ft.classList.contains(Cr)),ft.classList.toggle(Cr,e);const t=document.querySelector("#command-panel-toggle");t&&(t.checked=e),tr()}function tr(){if(vt)switch(vt.value){case"detail":{$t(Gt(JSON.stringify(St)));break}case"example":{ua();break}case"results":{$t(Gt(JSON.stringify(an)));break}}}const ca=()=>o("div",{className:"drawer-container",id:"command-overlay",ref:()=>{h&&(h.addEventListener("command",Pr),h.addEventListener("message",Pr))}},o("div",{class:"drawer-wrap",ref:e=>{ft=e}},o("div",{className:"panel"},o("div",{className:"debug-heading"},"指令看板"),o("div",{className:"debug-close",onclick:()=>ln(!1)}),o("div",{className:"debug-content"},o("section",{className:"debug-rows"},o("div",{id:"panel-mode",className:"debug-group"},o("div",{title:"Show Detail"},"当前展示模式"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Command Panel Mode",onchange:tr,ref:e=>{vt=e,vt.value="detail"}},o("option",{value:"detail"},"指令明细"),o("option",{value:"example"},"示例代码"),o("option",{value:"results"},"调用结果"))))),o(sa,null))))),Nr={hide(e){return d("HideActorByTag",e)},show(e){return d("ShowActorByTag",e)}},D={addArcgisLayer(e){return d("AddArcGISWmtsLayer",e)},addCustomLayer(e){return d("AddWmtsLayer",e)},addMapboxLayer(e){return d("AddMapboxWmtsLayer",e)},addTiandituLayer(e){return d("AddTianDiTuWmtsLayer",e)},config({GeographicEPSG:e="4326",IsBigScene:t=!1,IsOriginLocationInProjectedCRS:n,OriginCenter:r,ProjectedEPSG:a="4549"}){return d("SetGeoReferencingParams",{IsBigScene:t,GeographicEPSG:e,IsOriginLocationInProjectedCRS:n,OriginCenter:r,ProjectedEPSG:a})},hideLayer(e){return d("HideWmtsLayer",e)},hideLayerGroup(e){return d("HideWmtsLayerByGroupID",e)},removeLayer(e){return d("DeleteWmtsLayer",e)},removeLayerGroup(e){return d("DeleteWmtsLayerByGroupID",e)},setCesiumTerrainLayer(e){return d("SetTerrainLayerByCesiumIon",e)},setCustomLayer(e){return d("ChangeWmtsLayer",e)},setHeaders(e,t){return d("ChangeRequestHeaders",{ID:e,RequestHeaders:t})},setLayerIndex(e,t){return d("ChangeWmtsLayerIndex",{ID:e,Index:t})},setTerrainLayer(e){return d("SetTerrainLayerByUrl",e)},showLayer(e){return d("ShowWmtsLayer",e)},showLayerGroup(e){return d("ShowWmtsLayerByGroupID",e)},toggleDebug(e,t){return d("ChangeDebugMessages",{ID:e,ShowDebugMessage:t})}},je={openLevel(e,t){return d("OpenLevel",{MainLevelName:e,StreamLevelNames:t})},restartLevel(){Br("RestartLevel","")},loadStreamLevels(e,t=!0,n=!0,r=!1){return d("LoadStreamLevels",{LevelNames:e,UnloadOtherStreamLevels:t,MakeVisibleAfterLoad:n,ShouldBlockOnLoad:r})},unloadStreamLevels(e,t=!1){return d("UnloadStreamLevels",{LevelNames:e,ShouldBlockOnLoad:t})}},J={checkExistance(e){return d("CheckExistanceOfPoint",e)},create(e){return d("CreatePoint",e)},hide(e){return d("HidePoint",e)},pick(e){return d("SelectPoint",e)},remove(e){return d("DeletePoint",e)},show(e){return d("ShowPoint",e)},unpick(){return d("UnselectPoint")}},$={checkExistance(e){return d("CheckExistanceOfPolygon",e)},create(e){return d("CreatePolygon",e)},hide(e){return d("HidePolygon",e)},pick(e){return d("SelectPolygon",e)},remove(e){return d("DeletePolygon",e)},show(e){return d("ShowPolygon",e)},unpick(){return d("UnselectPolygon")}},K={checkExistance(e){return d("CheckExistanceOfPolyline",e)},create(e){return d("CreatePolyline",e)},hide(e){return d("HidePolyline",e)},hideWithAnimateAndDuration(e,t,n){const r=B({Animate:t,AnimateDuration:n},e);return d("HidePolyline",r)},hideWithAnimateAndSpeed(e,t,n){const r=B({Animate:t,AnimateSpeed:n},e);return d("HidePolyline",r)},pick(e){return d("SelectPolyline",e)},remove(e){return d("DeletePolyline",e)},show(e){return d("ShowPolyline",e)},showWithAnimateAndDuration(e,t,n){const r=B({Animate:t,AnimateDuration:n},e);return d("ShowPolyline",r)},showWithAnimateAndSpeed(e,t,n){const r=B({Animate:t,AnimateSpeed:n},e);return d("ShowPolyline",r)},unpick(){return d("UnselectPolyline")}},se={create(e){return d("CreatePolymesh",e)},hide(e){return d("HidePolymesh",e)},pick(e){return d("SelectPolymesh",e)},remove(e){return d("DeletePolymesh",e)},show(e){return d("ShowPolymesh",e)},unpick(){return d("UnselectPolymesh")}},Rt={pause(e){return d("PauseSequence",e)},play(e){return d("PlaySequence",e)},stop(){return d("StopSequence")}},Ot={mute(){return d("Mute")},setVolume(e){return d("SetVolume",e)},unmute(){return d("Unmute")}},da=/^(\d)(\d)(\d)(\d)-(0?)(\d+)-(0?)(\d+)T(0?)(\d+):(0?)(\d+):(0?)(\d+).(0+)(\d+)Z$/,pa={dd:"$7$8",d:"$8",hh:"$9$10",h:"$10",MM:"$5$6",M:"$6",mm:"$11$12",m:"$12",ss:"$13$14",s:"$14",S:"$16",yyyy:"$1$2$3$4",yyy:"$2$3$4",yy:"$3$4",y:"$4"};function ma(e,t){return Object.entries(pa).forEach(([n,r])=>{t=t.replace(new RegExp(n),r)}),e.toJSON().replace(da,t)}const xt={disableRealtime(){return d("DisableRealtime")},enableRealtime(){return d("EnableRealtime")},setDateTime(e){const t=ma(e,"yyyy-MM-dd hh:mm:ss");return d("SetDateTime",t)}},Ve={changeMode(e){return d("ChangeViewMode",e)},flyTo(e){var p;const[t,n,r]=e.Location,[a,l,s]=(p=e.Rotation)!=null?p:[],u={Location:`(X=${t},Y=${n},Z=${r})`,LockRotation:e.LockRotation,Rotation:`(P=${l},Y=${s},R=${a})`,Distance:e.Distance,LockDistance:e.LockDistance,Duration:e.Duration};return d("FlyTo",u)},getView(){return le(this,null,function*(){const e=yield d("GetPosition"),t=e.Data,[n,r,a]=t.Location.replace(/(X|Y|Z)=/g,"").split(" "),[l,s,u]=t.Rotation.replace(/(P|Y|R)=/g,"").split(" ");return{Type:"Command",UID:e.UID,Command:"GetPosition",Data:{Location:[Number(n),Number(r),Number(a)],Rotation:[Number(u),Number(l),Number(s)],Distance:t.ArmLength},Result:!0}})},resetView(){return d("ResetView")}},Ir={changeByPreset(e,t=0){return d("ChangeWeatherByPreset",{Duration:t,Preset:e})},changeBySettings(e,t=0){const n=B({Duration:t},e);return d("ChangeWeatherBySettings",n)}};let qe=null,ie=null;const ga=()=>o("section",{className:"debug-rows",ref:e=>{qe=e}},o("div",{className:"debug-header",onclick:()=>{qe==null||qe.classList.toggle("collapsed")}},"Actor Controller"),o("div",{id:"actors-with-tag",className:"debug-group"},o("div",{title:"Actors With Tag"},"Actors With Tag"),o("span",null,o("input",{class:"form-control",type:"textbox",title:"Tag",ref:e=>{ie=e,ie.value="tag-1"}}),o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>le(Lt,null,function*(){ie&&Nr.hide(ie.value)})}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>le(Lt,null,function*(){ie&&Nr.show(ie.value)})})))),_e="panel-wrap-visible";let ae=null,bt=null,ht=null;function wt(){ae==null||ae.classList.toggle(_e,!1)}function fa(){ae=document.getElementById("debug-panel"),bt=document.getElementById("settings-panel"),ht=document.getElementById("stats-panel");const e=document.getElementById("settingsBtn"),t=document.getElementById("statsBtn");e.addEventListener("click",wt),t.addEventListener("click",wt)}function ba(e){bt==null||bt.classList.toggle(_e,!1),ht==null||ht.classList.toggle(_e,!1),ae&&(typeof e!="boolean"&&(e=!ae.classList.contains(_e)),ae.classList.toggle(_e,e))}const ha=()=>o("button",{className:"UiTool",id:"debug-panel-btn",onclick:()=>ba(),ref:()=>fa(),style:{cursor:"pointer"},title:"Toggle Debug Panel",type:"button"},o("svg",{id:"debugIcon",x:"0px",y:"0px",viewBox:"0 0 1024 1024"},o("g",{class:"svgIcon"},o("path",{d:"M928 576h-96.32V365.333333l86.826667-86.613333c12.48-12.48 12.48-32.746667 0.106666-45.226667-12.586667-12.586667-32.853333-12.48-45.333333-0.106666L786.453333 320H237.226667l-86.933334-86.613333c-12.48-12.48-32.746667-12.48-45.226666 0.106666-12.48 12.48-12.48 32.746667 0.106666 45.226667l87.146667 86.933333V576H96c-17.706667 0-32 14.293333-32 32s14.293333 32 32 32h96.32v29.653333c-0.213333 1.493333-0.32 2.986667-0.32 4.48 0 50.24 13.546667 97.493333 37.546667 138.986667l-92.053334 92.16c-12.48 12.48-12.48 32.746667 0 45.226667 6.293333 6.293333 14.4 9.386667 22.613334 9.386666s16.426667-3.093333 22.613333-9.386666l85.12-85.226667c58.773333 64.106667 146.346667 104.96 244.16 104.96 97.813333 0 185.493333-40.853333 244.16-104.96l85.226667 85.333333c6.293333 6.293333 14.4 9.386667 22.613333 9.386667s16.426667-3.093333 22.613333-9.386667c12.48-12.48 12.48-32.746667 0-45.226666l-92.16-92.266667c23.893333-41.493333 37.44-88.746667 37.44-138.986667 0-1.493333-0.106667-2.986667-0.32-4.48V640H928c17.706667 0 32-14.293333 32-32s-14.293333-32-32-32zM543.573333 904.533333c0.32-1.706667 0.426667-3.413333 0.426667-5.226666V544c0-17.706667-14.293333-32-32-32s-32 14.293333-32 32v355.413333c0 1.813333 0.106667 3.52 0.426667 5.226667-124.8-13.973333-222.08-109.76-224.426667-226.133333 0.213333-1.386667 0.32-2.773333 0.32-4.16V384h511.36v290.24c0 1.386667 0.106667 2.773333 0.213333 4.16-2.24 116.373333-99.52 212.16-224.32 226.133333z"}),o("path",{d:"M352 256h320c10.24 0 19.733333-4.8 25.813333-13.013333 5.973333-8.213333 7.786667-18.773333 4.8-28.48C674.453333 124.48 597.76 64 512 64c-85.866667 0-162.453333 60.48-190.506667 150.506667-3.093333 9.706667-1.28 20.266667 4.8 28.48 5.973333 8.213333 15.466667 13.013333 25.706667 13.013333z m160-128c43.84 0 84.48 24.533333 110.08 64H401.92c25.6-39.466667 66.24-64 110.08-64z"}))),o("span",{class:"tooltiptext"},"Debug"));let N=null,I=null,fe=null,Je=null;const ya=()=>o("section",{className:"debug-rows",ref:e=>{Je=e}},o("div",{className:"debug-header",onclick:()=>{Je==null||Je.classList.toggle("collapsed")}},"Gis Controller"),o("div",{id:"cesium-ion-terrain",className:"debug-group"},o("div",{title:"Set Terrain Layer By Cesium Ion"},"Cesium ION Terrain Layer"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"number",title:"Cesium Ion",step:"1",min:"0",ref:e=>{fe=e,fe.value="1"}}),o("input",{type:"button",value:"Set",class:"overlay-button btn-flat",onclick:()=>{const e=Number(fe==null?void 0:fe.value);D.setCesiumTerrainLayer(e)}}))),o("div",{id:"add-wmts-layer",className:"debug-group"},o("div",{title:"Add WMTS Layer"},"Add WMTS Layer"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Mapbox",class:"overlay-button btn-flat",onclick:()=>{if(!N||!I)return;const e={GroupID:N.value,ID:I.value,Index:0,RequestHeaders:{},Token:"pk.eyJ1Ijoid2FuZ3R5MyIsImEiOiJjbDU0c2FqajUwcW94M2JuMzZ5aXllNzEzIn0.oBLGH7m2KowQhRgj13wNRQ",Type:0};D.addMapboxLayer(e)}}),o("input",{type:"button",value:"Tianditu",class:"overlay-button btn-flat",onclick:()=>{if(!N||!I)return;const e={GroupID:N.value,ID:I.value,Index:0,RequestHeaders:{},Token:"40e3037f7c3d99707dc01c7809d1b165",Type:0};D.addTiandituLayer(e)}}))),o("div",{id:"wmts-id",className:"debug-group"},o("div",{title:"ID"},"ID"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"ID",ref:e=>{I=e,I.value="id-3"}}))),o("div",{id:"control-layer-by-id",className:"debug-group"},o("div",{title:"Control WMTS Layer By ID"},"Control WMTS Layer By ID"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>{I&&D.hideLayer(I.value)}}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>{I&&D.showLayer(I.value)}}),o("input",{type:"button",value:"Remove",class:"overlay-button btn-flat",onclick:()=>{I&&D.removeLayer(I.value)}}))),o("div",{id:"wmts-group-id",className:"debug-group"},o("div",{title:"Group ID"},"Group ID"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Group ID",ref:e=>{N=e,N.value="guid-01"}}))),o("div",{id:"control-layers-by-group",className:"debug-group"},o("div",{title:"Control WMTS Layers By Group ID"},"Control WMTS Layers By Group ID"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>{N&&D.hideLayerGroup(N.value)}}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>{N&&D.showLayerGroup(N.value)}}),o("input",{type:"button",value:"Remove",class:"overlay-button btn-flat",onclick:()=>{N&&D.removeLayerGroup(N.value)}}))));let $e=null,Ke=null,H=null;const va=()=>o("section",{className:"debug-rows",ref:e=>{Ke=e}},o("div",{className:"debug-header",onclick:()=>{Ke==null||Ke.classList.toggle("collapsed")}},"Level Controller"),o("div",{id:"main-level",className:"debug-group"},o("div",{title:"Main Level"},"Main Level"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Main Level Name",ref:e=>{$e=e,$e.value="Level1_Main"}}),o("input",{type:"button",value:"Open Level",class:"overlay-button btn-flat",onclick:()=>{if(!$e||!H)return;const e={MainLevelName:$e.value,StreamLevelNames:H.value.split(",")};je.openLevel(e.MainLevelName,e.StreamLevelNames)}}),o("input",{type:"button",value:"Restart Level",class:"overlay-button btn-flat",onclick:()=>{je.restartLevel()}}))),o("div",{id:"stream-levels",className:"debug-group"},o("div",{title:"Stream Levels"},"Stream Levels"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Stream Level Names",ref:e=>{H=e,H.value="Level1_Base"}}),o("input",{type:"button",value:"Load Stream Levels",class:"overlay-button btn-flat",onclick:()=>{if(!H)return;const e={LevelNames:H.value.split(","),UnloadOtherStreamLevels:!0,MakeVisibleAfterLoad:!0,ShouldBlockOnLoad:!1};je.loadStreamLevels(e.LevelNames)}}),o("input",{type:"button",value:"Unload Stream Levels",class:"overlay-button btn-flat",onclick:()=>{if(!H)return;const e={LevelNames:H.value.split(","),ShouldBlockOnLoad:!1};je.unloadStreamLevels(e.LevelNames)}})))),Sa=`[\r
  {\r
    "ID": "pl-icon01-01",\r
    "Name": "POI Icon01",\r
    "Style": "Icon01",\r
    "Coordinate": [120.01605, 30.253003, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 55,\r
      "Group": "Icon01"\r
    }\r
  },\r
  {\r
    "ID": "pl-icon01-02",\r
    "Name": "POI Icon01",\r
    "Style": "Icon01",\r
    "Coordinate": [120.017608, 30.251649, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 46,\r
      "Group": "Icon01"\r
    }\r
  },\r
  {\r
    "ID": "pl-icon01-03",\r
    "Name": "POI Icon01",\r
    "Style": "Icon01",\r
    "Coordinate": [120.019167, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 37,\r
      "Group": "Icon01"\r
    }\r
  },\r
  {\r
    "ID": "pl-icon01-04",\r
    "Name": "POI Icon01",\r
    "Style": "Icon01",\r
    "Coordinate": [120.017609, 30.254355, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 28,\r
      "Group": "Icon01"\r
    }\r
  },\r
  {\r
    "ID": "pl-icon01-05",\r
    "Name": "POI Icon01",\r
    "Style": "Icon01",\r
    "Coordinate": [120.017608, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 19,\r
      "Group": "Icon01"\r
    }\r
  }\r
]\r
`,wa=`[\r
  {\r
    "ID": "pl-label01-01",\r
    "Name": "POI Label01",\r
    "Style": "Label01",\r
    "Coordinate": [120.01605, 30.253003, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "BackgroundColor": [1, 0, 0, 1],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 77,\r
      "Group": "Label01"\r
    }\r
  },\r
  {\r
    "ID": "pl-label01-02",\r
    "Name": "POI Label01",\r
    "Style": "Label01",\r
    "Coordinate": [120.017608, 30.251649, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "BackgroundColor": [1, 0, 0, 1],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 66,\r
      "Group": "Label01"\r
    }\r
  },\r
  {\r
    "ID": "pl-label01-03",\r
    "Name": "POI Label01",\r
    "Style": "Label01",\r
    "Coordinate": [120.019167, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "BackgroundColor": [1, 0, 0, 1],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 33,\r
      "Group": "Label01"\r
    }\r
  },\r
  {\r
    "ID": "pl-label01-04",\r
    "Name": "POI Label01",\r
    "Style": "Label01",\r
    "Coordinate": [120.017609, 30.254355, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "BackgroundColor": [1, 0, 0, 1],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 44,\r
      "Group": "Label01"\r
    }\r
  },\r
  {\r
    "ID": "pl-label01-05",\r
    "Name": "POI Label01",\r
    "Style": "Label01",\r
    "Coordinate": [120.017608, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "BackgroundColor": [1, 0, 0, 1],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 88,\r
      "Group": "Label01"\r
    }\r
  }\r
]\r
`,La=`[\r
  {\r
    "ID": "pl-label02-01",\r
    "Name": "POI Label02",\r
    "Style": "Label02",\r
    "Coordinate": [120.01605, 30.253003, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 96,\r
      "Group": "Label02"\r
    }\r
  },\r
  {\r
    "ID": "pl-label02-02",\r
    "Name": "POI Label02",\r
    "Style": "Label02",\r
    "Coordinate": [120.017608, 30.251649, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 54,\r
      "Group": "Label02"\r
    }\r
  },\r
  {\r
    "ID": "pl-label02-03",\r
    "Name": "POI Label02",\r
    "Style": "Label02",\r
    "Coordinate": [120.019167, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 54,\r
      "Group": "Label02"\r
    }\r
  },\r
  {\r
    "ID": "pl-label02-04",\r
    "Name": "POI Label02",\r
    "Style": "Label02",\r
    "Coordinate": [120.017609, 30.254355, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 26,\r
      "Group": "Label02"\r
    }\r
  },\r
  {\r
    "ID": "pl-label02-05",\r
    "Name": "POI Label02",\r
    "Style": "Label02",\r
    "Coordinate": [120.017608, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Icon_Place",\r
      "ImageNormalSize": [50, 50],\r
      "ImageHover": "T_Grid",\r
      "ImageHoverSize": [60, 60],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 16,\r
      "Group": "Label02"\r
    }\r
  }\r
]\r
`,Ca=`[\r
  {\r
    "ID": "pl-label03-01",\r
    "Name": "POI Label03",\r
    "Style": "Label03",\r
    "Coordinate": [120.01605, 30.253003, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Label03_N",\r
      "ImageNormalSize": [150, 150],\r
      "ImageHover": "T_Label03_H",\r
      "ImageHoverSize": [160, 160],\r
      "ImageArrow": "T_Label03_Positioner",\r
      "ImageArrowSize": [30, 40],\r
      "LabelMargin": [0, 0, 0, 0]\r
    },\r
    "Tags": {\r
      "Age": 64,\r
      "Group": "Label03"\r
    }\r
  },\r
  {\r
    "ID": "pl-label03-02",\r
    "Name": "POI Label03",\r
    "Style": "Label03",\r
    "Coordinate": [120.017608, 30.251649, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Label03_N",\r
      "ImageNormalSize": [150, 150],\r
      "ImageHover": "T_Label03_Positioner",\r
      "ImageHoverSize": [160, 160],\r
      "LabelMargin": [0, 0, 0, 0],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 43,\r
      "Group": "Label03"\r
    }\r
  },\r
  {\r
    "ID": "pl-label03-03",\r
    "Name": "POI Label03",\r
    "Style": "Label03",\r
    "Coordinate": [120.019167, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Label03_N",\r
      "ImageNormalSize": [150, 150],\r
      "ImageHover": "T_Label03_Positioner",\r
      "ImageHoverSize": [160, 160],\r
      "LabelMargin": [0, 0, 0, 0],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 36,\r
      "Group": "Label03"\r
    }\r
  },\r
  {\r
    "ID": "pl-label03-04",\r
    "Name": "POI Label03",\r
    "Style": "Label03",\r
    "Coordinate": [120.017609, 30.254355, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Label03_N",\r
      "ImageNormalSize": [150, 150],\r
      "ImageHover": "T_Label03_H",\r
      "ImageHoverSize": [160, 160],\r
      "IsFixedLabelWidth": true,\r
      "LabelWidth": 300,\r
      "LabelMargin": [0, 0, 0, 0],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 19,\r
      "Group": "Label03"\r
    }\r
  },\r
  {\r
    "ID": "pl-label03-05",\r
    "Name": "POI Label03",\r
    "Style": "Label03",\r
    "Coordinate": [120.017608, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "ImageNormal": "T_Label03_N",\r
      "ImageNormalSize": [150, 150],\r
      "ImageHover": "T_Label03_H",\r
      "ImageHoverSize": [160, 160],\r
      "LabelMargin": [0, 0, 0, 0],\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 67,\r
      "Group": "Label03"\r
    }\r
  }\r
]\r
`,Pa=`[\r
  {\r
    "ID": "pl-marker01-01",\r
    "Name": "POI Marker01",\r
    "Style": "Marker01",\r
    "Coordinate": [120.01605, 30.253003, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 1.0,\r
      "Size": 10.0,\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 12,\r
      "Group": "Marker01"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker01-02",\r
    "Name": "POI Marker01",\r
    "Style": "Marker01",\r
    "Coordinate": [120.017608, 30.251649, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 5.0,\r
      "Size": 5.0,\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 26,\r
      "Group": "Marker01"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker01-03",\r
    "Name": "POI Marker01",\r
    "Style": "Marker01",\r
    "Coordinate": [120.019167, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 1.0,\r
      "Size": 10.0\r
    },\r
    "Tags": {\r
      "Age": 31,\r
      "Group": "Marker01"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker01-04",\r
    "Name": "POI Marker01",\r
    "Style": "Marker01",\r
    "Coordinate": [120.017609, 30.254355, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 1.0,\r
      "Size": 10.0\r
    },\r
    "Tags": {\r
      "Age": 76,\r
      "Group": "Marker01"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker01-05",\r
    "Name": "POI Marker01",\r
    "Style": "Marker01",\r
    "Coordinate": [120.017608, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 1.0,\r
      "Size": 10.0\r
    },\r
    "Tags": {\r
      "Age": 18,\r
      "Group": "Marker01"\r
    }\r
  }\r
]\r
`,Na=`[\r
  {\r
    "ID": "pl-marker02-01",\r
    "Name": "POI Marker02",\r
    "Style": "Marker02",\r
    "Coordinate": [120.01605, 30.253003, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 5.0,\r
      "Duration": 1.0,\r
      "CircleAmount": 5,\r
      "Size": 5,\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 64,\r
      "Group": "Marker02"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker02-02",\r
    "Name": "POI Marker02",\r
    "Style": "Marker02",\r
    "Coordinate": [120.017608, 30.251649, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 5.0,\r
      "Duration": 1.0,\r
      "CircleAmount": 5,\r
      "Size": 5,\r
      "IsHeightBasedSurface": true\r
    },\r
    "Tags": {\r
      "Age": 47,\r
      "Group": "Marker02"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker02-03",\r
    "Name": "POI Marker02",\r
    "Style": "Marker02",\r
    "Coordinate": [120.019167, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 5.0,\r
      "Duration": 1.0,\r
      "CircleAmount": 5,\r
      "Size": 5\r
    },\r
    "Tags": {\r
      "Age": 36,\r
      "Group": "Marker02"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker02-04",\r
    "Name": "POI Marker02",\r
    "Style": "Marker02",\r
    "Coordinate": [120.017609, 30.254355, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 5.0,\r
      "Duration": 1.0,\r
      "CircleAmount": 5,\r
      "Size": 5\r
    },\r
    "Tags": {\r
      "Age": 19,\r
      "Group": "Marker02"\r
    }\r
  },\r
  {\r
    "ID": "pl-marker02-05",\r
    "Name": "POI Marker02",\r
    "Style": "Marker02",\r
    "Coordinate": [120.017608, 30.253002, 20],\r
    "TargetLength": 1000,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 5.0,\r
      "Duration": 1.0,\r
      "CircleAmount": 5,\r
      "Size": 5\r
    },\r
    "Tags": {\r
      "Age": 24,\r
      "Group": "Marker02"\r
    }\r
  }\r
]\r
`;let Xe=null,be=null;const he={},_=[],Bt=[{Operator:"OR",Conditions:[["Age",">",[18]]]}],Ia=()=>o("section",{className:"debug-rows",ref:e=>{Xe=e}},o("div",{className:"debug-header",onclick:()=>{Xe==null||Xe.classList.toggle("collapsed")}},"Point Controller"),o("div",{id:"check-point",className:"debug-group"},o("div",{title:"Check Existance Of Point"},"Check Existance Of Point"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Check",class:"overlay-button btn-flat",onclick:()=>{J.checkExistance(Bt)}}))),o("div",{id:"create-point",className:"debug-group"},o("div",{title:"Create Point By Style"},"Create Point By Style"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{be=e,be.value="Label01"}},o("option",{value:"Icon01"},"Icon01"),o("option",{value:"Label01"},"Label01"),o("option",{value:"Label02"},"Label02"),o("option",{value:"Label03"},"Label03"),o("option",{value:"Marker01"},"Marker01"),o("option",{value:"Marker02"},"Marker02")),o("input",{type:"button",value:"Create",class:"overlay-button btn-flat",onclick:()=>{let e=[];switch(be==null?void 0:be.value){case"Icon01":{e=JSON.parse(Sa);break}case"Label01":{e=JSON.parse(wa);break}case"Label02":{e=JSON.parse(La);break}case"Label03":{e=JSON.parse(Ca);break}case"Marker01":{e=JSON.parse(Pa);break}case"Marker02":{e=JSON.parse(Na);break}default:return}e.forEach(({ID:t})=>{_.push({ID:t})}),J.create(e)}}))),o("div",{id:"hide-point",className:"debug-group"},o("div",{title:"Hide Or Show"},"Visibility Controlling"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>{J.hide(Bt)}}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>{J.show(Bt)}}))),o("div",{id:"pick-point",className:"debug-group"},o("div",{title:"Pick And Focus On"},"Pick And Focus On"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Pick",class:"overlay-button btn-flat",onclick:()=>{const t=(_.findIndex(({ID:n})=>n===(he==null?void 0:he.ID))+_.length+1)%_.length;he.ID=_[t].ID,J.pick(he)}}),o("input",{type:"button",value:"Unpick",class:"overlay-button btn-flat",onclick:()=>{J.unpick()}}))),o("div",{id:"remove-point",className:"debug-group"},o("div",{title:"Remove All"},"Remove All"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Remove",class:"overlay-button btn-flat",onclick:()=>{_.length!==0&&(J.remove(_),_.splice(0))}})))),ka=`[\r
  {\r
    "ID": "pg-solid01-01",\r
    "Name": "PG Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.01605, 30.253003, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017608, 30.251649, 1.0],\r
      [120.01605, 30.253003, 1.0]\r
    ],\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 1.0\r
    },\r
    "Tags": {\r
      "Group": "Solid01"\r
    }\r
  },\r
  {\r
    "ID": "pg-solid01-02",\r
    "Name": "PG Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.017609, 30.254355, 1.0],\r
      [120.019167, 30.253002, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017609, 30.254355, 1.0]\r
    ],\r
    "Parameters": {\r
      "Color": [0, 1, 0, 1],\r
      "Emissive": 1.0\r
    },\r
    "Tags": {\r
      "Group": "Solid01"\r
    }\r
  },\r
  {\r
    "ID": "pg-solid01-03",\r
    "Name": "PG Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.016564555641494, 30.253555481766277, 0.0],\r
      [120.016965197109812, 30.253565970325855, 0.0],\r
      [120.016973240104633, 30.253270853896943, 0.0],\r
      [120.016698039207569, 30.253183057303499, 0.0],\r
      [120.01649570844954, 30.253253348509343, 0.0],\r
      [120.016398598570035, 30.253341192664358, 0.0],\r
      [120.016564555641494, 30.253555481766277, 0.0]\r
    ],\r
    "Parameters": {\r
      "Color": [0, 0, 1, 1],\r
      "Emissive": 1.0\r
    },\r
    "Tags": {\r
      "Group": "Solid01"\r
    }\r
  }\r
]\r
`,Aa=`[\r
  {\r
    "ID": "pg-stripe01-01",\r
    "Name": "PG Stripe01",\r
    "Style": "Stripe01",\r
    "Coordinates": [\r
      [120.01605, 30.253003, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017608, 30.251649, 1.0],\r
      [120.01605, 30.253003, 1.0]\r
    ],\r
    "Parameters": {\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "Ratio": 0.5,\r
      "Emissive": 1.0,\r
      "Scale": 100,\r
      "Speed": 1\r
    },\r
    "Tags": {\r
      "Group": "Stripe01"\r
    }\r
  },\r
  {\r
    "ID": "pg-stripe01-02",\r
    "Name": "PG Stripe01",\r
    "Style": "Stripe01",\r
    "Coordinates": [\r
      [120.017609, 30.254355, 1.0],\r
      [120.019167, 30.253002, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017609, 30.254355, 1.0]\r
    ],\r
    "Parameters": {\r
      "Color1": [1, 1, 0, 1],\r
      "Color2": [1, 0, 1, 1],\r
      "Ratio": 0.5,\r
      "Emissive": 1.0,\r
      "Scale": 100,\r
      "Speed": 1\r
    },\r
    "Tags": {\r
      "Group": "Stripe01"\r
    }\r
  },\r
  {\r
    "ID": "pg-stripe01-03",\r
    "Name": "PG Stripe01",\r
    "Style": "Stripe01",\r
    "Coordinates": [\r
      [120.016564555641494, 30.253555481766277, 0.0],\r
      [120.016965197109812, 30.253565970325855, 0.0],\r
      [120.016973240104633, 30.253270853896943, 0.0],\r
      [120.016698039207569, 30.253183057303499, 0.0],\r
      [120.01649570844954, 30.253253348509343, 0.0],\r
      [120.016398598570035, 30.253341192664358, 0.0],\r
      [120.016564555641494, 30.253555481766277, 0.0]\r
    ],\r
    "Parameters": {\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [0, 0, 1, 1],\r
      "Ratio": 0.5,\r
      "Emissive": 1.0,\r
      "Scale": 100,\r
      "Speed": 1\r
    },\r
    "Tags": {\r
      "Group": "Stripe01"\r
    }\r
  }\r
]\r
`;let Ye=null,ye=null;const ve={},G=[],Mt=[{Operator:"OR",Conditions:[["Group","==",["Solid01"]]]}],Ea=()=>o("section",{className:"debug-rows",ref:e=>{Ye=e}},o("div",{className:"debug-header",onclick:()=>{Ye==null||Ye.classList.toggle("collapsed")}},"Polygon Controller"),o("div",{id:"check-polygon",className:"debug-group"},o("div",{title:"Check Existance Of Polygon"},"Check Existance Of Polygon"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Check",class:"overlay-button btn-flat",onclick:()=>{$.checkExistance(Mt)}}))),o("div",{id:"create-polygon",className:"debug-group"},o("div",{title:"Create Polygon By Style"},"Create Polygon By Style"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{ye=e,ye.value="Solid01"}},o("option",{value:"Solid01"},"Solid01"),o("option",{value:"Stripe01"},"Stripe01")),o("input",{type:"button",value:"Create",class:"overlay-button btn-flat",onclick:()=>{let e=[];switch(ye==null?void 0:ye.value){case"Solid01":{e=JSON.parse(ka);break}case"Dash01":{e=JSON.parse(Aa);break}default:return}e.forEach(({ID:t})=>{G.push({ID:t})}),$.create(e)}}))),o("div",{id:"hide-polygon",className:"debug-group"},o("div",{title:"Hide Or Show"},"Visibility Controlling"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>{$.hide(Mt)}}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>{$.show(Mt)}}))),o("div",{id:"pick-polygon",className:"debug-group"},o("div",{title:"Pick And Focus On"},"Pick And Focus On"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Pick",class:"overlay-button btn-flat",onclick:()=>{const t=(G.findIndex(({ID:n})=>n===(ve==null?void 0:ve.ID))+G.length+1)%G.length;ve.ID=G[t].ID,$.pick(ve)}}),o("input",{type:"button",value:"Unpick",class:"overlay-button btn-flat",onclick:()=>{$.unpick()}}))),o("div",{id:"remove-polygon",className:"debug-group"},o("div",{title:"Remove All"},"Remove All"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Remove",class:"overlay-button btn-flat",onclick:()=>{G.length!==0&&($.remove(G),G.splice(0))}})))),Ta=`[\r
  {\r
    "ID": "pl-arrow01-01",\r
    "Name": "PL Arrow01",\r
    "Style": "Arrow01",\r
    "Coordinates": [\r
      [120.01605, 30.253003, 20.0],\r
      [120.017608, 30.253002, 20.0],\r
      [120.017608, 30.251649, 20.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Horizontal",\r
      "Animate": "",\r
      "AnimateSpeed": 0.01,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1,\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 10],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 21,\r
      "Group": "Arrow01"\r
    }\r
  },\r
  {\r
    "ID": "pl-arrow01-02",\r
    "Name": "PL Arrow01",\r
    "Style": "Arrow01",\r
    "Coordinates": [\r
      [120.017609, 30.254355, 20.0],\r
      [120.017608, 30.253002, 20.0],\r
      [120.019167, 30.253002, 20.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Horizontal",\r
      "Animate": "",\r
      "AnimateSpeed": 0.01,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1,\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 10],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 18,\r
      "Group": "Arrow01"\r
    }\r
  }\r
]\r
`,Da=`[\r
  {\r
    "ID": "pl-dash01-01",\r
    "Name": "PL Dash01",\r
    "Style": "Dash01",\r
    "Coordinates": [\r
      [120.01605, 30.253003, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017608, 30.251649, 1.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Horizontal",\r
      "Animate": "",\r
      "AnimateSpeed": 0.00001,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1,\r
      "LineType": "Curve",\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 1],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 24,\r
      "Group": "Dash01"\r
    }\r
  },\r
  {\r
    "ID": "pl-dash01-02",\r
    "Name": "PL Dash01",\r
    "Style": "Dash01",\r
    "Coordinates": [\r
      [120.017609, 30.254355, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.019167, 30.253002, 1.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Horizontal",\r
      "Animate": "",\r
      "AnimateSpeed": 0.01,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1,\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 10],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 11,\r
      "Group": "Dash01"\r
    }\r
  }\r
]\r
`,Ra=`[\r
  {\r
    "ID": "pl-gradient01-01",\r
    "Name": "PL Gradient01",\r
    "Style": "Gradient01",\r
    "Coordinates": [\r
      [120.01605, 30.253003, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017608, 30.251649, 1.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Vertical",\r
      "Animate": "",\r
      "AnimateSpeed": 0.001,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1.0,\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 1],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 45,\r
      "Group": "Gradient01"\r
    }\r
  },\r
  {\r
    "ID": "pl-gradient01-02",\r
    "Name": "PL Gradient01",\r
    "Style": "Gradient01",\r
    "Coordinates": [\r
      [120.017609, 30.254355, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.019167, 30.253002, 1.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Vertical",\r
      "Animate": "",\r
      "AnimateSpeed": 0.01,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1,\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 10],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 26,\r
      "Group": "Gradient01"\r
    }\r
  }\r
]\r
`,Oa=`[\r
  {\r
    "ID": "pl-solid01-01",\r
    "Name": "PL Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.01605, 30.253003, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017608, 30.251649, 1.0]\r
    ],\r
    "Parameters": {\r
      "Direction": "Horizontal",\r
      "Animate": "",\r
      "AnimateSpeed": 0.001,\r
      "AnimateDuration": 2.0,\r
      "IsLoop": false,\r
      "Smoothness": 100,\r
      "Width": 2,\r
      "Color1": [1, 0, 0, 1],\r
      "Color2": [1, 1, 1, 1],\r
      "FlowSpeed": 1.0,\r
      "Ratio": 0.5,\r
      "Scale": 1.0,\r
      "Offset": [0, 0, 1],\r
      "IsHeightBasedSurface": false\r
    },\r
    "Tags": {\r
      "Age": 83,\r
      "Group": "Solid01"\r
    }\r
  }\r
]\r
`;let Ze=null,Se=null;const we={},U=[],Ht=[{Operator:"OR",Conditions:[["Age",">",[30]]]}],xa=()=>o("section",{className:"debug-rows",ref:e=>{Ze=e}},o("div",{className:"debug-header",onclick:()=>{Ze==null||Ze.classList.toggle("collapsed")}},"Polyline Controller"),o("div",{id:"check-polyline",className:"debug-group"},o("div",{title:"Check Existance Of Polyline"},"Check Existance Of Polyline"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Check",class:"overlay-button btn-flat",onclick:()=>{K.checkExistance(Ht)}}))),o("div",{id:"create-polyline",className:"debug-group"},o("div",{title:"Create Polyline By Style"},"Create Polyline By Style"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{Se=e,Se.value="Solid01"}},o("option",{value:"Arrow01"},"Arrow01"),o("option",{value:"Dash01"},"Dash01"),o("option",{value:"Gradient01"},"Gradient01"),o("option",{value:"Solid01"},"Solid01")),o("input",{type:"button",value:"Create",class:"overlay-button btn-flat",onclick:()=>{let e=[];switch(Se==null?void 0:Se.value){case"Arrow01":{e=JSON.parse(Ta);break}case"Dash01":{e=JSON.parse(Da);break}case"Gradient01":{e=JSON.parse(Ra);break}case"Solid01":{e=JSON.parse(Oa);break}default:return}e.forEach(({ID:t})=>{U.push({ID:t})}),K.create(e)}}))),o("div",{id:"hide-polyline",className:"debug-group"},o("div",{title:"Hide Or Show"},"Visibility Controlling"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>{K.hide(Ht)}}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>{K.show(Ht)}}))),o("div",{id:"pick-polyline",className:"debug-group"},o("div",{title:"Pick And Focus On"},"Pick And Focus On"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Pick",class:"overlay-button btn-flat",onclick:()=>{const t=(U.findIndex(({ID:n})=>n===(we==null?void 0:we.ID))+U.length+1)%U.length;we.ID=U[t].ID,K.pick(we)}}),o("input",{type:"button",value:"Unpick",class:"overlay-button btn-flat",onclick:()=>{K.unpick()}}))),o("div",{id:"remove-polyline",className:"debug-group"},o("div",{title:"Remove All"},"Remove All"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Remove",class:"overlay-button btn-flat",onclick:()=>{U.length!==0&&(K.remove(U),U.splice(0))}})))),Ba=`[\r
  {\r
    "ID": "pm-solid01-01",\r
    "Name": "PM Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.016005, 30.253003, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017608, 30.251649, 1.0],\r
      [120.016005, 30.253003, 1.0]\r
    ],\r
    "Height": 1.0,\r
    "DrawTop": true,\r
    "DrawSide": true,\r
    "DrawBottom": true,\r
    "Parameters": {\r
      "Color": [1, 0, 0, 1],\r
      "Emissive": 1.0\r
    },\r
    "Tags": {\r
      "Group": "Solid01"\r
    }\r
  },\r
  {\r
    "ID": "pm-solid01-02",\r
    "Name": "PM Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.017609, 30.254355, 1.0],\r
      [120.019167, 30.253002, 1.0],\r
      [120.017608, 30.253002, 1.0],\r
      [120.017609, 30.254355, 1.0]\r
    ],\r
    "Height": 1.0,\r
    "DrawTop": true,\r
    "DrawSide": true,\r
    "DrawBottom": true,\r
    "Parameters": {\r
      "Color": [0, 1, 0, 1],\r
      "Emissive": 1.0\r
    },\r
    "Tags": {\r
      "Group": "Solid01"\r
    }\r
  },\r
  {\r
    "ID": "pm-solid01-03",\r
    "Name": "PM Solid01",\r
    "Style": "Solid01",\r
    "Coordinates": [\r
      [120.016564, 30.253555, 0.0],\r
      [120.016965, 30.253565, 0.0],\r
      [120.016973, 30.253207, 0.0],\r
      [120.016698, 30.253183, 0.0],\r
      [120.016495, 30.253253, 0.0],\r
      [120.016398, 30.253341, 0.0],\r
      [120.016564, 30.253555, 0.0]\r
    ],\r
    "Height": 1.0,\r
    "DrawTop": true,\r
    "DrawSide": true,\r
    "DrawBottom": true,\r
    "Parameters": {\r
      "Color": [0, 0, 1, 1],\r
      "Emissive": 1.0\r
    },\r
    "Tags": {\r
      "Group": "Solid01"\r
    }\r
  }\r
]\r
`;let Qe=null,Le=null;const Ce={},F=[],kr=[{Operator:"OR",Conditions:[["Group","==",["Solid01"]]]}],Ma=()=>o("section",{className:"debug-rows",ref:e=>{Qe=e}},o("div",{className:"debug-header",onclick:()=>{Qe==null||Qe.classList.toggle("collapsed")}},"Polymesh Controller"),o("div",{id:"create-polymesh",className:"debug-group"},o("div",{title:"Create Polymesh By Style"},"Create Polymesh By Style"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{Le=e,Le.value="Solid01"}},o("option",{value:"Solid01"},"Solid01")),o("input",{type:"button",value:"Create",class:"overlay-button btn-flat",onclick:()=>{let e=[];switch(Le==null?void 0:Le.value){case"Solid01":{e=JSON.parse(Ba);break}default:return}e.forEach(({ID:t})=>{F.push({ID:t})}),se.create(e)}}))),o("div",{id:"polymesh-visibility",className:"debug-group"},o("div",{title:"Hide Or Show"},"Visibility Controlling"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Hide",class:"overlay-button btn-flat",onclick:()=>{se.hide(kr)}}),o("input",{type:"button",value:"Show",class:"overlay-button btn-flat",onclick:()=>{se.show(kr)}}))),o("div",{id:"pick-polymesh",className:"debug-group"},o("div",{title:"Pick And Focus On"},"Pick And Focus On"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Pick",class:"overlay-button btn-flat",onclick:()=>{const t=(F.findIndex(({ID:n})=>n===(Ce==null?void 0:Ce.ID))+F.length+1)%F.length;Ce.ID=F[t].ID,se.pick(Ce)}}),o("input",{type:"button",value:"Unpick",class:"overlay-button btn-flat",onclick:()=>{se.unpick()}}))),o("div",{id:"remove-polymesh",className:"debug-group"},o("div",{title:"Remove All"},"Remove All"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Remove",class:"overlay-button btn-flat",onclick:()=>{F.length!==0&&(se.remove(F),F.splice(0))}}))));let Pe=null,et=null,tt=null;const Ha=()=>o("section",{className:"debug-rows",ref:e=>{tt=e}},o("div",{className:"debug-header",onclick:()=>{tt==null||tt.classList.toggle("collapsed")}},"Sequence Controller"),o("div",{id:"play-sequence",className:"debug-group"},o("div",{title:"Start Playing"},"Start Playing"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Sequence Name",ref:e=>{Pe=e,Pe.value="MoveCubes"}}),o("input",{type:"button",value:"Play",class:"overlay-button btn-flat",onclick:()=>{const e=Pe==null?void 0:Pe.value;e&&Rt.play(e)}}))),o("div",{id:"pause-sequence",className:"debug-group"},o("div",{title:"Pause Playing"},"Pause Playing"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{et=e,et.value="true"}},o("option",{value:"true"},"Locked Camera"),o("option",{value:"false"},"Unlocked Camera")),o("input",{type:"button",value:"Pause",class:"overlay-button btn-flat",onclick:()=>{et&&Rt.pause(!!et.value)}}))),o("div",{id:"stop-sequence",className:"debug-group"},o("div",{title:"Stop Playing"},"Stop Playing"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Stop",class:"overlay-button btn-flat",onclick:()=>{Rt.stop()}}))));let rt=null,Ne=null;const _a=()=>o("section",{className:"debug-rows",ref:e=>{rt=e}},o("div",{className:"debug-header",onclick:()=>{rt==null||rt.classList.toggle("collapsed")}},"System Controller"),o("div",{id:"volume",className:"debug-group"},o("div",{title:"Volume"},"Volume"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"number",title:"Volume",ref:e=>{Ne=e,Ne.value="0.75"}}),o("input",{type:"button",value:"Set",class:"overlay-button btn-flat",onclick:()=>{const e=Number(Ne==null?void 0:Ne.value);Ot.setVolume(e)}}))),o("div",{id:"muted",className:"debug-group"},o("div",{title:"Muted"},"Muted"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Mute",class:"overlay-button btn-flat",onclick:()=>{Ot.mute()}}),o("input",{type:"button",value:"Unmute",class:"overlay-button btn-flat",onclick:()=>{Ot.unmute()}}))));let ue=null,nt=null;const Ga=()=>o("section",{className:"debug-rows",ref:e=>{nt=e}},o("div",{className:"debug-header",onclick:()=>{nt==null||nt.classList.toggle("collapsed")}},"Time Controller"),o("div",{id:"realtime",className:"debug-group"},o("div",{title:"Realtime"},"Realtime"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Enable",class:"overlay-button btn-flat",onclick:()=>{xt.enableRealtime()}}),o("input",{type:"button",value:"Disable",class:"overlay-button btn-flat",onclick:()=>{xt.disableRealtime()}}))),o("div",{id:"date-time",className:"debug-group"},o("div",{title:"Date Time"},"Date Time"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"datetime-local",title:"Date Time",ref:e=>{ue=e,ue.value="2024-02-04 01:02:03"}}),o("input",{type:"button",value:"Set",class:"overlay-button btn-flat",onclick:()=>{if(!ue)return;const e=new Date(ue==null?void 0:ue.value);e.setHours(e.getHours()+8),xt.setDateTime(e)}}))));let X=null,ot=null,ce=null,at=null,lt=null;const Ua=()=>o("section",{className:"debug-rows",ref:e=>{at=e}},o("div",{className:"debug-header",onclick:()=>{at==null||at.classList.toggle("collapsed")}},"场景接入及指令调试"),o("div",{id:"connect-2-match-maker",className:"debug-group"},o("div",{title:"Match Maker Server"},"云渲染服务(match-maker-url)"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Match Maker URL",ref:e=>{ce=e,ce.value="http://localhost:80"}}),o("input",{type:"button",value:"启动",class:"overlay-button btn-flat",onclick:()=>{ce&&Jt(ce.value,X==null?void 0:X.value)}}))),o("div",{id:"change-application",className:"debug-group"},o("div",{title:"Application Name"},"应用名称(application-name)"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Application Name",ref:e=>{X=e,X.value="CveTemplate"}}),o("input",{type:"button",value:"切换",class:"overlay-button btn-flat",onclick:()=>{!ce||!X||Jt(ce.value,X.value)}}))),o("div",{id:"connect-2-signaling",className:"debug-group"},o("div",{title:"Signaling Server"},"云渲染实例(signaling-url)"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"textbox",title:"Signaling Server URL",ref:e=>{lt=e,lt.value="http://127.0.0.1:8081"}}),o("input",{type:"button",value:"接入",class:"overlay-button btn-flat",onclick:()=>{lt&&Ut(lt.value)}}))),o("div",{id:"aspect-ratio",className:"debug-group"},o("div",{title:"Application Name"},"横纵比(aspect-ratio)"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Aspect Ratio",ref:e=>{ot=e,ot.value="auto"}},o("option",{value:"auto"},"auto(自动填充)"),o("option",{value:"2:1"},"2 / 1"),o("option",{value:"4:3"},"4 / 3"),o("option",{value:"16:9"},"16 / 9")),o("input",{type:"button",value:"设置",class:"overlay-button btn-flat",onclick:()=>{!h||!ot||(h.aspectRatio=ot.value.replace(/:/," / "))}}))),o("div",{id:"show-command-panel",className:"debug-group"},o("div",{title:"Command Debug Panel"},"指令看板"),o("label",{class:"tgl-switch"},o("input",{type:"checkbox",title:"Results",className:"tgl tgl-flat",id:"command-panel-toggle",name:"command-panel-toggle",onclick:()=>ln(),value:"results"}),o("div",{class:"tgl-slider"}))),o("div",{id:"fps-toggle",className:"debug-group"},o("div",{title:"FPS"},"帧率/PFS"),o("label",{class:"tgl-switch"},o("input",{type:"checkbox",title:"FPS",className:"tgl tgl-flat",id:"command-panel-toggle",name:"command-panel-toggle",onclick:e=>{Br("stat fps"),e.target.checked&&wt()},value:"FPS"}),o("div",{class:"tgl-slider"}))));let Ie=null,Y=null,ke=null,st=null,Z=null,Q=null,ee=null,te=null,re=null,ne=null;const Fa=()=>o("section",{className:"debug-rows",ref:e=>{st=e}},o("div",{className:"debug-header",onclick:()=>{st==null||st.classList.toggle("collapsed")}},"View Controller"),o("div",{id:"view-mode",className:"debug-group"},o("div",{title:"View Mode"},"View Mode"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{Ie=e,Ie.value="0"}},o("option",{value:"0"},"Free"),o("option",{value:"1"},"GIS"),o("option",{value:"2"},"SpringArm")),o("input",{type:"button",value:"Change",class:"overlay-button btn-flat",onclick:()=>{const e=Number(Ie==null?void 0:Ie.value);Ve.changeMode(e)}}))),o("div",{id:"fly-to",className:"debug-group"},o("div",{title:"Fly To"},"Fly To"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Fly",class:"overlay-button btn-flat",onclick:()=>{const e={Distance:Number(Y==null?void 0:Y.value),Duration:Number(ke==null?void 0:ke.value),Location:[Number(te==null?void 0:te.value),Number(re==null?void 0:re.value),Number(ne==null?void 0:ne.value)],Rotation:[Number(Q==null?void 0:Q.value),Number(Z==null?void 0:Z.value),Number(ee==null?void 0:ee.value)]};Ve.flyTo(e)}}))),o("div",{id:"view-location",className:"debug-group"},o("div",{title:"Location: X | Y | Z"},"Location(X/Y/Z)"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"X",ref:e=>{te=e,te.value="15491.9375"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Y",ref:e=>{re=e,re.value="26122.925781"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Z",ref:e=>{ne=e,ne.value="1500.001099"}}))),o("div",{id:"view-rotation",className:"debug-group"},o("div",{title:"Rotation: Roll | Pitch | Yaw"},"Rotation(Roll/Pitch/Yaw)"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Roll",ref:e=>{Q=e,Q.value="0"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Pitch",ref:e=>{Z=e,Z.value="-48.723961"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Yaw",ref:e=>{ee=e,ee.value="-74.87056"}}))),o("div",{id:"view-length-n-duration",className:"debug-group"},o("div",{title:"Arm Length And Duration"},"Arm Length / Duration"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Arm Length",ref:e=>{Y=e,Y.value="43987.796875"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Arm Length",ref:e=>{ke=e,ke.value="3"}}))),o("div",{id:"view-control",className:"debug-group"},o("div",{title:"View Controls"},"View Controls"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Get Current View",class:"overlay-button btn-flat",onclick:()=>le(Lt,null,function*(){const t=(yield Ve.getView()).Data;Y&&t.Distance!==void 0&&(Y.value=t.Distance.toString()),te&&re&&ne&&(te.value=t.Location[0].toString(),re.value=t.Location[1].toString(),ne.value=t.Location[2].toString()),t.Rotation!==void 0&&Z&&Q&&ee&&(Z.value=t.Rotation[1].toString(),Q.value=t.Rotation[0].toString(),ee.value=t.Rotation[2].toString())})}),o("input",{type:"button",value:"Reset View",class:"overlay-button btn-flat",onclick:()=>{Ve.resetView()}}))));let Ae=null,z=null,Ee=null,Te=null,De=null,it=null,ut=null,Re=null,Oe=null,xe=null,Be=null,Me=null,He=null;const za=()=>o("section",{className:"debug-rows",ref:e=>{it=e}},o("div",{className:"debug-header",onclick:()=>{it==null||it.classList.toggle("collapsed")}},"Weather Controller"),o("div",{id:"weather-duration",className:"debug-group"},o("div",{title:"Duration"},"Duration"),o("span",{class:"btn-overlay"},o("input",{class:"form-control",type:"number",title:"Duration",ref:e=>{z=e,z.value="3"}}))),o("div",{id:"weather-preset",className:"debug-group"},o("div",{title:"Weather Preset"},"Weather Preset"),o("span",{class:"btn-overlay"},o("select",{class:"form-control",title:"Is Lock Camera",ref:e=>{ut=e,ut.value="Sunny"}},o("option",{value:"Sunny"},"Sunny"),o("option",{value:"Cloudy_Light"},"Light Cloud"),o("option",{value:"Cloudy_Medium"},"Medium Cloud"),o("option",{value:"Cloudy_Heavy"},"Heavy Cloud"),o("option",{value:"Rainy_Light"},"Light Rain"),o("option",{value:"Rainy_Medium"},"Medium Rain"),o("option",{value:"Rainy_Heavy"},"Heavy Rain"),o("option",{value:"Snowy_Light"},"Light Snow"),o("option",{value:"Snowy_Medium"},"Medium Snow"),o("option",{value:"Snowy_Heavy"},"Heavy Snow")),o("input",{type:"button",value:"Change",class:"overlay-button btn-flat",onclick:()=>{if(!ut)return;const e={Preset:ut.value,Duration:Number(z==null?void 0:z.value)};Ir.changeByPreset(e.Preset,e.Duration)}}))),o("div",{id:"weather-settings",className:"debug-group"},o("div",{title:"Weather Settings"},"Weather Settings"),o("span",{class:"btn-overlay"},o("input",{type:"button",value:"Change",class:"overlay-button btn-flat",onclick:()=>{const e={CloudCoverage:Number(Ae==null?void 0:Ae.value),Dust:Number(Ee==null?void 0:Ee.value),DustCoverage:Number(Te==null?void 0:Te.value),Fog:Number(De==null?void 0:De.value),Rain:Number(Re==null?void 0:Re.value),Snow:Number(Oe==null?void 0:Oe.value),SnowCoverage:Number(xe==null?void 0:xe.value),ThunderLightning:Number(Be==null?void 0:Be.value),Wetness:Number(Me==null?void 0:Me.value),WindIntensity:Number(He==null?void 0:He.value)};Ir.changeBySettings(e,Number(z==null?void 0:z.value))}}))),o("div",{id:"weather-cloud-n-fog",className:"debug-group"},o("div",{title:"Cloud Coverage / Fog"},"Cloud Coverage / Fog"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Cloud Coverage",ref:e=>{Ae=e,Ae.value="0"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Fog",ref:e=>{De=e,De.value="0"}}))),o("div",{id:"weather-dust-n-Coverage",className:"debug-group"},o("div",{title:"Dust And Dust Coverage"},"Dust / Dust Coverage"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Dust",ref:e=>{Ee=e,Ee.value="0"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Dust Coverage",ref:e=>{Te=e,Te.value="0"}}))),o("div",{id:"weather-rain-n-thunder",className:"debug-group"},o("div",{title:"Rain And Thunder Lightning"},"Rain / Thunder Lightning"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Rain",ref:e=>{Re=e,Re.value="0"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Thunder Lightning",ref:e=>{Be=e,Be.value="0"}}))),o("div",{id:"weather-snow-n-coverage",className:"debug-group"},o("div",{title:"Snow / Snow Coverage"},"Snow / Snow Coverage"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Snow",ref:e=>{Oe=e,Oe.value="0"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Snow Coverage",ref:e=>{xe=e,xe.value="0"}}))),o("div",{id:"weather-wetness-n-Wind",className:"debug-group"},o("div",{title:"Wetness And Wind Intensity"},"Wetness / Wind Intensity"),o("span",{class:"btn-overlay"},o("input",{class:"form-control debug-number-input",type:"number",title:"Wetness",ref:e=>{Me=e,Me.value="0"}}),o("input",{class:"form-control debug-number-input",type:"number",title:"Wind Intensity",ref:e=>{He=e,He.value="1.5"}})))),Wa=()=>o("div",{class:"panel-wrap",id:"debug-panel"},o("div",{className:"debug-heading"},"UE 套件调试面版"),o("div",{className:"debug-close",onclick:()=>wt()}),o("form",{className:"debug-form",id:"debug-form",name:"debug"},o(Ua,null),o(ga,null),o(ya,null),o(va,null),o(Ia,null),o(Ea,null),o(xa,null),o(Ma,null),o(Ha,null),o(_a,null),o(Ga,null),o(Fa,null),o(za,null))),ja=e=>{const t=new Ar(e),n=new fn;n.applyStyleSheet();const r=new bn({stream:t,onColorModeChanged:a=>n.setColorMode(a)});return{callback:()=>{const a=r.rootElement;a.querySelector("#uiFeatures").append(Wa(),ca()),a.querySelector("#controls").append(ha())},pixelStreaming:t,videoElementParent:r.rootElement}};Hn(ja);aa(e=>{e.signalingURL=location.origin,e.onerror=t=>{console.error("[debug] Error ===> ",t)},e.onpick=t=>{console.log("[debug] Pick ===> ",t.detail)},e.onerror=t=>{console.log("[debug] Error ===> ",t.toString())}})});export default Va();
