
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { WHATSAPP } from '../lib/constants';

const BookingForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Redirect to WhatsApp
      const waUrl = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(
        `Olá! Sou ${formData.name}. Gostaria de agendar uma consulta.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\nMotivo: ${formData.message}`
      )}`;
      window.open(waUrl, '_blank');
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-card">
      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-background rounded-[3rem] p-12 border border-border shadow-elevated">
          {isSuccess ? (
            <div className="text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={40} />
              </div>
              <h3 className="text-3xl font-serif">Solicitação Enviada!</h3>
              <p className="text-foreground/70 leading-relaxed">
                Você será redirecionado para o WhatsApp agora para confirmar seu horário. Se não aconteceu automaticamente, clique no botão abaixo.
              </p>
              <button 
                onClick={() => setIsSuccess(false)}
                className="text-primary font-serif border-b border-primary"
              >
                Voltar ao formulário
              </button>
            </div>
          ) : (
            <>
              <div className="text-center space-y-4 mb-12">
                <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Agendamento</h2>
                <h3 className="text-4xl font-serif">Inicie sua transformação</h3>
                <p className="text-foreground/70">Preencha os dados abaixo e entraremos em contato.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-foreground/60 ml-1">Nome Completo</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Ex: Maria Oliveira"
                      className="w-full bg-secondary/20 border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-foreground/60 ml-1">Telefone (WhatsApp)</label>
                    <input 
                      required
                      type="tel" 
                      placeholder="(81) 99999-9999"
                      className="w-full bg-secondary/20 border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-widest text-foreground/60 ml-1">Seu melhor E-mail</label>
                  <input 
                    required
                    type="email" 
                    placeholder="exemplo@email.com"
                    className="w-full bg-secondary/20 border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-medium uppercase tracking-widest text-foreground/60 ml-1">Qual seu principal objetivo?</label>
                  <textarea 
                    placeholder="Conte um pouco sobre suas dificuldades e metas..."
                    className="w-full bg-secondary/20 border border-border rounded-xl px-5 py-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32 resize-none"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white py-5 rounded-2xl font-serif text-xl flex items-center justify-center gap-3 hover:opacity-90 disabled:opacity-50 transition-all shadow-elevated"
                >
                  {isSubmitting ? "Enviando..." : "Confirmar Pré-Agendamento"}
                  {!isSubmitting && <Send size={20} />}
                </button>
                
                <p className="text-center text-xs text-foreground/40 px-8">
                  Seus dados estão protegidos. Ao enviar, você concorda em ser contatado por nossa equipe de atendimento.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
