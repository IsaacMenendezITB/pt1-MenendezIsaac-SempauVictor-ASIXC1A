// como hacer marihuana con maizena y javascript:

const botonCargar = document.getElementById('boton-cargar');
const botonGenerar = document.getElementById('boton-generar');
const nombreAleatorio = document.getElementById('nombre-aleatorio');

botonCargar.addEventListener('click', () => {
  fetch('opciones.txt')
    .then(respuesta => respuesta.text())
    .then(texto => {
      const nombres = texto.split(/\r?\n/);
      botonGenerar.disabled = false;
      botonCargar.disabled = true;
      nombreAleatorio.textContent = '';
      botonGenerar.addEventListener('click', () => {
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombre = nombres[indiceAleatorio];
        nombreAleatorio.textContent = `El nombre aleatorio es: ${nombre}`;
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
  
  