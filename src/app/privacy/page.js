import { siteConfig } from '@/config/site';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Notice',
  description: `Privacy notice for ${siteConfig.businessName} — how visitor information is handled on this informational website.`,
};

export default function PrivacyPage() {
  const year = 2026;

  return (
    <>
      {/* Hero */}
      <section
        style={{ background: 'var(--bg-feature)', paddingBlock: '4rem', position: 'relative', overflow: 'hidden' }}
        aria-labelledby="privacy-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 50% 70% at 80% 50%, rgba(200, 169, 107, 0.06) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h1
            id="privacy-heading"
            style={{
              fontFamily: 'var(--font-heading), serif',
              fontSize: 'clamp(1.875rem, 3vw + 1rem, 2.75rem)',
              fontWeight: 800,
              color: 'var(--feature-text)',
              letterSpacing: '-0.02em',
              marginBottom: '0.75rem',
              lineHeight: 1.15,
            }}
          >
            Privacy Notice
          </h1>
          <p style={{ fontSize: '0.9375rem', color: 'var(--feature-muted)', margin: 0 }}>
            Last updated: October 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div className="prose">
              <h2>About This Website</h2>
              <p>
                This website, <strong>{siteConfig.businessName}</strong> (the &ldquo;Site&rdquo;), is operated
                as an informational website for Dr. Vikas Kaushik, a practitioner of Vedic Astrology,
                Vastu Shastra, Medical Astrology, and ancestral rites. The Site is operated
                on behalf of Dr. Kaushik by <strong>DYNAMIQ</strong>.
              </p>

              <h2>Information We Collect</h2>
              <p>
                This is an <strong>informational website</strong>. It does not contain any contact forms,
                registration forms, or booking systems. No personal information is collected through the
                Site directly.
              </p>
              <p>
                When visitors use the phone or WhatsApp contact links on this Site, any information shared
                is communicated directly with Dr. Vikas Kaushik through those respective channels (a phone
                call or WhatsApp messaging service). This Site does not intercept, store, or process that
                communication.
              </p>

              <h2>Automatically Collected Data</h2>
              <p>
                Like most websites, this Site may collect certain technical information automatically when
                you visit, including:
              </p>
              <ul>
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Pages visited and time of visit</li>
                <li>Referring URL</li>
              </ul>
              <p>
                This information is collected through standard web server logs and, if analytics services
                are added to this site in future, through those services. We will update this notice if
                analytics or tracking services are implemented.
              </p>

              <h2>Cookies</h2>
              <p>
                This Site may use essential functional cookies required for normal website operation
                (for example, to remember navigation state). No advertising or behavioural tracking
                cookies are currently deployed. If this changes, this notice will be updated.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                This Site is hosted on infrastructure provided by third-party cloud services. Standard
                hosting terms and privacy practices of those providers apply. The WhatsApp contact link
                on this Site directs users to the WhatsApp platform; WhatsApp&rsquo;s own privacy policy
                governs any interaction on that platform.
              </p>

              <h2>Links to Other Websites</h2>
              <p>
                This Site may contain links to external websites. We are not responsible for the privacy
                practices or content of those sites.
              </p>

              <h2>Children&rsquo;s Privacy</h2>
              <p>
                This Site is not directed at children under the age of 13. We do not knowingly collect
                personal information from children.
              </p>

              <h2>Your Rights</h2>
              <p>
                If you believe any personal information relating to you has been collected through this
                Site, or if you have any privacy-related enquiries, please contact us using the details
                on the <Link href="/contact" style={{ color: 'var(--saffron-dark)', fontWeight: 600 }}>Contact page</Link>.
              </p>

              <h2>Changes to This Notice</h2>
              <p>
                This privacy notice may be updated from time to time. The date at the top of the page
                reflects when it was last revised. Continued use of the Site after changes are published
                constitutes acceptance of those changes.
              </p>

              <h2>Contact</h2>
              <p>
                For any questions about this privacy notice or the information practices of this Site,
                please visit the{' '}
                <Link href="/contact" style={{ color: 'var(--saffron-dark)', fontWeight: 600 }}>Contact page</Link>.
              </p>

              <hr />

              <p style={{ fontSize: '0.875rem', fontStyle: 'italic' }}>
                &copy; {year} {siteConfig.businessName}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
