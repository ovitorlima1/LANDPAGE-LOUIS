
import React from 'react';
import { CONTACT, DOCTOR_INFO } from '../lib/constants';
import { Instagram, Linkedin, Facebook, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-bold text-primary">Dr. Louis Goldstein</h4>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Consultoria médica especializada em emagrecimento, performance física e longevidade. Referência em medicina integrada em Recife.
            </p>
            <div className="flex gap-4">
              <a href={CONTACT.social.instagram} className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Instagram size={18} />
              </a>
              <a href={CONTACT.social.linkedin} className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href={CONTACT.social.facebook} className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all">
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h5 className="font-serif text-lg">Links Rápidos</h5>
            <ul className="space-y-4 text-sm text-foreground/60">
              <li><a href="#included" className="hover:text-primary transition-colors">O que está incluso</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Sobre o Dr. Louis</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Casos de Sucesso</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Investimento</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div className="space-y-6 lg:col-span-2">
            <h5 className="font-serif text-lg">Contato e Localização</h5>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-primary flex-shrink-0 mt-1" />
                  <span className="text-sm text-foreground/60 leading-relaxed">
                    {CONTACT.address}<br />
                    {CONTACT.city}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/60">{CONTACT.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/60">{CONTACT.phone}</span>
                </div>
              </div>
              <div className="space-y-2">
                <h6 className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/40">Horário de Atendimento</h6>
                <p className="text-sm text-foreground/60">{CONTACT.hours}</p>
                <p className="text-xs text-foreground/40 mt-4 italic">Responsável Técnico: {DOCTOR_INFO.name} - {DOCTOR_INFO.crm}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-foreground/40">
          <p>© 2026 Dr. Louis Goldstein. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground/60 transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-foreground/60 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
