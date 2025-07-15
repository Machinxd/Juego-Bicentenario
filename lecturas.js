const lecturas = [
  {
    texto: `El 28 de julio de 1821, en la Plaza Mayor de Lima, el general José de San Martín proclamó la independencia del Perú. 
Con el pueblo reunido, alzó la bandera peruana y dijo las históricas palabras: “El Perú es desde este momento libre e independiente
por la voluntad general de los pueblos y por la justicia de su causa que Dios defiende”.
Fue un momento clave en la historia del país, marcando el fin del dominio colonial español y el nacimiento de una nueva nación soberana.`,
    preguntas: [
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
    ]
  },
  {
    texto: `Simón Bolívar fue un líder militar y político que luchó por la independencia de varios países de América del Sur.
En Perú, organizó el ejército libertador y lideró la decisiva Batalla de Junín y la Batalla de Ayacucho en 1824, que aseguraron 
la independencia definitiva del dominio español. Su visión era unir a las naciones liberadas bajo una sola confederación, 
aunque no logró consolidarla por completo.`,
    preguntas: [
      {
        pregunta: "¿Qué batallas lideró Bolívar en Perú?",
        opciones: ["Batalla de Junín y Ayacucho", "Batalla de Lima y Cusco", "Batalla de Tarapacá y Túpac"],
        correcta: 0
      },
      {
        pregunta: "¿Cuál era el objetivo de Bolívar después de la independencia?",
        opciones: ["Ser emperador", "Formar una confederación americana", "Retirarse de la política"],
        correcta: 1
      },
      {
        pregunta: "¿En qué año fue la Batalla de Ayacucho?",
        opciones: ["1821", "1824", "1827"],
        correcta: 1
      }
    ]
  },
  {
    texto: `José de la Riva Agüero fue el primer presidente del Perú en 1823, aunque no fue elegido democráticamente. 
Su gobierno fue breve y estuvo marcado por tensiones políticas y militares. A pesar de sus contribuciones iniciales, 
fue exiliado por sus desacuerdos con el Congreso. Su figura es recordada como parte de los primeros intentos de consolidar 
una república independiente en el país.`,
    preguntas: [
      {
        pregunta: "¿Quién fue el primer presidente del Perú?",
        opciones: ["Simón Bolívar", "Ramón Castilla", "José de la Riva Agüero"],
        correcta: 2
      },
      {
        pregunta: "¿Cómo llegó Riva Agüero al poder?",
        opciones: ["Por elección popular", "Nombrado por el Congreso", "Por herencia"],
        correcta: 1
      },
      {
        pregunta: "¿Qué pasó con Riva Agüero después de su mandato?",
        opciones: ["Fue reelecto", "Fue exiliado", "Fue nombrado virrey"],
        correcta: 1
      }
    ]
  }
];

let lecturaActual = 0;
let preguntaActual = 0;
let puntaje = 0;

function iniciarPreguntas() {
  document.getElementById("lectura").classList.add("oculto");
  document.getElementById("preguntas").classList.remove("oculto");
  mostrarPregunta();
}

function mostrarPregunta() {
  const preguntaEl = document.getElementById("pregunta-texto");
  const opcionesEl = document.getElementById("opciones");
  const preguntas = lecturas[lecturaActual].preguntas;

  if (preguntaActual < preguntas.length) {
    const q = preguntas[preguntaActual];
    preguntaEl.textContent = q.pregunta;
    opcionesEl.innerHTML = "";

    q.opciones.forEach((texto, i) => {
      const btn = document.createElement("button");
      btn.textContent = texto;
      btn.onclick = () => verificar(i);
      opcionesEl.appendChild(btn);
    });
  } else {
    lecturaActual++;
    preguntaActual = 0;
    if (lecturaActual < lecturas.length) {
      document.getElementById("preguntas").classList.add("oculto");
      document.getElementById("lectura").classList.remove("oculto");
      document.getElementById("lectura").querySelector("p").textContent = lecturas[lecturaActual].texto;
    } else {
      mostrarResultado();
    }
  }
}

function verificar(seleccion) {
  const correcta = lecturas[lecturaActual].preguntas[preguntaActual].correcta;
  if (seleccion === correcta) {
    puntaje++;
  }
  preguntaActual++;
  mostrarPregunta();
}

function mostrarResultado() {
  document.getElementById("preguntas").classList.add("oculto");
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("oculto");
  resultado.innerHTML = `
    <div style="text-align: center;">
      <h2>¡Has completado todas las lecturas! 📚</h2>
      <p>Tu puntaje: ${puntaje} / ${lecturas.reduce((acc, l) => acc + l.preguntas.length, 0)}</p>
      <p>${puntaje >= 7 ? "¡Excelente, eres un verdadero patriota!" : "Sigue practicando para ser un héroe del Perú."}</p>
      <br>
      <button onclick="location.href='index.html'" style="
        background-color: #b71c1c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
      ">
        ⬅️ Volver al Inicio
      </button>
    </div>
  `;
}

// Cargar texto de la primera lectura al iniciar
window.onload = () => {
  document.querySelector("#lectura p").textContent = lecturas[0].texto;
};
