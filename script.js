// ============================================
// FONTE ÚNICA DE DADOS DO CURRÍCULO
// ============================================
const dadosCurriculo = {
    // Identidade
    nome: "Vitor Ortiz de Camargo",
    tituloProfissional: "Tecnologia | Atendimento | Organização de Processos",
    localizacao: "Barra Bonita, SP",
    telefone: "+55 14 98813-4137",
    email: "vitorortiz512@gmail.com",
    github: "https://github.com/vitor-ortiz",
    linkedin: "https://www.linkedin.com/in/vitor-ortiz-de-camargo-833aa2402/",


    // Resumo Profissional
    resumo: `Profissional com experiência prática em desenvolvimento e manutenção de aplicações mobile (Flutter/Dart), versionamento com Git e apoio em publicação de apps nas lojas oficiais. Conhecimentos em JavaScript, Node.js, C#, SQL e ferramentas de produtividade. Familiaridade com rotinas administrativas, organização de processos e atendimento ao público. Comunicação clara, atenção aos detalhes e facilidade para aprender novas tecnologias e fluxos de trabalho. Atualmente cursando Sistemas de Programação na FGP. Perfil dedicado, organizado e focado em entregar soluções funcionais e bem estruturadas.`,

    // Experiência Profissional
    experiencias: [
        {
            cargo: "Desenvolvedor Mobile Júnior",
            empresa: "Guia de Motéis",
            periodo: "01/02/2026 —27/06/2026",
            local: "Remoto",
            descricoes: [
                "Desenvolvimento e manutenção evolutiva de aplicações mobile com Flutter e Dart.",
                "Implementação de melhorias em interface, responsividade, usabilidade e experiência do usuário.",
                "Uso de Git e GitHub para versionamento, organização de alterações e colaboração com o time.",
                "Apoio em rotinas de publicação e manutenção de apps na Google Play e na App Store."
            ]
        }
    ],

    // Competências organizadas em 4 grupos
    competencias: {
        "Tecnologia e Desenvolvimento": [
            "Flutter & Dart (mobile)",
            "JavaScript / Node.js",
            "C# (.NET básico)",
            "HTML5, CSS3, SQL",
            "Git & GitHub",
            "Firebase / Supabase",
            "Android Studio, Xcode, VS Code"
        ],
        "Atendimento e Comunicação": [
            "Atendimento ao cliente",
            "Comunicação clara e empática",
            "Trabalho em equipe e colaboração",
            "Resolução de problemas",
            "Escrita técnica e documentação"
        ],
        "Administrativo e Produtividade": [
            "Organização de processos e rotinas",
            "Gestão de tarefas e prioridades",
            "Ferramentas Google (Docs, Sheets, Drive)",
            "Pacote Office (Word, Excel, PowerPoint)",
            "Controle de versões e changelogs"
        ],
        "Design e Ferramentas Digitais": [
            "Figma (prototipação, UI/UX básico)",
            "Criação de interfaces responsivas",
            "Edição de vídeo (básico)",
            "Google Play Console, App Store Connect",
            "Noções de cibersegurança e LGPD"
        ]
    },

    // Projetos Relevantes
    projetos: [
        {
            nome: "Plataforma de Pedidos White-label — TCC",
            periodo: "2026",
            descricoes: [
                "Desenvolvimento e apresentação de uma plataforma de pedidos em C#, inspirada no modelo do iFood.",
                "Criação de proposta white-label para personalização por empresas e estabelecimentos.",
                "Uso de Figma para prototipação, planejamento visual e estruturação da experiência do usuário."
            ],
            link: null
        },
        {
            nome: "Blog com Inteligência Artificial",
            periodo: "2025",
            descricoes: [
                "Desenvolvimento de site para publicação de blogs com geração automática de conteúdo via IA.",
                "Implementação de recursos de inteligência artificial para apoio à criação de posts e automação de conteúdo.",
                "Experiência prática com automação de conteúdo, aplicações web e integração com serviços de IA."
            ],
            link: null
        }
    ],

    // Formação Acadêmica
    formacao: [
        {
            curso: "Sistemas de Programação",
            instituicao: "FGP",
            periodo: "Em andamento",
            status: "Cursando"
        },
        {
            curso: "Técnico em Programação para Internet integrado ao Ensino Médio",
            instituicao: "ETEC Comendador João Rays",
            periodo: "2023 — 2026",
            status: "Cursando"
        }
    ],

    // Idiomas
    idiomas: [
        { idioma: "Português", nivel: "Nativo" },
        { idioma: "Inglês", nivel: "Intermediário" }
    ],

    // Características Pessoais
    caracteristicas: [
        "Organizado e metódico",
        "Aprendizado contínuo",
        "Comunicação assertiva",
        "Foco em entrega e qualidade",
        "Adaptabilidade a novos contextos"
    ],

    // Metadados
    nomeArquivoPdf: "curriculo-vitor-ortiz.pdf",
    tituloPagina: "Currículo - Vitor Ortiz de Camargo",
    descricaoSeo: "Currículo profissional de Vitor Ortiz de Camargo — Tecnologia, Atendimento e Organização de Processos. Experiência em Flutter/Dart, JavaScript, Node.js, C#, Git, Figma, Supabase. Projetos em mobile, web e automação."
};

// ============================================
// RENDERIZAÇÃO DINÂMICA
// ============================================
let versoAtual = 'visual'; // 'visual' ou 'ats'

function renderCurriculo() {
    const container = document.querySelector('.resume-container');
    if (!container) return;

    const d = dadosCurriculo;

    // Atualiza título da página e meta SEO
    document.title = d.tituloPagina;
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
    }
    metaDesc.content = d.descricaoSeo;

    // HTML do currículo
    container.innerHTML = `
        <header class="resume-header">
            <h1>${escapeHtml(d.nome)}</h1>
            <p class="role">${escapeHtml(d.tituloProfissional)}</p>
            <div class="contact-line">
                <a href="tel:${escapeHtml(d.telefone)}">${escapeHtml(d.telefone)}</a>
                <span>${escapeHtml(d.localizacao)}</span>
                <a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a>
            </div>
            <div class="contact-line">
                <a href="${escapeHtml(d.github)}" target="_blank" rel="noreferrer">GitHub</a>
                <a href="${escapeHtml(d.linkedin)}" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
        </header>

        <div class="resume-grid">
            <!-- Sidebar (apenas versão visual) -->
            ${versoAtual === 'visual' ? `
            <aside class="resume-sidebar" aria-label="Informações complementares">
                <div class="sidebar-photo" aria-hidden="true">
                    <img src="photo.png" alt="" loading="lazy">
                </div>
                <section class="sidebar-section">
                    <h2>Idiomas</h2>
                    <ul class="sidebar-list">
                        ${d.idiomas.map(i => `<li><strong>${escapeHtml(i.idioma)}:</strong> ${escapeHtml(i.nivel)}</li>`).join('')}
                    </ul>
                </section>

                <section class="sidebar-section">
                    <h2>Características</h2>
                    <ul class="sidebar-list">
                        ${d.caracteristicas.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
                    </ul>
                </section>

                <section class="sidebar-section">
                    <h2>Contato</h2>
                    <ul class="sidebar-list">
                        <li><a href="tel:${escapeHtml(d.telefone)}">${escapeHtml(d.telefone)}</a></li>
                        <li><a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a></li>
                        <li>${escapeHtml(d.localizacao)}</li>
                        <li><a href="${escapeHtml(d.github)}" target="_blank" rel="noreferrer">GitHub</a></li>
                        <li><a href="${escapeHtml(d.linkedin)}" target="_blank" rel="noreferrer">LinkedIn</a></li>
                    </ul>
                </section>
            </aside>
            ` : ''}

            <!-- Main Content -->
            <main class="resume-main" aria-label="Conteúdo principal do currículo">
                ${versoAtual === 'ats' ? renderAtsSidebarContent(d) : ''}

                <!-- 1. Resumo Profissional -->
                <section>
                    <h2>Resumo Profissional</h2>
                    <p>${escapeHtml(d.resumo)}</p>
                </section>

                <!-- 2. Experiência Profissional -->
                <section>
                    <h2>Experiência Profissional</h2>
                    ${d.experiencias.map(exp => `
                        <article class="entry">
                            <div class="entry-header">
                                <h3>${escapeHtml(exp.cargo)}</h3>
                                <span>${escapeHtml(exp.periodo)}</span>
                            </div>
                            <p class="entry-company">${escapeHtml(exp.empresa)}${exp.local ? ` · ${escapeHtml(exp.local)}` : ''}</p>
                            <ul>
                                ${exp.descricoes.map(desc => `<li>${escapeHtml(desc)}</li>`).join('')}
                            </ul>
                        </article>
                    `).join('')}
                </section>

                <!-- 3. Competências -->
                <section>
                    <h2>Competências</h2>
                    <div class="competencias-grid">
                        ${Object.entries(d.competencias).map(([grupo, itens]) => `
                            <div class="competencia-grupo">
                                <h3>${escapeHtml(grupo)}</h3>
                                <ul>
                                    ${itens.map(item => `<li>${escapeHtml(item)}</li>`).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                </section>

                <!-- 4. Projetos Relevantes -->
                <section>
                    <h2>Projetos Relevantes</h2>
                    ${d.projetos.map(proj => `
                        <article class="entry">
                            <div class="entry-header">
                                <h3>${escapeHtml(proj.nome)}</h3>
                                <span>${escapeHtml(proj.periodo)}</span>
                            </div>
                            <ul>
                                ${proj.descricoes.map(desc => `<li>${escapeHtml(desc)}</li>`).join('')}
                            </ul>
                            ${proj.link ? `<p class="project-link"><a href="${escapeHtml(proj.link)}" target="_blank" rel="noreferrer">Ver repositório/projeto →</a></p>` : ''}
                        </article>
                    `).join('')}
                </section>

                <!-- 5. Formação Acadêmica -->
                <section>
                    <h2>Formação Acadêmica</h2>
                    ${d.formacao.map(f => `
                        <article class="entry">
                            <div class="entry-header">
                                <h3>${escapeHtml(f.curso)}</h3>
                                <span>${escapeHtml(f.periodo)}</span>
                            </div>
                            <p class="entry-company">${escapeHtml(f.instituicao)}</p>
                            <p class="entry-status">${escapeHtml(f.status)}</p>
                        </article>
                    `).join('')}
                </section>
            </main>
        </div>

        <!-- Botão de alternância de versão -->
        <button class="btn-version-toggle" id="btn-version-toggle" type="button" aria-label="${versoAtual === 'visual' ? 'Alternar para versão ATS' : 'Alternar para versão visual'}">
            ${versoAtual === 'visual' ? 'Versão ATS' : 'Versão Visual'}
        </button>
    `;

    // Re-attach event listeners
    attachEventListeners();
}

function renderAtsSidebarContent(d) {
    // Na versão ATS, inclui as infos do sidebar inline no main
    return `
        <section class="ats-sidebar-content" aria-label="Informações complementares">
            <h2>Idiomas</h2>
            <ul class="ats-inline-list">
                ${d.idiomas.map(i => `<li><strong>${escapeHtml(i.idioma)}:</strong> ${escapeHtml(i.nivel)}</li>`).join('')}
            </ul>

            <h2>Características</h2>
            <ul class="ats-inline-list">
                ${d.caracteristicas.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
            </ul>

            <h2>Contato</h2>
            <ul class="ats-inline-list">
                <li><a href="tel:${escapeHtml(d.telefone)}">${escapeHtml(d.telefone)}</a></li>
                <li><a href="mailto:${escapeHtml(d.email)}">${escapeHtml(d.email)}</a></li>
                <li>${escapeHtml(d.localizacao)}</li>
                <li><a href="${escapeHtml(d.github)}" target="_blank" rel="noreferrer">GitHub</a></li>
                <li><a href="${escapeHtml(d.linkedin)}" target="_blank" rel="noreferrer">LinkedIn</a></li>
            </ul>
        </section>
    `;
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function attachEventListeners() {
    // Botão PDF (impressão nativa)
    document.getElementById('btn-pdf')?.addEventListener('click', salvarPdf);

    // Botão toggle versão
    document.getElementById('btn-version-toggle')?.addEventListener('click', alternarVersao);
}

function alternarVersao() {
    versoAtual = versoAtual === 'visual' ? 'ats' : 'visual';
    document.body.classList.toggle('ats-version', versoAtual === 'ats');
    renderCurriculo();
}

// ============================================
// PDF GENERATION — Impressão Nativa
// ============================================
function salvarPdf() {
    const botaoPdf = document.getElementById('btn-pdf');
    if (!botaoPdf) return;

    const textoOriginal = botaoPdf.innerText;
    botaoPdf.innerText = 'Preparando impressão...';
    botaoPdf.classList.add('loading');
    botaoPdf.disabled = true;

    // Pequeno delay para UI atualizar
    setTimeout(() => {
        window.print();
        botaoPdf.innerText = textoOriginal;
        botaoPdf.classList.remove('loading');
        botaoPdf.disabled = false;
    }, 100);
}

window.addEventListener('afterprint', () => {
    const botaoPdf = document.getElementById('btn-pdf');
    if (botaoPdf) {
        botaoPdf.innerText = 'Salvar PDF';
        botaoPdf.classList.remove('loading');
        botaoPdf.disabled = false;
    }
});

// ============================================
// INICIALIZAÇÃO
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    renderCurriculo();
});