import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
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
  { label: 'A SolutionsDev', href: '#sobre' },
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
  children: ReactNode
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
    <div className="site-background min-h-screen text-white">

      {/* =====================================================
          HEADER
          ===================================================== */}

      <header className="fixed top-0 left-0 right-0 z-40 bg-navy/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">

          <div className="flex items-center gap-2">
            <img
              src="/minhalogo.png"
              alt="SolutionsDev"
              className="w-12 h-12 object-contain"
            />

            <span className="text-xl font-extrabold tracking-tight">
              Solutions<span className="text-gold">Dev</span>
            </span>
          </div>

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
            <img
              src="/imagem-simbolo.png"
              alt=""
              aria-hidden="true"
              className="w-[18px] h-[18px] object-contain"
            />

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
              <img
                src="/imagem-simbolo.png"
                alt=""
                aria-hidden="true"
                className="w-[18px] h-[18px] object-contain"
              />

              Falar no WhatsApp
            </WhatsappButton>
          </nav>
        )}
      </header>


      {/* =====================================================
          HERO
          ===================================================== */}

      <section
        id="hero"
        className="relative z-10 pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden"
      >

        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

          <img
            src="/hero-bg.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(5,6,9,0.30) 0%, rgba(5,6,9,0.58) 48%, rgba(5,7,13,0.88) 72%, rgba(5,7,13,0.98) 100%)',
            }}
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                'radial-gradient(circle at 50% 15%, rgba(49,95,234,0.18), transparent 48%)',
            }}
          />
        </div>


        <div className="relative z-10 max-w-5xl mx-auto px-5 text-center">

          <span className="inline-flex items-center gap-2 bg-orange/15 border border-orange/40 text-orange font-semibold text-sm px-4 py-1.5 rounded-full mb-6 animate-pulse-soft">
            🔥 ÚLTIMAS {vagasRestantes} VAGAS PARA SETEMBRO · fecha em {countdown}
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            A PRIMEIRA IMPRESSÃO DO SEU NEGÓCIO{' '}
            <span className="text-gold">COMEÇA ONLINE.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/75 max-w-3xl mx-auto mb-10">
            Hoje, antes de falar com uma empresa, muita gente procura por ela online.
            É nesse primeiro contato que confiança começa a ser construída.
            Por isso, criamos experiências digitais que apresentam seu negócio
            com clareza, personalidade e intenção.
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


          {/* =================================================
              MOCKUP ÚNICO
              imagem-sudo.png = notebook + celular
              ================================================= */}

          <div className="relative mx-auto w-full max-w-6xl">

            <div className="relative flex justify-center items-center">

              <img
                src="/imagem-sudo.png"
                alt="Site profissional apresentado em notebook e smartphone"
                loading="eager"
                fetchPriority="high"
                className="
                  block
                  w-[115%]
                  max-w-none
                  h-auto
                  object-contain
                  select-none
                  pointer-events-none
                  drop-shadow-[0_25px_60px_rgba(0,0,0,0.50)]
                  sm:w-[105%]
                  md:w-[100%]
                  lg:w-[96%]
                  xl:w-[92%]
                "
              />

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          DOR E SOLUÇÃO
          ===================================================== */}

      <section className="relative z-10 py-24 md:py-28 overflow-hidden">

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(49,95,234,0.35) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5">

          <div className="text-center max-w-3xl mx-auto mb-16">

            <span className="inline-flex items-center gap-2 text-gold text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-5">
              <span className="w-8 h-px bg-gold/70" />
              POR QUE TER UM SITE PROFISSIONAL?
              <span className="w-8 h-px bg-gold/70" />
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Uma presença que{' '}
              <span className="text-gold">representa</span> o seu negócio.
            </h2>

            <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              Seu comércio tem uma identidade, uma história e uma experiência
              própria. Tudo isso merece ser apresentado da maneira certa.
            </p>

          </div>


          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-16">

            {[
              {
                icon: Search,
                number: '01',
                title: 'Seja encontrado na internet',
                text: 'Um site próprio amplia sua presença digital e facilita o acesso às principais informações sobre sua empresa, produtos ou serviços.',
              },
              {
                icon: ShieldCheck,
                number: '02',
                title: 'Uma presença que transmite confiança',
                text: 'Uma apresentação clara, organizada e profissional ajuda a mostrar o cuidado que existe por trás da sua marca.',
              },
              {
                icon: Moon,
                number: '03',
                title: 'Um projeto com a sua identidade',
                text: 'Design, conteúdo e estrutura pensados para combinar com o estilo e a proposta do seu negócio — uma apresentação feita com carinho e alinhada às particularidades da sua marca.',
              },
            ].map(({ icon: Icon, number, title, text }) => (

              <div
                key={title}
                className="group relative rounded-2xl border border-white/10 bg-navy/80 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(49,95,234,0.10)]"
              >

                <span className="absolute top-7 right-7 text-xs font-bold text-white/20 tracking-widest">
                  {number}
                </span>

                <div className="relative w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-7 transition-all duration-300 group-hover:bg-gold/15 group-hover:border-gold/40">

                  <Icon
                    className="text-gold"
                    size={25}
                    strokeWidth={1.8}
                  />

                </div>

                <h3 className="font-bold text-xl leading-snug mb-4 max-w-[85%]">
                  {title}
                </h3>

                <p className="text-white/55 text-sm md:text-[15px] leading-7">
                  {text}
                </p>

                <div className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/60 transition-all duration-500" />

              </div>

            ))}

          </div>


          <div className="relative overflow-hidden rounded-2xl border border-gold/20 bg-navy px-7 py-9 md:px-12 md:py-10 text-center">

            <div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  'radial-gradient(circle at 50% 50%, rgba(49,95,234,0.8), transparent 65%)',
              }}
            />

            <div className="relative">

              <p className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-snug">
                A <span className="text-gold">Solutions Dev</span> cria sites
                estratégicos que posicionam seu negócio como{' '}
                <span className="text-gold">referência.</span>
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          NOSSOS SITES
          ===================================================== */}

      <section id="sites" className="relative z-10 py-20">

        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Nossos Sites
          </h2>

          <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
            Cada projeto é pensado para traduzir a identidade da marca em uma
            experiência digital única.
          </p>


          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {[
              {
                nicho: 'SEMI-JOIAS Lumiere',
                tema: 'Elegante e sofisticado',
                imagem: '/imagem-semijoias.png',
              },
              {
                nicho: 'Barbearia',
                tema: 'Elegante e sofisticado',
                imagem: '/imagem-barbearia1.png',
              },
              {
                nicho: 'Mr. JACKE',
                tema: 'Tema jovem e descolado',
                imagem: '/imagem-geral-notebook.png',
              },
              {
                nicho: 'World Store',
                tema: 'E-commerce moderno e tecnológico',
                imagem: '/world-store.png',
              },
            ].map((item) => (

              <div
                key={item.nicho}
                className="group rounded-2xl overflow-hidden border border-white/10 bg-navy-light"
              >

                <div className="relative aspect-[4/5] overflow-hidden">

                  <img
                    src={item.imagem ?? '/placeholder.png'}
                    alt={`Site para ${item.nicho}`}
                    loading="lazy"
                    className={`w-full h-full object-cover ${
                      item.nicho === 'Barbearia'
                        ? 'object-[center_top]'
                        : ''
                    } group-hover:scale-105 transition-transform duration-300`}
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

                  <p className="font-bold">
                    {`Site ${item.nicho}`}
                  </p>

                  <p className="text-xs text-white/60">
                    {item.tema} · Pronto em 7 dias
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          DIFERENCIAIS
          ===================================================== */}

      <section
        id="diferenciais"
        className="relative z-10 py-24 md:py-28 overflow-hidden"
      >

        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] opacity-20 blur-3xl pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(49,95,234,0.35) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto px-5">

          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">

            <span className="inline-flex items-center gap-3 text-gold text-xs md:text-sm font-bold uppercase tracking-[0.25em] mb-5">
              <span className="w-8 h-px bg-gold/70" />
              POR QUE A SOLUTIONS DEV?
              <span className="w-8 h-px bg-gold/70" />
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Por que a{' '}
              <span className="text-gold">
                Solutions Dev?
              </span>
            </h2>

            <p className="text-white/65 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6">
              A SolutionsDev não parte de um template para depois encaixar a sua marca.
              Primeiro entendemos o que precisa ser percebido; depois transformamos
              isso em estrutura, design e experiência. O resultado é um site que
              não apenas existe na internet — ele representa o seu negócio.
            </p>

          </div>


          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

            {[
              {
                icon: Rocket,
                title: 'Pronto em até 7 dias úteis',
                text: 'Agilidade sem abrir mão da qualidade. Seu site no ar, rápido, moderno e 100% funcional.',
              },
              {
                icon: Smartphone,
                title: '100% responsivo',
                text: 'Celular, tablet ou computador. Seu site se adapta perfeitamente a qualquer tela.',
              },
              {
                icon: Search,
                title: 'Otimizado para Google',
                text: 'Estrutura preparada para o Google encontrar, indexar e apresentar seu negócio.',
              },
              {
                icon: MessageCircle,
                title: 'Suporte vitalício via WhatsApp',
                text: 'Você não fica sozinho. Sempre que precisar, estamos a uma mensagem de distância.',
              },
              {
                icon: ShoppingCart,
                title: 'Compra ou agendamento integrado',
                text: 'Integrações práticas para transformar visitantes em clientes.',
              },
              {
                icon: BarChart3,
                title: 'Relatório mensal de visitas',
                text: 'Acompanhe o desempenho do seu site e entenda como as pessoas estão chegando até você.',
              },
            ].map(({ icon: Icon, title, text }) => (

              <div
                key={title}
                className="group relative rounded-2xl border border-white/10 bg-navy/90 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_20px_60px_rgba(49,95,234,0.10)]"
              >

                <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-gold/15 group-hover:border-gold/40">

                  <Icon
                    className="text-gold"
                    size={26}
                    strokeWidth={1.8}
                  />

                </div>

                <h3 className="font-bold text-lg md:text-xl leading-snug mb-3">
                  {title}
                </h3>

                <p className="text-white/55 text-sm md:text-[15px] leading-7">
                  {text}
                </p>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent group-hover:via-gold/70 transition-all duration-500" />

              </div>

            ))}

          </div>


          <div className="flex justify-center mt-20">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>

        </div>
      </section>


      {/* =====================================================
          DEPOIMENTOS
          ===================================================== */}

      <section
        id="depoimentos"
        className="relative z-10 py-20"
      >

        <div className="max-w-6xl mx-auto px-5">

          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Quem já transformou o negócio com a gente
          </h2>

          <p className="text-white/70 text-center max-w-2xl mx-auto mb-14">
            Resultado real de empreendedores que decidiram parar de perder
            clientes para a concorrência digital.
          </p>


          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                nome: 'Lucas Gomes ',
                negocio: 'Barbearia Imperial',
                texto:
                  'Portifolio ajudou demais! Obrigado pelo carinho minha gente. Ja estou indocando voces haha',
                imagem: '/imagem-amigo.jpeg',
              },
              {
                nome: 'Juliana',
                negocio: 'BuBu semi-joias',
                texto:
                  'estou chocada com o resultado, voces arrasam!!',
                imagem: '/imagem-mae-depoimento.jpeg',
              },
              {
                nome: 'Carlos',
                negocio: 'Hamburgueria Bom Gosto',
                texto:
                  'A Solutions Dev entregou antes do prazo e ficou incrível.',
              },
            ].map((dep) => (

              <div
                key={dep.nome}
                className="bg-navy-light rounded-2xl border border-white/10 p-7"
              >

                <div className="flex text-gold mb-4">

                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill="currentColor"
                    />
                  ))}

                </div>

                <p className="text-white/85 leading-relaxed mb-6">
                  "{dep.texto}"
                </p>

                <div className="flex items-center gap-3">

                  <img
                    src={dep.imagem ?? '/placeholder.png'}
                    alt={dep.nome}
                    loading="lazy"
                    className="w-11 h-11 rounded-full object-cover border border-white/10"
                  />

                  <div>

                    <p className="font-bold text-sm">
                      {dep.nome}
                    </p>

                    <p className="text-white/55 text-xs">
                      {dep.negocio}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


      {/* =====================================================
          GARANTIA
          ===================================================== */}

      <section
        id="garantia"
        className="relative z-10 overflow-hidden py-24 md:py-28"
      >

        <div
          className="absolute left-1/2 top-0 -z-0 h-80 w-[700px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(49,95,234,0.12) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-5xl px-5">

          <div className="rounded-3xl border border-[#315fea]/25 bg-[#050609] p-8 shadow-[0_0_60px_rgba(49,95,234,0.08)] md:p-12">

            <div className="flex flex-col items-center gap-10 md:flex-row md:gap-14">

              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-[#315fea]/40 bg-[#315fea]/10 shadow-[0_0_35px_rgba(49,95,234,0.12)]">

                <svg
                  className="h-11 w-11 text-[#315fea]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75 11.25 15 15 9.75"
                  />

                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l7 3v5c0 4.5-2.9 8.5-7 10-4.1-1.5-7-5.5-7-10V6l7-3z"
                  />

                </svg>

              </div>


              <div className="text-center md:text-left">

                <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.18em] text-[#315fea]">
                  Seu investimento protegido
                </span>

                <h2 className="text-3xl font-extrabold leading-tight text-white md:text-4xl">
                  GARANTIA DE 7 DIAS:
                  <br />

                  <span className="text-[#315fea]">
                    seu site no ar ou seu dinheiro de volta.
                  </span>
                </h2>

                <p className="mt-5 max-w-2xl text-base leading-7 text-[#aeb6c8] md:text-lg">
                  Receba seu site, avalie todos os detalhes e conte com nosso
                  suporte para os ajustes necessários dentro desse período.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          SOBRE A SOLUTIONSDEV
          ===================================================== */}

      <section
        id="sobre"
        className="relative z-10 overflow-hidden py-24 md:py-32"
      >

        <div
          className="absolute left-1/2 top-1/2 -z-0 h-[620px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl opacity-70"
          style={{
            background:
              'radial-gradient(circle, rgba(49,95,234,0.12) 0%, transparent 66%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5">

          <div className="mx-auto max-w-4xl text-center">

            <span className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-gold md:text-sm">
              <span className="h-px w-8 bg-gold/70" />
              A SOLUTIONSDEV
              <span className="h-px w-8 bg-gold/70" />
            </span>

            <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl">
              Não criamos apenas sites.
              <br />
              <span className="text-gold">
                Criamos a forma como sua marca é percebida.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/65 md:text-lg">
              A SolutionsDev nasceu de uma ideia simples: um negócio que se
              preocupa com o que entrega também merece uma presença digital
              que demonstre isso. Por isso, cada projeto é pensado para unir
              estética, clareza e estratégia em uma experiência que faça sentido
              para quem está do outro lado da tela.
            </p>

          </div>


          <div className="mt-16 grid gap-5 md:grid-cols-3">

            {[
              {
                index: '01',
                title: 'Clareza antes do excesso',
                text: 'Seu cliente não deveria precisar procurar o que você faz. Organizamos a informação para que a proposta do seu negócio seja entendida com naturalidade.',
              },
              {
                index: '02',
                title: 'Identidade antes do padrão',
                text: 'Um site não precisa parecer com todos os outros. Design, linguagem e estrutura devem refletir a personalidade que torna a sua marca reconhecível.',
              },
              {
                index: '03',
                title: 'Intenção em cada detalhe',
                text: 'Da primeira impressão ao botão de contato, cada elemento tem um papel: aproximar, transmitir confiança e facilitar o próximo passo.',
              },
            ].map((item) => (

              <div
                key={item.index}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-navy/80 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
              >

                <span className="text-xs font-bold tracking-[0.2em] text-gold/60">
                  {item.index}
                </span>

                <h3 className="mt-6 text-xl font-bold text-white md:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-white/55 md:text-[15px]">
                  {item.text}
                </p>

                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gold/0 to-transparent transition-all duration-500 group-hover:via-gold/60" />

              </div>

            ))}

          </div>


          <div className="mt-10 rounded-3xl border border-gold/20 bg-[#050609]/80 p-8 md:p-12">

            <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">

              <div>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/35">
                  Nosso ponto de vista
                </span>

                <p className="mt-4 max-w-3xl text-xl font-semibold leading-8 text-white md:text-2xl">
                  O site não é o destino.
                  <span className="text-gold">
                    {' '}É o ponto de encontro entre a sua marca e a próxima
                    pessoa que pode escolher você.
                  </span>
                </p>

              </div>


              <div className="hidden h-16 w-px bg-gradient-to-b from-transparent via-gold/50 to-transparent md:block" />


              <div className="md:max-w-[220px]">

                <p className="text-sm leading-6 text-white/45">
                  Estratégia, design e tecnologia trabalhando juntos para dar
                  presença ao que o seu negócio já construiu.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          CTA FINAL
          ===================================================== */}

      <section className="relative z-10 overflow-hidden py-28 md:py-32">

        <div
          className="absolute left-1/2 top-1/2 -z-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(49,95,234,0.14) 0%, transparent 65%)',
          }}
        />

        <div className="relative z-10 mx-auto max-w-4xl px-5 text-center">

          <span className="mb-5 inline-block rounded-full border border-[#315fea]/30 bg-[#315fea]/10 px-4 py-2 text-sm font-semibold text-[#6f91ff]">
            O próximo passo começa aqui
          </span>

          <h2 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
            PRONTO PARA DOMINAR
            <br />
            O <span className="text-[#315fea]">DIGITAL?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#aeb6c8] md:text-lg">
            Seu negócio já tem uma história, uma proposta e algo que o diferencia.
            O próximo passo é fazer tudo isso aparecer quando alguém encontrar
            você online.
          </p>

          <p className="mx-auto mt-2 max-w-xl text-base text-[#aeb6c8]">
            Converse com a SolutionsDev e descubra como transformar essa presença
            em uma experiência digital à altura da sua marca.
          </p>


          <div className="mt-10 flex justify-center">

            <WhatsappButton
              message="Olá! Vi o site da SolutionsDev e quero saber como funciona para criar um site profissional para o meu negócio."
              className="gradient-cta inline-flex items-center gap-3 rounded-full px-8 py-4 text-base font-extrabold text-[#050609] shadow-[0_12px_40px_rgba(49,95,234,0.25)] transition-all duration-300 hover:scale-105"
            >

              <img
                src="/imagem-simbolo.png"
                alt=""
                aria-hidden="true"
                className="h-6 w-6 object-contain"
              />

              CHAMAR NO WHATSAPP

            </WhatsappButton>

          </div>

          <p className="mt-5 text-sm text-[#667085]">
            Resposta rápida • Atendimento personalizado • Sem compromisso
          </p>

        </div>
      </section>


      {/* =====================================================
          FOOTER
          ===================================================== */}

      <footer className="relative z-10 border-t border-white/10">

        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] md:items-start">

          <div>

            <div className="flex items-center gap-3">

              <img
                src="/minhalogo.png"
                alt="SolutionsDev"
                className="h-11 w-11 object-contain"
              />

              <span className="text-xl font-extrabold tracking-tight">
                Solutions<span className="text-gold">Dev</span>
              </span>

            </div>

            <p className="mt-4 max-w-sm text-sm leading-6 text-white/45">
              Presença digital pensada para negócios que querem ser encontrados,
              compreendidos e lembrados.
            </p>

          </div>


          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              Navegação
            </p>

            <div className="mt-4 flex flex-col gap-3">

              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/55 transition-colors hover:text-gold"
                >
                  {link.label}
                </a>
              ))}

            </div>

          </div>


          <div>

            <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/35">
              Vamos conversar
            </p>

            <p className="mt-4 text-sm leading-6 text-white/45">
              Se você acredita que seu negócio pode ser melhor apresentado
              online, o próximo passo é simples.
            </p>

            <WhatsappButton
              message="Olá! Conheci a SolutionsDev pelo site e quero conversar sobre um projeto."
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-gold transition-colors hover:text-white"
            >

              <img
                src="/imagem-simbolo.png"
                alt=""
                aria-hidden="true"
                className="h-5 w-5 object-contain"
              />

              Falar com a SolutionsDev →

            </WhatsappButton>

          </div>

        </div>


        <div className="border-t border-white/5">

          <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} SolutionsDev.
              Todos os direitos reservados.
            </p>

            <p>
              Design, tecnologia e estratégia em um só lugar.
            </p>

          </div>

        </div>

      </footer>


      {/* =====================================================
          BOTÃO FLUTUANTE
          ===================================================== */}

      <WhatsappButton
        message="Olá! Vim pelo site e quero saber mais."
        className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3.5 rounded-full shadow-2xl hover:scale-105 transition-transform"
      >

        <img
          src="/imagem-simbolo.png"
          alt=""
          aria-hidden="true"
          className="w-[22px] h-[22px] object-contain"
        />

        <span className="hidden sm:inline">
          FALE CONOSCO
        </span>

      </WhatsappButton>

    </div>
  )
}