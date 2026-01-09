
import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTAFinal = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto rounded-[3.5rem] p-12 md:p-24 text-center space-y-12 gradient-cta text-white relative overflow-hidden shadow-elevated">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
             <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto space-y-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Pronto para escrever o próximo capítulo da sua história?
          </h2>
          <p className="text-lg md:text-xl opacity-80 font-sans">
            As vagas são limitadas devido à exclusividade do acompanhamento. Não deixe sua saúde para depois.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
          <a 
            href="#booking" 
            className="w-full sm:w-auto bg-white text-primary px-10 py-5 rounded-2xl font-serif text-xl flex items-center justify-center gap-2 hover:bg-secondary transition-all shadow-lg"
          >
            Quero começar agora <ArrowRight size={20} />
          </a>
          <a 
            href={`https://wa.me/${558185812121}`}
            className="text-white font-serif text-lg border-b-2 border-white/20 hover:border-white transition-all pb-1"
          >
            Falar com a equipe pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAFinal;
