'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { panchangElements } from '@/data/panchang';
import '@/components/panchang/panchang.css';

export default function PanchangSection() {
  const { language } = useLanguage();
  const hindi = language === 'hi';
  return (
    <section className="section panchang-preview" id="panchang" aria-labelledby="panchang-preview-heading">
      <div className="container">
        <div className="panchang-preview-top">
          <div>
            <span className="section-eyebrow">{hindi ? 'वैदिक पंचांग' : 'The Vedic calendar'}</span>
            <h2 className="section-title" id="panchang-preview-heading">{hindi ? 'पंचांग से जानें दिन का महत्व' : 'A little wisdom for every day'}</h2>
            <p>{hindi ? 'तिथि, नक्षत्र और शुभ मुहूर्त के पारंपरिक महत्व को जानें।' : 'Explore the five elements of Panchang and understand the traditional significance of each day.'}</p>
          </div>
          <Link href="/panchang" className="btn btn--primary">{hindi ? 'पंचांग देखें' : 'Explore Panchang'} <span aria-hidden="true">→</span></Link>
        </div>
        <div className="panchang-elements-mini">
          {panchangElements.map((element) => (
            <Link href={`/panchang#${element.name.toLowerCase()}`} key={element.name} className="panchang-element-mini">
              <span aria-hidden="true">{element.icon}</span><strong>{hindi ? element.hindi : element.name}</strong>
              <small>{hindi ? element.name : element.subtitle}</small>
            </Link>
          ))}
        </div>
        <p className="panchang-preview-note">{hindi ? 'दैनिक पंचांग विवरण अभी उपलब्ध नहीं हैं। किसी विशेष तिथि के लिए हमसे संपर्क करें।' : 'Daily readings are currently unavailable. For guidance on a specific date, get in touch with us.'}</p>
      </div>
    </section>
  );
}
