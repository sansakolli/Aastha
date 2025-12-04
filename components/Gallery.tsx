
import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Gallery: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    {
      url: "/gallery-1.jpg",
      className: "md:col-span-2 md:row-span-2",
      alt: "Aastha Study Hall - Spacious Study Area"
    },
    {
      url: "/gallery-2.jpg",
      className: "md:col-span-1 md:row-span-1",
      alt: "Aastha Study Hall - Study Environment"
    },
    {
      url: "/gallery-3.jpg",
      className: "md:col-span-1 md:row-span-1",
      alt: "Aastha Study Hall - Workspace"
    },
    {
      url: "/gallery-4.jpg",
      className: "md:col-span-1 md:row-span-1",
      alt: "Aastha Study Hall - Focused Learning"
    },
    {
      url: "/gallery-5.png",
      className: "md:col-span-2 md:row-span-1",
      alt: "Aastha Study Hall - Study Facilities"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">{t.gallery.section_subtitle}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">{t.gallery.section_title}</h3>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            {t.gallery.section_desc}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
          {images.map((img, index) => (
            <div 
              key={index} 
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${img.className}`}
              onClick={() => setSelectedImage(img.url)}
            >
              <img 
                src={img.url} 
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-teal-900/0 group-hover:bg-teal-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-flex items-center text-white border border-white/30 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium">
                    <ZoomIn className="w-4 h-4 mr-2" />
                    {t.gallery.view_project}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm animate-fadeIn" onClick={() => setSelectedImage(null)}>
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Gallery Preview" 
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </section>
  );
};
