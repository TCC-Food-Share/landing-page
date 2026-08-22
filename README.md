# Food Share — Landing Page

Landing page estática em [Astro](https://astro.build) com ilhas React, Tailwind CSS v4 e TypeScript.

## Requisitos

- Node.js 20+

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

| Variável | Descrição |
| --- | --- |
| `PUBLIC_LEAD_WEBHOOK_URL` | Endpoint que recebe o POST do formulário de contato. |

O prefixo `PUBLIC_` é obrigatório: o envio acontece no navegador, então o valor é embutido no bundle durante o build.

## Comandos

| Comando | Ação |
| --- | --- |
| `npm install` | Instala as dependências |
| `npm run dev` | Sobe o servidor de desenvolvimento em `localhost:4321` |
| `npm run build` | Gera o site estático em `dist/` |
| `npm run preview` | Serve o build local |
| `npm run check` | Type-check dos arquivos `.astro`, `.ts` e `.tsx` |

## Estrutura

```
public/img            imagens servidas estaticamente
src/components        componentes por seção (.astro estáticos, .tsx nas ilhas)
src/data              conteúdo da página (benefícios, etapas, depoimentos, dúvidas)
src/layouts           shell do HTML, fontes e inicialização do AOS
src/lib               máscara de celular, validação, envio do lead, tema, tipos
src/pages/index.astro composição da página
src/styles/global.css tema do Tailwind e estilos próprios
```

## Ilhas React

Só três trechos enviam JavaScript ao navegador:

| Ilha | Diretiva | Motivo |
| --- | --- | --- |
| `components/header/Header.tsx` | `client:load` | Menu hamburger e troca de tema precisam responder de imediato |
| `components/hero/HeroStats.tsx` | `client:visible` | Contadores animam quando entram na tela |
| `components/contact/LeadForm.tsx` | `client:visible` | Formulário, máscara, validação e envio |

O resto da página é HTML estático, incluindo os ícones do lucide, renderizados em tempo de build.
