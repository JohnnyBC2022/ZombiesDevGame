document.addEventListener("keydown", function (event) {
  if (event.key === "Enter" && puntosActuales > 0) {
    window.location.href = "../win-game.html";
  } else if (event.key === "Enter" && puntosActuales <= 0){
    window.location.href = "../game-over.html";
  }
});
