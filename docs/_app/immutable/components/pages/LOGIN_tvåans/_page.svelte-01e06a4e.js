import{S as un,i as gn,s as mn,k as e,a as d,q as w,l as t,m as p,c,r as _,h as a,n as r,b as nn,D as n,B as rn}from"../../../chunks/index-0b635c87.js";function fn(cn){let o,L,V,k,N,I,M,U,B,q,z,C,S,s,T,F,b,H,O,x,m,y,R,Y,i,P,j,K,v,G,J,E,Q,W,f,X,Z,D,$;return{c(){o=e("head"),L=e("meta"),V=d(),k=e("meta"),N=d(),I=e("title"),M=w("Login"),U=d(),B=e("link"),q=d(),z=e("style"),C=w(`body {\r
            font-family: 'Dancing Script', cursive;\r
            margin: 0; \r
            padding: 0; \r
        }\r
    \r
        \r
        .popup-container {\r
            display: none;\r
            position: fixed;\r
            top: 50%;\r
            left: 50%;\r
            transform: translate(-50%, -50%);\r
            background-color: rgba(255, 255, 255, 0.9); \r
            padding: 20px;\r
            border-radius: 10px;\r
            z-index: 1000;\r
        }\r
    \r
        .popup-content {\r
            text-align: center;\r
        }\r
    \r
        .close-btn {\r
            position: absolute;\r
            top: -10px; \r
            right: -10px; \r
            padding: 15px; \r
            cursor: pointer;\r
            color: #333;\r
            font-size: 24px; \r
        }\r
    \r
        \r
        .open-btn,\r
        .login-btn {\r
            background-color: #3498db; \r
            color: white; \r
            padding: 10px 20px; \r
            border: none; \r
            border-radius: 5px; \r
            cursor: pointer; \r
        }\r
    \r
        .open-btn {\r
            position: fixed;\r
            top: 20px;\r
            left: 20px;\r
            z-index: 1001; \r
        }\r
    \r
        \r
        input[type="text"],\r
        input[type="password"] {\r
            width: 100%;\r
            padding: 10px;\r
            margin: 10px 0;\r
            border: 1px solid #ccc;\r
            border-radius: 5px;\r
        }`),S=d(),s=e("body"),T=e("div"),F=d(),b=e("button"),H=w("Vänligen logga in här!"),O=d(),x=e("div"),m=e("div"),y=e("span"),R=w("×"),Y=d(),i=e("form"),P=e("h2"),j=w("Login"),K=d(),v=e("input"),G=e("br"),J=d(),E=e("input"),Q=e("br"),W=d(),f=e("button"),X=w("Logga in"),Z=d(),D=e("script"),$=w(`function openPopup() {\r
            document.getElementById('popup').style.display = 'block';\r
        }\r
    \r
        \r
        function closePopup() {\r
            document.getElementById('popup').style.display = 'none';\r
        }\r
    \r
        \r
        function login() {\r
            var username = document.getElementById('username').value;\r
            var password = document.getElementById('password').value;\r
    \r
            \r
            if (username === '123' && password === '123') {\r
                alert('Välkommen till tvåans pizzeria!');\r
                window.location.href = 'http://localhost:5173/HEMSIDA_tv%C3%A5ans'; \r
            } else {\r
                alert('Fel användarnamn eller lösenord. Vänligen försök igen.');\r
            }\r
        }`),this.h()},l(u){o=t(u,"HEAD",{});var l=p(o);L=t(l,"META",{charset:!0}),V=c(l),k=t(l,"META",{name:!0,content:!0}),N=c(l),I=t(l,"TITLE",{});var en=p(I);M=_(en,"Login"),en.forEach(a),U=c(l),B=t(l,"LINK",{rel:!0,href:!0}),q=c(l),z=t(l,"STYLE",{});var tn=p(z);C=_(tn,`body {\r
            font-family: 'Dancing Script', cursive;\r
            margin: 0; \r
            padding: 0; \r
        }\r
    \r
        \r
        .popup-container {\r
            display: none;\r
            position: fixed;\r
            top: 50%;\r
            left: 50%;\r
            transform: translate(-50%, -50%);\r
            background-color: rgba(255, 255, 255, 0.9); \r
            padding: 20px;\r
            border-radius: 10px;\r
            z-index: 1000;\r
        }\r
    \r
        .popup-content {\r
            text-align: center;\r
        }\r
    \r
        .close-btn {\r
            position: absolute;\r
            top: -10px; \r
            right: -10px; \r
            padding: 15px; \r
            cursor: pointer;\r
            color: #333;\r
            font-size: 24px; \r
        }\r
    \r
        \r
        .open-btn,\r
        .login-btn {\r
            background-color: #3498db; \r
            color: white; \r
            padding: 10px 20px; \r
            border: none; \r
            border-radius: 5px; \r
            cursor: pointer; \r
        }\r
    \r
        .open-btn {\r
            position: fixed;\r
            top: 20px;\r
            left: 20px;\r
            z-index: 1001; \r
        }\r
    \r
        \r
        input[type="text"],\r
        input[type="password"] {\r
            width: 100%;\r
            padding: 10px;\r
            margin: 10px 0;\r
            border: 1px solid #ccc;\r
            border-radius: 5px;\r
        }`),tn.forEach(a),l.forEach(a),S=c(u),s=t(u,"BODY",{});var h=p(s);T=t(h,"DIV",{style:!0}),p(T).forEach(a),F=c(h),b=t(h,"BUTTON",{class:!0,onclick:!0});var on=p(b);H=_(on,"Vänligen logga in här!"),on.forEach(a),O=c(h),x=t(h,"DIV",{id:!0,class:!0});var an=p(x);m=t(an,"DIV",{class:!0});var A=p(m);y=t(A,"SPAN",{class:!0,onclick:!0});var ln=p(y);R=_(ln,"×"),ln.forEach(a),Y=c(A),i=t(A,"FORM",{id:!0,onsubmit:!0});var g=p(i);P=t(g,"H2",{});var pn=p(P);j=_(pn,"Login"),pn.forEach(a),K=c(g),v=t(g,"INPUT",{type:!0,id:!0,placeholder:!0}),G=t(g,"BR",{}),J=c(g),E=t(g,"INPUT",{type:!0,id:!0,placeholder:!0}),Q=t(g,"BR",{}),W=c(g),f=t(g,"BUTTON",{type:!0,class:!0,onclick:!0});var sn=p(f);X=_(sn,"Logga in"),sn.forEach(a),g.forEach(a),A.forEach(a),an.forEach(a),Z=c(h),D=t(h,"SCRIPT",{});var dn=p(D);$=_(dn,`function openPopup() {\r
            document.getElementById('popup').style.display = 'block';\r
        }\r
    \r
        \r
        function closePopup() {\r
            document.getElementById('popup').style.display = 'none';\r
        }\r
    \r
        \r
        function login() {\r
            var username = document.getElementById('username').value;\r
            var password = document.getElementById('password').value;\r
    \r
            \r
            if (username === '123' && password === '123') {\r
                alert('Välkommen till tvåans pizzeria!');\r
                window.location.href = 'http://localhost:5173/HEMSIDA_tv%C3%A5ans'; \r
            } else {\r
                alert('Fel användarnamn eller lösenord. Vänligen försök igen.');\r
            }\r
        }`),dn.forEach(a),h.forEach(a),this.h()},h(){r(L,"charset","UTF-8"),r(k,"name","viewport"),r(k,"content","width=device-width, initial-scale=1.0"),r(B,"rel","stylesheet"),r(B,"href","https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"),r(T,"style","background-image: url('mångapizzor.jpg'); /* Platsen för din bild */ background-size: cover; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0;"),r(b,"class","open-btn"),r(b,"onclick","openPopup()"),r(y,"class","close-btn"),r(y,"onclick","closePopup()"),r(v,"type","text"),r(v,"id","username"),r(v,"placeholder","Användarnamn"),v.required=!0,r(E,"type","password"),r(E,"id","password"),r(E,"placeholder","Lösenord"),E.required=!0,r(f,"type","submit"),r(f,"class","login-btn"),r(f,"onclick","login()"),r(i,"id","login-form"),r(i,"onsubmit","return false;"),r(m,"class","popup-content"),r(x,"id","popup"),r(x,"class","popup-container")},m(u,l){nn(u,o,l),n(o,L),n(o,V),n(o,k),n(o,N),n(o,I),n(I,M),n(o,U),n(o,B),n(o,q),n(o,z),n(z,C),nn(u,S,l),nn(u,s,l),n(s,T),n(s,F),n(s,b),n(b,H),n(s,O),n(s,x),n(x,m),n(m,y),n(y,R),n(m,Y),n(m,i),n(i,P),n(P,j),n(i,K),n(i,v),n(i,G),n(i,J),n(i,E),n(i,Q),n(i,W),n(i,f),n(f,X),n(s,Z),n(s,D),n(D,$)},p:rn,i:rn,o:rn,d(u){u&&a(o),u&&a(S),u&&a(s)}}}class bn extends un{constructor(o){super(),gn(this,o,null,fn,mn,{})}}export{bn as default};
