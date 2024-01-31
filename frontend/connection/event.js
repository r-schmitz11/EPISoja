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


