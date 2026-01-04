
import React from 'react';
import { AMENITIES } from '../constants';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">World-Class <br /> <span className="text-gold">Amenities</span></h2>
            <p className="text-zinc-400 font-light mb-10 leading-relaxed">
              We pride ourselves on providing the finest facilities in Sangamner. Our venue is designed to meet every need of a modern, high-end celebration, ensuring comfort for both hosts and guests.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {AMENITIES.map((amenity, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-zinc-900 border border-white/5 hover:border-gold/30 transition-all">
                  <div className="text-3xl shrink-0">{amenity.icon}</div>
                  <div>
                    <h4 className="font-bold text-white mb-1">{amenity.name}</h4>
                    <p className="text-zinc-500 text-xs leading-relaxed">{amenity.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gold/10 blur-3xl rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80&w=1200" 
              alt="Venue Amenities" 
              className="relative rounded-3xl shadow-2xl z-10"
            />
            <div className="absolute -bottom-6 -right-6 bg-zinc-900 p-8 rounded-2xl border border-gold/20 z-20 shadow-xl hidden md:block">
              <div className="text-gold font-serif text-4xl font-bold mb-1">50,000+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest">Square Feet Area</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
