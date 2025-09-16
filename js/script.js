const header = document.getElementById('container-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // muda o estilo
  } else {
    header.classList.remove('scrolled'); // volta ao padrão
  }
});