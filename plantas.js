let basuraRecogida = parseInt(localStorage.getItem("basuraRecogida")) || 0;

function actualizarContador() {
  document.getElementById("contador").textContent = `Basura recogida: ${basuraRecogida}`;
}

function generarBasura() {
  const basurasContainer = document.getElementById("basuras");
  const basura = document.createElement("img");
  basura.src = "basura.png"; // usa tu propia imagen
  basura.classList.add("basura");

  const x = Math.random() * (basurasContainer.offsetWidth - 40);
  const y = Math.random() * (basurasContainer.offsetHeight - 40);

  basura.style.left = `${x}px`;
  basura.style.top = `${y}px`;

  basura.onclick = () => {
    basura.remove();
    basuraRecogida++;
    localStorage.setItem("basuraRecogida", basuraRecogida);
    actualizarContador();
  };

  basurasContainer.appendChild(basura);
}

window.onload = () => {
  actualizarContador();

  // Generar entre 3 y 6 basuras aleatorias al cargar
  const cantidad = Math.floor(Math.random() * 4) + 3;
  for (let i = 0; i < cantidad; i++) {
    generarBasura();
  }
};
