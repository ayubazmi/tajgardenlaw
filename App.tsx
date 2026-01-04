
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Amenities from './components/Amenities';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Social Proof Section */}
        <section className="py-12 bg-zinc-950 border-y border-white/5 overflow-hidden">
          <div className="container mx-auto px-6">
            <div className="flex flex-wrap items-center justify-around gap-8 grayscale opacity-50">
               <span className="text-2xl font-serif">Sangamner Royals</span>
               <span className="text-2xl font-serif">Apex Events</span>
               <span className="text-2xl font-serif">Maharashtra Weddings</span>
               <span className="text-2xl font-serif">Grand Celebrations</span>
            </div>
          </div>
        </section>

        <Services />
        <Amenities />
        <Gallery />
        <Contact />
      </main>

      <footer className="py-12 bg-zinc-950 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 border border-gold rounded-full flex items-center justify-center bg-zinc-900 mb-4">
              <span className="text-gold font-serif text-2xl">T</span>
            </div>
            <h3 className="text-2xl font-serif font-bold tracking-widest">TAJ GARDEN</h3>
            <p className="text-[10px] text-gold tracking-widest">LAWN & BANQUET</p>
          </div>
          
          <p className="text-zinc-500 text-sm font-light max-w-md mx-auto mb-8">
            The premium destination for your celebrations in Sangamner. We bring elegance and luxury to your special moments.
          </p>
          
          <div className="flex justify-center gap-6 mb-8 text-zinc-400">
            <a href="#" className="hover:text-gold">Instagram</a>
            <a href="#" className="hover:text-gold">Facebook</a>
            <a href="#" className="hover:text-gold">WhatsApp</a>
          </div>
          
          <div className="text-zinc-600 text-[10px] uppercase tracking-widest pt-8 border-t border-white/5">
            © {new Date().getFullYear()} Taj Garden Lawns Sangamner. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant */}
      <AIAssistant />
    </div>
  );
};

export default App;
