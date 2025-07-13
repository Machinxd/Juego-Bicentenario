const situaciones = [
  {
    texto: "Tienes 10 soles. ¿Qué haces?",
    opciones: [
      { texto: "Compro una bandera para el desfile", puntos: 1, reflexion: null },
      { texto: "Gasto todo en dulces", puntos: 0, reflexion: "Es mejor invertir en cosas que te enseñen o te hagan sentir orgulloso de tu país." }
    ]
  },
  {
    texto: "¿Qué es mejor para la economía familiar?",
    opciones: [
      { texto: "Ahorrar una parte de lo que gano", puntos: 1, reflexion: null },
      { texto: "Gastar todo de inmediato", puntos: 0, reflexion: "Ahorrar permite estar preparado para emergencias y necesidades futuras." }
    ]
  },
  {
    texto: "Te ofrecen trabajo vendiendo productos patrios. ¿Qué haces?",
    opciones: [
      { texto: "Acepto y aprendo a vender", puntos: 1, reflexion: null },
      { texto: "Digo que no sin pensarlo", puntos: 0, reflexion: "Intentar cosas nuevas puede ayudarte a descubrir habilidades que no conocías." }
    ]
  },
  {
    texto: "¿En qué gastarías 5 soles?",
    opciones: [
      { texto: "En una cartilla educativa sobre el Perú", puntos: 1, reflexion: null },
      { texto: "En un juguete que se rompe rápido", puntos: 0, reflexion: "Invertir en educación te deja aprendizajes que duran más que un juguete." }
    ]
  },
  {
    texto: "Tu escuela quiere recaudar fondos para un viaje patriótico. ¿Qué haces?",
    opciones: [
      { texto: "Ayudo vendiendo en la feria", puntos: 1, reflexion: null },
      { texto: "No participo porque no me interesa", puntos: 0, reflexion: "Trabajar en equipo fortalece los lazos con tus compañeros y tu comunidad." }
    ]
  },
  {
    texto: "¿Qué representa una inversión responsable?",
    opciones: [
      { texto: "Ahorrar para comprar libros escolares", puntos: 1, reflexion: null },
      { texto: "Gastar en cosas que no necesito solo por moda", puntos: 0, reflexion: "Comprar solo por impulso puede dejarte sin dinero para lo importante." }
    ]
  },
  {
    texto: "Recibes una propina. ¿Qué haces con ella?",
    opciones: [
      { texto: "Guardo una parte y gasto otra", puntos: 1, reflexion: null },
      { texto: "Gasto todo sin pensar", puntos: 0, reflexion: "Es bueno disfrutar, pero también hay que aprender a administrar el dinero." }
    ]
  },
  {
    texto: "¿Qué actividad ayuda a la economía del Perú?",
    opciones: [
      { texto: "Comprar productos nacionales", puntos: 1, reflexion: null },
      { texto: "Comprar solo productos importados", puntos: 0, reflexion: "Comprar lo nacional apoya a los trabajadores y empresas peruanas." }
    ]
  },
  {
    texto: "¿Qué harías con tus ahorros?",
    opciones: [
      { texto: "Invertir en un curso educativo", puntos: 1, reflexion: null },
      { texto: "Gastarlo en videojuegos sin pensarlo", puntos: 0, reflexion: "La educación es una inversión que te abre muchas puertas." }
    ]
  },
  {
    texto: "Si ayudas a tu familia a vender empanadas, ¿qué aprendes?",
    opciones: [
      { texto: "Responsabilidad y trabajo en equipo", puntos: 1, reflexion: null },
      { texto: "Nada, solo es aburrido", puntos: 0, reflexion: "Cada experiencia es una oportunidad para aprender y crecer." }
    ]
  }
];

let indice = 0;
let puntaje = 0;

function mostrarSituacion() {
  const situacion = situaciones[indice];
  const contenedor = document.getElementById("situacion");
  const opciones = document.getElementById("opciones");

  contenedor.textContent = situacion.texto;
  opciones.innerHTML = "";

  situacion.opciones.forEach((op, i) => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => {
      puntaje += op.puntos;
      if (op.puntos === 0 && op.reflexion) {
        alert("Reflexión: " + op.reflexion);
      }
      indice++;
      if (indice < situaciones.length) {
        mostrarSituacion();
      } else {
        mostrarResultado();
      }
    };
    opciones.appendChild(btn);
  });
}

function mostrarResultado() {
  document.getElementById("situacion").classList.add("oculto");
  document.getElementById("opciones").classList.add("oculto");
  const resultado = document.getElementById("resultado");
  resultado.classList.remove("oculto");
  resultado.innerHTML = `
    <h2>¡Juego terminado!</h2>
    <p>Tu puntaje: ${puntaje} / ${situaciones.length}</p>
    <p>${puntaje === situaciones.length ? "¡Gran trabajo! Sabes tomar buenas decisiones económicas." : "Puedes mejorar. ¡Vuelve a intentarlo y reflexiona tus elecciones!"}</p>
  `;
}

window.onload = mostrarSituacion;
