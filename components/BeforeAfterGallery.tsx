
import React from 'react';

const BeforeAfterGallery = () => {
  const cases = [
    {
      title: "Caso 1 - Performance",
      stats: "-70kg / Protocolo Personalizado",
      image: "/assets/ex1-antes-depois.jpeg"
    },
    {
      title: "Caso 2 - Saúde",
      stats: "-5kg / 4kg musculos",
      image: "/assets/ex2-antes.jpeg",
      hoverImage: "/assets/ex2-depois.jpeg"
    },
    {
      title: "Caso 3 - Estética",
      stats: "-2kg / Definição Abdominal",
      image: "/assets/ex3-antes-depois.jpeg"
    },
  ];

  return (
    <section id="results" className="py-24 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] opacity-80">Galeria de Resultados</h2>
          <h3 className="text-4xl md:text-5xl font-serif italic text-background">Transformações que inspiram</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, idx) => (
            <div key={idx} className="group relative overflow-hidden rounded-[2rem] aspect-[4/5] shadow-elevated">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${item.hoverImage ? '' : 'grayscale group-hover:grayscale-0'}`}
              />
              {item.hoverImage && (
                <img
                  src={item.hoverImage}
                  alt={`${item.title} Depois`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700 opacity-0 group-hover:opacity-100 group-hover:scale-110"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
                <h4 className="text-xl font-serif">{item.title}</h4>
                <p className="text-sm opacity-80 uppercase tracking-widest">{item.stats}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm opacity-60">*Resultados individuais podem variar. Protocolos autorizados pelos pacientes.</p>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
