# Teste Front-end — Econverse

Landing page em **React**, **TypeScript** e **Sass**, com consumo da API de produtos em JSON e modal de detalhes.

## Documentação completa

Há um **[DOCUMENTACAO.md](./DOCUMENTACAO.md)** com:

- checklist do briefing vs implementação;
- **funcionalidades extras** (busca, carrossel, refactors, SEO);
- organização de pastas, fluxos principais e referência aos critérios de avaliação do teste.

## Pré-requisitos

- **Node.js** 20+ (recomendado) — [nodejs.org](https://nodejs.org/)
- **npm** (vem com o Node)

> Opcional: o repositório pode incluir `bun.lock`; nesse caso você pode usar [Bun](https://bun.sh/) no lugar do npm (`bun install`, `bun run dev`, etc.).

## Instalação

Na raiz do projeto:

```bash
npm install
```

## Rodar em desenvolvimento

```bash
npm run dev
```

O Vite sobe o servidor local (URL aparece no terminal, em geral `http://localhost:5173`).

**API de produtos em dev:** o `vite.config.ts` define um **proxy** de `/econverse-api` para `https://app.econverse.com.br`, evitando bloqueio de CORS ao buscar o JSON durante o desenvolvimento.

## Compilar para produção

Gera checagem TypeScript (`tsc`) e o bundle otimizado em `dist/`:

```bash
npm run build
```

## Pré-visualizar o build de produção

Depois de `npm run build`, sirva a pasta `dist` localmente:

```bash
npm run preview
```

Abra a URL indicada no terminal.  
**Observação:** em produção o app chama a API com **URL absoluta**. Se o navegador bloquear por CORS, é preciso configurar proxy no servidor de hospedagem (similar ao proxy do Vite).

## Testar / verificar qualidade

Não há suíte de testes unitários (Jest/Vitest) configurada neste projeto. A verificação automatizada disponível é o **lint** com ESLint:

```bash
npm run lint
```

O comando `npm run build` também valida os tipos TypeScript; se falhar, o build não conclui.

## Scripts resumidos

| Comando           | Descrição                                      |
| ----------------- | ---------------------------------------------- |
| `npm run dev`     | Servidor de desenvolvimento com hot reload     |
| `npm run build`   | TypeScript + build de produção (`dist/`)       |
| `npm run preview` | Servir `dist/` localmente após o build         |
| `npm run lint`    | Executar ESLint no código                      |

## Estrutura (visão geral)

- `src/app/` — composição da aplicação (`App.tsx`)
- `src/features/landing/` — página principal, API de produtos, componentes
- `src/features/icons/` — ícones em TSX / registry
- `src/shared/` — utilitários e tipos compartilhados

Mais detalhes da feature de landing: `src/features/landing/README.md`.

## Link da API (produtos)

`https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json`
