import{S as mt,i as _t,s as dt,k as o,q as n,a as m,l as u,m as d,r as f,h as s,c as _,n as i,b as y,D as e,R as k,P as lt,u as ht,B as pt,Q as vt,T as bt}from"../../../chunks/index-0b635c87.js";function Et(E){let p,L,h=E[0]+" "+E[1],c,U,P,T,C,q,l,w,D,M,v,Q,B,g,j,b,z,F,G,J,I,K,H,V,W,S,X,R,Y,O,N,Z,A,x,tt,et,at;return{c(){p=o("h1"),L=n("Hello "),c=n(h),U=n("!"),P=m(),T=o("h1"),C=n("Registration Form"),q=m(),l=o("form"),w=o("label"),D=n("First Name:"),M=m(),v=o("input"),Q=m(),B=o("label"),g=n("Last Name:"),j=m(),b=o("input"),z=m(),F=o("label"),G=n("Email:"),J=m(),I=o("input"),K=m(),H=o("label"),V=n("Password:"),W=m(),S=o("input"),X=m(),R=o("button"),Y=n("Register"),O=m(),N=o("p"),Z=n("Have an account? "),A=o("a"),x=n("Log in"),tt=n(">"),this.h()},l(t){p=u(t,"H1",{});var r=d(p);L=f(r,"Hello "),c=f(r,h),U=f(r,"!"),r.forEach(s),P=_(t),T=u(t,"H1",{});var st=d(T);C=f(st,"Registration Form"),st.forEach(s),q=_(t),l=u(t,"FORM",{class:!0});var a=d(l);w=u(a,"LABEL",{for:!0});var rt=d(w);D=f(rt,"First Name:"),rt.forEach(s),M=_(a),v=u(a,"INPUT",{id:!0,type:!0}),Q=_(a),B=u(a,"LABEL",{for:!0});var it=d(B);g=f(it,"Last Name:"),it.forEach(s),j=_(a),b=u(a,"INPUT",{id:!0,type:!0}),z=_(a),F=u(a,"LABEL",{for:!0});var ot=d(F);G=f(ot,"Email:"),ot.forEach(s),J=_(a),I=u(a,"INPUT",{id:!0,type:!0}),K=_(a),H=u(a,"LABEL",{for:!0});var ut=d(H);V=f(ut,"Password:"),ut.forEach(s),W=_(a),S=u(a,"INPUT",{id:!0,type:!0}),X=_(a),R=u(a,"BUTTON",{type:!0});var nt=d(R);Y=f(nt,"Register"),nt.forEach(s),a.forEach(s),O=_(t),N=u(t,"P",{});var $=d(N);Z=f($,"Have an account? "),A=u($,"A",{href:!0});var ft=d(A);x=f(ft,"Log in"),ft.forEach(s),tt=f($,">"),$.forEach(s),this.h()},h(){i(w,"for","firstName"),i(v,"id","firstName"),i(v,"type","text"),i(B,"for","lastName"),i(b,"id","lastName"),i(b,"type","text"),i(F,"for","email"),i(I,"id","email"),i(I,"type","text"),i(H,"for","password"),i(S,"id","password"),i(S,"type","text"),i(R,"type","submit"),i(l,"class","svelte-1x0w4uw"),i(A,"href","/login")},m(t,r){y(t,p,r),e(p,L),e(p,c),e(p,U),y(t,P,r),y(t,T,r),e(T,C),y(t,q,r),y(t,l,r),e(l,w),e(w,D),e(l,M),e(l,v),k(v,E[0]),e(l,Q),e(l,B),e(B,g),e(l,j),e(l,b),k(b,E[1]),e(l,z),e(l,F),e(F,G),e(l,J),e(l,I),e(l,K),e(l,H),e(H,V),e(l,W),e(l,S),e(l,X),e(l,R),e(R,Y),y(t,O,r),y(t,N,r),e(N,Z),e(N,A),e(A,x),e(N,tt),et||(at=[lt(v,"input",E[2]),lt(b,"input",E[3]),lt(l,"submit",bt(ct))],et=!0)},p(t,[r]){r&3&&h!==(h=t[0]+" "+t[1])&&ht(c,h),r&1&&v.value!==t[0]&&k(v,t[0]),r&2&&b.value!==t[1]&&k(b,t[1])},i:pt,o:pt,d(t){t&&s(p),t&&s(P),t&&s(T),t&&s(q),t&&s(l),t&&s(O),t&&s(N),et=!1,vt(at)}}}function ct(){console.log("Form submitted!")}function Nt(E,p,L){let h="",c="";function U(){h=this.value,L(0,h)}function P(){c=this.value,L(1,c)}return[h,c,U,P]}class Lt extends mt{constructor(p){super(),_t(this,p,Nt,Et,dt,{})}}export{Lt as default};
