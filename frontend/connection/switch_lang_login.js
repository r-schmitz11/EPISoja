function changeLangLogin() {
    var elt = document.getElementById("lang");

    if (elt.value.localeCompare("english") === 0) {
        document.getElementById("email").placeholder = "Email";
        document.getElementById("password").placeholder = "Password";
        document.getElementById("login").innerHTML = "Log in";
        document.getElementById("signup").innerHTML = "Sign up";
        document.getElementById("aboutus").innerHTML = "About us";
    }
    if (elt.value.localeCompare("french") === 0) {
        document.getElementById("email").placeholder = "E-mail";
        document.getElementById("password").placeholder = "Mot de passe";
        document.getElementById("login").innerHTML = "Se connecter";
        document.getElementById("signup").innerHTML = "Inscrivez-vous";
        document.getElementById("aboutus").innerHTML = "A propos";
    }
}

changeLangLogin();