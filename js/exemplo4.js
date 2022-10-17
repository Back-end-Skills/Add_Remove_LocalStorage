let form = document.getElementById('form');

form.addEventListener('submit', async (event) => {
    event.preventDefault();
    let user = document.getElementById('name').value;
    console.log(user);
    let email = document.getElementById('email').value;
    console.log(email);
});