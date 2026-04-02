import { Bot, MessageCircle, FileText, CheckCircle2 } from 'lucide-react';

export default function Protocol() {
  return (
    <section className="py-32 bg-[#F8FAFC] relative z-20 overflow-hidden" id="the-solution">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-doxter-blue/10 text-doxter-blue rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-doxter-blue/20 shadow-[0_0_15px_rgba(53,132,164,0.1)]">
            <Bot className="w-4 h-4" />
            <span>O Custo vira Lucro</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-ink-black leading-[1.05] tracking-tight mb-6">
            Elimine as dores de cabeça e <span className="text-doxter-blue font-serif italic font-medium relative inline-block">
              90%
              <span className="absolute bottom-1 left-0 w-full h-1 bg-doxter-blue/30 rounded-full"></span>  
            </span> do trabalho braçal diário.
          </h2>
          <p className="text-lg md:text-xl text-ink-black/60 font-body leading-relaxed max-w-2xl mx-auto">
            Pare de mendigar documentos em grupos do WhatsApp. O sistema automatiza a cobrança ativamente e extrai dados por Inteligência Artificial de ponta a ponta.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 relative z-10">
          {/* Step 1 */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-ink-black/5 hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-[#25D366]/0 group-hover:bg-[#25D366] transition-colors duration-300"></div>
            <div className="w-14 h-14 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-8 border border-[#25D366]/20">
              <MessageCircle className="w-7 h-7 fill-current" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold mb-4 text-ink-black tracking-tight">Cobrança Ativa (WhatsApp)</h3>
            <p className="text-ink-black/60 leading-relaxed font-body">Falta a CNH do funcionário da subcontratada ou a ficha ASO? A Doxter envia uma notificação diretamente no WhatsApp dele pedindo a foto do documento pelo celular.</p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-ink-black/5 hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-doxter-blue/0 group-hover:bg-doxter-blue transition-colors duration-300"></div>
            <div className="w-14 h-14 rounded-2xl bg-doxter-blue/10 flex items-center justify-center text-doxter-blue mb-8 border border-doxter-blue/20">
              <FileText className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold mb-4 text-ink-black tracking-tight">Leitura Neural (IA)</h3>
            <p className="text-ink-black/60 leading-relaxed font-body">Assim que a foto é devolvida, nossa IA extrai Nome, CPF e a Data de Validade milissegundos depois. Ninguém do seu time precisa digitar nada no sistema.</p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-ink-black/5 hover:-translate-y-2 transition-transform duration-500 relative group overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-compliance-green/0 group-hover:bg-compliance-green transition-colors duration-300"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-compliance-green/5 rounded-bl-full pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
            <div className="w-14 h-14 rounded-2xl bg-compliance-green/10 flex items-center justify-center text-compliance-green mb-8 border border-compliance-green/20 relative z-10">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold mb-4 text-ink-black tracking-tight relative z-10">Aprovação Passiva</h3>
            <p className="text-ink-black/60 leading-relaxed font-body relative z-10">O documento é arquivado, os alertas de expiração automática são armados no calendário da plataforma, e o gestor aprova com apenas um clique. Fricção zero.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
