const hideBox = document.getElementById("hide")
const registerBtn = document.getElementById("signup_box");
const loginBtn = document.getElementById("signin_box");

registerBtn.addEventListener('click', () => {
    hideBox.classList.add("active");
    loginBtn.classList.add("active");
    registerBtn.classList.add("active");
    document.getElementById("hide_box").innerHTML = "Have an account?";
});

loginBtn.addEventListener('click', () => {
    hideBox.classList.remove("active");
    loginBtn.classList.remove("active");
    registerBtn.classList.remove("active");
    document.getElementById("hide_box").innerHTML = "Don't have an account?";
});

const signinBtn = document.getElementById("login");
const signupBtn = document.getElementById("register");


// signinBtn.addEventListener('click', () => {
//     var input = document.getElementById("email").value.trim();

//     alert("bojnour");
//     if (!input.length) {
//         signinBtn.disabled = true;
//     }
//     signinBtn.disabled = false;
// });

// function clickFunction() {


//     alert(input.length);
// }