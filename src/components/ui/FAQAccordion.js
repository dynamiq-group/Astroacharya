'use client';

import { useState } from 'react';

/**
 * FAQAccordion — renders a list of {q, a} objects as an accessible accordion.
 */
export default function FAQAccordion({ items = [], dark = false }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  if (!items.length) return null;

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="faq-item" style={{ borderColor: dark ? 'rgba(200, 169, 107, 0.15)' : undefined }}>
          <button
            className="faq-trigger"
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-content-${i}`}
            id={`faq-trigger-${i}`}
            style={{ color: dark ? 'var(--feature-text)' : 'var(--text-primary)' }}
          >
            <span>{item.q}</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              style={{
                flexShrink: 0,
                color: 'var(--accent-text)',
                transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)',
                transition: 'transform 0.3s ease',
              }}
            >
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <div
            id={`faq-content-${i}`}
            role="region"
            aria-labelledby={`faq-trigger-${i}`}
            className={`faq-content${openIndex === i ? ' open' : ''}`}
          >
            <div
              className="faq-content-inner"
              style={{ color: dark ? 'var(--feature-muted)' : 'var(--text-secondary)' }}
            >
              {item.a}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
