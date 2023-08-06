var images = document.querySelectorAll('.carousel-image');
var currentImage = 0;

function showImage(index) {
  var container = document.querySelector('.carousel-images');
  container.style.transform = `translateX(-${index * 100}%)`;

  images[currentImage].classList.remove('active');
  images[index].classList.add('active');
  currentImage = index;
}

function nextImage() {
  var nextIndex = (currentImage + 1) % images.length;
  showImage(nextIndex);
}

function prevImage() {
  var prevIndex = (currentImage - 1 + images.length) % images.length;
  showImage(prevIndex);
}

showImage(currentImage);
