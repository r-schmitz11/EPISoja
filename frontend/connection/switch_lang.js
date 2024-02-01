function changeLang() {
    var elt = document.getElementById("lang");

    if (elt.value.localeCompare("english") === 0) {
        document.getElementById("signin_h1").innerHTML = "Sign In";
        document.getElementById("email").placeholder = "Email";
        document.getElementById("email2").placeholder = "Email";
        document.getElementById("password").placeholder = "Password";
        document.getElementById("password2").placeholder = "Password";
        document.getElementById("login").innerHTML = "SIGN IN";
        document.getElementById("signup_box").innerHTML = "SIGN UP";
        document.getElementById("signup_h1").innerHTML = "Create your account";
        document.getElementById("username").placeholder = "Username";
        document.getElementById("register").innerHTML = "SIGN UP";
        document.getElementById("signin_box").innerHTML = "SIGN IN";
        document.getElementById("aboutus").innerHTML = "About us";
    }
    if (elt.value.localeCompare("french") === 0) {
        document.getElementById("signin_h1").innerHTML = "Connectez-vous";
        document.getElementById("email").placeholder = "E-mail";
        document.getElementById("email2").placeholder = "E-mail";
        document.getElementById("password").placeholder = "Mot de passe";
        document.getElementById("password2").placeholder = "Mot de passe";
        document.getElementById("login").innerHTML = "SE CONNECTER";
        document.getElementById("signup_box").innerHTML = "Inscrivez-vous";
        document.getElementById("signup_h1").innerHTML = "Créer votre compte";
        document.getElementById("username").placeholder = "Nom d'utilisateur";
        document.getElementById("register").innerHTML = "S'INSCRIRE";
        document.getElementById("signin_box").innerHTML = "Connectez-vous";
        document.getElementById("aboutus").innerHTML = "A propos";
    }
}

changeLang();