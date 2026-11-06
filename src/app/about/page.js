import ContactSection from '@/components/home/ContactSection';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: `About ${siteConfig.practitionerName}`,
  description: `Learn about Dr. Vikas Kaushik — Vedic astrologer, Vastu consultant, Medical Astrology consultant, and facilitator of Pind Dan rites at Gaya, Bihar.`,
};

export default function AboutPage() {
  const areas = [
    { name: 'Vedic Astrology', description: 'Classical Jyotish — birth chart interpretation, Dasha analysis, and advisory guidance', icon: '☿' },
    { name: 'Vastu Dosha', description: 'Assessment of spatial energy and practical, non-invasive remedial suggestions', icon: '🏛' },
    { name: 'Pind Dan, Gaya', description: 'Facilitation of ancestral Shraddha rites at Vishnupad Temple, Gaya, Bihar', icon: '🪔' },
    { name: 'Medical Astrology', description: 'Traditional birth chart interpretation focused on health and well-being', icon: '☉' },
    { name: 'Kundli Reading', description: 'Detailed, personalised birth chart reading across all twelve houses and planetary periods', icon: '◉' },
  ];

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-feature)',
          paddingBlock: '5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-labelledby="about-page-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 60% 80% at 80% 30%, rgba(200, 169, 107, 0.08) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow dark-section" style={{ marginBottom: '1.25rem' }}>
            About the Practitioner
          </div>
          <h1
            id="about-page-heading"
            style={{
              fontFamily: 'var(--font-heading), serif',
              fontSize: 'clamp(2rem, 4vw + 1rem, 3.25rem)',
              fontWeight: 800,
              color: 'var(--feature-text)',
              letterSpacing: '-0.02em',
              marginBottom: '1rem',
              lineHeight: 1.15,
            }}
          >
            Dr. Vikas Kaushik
          </h1>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--feature-muted)',
            maxWidth: '56ch',
            lineHeight: 1.75,
            margin: 0,
          }}>
            Vedic Astrologer, Vastu Shastra Consultant, Medical Astrology Consultant,
            and Facilitator of Ancestral Rites at Gaya
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="section" aria-labelledby="biography-heading">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Portrait placeholder */}
            <div>
              <div style={{
                width: '100%',
                maxWidth: '360px',
                aspectRatio: '3 / 4',
                borderRadius: 'var(--radius-xl)',
                background: 'linear-gradient(145deg, rgba(200, 169, 107, 0.08), rgba(255, 153, 51, 0.04))',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}>
                <svg viewBox="0 0 200 200" width="120" height="120" opacity="0.25" aria-hidden="true">
                  <circle cx="100" cy="100" r="90" stroke="#C8A96B" strokeWidth="1" fill="none" strokeDasharray="4 4" />
                  <circle cx="100" cy="100" r="60" stroke="#FF9933" strokeWidth="0.75" fill="none" />
                  <circle cx="100" cy="100" r="18" fill="rgba(255, 153, 51, 0.35)" />
                  {[0, 60, 120, 180, 240, 300].map((a) => {
                    const r = a * Math.PI / 180;
                    return <line key={a} x1={100 + 22 * Math.cos(r)} y1={100 + 22 * Math.sin(r)} x2={100 + 55 * Math.cos(r)} y2={100 + 55 * Math.sin(r)} stroke="#C8A96B" strokeWidth="0.75" opacity="0.6" />;
                  })}
                </svg>
                <p style={{
                  fontSize: '0.75rem',
                  color: 'var(--border-medium)',
                  textAlign: 'center',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0 2rem',
                }}>
                  Portrait to be added
                </p>
              </div>

              {/* Practice areas quick list */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                  letterSpacing: '0.02em',
                }}>
                  Areas of Practice
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {areas.map((a) => (
                    <li key={a.name} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--accent-text)', fontWeight: 700 }}>✓</span>
                      {a.name}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link href="/contact" className="btn btn--primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Enquire About a Consultation
                  </Link>
                </div>
              </div>
            </div>

            {/* Biography text */}
            <div>
              <h2
                id="biography-heading"
                className="section-title"
                style={{ marginBottom: '1.5rem' }}
              >
                Biography
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 'none' }}>
                  Dr. Vikas Kaushik is a practitioner of Vedic Astrology (Jyotish Shastra),
                  Vastu Shastra, and Medical Astrology. His work is grounded in the classical texts
                  and living traditions of India's spiritual and intellectual heritage.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 'none' }}>
                  He approaches consultations with a commitment to honest, measured guidance —
                  offering perspective and reflection rather than unfounded predictions or
                  guaranteed outcomes. Each consultation is treated as an individual engagement,
                  taking into account the specific circumstances and questions of the person he
                  is meeting with.
                </p>
                <p style={{ fontSize: '1.0625rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: 'none' }}>
                  Beyond astrological consultations, Dr. Kaushik facilitates Pind Dan —
                  the classical Hindu ancestral rite — at Gaya, Bihar, one of the most
                  sacred pilgrimage sites for Shraddha ceremonies in India. This service
                  is offered with deep respect for its religious and cultural significance.
                </p>

                {/* Disclaimer note */}
                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(255, 153, 51, 0.06)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.375rem' }}>
                    Editorial note
                  </strong>
                  Further biographical information — including qualifications, background, and
                  professional journey — will be added to this page once details have been
                  supplied and verified. This website does not invent credentials or
                  personal history.
                </div>
              </div>

              {/* Service areas detail */}
              <h2 style={{
                fontFamily: 'var(--font-heading), serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginTop: '3rem',
                marginBottom: '1.5rem',
              }}>
                Areas of Practice
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {areas.map((a) => (
                  <div
                    key={a.name}
                    style={{
                      display: 'flex',
                      gap: '1.125rem',
                      padding: '1.25rem',
                      background: 'var(--bg-page)',
                      border: '1px solid var(--border-subtle)',
                      borderRadius: 'var(--radius-md)',
                    }}
                  >
                    <div className="service-icon" style={{ width: '44px', height: '44px' }}>
                      {a.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-heading), serif',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.25rem',
                      }}>
                        {a.name}
                      </h3>
                      <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', margin: 0, maxWidth: 'none' }}>
                        {a.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <Link href="/services" className="btn btn--outline btn--lg">
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
