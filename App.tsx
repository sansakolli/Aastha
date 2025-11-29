
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Locations } from './components/Locations';
import { Contact } from './components/Contact';
import { StickyFooter } from './components/StickyFooter';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { LanguageProvider, useLanguage } from './LanguageContext';

// Helper component to access hook for content
const MainContent = () => {
  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);
  const { language, t } = useLanguage();

  const PRIVACY_CONTENT = (
    <div className="space-y-4">
        {language === 'en' ? (
          <>
            <p>At Aastha Study Hall, we prioritize the privacy of our students. This Privacy Policy outlines how we handle your personal information.</p>
            <h4 className="font-bold text-gray-900 text-lg">1. Information Collection</h4>
            <p>We collect basic information such as name, phone number, and branch preference purely for membership and security purposes. We do not sell your data to third parties.</p>
            <h4 className="font-bold text-gray-900 text-lg">2. Security & Surveillance</h4>
            <p>For the safety of all students, our premises are under 24/7 CCTV surveillance. Footage is kept strictly confidential and accessed only by authorized management for security reviews.</p>
            <h4 className="font-bold text-gray-900 text-lg">3. Contact</h4>
            <p>We may contact you via phone or WhatsApp regarding your membership renewal or study hall announcements.</p>
          </>
        ) : (
          <>
             <p>ఆస్తా స్టడీ హాల్‌లో, మేము మా విద్యార్థుల గోప్యతకు ప్రాధాన్యత ఇస్తాము.</p>
             <h4 className="font-bold text-gray-900 text-lg">1. సమాచార సేకరణ</h4>
             <p>మేము మీ పేరు, ఫోన్ నంబర్ మరియు బ్రాంచ్ వివరాలను కేవలం సభ్యత్వం మరియు భద్రతా ప్రయోజనాల కోసం మాత్రమే సేకరిస్తాము. మేము మీ డేటాను ఇతరులకు విక్రయించము.</p>
             <h4 className="font-bold text-gray-900 text-lg">2. భద్రత & నిఘా</h4>
             <p>విద్యార్థుల భద్రత కోసం, మా ప్రాంగణంలో 24/7 CCTV నిఘా ఉంటుంది. ఫుటేజ్ గోప్యంగా ఉంచబడుతుంది.</p>
             <h4 className="font-bold text-gray-900 text-lg">3. సంప్రదించుట</h4>
             <p>మీ మెంబర్‌షిప్ రెన్యూవల్ లేదా స్టడీ హాల్ ప్రకటనల గురించి మేము మిమ్మల్ని ఫోన్ లేదా వాట్సాప్ ద్వారా సంప్రదించవచ్చు.</p>
          </>
        )}
    </div>
  );

  const TERMS_CONTENT = (
    <div className="space-y-4">
        {language === 'en' ? (
          <>
            <p>By joining Aastha Study Hall, you agree to the following terms and conditions to ensure a productive environment for everyone:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-teal-600">
                <li><strong>Silence:</strong> Complete silence must be maintained in the study area.</li>
                <li><strong>Fees:</strong> Membership fees are non-refundable and non-transferable.</li>
                <li><strong>ID Cards:</strong> Access cards/IDs must be carried at all times.</li>
                <li><strong>Cleanliness:</strong> Please keep your desk and common areas clean.</li>
                <li><strong>Misconduct:</strong> Management reserves the right to terminate admission immediately for misconduct or disturbance without refund.</li>
                <li><strong>Personal Belongings:</strong> While we have lockers and CCTV, management is not responsible for the loss of personal valuables left unattended.</li>
            </ul>
          </>
        ) : (
           <>
            <p>ఆస్తా స్టడీ హాల్‌లో చేరడం ద్వారా, మీరు ఈ క్రింది నియమ నిబంధనలకు అంగీకరిస్తున్నారు:</p>
            <ul className="list-disc pl-5 space-y-2 marker:text-teal-600">
                <li><strong>నిశ్శబ్దం:</strong> స్టడీ ఏరియాలో పూర్తి నిశ్శబ్దం పాటించాలి.</li>
                <li><strong>ఫీజులు:</strong> మెంబర్‌షిప్ ఫీజులు తిరిగి ఇవ్వబడవు మరియు బదిలీ చేయబడవు.</li>
                <li><strong>ID కార్డులు:</strong> ఐడి కార్డులు ఎల్లప్పుడూ వెంట ఉంచుకోవాలి.</li>
                <li><strong>శుభ్రత:</strong> దయచేసి మీ డెస్క్ మరియు పరిసరాలను శుభ్రంగా ఉంచుకోండి.</li>
                <li><strong>దుష్ప్రవర్తన:</strong> ఆటంకం కలిగించినా లేదా అసభ్యంగా ప్రవర్తించినా, ఎటువంటి రీఫండ్ లేకుండా అడ్మిషన్ రద్దు చేసే అధికారం మేనేజ్‌మెంట్‌కు ఉంది.</li>
                <li><strong>వ్యక్తిగత వస్తువులు:</strong> మీ వ్యక్తిగత విలువైన వస్తువుల భద్రత మీ బాధ్యత. పోగొట్టుకున్న వస్తువులకు మేనేజ్‌మెంట్ బాధ్యత వహించదు.</li>
            </ul>
           </>
        )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 pb-16 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <Locations />
        <Contact />
      </main>
      
      {/* Desktop Footer with Legal Links */}
      <Footer 
        onOpenPrivacy={() => setModalType('privacy')}
        onOpenTerms={() => setModalType('terms')}
      />

      {/* Mobile Sticky Footer */}
      <StickyFooter />

      {/* Legal Modals */}
      <LegalModal 
        isOpen={modalType === 'privacy'}
        onClose={() => setModalType(null)}
        title={t.footer.privacy}
        content={PRIVACY_CONTENT}
      />

      <LegalModal 
        isOpen={modalType === 'terms'}
        onClose={() => setModalType(null)}
        title={t.footer.terms}
        content={TERMS_CONTENT}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainContent />
    </LanguageProvider>
  );
}

export default App;
