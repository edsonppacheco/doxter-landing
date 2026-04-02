import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Protocol from './components/Protocol';
import Philosophy from './components/Philosophy';
import Contact from './components/Contact';
import { useMagneticElements } from './hooks/useMagneticElements';

function App() {
  useMagneticElements();

  return (
    <div className="min-h-screen bg-noise relative text-ink-black font-body overflow-hidden">
      <Navbar />
      
      <main>
        <Hero />
        <Features />
        <Protocol />
        <Philosophy />
        <Contact />
      </main>
      
      {/* Site Footer */}
      <footer className="bg-ink-black text-paper-white/50 text-center py-8 font-mono text-sm border-t border-white/5">
        <p>© {new Date().getFullYear()} Doxter. Todos os direitos reservados. System Operational.</p>
      </footer>
    </div>
  );
}

export default App;
