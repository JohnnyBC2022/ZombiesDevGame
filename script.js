document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    window.location.href = "./views/intro1.html";
  }
});

function guardarPuntos(puntos) {
  localStorage.setItem("puntos", puntos);
}
// Inicializamos los puntos al empezar el juego
guardarPuntos(1000);




