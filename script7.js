
document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    redireccionar("../right-cards/kitchen-right.html");
  } else if (event.key === "ArrowRight") {
    redireccionar("../wrong-cards/kitchen-wrong.html");
  }
});

function redireccionar(ruta) {
  if (ruta === "../right-cards/kitchen-right.html") {
    const puntosActuales = obtenerPuntos();
    guardarPuntos(puntosActuales);
  } else if (ruta === "../wrong-cards/kitchen-wrong.html") {
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

document.addEventListener("DOMContentLoaded", function () {
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", function () {
    reiniciarJuego();
  });
});

function reiniciarJuego() {
  window.location.href = "../../index.html";
}