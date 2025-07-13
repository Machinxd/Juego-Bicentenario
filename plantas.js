const contenedor = document.getElementById("juego");
const contadorEl = document.getElementById("contador");
const mensajeEl = document.getElementById("mensaje");

let basuraEliminada = parseInt(localStorage.getItem("basuraEliminada")) || 0;
contadorEl.textContent = basuraEliminada;

function generarBasuraAleatoria(cantidad = 5) {
  contenedor.innerHTML = ''; // Limpia lo anterior
  mensajeEl.classList.add("oculto");

  for (let i = 0; i < cantidad; i++) {
    const basura = document.createElement("img");
    basura.src = "assets/basura.png"; // Asegúrate de tener esta imagen
    basura.className = "basura";
    basura.style.top = `${Math.random() * 80 + 10}%`;
    basura.style.left = `${Math.random() * 80 + 10}%`;
    basura.onclick = () => eliminarBasura(basura);
    contenedor.appendChild(basura);
  }

  const arbol = document.createElement("img");
  arbol.src = "assets/arbol.png"; // Tu imagen de árbol
  arbol.className = "arbol";
  contenedor.appendChild(arbol);
}

function eliminarBasura(el) {
  el.classList.add("quitar");
  el.addEventListener("animationend", () => {
    el.remove();
    basuraEliminada++;
    localStorage.setItem("basuraEliminada", basuraEliminada);
    contadorEl.textContent = basuraEliminada;

    if (!document.querySelector(".basura")) {
      mensajeEl.textContent = "¡Árbol limpio! 🌳 Gracias por ayudar.";
      mensajeEl.classList.remove("oculto");
    }
  });
}

document.getElementById("reiniciar").onclick = () => {
  generarBasuraAleatoria();
};

document.getElementById("inicio").onclick = () => {
  window.location.href = "index.html";
};

// Inicia al cargar
window.onload = () => {
  generarBasuraAleatoria();
};
