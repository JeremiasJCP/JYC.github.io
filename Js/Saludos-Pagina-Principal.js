var fecha = new Date();
var hoy  =  fecha.toLocaleDateString()
  
function mostrarSaludo_imagenFondo() { 

    
    var hora = fecha.getHours(); 
    var imagenFondo = ""; 
    var mensaje = "";
  
  if (hora >= 6 && hora < 12) { 
    mensaje = "¡Buenos días, mi princesa!";
    imagenFondo = "https://i.ibb.co/3mH2vbQ/claro.jpg"; // Imagen de fondo para la mañana 
  } 
  
  else if (hora >= 12 && hora < 18) { 
    mensaje = "¡Buenas tardes, mi amor!";
    imagenFondo = "https://i.ibb.co/PMtYwXJ/medio.jpg"; // Imagen de fondo para la tarde 
} 
  else { 
    mensaje = "¡Buenas noches, mol mio!";
    imagenFondo = "https://i.ibb.co/f1WYZKs/oscuro.jpg";
     // Imagen de fondo para la noche 
  }
  
  var contenedorSaludo = document.getElementById("Titulo");
   contenedorSaludo.textContent = mensaje;
  
  // var contenedorImagen = document.getElementById("contenedorPrincipal");
  //  contenedorImagen.style.backgroundImage = "url('" + imagenFondo + "')"; 
}

mostrarSaludo_imagenFondo()

function proximoAniversario() {
  let spanProximoAniversario = document.getElementById('numeroProximoAniversario')
  const fechaActual = new Date();
  const diaActual = fechaActual.getDate();
  const diasRestantes = 18 - diaActual;

  if (diasRestantes < 0) {
    // Si ya pasó el 18 de este mes, calculamos para el próximo mes
    const fechaProximoMes = new Date(fechaActual);
    fechaProximoMes.setMonth(fechaProximoMes.getMonth() + 1);
    fechaProximoMes.setDate(18);
    const diasEnProximoMes = (fechaProximoMes - fechaActual) / (1000 * 60 * 60 * 24);

    return diasEnProximoMes;
  }

  const diasFaltantes = diasRestantes;

  spanProximoAniversario.innerHTML = diasFaltantes;
}

function diasQueFaltanParaVernos() {
  let contenedorHTMLDiasVernos = document.getElementById('numeoroDiasParaVernos')
  let parrafo = document.getElementById('main--container-info-diasParaPoderVernos-parrafo')
  let listaParrafoContenedor = [
    "Para estar a tu lado",
    "Para estar juntos",
    "Para poder abrazarte",
    "Para estar uno junto al otro",
    "Para nuestro reencuentro"
  ]
  let posicionObjetoLista = Math.floor(Math.random() * listaParrafoContenedor.length);
  let fechaEstimadaParaVernos = new Date('2025-07-01');
  let fechaActual = new Date();
  let diferenciaMilisegundos = fechaEstimadaParaVernos - fechaActual;
  let diasRestantes = diferenciaMilisegundos / (1000 * 60 * 60 * 24);
  let diasRestantesRedondeados = Math.floor(diasRestantes);

  
  contenedorHTMLDiasVernos.innerHTML = diasRestantesRedondeados;
  parrafo.innerHTML = listaParrafoContenedor[posicionObjetoLista]
  console.log(posicionObjetoLista) //Esta va a hacer la salida al HTML
}

diasQueFaltanParaVernos();
proximoAniversario()