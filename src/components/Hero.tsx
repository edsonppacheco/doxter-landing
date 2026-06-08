import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered text reveal
      gsap.from('.hero-text', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.1,
        ease: 'power3.out',
        delay: 0.1
      });
      
      // Staggered counters reveal
      gsap.from('.stat-card', {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'back.out(1.5)',
        delay: 0.8
      });
      
      // Visual reveal
      gsap.from('.visual-element', {
        scale: 0.95,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out',
        delay: 0.4
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-32 pb-16 min-h-[90vh] flex items-center relative z-10">
      <div className="container mx-auto px-6 max-w-7xl relative grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        
        {/* Left: Copy */}
        <div className="flex flex-col items-start max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-doxter-blue/10 text-doxter-blue rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-8 hero-text border border-doxter-blue/20 shadow-sm">
            <span>O Padrão Ouro em Governança</span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-extrabold tracking-tight leading-[1.05] mb-6 hero-text text-ink-black pb-2">
            Gestão de documentos <br />
            <span className="font-serif italic text-6xl sm:text-7xl md:text-[5.5rem] text-doxter-blue font-normal relative inline-block mt-2">
              sem esforço.
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-doxter-blue/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-ink-black/70 font-body mb-10 max-w-xl leading-relaxed hero-text">
            Uma plataforma de alta performance que automatiza a governança de toda a sua <strong className="text-ink-black font-semibold">cadeia de fornecedores, subcontratadas e colaboradores</strong>. Integre via <span className="font-semibold text-ink-black">WhatsApp</span> e deixe nossa IA garantir conformidade instantânea baseada em documentos da empresa (PGR/PCMSO) e funcionários.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto hero-text">
            <a href="https://doxter-dash.vercel.app/#/registro" target="_blank" rel="noopener noreferrer" className="btn-primary flex items-center justify-center gap-2 group shadow-xl shadow-doxter-blue/20">
              Começar agora grátis!
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="btn-outline flex items-center justify-center gap-2 bg-white hover:bg-ink-black/5">
              Como funciona o fluxo
            </button>
          </div>
          
          {/* Staggered Counters */}
          <div className="grid grid-cols-2 gap-8 mt-16 w-full max-w-lg border-t border-ink-black/10 pt-10 hero-text">
            <div className="stat-card">
              <div className="flex items-center gap-2 text-doxter-blue mb-2">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="font-mono font-bold text-3xl tracking-tighter">-80%</span>
              </div>
              <p className="text-xs font-heading font-bold text-ink-black/50 uppercase tracking-widest">Tempo Operacional</p>
            </div>
            
            <div className="stat-card border-l border-ink-black/10 pl-8">
              <div className="flex items-center gap-2 text-compliance-green mb-2">
                <ShieldCheck className="w-5 h-5 flex-shrink-0" />
                <span className="font-mono font-bold text-3xl tracking-tighter">100%</span>
              </div>
              <p className="text-xs font-heading font-bold text-ink-black/50 uppercase tracking-widest">Aderência e Automação</p>
            </div>
          </div>
        </div>
        
        {/* Right: The "d" Mask Visual Representation */}
        <div className="relative h-[550px] w-full hidden lg:block perspective-1000">
          {/* Subtle glow behind */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-doxter-blue/10 rounded-full blur-[80px] visual-element pointer-events-none"></div>

          {/* The Geometric 'd' structure */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[520px] h-full flex visual-element">
            
            {/* The circle of the 'd' exposing the Schematic Dashboard */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-white rounded-full shadow-[0_20px_60px_rgba(0,0,0,0.08)] border border-ink-black/5 overflow-hidden p-0 z-10 flex flex-col group will-change-transform hover:scale-[1.02] transition-transform duration-500">
               {/* Dashboard Container mimicking 'Visão Geral.png' */}
               <div className="flex w-full h-full bg-[#F4F7F9]">
                 
                 {/* Sidebar */}
                 <div className="w-[28%] bg-[#1a2133] h-full flex flex-col pt-8 pb-6 px-4 shrink-0">
                   {/* Logo mock */}
                   <div className="h-6 w-16 rounded bg-white/20 mb-8 items-center flex gap-1 px-1">
                     <div className="w-4 h-4 rounded-sm bg-doxter-blue"></div>
                     <div className="flex-1 h-3 rounded-full bg-white/50"></div>
                   </div>
                   {/* Nav items */}
                   <div className="space-y-4">
                     <div className="w-full h-8 rounded-md bg-white/5 flex items-center px-2 gap-2"><div className="w-3 h-3 rounded-sm bg-white/20"></div><div className="h-2 w-12 bg-white/20 rounded-full"></div></div>
                     <div className="w-full h-8 rounded-md bg-doxter-blue shadow-sm flex items-center px-2 gap-2"><div className="w-3 h-3 rounded-sm bg-white/80"></div><div className="h-2 w-16 bg-white/80 rounded-full"></div></div>
                     <div className="w-full h-8 rounded-md bg-white/5 flex items-center px-2 gap-2"><div className="w-3 h-3 rounded-sm bg-white/20"></div><div className="h-2 w-16 bg-white/20 rounded-full"></div></div>
                     <div className="w-full h-8 rounded-md bg-white/5 flex items-center px-2 gap-2"><div className="w-3 h-3 rounded-sm bg-white/20"></div><div className="h-2 w-14 bg-white/20 rounded-full"></div></div>
                   </div>
                 </div>

                 {/* Main Content Area */}
                 <div className="flex-1 flex flex-col p-5">
                    {/* Topbar */}
                    <div className="h-8 bg-white rounded-full mb-6 shadow-sm border border-black/5 w-2/3 flex items-center px-3">
                      <div className="w-3 h-3 rounded-full bg-ink-black/10"></div>
                      <div className="h-2 w-24 bg-ink-black/5 rounded-full ml-2"></div>
                    </div>
                    
                    {/* Profile Header Block */}
                    <div className="h-20 shrink-0 bg-white rounded-xl mb-4 shadow-sm border border-black/5 flex items-center px-5 gap-4 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-full bg-doxter-blue/5 rounded-bl-full"></div>
                      <div className="w-12 h-12 rounded-lg bg-doxter-blue text-white flex items-center justify-center font-heading font-extrabold text-xl shadow-md">G</div>
                      <div className="space-y-2.5 z-10">
                        <div className="w-32 h-3 bg-ink-black rounded-full"></div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-2 bg-ink-black/20 rounded-full"></div>
                          <div className="w-24 h-2 bg-ink-black/20 rounded-full"></div>
                        </div>
                      </div>
                      <div className="ml-auto w-24 h-8 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                         <div className="flex gap-1 items-center"><div className="w-3 h-3 bg-white/80 rounded-full"></div><div className="w-10 h-2 bg-white/80 rounded-full"></div></div>
                      </div>
                    </div>

                    {/* 4 Stats Cards */}
                    <div className="grid grid-cols-4 gap-2 mb-4 shrink-0">
                      <div className="h-12 bg-white rounded-lg border border-compliance-green/20 shadow-sm flex flex-col justify-center px-2 gap-1.5"><div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-compliance-green flex-shrink-0"></div><div className="w-8 h-1.5 bg-ink-black/10 rounded-full"></div></div><div className="w-12 h-3 bg-ink-black/10 rounded-full"></div></div>
                      <div className="h-12 bg-white rounded-lg border border-red-400/20 shadow-sm flex flex-col justify-center px-2 gap-1.5"><div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0"></div><div className="w-10 h-1.5 bg-ink-black/10 rounded-full"></div></div><div className="w-8 h-3 bg-ink-black/10 rounded-full"></div></div>
                      <div className="h-12 bg-white rounded-lg border border-yellow-400/20 shadow-sm flex flex-col justify-center px-2 gap-1.5"><div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0"></div><div className="w-12 h-1.5 bg-ink-black/10 rounded-full"></div></div><div className="w-6 h-3 bg-ink-black/10 rounded-full"></div></div>
                      <div className="h-12 bg-white rounded-lg border border-ink-black/10 shadow-sm flex flex-col justify-center px-2 gap-1.5"><div className="flex items-center gap-1"><div className="w-2.5 h-2.5 rounded-full bg-ink-black/20 flex-shrink-0"></div><div className="w-10 h-1.5 bg-ink-black/10 rounded-full"></div></div><div className="w-8 h-3 bg-ink-black/10 rounded-full"></div></div>
                    </div>

                    {/* Document List Skeleton */}
                    <div className="flex-1 bg-white rounded-xl border border-black/5 shadow-sm p-5 space-y-4">
                      <div className="flex justify-between items-center mb-2">
                        <div className="w-40 h-3 bg-ink-black/80 rounded-full"></div>
                        <div className="w-24 h-6 bg-doxter-blue text-white rounded-md flex items-center justify-center"><div className="w-12 h-2 rounded-full bg-white/80"></div></div>
                      </div>
                      
                      {[1,2].map(i => (
                        <div key={i} className="flex justify-between items-center pb-3 border-b border-black/5">
                          <div className="flex items-center gap-3">
                            <div className="w-6 h-8 bg-doxter-blue/5 rounded border border-doxter-blue/10"></div>
                            <div className="space-y-2">
                              <div className="w-24 h-2.5 bg-ink-black/80 rounded-full"></div>
                              <div className="w-16 h-1.5 bg-ink-black/30 rounded-full"></div>
                            </div>
                          </div>
                          <div className={`w-16 h-4 rounded-full ${i === 1 ? 'bg-yellow-400/20' : 'bg-ink-black/5'} flex items-center justify-center p-1`}>
                            <div className={`w-10 h-1.5 rounded-full ${i === 1 ? 'bg-yellow-600/50' : 'bg-ink-black/30'}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                 </div>
                 
               </div>
            </div>

            {/* The vertical stem of the 'd' */}
            <div className="absolute right-8 top-8 bottom-8 w-[160px] bg-white rounded-r-[4rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-l-0 border-ink-black/10 z-0 overflow-hidden group-hover:bg-paper-white transition-colors duration-500">
               <div className="absolute inset-0 bg-gradient-to-t from-doxter-blue/10 to-transparent"></div>
            </div>

          </div>
          
           {/* Floating elements indicating AI validation */}
           <div className="absolute right-[400px] top-[140px] visual-element bg-white p-3 rounded-2xl shadow-xl border border-ink-black/5 flex items-center gap-3 z-30 animate-[bounce_4s_ease-in-out_infinite]">
             <div className="w-2 h-2 rounded-full bg-compliance-green animate-pulse"></div>
             <span className="font-mono text-xs font-bold text-ink-black">AI_APPROVED</span>
           </div>
        </div>
      </div>
    </section>
  );
}
