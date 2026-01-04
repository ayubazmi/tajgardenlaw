
import React, { useState } from 'react';
import { GALLERY } from '../constants';

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Wedding', 'Reception', 'Corporate', 'Party'];

  const filteredItems = filter === 'All' 
    ? GALLERY 
    : GALLERY.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Glimpses of Taj</h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-8"></div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm transition-all ${
                  filter === cat 
                    ? 'bg-gold text-zinc-950 font-semibold' 
                    : 'bg-zinc-800 text-zinc-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="aspect-square overflow-hidden rounded-xl group relative">
              <img 
                src={item.url} 
                alt={item.category} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-zinc-950/80 rounded-full text-xs font-bold tracking-widest">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
