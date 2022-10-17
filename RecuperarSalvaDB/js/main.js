
let form = document.getElementById('form');


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let user = document.getElementById('name').value;
    // console.log(user);
    let _email = document.getElementById('email').value;
    // console.log(email);

    // SALVAR NO localStorage
    localStorage.setItem("usuario", JSON.stringify({
        username: user,
        email: _email
    }));

    //Recorve localStorage
    var usuario_localStorage = localStorage.getItem("usuario");
    // console.log(usuario_localStorage);

    //Converter string JSON pra object javascript
    let dados_user =JSON.parse(usuario_localStorage);
    // console.log(dados_user);

    //Enviar pra o html
    let res = document.getElementById('response');

    res.innerHTML = "Nome : " + dados_user.username + 
        "<br>Email : " + dados_user.email + 
        "<br> <br><br>";

    //Remover 
    //localStorage.removeItem("usuario")

});

// Enviar Informações do localStorage para um arquivo/API
function sendServer() {
    alert('salvar!');
}