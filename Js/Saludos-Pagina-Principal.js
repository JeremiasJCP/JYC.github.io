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

    var spanProximoAniversario = document.getElementById('numeroProximoAniversario')
    const hoy = new Date();
    const mesActual = hoy.getMonth();
    const añoActual = hoy.getFullYear();
    let mesProximo18 = mesActual;
    let añoProximo18 = añoActual;
  
    if (mesActual === 11) {
      mesProximo18 = 0;
      añoProximo18++;
    } else {
      mesProximo18++;
    }
  
    const fechaProximo18 = new Date(añoProximo18, mesProximo18, 18);
    const diferenciaTiempo = fechaProximo18.getTime() - hoy.getTime();
    const diasFaltantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
  
    spanProximoAniversario.innerHTML = `En ${diasFaltantes} días.`;
  
}
proximoAniversario()