import { ArrowLeftRight, XCircle, CheckCircle } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-32 bg-doxter-blue text-white relative z-20 overflow-hidden" id="philosophy">
      {/* Decorative background noise specific to this section */}
      <div className="absolute inset-0 opacity-10 mix-blend-screen pointer-events-none bg-[url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>
      
      {/* Huge subtle D shape in background */}
      <div className="absolute -left-[300px] top-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[80px] border-white/5 rounded-full blur-xl pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 tracking-tight">
            Manifesto de Eficiência.
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-body leading-relaxed">
            Não construímos um arquivo digital. Construímos um motor de execução para quem precisa escalar sem se preocupar com passivos trabalhistas.
          </p>
        </div>

        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 items-center max-w-5xl mx-auto relative">
          
          {/* Traditional Management */}
          <div className="bg-black/20 backdrop-blur-md rounded-[2.5rem] p-10 border border-white/10 hover:border-white/20 transition-colors shadow-2xl">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10 text-white/60">
               <XCircle className="w-6 h-6" />
               <span className="font-heading font-bold text-lg uppercase tracking-wider">A Gestão Tradicional</span>
            </div>
            
            <p className="text-2xl md:text-[1.7rem] font-serif italic text-white/80 leading-relaxed mb-8">
              "Foca em <span className="text-white border-b border-dashed border-white/30 pb-0.5">pastas infinitas</span> e <span className="text-white border-b border-dashed border-white/30 pb-0.5">cobranças manuais</span>."
            </p>
            
            <ul className="space-y-4 font-body text-white/60">
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/30"></div> Processos lentos e baseados em email</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/30"></div> Alto risco de passivos</li>
              <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-white/30"></div> Experiência frustrante para o colaborador</li>
            </ul>
          </div>
          
          {/* Divider/Arrow */}
          <div className="hidden md:flex justify-center shrink-0">
             <div className="w-16 h-16 rounded-full bg-white text-doxter-blue flex items-center justify-center shadow-2xl relative z-10 transition-transform hover:scale-110 duration-300">
               <ArrowLeftRight className="w-6 h-6" />
             </div>
          </div>
          <div className="flex md:hidden justify-center shrink-0 py-4">
             <div className="w-12 h-12 rounded-full bg-white text-doxter-blue flex items-center justify-center shadow-xl">
               <ArrowLeftRight className="w-5 h-5 rotate-90" />
             </div>
          </div>

          {/* Doxter Way */}
          <div className="bracket-container bg-white text-ink-black rounded-[2.5rem] p-10 shadow-2xl relative transform md:scale-105 hover:scale-110 transition-transform duration-500">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-ink-black/10 text-doxter-blue">
               <CheckCircle className="w-6 h-6 text-compliance-green" />
               <span className="font-heading font-bold text-lg uppercase tracking-wider">O Padrão Doxter</span>
            </div>
            
            <p className="text-2xl md:text-3xl font-heading font-bold text-ink-black leading-tight mb-8">
              Foca em <span className="text-doxter-blue relative z-10">
                autonomia
                <span className="absolute bottom-1 left-0 w-full h-3 bg-doxter-blue/20 -z-10 transform -rotate-2"></span>
              </span> e conformidade em tempo real.
            </p>
            
            <ul className="space-y-4 font-body text-ink-black/70 font-medium">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-compliance-green shadow-[0_0_8px_#27AE60]"></div> Validação Instantânea via IA</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-compliance-green shadow-[0_0_8px_#27AE60]"></div> Cobranças Passivas via WhatsApp</li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-compliance-green shadow-[0_0_8px_#27AE60]"></div> Infraestrutura Legal Sólida</li>
            </ul>
          </div>
        </div>
        
        {/* Footer CTA Banner */}
        <div className="mt-40 bg-ink-black rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold mb-10 text-white relative z-10 max-w-2xl mx-auto leading-tight">
            Pronto para focar no seu negócio enquanto rodamos a <span className="text-compliance-green font-serif italic font-normal">burocracia?</span>
          </h2>
          <button className="bg-doxter-blue text-white rounded-full px-12 py-5 font-heading font-bold text-lg relative z-10 transition-transform transform group-hover:-translate-y-1 shadow-[0_20px_40px_rgba(53,132,164,0.4)] flex justify-center mx-auto hover:bg-[#2A6982]">
            Agendar Demonstração
          </button>
        </div>
        
      </div>
    </section>
  );
}
