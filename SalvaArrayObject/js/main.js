let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let _email = document.getElementById('email').value;

    // Array de objectos
    let usuarios = new Array();

    // Verifica se a propriedade no localStorage
    if (localStorage.hasOwnProperty(usuarios)) {
        localStorage.getItem('usuarios');
    }
});