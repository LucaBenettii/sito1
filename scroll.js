


let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    // Scrolling verso il basso → nascondi header
    header.classList.add('hide');
  } else {
    // Scrolling verso l'alto → mostra header
    header.classList.remove('hide');
  }

  lastScrollY = currentScrollY;
});

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