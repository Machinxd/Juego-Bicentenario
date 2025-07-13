const preguntas = [
  {
    pregunta: "¿En qué fecha se proclamó la independencia del Perú?",
    opciones: ["28 de julio de 1821", "28 de julio de 1824", "15 de agosto de 1821"],
    correcta: 0
  },
  {
    pregunta: "¿Quién proclamó la independencia del Perú?",
    opciones: ["Simón Bolívar", "José de San Martín", "José de la Riva Agüero"],
    correcta: 1
  },
  {
    pregunta: "¿Dónde se proclamó la independencia?",
    opciones: ["Cusco", "Arequipa", "Plaza Mayor de Lima"],
    correcta: 2
  }
];

let actual = 0;
let puntaje = 0;

function iniciarPreguntas() {
  document.getElementById("lectura").classList.add("oculto");
  document.getElementById("preguntas").classList.remove("oculto");
  mostrarPregunta();
}

function mostrarPregunta() {
  const preguntaEl = document.getElementById("pregunta-texto");
  const opcionesEl = document.getElementById("opciones");

  if (actual < preguntas.length) {
    const q = preguntas[actual];
    preguntaEl.textContent = q.pregunta;
    opcionesEl.innerHTML = "";

    q.opciones.forEach((texto, i) => {
      const btn = document.createElement("button");
      btn.textContent = texto;
      btn.onclick = () => verificar(i);
      opcionesEl.appendChild(btn);
    });
  } else {
    mostrarResultado();
  }
}

function verificar(seleccion) {
  if (seleccion === preguntas[actual].correcta) {
    puntaje++;
  }
  actual++;
  mostrarPregunta();
}

function mostrarResultado() {
  document.getElementById("preguntas").classList.add("oculto");
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("oculto");
  resultado.innerHTML = `
    <h2>¡Has completado la lectura! 📖</h2>
    <p>Tu puntaje: ${puntaje} / ${preguntas.length}</p>
    <p>${puntaje === preguntas.length ? "¡Excelente! Eres un verdadero patriota." : "¡Buen intento! Puedes volver a leer y reforzar."}</p>
  `;
}
