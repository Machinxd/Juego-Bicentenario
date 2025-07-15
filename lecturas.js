const bloques = [
  {
    texto: `El 28 de julio de 1821, en la Plaza Mayor de Lima, el general José de San Martín proclamó la independencia del Perú. Con el pueblo reunido, alzó la bandera peruana y dijo: “El Perú es desde este momento libre e independiente por la voluntad general de los pueblos y por la justicia de su causa que Dios defiende”.`,
    preguntas: [
      {
        pregunta: "¿Quién proclamó la independencia del Perú?",
        opciones: ["Simón Bolívar", "José de San Martín", "José de la Riva Agüero"],
        correcta: 1
      },
      {
        pregunta: "¿En qué año se proclamó la independencia?",
        opciones: ["1824", "1821", "1811"],
        correcta: 1
      }
    ]
  },
  {
    texto: `Simón Bolívar fue un gran libertador sudamericano. Después de San Martín, él asumió el mando militar y político para continuar con la liberación del Perú. En 1824, dirigió la decisiva Batalla de Ayacucho, logrando la derrota definitiva del ejército realista y asegurando la independencia del país.`,
    preguntas: [
      {
        pregunta: "¿Qué batalla fue decisiva en 1824?",
        opciones: ["Junín", "Ayacucho", "Pichincha"],
        correcta: 1
      },
      {
        pregunta: "¿Qué papel tuvo Bolívar en la independencia?",
        opciones: ["Ninguno", "Ayudó a los españoles", "Lideró la batalla final"],
        correcta: 2
      }
    ]
  },
  {
    texto: `José de la Riva Agüero fue el primer presidente del Perú en 1823, aunque no fue elegido democráticamente. Su gobierno marcó el inicio de la vida republicana, aunque enfrentó tensiones políticas y militares. Fue depuesto poco después, pero dejó un precedente como primer jefe de Estado del Perú independiente.`,
    preguntas: [
      {
        pregunta: "¿Quién fue el primer presidente del Perú?",
        opciones: ["Bolívar", "Riva Agüero", "Castilla"],
        correcta: 1
      },
      {
        pregunta: "¿En qué año gobernó Riva Agüero?",
        opciones: ["1821", "1823", "1824"],
        correcta: 1
      }
    ]
  }
];

let bloqueActual = 0;
let preguntaActual = 0;
let puntaje = 0;

const contenedor = document.getElementById("contenido");

function mostrarLectura() {
  const bloque = bloques[bloqueActual];
  contenedor.innerHTML = `
    <h2>📘 Lectura Patriota</h2>
    <p>${bloque.texto}</p>
    <button onclick="comenzarPreguntas()">Comenzar Preguntas</button>
  `;
}

function comenzarPreguntas() {
  mostrarPregunta();
}

function mostrarPregunta() {
  const bloque = bloques[bloqueActual];
  const pregunta = bloque.preguntas[preguntaActual];

  let opcionesHTML = "";
  pregunta.opciones.forEach((op, i) => {
    opcionesHTML += `<button onclick="verificar(${i})">${op}</button>`;
  });

  contenedor.innerHTML = `
    <h3>${pregunta.pregunta}</h3>
    <div class="opciones">${opcionesHTML}</div>
  `;
}

function verificar(opcionElegida) {
  const bloque = bloques[bloqueActual];
  const pregunta = bloque.preguntas[preguntaActual];

  if (opcionElegida === pregunta.correcta) {
    puntaje++;
  }

  preguntaActual++;

  if (preguntaActual < bloque.preguntas.length) {
    mostrarPregunta();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  contenedor.innerHTML = `
    <h3>✅ Bloque completado</h3>
    <p>Puntaje actual: ${puntaje}</p>
    ${
      bloqueActual + 1 < bloques.length
        ? `<button onclick="siguienteBloque()">Siguiente Lectura</button>`
        : `<p>🎉 ¡Completaste todas las lecturas!</p><button onclick="location.href='index.html'">Volver al Inicio</button>`
    }
  `;
}

function siguienteBloque() {
  bloqueActual++;
  preguntaActual = 0;
  mostrarLectura();
}

window.onload = mostrarLectura;
