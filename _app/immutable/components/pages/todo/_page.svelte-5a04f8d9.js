import{S as H,i as K,s as Q,k as v,q as B,a as y,l as m,m as E,r as I,h as f,c as L,n as h,b as j,D as d,R as M,P as N,B as R,K as z,Q as F,o as G,u as J}from"../../../chunks/index-c75120f7.js";function U(i,e,l){const n=i.slice();return n[4]=e[l],n}function $(i){let e,l=i[4]+"",n,u;return{c(){e=v("li"),n=B(l),u=y()},l(a){e=m(a,"LI",{});var r=E(e);n=I(r,l),u=L(r),r.forEach(f)},m(a,r){j(a,e,r),d(e,n),d(e,u)},p(a,r){r&2&&l!==(l=a[4]+"")&&J(n,l)},d(a){a&&f(e)}}}function W(i){let e,l,n,u,a,r,p,C,S,k,b,_,T,q,w,O,g=i[1],o=[];for(let t=0;t<g.length;t+=1)o[t]=$(U(i,g,t));return{c(){e=v("div"),l=v("h1"),n=B("Todo List"),u=y(),a=v("input"),r=y(),p=v("button"),C=B("Add Task"),S=y(),k=v("ol");for(let t=0;t<o.length;t+=1)o[t].c();b=y(),_=v("div"),T=v("span"),q=B("REMOVE"),this.h()},l(t){e=m(t,"DIV",{class:!0});var c=E(e);l=m(c,"H1",{});var s=E(l);n=I(s,"Todo List"),s.forEach(f),u=L(c),a=m(c,"INPUT",{type:!0,placeholder:!0,class:!0}),r=L(c),p=m(c,"BUTTON",{id:!0,class:!0});var x=E(p);C=I(x,"Add Task"),x.forEach(f),S=L(c),k=m(c,"OL",{id:!0});var P=E(k);for(let A=0;A<o.length;A+=1)o[A].l(P);P.forEach(f),c.forEach(f),b=L(t),_=m(t,"DIV",{class:!0,onclick:!0});var V=E(_);T=m(V,"SPAN",{class:!0});var D=E(T);q=I(D,"REMOVE"),D.forEach(f),V.forEach(f),this.h()},h(){h(a,"type","text"),h(a,"placeholder","Add a new task"),h(a,"class","svelte-151jaxc"),h(p,"id","addTaskButton"),h(p,"class","svelte-151jaxc"),h(k,"id","todoList"),h(e,"class","container svelte-151jaxc"),h(T,"class","svelte-151jaxc"),h(_,"class","btn btn-two svelte-151jaxc"),h(_,"onclick","removeTask()")},m(t,c){j(t,e,c),d(e,l),d(l,n),d(e,u),d(e,a),M(a,i[0]),d(e,r),d(e,p),d(p,C),d(e,S),d(e,k);for(let s=0;s<o.length;s+=1)o[s].m(k,null);j(t,b,c),j(t,_,c),d(_,T),d(T,q),w||(O=[N(a,"input",i[3]),N(p,"click",i[2])],w=!0)},p(t,[c]){if(c&1&&a.value!==t[0]&&M(a,t[0]),c&2){g=t[1];let s;for(s=0;s<g.length;s+=1){const x=U(t,g,s);o[s]?o[s].p(x,c):(o[s]=$(x),o[s].c(),o[s].m(k,null))}for(;s<o.length;s+=1)o[s].d(1);o.length=g.length}},i:R,o:R,d(t){t&&f(e),z(o,t),t&&f(b),t&&f(_),w=!1,F(O)}}}function X(i){var e=document.createElement("li");e.textContent=i,e.addEventListener("click",function(){e.classList.toggle("completed")});var l=document.createElement("button");l.textContent="❌",l.addEventListener("click",function(){e.remove()}),e.appendChild(l),document.getElementById("todoList").appendChild(e)}function Y(i,e,l){G(()=>{document.getElementById("addTaskButton").addEventListener("click",function(){var p=document.querySelector("input[type='text']").value;p.trim()!==""&&(X(p),document.querySelector("input[type='text']").value="")})});let n="",u=[];function a(){u.push(n),l(1,u)}function r(){n=this.value,l(0,n)}return[n,u,a,r]}class ee extends H{constructor(e){super(),K(this,e,Y,W,Q,{})}}export{ee as default};