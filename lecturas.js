const cuestionarios = [
  // Preguntas para Lectura 1 (San Martín)
  [
    {
      pregunta: "¿Qué personaje proclamó la independencia del Perú?",
      opciones: ["Simón Bolívar", "José de San Martín", "José de la Mar"],
      correcta: 1
    },
    {
      pregunta: "¿Dónde se proclamó la independencia?",
      opciones: ["Cusco", "Arequipa", "Plaza Mayor de Lima"],
      correcta: 2
    },
    {
      pregunta: "¿Qué frase histórica dijo San Martín?",
      opciones: [
        "¡Independencia o muerte!",
        "¡El Perú es libre por voluntad de los pueblos!",
        "¡Abajo el Virreinato!"
      ],
      correcta: 1
    }
  ],

  // Preguntas para Lectura 2 (Bolívar)
  [
    {
      pregunta: "¿Cuándo ocurrió la Batalla de Junín?",
      opciones: ["6 de agosto de 1824", "28 de julio de 1821", "9 de diciembre de 1824"],
      correcta: 0
    },
    {
      pregunta: "¿Cuál fue la importancia de Bolívar en el Perú?",
      opciones: ["Organizó fiestas", "Reforzó el ejército patriota", "Fundó colegios"],
      correcta: 1
    },
    {
      pregunta: "¿Qué batalla consolidó la independencia del Perú?",
      opciones: ["Pichincha", "Ayacucho", "Carabobo"],
      correcta: 1
    }
  ],

  // Preguntas para Lectura 3 (Bandera y escudo)
  [
    {
      pregunta: "¿Qué representan las franjas rojas de la bandera peruana?",
      opciones: ["El mar", "La sangre de los héroes", "La flora"],
      correcta: 1
    },
    {
      pregunta: "¿Qué animal aparece en el escudo del Perú?",
      opciones: ["Cóndor", "Jaguar", "Vicuña"],
      correcta: 2
    },
    {
      pregunta: "¿Qué representa la cornucopia en el escudo?",
      opciones: ["Minerales y riquezas", "Paz y libertad", "Unidad del pueblo"],
      correcta: 0
    }
  ]
];

let indiceLectura = 0;
let actual = 0;
let puntaje = 0;

function iniciarPreguntas(numLectura) {
  indiceLectura = numLectura;
  actual = 0;
  puntaje = 0;

  document.getElementById("lecturas").classList.add("oculto");
  document.getElementById("preguntas").classList.remove("oculto");
  mostrarPregunta();
}

function mostrarPregunta() {
  const preguntaEl = document.getElementById("pregunta-texto");
  const opcionesEl = document.getElementById("opciones");

  const preguntas = cuestionarios[indiceLectura];

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
  const preguntas = cuestionarios[indiceLectura];

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
    <div style="text-align: center;">
      <h2>¡Has completado esta lectura! 📖</h2>
      <p>Tu puntaje: ${puntaje} / ${cuestionarios[indiceLectura].length}</p>
      <p>${puntaje === cuestionarios[indiceLectura].length
        ? "¡Excelente! Eres un verdadero patriota."
        : "¡Buen intento! Puedes volver a leer y reforzar."}</p>
      <br>
      <button onclick="location.reload()" style="
        background-color: #b71c1c;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
      ">
        ⬅️ Volver a las Lecturas
      </button>
    </div>
  `;
}
