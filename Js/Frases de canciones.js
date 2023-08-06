var salidaCancion;
 var canciones = [
    `"Tu y yo brillamos en el cielo como estrellas".` ,
    `"Mas canciones 1".` ,
    `"Mas canciones 2".` ,
    `"Mas canciones 3".` ,
    `"Mas canciones 4".` 
]

function seleccionarLetraCancion(){
    var numeroCanciones = canciones.length;
    var selectorDeCancion = Math.floor(Math.random() * numeroCanciones);
    salidaCancion = canciones[selectorDeCancion];
}

function enviarCancion(){
    seleccionarLetraCancion()
    document.getElementById("frase-Cancion").innerHTML = salidaCancion
}

window.addEventListener('load', enviarCancion)