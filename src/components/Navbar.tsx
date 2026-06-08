import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLink = (active: boolean) =>
    `text-sm font-heading font-semibold transition-colors relative
     ${active
       ? 'text-doxter-blue after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-doxter-blue after:rounded-full'
       : 'text-ink-black/70 hover:text-doxter-blue'
     }`;

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 w-[95%] max-w-6xl rounded-[2.5rem] flex items-center justify-between px-6 py-4 backdrop-blur-xl ${scrolled ? 'bg-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/5' : 'bg-transparent'}`}>
      
      {/* Logo Image */}
      <Link to="/" className="flex items-center group cursor-pointer shrink-0">
        <img src="/logo.png" alt="Doxter Logo" className="h-16 max-h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]" />
      </Link>

      {/* Control Actions & Status */}
      <div className="flex items-center gap-6">
        
        <div className="hidden md:flex items-center gap-6">
          <Link to="/precos" className={navLink(pathname === '/precos')}>
            Preços
          </Link>
        </div>
        
        <a href="https://doxter-dash.vercel.app/#/login" target="_blank" rel="noopener noreferrer" className="btn-primary py-2.5 px-8 text-sm inline-flex items-center justify-center">
          Login
        </a>
      </div>
    </nav>
  );
}
