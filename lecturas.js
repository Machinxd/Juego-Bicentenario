const preguntas = [
  // Lectura 1 - Independencia del Perú
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
  },

  // Lectura 2 - Simón Bolívar
  {
    pregunta: "¿Qué papel tuvo Simón Bolívar en la independencia del Perú?",
    opciones: ["Fue el primer presidente", "Lideró batallas cruciales", "Firmó la independencia"],
    correcta: 1
  },
  {
    pregunta: "¿En qué batalla fue clave la participación de Bolívar?",
    opciones: ["Batalla de Junín", "Batalla de Ayacucho", "Ambas"],
    correcta: 2
  },
  {
    pregunta: "¿Cuál era el apodo de Simón Bolívar?",
    opciones: ["El Patriota", "El Libertador", "El Presidente"],
    correcta: 1
  },

  // Lectura 3 - José de la Mar
  {
    pregunta: "¿Quién fue José de la Mar?",
    opciones: ["Primer presidente", "Militar y político peruano", "Fundador del Congreso"],
    correcta: 1
  },
  {
    pregunta: "¿Durante qué guerra fue presidente José de la Mar?",
    opciones: ["Guerra con Bolivia", "Guerra con Chile", "Guerra con España"],
    correcta: 0
  },
  {
    pregunta: "¿Cuál fue uno de los logros de José de la Mar?",
    opciones: ["Establecer la bandera", "Defender la soberanía", "Firmar la paz con Bolivia"],
    correcta: 1
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
    <div style="text-align: center;">
      <h2>¡Has completado la lectura! 📖</h2>
      <p>Tu puntaje: ${puntaje} / ${preguntas.length}</p>
      <p>${puntaje === preguntas.length
        ? "¡Excelente! Eres un verdadero patriota."
        : "¡Buen intento! Puedes volver a leer y reforzar."}</p>
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
