import{S as C,i as F,s as $,k as v,l as b,m as k,h as m,n as g,b as h,t as N,d as L,f as P,H as W,I as z,J,K,g as Q,B as U,L as Z,q as w,r as I,G as S,u as E,a as O,c as R,M as A,N as D,O as X,e as j,P as x,Q as ee}from"../../chunks/index-0675bc79.js";import{w as te}from"../../chunks/index-f9974809.js";var Y;const le=(Y=window.localStorage.getItem("story_id"))!=null?Y:"1",T=te(le);T.subscribe(r=>{window.localStorage.setItem("story_id",r),console.log(r)});let ie=[{id:"1",message:"The greatest story ever.",img:"wave.jpeg",choices:[{id:"2",text:"Begin"}]},{id:"2",message:"What will be your path?",img:"choice.jpeg",choices:[{id:"3",text:"Left"},{id:"4",text:"Right"}]},{id:"3",message:"Wrong! Try again!",img:"choice.jpeg",choices:[{id:"4",text:"Other right"},{id:"4",text:"Right"}]},{id:"4",message:"\u{1F923}\u{1F923}\u{1F923}\u{1F923}\u{1F923}",html:'<div style="width:480px"><iframe allow="fullscreen" frameBorder="0" height="360" src="https://giphy.com/embed/uhYPkjP03h9RvVdazZ/video" width="480"></iframe></div>',choices:[{id:"1",text:"Reset!"}]}];function se(r){const e=r-1;return e*e*e+1}function B(r,{delay:e=0,duration:a=400,easing:i=se,x:t=0,y:l=0,opacity:c=0}={}){const n=getComputedStyle(r),o=+n.opacity,f=n.transform==="none"?"":n.transform,p=o*(1-c);return{delay:e,duration:a,easing:i,css:(_,s)=>`
			transform: ${f} translate(${(1-_)*t}px, ${(1-_)*l}px);
			opacity: ${o-p*s}`}}function G(r,e,a){const i=r.slice();return i[4]=e[a],i}function re(r){let e,a,i,t;return{c(){e=v("p"),a=w("STORY FOR ID "),i=w(r[0]),t=w(" MISSING")},l(l){e=b(l,"P",{});var c=k(e);a=I(c,"STORY FOR ID "),i=I(c,r[0]),t=I(c," MISSING"),c.forEach(m)},m(l,c){h(l,e,c),S(e,a),S(e,i),S(e,t)},p(l,c){c&1&&E(i,l[0])},d(l){l&&m(e)}}}function ae(r){let e,a,i,t=r[1].message+"",l,c,n,o=r[1].img&&M(r),f=r[1].html&&V(r),p=r[1].choices,_=[];for(let s=0;s<p.length;s+=1)_[s]=q(G(r,p,s));return{c(){o&&o.c(),e=O(),f&&f.c(),a=O(),i=v("p"),l=w(t),c=O(),n=v("div");for(let s=0;s<_.length;s+=1)_[s].c();this.h()},l(s){o&&o.l(s),e=R(s),f&&f.l(s),a=R(s),i=b(s,"P",{});var d=k(i);l=I(d,t),d.forEach(m),c=R(s),n=b(s,"DIV",{class:!0});var u=k(n);for(let y=0;y<_.length;y+=1)_[y].l(u);u.forEach(m),this.h()},h(){g(n,"class","row svelte-8l3fab")},m(s,d){o&&o.m(s,d),h(s,e,d),f&&f.m(s,d),h(s,a,d),h(s,i,d),S(i,l),h(s,c,d),h(s,n,d);for(let u=0;u<_.length;u+=1)_[u].m(n,null)},p(s,d){if(s[1].img?o?o.p(s,d):(o=M(s),o.c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),s[1].html?f?f.p(s,d):(f=V(s),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null),d&2&&t!==(t=s[1].message+"")&&E(l,t),d&6){p=s[1].choices;let u;for(u=0;u<p.length;u+=1){const y=G(s,p,u);_[u]?_[u].p(y,d):(_[u]=q(y),_[u].c(),_[u].m(n,null))}for(;u<_.length;u+=1)_[u].d(1);_.length=p.length}},d(s){o&&o.d(s),s&&m(e),f&&f.d(s),s&&m(a),s&&m(i),s&&m(c),s&&m(n),A(_,s)}}}function M(r){let e,a,i;return{c(){e=v("img"),this.h()},l(t){e=b(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){D(e.src,a=r[1].img)||g(e,"src",a),g(e,"alt",i=r[1].message),g(e,"class","svelte-8l3fab")},m(t,l){h(t,e,l)},p(t,l){l&2&&!D(e.src,a=t[1].img)&&g(e,"src",a),l&2&&i!==(i=t[1].message)&&g(e,"alt",i)},d(t){t&&m(e)}}}function V(r){let e,a=r[1].html+"",i;return{c(){e=new X(!1),i=j(),this.h()},l(t){e=x(t,!1),i=j(),this.h()},h(){e.a=i},m(t,l){e.m(a,t,l),h(t,i,l)},p(t,l){l&2&&a!==(a=t[1].html+"")&&e.p(a)},d(t){t&&m(i),t&&e.d()}}}function q(r){let e,a=r[4].text+"",i,t,l;function c(){return r[3](r[4])}return{c(){e=v("button"),i=w(a)},l(n){e=b(n,"BUTTON",{});var o=k(e);i=I(o,a),o.forEach(m)},m(n,o){h(n,e,o),S(e,i),t||(l=ee(e,"click",c),t=!0)},p(n,o){r=n,o&2&&a!==(a=r[4].text+"")&&E(i,a)},d(n){n&&m(e),t=!1,l()}}}function H(r){let e,a,i,t;function l(o,f){return o[1]?ae:re}let c=l(r),n=c(r);return{c(){e=v("div"),n.c(),this.h()},l(o){e=b(o,"DIV",{class:!0});var f=k(e);n.l(f),f.forEach(m),this.h()},h(){g(e,"class","container svelte-8l3fab")},m(o,f){h(o,e,f),n.m(e,null),t=!0},p(o,f){c===(c=l(o))&&n?n.p(o,f):(n.d(1),n=c(o),n&&(n.c(),n.m(e,null)))},i(o){t||(z(()=>{i&&i.end(1),a=J(e,B,{x:800,duration:750}),a.start()}),t=!0)},o(o){a&&a.invalidate(),i=K(e,B,{x:-800,duration:750}),t=!1},d(o){o&&m(e),n.d(),o&&i&&i.end()}}}function oe(r){let e,a=r[0],i,t=H(r);return{c(){e=v("div"),t.c(),this.h()},l(l){e=b(l,"DIV",{class:!0});var c=k(e);t.l(c),c.forEach(m),this.h()},h(){g(e,"class","grid svelte-8l3fab")},m(l,c){h(l,e,c),t.m(e,null),i=!0},p(l,[c]){c&1&&$(a,a=l[0])?(Q(),N(t,1,1,U),L(),t=H(l),t.c(),P(t,1),t.m(e,null)):t.p(l,c)},i(l){i||(P(t),i=!0)},o(l){N(t),i=!1},d(l){l&&m(e),t.d(l)}}}function ne(r,e,a){let i,t,l;W(r,T,n=>a(2,l=n));const c=n=>{Z(T,l=n.id,l)};return r.$$.update=()=>{r.$$.dirty&4&&a(0,i=l),r.$$.dirty&1&&a(1,t=ie.find(n=>n.id==i))},[i,t,l,c]}class _e extends C{constructor(e){super(),F(this,e,ne,oe,$,{})}}export{_e as default};
