
import React, { useState, useEffect } from 'react';
import { Menu, X, Star, Globe } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t.nav.home, href: 'home' },
    { name: t.nav.facilities, href: 'features' },
    { name: t.nav.gallery, href: 'gallery' },
    { name: t.nav.location, href: 'locations' },
    { name: t.nav.contact, href: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['home', 'features', 'gallery', 'locations', 'contact'];
      const scrollPosition = window.scrollY + 150; 

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break; 
          }
        }
      }

      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [t]); // Re-run when language changes to update link names if needed in logic

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      setActiveSection(id);
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'te' : 'en');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            className="flex items-center group cursor-pointer select-none" 
            onClick={(e) => scrollToSection(e, 'home')}
          >
            <div className="relative">
              <Star className="h-8 w-8 text-teal-600 fill-current" />
              <div className="absolute inset-0 bg-teal-600 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
            <div className="ml-3">
              <h1 className="text-2xl font-bold text-gray-900 tracking-wider">AASTHA</h1>
              <p className="text-xs text-teal-600 font-medium tracking-widest uppercase">Believe it, BE IT..</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
             {/* Language Toggle Desktop */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center space-x-1 px-3 py-1 rounded-full bg-gray-100 hover:bg-teal-50 text-gray-700 hover:text-teal-700 transition-colors border border-gray-200"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? 'తెలుగు' : 'English'}</span>
            </button>

            {navLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.href}`}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`
                  relative font-medium transition-colors text-sm uppercase tracking-wide cursor-pointer py-2
                  ${activeSection === link.href ? 'text-teal-600' : 'text-gray-600 hover:text-teal-600'}
                `}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 h-0.5 bg-teal-600 transition-all duration-300 ${activeSection === link.href ? 'w-full' : 'w-0'}`}></span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-full font-medium transition-all shadow-lg shadow-rose-500/30 transform hover:-translate-y-0.5 cursor-pointer"
            >
              {t.nav.join}
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center space-x-3">
             {/* Language Toggle Mobile */}
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center p-2 rounded-full bg-gray-100 text-gray-700 hover:bg-teal-50 hover:text-teal-700 transition-colors"
            >
              <span className="text-xs font-bold mr-1">{language === 'en' ? 'తె' : 'EN'}</span>
              <Globe className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className={`
                block px-3 py-3 text-base font-medium rounded-md cursor-pointer transition-colors border-l-4
                ${activeSection === link.href 
                  ? 'text-teal-700 bg-teal-50 border-teal-600' 
                  : 'text-gray-700 hover:text-teal-600 hover:bg-teal-50 border-transparent'}
              `}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="block w-full text-center bg-rose-500 text-white px-4 py-3 rounded-lg font-bold shadow-md cursor-pointer"
            >
              {t.nav.book}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
