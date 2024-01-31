function changeLangSignup() {
    var elt = document.getElementById("lang");

    if (elt.value.localeCompare("english") === 0) {
        document.getElementById("email").placeholder = "Email";
        document.getElementById("fullname").placeholder = "Fullname";
        document.getElementById("username").placeholder = "Username";
        document.getElementById("password").placeholder = "Password";
        document.getElementById("signin").innerHTML = "Log in";
        document.getElementById("aboutus").innerHTML = "About us";
    }
    if (elt.value.localeCompare("french") === 0) {
        document.getElementById("email").placeholder = "E-mail";
        document.getElementById("fullname").placeholder = "Nom complet";
        document.getElementById("username").placeholder = "Nom d'utilisateur";
        document.getElementById("password").placeholder = "Mot de passe";
        document.getElementById("signin").innerHTML = "Connectez-vous";
        document.getElementById("aboutus").innerHTML = "A propos";
    }
}

changeLangSignup();