import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-[95%] max-w-6xl rounded-[2.5rem] flex items-center justify-between px-6 py-4 backdrop-blur-xl ${scrolled ? 'bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5' : 'bg-transparent'}`}>
      
      {/* Logo Image */}
      <a href="#" className="flex items-center group cursor-pointer shrink-0">
        <img src="/logo.png" alt="Doxter Logo" className="h-16 max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
      </a>

      {/* Control Actions & Status */}
      <div className="flex items-center gap-6">
        
        <div className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-heading font-semibold text-ink-black/70 hover:text-doxter-blue transition-colors">
            Motor de Automação
          </a>
          <a href="#protocol" className="text-sm font-heading font-semibold text-ink-black/70 hover:text-doxter-blue transition-colors">
            Protocolo
          </a>
        </div>
        
        <a href="https://doxter-dash.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-8 text-sm inline-flex items-center justify-center">
          Login
        </a>
      </div>
    </nav>
  );
}
