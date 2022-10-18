let form = document.getElementById('form');



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