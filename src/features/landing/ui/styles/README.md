# Estilos da landing (`styles/`)

Partials **Sass** agregados por `../LandingPage.scss`.

## Ordem de agregação

A ordem em `LandingPage.scss` importa para a **cascata** (especificidade igual → último ganha):

| Ficheiro               | Conteúdo |
| ---------------------- | -------- |
| `_landing-root.scss`   | `.landing` + variáveis CSS `--eco-*` |
| `_layout.scss`         | `.landing__main`, `.landing__section-group`, `.visually-hidden` |
| `_header.scss`         | Cabeçalho (`.eco-header`, `.eco-icon-btn`) |
| `_hero.scss`           | Banner principal |
| `_categories.scss`     | Faixa de categorias |
| `_section-heading.scss`| `.eco-section-heading` (partilhado) |
| `_shelf.scss`          | Vitrine / carrossel |
| `_product-card.scss`   | Card de produto |
| `_modal.scss`          | Modal de produto |
| `_partners.scss`       | Banners de parceiros |
| `_brands.scss`         | Marcas |
| `_newsletter.scss`     | Newsletter |
| `_footer.scss`         | Rodapé |
| `_search.scss`         | Modo busca (resultados / vazio / estados) |

## `_mixins.scss`

- `@mixin eco-content-rail` — trilho centralizado (`--eco-content-max`).

## Adicionar uma nova secção

1. Criar `_nome.scss` nesta pasta.
2. Incluir `@use './styles/nome';` em `LandingPage.scss` na ordem correta para a cascata.
