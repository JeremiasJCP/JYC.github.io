
var nota 
var notas = [
    `"Cada momento a tu lado es único, cada instante es maravilloso.  Nuestra historia aún no acaba, y es lo mejor de todo, ya que podemos  hacer que crezca más este amor."`,

    `"Aunque no puedo abrazarte en este momento,<br>
    quiero que sepas que siempre estás en mi corazón.<br>
    Eres la persona más importante de mi vida y te <br>
    amo con todo mi ser".` ,   
    
    `"Te volviste mi todo, Yeethanny. Por mas que Intente olvidarte, no puedo. Siempre estarás en mi corazón."` , 

    `"El amor que tenemos es tan fuerte que<br>
    ni la distancia puede separarnos. <br>
    Te amo y siempre estaré aquí para ti".` ,

    `"A pesar de la distancia, siento tu amor<br>
    en cada latido de mi corazón. <br>
    Gracias por hacer que cada día sea especial".` ,

    `"Cada vez que pienso en ti, mi corazón <br>
    se llena de amor y felicidad. Eres la mejor<br>
    parte de mi vida y no puedo esperar <br>
    a estar juntos de nuevo".`,

    `"Aunque no podamos estar juntos en persona,<br>
    mi amor por ti nunca se desvanece. <br>
    Siempre estás en mi mente y en mi corazón".`,

    `"Eres mi mejor amiga, mi compañera, mi todo. <br>
    Estoy tan agradecido de tenerte en mi vida y no<br>
    puedo esperar para crear más recuerdos juntos".`,

    `"Incluso a miles de kilómetros de distancia,<br>
    siento tu amor en mi corazón todos los días. <br>
    Te extraño y no puedo esperar a <br>
    volver a verte pronto".`,

    `"Cada día que pasa, <br>
    Te extraño  muchisimo mas. <br>
    Pero saber que tenemos <br>
    un amor tan fuerte y <br>
    verdadero me da la fuerza <br>
    para seguir adelante".`,

    `"Aunque estemos lejos, <br>
    el amor que siento por ti <br>
    nunca se desvanece. <br>
    Te extraño muchísimo <br>
    y espero poder abrazarte pronto".`,

    `"Te amo con todo lo que puede amar este corazón, princesa.".`,

    `"Y si un día no puedo estar contigo, recuerda que este 
    corazón es tuyo → ❤️. Que sin importar nada, siempre está 
    pensando en ti...".`,

    `"No importa que tan difícil sea, siempre estaré para ti mi amor,
    siempre tendrás a tu príncipe azul 💙👑, 
    tu mejor amigo y compañero💕.".`,

    `"No tengo muy claro que te gusto de mí en un principio,
     solo sé que te amo y pido que nunca te vayas de mi vida, 
     tú vuelves todo mejor, como me encantas,
    <br> <br>                                                                                         
    My princess".`,

    `"Bonito es poder explicar con dos palabras lo que siento por ti, bonito es que tú seas mi primer pensamiento por la mañana y el último al cerrar los ojos ✨. <br><br> Bonito es poder decir que siempre cuento contigo 🥹, que sin importar nada me ayudas, me mimas, me consientes, me entiendes, me regañas 🤭. Contigo lo quiero todo mi amor 😊, no quiero que sea temporal 😔, quiero que sea ♾.  Y si, ya lo dije, qué bonito es poder decir lo que sientes con dos palabras “Te Amo” 😍👑"`,



]

let mensajeEspera = "Un mensajito para mi princesita"
function notaAleatoria(){
    var numero = notas.length;
    var i = Math.floor(Math.random() * numero);
    nota= notas[i];
}

function actualizarNota() {
    document.getElementById("Nota").innerHTML = mensajeEspera;
    notaAleatoria();
    var nuevoContenido = nota;
    setTimeout(function() {
        document.getElementById("Nota").innerHTML = "Cargando tu mensaje";
        setTimeout(function() {
        document.getElementById("Nota").innerHTML = nota;
        },1000);
    },1000);
}

window.addEventListener('load', actualizarNota)