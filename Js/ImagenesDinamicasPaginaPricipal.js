var track = document.querySelector('.carousel__track');
var slides = Array.from(track.children);
var currentSlide = track.querySelector('.current-slide');

// Función para mover al siguiente slide
function nextSlide() {
    var nextSlide = currentSlide.nextElementSibling;
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    
    track.style.transform = 'translateX(-' + nextSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    nextSlide.classList.add('current-slide');
    
    currentSlide = nextSlide;
}

// Inicializa la posición de los slides
slides.forEach(function(slide, index) {
    slide.style.left = slide.offsetWidth * index + 'px';
});

// Cambia al siguiente slide cada 3 segundos
setInterval(nextSlide, 3000);