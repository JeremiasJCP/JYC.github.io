const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function() {
  dropdownContent.classList.toggle('active');
});

document.addEventListener('click', function(event) {
  const targetElement = event.target;
  if (!dropdown.contains(targetElement)) {
    dropdownContent.classList.remove('active');
  }
});