import{S as Ge,i as Ne,s as Ke,k as n,a as i,q as u,l as r,m as o,c,r as m,h as a,n as e,p as je,J as x,b as ie,D as t,B as ce}from"../../../chunks/index-c75120f7.js";function Fe(Le){let d,ot,ft,Z,ht,$,xt,bt,tt,It,_t,et,it,p,H,kt,yt,w,Et,Ct,s,b,P,se,Bt,X,Dt,wt,I,T,le,Pt,q,Tt,Vt,_,V,de,zt,A,St,Mt,k,z,pe,jt,O,Lt,Gt,y,S,ue,Nt,U,Kt,Ft,E,M,me,Ht,Y,Xt,qt,C,j,ve,At,J,Ot,Ut,B,L,ge,Yt,R,Jt,Rt,D,G,fe,Qt,Q,Wt,Zt,N,K,he,$t,f,F,te,ee,nt,ne,re,rt,ae,at,oe;return{c(){d=n("head"),ot=n("meta"),ft=i(),Z=n("meta"),ht=i(),$=n("title"),xt=u("Tvåans Pizzeria"),bt=i(),tt=n("style"),It=u(`body {
            margin: 0;
            padding: 0;
            font-family: 'Dancing Script', cursive;
        }
        .header {
            background-image: url('pizzeria.jpg');
            background-size: cover;
            background-position: center top;
            text-align: center;
            padding: 50px 0;
            color: white;
            font-size: 36px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            text-decoration: underline; 
        }
        .products-container {
            text-align: center;
            margin-top: 20px;
        }
        .product {
            margin: 30px;
            display: inline-block;
            position: relative;
        }
        .product img {
            width: 200px;
            height: 200px;
            border: 2px solid #ccc;
            transition: filter 0.3s ease;
        }
        .product img:hover {
            filter: brightness(80%);
        }
        .product-name {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.7);
            padding: 5px 10px;
            color: black;
            font-size: 14px;
            border-radius: 5px;
            white-space: nowrap;
        }
        .cart-button {
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 999;
        }
        .cart-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #f9f9f9;
            padding: 20px;
            border: 2px solid #ccc;
            border-radius: 5px;
            z-index: 999;
            display: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
        }
        .cart-popup-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            color: #666;
            font-size: 20px;
        }
        .cart-item {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .remove-button {
            background-color: #ff5a5f;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        .remove-button:hover {
            background-color: #e30000;
        }`),_t=i(),et=n("link"),it=i(),p=n("body"),H=n("div"),kt=u("Tvåans Pizzeria"),yt=i(),w=n("div"),Et=u("Vad är du sugen på? Klicka på den produkt du vill ha för att lägga den i kundvagnen!"),Ct=i(),s=n("div"),b=n("div"),P=n("img"),Bt=i(),X=n("div"),Dt=u("Pepperoni"),wt=i(),I=n("div"),T=n("img"),Pt=i(),q=n("div"),Tt=u("Caligione"),Vt=i(),_=n("div"),V=n("img"),zt=i(),A=n("div"),St=u("Scotsumato"),Mt=i(),k=n("div"),z=n("img"),jt=i(),O=n("div"),Lt=u("Smashed Burger"),Gt=i(),y=n("div"),S=n("img"),Nt=i(),U=n("div"),Kt=u("Bruscettos"),Ft=i(),E=n("div"),M=n("img"),Ht=i(),Y=n("div"),Xt=u("Bucho"),qt=i(),C=n("div"),j=n("img"),At=i(),J=n("div"),Ot=u("Colada"),Ut=i(),B=n("div"),L=n("img"),Yt=i(),R=n("div"),Jt=u("Sagrito"),Rt=i(),D=n("div"),G=n("img"),Qt=i(),Q=n("div"),Wt=u("Buena"),Zt=i(),N=n("div"),K=n("img"),$t=i(),f=n("div"),F=n("div"),te=u("X"),ee=i(),nt=n("h2"),ne=u("Kundvagn"),re=i(),rt=n("ul"),ae=i(),at=n("script"),oe=u(`var cartItems = [];

        function addToCart(productName) {
            cartItems.push(productName);
            alert('Produkten "' + productName + '" har lagts till i kundvagnen.');
        }

        function toggleCartPopup() {
            var cartPopup = document.getElementById('cartPopup');
            if (cartPopup.style.display === 'block') {
                cartPopup.style.display = 'none';
            } else {
                displayCartItems();
                cartPopup.style.display = 'block';
            }
        }

        function displayCartItems() {
            var cartItemsList = document.getElementById('cartItems');
            cartItemsList.innerHTML = '';
            cartItems.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item;
                var removeButton = document.createElement('button');
                removeButton.textContent = ' Ta bort';
                removeButton.className = 'remove-button';
                removeButton.onclick = function() {
                    removeItemFromCart(item);
                };
                li.appendChild(removeButton);
                cartItemsList.appendChild(li);
            });
        }

        function removeItemFromCart(item) {
            var index = cartItems.indexOf(item);
            if (index !== -1) {
                cartItems.splice(index, 1);
                displayCartItems();
            }
        }`),this.h()},l(h){d=r(h,"HEAD",{});var v=o(d);ot=r(v,"META",{charset:!0}),ft=c(v),Z=r(v,"META",{name:!0,content:!0}),ht=c(v),$=r(v,"TITLE",{});var xe=o($);xt=m(xe,"Tvåans Pizzeria"),xe.forEach(a),bt=c(v),tt=r(v,"STYLE",{});var be=o(tt);It=m(be,`body {
            margin: 0;
            padding: 0;
            font-family: 'Dancing Script', cursive;
        }
        .header {
            background-image: url('pizzeria.jpg');
            background-size: cover;
            background-position: center top;
            text-align: center;
            padding: 50px 0;
            color: white;
            font-size: 36px;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
            text-decoration: underline; 
        }
        .products-container {
            text-align: center;
            margin-top: 20px;
        }
        .product {
            margin: 30px;
            display: inline-block;
            position: relative;
        }
        .product img {
            width: 200px;
            height: 200px;
            border: 2px solid #ccc;
            transition: filter 0.3s ease;
        }
        .product img:hover {
            filter: brightness(80%);
        }
        .product-name {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background-color: rgba(255, 255, 255, 0.7);
            padding: 5px 10px;
            color: black;
            font-size: 14px;
            border-radius: 5px;
            white-space: nowrap;
        }
        .cart-button {
            position: fixed;
            top: 20px;
            right: 20px;
            cursor: pointer;
            z-index: 999;
        }
        .cart-popup {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: #f9f9f9;
            padding: 20px;
            border: 2px solid #ccc;
            border-radius: 5px;
            z-index: 999;
            display: none;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            max-width: 300px;
            width: 100%;
        }
        .cart-popup-close {
            position: absolute;
            top: 10px;
            right: 10px;
            cursor: pointer;
            color: #666;
            font-size: 20px;
        }
        .cart-item {
            margin-bottom: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .remove-button {
            background-color: #ff5a5f;
            color: white;
            border: none;
            padding: 5px 10px;
            border-radius: 5px;
            cursor: pointer;
        }
        .remove-button:hover {
            background-color: #e30000;
        }`),be.forEach(a),_t=c(v),et=r(v,"LINK",{href:!0,rel:!0}),v.forEach(a),it=c(h),p=r(h,"BODY",{});var g=o(p);H=r(g,"DIV",{class:!0});var Ie=o(H);kt=m(Ie,"Tvåans Pizzeria"),Ie.forEach(a),yt=c(g),w=r(g,"DIV",{style:!0});var _e=o(w);Et=m(_e,"Vad är du sugen på? Klicka på den produkt du vill ha för att lägga den i kundvagnen!"),_e.forEach(a),Ct=c(g),s=r(g,"DIV",{class:!0});var l=o(s);b=r(l,"DIV",{class:!0});var ct=o(b);P=r(ct,"IMG",{src:!0,alt:!0,onclick:!0}),Bt=c(ct),X=r(ct,"DIV",{class:!0});var ke=o(X);Dt=m(ke,"Pepperoni"),ke.forEach(a),ct.forEach(a),wt=c(l),I=r(l,"DIV",{class:!0});var st=o(I);T=r(st,"IMG",{src:!0,alt:!0,onclick:!0}),Pt=c(st),q=r(st,"DIV",{class:!0});var ye=o(q);Tt=m(ye,"Caligione"),ye.forEach(a),st.forEach(a),Vt=c(l),_=r(l,"DIV",{class:!0});var lt=o(_);V=r(lt,"IMG",{src:!0,alt:!0,onclick:!0}),zt=c(lt),A=r(lt,"DIV",{class:!0});var Ee=o(A);St=m(Ee,"Scotsumato"),Ee.forEach(a),lt.forEach(a),Mt=c(l),k=r(l,"DIV",{class:!0});var dt=o(k);z=r(dt,"IMG",{src:!0,alt:!0,onclick:!0}),jt=c(dt),O=r(dt,"DIV",{class:!0});var Ce=o(O);Lt=m(Ce,"Smashed Burger"),Ce.forEach(a),dt.forEach(a),Gt=c(l),y=r(l,"DIV",{class:!0});var pt=o(y);S=r(pt,"IMG",{src:!0,alt:!0,onclick:!0}),Nt=c(pt),U=r(pt,"DIV",{class:!0});var Be=o(U);Kt=m(Be,"Bruscettos"),Be.forEach(a),pt.forEach(a),Ft=c(l),E=r(l,"DIV",{class:!0});var ut=o(E);M=r(ut,"IMG",{src:!0,alt:!0,onclick:!0}),Ht=c(ut),Y=r(ut,"DIV",{class:!0});var De=o(Y);Xt=m(De,"Bucho"),De.forEach(a),ut.forEach(a),qt=c(l),C=r(l,"DIV",{class:!0});var mt=o(C);j=r(mt,"IMG",{src:!0,alt:!0,onclick:!0}),At=c(mt),J=r(mt,"DIV",{class:!0});var we=o(J);Ot=m(we,"Colada"),we.forEach(a),mt.forEach(a),Ut=c(l),B=r(l,"DIV",{class:!0});var vt=o(B);L=r(vt,"IMG",{src:!0,alt:!0,onclick:!0}),Yt=c(vt),R=r(vt,"DIV",{class:!0});var Pe=o(R);Jt=m(Pe,"Sagrito"),Pe.forEach(a),vt.forEach(a),Rt=c(l),D=r(l,"DIV",{class:!0});var gt=o(D);G=r(gt,"IMG",{src:!0,alt:!0,onclick:!0}),Qt=c(gt),Q=r(gt,"DIV",{class:!0});var Te=o(Q);Wt=m(Te,"Buena"),Te.forEach(a),gt.forEach(a),l.forEach(a),Zt=c(g),N=r(g,"DIV",{class:!0,onclick:!0});var Ve=o(N);K=r(Ve,"IMG",{src:!0,alt:!0,width:!0}),Ve.forEach(a),$t=c(g),f=r(g,"DIV",{class:!0,id:!0});var W=o(f);F=r(W,"DIV",{class:!0,onclick:!0});var ze=o(F);te=m(ze,"X"),ze.forEach(a),ee=c(W),nt=r(W,"H2",{});var Se=o(nt);ne=m(Se,"Kundvagn"),Se.forEach(a),re=c(W),rt=r(W,"UL",{id:!0}),o(rt).forEach(a),W.forEach(a),ae=c(g),at=r(g,"SCRIPT",{});var Me=o(at);oe=m(Me,`var cartItems = [];

        function addToCart(productName) {
            cartItems.push(productName);
            alert('Produkten "' + productName + '" har lagts till i kundvagnen.');
        }

        function toggleCartPopup() {
            var cartPopup = document.getElementById('cartPopup');
            if (cartPopup.style.display === 'block') {
                cartPopup.style.display = 'none';
            } else {
                displayCartItems();
                cartPopup.style.display = 'block';
            }
        }

        function displayCartItems() {
            var cartItemsList = document.getElementById('cartItems');
            cartItemsList.innerHTML = '';
            cartItems.forEach(function(item) {
                var li = document.createElement('li');
                li.textContent = item;
                var removeButton = document.createElement('button');
                removeButton.textContent = ' Ta bort';
                removeButton.className = 'remove-button';
                removeButton.onclick = function() {
                    removeItemFromCart(item);
                };
                li.appendChild(removeButton);
                cartItemsList.appendChild(li);
            });
        }

        function removeItemFromCart(item) {
            var index = cartItems.indexOf(item);
            if (index !== -1) {
                cartItems.splice(index, 1);
                displayCartItems();
            }
        }`),Me.forEach(a),g.forEach(a),this.h()},h(){e(ot,"charset","UTF-8"),e(Z,"name","viewport"),e(Z,"content","width=device-width, initial-scale=1.0"),e(et,"href","https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"),e(et,"rel","stylesheet"),e(H,"class","header"),je(w,"text-align","center"),je(w,"margin-bottom","20px"),x(P.src,se="pepperoni.jpg")||e(P,"src",se),e(P,"alt","Pepperoni"),e(P,"onclick","addToCart('Pepperoni')"),e(X,"class","product-name"),e(b,"class","product"),x(T.src,le="caligione.jpg")||e(T,"src",le),e(T,"alt","Caligione"),e(T,"onclick","addToCart('Caligione')"),e(q,"class","product-name"),e(I,"class","product"),x(V.src,de="scotsumato.jpg")||e(V,"src",de),e(V,"alt","Scotsumato"),e(V,"onclick","addToCart('Scotsumato')"),e(A,"class","product-name"),e(_,"class","product"),x(z.src,pe="burger.jpg")||e(z,"src",pe),e(z,"alt","Smashed Burger"),e(z,"onclick","addToCart('Smashed Burger')"),e(O,"class","product-name"),e(k,"class","product"),x(S.src,ue="fries.jpg")||e(S,"src",ue),e(S,"alt","Bruscettos"),e(S,"onclick","addToCart('Bruscettos')"),e(U,"class","product-name"),e(y,"class","product"),x(M.src,me="steak.jpg")||e(M,"src",me),e(M,"alt","Bucho"),e(M,"onclick","addToCart('Bucho')"),e(Y,"class","product-name"),e(E,"class","product"),x(j.src,ve="colada.jpg")||e(j,"src",ve),e(j,"alt","Colada"),e(j,"onclick","addToCart('Colada')"),e(J,"class","product-name"),e(C,"class","product"),x(L.src,ge="sagrito.jpg")||e(L,"src",ge),e(L,"alt","Sagrito"),e(L,"onclick","addToCart('Sagrito')"),e(R,"class","product-name"),e(B,"class","product"),x(G.src,fe="buena.jpg")||e(G,"src",fe),e(G,"alt","Buena"),e(G,"onclick","addToCart('Buena')"),e(Q,"class","product-name"),e(D,"class","product"),e(s,"class","products-container"),x(K.src,he="Kundvagn.png")||e(K,"src",he),e(K,"alt","Shopping Cart"),e(K,"width","50"),e(N,"class","cart-button"),e(N,"onclick","toggleCartPopup()"),e(F,"class","cart-popup-close"),e(F,"onclick","toggleCartPopup()"),e(rt,"id","cartItems"),e(f,"class","cart-popup"),e(f,"id","cartPopup")},m(h,v){ie(h,d,v),t(d,ot),t(d,ft),t(d,Z),t(d,ht),t(d,$),t($,xt),t(d,bt),t(d,tt),t(tt,It),t(d,_t),t(d,et),ie(h,it,v),ie(h,p,v),t(p,H),t(H,kt),t(p,yt),t(p,w),t(w,Et),t(p,Ct),t(p,s),t(s,b),t(b,P),t(b,Bt),t(b,X),t(X,Dt),t(s,wt),t(s,I),t(I,T),t(I,Pt),t(I,q),t(q,Tt),t(s,Vt),t(s,_),t(_,V),t(_,zt),t(_,A),t(A,St),t(s,Mt),t(s,k),t(k,z),t(k,jt),t(k,O),t(O,Lt),t(s,Gt),t(s,y),t(y,S),t(y,Nt),t(y,U),t(U,Kt),t(s,Ft),t(s,E),t(E,M),t(E,Ht),t(E,Y),t(Y,Xt),t(s,qt),t(s,C),t(C,j),t(C,At),t(C,J),t(J,Ot),t(s,Ut),t(s,B),t(B,L),t(B,Yt),t(B,R),t(R,Jt),t(s,Rt),t(s,D),t(D,G),t(D,Qt),t(D,Q),t(Q,Wt),t(p,Zt),t(p,N),t(N,K),t(p,$t),t(p,f),t(f,F),t(F,te),t(f,ee),t(f,nt),t(nt,ne),t(f,re),t(f,rt),t(p,ae),t(p,at),t(at,oe)},p:ce,i:ce,o:ce,d(h){h&&a(d),h&&a(it),h&&a(p)}}}class Xe extends Ge{constructor(d){super(),Ne(this,d,null,Fe,Ke,{})}}export{Xe as default};
