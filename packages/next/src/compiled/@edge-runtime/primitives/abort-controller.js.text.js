module.exports = "\"use strict\";var c=Object.defineProperty,f=Object.getOwnPropertyDescriptor,y=Object.getOwnPropertyNames,S=Object.prototype.hasOwnProperty,a=(r,t)=>c(r,\"name\",{value:t,configurable:!0}),m=(r,t)=>{for(var e in t)c(r,e,{get:t[e],enumerable:!0})},w=(r,t,e,p)=>{if(t&&typeof t==\"object\"||typeof t==\"function\")for(let n of y(t))!S.call(r,n)&&n!==e&&c(r,n,{get:()=>t[n],enumerable:!(p=f(t,n))||p.enumerable});return r},E=r=>w(c({},\"__esModule\",{value:!0}),r),_={};m(_,{AbortController:()=>x,AbortSignal:()=>O,DOMException:()=>u});module.exports=E(_);var v=Symbol(\"kSignal\"),i=Symbol(\"kAborted\"),s=Symbol(\"kReason\"),g=Symbol(\"kName\"),o=Symbol(\"kOnabort\"),h=class extends Error{constructor(t,e){super(t),this[g]=e}get name(){return this[g]}};a(h,\"DOMException\");var u=h;function b(){let r=new EventTarget;return Object.setPrototypeOf(r,O.prototype),r[i]=!1,r[s]=void 0,r[o]=void 0,r}a(b,\"createAbortSignal\");function l(r,t){typeof t>\"u\"&&(t=new u(\"This operation was aborted\",\"AbortError\")),!r.aborted&&(r[s]=t,r[i]=!0,r.dispatchEvent(new Event(\"abort\")))}a(l,\"abortSignalAbort\");var d=class{constructor(){this[v]=b()}get signal(){return this[v]}abort(t){l(this.signal,t)}};a(d,\"AbortController\");var x=d,A=class extends EventTarget{constructor(){throw new TypeError(\"Illegal constructor\")}get aborted(){return this[i]}get reason(){return this[s]}get onabort(){return this[o]}set onabort(t){this[o]&&this.removeEventListener(\"abort\",this[o]),t&&(this[o]=t,this.addEventListener(\"abort\",this[o]))}throwIfAborted(){if(this[i])throw this[s]}static abort(t){let e=b();return l(e,t),e}static timeout(t){let e=b();return setTimeout(()=>{l(e,new u(\"The operation was aborted due to timeout\",\"TimeoutError\"))},t),e}};a(A,\"AbortSignal\");var O=A;\n"