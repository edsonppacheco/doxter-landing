import { AlertTriangle, TrendingDown, Clock, FileWarning } from 'lucide-react';

export default function Features() {
  return (
    <section className="py-32 bg-ink-black text-paper-white relative z-20 overflow-hidden" id="the-pain">
      {/* Subtle Danger Glowing BG */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 text-red-400 rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
            <AlertTriangle className="w-4 h-4" />
            <span>O Custo do Caos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-white leading-[1.05] tracking-tight mb-6">
            A gestão manual é uma <span className="text-red-400 font-serif italic font-medium relative">
              bomba-relógio
              <span className="absolute bottom-1 left-0 w-full h-1 bg-red-400/30 rounded-full"></span>  
            </span> <br />jurídica e financeira.
          </h2>
          <p className="text-lg md:text-xl text-white/50 font-body leading-relaxed max-w-2xl">
            Controlar vencimentos em planilhas ou pastas no Google Drive não é apenas ineficiente, é o caminho mais rápido para processos trabalhistas, multas contratuais e paralisações nas operações.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Risk 1: Financial */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.07] hover:border-red-500/20 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center text-red-500 mb-8 border border-red-500/20 group-hover:scale-110 transition-transform duration-500">
              <TrendingDown className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold mb-4 text-white tracking-tight">Vazamento Financeiro</h3>
            <p className="text-white/50 leading-relaxed font-body">Cerca de 60% das falhas de compliance geram multas e passivos ocultos que só são descobertos quando já é tarde demais na cadeia de subcontratadas.</p>
          </div>

          {/* Risk 2: Legal / Compliance */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.07] hover:border-orange-500/20 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-400 mb-8 border border-orange-500/20 group-hover:scale-110 transition-transform duration-500">
              <FileWarning className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold mb-4 text-white tracking-tight">Risco Trabalhista</h3>
            <p className="text-white/50 leading-relaxed font-body">Empresas e funcionários operando com CNHs vencidas, NR irregulares ou falta de ASO transferem o passivo jurídico diretamente para a contratante.</p>
          </div>

          {/* Risk 3: Effort */}
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-10 hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 group">
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/80 mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <Clock className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-heading font-extrabold mb-4 text-white tracking-tight">Esforço Braçal</h3>
            <p className="text-white/50 leading-relaxed font-body">Horas de alto valor diárias queimadas pelo time de RH correndo atrás de colaboradores pelo WhatsApp e conferindo documentos no olho.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
