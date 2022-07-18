let campoEmail = document.getElementById("email");
let botaoDeEnvio = document.getElementById("btn");
let alertaInvalido = document.getElementsByClassName("alerta-invalido")[0];


botaoDeEnvio.addEventListener('click', function(){
    if (campoEmail.value === "") {
        alertaInvalido.classList.add("campo-invalido");
    }else{
        alertaInvalido.classList.remove("campo-invalido");
    }
});