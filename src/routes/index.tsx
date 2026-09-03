import { useEffect, useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import {
  BarChart3,
  Menu,
  MessageCircle,
  Moon,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Star,
  X,
} from 'lucide-react'

export const Route = createFileRoute('/')({
  component: LandingPage,
})

const WHATSAPP_NUMBER = '5598981759232'
const WHATSAPP_DISPLAY = '(98) 98175-9232'

function waLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

const NAV_LINKS = [
  { label: 'Nossos Sites', href: '#sites' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Garantia', href: '#garantia' },
]

function useCountdown() {
  const [timeLeft, setTimeLeft] = useState('')

  useEffect(() => {
    function update() {
      const now = new Date()
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 1)
      const diff = Math.max(0, end.getTime() - now.getTime())
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      setTimeLeft(`${days}d ${hours}h ${minutes}m`)
    }
    update()
    const id = setInterval(update, 60_000)
    return () => clearInterval(id)
  }, [])

  return timeLeft
}

function WhatsappButton({
  className = '',
  children,
  message = 'Olá! Quero um site profissional para o meu negócio. Podemos falar?',
}: {
  className?: string
  children: React.ReactNode
  message?: string
}) {
  return (
    <a
      href={waLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  )
}

function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const vagasRestantes = 3
  const countdown = useCountdown()

  return (
    <div className="bg-navy text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-navy/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
          <span className="text-xl font-extrabold tracking-tight">
            Solutions<span className="text-gold">Dev</span>
          </span>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/80 hover:text-gold transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <WhatsappButton className="hidden md:inline-flex items-center gap-2 gradient-cta text-navy font-bold text-sm px-5 py-2.5 rounded-full transition-all">
            <MessageCircle size={18} />
            Falar no WhatsApp
          </WhatsappButton>

          <button
            type="button"
            aria-label="Abrir menu"
            className="md:hidden text-white"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {menuOpen && (
          <nav className="md:hidden flex flex-col gap-1 px-5 pb-5 bg-navy border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 text-white/85 border-b border-white/5 font-medium"
              >
                {link.label}
              </a>
            ))}
            <WhatsappButton className="mt-4 flex items-center justify-center gap-2 gradient-cta text-navy font-bold px-5 py-3 rounded-full">
              <MessageCircle size={18} />
              Falar no WhatsApp
            </WhatsappButton>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
      >
        <div
          className="absolute inset-0 -z-10 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 20%, rgba(255,215,0,0.18), transparent 45%), radial-gradient(circle at 80% 0%, rgba(255,107,53,0.16), transparent 40%)',
          }}
        />
        <div className="max-w-5xl mx-auto px-5 text-center">
          <span className="inline-flex items-center gap-2 bg-orange/15 border border-orange/40 text-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-6 animate-pulse-soft">
            🔥 ÚLTIMAS {vagasRestantes} VAGAS PARA SETEMBRO · fecha em {countdown}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            SEU NEGÓCIO MERECE UM SITE QUE{' '}
            <span className="text-gold">VENDA ENQUANTO VOCÊ DORME</span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-10">
            Atraia clientes 24h, pare de perder vendas para concorrentes digitais e
            tenha um site que realmente gera resultados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <WhatsappButton
              message="Olá! Quero meu site agora. Pode me passar mais informações?"
              className="w-full sm:w-auto gradient-cta text-navy font-bold text-lg px-8 py-4 rounded-full shadow-lg shadow-orange/20 hover:-translate-y-0.5 transition-all"
            >
              QUERO MEU SITE AGORA
            </WhatsappButton>
            <a
              href="#depoimentos"
              className="w-full sm:w-auto border border-white/25 text-white font-semibold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all text-center"
            >
              VER CASOS DE SUCESSO
            </a>
          </div>

          <div className="relative mx-auto max-w-4xl">
            <div className="rounded-2xl border border-white/10 bg-navy-light p-4 md:p-8 shadow-2xl">
              <div className="flex flex-col md:flex-row items-end justify-center gap-6">
                <img
                  src="/placeholder.png"
                  alt="Site profissional em desktop"
                  loading="lazy"
                  className="w-full md:w-3/5 rounded-lg border border-white/10"
                />
                <img
                  src="/placeholder.png"
                  alt="Site profissional em celular"
                  loading="lazy"
                  className="w-2/5 md:w-1/4 rounded-lg border border-white/10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dor e solução */}
      <section className="py-20 bg-navy-light">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Por que você está perdendo clientes?
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
            Você já percebeu que clientes pedem seu WhatsApp mas nunca fecham? Eles
            querem ver seu cardápio, horários e avaliações ANTES de comprar. Um site
            muda isso.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {[
              {
                icon: Search,
                title: 'Seu concorrente está no Google e você não',
                text: 'Enquanto seu concorrente aparece na primeira busca, seu negócio fica invisível para quem está pronto para comprar.',
              },
              {
                icon: ShieldCheck,
                title: 'Clientes não confiam em negócios sem site',
                text: 'Sem um site profissional, o cliente sente insegurança e prefere fechar com quem parece mais confiável.',
              },
              {
                icon: Moon,
                title: 'Você perde vendas toda noite enquanto dorme',
                text: 'Fora do horário comercial, seu negócio some do radar — enquanto um site continua vendendo 24h.',
              },
            ].map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="bg-navy rounded-2xl border border-white/10 p-7 hover:border-gold/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-orange/15 flex items-center justify-center mb-5">
                  <Icon className="text-orange" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">{title}</h3>
                <p className="text-white/65 text-sm leading-relaxed">{text}</p>
              </div>
            ))}
          </div>

          <div className="text-center bg-gradient-to-r from-navy via-navy-light to-navy border border-gold/30 rounded-2xl p-8">
            <p className="text-xl md:text-2xl font-bold">
              A <span className="text-gold">Solutions Dev</span> cria sites
              estratégicos que posicionam seu negócio como referência.
            </p>
          </div>
        </div>
      </section>

      {/* Nossos sites */}
      <section id="sites" className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Nossos Sites
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
            Modelos pensados para cada tipo de negócio, prontos para vender desde o
            primeiro dia.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { nicho: 'Barbearia', tema: 'Tema escuro e masculino' },
              { nicho: 'Restaurante', tema: 'Tema aconchegante e de comida' },
              { nicho: 'Hamburgueria', tema: 'Tema jovem e descolado' },
              { nicho: 'Pizzaria', tema: 'Tema italiano e acolhedor' },
            ].map((item) => (
              <div
                key={item.nicho}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-navy-light"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src="/placeholder.png"
                    alt={`Site para ${item.nicho}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/10 to-transparent" />
                  <WhatsappButton
                    message={`Olá! Quero ver a demo do site para ${item.nicho}.`}
                    className="absolute bottom-4 left-1/2 -translate-x-1/2 gradient-cta text-navy text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    VER DEMO
                  </WhatsappButton>
                </div>
                <div className="p-4">
                  <p className="font-bold">{`Site ${item.nicho}`}</p>
                  <p className="text-xs text-white/60">{item.tema} · Pronto em 7 dias</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-navy-light">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Por que a Solutions Dev?
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
            Diferente de agências que entregam só um "cartão de visitas digital", a
            Solutions Dev cria sites com estratégia de vendas. Cada botão, cada cor,
            cada palavra foi pensada para converter.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Rocket, text: 'Pronto em até 7 dias úteis' },
              { icon: Smartphone, text: '100% responsivo (celular, tablet e PC)' },
              { icon: Search, text: 'Otimizado para Google (SEO básico incluso)' },
              { icon: MessageCircle, text: 'Suporte vitalício via WhatsApp' },
              { icon: ShoppingCart, text: 'Botão de compra/agendamento integrado' },
              { icon: BarChart3, text: 'Relatório mensal de visitas' },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="bg-navy rounded-2xl border border-white/10 p-6 flex items-start gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="w-11 h-11 rounded-xl bg-gold/15 flex items-center justify-center shrink-0">
                  <Icon className="text-gold" size={22} />
                </div>
                <p className="font-semibold leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="py-20">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Quem já transformou o negócio com a gente
          </h2>
          <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
            Resultado real de empreendedores que decidiram parar de perder clientes
            para a concorrência digital.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                nome: 'João',
                negocio: 'Barbearia do João',
                texto: 'Meu faturamento aumentou 40% em 2 meses.',
              },
              {
                nome: 'Maria',
                negocio: 'Pizzaria da Maria',
                texto: 'Clientes chegam falando que viram meu site no Google.',
              },
              {
                nome: 'Carlos',
                negocio: 'Hamburgueria do Carlos',
                texto: 'A Solutions Dev entregou antes do prazo e ficou incrível.',
              },
            ].map((dep) => (
              <div
                key={dep.nome}
                className="bg-navy-light rounded-2xl border border-white/10 p-7"
              >
                <div className="flex text-gold mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/85 leading-relaxed mb-6">"{dep.texto}"</p>
                <div className="flex items-center gap-3">
                  <img
                    src="/placeholder.png"
                    alt={dep.nome}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="font-bold text-sm">{dep.nome}</p>
                    <p className="text-white/55 text-xs">{dep.negocio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantia */}
      <section id="garantia" className="py-20 bg-navy-light">
        <div className="max-w-3xl mx-auto px-5 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/15 border border-gold/40 mb-6">
            <ShieldCheck className="text-gold" size={38} />
          </div>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            GARANTIA DE 30 DIAS: seu site no ar ou seu dinheiro de volta
          </h2>
          <p className="text-white/70 leading-relaxed">
            Se em 30 dias você não estiver 100% satisfeito, devolvemos 100% do
            investimento. Sem burocracia.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-24 bg-navy relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 50% 0%, rgba(255,107,53,0.25), transparent 55%)',
          }}
        />
        <div className="max-w-3xl mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-5">
            PRONTO PARA DOMINAR O DIGITAL?
          </h2>
          <p className="text-lg text-white/75 mb-10">
            Chega de perder cliente. Chega de depender só do Instagram. Seu site
            profissional começa hoje. Fale com um especialista agora e descubra como
            podemos transformar seu negócio.
          </p>
          <WhatsappButton
            message="Olá! Quero dominar o digital com um site profissional. Vamos conversar?"
            className="inline-flex items-center gap-3 gradient-cta text-navy font-extrabold text-xl px-10 py-5 rounded-full shadow-2xl shadow-orange/30 hover:-translate-y-1 transition-all"
          >
            <MessageCircle size={26} />
            CHAMAR NO WHATSAPP
          </WhatsappButton>
          <p className="text-white/50 text-sm mt-6">
            Atendimento de segunda a sábado, 8h às 22h · {WHATSAPP_DISPLAY}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10 text-center text-white/40 text-sm">
        <p>© {new Date().getFullYear()} Solutions Dev. Todos os direitos reservados.</p>
      </footer>

      {/* Botão flutuante */}
      <WhatsappButton
        message="Olá! Vim pelo site e quero saber mais."
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >
        <MessageCircle size={22} />
        <span className="hidden sm:inline">FALE CONOSCO</span>
      </WhatsappButton>
    </div>
  )
}
