import{k as W,e as h,f as C,n as g,t as N,i as V,g as M,d as B,j as S}from"./index.d9178191.js";import{f as w,r as p,w as O,y as j,o as x,j as H,a as Y,c as X,d as $,e as z,n as P}from"./runtime-core.esm-bundler.10e5df62.js";import{_ as R}from"./_plugin-vue_export-helper.c27b6911.js";function _(e){var t;const n=h(e);return(t=n?.$el)!=null?t:n}const A=V?window:void 0;function T(...e){let t,n,r,l;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,r,l]=e,t=A):[t,n,r,l]=e,!t)return g;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const a=[],c=()=>{a.forEach(i=>i()),a.length=0},o=(i,u,m,d)=>(i.addEventListener(u,m,d),()=>i.removeEventListener(u,m,d)),s=O(()=>[_(t),h(l)],([i,u])=>{if(c(),!i)return;const m=B(u)?{...u}:u;a.push(...n.flatMap(d=>r.map(v=>o(i,d,v,m))))},{immediate:!0,flush:"post"}),f=()=>{s(),c()};return S(f),f}function q(){const e=p(!1);return j()&&x(()=>{e.value=!0}),e}function F(e){const t=q();return w(()=>(t.value,!!e()))}function E(e,t,n={}){const{root:r,rootMargin:l="0px",threshold:a=.1,window:c=A,immediate:o=!0}=n,s=F(()=>c&&"IntersectionObserver"in c),f=w(()=>{const v=h(e);return(Array.isArray(v)?v:[v]).map(_).filter(C)});let i=g;const u=p(o),m=s.value?O(()=>[f.value,_(r),u.value],([v,L])=>{if(i(),!u.value||!v.length)return;const k=new IntersectionObserver(t,{root:_(L),rootMargin:l,threshold:a});v.forEach(I=>I&&k.observe(I)),i=()=>{k.disconnect(),i=g}},{immediate:o,flush:"post"}):g,d=()=>{i(),m(),u.value=!1};return S(d),{isSupported:s,isActive:u,pause(){i(),u.value=!1},resume(){u.value=!0},stop:d}}function b(e){return typeof Window<"u"&&e instanceof Window?e.document.documentElement:typeof Document<"u"&&e instanceof Document?e.documentElement:e}const G={[W.mounted](e,t){typeof t.value=="function"?E(e,t.value):E(e,...t.value)}};function D(e){const t=window.getComputedStyle(e);if(t.overflowX==="scroll"||t.overflowY==="scroll"||t.overflowX==="auto"&&e.clientWidth<e.scrollWidth||t.overflowY==="auto"&&e.clientHeight<e.scrollHeight)return!0;{const n=e.parentNode;return!n||n.tagName==="BODY"?!1:D(n)}}function J(e){const t=e||window.event,n=t.target;return D(n)?!1:t.touches.length>1?!0:(t.preventDefault&&t.preventDefault(),!1)}const y=new WeakMap;function K(e,t=!1){const n=p(t);let r=null,l;O(N(e),o=>{const s=b(h(o));if(s){const f=s;y.get(f)||y.set(f,l),n.value&&(f.style.overflow="hidden")}},{immediate:!0});const a=()=>{const o=b(h(e));!o||n.value||(M&&(r=T(o,"touchmove",s=>{J(s)},{passive:!1})),o.style.overflow="hidden",n.value=!0)},c=()=>{var o;const s=b(h(e));!s||!n.value||(M&&r?.(),s.style.overflow=(o=y.get(s))!=null?o:"",y.delete(s),n.value=!1)};return S(c),w({get(){return n.value},set(o){o?a():c()}})}function Q(){let e=!1;const t=p(!1);return(n,r)=>{if(t.value=r.value,e)return;e=!0;const l=K(n,r.value);O(t,a=>l.value=a)}}Q();const U="10%",Z={__name:"Intersecting",props:{className:String,noSsr:Boolean},setup(e,{expose:t}){t();const n=p(!1),r=p(!1);function l([{isIntersecting:s}]){n.value=s,s&&(r.value=!0)}const a=e,c=w(()=>!(a?.noSsr&&!r.value)),o={isVisible:n,rootMargin:U,firstVisible:r,onIntersectionObserver:l,props:a,show:c,ref:p,computed:w,get vIntersectionObserver(){return G}};return Object.defineProperty(o,"__isScriptSetup",{enumerable:!1,value:!0}),o}};function ee(e,t,n,r,l,a){return H((Y(),X("div",{class:P(`${n.className||""} ${r.isVisible?"in-screen":"out-of-screen"} ${r.firstVisible?"is-active":"is-inactive"}`)},[r.show?$(e.$slots,"default",{key:0}):z("",!0)],2)),[[r.vIntersectionObserver,[r.onIntersectionObserver,{rootMargin:r.rootMargin}]]])}const oe=R(Z,[["render",ee]]);export{oe as default};
