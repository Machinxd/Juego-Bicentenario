const situaciones = [
  {
    texto: "Tienes 10 soles. ¿Qué haces?",
    opciones: [
      { texto: "Lo gasto todo en dulces", puntos: 0, reflexion: "Piensa en ahorrar, no todo es diversión." },
      { texto: "Ahorro la mitad y gasto la otra", puntos: 1 },
      { texto: "Lo invierto en vender limonada", puntos: 1 },
    ]
  },
  {
    texto: "Te ofrecen un trabajo después del colegio. ¿Qué haces?",
    opciones: [
      { texto: "Aceptas y administras bien tu tiempo", puntos: 1 },
      { texto: "Rechazas porque te da flojera", puntos: 0, reflexion: "La responsabilidad es clave para progresar." },
      { texto: "Aceptas pero no cumples", puntos: 0, reflexion: "La responsabilidad va de la mano con el compromiso." },
    ]
  },
  {
    texto: "Quieres un videojuego nuevo. ¿Qué haces?",
    opciones: [
      { texto: "Haces una alcancía y ahorras", puntos: 1 },
      { texto: "Pides prestado sin saber si podrás pagar", puntos: 0, reflexion: "Evita deudas innecesarias desde pequeño." },
      { texto: "Lo robas del celular de tu papá", puntos: 0, reflexion: "La honestidad vale más que cualquier juego." },
    ]
  },
  {
    texto: "¿Qué haces con tus propinas semanales?",
    opciones: [
      { texto: "Gasto un poco y guardo el resto", puntos: 1 },
      { texto: "Lo gasto todo cada semana", puntos: 0, reflexion: "Si no ahorras, no tendrás para emergencias." },
      { texto: "Se lo doy a un amigo sin razón", puntos: 0, reflexion: "Aprende a valorar lo que tienes." },
    ]
  },
  {
    texto: "¿Cómo defines una prioridad?",
    opciones: [
      { texto: "Algo importante que debes hacer antes", puntos: 1 },
      { texto: "Algo que me da flojera hacer", puntos: 0, reflexion: "Confundir flojera con prioridad puede traerte problemas." },
      { texto: "Cualquier cosa divertida", puntos: 0, reflexion: "Prioridad no es sinónimo de diversión." },
    ]
  },
  {
    texto: "¿Qué haces si ganas un premio en dinero?",
    opciones: [
      { texto: "Ahorras una parte y te das un gusto", puntos: 1 },
      { texto: "Lo gastas todo en el día", puntos: 0, reflexion: "El dinero no dura si no lo cuidas." },
      { texto: "Lo pierdes por no prestarle atención", puntos: 0, reflexion: "Debes ser responsable con tus ganancias." },
    ]
  },
  {
    texto: "¿Cuál es una buena manera de ganar dinero siendo niño?",
    opciones: [
      { texto: "Ayudar en casa con tareas extra", puntos: 1 },
      { texto: "Esperar que tus papás te den sin hacer nada", puntos: 0, reflexion: "Ganar dinero implica esfuerzo, no esperar." },
      { texto: "Molestar a tus amigos para que te den", puntos: 0, reflexion: "Eso no es correcto ni respetuoso." },
    ]
  },
  {
    texto: "¿Qué es ahorrar?",
    opciones: [
      { texto: "Guardar una parte del dinero para después", puntos: 1 },
      { texto: "Gastar solo en cosas caras", puntos: 0, reflexion: "Ahorrar no significa gastar más." },
      { texto: "No gastar nunca en nada", puntos: 0, reflexion: "Ahorrar no es lo mismo que privarte siempre." },
    ]
  },
  {
    texto: "¿Qué haces si ves algo que quieres pero no tienes dinero?",
    opciones: [
      { texto: "Ahorras hasta poder comprarlo", puntos: 1 },
      { texto: "Lloras para que te lo compren", puntos: 0, reflexion: "No todo se consigue llorando." },
      { texto: "Lo robas de la tienda", puntos: 0, reflexion: "Robar nunca es la solución." },
    ]
  },
  {
    texto: "¿Qué significa 'inversión'?",
    opciones: [
      { texto: "Usar dinero para generar más dinero", puntos: 1 },
      { texto: "Comprar ropa cara", puntos: 0, reflexion: "Invertir no es lo mismo que gastar." },
      { texto: "Comer en restaurantes", puntos: 0, reflexion: "Eso es gasto, no inversión." },
    ]
  }
];

// Mezclar array
function mezclarArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let indice = 0;
let puntaje = 0;

function mostrarSituacion() {
  const situacion = situaciones[indice];
  const contenedor = document.getElementById("situacion");
  const opciones = document.getElementById("opciones");
  const reflexion = document.getElementById("reflexion");

  contenedor.textContent = situacion.texto;
  opciones.innerHTML = "";
  reflexion.classList.add("oculto");

  const mezcladas = mezclarArray([...situacion.opciones]);

  mezcladas.forEach((op) => {
    const btn = document.createElement("button");
    btn.textContent = op.texto;
    btn.onclick = () => {
      puntaje += op.puntos;

      opciones.innerHTML = "";
      if (op.puntos === 0 && op.reflexion) {
        reflexion.textContent = "Reflexión: " + op.reflexion;
      } else {
        reflexion.textContent = "¡Muy bien!";
      }

      reflexion.classList.remove("oculto");
      document.getElementById("siguiente").classList.remove("oculto");
    };
    opciones.appendChild(btn);
  });
}

function siguientePregunta() {
  indice++;
  document.getElementById("reflexion").classList.add("oculto");
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
    <div style="text-align: center;">
      <h2 style="color: #b71c1c;">¡Juego terminado!</h2>
      <p style="font-size: 1.2rem; font-weight: bold;">Tu puntaje: ${puntaje} / ${situaciones.length}</p>
      <p style="margin-top: 10px;">
        ${puntaje === situaciones.length
          ? "¡Gran trabajo! Sabes tomar buenas decisiones económicas."
          : "Puedes mejorar. ¡Vuelve a intentarlo y reflexiona tus elecciones!"}
      </p>
    </div>
  `;

  document.getElementById("volver-inicio").classList.remove("oculto");
}

// Iniciar juego
window.onload = () => {
  mezclarArray(situaciones);
  mostrarSituacion();
};
