
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-zinc-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Simulated Logo based on user prompt */}
          <div className="w-10 h-10 border border-gold rounded-full flex items-center justify-center bg-zinc-900 shadow-[0_0_10px_rgba(212,175,55,0.3)]">
            <span className="text-gold font-serif text-xl">T</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-serif font-bold tracking-widest text-white leading-none">TAJ GARDEN</span>
            <span className="text-[10px] text-gold tracking-[0.2em] font-light">LAWN & BANQUET</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm font-light hover:text-gold transition-colors">Home</a>
          <a href="#services" className="text-sm font-light hover:text-gold transition-colors">Services</a>
          <a href="#gallery" className="text-sm font-light hover:text-gold transition-colors">Gallery</a>
          <a href="#amenities" className="text-sm font-light hover:text-gold transition-colors">Amenities</a>
          <a href="#contact" className="px-5 py-2 border border-gold text-gold text-sm rounded-full hover:bg-gold hover:text-zinc-950 transition-all">Book Now</a>
        </div>
        
        {/* Mobile menu button could go here */}
      </div>
    </nav>
  );
};

export default Navbar;
