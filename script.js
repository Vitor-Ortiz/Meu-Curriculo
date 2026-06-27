const dadosCurriculo = {
    nome: "Vitor Ortiz de Camargo",
    cargo: "Desenvolvedor Mobile Júnior",
    
    resumo: "Desenvolvedor Mobile Júnior com foco em Flutter e Dart, atuando na manutenção evolutiva de aplicações mobile, melhorias de interface, responsividade e apoio em processos de publicação nas lojas. Tenho experiência com Git, Android Studio, Xcode, Figma e colaboração em equipe. Estou em constante aprendizado, buscando conhecer novas linguagens, tecnologias e áreas do desenvolvimento para construir soluções organizadas, funcionais e com boa experiência para o usuário.",
    
    skills: [
        "Flutter",
        "Dart",
        "JavaScript",
        "Node.js",
        "C#",
        "HTML5 e CSS3",
        "SQL e Banco de Dados",
        "Firebase Console",
        "Android Studio e Xcode",
        "Google Play Console e App Store Connect",
        "Publicação e Manutenção de Apps",
        "Responsividade",
        "Figma",
        "Prototipação",
        "UI/UX Básico",
        "Visual Studio Code",
        "Noções de Cibersegurança",
        "Git e GitHub (Versionamento)"
    ],

    softSkills: [
        "Dedicação e Comprometimento",
        "Facilidade para Aprender",
        "Comunicação",
        "Organização",
        "Trabalho em Equipe",
        "Atenção aos Detalhes"
    ],

    idiomas: [
        "Português (Nativo)",
        "Inglês (Intermediário)", 
    ],

    experiencias: [
        {
            cargo: "Desenvolvedor Mobile Júnior",
            empresa: "Guia de Motéis",
            periodo: "2026 - Atual",
            descricao: [
                "Desenvolvimento e manutenção evolutiva de aplicações mobile com Flutter e Dart.",
                "Implementação de melhorias em interface, responsividade, usabilidade e experiência do usuário.",
                "Uso de Git e GitHub para versionamento, organização de alterações e colaboração com o time.",
                "Apoio em rotinas de publicação e manutenção de apps na Google Play e na App Store."
            ],
            techStack: "Tecnologias: Flutter, Dart, Git, Android Studio, Xcode, Google Play Console e App Store Connect."
        }
    ],

    projetos: [
        {
            cargo: "Projeto de Conclusão de Curso",
            empresa: "Plataforma de Pedidos White-label",
            periodo: "2026",
            descricao: [
                "Desenvolvimento e apresentação de uma plataforma de pedidos em C#, inspirada no modelo do iFood.",
                "Criação de uma proposta white-label para personalização por empresas e estabelecimentos.",
                "Participação no planejamento, estruturação da solução, desenvolvimento e apresentação técnica."
            ],
            techStack: "Tecnologias: C#, Figma, lógica de programação, prototipação, modelagem da solução e apresentação técnica."
        },
        {
            cargo: "Projeto Independente",
            empresa: "Site de Blog com Inteligência Artificial",
            periodo: "Projeto independente", 
            descricao: [
                "Desenvolvimento de um site para publicação de blogs com geração automática de conteúdo.",
                "Aplicação de recursos de inteligência artificial para apoiar a criação de posts.",
                "Experiência prática com automação de conteúdo, aplicações web e criação digital."
            ],
            techStack: "Tecnologias: desenvolvimento web, JavaScript, automação e integração com IA."
        },
        {
            cargo: "Projeto Independente",
            empresa: "Edição de vídeos para o canal Derivandoideias",
            periodo: "Projeto independente",
            descricao: [
                "Edição de vídeos para um canal de amigos no YouTube.",
                "Desenvolvimento de criatividade, atenção aos detalhes e senso estético.",
                "Contato prático com produção de conteúdo digital e organização de materiais audiovisuais."
            ],
            techStack: "Competências: edição de vídeo, criatividade, atenção aos detalhes e produção digital."
        }
    ]
};

const nomeArquivoPdf = 'curriculo-vitor-ortiz.pdf';

function renderizarCurriculo() {
    const preencherTexto = (id, texto) => {
        const el = document.getElementById(id);
        if (el) el.innerText = texto;
    };

    const preencherLista = (id, lista) => {
        const el = document.getElementById(id);
        if (el) el.innerHTML = lista.map(item => `<li>${item}</li>`).join('');
    };

    preencherTexto('nome', dadosCurriculo.nome);
    preencherTexto('cargo', dadosCurriculo.cargo);
    preencherTexto('resumo-text', dadosCurriculo.resumo);

    preencherLista('skills-list', dadosCurriculo.skills);
    preencherLista('soft-skills-list', dadosCurriculo.softSkills);
    preencherLista('idiomas-list', dadosCurriculo.idiomas);

    const renderizarItens = (containerId, itens) => {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = itens.map(item => `
            <div class="item"> 
                <div class="experience-heading">
                    <h4 class="experience-title">${item.cargo} <span class="experience-company">| ${item.empresa}</span></h4>
                </div>
                <span class="experience-period">${item.periodo}</span>
                
                <ul>
                    ${item.descricao.map(descricao => `<li>${descricao}</li>`).join('')}
                </ul>
                
                <p class="tech-stack">${item.techStack}</p>
            </div>
        `).join('');
    };

    renderizarItens('experiencias-container', dadosCurriculo.experiencias);
    renderizarItens('projetos-container', dadosCurriculo.projetos);
}

function prepararImpressaoCompacta() {
    const resume = document.querySelector('.resume-container');
    if (!resume) return;

    document.body.classList.add('print-fit');

    const a4HeightPx = 1122;
    const scale = Math.min(1, a4HeightPx / resume.scrollHeight);
    document.documentElement.style.setProperty('--print-scale', scale.toFixed(3));
}

function limparModoPdf() {
    document.body.classList.remove('generating-pdf', 'print-fit');
    document.documentElement.style.removeProperty('--print-scale');
}

function imprimirComoFallback() {
    prepararImpressaoCompacta();
    window.print();
}

async function gerarPdf() {
    const resume = document.querySelector('.resume-container');
    const botaoPdf = document.getElementById('btn-pdf');

    if (!resume || !botaoPdf) return;

    const jsPdf = window.jspdf?.jsPDF;
    const podeGerarPdf = typeof window.html2canvas === 'function' && typeof jsPdf === 'function';

    if (!podeGerarPdf) {
        imprimirComoFallback();
        return;
    }

    const textoOriginal = botaoPdf.innerText;
    botaoPdf.innerText = 'Gerando...';
    botaoPdf.classList.add('loading');
    botaoPdf.disabled = true;
    document.body.classList.add('generating-pdf');

    try {
        await new Promise(resolve => requestAnimationFrame(resolve));

        const canvas = await window.html2canvas(resume, {
            scale: 2,
            backgroundColor: '#ffffff',
            useCORS: true,
            logging: false
        });

        const pdf = new jsPdf({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = 210;
        const pageHeight = 297;
        const imgData = canvas.toDataURL('image/jpeg', 0.98);
        const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
        const imgWidth = canvas.width * ratio;
        const imgHeight = canvas.height * ratio;
        const marginX = (pageWidth - imgWidth) / 2;
        const marginY = (pageHeight - imgHeight) / 2;

        pdf.addImage(imgData, 'JPEG', marginX, marginY, imgWidth, imgHeight);
        pdf.save(nomeArquivoPdf);
    } catch (error) {
        console.error('Erro ao gerar PDF:', error);
        imprimirComoFallback();
    } finally {
        botaoPdf.innerText = textoOriginal;
        botaoPdf.classList.remove('loading');
        botaoPdf.disabled = false;
        limparModoPdf();
    }
}

document.getElementById('btn-pdf')?.addEventListener('click', gerarPdf);

window.addEventListener('afterprint', limparModoPdf);

window.addEventListener('DOMContentLoaded', renderizarCurriculo);
