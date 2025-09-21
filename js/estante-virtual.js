// const { LIVROS_ESTANTE_VIRTUAL } = require("../db_estante_virtual");
const LIVROS_ESTANTE_VIRTUAL = window.LIVROS_ESTANTE_VIRTUAL;

function renderObras(container, obras, qtd) {
    container.innerHTML = '';
    const mostrar = qtd !== undefined ? obras.slice(0, qtd) : obras;
    mostrar.forEach(obra => {
        const div = document.createElement('div');
        div.className = 'cartao';
        div.innerHTML = `
            <img src="${obra.capa_livro}" alt="Capa livro" class="capa-livro">
            <h4 class="titulo-cartao barlow-bold">${obra.titulo}</h4>
            <p class="descricao-cartao barlow-regular">Escrito por <b>${obra.autor}</b> em <b>${obra.ano}</b>. ${obra.breve_descricao}</p>
        `;
        container.appendChild(div);
    });
}

function setupVerMais(sectionSelector, obras) {
    const section = document.querySelector(sectionSelector);
    const container = section.querySelector('.container-obras');
    const botao = section.querySelector('.botao-veja-mais');
    let mostrandoTudo = false;
    let scrollAntes = 0; // Para guardar a posição de rolagem
    const PRINCIPAIS = 3;
    
    function atualizar() {
        if (mostrandoTudo) {
            renderObras(container, obras);
            botao.textContent = 'VER MENOS';
        } else {
            renderObras(container, obras, PRINCIPAIS);
            botao.textContent = 'VEJA MAIS!';
        }
    }

    botao.addEventListener('click', () => {
        if (!mostrandoTudo) {
            // Salva a posição antes de expandir
            scrollAntes = window.scrollY;
            mostrandoTudo = true;
            atualizar();
        } else {
            mostrandoTudo = false;
            atualizar();
            // Volta para a posição salva
            window.scrollTo({ top: scrollAntes, behavior: 'smooth' });
        }
    });

    atualizar();
}

window.addEventListener('DOMContentLoaded', function() {
    setupVerMais('.FUVEST', LIVROS_ESTANTE_VIRTUAL[0].obras);
    setupVerMais('.UNICAMP', LIVROS_ESTANTE_VIRTUAL[1].obras);
    setupVerMais('.UERJ', LIVROS_ESTANTE_VIRTUAL[2].obras);
});