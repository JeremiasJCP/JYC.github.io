function diasSinVernos(){
    // Define la primera fecha como 18 de mayo de 2022
    var fechaUno = new Date(2023, 1, 27); // El mes se indica desde 0 (enero) hasta 11 (diciembre)  la fecha real es 28 de febrero del 2023, se coloca 27 ya que en programcion empezamos a contar desde cero
    
    // Obtiene la fecha actual
    var fechaDos = new Date();
    
    // Calcula la cantidad de días entre las dos fechas
    var diferencia = fechaDos.getTime() - fechaUno.getTime(); // getTime() devuelve la cantidad de milisegundos desde el 1 de enero de 1970
    var cantidadDias = Math.floor(diferencia / (1000 * 3600 * 24)); // Convierte los milisegundos a días
    
    // Actualiza el contenido del elemento p con el resultado
    cantidadDias = cantidadDias + " Días";

    document.getElementById("diasSinVernos").textContent = cantidadDias;

}

function DiasJuntos(){
    // Define la primera fecha como 18 de mayo de 2022
    var fecha1 = new Date(2022, 4, 18); // El mes se indica desde 0 (enero) hasta 11 (diciembre)

    // Obtiene la fecha actual
    var fecha2 = new Date();

    // Calcula la cantidad de días entre las dos fechas
    var diferencia = fecha2.getTime() - fecha1.getTime(); // getTime() devuelve la cantidad de milisegundos desde el 1 de enero de 1970
    var cantidadDias = Math.floor(diferencia / (1000 * 3600 * 24)); // Convierte los milisegundos a días

    // Actualiza el contenido del elemento p con el resultado
    cantidadDias = cantidadDias + " Días"

    document.getElementById("diferencia-dias").textContent = cantidadDias;
    diasSinVernos()
    calcularEdadYMostrar('2005-02-17'); // Reemplaza '1990-01-01' con tu fecha de nacimiento
}


function calcularEdadYMostrar(fechaNacimiento) {
    var hoy = new Date();
    var cumpleanos = new Date(fechaNacimiento);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    // Encuentra el elemento con el ID proporcionado y muestra la edad en él
    var elemento = document.getElementById("CuantosAñosTenemos");
    if (elemento) {
        elemento.innerText = edad + " Años";
    }
}



window.addEventListener('load', DiasJuntos)