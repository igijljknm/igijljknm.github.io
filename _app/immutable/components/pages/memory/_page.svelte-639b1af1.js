import{S as K,i as N,s as O,k as v,a as D,q as w,l as m,m as b,h as _,c as V,r as x,n as f,b as J,D as h,B as G,K as Q,J as $,O as R,P as S,Q as z}from"../../../chunks/index-c75120f7.js";function A(i,e,l){const c=i.slice();return c[5]=e[l],c[7]=l,c}function C(i){let e,l,c,u,r,y,g,t,k;function j(){return i[2](i[5])}function E(){return i[3](i[5])}return{c(){e=v("div"),l=v("img"),u=D(),r=v("img"),g=D(),this.h()},l(d){e=m(d,"DIV",{class:!0});var n=b(e);l=m(n,"IMG",{class:!0,src:!0,alt:!0}),u=V(n),r=m(n,"IMG",{class:!0,src:!0,alt:!0}),g=V(n),n.forEach(_),this.h()},h(){f(l,"class","front svelte-nrvjhh"),$(l.src,c=i[5].img)||f(l,"src",c),f(l,"alt",""),f(r,"class","back svelte-nrvjhh"),$(r.src,y="front.webp")||f(r,"src",y),f(r,"alt",""),f(e,"class","card svelte-nrvjhh"),R(e,"flipped",i[5].flipped)},m(d,n){J(d,e,n),h(e,l),h(e,u),h(e,r),h(e,g),t||(k=[S(e,"click",j),S(e,"keypress",E)],t=!0)},p(d,n){i=d,n&1&&!$(l.src,c=i[5].img)&&f(l,"src",c),n&1&&R(e,"flipped",i[5].flipped)},d(d){d&&_(e),t=!1,z(k)}}}function F(i){let e,l,c,u,r,y,g,t,k,j,E,d,n=i[0],o=[];for(let a=0;a<n.length;a+=1)o[a]=C(A(i,n,a));return{c(){e=v("main"),l=v("div");for(let a=0;a<o.length;a+=1)o[a].c();c=D(),u=v("div"),r=v("p"),y=w("Röd"),g=D(),t=v("div"),k=v("p"),j=w("Blå"),E=D(),d=v("div"),this.h()},l(a){e=m(a,"MAIN",{class:!0});var p=b(e);l=m(p,"DIV",{class:!0});var s=b(l);for(let P=0;P<o.length;P+=1)o[P].l(s);s.forEach(_),c=V(p),u=m(p,"DIV",{class:!0});var I=b(u);r=m(I,"P",{});var q=b(r);y=x(q,"Röd"),q.forEach(_),I.forEach(_),g=V(p),t=m(p,"DIV",{class:!0});var B=b(t);k=m(B,"P",{});var M=b(k);j=x(M,"Blå"),M.forEach(_),B.forEach(_),E=V(p),d=m(p,"DIV",{class:!0,style:!0}),b(d).forEach(_),p.forEach(_),this.h()},h(){f(l,"class","row svelte-nrvjhh"),f(u,"class","red-box svelte-nrvjhh"),f(t,"class","blue-box svelte-nrvjhh"),f(d,"class","turn-box svelte-nrvjhh"),f(d,"style","left:10px"),f(e,"class","svelte-nrvjhh")},m(a,p){J(a,e,p),h(e,l);for(let s=0;s<o.length;s+=1)o[s].m(l,null);h(e,c),h(e,u),h(u,r),h(r,y),h(e,g),h(e,t),h(t,k),h(k,j),h(e,E),h(e,d)},p(a,[p]){if(p&3){n=a[0];let s;for(s=0;s<n.length;s+=1){const I=A(a,n,s);o[s]?o[s].p(I,p):(o[s]=C(I),o[s].c(),o[s].m(l,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=n.length}},i:G,o:G,d(a){a&&_(e),Q(o,a)}}}function H(i,e,l){let c=[];for(let t=0;t<12;t++)c.push({id:5,img:"/notrick.gif",flipped:!1,completed:!1});let u=0;function r(t){t.flipped&&u<2?l(0,c):alert("chill")}return[c,r,t=>{r(t)},t=>{r(t)}]}class T extends K{constructor(e){super(),N(this,e,H,F,O,{})}}export{T as default};