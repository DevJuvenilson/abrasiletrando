const header = document.getElementById('container-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled'); // muda o estilo
  } else {
    header.classList.remove('scrolled'); // volta ao padrão
  }
});

// Código para o menu dropdown
document.addEventListener('DOMContentLoaded', function () {
    const dropdown = document.querySelector('.nav-dropdown');
    const menu = dropdown.querySelector('.nav-dropdown-menu');

    dropdown.addEventListener('click', function (e) {
        // Evita que o clique no link feche imediatamente
        e.stopPropagation();
        menu.classList.toggle('show-dropdown');
    });

    // Fecha o dropdown ao clicar fora
    document.addEventListener('click', function () {
        menu.classList.remove('show-dropdown');
    });
});