
import React from 'react';
import { Check, Sparkles } from 'lucide-react';
// Corrected import: formatCurrency is exported from ../lib/utils
import { PROGRAM_DETAILS } from '../lib/constants';
import { formatCurrency } from '../lib/utils';

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-card border border-border rounded-[3rem] overflow-hidden shadow-elevated flex flex-col md:flex-row">
          <div className="p-12 md:w-3/5 space-y-8">
            <div className="space-y-2">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Plano de 4 Meses</h2>
              <h3 className="text-3xl font-serif">A Consultoria Completa</h3>
            </div>
            
            <ul className="space-y-4">
              {[
                "4 Consultas Individuais",
                "Análise de Exames Especializada",
                "Protocolo Farmacológico VIP",
                "Suporte 24h via WhatsApp",
                "Guia Alimentar Prático",
                "Otimização Metabólica"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-foreground/80">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Check size={12} />
                  </div>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="p-6 rounded-2xl bg-secondary/20 border border-border/50">
              <p className="text-sm font-medium text-foreground/60 mb-2">Equivalente a apenas:</p>
              <p className="text-3xl font-serif text-primary">
                {formatCurrency(PROGRAM_DETAILS.dailyCost)} <span className="text-sm font-sans text-foreground/60 font-normal">/ dia</span>
              </p>
              <p className="text-xs text-foreground/40 mt-1">Menos que o custo de uma refeição por fora.</p>
            </div>
          </div>

          <div className="p-12 md:w-2/5 bg-primary text-white flex flex-col justify-center items-center text-center space-y-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-white/20">
              <Sparkles size={48} />
            </div>

            <div className="space-y-2">
              <p className="text-sm uppercase tracking-widest opacity-80">Investimento Único</p>
              <p className="text-4xl font-serif">{formatCurrency(PROGRAM_DETAILS.price)}</p>
            </div>

            <div className="space-y-2 w-full">
              <p className="text-sm opacity-80 italic">Ou em até</p>
              <p className="text-2xl font-serif">{PROGRAM_DETAILS.installments}x de {formatCurrency(PROGRAM_DETAILS.installmentValue)}</p>
              <p className="text-xs opacity-60">no cartão de crédito</p>
            </div>

            <div className="w-full h-px bg-white/20" />

            <div className="space-y-1">
              <p className="text-sm font-bold">{PROGRAM_DETAILS.pixDiscount}% de Desconto no PIX</p>
              <p className="text-2xl font-serif opacity-90">{formatCurrency(PROGRAM_DETAILS.price * (1 - PROGRAM_DETAILS.pixDiscount/100))}</p>
            </div>

            <a href="#booking" className="w-full bg-white text-primary py-4 rounded-xl font-serif text-lg hover:bg-secondary transition-colors">
              Garantir Vaga
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
