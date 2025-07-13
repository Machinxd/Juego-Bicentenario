const situaciones = [
  {
    texto: "Tienes 10 soles. ¿Qué haces?",
    opciones: [
      { texto: "Compro una bandera para el desfile", puntos: 1, reflexion: null },
      { texto: "Gasto todo en dulces", puntos: 0, reflexion: "Es mejor invertir en cosas que te enseñen o te hagan sentir orgulloso de tu país." },
      { texto: "Lo pierdo sin darme cuenta", puntos: 0, reflexion: "Debemos cuidar el dinero, incluso si es poco." }
    ]
  },
  {
    texto: "¿Qué es mejor para la economía familiar?",
    opciones: [
      { texto: "Ahorrar una parte de lo que gano", puntos: 1, reflexion: null },
      { texto: "Gastar todo de inmediato", puntos: 0, reflexion: "Ahorrar permite estar preparado para emergencias y necesidades futuras." },
      { texto: "Pedir más dinero cada vez que lo gasto", puntos: 0, reflexion: "Pedir sin control puede afectar el presupuesto familiar." }
    ]
  },
  {
    texto: "Te ofrecen trabajo vendiendo productos patrios. ¿Qué haces?",
    opciones: [
      { texto: "Acepto y aprendo a vender", puntos: 1, reflexion: null },
      { texto: "Digo que no sin pensarlo", puntos: 0, reflexion: "Intentar cosas nuevas puede ayudarte a descubrir habilidades que no conocías." },
      { texto: "Digo que sí pero no cumplo", puntos: 0, reflexion: "La responsabilidad es importante al aceptar compromisos." }
    ]
  },
  {
    texto: "¿En qué gastarías 5 soles?",
    opciones: [
      { texto: "En una cartilla educativa sobre el Perú", puntos: 1, reflexion: null },
      { texto: "En un juguete que se rompe rápido", puntos: 0, reflexion: "Invertir en educación te deja aprendizajes que duran más que un juguete." },
      { texto: "En golosinas", puntos: 0, reflexion: "Comer algo está bien, pero no debe ser lo único en lo que se gaste." }
    ]
  },
  {
    texto: "Tu escuela quiere recaudar fondos para un viaje patriótico. ¿Qué haces?",
    opciones: [
      { texto: "Ayudo vendiendo en la feria", puntos: 1, reflexion: null },
      { texto: "No participo porque no me interesa", puntos: 0, reflexion: "Trabajar en equipo fortalece los lazos con tus compañeros y tu comunidad." },
      { texto: "Prefiero no hacer nada y faltar ese día", puntos: 0, reflexion: "La participación fortalece valores como la solidaridad y el compromiso." }
    ]
  },
  {
    texto: "¿Qué representa una inversión responsable?",
    opciones: [
      { texto: "Ahorrar para comprar libros escolares", puntos: 1, reflexion: null },
      { texto: "Gastar en cosas que no necesito solo por moda", puntos: 0, reflexion: "Comprar solo por impulso puede dejarte sin dinero para lo importante." },
      { texto: "Prestar dinero a quien nunca paga", puntos: 0, reflexion: "Debemos ser cuidadosos con nuestras decisiones financieras." }
    ]
  },
  {
    texto: "Recibes una propina. ¿Qué haces con ella?",
    opciones: [
      { texto: "Guardo una parte y gasto otra", puntos: 1, reflexion: null },
      { texto: "Gasto todo sin pensar", puntos: 0, reflexion: "Es bueno disfrutar, pero también hay que aprender a administrar el dinero." },
      { texto: "Compro cosas que no necesito solo por gastar", puntos: 0, reflexion: "Controlar el impulso es clave para una buena economía personal." }
    ]
  },
  {
    texto: "¿Qué actividad ayuda a la economía del Perú?",
    opciones: [
      { texto: "Comprar productos nacionales", puntos: 1, reflexion: null },
      { texto: "Comprar solo productos importados", puntos: 0, reflexion: "Comprar lo nacional apoya a los trabajadores y empresas peruanas." },
      { texto: "No comprar nada en ferias escolares", puntos: 0, reflexion: "Apoyar las iniciativas escolares también fomenta la economía local." }
    ]
  },
  {
    texto: "¿Qué harías con tus ahorros?",
    opciones: [
      { texto: "Invertir en un curso educativo", puntos: 1, reflexion: null },
      { texto: "Gastarlo en videojuegos sin pensarlo", puntos: 0, reflexion: "La educación es una inversión que te abre muchas puertas." },
      { texto: "No sé, los pierdo", puntos: 0, reflexion: "Es importante aprender a manejar el dinero con cuidado." }
    ]
  },
  {
    texto: "Si ayudas a tu familia a vender empanadas, ¿qué aprendes?",
    opciones: [
      { texto: "Responsabilidad y trabajo en equipo", puntos: 1, reflexion: null },
      { texto: "Nada, solo es aburrido", puntos: 0, reflexion: "Cada experiencia es una oportunidad para aprender y crecer." },
      { texto: "A dormir más en vez de trabajar", puntos: 0, reflexion: "El esfuerzo también forma parte del crecimiento personal." }
    ]
  }
];

function mezclarArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let indice = 0;
let puntaje = 0;

function mostrarSituacion() {
  const situacion = situaciones[indice];
  const contenedor = document.getElementById("situacion");
  const opciones = document.getElementById("opciones");
  contenedor.textContent = situacion.texto;
  opciones.innerHTML = "";

  const opcionesMezcladas = mezclarArray([...situacion.opciones]);

  opcionesMezcladas.forEach((op) => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => {
      puntaje += op.puntos;
      const reflexion = document.getElementById("reflexion");
      reflexion.textContent = op.puntos === 0 && op.reflexion ? `Reflexión: ${op.reflexion}` : "¡Muy bien!";
      reflexion.classList.remove("oculto");
      document.getElementById("siguiente").classList.remove("oculto");
      opciones.innerHTML = "";
    };
    opciones.appendChild(btn);
  });
}

function siguientePregunta() {
  indice++;
  const reflexion = document.getElementById("reflexion");
  reflexion.classList.add("oculto");
  document.getElementById("siguiente").classList.add("oculto");

  if (indice < situaciones.length) {
    mostrarSituacion();
  } else {
    mostrarResultado();
  }
}

function mostrarResultado() {
  document.getElementById("situacion").classList.add("oculto");
  document.getElementById("opciones").classList.add("oculto");
  document.getElementById("reflexion").classList.add("oculto");
  document.getElementById("siguiente").classList.add("oculto");

  const resultado = document.getElementById("resultado");
  resultado.classList.remove("oculto");
  resultado.innerHTML = `
    <h2>¡Juego terminado!</h2>
    <p>Tu puntaje: ${puntaje} / ${situaciones.length}</p>
    <p>${puntaje === situaciones.length ? "¡Gran trabajo! Sabes tomar buenas decisiones económicas." : "Puedes mejorar. ¡Vuelve a intentarlo y reflexiona tus elecciones!"}</p>
  `;
}

window.onload = () => {
  mezclarArray(situaciones);
  mostrarSituacion();
};
document.getElementById("volver-inicio").classList.remove("oculto");
