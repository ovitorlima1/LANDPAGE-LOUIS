
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'O que inclui', href: '#included' },
    { label: 'Sobre', href: '#about' },
    { label: 'Resultados', href: '#results' },
    { label: 'Investimento', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-soft" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-serif text-2xl font-bold text-primary tracking-tight">
          Dr. Louis Goldstein
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-sm font-medium hover:text-primary transition-colors uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-primary text-white px-6 py-2.5 rounded-full font-serif text-sm hover:opacity-90 transition-opacity"
          >
            Agendar Agora
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          {menuItems.map((item) => (
            <a 
              key={item.href} 
              href={item.href} 
              className="text-lg font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#booking" 
            className="bg-primary text-white py-4 rounded-xl font-serif text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Agendar Agora
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
