var elementosContenedorDistancia = document.getElementById("elementos-contenedor-Distancia");
function VerDistancia() {
    elementosContenedorDistancia.style.display = "block";
}

document.addEventListener("touchstart", function(event) {

    setTimeout(() => {
        if (event.target != elementosContenedorDistancia) {
            elementosContenedorDistancia.style.display = "none";
        }
}, 5000);
});


var DiasQueLlevamosJuntos = document.getElementById("diferencia-dias");
function activarDiasQueLlevamosSinVernos() {
    DiasQueLlevamosJuntos.style.display = "block";
}

document.addEventListener("touchstart", function(event) {

    setTimeout(() => {
        if (event.target != DiasQueLlevamosJuntos) {
            DiasQueLlevamosJuntos.style.display = "none";
        }
}, 5000);
});



var DiasSinVernos = document.getElementById("diasSinVernos");
function activarDiasSinVernos() {
    DiasSinVernos.style.display = "block";
}

document.addEventListener("touchstart", function(event) {

    setTimeout(() => {
        if (event.target != DiasSinVernos) {
            DiasSinVernos.style.display = "none";
        }
}, 5000);
});



