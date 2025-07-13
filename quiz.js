const preguntas = [
  {
    pregunta: "¿Quién proclamó la independencia del Perú?",
    opciones: ["José de San Martín", "Simón Bolívar", "Túpac Amaru"],
    correcta: 0
  },
  {
    pregunta: "¿Qué día se celebra la independencia del Perú?",
    opciones: ["6 de agosto", "28 de julio", "25 de diciembre"],
    correcta: 1
  },
  {
    pregunta: "¿Quién fue el primer presidente del Perú?",
    opciones: ["Simón Bolívar", "José de la Riva Agüero", "Ramón Castilla"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es la flor nacional del Perú?",
    opciones: ["Flor de la papa", "Cantuta", "Orquídea"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el ave nacional del Perú?",
    opciones: ["Cóndor andino", "Gallo", "Pato criollo"],
    correcta: 0
  },
  {
    pregunta: "¿Qué mar baña la costa peruana?",
    opciones: ["Mar Caribe", "Mar Rojo", "Océano Pacífico"],
    correcta: 2
  },
  {
    pregunta: "¿Qué cordillera atraviesa el Perú?",
    opciones: ["Himalaya", "Andes", "Alpes"],
    correcta: 1
  },
  {
    pregunta: "¿Cuál es el baile nacional del Perú?",
    opciones: ["Marinera", "Samba", "Cueca"],
    correcta: 0
  },
  {
    pregunta: "¿Qué colores tiene la bandera del Perú?",
    opciones: ["Rojo y blanco", "Azul y blanco", "Rojo y amarillo"],
    correcta: 0
  },
  {
    pregunta: "¿Qué representa el escudo del Perú?",
    opciones: ["Las riquezas del país", "La comida típica", "Los héroes nacionales"],
    correcta: 0
  }
];

let indice = 0;
let puntaje = 0;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");

function mostrarPregunta() {
  if (indice < preguntas.length) {
    const actual = preguntas[indice];
    preguntaEl.textContent = actual.pregunta;
    opcionesEl.innerHTML = "";

    actual.opciones.forEach((opcion, i) => {
      const btn = document.createElement("button");
      btn.textContent = opcion;
      btn.onclick = () => verificarRespuesta(i);
      opcionesEl.appendChild(btn);
    });
  } else {
    mostrarResultado();
  }
}

function verificarRespuesta(i) {
  if (i === preguntas[indice].correcta) {
    puntaje++;
  }
  indice++;
  mostrarPregunta();
}

function mostrarResultado() {
  document.getElementById("quiz-box").classList.add("oculto");
  resultadoEl.classList.remove("oculto");
  resultadoEl.innerHTML = `
    <h2>¡Completaste el Quiz Patriota! 🇵🇪</h2>
    <p>Tu puntaje: ${puntaje} / ${preguntas.length}</p>
    <p>${puntaje >= 7 ? "¡Excelente, eres todo un patriota!" : "¡Sigue aprendiendo para ser un héroe del Perú!"}</p>
  `;
}

mostrarPregunta();
