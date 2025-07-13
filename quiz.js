const preguntas = [
  {
    pregunta: "¿Quién proclamó la independencia del Perú?",
    opciones: ["José de San Martín", "Simón Bolívar", "Miguel Grau", "Túpac Amaru"],
    respuesta: 0
  },
  {
    pregunta: "¿Qué día se celebra la independencia del Perú?",
    opciones: ["24 de julio", "28 de julio", "15 de agosto", "25 de diciembre"],
    respuesta: 1
  },
  {
    pregunta: "¿Qué colores tiene la bandera del Perú?",
    opciones: ["Rojo y blanco", "Rojo y azul", "Verde y blanco", "Blanco y negro"],
    respuesta: 0
  },
  {
    pregunta: "¿Qué animal representa el escudo nacional?",
    opciones: ["Llama", "Cóndor", "Vicuña", "Jaguar"],
    respuesta: 2
  },
  {
    pregunta: "¿Cuál fue el primer presidente del Perú independiente?",
    opciones: ["Simón Bolívar", "Ramón Castilla", "José de la Mar", "José de la Riva Agüero"],
    respuesta: 3
  }
];

let indice = 0;
let puntaje = 0;

const preguntaEl = document.getElementById("pregunta");
const opcionesEl = document.getElementById("opciones");
const siguienteBtn = document.getElementById("siguiente");
const resultado = document.getElementById("resultado");
const puntajeEl = document.getElementById("puntaje");

function mostrarPregunta() {
  const actual = preguntas[indice];
  preguntaEl.textContent = actual.pregunta;
  opcionesEl.innerHTML = "";

  actual.opciones.forEach((opcion, i) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => {
      if (i === actual.respuesta) puntaje++;
      indice++;
      if (indice < preguntas.length) {
        mostrarPregunta();
      } else {
        mostrarResultado();
      }
    };
    opcionesEl.appendChild(btn);
  });
}

function mostrarResultado() {
  document.getElementById("quiz-container").style.display = "none";
  resultado.classList.remove("oculto");
  puntajeEl.textContent = `Obtuviste ${puntaje} de ${preguntas.length} puntos.`;
}

mostrarPregunta();
