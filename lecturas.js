const bloques = [
  {
    texto: `El 28 de julio de 1821, en la Plaza Mayor de Lima, el general José de San Martín proclamó la independencia del Perú. 
    Con el pueblo reunido, alzó la bandera peruana y dijo: “El Perú es desde este momento libre e independiente por la voluntad 
    general de los pueblos y por la justicia de su causa que Dios defiende”.`,
    preguntas: [
      {
        pregunta: "¿En qué fecha se proclamó la independencia del Perú?",
        opciones: ["28 de julio de 1821", "28 de julio de 1824", "15 de agosto de 1821"],
        correcta: 0
      },
      {
        pregunta: "¿Dónde se proclamó la independencia?",
        opciones: ["Cusco", "Arequipa", "Plaza Mayor de Lima"],
        correcta: 2
      }
    ]
  },
  {
    texto: `Simón Bolívar fue un gran libertador sudamericano. Después de San Martín, él asumió el mando militar y político para continuar 
    con la liberación del Perú. En 1824, dirigió la decisiva Batalla de Ayacucho, logrando la derrota definitiva del ejército realista 
    y asegurando la independencia del país.`,
    preguntas: [
      {
        pregunta: "¿Quién dirigió la Batalla de Ayacucho?",
        opciones: ["José de San Martín", "Simón Bolívar", "Túpac Amaru"],
        correcta: 1
      },
      {
        pregunta: "¿Qué significó la Batalla de Ayacucho?",
        opciones: ["La independencia definitiva del Perú", "La llegada del virreinato", "El fin de la República"],
        correcta: 0
      }
    ]
  },
  {
    texto: `José de la Riva Agüero fue el primer presidente del Perú en 1823, aunque no fue elegido democráticamente. Su gobierno marcó 
    el inicio de la vida republicana, aunque enfrentó tensiones políticas y militares. Fue depuesto poco después, pero dejó 
    un precedente como primer jefe de Estado del Perú independiente.`,
    preguntas: [
      {
        pregunta: "¿Quién fue el primer presidente del Perú?",
        opciones: ["Simón Bolívar", "José de la Riva Agüero", "Ramón Castilla"],
        correcta: 1
      },
      {
        pregunta: "¿Cómo fue elegido José de la Riva Agüero?",
        opciones: ["Por votación popular", "Nombrado por el Congreso", "Elegido por el rey"],
        correcta: 1
      }
    ]
  }
];

let bloqueActual = 0;
let preguntaActual = 0;
let puntaje = 0;

const textoEl = document.getElementById("texto");
const preguntasEl = document.getElementById("preguntas");
const preguntaTextoEl = document.getElementById("pregunta-texto");
const opcionesEl = document.getElementById("opciones");
const resultadoEl = document.getElementById("resultado");
const btnContinuar = document.getElementById("btn-continuar");

function mostrarBloque() {
  const bloque = bloques[bloqueActual];
  textoEl.textContent = bloque.texto;
  preguntasEl.classList.add("oculto");
  resultadoEl.classList.add("oculto");
  btnContinuar.classList.add("oculto");
  textoEl.classList.remove("oculto");

  setTimeout(() => {
    textoEl.classList.add("oculto");
    preguntasEl.classList.remove("oculto");
    preguntaActual = 0;
    mostrarPregunta();
  }, 2000); // Espera 2 segundos antes de mostrar preguntas
}

function mostrarPregunta() {
  const pregunta = bloques[bloqueActual].preguntas[preguntaActual];
  preguntaTextoEl.textContent = pregunta.pregunta;
  opcionesEl.innerHTML = "";

  pregunta.opciones.forEach((opcion, i) => {
    const btn = document.createElement("button");
    btn.textContent = opcion;
    btn.onclick = () => verificarRespuesta(i);
    opcionesEl.appendChild(btn);
  });
}

function verificarRespuesta(seleccion) {
  if (seleccion === bloques[bloqueActual].preguntas[preguntaActual].correcta) {
    puntaje++;
  }

  preguntaActual++;
  if (preguntaActual < bloques[bloqueActual].preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  preguntasEl.classList.add("oculto");
  resultadoEl.classList.remove("oculto");
  resultadoEl.innerHTML = `
    <p>Has terminado este bloque de preguntas.<br>
    Puntaje: ${puntaje} / ${(bloques[bloqueActual].preguntas.length * (bloqueActual + 1))}</p>
  `;
  btnContinuar.classList.remove("oculto");
}

function continuar() {
  bloqueActual++;
  if (bloqueActual < bloques.length) {
    mostrarBloque();
  } else {
    resultadoEl.innerHTML = `
      <h2>¡Completaste todas las lecturas! 🇵🇪</h2>
      <p>Puntaje final: ${puntaje} / ${bloques.flatMap(b => b.preguntas).length}</p>
      <button onclick="location.href='index.html'">Volver al inicio</button>
    `;
    btnContinuar.classList.add("oculto");
  }
}

window.onload = mostrarBloque;
