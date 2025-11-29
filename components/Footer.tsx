import React from 'react';
import { useLanguage } from '../LanguageContext';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const { t } = useLanguage();
  return (
    <footer className="bg-gray-900 text-white py-12 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h2 className="text-2xl font-bold tracking-wider mb-1">AASTHA</h2>
                    <p className="text-gray-400 text-sm">Believe it, BE IT..</p>
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                    <button type="button" onClick={onOpenPrivacy} className="hover:text-white transition-colors cursor-pointer">{t.footer.privacy}</button>
                    <button type="button" onClick={onOpenTerms} className="hover:text-white transition-colors cursor-pointer">{t.footer.terms}</button>
                </div>
                <div className="text-gray-500 text-sm mt-4 md:mt-0">
                    &copy; {new Date().getFullYear()} Aastha Study Hall. {t.footer.rights}
                </div>
            </div>
        </div>
    </footer>
  );
};