'use client';

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/config/site';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutIntroSection() {
  const { language, t } = useLanguage();

  return (
    <section
      className="section"
      aria-labelledby="about-intro-heading"
      style={{
        background: 'var(--bg-feature)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200, 169, 107, 0.06) 0%, transparent 60%)',
        }}
      />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Portrait frame */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: 'min(320px, 100%)',
              aspectRatio: '3 / 4',
              borderRadius: 'var(--radius-xl)',
              background: 'linear-gradient(145deg, rgba(200, 169, 107, 0.12), rgba(255, 153, 51, 0.06))',
              border: '1px solid rgba(200, 169, 107, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
            }}>
              <Image
                src="/images/guruji_potrait.webp"
                alt={t('practitionerName', siteConfig.practitionerName)}
                fill
                sizes="(max-width: 640px) 280px, 320px"
                style={{ objectFit: 'cover' }}
              />
              {/* Decorative mandala */}
              <svg viewBox="0 0 200 200" width="140" height="140" opacity="0.3" aria-hidden="true">
                <circle cx="100" cy="100" r="90" stroke="#C8A96B" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="65" stroke="#C8A96B" strokeWidth="0.75" fill="none" />
                <circle cx="100" cy="100" r="40" stroke="#FF9933" strokeWidth="1" fill="none" />
                <circle cx="100" cy="100" r="15" fill="rgba(255, 153, 51, 0.4)" />
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                  const rad = angle * Math.PI / 180;
                  const x1 = 100 + 20 * Math.cos(rad);
                  const y1 = 100 + 20 * Math.sin(rad);
                  const x2 = 100 + 58 * Math.cos(rad);
                  const y2 = 100 + 58 * Math.sin(rad);
                  return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#C8A96B" strokeWidth="0.75" opacity="0.5" />;
                })}
              </svg>
              <div style={{ textAlign: 'center', zIndex: 2 }}>
                <p style={{
                  fontSize: '0.875rem',
                  color: 'var(--gold-text)',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}>
                  {t('practitionerName', siteConfig.practitionerName)}
                </p>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--feature-muted)',
                  margin: '0.25rem 0 0',
                }}>
                  {t('experienceYears', '25+ Years Experience')}
                </p>
              </div>
              {/* Gold frame corners */}
              <div style={{ position: 'absolute', top: '12px', left: '12px', width: '24px', height: '24px', borderTop: '2px solid rgba(200, 169, 107, 0.4)', borderLeft: '2px solid rgba(200, 169, 107, 0.4)' }} />
              <div style={{ position: 'absolute', top: '12px', right: '12px', width: '24px', height: '24px', borderTop: '2px solid rgba(200, 169, 107, 0.4)', borderRight: '2px solid rgba(200, 169, 107, 0.4)' }} />
              <div style={{ position: 'absolute', bottom: '12px', left: '12px', width: '24px', height: '24px', borderBottom: '2px solid rgba(200, 169, 107, 0.4)', borderLeft: '2px solid rgba(200, 169, 107, 0.4)' }} />
              <div style={{ position: 'absolute', bottom: '12px', right: '12px', width: '24px', height: '24px', borderBottom: '2px solid rgba(200, 169, 107, 0.4)', borderRight: '2px solid rgba(200, 169, 107, 0.4)' }} />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <div className="section-eyebrow dark-section">
              {t('aboutSection.tag', 'Meet The Astrologer')}
            </div>
            <h2
              id="about-intro-heading"
              className="section-title"
              style={{ color: 'var(--feature-text)' }}
            >
              {t('practitionerName', siteConfig.practitionerName)}
            </h2>
            <p style={{
              fontSize: '0.875rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'var(--gold-text)',
              marginBottom: '1.25rem',
            }}>
              {t('hero.badge', 'Vedic Astrologer & Spiritual Consultant')}
            </p>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--feature-muted)',
              lineHeight: 1.8,
              marginBottom: '1.25rem',
              maxWidth: 'none',
            }}>
              {t('aboutSection.p1', 'Dr. Vikas Kaushik is a revered practitioner of classical Vedic Astrology (Jyotish Shastra), Vastu Shastra, and sacred rites with over two decades of dedicated consultative practice.')}
            </p>
            <p style={{
              fontSize: '1.0625rem',
              color: 'var(--feature-muted)',
              lineHeight: 1.8,
              marginBottom: '2rem',
              maxWidth: 'none',
            }}>
              {t('aboutSection.p2', 'Every consultation is conducted with deep academic rigor and empathy. Whether navigating career choices, marriage matchmaking, domestic harmony, or spiritual peace, Dr. Kaushik offers authentic remedies rooted in ancient Shastras.')}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/about" className="btn btn--primary">
                {t('aboutSection.readBio', 'Learn More About Dr. Kaushik')} &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
