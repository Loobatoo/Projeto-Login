const BtnConfirmLogin = document.querySelector("#Login-Login");
const BtnConfirmSignIn = document.querySelector("#SignIn-SignIn");

const LoginUsername = document.querySelector("#Usuario-Login");
const LoginPassword = document.querySelector("#Senha-Login");

const SignInUsername = document.querySelector("#Usuario-SignIn");
const SignInPassword = document.querySelector("#Senha-SignIn");
const MailPassword = document.querySelector("#E-mail-SignIn");

let UsuarioAtual = "xxx";
let SenhaAtual = "xxx";
let Email =  "";

BtnConfirmSignIn.addEventListener("click", () => {

    if(SignInUsername.value === ""){
        console.log("Username vazio!")
    } else if(SignInPassword.value === ""){
        console.log("Password vazio!")
    } else if(MailPassword.value === ""){
        console.log("Mail vazio!")
    } else {
        UsuarioAtual = SignInUsername.value;
        SenhaAtual = SignInPassword.value;
        Email = MailPassword.value;

        alert("Registrado!")

        console.log(UsuarioAtual)
        console.log(SenhaAtual)
        console.log(Email)

    }

})

BtnConfirmLogin.addEventListener("click", () => {

    if(LoginUsername.value != UsuarioAtual){
        console.log("Username incorreto!")
    } else if(LoginPassword.value != SenhaAtual){
        console.log("Password incorreto!")
    } else {
        alert("logado!")
    }

})