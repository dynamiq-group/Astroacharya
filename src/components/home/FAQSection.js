'use client';

import Link from 'next/link';
import FAQAccordion from '@/components/ui/FAQAccordion';
import { useLanguage } from '@/context/LanguageContext';

const questions = {
  en: [
    { q: 'How do I book a consultation?', a: 'Use the Contact page or the WhatsApp option below to enquire about a consultation with Dr. Vikas Kaushik. Share the service you are interested in and your preferred timing so availability can be confirmed.' },
    { q: 'What details should I prepare for a Kundli reading?', a: 'Please have your birth date, birth time and birthplace ready, along with the questions you would like to discuss. If you have an existing birth chart, you can share it when arranging your consultation.' },
    { q: 'What if I do not know my exact birth time?', a: 'Mention this when you enquire, and share how certain you are about the time you have. The practitioner can explain which aspects of a reading may be limited and discuss the appropriate next steps.' },
    { q: 'Which services can I enquire about?', a: 'You can enquire about Vedic Astrology, Kundli Reading, Vastu Dosha consultation, Medical Astrology consultation, and Pind Dan or ancestral rites at Gaya. Visit the Services page for details about each offering.' },
    { q: 'Can I arrange a consultation over the phone?', a: 'Phone consultations are available by appointment. Contact us to discuss your query, preferred timing and the arrangements for your session.' },
    { q: 'How can I find out the consultation fee?', a: 'Contact us with the service you require to confirm the fee, session duration and availability before booking. These details are discussed directly when arranging your appointment.' },
  ],
  hi: [
    { q: 'मैं परामर्श कैसे बुक कर सकता हूँ?', a: 'डॉ. विकास कौशिक से परामर्श के लिए संपर्क पृष्ठ या नीचे दिए गए व्हाट्सऐप विकल्प का उपयोग करें। अपनी इच्छित सेवा और सुविधाजनक समय बताएं ताकि उपलब्धता की पुष्टि की जा सके।' },
    { q: 'कुंडली अध्ययन के लिए कौन-सी जानकारी तैयार रखनी चाहिए?', a: 'अपनी जन्म तिथि, जन्म समय और जन्म स्थान के साथ वे प्रश्न तैयार रखें जिन पर आप चर्चा करना चाहते हैं। यदि आपके पास पहले से जन्म कुंडली है, तो परामर्श तय करते समय उसे साझा कर सकते हैं।' },
    { q: 'यदि मुझे अपना सही जन्म समय नहीं पता हो तो क्या करें?', a: 'पूछताछ करते समय यह बात बताएं और उपलब्ध जन्म समय की सटीकता के बारे में जानकारी दें। परामर्श में यह स्पष्ट किया जाएगा कि अध्ययन के किन पहलुओं की सीमाएं हो सकती हैं और आगे क्या करना उचित होगा।' },
    { q: 'मैं किन सेवाओं के बारे में पूछताछ कर सकता हूँ?', a: 'आप वैदिक ज्योतिष, कुंडली अध्ययन, वास्तु दोष परामर्श, चिकित्सा ज्योतिष परामर्श तथा गया में पिंडदान और पितृ कर्म के बारे में पूछताछ कर सकते हैं। प्रत्येक सेवा की जानकारी के लिए सेवा पृष्ठ देखें।' },
    { q: 'क्या फोन पर परामर्श लिया जा सकता है?', a: 'पूर्व निर्धारित समय पर फोन पर परामर्श उपलब्ध है। अपने प्रश्न, सुविधाजनक समय और परामर्श की व्यवस्था के बारे में चर्चा करने के लिए हमसे संपर्क करें।' },
    { q: 'परामर्श शुल्क की जानकारी कैसे मिलेगी?', a: 'बुकिंग से पहले शुल्क, परामर्श की अवधि और उपलब्धता की पुष्टि के लिए अपनी आवश्यक सेवा बताकर संपर्क करें। ये विवरण समय निर्धारित करते हुए सीधे साझा किए जाते हैं।' },
  ],
};

export default function FAQSection() {
  const { language } = useLanguage();
  const hindi = language === 'hi';

  return (
    <section id="frequently-asked-questions" className="section" aria-labelledby="home-faq-heading" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border-subtle)' }}>
      <div className="container">
        <div style={{ maxWidth: '850px', marginInline: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="section-eyebrow" style={{ justifyContent: 'center' }}>{hindi ? 'आपके प्रश्न, हमारे उत्तर' : 'A little clarity before you begin'}</span>
            <h2 id="home-faq-heading" className="section-title">{hindi ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}</h2>
            <p style={{ marginInline: 'auto' }}>{hindi ? 'परामर्श, तैयारी और बुकिंग से जुड़े सामान्य प्रश्नों के उत्तर।' : 'Helpful answers about consultations, what to prepare and how to book.'}</p>
          </div>
          <FAQAccordion items={questions[hindi ? 'hi' : 'en']} />
          <p style={{ textAlign: 'center', margin: '2rem auto 0', fontSize: '.9375rem' }}>
            {hindi ? 'कुछ और पूछना चाहते हैं? ' : 'Still have a question? '}
            <Link href="/contact" style={{ color: 'var(--accent-text)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '4px' }}>{hindi ? 'हमसे संपर्क करें' : 'Get in touch'}</Link>
          </p>
        </div>
      </div>
    </section>
  );
}
