'use client';

import { useEffect, useState } from 'react';
import { getWhatsAppUrl } from '@/lib/contact';

export default function WhatsAppFloat() {
  const waUrl = getWhatsAppUrl();
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    if (!waUrl || !footer || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    }, { threshold: 0.08 });

    observer.observe(footer);
    return () => observer.disconnect();
  }, [waUrl]);

  if (!waUrl) return null;

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`wa-float${footerVisible ? ' wa-float--hidden' : ''}`}
      aria-label="Contact Dr. Vikas Kaushik via WhatsApp"
      aria-hidden={footerVisible || undefined}
      tabIndex={footerVisible ? -1 : undefined}
    >
      <span className="wa-float__tooltip" aria-hidden="true">Chat with us</span>
      <span className="wa-float__button">
        <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.52 3.48A11.91 11.91 0 0 0 12.03 0C5.4 0 .01 5.39.01 12.02c0 2.12.55 4.19 1.6 6.01L0 24l6.15-1.61a12.02 12.02 0 0 0 5.88 1.5h.01C18.67 23.89 24 18.5 24 11.87c0-3.18-1.24-6.17-3.48-8.39ZM12.04 21.87a9.96 9.96 0 0 1-5.08-1.39l-.36-.21-3.65.96.98-3.56-.24-.37a9.94 9.94 0 0 1-1.52-5.28c0-5.51 4.48-9.99 9.99-9.99a9.9 9.9 0 0 1 7.05 2.92 9.9 9.9 0 0 1 2.91 7.06c0 5.51-4.48 9.99-9.98 9.99ZM17.52 14.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.11 3.22 5.12 4.52.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
        <span className="wa-float__notification" aria-hidden="true" />
      </span>
    </a>
  );
}
