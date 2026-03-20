# Feature `landing`

Página principal do teste (layout e-commerce).

## Estrutura

- `api/productsApi.ts` — fetch do JSON de produtos (em dev usa proxy `/econverse-api/...`).
- `hooks/useProducts.ts` — estado de carregamento / lista.
- `lib/filterProductsBySearch.ts` — filtro da busca no header (nome + descrição).
- `model/product.types.ts` — tipos da API.
- `ui/LandingPage.tsx` — composição da página (modo loja completa vs. resultados / “não encontrado” na busca).
- `ui/LandingPage.scss` — agrega os partials em `ui/styles/` (ver **`ui/styles/README.md`**).
- `ui/styles/*` — Sass por secção (header, hero, vitrine, modal, busca, etc.).
- `ui/components/*` — header, hero, categorias, vitrine, modal, parceiros, marcas, newsletter, footer, **SearchResultsView**, **SearchNotFoundView**, **ProductShelfWithPartners**, etc.

Documentação geral do projeto (requisitos, extras, SEO): **[DOCUMENTACAO.md](../../../DOCUMENTACAO.md)** (raiz do repositório).

## API

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`

Em desenvolvimento o Vite encaminha `/econverse-api/*` para o mesmo host (evita CORS).
