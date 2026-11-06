'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import './footer.css';
import { siteConfig } from '@/config/site';
import { getTelUrl, getWhatsAppUrl, getDisplayPhone } from '@/lib/contact';
import LogoMark from '@/components/ui/LogoMark';
import { useLanguage } from '@/context/LanguageContext';

const socialPlatforms = [
  { key: 'instagram', label: 'Instagram' },
  { key: 'x', label: 'X' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'youtube', label: 'YouTube' },
];

function SocialIcon({ name }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
      {name === 'instagram' && <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.5" cy="6.5" r="1.2" /></>}
      {name === 'x' && <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l7.5-8.6L2.2 2h6.5l4.5 6.8L18.9 2Zm-1.1 18h1.7L7.7 3.9H5.9L17.8 20Z" />}
      {name === 'facebook' && <path d="M14 22v-9h3l.5-3H14V8c0-.9.3-1.5 1.6-1.5H18V3.1c-.4-.1-1.8-.1-3.3-.1C11.6 3 10 4.8 10 7.8V10H7v3h3v9h4Z" />}
      {name === 'youtube' && <path d="M23 7a3 3 0 0 0-2.1-2.1C19 4.4 12 4.4 12 4.4s-7 0-8.9.5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5A31 31 0 0 0 1 17a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5A3 3 0 0 0 23 17a31 31 0 0 0 .5-5A31 31 0 0 0 23 7ZM9.7 15.5v-7l6 3.5-6 3.5Z" />}
    </svg>
  );
}

export default function Footer() {
  const footerRef = useRef(null);
  const pathname = usePathname();
  const { language, t } = useLanguage();
  const telUrl = getTelUrl();
  const waUrl = getWhatsAppUrl();
  const displayPhone = getDisplayPhone();
  const year = 2026;

  useEffect(() => {
    const footer = footerRef.current;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;
    let settled = false;

    const checkPosition = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight - window.scrollY;

      if (distance <= 4 && !reducedMotion.matches) {
        const transition = footer.querySelector('.site-footer__transition').getBoundingClientRect();
        const heading = footer.querySelector('.site-footer__intro h2').getBoundingClientRect();
        // Let the fade reach behind the heading at its peak, including on
        // mobile where the contact cards stack. Its resting height stays unchanged.
        const fadeTop = Math.max(footer.getBoundingClientRect().top, heading.top - heading.height);
        if (transition.height > 0) {
          footer.style.setProperty('--footer-dissolve-scale', String(Math.max(1.35, (transition.bottom - fadeTop) / transition.height)));
        }
      }

      if (reducedMotion.matches || distance > 120) {
        settled = false;
        footer.classList.remove('site-footer--dissolve');
      } else if (distance <= 4 && !settled) {
        settled = true;
        footer.classList.add('site-footer--dissolve');
      }
    };
    const scheduleCheck = () => {
      if (!frame) frame = window.requestAnimationFrame(checkPosition);
    };

    // Re-arm only after scrolling away, so small movements at the bottom
    // cannot continually restart the settling animation.
    footer.classList.remove('site-footer--dissolve');
    window.addEventListener('scroll', scheduleCheck, { passive: true });
    window.addEventListener('resize', scheduleCheck);
    reducedMotion.addEventListener('change', scheduleCheck);
    scheduleCheck();

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scheduleCheck);
      window.removeEventListener('resize', scheduleCheck);
      reducedMotion.removeEventListener('change', scheduleCheck);
      footer.classList.remove('site-footer--dissolve');
    };
  }, [pathname]);

  const services = [
    { label: t('nav.servicesDropdown.astrology', 'Vedic Astrology'), href: '/services/astrology' },
    { label: t('nav.servicesDropdown.vastu', 'Vastu Dosha'), href: '/services/vastu-dosha' },
    { label: t('nav.servicesDropdown.pindDan', 'Pind Dan, Gaya'), href: '/services/pind-dan-gaya' },
    { label: t('nav.servicesDropdown.medicalAstrology', 'Medical Astrology'), href: '/services/medical-astrology' },
    { label: t('nav.servicesDropdown.kundli', 'Kundli Reading'), href: '/services/kundli-reading' },
  ];

  const quickLinks = [
    { label: t('nav.about', 'About'), href: '/about' },
    { label: t('nav.services', 'Services'), href: '/services' },
    { label: t('nav.blog', 'Blog & Insights'), href: '/blog' },
  ];

  return (
    <footer ref={footerRef} className="site-footer" aria-label="Site footer">
      <div className="container">
        <div className="site-footer__intro">
          <span className="site-footer__eyebrow">{t('practitionerName', siteConfig.practitionerName)}</span>
          <h2>{language === 'hi' ? 'संपर्क करें' : 'Contact Us'}</h2>
          <p>{t('footer.about', 'Ancient Vedic wisdom offered with contemporary clarity. Serving seekers across India.')}</p>
        </div>

      </div>

      <div className="site-footer__transition">
        <div className="container">
        <div className="site-footer__contacts">
          {telUrl && displayPhone && (
            <a href={telUrl} className="site-footer__contact-card">
              <span className="site-footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 3.1 5.2 2 2 0 0 1 5.1 3h3a2 2 0 0 1 2 1.7l.6 2.8a2 2 0 0 1-.5 2.1L8.9 10.9a16 16 0 0 0 4.2 4.2l1.3-1.3a2 2 0 0 1 2.1-.5l2.8.6a2 2 0 0 1 2.7 3Z" /></svg>
              </span>
              <span><span className="site-footer__contact-label">{t('nav.callNow', 'Call Now')}</span><strong>{displayPhone}</strong></span>
              <span className="site-footer__arrow" aria-hidden="true">↗</span>
            </a>
          )}
          {waUrl && (
            <a href={waUrl} target="_blank" rel="noopener noreferrer" className="site-footer__contact-card">
              <span className="site-footer__contact-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><path d="M21 11.5a9 9 0 0 1-13.5 7.8L3 21l1.6-4.6A9 9 0 1 1 21 11.5Z" /><path d="M8 8c0 4 2 6 6 7l2-2-3-1-1 1-2-2 1-1-1-3Z" /></svg>
              </span>
              <span><span className="site-footer__contact-label">WhatsApp</span><strong>+{siteConfig.whatsapp.replace(/\D/g, '')}</strong></span>
              <span className="site-footer__arrow" aria-hidden="true">↗</span>
            </a>
          )}
          <Link href="/contact" className="site-footer__contact-card">
            <span className="site-footer__contact-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M7 3v4m10-4v4M3 11h18m-13 5 2 2 5-4" /></svg>
            </span>
            <span><span className="site-footer__contact-label">{t('nav.contact', 'Contact')}</span><strong>{language === 'hi' ? 'परामर्श बुक करें' : 'Book Consultation'}</strong></span>
            <span className="site-footer__arrow" aria-hidden="true">→</span>
          </Link>
        </div>

      </div>

      </div>

      <div className="site-footer__lower">
        <div className="container">
        <div className="site-footer__bar">
          <div className="site-footer__identity">
            <Link href="/" className="site-footer__brand" aria-label={`${siteConfig.businessName} homepage`}>
              <LogoMark size={38} />
              <span>{siteConfig.businessName}</span>
            </Link>
            <p>&copy; {year} {siteConfig.businessName}. {t('footer.rightsReserved', 'All rights reserved.')}</p>
          </div>
          <nav className="site-footer__navigation" aria-label={t('footer.quickLinks', 'Quick Links')}>
            {quickLinks.map((link) => <Link key={link.href} href={link.href}>{link.label}</Link>)}
            <Link href="/privacy">{t('footer.privacyNotice', 'Privacy Notice')}</Link>
          </nav>
          <div className="site-footer__socials" role="group" aria-label="Social media">
            {socialPlatforms.map(({ key, label }) => {
              const href = siteConfig.social[key];
              return href ? (
                <a key={key} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label}>
                  <SocialIcon name={key} />
                </a>
              ) : (
                <span key={key} className="site-footer__social-placeholder" role="link" aria-disabled="true" aria-label={`${label} — coming soon`} title={`${label} — coming soon`}>
                  <SocialIcon name={key} />
                </span>
              );
            })}
          </div>
        </div>

        <div className="site-footer__bottom">
          <nav className="site-footer__services" aria-label={t('footer.servicesTitle', 'Services')}>
            <span>{t('footer.servicesTitle', 'Services')}</span>
            {services.map((service) => <Link key={service.href} href={service.href}>{service.label}</Link>)}
          </nav>
          <div className="site-footer__fine-print">
            <p>{t('footer.developedBy', 'Designed & developed by DYNAMIQ.')}</p>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
}
