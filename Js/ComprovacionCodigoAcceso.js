const contenedor = document.getElementById("respuesta");

function verificarFechas() {
    const fechaUno = document.getElementById("fechaImportanteUNO").value;
    const fechaDos = document.getElementById("fechaImportanteDOS").value;
    const fechaTres = document.getElementById("fechaImportanteTRES").value;

    // Convertimos las fechas a objetos Date
    const dateUno = new Date(fechaUno);
    const dateDos = new Date(fechaDos);
    const dateTres = new Date(fechaTres);

    // Validamos las fechas
    if (dateUno.getDate() === 18 && dateUno.getMonth() === 4 && dateUno.getFullYear() === 2022 &&
        dateDos.getDate() === 8 && dateDos.getMonth() === 7 && dateDos.getFullYear() === 2022 &&
        dateTres.getDate() === 24 && dateTres.getMonth() === 0 && dateTres.getFullYear() === 2023) {
        // console.log("Las fechas son correctas.");
        // Si todas las fechas son correctas, asignamos el valor a la variable contenedorrespuestas
        const contenedorrespuestas = 180824;
        // console.log("contenedorrespuestas =", contenedorrespuestas);
        contenedor.style.border = "1px solid green"
        contenedor.style.backgroundColor = "rgba(88, 215, 88, 0.387)";
        escribirNumero(contenedorrespuestas);
    } else {
        // console.log("Al menos una de las fechas está incorrecta.");
        contenedor.style.border = "1px solid red"
        contenedor.style.backgroundColor = "rgba(215, 88, 88, 0.387)";

        generarNumeroAleatorio()
    }
}


function generarNumeroAleatorio() {
    const min = 100000; // Valor mínimo de 6 cifras
    const max = 999999; // Valor máximo de 6 cifras (excluido)

    // Genera un número aleatorio entre min (incluido) y max (excluido)
    const numeroAleatorio = Math.floor(Math.random() * (max - min) + min);

    escribirNumero(numeroAleatorio);
}

function escribirNumero(numero) {
    // console.log("escribiendo numero...")
    const contenedor = document.getElementById("respuesta");
    contenedor.textContent = numero;
}

// Asociamos la función al botón "Verificar"
document.getElementById("verificarFechas").addEventListener("click", verificarFechas);