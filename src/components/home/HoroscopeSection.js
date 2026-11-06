'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import './horoscope-section.css';

// Keep the sign order and initial selection used by the reference section.
const zodiacSigns = [
  { id: 'capricorn', en: 'Capricorn', hi: 'मकर' },
  { id: 'scorpio', en: 'Scorpio', hi: 'वृश्चिक' },
  { id: 'aquarius', en: 'Aquarius', hi: 'कुंभ' },
  { id: 'pisces', en: 'Pisces', hi: 'मीन' },
  { id: 'taurus', en: 'Taurus', hi: 'वृषभ' },
  { id: 'libra', en: 'Libra', hi: 'तुला' },
  { id: 'aries', en: 'Aries', hi: 'मेष' },
  { id: 'virgo', en: 'Virgo', hi: 'कन्या' },
  { id: 'cancer', en: 'Cancer', hi: 'कर्क' },
  { id: 'leo', en: 'Leo', hi: 'सिंह' },
  { id: 'sagittarius', en: 'Sagittarius', hi: 'धनु' },
  { id: 'gemini', en: 'Gemini', hi: 'मिथुन' },
];

export default function HoroscopeSection() {
  const { language } = useLanguage();
  const [selectedSign, setSelectedSign] = useState('libra');
  const isHindi = language === 'hi';
  const selected = zodiacSigns.find((sign) => sign.id === selectedSign);
  const signName = isHindi ? selected.hi : selected.en;

  return (
    <section id="todays-horoscope" className="section horoscope-section" aria-labelledby="horoscope-heading">
      <div className="container">
        <div className="horoscope-header">
          <h2 id="horoscope-heading" className="section-title horoscope-title">
            {isHindi ? 'आज का' : "Today's"}{' '}
            <span>{isHindi ? 'राशिफल' : 'Horoscope'}</span>
          </h2>
          <p className="horoscope-subtitle">
            {isHindi
              ? 'जीवन के निर्णयों के लिए विश्वसनीय वैदिक मार्गदर्शन'
              : "Trusted Vedic Insights for Life's Decisions"}
          </p>
        </div>

        <div className="horoscope-signs" role="group" aria-label={isHindi ? 'अपनी राशि चुनें' : 'Choose your zodiac sign'}>
          {zodiacSigns.map((sign) => (
            <button
              key={sign.id}
              type="button"
              className="horoscope-sign"
              aria-pressed={selectedSign === sign.id}
              aria-controls="horoscope-reading"
              onClick={() => setSelectedSign(sign.id)}
            >
              <span className="horoscope-icon">
                <Image src={`/images/zodiac/${sign.id}.svg`} alt="" width={48} height={48} />
              </span>
              <span>{isHindi ? sign.hi : sign.en}</span>
            </button>
          ))}
        </div>

        {/* An explicit empty state until a daily horoscope source is connected. */}
        <div id="horoscope-reading" className="horoscope-reading" role="status" aria-live="polite" aria-atomic="true">
          <h3 className="horoscope-reading-title">
            {isHindi ? `${signName} — आज का राशिफल` : `${signName} — Today's Horoscope`}
          </h3>
          <p>
            {isHindi
              ? 'आज का राशिफल अभी उपलब्ध नहीं है। कृपया बाद में फिर देखें।'
              : "Today's horoscope isn't available right now. Please check back later."}
          </p>
        </div>
      </div>
    </section>
  );
}
