# Currículo Profissional — Vitor Ortiz de Camargo

Repositório do currículo profissional em HTML/CSS/JS, com versão visual (layout em duas colunas) e versão ATS (coluna única, otimizada para sistemas de leitura automática).

---

## Objetivo

Apresentar o perfil profissional de forma clara, organizada e versátil para candidaturas em tecnologia, suporte, atendimento, administrativo e operações.

---

## Tecnologias Utilizadas

- **HTML5** — Estrutura semântica e acessível
- **CSS3** — Layout responsivo (Grid/Flexbox), variáveis CSS, media queries, print styles
- **JavaScript (Vanilla)** — Renderização dinâmica a partir de fonte única de dados (`dadosCurriculo`)
- **Impressão Nativa do Navegador** — Geração de PDF via `window.print()` (texto selecionável, sem dependências externas)

---

## Como Abrir o Currículo

1. Clone ou baixe este repositório
2. Abra o arquivo `index.html` diretamente no navegador (duplo clique ou `File > Open`)
3. Não é necessário servidor local — funciona como arquivo estático

```bash
# Exemplo: abrir no navegador padrão (Windows)
start index.html

# Ou (macOS)
open index.html

# Ou (Linux)
xdg-open index.html
```

---

## Versões Disponíveis

| Versão | Descrição | Como Acessar |
|--------|-----------|--------------|
| **Visual** | Layout em duas colunas (sidebar + conteúdo principal), com foto, cores e design editorial | Padrão ao abrir `index.html` |
| **ATS** | Coluna única, sem elementos decorativos, sem foto, otimizada para parsers de currículo | Clique no botão **"Versão ATS"** no canto inferior esquerdo |

> A alternância entre versões é feita via JavaScript, mantendo os mesmos dados (`dadosCurriculo` em `script.js`).

---

## Como Gerar/Salvar PDF

### Opção 1: Botão "Salvar PDF" (Recomendado)
- Clique no botão **"Salvar PDF"** no canto inferior direito
- Abre a caixa de impressão nativa do navegador (`window.print()`)
- Selecione **"Salvar como PDF"** como destino
- Arquivo salvo com texto **selecionável e pesquisável**

### Opção 2: Impressão Direta do Navegador
- Use `Ctrl+P` / `Cmd+P` em qualquer versão
- Selecione **"Salvar como PDF"** como destino
- Configure margens: **Nenhuma** ou **Mínimas** para melhor aproveitamento

### Opção 3: Versão ATS em PDF
1. Alterne para a **Versão ATS** (botão no canto inferior esquerdo)
2. Use `Ctrl+P` / `Cmd+P` e salve como PDF
3. Resultado: coluna única, texto selecionável, ideal para ATS

> **Nota:** O PDF é gerado exclusivamente pela impressão nativa do navegador — texto 100% selecionável, sem rasterização.

---

## Como Atualizar as Informações Profissionais

Todas as informações do currículo estão centralizadas no objeto **`dadosCurriculo`** no arquivo `script.js`.

### Estrutura Principal

```javascript
const dadosCurriculo = {
    nome: "Vitor Ortiz de Camargo",
    tituloProfissional: "Tecnologia | Atendimento | Organização de Processos",
    localizacao: "Barra Bonita, SP",
    telefone: "+55 14 98813-4137",
    email: "vitorortiz512@gmail.com",
    github: "https://github.com/vitor-ortiz",
    linkedin: "https://www.linkedin.com/in/vitor-ortiz-de-camargo-833aa2402/",

    resumo: "...",
    experiencias: [{ cargo, empresa, periodo, local, descricoes: [...] }],
    competencias: { "Grupo": ["item1", "item2", ...] },
    projetos: [{ nome, periodo, descricoes: [...], link: "url-ou-null" }],
    formacao: [{ curso, instituicao, periodo, status }],
    idiomas: [{ idioma, nivel }],
    caracteristicas: [...],

    nomeArquivoPdf: "curriculo-vitor-ortiz.pdf",
    tituloPagina: "Currículo - Vitor Ortiz de Camargo",
    descricaoSeo: "..."
};
```

### Passos para Atualizar

1. Abra `script.js` em seu editor de código
2. Localize o objeto `dadosCurriculo` (início do arquivo)
3. Modifique os valores desejados — **não altere a estrutura das chaves**
4. Salve o arquivo
5. Recarregue `index.html` no navegador

> **Dica:** Mantenha as descrições concisas, use verbos de ação e, quando possível, inclua resultados mensuráveis.

---

## Estrutura de Arquivos

```
Meu-Curriculo/
├── index.html          # HTML base (container vazio, carrega JS/CSS)
├── style.css           # Estilos: visual, ATS, print, responsivo
├── script.js           # Dados + renderização + PDF + toggle versão
├── photo.png           # Foto do perfil (não versionada se sensível)
├── curriculo-vitor-ortiz.pdf  # PDF gerado (opcional, não versionar)
└── README.md           # Este arquivo
```

---

## Acessibilidade

- HTML semântico (`header`, `main`, `aside`, `section`, `article`, `nav`)
- Contraste de cores compatível com WCAG AA
- Navegação por teclado funcional
- Suporte a `prefers-reduced-motion`
- Textos alternativos e `aria-label` nos botões
- Versão ATS sem tabelas complexas ou elementos flutuantes

---

## Responsividade

- **Desktop (≥1024px):** Layout em grid (sidebar 260px + main)
- **Tablet (760–1024px):** Grid mantido, tamanhos ajustados
- **Mobile (<760px):** Coluna única, sidebar vira faixa horizontal
- **Print (A4):** Layout preservado com sidebar, fontes 10–11pt, sem cortes

---

## Limitações Conhecidas

1. **PDF via impressão nativa** — requer interação do usuário (não é automático em background).
2. **Foto de perfil** (`photo.png`) não está incluída no repositório por privacidade — adicione localmente se desejar.
3. **Funciona 100% offline** — sem CDNs externas, sem dependências de build.
4. **Regeneração do PDF estático** (`curriculo-vitor-ortiz.pdf`) não é automática — gere manualmente via "Salvar PDF" e substitua se necessário.

---

## Licença

Uso pessoal. Livre para adaptação como base para seu próprio currículo.

---

## Contato

- **GitHub:** [github.com/vitor-ortiz](https://github.com/vitor-ortiz)
- **LinkedIn:** [linkedin.com/in/vitor-ortiz-de-camargo](https://www.linkedin.com/in/vitor-ortiz-de-camargo-833aa2402/)
- **Email:** vitorortiz512@gmail.com