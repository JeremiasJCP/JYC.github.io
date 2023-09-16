
  
function mostrarSaludo_imagenFondo() { 

    var fecha = new Date(); 
    var hora = fecha.getHours(); 
    var imagenFondo = ""; 
    var mensaje = "";
  
  if (hora >= 6 && hora < 12) { 
    mensaje = "¡Buenos días, mi princesa!";
    imagenFondo = "https://i.ibb.co/3mH2vbQ/claro.jpg"; // Imagen de fondo para la mañana 
  } 
  
  else if (hora >= 12 && hora < 18) { 
    mensaje = "¡Buenas tardes, mi princesa!";
    imagenFondo = "https://i.ibb.co/PMtYwXJ/medio.jpg"; // Imagen de fondo para la tarde 
} 
  else { 
    mensaje = "¡Buenas noches, mi princesa!";
    imagenFondo = "https://i.ibb.co/f1WYZKs/oscuro.jpg";
     // Imagen de fondo para la noche 
  }
  
  var contenedorSaludo = document.getElementById("Titulo");
   contenedorSaludo.textContent = mensaje;
  
  // var contenedorImagen = document.getElementById("contenedorPrincipal");
  //  contenedorImagen.style.backgroundImage = "url('" + imagenFondo + "')"; 
}

mostrarSaludo_imagenFondo()