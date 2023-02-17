let email = document.getElementById("email");
let botaoEnvio = document.getElementById("btn");
let alertaInvalido = document.querySelector(".alerta-invalido");


botaoEnvio.addEventListener('click', function(){
    if (email.value === "") {
        alertaInvalido.classList.add("campo-invalido");
    }else{
        alertaInvalido.classList.remove("campo-invalido");
    }
});