const MOVIMENTOS_E_OBRAS = window.MOVIMENTOS_E_OBRAS;

// 1. Pega o ID da URL
function getIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get('id'), 10);
}

// 2. Busca o movimento pelo ID
function getMovimentoById(id) {
    return window.MOVIMENTOS_E_OBRAS.find(mov => mov.id === id);
}

// 3. Preenche o HTML com os dados do movimento
function preencherPaginaMovimento(movimento) {
    if (!movimento) {
        document.body.innerHTML = "<h1>Movimento não encontrado!</h1>";
        return;
    }

    // Título e descrição do movimento
    document.querySelector('.titulo-movimento').textContent = movimento.nome_movimento;
    document.querySelector('.descricao-movimento').textContent = movimento.descricao_movimento;

    // Limpa e preenche a seção de obras
    const sectionObras = document.querySelector('.section-informacoes-obra');
    sectionObras.innerHTML = `
        <h2 class="titulo-section-informacoes abril-fatface">${movimento.obras[0].nome_obra}</h2>
        ${movimento.obras[0].nome_obra ? `<p class="geracao-obra barlow-medium">${movimento.obras[0].geracao}</p>` : ''}
    `;
    movimento.obras.forEach(obra => {
        const div = document.createElement('div');
        div.className = 'container-informacoes-obra';
        div.innerHTML = `
            <div class="caracteristicas-obra">
                <div class="capa-retangulo">
                    <img src="${obra.foto_obra}" alt="Capa do livro ${obra.nome_obra}">
                </div>
                <div class="informacoes-basicas-obra">
                    <h3 class="titulo-informacoes-obra barlow-extrabold">INFORMAÇÕES BÁSICAS</h3>
                    <p class="autor-obra barlow-bold">Autor: ${obra.informacoes_basicas.autor}</p>
                    <p class="ano-obra barlow-bold">Ano: ${obra.informacoes_basicas.ano}</p>
                    <p class="genero-obra barlow-bold">Gênero literário: ${obra.informacoes_basicas.genero}</p>
                </div>
            </div>
            <div class="resumo-contexto-audio-obra">
                <div class="resumo-obra">
                    <h3 class="titulo-resumo-obra barlow-extrabold">RESUMO DA OBRA</h3>
                    <p class="texto-resumo-obra barlow-regular">${obra.resumo_obra}</p>
                </div>
                <div class="contexto-obra">
                    <div class="texto-contexto-obra">
                        <h3 class="titulo-contexto-obra barlow-extrabold">CONTEXTO</h3>
                        <ul class="lista-contexto-obra">
                            ${obra.contexto_historico.map(item => `<li class="item-contexto-obra barlow-regular">${item}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="imagem-contexto-obra">
                        <img src="${obra.imagem_contexto_historico}" alt="Imagem contexto">
                    </div>
                </div>
                <div class="audio-obra">
                    <h3 class="titulo-audio-obra barlow-extrabold">OUÇA A TRANSCRIÇÃO!</h3>
                    <audio controls>
                        <source src="${movimento.audio_movimento}" type="audio/mpeg">
                        Seu navegador não suporta o elemento de áudio.
                    </audio>
                </div>
            </div>
        `;
        sectionObras.appendChild(div);
    });

    // Limpa e preenche a seção de aspectos linguísticos
    const sectionAspectos = document.querySelector('.section-aspectos-linguisticos-obra');
    sectionAspectos.innerHTML = `
        <h2 class="titulo-section-aspectos-linguisticos abril-fatface">Aspectos linguísticos</h2>
    `;

    const obra = movimento.obras[0];
    const div = document.createElement('div');
    div.className = 'container-aspectos-linguisticos-obra';
    div.innerHTML = `
        <div class="aspectos-linguisticos-obra">
            <div class="container-estrutura">
                <div class="texto-estrutura">
                    <h3 class="titulo-estrutura barlow-extrabold">ESTRUTURA</h3>
                    <ul class="lista-estrutura">
                        ${obra.estrutura_obra.map(item => `<li class="item-estrutura barlow-regular">${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="imagem-estrutura">
                    <img src="${obra.imagem_estrutura_obra}" alt="Imagem estrutura">
                </div>
            </div>
            <div class="aspectos-gerais">
                <img src="assets/img/image.png" alt="Tempo, discurso, figuras de linguagem e linguagem da obra.">
            </div>
        </div>
        <div class="video-aspectos-obra">
            <h3 class="titulo-video-explicativo barlow-extrabold">VÍDEO EXPLICATIVO</h3>
            <iframe width="400" height="225" style="aspect-ratio:16/9; width:100%; max-width:400px;" src="${obra.video_obra}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    sectionAspectos.appendChild(div);

    // Limpa e preenche a seção de quiz (placeholder)
    const sectionQuiz = document.querySelector('.section-quiz-obra');
    sectionQuiz.innerHTML = `
        <h2 class="titulo-quiz abril-fatface">Teste agora seus conhecimentos!</h2>
        <p class="barlow-regular">(Em breve um quiz sobre as obras deste movimento!)</p>
    `;
}

window.addEventListener('DOMContentLoaded', function () {
    const id = getIdFromUrl();
    const movimento = getMovimentoById(id);
    console.log(movimento);
    preencherPaginaMovimento(movimento);
});
