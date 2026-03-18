import { useEffect, useState } from 'react';
import { MessageCircle, Terminal, LayoutDashboard, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Features() {
  // Simple rotation for the WhatsApp diagnostic chat
  const [activeBubble, setActiveBubble] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBubble(prev => (prev + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-white relative z-20 border-t border-ink-black/5" id="features">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-ink-black mb-6">
            The Automation Engine.
          </h2>
          <p className="text-lg md:text-xl text-ink-black/70 font-body leading-relaxed">
            Nossa infraestrutura substitui cobranças manuais por fluxos de comunicação passivos via WhatsApp e análise em tempo real.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Card 1: WhatsApp Flow */}
          <div className="bracket-container bg-white rounded-[2.5rem] p-8 min-h-[460px] flex flex-col shadow-xl border border-ink-black/10 group hover:border-doxter-blue/30 transition-all duration-500">
            <div className="flex items-center justify-between mb-4 z-10 relative">
              <div className="flex items-center gap-3 text-ink-black">
                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-md">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <h3 className="font-heading font-bold text-xl">WhatsApp Flow</h3>
              </div>
            </div>
            
            {/* Realistic WhatsApp Container */}
            <div className="flex-1 rounded-[1.5rem] overflow-hidden border-8 border-white shadow-[0_5px_20px_rgba(0,0,0,0.08)] bg-[#EFEAE2] flex flex-col mt-2 relative z-10 max-w-[320px] mx-auto w-full">
               {/* Decorative background pattern (very subtle) */}
               <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%222%22 fill=%22%23000%22/%3E%3C/svg%3E')]"></div>
               
               {/* WA Top Bar */}
               <div className="h-14 bg-[#075E54] flex items-center px-4 gap-3 text-white z-10 shadow-sm shrink-0">
                 <div className="w-8 h-8 rounded-full bg-white/20 flex flex-shrink-0 items-center justify-center font-bold text-xs ring-2 ring-white/10">dX</div>
                 <div className="flex flex-col">
                   <span className="text-sm font-bold leading-tight">Doxter IA</span>
                   <span className="text-[10px] text-white/70 leading-tight">conta comercial verificada</span>
                 </div>
               </div>

              {/* Chat Body */}
              <div className="flex-1 flex flex-col gap-3 p-4 z-10 relative">
                
                {/* Status bubble */}
                <div className="bg-[#E2F7CB] text-center self-center px-3 py-1 rounded-lg shadow-sm text-[10px] text-ink-black/60 font-medium mb-2">Hoje</div>

                <div className={`transition-all duration-500 bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm relative ${activeBubble >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* Tail Left */}
                  <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white border-l-[10px] border-l-transparent"></div>
                  <p className="text-[14px] font-medium text-ink-black/90 leading-snug pr-2">Solicitação de CNH enviada para João Silva. Por favor, envie a foto do documento.</p>
                  <span className="text-[10px] text-ink-black/40 mt-1 block font-mono text-right">10:42</span>
                </div>
                
                <div className={`self-end transition-all duration-500 bg-[#DCF8C6] p-2 rounded-2xl rounded-tr-sm shadow-sm relative w-3/4 max-w-[200px] flex flex-col ${activeBubble >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {/* Tail Right */}
                  <div className="absolute top-0 -right-2 w-0 h-0 border-t-[8px] border-t-[#DCF8C6] border-r-[10px] border-r-transparent"></div>
                  <div className="flex items-center justify-center h-24 bg-black/5 rounded-xl border border-black/5 mb-1 relative overflow-hidden">
                     <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%222%22 fill=%22%23000%22 opacity=%220.1%22/%3E%3C/svg%3E')]"></div>
                     <span className="bg-ink-black/60 text-white text-[10px] px-2 py-0.5 rounded-full z-10">cnh_joao.jpg</span>
                  </div>
                  <div className="flex justify-end items-center gap-1">
                    <span className="text-[10px] text-ink-black/40 font-mono">10:45</span>
                    <CheckCircle2 className="w-3 h-3 text-[#34B7F1]" />
                  </div>
                </div>
                
                <div className={`transition-all duration-500 bg-white p-3.5 rounded-2xl rounded-tl-sm shadow-sm relative flex flex-col gap-2 ${activeBubble >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <div className="absolute top-0 -left-2 w-0 h-0 border-t-[8px] border-t-white border-l-[10px] border-l-transparent"></div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-compliance-green flex-shrink-0 mt-0.5" />
                    <p className="text-[14px] font-medium text-ink-black/90 leading-tight">Documento validado com sucesso via Inteligência Artificial.</p>
                  </div>
                  <span className="text-[10px] text-ink-black/40 font-mono text-right">10:45</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Compliance Typewriter */}
          <div className="bracket-container bracket-blue bg-ink-black text-paper-white rounded-[2.5rem] p-8 min-h-[460px] flex flex-col group shadow-xl hover:shadow-2xl hover:border-doxter-blue/30 border border-white/5 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6 text-doxter-blue">
              <Terminal className="w-6 h-6" />
              <h3 className="font-heading font-bold text-xl text-white">Compliance Typewriter</h3>
            </div>
            
            <div className="flex-1 font-mono text-[13px] leading-relaxed text-compliance-green/90 mt-2 bg-black/40 p-4 rounded-2xl border border-white/5 relative overflow-hidden">
               {/* Terminal gradient fade out at bottom */}
               <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
               
               <p className="opacity-50">INITIALIZING_PROTOCOL...</p>
               <p className="mt-3 text-doxter-blue uppercase break-all">Scanning: payload_joao_rg.jpg</p>
               <p className="mt-3 animate-[pulse_2s_ease-in-out_infinite]">&gt; RESOLVING_ENTITIES: [NOME, CPF]</p>
               <p className="mt-3 text-white">MATCH: 98.7% CONFIDENCE</p>
               <p className="mt-3 animate-[pulse_2.5s_ease-in-out_infinite]">&gt; EXPIRATION_CHECK: NULL</p>
               <div className="mt-4 border-l-2 border-compliance-green pl-3 bg-compliance-green/10 py-1.5 ">
                 <p className="text-white uppercase font-bold tracking-widest">STATUS: COMPLIANT</p>
               </div>
               
               <p className="mt-6 opacity-30 text-xs">AWAITING_NEXT_PAYLOAD...</p>
               <div className="w-2 h-4 bg-white animate-pulse mt-1"></div>
            </div>
          </div>

          {/* Card 3: Real-time Dashboard */}
          <div className="bracket-container bg-[#F8FAFC] rounded-[2.5rem] p-8 min-h-[460px] flex flex-col group shadow-xl border border-ink-black/10 hover:border-doxter-blue/30 transition-all duration-500">
            <div className="flex items-center gap-3 mb-8 text-ink-black">
              <LayoutDashboard className="w-6 h-6 text-doxter-blue" />
              <h3 className="font-heading font-bold text-xl">Real-time Dashboard</h3>
            </div>
            
            <div className="flex-1 flex flex-col justify-center h-full">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="bg-white rounded-[1.5rem] p-5 border border-ink-black/5 shadow-sm flex flex-col justify-between hover:border-doxter-blue/30 hover:shadow-md transition-all">
                  <span className="text-xs font-mono font-bold text-ink-black/40 uppercase tracking-wider">Colaboradores</span>
                  <span className="text-4xl font-heading font-extrabold text-ink-black mt-2">142</span>
                </div>
                
                <div className="bg-white rounded-[1.5rem] p-5 border border-ink-black/5 shadow-sm flex flex-col justify-between hover:border-doxter-blue/30 hover:shadow-md transition-all">
                  <span className="text-xs font-mono font-bold text-ink-black/40 uppercase tracking-wider">Ativos</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-heading font-extrabold text-compliance-green">138</span>
                    <span className="w-2.5 h-2.5 rounded-full bg-compliance-green animate-pulse shadow-[0_0_10px_rgba(39,174,96,0.6)]"></span>
                  </div>
                </div>
                
                <div className="bg-white rounded-[1.5rem] p-5 border border-ink-black/5 shadow-sm flex flex-col justify-between hover:border-doxter-blue/30 hover:shadow-md transition-all">
                  <span className="text-xs font-mono font-bold text-ink-black/40 uppercase tracking-wider">Expirados</span>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-4xl font-heading font-extrabold text-[#E74C3C]">4</span>
                    <AlertCircle className="w-4 h-4 text-[#E74C3C]" />
                  </div>
                </div>
                
                <div className="bg-doxter-blue text-white rounded-[1.5rem] p-5 shadow-lg shadow-doxter-blue/20 flex flex-col justify-between relative overflow-hidden group/card hover:bg-[#2A6982] transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  <span className="text-xs font-mono font-bold text-white/70 uppercase tracking-wider relative z-10">Pendentes</span>
                  <div className="flex items-baseline gap-2 mt-2 relative z-10">
                    <span className="text-4xl font-heading font-extrabold group-hover/card:scale-110 transition-transform transform origin-left">12</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
