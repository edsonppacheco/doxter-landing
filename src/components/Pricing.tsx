import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Users, FileText } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: 'Essencial',
    colabs: 10,
    docs: 150,
    monthly: 89,
    pricePerColabMonthly: 8.90,
    annual: 890,
    monthlyInAnnual: 74.17,
    pricePerColabAnnual: 7.42,
  },
  {
    name: 'Essencial Plus',
    colabs: 25,
    docs: 375,
    monthly: 199,
    pricePerColabMonthly: 7.96,
    annual: 1990,
    monthlyInAnnual: 165.83,
    pricePerColabAnnual: 6.63,
  },
  {
    name: 'Profissional',
    colabs: 50,
    docs: 750,
    monthly: 349,
    pricePerColabMonthly: 6.98,
    annual: 3490,
    monthlyInAnnual: 290.83,
    pricePerColabAnnual: 5.82,
  },
  {
    name: 'Business',
    colabs: 100,
    docs: 1500,
    monthly: 599,
    pricePerColabMonthly: 5.99,
    annual: 5990,
    monthlyInAnnual: 499.17,
    pricePerColabAnnual: 4.99,
  },
  {
    name: 'Business Plus',
    colabs: 150,
    docs: 2250,
    monthly: 849,
    pricePerColabMonthly: 5.66,
    annual: 8490,
    monthlyInAnnual: 707.50,
    pricePerColabAnnual: 4.72,
  },
  {
    name: 'Corporativo',
    colabs: 300,
    docs: 4500,
    monthly: 1599,
    pricePerColabMonthly: 5.33,
    annual: 15990,
    monthlyInAnnual: 1332.50,
    pricePerColabAnnual: 4.44,
  },
  {
    name: 'Corporativo Plus',
    colabs: 500,
    docs: 7500,
    monthly: 2499,
    pricePerColabMonthly: 5.00,
    annual: 24990,
    monthlyInAnnual: 2082.50,
    pricePerColabAnnual: 4.17,
  },
];

const fmt = (value: number) =>
  value.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

const fmtInt = (value: number) =>
  value.toLocaleString('pt-BR');

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-header', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.pricing-header',
          start: 'top 85%',
        },
      });

      gsap.from('.pricing-card', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.08,
        ease: 'back.out(1.3)',
        immediateRender: false,
        scrollTrigger: {
          trigger: '.pricing-grid',
          start: 'top 85%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-paper-white relative z-10" id="precos">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-doxter-blue/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">

        {/* Header */}
        <div className="text-center mb-16 pricing-header">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-doxter-blue/10 text-doxter-blue rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-6 border border-doxter-blue/20 shadow-sm">
            <span>Planos e Preços</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold tracking-tight leading-[1.05] mb-6 text-ink-black">
            Para cada escala<br />
            <span className="font-serif italic font-normal text-doxter-blue relative inline-block mt-1">
              de operação.
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-doxter-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-ink-black/60 font-body max-w-lg mx-auto">
            Todos os planos incluem 15 documentos compartilhados por colaborador e integração via WhatsApp.
          </p>
        </div>

        {/* Billing toggle */}
        <div className="flex items-center justify-center gap-4 mb-16 pricing-header">
          <span className={`font-heading font-semibold text-sm transition-colors ${!annual ? 'text-ink-black' : 'text-ink-black/35'}`}>
            Mensal
          </span>
          <button
            type="button"
            onClick={(e) => { e.preventDefault(); setAnnual(v => !v); }}
            aria-label="Alternar entre plano mensal e anual"
            className={`relative w-14 h-7 rounded-full transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-doxter-blue flex-shrink-0 overflow-hidden ${annual ? 'bg-doxter-blue' : 'bg-ink-black/20'}`}
          >
            <span
              className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${annual ? 'translate-x-7' : 'translate-x-0'}`}
            />
          </button>
          <span className={`font-heading font-semibold text-sm transition-colors flex items-center gap-2 ${annual ? 'text-ink-black' : 'text-ink-black/35'}`}>
            Anual
            <span className="px-2 py-0.5 bg-compliance-green/15 text-compliance-green text-[10px] rounded-full font-mono font-bold tracking-wide">
              1 MÊS GRÁTIS
            </span>
          </span>
        </div>

        {/* Cards */}
        <div className="pricing-grid grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {plans.map((plan) => {
            const currentPrice = annual ? plan.monthlyInAnnual : plan.monthly;
            const currentPricePerColab = annual ? plan.pricePerColabAnnual : plan.pricePerColabMonthly;

            const [intPart, decPart] = currentPrice.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            }).split(',');

            return (
              <div
                key={plan.name}
                className="pricing-card relative rounded-[2rem] p-8 flex flex-col transition-all duration-300 group bg-white border border-ink-black/8 hover:border-doxter-blue/25 hover:shadow-xl hover:shadow-doxter-blue/5 hover:-translate-y-1"
              >
                {/* Plan name */}
                <div className="mb-6">
                  <h3 className="text-xl font-heading font-extrabold mb-3 text-ink-black">
                    {plan.name}
                  </h3>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-black/45">
                      <Users className="w-3.5 h-3.5 flex-shrink-0" />
                      até {fmtInt(plan.colabs)} colaboradores
                    </div>
                    <div className="flex items-center gap-2 text-xs font-mono text-ink-black/45">
                      <FileText className="w-3.5 h-3.5 flex-shrink-0" />
                      {fmtInt(plan.docs)} documentos
                    </div>
                  </div>
                </div>

                {/* Main price */}
                <div className="mb-1">
                  <div className="flex items-start gap-0.5">
                    <span className="text-sm font-mono mt-2 text-ink-black/40">R$</span>
                    <span className="text-5xl font-heading font-extrabold tracking-tighter leading-none text-ink-black">
                      {intPart}
                    </span>
                    <span className="text-lg font-heading font-bold mt-2 text-ink-black/60">
                      ,{decPart}
                    </span>
                  </div>
                  <p className="text-xs font-mono mt-1 text-ink-black/35">
                    /mês{annual ? `, cobrado R$ ${fmtInt(plan.annual)}/ano` : ''}
                  </p>
                </div>

                {/* Price per colab — highlighted */}
                <div className="flex items-center gap-2 py-3 px-4 rounded-xl my-6 border bg-doxter-blue/5 border-doxter-blue/10">
                  <span className="text-base font-heading font-extrabold text-doxter-blue">
                    R$ {fmt(currentPricePerColab)}
                  </span>
                  <span className="text-[11px] font-mono leading-tight text-ink-black/40">
                    por colab/mês
                  </span>
                </div>

                {/* CTA */}
                <a
                  href="https://doxter-dash.vercel.app/#/registro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full py-3.5 rounded-full font-heading font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center gap-2 group/btn border border-ink-black/15 text-ink-black hover:bg-ink-black hover:text-white hover:border-ink-black"
                >
                  Começar agora
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-ink-black/35 font-body mt-12 max-w-2xl mx-auto leading-relaxed">
          * Plano anual equivale a 10x o valor mensal — 1 mês grátis incluído. Todos os planos incluem 15 documentos compartilhados por colaborador.
        </p>
      </div>
    </section>
  );
}
