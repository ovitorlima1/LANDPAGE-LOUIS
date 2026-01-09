
import React from 'react';
import { DOCTOR_INFO } from '../lib/constants';
import { Award, ShieldCheck, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-elevated bg-background">
            <img
              src={DOCTOR_INFO.aboutImage}
              alt={`${DOCTOR_INFO.name} - Foco em Performance`}
              className="w-full object-cover aspect-[3/4] hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-primary text-white p-8 rounded-[2rem] shadow-elevated hidden md:block z-20">
            <p className="text-4xl font-serif mb-1">{DOCTOR_INFO.experience}</p>
            <p className="text-sm uppercase tracking-widest opacity-80">Referência em Medicina Esportiva</p>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">A Ciência por trás do Corpo</h2>
            <h3 className="text-4xl md:text-5xl font-serif">{DOCTOR_INFO.name}</h3>
            <p className="text-xl font-serif text-primary italic">Especialista em Otimização Metabólica</p>
          </div>

          <p className="text-foreground/80 leading-relaxed text-lg">
            Muito além do emagrecimento, o Dr. Louis acredita na construção de um corpo forte e resiliente. Com vasta experiência em Recife, ele utiliza a medicina de precisão para ajustar cada detalhe da sua fisiologia, garantindo que sua estética seja o reflexo de uma saúde inabalável.
          </p>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h4 className="font-serif text-lg">Expertise Acadêmica</h4>
                <p className="text-sm text-foreground/70">Pós-graduado em Endocrinologia e Nutrologia pela USP, com foco em performance humana.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h4 className="font-serif text-lg">Protocolos Seguros</h4>
                <p className="text-sm text-foreground/70">Uso ético e estratégico de suporte farmacológico para resultados acima da média.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                <Award size={24} />
              </div>
              <div>
                <h4 className="font-serif text-lg">Goldstein Clinic</h4>
                <p className="text-sm text-foreground/70">Um espaço dedicado à excelência e ao atendimento médico de alto padrão em Recife.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
