'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';

export default function UnderDevelopmentPage() {
  // 7-day countdown target calculation
  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
    totalSeconds: 7 * 24 * 3600,
  });

  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', service: 'Vedic Astrology', date: '', notes: '' });
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [currentYear, setCurrentYear] = useState('2026');

  const primaryPhone = "+91 98765 43210";
  const secondaryPhone = "+91 87654 32109";
  const whatsappNumber = siteConfig.whatsapp;

  useEffect(() => {
    setCurrentYear(new Date().getFullYear().toString());
    // Check local storage for initial target date to ensure persistent 7-day timer across reloads
    const STORAGE_KEY = 'astroacharya_launch_target';
    let targetTime;
    
    const storedTarget = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (storedTarget && !isNaN(Number(storedTarget))) {
      targetTime = Number(storedTarget);
    } else {
      // 7 days from current time
      targetTime = Date.now() + 7 * 24 * 60 * 60 * 1000;
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, targetTime.toString());
      }
    }

    const totalDurationSeconds = 7 * 24 * 60 * 60;

    const updateTimer = () => {
      const now = Date.now();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, totalSeconds: 0 });
      } else {
        const d = Math.floor(difference / (1000 * 60 * 60 * 24));
        const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const m = Math.floor((difference / 1000 / 60) % 60);
        const s = Math.floor((difference / 1000) % 60);
        const total = Math.floor(difference / 1000);

        setTimeLeft({
          days: d,
          hours: h,
          minutes: m,
          seconds: s,
          totalSeconds: total,
        });
      }
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubmitted(true);
      setEmailInput('');
      setTimeout(() => setEmailSubmitted(false), 5000);
    }
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingModalOpen(false);
      setBookingForm({ name: '', phone: '', service: 'Vedic Astrology', date: '', notes: '' });
    }, 3000);
  };

  // Calculate percentage of 7 days remaining for circular rings
  const total7DaysSec = 7 * 24 * 3600;
  const progressPercent = Math.min(100, Math.max(0, (timeLeft.totalSeconds / total7DaysSec) * 100));

  return (
    <div className="min-h-screen relative flex flex-col justify-between bg-[var(--bg-page)] text-[var(--text-secondary)] selection:bg-amber-500 selection:text-black overflow-hidden font-sans">
      {/* Background Celestial Stars & Nebulae */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-900/30 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-amber-600/20 rounded-full blur-[130px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-indigo-900/30 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Animated Zodiac Wheel Overlay Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-amber-500/10 rounded-full animate-spin-slow pointer-events-none flex items-center justify-center">
          <div className="w-[500px] h-[500px] border border-dashed border-amber-400/10 rounded-full" />
          <div className="w-[300px] h-[300px] border border-purple-500/10 rounded-full" />
        </div>

        {/* Twinkling star specs */}
        <div className="absolute top-12 left-1/4 w-1.5 h-1.5 bg-amber-200 rounded-full animate-twinkle" />
        <div className="absolute top-28 right-1/3 w-2 h-2 bg-purple-200 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-2/3 left-12 w-1 h-1 bg-amber-100 rounded-full animate-twinkle" style={{ animationDelay: '0.8s' }} />
        <div className="absolute bottom-20 right-1/4 w-2 h-2 bg-amber-300 rounded-full animate-twinkle" style={{ animationDelay: '2.2s' }} />
      </div>

      {/* Header Section */}
      <header className="relative z-10 pt-8 pb-4 px-6 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-4 border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-full bg-gradient-to-tr from-amber-600 via-amber-400 to-yellow-200 p-[2px] shadow-lg shadow-amber-500/20">
            <div className="w-full h-full bg-[var(--bg-surface)] rounded-full flex items-center justify-center">
              <span className="text-xl">✨</span>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight gold-gradient-text">Astroacharya</h1>
            <p className="text-xs text-[var(--accent-text)] tracking-widest uppercase">Celestial Guidance & Astrology</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsBookingModalOpen(true)}
            className="px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide uppercase bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black shadow-lg shadow-amber-500/25 transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Book Appointment
          </button>
          <a
            href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
            className="px-4 py-2 rounded-full text-xs font-medium text-[var(--accent-text)] border border-amber-500/30 hover:bg-amber-500/10 transition-colors flex items-center gap-2"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {primaryPhone}
          </a>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 max-w-5xl mx-auto w-full px-6 py-10 flex flex-col items-center text-center">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[var(--accent-text)] text-xs font-medium tracking-wider uppercase mb-6 animate-pulse">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>New Experience Under Development</span>
        </div>

        {/* Hero Title */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] mb-4 leading-tight">
          Unveiling Celestial Wisdom <br />
          <span className="gold-gradient-text">In 7 Days</span>
        </h2>

        <p className="text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mb-10 leading-relaxed">
          Our digital sanctuary is being crafted to provide you with profound astrological consultations, personalized horoscopes, and spiritual insights.
        </p>

        {/* --- 7-DAY CLOCK TIMER --- */}
        <div className="w-full max-w-3xl mb-12">
          <div className="glass-card bg-[var(--bg-surface)] p-6 md:p-8 rounded-3xl relative overflow-hidden">
            {/* Top gold bar detail */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500/20 via-amber-400 to-amber-500/20" />
            
            <div className="flex items-center justify-center gap-2 text-xs font-semibold tracking-widest text-[var(--accent-text)] uppercase mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Countdown to Grand Opening</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {/* Days */}
              <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-[var(--bg-surface)] border border-amber-500/20 relative group hover:border-amber-500/40 transition-all">
                <span className="text-4xl md:text-6xl font-black text-[var(--accent-text)] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  {String(timeLeft.days).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-2 font-medium">Days</span>
              </div>

              {/* Hours */}
              <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-[var(--bg-surface)] border border-amber-500/20 relative group hover:border-amber-500/40 transition-all">
                <span className="text-4xl md:text-6xl font-black text-[var(--accent-text)] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-2 font-medium">Hours</span>
              </div>

              {/* Minutes */}
              <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-[var(--bg-surface)] border border-amber-500/20 relative group hover:border-amber-500/40 transition-all">
                <span className="text-4xl md:text-6xl font-black text-[var(--accent-text)] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.3)]">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-2 font-medium">Minutes</span>
              </div>

              {/* Seconds */}
              <div className="flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-[var(--bg-surface)] border border-amber-500/20 relative group hover:border-amber-500/40 transition-all">
                <span className="text-4xl md:text-6xl font-black text-[var(--accent-text)] font-mono tracking-tight drop-shadow-[0_0_12px_rgba(245,158,11,0.4)] animate-pulse">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-xs uppercase tracking-widest text-[var(--text-secondary)] mt-2 font-medium">Seconds</span>
              </div>
            </div>

            {/* Launch timeline bar */}
            <div className="mt-6 pt-4 border-t border-[var(--border-subtle)] flex flex-col gap-2">
              <div className="flex justify-between text-xs text-[var(--text-secondary)]">
                <span>Phase 1: Construction</span>
                <span className="text-[var(--accent-text)] font-semibold">{Math.round(100 - progressPercent)}% Progress</span>
                <span>Grand Launch</span>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden p-0.5 border border-[var(--border-subtle)]">
                <div 
                  className="bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-300 h-full rounded-full transition-all duration-1000 shadow-[0_0_10px_rgba(245,158,11,0.5)]"
                  style={{ width: `${Math.max(5, 100 - progressPercent)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* --- APPOINTMENT BOOKING & QUICK CONTACT CARDS --- */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
          
          {/* Card 1: Direct Contact for Booking */}
          <div className="glass-card bg-[var(--bg-surface)] glass-card-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[var(--accent-text)] mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Book Appointment Now</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Appointments are open! Reach out to us directly for emergency consultations, Kundali readings, and astrological advice.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-[var(--border-subtle)]">
                  <div>
                    <span className="text-xs text-[var(--text-secondary)] block">Primary Helpline</span>
                    <span className="text-sm font-semibold text-[var(--accent-text)]">{primaryPhone}</span>
                  </div>
                  <button 
                    onClick={handleCopyPhone}
                    className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-[var(--accent-text)] text-xs font-medium transition-colors"
                  >
                    {copiedPhone ? 'Copied! ✓' : 'Copy'}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-[var(--border-subtle)]">
                  <div>
                    <span className="text-xs text-[var(--text-secondary)] block">Secondary Helpline</span>
                    <span className="text-sm font-semibold text-slate-200">{secondaryPhone}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                className="flex-1 py-3 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-sm text-center transition-colors flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Directly
              </a>
              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="flex-1 py-3 px-4 rounded-xl border border-amber-500/40 hover:bg-amber-500/10 text-[var(--accent-text)] font-semibold text-sm transition-colors text-center"
              >
                Request Callback
              </button>
            </div>
          </div>

          {/* Card 2: Instant WhatsApp & Social Booking */}
          <div className="glass-card bg-[var(--bg-surface)] glass-card-hover p-6 rounded-2xl relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.407 3.484 2.247 2.247 3.482 5.232 3.481 8.408 0 6.556-5.331 11.888-11.888 11.888-2.008 0-3.978-.506-5.727-1.468l-6.271 1.645zm6.012-3.662l.366.216c1.55.918 3.324 1.402 5.137 1.403 5.437 0 9.858-4.422 9.858-9.858 0-2.633-1.025-5.108-2.887-6.97-1.862-1.862-4.337-2.887-6.97-2.887-5.437 0-9.858 4.422-9.858 9.858 0 1.884.531 3.722 1.538 5.318l.238.375-1.011 3.693 3.779-.991zm10.748-6.721c-.307-.154-1.815-.896-2.097-.999-.282-.102-.487-.154-.692.154-.205.307-.795.999-.974 1.205-.179.205-.359.231-.666.077-.307-.154-1.299-.479-2.474-1.527-.914-.816-1.531-1.824-1.71-2.131-.179-.307-.019-.473.134-.626.138-.138.307-.359.461-.538.154-.179.205-.307.307-.513.102-.205.051-.385-.026-.538-.077-.154-.692-1.666-.948-2.281-.249-.599-.503-.518-.692-.527-.179-.008-.384-.01-.589-.01-.205 0-.538.077-.82.385-.282.307-1.076 1.051-1.076 2.564 0 1.513 1.102 2.973 1.256 3.178.154.205 2.17 3.313 5.257 4.646.734.317 1.307.507 1.753.649.738.235 1.41.202 1.941.123.593-.088 1.815-.743 2.071-1.46.256-.718.256-1.333.179-1.46-.077-.128-.282-.205-.589-.359z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">WhatsApp Instant Booking</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-6">
                Prefer messaging? Send your birth details or appointment inquiry directly to our WhatsApp support team for quick assistance.
              </p>

              <div className="p-4 rounded-xl bg-[var(--bg-alt)] border border-emerald-500/20 mb-6 flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs text-emerald-300 font-medium">WhatsApp Consultation Desk Online</span>
              </div>
            </div>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hello%20Astroacharya,%20I%20would%20like%20to%20book%20an%20appointment%20for%20an%20astrological%20consultation.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-[var(--text-primary)] font-semibold text-sm text-center transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.407 3.484 2.247 2.247 3.482 5.232 3.481 8.408 0 6.556-5.331 11.888-11.888 11.888-2.008 0-3.978-.506-5.727-1.468l-6.271 1.645zm6.012-3.662l.366.216c1.55.918 3.324 1.402 5.137 1.403 5.437 0 9.858-4.422 9.858-9.858 0-2.633-1.025-5.108-2.887-6.97-1.862-1.862-4.337-2.887-6.97-2.887-5.437 0-9.858 4.422-9.858 9.858 0 1.884.531 3.722 1.538 5.318l.238.375-1.011 3.693 3.779-.991z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

        </div>

        {/* --- SOCIAL MEDIA HANDLES SECTION --- */}
        <div className="w-full max-w-4xl mb-12">
          <div className="glass-card bg-[var(--bg-surface)] p-6 md:p-8 rounded-3xl text-center">
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Connect With Us On Social Media</h3>
            <p className="text-sm text-[var(--text-secondary)] mb-8 max-w-lg mx-auto">
              Follow our channels for daily horoscope updates, planetary transits, auspicious timings (Shubh Muhurat), and spiritual wisdom while our website is launching.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-purple-900/30 to-pink-900/20 border border-pink-500/20 hover:border-pink-500/50 hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 flex items-center justify-center text-[var(--text-primary)] mb-2 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-[var(--accent-text)]">Instagram</span>
                <span className="text-[10px] text-[var(--text-secondary)]">@astroacharya</span>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-red-900/30 to-slate-900/40 border border-red-500/20 hover:border-red-500/50 hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-[var(--text-primary)] mb-2 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-[var(--accent-text)]">YouTube</span>
                <span className="text-[10px] text-[var(--text-secondary)]">Astroacharya Official</span>
              </a>

              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-blue-900/30 to-slate-900/40 border border-blue-500/20 hover:border-blue-500/50 hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-[var(--text-primary)] mb-2 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-[var(--accent-text)]">Facebook</span>
                <span className="text-[10px] text-[var(--text-secondary)]">Astroacharya</span>
              </a>

              {/* Telegram */}
              <a
                href="https://telegram.org"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-sky-900/30 to-slate-900/40 border border-sky-500/20 hover:border-sky-500/50 hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-[var(--text-primary)] mb-2 shadow-md">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.562 8.161c-.18.717-.962 4.084-1.362 5.753-.17.706-.433.943-.684.966-.547.05-1.002-.361-1.533-.709-.831-.546-1.301-.885-2.108-1.416-.933-.614-.328-.951.204-1.505.139-.145 2.553-2.341 2.6-2.542.006-.025.011-.119-.044-.169-.055-.05-.137-.033-.197-.02-.084.019-1.424.906-4.019 2.657-.38.261-.724.389-1.032.382-.34-.007-.993-.192-1.479-.35-.596-.194-1.07-.297-1.029-.627.022-.172.261-.349.718-.531 2.812-1.225 4.688-2.033 5.628-2.424 2.68-1.116 3.238-1.31 3.602-1.316.08 0 .259.02.375.114.098.08.127.189.138.266.012.086.026.28.016.439z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-[var(--accent-text)]">Telegram</span>
                <span className="text-[10px] text-[var(--text-secondary)]">Daily Rashifal</span>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 hover:border-slate-500 hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[var(--text-primary)] mb-2 shadow-md">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-[var(--accent-text)]">X (Twitter)</span>
                <span className="text-[10px] text-[var(--text-secondary)]">@astroacharya</span>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@astroacharya.com"
                className="flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-b from-amber-900/30 to-slate-900/40 border border-amber-500/20 hover:border-amber-500/50 hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-amber-600 flex items-center justify-center text-black mb-2 shadow-md">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-xs font-semibold text-slate-200 group-hover:text-[var(--accent-text)]">Email Us</span>
                <span className="text-[10px] text-[var(--text-secondary)]">Support Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* --- UPCOMING SERVICES PREVIEW --- */}
        <div className="w-full max-w-4xl mb-12">
          <h4 className="text-xs font-semibold uppercase tracking-widest text-[var(--accent-text)] mb-4 text-center">Services Arriving Soon</h4>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {[
              '🪐 Vedic Kundali Analysis',
              '🔮 Tarot & Clairvoyance',
              '🏠 Vastu Shastra Consultation',
              '💍 Gemstone Recommendation',
              '💑 Marriage & Compatibility',
              '📈 Career & Business Astrological Remedies',
            ].map((service, idx) => (
              <span key={idx} className="px-4 py-2 rounded-full bg-[var(--bg-surface)] border border-amber-500/20 text-xs text-[var(--text-secondary)] hover:border-amber-500/40 transition-colors">
                {service}
              </span>
            ))}
          </div>
        </div>

        {/* --- NOTIFY ME FORM --- */}
        <div className="w-full max-w-lg glass-card bg-[var(--bg-surface)] p-6 rounded-2xl mb-8">
          <h3 className="text-base font-bold text-[var(--text-primary)] mb-2">Be First To Know When We Launch</h3>
          <p className="text-xs text-[var(--text-secondary)] mb-4">Subscribe to receive exclusive opening consultation discounts and launch notifications.</p>

          {emailSubmitted ? (
            <div className="p-3 rounded-xl bg-amber-500/20 border border-amber-500/40 text-[var(--accent-text)] text-xs font-semibold flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              Thank you! We have added you to our VIP launch list.
            </div>
          ) : (
            <form onSubmit={handleEmailSubmit} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email address..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black text-xs font-semibold transition-colors"
              >
                Notify Me
              </button>
            </form>
          )}
        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 py-6 px-6 border-t border-[var(--border-subtle)] text-center text-xs text-[var(--text-secondary)]">
        <p>© {currentYear} Astroacharya. All rights reserved. Crafting celestial experiences for spiritual well-being.</p>
      </footer>

      {/* --- APPOINTMENT BOOKING MODAL --- */}
      {isBookingModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-card bg-[var(--bg-surface)] w-full max-w-md p-6 rounded-3xl relative animate-float">
            <button 
              onClick={() => setIsBookingModalOpen(false)}
              className="absolute top-4 right-4 text-[var(--text-secondary)] hover:text-[var(--text-primary)] p-2 rounded-full"
            >
              ✕
            </button>

            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Book Your Appointment</h3>
            <p className="text-xs text-[var(--text-secondary)] mb-6">Schedule your one-on-one session with our senior Astrologers.</p>

            {bookingSuccess ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center text-2xl">
                  ✓
                </div>
                <h4 className="text-lg font-bold text-[var(--text-primary)]">Booking Request Sent!</h4>
                <p className="text-xs text-[var(--text-secondary)] max-w-xs mx-auto">
                  Our team will contact you at <span className="text-[var(--accent-text)]">{bookingForm.phone || primaryPhone}</span> within 2 hours to confirm your slot.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Phone Number (Required for appointment)</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={bookingForm.phone}
                    onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Consultation Category</label>
                  <select
                    value={bookingForm.service}
                    onChange={(e) => setBookingForm({...bookingForm, service: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-amber-500"
                  >
                    <option value="Vedic Astrology">Vedic Astrology & Janam Kundali</option>
                    <option value="Matchmaking">Kundali Matching / Vivah Yog</option>
                    <option value="Career & Wealth">Career & Business Consultation</option>
                    <option value="Vastu Shastra">Vastu Shastra Consultation</option>
                    <option value="Gemstones">Gemstone Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Preferred Date (Optional)</label>
                  <input
                    type="date"
                    value={bookingForm.date}
                    onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">Birth Details / Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Provide birth date, time, and place (if available)..."
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({...bookingForm, notes: e.target.value})}
                    className="w-full px-3.5 py-2 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:border-amber-500 resize-none"
                  />
                </div>

                <div className="pt-2 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setIsBookingModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] hover:bg-white/5"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition-colors"
                  >
                    Submit Booking Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
