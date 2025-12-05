import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Locations: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="locations" className="py-20 bg-teal-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">{t.locations.section_subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t.locations.section_title}</h3>
          </div>
          <div className="mt-4 md:mt-0 flex items-center text-rose-500 font-bold bg-white px-4 py-2 rounded-lg shadow-sm">
            <Clock className="w-5 h-5 mr-2" />
            {t.locations.timings}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Branch 1 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="h-48 bg-gray-200 relative">
              <img 
                src="/aastha-branch-01.png"
                alt="MVP Colony Branch" 
                className="w-full h-full object-cover"
              />
               <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {t.locations.mvp.tag}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
               <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{t.locations.mvp.name}</h4>
                  <p className="text-teal-600 text-sm font-medium">Main Branch</p>
                </div>
                <div className="bg-teal-50 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                {t.locations.mvp.address}
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Aastha+Study+Hall+MVP+Colony+Visakhapatnam" 
                target="_blank" 
                rel="noreferrer"
                className="text-center w-full block py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-xl hover:bg-teal-600 hover:text-white transition-colors"
              >
                {t.locations.get_directions}
              </a>
            </div>
          </div>
          {/* Branch 2 */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="h-48 bg-gray-200 relative">
               <img 
                src="/aastha-branch-02.png" 
                alt="Dwaraka Nagar Branch" 
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                {t.locations.dwaraka.tag}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{t.locations.dwaraka.name}</h4>
                  <p className="text-teal-600 text-sm font-medium">Gowtami Complex</p>
                </div>
                <div className="bg-teal-50 p-2 rounded-lg">
                  <MapPin className="w-6 h-6 text-teal-600" />
                </div>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed flex-1">
                {t.locations.dwaraka.address}
              </p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Aastha+Study+Hall+Gowtami+Complex+Dwaraka+Nagar+Visakhapatnam" 
                target="_blank" 
                rel="noreferrer"
                className="text-center w-full block py-3 border-2 border-teal-600 text-teal-600 font-bold rounded-xl hover:bg-teal-600 hover:text-white transition-colors"
              >
                {t.locations.get_directions}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};