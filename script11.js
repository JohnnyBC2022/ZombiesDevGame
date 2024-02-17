document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    redireccionar("../wrong-cards/door-wrong.html");
  } else if (event.key === "ArrowRight") {
    redireccionar("../right-cards/door-right.html");
  }
});

function redireccionar(ruta) {
  if (ruta === "../right-cards/door-right.html") {
    const puntosActuales = obtenerPuntos();
    guardarPuntos(puntosActuales);
  } else if (ruta === "../wrong-cards/door-wrong.html") {
    const puntosActuales = obtenerPuntos() - 200;
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
