var salidaCancion;
 var canciones = [
    `"Tu y yo brillamos en el cielo como estrellas".` ,

    
    `"Por ti daría todo en el mundo
    Por solo un segundo
    Por volverte a ver
    Todavía no paras de doler
    Y no sé si algún día vida vas a volver".` ,

    

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