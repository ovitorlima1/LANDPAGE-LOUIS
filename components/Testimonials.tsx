
import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../lib/constants';

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Provas Reais</h2>
          <h3 className="text-4xl md:text-5xl font-serif">O que dizem os pacientes</h3>
          <p className="text-foreground/70">A maior satisfação é ver a saúde e confiança sendo restauradas.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((item, idx) => (
            <div key={idx} className="p-10 rounded-[2.5rem] bg-card border border-border shadow-soft flex flex-col gap-6 items-center text-center">
              <div className="space-y-4 w-full">
                <div className="flex justify-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg italic font-serif leading-relaxed text-foreground/90">"{item.text}"</p>
                <div>
                  <h4 className="font-serif text-xl">{item.name}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
