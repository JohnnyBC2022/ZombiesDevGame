document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      redireccionar("../../views/story/story-room.html");
    }
  });
  
  function redireccionar(ruta) {
    window.location.href = ruta;
  }
  