import{S as un,i as gn,s as mn,k as t,a as d,q as w,l as o,m as p,c,r as _,h as a,n as e,b as nn,D as n,B as en}from"../../../chunks/index-c75120f7.js";function fn(cn){let r,L,V,k,N,I,M,U,B,q,z,C,S,s,T,F,b,H,O,x,m,y,R,Y,i,P,j,K,v,G,J,E,Q,W,f,X,Z,D,$;return{c(){r=t("head"),L=t("meta"),V=d(),k=t("meta"),N=d(),I=t("title"),M=w("Login"),U=d(),B=t("link"),q=d(),z=t("style"),C=w(`body {
            font-family: 'Dancing Script', cursive;
            margin: 0; 
            padding: 0; 
        }
    
        
        .popup-container {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255, 255, 255, 0.9); 
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;
        }
    
        .popup-content {
            text-align: center;
        }
    
        .close-btn {
            position: absolute;
            top: -10px; 
            right: -10px; 
            padding: 15px; 
            cursor: pointer;
            color: #333;
            font-size: 24px; 
        }
    
        
        .open-btn,
        .login-btn {
            background-color: #3498db; 
            color: white; 
            padding: 10px 20px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
        }
    
        .open-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001; 
        }
    
        
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }`),S=d(),s=t("body"),T=t("div"),F=d(),b=t("button"),H=w("Vänligen logga in här!"),O=d(),x=t("div"),m=t("div"),y=t("span"),R=w("×"),Y=d(),i=t("form"),P=t("h2"),j=w("Login"),K=d(),v=t("input"),G=t("br"),J=d(),E=t("input"),Q=t("br"),W=d(),f=t("button"),X=w("Logga in"),Z=d(),D=t("script"),$=w(`function openPopup() {
            document.getElementById('popup').style.display = 'block';
        }
    
        
        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }
    
        
        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
    
            
            if (username === '123' && password === '123') {
                alert('Välkommen till tvåans pizzeria!');
                window.location.href = 'http://localhost:5173/HEMSIDA_tv%C3%A5ans'; 
            } else {
                alert('Fel användarnamn eller lösenord. Vänligen försök igen.');
            }
        }`),this.h()},l(u){r=o(u,"HEAD",{});var l=p(r);L=o(l,"META",{charset:!0}),V=c(l),k=o(l,"META",{name:!0,content:!0}),N=c(l),I=o(l,"TITLE",{});var tn=p(I);M=_(tn,"Login"),tn.forEach(a),U=c(l),B=o(l,"LINK",{rel:!0,href:!0}),q=c(l),z=o(l,"STYLE",{});var on=p(z);C=_(on,`body {
            font-family: 'Dancing Script', cursive;
            margin: 0; 
            padding: 0; 
        }
    
        
        .popup-container {
            display: none;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: rgba(255, 255, 255, 0.9); 
            padding: 20px;
            border-radius: 10px;
            z-index: 1000;
        }
    
        .popup-content {
            text-align: center;
        }
    
        .close-btn {
            position: absolute;
            top: -10px; 
            right: -10px; 
            padding: 15px; 
            cursor: pointer;
            color: #333;
            font-size: 24px; 
        }
    
        
        .open-btn,
        .login-btn {
            background-color: #3498db; 
            color: white; 
            padding: 10px 20px; 
            border: none; 
            border-radius: 5px; 
            cursor: pointer; 
        }
    
        .open-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            z-index: 1001; 
        }
    
        
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }`),on.forEach(a),l.forEach(a),S=c(u),s=o(u,"BODY",{});var h=p(s);T=o(h,"DIV",{style:!0}),p(T).forEach(a),F=c(h),b=o(h,"BUTTON",{class:!0,onclick:!0});var rn=p(b);H=_(rn,"Vänligen logga in här!"),rn.forEach(a),O=c(h),x=o(h,"DIV",{id:!0,class:!0});var an=p(x);m=o(an,"DIV",{class:!0});var A=p(m);y=o(A,"SPAN",{class:!0,onclick:!0});var ln=p(y);R=_(ln,"×"),ln.forEach(a),Y=c(A),i=o(A,"FORM",{id:!0,onsubmit:!0});var g=p(i);P=o(g,"H2",{});var pn=p(P);j=_(pn,"Login"),pn.forEach(a),K=c(g),v=o(g,"INPUT",{type:!0,id:!0,placeholder:!0}),G=o(g,"BR",{}),J=c(g),E=o(g,"INPUT",{type:!0,id:!0,placeholder:!0}),Q=o(g,"BR",{}),W=c(g),f=o(g,"BUTTON",{type:!0,class:!0,onclick:!0});var sn=p(f);X=_(sn,"Logga in"),sn.forEach(a),g.forEach(a),A.forEach(a),an.forEach(a),Z=c(h),D=o(h,"SCRIPT",{});var dn=p(D);$=_(dn,`function openPopup() {
            document.getElementById('popup').style.display = 'block';
        }
    
        
        function closePopup() {
            document.getElementById('popup').style.display = 'none';
        }
    
        
        function login() {
            var username = document.getElementById('username').value;
            var password = document.getElementById('password').value;
    
            
            if (username === '123' && password === '123') {
                alert('Välkommen till tvåans pizzeria!');
                window.location.href = 'http://localhost:5173/HEMSIDA_tv%C3%A5ans'; 
            } else {
                alert('Fel användarnamn eller lösenord. Vänligen försök igen.');
            }
        }`),dn.forEach(a),h.forEach(a),this.h()},h(){e(L,"charset","UTF-8"),e(k,"name","viewport"),e(k,"content","width=device-width, initial-scale=1.0"),e(B,"rel","stylesheet"),e(B,"href","https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap"),e(T,"style","background-image: url('mångapizzor.jpg'); /* Platsen för din bild */ background-size: cover; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0;"),e(b,"class","open-btn"),e(b,"onclick","openPopup()"),e(y,"class","close-btn"),e(y,"onclick","closePopup()"),e(v,"type","text"),e(v,"id","username"),e(v,"placeholder","Användarnamn"),v.required=!0,e(E,"type","password"),e(E,"id","password"),e(E,"placeholder","Lösenord"),E.required=!0,e(f,"type","submit"),e(f,"class","login-btn"),e(f,"onclick","login()"),e(i,"id","login-form"),e(i,"onsubmit","return false;"),e(m,"class","popup-content"),e(x,"id","popup"),e(x,"class","popup-container")},m(u,l){nn(u,r,l),n(r,L),n(r,V),n(r,k),n(r,N),n(r,I),n(I,M),n(r,U),n(r,B),n(r,q),n(r,z),n(z,C),nn(u,S,l),nn(u,s,l),n(s,T),n(s,F),n(s,b),n(b,H),n(s,O),n(s,x),n(x,m),n(m,y),n(y,R),n(m,Y),n(m,i),n(i,P),n(P,j),n(i,K),n(i,v),n(i,G),n(i,J),n(i,E),n(i,Q),n(i,W),n(i,f),n(f,X),n(s,Z),n(s,D),n(D,$)},p:en,i:en,o:en,d(u){u&&a(r),u&&a(S),u&&a(s)}}}class bn extends un{constructor(r){super(),gn(this,r,null,fn,mn,{})}}export{bn as default};
