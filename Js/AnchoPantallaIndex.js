let contenedorGeneralBotonesPass = document.querySelector(".contenedorGeneralBotonesPass");
let contenedorBotones1 = document.querySelector(".contenedorBotones1");

function ejecutarSiPantallaGrande() {
    contenedorBotones1.style.display = "none";

    contenedorGeneralBotonesPass.style.display = "flex";
}

// Comprobar el ancho de la pantalla y ejecutar la función
window.addEventListener('resize', function() {
    const anchoPantalla = window.innerWidth;
    if (anchoPantalla >= 768) {
        ejecutarSiPantallaGrande();

    } else {
        contenedorGeneralBotonesPass.style.display = "none";
    }
});