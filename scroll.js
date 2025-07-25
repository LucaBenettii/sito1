


let lastScrollY = window.scrollY;
const header = document.querySelector('header');
const delta = 5; // per evitare flicker su piccoli movimenti

window.addEventListener(
  'scroll',
  () => {
    const currentScrollY = window.scrollY;

    // Se siamo tornati all'inizio della pagina, mostra sempre l'header
    if (currentScrollY <= 0) {
      header.classList.remove('hide');
      lastScrollY = 0;
      return;
    }

    // Evita di reagire a micro scroll
    if (Math.abs(currentScrollY - lastScrollY) > delta) {
      if (currentScrollY > lastScrollY) {
        // Scorro in giù → nascondi
        header.classList.add('hide');
      } else {
        // Scorro in su → mostra
        header.classList.remove('hide');
      }
      lastScrollY = currentScrollY;
    }
  },
  { passive: true }
);



document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".section").forEach(section => {
    section.addEventListener("click", () => {
      const overlay = section.querySelector(".overlay");
      if (overlay) {
        const isVisible = overlay.style.opacity === "1";
        overlay.style.opacity = isVisible ? "0" : "1";
        overlay.style.pointerEvents = isVisible ? "none" : "auto";
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const video = document.querySelector('.vid1');
  video.muted = true;
  video.play().catch(() => {
    // Autoplay bloccato, riproduci al primo tocco
    document.body.addEventListener('click', () => video.play());
  });
});