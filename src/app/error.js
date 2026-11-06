'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import LogoMark from '@/components/ui/LogoMark';

export default function ErrorBoundary({ error, reset }) {
  useEffect(() => {
    // Log the error to console for diagnostic monitoring
    console.error('App runtime error caught by boundary:', error);
  }, [error]);

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
      aria-labelledby="error-heading"
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(circle at 50% 40%, rgba(200, 169, 107, 0.1) 0%, rgba(13, 10, 18, 0) 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: '640px',
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
          Planetary Alignment Interrupted
        </p>

        <h1
          id="error-heading"
          style={{
            fontFamily: 'var(--font-heading), serif',
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: 'var(--feature-text)',
            lineHeight: 1.2,
            marginBottom: '1.25rem',
          }}
        >
          Something Went Unexpectedly Astray
        </h1>

        <p
          style={{
            fontSize: '1.0625rem',
            color: 'var(--feature-muted)',
            lineHeight: 1.7,
            maxWidth: '500px',
            margin: '0 auto 2.5rem',
          }}
        >
          A temporary disturbance occurred while loading this page. You can attempt to realign the connection or return to safety.
        </p>

        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
          }}
        >
          <button
            type="button"
            onClick={() => reset()}
            className="btn btn-primary"
            style={{ minWidth: '160px', cursor: 'pointer' }}
          >
            Realign (Try Again)
          </button>
          <Link
            href="/"
            className="btn btn-outline-light"
            style={{ minWidth: '160px', justifyContent: 'center' }}
          >
            Return to Sanctuary
          </Link>
          <Link
            href="/contact"
            className="btn btn-outline-light"
            style={{ minWidth: '160px', justifyContent: 'center' }}
          >
            Contact Practitioner
          </Link>
        </div>
      </div>
    </section>
  );
}
