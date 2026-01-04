
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Services</h2>
        <div className="w-24 h-1 bg-gold mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div 
              key={service.id} 
              className="group relative overflow-hidden rounded-2xl h-[450px] cursor-pointer"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 text-left w-full transform transition-transform duration-500 group-hover:-translate-y-2">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">{service.title}</h3>
                <p className="text-zinc-300 text-sm font-light opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
