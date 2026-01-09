
import React from 'react';
import { WHATSAPP } from '../lib/constants';

const FloatingWhatsApp = () => {
  const waUrl = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.defaultMessage)}`;

  return (
    <a 
      href={waUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-[100] bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group"
    >
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-foreground text-sm font-medium py-2 px-4 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block border border-border">
        Fale conosco pelo WhatsApp
      </div>
      <svg 
        viewBox="0 0 24 24" 
        className="w-8 h-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.187-2.59-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.538-2.961-2.654-.087-.116-.708-.941-.708-1.795 0-.855.445-1.274.603-1.446.159-.171.348-.214.464-.214.116 0 .232.001.333.006.109.004.258-.041.405.31.144.342.491 1.196.535 1.284.044.088.073.19.014.306-.059.116-.088.19-.174.288-.088.1-.185.223-.264.3-.088.087-.18.182-.077.359.103.177.456.752.979 1.217.673.599 1.242.786 1.417.874.174.087.276.073.377-.044.102-.116.435-.506.551-.68.116-.174.232-.145.39-.087.159.058 1.013.477 1.187.564.174.087.29.13.332.202.043.073.043.423-.102.827z"/>
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
