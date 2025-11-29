import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-12 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2301&ixlib=rb-4.0.3"
          alt="Modern Co-working and Study Space Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40 md:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:w-2/3 xl:w-1/2">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-6 shadow-sm border border-teal-100">
            <span className="w-2 h-2 rounded-full bg-teal-500 mr-2 animate-pulse"></span>
            {t.hero.badge}
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t.hero.title_prefix} <span className="text-teal-600 relative inline-block">
              {t.hero.title_highlight}
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-200 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span> {t.hero.title_suffix}
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            {t.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')} 
              className="flex items-center justify-center bg-rose-500 hover:bg-rose-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg shadow-rose-500/30 transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              {t.hero.cta_primary}
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <a 
              href="#features"
              onClick={(e) => scrollToSection(e, 'features')}
              className="flex items-center justify-center bg-white hover:bg-gray-50 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg shadow-md border border-gray-100 transition-all cursor-pointer"
            >
              {t.hero.cta_secondary}
            </a>
          </div>
          
          <div className="mt-12 flex items-center gap-6 text-sm font-medium text-gray-500">
             <div className="flex items-center gap-2">
               <div className="p-1.5 rounded-full bg-teal-100 text-teal-600">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
               </div>
               {t.hero.feature_access}
             </div>
             <div className="flex items-center gap-2">
               <div className="p-1.5 rounded-full bg-teal-100 text-teal-600">
                 <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
               </div>
               {t.hero.feature_wifi}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};