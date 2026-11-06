import BlogSection from '@/components/home/BlogSection';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Blog & Insights',
  description:
    'Educational articles on Vedic Astrology, Vastu Shastra, Medical Astrology, Kundli Reading, and ancestral traditions — published by Astroacharya.',
};

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section
        style={{ background: 'var(--bg-feature)', paddingBlock: '5rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="blog-page-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(200, 169, 107, 0.07) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-eyebrow dark-section" style={{ marginBottom: '1.25rem' }}>
            Insights &amp; Education
          </div>
          <h1
            id="blog-page-heading"
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
            Vedic Knowledge Shared
          </h1>
          <p style={{
            fontSize: '1.0625rem',
            color: 'var(--feature-muted)',
            maxWidth: '56ch',
            lineHeight: 1.75,
            margin: 0,
          }}>
            Educational articles on Vedic Astrology, Vastu Shastra, Medical Astrology, and
            ancestral traditions — written to inform, not to prescribe.
          </p>
          <p style={{
            marginTop: '1rem',
            fontSize: '0.875rem',
            color: 'var(--feature-muted)',
            fontStyle: 'italic',
            maxWidth: 'none',
          }}>
            Note: Articles below are editorial starter content. All content is clearly
            informational and does not constitute professional astrological advice.
          </p>
        </div>
      </section>

      <BlogSection showCTA={false} />
    </>
  );
}
