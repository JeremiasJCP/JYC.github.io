
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    var accessCodeInput = document.getElementById('accessCode');
    var accessCode = accessCodeInput.value;
  
    if (accessCode === '1717029090') {
      window.location.href = "./html/Principal.html";
      // window.location.href = "./html/PrincipalRespaldo.html";
  
    }else if (accessCode === '5092'){
      window.location.href = "./html/Principal.html";
    }
  });
  
  