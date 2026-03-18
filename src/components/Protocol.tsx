import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Smartphone, ScanLine, ShieldCheck, Server, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.protocol-card') as HTMLElement[];
      
      // We animate the scale and opacity as the next card scrolls over it
      cards.forEach((card, i) => {
        if (i < cards.length - 1) { // Apply to all except the very last one
          gsap.to(card, {
            scrollTrigger: {
              trigger: cards[i + 1],
              start: "top bottom", // when the next card's top hits the viewport bottom
              end: "top top+=160", // when it aligns with the sticky position
              scrub: true,
            },
            scale: 0.92,
            opacity: 0.4,
            transformOrigin: "top center"
          });
        }
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 bg-ink-black text-paper-white relative z-30" id="protocol">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24 text-center max-w-3xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-2 bg-doxter-blue/10 text-doxter-blue rounded-full text-xs font-heading font-bold tracking-widest uppercase mb-6 border border-doxter-blue/20">
            <span>Workflow</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
            O Protocolo Doxter.
          </h2>
          <p className="text-lg md:text-xl text-paper-white/70 font-body">
            Um fluxo invisível para quem envia, controle total para quem gerencia. A jornada do documento.
          </p>
        </div>

        <div className="relative pb-32">
          {/* Card 1: Request */}
          <div className="protocol-card sticky top-24 w-full bracket-container bracket-blue bg-[#1e2329] rounded-[3rem] p-10 md:p-16 mb-12 shadow-2xl border border-white/5 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
            <div className="flex-1">
              <span className="text-doxter-blue font-mono font-bold text-xl mb-4 block tracking-widest">01 // REQUEST</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">Sistema envia pedido de documento</h3>
              <p className="text-paper-white/60 font-body text-lg leading-relaxed">Quando um documento vence, é agendado ou solicitado manualmente pelo gestor, a Doxter dispara um pedido instantâneo e automático.</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center h-full relative">
               <div className="w-40 h-40 rounded-full border-[2px] border-dashed border-doxter-blue/50 flex items-center justify-center relative bg-ink-black shadow-[0_0_60px_rgba(53,132,164,0.4)]">
                 <div className="absolute inset-0 rounded-full bg-doxter-blue/10 animate-ping opacity-20"></div>
                 <Server className="w-16 h-16 text-doxter-blue relative z-10" />
               </div>
            </div>
          </div>

          {/* Card 2: Capture */}
          <div className="protocol-card sticky top-32 w-full bracket-container bracket-blue bg-[#1a1f24] rounded-[3rem] p-10 md:p-16 mb-12 shadow-2xl border border-white/5 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
            <div className="flex-1">
              <span className="text-doxter-blue font-mono font-bold text-xl mb-4 block tracking-widest">02 // CAPTURE</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">Colaborador recebe o pedido pelo WhatsApp</h3>
              <p className="text-paper-white/60 font-body text-lg leading-relaxed">Ele recebe a notificação direto no celular. Basta responder enviando uma foto ou arquivo pelo próprio WhatsApp, sem senhas esquecidas.</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center h-full relative">
               <div className="w-40 h-72 rounded-[2.5rem] border-[6px] border-doxter-blue flex items-center justify-center relative bg-ink-black shadow-[0_0_60px_rgba(53,132,164,0.4)]">
                 <MessageCircle className="absolute -right-6 top-8 w-12 h-12 text-[#25D366] drop-shadow-lg shadow-[#25D366]/20 animate-bounce" />
                 <Smartphone className="w-16 h-16 text-doxter-blue" />
                 <div className="absolute top-4 w-12 h-1.5 bg-doxter-blue/30 rounded-full"></div>
                 <div className="absolute bottom-6 w-16 h-1.5 bg-doxter-blue/30 rounded-full"></div>
                 <div className="absolute animate-ping inset-0 rounded-[2.5rem] border-2 border-doxter-blue opacity-30 origin-center duration-1000"></div>
               </div>
            </div>
          </div>

          {/* Card 3: Analysis */}
          <div className="protocol-card sticky top-40 w-full bracket-container bracket-blue bg-[#15191d] rounded-[3rem] p-10 md:p-16 mb-12 shadow-2xl border border-white/5 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
            <div className="flex-1">
              <span className="text-doxter-blue font-mono font-bold text-xl mb-4 block tracking-widest">03 // ANALYSIS</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">IA analisa e valida</h3>
              <p className="text-paper-white/60 font-body text-lg leading-relaxed">Nossa inteligência artificial efetua o reconhecimento ótico e a validação cruzada do documento em tempo real, sem intervenção humana.</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center h-full relative">
               <div className="w-56 h-40 rounded-2xl border border-white/10 bg-white/5 relative overflow-hidden flex items-center justify-center shadow-inner">
                 <div className="w-[85%] h-[80%] border-2 border-dashed border-white/20 rounded-lg relative overflow-hidden">
                   <div className="absolute top-4 left-4 w-1/4 h-1/4 bg-white/10 rounded-sm"></div>
                   <div className="absolute top-4 left-[35%] w-1/2 h-2 bg-white/10 rounded-sm"></div>
                   <div className="absolute top-8 left-[35%] w-1/3 h-2 bg-white/10 rounded-sm"></div>
                   <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border border-compliance-green/50 flex items-center justify-center">
                     <div className="w-4 h-4 bg-compliance-green rounded-full shadow-[0_0_8px_#27AE60]"></div>
                   </div>
                   <div className="absolute left-0 right-0 h-0.5 bg-compliance-green shadow-[0_0_15px_2px_#27AE60] animate-[scan_2.5s_ease-in-out_infinite]"></div>
                 </div>
                 <ScanLine className="absolute w-12 h-12 text-compliance-green/30" />
               </div>
            </div>
          </div>

          {/* Card 4: Governance */}
          <div className="protocol-card sticky top-48 w-full bracket-container bracket-white bg-doxter-blue text-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-white/10 flex flex-col md:flex-row items-center gap-12 min-h-[450px]">
             <div className="flex-1">
              <span className="text-white/60 font-mono font-bold text-xl mb-4 block tracking-widest">04 // GOVERNANCE</span>
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-6 leading-tight">Documento arquivado e sob gestão do Doxter</h3>
              <p className="text-white/80 font-body text-lg leading-relaxed">O documento validado é indexado ao perfil do colaborador no sistema. O ciclo flui com controle total de versionamentos e alertas futuros.</p>
            </div>
            <div className="w-full md:w-1/2 flex justify-center items-center h-full relative">
               <div className="relative w-44 h-44 flex items-center justify-center animate-[spin_15s_linear_infinite]">
                 <div className="absolute inset-0 border-[6px] border-t-white border-r-white border-b-white/10 border-l-white/10 rounded-2xl transform rotate-45 transition-all"></div>
                 <div className="absolute inset-3 border-[4px] border-white/20 rounded-full animate-pulse"></div>
                 <ShieldCheck className="w-16 h-16 text-white absolute transform -rotate-45" />
               </div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* CSS for custom scan animation */}
      <style>{`
        @keyframes scan {
          0% { top: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
