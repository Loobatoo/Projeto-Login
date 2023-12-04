const Login = document.querySelector("#Input-Login")
const SignIn = document.querySelector("#Input-Sign")

const Advice = document.querySelector(".Advice");

const SignInAdvice = document.querySelector(".Sign-In-Advice");
const LoginAdvice = document.querySelector(".Login-Advice");

const InteractiveLogin = document.querySelector(".Login")
const InteractiveSignIn = document.querySelector(".Sign-in")


Login.addEventListener("click", () => {
    Advice.classList.toggle("Active");

    SignInAdvice.style.display = "none";
    LoginAdvice.style.display = "flex";

    InteractiveLogin.style.opacity = "1";
    InteractiveSignIn.style.opacity = "0";
});

SignIn.addEventListener("click", () => {
    Advice.classList.toggle("Active");

    SignInAdvice.style.display = "flex";
    LoginAdvice.style.display = "none";

    InteractiveSignIn.style.opacity = "1";
    InteractiveLogin.style.opacity = "0";
});


