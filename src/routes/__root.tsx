import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Solutions Dev | Sites Profissionais que Vendem 24h - Barbearias, Restaurantes e Hamburguerias',
      },
      {
        name: 'description',
        content:
          'A Solutions Dev cria sites profissionais para barbearias, restaurantes, hamburguerias e pizzarias. Pronto em até 7 dias, otimizado para Google e feito para converter visitantes em clientes. Fale agora no WhatsApp.',
      },
      {
        property: 'og:title',
        content: 'Solutions Dev | Seu negócio merece um site que vende enquanto você dorme',
      },
      {
        property: 'og:description',
        content:
          'Atraia clientes 24h, pare de perder vendas para concorrentes digitais e tenha um site que realmente gera resultados.',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:image',
        content: '/og-image.png',
      },
      {
        name: 'theme-color',
        content: '#0a192f',
      },
    ],
    links: [
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossOrigin: 'anonymous',
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Solutions Dev',
  description:
    'Agência especializada em criação de sites profissionais para barbearias, restaurantes, hamburguerias e pizzarias.',
  areaServed: 'BR',
  telephone: '+5598981759232',
  priceRange: '$$',
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
