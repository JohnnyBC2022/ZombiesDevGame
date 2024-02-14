document.addEventListener('DOMContentLoaded', () => {
    let continueButton = document.getElementById('continue');
    let introStory2 = document.querySelector('.introStory2');
    let storyContent = document.querySelector('.storyContent');

    introStory2.style.display = 'none';

    continueButton.addEventListener('click', continueHandler);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'b' || e.key === 'B') {
            optionBButton.click();
        } else if (e.key === 'a' || e.key === 'A') {
            optionAButton.click();
        }
    })

    let optionAButton = document.querySelector('.optionA');
    let optionBButton = document.querySelector('.optionB');

    function continueHandler() {
        introStory2.style.display = 'block';
        continueButton.style.display = 'none';
        storyContent.innerHTML = '<p>Además tengo prácticamente acabado el juego, solo queda rematar cómo conseguir escapar y salir con vida de la casa… ¿Qué haces?</p><button class="optionA optionButton">A. Te acuestas tranquilamente en tu cama</button><button class="optionB optionButton">B. Sigues programando, aún puedes acabarlo</button>';

        optionAButton = document.querySelector('.optionA');
        optionBButton = document.querySelector('.optionB');
        // Ahora tenemos dos opciones, una más fácil y larga y otra mediante el empleo de AJAX, pero eso tengo que mirarlo y quizás es más difícil de explicar. Aunque sea un rollo, yo tiraría por aquí.

        optionAButton.addEventListener('click', function () {

            document.body.innerHTML = `<!DOCTYPE html>
        <html lang="es">
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="Zombie Devs" />
            <link rel="stylesheet" href="right.css" />
            <title>Zombie Devs Game</title>
          </head>
          <body>
            <header>
              <a href="../../index.html"
                ><ul class="headerLeft">
                  <li></li>
                  <li>Inicio</li>
                </ul>
              </a>
              <ul class="headerCenter">
                <li>&lt;Zombie devs/&gt; Game</li>
              </ul>
              <ul class="headerRight">
                <li>&lt;CODE/&gt;</li>
                <li>CREDITS</li>
              </ul>
            </header>
            <div class="headerBorder"></div>

            <main>
              <section class="panel">
                <div class="game">
                  <div class="progressBar">
                    <img src="/img/ZombieHead.png" alt="zombie head" />
                    <img src="/img/Runner.png" alt="character" />
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="15" height="15" fill="#2692C3" />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="15" height="15" fill="#2692C3" />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="15" height="15" fill="#2692C3" />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="15" height="15" fill="#2692C3" />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="15" height="15" fill="#2692C3" />
                    </svg>
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect width="15" height="15" fill="#2692C3" />
                    </svg>
                  </div>
                  <div class="card">
                    <div class="storyContent">
                      <img src="../img/computerOK.png" alt="" />
                      <div>
                        <h3>¡BIEN HECHO!</h3>
                        <p>
                          Disfrutas de un sueño reparador y profundo.
                        </p>
                      </div>
                    </div>
                    <button class="optionButton">CONTINUAR</button>
                  </div>
                  <div class="score">
                    <img src="/img/coffee.png" alt="" />
                    <p>Coffee:</p>
                    <p id="points">1000</p>
                  </div>
                </div>
              </section>
            </main>
            <script src="script.js"></script>
          </body>
        </html>`;
        });




        optionBButton.addEventListener('click', () => {
            document.body.innerHTML =
                `<!DOCTYPE html>
            <html lang="es">
              <head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="Zombie Devs" />
                <link rel="stylesheet" href="wrong.css" />
                <title>Zombie Devs Game</title>
              </head>
              <body>
                <header>
                  <a href="../../index.html"
                    ><ul class="headerLeft">
                      <li></li>
                      <li>Inicio</li>
                    </ul>
                  </a>
                  <ul class="headerCenter">
                    <li>&lt;Zombie devs/&gt; Game</li>
                  </ul>
                  <ul class="headerRight">
                    <li>&lt;CODE/&gt;</li>
                    <li>CREDITS</li>
                  </ul>
                </header>
                <div class="headerBorder"></div>
            
                <main>
                  <section class="panel">
                    <div class="game">
                      <div class="progressBar">
                        <img src="/img/ZombieHead.png" alt="zombie head" />
                        <img src="/img/Runner.png" alt="character" />
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="15" height="15" fill="#2692C3" />
                        </svg>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="15" height="15" fill="#2692C3" />
                        </svg>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="15" height="15" fill="#2692C3" />
                        </svg>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="15" height="15" fill="#2692C3" />
                        </svg>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="15" height="15" fill="#2692C3" />
                        </svg>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 15 15"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect width="15" height="15" fill="#2692C3" />
                        </svg>
                      </div>
                      <div class="card">
                        <div class="storyContent">
                          <img src="../img/computerERROR.png" alt="" />
                          <div>
                            <h3>MALA IDEA..</h3>
                            <p>
                              te quedas dormido encima del teclado y recibes un golpe al
                              caer de la silla
                            </p>
                          </div>
                        </div>
                        <button class="optionButton">CONTINUAR</button>
                      </div>
                      <div class="score">
                        <img src="/img/coffee.png" alt="" />
                        <p>Coffee:</p>
                        <p id="points">1000 <span class="lostPoints">-200</span></p>
                      </div>
                    </div>
                  </section>
                </main>
                <script src="script.js"></script>
              </body>
            </html>
            `
        });


    }
});
