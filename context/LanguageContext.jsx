'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { dictionaries } from '@utils/dictionaries';

const LanguageContext = createContext();

export function LanguageProvider({ children, initialLang }) {
  const [lang, setLang] = useState(initialLang || 'pl');
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem('lang');
    if (stored && stored !== lang) {
      setLang(stored);
      document.cookie = `lang=${stored}; path=/`;
      router.refresh();
    }
  }, []);

  const toggleLanguage = () => {
    const next = lang === 'pl' ? 'en' : 'pl';
    setLang(next);
    localStorage.setItem('lang', next);
    document.cookie = `lang=${next}; path=/`;
    router.refresh();
  };

  const t = (path) =>
    path.split('.').reduce((obj, key) => obj && obj[key], dictionaries[lang]);

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
