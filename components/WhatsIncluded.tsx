
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Pill, Search, MessageSquare, ClipboardList, Target } from 'lucide-react';
import { PROGRAM_DETAILS } from '../lib/constants';

const features = [
  {
    icon: Calendar,
    title: `${PROGRAM_DETAILS.consultations} Consultas Individuais`,
    description: "Encontros mensais para monitoramento de progresso e ajustes de estratégia."
  },
  {
    icon: Pill,
    title: "Protocolo Farmacológico",
    description: "Prescrições individualizadas de acordo com sua necessidade metabólica e hormonal."
  },
  {
    icon: Search,
    title: "Análise Laboratorial Profunda",
    description: "Check-up completo com mais de 40 parâmetros avaliados detalhadamente."
  },
  {
    icon: MessageSquare,
    title: "Suporte VIP via WhatsApp",
    description: "Canal direto com o médico para suporte contínuo durante todo o programa."
  },
  {
    icon: ClipboardList,
    title: "Guia Alimentar Estratégico",
    description: "Orientações nutricionais práticas focadas em saciedade e densidade nutricional."
  },
  {
    icon: Target,
    title: "Foco em Manutenção",
    description: "Estratégias para manter o peso perdido e evitar o temido efeito sanfona."
  }
];

const WhatsIncluded = () => {
  return (
    <section id="included" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-16">
        <div className="space-y-4 max-w-2xl mx-auto">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Estrutura do Programa</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-foreground">O que está incluso na Consultoria?</h3>
          <p className="text-foreground/70 font-sans leading-relaxed">
            Uma abordagem completa de {PROGRAM_DETAILS.duration} que une medicina, ciência e suporte constante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -5 }}
              className="p-8 rounded-[2rem] bg-background border border-border shadow-soft hover:shadow-elevated transition-all"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-6">
                <feature.icon size={28} />
              </div>
              <h4 className="text-xl font-serif mb-3">{feature.title}</h4>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatsIncluded;
