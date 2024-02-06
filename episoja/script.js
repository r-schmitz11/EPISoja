function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = './component/Site.js';
        } else {
            document.getElementById('error-message').innerText = 'Identifiants incorrects';
        }
    })
    .catch(error => {
        console.error('Erreur lors de la connexion:', error);
    });
}
