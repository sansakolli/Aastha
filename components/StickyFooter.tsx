import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const StickyFooter: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full z-50 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.1)] flex">
      <a 
        href="https://wa.me/919912104255" 
        target="_blank" 
        rel="noreferrer"
        className="flex-1 bg-green-500 hover:bg-green-600 text-white py-4 flex items-center justify-center font-bold text-sm transition-colors"
      >
        <MessageCircle className="w-5 h-5 mr-2" />
        {t.sticky.whatsapp}
      </a>
      <a 
        href="tel:+919912104255" 
        className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-4 flex items-center justify-center font-bold text-sm transition-colors"
      >
        <Phone className="w-5 h-5 mr-2" />
        {t.sticky.call}
      </a>
    </div>
  );
};