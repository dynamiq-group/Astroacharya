'use client';

import ContactActions from '@/components/ui/ContactActions';
import { useLanguage } from '@/context/LanguageContext';

const MANDALA_RINGS = [90, 70, 50, 30];
const MANDALA_SPOKES = Array.from({ length: 12 }, (_, index) => index * 30);
const MANDALA_PETALS = Array.from({ length: 8 }, (_, index) => index * 45);

function RotatingMandala() {
  return (
    <div className="hero__mandala" aria-hidden="true">
      <svg
        className="hero__mandala-svg"
        width="620"
        height="620"
        viewBox="-100 -100 200 200"
        fill="none"
        focusable="false"
      >
        <g stroke="var(--hero-mandala-color)" strokeWidth="0.7">
          {MANDALA_RINGS.map((radius) => (
            <circle key={radius} r={radius} />
          ))}
          {MANDALA_SPOKES.map((angle) => (
            <line
              key={angle}
              x1="0"
              y1="0"
              x2="90"
              y2="0"
              transform={`rotate(${angle})`}
            />
          ))}
          {MANDALA_PETALS.map((angle) => (
            <circle
              key={angle}
              cx="60"
              cy="0"
              r="15"
              transform={`rotate(${angle})`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const { language, t } = useLanguage();

  const trustDisciplines = language === 'hi' ? [
    { icon: '☿', label: 'वैदिक ज्योतिष' },
    { icon: '🏛', label: 'वास्तु शास्त्र' },
    { icon: '🪔', label: 'पिंडदान, गया जी' },
    { icon: '◉', label: 'कुंडली मिलान' },
    { icon: '☉', label: 'चिकित्सा ज्योतिष' },
  ] : [
    { icon: '☿', label: 'Vedic Jyotish' },
    { icon: '🏛', label: 'Vastu Shastra' },
    { icon: '🪔', label: 'Pind Dan, Gaya' },
    { icon: '◉', label: 'Kundli Reading' },
    { icon: '☉', label: 'Medical Astrology' },
  ];

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <RotatingMandala />

      <div className="container hero__container">
        <div className="hero__content">
          <div className="badge badge--gold" style={{ marginBottom: '1.75rem' }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: 'var(--saffron)',
              display: 'inline-block',
              flexShrink: 0,
            }} />
            {t('hero.badge', 'Vedic Astrology & Spiritual Consultation')}
          </div>

          <h1
            id="hero-heading"
            style={{
              fontSize: 'clamp(2.25rem, 5vw + 1rem, 3.75rem)',
              fontFamily: 'var(--font-heading), serif',
              fontWeight: 800,
              color: 'var(--feature-text)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem',
            }}
          >
            {language === 'hi' ? (
              <>
                {t('hero.titleLine1', 'ब्रह्मांडीय ज्ञान से पाएं')}
                <br />
                <span style={{ color: 'var(--accent-text)' }}>
                  {t('hero.titleHighlight', 'सटीक मार्गदर्शन')}
                </span>
              </>
            ) : (
              <>
                Ancient Wisdom.
                <br />
                <span style={{ color: 'var(--accent-text)' }}>A Clearer Path</span>
                <br />
                Forward.
              </>
            )}
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 1.5vw + 0.5rem, 1.1875rem)',
            color: 'var(--feature-muted)',
            lineHeight: 1.75,
            marginBottom: '2.25rem',
            maxWidth: '52ch',
          }}>
            {t('hero.subtitle', 'Dr. Vikas Kaushik offers personalised consultations in Vedic Astrology, Vastu Dosha, Medical Astrology, Kundli Reading, and Pind Dan — rooted in classical Jyotish tradition and offered with contemporary clarity.')}
          </p>

          <ContactActions size="lg" dark />

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginTop: '3rem',
          }}>
            <div style={{ flex: 1, height: '1px', background: 'rgba(200, 169, 107, 0.2)' }} />
            <span style={{ fontSize: '1rem', color: 'rgba(200, 169, 107, 0.5)' }}>✦</span>
            <div style={{ flex: 1, height: '1px', background: 'rgba(200, 169, 107, 0.2)' }} />
          </div>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            marginTop: '1.75rem',
          }}>
            {trustDisciplines.map((item) => (
              <div key={item.label} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.8125rem',
                fontWeight: 500,
                color: 'var(--feature-muted)',
              }}>
                <span style={{ fontSize: '0.875rem' }}>{item.icon}</span>
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
