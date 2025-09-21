const MOVIMENTOS_E_OBRAS = window.MOVIMENTOS_E_OBRAS;

// 1. Pega TODOS os parâmetros da URL de uma vez
function getParamsFromUrl() {
    const params = new URLSearchParams(window.location.search);
    // Corrigindo a sua sugestão de URL: parâmetros são separados por "&" e não "?"
    // URL correta: movimento.html?id=6&obra=1
    return {
        movimentoId: parseInt(params.get('id'), 10),
        obraId: parseInt(params.get('obra'), 10) // Retornará NaN se 'obra' não existir, o que é útil
    };
}

// 2. Busca o movimento pelo ID
function getMovimentoById(id) {
    return window.MOVIMENTOS_E_OBRAS.find(mov => mov.id === id);
}

// 3. Preenche o HTML com os dados do movimento
function preencherPaginaMovimento(movimento, posicao) {
    if (!movimento) {
        document.body.innerHTML = "<h1>Movimento não encontrado!</h1>";
        return;
    }

    const idObra = posicao - 1;

    // Limpa e preenche a seção de obras
    const sectionObras = document.querySelector('.section-informacoes-obra');
    sectionObras.innerHTML = `
        <h2 class="titulo-section-informacoes abril-fatface">${movimento.obras[idObra].nome_obra}</h2>
        ${movimento.obras[idObra].geracao ? `<p class="geracao-obra barlow-medium">${movimento.obras[idObra].geracao}</p>` : '<p class="geracao-obra barlow-medium"></p>'}
    `;

    const informacoes_basicas_obra = movimento.obras[idObra];
    const div_informacoes = document.createElement('div');
    div_informacoes.className = 'container-informacoes-obra';
    div_informacoes.innerHTML = `
        <div class="caracteristicas-obra">
            <div class="capa-retangulo">
                <img src="${informacoes_basicas_obra.foto_obra}" alt="Capa do livro ${informacoes_basicas_obra.nome_obra}">
            </div>
            <div class="informacoes-basicas-obra">
                <h3 class="titulo-informacoes-obra barlow-extrabold">INFORMAÇÕES BÁSICAS</h3>
                <p class="autor-obra barlow-bold">Autor: ${informacoes_basicas_obra.informacoes_basicas.autor}</p>
                <p class="ano-obra barlow-bold">Ano: ${informacoes_basicas_obra.informacoes_basicas.ano}</p>
                <p class="genero-obra barlow-bold">Gênero literário: ${informacoes_basicas_obra.informacoes_basicas.genero}</p>
            </div>
        </div>
        <div class="resumo-contexto-audio-obra">
            <div class="resumo-obra">
                <h3 class="titulo-resumo-obra barlow-extrabold">RESUMO DA OBRA</h3>
                <p class="texto-resumo-obra barlow-regular">${informacoes_basicas_obra.resumo_obra}</p>
            </div>
            <div class="contexto-obra">
                <div class="texto-contexto-obra">
                    <h3 class="titulo-contexto-obra barlow-extrabold">CONTEXTO</h3>
                    <ul class="lista-contexto-obra">
                        ${informacoes_basicas_obra.contexto_historico.map(item => `<li class="item-contexto-obra barlow-regular">${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="imagem-contexto-obra">
                    <img src="${informacoes_basicas_obra.imagem_contexto_historico}" alt="Imagem contexto histórico da obra ${informacoes_basicas_obra.nome_obra}">
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
    sectionObras.appendChild(div_informacoes);

    // Limpa e preenche a seção de aspectos linguísticos
    const sectionAspectos = document.querySelector('.section-aspectos-linguisticos-obra');
    sectionAspectos.innerHTML = `
        <h2 class="titulo-section-aspectos-linguisticos abril-fatface">Aspectos linguísticos</h2>
    `;

    const aspectos_linguisticos_obra = movimento.obras[idObra];
    const div_aspectos = document.createElement('div');
    div_aspectos.className = 'container-aspectos-linguisticos-obra';
    div_aspectos.innerHTML = `
        <div class="aspectos-linguisticos-obra">
            <div class="container-estrutura">
                <div class="texto-estrutura">
                    <h3 class="titulo-estrutura barlow-extrabold">ESTRUTURA</h3>
                    <ul class="lista-estrutura">
                        ${aspectos_linguisticos_obra.estrutura_obra.map(item => `<li class="item-estrutura barlow-regular">${item}</li>`).join('')}
                    </ul>
                </div>
                <div class="imagem-estrutura">
                    <img src="${aspectos_linguisticos_obra.imagem_estrutura_obra}" alt="Imagem estrutura">
                </div>
            </div>
            <div class="aspectos-gerais">
                <img src="${aspectos_linguisticos_obra.tempo_discurso_figuras_linguagem_e_linguagem_banner}" alt="Tempo, discurso, figuras de linguagem e linguagem da obra.">
            </div>
        </div>
        <div class="video-aspectos-obra">
            <h3 class="titulo-video-explicativo barlow-extrabold">VÍDEO EXPLICATIVO</h3>
            <video controls>
                <!-- LINK YOUTUBE -->
                <source src="${aspectos_linguisticos_obra.video_obra}" type="video/mp4">
                Seu navegador não suporta o elemento de vídeo.
            </video>
        </div>
    `;
    sectionAspectos.appendChild(div_aspectos);

    // Limpa e preenche a seção de quiz (placeholder)
    const sectionQuiz = document.querySelector('.section-quiz-obra');
    sectionQuiz.innerHTML = `
        <h2 class="titulo-quiz abril-fatface">Teste agora seus conhecimentos!</h2>
        <p class="barlow-regular">(Em breve um quiz sobre as obras deste movimento!)</p>
    `;
}

window.addEventListener('DOMContentLoaded', function () {
    const { movimentoId, obraId } = getParamsFromUrl();
    const movimento = getMovimentoById(movimentoId);
    
    if (!movimento) {
        document.body.innerHTML = "<h1>Movimento não encontrado!</h1>";
        return;
    };
    
    document.querySelector('.nome_pagina').textContent = `${movimento.nome_movimento}`;

    // Preenche as informações que são sempre exibidas (título e descrição do movimento)
    document.querySelector('.titulo-movimento').textContent = movimento.nome_movimento;
    document.querySelector('.descricao-movimento').textContent = movimento.descricao_movimento;

    document.querySelector('.primeiro-link-obra').href = `movimento.html?id=${movimentoId}&obra=1#obra`;
    document.querySelector('.primeiro-link-obra').textContent = `${movimento.obras[0].nome_obra}`;
    document.querySelector('.segundo-link-obra').href = `movimento.html?id=${movimentoId}&obra=2#obra`;
    document.querySelector('.segundo-link-obra').textContent = `${movimento.obras[1].nome_obra}`;
    document.querySelector('.terceiro-link-obra').href = `movimento.html?id=${movimentoId}&obra=3#obra`;
    document.querySelector('.terceiro-link-obra').textContent = `${movimento.obras[2].nome_obra}`;

    if (obraId) {
        preencherPaginaMovimento(movimento, obraId);
    } else {
        // Caso contrário, mostramos a visão geral do movimento com os links.
        renderizarVisaoGeralMovimento(movimento);
    }
});