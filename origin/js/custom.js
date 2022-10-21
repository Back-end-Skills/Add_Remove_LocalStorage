// Receber o seletor do formulário
var cadForm = document.getElementById("cad-usuario-form");

// Aguardar o usuário clicar no botão cadastrar do formulário
cadForm.addEventListener("submit", (e) => {

    // Não recarregar a página
    e.preventDefault();

    // Receber os dados do formulário
    var nome_usuario = document.getElementById("nome_usuario").value;
    var email_usuario = document.getElementById("email_usuario").value;
    //console.log(nome_usuario);
    //console.log(email_usuario);

    // O Array() é usado para criar Array de objetos
    let usuarios = new Array();

    // Verifica se a propriedade no localStorage
    if (localStorage.hasOwnProperty("usuarios")) {
        // Recuperar os valores da propriedade usuarios do localStorage
        // Converte de String para Object
        usuarios = JSON.parse(localStorage.getItem("usuarios"));
    }

    // Adiciona um novo objeto no array criado
    usuarios.push({ nome_usuario, email_usuario });

    // Salva no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    // Enviar para o HTML o usuário salvo no localStorage
    document.getElementById("conteudo").insertAdjacentHTML('beforeend', "Nome: " + nome_usuario + "<br>E-mail: " + email_usuario + "<br><hr>");

    // Enviar a mensagem de sucesso para o HTML
    document.getElementById("msg").innerHTML = "<p style='color: green'>Usuário salvo no localStorage!</p>";
});

// Enviar as informações do localStorage para um arquivo/API
async function enviarServidor() {

    // Acessa o IF quando ha dados no localStorage para enviar para o banco de dados
    if (localStorage.hasOwnProperty("usuarios")) {

        // Recuperar os usuários do localStorage
        let dadosLocalstorage = JSON.parse(localStorage.getItem("usuarios"));
        //console.log(dadosLocalstorage);

        // Usar o fetch para fazer a requisição para um arquivo/API
        await fetch("editar.php", {
            method: "POST",
            body: JSON.stringify(dadosLocalstorage),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((resposta) => {
            //console.log(resposta);
            
            // Ler a mensagem de resposta do arquivo/API, criar um Promise
            resposta.json().then(data => {
                //console.log(data);

                // Enviar a mensagem de sucesso ou erro para o HTML
                document.getElementById("msg").innerHTML = data.msg;
            });


            // Acessa o IF quando o arquivo/API retornar sucesso
            if(resposta.status == 200){

                // Remover os registros do localStorage
                localStorage.removeItem("usuarios");

                // Limpar os registros do HTML
                document.getElementById("conteudo").innerHTML = "";
            }
        });

    } else {
        // Enviar a mensagem de erro para o HTML
        document.getElementById("msg").innerHTML = "<p style='color: #f00'>Erro: Nenhum registro encontrado para sicronizar!</p>";
    }
}