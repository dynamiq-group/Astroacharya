'use client';

import { createContext, useContext, useState, useEffect } from 'react';
import translations from '@/data/translations';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (key, fallback) => fallback || key,
  currentDict: translations.en,
});

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const saved = localStorage.getItem('astroacharya_lang');
      if (saved === 'hi' || saved === 'en') {
        setLanguageState(saved);
        document.documentElement.lang = saved === 'hi' ? 'hi-IN' : 'en-IN';
      }
    } catch (e) {
      // localStorage may fail in private mode
    }
  }, []);

  const setLanguage = (newLang) => {
    if (newLang !== 'en' && newLang !== 'hi') return;
    setLanguageState(newLang);
    try {
      localStorage.setItem('astroacharya_lang', newLang);
      document.documentElement.lang = newLang === 'hi' ? 'hi-IN' : 'en-IN';
    } catch (e) {}
  };

  const toggleLanguage = () => {
    const nextLang = language === 'en' ? 'hi' : 'en';
    setLanguage(nextLang);
  };

  /**
   * Helper to lookup nested translation keys e.g. 'nav.home' or 'hero.titleLine1'
   */
  const t = (path, fallback = '') => {
    const dict = translations[language] || translations.en;
    const fallbackDict = translations.en;

    const resolve = (obj, p) => {
      if (!p) return null;
      return p.split('.').reduce((prev, curr) => (prev ? prev[curr] : undefined), obj);
    };

    const val = resolve(dict, path);
    if (val !== undefined && val !== null) return val;

    const fallbackVal = resolve(fallbackDict, path);
    if (fallbackVal !== undefined && fallbackVal !== null) return fallbackVal;

    return fallback || path;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t,
        currentDict: translations[language] || translations.en,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default LanguageContext;
