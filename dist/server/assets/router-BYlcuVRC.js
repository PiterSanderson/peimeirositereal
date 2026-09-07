import { createRootRoute, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsxs, jsx } from "react/jsx-runtime";
const Route$1 = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        title: "Solutions Dev | Sites Profissionais que Vendem 24h - Barbearias, Restaurantes e Hamburguerias"
      },
      {
        name: "description",
        content: "A Solutions Dev cria sites profissionais para barbearias, restaurantes, hamburguerias e pizzarias. Pronto em até 7 dias, otimizado para Google e feito para converter visitantes em clientes. Fale agora no WhatsApp."
      },
      {
        property: "og:title",
        content: "Solutions Dev | Seu negócio merece um site que vende enquanto você dorme"
      },
      {
        property: "og:description",
        content: "Atraia clientes 24h, pare de perder vendas para concorrentes digitais e tenha um site que realmente gera resultados."
      },
      {
        property: "og:type",
        content: "website"
      },
      {
        property: "og:image",
        content: "/og-image.png"
      },
      {
        name: "theme-color",
        content: "#0a192f"
      }
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com"
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
      }
    ]
  }),
  shellComponent: RootDocument
});
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Solutions Dev",
  description: "Agência especializada em criação de sites profissionais para barbearias, restaurantes, hamburguerias e pizzarias.",
  areaServed: "BR",
  telephone: "+5598981759232",
  priceRange: "$$"
};
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "pt-BR", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx(HeadContent, {}),
      /* @__PURE__ */ jsx(
        "script",
        {
          type: "application/ld+json",
          dangerouslySetInnerHTML: { __html: JSON.stringify(localBusinessSchema) }
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter = () => import("./index-D6lWotEm.js");
const Route = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$1
});
const rootRouteChildren = {
  IndexRoute
};
const routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const router = createRouter({
    routeTree,
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
