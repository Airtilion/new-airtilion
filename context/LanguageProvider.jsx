'use client';

import { createContext, useContext } from 'react';

export const LanguageContext = createContext();

export function LanguageProvider({ lang, children }) {
  return (
    <LanguageContext.Provider value={lang}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);