//Cambio de portadas del index

let contenedorBotones1 = document.querySelector(".contenedorBotones1");

let contenedorGeneralBotonesPass = document.querySelector(".contenedorGeneralBotonesPass");

let texCodigoIncorrecto = document.querySelector(".textPassIncorrecto");

let contenedorPrincipal = document.getElementById('contenedorMainIdex');



document.getElementById("botonIrPassContenedorBotones1").addEventListener("click", function() {
    contenedorGeneralBotonesPass.style.display = "flex";
    contenedorBotones1.style.display = "none";
    contenedorPrincipal.style.backgroundColor = '#ffffffb9';
});



//Codigo de Acceso

const inputCodigoAcceso = document.getElementById('accessCode');
const botonVerificar = document.querySelector('.botonVerificar');
const urlDestino = "./html/Principal.html"; // Reemplaza con la URL a la que deseas redirigir
const codigoValido = "6392";

botonVerificar.addEventListener('click', () => {
    const codigoIntroducido = inputCodigoAcceso.value;

    if (codigoIntroducido === codigoValido) {
        window.location.href = urlDestino;
    } else {
        texCodigoIncorrecto.style.display = "flex";
    }
});