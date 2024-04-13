//Cambio de portadas del index

let contenedorBotones1 = document.querySelector(".contenedorBotones1");

let contenedorGeneralBotonesPass = document.querySelector(".contenedorGeneralBotonesPass");

contenedorGeneralBotonesPass.style.display = "none";

document.getElementById("botonIrPassContenedorBotones1").addEventListener("click", function() {

contenedorBotones1.style.display = "none";
contenedorGeneralBotonesPass.style.display = "flex";
});

//Codigo de Acceso

const inputCodigoAcceso = document.getElementById('accessCode');
const botonVerificar = document.querySelector('.botonVerificar');
const urlDestino = "./html/Principal.html"; // Reemplaza con la URL a la que deseas redirigir

botonVerificar.addEventListener('click', () => {
  const codigoIntroducido = inputCodigoAcceso.value;
  const codigoValido = "6392"; // Código de acceso válido

  if (codigoIntroducido === codigoValido) {
    window.location.href = urlDestino; // Redirección a la URL de destino
  } else {
    // Opcional: Mostrar un mensaje de error si el código es incorrecto
    alert('El código de acceso introducido es incorrecto.');
  }
});