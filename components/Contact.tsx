
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Get In Touch</h2>
              <p className="text-zinc-400 mb-10">Ready to book your event? Contact us today for a personalized quote and tour of our lawns.</p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-gold">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Location</h4>
                    <p className="text-zinc-400 text-sm font-light">Taj Garden Lawns, Sangamner-Akole Road,<br />Sangamner, Maharashtra 422605</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-gold">📞</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Phone</h4>
                    <p className="text-zinc-400 text-sm font-light">+91 99999 00000 / +91 88888 11111</p>
                  </div>
                </div>

                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center shrink-0">
                    <span className="text-gold">✉️</span>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Email</h4>
                    <p className="text-zinc-400 text-sm font-light">info@tajgardenlawns.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 w-full h-64 bg-zinc-800 rounded-2xl border border-white/5 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center text-zinc-500">
                   <div className="text-center">
                     <span className="text-4xl block mb-2">🗺️</span>
                     <p className="text-xs">Google Maps Integration</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="bg-zinc-950 p-8 md:p-12 rounded-3xl border border-gold/20 shadow-2xl">
              <h3 className="text-2xl font-serif font-bold mb-8">Send an Inquiry</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">Name</label>
                    <input type="text" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500">Phone</label>
                    <input type="tel" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="+91 00000 00000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Event Type</label>
                  <select className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-colors appearance-none text-zinc-400">
                    <option>Wedding</option>
                    <option>Corporate Event</option>
                    <option>Private Party</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Date</label>
                  <input type="date" className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-colors text-zinc-400" />
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500">Message</label>
                  <textarea rows={4} className="w-full bg-zinc-900 border border-white/10 rounded-lg px-4 py-3 text-sm focus:border-gold outline-none transition-colors" placeholder="Tell us more about your event needs..."></textarea>
                </div>

                <button className="w-full py-4 bg-gold text-zinc-950 font-bold rounded-lg hover:bg-gold/90 transition-all uppercase tracking-widest text-xs shadow-lg shadow-gold/20">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
