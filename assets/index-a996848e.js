var Lt=Object.defineProperty;var Mt=(e,t,n)=>t in e?Lt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var nt=(e,t,n)=>(Mt(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function $(){}const Ot=e=>e;function Rt(e,t){for(const n in t)e[n]=t[n];return e}function wt(e){return e()}function pt(){return Object.create(null)}function M(e){e.forEach(wt)}function ut(e){return typeof e=="function"}function T(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function At(e){return Object.keys(e).length===0}function Nt(e,...t){if(e==null){for(const o of t)o(void 0);return $}const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function xt(e,t,n){e.$$.on_destroy.push(Nt(t,n))}function Tt(e,t,n,o){if(e){const r=vt(e,t,n,o);return e[0](r)}}function vt(e,t,n,o){return e[1]&&o?Rt(n.ctx.slice(),e[1](o(t))):n.ctx}function Ut(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(t.dirty.length,r.length);for(let l=0;l<c;l+=1)s[l]=t.dirty[l]|r[l];return s}return t.dirty|r}return t.dirty}function Dt(e,t,n,o,r,s){if(r){const c=vt(t,n,o,s);e.p(c,r)}}function It(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function jt(e,t,n){return e.set(n),t}const kt=typeof window<"u";let Bt=kt?()=>window.performance.now():()=>Date.now(),ct=kt?e=>requestAnimationFrame(e):$;const j=new Set;function Ct(e){j.forEach(t=>{t.c(e)||(j.delete(t),t.f())}),j.size!==0&&ct(Ct)}function Pt(e){let t;return j.size===0&&ct(Ct),{promise:new Promise(n=>{j.add(t={c:e,f:n})}),abort(){j.delete(t)}}}function _(e,t){e.appendChild(t)}function St(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function qt(e){const t=x("style");return t.textContent="/* empty */",zt(St(e),t),t.sheet}function zt(e,t){return _(e.head||e,t),t.sheet}function O(e,t,n){e.insertBefore(t,n||null)}function S(e){e.parentNode&&e.parentNode.removeChild(e)}function x(e){return document.createElement(e)}function W(e){return document.createTextNode(e)}function N(){return W(" ")}function Y(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function Ft(e){return function(t){return t.preventDefault(),e.call(this,t)}}function g(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Vt(e){return Array.from(e.childNodes)}function ht(e,t){t=""+t,e.data!==t&&(e.data=t)}function gt(e,t){e.value=t??""}const Z=new Map;let tt=0;function Ht(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Kt(e,t){const n={stylesheet:qt(t),rules:{}};return Z.set(e,n),n}function Gt(e,t,n,o,r,s,c,l=0){const u=16.666/o;let i=`{
`;for(let m=0;m<=1;m+=u){const v=t+(n-t)*s(m);i+=m*100+`%{${c(v,1-v)}}
`}const d=i+`100% {${c(n,1-n)}}
}`,f=`__svelte_${Ht(d)}_${l}`,a=St(e),{stylesheet:p,rules:h}=Z.get(a)||Kt(a,e);h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${d}`,p.cssRules.length));const b=e.style.animation||"";return e.style.animation=`${b?`${b}, `:""}${f} ${o}ms linear ${r}ms 1 both`,tt+=1,f}function Jt(e,t){const n=(e.style.animation||"").split(", "),o=n.filter(t?s=>s.indexOf(t)<0:s=>s.indexOf("__svelte")===-1),r=n.length-o.length;r&&(e.style.animation=o.join(", "),tt-=r,tt||Qt())}function Qt(){ct(()=>{tt||(Z.forEach(e=>{const{ownerNode:t}=e.stylesheet;t&&S(t)}),Z.clear())})}function Wt(e,t,n,o){if(!t)return $;const r=e.getBoundingClientRect();if(t.left===r.left&&t.right===r.right&&t.top===r.top&&t.bottom===r.bottom)return $;const{delay:s=0,duration:c=300,easing:l=Ot,start:u=Bt()+s,end:i=u+c,tick:d=$,css:f}=n(e,{from:t,to:r},o);let a=!0,p=!1,h;function b(){f&&(h=Gt(e,0,1,c,s,l,f)),s||(p=!0)}function m(){f&&Jt(e,h),a=!1}return Pt(v=>{if(!p&&v>=u&&(p=!0),p&&v>=i&&(d(1,0),m()),!a)return!1;if(p){const R=v-u,V=0+1*l(R/c);d(V,1-V)}return!0}),b(),d(0,1),m}function Xt(e){const t=getComputedStyle(e);if(t.position!=="absolute"&&t.position!=="fixed"){const{width:n,height:o}=t,r=e.getBoundingClientRect();e.style.position="absolute",e.style.width=n,e.style.height=o,Yt(e,r)}}function Yt(e,t){const n=e.getBoundingClientRect();if(t.left!==n.left||t.top!==n.top){const o=getComputedStyle(e),r=o.transform==="none"?"":o.transform;e.style.transform=`${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`}}let ft;function H(e){ft=e}const I=[],rt=[];let B=[];const st=[],Zt=Promise.resolve();let it=!1;function te(){it||(it=!0,Zt.then(Et))}function lt(e){B.push(e)}function ee(e){st.push(e)}const ot=new Set;let U=0;function Et(){if(U!==0)return;const e=ft;do{try{for(;U<I.length;){const t=I[U];U++,H(t),ne(t.$$)}}catch(t){throw I.length=0,U=0,t}for(H(null),I.length=0,U=0;rt.length;)rt.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];ot.has(n)||(ot.add(n),n())}B.length=0}while(I.length);for(;st.length;)st.pop()();it=!1,ot.clear(),H(e)}function ne(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(lt)}}function oe(e){const t=[],n=[];B.forEach(o=>e.indexOf(o)===-1?t.push(o):n.push(o)),n.forEach(o=>o()),B=t}const X=new Set;let A;function re(){A={r:0,c:[],p:A}}function se(){A.r||M(A.c),A=A.p}function E(e,t){e&&e.i&&(X.delete(e),e.i(t))}function L(e,t,n,o){if(e&&e.o){if(X.has(e))return;X.add(e),A.c.push(()=>{X.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function mt(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function ie(e,t){L(e,1,1,()=>{t.delete(e.key)})}function le(e,t){e.f(),ie(e,t)}function ue(e,t,n,o,r,s,c,l,u,i,d,f){let a=e.length,p=s.length,h=a;const b={};for(;h--;)b[e[h].key]=h;const m=[],v=new Map,R=new Map,V=[];for(h=p;h--;){const y=f(r,s,h),k=n(y);let C=c.get(k);C?o&&V.push(()=>C.p(y,t)):(C=i(k,y),C.c()),v.set(k,m[h]=C),k in b&&R.set(k,Math.abs(h-b[k]))}const at=new Set,dt=new Set;function et(y){E(y,1),y.m(l,d),c.set(y.key,y),d=y.first,p--}for(;a&&p;){const y=m[p-1],k=e[a-1],C=y.key,J=k.key;y===k?(d=y.first,a--,p--):v.has(J)?!c.has(C)||at.has(C)?et(y):dt.has(J)?a--:R.get(C)>R.get(J)?(dt.add(C),et(y)):(at.add(J),a--):(u(k,c),a--)}for(;a--;){const y=e[a];v.has(y.key)||u(y,c)}for(;p;)et(m[p-1]);return M(V),m}function ce(e,t,n){const o=e.$$.props[t];o!==void 0&&(e.$$.bound[o]=n,n(e.$$.ctx[o]))}function K(e){e&&e.c()}function P(e,t,n){const{fragment:o,after_update:r}=e.$$;o&&o.m(t,n),lt(()=>{const s=e.$$.on_mount.map(wt).filter(ut);e.$$.on_destroy?e.$$.on_destroy.push(...s):M(s),e.$$.on_mount=[]}),r.forEach(lt)}function q(e,t){const n=e.$$;n.fragment!==null&&(oe(n.after_update),M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(I.push(e),te(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(e,t,n,o,r,s,c,l=[-1]){const u=ft;H(e);const i=e.$$={fragment:null,ctx:[],props:s,update:$,not_equal:r,bound:pt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:pt(),dirty:l,skip_bound:!1,root:t.target||u.$$.root};c&&c(i.root);let d=!1;if(i.ctx=n?n(e,t.props||{},(f,a,...p)=>{const h=p.length?p[0]:a;return i.ctx&&r(i.ctx[f],i.ctx[f]=h)&&(!i.skip_bound&&i.bound[f]&&i.bound[f](h),d&&fe(e,f)),a}):[],i.update(),d=!0,M(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const f=Vt(t.target);i.fragment&&i.fragment.l(f),f.forEach(S)}else i.fragment&&i.fragment.c();t.intro&&E(e.$$.fragment),P(e,t.target,t.anchor),Et()}H(u)}class F{constructor(){nt(this,"$$");nt(this,"$$set")}$destroy(){q(this,1),this.$destroy=$}$on(t,n){if(!ut(n))return $;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!At(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ae);function de(e){let t;return{c(){t=x("nav"),t.innerHTML='<div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4"><span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Todo List</span></div>',g(t,"class","bg-slate-400 border-gray-200 dark:bg-gray-900 mb-2 shadow-md")},m(n,o){O(n,t,o)},p:$,i:$,o:$,d(n){n&&S(t)}}}class pe extends F{constructor(t){super(),z(this,t,null,de,T,{})}}function he(e){let t,n;const o=e[1].default,r=Tt(o,e,e[0],null);return{c(){t=x("div"),r&&r.c(),g(t,"class","block p-4 bg-slate-100 border duration-300 border-gray-200 rounded-xl shadow hover:shadow-2xl dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700")},m(s,c){O(s,t,c),r&&r.m(t,null),n=!0},p(s,[c]){r&&r.p&&(!n||c&1)&&Dt(r,o,s,s[0],n?Ut(o,s[0],c,null):It(s[0]),null)},i(s){n||(E(r,s),n=!0)},o(s){L(r,s),n=!1},d(s){s&&S(t),r&&r.d(s)}}}function ge(e,t,n){let{$$slots:o={},$$scope:r}=t;return e.$$set=s=>{"$$scope"in s&&n(0,r=s.$$scope)},[r,o]}class me extends F{constructor(t){super(),z(this,t,ge,he,T,{})}}const D=[];function _e(e,t=$){let n;const o=new Set;function r(l){if(T(e,l)&&(e=l,n)){const u=!D.length;for(const i of o)i[1](),D.push(i,e);if(u){for(let i=0;i<D.length;i+=2)D[i][0](D[i+1]);D.length=0}}}function s(l){r(l(e))}function c(l,u=$){const i=[l,u];return o.add(i),o.size===1&&(n=t(r,s)||$),l(e),()=>{o.delete(i),o.size===0&&n&&(n(),n=null)}}return{set:r,update:s,subscribe:c}}let Q;const ye=new Uint8Array(16);function $e(){if(!Q&&(Q=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!Q))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Q(ye)}const w=[];for(let e=0;e<256;++e)w.push((e+256).toString(16).slice(1));function be(e,t=0){return(w[e[t+0]]+w[e[t+1]]+w[e[t+2]]+w[e[t+3]]+"-"+w[e[t+4]]+w[e[t+5]]+"-"+w[e[t+6]]+w[e[t+7]]+"-"+w[e[t+8]]+w[e[t+9]]+"-"+w[e[t+10]]+w[e[t+11]]+w[e[t+12]]+w[e[t+13]]+w[e[t+14]]+w[e[t+15]]).toLowerCase()}const we=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),_t={randomUUID:we};function xe(e,t,n){if(_t.randomUUID&&!t&&!e)return _t.randomUUID();e=e||{};const o=e.random||(e.rng||$e)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){n=n||0;for(let r=0;r<16;++r)t[n+r]=o[r];return t}return be(o)}const G=_e([]),ve=e=>{const t=xe(),n={title:e,id:t,complete:!1,dateAdded:new Date};G.update(o=>(o.push(n),o))};function yt(e){let t;return{c(){t=x("div"),t.innerHTML='<span class="block sm:inline">Please add a task description</span> <span class="absolute top-0 bottom-0 right-0 px-4 py-3"><svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"></path></svg></span>',g(t,"class","bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl"),g(t,"role","alert")},m(n,o){O(n,t,o)},d(n){n&&S(t)}}}function ke(e){let t,n,o,r,s,c,l,u,i=e[1]&&yt();return{c(){t=x("div"),n=x("form"),o=x("input"),r=N(),s=x("button"),s.textContent="Add",c=N(),i&&i.c(),g(o,"class","flex-grow rounded-xl p-2"),g(o,"type","text"),g(o,"placeholder","Create a new task"),g(s,"type","button"),g(s,"class","text-white h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 items-center"),g(n,"class","flex flex-row justify-between gap-5"),g(t,"class","flex flex-col gap-4")},m(d,f){O(d,t,f),_(t,n),_(n,o),gt(o,e[0]),_(n,r),_(n,s),_(t,c),i&&i.m(t,null),l||(u=[Y(o,"input",e[3]),Y(n,"submit",Ft(e[2]))],l=!0)},p(d,f){f&1&&o.value!==d[0]&&gt(o,d[0]),d[1]?i||(i=yt(),i.c(),i.m(t,null)):i&&(i.d(1),i=null)},d(d){d&&S(t),i&&i.d(),l=!1,M(u)}}}function Ce(e){let t,n;return t=new me({props:{$$slots:{default:[ke]},$$scope:{ctx:e}}}),{c(){K(t.$$.fragment)},m(o,r){P(t,o,r),n=!0},p(o,[r]){const s={};r&19&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(E(t.$$.fragment,o),n=!0)},o(o){L(t.$$.fragment,o),n=!1},d(o){q(t,o)}}}function Se(e,t,n){let o="",r=!1;const s=async()=>{o.length>0?(ve(o),n(0,o=""),n(1,r=!1)):n(1,r=!0)};function c(){o=this.value,n(0,o)}return[o,r,s,c]}class Ee extends F{constructor(t){super(),z(this,t,Se,Ce,T,{})}}function Le(e){const t=e-1;return t*t*t+1}function Me(e,{from:t,to:n},o={}){const r=getComputedStyle(e),s=r.transform==="none"?"":r.transform,[c,l]=r.transformOrigin.split(" ").map(parseFloat),u=t.left+t.width*c/n.width-(n.left+c),i=t.top+t.height*l/n.height-(n.top+l),{delay:d=0,duration:f=p=>Math.sqrt(p)*120,easing:a=Le}=o;return{delay:d,duration:ut(f)?f(Math.sqrt(u*u+i*i)):f,easing:a,css:(p,h)=>{const b=h*u,m=h*i,v=p+h*t.width/n.width,R=p+h*t.height/n.height;return`transform: ${s} translate(${b}px, ${m}px) scale(${v}, ${R});`}}}function Oe(e){let t,n,o,r=e[0].complete?"Incomplete":"Complete",s,c,l,u=e[0].title+"",i,d,f,a,p,h;return{c(){t=x("div"),n=x("button"),o=W("Mark "),s=W(r),c=N(),l=x("div"),i=W(u),d=N(),f=x("div"),a=x("button"),a.innerHTML='<span aria-hidden="true">Delete</span>',g(n,"class","text-5xl"),g(l,"class","col-sm-8 align-items-center flex-grow-1 w-100"),g(a,"type","button"),g(a,"class","close"),g(a,"aria-label","Close"),g(f,"class","col"),g(t,"class","flex justify-center")},m(b,m){O(b,t,m),_(t,n),_(n,o),_(n,s),_(t,c),_(t,l),_(l,i),_(t,d),_(t,f),_(f,a),p||(h=[Y(n,"click",e[1]),Y(a,"click",e[2])],p=!0)},p(b,[m]){m&1&&r!==(r=b[0].complete?"Incomplete":"Complete")&&ht(s,r),m&1&&u!==(u=b[0].title+"")&&ht(i,u)},i:$,o:$,d(b){b&&S(t),p=!1,M(h)}}}function Re(e,t,n){let o;xt(e,G,l=>n(3,o=l));let{todo:r}=t;const s=()=>{n(0,r.complete=!r.complete,r)},c=()=>{jt(G,o=o.filter(l=>l.id!==r.id),o)};return e.$$set=l=>{"todo"in l&&n(0,r=l.todo)},[r,s,c]}class Ae extends F{constructor(t){super(),z(this,t,Re,Oe,T,{todo:0})}}function $t(e,t,n){const o=e.slice();return o[2]=t[n],o[3]=t,o[4]=n,o}function bt(e,t){let n,o,r,s,c,l=$,u;function i(f){t[1](f,t[2],t[3],t[4])}let d={};return t[2]!==void 0&&(d.todo=t[2]),o=new Ae({props:d}),rt.push(()=>ce(o,"todo",i)),{key:e,first:null,c(){n=x("div"),K(o.$$.fragment),s=N(),this.first=n},m(f,a){O(f,n,a),P(o,n,null),_(n,s),u=!0},p(f,a){t=f;const p={};!r&&a&1&&(r=!0,p.todo=t[2],ee(()=>r=!1)),o.$set(p)},r(){c=n.getBoundingClientRect()},f(){Xt(n),l()},a(){l(),l=Wt(n,c,Me,{})},i(f){u||(E(o.$$.fragment,f),u=!0)},o(f){L(o.$$.fragment,f),u=!1},d(f){f&&S(n),q(o)}}}function Ne(e){let t,n=[],o=new Map,r,s=mt(e[0]);const c=l=>l[2].id;for(let l=0;l<s.length;l+=1){let u=$t(e,s,l),i=c(u);o.set(i,n[l]=bt(i,u))}return{c(){t=x("ul");for(let l=0;l<n.length;l+=1)n[l].c();g(t,"class","list-group pt-2")},m(l,u){O(l,t,u);for(let i=0;i<n.length;i+=1)n[i]&&n[i].m(t,null);r=!0},p(l,[u]){if(u&1){s=mt(l[0]),re();for(let i=0;i<n.length;i+=1)n[i].r();n=ue(n,u,c,1,l,s,o,t,le,bt,null,$t);for(let i=0;i<n.length;i+=1)n[i].a();se()}},i(l){if(!r){for(let u=0;u<s.length;u+=1)E(n[u]);r=!0}},o(l){for(let u=0;u<n.length;u+=1)L(n[u]);r=!1},d(l){l&&S(t);for(let u=0;u<n.length;u+=1)n[u].d()}}}function Te(e,t,n){let o;xt(e,G,s=>n(0,o=s));function r(s,c,l,u){l[u]=s,G.set(o)}return[o,r]}class Ue extends F{constructor(t){super(),z(this,t,Te,Ne,T,{})}}function De(e){let t,n,o,r,s,c,l,u;return n=new pe({}),s=new Ee({}),l=new Ue({}),{c(){t=x("main"),K(n.$$.fragment),o=N(),r=x("div"),K(s.$$.fragment),c=N(),K(l.$$.fragment),g(r,"class","container mx-auto")},m(i,d){O(i,t,d),P(n,t,null),_(t,o),_(t,r),P(s,r,null),_(r,c),P(l,r,null),u=!0},p:$,i(i){u||(E(n.$$.fragment,i),E(s.$$.fragment,i),E(l.$$.fragment,i),u=!0)},o(i){L(n.$$.fragment,i),L(s.$$.fragment,i),L(l.$$.fragment,i),u=!1},d(i){i&&S(t),q(n),q(s),q(l)}}}class Ie extends F{constructor(t){super(),z(this,t,null,De,T,{})}}new Ie({target:document.getElementById("app")});
