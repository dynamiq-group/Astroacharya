'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ApproachSection() {
  const { language, t } = useLanguage();

  const principles = language === 'hi' ? [
    {
      icon: '📜',
      title: 'प्रामाणिक शास्त्रीय आधार',
      body: 'बृहत्पाराशर होरा शास्त्र और प्राचीन फलित ग्रंथों पर आधारित भविष्यकथन, बिना किसी अंधविश्वास या भ्रम के।',
    },
    {
      icon: '🔍',
      title: 'व्यक्तिगत सूक्ष्म विश्लेषण',
      body: 'सामान्य राशि फल नहीं, बल्कि आपके जन्म लग्न, नवांश (D9), दशमांश (D10) और विंशोत्तरी दशा का सटीक अध्ययन।',
    },
    {
      icon: '⚖️',
      title: 'सत्यनिष्ठ एवं यथार्थपरक दृष्टिकोण',
      body: 'अतिशयोक्तिपूर्ण दावों या चमत्कारों से परे, व्यावहारिक जीवन में मार्ग प्रशस्त करने वाली संतुलित सलाह।',
    },
    {
      icon: '🙏',
      title: 'सनातन परंपरा का आदर',
      body: 'गया जी में पिंडदान, पितृ शांति एवं वैदिक अनुष्ठान पूर्ण विधि-विधान, शुद्धता और श्रद्धा के साथ संपन्न कराए जाते हैं।',
    },
  ] : [
    {
      icon: '📜',
      title: 'Rooted in Classical Texts',
      body: 'Consultations draw on classical Vedic texts and established Jyotish traditions — not simplified pop-astrology.',
    },
    {
      icon: '🔍',
      title: 'Individualised Reading',
      body: 'Each birth chart and personal situation is unique. Readings address the specific person, not generic archetypes.',
    },
    {
      icon: '⚖️',
      title: 'Honest and Measured',
      body: 'Guidance is offered with appropriate qualification. No unverifiable promises or guaranteed outcomes are made.',
    },
    {
      icon: '🙏',
      title: 'Respectful Tradition',
      body: 'Spiritual services, including Pind Dan and ancestral rites, are conducted with sincere respect for their cultural significance.',
    },
  ];

  return (
    <section
      className="section"
      aria-labelledby="approach-heading"
      style={{ background: 'var(--bg-surface)' }}
    >
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-eyebrow" style={{ justifyContent: 'center' }}>
            {t('approach.tag', 'Our Approach')}
          </div>
          <h2 id="approach-heading" className="section-title">
            {t('approach.heading', 'How Consultations Are Conducted')}
          </h2>
          <p className="section-description" style={{ marginInline: 'auto', textAlign: 'center' }}>
            {language === 'hi'
              ? 'वैदिक परंपरा की गहराई को बनाए रखते हुए व्यावहारिक और आधुनिक जीवन में स्पष्टता प्रदान करने वाला दृष्टिकोण।'
              : 'A thoughtful, measured approach that honours the depth of Vedic tradition while remaining accessible and practical.'}
          </p>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {principles.map((p) => (
            <div
              key={p.title}
              style={{
                padding: '2rem',
                background: 'var(--bg-page)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                transition: 'all var(--transition)',
              }}
            >
              <div style={{ fontSize: '1.875rem', marginBottom: '1rem' }} aria-hidden="true">
                {p.icon}
              </div>
              <h3 style={{
                fontFamily: 'var(--font-heading), serif',
                fontSize: '1.0625rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '0.625rem',
              }}>
                {p.title}
              </h3>
              <p style={{
                fontSize: '0.9375rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                margin: 0,
                maxWidth: 'none',
              }}>
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
