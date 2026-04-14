const dadosCurriculo = {
    nome: "Vitor Ortiz de Camargo",
    cargo: "Desenvolvedor Mobile Júnior",
    
    resumo: "Desenvolvedor Mobile Júnior com atuação em Flutter e formação técnica em Programação para Internet pela ETEC Comendador João Rays. Tenho perfil dedicado, curioso e comprometido com evolução constante, unindo conhecimentos em desenvolvimento mobile, web, interfaces, lógica de programação e boas práticas de tecnologia. Busco crescer profissionalmente criando soluções funcionais, organizadas e úteis para o usuário, sempre aprendendo com a equipe e contribuindo com responsabilidade, constância e vontade de evoluir.",
    
    skills: [
        "Flutter",
        "Dart",
        "React",
        "JavaScript",
        "Node.js",
        "C#",
        "Python",
        "HTML5 e CSS3",
        "Figma",
        "Noções de Cibersegurança",
        "Git e GitHub"
    ],

    softSkills: [
        "Dedicação e Comprometimento",
        "Facilidade para Aprender",
        "Comunicação",
        "Organização",
        "Trabalho em Equipe"
    ],

    idiomas: [
        "Português (Nativo)",
        "Inglês (Intermediário)", 
    ],

    experiencias: [
        {
            cargo: "Desenvolvedor Mobile Júnior",
            empresa: "Guia de Motéis",
            periodo: "Atual",
            descricao: [
                "Atuação no desenvolvimento e manutenção de aplicações mobile com Flutter.",
                "Colaboração em melhorias de interface, usabilidade e experiência do usuário.",
                "Participação em rotinas de desenvolvimento, correção de problemas e evolução de funcionalidades.",
                "Aprendizado contínuo em ambiente profissional, com foco em qualidade, organização e trabalho em equipe."
            ],
            techStack: "Tecnologias: Flutter, Dart, desenvolvimento mobile, interfaces e boas práticas de código."
        },
        {
            cargo: "Projeto de Conclusão de Curso",
            empresa: "Plataforma de Pedidos White-label",
            periodo: "2026",
            descricao: [
                "Desenvolvimento e apresentação de um TCC em C# inspirado no modelo do iFood.",
                "Criação de uma proposta white-label voltada para personalização por empresas e estabelecimentos.",
                "Participação nas etapas de planejamento, estruturação da solução, desenvolvimento e apresentação."
            ],
            techStack: "Tecnologias: C#, lógica de programação, modelagem da solução e apresentação técnica."
        },
        {
            cargo: "Freelancer Iniciante",
            empresa: "Site de Blog com Inteligência Artificial",
            periodo: "Projeto independente", 
            descricao: [
                "Desenvolvimento de um site para postagem de blogs com geração automática de conteúdo.",
                "Aplicação de recursos de inteligência artificial para apoiar a criação de posts.",
                "Experiência prática com automação de conteúdo, aplicações web e criação digital."
            ],
            techStack: "Tecnologias: desenvolvimento web, JavaScript, automação e integração com IA."
        },
        {
            cargo: "Freelancer Iniciante",
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

    const expContainer = document.getElementById('experiencias-container');
    if (expContainer) {
        expContainer.innerHTML = dadosCurriculo.experiencias.map(exp => `
            <div class="item"> 
                <div class="experience-heading">
                    <h4 class="experience-title">${exp.cargo} <span class="experience-company">| ${exp.empresa}</span></h4>
                </div>
                <span class="experience-period">${exp.periodo}</span>
                
                <ul>
                    ${exp.descricao.map(item => `<li>${item}</li>`).join('')}
                </ul>
                
                <p class="tech-stack">${exp.techStack}</p>
            </div>
        `).join('');
    }
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
