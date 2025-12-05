import React, { useState } from 'react';
import { Phone, Mail, Send, CheckCircle, Briefcase, GraduationCap } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userType, setUserType] = useState('student');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-2">{t.contact.section_subtitle}</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t.contact.section_title}</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              {t.contact.description}
            </p>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-teal-50 rounded-xl border border-teal-100">
                <div className="bg-teal-600 p-3 rounded-full text-white mr-4 shadow-lg shadow-teal-600/20">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t.contact.call_us}</p>
                  <a href="tel:+919912104255" className="text-xl font-bold text-gray-900 hover:text-teal-600 transition-colors block">
                    +91 99121 04255
                  </a>
                  <a href="tel:+919100734106" className="text-lg font-bold text-gray-800 hover:text-teal-600 transition-colors block mt-1">
                    +91 91007 34106
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="bg-gray-800 p-3 rounded-full text-white mr-4">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t.contact.email_us}</p>
                  <a href="mailto:support@aasthastudyhall.com" className="text-lg font-bold text-gray-900 hover:text-teal-600 transition-colors">
                    support@aasthastudyhall.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
             {/* Decorative Background Blob */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

            <h4 className="text-2xl font-bold text-gray-900 mb-6 relative">{t.contact.form_title}</h4>
            
            {submitted ? (
              <div className="h-80 flex flex-col items-center justify-center text-center animate-fadeIn">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h5 className="text-xl font-bold text-gray-900 mb-2">{t.contact.form_success_title}</h5>
                <p className="text-gray-600">{t.contact.form_success_desc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labels.name}</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder={t.contact.placeholders.name}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labels.phone}</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                    placeholder={t.contact.placeholders.phone}
                  />
                </div>
                
                {/* User Type Selector */}
                <div>
                   <label className="block text-sm font-medium text-gray-700 mb-2">{t.contact.labels.userType}</label>
                   <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setUserType('student')}
                        className={`flex items-center justify-center p-3 rounded-xl border transition-all ${userType === 'student' ? 'bg-teal-50 border-teal-600 text-teal-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-teal-300'}`}
                      >
                        <GraduationCap className={`w-5 h-5 mr-2 ${userType === 'student' ? 'text-teal-600' : 'text-gray-400'}`} />
                        {t.contact.options.student}
                      </button>
                      <button
                        type="button"
                        onClick={() => setUserType('professional')}
                        className={`flex items-center justify-center p-3 rounded-xl border transition-all ${userType === 'professional' ? 'bg-teal-50 border-teal-600 text-teal-700 font-bold' : 'bg-gray-50 border-gray-200 text-gray-600 hover:border-teal-300'}`}
                      >
                        <Briefcase className={`w-5 h-5 mr-2 ${userType === 'professional' ? 'text-teal-600' : 'text-gray-400'}`} />
                        <span className="text-sm">{t.contact.options.professional}</span>
                      </button>
                   </div>
                </div>

                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700 mb-1">{t.contact.labels.branch}</label>
                  <select 
                    id="branch"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 outline-none transition-all"
                  >
                    <option value="dwarakanagar">{t.locations.dwaraka.name}</option>
                    <option value="mvp">{t.locations.mvp.name}</option>
                  </select>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-teal-600/30 flex items-center justify-center transition-all transform active:scale-95 cursor-pointer"
                >
                  {t.contact.labels.submit}
                  <Send className="w-5 h-5 ml-2" />
                </button>
                <p className="text-xs text-gray-400 text-center mt-4">{t.contact.labels.privacy}</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};