<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar e Recuperar Do LocalStorage</title>
</head>
<body>

    <button type="button" onclick="sendServer()">Sincronizar</button>
   
    
    <p><a href="./SaveRemove/index.php">Salve String </a></p>
    <p><a href="./SaveRemove/exemplo3.php">Salve Objeto </a></p>
    
     <h1>Salvar do Form No LocalStorage</h1>
    <h2>E Depois no DB</h2>
   
    <span id="message"></span>

    <form id="form">
        <label for="">Nome: </label>
        <input type="text" name="name" id="username" /> <br><br>

        <label for="">Email: </label>
        <input type="email" name="email" id="email" /> <br><br>
       
        <input type="submit" value="Enviar" /> <br><br>
    
    </form>

    <div>
        <span id="response"></span>
    </div>

    <script src="./js/main.js"></script>
    
</body>
</html>