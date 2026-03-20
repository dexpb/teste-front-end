# Documentação do projeto — Teste Front-end Econverse

Este documento resume **o que foi implementado**, **como se relaciona com o briefing do teste** e **o que foi acrescentado além do pedido**, para facilitar a avaliação de organização, lógica, componentização e aderência aos objetivos.

---

## 1. Visão geral

Aplicação **SPA** em **React 19** + **TypeScript**, estilizada com **Sass** (sem Bootstrap/Foundation ou similares). A página principal é uma **landing de e-commerce** com header, hero, categorias, **vitrines de produtos** alimentadas por **JSON via HTTP**, **modal de produto**, blocos de parceiros, marcas, newsletter e rodapé.

- **Build:** Vite 8  
- **Dados:** `fetch` do endpoint oficial de produtos (com **proxy em dev** para CORS)  
- **Estado global mínimo:** busca e produto selecionado na `LandingPage`; lista de produtos no hook `useProducts`

---

## 2. Atendimento aos requisitos do teste

| Requisito | Como foi atendido |
|-----------|-------------------|
| **React + TypeScript conforme layout** | Componentes em `.tsx`, tipos em `model/` e `shared/types`, sem `any` desnecessário. Layout espelhado no Figma com variáveis Sass (`--eco-*`, trilhos de largura, espaçamentos). |
| **Vitrine consumindo JSON do link informado** | `productsApi.ts` + `useProducts.ts`; URL base configurável; em dev o Vite redireciona `/econverse-api/...` → `app.econverse.com.br`. |
| **Clique no produto → modal com dados do JSON** | `ProductCard` abre `ProductModal` com nome, preço, descrição curta, imagem; `Escape`, foco no fechar, `aria-*` no diálogo. |
| **Pré-processador Sass** | `LandingPage.scss` + `index.scss`; sem CSS-in-JS de UI. |
| **Respeitar layout (tipografia, cores, botões)** | Paleta e medidas alinhadas ao mock (ex.: trilho 1270px vitrine/parceiros, cards 634×350, gaps, newsletter, footer). |
| **Sem bibliotecas UI (Bootstrap, etc.)** | Apenas React, React-DOM, Vite, ESLint, Sass nas dependências de build/runtime. |

---

## 3. O que foi adicionado além do escopo (“plus”)

Funcionalidades e refinos **não listados explicitamente** no briefing, mas que melhoram UX, manutenção e aderência ao layout:

### 3.1 Busca no header

- Campo de busca **controlado** no estado da `LandingPage`.  
- **Filtro** em tempo real por nome e descrição curta (`filterProductsBySearch.ts`).  
- **Dois modos de tela** quando há texto na busca:  
  - **Com resultados:** página dedicada com resumo (“X produtos encontrados”) + uma vitrine (`SearchResultsView`), sem abas decorativas que não filtram API.  
  - **Sem resultados:** tela estilo **“página não encontrada”** (`SearchNotFoundView`) + botão para limpar a busca e voltar à loja completa.  
- Acessibilidade: `role="search"`, texto oculto explicando o comportamento, `aria-controls` / `aria-live` onde faz sentido.

### 3.2 Carrossel da vitrine

- Navegação por “páginas” de 4 itens com setas **fora** do trilho de conteúdo (`.eco-shelf__track`).  
- **Animação discreta** de entrada dos cards e microinteração nas setas, com respeito a `prefers-reduced-motion`.

### 3.3 Arquitetura e refatoração

- **`ProductShelfWithPartners`:** agrupa vitrine + parceiros sem duplicar JSX na página.  
- **Placeholder Sass `%eco-content-rail`:** largura útil reutilizável.  
- **Ícones sociais** no mesmo padrão do `iconRegistry` (Instagram, Facebook, LinkedIn).  
- **Dados estruturados** no `index.html` (`WebSite` JSON-LD), meta **Open Graph**, **canonical**, **robots**, **description** — reforço de SEO além do mínimo.  
- **HTML semântico:** `header`, `nav`, `main`, `section`, `article`, `footer`, headings hierárquicos, `aria-label` em regiões e botões icônicos.

---

## 4. Organização do projeto (para avaliação)

```
src/
  app/                    # Entrada da árvore React (App)
  features/
    landing/
      api/                # Chamada HTTP ao JSON de produtos
      hooks/              # useProducts
      lib/                # filterProductsBySearch
      model/              # Tipos Product / API
      ui/
        LandingPage.tsx   # Orquestra layout, busca, modal, modos “loja” vs “busca”
        LandingPage.scss    # Agrega partials em ui/styles/ (ver styles/README.md)
        styles/             # Sass por secção (header, vitrine, modal, busca, …)
        components/       # Header, Hero, Categorias, Vitrine, Modal, Parceiros, etc.
    icons/                # Registry + ícones inline (TSX)
  shared/
    lib/                  # Ex.: formatCurrency
    types/                # Tipos compartilhados (ex.: nomes de ícones)
```

**Separação de responsabilidades**

- **API** isolada de UI.  
- **Tipos** próximos do domínio (`model/`).  
- **Componentes** focados em apresentação e eventos; lógica de lista/filtro na página ou em `lib/`.

---

## 5. Fluxos principais

### 5.1 Carregamento de produtos

1. `useProducts` dispara `fetchProducts()` ao montar.  
2. Sucesso → lista em estado; erro → string de erro.  
3. Vitrines recebem `products` ou `displayProducts` (após filtro).

### 5.2 Modal

1. `ProductCard` chama `onOpen(product)`.  
2. `LandingPage` guarda `selected` e renderiza `ProductModal`.  
3. Fechar: botão, clique no backdrop, `Escape`; `body` com `overflow` restaurado no cleanup.

### 5.3 Busca

1. `searchQuery` vazio → landing completa.  
2. Com texto: `displayProducts = filter(products, query)`.  
3. Subárvore do `main` troca entre loading, erro, `SearchNotFoundView`, `SearchResultsView`.

---

## 6. Pontos extras do briefing (SEO e semântica)

| Extra solicitado | Onde |
|-------------------|------|
| **Boas práticas de SEO** | `index.html`: `lang="pt-BR"`, `<title>` descritivo, `meta description`, `robots`, `canonical`, Open Graph, JSON-LD `WebSite`. |
| **HTML semântico** | Landmarks (`header`, `nav`, `main`, `footer`), `section`/`article`, títulos com `aria-labelledby` onde aplicável, textos ocultos só para leitores de tela (`.visually-hidden`). |

---

## 7. Critérios de avaliação — referência rápida

| Critério | Evidências no código |
|----------|----------------------|
| **Organização** | Feature `landing` com `api`, `hooks`, `model`, `lib`, `ui/components`. |
| **Lógica** | Filtro puro em função testável; hook de dados com cancelamento de fetch; estados de busca explícitos. |
| **Componentização** | Header, footer, shelf, modal, parceiros, busca e cards desacoplados; props tipadas. |
| **Objetivos** | JSON na vitrine, modal no clique, Sass, sem lib de UI, layout próximo ao Figma. |

---

## 8. Comandos e API

Detalhes de instalação, `dev`, `build`, `preview`, `lint` e **URL do JSON** estão no **[README.md](./README.md)**.

---

## 9. Observações para produção

- O **proxy CORS** existe só no **Vite (dev)**. Em deploy estático, a API deve ser acessível com CORS permitido ou via **proxy no servidor** (nginx, etc.), como descrito no README.

---
