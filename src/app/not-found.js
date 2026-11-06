import Link from 'next/link';
import LogoMark from '@/components/ui/LogoMark';
import { siteConfig } from '@/config/site';

export const metadata = {
  title: 'Page Not Found — 404',
  description: 'The celestial path you are looking for does not exist on this realm.',
};

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg-feature)',
        position: 'relative',
        overflow: 'hidden',
        padding: '5rem 1.5rem',
      }}
      aria-labelledby="not-found-heading"
    >
      {/* Decorative celestial background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(200, 169, 107, 0.12) 0%, rgba(13, 10, 18, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '680px',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'inline-flex', marginBottom: '2rem' }}>
          <LogoMark size={72} dark={true} />
        </div>

        <p
          style={{
            fontFamily: 'var(--font-heading), serif',
            fontSize: '1rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--gold-text)',
            marginBottom: '0.75rem',
            fontWeight: 600,
          }}
        >
          404 &bull; Path Unknown
        </p>

        <h1
          id="not-found-heading"
          style={{
            fontFamily: 'var(--font-heading), serif',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'var(--feature-text)',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          A Lost Coordinate in the Cosmos
        </h1>

        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--feature-muted)',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto 2.5rem',
          }}
        >
          The page or celestial guidance you sought has shifted orbits or no longer exists.
          Allow us to guide you back to clarity.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '3rem',
          }}
        >
          <Link
            href="/"
            className="btn btn-primary"
            style={{ minWidth: '160px', justifyContent: 'center' }}
          >
            Return to Sanctuary
          </Link>
          <Link
            href="/services"
            className="btn btn-outline-light"
            style={{ minWidth: '160px', justifyContent: 'center' }}
          >
            Explore Services
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline-light"
            style={{ minWidth: '160px', justifyContent: 'center' }}
          >
            Direct Contact
          </Link>
        </div>

        <div
          style={{
            padding: '1.5rem',
            background: 'rgba(255, 248, 239, 0.03)',
            borderRadius: '12px',
            border: '1px solid rgba(200, 169, 107, 0.15)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            color: 'var(--feature-muted)',
            fontSize: '0.875rem',
          }}
        >
          <span>Need immediate Vedic guidance? Reach {siteConfig.practitionerName} directly:</span>
          <Link
            href="/contact"
            style={{ color: 'var(--gold-text)', fontWeight: 600, textDecoration: 'underline' }}
          >
            View Consultation Details &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
