var desplegar = document.getElementById("Distancia");
var efectoDistancia = 0;

function actualizarDistancia() {
    if (efectoDistancia >= 7120){
        return
    }

    desplegar.innerHTML = efectoDistancia + " Km";
    efectoDistancia = efectoDistancia + 30;

    if (efectoDistancia <= 7304) {
        setTimeout(actualizarDistancia, 1); // Espera 100 milisegundos antes de la próxima actualización
    }
}



var elementosContenedorDistancia = document.getElementById("elementos-contenedor-Distancia");
var timeoutId;

function VerDistancia() {
    elementosContenedorDistancia.style.display = "block";
    actualizarDistancia()
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        elementosContenedorDistancia.style.display = "none";
    }, 5000);
}

elementosContenedorDistancia.addEventListener("touchstart", function(event) {
    event.stopPropagation(); // Evitar que el toque se propague al documento
});

document.addEventListener("touchstart", function(event) {
    if (!elementosContenedorDistancia.contains(event.target)) {
        elementosContenedorDistancia.style.display = "none";
        clearTimeout(timeoutId);
    }
});


//      Fin del contendor

var DiasQueLlevamosJuntos = document.getElementById("diferencia-dias");
function activarDiasQueLlevamosSinVernos() {
    DiasQueLlevamosJuntos.style.display = "block";
    document.addEventListener("touchstart", function(event) {

        setTimeout(() => {
            if (event.target != DiasQueLlevamosJuntos) {
                DiasQueLlevamosJuntos.style.display = "none";
            }
    }, 4000);
    });
}




var DiasSinVernos = document.getElementById("diasSinVernos");

function activarDiasSinVernos() {
    DiasSinVernos.style.display = "block";

        document.addEventListener("touchstart", function(event) {

            setTimeout(() => {
                if (event.target != DiasSinVernos) {
                    DiasSinVernos.style.display = "none";
                }
        }, 4000);
        });
}

activarDiasSinVernos()



