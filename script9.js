
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      redireccionar("../right-cards/sofa-right.html");
    } else if (event.key === "ArrowRight") {
      redireccionar("../wrong-cards/sofa-wrong.html");
    }
  });
  
  function redireccionar(ruta) {
    if (ruta === "../right-cards/sofa-right.html") {
      const puntosActuales = obtenerPuntos();
      guardarPuntos(puntosActuales);
    } else if (ruta === "../wrong-cards/sofa-wrong.html") {
      const puntosActuales = obtenerPuntos() - 600;
      guardarPuntos(puntosActuales);
    }
  
    window.location.href = ruta; 
  }
  
  function obtenerPuntos() {
    return parseInt(localStorage.getItem("puntos"));
  }
  
  function guardarPuntos(puntos) {
    localStorage.setItem("puntos", puntos);
  }
  
  const puntosActuales = obtenerPuntos();
  const puntosElement = document.getElementById("points");
  puntosElement.textContent = puntosActuales;