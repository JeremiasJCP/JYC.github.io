var salidaCancion;
 var canciones = [
    `"Tu y yo brillamos en el cielo como estrellas". (Como Estrellas - L.A. Young)` ,

    
    `"Por ti daría todo en el mundo,
    Por solo un segundo,
    Por volverte a ver.
    Todavía no paras de doler
    Y no sé, si algún día vida vas a volver". <br> (Amor - Cali y el Dandee)` ,

    

    `"Y aunque se pase toda mi vida yo te esperaré. Sé que en tus ojos todavía hay amor. Y tu mirada dice volveré." <br> (Yo t esperare - Cali y el Dandee)` ,

    
    `"Y no volverte a ver es mi promesa por romper, prefiero ser quien llora si eso te obliga a volver" <br>(La ultima Vez - Morat).` ,

    
    `"Para verte ganar, no me importa perder <br>(La última vez - Morat)."`,
    
    
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