var fecha = new Date();
var hoy = fecha.toLocaleDateString()

function mostrarSaludo() {


    var hora = fecha.getHours();
    var mensaje = "";

    if (hora >= 6 && hora < 12) {
        mensaje = "¡Buenos días, mi princesa!";
    } else if (hora >= 12 && hora < 18) {
        mensaje = "¡Buenas tardes, mi amor!";
    } else {
        mensaje = "¡Buenas noches, mol mio!";
        // Imagen de fondo para la noche 
    }

    var contenedorSaludo = document.getElementById("Titulo");
    contenedorSaludo.textContent = mensaje;

    // var contenedorImagen = document.getElementById("contenedorPrincipal");
    //  contenedorImagen.style.backgroundImage = "url('" + imagenFondo + "')"; 
}

function proximoAniversario() {
    let mensajeEntradaHearBienvenida = document.getElementById("H2HearBienvenida");
    let spanProximoAniversario = document.getElementById('numeroProximoAniversario')
    const fechaActual = new Date();
    const diaActual = fechaActual.getDate();
    // const diasRestantes = 18 - diaActual;
    const diasRestantes = 18 - diaActual;
    // console.log(diasRestantes);
    if (diasRestantes < 0) {
        // Si ya pasó el 18 de este mes, calculamos para el próximo mes
        const fechaProximoMes = new Date(fechaActual);
        fechaProximoMes.setMonth(fechaProximoMes.getMonth() + 1);
        fechaProximoMes.setDate(18);
        const diasEnProximoMes = Math.ceil((fechaProximoMes - fechaActual) / (1000 * 60 * 60 * 24));

        if (diasRestantes == 0) {
            mensajeEntradaHearBienvenida.innerHTML = "Feliz aniversario";
        } else {
            mensajeEntradaHearBienvenida.innerHTML = "Mi Consentida";
        }

        spanProximoAniversario.innerHTML = diasEnProximoMes;
    } else {
        console.log(diasRestantes);
        if (diasRestantes == 0) {
            mensajeEntradaHearBienvenida.innerHTML = "Feliz aniversario";
        } else {
            mensajeEntradaHearBienvenida.innerHTML = "My princces";
        }

        spanProximoAniversario.innerHTML = diasRestantes;
    }

}

proximoAniversario()
mostrarSaludo()