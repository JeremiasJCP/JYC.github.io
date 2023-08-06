
var animatedObjects = document.querySelectorAll('.efectoentrada');

window.addEventListener('scroll', function() {
  var windowHeight = window.innerHeight;

  animatedObjects.forEach(function(object) {
    var position = object.getBoundingClientRect();
    var objectTop = position.top;

    // Verificar si el objeto está dentro de la ventana visible
    if (objectTop - windowHeight <= 0) {
      object.classList.add('active');
    }
  });
});
