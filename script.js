/* ==========================================================================
   DADOS DO CURRÍCULO
   Para atualizar o currículo, edite SOMENTE este objeto.
   ========================================================================== */
const dadosCurriculo = {
    nome: "Vitor Ortiz de Camargo",
    cargo: "Desenvolvedor Júnior · Atendimento e Suporte",
    tagline: "Tecnologia, atendimento ao cliente e organização de processos",

    contato: [
        { icone: "pin", rotulo: "Localização", texto: "Barra Bonita, SP · Disponível para remoto" },
        { icone: "mail", rotulo: "E-mail", texto: "vitorortiz512@gmail.com", href: "mailto:vitorortiz512@gmail.com" },
        { icone: "phone", rotulo: "Telefone", texto: "(14) 98813-4137", href: "tel:+5514988134137" },
        { icone: "linkedin", rotulo: "LinkedIn", texto: "vitor-ortiz-de-camargo", href: "https://www.linkedin.com/in/vitor-ortiz-de-camargo-833aa2402/" },
        { icone: "github", rotulo: "Portfólio", texto: "github.com/vitor-ortiz", href: "https://github.com/vitor-ortiz" }
    ],

    resumo: "Profissional júnior com formação técnica em Programação para Internet, unindo tecnologia, atendimento ao cliente e organização de processos. Desenvolvo e mantenho aplicativos em Flutter e Dart publicados na Google Play e na App Store, com foco em interface, responsividade e experiência do usuário. Tenho experiência em atender clientes com clareza e paciência e em rotinas administrativas como planilhas de controle, cadastros, notas fiscais e documentos. Organizado, atento aos detalhes e rápido para aprender ferramentas novas.",

    competencias: [
        {
            grupo: "Atendimento e Comunicação",
            icone: "chat",
            itens: ["Atendimento ao cliente", "Comunicação escrita e verbal", "Resolução de problemas", "Organização de demandas simultâneas", "Relacionamento interpessoal", "Redes sociais"]
        },
        {
            grupo: "Administrativo e Processos",
            icone: "clipboard",
            itens: ["Excel e Planilhas Google (intermediário)", "Pacote Office", "Planilhas de controle", "Cadastros e documentos", "Notas fiscais", "Organização de rotinas"]
        },
        {
            grupo: "Design e Produto",
            icone: "pen",
            itens: ["Figma", "Prototipação de telas e fluxos", "UI/UX", "Hierarquia visual e legibilidade", "Responsividade"]
        },
        {
            grupo: "Desenvolvimento",
            icone: "code",
            itens: ["Flutter", "Dart", "JavaScript", "Node.js", "C#", "HTML5 e CSS3", "SQL", "Firebase", "Git e GitHub"]
        },
        {
            grupo: "Mobile e Publicação",
            icone: "phone-app",
            itens: ["Android Studio", "Xcode", "Google Play Console", "App Store Connect", "Manutenção de apps em produção"]
        }
    ],

    softSkills: [
        "Organização",
        "Atenção aos detalhes",
        "Paciência",
        "Proatividade",
        "Trabalho em equipe",
        "Aprendizado rápido"
    ],

    idiomas: [
        { nome: "Português", nivel: "Nativo", pontos: 5 },
        { nome: "Inglês", nivel: "Intermediário", pontos: 3 }
    ],

    experiencias: [
        {
            cargo: "Desenvolvedor Mobile Júnior",
            empresa: "Guia de Motéis",
            periodo: "2026 — Atual",
            descricao: [
                "Manutenção evolutiva de aplicações mobile em Flutter e Dart, com apps ativos na Google Play e na App Store.",
                "Melhorias de interface, responsividade e usabilidade a partir de retornos de uso real dos usuários.",
                "Versionamento e organização das alterações com Git e GitHub, em colaboração com o time.",
                "Apoio nas rotinas de publicação, atualização e acompanhamento dos apps nas lojas."
            ],
            tech: ["Flutter", "Dart", "Git", "Android Studio", "Xcode", "Play Console", "App Store Connect"]
        }

        /* ------------------------------------------------------------------
           ADICIONE AQUI sua experiência de atendimento e/ou administrativa.
           Copie o bloco abaixo, descomente e preencha com os dados reais —
           é o que mais pesa nas vagas de atendimento e administrativo.

        ,{
            cargo: "Atendimento ao Cliente",
            empresa: "Nome do local",
            periodo: "2024 — 2025",
            descricao: [
                "Atendimento a clientes por WhatsApp, telefone e presencialmente.",
                "Organização de planilhas de controle, cadastros e notas fiscais.",
                "Registro e acompanhamento das demandas até a resolução."
            ],
            tech: ["Excel", "WhatsApp", "Pacote Office"]
        }
        ------------------------------------------------------------------ */
    ],

    projetos: [
        {
            titulo: "Plataforma de Pedidos White-label",
            contexto: "Projeto de Conclusão de Curso · ETEC",
            periodo: "2026",
            descricao: [
                "Plataforma de pedidos em C# inspirada no modelo do iFood, com proposta white-label para personalização por estabelecimento.",
                "Atuação no planejamento, modelagem da solução, desenvolvimento e apresentação técnica para banca."
            ],
            tech: ["C#", "Figma", "Prototipação", "Modelagem de dados"]
        },
        {
            titulo: "Blog com Inteligência Artificial",
            contexto: "Projeto independente",
            descricao: [
                "Site de publicação de posts com geração automática de conteúdo apoiada por IA.",
                "Prática com automação, integração de APIs e organização de conteúdo digital."
            ],
            tech: ["JavaScript", "Web", "Automação", "Integração com IA"]
        },
        {
            titulo: "Edição de vídeos — canal Derivandoideias",
            contexto: "Projeto independente",
            descricao: [
                "Edição de vídeos para canal no YouTube, com atenção a ritmo, clareza e senso estético.",
                "Rotina de organização de arquivos, prazos e materiais audiovisuais."
            ],
            tech: ["Edição de vídeo", "Produção digital"]
        }
    ],

    educacao: [
        {
            curso: "Técnico em Programação para Internet",
            instituicao: "ETEC Comendador João Rays",
            periodo: "2023 — 2026",
            descricao: "Formação técnica integrada ao Ensino Médio: desenvolvimento web, lógica de programação, interfaces, banco de dados, cibersegurança, prototipação e apresentação de projetos."
        }
    ]
};

/* ==========================================================================
   HELPERS
   ========================================================================== */
const escapar = (valor) => String(valor)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const definirTexto = (id, texto) => {
    const el = document.getElementById(id);
    if (el) el.textContent = texto;
};

const definirHtml = (id, html) => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = html;
};

const icone = (nome) => `<svg class="icone" aria-hidden="true" focusable="false"><use href="#i-${nome}"></use></svg>`;

const chips = (itens) => itens.map(item => `<li class="chip">${escapar(item)}</li>`).join('');

const topicos = (itens) => itens.map(item => `<li>${escapar(item)}</li>`).join('');

/* ==========================================================================
   RENDERIZAÇÃO
   ========================================================================== */
function renderizarIdentidade() {
    definirTexto('nome', dadosCurriculo.nome);
    definirTexto('cargo', dadosCurriculo.cargo);
    definirTexto('tagline', dadosCurriculo.tagline);
    definirTexto('resumo-text', dadosCurriculo.resumo);
    document.title = `${dadosCurriculo.nome} — ${dadosCurriculo.cargo}`;
}

function renderizarContato() {
    definirHtml('contato-list', dadosCurriculo.contato.map(item => {
        const externo = item.href && item.href.startsWith('http');
        const conteudo = item.href
            ? `<a href="${escapar(item.href)}"${externo ? ' target="_blank" rel="noreferrer"' : ''}>${escapar(item.texto)}</a>`
            : `<span>${escapar(item.texto)}</span>`;
        return `<li>${icone(item.icone)}<span class="contato-valor">${conteudo}</span></li>`;
    }).join(''));
}

function renderizarCompetencias() {
    definirHtml('competencias-container', dadosCurriculo.competencias.map(grupo => `
        <div class="competencia">
            <h3>${icone(grupo.icone)}${escapar(grupo.grupo)}</h3>
            <ul class="chips">${chips(grupo.itens)}</ul>
        </div>
    `).join(''));
}

function renderizarPerfilLateral() {
    definirHtml('soft-skills-list', chips(dadosCurriculo.softSkills));

    definirHtml('idiomas-list', dadosCurriculo.idiomas.map(idioma => `
        <li class="idioma">
            <div class="idioma-info">
                <span class="idioma-nome">${escapar(idioma.nome)}</span>
                <span class="idioma-nivel">${escapar(idioma.nivel)}</span>
            </div>
            <span class="medidor" role="img" aria-label="Nível ${escapar(idioma.nivel)}">
                ${Array.from({ length: 5 }, (_, i) => `<i class="${i < idioma.pontos ? 'on' : ''}"></i>`).join('')}
            </span>
        </li>
    `).join(''));
}

function renderizarItens(containerId, itens) {
    definirHtml(containerId, itens.map(item => `
        <article class="item">
            <div class="item-head">
                <h3 class="item-titulo">${escapar(item.cargo || item.titulo)}</h3>
                ${item.periodo ? `<span class="item-periodo">${escapar(item.periodo)}</span>` : ''}
            </div>
            <p class="item-sub">${escapar(item.empresa || item.contexto)}</p>
            <ul class="item-topicos">${topicos(item.descricao)}</ul>
            ${item.tech ? `<ul class="chips chips-tech">${chips(item.tech)}</ul>` : ''}
        </article>
    `).join(''));
}

function renderizarEducacao() {
    definirHtml('educacao-container', dadosCurriculo.educacao.map(edu => `
        <article class="item">
            <div class="item-head">
                <h3 class="item-titulo">${escapar(edu.curso)}</h3>
                <span class="item-periodo">${escapar(edu.periodo)}</span>
            </div>
            <p class="item-sub">${escapar(edu.instituicao)}</p>
            <p class="item-texto">${escapar(edu.descricao)}</p>
        </article>
    `).join(''));
}

function renderizarCurriculo() {
    renderizarIdentidade();
    renderizarContato();
    renderizarCompetencias();
    renderizarPerfilLateral();
    renderizarItens('experiencias-container', dadosCurriculo.experiencias);
    renderizarItens('projetos-container', dadosCurriculo.projetos);
    renderizarEducacao();
}

/* ==========================================================================
   TEMA (claro / escuro)
   ========================================================================== */
const CHAVE_TEMA = 'curriculo:tema';

function lerTemaSalvo() {
    try {
        return localStorage.getItem(CHAVE_TEMA);
    } catch {
        return null;
    }
}

function salvarTema(tema) {
    try {
        localStorage.setItem(CHAVE_TEMA, tema);
    } catch {
        /* navegação privada ou storage bloqueado: segue sem persistir */
    }
}

function aplicarTema(tema) {
    document.documentElement.dataset.theme = tema;
    const botao = document.getElementById('btn-tema');
    if (botao) {
        botao.setAttribute('aria-pressed', String(tema === 'dark'));
        botao.setAttribute('title', tema === 'dark' ? 'Mudar para tema claro' : 'Mudar para tema escuro');
    }
}

const temaAtual = () => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';

function iniciarTema() {
    const salvo = lerTemaSalvo();
    const preferencia = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    aplicarTema(salvo || preferencia);
}

/* ==========================================================================
   IMPRESSÃO / PDF
   O PDF sai pelo próprio navegador: texto vetorial, selecionável e
   legível por sistemas de triagem de currículo (ATS).
   ========================================================================== */
function imprimir() {
    window.print();
}

/* ==========================================================================
   INICIALIZAÇÃO
   ========================================================================== */
iniciarTema();

window.addEventListener('DOMContentLoaded', () => {
    renderizarCurriculo();

    document.getElementById('btn-pdf')?.addEventListener('click', imprimir);
    document.getElementById('btn-tema')?.addEventListener('click', () => {
        const proximo = temaAtual() === 'dark' ? 'light' : 'dark';
        aplicarTema(proximo);
        salvarTema(proximo);
    });
});
