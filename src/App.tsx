import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Protocol from './components/Protocol';
import Philosophy from './components/Philosophy';
import TrialCTA from './components/TrialCTA';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import { useMagneticElements } from './hooks/useMagneticElements';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
      <Protocol />
      <Philosophy />
      <TrialCTA />
      <Contact />
    </main>
  );
}

function PrecosPage() {
  return (
    <main className="pt-16">
      <Pricing />
      <TrialCTA />
    </main>
  );
}

function App() {
  useMagneticElements();

  return (
    <div className="min-h-screen bg-noise relative text-ink-black font-body overflow-hidden">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/precos" element={<PrecosPage />} />
      </Routes>

      <footer className="bg-ink-black text-paper-white/50 text-center py-8 font-mono text-sm border-t border-white/5">
        <div className="flex items-center justify-center gap-4 mb-3">
          <a
            href="https://www.linkedin.com/company/doxter-gest%C3%A3o-de-documentos"
            target="_blank"
            rel="noopener noreferrer"
            className="text-paper-white/40 hover:text-paper-white transition-colors duration-200"
            aria-label="Doxter no LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
        <p>© {new Date().getFullYear()} Doxter. Todos os direitos reservados. System Operational.</p>
      </footer>
    </div>
  );
}

export default App;
