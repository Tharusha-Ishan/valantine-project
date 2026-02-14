import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import LoveCounter from './components/LoveCounter';
import MessageForm from './components/MessageForm';
import Footer from './components/Footer';
import FloatingHearts from './animations/FloatingHearts';
import CursorEffect from './components/CursorEffect';
import EasterEgg from './components/EasterEgg';

function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-white font-sans overflow-x-hidden relative selection:bg-brand-pink selection:text-white">
      {/* Dynamic Background with animated gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-black via-purple-900/40 to-black z-0 pointer-events-none animate-gradient-x"></div>

      {/* Romantic Particle Effects */}
      <FloatingHearts />
      <CursorEffect />
      <EasterEgg />

      {/* Main Content */}
      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <About />
        <LoveCounter />
        <MessageForm />
      </main>

      <Footer />
    </div>
  );
}

export default App;
