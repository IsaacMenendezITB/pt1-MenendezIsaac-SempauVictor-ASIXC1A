const botonCargar = document.getElementById('boton-cargar');
const botonGenerar = document.getElementById('boton-generar');
const nombreAleatorio = document.getElementById('nombre-aleatorio');
var stopSound = document.getElementById('ding');

botonCargar.addEventListener('click', () => {
  document.getElementById("ruleta").style.display = "block";
  document.getElementById("flechita").style.display = "block";
  fetch('opciones.txt')
    .then(respuesta => respuesta.text())
    .then(texto => {
      const nombres = texto.split(/\r?\n/);
      botonGenerar.disabled = false;
      botonCargar.disabled = true;
      nombreAleatorio.textContent = '';
      botonGenerar.addEventListener('click', () => {
        rotateRuleta();
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombre = nombres[indiceAleatorio];
        nombreAleatorio.textContent = `El nombre aleatorio es: ${nombre}`;
        stopSound.play();
      });
    })
    .catch(error => console.error(error));
});

function toggleNightMode() {
  var body = document.querySelector('body');
  var button = document.querySelector('#night-mode-button');
  body.classList.toggle('night-mode');
  if (body.classList.contains('night-mode')) {
    button.textContent = 'Modo día';
  } else {
    button.textContent = 'Modo noche';
  }
}

let idInterval; // Variable global para almacenar el ID del intervalo
let rotation = 0; // Variable global para almacenar la rotación actual de la ruleta

function rotateRuleta() {
  var tiempo = Math.floor(1000 * (Math.random() * 2 + 1));
  var angle = 15;

  idInterval = setInterval(() => {
    rotation = (rotation + angle) % 360;
    ruleta.style.transform = `rotate(${rotation}deg)`;
  }, 75);

  // Detener la rotación después de que haya pasado el tiempo establecido
  setTimeout(() => {
    clearInterval(idInterval); // Detener el intervalo
    angle = 0; // Establecer el ángulo a 0 para que la ruleta se detenga en la posición actual
    showNombreAleatorio(); // Mostrar el nombre aleatorio una vez que la ruleta se haya detenido
  }, tiempo);
}

function showNombreAleatorio() {
  fetch('opciones.txt')
    .then(respuesta => respuesta.text())
    .then(texto => {
      const nombres = texto.split(/\r?\n/);
      const indiceAleatorio = Math.floor(Math.random() * nombres.length);
      const nombre = nombres[indiceAleatorio];
      nombreAleatorio.textContent = `El nombre aleatorio es: ${nombre}`;
    })
    .catch(error => console.error(error));
}

botonGenerar.addEventListener('click', () => {
  rotateRuleta();
});
