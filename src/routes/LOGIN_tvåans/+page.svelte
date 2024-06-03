<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap">
    <style>
        
        body {
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
        }
    </style>
    </head>
    <body>
    
    
    <div style="background-image: url('mångapizzor.jpg'); /* Platsen för din bild */ background-size: cover; width: 100vw; height: 100vh; position: fixed; top: 0; left: 0;"></div>
    
    
    <button class="open-btn" onclick="openPopup()">Vänligen logga in här!</button>
    
    
    <div id="popup" class="popup-container">
        <div class="popup-content">
            
            <span class="close-btn" onclick="closePopup()">&times;</span>
            
            <form id="login-form" onsubmit="return false;">
                <h2>Login</h2>
                <input type="text" id="username" placeholder="Användarnamn" required><br>
                <input type="password" id="password" placeholder="Lösenord" required><br>
                <button type="submit" class="login-btn" onclick="login()">Logga in</button>
            </form>
        </div>
    </div>
    
    <script>
        
        function openPopup() {
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
        }
    </script>
    
    </body>