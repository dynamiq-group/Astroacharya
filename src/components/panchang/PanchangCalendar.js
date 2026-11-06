'use client';

import { useSyncExternalStore, useState } from 'react';
import { panchangCities } from '@/data/panchang';

const subscribe = () => () => {};
const getToday = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
const getServerToday = () => '';
const formatDate = (date, options) => new Intl.DateTimeFormat('en-IN', { timeZone: 'Asia/Kolkata', ...options }).format(new Date(`${date}T12:00:00+05:30`));
const unavailable = 'Not available';

function DetailRows({ rows }) {
  return <dl className="panchang-detail-list">{rows.map(([label, value]) => <div key={label}><dt>{label}</dt><dd className={value === unavailable ? 'panchang-unavailable' : undefined}>{value}</dd></div>)}</dl>;
}

export default function PanchangCalendar() {
  const today = useSyncExternalStore(subscribe, getToday, getServerToday);
  const [selection, setSelection] = useState(null);
  const date = selection?.date || today;
  const city = selection?.city || 'New Delhi';
  const [announcement, setAnnouncement] = useState('');
  const dateLabel = date ? formatDate(date, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) : 'Loading date…';
  const weekday = date ? formatDate(date, { weekday: 'long' }) : '—';

  function choose(nextDate, nextCity) {
    setSelection({ date: nextDate, city: nextCity });
    setAnnouncement(`Showing ${nextCity}, ${formatDate(nextDate, { day: 'numeric', month: 'long', year: 'numeric' })}. Verified daily readings are currently unavailable.`);
  }

  function shiftDay(amount) {
    const next = new Date(`${date}T12:00:00Z`);
    next.setUTCDate(next.getUTCDate() + amount);
    choose(next.toISOString().slice(0, 10), city);
  }

  return (
    <section aria-labelledby="daily-panchang-heading" className="panchang-calendar">
      <form className="panchang-search panchang-card" key={`${date}-${city}`} onSubmit={(event) => {
        event.preventDefault();
        const form = new FormData(event.currentTarget);
        choose(form.get('date'), form.get('city'));
      }}>
        <div><label htmlFor="panchang-city">Your city</label><select name="city" id="panchang-city" defaultValue={city}>{panchangCities.map((name) => <option key={name}>{name}</option>)}</select></div>
        <div><label htmlFor="panchang-date">Choose a date</label><input type="date" id="panchang-date" name="date" defaultValue={date} min="1900-01-01" max="2100-12-31" required /></div>
        <button className="btn btn--primary" type="submit" disabled={!date}>View Panchang <span aria-hidden="true">→</span></button>
      </form>
      <div className="panchang-day-nav"><button type="button" disabled={!date || date <= '1900-01-01'} onClick={() => shiftDay(-1)}>← Previous day</button><button type="button" disabled={!today} onClick={() => choose(today, city)}>Today</button><button type="button" disabled={!date || date >= '2100-12-31'} onClick={() => shiftDay(1)}>Next day →</button></div>
      <div className="panchang-date-heading"><div><span className="section-eyebrow">Daily Panchang</span><h2 id="daily-panchang-heading">{dateLabel}</h2><p>{city}, India <span aria-hidden="true">·</span> Indian Standard Time (UTC +05:30)</p></div><span className="panchang-status">Readings unavailable</span></div>
      <p className="panchang-notice">Verified Panchang readings for this date and location are currently unavailable. Please check back for daily details or contact us for guidance.</p>
      <p className="panchang-sr-only" role="status" aria-live="polite" aria-atomic="true">{announcement}</p>
      <div className="panchang-sky-grid">{[['☀', 'Sunrise'], ['☼', 'Sunset'], ['☾', 'Moonrise'], ['◐', 'Moonset']].map(([icon, label]) => <div className="panchang-card panchang-sky-card" key={label}><span aria-hidden="true">{icon}</span><div><h3>{label}</h3><p>{unavailable}</p></div></div>)}</div>
      <div className="panchang-details-grid">
        <section className="panchang-card"><h3 className="panchang-card-heading">Panchang details</h3><DetailRows rows={['Tithi', 'Nakshatra', 'Yoga', 'Karana', 'Paksha'].map((label) => [label, unavailable]).concat([['Vaar / Weekday', weekday]])} /></section>
        <section className="panchang-card"><h3 className="panchang-card-heading">Hindu calendar</h3><DetailRows rows={['Lunar month (Amanta)', 'Lunar month (Purnimanta)', 'Vikram Samvat', 'Shaka Samvat', 'Sun sign', 'Moon sign'].map((label) => [label, unavailable])} /></section>
        <section className="panchang-card"><h3 className="panchang-card-heading panchang-heading-auspicious">Auspicious timings <small>Shubh Muhurat</small></h3><DetailRows rows={['Brahma Muhurat', 'Abhijit Muhurat', 'Godhuli Muhurat', 'Vijaya Muhurat'].map((label) => [label, unavailable])} /></section>
        <section className="panchang-card"><h3 className="panchang-card-heading">Inauspicious timings <small>Ashubh Muhurat</small></h3><DetailRows rows={['Rahu Kaal', 'Yamaganda', 'Gulika Kaal', 'Dur Muhurat'].map((label) => [label, unavailable])} /></section>
      </div>
      <section className="panchang-card panchang-observances"><span aria-hidden="true">✧</span><div><h3>Festivals &amp; vrats</h3><p>Verified observance dates are currently unavailable. Festival dates can vary by location and tradition.</p></div></section>
      <div className="panchang-cities"><h3>Explore Panchang by city</h3><div>{panchangCities.map((name) => <button key={name} type="button" disabled={!date} aria-pressed={city === name} onClick={() => choose(date, name)}>{name}</button>)}</div></div>
    </section>
  );
}
