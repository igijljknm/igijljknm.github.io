import{S as Gt,i as Nt,s as Kt,k as e,a as i,q as u,l as n,m as o,c,r as m,h as a,n as t,p as jt,N as x,b as it,D as r,B as ct}from"../../../chunks/index-0b635c87.js";function Ft(Lt){let d,or,fr,Z,hr,$,xr,br,rr,Ir,_r,tr,ir,p,H,kr,yr,w,Er,Cr,s,b,P,st,Br,X,Dr,wr,I,T,lt,Pr,q,Tr,Vr,_,V,dt,zr,A,Sr,Mr,k,z,pt,jr,O,Lr,Gr,y,S,ut,Nr,U,Kr,Fr,E,M,mt,Hr,Y,Xr,qr,C,j,vt,Ar,R,Or,Ur,B,L,gt,Yr,J,Rr,Jr,D,G,ft,Qr,Q,Wr,Zr,N,K,ht,$r,f,F,rt,tt,er,et,nt,nr,at,ar,ot;return{c(){d=e("head"),or=e("meta"),fr=i(),Z=e("meta"),hr=i(),$=e("title"),xr=u("Tvåans Pizzeria"),br=i(),rr=e("style"),Ir=u(`body {\r
            margin: 0;\r
            padding: 0;\r
            font-family: 'Dancing Script', cursive;\r
        }\r
        .header {\r
            background-image: url('pizzeria.jpg');\r
            background-size: cover;\r
            background-position: center top;\r
            text-align: center;\r
            padding: 50px 0;\r
            color: white;\r
            font-size: 36px;\r
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r
            text-decoration: underline; \r
        }\r
        .products-container {\r
            text-align: center;\r
            margin-top: 20px;\r
        }\r
        .product {\r
            margin: 30px;\r
            display: inline-block;\r
            position: relative;\r
        }\r
        .product img {\r
            width: 200px;\r
            height: 200px;\r
            border: 2px solid #ccc;\r
            transition: filter 0.3s ease;\r
        }\r
        .product img:hover {\r
            filter: brightness(80%);\r
        }\r
        .product-name {\r
            position: absolute;\r
            bottom: 10px;\r
            left: 50%;\r
            transform: translateX(-50%);\r
            background-color: rgba(255, 255, 255, 0.7);\r
            padding: 5px 10px;\r
            color: black;\r
            font-size: 14px;\r
            border-radius: 5px;\r
            white-space: nowrap;\r
        }\r
        .cart-button {\r
            position: fixed;\r
            top: 20px;\r
            right: 20px;\r
            cursor: pointer;\r
            z-index: 999;\r
        }\r
        .cart-popup {\r
            position: fixed;\r
            top: 50%;\r
            left: 50%;\r
            transform: translate(-50%, -50%);\r
            background: #f9f9f9;\r
            padding: 20px;\r
            border: 2px solid #ccc;\r
            border-radius: 5px;\r
            z-index: 999;\r
            display: none;\r
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r
            max-width: 300px;\r
            width: 100%;\r
        }\r
        .cart-popup-close {\r
            position: absolute;\r
            top: 10px;\r
            right: 10px;\r
            cursor: pointer;\r
            color: #666;\r
            font-size: 20px;\r
        }\r
        .cart-item {\r
            margin-bottom: 10px;\r
            display: flex;\r
            justify-content: space-between;\r
            align-items: center;\r
        }\r
        .remove-button {\r
            background-color: #ff5a5f;\r
            color: white;\r
            border: none;\r
            padding: 5px 10px;\r
            border-radius: 5px;\r
            cursor: pointer;\r
        }\r
        .remove-button:hover {\r
            background-color: #e30000;\r
        }`),_r=i(),tr=e("link"),ir=i(),p=e("body"),H=e("div"),kr=u("Tvåans Pizzeria"),yr=i(),w=e("div"),Er=u("Vad är du sugen på? Klicka på den produkt du vill ha för att lägga den i kundvagnen!"),Cr=i(),s=e("div"),b=e("div"),P=e("img"),Br=i(),X=e("div"),Dr=u("Pepperoni"),wr=i(),I=e("div"),T=e("img"),Pr=i(),q=e("div"),Tr=u("Caligione"),Vr=i(),_=e("div"),V=e("img"),zr=i(),A=e("div"),Sr=u("Scotsumato"),Mr=i(),k=e("div"),z=e("img"),jr=i(),O=e("div"),Lr=u("Smashed Burger"),Gr=i(),y=e("div"),S=e("img"),Nr=i(),U=e("div"),Kr=u("Bruscettos"),Fr=i(),E=e("div"),M=e("img"),Hr=i(),Y=e("div"),Xr=u("Bucho"),qr=i(),C=e("div"),j=e("img"),Ar=i(),R=e("div"),Or=u("Colada"),Ur=i(),B=e("div"),L=e("img"),Yr=i(),J=e("div"),Rr=u("Sagrito"),Jr=i(),D=e("div"),G=e("img"),Qr=i(),Q=e("div"),Wr=u("Buena"),Zr=i(),N=e("div"),K=e("img"),$r=i(),f=e("div"),F=e("div"),rt=u("X"),tt=i(),er=e("h2"),et=u("Kundvagn"),nt=i(),nr=e("ul"),at=i(),ar=e("script"),ot=u(`var cartItems = [];\r
\r
        function addToCart(productName) {\r
            cartItems.push(productName);\r
            alert('Produkten "' + productName + '" har lagts till i kundvagnen.');\r
        }\r
\r
        function toggleCartPopup() {\r
            var cartPopup = document.getElementById('cartPopup');\r
            if (cartPopup.style.display === 'block') {\r
                cartPopup.style.display = 'none';\r
            } else {\r
                displayCartItems();\r
                cartPopup.style.display = 'block';\r
            }\r
        }\r
\r
        function displayCartItems() {\r
            var cartItemsList = document.getElementById('cartItems');\r
            cartItemsList.innerHTML = '';\r
            cartItems.forEach(function(item) {\r
                var li = document.createElement('li');\r
                li.textContent = item;\r
                var removeButton = document.createElement('button');\r
                removeButton.textContent = ' Ta bort';\r
                removeButton.className = 'remove-button';\r
                removeButton.onclick = function() {\r
                    removeItemFromCart(item);\r
                };\r
                li.appendChild(removeButton);\r
                cartItemsList.appendChild(li);\r
            });\r
        }\r
\r
        function removeItemFromCart(item) {\r
            var index = cartItems.indexOf(item);\r
            if (index !== -1) {\r
                cartItems.splice(index, 1);\r
                displayCartItems();\r
            }\r
        }`),this.h()},l(h){d=n(h,"HEAD",{});var v=o(d);or=n(v,"META",{charset:!0}),fr=c(v),Z=n(v,"META",{name:!0,content:!0}),hr=c(v),$=n(v,"TITLE",{});var xt=o($);xr=m(xt,"Tvåans Pizzeria"),xt.forEach(a),br=c(v),rr=n(v,"STYLE",{});var bt=o(rr);Ir=m(bt,`body {\r
            margin: 0;\r
            padding: 0;\r
            font-family: 'Dancing Script', cursive;\r
        }\r
        .header {\r
            background-image: url('pizzeria.jpg');\r
            background-size: cover;\r
            background-position: center top;\r
            text-align: center;\r
            padding: 50px 0;\r
            color: white;\r
            font-size: 36px;\r
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);\r
            text-decoration: underline; \r
        }\r
        .products-container {\r
            text-align: center;\r
            margin-top: 20px;\r
        }\r
        .product {\r
            margin: 30px;\r
            display: inline-block;\r
            position: relative;\r
        }\r
        .product img {\r
            width: 200px;\r
            height: 200px;\r
            border: 2px solid #ccc;\r
            transition: filter 0.3s ease;\r
        }\r
        .product img:hover {\r
            filter: brightness(80%);\r
        }\r
        .product-name {\r
            position: absolute;\r
            bottom: 10px;\r
            left: 50%;\r
            transform: translateX(-50%);\r
            background-color: rgba(255, 255, 255, 0.7);\r
            padding: 5px 10px;\r
            color: black;\r
            font-size: 14px;\r
            border-radius: 5px;\r
            white-space: nowrap;\r
        }\r
        .cart-button {\r
            position: fixed;\r
            top: 20px;\r
            right: 20px;\r
            cursor: pointer;\r
            z-index: 999;\r
        }\r
        .cart-popup {\r
            position: fixed;\r
            top: 50%;\r
            left: 50%;\r
            transform: translate(-50%, -50%);\r
            background: #f9f9f9;\r
            padding: 20px;\r
            border: 2px solid #ccc;\r
            border-radius: 5px;\r
            z-index: 999;\r
            display: none;\r
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\r
            max-width: 300px;\r
            width: 100%;\r
        }\r
        .cart-popup-close {\r
            position: absolute;\r
            top: 10px;\r
            right: 10px;\r
            cursor: pointer;\r
            color: #666;\r
            font-size: 20px;\r
        }\r
        .cart-item {\r
            margin-bottom: 10px;\r
            display: flex;\r
            justify-content: space-between;\r
            align-items: center;\r
        }\r
        .remove-button {\r
            background-color: #ff5a5f;\r
            color: white;\r
            border: none;\r
            padding: 5px 10px;\r
            border-radius: 5px;\r
            cursor: pointer;\r
        }\r
        .remove-button:hover {\r
            background-color: #e30000;\r
        }`),bt.forEach(a),_r=c(v),tr=n(v,"LINK",{href:!0,rel:!0}),v.forEach(a),ir=c(h),p=n(h,"BODY",{});var g=o(p);H=n(g,"DIV",{class:!0});var It=o(H);kr=m(It,"Tvåans Pizzeria"),It.forEach(a),yr=c(g),w=n(g,"DIV",{style:!0});var _t=o(w);Er=m(_t,"Vad är du sugen på? Klicka på den produkt du vill ha för att lägga den i kundvagnen!"),_t.forEach(a),Cr=c(g),s=n(g,"DIV",{class:!0});var l=o(s);b=n(l,"DIV",{class:!0});var cr=o(b);P=n(cr,"IMG",{src:!0,alt:!0,onclick:!0}),Br=c(cr),X=n(cr,"DIV",{class:!0});var kt=o(X);Dr=m(kt,"Pepperoni"),kt.forEach(a),cr.forEach(a),wr=c(l),I=n(l,"DIV",{class:!0});var sr=o(I);T=n(sr,"IMG",{src:!0,alt:!0,onclick:!0}),Pr=c(sr),q=n(sr,"DIV",{class:!0});var yt=o(q);Tr=m(yt,"Caligione"),yt.forEach(a),sr.forEach(a),Vr=c(l),_=n(l,"DIV",{class:!0});var lr=o(_);V=n(lr,"IMG",{src:!0,alt:!0,onclick:!0}),zr=c(lr),A=n(lr,"DIV",{class:!0});var Et=o(A);Sr=m(Et,"Scotsumato"),Et.forEach(a),lr.forEach(a),Mr=c(l),k=n(l,"DIV",{class:!0});var dr=o(k);z=n(dr,"IMG",{src:!0,alt:!0,onclick:!0}),jr=c(dr),O=n(dr,"DIV",{class:!0});var Ct=o(O);Lr=m(Ct,"Smashed Burger"),Ct.forEach(a),dr.forEach(a),Gr=c(l),y=n(l,"DIV",{class:!0});var pr=o(y);S=n(pr,"IMG",{src:!0,alt:!0,onclick:!0}),Nr=c(pr),U=n(pr,"DIV",{class:!0});var Bt=o(U);Kr=m(Bt,"Bruscettos"),Bt.forEach(a),pr.forEach(a),Fr=c(l),E=n(l,"DIV",{class:!0});var ur=o(E);M=n(ur,"IMG",{src:!0,alt:!0,onclick:!0}),Hr=c(ur),Y=n(ur,"DIV",{class:!0});var Dt=o(Y);Xr=m(Dt,"Bucho"),Dt.forEach(a),ur.forEach(a),qr=c(l),C=n(l,"DIV",{class:!0});var mr=o(C);j=n(mr,"IMG",{src:!0,alt:!0,onclick:!0}),Ar=c(mr),R=n(mr,"DIV",{class:!0});var wt=o(R);Or=m(wt,"Colada"),wt.forEach(a),mr.forEach(a),Ur=c(l),B=n(l,"DIV",{class:!0});var vr=o(B);L=n(vr,"IMG",{src:!0,alt:!0,onclick:!0}),Yr=c(vr),J=n(vr,"DIV",{class:!0});var Pt=o(J);Rr=m(Pt,"Sagrito"),Pt.forEach(a),vr.forEach(a),Jr=c(l),D=n(l,"DIV",{class:!0});var gr=o(D);G=n(gr,"IMG",{src:!0,alt:!0,onclick:!0}),Qr=c(gr),Q=n(gr,"DIV",{class:!0});var Tt=o(Q);Wr=m(Tt,"Buena"),Tt.forEach(a),gr.forEach(a),l.forEach(a),Zr=c(g),N=n(g,"DIV",{class:!0,onclick:!0});var Vt=o(N);K=n(Vt,"IMG",{src:!0,alt:!0,width:!0}),Vt.forEach(a),$r=c(g),f=n(g,"DIV",{class:!0,id:!0});var W=o(f);F=n(W,"DIV",{class:!0,onclick:!0});var zt=o(F);rt=m(zt,"X"),zt.forEach(a),tt=c(W),er=n(W,"H2",{});var St=o(er);et=m(St,"Kundvagn"),St.forEach(a),nt=c(W),nr=n(W,"UL",{id:!0}),o(nr).forEach(a),W.forEach(a),at=c(g),ar=n(g,"SCRIPT",{});var Mt=o(ar);ot=m(Mt,`var cartItems = [];\r
\r
        function addToCart(productName) {\r
            cartItems.push(productName);\r
            alert('Produkten "' + productName + '" har lagts till i kundvagnen.');\r
        }\r
\r
        function toggleCartPopup() {\r
            var cartPopup = document.getElementById('cartPopup');\r
            if (cartPopup.style.display === 'block') {\r
                cartPopup.style.display = 'none';\r
            } else {\r
                displayCartItems();\r
                cartPopup.style.display = 'block';\r
            }\r
        }\r
\r
        function displayCartItems() {\r
            var cartItemsList = document.getElementById('cartItems');\r
            cartItemsList.innerHTML = '';\r
            cartItems.forEach(function(item) {\r
                var li = document.createElement('li');\r
                li.textContent = item;\r
                var removeButton = document.createElement('button');\r
                removeButton.textContent = ' Ta bort';\r
                removeButton.className = 'remove-button';\r
                removeButton.onclick = function() {\r
                    removeItemFromCart(item);\r
                };\r
                li.appendChild(removeButton);\r
                cartItemsList.appendChild(li);\r
            });\r
        }\r
\r
        function removeItemFromCart(item) {\r
            var index = cartItems.indexOf(item);\r
            if (index !== -1) {\r
                cartItems.splice(index, 1);\r
                displayCartItems();\r
            }\r
        }`),Mt.forEach(a),g.forEach(a),this.h()},h(){t(or,"charset","UTF-8"),t(Z,"name","viewport"),t(Z,"content","width=device-width, initial-scale=1.0"),t(tr,"href","https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap"),t(tr,"rel","stylesheet"),t(H,"class","header"),jt(w,"text-align","center"),jt(w,"margin-bottom","20px"),x(P.src,st="pepperoni.jpg")||t(P,"src",st),t(P,"alt","Pepperoni"),t(P,"onclick","addToCart('Pepperoni')"),t(X,"class","product-name"),t(b,"class","product"),x(T.src,lt="caligione.jpg")||t(T,"src",lt),t(T,"alt","Caligione"),t(T,"onclick","addToCart('Caligione')"),t(q,"class","product-name"),t(I,"class","product"),x(V.src,dt="scotsumato.jpg")||t(V,"src",dt),t(V,"alt","Scotsumato"),t(V,"onclick","addToCart('Scotsumato')"),t(A,"class","product-name"),t(_,"class","product"),x(z.src,pt="burger.jpg")||t(z,"src",pt),t(z,"alt","Smashed Burger"),t(z,"onclick","addToCart('Smashed Burger')"),t(O,"class","product-name"),t(k,"class","product"),x(S.src,ut="fries.jpg")||t(S,"src",ut),t(S,"alt","Bruscettos"),t(S,"onclick","addToCart('Bruscettos')"),t(U,"class","product-name"),t(y,"class","product"),x(M.src,mt="steak.jpg")||t(M,"src",mt),t(M,"alt","Bucho"),t(M,"onclick","addToCart('Bucho')"),t(Y,"class","product-name"),t(E,"class","product"),x(j.src,vt="colada.jpg")||t(j,"src",vt),t(j,"alt","Colada"),t(j,"onclick","addToCart('Colada')"),t(R,"class","product-name"),t(C,"class","product"),x(L.src,gt="sagrito.jpg")||t(L,"src",gt),t(L,"alt","Sagrito"),t(L,"onclick","addToCart('Sagrito')"),t(J,"class","product-name"),t(B,"class","product"),x(G.src,ft="buena.jpg")||t(G,"src",ft),t(G,"alt","Buena"),t(G,"onclick","addToCart('Buena')"),t(Q,"class","product-name"),t(D,"class","product"),t(s,"class","products-container"),x(K.src,ht="Kundvagn.png")||t(K,"src",ht),t(K,"alt","Shopping Cart"),t(K,"width","50"),t(N,"class","cart-button"),t(N,"onclick","toggleCartPopup()"),t(F,"class","cart-popup-close"),t(F,"onclick","toggleCartPopup()"),t(nr,"id","cartItems"),t(f,"class","cart-popup"),t(f,"id","cartPopup")},m(h,v){it(h,d,v),r(d,or),r(d,fr),r(d,Z),r(d,hr),r(d,$),r($,xr),r(d,br),r(d,rr),r(rr,Ir),r(d,_r),r(d,tr),it(h,ir,v),it(h,p,v),r(p,H),r(H,kr),r(p,yr),r(p,w),r(w,Er),r(p,Cr),r(p,s),r(s,b),r(b,P),r(b,Br),r(b,X),r(X,Dr),r(s,wr),r(s,I),r(I,T),r(I,Pr),r(I,q),r(q,Tr),r(s,Vr),r(s,_),r(_,V),r(_,zr),r(_,A),r(A,Sr),r(s,Mr),r(s,k),r(k,z),r(k,jr),r(k,O),r(O,Lr),r(s,Gr),r(s,y),r(y,S),r(y,Nr),r(y,U),r(U,Kr),r(s,Fr),r(s,E),r(E,M),r(E,Hr),r(E,Y),r(Y,Xr),r(s,qr),r(s,C),r(C,j),r(C,Ar),r(C,R),r(R,Or),r(s,Ur),r(s,B),r(B,L),r(B,Yr),r(B,J),r(J,Rr),r(s,Jr),r(s,D),r(D,G),r(D,Qr),r(D,Q),r(Q,Wr),r(p,Zr),r(p,N),r(N,K),r(p,$r),r(p,f),r(f,F),r(F,rt),r(f,tt),r(f,er),r(er,et),r(f,nt),r(f,nr),r(p,at),r(p,ar),r(ar,ot)},p:ct,i:ct,o:ct,d(h){h&&a(d),h&&a(ir),h&&a(p)}}}class Xt extends Gt{constructor(d){super(),Nt(this,d,null,Ft,Kt,{})}}export{Xt as default};
