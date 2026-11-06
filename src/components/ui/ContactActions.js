'use client';

import { getTelUrl, getWhatsAppUrl, getDisplayPhone } from '@/lib/contact';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactActions({
  orientation = 'horizontal',
  size = 'md',
  dark = false,
  message,
  className = '',
}) {
  const { language, t } = useLanguage();
  const telUrl = getTelUrl();
  const waUrl = getWhatsAppUrl(undefined, message);
  const displayPhone = getDisplayPhone();

  if (!telUrl && !waUrl) {
    return null; // Nothing to show — contact numbers not yet configured
  }

  const sizeClass = `btn--${size}`;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        gap: '0.875rem',
        alignItems: orientation === 'vertical' ? 'flex-start' : 'center',
      }}
    >
      {telUrl && displayPhone && (
        <a
          href={telUrl}
          className={`btn ${dark ? 'btn--primary' : 'btn--primary'} ${sizeClass}`}
          aria-label={`Call Dr. Vikas Kaushik at ${displayPhone}`}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.03 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.18 6.18l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
          </svg>
          {t('nav.callNow', 'Call Now')}
        </a>
      )}
      {waUrl && (
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn--whatsapp ${sizeClass}`}
          aria-label="Contact Dr. Vikas Kaushik via WhatsApp"
        >
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.16 5.355 5.48.025 12.025.025c3.18.001 6.163 1.24 8.413 3.492 2.25 2.251 3.487 5.247 3.487 8.44 0 6.554-5.329 11.887-11.888 11.888-1.99-.001-3.951-.5-5.688-1.448L.057 24z"/>
          </svg>
          {language === 'hi' ? 'व्हाट्सएप संदेश' : 'WhatsApp'}
        </a>
      )}
    </div>
  );
}
