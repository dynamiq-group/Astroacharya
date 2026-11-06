import FAQAccordion from '@/components/ui/FAQAccordion';
import ContactActions from '@/components/ui/ContactActions';
import { getTelUrl, getWhatsAppUrl, getDisplayPhone } from '@/lib/contact';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: 'Contact',
  description:
    'Contact Dr. Vikas Kaushik via phone or WhatsApp to enquire about astrology, Vastu, Medical Astrology, Kundli Reading, or Pind Dan consultations.',
};

const enquiryFaqs = [
  {
    q: 'How do I arrange a consultation?',
    a: 'Contact Dr. Vikas Kaushik directly via phone or WhatsApp. Please describe your area of interest — for example, Vedic Astrology, Kundli Reading, Vastu Dosha, Medical Astrology, or Pind Dan — and he will advise on next steps.',
  },
  {
    q: 'What information should I have ready when I contact you?',
    a: 'For astrology and Kundli readings, your date of birth, time of birth (as precisely as possible), and place of birth are important. For Vastu, a sketch or floor plan of your space helps. For Pind Dan, ancestral names and gotra where known are useful.',
  },
  {
    q: 'Are consultations available outside India?',
    a: 'Please contact Dr. Kaushik directly to discuss availability for international enquiries.',
  },
  {
    q: 'Is there a fee for the initial enquiry?',
    a: 'Please discuss fees directly with Dr. Kaushik when you make contact. No pricing information is published on this website.',
  },
  {
    q: 'How long does a response typically take?',
    a: 'Response times vary. WhatsApp is generally the faster channel for initial enquiries. Please allow reasonable time for a thoughtful reply.',
  },
  {
    q: 'Can I contact you for Pind Dan arrangements at Gaya?',
    a: 'Yes. Please contact Dr. Kaushik well in advance, especially if planning around Pitru Paksha. Provide the names and details of ancestors where possible.',
  },
];

export default function ContactPage() {
  const telUrl = getTelUrl();
  const waUrl = getWhatsAppUrl();
  const displayPhone = getDisplayPhone();
  const contactConfigured = telUrl || waUrl;

  return (
    <>
      {/* Hero */}
      <section
        style={{ background: 'var(--bg-feature)', paddingBlock: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="contact-page-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(200, 169, 107, 0.07) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow dark-section" style={{ marginBottom: '1.25rem' }}>
            Get In Touch
          </div>
          <h1
            id="contact-page-heading"
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
            Contact Dr. Vikas Kaushik
          </h1>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--feature-muted)',
            maxWidth: '52ch',
            lineHeight: 1.75,
            margin: 0,
          }}>
            Consultations are arranged directly via phone or WhatsApp.
            There is no online booking system on this site.
          </p>
        </div>
      </section>

      {/* Contact body */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* How to contact */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading), serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}>
                How to Reach Us
              </h2>

              {/* Configuration notice (dev only — handled inline) */}
              {!contactConfigured && (
                <div style={{
                  padding: '1.25rem',
                  background: 'rgba(255, 153, 51, 0.07)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: '0.9rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.65,
                  marginBottom: '2rem',
                }}>
                  <strong style={{ color: 'var(--text-primary)', display: 'block', marginBottom: '0.375rem' }}>
                    Contact details coming soon
                  </strong>
                  Phone and WhatsApp contact details will be displayed here once they have been
                  configured. Please check back shortly.
                </div>
              )}

              {/* Phone card */}
              <div style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                padding: '1.5rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '1rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 153, 51, 0.08)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--saffron)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                    Phone Call
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.875rem', maxWidth: 'none' }}>
                    Call directly to speak with Dr. Vikas Kaushik or to enquire about consultation availability.
                  </p>
                  {telUrl && displayPhone ? (
                    <a href={telUrl} className="btn btn--primary btn--sm" aria-label={`Call ${displayPhone}`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                      </svg>
                      {displayPhone}
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      Phone number to be added
                    </span>
                  )}
                </div>
              </div>

              {/* WhatsApp card */}
              <div style={{
                display: 'flex',
                gap: '1.25rem',
                alignItems: 'flex-start',
                padding: '1.5rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                marginBottom: '2rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" fill="#25D366" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.355 5.48.025 12.025.025c3.18.001 6.163 1.24 8.413 3.492 2.25 2.251 3.487 5.247 3.487 8.44 0 6.554-5.329 11.887-11.888 11.887-1.99-.001-3.951-.5-5.688-1.448L.057 24z"/>
                  </svg>
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: 'var(--font-heading), serif', fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.375rem' }}>
                    WhatsApp Enquiry
                  </h3>
                  <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '0.875rem', maxWidth: 'none' }}>
                    Send a WhatsApp message with your question, birth details, or to arrange a consultation time.
                  </p>
                  {waUrl ? (
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--whatsapp btn--sm"
                      aria-label="Contact via WhatsApp"
                    >
                      <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.355 5.48.025 12.025.025c3.18.001 6.163 1.24 8.413 3.492 2.25 2.251 3.487 5.247 3.487 8.44 0 6.554-5.329 11.887-11.888 11.887-1.99-.001-3.951-.5-5.688-1.448L.057 24z"/>
                      </svg>
                      Message on WhatsApp
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
                      WhatsApp number to be added
                    </span>
                  )}
                </div>
              </div>

              {/* Instructions */}
              <div style={{
                padding: '1.5rem',
                background: 'var(--bg-page)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '1.0625rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  Tips for Your Enquiry
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {[
                    'Mention the service you are interested in (e.g. Kundli Reading, Vastu, Pind Dan)',
                    'For astrology enquiries, have your date, time, and place of birth ready',
                    'For Pind Dan, contact well in advance of your intended travel to Gaya',
                    'For Vastu, a floor plan or photographs of the space are helpful',
                  ].map((tip, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.625rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.65,
                    }}>
                      <span style={{ color: 'var(--accent-text)', fontWeight: 700, flexShrink: 0 }}>✦</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div>
              <h2 style={{
                fontFamily: 'var(--font-heading), serif',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '1.5rem',
              }}>
                Enquiry FAQ
              </h2>
              <FAQAccordion items={enquiryFaqs} />

              {/* Services reminder */}
              <div style={{
                marginTop: '2.5rem',
                padding: '1.5rem',
                background: 'var(--bg-feature)',
                borderRadius: 'var(--radius-lg)',
                color: 'var(--feature-text)',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: 'var(--feature-text)',
                  marginBottom: '0.875rem',
                }}>
                  Services Available
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '1.25rem' }}>
                  {[
                    { slug: 'astrology', name: 'Vedic Astrology', icon: '☿' },
                    { slug: 'vastu-dosha', name: 'Vastu Dosha', icon: '🏛' },
                    { slug: 'pind-dan-gaya', name: 'Pind Dan, Gaya', icon: '🪔' },
                    { slug: 'medical-astrology', name: 'Medical Astrology', icon: '☉' },
                    { slug: 'kundli-reading', name: 'Kundli Reading', icon: '◉' },
                  ].map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/services/${s.slug}`}
                        className="link-gold-hover"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          fontSize: '0.9375rem',
                        }}
                      >
                        <span>{s.icon}</span> {s.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="btn btn--outline-ivory btn--sm" style={{ justifyContent: 'center', width: '100%' }}>
                  View Service Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
