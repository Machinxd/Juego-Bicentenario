let etapa = 1;

function accion(tipo) {
  const planta = document.getElementById("planta");
  const mensaje = document.getElementById("mensaje");

  if (etapa >= 4) {
    mensaje.textContent = "¡Tu planta ya está completamente crecida!";
    return;
  }

  switch (tipo) {
    case "agua":
      if (etapa === 1) {
        etapa++;
        planta.src = "assets/planta2.png";
        mensaje.textContent = "¡La planta ha sido regada!";
      } else {
        mensaje.textContent = "Eso no era lo que necesitaba ahora.";
      }
      break;

    case "sol":
      if (etapa === 2) {
        etapa++;
        planta.src = "assets/planta3.png";
        mensaje.textContent = "¡La planta recibió luz solar!";
      } else {
        mensaje.textContent = "Eso no era lo que necesitaba ahora.";
      }
      break;

    case "limpiar":
      if (etapa === 3) {
        etapa++;
        planta.src = "assets/planta4.png";
        mensaje.textContent = "¡La planta está limpia y feliz!";
      } else {
        mensaje.textContent = "Eso no era lo que necesitaba ahora.";
      }
      break;
  }
}
