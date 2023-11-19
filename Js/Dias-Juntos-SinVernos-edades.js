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

    document.getElementById("tiempoSinVernos").textContent = cantidadDias;

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
    cantidadDias = cantidadDias + " "

    document.getElementById("DiasJuntos").textContent = cantidadDias;
    diasSinVernos()
    calcularEdadYMostrar('2005-02-17'); // Reemplaza '1990-01-01' con tu fecha de nacimiento
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
    cantidadDias = cantidadDias + " "

    document.getElementById("DiasJuntos").textContent = cantidadDias;
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


function mesesDesde() {
    // Convertimos la fecha a un objeto Date
    let fechaObj = new Date('2022-05-18');
  
    // Obtenemos el mes de la fecha actual
    let mesActual = fechaObj.getMonth();
  
    // Obtenemos el mes de la fecha proporcionada
    let mesProvisto = fechaObj.getUTCMonth();
  
    // Calculamos la diferencia entre los dos meses
    let diferencia = mesActual - mesProvisto;
  
    // Si la diferencia es negativa, significa que la fecha proporcionada es posterior a la fecha actual
    // En ese caso, restamos 12 a la diferencia para obtener el número de meses que han pasado
    if (diferencia < 0) {
      diferencia += 12;
    }
  
    // Actualizamos el contenido del objeto
    
    // Devolvemos la diferencia
    // console.log(diferencia);
}

  function compararFechas() {
    // Crear objeto de fecha para la fecha actual
    var fechaActual = new Date();
    
    // Crear objeto de fecha para la fecha proporcionada
    var fechaDeterminada = new Date('2022-05-18');

    // Calcular la diferencia en meses
    var meses = fechaActual.getMonth() - fechaDeterminada.getMonth() 
                + (12 * (fechaActual.getFullYear() - fechaDeterminada.getFullYear()));

    document.getElementById("mesesJuntosPrincipal").textContent = meses;
    DiasJuntos()
}


window.addEventListener('load', compararFechas)