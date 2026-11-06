
'use client';

import Link from 'next/link';
import Image from 'next/image';
import astrologyMascot from '../../../public/images/astrologer-mascots/vedic-astrology.png';
import vastuMascot from '../../../public/images/astrologer-mascots/vastu-dosh.png';
import pindDanMascot from '../../../public/images/astrologer-mascots/pind-daan.png';
import medicalAstrologyMascot from '../../../public/images/astrologer-mascots/medical-astrology.png';
import kundliReadingMascot from '../../../public/images/astrologer-mascots/kundli-reading.png';
import services from '@/data/services';
import { useLanguage } from '@/context/LanguageContext';

// Mascot image mapping
const mascotImages = {
  astrology: astrologyMascot,
  'vastu-dosha': vastuMascot,
  'pind-dan-gaya': pindDanMascot,
  'medical-astrology': medicalAstrologyMascot,
  'kundli-reading': kundliReadingMascot,
};

function handleServiceCardPointerMove(event) {
  if (
    typeof window === 'undefined' ||
    !window.matchMedia('(hover: hover) and (pointer: fine)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
    !['mouse', 'pen'].includes(event.pointerType)
  ) {
    return;
  }

  const card = event.currentTarget;
  const bounds = card.getBoundingClientRect();
  if (!bounds.width || !bounds.height) return;

  const px = (event.clientX - bounds.left) / bounds.width;
  const py = (event.clientY - bounds.top) / bounds.height;
  const maxTilt = 13;

  card.style.setProperty('--rx', `${((0.5 - py) * maxTilt).toFixed(2)}deg`);
  card.style.setProperty('--ry', `${((px - 0.5) * maxTilt).toFixed(2)}deg`);
  card.classList.add('is-live');
}

function resetServiceCardTilt(event) {
  const card = event.currentTarget;
  card.classList.remove('is-live');
  card.style.setProperty('--rx', '0deg');
  card.style.setProperty('--ry', '0deg');
}

// Mascot component
function ServiceMascot({ serviceId }) {
  const image = mascotImages[serviceId];

  if (!image) return null;

  return (
    <div className="service-mascot" aria-hidden="true">
      <Image
        src={image}
        alt=""
        width={220}
        height={220}
        className="service-mascot__image"
        priority={false}
      />
    </div>
  );
}

export default function ServicesSection({
  limit,
  showCTA = true,
  saffronBackground = false,
  compact = false,
}) {
  const { language, t } = useLanguage();

  const displayServices = limit
    ? services.slice(0, limit)
    : services;

  // Hindi service content
  const hindiServiceData = {
    astrology: {
      name: 'वैदिक ज्योतिष',
      tagline: 'अपने जीवन के ब्रह्मांडीय खाके को समझें',
    },

    'vastu-dosha': {
      name: 'वास्तु दोष निवारण',
      tagline: 'अपने परिवेश को प्राकृतिक ऊर्जा के अनुकूल बनाएं',
    },

    'pind-dan-gaya': {
      name: 'पिंडदान एवं पितृ पूजा (गया जी)',
      tagline: 'पवित्र गया तीर्थ में पितरों की सद्गति हेतु शास्त्रोक्त कर्म',
    },

    'medical-astrology': {
      name: 'चिकित्सा ज्योतिष',
      tagline: 'स्वास्थ्य एवं कल्याण पर पारंपरिक ज्योतिषीय दृष्टिकोण',
    },

    'kundli-reading': {
      name: 'विस्तृत कुंडली अध्ययन',
      tagline: 'आपकी जन्म पत्रिका का गहन शास्त्रीय विवेचन',
    },
  };

  return (
    <section
      className="section"
      aria-labelledby="services-heading"
      style={{
        background: saffronBackground
          ? '#FF4500'
          : 'var(--bg-page)',
      }}
    >
      <div className="container">

        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: '3.5rem',

            ...(saffronBackground
              ? {
                  '--text-primary': '#FFFFFF',
                  '--text-secondary': '#FFFFFF',
                  '--saffron-dark': '#FFFFFF',
                }
              : {}),
          }}
        >
          <div
            className="section-eyebrow"
            style={{ justifyContent: 'center' }}
          >
            {t('servicesSection.tag', 'What We Offer')}
          </div>

          <h2
            id="services-heading"
            className="section-title"
          >
            {t(
              'servicesSection.heading',
              'Services & Consultations'
            )}
          </h2>

          <p
            className="section-description"
            style={{
              marginInline: 'auto',
              textAlign: 'center',
            }}
          >
            {t(
              'servicesSection.subheading',
              'Each service is rooted in classical Vedic tradition and offered with care, respect, and professional clarity.'
            )}
          </p>
        </div>

        {/* Services Grid */}
        <div
          className={
            compact
              ? 'home-services-grid'
              : undefined
          }
          style={
            compact
              ? undefined
              : {
                  display: 'grid',
                  gridTemplateColumns:
                    'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '1.5rem',
                }
          }
        >
          {displayServices.map((service) => {
            const hi = hindiServiceData[service.id];

            const name =
              language === 'hi' && hi
                ? hi.name
                : service.name;

            // Compact service cards
            if (compact) {
              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="card home-service-card service-mascot-card"
                  aria-label={name}
                  onPointerMove={handleServiceCardPointerMove}
                  onPointerLeave={resetServiceCardTilt}
                  onPointerCancel={resetServiceCardTilt}
                >
                  {/* Mascot */}
                  <ServiceMascot
                    serviceId={service.id}
                  />

                  {/* Service title */}
                  <h3 className="home-service-card__title service-mascot-card__title">
                    {name}
                  </h3>

                  {/* Learn More */}
                  <span className="home-service-card__link">
                    {t(
                      'servicesSection.viewDetails',
                      'Learn More'
                    )}

                    <span aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                </Link>
              );
            }

            // Regular service cards
            return (
              <article
                key={service.id}
                className="card service-mascot-card"
                onPointerMove={handleServiceCardPointerMove}
                onPointerLeave={resetServiceCardTilt}
                onPointerCancel={resetServiceCardTilt}
                style={{
                  padding: '2rem',
                  paddingTop: '6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                {/* Mascot */}
                <ServiceMascot
                  serviceId={service.id}
                />

                {/* Service Name and Tagline */}
                <div className="service-mascot-card__content">
                  <h3
                    style={{
                      fontFamily:
                        'var(--font-heading), serif',
                      fontSize: '1.1875rem',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '0.375rem',
                    }}
                  >
                    {name}
                  </h3>

                </div>

                {/* Actions */}
                <div className="service-card__actions">
                  <Link
                    href="/contact"
                    className="btn btn--primary btn--sm"
                  >
                    {t(
                      'servicesSection.bookSession',
                      'Enquire'
                    )}
                  </Link>

                  <Link
                    href={`/services/${service.slug}`}
                    className="home-service-card__link"
                  >
                    {t(
                      'servicesSection.viewDetails',
                      'Learn More'
                    )}
                    <span aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* View All CTA */}
        {showCTA && limit && (
          <div
            style={{
              textAlign: 'center',
              marginTop: '3rem',
            }}
          >
            <Link
              href="/services"
              className="btn btn--outline btn--lg"
            >
              {t(
                'servicesSection.allServicesCta',
                'View All Services'
              )}

              &rarr;
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}
