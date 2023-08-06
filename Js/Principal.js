// // Buenos dias/tardes/noches

// function  mostrarSaludo_colorFondo() {
//     var fecha = new Date();
//     var hora = fecha.getHours();
//     var colorFondo = "";
//     var mensaje = "";
  
//     if (hora >= 6 && hora < 12) {
//       mensaje = "¡Buenos días, mi princesa!";
//       colorFondo = "#08678C"; // Color de fondo para la mañana

//     }
    
//     else if (hora >= 12 && hora < 18) {
//       mensaje = "¡Buenas tardes, mi princesa!";
//       colorFondo = "#032859"; // Color de fondo para la tarde
//     } 
    
//     else {
//       mensaje = "¡Buenas noches, mi princesa!";
//       colorFondo = "#011126"; // Color de fondo para la noche
//     }
  
//     var contenedorSaludo = document.getElementById("Titulo");
//     contenedorSaludo.textContent = mensaje;

//     var contenedorColor = document.getElementById("contenedorPrincipal");contenedorPrincipal
//     contenedorColor.style.backgroundColor = colorFondo;
//   }
  
//   mostrarSaludo_colorFondo();



  // Buenos dias/tardes/noches
  
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
  
  var contenedorImagen = document.getElementById("contenedorPrincipal");
   contenedorImagen.style.backgroundImage = "url('" + imagenFondo + "')"; 
}

mostrarSaludo_imagenFondo()