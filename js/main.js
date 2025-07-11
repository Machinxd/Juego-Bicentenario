function ir(pagina) {
  const sonido = document.getElementById("click-sound");
  sonido.currentTime = 0;
  sonido.play();
  setTimeout(() => {
    window.location.href = pagina;
  }, 300); // para que suene antes de ir
}
