const situaciones = [
  {
    texto: "Tienes 10 soles. ¿Qué haces?",
    opciones: [
      { texto: "Compro una bandera para el desfile", puntos: 1 },
      { texto: "Gasto todo en dulces", puntos: 0 },
    ]
  },
  {
    texto: "¿Qué es mejor para la economía familiar?",
    opciones: [
      { texto: "Ahorrar una parte de lo que gano", puntos: 1 },
      { texto: "Gastar todo de inmediato", puntos: 0 },
    ]
  },
  {
    texto: "Te ofrecen trabajo vendiendo productos patrios. ¿Qué haces?",
    opciones: [
      { texto: "Acepto y aprendo a vender", puntos: 1 },
      { texto: "Digo que no sin pensarlo", puntos: 0 },
    ]
  },
  {
    texto: "¿En qué gastarías 5 soles?",
    opciones: [
      { texto: "En una cartilla educativa sobre el Perú", puntos: 1 },
      { texto: "En un juguete que se rompe rápido", puntos: 0 },
    ]
  }
];

let indice = 0;
let puntaje = 0;

function mostrarSituacion() {
  const situacion = situaciones[indice];
  const contenedor = document.getElementById("situacion");
  const opciones = document.getElementById("opciones");

  contenedor.textContent = situacion.texto;
  opciones.innerHTML = "";

  situacion.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => {
      puntaje += op.puntos;
      indice++;
      if (indice < situaciones.length) {
        mostrarSituacion();
      } else {
        mostrarResultado();
      }
    };
    opciones.appendChild(btn);
  });
}

function mostrarResultado() {
  document.getElementById("situacion").classList.add("oculto");
  document.getElementById("opciones").classList.add("oculto");
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("oculto");
  resultado.innerHTML = `
    <h2>¡Juego terminado!</h2>
    <p>Tu puntaje: ${puntaje} / ${situaciones.length}</p>
    <p>${puntaje === situaciones.length ? "¡Gran trabajo! Sabes tomar buenas decisiones económicas." : "Puedes mejorar. ¡Vuelve a intentarlo y reflexiona tus elecciones!"}</p>
  `;
}

window.onload = mostrarSituacion;
