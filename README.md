# Ecodar (Vite + React)

App mobile (protótipo) feito a partir das telas do Figma: login, Home, Produtos, Carrinho, Entregas (Gerador), Sobre nós e Perfil.

## Requisitos

- Node.js 18 ou superior (https://nodejs.org)
- VS Code

## Como rodar no VS Code

1. Extraia o zip e abra a pasta `ecodar-vite` no VS Code (**File > Open Folder**).
2. Abra o terminal (**Terminal > New Terminal**) e rode:

```bash
npm install
npm run dev
```

3. Abra o endereço que aparecer (normalmente http://localhost:5173).

Para gerar a versão de produção: `npm run build`. Os arquivos ficam em `dist/`.

## Como usar

- **Login:** qualquer email válido (ex.: `maria@email.com`) e senha com pelo menos 4 caracteres.
- **Home / Produtos:** pesquise e adicione produtos ao carrinho.
- **Carrinho:** aumente ou diminua quantidades. "Cancelar" esvazia; "Comprar" finaliza o pedido.
- **Entregas:** mostra o Gerador e a lista de entregas.
- **Perfil:** dados do usuário e botão "Sair da conta".

Login e carrinho são salvos no navegador (localStorage).

## Estrutura

```
ecodar-vite/
├── index.html
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx            # providers e roteador
    ├── App.jsx             # rotas (com proteção de login)
    ├── data.js             # produtos, entregas e helpers (edite aqui)
    ├── index.css           # cores, tipografia e layout
    ├── context/
    │   ├── AuthContext.jsx   # login / logout
    │   ├── CartContext.jsx   # carrinho
    │   └── ToastContext.jsx  # avisos rápidos
    ├── components/
    │   ├── Layout.jsx      # barra superior, conteúdo e barra inferior
    │   └── Icon.jsx        # ícones SVG
    └── pages/              # uma tela por arquivo
```

## Personalização

- Produtos, preços e entregas: `src/data.js`.
- Cores: variáveis no topo de `src/index.css`.
- Textos da tela "Sobre nós": `src/pages/About.jsx`.
- Para usar imagens reais do Figma, coloque os arquivos em `src/assets/` e troque o `<Icon />` por `<img src={...} />`.
