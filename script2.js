document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const introStory2 = document.querySelector(".introStory2");
    introStory2.style.display = "block";
    const storyContent = document.querySelector(".storyContent");
    storyContent.style.display = "none";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    redireccionar("./right-cards/intro1-right.html");
  } else if (event.key === "ArrowRight") {
    redireccionar("./wrong-cards/intro1-wrong.html");
  }
});

function redireccionar(ruta) {
  if (ruta === "./right-cards/intro1-right.html") {
    const puntosActuales = obtenerPuntos();
    guardarPuntos(puntosActuales);
  } else if (ruta === "./wrong-cards/intro1-wrong.html") {
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
