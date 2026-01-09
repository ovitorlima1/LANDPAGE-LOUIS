
import React from 'react';

const MarqueeBanner = () => {
  const items = [
    "Acompanhamento Médico 24/7",
    "Emagrecimento Sustentável",
    "Performance Física",
    "Suporte Farmacológico",
    "Otimização Metabólica",
    "Resultados Comprovados",
    "Consultoria Premium",
    "Recife - PE"
  ];

  return (
    <div className="bg-primary py-4 overflow-hidden relative">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center mx-8">
            <span className="text-white font-serif text-lg tracking-widest uppercase flex items-center gap-4">
              {item}
              <span className="w-2 h-2 bg-white rounded-full opacity-50"></span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
