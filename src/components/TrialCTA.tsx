import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, CreditCard, Users, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const perks = [
  { icon: X, label: 'Sem cartão de crédito' },
  { icon: Users, label: 'Colaboradores ilimitados' },
  { icon: CreditCard, label: 'Cancele quando quiser' },
];

export default function TrialCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.trial-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 bg-ink-black relative z-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-doxter-blue/5 rounded-full blur-[120px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-compliance-green/5 rounded-full blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center">

        {/* Badge */}
        <div className="trial-content inline-flex items-center gap-2 px-4 py-2 bg-compliance-green/10 text-compliance-green rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-10 border border-compliance-green/20 shadow-[0_0_20px_rgba(39,174,96,0.1)]">
          <span className="w-2 h-2 rounded-full bg-compliance-green animate-pulse" />
          Oferta de Lançamento
        </div>

        {/* Main headline */}
        <div className="trial-content mb-6">
          <div className="flex items-center justify-center gap-4 md:gap-6 flex-wrap">
            <span className="font-mono text-[7rem] md:text-[10rem] font-bold text-white leading-none tracking-tighter tabular-nums"
              style={{ textShadow: '0 0 80px rgba(53,132,164,0.4)' }}>
              30
            </span>
            <div className="text-left">
              <p className="text-3xl md:text-5xl font-heading font-extrabold text-white leading-tight">
                dias para
              </p>
              <p className="text-3xl md:text-5xl font-heading font-extrabold leading-tight">
                <span className="font-serif italic font-normal text-doxter-blue">provar o valor.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="trial-content text-xl md:text-2xl text-white/50 font-body max-w-2xl mx-auto mb-14 leading-relaxed">
          Teste o Doxter com sua operação real — colaboradores ilimitados, todos os recursos ativos, zero compromisso financeiro.
        </p>

        {/* Perks */}
        <div className="trial-content flex flex-wrap items-center justify-center gap-3 mb-14">
          {perks.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-white/60 text-sm font-mono hover:border-white/20 hover:text-white/80 transition-colors"
            >
              <Icon className="w-3.5 h-3.5 text-compliance-green flex-shrink-0" />
              {label}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="trial-content flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://doxter-dash.vercel.app/#/registro"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-doxter-blue text-white px-10 py-5 rounded-full font-heading font-bold text-lg tracking-wide hover:bg-[#2A6982] transition-all shadow-2xl shadow-doxter-blue/30 hover:shadow-doxter-blue/50 hover:scale-[1.02]"
          >
            Começar teste grátis
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <Link
            to="/precos"
            className="inline-flex items-center gap-2 text-white/50 font-heading font-medium text-sm hover:text-white transition-colors px-4 py-3"
          >
            Ver planos e preços
          </Link>
        </div>

      </div>
    </section>
  );
}
