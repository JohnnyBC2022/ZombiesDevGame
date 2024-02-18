document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    window.location.href = "./views/intro1.html";
  }
});

function guardarPuntos(puntos) {
  localStorage.setItem("puntos", puntos);
}

let puntuacionInicial = 1000;
guardarPuntos(puntuacionInicial);

document.addEventListener("DOMContentLoaded", function () {
  const resetButton = document.querySelector(".reset");
  resetButton.addEventListener("click", function () {
    reiniciarJuego();
  });
});

function reiniciarJuego() {
  window.location.href = "../index.html";
}


