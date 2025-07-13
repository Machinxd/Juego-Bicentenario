const contenedorBasura = document.getElementById("basuras");
const contadorEl = document.getElementById("contador");

let basuraRecogida = parseInt(localStorage.getItem("basuraRecogida")) || 0;
actualizarContador();

function actualizarContador() {
  contadorEl.textContent = `Basura recogida: ${basuraRecogida}`;
}

function generarBasuraAleatoria(cantidad = 5) {
  for (let i = 0; i < cantidad; i++) {
    const basura = document.createElement("img");
    basura.src = "basura.png"; // asegúrate de tener esta imagen
    basura.classList.add("basura");

    const x = Math.random() * (contenedorBasura.clientWidth - 30);
    const y = Math.random() * (contenedorBasura.clientHeight - 30);
    basura.style.left = `${x}px`;
    basura.style.top = `${y}px`;

    basura.onclick = () => {
      basura.remove();
      basuraRecogida++;
      localStorage.setItem("basuraRecogida", basuraRecogida);
      actualizarContador();
    };

    contenedorBasura.appendChild(basura);
  }
}

// Cada vez que entras al juego, genera basura aleatoria
window.onload = () => {
  const cantidad = Math.floor(Math.random() * 4) + 3; // entre 3 y 6
  generarBasuraAleatoria(cantidad);
};
