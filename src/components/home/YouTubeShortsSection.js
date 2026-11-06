'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import feed from '@/data/youtube-shorts.json';
import './youtube-shorts-section.css';

function YouTubeIcon() {
  return <svg width="24" height="18" viewBox="0 0 24 18" fill="none" aria-hidden="true"><rect width="24" height="18" rx="5" fill="currentColor" /><path d="m10 5 6 4-6 4V5Z" fill="#FF4500" /></svg>;
}

export default function YouTubeShortsSection() {
  const { language } = useLanguage();
  const hindi = language === 'hi';
  const trackRef = useRef(null);
  const [edges, setEdges] = useState({ start: true, end: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const update = () => setEdges({ start: track.scrollLeft <= 2, end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 2 });
    const observer = new ResizeObserver(update);
    observer.observe(track);
    track.addEventListener('scroll', update, { passive: true });
    update();
    return () => { observer.disconnect(); track.removeEventListener('scroll', update); };
  }, []);

  function scroll(direction) {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * .85, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return (
    <section className="section youtube-shorts" aria-labelledby="youtube-shorts-heading">
      <div className="container">
        <div className="youtube-shorts__header">
          <div>
            <span className="youtube-shorts__eyebrow"><YouTubeIcon /> Vikas Kaushik</span>
            <h2 id="youtube-shorts-heading" className="section-title">{hindi ? 'यूट्यूब शॉर्ट्स' : 'YouTube Shorts'}</h2>
            <p>{hindi ? 'हमारे चैनल के नए वीडियो। देखने के लिए टैप करें।' : 'The latest from our channel. Tap to watch.'}</p>
          </div>
          <div className="youtube-shorts__actions">
            <a className="youtube-shorts__channel" href={`${feed.channel}/shorts`} target="_blank" rel="noopener noreferrer"><span aria-hidden="true">▶</span> {hindi ? 'सभी शॉर्ट्स' : 'Shorts'}<span className="youtube-shorts__sr-only"> (opens YouTube in a new tab)</span></a>
            <a className="youtube-shorts__subscribe" href={`${feed.channel}?sub_confirmation=1`} target="_blank" rel="noopener noreferrer">{hindi ? 'सब्सक्राइब करें' : 'Subscribe'}<span className="youtube-shorts__sr-only"> (opens YouTube in a new tab)</span></a>
          </div>
        </div>
        <div className="youtube-shorts__carousel" role="region" aria-roledescription="carousel" aria-label={hindi ? 'नए यूट्यूब शॉर्ट्स' : 'Latest YouTube Shorts'}>
          <button type="button" className="youtube-shorts__arrow youtube-shorts__arrow--previous" aria-label={hindi ? 'पिछले शॉर्ट्स' : 'Previous Shorts'} aria-controls="youtube-shorts-track" disabled={edges.start} onClick={() => scroll(-1)}>‹</button>
          <ul id="youtube-shorts-track" ref={trackRef} className="youtube-shorts__track">
            {feed.shorts.map((short) => (
              <li key={short.id} className="youtube-shorts__card">
                <a href={`https://www.youtube.com/shorts/${short.id}`} target="_blank" rel="noopener noreferrer" aria-label={`${short.title} — ${hindi ? 'यूट्यूब पर देखें (नया टैब)' : 'Watch on YouTube (new tab)'}`}>
                  <div className="youtube-shorts__poster">
                    <Image src={short.thumbnail} alt="" width={405} height={720} unoptimized className="youtube-shorts__image" />
                    <span className="youtube-shorts__play" aria-hidden="true">▶</span>
                    <span className="youtube-shorts__watch" aria-hidden="true">{hindi ? 'शॉर्ट देखें' : 'Watch Short'} ↗</span>
                  </div>
                  <h3 title={short.title}>{short.title}</h3>
                  <p>@astroacharya_001</p>
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="youtube-shorts__arrow youtube-shorts__arrow--next" aria-label={hindi ? 'अगले शॉर्ट्स' : 'Next Shorts'} aria-controls="youtube-shorts-track" disabled={edges.end} onClick={() => scroll(1)}>›</button>
        </div>
      </div>
    </section>
  );
}
