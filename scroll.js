


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
