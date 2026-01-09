
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { DOCTOR_INFO } from '../lib/constants';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden gradient-hero">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          className="flex-1 space-y-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Atendimento Premium em Recife/PE
          </div>

          <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] text-foreground tracking-tight">
            Corpo, Mente & <br />
            <span className="italic text-primary">Performance</span>
          </h1>

          <p className="text-xl text-foreground/80 max-w-xl leading-relaxed font-sans">
            Transforme seu físico com a metodologia do {DOCTOR_INFO.name}. Protocolos médicos de elite para quem não aceita menos que o extraordinário.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <a
              href="#booking"
              className="w-full sm:w-auto bg-primary text-white px-8 py-5 rounded-2xl font-serif text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-elevated"
            >
              Agendar minha Consultoria <ArrowRight size={20} />
            </a>
            <div className="flex items-center gap-4 py-2">
              <p className="text-sm font-medium text-foreground/70">
                <span className="text-foreground font-bold">+500</span> vidas transformadas
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {DOCTOR_INFO.focus.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-foreground/80">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex-1 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-elevated aspect-[4/5] md:aspect-auto">
            <img
              src={DOCTOR_INFO.image}
              alt={DOCTOR_INFO.name}
              className="w-full h-auto object-cover hover:scale-105 transition-all duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white">
              <p className="text-2xl font-serif">{DOCTOR_INFO.name}</p>
              <p className="text-sm opacity-80 uppercase tracking-widest">{DOCTOR_INFO.crm}</p>
            </div>
          </div>

          <div className="absolute -top-12 -right-12 w-48 h-48 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
