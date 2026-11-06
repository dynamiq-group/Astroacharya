'use client';

import ContactActions from '@/components/ui/ContactActions';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactSection({ message }) {
  const { language, t } = useLanguage();

  const infoCards = language === 'hi' ? [
    {
      icon: '📞',
      title: 'सीधा फोन परामर्श',
      description: 'डॉ. विकास कौशिक से सीधे फोन पर बात करें। परामर्श समय और शुल्क हेतु सीधे संपर्क करें।',
    },
    {
      icon: '💬',
      title: 'व्हाट्सएप पूछताछ',
      description: 'अपना प्रश्न या जन्म विवरण संदेश के माध्यम से भेजें। समय निर्धारण हेतु सबसे सुगम माध्यम।',
    },
    {
      icon: '🌟',
      title: 'शास्त्रोक्त प्रामाणिकता',
      description: 'प्रत्येक परामर्श वैदिक शास्त्रों की मर्यादा और व्यक्तिगत गोपनीयता के साथ दिया जाता है।',
    },
  ] : [
    {
      icon: '📞',
      title: 'Phone Call',
      description: 'Speak directly with Dr. Vikas Kaushik. Phone consultations are available; contact for timing.',
    },
    {
      icon: '💬',
      title: 'WhatsApp Enquiry',
      description: 'Send a message with your query or birth details. Ideal for initial enquiries and scheduling.',
    },
    {
      icon: '🌟',
      title: 'Thoughtful Guidance',
      description: 'Every consultation is approached with respect for the individual and the traditions involved.',
    },
  ];

  return (
    <section
      className="section dark-section"
      aria-labelledby="contact-section-heading"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      {/* Decorative orbs */}
      <div aria-hidden="true">
        <div
          className="celestial-orb"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(255, 153, 51, 0.08) 0%, transparent 70%)',
            left: '-100px',
            top: '-100px',
          }}
        />
        <div
          className="celestial-orb"
          style={{
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(200, 169, 107, 0.07) 0%, transparent 70%)',
            right: '-80px',
            bottom: '-80px',
          }}
        />
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left — text */}
          <div>
            <div className="section-eyebrow dark-section">
              {t('contactSection.tag', 'Get In Touch')}
            </div>
            <h2
              id="contact-section-heading"
              className="section-title"
              style={{ color: 'var(--feature-text)' }}
            >
              {t('contactSection.heading', 'Begin Your Consultation Journey')}
            </h2>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--feature-muted)',
              lineHeight: 1.75,
              marginBottom: '2rem',
              maxWidth: '48ch',
            }}>
              {t('contactSection.subtitle', 'Consultations are scheduled in advance via direct telephone or WhatsApp messaging.')}
            </p>

            <ContactActions
              size="lg"
              dark
              message={message || (language === 'hi' ? 'नमस्ते, मैं डॉ. विकास कौशिक जी से ज्योतिष परामर्श हेतु संपर्क करना चाहता हूँ।' : 'Namaste, I would like to enquire about a consultation with Dr. Vikas Kaushik.')}
            />

            {/* Contact page link */}
            <p style={{
              marginTop: '1.5rem',
              fontSize: '0.9375rem',
              color: 'var(--feature-muted)',
            }}>
              {language === 'hi' ? 'संपूर्ण संपर्क जानकारी एवं समय के लिए ' : 'For more contact options, visit the '}
              <Link
                href="/contact"
                style={{ color: 'var(--gold-text)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}
              >
                {t('contactSection.viewContactPage', 'Contact page')}
              </Link>
              .
            </p>
          </div>

          {/* Right — info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {infoCards.map((item) => (
              <div
                key={item.title}
                style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  padding: '1.375rem',
                  background: 'rgba(255, 248, 239, 0.04)',
                  border: '1px solid rgba(200, 169, 107, 0.12)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'border-color 0.25s',
                }}
              >
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 153, 51, 0.1)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  flexShrink: 0,
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading), serif',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: 'var(--feature-text)',
                    marginBottom: '0.375rem',
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem',
                    color: 'var(--feature-muted)',
                    lineHeight: 1.6,
                    margin: 0,
                  }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
