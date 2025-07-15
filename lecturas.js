const bloquesLectura = [
  {
    texto: `El 28 de julio de 1821, en la Plaza Mayor de Lima, el general José de San Martín proclamó la independencia del Perú. Con el pueblo reunido, alzó la bandera peruana y dijo: “El Perú es desde este momento libre e independiente por la voluntad general de los pueblos y por la justicia de su causa que Dios defiende”.`,
    preguntas: [
      {
        pregunta: "¿Quién proclamó la independencia del Perú?",
        opciones: ["Simón Bolívar", "José de San Martín", "Túpac Amaru"],
        correcta: 1
      },
      {
        pregunta: "¿Dónde se proclamó la independencia?",
        opciones: ["Arequipa", "Cusco", "Plaza Mayor de Lima"],
        correcta: 2
      }
    ]
  },
  {
    texto: `Simón Bolívar fue un gran libertador sudamericano. Después de San Martín, él asumió el mando militar y político para continuar con la liberación del Perú. En 1824, dirigió la decisiva Batalla de Ayacucho, logrando la derrota definitiva del ejército realista y asegurando la independencia del país.`,
    preguntas: [
      {
        pregunta: "¿Qué batalla lideró Simón Bolívar en 1824?",
        opciones: ["Batalla de Junín", "Batalla de Ayacucho", "Batalla de Lima"],
        correcta: 1
      },
      {
        pregunta: "¿Qué logró Bolívar con esa batalla?",
        opciones: ["Capturar Lima", "Conquistar Arequipa", "Asegurar la independencia"],
        correcta: 2
      }
    ]
  },
  {
    texto: `José de la Riva Agüero fue el primer presidente del Perú en 1823, aunque no fue elegido democráticamente. Su gobierno marcó el inicio de la vida republicana, aunque enfrentó tensiones políticas y militares. Fue depuesto poco después, pero dejó un precedente como primer jefe de Estado del Perú independiente.`,
    preguntas: [
      {
        pregunta: "¿En qué año fue presidente José de la Riva Agüero?",
        opciones: ["1821", "1823", "1825"],
        correcta: 1
      },
      {
        pregunta: "¿Fue elegido democráticamente?",
        opciones: ["Sí", "No"],
        correcta: 1
      }
    ]
  }
];

let bloqueActual = 0;
let preguntaActual = 0;
let puntaje = 0;

const contenedor = document.getElementById("contenedor");
const preguntaTexto = document.getElementById("pregunta-texto");
const opcionesEl = document.getElementById("opciones");

function iniciarBloque() {
  contenedor.innerHTML = `
    <h1>📖 Lectura Patriota</h1>
    <p>${bloquesLectura[bloqueActual].texto}</p>
    <button onclick="iniciarPreguntas()">Comenzar Preguntas</button>
  `;
}

function iniciarPreguntas() {
  mostrarPregunta();
}

function mostrarPregunta() {
  const bloque = bloquesLectura[bloqueActual];
  const pregunta = bloque.preguntas[preguntaActual];

  contenedor.innerHTML = `
    <p id="pregunta-texto">${pregunta.pregunta}</p>
    <div id="opciones"></div>
  `;

  const opcionesEl = document.getElementById("opciones");

  pregunta.opciones.forEach((texto, i) => {
    const btn = document.createElement("button");
    btn.textContent = texto;
    btn.onclick = () => verificarRespuesta(i);
    opcionesEl.appendChild(btn);
  });
}

function verificarRespuesta(seleccion) {
  const bloque = bloquesLectura[bloqueActual];
  if (seleccion === bloque.preguntas[preguntaActual].correcta) {
    puntaje++;
  }

  preguntaActual++;

  if (preguntaActual < bloque.preguntas.length) {
    mostrarPregunta();
  } else {
    bloqueActual++;
    preguntaActual = 0;

    if (bloqueActual < bloquesLectura.length) {
      iniciarBloque();
    } else {
      mostrarResultadoFinal();
    }
  }
}

function mostrarResultadoFinal() {
  contenedor.innerHTML = `
    <div style="text-align: center;">
      <h2>✅ ¡Has completado todas las lecturas!</h2>
      <p>Puntaje total: ${puntaje} / ${bloquesLectura.reduce((a, b) => a + b.preguntas.length, 0)}</p>
      <p>${puntaje >= 5 ? "¡Excelente trabajo, patriota!" : "¡Sigue estudiando y lo lograrás!"}</p>
      <button onclick="location.href='index.html'">Volver al inicio</button>
    </div>
  `;
}

window.onload = iniciarBloque;
