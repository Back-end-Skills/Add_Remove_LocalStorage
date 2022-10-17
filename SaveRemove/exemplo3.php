<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salvar e Recuperar Do LocalStorage</title>
</head>
<body>
   
    
    <p><a href="./index.php">Salve String </a></p>
    <p><a href="./exemplo4.php">Salve do formulário </a></p>
    
     <h1>Salvar Obejcto No LocalStorage</h1>
    <h2>Dados do Local Storage</h2>
    <span id="res"></span>

<script>
    saveLocalStorage();

    function saveLocalStorage() {
        
        //Salvar o item objecto no localStorage -salvar localmente-
        //Convertar pra string com JSON.stringify()
        localStorage.setItem(
            "date_user", 
            JSON.stringify({
                user: 'naruto uzumaki',
                email: 'uzumaki@gmail.com'})
            
        );

        // Recuperar do localStorage como String 
        let date_user = localStorage.getItem('date_user');
        //console.log('String :' + date_user);
       

        //Converter a String JSOn em Objecto Javascript
        obj_date_user = JSON.parse(date_user);
        //console.log(obj_date_user);


        //Enviar para o html 
        let res = document.getElementById('res');

        res.innerHTML = "Nome: " + obj_date_user.user + "<br> Email: " +obj_date_user.email +"<br>";

        
    }

</script>
    
</body>
</html>