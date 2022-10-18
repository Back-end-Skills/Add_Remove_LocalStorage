let form = document.getElementById('form');
var msg = document.getElementById('message');



form.addEventListener('submit', (event) => {
    event.preventDefault();

    
    let res = document.getElementById('response');
    let _username = document.getElementById('username').value;
    let _email = document.getElementById('email').value;

    // Array de objectos
    let usuarios = new Array();

    // Verifica se a propriedade no localStorage
    if (localStorage.hasOwnProperty('usuarios')) {
        // Recuperar os valores 

        //Coverter a string para object
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    }

    // Add um novo object no array criado
    usuarios.push({
        _username, 
        _email
    });

    // Salva no localStorage         converter para string 
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    res.insertAdjacentHTML('beforeend', "Nome: "+ _username +
        "<br> E-mail: " + _email + "<br><hr>");

});

// Enviar Informações do localStorage para um arquivo/API
async function sendServer() {

    if (localStorage.hasOwnProperty('usuarios')) 
    {

        // Recuperar users do localStorage
        let string_dado_local = localStorage.getItem("usuario");
        let objeto_dado_local = JSON.parse(string_dado_local);

        // Usar o fetch
        await fetch('editar.php', {
            method: "post",
            body: string_dado_local,
            headers: {
                "Content-type": "application/json"
            }
        }).then((res) => {
            // console.log(res);
            // Promise 
            res.json().then(data => {
                console.log(data);
                //msg.innerHTML = data.err;
            });

            // arquivo API retorno
            if (res.status == 200) {

            } else {
                
            }
        });

    } else {
        msg.innerHTML = "<p style='color:#f00'>Erro: nenhum registro!</p>";
    }
}