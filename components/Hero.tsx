
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1544161513-0179fe746fd5?auto=format&fit=crop&q=80&w=2000" 
          alt="Taj Garden Venue" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <div className="inline-block px-4 py-1 border border-gold/30 rounded-full bg-gold/10 text-gold text-xs tracking-widest mb-6 animate-pulse">
          SANGAMNER'S MOST LUXURIOUS VENUE
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-6 leading-tight">
          Where Every Event <br /> 
          <span className="text-gold">Becomes a Legacy</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-zinc-300 text-lg mb-10 font-light leading-relaxed">
          Celebrate your grandest moments at Taj Garden Lawns. From royal weddings to corporate galas, we provide the perfect blend of luxury, space, and comfort in the heart of Sangamner.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-gold text-zinc-950 font-semibold rounded-full hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(212,175,55,0.4)]"
          >
            Check Availability
          </a>
          <a 
            href="#gallery" 
            className="px-8 py-4 border border-white/20 hover:border-gold/50 text-white rounded-full transition-colors backdrop-blur-sm"
          >
            Explore Gallery
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent to-gold"></div>
      </div>
    </section>
  );
};

export default Hero;
