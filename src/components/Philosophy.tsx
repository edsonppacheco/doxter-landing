import { ShieldAlert, BellRing, Lock } from 'lucide-react';

export default function Philosophy() {
  return (
    <section className="py-32 bg-ink-black text-paper-white relative z-20" id="the-safety-net">
      {/* Subtle Green Glow for Safety */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-compliance-green/5 rounded-[100%] blur-[120px] pointer-events-none transition-opacity duration-1000"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative group">
            {/* Visual representation of an alert timeline */}
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden backdrop-blur-md hover:border-compliance-green/20 transition-colors duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-compliance-green/10 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="space-y-6 relative z-10">
                  {/* Connecting Line */}
                  <div className="absolute left-[1.15rem] top-12 bottom-12 w-px bg-gradient-to-b from-yellow-500/40 via-compliance-green/40 to-transparent"></div>

                  {/* Alert Item 1: Expiring in 30 days */}
                  <div className="flex gap-6 items-start relative opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex flex-shrink-0 items-center justify-center text-yellow-500 border border-yellow-500/20 z-10">
                      <BellRing className="w-4 h-4" />
                    </div>
                    <div className="bg-white/5 border border-white/10 p-5 rounded-2xl w-full">
                       <span className="text-yellow-500 text-[10px] font-mono font-bold tracking-widest uppercase mb-2 block">Aviso Oculto: Vence em 30 Dias</span>
                       <p className="text-sm font-medium text-white mb-3">CNH do motorista (Subcontratada XPTO) próxima do vencimento crítico.</p>
                       <div className="flex items-center gap-2 text-[11px] text-white/50 font-mono">
                          <span className="w-2 h-2 rounded-full bg-doxter-blue animate-pulse"></span>
                          Ação Doxter: Mensagem autônoma de WhatsApp enviada.
                       </div>
                    </div>
                  </div>

                  {/* Alert Item 2: Document Renewed */}
                  <div className="flex gap-6 items-start relative">
                    <div className="w-10 h-10 rounded-full bg-compliance-green/20 flex flex-shrink-0 items-center justify-center text-compliance-green border border-compliance-green/20 z-10 shadow-[0_0_20px_rgba(39,174,96,0.2)]">
                      <ShieldAlert className="w-4 h-4" />
                    </div>
                    <div className="bg-compliance-green/10 border border-compliance-green/20 p-5 rounded-2xl w-full shadow-lg relative overflow-hidden">
                       <div className="absolute inset-0 bg-gradient-to-r from-compliance-green/5 to-transparent pointer-events-none"></div>
                       <span className="text-compliance-green text-[10px] font-mono font-bold tracking-widest uppercase mb-2 block relative z-10">Risco Elimindado (Resolvido)</span>
                       <p className="text-sm font-medium text-white mb-3 relative z-10">Documento processado com sucesso. Status atualizado em todos os ERPs.</p>
                       <div className="flex items-center gap-2 text-[11px] text-white/50 font-mono relative z-10">
                          <span className="w-2 h-2 rounded-full bg-compliance-green shadow-[0_0_8px_rgba(39,174,96,0.6)]"></span>
                          Ação Doxter: IA revalidou o documento. Bloqueio na catraca evitado.
                       </div>
                    </div>
                  </div>

                </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-compliance-green/10 text-compliance-green rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-compliance-green/20 shadow-[0_0_15px_rgba(39,174,96,0.1)]">
              <Lock className="w-4 h-4" />
              <span>A Rede de Proteção</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-6">
              Vencimentos blindados. <span className="block text-white/30 italic font-serif font-medium">Zero surpresas.</span>
            </h2>
            <p className="text-lg md:text-xl text-white/50 font-body leading-relaxed mb-10">
              Documentos vencidos são o pesadelo causador da maioria dos processos trabalhistas. A Doxter monitora o calendário silenciosamente e se antecipa, garantindo uma blindagem integral de Compliance.
            </p>
            
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-white/80 font-medium text-lg">
                <span className="w-8 h-8 rounded-full bg-doxter-blue/10 flex items-center justify-center text-doxter-blue text-sm font-bold ring-1 ring-doxter-blue/20">1</span>
                Sistema monitora prazos diários no modo background invisível.
              </li>
              <li className="flex items-center gap-4 text-white/80 font-medium text-lg">
                <span className="w-8 h-8 rounded-full bg-doxter-blue/10 flex items-center justify-center text-doxter-blue text-sm font-bold ring-1 ring-doxter-blue/20">2</span>
                Cobrança preventiva acionada 30 dias antes do documento expirar.
              </li>
              <li className="flex items-center gap-4 text-[#25D366] font-bold text-lg bg-[#25D366]/5 p-2 rounded-lg border border-[#25D366]/10 -ml-2">
                <span className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] text-sm shadow-[0_0_10px_rgba(37,211,102,0.3)] ring-1 ring-[#25D366]/30">3</span>
                Garantia militar de que nenhum fornecedor atuará irregular nas suas obras.
              </li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}
