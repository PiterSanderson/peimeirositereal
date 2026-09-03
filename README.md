# Solutions Dev — Landing Page

Landing page de alta conversão para a Solutions Dev, agência especializada em sites
profissionais para barbearias, restaurantes, hamburguerias, pizzarias e negócios
físicos de médio porte. O objetivo da página é converter visitantes em leads
qualificados para o WhatsApp.

## Tecnologias

- TanStack Start (React 19 + TanStack Router)
- Vite 7
- Tailwind CSS 4
- lucide-react (ícones)
- Deploy na Netlify

## Estrutura

Página única (`/`) em `src/routes/index.tsx`, composta pelas seções: Hero,
Dor e Solução, Nossos Sites, Diferenciais, Depoimentos, Garantia e CTA final,
mais um botão flutuante de WhatsApp fixo. Os estilos globais e a paleta de cores
(azul petróleo + dourado/laranja) estão em `src/styles.css`.

Todos os botões de contato apontam para o WhatsApp `(98) 98175-9232`. Para trocar
o número, edite a constante `WHATSAPP_NUMBER` em `src/routes/index.tsx`.

## Rodando localmente

```bash
npm install
npm run dev
```

A aplicação abre em `http://localhost:3000`.

## Build

```bash
npm run build
```

## Deploy

O projeto já está configurado para deploy automático na Netlify (`netlify.toml`
define o comando de build `vite build` e a pasta de publicação `dist/client`).
Basta conectar o repositório a um site na Netlify ou usar `netlify deploy`.
