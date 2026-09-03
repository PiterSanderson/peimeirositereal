# AGENTS.md

Landing page de alta conversão para a Solutions Dev, agência que cria sites
profissionais para negócios físicos de médio porte (barbearias, restaurantes,
hamburguerias, pizzarias). Todo o funil da página existe para converter o
visitante em um lead no WhatsApp.

## Stack

| Camada | Tecnologia |
|--------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Estilo | Tailwind CSS 4 (tokens de tema em `src/styles.css`) |
| Ícones | lucide-react |
| Deploy | Netlify |

## Estrutura de diretórios

```
src/
├── routes/
│   ├── __root.tsx   # Layout raiz: meta tags de SEO, Schema.org (LocalBusiness), fontes
│   └── index.tsx    # Página única com todas as seções da landing page
├── router.tsx       # Setup do TanStack Router
└── styles.css        # Tokens de tema (@theme): cores navy/gold/orange, fonte Poppins
```

Não há outras rotas — a página inteira vive em `src/routes/index.tsx` como uma
sequência de seções (`<section>`), cada uma com seu próprio `id` para navegação
por âncora (`#sites`, `#diferenciais`, `#depoimentos`, `#garantia`).

## Decisões não óbvias

- **Contato único via WhatsApp**: não há formulário nem banco de dados — toda
  conversão aponta para um link `wa.me` com mensagem pré-preenchida por seção
  (constante `WHATSAPP_NUMBER` em `index.tsx`). Trocar o número de contato só
  exige editar essa constante.
- **Paleta de cores**: definida como variáveis `--color-navy`, `--color-gold` e
  `--color-orange` no `@theme` do Tailwind v4 em `styles.css`, o que gera
  automaticamente utilitários como `bg-navy`, `text-gold`, `border-orange`.
- **Imagens**: os mockups de sites usam `public/placeholder.png` como
  placeholder — substituir pelos prints reais dos sites entregues.
- **Contador de vagas/prazo**: o hook `useCountdown` em `index.tsx` calcula o
  tempo até o fim do mês corrente apenas no client, para reforçar a urgência
  ("últimas vagas") sem depender de backend.

## Convenções

- Componentes: PascalCase; utilitários/hooks: camelCase.
- Estilização exclusivamente via classes utilitárias do Tailwind.
- Import paths usam o alias `@/` para `src/*` (ver `tsconfig.json`).

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
```
