import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Protocol from './components/Protocol';
import Philosophy from './components/Philosophy';
import TrialCTA from './components/TrialCTA';
import Contact from './components/Contact';
import Pricing from './components/Pricing';
import { useMagneticElements } from './hooks/useMagneticElements';

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
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/precos" element={<PrecosPage />} />
      </Routes>

      <footer className="bg-ink-black text-paper-white/50 text-center py-8 font-mono text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Doxter. Todos os direitos reservados. System Operational.</p>
      </footer>
    </div>
  );
}

export default App;
