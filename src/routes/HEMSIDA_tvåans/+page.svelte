
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tvåans Pizzeria</title>

    <style>
        body {
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
        }
    </style>

    <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap" rel="stylesheet">
</head>

<body>
    <div class="header">
        Tvåans Pizzeria
    </div>
    <div style="text-align: center; margin-bottom: 20px;">Vad är du sugen på? Klicka på den produkt du vill ha för att lägga den i kundvagnen!</div>
    
    <div class="products-container">
        <div class="product">
            <img src="pepperoni.jpg" alt="Pepperoni" onclick="addToCart('Pepperoni')">
            <div class="product-name">Pepperoni</div>
        </div>
        <div class="product">
            <img src="caligione.jpg" alt="Caligione" onclick="addToCart('Caligione')">
            <div class="product-name">Caligione</div>
        </div>
        <div class="product">
            <img src="scotsumato.jpg" alt="Scotsumato" onclick="addToCart('Scotsumato')">
            <div class="product-name">Scotsumato</div>
        </div>
        <div class="product">
            <img src="burger.jpg" alt="Smashed Burger" onclick="addToCart('Smashed Burger')">
            <div class="product-name">Smashed Burger</div>
        </div>
        <div class="product">
            <img src="fries.jpg" alt="Bruscettos" onclick="addToCart('Bruscettos')">
            <div class="product-name">Bruscettos</div>
        </div>
        <div class="product">
            <img src="steak.jpg" alt="Bucho" onclick="addToCart('Bucho')">
            <div class="product-name">Bucho</div>
        </div>
        <div class="product">
            <img src="colada.jpg" alt="Colada" onclick="addToCart('Colada')">
            <div class="product-name">Colada</div>
        </div>
        <div class="product">
            <img src="sagrito.jpg" alt="Sagrito" onclick="addToCart('Sagrito')">
            <div class="product-name">Sagrito</div>
        </div>
        <div class="product">
            <img src="buena.jpg" alt="Buena" onclick="addToCart('Buena')">
            <div class="product-name">Buena</div>
        </div>
    </div>

    <div class="cart-button" onclick="toggleCartPopup()">
        <img src="Kundvagn.png" alt="Shopping Cart" width="50">
    </div>

    <div class="cart-popup" id="cartPopup">
        <div class="cart-popup-close" onclick="toggleCartPopup()">X</div>
        <h2>Kundvagn</h2>
        <ul id="cartItems"></ul>
    </div>

    <script>
        var cartItems = [];

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
        }
    </script>
</body>
