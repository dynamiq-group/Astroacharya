import { notFound } from 'next/navigation';
import { getServiceBySlug, services } from '@/data/services';
import Breadcrumb from '@/components/ui/Breadcrumb';
import FAQAccordion from '@/components/ui/FAQAccordion';
import ContactActions from '@/components/ui/ContactActions';
import ContactSection from '@/components/home/ContactSection';
import Link from 'next/link';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const waMessage = `Namaste, I would like to enquire about your ${service.name} consultation service.`;

  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: 'var(--bg-feature)',
          paddingBlock: '4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
        aria-labelledby="service-heading"
      >
        <div aria-hidden="true" style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(200, 169, 107, 0.07) 0%, transparent 60%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <Breadcrumb
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.name },
            ]}
          />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem', flexWrap: 'wrap' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: 'var(--radius-lg)',
              background: 'rgba(255, 153, 51, 0.1)',
              border: '1px solid rgba(255, 153, 51, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '2rem',
              flexShrink: 0,
            }} aria-hidden="true">
              {service.icon}
            </div>
            <div>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--gold-text)',
                marginBottom: '0.375rem',
              }}>
                Consultation Service
              </p>
              <h1
                id="service-heading"
                style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: 'clamp(1.75rem, 3.5vw + 1rem, 3rem)',
                  fontWeight: 800,
                  color: 'var(--feature-text)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                  marginBottom: '0.5rem',
                }}
              >
                {service.name}
              </h1>
              <p style={{ fontSize: '1.0625rem', color: 'rgba(255, 153, 51, 0.85)', fontWeight: 500, margin: 0 }}>
                {service.tagline}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section">
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 340px)',
            gap: '4rem',
            alignItems: 'start',
          }}>
            {/* Main content */}
            <div>
              {/* Overview */}
              <p style={{
                fontSize: '1.125rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
                maxWidth: 'none',
              }}>
                {service.description}
              </p>

              {/* Long description — rendered as prose */}
              <div className="prose">
                {service.longDescription.split('\n\n').map((para, i) => {
                  if (para.startsWith('**') && para.endsWith('**')) {
                    return <h3 key={i}>{para.replace(/\*\*/g, '')}</h3>;
                  }
                  if (para.startsWith('- ') || para.includes('\n- ')) {
                    const items = para.split('\n').filter(l => l.trim());
                    return (
                      <ul key={i}>
                        {items.map((item, j) => (
                          <li key={j}>{item.replace(/^- /, '').replace(/\*\*(.*?)\*\*/g, '$1')}</li>
                        ))}
                      </ul>
                    );
                  }
                  // Bold inline handling
                  const parts = para.split(/\*\*(.*?)\*\*/g);
                  return (
                    <p key={i}>
                      {parts.map((part, j) =>
                        j % 2 === 1 ? <strong key={j}>{part}</strong> : part
                      )}
                    </p>
                  );
                })}
              </div>

              {/* What it covers */}
              <div style={{
                marginTop: '2.5rem',
                background: 'var(--bg-page)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '2rem',
              }}>
                <h2 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1.25rem',
                }}>
                  What This Service Covers
                </h2>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {service.whatItCovers.map((item, i) => (
                    <li key={i} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                      fontSize: '0.9375rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                    }}>
                      <span style={{ color: 'var(--accent-text)', fontWeight: 700, flexShrink: 0, marginTop: '0.1rem' }}>✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Preparation */}
              {service.preparation && service.preparation.length > 0 && (
                <div style={{
                  marginTop: '1.5rem',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                }}>
                  <h2 style={{
                    fontFamily: 'var(--font-heading), serif',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '1.25rem',
                  }}>
                    How to Prepare
                  </h2>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {service.preparation.map((item, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.75rem',
                        fontSize: '0.9375rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '20px',
                          height: '20px',
                          borderRadius: '50%',
                          background: 'var(--saffron)',
                          color: 'var(--text-on-saffron)',
                          fontSize: '0.6875rem',
                          fontWeight: 800,
                          flexShrink: 0,
                          marginTop: '0.125rem',
                        }}>
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* FAQs */}
              {service.faqs && service.faqs.length > 0 && (
                <div style={{ marginTop: '3rem' }}>
                  <h2 style={{
                    fontFamily: 'var(--font-heading), serif',
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '1.5rem',
                  }}>
                    Frequently Asked Questions
                  </h2>
                  <FAQAccordion items={service.faqs} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside style={{ position: 'sticky', top: '6rem' }}>
              <div style={{
                background: 'var(--bg-feature)',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                color: 'var(--feature-text)',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(255, 153, 51, 0.12)',
                  border: '1px solid rgba(255, 153, 51, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1.25rem',
                }} aria-hidden="true">
                  {service.icon}
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '1.125rem',
                  fontWeight: 700,
                  color: 'var(--feature-text)',
                  marginBottom: '0.625rem',
                }}>
                  Enquire About This Service
                </h2>
                <p style={{
                  fontSize: '0.9rem',
                  color: 'var(--feature-muted)',
                  lineHeight: 1.7,
                  marginBottom: '1.5rem',
                  maxWidth: 'none',
                }}>
                  Contact Dr. Vikas Kaushik directly via phone or WhatsApp to discuss
                  your needs and arrange a consultation.
                </p>

                <ContactActions
                  orientation="vertical"
                  size="md"
                  dark
                  message={waMessage}
                  className="sidebar-contact"
                />

                {/* No contact configured fallback */}
                <div style={{ marginTop: '1rem' }}>
                  <Link
                    href="/contact"
                    style={{
                      display: 'block',
                      textAlign: 'center',
                      padding: '0.625rem',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.875rem',
                    }}
                    className="link-gold-subtle-hover"
                  >
                    View all contact options →
                  </Link>
                </div>
              </div>

              {/* Other services */}
              <div style={{
                marginTop: '1.5rem',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.5rem',
              }}>
                <h3 style={{
                  fontFamily: 'var(--font-heading), serif',
                  fontSize: '0.9375rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '1rem',
                }}>
                  Other Services
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {services
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="link-service-sidebar"
                        >
                          <span style={{ fontSize: '0.875rem' }}>{s.icon}</span>
                          {s.shortName}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Responsive sidebar on mobile — contact at bottom */}
      <style>{`
        @media (max-width: 900px) {
          aside {
            order: -1;
          }
        }
        .sidebar-contact a, .sidebar-contact button {
          width: 100%;
        }
      `}</style>

      <ContactSection message={waMessage} />
    </>
  );
}
