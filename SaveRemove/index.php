<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar e Recuperar Do LocalStorage</title>
</head>
<body>
    
    <p><a href="./index.php">Salve String </a></p>
    <p><a href="./exemplo3.php">Salve Objeto </a></p>


    <h1>Salvar LocalStorage</h1>
    
    <h2>Dados do Local Storage</h2>
    <span id="res"></span>

<script>
    saveLocalStorage();

    function saveLocalStorage() {
        
        //Salvar o item no localStorage -salvar localmente-
        localStorage.setItem('user','Obito');
        localStorage.setItem('email', 'email');

        // Recuperar do localStorage 
        let user = localStorage.getItem('user');
        let email= localStorage.getItem('email');

        console.log('User :' + user);
        console.log('Email :' + email);

        //Enviar para o html 
        let res = document.getElementById('res');

        res.innerHTML = "Nome: " + user + "<br> Email: " + email +"<br>";
        
    }

</script>
    
</body>
</html>