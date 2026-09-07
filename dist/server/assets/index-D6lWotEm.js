import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { MessageCircle, X, Menu, Search, ShieldCheck, Moon, Rocket, Smartphone, ShoppingCart, BarChart3, Star } from "lucide-react";
const WHATSAPP_NUMBER = "5598981759232";
const WHATSAPP_DISPLAY = "(98) 98175-9232";
function waLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
const NAV_LINKS = [{
  label: "Nossos Sites",
  href: "#sites"
}, {
  label: "Diferenciais",
  href: "#diferenciais"
}, {
  label: "Depoimentos",
  href: "#depoimentos"
}, {
  label: "Garantia",
  href: "#garantia"
}];
function useCountdown() {
  const [timeLeft, setTimeLeft] = useState("");
  useEffect(() => {
    function update() {
      const now = /* @__PURE__ */ new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 1);
      const diff = Math.max(0, end.getTime() - now.getTime());
      const days = Math.floor(diff / (1e3 * 60 * 60 * 24));
      const hours = Math.floor(diff / (1e3 * 60 * 60) % 24);
      const minutes = Math.floor(diff / (1e3 * 60) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m`);
    }
    update();
    const id = setInterval(update, 6e4);
    return () => clearInterval(id);
  }, []);
  return timeLeft;
}
function WhatsappButton({
  className = "",
  children,
  message = "Olá! Quero um site profissional para o meu negócio. Podemos falar?"
}) {
  return /* @__PURE__ */ jsx("a", { href: waLink(message), target: "_blank", rel: "noopener noreferrer", className, children });
}
function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const vagasRestantes = 3;
  const countdown = useCountdown();
  return /* @__PURE__ */ jsxs("div", { className: "bg-navy text-white", children: [
    /* @__PURE__ */ jsxs("header", { className: "fixed top-0 left-0 right-0 z-40 bg-navy/90 backdrop-blur-sm border-b border-white/10", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto flex items-center justify-between px-5 py-4", children: [
        /* @__PURE__ */ jsxs("span", { className: "text-xl font-extrabold tracking-tight", children: [
          "Solutions",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Dev" })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "hidden md:flex items-center gap-8", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, className: "text-sm font-medium text-white/80 hover:text-gold transition-colors", children: link.label }, link.href)) }),
        /* @__PURE__ */ jsxs(WhatsappButton, { className: "hidden md:inline-flex items-center gap-2 gradient-cta text-navy font-bold text-sm px-5 py-2.5 rounded-full transition-all", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
          "Falar no WhatsApp"
        ] }),
        /* @__PURE__ */ jsx("button", { type: "button", "aria-label": "Abrir menu", className: "md:hidden text-white", onClick: () => setMenuOpen((open) => !open), children: menuOpen ? /* @__PURE__ */ jsx(X, { size: 28 }) : /* @__PURE__ */ jsx(Menu, { size: 28 }) })
      ] }),
      menuOpen && /* @__PURE__ */ jsxs("nav", { className: "md:hidden flex flex-col gap-1 px-5 pb-5 bg-navy border-t border-white/10", children: [
        NAV_LINKS.map((link) => /* @__PURE__ */ jsx("a", { href: link.href, onClick: () => setMenuOpen(false), className: "py-3 text-white/85 border-b border-white/5 font-medium", children: link.label }, link.href)),
        /* @__PURE__ */ jsxs(WhatsappButton, { className: "mt-4 flex items-center justify-center gap-2 gradient-cta text-navy font-bold px-5 py-3 rounded-full", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 18 }),
          "Falar no WhatsApp"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("section", { id: "hero", className: "relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-40", style: {
        backgroundImage: "radial-gradient(circle at 20% 20%, rgba(255,215,0,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,107,53,0.16), transparent 40%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto px-5 text-center", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 bg-orange/15 border border-orange/40 text-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-6 animate-pulse-soft", children: [
          "🔥 ÚLTIMAS ",
          vagasRestantes,
          " VAGAS PARA SETEMBRO · fecha em ",
          countdown
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6", children: [
          "SEU NEGÓCIO MERECE UM SITE QUE",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gold", children: "VENDA ENQUANTO VOCÊ DORME" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-10", children: "Atraia clientes 24h, pare de perder vendas para concorrentes digitais e tenha um site que realmente gera resultados." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row items-center justify-center gap-4 mb-14", children: [
          /* @__PURE__ */ jsx(WhatsappButton, { message: "Olá! Quero meu site agora. Pode me passar mais informações?", className: "w-full sm:w-auto gradient-cta text-navy font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-orange/20 hover:-translate-y-0.5 transition-all", children: "QUERO MEU SITE AGORA" }),
          /* @__PURE__ */ jsx("a", { href: "#depoimentos", className: "w-full sm:w-auto border border-white/25 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all text-center", children: "VER CASOS DE SUCESSO" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative mx-auto max-w-4xl", children: /* @__PURE__ */ jsx("div", { className: "rounded-2xl border border-white/10 bg-navy-light p-4 md:p-8 shadow-2xl", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-end justify-center gap-6", children: [
          /* @__PURE__ */ jsx("img", { src: "/placeholder.png", alt: "Site profissional em desktop", loading: "lazy", className: "w-full md:w-3/5 rounded-lg border border-white/10" }),
          /* @__PURE__ */ jsx("img", { src: "/placeholder.png", alt: "Site profissional em celular", loading: "lazy", className: "w-2/5 md:w-1/4 rounded-lg border border-white/10" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-navy-light", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-center mb-4", children: "Por que você está perdendo clientes?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-center max-w-2xl mx-auto mb-14", children: "Você já percebeu que clientes pedem seu WhatsApp mas nunca fecham? Eles querem ver seu cardápio, horários e avaliações ANTES de comprar. Um site muda isso." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6 mb-14", children: [{
        icon: Search,
        title: "Seu concorrente está no Google e você não",
        text: "Enquanto seu concorrente aparece na primeira busca, seu negócio fica invisível para quem está pronto para comprar."
      }, {
        icon: ShieldCheck,
        title: "Clientes não confiam em negócios sem site",
        text: "Sem um site profissional, o cliente sente insegurança e prefere fechar com quem parece mais confiável."
      }, {
        icon: Moon,
        title: "Você perde vendas toda noite enquanto dorme",
        text: "Fora do horário comercial, seu negócio some do radar — enquanto um site continua vendendo 24h."
      }].map(({
        icon: Icon,
        title,
        text
      }) => /* @__PURE__ */ jsxs("div", { className: "bg-navy rounded-2xl border border-white/10 p-7 hover:border-gold/40 transition-colors", children: [
        /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-xl bg-orange/15 flex items-center justify-center mb-5", children: /* @__PURE__ */ jsx(Icon, { className: "text-orange", size: 24 }) }),
        /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: title }),
        /* @__PURE__ */ jsx("p", { className: "text-white/65 text-sm leading-relaxed", children: text })
      ] }, title)) }),
      /* @__PURE__ */ jsx("div", { className: "text-center bg-gradient-to-r from-navy via-navy-light to-navy border border-gold/30 rounded-2xl p-8", children: /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl font-bold", children: [
        "A ",
        /* @__PURE__ */ jsx("span", { className: "text-gold", children: "Solutions Dev" }),
        " cria sites estratégicos que posicionam seu negócio como referência."
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "sites", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-center mb-4", children: "Nossos Sites" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-center max-w-2xl mx-auto mb-14", children: "Modelos pensados para cada tipo de negócio, prontos para vender desde o primeiro dia." }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
        nicho: "Barbearia",
        tema: "Tema escuro e masculino"
      }, {
        nicho: "Restaurante",
        tema: "Tema aconchegante e de comida"
      }, {
        nicho: "Hamburgueria",
        tema: "Tema jovem e descolado"
      }, {
        nicho: "Pizzaria",
        tema: "Tema italiano e acolhedor"
      }].map((item) => /* @__PURE__ */ jsxs("div", { className: "group rounded-2xl overflow-hidden border border-white/10 bg-navy-light", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative aspect-[4/5] overflow-hidden", children: [
          /* @__PURE__ */ jsx("img", { src: "/placeholder.png", alt: `Site para ${item.nicho}`, loading: "lazy", className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" }),
          /* @__PURE__ */ jsx(WhatsappButton, { message: `Olá! Quero ver a demo do site para ${item.nicho}.`, className: "absolute bottom-4 left-1/2 -translate-x-1/2 gradient-cta text-navy text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity", children: "VER DEMO" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
          /* @__PURE__ */ jsx("p", { className: "font-bold", children: `Site ${item.nicho}` }),
          /* @__PURE__ */ jsxs("p", { className: "text-xs text-white/60", children: [
            item.tema,
            " · Pronto em 7 dias"
          ] })
        ] })
      ] }, item.nicho)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "diferenciais", className: "py-20 bg-navy-light", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-center mb-4", children: "Por que a Solutions Dev?" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-center max-w-2xl mx-auto mb-14", children: 'Diferente de agências que entregam só um "cartão de visitas digital", a Solutions Dev cria sites com estratégia de vendas. Cada botão, cada cor, cada palavra foi pensada para converter.' }),
      /* @__PURE__ */ jsx("div", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6", children: [{
        icon: Rocket,
        text: "Pronto em até 4 dias úteis"
      }, {
        icon: Smartphone,
        text: "100% responsivo (celular, tablet e Computador.)"
      }, {
        icon: Search,
        text: "Otimizado para Google (SEO básico incluso)"
      }, {
        icon: MessageCircle,
        text: "Suporte vitalício via WhatsApp"
      }, {
        icon: ShoppingCart,
        text: "Botão de compra/agendamento integrado"
      }, {
        icon: BarChart3,
        text: "Relatório mensal de visitas"
      }].map(({
        icon: Icon,
        text
      }) => /* @__PURE__ */ jsxs("div", { className: "bg-navy rounded-2xl border border-white/10 p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform", children: [
        /* @__PURE__ */ jsx("div", { className: "w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsx(Icon, { className: "text-gold", size: 22 }) }),
        /* @__PURE__ */ jsx("p", { className: "font-semibold leading-snug", children: text })
      ] }, text)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "depoimentos", className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto px-5", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-center mb-4", children: "Quem já transformou o negócio com a gente" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 text-center max-w-2xl mx-auto mb-14", children: "Resultado real de empreendedores que decidiram parar de perder clientes para a concorrência digital." }),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [{
        nome: "Marina Andrade",
        negocio: "Marina Semi-Joias",
        texto: "Nossa me ajudou muito! Obrigado gente"
      }, {
        nome: "Gabrielly",
        negocio: "Pizzaria Cepetiba",
        texto: "Um otimo investimento! Obrigado pelo carinho nos detalhes."
      }, {
        nome: "Carlos Mendonça",
        negocio: "Hamburgueria & Pizaria Mendonça",
        texto: "Qualidade! Grato mesmo meu companheiros. Estou indocando para todo mundo haha. Abraco galera"
      }].map((dep) => /* @__PURE__ */ jsxs("div", { className: "bg-navy-light rounded-2xl border border-white/10 p-7", children: [
        /* @__PURE__ */ jsx("div", { className: "flex text-gold mb-4", children: Array.from({
          length: 5
        }).map((_, i) => /* @__PURE__ */ jsx(Star, { size: 16, fill: "currentColor" }, i)) }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/85 leading-relaxed mb-6", children: [
          '"',
          dep.texto,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx("img", { src: "/placeholder.png", alt: dep.nome, loading: "lazy", className: "w-11 h-11 rounded-full object-cover border border-white/10" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "font-bold text-sm", children: dep.nome }),
            /* @__PURE__ */ jsx("p", { className: "text-white/55 text-xs", children: dep.negocio })
          ] })
        ] })
      ] }, dep.nome)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "garantia", className: "py-20 bg-navy-light", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 text-center", children: [
      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/15 border border-gold/40 mb-6", children: /* @__PURE__ */ jsx(ShieldCheck, { className: "text-gold", size: 38 }) }),
      /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-extrabold mb-4", children: "GARANTIA DE 30 DIAS: seu site no ar ou seu dinheiro de volta" }),
      /* @__PURE__ */ jsx("p", { className: "text-white/70 leading-relaxed", children: "Se em 30 dias você não estiver 100% satisfeito, devolvemos 100% do investimento. Sem burocracia." })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-navy relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10 opacity-30", style: {
        backgroundImage: "radial-gradient(circle at 50% 0%, rgba(255,107,53,0.25), transparent 55%)"
      } }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-5 text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-extrabold mb-5", children: "PRONTO PARA DOMINAR O DIGITAL?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-white/75 mb-10", children: "Chega de perder cliente. Chega de depender só do Instagram. Seu site profissional começa hoje. Fale com um especialista agora e descubra como podemos transformar seu negócio." }),
        /* @__PURE__ */ jsxs(WhatsappButton, { message: "Olá! Quero dominar o digital com um site profissional. Vamos conversar?", className: "inline-flex items-center gap-3 gradient-cta text-navy font-extrabold text-xl px-10 py-5 rounded-full shadow-2xl shadow-orange/30 hover:-translate-y-1 transition-all", children: [
          /* @__PURE__ */ jsx(MessageCircle, { size: 26 }),
          "CHAMAR NO WHATSAPP"
        ] }),
        /* @__PURE__ */ jsxs("p", { className: "text-white/50 text-sm mt-6", children: [
          "Atendimento de segunda a sábado, 8h às 22h · ",
          WHATSAPP_DISPLAY
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("footer", { className: "py-8 border-t border-white/10 text-center text-white/40 text-sm", children: /* @__PURE__ */ jsxs("p", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Solutions Dev. Todos os direitos reservados."
    ] }) }),
    /* @__PURE__ */ jsxs(WhatsappButton, { message: "Olá! Vim pelo site e quero saber mais.", className: "fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform", children: [
      /* @__PURE__ */ jsx(MessageCircle, { size: 22 }),
      /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "FALE CONOSCO" })
    ] })
  ] });
}
export {
  LandingPage as component
};
