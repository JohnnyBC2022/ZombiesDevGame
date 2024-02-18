/* document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && puntosActuales > 0) {
    window.location.href = "../win-game.html";
  } else if (event.key === "Enter" && puntosActuales <= 0) {
    window.location.href = "../game-over.html";
  }
}); */

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const puntosActuales = obtenerPuntos();
    if (puntosActuales > 0) {
      window.location.href = "../win-game.html";
    } else {
      window.location.href = "../game-over.html";
    }
  }
});

document.addEventListener("DOMContentLoaded", function () {
  actualizarPuntuacion();
});

function actualizarPuntuacion() {
  const puntosElement = document.getElementById("points");
  const puntosActuales = obtenerPuntos();
  puntosElement.textContent = puntosActuales;
}

function obtenerPuntos() {
  return parseInt(localStorage.getItem("puntos"));
}
