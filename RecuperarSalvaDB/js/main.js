let form = document.getElementById('form');
const  msg = document.getElementById('message');
const  res = document.getElementById('response');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    

    // Array de objectos
    let usuarios = new Array();

    // Verifica se a propriedade no localStorage
    if (localStorage.hasOwnProperty("usuarios")) {
        // Recuperar os valores 

        //Coverter a string para object
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    // Add um novo object no array criado
    usuarios.push({
        username, 
        email
    });

    // Salva no localStorage         converter para string 
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    res.insertAdjacentHTML('beforeend', "Nome: "+ username +
        "<br> E-mail: " + email + "<br><hr>");

});

// Enviar Informações do localStorage para um arquivo/API
async function sendServer() {

   

    if (localStorage.hasOwnProperty("usuarios")) 
    {

        // Recuperar users do localStorage
        let dado_local = JSON.parse(localStorage.getItem("usuarios"));
       

        // Usar o fetch
        await fetch('editar.php', {
            method: "POST",
            body: JSON.stringify(dado_local),
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => {
            // console.log(res);
            // Promise 
            res.json().then(data => {
                // console.log(data);
                msg.innerHTML = data.err;
            });

            // arquivo API retorno
            if (res.status == 200) {
                localStorage.removeItem("usuarios");

                res.innerHTML = "";
            } 
        });

    } else {
        msg.innerHTML = "<p style='color:#f00'>Erro: nenhum registro!</p>";
    }
}