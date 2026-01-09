
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../lib/constants';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Dúvidas Frequentes</h2>
          <h3 className="text-4xl font-serif">Perguntas Comuns</h3>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`border border-border rounded-2xl overflow-hidden transition-all ${isOpen ? 'bg-card shadow-soft' : 'bg-transparent'}`}
              >
                <button 
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex justify-between items-center text-left"
                >
                  <span className="font-serif text-lg md:text-xl text-foreground/90">{item.question}</span>
                  {isOpen ? <Minus size={20} className="text-primary" /> : <Plus size={20} className="text-primary" />}
                </button>
                {isOpen && (
                  <div className="px-8 pb-8 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-foreground/70 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
