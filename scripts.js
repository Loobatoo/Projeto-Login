console.log("ok")

const Login = document.querySelector("#Input-Login")
const SignIn = document.querySelector("#Input-Sign")

const Advice = document.querySelector(".Advice");

const SignInAdvice = document.querySelector(".Sign-In-Advice");
const LoginAdvice = document.querySelector(".Login-Advice");


Login.addEventListener("click", () => {
    Advice.classList.toggle("Active");

    SignInAdvice.style.display = "none";
    LoginAdvice.style.display = "flex";

});

SignIn.addEventListener("click", () => {
    Advice.classList.toggle("Active");

    SignInAdvice.style.display = "flex";
    LoginAdvice.style.display = "none";
});

