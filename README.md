# Food Share — Landing Page

Landing page estática em [Astro](https://astro.build) com ilhas React, Tailwind CSS v4 e TypeScript.

## Requisitos

- Node.js 20+

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
| --- | --- |
| `PUBLIC_APP_URL` | URL do sistema, base dos botões Entrar e Cadastre-se. Opcional, padrão `https://app.foodshare.com.br`. |

O prefixo `PUBLIC_` é obrigatório: o valor é embutido no HTML durante o build.

As URLs do app ficam em `src/data/app.ts`. Os cards de perfil do CTA final enviam `?profile=establishment` ou `?profile=beneficiary` para `/cadastro`.

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala as dependências |
| `npm run dev` | Sobe o servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o build local |
| `npm run check` | Type-check dos arquivos `.astro`, `.ts` e `.tsx` |

## SEO

| Arquivo | Papel |
| --- | --- |
| `astro.config.mjs` | `site: 'https://foodshare.com.br'` — base das URLs absolutas. Trocar aqui ao mudar de domínio. |
| `@astrojs/sitemap` | Gera `sitemap-index.xml` + `sitemap-0.xml` em `dist/` a cada `npm run build`. |
| `public/robots.txt` | Libera o crawl e aponta para `https://foodshare.com.br/sitemap-index.xml`. |
| `src/layouts/BaseLayout.astro` | `<link rel="canonical">`, Open Graph e Twitter Card, todos derivados de `Astro.site`. |

Ao trocar o domínio, atualize os dois lugares: `site` no `astro.config.mjs` e a linha `Sitemap:` do `public/robots.txt`.

O layout aceita `imagem` opcional para sobrescrever a imagem de compartilhamento (padrão: `/img/logo_foodshare_semfundo.png`).

## Estrutura

```
public/img            imagens servidas estaticamente
public/robots.txt     regras de crawl + referência ao sitemap
src/components        componentes por seção (.astro estáticos, .tsx nas ilhas)
src/data              conteúdo da página (benefícios, etapas, depoimentos, dúvidas)
src/layouts           shell do HTML, fontes e inicialização do AOS
src/lib               tema, contador, tipos
src/pages/index.astro composição da página
src/styles/global.css tema do Tailwind e estilos próprios
```

## Ilhas React

Só dois trechos enviam JavaScript ao navegador:

| Ilha | Diretiva | Motivo |
| --- | --- | --- |
| `components/header/Header.tsx` | `client:load` | Menu hamburger e troca de tema precisam responder de imediato |
| `components/hero/HeroStats.tsx` | `client:visible` | Contadores animam quando entram na tela |

O resto da página é HTML estático, incluindo os ícones do lucide, renderizados em tempo de build.
