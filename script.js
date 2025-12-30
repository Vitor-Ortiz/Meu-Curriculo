const dadosCurriculo = {
    nome: "Vitor Ortiz de Camargo",
    cargo: "Desenvolvedor Backend Iniciante",
    
    // Mantive o texto focado em aprendizado e segurança que você gostou
    resumo: "Estudante de programação com forte interesse em Segurança da Informação e Backend. Sou curioso, gosto de aprender coisas novas e estou totalmente disposto a me dedicar para dominar novas tecnologias e desafios. Busco minha primeira oportunidade para aplicar o que aprendi na ETEC, colaborar com a equipe e crescer profissionalmente.",
    
    skills: [
        // ORDEM NOVA: Backend Primeiro -> Ferramentas -> Frontend por último
        "Node.js (Noções de Backend)",
        "SQL Server & Firebase", // Adicionei SQL Server (muito importante!)
        "JavaScript (Lógica e Manipulação)",
        "Consumo de APIs (REST)",
        "Noções de Segurança Web",
        "Git e GitHub",
        "HTML5 e CSS3" // Ficou por último como pedido
    ],

    softSkills: [
        "Disposição para Aprender",
        "Curiosidade Técnica",
        "Resolução de Problemas",
        "Trabalho em Equipe"
    ],

    idiomas: [
        "Português (Nativo)",
        "Inglês (Intermediario)", 
    ],

    experiencias: [
        {
            cargo: "Projeto Pessoal",
            empresa: "DevStudy (Plataforma de Estudos)",
            periodo: "Jan 2025 - Atual",
            descricao: [
                "Criação de um site para estudos de programação.",
                "Desenvolvimento de sistema de login e cadastro de usuários.",
                "Uso de inteligência artificial para responder dúvidas simples."
            ],
            techStack: "Techs: JavaScript, Firebase (Banco de Dados), HTML e CSS."
        },
        {
            cargo: "Freelancer Iniciante",
            empresa: "Bot de Automação",
            periodo: "Out 2024 - Nov 2024", 
            descricao: [
                "Desenvolvimento de um robô para postar conteúdo automaticamente.",
                "Conexão com a inteligência artificial da OpenAI (ChatGPT).",
                "Organização de dados JSON para o funcionamento do bot."
            ],
            techStack: "Techs: Node.js (Backend), JavaScript e API da OpenAI."
        }
    ]
};

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
            <div class="item" style="margin-bottom: 25px;"> 
                <div style="display: flex; justify-content: space-between; align-items: baseline;">
                    <h4 style="margin: 0;">${exp.cargo} <span style="font-weight: normal; font-size: 0.9em; color: #555;">| ${exp.empresa}</span></h4>
                </div>
                <span style="font-size: 0.85rem; color: #777; display: block; margin-bottom: 8px;">${exp.periodo}</span>
                
                <ul style="margin-bottom: 10px;">
                    ${exp.descricao.map(item => `<li style="margin-bottom: 4px;">${item}</li>`).join('')}
                </ul>
                
                <p style="
                    font-size: 0.8rem; 
                    font-style: italic; 
                    color: #444; 
                    background-color: #f1f1f1; 
                    padding: 5px 10px; 
                    border-left: 4px solid #2c3e50;
                    border-radius: 0 4px 4px 0;
                ">
                    ${exp.techStack}
                </p>
            </div>
        `).join('');
    }
}

window.onload = renderizarCurriculo;