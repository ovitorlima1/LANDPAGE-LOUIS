
import React from 'react';
import { Zap, TrendingDown, Activity, Utensils } from 'lucide-react';
import { PROBLEMS } from '../lib/constants';

const iconMap: any = { Zap, TrendingDown, Activity, Utensils };

const Problems = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 space-y-6 sticky top-32">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Identificando Barreiras</h2>
          <h3 className="text-4xl md:text-5xl font-serif leading-tight">Você se sente preso em um desses problemas?</h3>
          <p className="text-foreground/70 leading-relaxed">
            Muitas vezes, a dificuldade em emagrecer não é falta de vontade, mas sim um desequilíbrio que precisa de intervenção médica especializada.
          </p>
          <a href="#booking" className="inline-flex items-center gap-2 text-primary font-serif border-b-2 border-primary/20 hover:border-primary transition-all pb-1 text-lg">
            Quero resolver isso hoje
          </a>
        </div>

        <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {PROBLEMS.map((item, idx) => {
            const IconComp = iconMap[item.icon];
            return (
              <div key={idx} className="p-8 rounded-[2rem] bg-secondary/30 border border-border/50">
                <div className="text-primary mb-4">
                  <IconComp size={32} />
                </div>
                <h4 className="text-xl font-serif mb-2">{item.title}</h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Problems;
