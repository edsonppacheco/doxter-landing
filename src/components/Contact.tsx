import { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Configurações secretas do FormSubmit
    formData.append('_cc', 'martins@doxter.com.br');
    formData.append('_subject', 'Novo Lead - Landing Page Doxter');
    formData.append('_captcha', 'false'); // Desabilita o recaptha chato
    formData.append('_template', 'table'); // Template de email mais limpo

    try {
      const response = await fetch('https://formsubmit.co/ajax/edson@doxter.com.br', {
        method: 'POST',
        headers: { 
          'Accept': 'application/json'
        },
        body: formData
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        
        // Retorna pro idle depois de 5 segundos
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section className="py-32 bg-white relative z-20 border-t border-ink-black/5" id="contato">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Copy */}
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-doxter-blue/10 text-doxter-blue rounded-full text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-doxter-blue/20">
              <Mail className="w-4 h-4" />
              <span>Diagnóstico Gratuito</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-extrabold text-ink-black leading-[1.05] tracking-tight mb-6">
              Pronto para parar de <span className="text-doxter-blue font-serif italic font-medium">perder dinheiro</span>?
            </h2>
            <p className="text-lg text-ink-black/60 font-body leading-relaxed mb-10">
              Entre em contato com nossos especialistas. Faremos um mapeamento da sua cadeia de fornecedores e mostraremos exatamente onde a automação pode zerar os seus riscos.
            </p>
            
            <div className="flex items-center gap-4 text-ink-black/50 text-sm font-mono border-t border-black/5 pt-8">
              <span>contact@doxter.com.br</span>
              <span className="w-1 h-1 bg-ink-black/20 rounded-full"></span>
              <span>São Paulo, SP</span>
            </div>
          </div>

          {/* Right: The Form */}
          <div className="bracket-container bg-[#F8FAFC] rounded-[2.5rem] p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-ink-black/5 relative">
            
            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center h-full min-h-[300px] text-center animate-in fade-in zoom-in duration-500">
                <div className="w-20 h-20 rounded-full bg-compliance-green/10 flex items-center justify-center text-compliance-green mb-6 border border-compliance-green/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-heading font-bold text-ink-black mb-2">Mensagem Enviada!</h3>
                <p className="text-ink-black/60 font-body">Recebemos o seu contato. Nossa equipe retornará em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <h3 className="text-2xl font-heading font-bold text-ink-black mb-2">Falar com Especialistas</h3>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 bg-red-500/10 text-red-500 p-3 rounded-xl border border-red-500/20 text-sm font-medium mb-2">
                    <AlertCircle className="w-4 h-4" />
                    <span>Erro ao enviar. Tente novamente mais tarde.</span>
                  </div>
                )}
                
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-mono font-bold text-ink-black/50 uppercase tracking-widest pl-2">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name" 
                    required 
                    placeholder="Seu nome"
                    className="w-full bg-white border border-ink-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-doxter-blue focus:ring-4 focus:ring-doxter-blue/10 transition-all font-body text-ink-black placeholder:text-ink-black/30"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="email" className="text-xs font-mono font-bold text-ink-black/50 uppercase tracking-widest pl-2">E-mail Corporativo</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required 
                      placeholder="voce@empresa.com"
                      className="w-full bg-white border border-ink-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-doxter-blue focus:ring-4 focus:ring-doxter-blue/10 transition-all font-body text-ink-black placeholder:text-ink-black/30"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 flex-1">
                    <label htmlFor="phone" className="text-xs font-mono font-bold text-ink-black/50 uppercase tracking-widest pl-2">WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone" 
                      placeholder="(11) 90000-0000"
                      className="w-full bg-white border border-ink-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-doxter-blue focus:ring-4 focus:ring-doxter-blue/10 transition-all font-body text-ink-black placeholder:text-ink-black/30"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-mono font-bold text-ink-black/50 uppercase tracking-widest pl-2">Mensagem</label>
                  <textarea 
                    id="message"
                    name="message" 
                    required 
                    placeholder="Como podemos te ajudar hoje?"
                    rows={3}
                    className="w-full bg-white border border-ink-black/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-doxter-blue focus:ring-4 focus:ring-doxter-blue/10 transition-all font-body text-ink-black placeholder:text-ink-black/30 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="mt-4 bg-doxter-blue text-white w-full py-5 rounded-2xl font-heading font-extrabold text-lg flex items-center justify-center gap-2 hover:bg-[#2A6982] transition-colors shadow-lg shadow-doxter-blue/20 disabled:opacity-70 disabled:cursor-not-allowed group"
                >
                  {status === 'loading' ? (
                    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      Solicitar Diagnóstico
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
                <p className="text-center text-[10px] text-ink-black/40 mt-2 font-mono uppercase tracking-widest">Suas informações estão seguras conosco.</p>
              </form>
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
}
