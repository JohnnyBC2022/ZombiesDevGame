
  document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      const introStory2 = document.querySelector(".introStory2");
      introStory2.style.display = "block";
      const storyContent = document.querySelector(".storyContent");
      storyContent.style.display = "none";
    }
  });
  
  function redireccionar(ruta) {
    window.location.href = ruta;
  }
  
  document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowLeft") {
      redireccionar("./right-cards/intro1-right.html");
    } else if (event.key === "ArrowRight") {
      redireccionar("./wrong-cards/intro1-wrong.html");
    }
  });
  

  