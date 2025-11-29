import React from 'react';
import { Wifi, Wind, Armchair, Box, Video, Coffee, Zap, Droplets } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Features: React.FC = () => {
  const { t } = useLanguage();

  const icons = [
    <Wind className="w-6 h-6" />,
    <Armchair className="w-6 h-6" />,
    <Wifi className="w-6 h-6" />,
    <Box className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <Video className="w-6 h-6" />,
    <Coffee className="w-6 h-6" />,
    <Droplets className="w-6 h-6" />
  ];

  return (
    <section id="features" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">{t.features.section_subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t.features.section_title}</h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            {t.features.section_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.features.items.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-soft hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-100 text-teal-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                {icons[index]}
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};