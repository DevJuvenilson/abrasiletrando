const MOVIMENTOS_E_OBRAS = [
    // TROVADORISMO
    {
        id: 1,
        nome_movimento: "Trovadorismo",
        descricao_movimento: "O Trovadorismo é o primeiro movimento literário da língua portuguesa, surgido na Idade Média, entre os séculos XII e XIV. Caracteriza-se pela poesia cantada, composta por trovadores que viajavam entre cortes e nobres, compondo cantigas para entretenimento e prestígio social. As principais formas poéticas são as cantigas de amor, cantigas de amigo e cantigas de escárnio e maldizer. A linguagem é simples, clara e direta, própria da lírica popular, com forte musicalidade e repetição.",
        audio_movimento: "assets/audios/trovadorismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Ondas do Mar de Vigo",
                foto_obra: "assets/img/obras/trovadorismo/ondas_do_mar_de_vigo.png",
                informacoes_basicas: {
                    autor: "Martim Codax",
                    ano: "Século XII",
                    genero: "Cantiga de amigo",
                },
                contexto_historico: [
                    "Idade média",
                    "Sociedade feudal",
                    "Trovadores circulavam entre cortes e nobres, compondo poesia para entretenimento e prestígio social."
                ],
                resumo_obra: "A cantiga mostra uma jovem falando às ondas do mar de Vigo, perguntando se elas viram seu amado que está ausente. Ela expressa saudade, preocupação e esperança de que ele volte em breve. O mar funciona como confidente de seus sentimentos, e a repetição do refrão reforça a emoção e a musicalidade do poema.",
                estrutura_obra: [
                    "O eu-lírico é feminino, expressando saudade, amor e espera pelo amado.",
                    "Elementos da natureza, como o mar, são usados para refletir os sentimentos da personagem.",
                    "Musicalidade - as cantigas de Martim Codax vêm com notação musical no Pergaminho Vindel, permitindo que fossem cantadas."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Discurso direto, pois a jovem fala diretamente às ondas do mar, perguntando pelo amado ausente (“Ondas do mar de Vigo, se vistes meu amigo?”).",
                figuras_de_linguagem: [
                    "Personificação: o mar é tratado como confidente do sentimento da jovem.",
                    "Repetição: reforça a musicalidade e a emoção (“Ondas do mar de Vigo, se vistes meu amigo?” / “Ondas do mar levado, se vistes meu amado?”).",
                    "Hipérbole: exagero da saudade e esperança para transmitir intensidade do sentimento."
                ],
                linguagem: [
                    "Características: simples, clara e direta, própria da lírica popular.",
                    "Objetivo: transmitir emoção, saudade e esperança de forma musical e repetitiva."
                ]
            },
            {
                id: 2,
                nome_obra: "Ai dona fea, fostes-vos queixar",
                foto_obra: "assets/img/obras/trovadorismo/ai_dona_fea_fostes-vos_queixar.png",
                informacoes_basicas: {
                    autor: "João Garcia de Guilhade",
                    ano: "Entre 1241 e 1270",
                    genero: "Cantiga de escárnio"
                },
                contexto_historico: [
                    "Século XIII, auge da lírica galego-portuguesa.",
                    "Cantigas de escárnio - críticas indiretas e humor mordaz.",
                    "Feudalismo, corte - cânticas com duplo sentido e ironia."
                ],
                resumo_obra: "A cantiga é uma resposta irônica de João Garcia a uma mulher que se queixou por ele nunca tê-la louvado em suas composições. Em tom sarcástico, o trovador afirma que agora fará uma cantiga para elogiá-la, chamando-a de “dona feia, velha e sandia” (louca).",
                estrutura_obra: [
                    "Estrofe com versos de 8 sílabas métricas.",
                    "Refrão repetitivo: 'Dona fea, velha e sandia', reforçando o tom irônico.",
                    "Estrutura paralelística: repetição de ideias com pequenas variações, característica das cantigas de escárnio."
                ],
                tempo_obra: "Cronológico, situando-se no contexto histórico da Idade Média.",
                discurso_obra: "Direto, onde o trovador se dirige diretamente à mulher, utilizando a segunda pessoa do singular ('vos'), sem intermediários ou narração.",
                figuras_de_linguagem: [
                    "Ironia: O trovador afirma que fará uma cantiga louvando a mulher, mas o faz de forma sarcástica.",
                    "Paralelismo: Estrutura repetitiva das estrofes, com variações mínimas, típica das cantigas de escárnio.",
                    "Apóstrofe: O trovador se dirige diretamente à mulher, como se ela estivesse presente."
                ],
                linguagem: [
                    "Linguagem coloquial, direta e sarcástica. Informal, com uso de expressões populares e humor ácido, para criticar e zombar da mulher que se queixou, utilizando o humor como ferramenta de crítica social."
                ]
            },
            {
                id: 3,
                nome_obra: "Amor, que por mim não guardas tino",
                foto_obra: "assets/img/obras/trovadorismo/amor_que_por_mim_nao_guardas_tino.png",
                informacoes_basicas: {
                    autor: "Dom Dinis I de Portugal",
                    ano: "Século XIII",
                    genero: "Cantiga de amor"
                },
                contexto_historico: [
                    "Século XIII, auge da lírica galego-portuguesa.",
                    "Sociedade feudal, com forte presença da corte e da cultura trovadoresca.",
                    "Expressão de sentimentos amorosos, muitas vezes com temas de sofrimento e desejo não correspondido."
                ],
                resumo_obra: "A cantiga apresenta um diálogo entre uma donzela e as flores de um pinheiro. A donzela questiona as flores sobre o paradeiro do seu amado ausente, expressando saudade e preocupação. As flores respondem tranquilizando-a, assegurando-lhe que o amado está são e salvo e que voltará em breve.",
                estrutura_obra: [
                    "Estrofes com versos de 8 sílabas métricas.",
                    "Diálogo entre a donzela e as flores, com repetição do refrão 'Ai Deus, e u é?'.",
                    "Refrão: Repetição do verso 'Ai Deus, e u é?' reforça a emoção e a musicalidade da cantiga."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Direto, onde a donzela se dirige diretamente às flores, questionando-as sobre o paradeiro do seu amado, sem intermediários ou narração.",
                figuras_de_linguagem: [
                    "Apóstrofe: A donzela se dirige diretamente às flores, como se fossem capazes de responder.",
                    "Repetição: Uso do refrão 'Ai Deus, e u é?' para reforçar a emoção da donzela.",
                    "Personificação: As flores são tratadas como seres capazes de fornecer informações sobre o amado."
                ],
                linguagem: [
                    "Linguagem simples, com apóstrofe, repetição e personificação, transmitindo emoção e musicalidade."
                ]
            }
        ]
    },
    // HUMANISMO
    {
        id: 2,
        nome_movimento: "Humanismo",
        descricao_movimento: "O Humanismo é um movimento cultural e intelectual que surgiu na Europa durante o Renascimento, enfatizando a redescoberta dos valores da Antiguidade Clássica, a dignidade do ser humano e a importância da razão. Em Portugal, o Humanismo se manifestou nas artes, na literatura e na filosofia, promovendo uma visão mais crítica e racional do mundo.",
        audio_movimento: "assets/audios/humanismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Crônica del Rei Dom João I",
                foto_obra: "assets/img/obras/humanismo/cronica_del_rei_dom_joao_i.png",
                informacoes_basicas: {
                    autor: "Fernão Lopes",
                    ano: "Início do século XV",
                    genero: "Crônica"
                },
                contexto_historico: [
                    "Início do Humanismo em Portugal",
                    "Sociedade feudal em transformação",
                    "Função: registrar fatos históricos, feitos de reis e nobres, propaganda e referência histórica"
                ],
                resumo_obra: "Fernão Lopes narra os acontecimentos do reinado de Dom João I, destacando a consolidação da dinastia de Avis, a vitória na Batalha de Aljubarrota e o fortalecimento do reino português. Mistura relatos factuais com comentários do cronista sobre virtudes e defeitos dos personagens.",
                estrutura_obra: [
                    "Crônica narrativa em prosa",
                    "Ordem cronológica dos acontecimentos",
                    "Intercalação de juízos morais e comentários do autor"
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Indireto, pois o narrador relata fatos e fala sobre personagens sem citá-los diretamente",
                figuras_de_linguagem: [
                    "Comparações: para elogiar feitos militares ou virtudes",
                    "Hipérbole: ao enaltecer heróis ou batalhas",
                    "Metonímia: uso de nomes de cidades ou batalhas para representar eventos"
                ],
                linguagem: [
                    "Formal, culta, clara e objetiva, típica da historiografia medieval e humanista"
                ]
            },
            {
                id: 2,
                nome_obra: "Auto da Barca do Inferno",
                foto_obra: "assets/img/obras/humanismo/auto_da_barca_do_inferno.png",
                informacoes_basicas: {
                    autor: "Gil Vicente",
                    ano: "1517",
                    genero: "Auto de teatro alegórico / moralizante"
                },
                contexto_historico: [
                    "Humanismo português, início do século XVI",
                    "Sociedade em transformação, críticas sociais e morais",
                    "Função: entretenimento, crítica social e moral, ensinando sobre o céu, inferno e comportamento humano"
                ],
                resumo_obra: "Gil Vicente apresenta personagens da sociedade portuguesa sendo julgados após a morte, decidindo se irão para o céu ou para o inferno. Cada personagem representa vícios ou virtudes humanas, servindo de crítica moral e social.",
                estrutura_obra: [
                    "Teatro alegórico em versos e diálogos",
                    "Dividido em cenas curtas com entrada da Barca do Inferno e da Barca do Paraíso",
                    "Personagens simbólicos: fidalgo, judeu, frade, etc."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Direto, os personagens falam diretamente entre si e com o público, usando monólogos e diálogos",
                figuras_de_linguagem: [
                    "Ironia: críticas sociais sutis ou explícitas",
                    "Alusão: referências a textos bíblicos e religiosos",
                    "Personificação: o pecado e a virtude aparecem como entidades simbólicas"
                ],
                linguagem: [
                    "Mistura de linguagem popular e culta, com humor, sátira e críticas morais"
                ]
            },
            {
                id: 3,
                nome_obra: "Cancioneiro Geral",
                foto_obra: "assets/img/obras/humanismo/cancioneiro_geral.png",
                informacoes_basicas: {
                    autor: "Garcia de Resende",
                    ano: "1516",
                    genero: "Coletânea de poesia lírica"
                },
                contexto_historico: [
                    "Humanismo português, século XVI",
                    "Corte portuguesa, valorização da poesia e literatura culta",
                    "Função: preservar obras poéticas medievais e renascentistas"
                ],
                resumo_obra: "O Cancioneiro Geral reúne centenas de poemas de diversos autores, abordando temas como amor, sátira, crítica social e moral, refletindo a diversidade literária da época.",
                estrutura_obra: [
                    "Coletânea organizada por temas e gêneros poéticos",
                    "Versos metrificados, com predominância de cantigas de amor e sátira",
                    "Apresenta poesia de corte e popular"
                ],
                tempo_obra: "Cronológico e retrospectivo",
                discurso_obra: "Direto, as vozes poéticas falam diretamente, seja em cantigas de amor ou sátira",
                figuras_de_linguagem: [
                    "Metáfora: sentimentos e críticas simbólicas",
                    "Apóstrofe: comunicação direta com a amada ou alvo da sátira",
                    "Hipérbole: exagero emocional ou moral"
                ],
                linguagem: [
                    "Varia entre formal e culta (poesia de corte), popular e humorística (cantigas de escárnio), acessível aos leitores da corte, com musicalidade e ritmo."
                ]
            }
        ]
    },
    // CLASSICISMO
    {
        id: 3,
        nome_movimento: "Classicismo",
        descricao_movimento: "O Classicismo é um movimento cultural e artístico que surgiu na Europa durante o Renascimento, caracterizado pela valorização dos ideais da Antiguidade Clássica, como a harmonia, o equilíbrio, a proporção e a busca pela perfeição estética. Em Portugal, o Classicismo se manifestou na literatura, nas artes plásticas e na arquitetura, refletindo uma visão humanista do mundo e uma valorização da razão e da beleza.",
        audio_movimento: "assets/audios/classicismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Amor é fogo que arde sem se ver",
                foto_obra: "assets/img/obras/classicismo/amor_e_fogo_que_arde_sem_se_ver.png",
                informacoes_basicas: {
                    autor: "Luís de Camões",
                    ano: "1598",
                    genero: "Soneto"
                },
                contexto_historico: [
                    "Renascimento europeu",
                    "Influência das expedições luso-espanholas",
                    "Valorização da razão, equilíbrio e universalismo"
                ],
                resumo_obra: "O soneto reflete sobre a natureza contraditória do amor, utilizando antíteses para mostrar sentimentos opostos. É um dos mais famosos da língua portuguesa, destacando a universalidade e a intensidade do amor.",
                estrutura_obra: [
                    "Soneto em quatro estrofes: dois quartetos e dois tercetos",
                    "Versos decassílabos",
                    "Esquema rítmico ABBA ABBA CDC DCD"
                ],
                tempo_obra: "Psicológico",
                discurso_obra: "Discurso lírico em primeira pessoa",
                figuras_de_linguagem: [
                    "Antítese",
                    "Paradoxo",
                    "Metáfora"
                ],
                linguagem: [
                    "Formal, clássica e descritiva"
                ]
            }
        ]
    },
    // BARROCO
    {
        id: 4,
        nome_movimento: "Barroco",
        descricao_movimento: "O Barroco é um movimento cultural e artístico que surgiu na Europa no final do século XVI e se estendeu até o século XVIII, caracterizado por sua exuberância, complexidade e dramaticidade. No Brasil, o Barroco se manifestou principalmente na literatura, nas artes plásticas e na arquitetura, refletindo as contradições da época, como a tensão entre a fé religiosa e a razão, o corpo e a alma, o efêmero e o eterno. A literatura barroca é marcada pelo uso de figuras de linguagem como a antítese, o paradoxo e a metáfora, além de uma linguagem rebuscada e elaborada.",
        audio_movimento: "assets/audios/barroco.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Sermões",
                foto_obra: "assets/img/obras/barroco/sermoes.png",
                informacoes_basicas: {
                    autor: "Padre Antônio Vieira",
                    ano: "Séculos XVII - XVIII",
                    genero: "Sermão/Oratória Sacra"
                },
                contexto_historico: [
                    "Expansão da Igreja Católica (Contrarreforma)",
                    "Colonização portuguesa no Brasil",
                    "Barroco marcado por contradições (razão x fé, corpo x alma)"
                ],
                resumo_obra: "Conjunto de sermões que unem religiosidade, crítica social e defesa da fé católica, usando metáforas para persuadir.",
                estrutura_obra: [
                    "Prosas argumentativas em sermões"
                ],
                tempo_obra: "Cronológico (linear, acompanha o discurso)",
                discurso_obra: "Predominantemente direto (endereço ao público)",
                figuras_de_linguagem: [
                    "Metáfora",
                    "Antítese",
                    "Paradoxo"
                ],
                linguagem: [
                    "Culta, elaborada e rebuscada"
                ]
            },
            {
                id: 2,
                nome_obra: "Prosopopeia",
                foto_obra: "assets/img/obras/barroco/prosopopeia.png",
                informacoes_basicas: {
                    autor: "Bento Teixeira",
                    ano: "1601",
                    genero: "Poema épico"
                },
                contexto_historico: [
                    "Influência direta de Os Lusíadas (Camões)",
                    "Primeira obra barroca no Brasil"
                ],
                resumo_obra: "Exalta o governador Jorge de Albuquerque Coelho e as conquistas portuguesas em terras brasileiras.",
                estrutura_obra: [
                    "Poema épico, versos decassílabos"
                ],
                tempo_obra: "Cronológico (narrativo linear)",
                discurso_obra: "Indireto",
                figuras_de_linguagem: [
                    "Hipérbole",
                    "Metáfora",
                    "Antítese"
                ],
                linguagem: [
                    "Culta, solene, inspirada em Camões"
                ]
            },
            {
                id: 3,
                nome_obra: "Obras Poéticas",
                foto_obra: "assets/img/obras/barroco/obras_poeticas.png",
                informacoes_basicas: {
                    autor: "Gregório de Matos",
                    ano: "Século XVII",
                    genero: "Poesia lírica, satírica e religiosa"
                },
                contexto_historico: [
                    "Crise do século XVII (mortalidade, pecado e efemeridade)",
                    "Salvador (BA) como centro da vida colonial"
                ],
                resumo_obra: "Reúne poesias de amor, religiosas e sátiras críticas à sociedade, revelando contradições do homem barroco.",
                estrutura_obra: [
                    "Versos líricos e satíricos, sonetos e redondilhas"
                ],
                tempo_obra: "Psicológico (interioridade do eu lírico)",
                discurso_obra: "Indireto livre (voz do eu lírico misturada ao contexto)",
                figuras_de_linguagem: [
                    "Antítese",
                    "Paradoxo",
                    "Metáfora"
                ],
                linguagem: [
                    "Variada (ora culta e rebuscada, ora coloquial nas sátiras)"
                ]
            }
        ]
    },
    // ARCADISMO
    {
        id: 5,
        nome_movimento: "Arcadismo",
        descricao_movimento: "O Arcadismo, também conhecido como Neoclassicismo, é um movimento literário que surgiu na Europa no século XVIII, como uma reação ao Barroco. Caracteriza-se pela valorização da simplicidade, da natureza e da razão, buscando inspiração na Antiguidade Clássica. No Brasil, o Arcadismo se manifestou principalmente na poesia, com temas como o amor idealizado, a vida bucólica e a crítica social. A linguagem é clara, objetiva e equilibrada, refletindo os ideais iluministas da época.",
        audio_movimento: "assets/audios/arcadismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Marília de Dirceu",
                foto_obra: "assets/img/obras/arcadismo/marilia_de_dirceu.png",
                informacoes_basicas: {
                    autor: "Tomás Antônio Gonzaga",
                    ano: "1792",
                    genero: "Poema lírico e narrativo"
                },
                contexto_historico: [
                    "Ciclo da Mineração",
                    "Inconfidência Mineira",
                    "Influência do Iluminismo"
                ],
                resumo_obra: "Trata do amor idealizado entre o pastor Dirceu e Marília, exaltando a vida simples e bucólica; e, nas partes posteriores, aborda a saudade, a dor e a esperança do poeta durante a prisão.",
                estrutura_obra: [
                    "80 liras e 13 sonetos divididos em 3 partes",
                    "1ª parte: exaltação da beleza de Marília e da natureza",
                    "2ª parte: tom de solidão devido à prisão do autor",
                    "3ª parte: temática semelhante à primeira"
                ],
                tempo_obra: "Psicológico",
                discurso_obra: "Discurso direto - eu lírico fala diretamente com Marília",
                figuras_de_linguagem: [
                    "Anáfora",
                    "Metáfora",
                    "Personificação"
                ],
                linguagem: [
                    "Simples, acessível e com marcas clássicas - idealização/bucolismo"
                ]
            },
            {
                id: 2,
                nome_obra: "Cartas Chilenas",
                foto_obra: "assets/img/obras/arcadismo/cartas_chilenas.png",
                informacoes_basicas: {
                    autor: "Tomás Antônio Gonzaga",
                    ano: "Final do século XVIII",
                    genero: "Poema satírico"
                },
                contexto_historico: [
                    "Inconfidência Mineira",
                    "Crítica à administração colonial"
                ],
                resumo_obra: "Critica, de forma irônica e satírica, os abusos de poder, a corrupção e as injustiças da administração colonial em Minas Gerais.",
                estrutura_obra: [
                    "13 cartas escritas por Tomás Antônio Gonzaga, através do pseudônimo Critilo",
                    "Versos decassílabos e brancos"
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Discurso direto",
                figuras_de_linguagem: [
                    "Ironia",
                    "Metáfora",
                    "Hipérbole"
                ],
                linguagem: [
                    "Satírica, irônica e, por vezes, agressiva"
                ]
            },
            {
                id: 3,
                nome_obra: "O Uraguai",
                foto_obra: "assets/img/obras/arcadismo/o_uraguai.png",
                informacoes_basicas: {
                    autor: "Basílio da Gama",
                    ano: "1769",
                    genero: "Poema épico"
                },
                contexto_historico: [
                    "Expedições luso-espanholas",
                    "Missões jesuíticas no Rio Grande do Sul"
                ],
                resumo_obra: "Narra as Guerras Guaraníticas, exaltando a coragem dos indígenas e criticando a violência e exploração dos colonizadores.",
                estrutura_obra: [
                    "Dividido em cinco cantos sem divisão em estrofes",
                    "Versos decassílabos sem rima"
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Discurso narrativo em 3ª pessoa e discurso direto",
                figuras_de_linguagem: [
                    "Hipérbole",
                    "Metáfora",
                    "Comparação"
                ],
                linguagem: [
                    "Formal, clássica e descritiva"
                ]
            }
        ]
    },
    // ROMANTISMO
    {
        id: 6,
        nome_movimento: "Romantismo",
        descricao_movimento: "O Romantismo é um movimento literário que surgiu no final do século XVIII e se estendeu pelo século XIX, caracterizado pela valorização da emoção, da imaginação e da individualidade. No Brasil, o Romantismo teve um papel importante na construção da identidade nacional, explorando temas como a natureza, o indígena, o passado histórico e a exaltação do amor. A linguagem é marcada pela subjetividade, pelo uso de figuras de linguagem e por uma estética que busca o belo e o sublime.",
        audio_movimento: "assets/audios/romantismo.mp3",
        geracoes: true,
        obras: [
            {
                id: 1,
                nome_obra: "Iracema",
                foto_obra: "assets/img/obras/romantismo/iracema.png",
                geracao: "1ª GERAÇÃO ROMÂNTICA",
                informacoes_basicas: {
                    autor: "José de Alencar",
                    ano: "1865",
                    genero: "Romance indianista"
                },
                contexto_historico: [
                    "Colonização do Brasil",
                    "Formação da nação brasileira - 1ª geração"
                ],
                resumo_obra: "Iracema conta a história de amor entre a índia Iracema e o português Martim, simbolizando a fusão entre indígenas e colonizadores e a formação do povo brasileiro, na figura do 1º cearense.",
                estrutura_obra: [
                    "Narrativa em prosa, dividida em 33 capítulos."
                ],
                tempo_obra: "Predomínio do tempo cronológico.",
                discurso_obra: "Discurso narrativo em 3ª pessoa e discurso direto.",
                figuras_de_linguagem: [
                    "Metáfora",
                    "Comparação",
                    "Antítese"
                ],
                linguagem: [
                    "Linguagem poética, descritiva e sentimental."
                ]
            },
            {
                id: 2,
                nome_obra: "Noite na Taverna",
                foto_obra: "assets/img/obras/romantismo/noite_na_taverna.png",
                geracao: "2ª GERAÇÃO ROMÂNTICA",
                informacoes_basicas: {
                    autor: "Álvares de Azevedo",
                    ano: "1855",
                    genero: "Contos"
                },
                contexto_historico: [
                    "Autores brasileiros vão estudar na Europa",
                    "Influência europeia do “Mal do século”"
                ],
                resumo_obra: "Noite na Taverna narra as histórias sombrias e dramáticas de cinco jovens que se reúnem em uma taverna, cada um contando episódios de amor, vícios, crimes e morte.",
                estrutura_obra: [
                    "Narrativa-moldura dividida em 7 capítulos - prólogo, epílogo e 5 contos."
                ],
                tempo_obra: "Psicológico - sentimentos, angústias, obsessões e delírios dos narradores.",
                discurso_obra: "Discurso direto em 1ª pessoa.",
                figuras_de_linguagem: [
                    "Hipérbole",
                    "Metáfora",
                    "Antítese"
                ],
                linguagem: [
                    "Linguagem formal, dramática e pessimista."
                ]
            },
            {
                id: 3,
                nome_obra: "O Navio Negreiro",
                foto_obra: "assets/img/obras/romantismo/o_navio_negreiro.png",
                geracao: "3ª GERAÇÃO ROMÂNTICA",
                informacoes_basicas: {
                    autor: "Castro Alves",
                    ano: "1869",
                    genero: "Poema épico dramático"
                },
                contexto_historico: [
                    "Escravidão no Brasil",
                    "Movimento abolicionista"
                ],
                resumo_obra: "O Navio Negreiro é um poema que denuncia os horrores da escravidão, descrevendo a viagem dos africanos nos navios negreiros com cenas de dor, sofrimento e injustiça.",
                estrutura_obra: [
                    "Poema épico dramático dividido em seis partes."
                ],
                tempo_obra: "Psicológico - emoções, sofrimento e indignação dos escravizados.",
                discurso_obra: "Discurso lírico-narrativo, em 1ª pessoa.",
                figuras_de_linguagem: [
                    "Metáfora",
                    "Comparação",
                    "Personificação",
                    "Anáfora"
                ],
                linguagem: [
                    "Linguagem expressiva, poética e engajada (apontamento de denúncia social)."
                ]
            }
        ]
    },
    // REALISMO
    {
        id: 7,
        nome_movimento: "Realismo",
        descricao_movimento: "O Realismo é um movimento literário que surgiu na segunda metade do século XIX, como uma reação ao Romantismo. Caracteriza-se pela representação objetiva e detalhada da realidade, com foco na análise social, psicológica e moral dos personagens. No Brasil, o Realismo se manifestou principalmente na prosa, com obras que abordam temas como a hipocrisia social, a luta de classes, a corrupção e os conflitos internos dos indivíduos. A linguagem é clara, precisa e direta, buscando retratar a vida cotidiana de forma crítica e reflexiva.",
        audio_movimento: "assets/audios/realismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Memórias Póstumas de Brás Cubas",
                foto_obra: "assets/img/obras/realismo/memorias_postumas_de_bras_cubas.png",
                informacoes_basicas: {
                    autor: "Machado de Assis",
                    ano: "1881",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Início do Realismo no Brasil",
                    "Crítica à sociedade burguesa, à hipocrisia social e aos costumes da época",
                    "Narrativa inovadora: narrador morto, digressões e ironia",
                    "Influência de ideias científicas e filosóficas do século XIX (positivismo, materialismo, pessimismo)"
                ],
                resumo_obra: "Brás Cubas, já morto, narra suas memórias. Ele revisita sua vida de forma irônica, revelando fracassos, amores frustrados, vaidades e ilusões. O romance desmonta o ideal romântico e mostra um retrato crítico da sociedade do século XIX.",
                estrutura_obra: [
                    "Capítulos curtos e fragmentados",
                    "Narrativa digressiva (interrupções, reflexões, apartes)",
                    "Quebra da linearidade tradicional"
                ],
                tempo_obra: "Psicológico, o narrador rememora episódios de sua vida de forma não linear, misturando lembranças e reflexões",
                discurso_obra: "Direto e indireto, há diálogos entre personagens e reflexões/narração do protagonista.",
                figuras_de_linguagem: [
                    "Ironia: crítica social e autorreflexão mordaz",
                    "Metáfora: usada para simbolizar estados de espírito e críticas",
                    "Antítese: contrastes entre vida/morte, amor/desengano"
                ],
                linguagem: [
                    "Formal, culta e irônica; estilo objetivo, mas permeado de humor sutil e crítica social"
                ]
            },
            {
                id: 2,
                nome_obra: "Dom Casmurro",
                foto_obra: "assets/img/obras/realismo/dom_casmurro.png",
                informacoes_basicas: {
                    autor: "Machado de Assis",
                    ano: "1899",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Realismo brasileiro em plena maturidade",
                    "Questionamento dos valores sociais, familiares e religiosos - crítica à burguesia",
                    "Narrador em primeira pessoa, centrado em sua subjetividade"
                ],
                resumo_obra: "Bentinho relembra sua juventude, o namoro com Capitu, o casamento e a suspeita de uma traição de sua esposa com Escobar. A narrativa, conduzida pelo próprio Bentinho, gera dúvida no leitor: Capitu traiu ou é apenas fruto do ciúme do narrador?",
                estrutura_obra: [
                    "Capítulos curtos e reflexivos",
                    "Narrativa em primeira pessoa, subjetiva e parcial",
                    "Mistura entre relato de fatos e digressões pessoais"
                ],
                tempo_obra: "Psicológico, no qual Bentinho reconstrói sua vida através da memória, marcada por lembranças seletivas e subjetivas",
                discurso_obra: "Direto e indireto livre, com diálogos entre personagens, narração do protagonista e pensamentos misturados à voz narrativa.",
                figuras_de_linguagem: [
                    "Ironia: usada para criticar a sociedade e revelar contradições internas",
                    "Metáfora: para representar sentimentos e percepções",
                    "Ambiguidade: gera dúvida quanto à fidelidade de Capitu"
                ],
                linguagem: [
                    "Culta, elaborada, subjetiva, com forte presença de ironia e reflexões filosóficas"
                ]
            },
            {
                id: 3,
                nome_obra: "O Ateneu",
                foto_obra: "assets/img/obras/realismo/o_ateneu.png",
                informacoes_basicas: {
                    autor: "Raul Pompeia",
                    ano: "1888",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Realismo/Naturalismo brasileiro",
                    "Crítica à educação, à hipocrisia e aos valores da elite urbana",
                    "Ambiente: Rio de Janeiro, colégio interno da elite",
                    "Obra marcada pela observação social e pela análise psicológica"
                ],
                resumo_obra: "Sérgio, narrador-protagonista, relembra sua juventude no colégio Ateneu, dirigido por Aristarco. O ambiente escolar, que deveria formar moralmente, é retratado como espaço de corrupção, falsidade, vaidade e competição. O colégio é metáfora da sociedade brasileira.",
                estrutura_obra: [
                    "Narrativa em primeira pessoa (memórias de Sérgio)",
                    "Enredo linear, com episódios marcantes",
                    "Mistura de descrição detalhada e reflexão crítica"
                ],
                tempo_obra: "Cronológico, pois os acontecimentos seguem a ordem linear da vida escolar de Sérgio no colégio",
                discurso_obra: "Indireto, com predominância da voz narrativa de Sérgio, relatando os acontecimentos de forma reflexiva, com poucos diálogos diretos",
                figuras_de_linguagem: [
                    "Metáfora: o colégio como representação da sociedade",
                    "Ironia: crítica ao sistema educacional e moral",
                    "Hipérbole: exageros para intensificar a crítica social"
                ],
                linguagem: [
                    "Formal, culta, descritiva, marcada por riqueza vocabular e detalhamento narrativo"
                ]
            }
        ]
    },
    // NATURALISMO
    {
        id: 8,
        nome_movimento: "Naturalismo",
        descricao_movimento: "O Naturalismo é um movimento literário que surgiu na segunda metade do século XIX, como uma ramificação do Realismo. Caracteriza-se pela ênfase na observação científica da realidade, influenciada pelas teorias de Charles Darwin e pelo determinismo social e biológico. No Brasil, o Naturalismo se manifestou principalmente na prosa, com obras que exploram temas como a influência do meio ambiente e da hereditariedade no comportamento humano, além de abordar questões sociais como a pobreza, a marginalização e os vícios. A linguagem é objetiva, detalhada e descritiva, buscando retratar a vida de forma crua e realista.",
        audio_movimento: "assets/audios/naturalismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "O Cortiço",
                foto_obra: "assets/img/obras/naturalismo/o_cortico.png",
                informacoes_basicas: {
                    autor: "Aluísio de Azevedo",
                    ano: "1890",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Brasil do final do século XIX",
                    "Escravidão recém-abolida",
                    "Expansão urbana e social do Rio de Janeiro",
                    "Modernização urbana"
                ],
                resumo_obra: "O Cortiço retrata a vida em uma habitação coletiva no Rio de Janeiro, mostrando as relações sociais, conflitos e transformações dos moradores. A obra evidencia como o meio, o ambiente e as condições sociais moldam o comportamento humano, ressaltando vícios, ambições e misérias do cotidiano.",
                estrutura_obra: [
                    "Romance naturalista dividido em 23 capítulos."
                ],
                tempo_obra: "Cronológico – acompanha a evolução do cortiço e de seus personagens ao longo do tempo.",
                discurso_obra: "Discurso em 3ª pessoa, com narrador observador e descritivo.",
                figuras_de_linguagem: [
                    "Metáfora",
                    "Comparação",
                    "Animalização",
                    "Hipérbole"
                ],
                linguagem: [
                    "Direta, descritiva, realista e marcada pela zoomorfização e determinismo social."
                ]
            },
            {
                id: 2,
                nome_obra: "Memórias de Martha",
                foto_obra: "assets/img/obras/naturalismo/memorias_de_martha.png",
                informacoes_basicas: {
                    autor: "Julia Lopes de Almeida",
                    ano: "1899",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Brasil do século XIX",
                    "Burguesia em ascensão",
                    "Vida urbana no Rio de Janeiro"
                ],
                resumo_obra: "O romance acompanha a vida de Martha, uma jovem órfã que narra suas memórias. A obra destaca sua trajetória marcada por dificuldades, amor, sofrimento e superação, ressaltando temas como virtude, moralidade, destino feminino e o papel da mulher na sociedade.",
                estrutura_obra: [
                    "Romance romântico em prosa, dividido em capítulos (forma de memória/confissão)."
                ],
                tempo_obra: "Predominantemente psicológico – a narrativa é conduzida pelas lembranças e reflexões da protagonista.",
                discurso_obra: "Narrativa em 1ª pessoa (autobiográfica), marcada pela confissão e pelo tom íntimo.",
                figuras_de_linguagem: [
                    "Metáfora",
                    "Hipérbole",
                    "Antítese",
                    "Comparação"
                ],
                linguagem: [
                    "Romântica, sentimental, marcada pela subjetividade e idealização."
                ]
            },
            {
                id: 3,
                nome_obra: "O Mulato",
                foto_obra: "assets/img/obras/naturalismo/o_mulato.png",
                informacoes_basicas: {
                    autor: "Aluísio de Azevedo",
                    ano: "1881",
                    genero: "Romance naturalista"
                },
                contexto_historico: [
                    "Brasil do final do século XIX",
                    "Escravidão",
                    "Ideias abolicionistas e republicanas",
                    "Forte presença da Igreja Católica",
                    "Influência do Determinismo"
                ],
                resumo_obra: "A narrativa acompanha Raimundo, jovem mulato que retorna ao Maranhão após ser educado na Europa. Sua presença desperta preconceito racial e social, levando a conflitos e revelando o racismo entranhado na elite maranhense. O romance denuncia o conservadorismo, a hipocrisia da sociedade e a intolerância.",
                estrutura_obra: [
                    "Romance em prosa, dividido em capítulos, com foco descritivo e analítico."
                ],
                tempo_obra: "Predomínio do tempo cronológico.",
                discurso_obra: "Narrador em 3ª pessoa, observador e crítico.",
                figuras_de_linguagem: [
                    "Metáfora",
                    "Comparação",
                    "Ironia"
                ],
                linguagem: [
                    "Linguagem objetiva, descritiva, realista e marcada pelo determinismo social e biológico."
                ]
            }
        ]
    },
    // SIMBOLISMO
    {
        id: 9,
        nome_movimento: "Simbolismo",
        descricao_movimento: "O Simbolismo é um movimento literário que surgiu no final do século XIX, como uma reação ao Realismo e ao Naturalismo. Caracteriza-se pela valorização da subjetividade, da emoção e do mistério, buscando expressar o mundo interior e as sensações através de símbolos, imagens e metáforas. No Brasil, o Simbolismo se manifestou principalmente na poesia, com temas como a espiritualidade, a melancolia, o sonho e a busca pelo transcendental. A linguagem é marcada pela musicalidade, pela sugestão e pelo uso de figuras de linguagem que evocam sentimentos e estados de espírito.",
        audio_movimento: "assets/audios/simbolismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Missal",
                foto_obra: "assets/img/obras/simbolismo/missal.png",
                informacoes_basicas: {
                    autor: "Cruz e Sousa",
                    ano: "1893",
                    genero: "Prosa poética"
                },
                contexto_historico: [
                    "Reação contra o cientificismo e o realismo",
                    "Busca por espiritualidade e subjetividade"
                ],
                resumo_obra: "Textos em prosa poética que exploram misticismo, transcendência e musicalidade da linguagem.",
                estrutura_obra: [
                    "Prosa poética, fragmentária."
                ],
                tempo_obra: "Psicológico (fluxo de consciência)",
                discurso_obra: "Indireto livre",
                figuras_de_linguagem: [
                    "Sinestesia",
                    "Metáfora",
                    "Aliteração"
                ],
                linguagem: [
                    "Culta, rebuscada e sugestiva"
                ]
            },
            {
                id: 2,
                nome_obra: "Broquéis",
                foto_obra: "assets/img/obras/simbolismo/broqueis.png",
                informacoes_basicas: {
                    autor: "Cruz e Sousa",
                    ano: "1893",
                    genero: "Poesia"
                },
                contexto_historico: [
                    "Marco inicial do simbolismo no Brasil",
                    "Valorização da subjetividade e do transcendental"
                ],
                resumo_obra: "Poemas que tratam da angústia existencial, espiritualidade, morte e musicalidade.",
                estrutura_obra: [
                    "Versos livres ou metrificados e forte sonoridade."
                ],
                tempo_obra: "Psicológico",
                discurso_obra: "Indireto livre",
                figuras_de_linguagem: [
                    "Sinestesia",
                    "Aliteração",
                    "Metáfora"
                ],
                linguagem: [
                    "Culta, musical e sugestiva."
                ]
            },
            {
                id: 3,
                nome_obra: "As Flores do Mal",
                foto_obra: "assets/img/obras/simbolismo/as_flores_do_mal.png",
                informacoes_basicas: {
                    autor: "Charles Baudelaire",
                    ano: "1857",
                    genero: "Poesia"
                },
                contexto_historico: [
                    "Modernidade urbana de Paris",
                    "Crítica à moral burguesa",
                    "Antecipação da estética simbolista."
                ],
                resumo_obra: "Coletânea de poemas sobre tédio, erotismo, morte e beleza decadente.",
                estrutura_obra: [
                    "Poemas metrificados e rimas elaboradas ou ricas."
                ],
                tempo_obra: "Psicológico",
                discurso_obra: "Indireto livre.",
                figuras_de_linguagem: [
                    "Sinestesia",
                    "Metáfora",
                    "Antítese"
                ],
                linguagem: [
                    "Culta, refinada e sugestiva."
                ]
            }
        ]
    },
    // PARNASIANISMO
    {
        id: 10,
        nome_movimento: "Parnasianismo",
        descricao_movimento: "O Parnasianismo é um movimento literário que surgiu na França no final do século XIX, como uma reação ao Romantismo. Caracteriza-se pela valorização da forma, da técnica e da objetividade, buscando a perfeição estética e a impessoalidade na criação literária. No Brasil, o Parnasianismo se manifestou principalmente na poesia, com temas como a mitologia, a natureza, a arte e a exaltação da beleza. A linguagem é marcada pela precisão, pela clareza e pelo uso de figuras de linguagem que enfatizam a musicalidade e a harmonia dos versos.",
        audio_movimento: "assets/audios/parnasianismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "Poesias",
                foto_obra: "assets/img/obras/parnasianismo/poesias.png",
                informacoes_basicas: {
                    autor: "Olavo Bilac",
                    ano: "1888",
                    genero: "Poesia lírica"
                },
                contexto_historico: [
                    "Reação contra o sentimentalismo romântico",
                    "Arte pela arte, forma perfeita"
                ],
                resumo_obra: "Poemas amorosos e patrióticos, cultuando a perfeição formal e a estética.",
                estrutura_obra: [
                    "Sonetos, versos decassílabos."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Indireto.",
                figuras_de_linguagem: [
                    "Hipérbole",
                    "Metáfora",
                    "Aliteração"
                ],
                linguagem: [
                    "Culta, refinada e formal."
                ]
            },
            {
                id: 2,
                nome_obra: "Poesias",
                foto_obra: "assets/img/obras/parnasianismo/poesias_raimundo_correia.png",
                informacoes_basicas: {
                    autor: "Raimundo Correia",
                    ano: "1883",
                    genero: "Poesia"
                },
                contexto_historico: [
                    "Tom pessimista influenciado pelo naturalismo",
                    "Busca da forma perfeita"
                ],
                resumo_obra: "Poemas reflexivos, com temas de efemeridade e destino inevitável.",
                estrutura_obra: [
                    "Poemas metrificados e sonetos."
                ],
                tempo_obra: "Psicológico (reflexões existenciais)",
                discurso_obra: "Indireto.",
                figuras_de_linguagem: [
                    "Hipérbole",
                    "Metáfora",
                    "Antítese"
                ],
                linguagem: [
                    "Culta e formal."
                ]
            },
            {
                id: 3,
                nome_obra: "Poesias",
                foto_obra: "assets/img/obras/parnasianismo/poesias_alberto_de_oliveira.png",
                informacoes_basicas: {
                    autor: "Alberto de Oliveira",
                    ano: "1885",
                    genero: "Poesia"
                },
                contexto_historico: [
                    "Estética de perfeição formal",
                    "Valorização de descrições objetivas"
                ],
                resumo_obra: "Poemas que descrevem paisagens, objetos e natureza com minúcia, impessoalidade e rigor estético.",
                estrutura_obra: [
                    "Sonetos e poemas descritivos."
                ],
                tempo_obra: "Cronológico (predominantemente estático)",
                discurso_obra: "Indireto.",
                figuras_de_linguagem: [
                    "Sinécdoque",
                    "Metáfora",
                    "Hipérbole"
                ],
                linguagem: [
                    "Culta, descritiva e elitizada."
                ]
            }
        ]
    },
    // PRÉ-MODERNISMO
    {
        id: 11,
        nome_movimento: "Pré-Modernismo",
        descricao_movimento: "O Pré-Modernismo é um período de transição na literatura brasileira que antecede o Modernismo, abrangendo aproximadamente as primeiras décadas do século XX. Caracteriza-se pela diversidade de estilos e temas, refletindo as mudanças sociais, políticas e econômicas do Brasil da época. O Pré-Modernismo aborda questões como a identidade nacional, a crítica social, a vida urbana e rural, além de explorar diferentes regiões do país. A linguagem varia entre o regionalismo, o realismo e o simbolismo, preparando o terreno para as inovações que viriam com o Modernismo.",
        audio_movimento: "assets/audios/pre_modernismo.mp3",
        geracoes: false,
        obras: [
            {
                id: 1,
                nome_obra: "O Triste Fim de Policarpo Quaresma",
                foto_obra: "assets/img/obras/pre_modernismo/o_triste_fim_de_policarpo_quaresma.png",
                informacoes_basicas: {
                    autor: "Lima Barreto",
                    ano: "1915",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Contradições da república velha",
                    "Crítica ao nacionalismo exagerado"
                ],
                resumo_obra: "Narra a vida de Policarpo, patriota ingênuo que fracassa em seus ideais nacionalistas, simbolizando o desencanto com o Brasil.",
                estrutura_obra: [
                    "Romance em capítulos."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Indireto livre.",
                figuras_de_linguagem: [
                    "Ironia",
                    "Metáfora",
                    "Antítese"
                ],
                linguagem: [
                    "Simples, acessível e crítica."
                ]
            },
            {
                id: 2,
                nome_obra: "Os Sertões",
                foto_obra: "assets/img/obras/pre_modernismo/os_sertoes.png",
                informacoes_basicas: {
                    autor: "Euclides da Cunha",
                    ano: "1902",
                    genero: "Ensaio/Romance-reportagem"
                },
                contexto_historico: [
                    "Guerra de Canudos",
                    "Cientificismo e determinismo"
                ],
                resumo_obra: "Obra em três partes: “A Terra” (descrição da região), “O Homem” (características do sertanejo) e “A Luta” (narrativa da guerra).",
                estrutura_obra: [
                    "Prosa ensaística e narrativa histórica."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Indireto.",
                figuras_de_linguagem: [
                    "Hipérbole",
                    "Metáfora",
                    "Antítese"
                ],
                linguagem: [
                    "Culta, científica e elitizada."
                ]
            },
            {
                id: 3,
                nome_obra: "Urupês",
                foto_obra: "assets/img/obras/pre_modernismo/urupes.png",
                informacoes_basicas: {
                    autor: "Monteiro Lobato",
                    ano: "1918",
                    genero: "Coletânea de contos"
                },
                contexto_historico: [
                    "Crítica ao atraso do interior paulista",
                    "Surgimento do personagem Jeca Tatu"
                ],
                resumo_obra: "Retrata o caipira como símbolo do atraso nacional, revelando a desigualdade social.",
                estrutura_obra: [
                    "Contos independentes."
                ],
                tempo_obra: "Cronológico",
                discurso_obra: "Indireto.",
                figuras_de_linguagem: [
                    "Ironia",
                    "Metáfora",
                    "Hipérbole"
                ],
                linguagem: [
                    "Simples, acessível e crítica."
                ]
            }
        ]
    },
    // MODERNISMO
    {
        id: 12,
        nome_movimento: "Modernismo",
        descricao_movimento: "O Modernismo é um movimento literário que surgiu no início do século XX, caracterizado pela ruptura com as tradições literárias anteriores e pela busca de novas formas de expressão. No Brasil, o Modernismo teve seu marco inicial na Semana de Arte Moderna de 1922, que reuniu artistas e escritores que propunham uma renovação estética e cultural. O movimento valorizou a experimentação, a liberdade criativa e a diversidade cultural, explorando temas como a identidade nacional, a urbanização, a industrialização e as questões sociais. A linguagem modernista é marcada pela inovação, pelo uso de coloquialismos, pela mistura de estilos e pela valorização do regionalismo.",
        audio_movimento: "assets/audios/modernismo.mp3",
        geracoes: true,
        obras: [
            {
                id: 1,
                nome_obra: "Macunaíma, o herói sem nenhum caráter",
                foto_obra: "assets/img/obras/modernismo/macunaima.png",
                geracao: "1ª GERAÇÃO MODERNISTA",
                informacoes_basicas: {
                    autor: "Mário de Andrade",
                    ano: "1928",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Publicado após a Semana de Arte Moderna de 1922.",
                    "Reflete a busca por uma identidade cultural brasileira.",
                    "Uso de mitos, lendas indígenas e elementos do folclore.",
                    "Ruptura com padrões literários clássicos."
                ],
                resumo_obra: "Narra a história de Macunaíma, um anti-herói preguiçoso, malandro e contraditório, que representa o brasileiro. Vive aventuras entre a floresta amazônica e a cidade grande, sempre sem caráter fixo. Ao final, retorna à natureza, desaparecendo no céu como uma constelação.",
                estrutura_obra: [
                    "Dividido em 17 capítulos.",
                    "Prosa narrativa com forte influência oral e popular."
                ],
                tempo_obra: "Predominantemente cronológico, acompanhando a trajetória do herói.",
                discurso_obra: "Direto e indireto, com muitos diálogos e momentos narrados pelo narrador.",
                figuras_de_linguagem: [
                    "Metáfora (Brasil como Macunaíma).",
                    "Ironia (na crítica social e cultural).",
                    "Hipérbole (nas aventuras grandiosas)."
                ],
                linguagem: [
                    "Popular, coloquial, experimental.",
                    "Mistura de erudito com fala popular e regionalismos."
                ]
            },
            {
                id: 2,
                nome_obra: "Vidas Secas",
                foto_obra: "assets/img/obras/modernismo/vidas_secas.png",
                geracao: "2ª GERAÇÃO MODERNISTA",
                informacoes_basicas: {
                    autor: "Graciliano Ramos",
                    ano: "1938",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Período de forte crítica social e política.",
                    "Denúncia da miséria no sertão nordestino.",
                    "Linguagem seca, direta, sem floreios.",
                    "Ênfase no realismo psicológico e social."
                ],
                resumo_obra: "Relata a vida de uma família de retirantes nordestinos (Fabiano, Sinhá Vitória, os filhos e a cadela Baleia) em meio à seca e à luta pela sobrevivência. Mostra o ciclo de sofrimento e pobreza, sem perspectiva de mudança.",
                estrutura_obra: [
                    "13 capítulos independentes (podem ser lidos isoladamente).",
                    "Narrativa não totalmente linear, com idas e vindas."
                ],
                tempo_obra: "Psicológico, focado na percepção interna dos personagens.",
                discurso_obra: "Indireto livre, permitindo ao narrador se aproximar do pensamento dos personagens.",
                figuras_de_linguagem: [
                    "Metáfora (seca como representação da miséria).",
                    "Personificação (a cadela Baleia humanizada).",
                    "Antítese (esperança x desilusão)."
                ],
                linguagem: [
                    "Seca, objetiva, minimalista.",
                    "Predomínio de frases curtas e vocabulário simples."
                ]
            },
            {
                id: 3,
                nome_obra: "As Meninas",
                foto_obra: "assets/img/obras/modernismo/as_meninas.png",
                geracao: "3ª GERAÇÃO MODERNISTA",
                informacoes_basicas: {
                    autor: "Lygia Fagundes Telles",
                    ano: "1973",
                    genero: "Romance"
                },
                contexto_historico: [
                    "Produzido durante a ditadura militar no Brasil.",
                    "Explora o universo feminino e os dilemas existenciais.",
                    "Reflexo de um Brasil marcado pela repressão e pela censura."
                ],
                resumo_obra: "Narra a vida de três jovens universitárias (Lorena, Lia e Ana Clara) que vivem juntas em um pensionato em São Paulo. Cada uma representa diferentes perspectivas políticas, sociais e pessoais: Lorena (romântica e idealista), Lia (engajada politicamente) e Ana Clara (envolvida em drogas e prostituição). A obra aborda temas como repressão, juventude, desejo de liberdade e desigualdade social.",
                estrutura_obra: [
                    "Narrativa fragmentada, múltiplos pontos de vista.",
                    "Alternância entre monólogos interiores e diálogos."
                ],
                tempo_obra: "Psicológico, com foco no fluxo de consciência das personagens.",
                discurso_obra: "Predomínio do discurso indireto livre e do monólogo interior.",
                figuras_de_linguagem: [
                    "Metáfora (juventude como fase de incerteza).",
                    "Ironia (crítica à repressão social e política).",
                    "Comparação (usada nos pensamentos das personagens)."
                ],
                linguagem: [
                    "Literária, refinada, mas com traços coloquiais.",
                    "Explora o fluxo de pensamento."
                ]
            }
        ]
    }
];