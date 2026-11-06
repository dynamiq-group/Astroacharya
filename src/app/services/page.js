import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Services',
  description:
    'Explore all consultation services offered by Dr. Vikas Kaushik: Vedic Astrology, Vastu Dosha, Pind Dan at Gaya, Medical Astrology, and Kundli Reading.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: 'var(--bg-feature)', paddingBlock: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="services-page-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(200, 169, 107, 0.07) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow dark-section" style={{ marginBottom: '1.25rem' }}>
            What We Offer
          </div>
          <h1
            id="services-page-heading"
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
            Services &amp; Consultations
          </h1>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--feature-muted)',
            maxWidth: '56ch',
            lineHeight: 1.75,
            margin: 0,
          }}>
            Each service is drawn from classical Vedic traditions and offered with
            professional care, honest guidance, and individual attention.
          </p>
        </div>
      </section>

      <ServicesSection showCTA={false} />
      <ContactSection />
    </>
  );
}
