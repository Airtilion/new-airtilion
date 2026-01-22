'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction';
import SlideUpContact from '@components/SlideUpContact';
import Footer from '@components/Footer';

export default function BlogBottomWrapper({ initialDictionary }) {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');
  const isEnglish = langParam === 'en';
  const currentLang = isEnglish ? 'en' : 'pl';

  const [dictionary, setDictionary] = useState(initialDictionary);

  useEffect(() => {
    const loadDictionary = async () => {
      if (isEnglish) {
        try {
          
          const module = await import(`@languages/en/blog.json`); 
          
          const newDict = module.default || module; 
          
          setDictionary(newDict);
        } catch (error) {
          console.error("Nie udało się załadować angielskiego słownika dla bloga:", error);
        }
      } else {
        setDictionary(initialDictionary);
      }
    };

    loadDictionary();
  }, [isEnglish, initialDictionary]);

  return (
    <>
      <PortfolioCallToAction dict={dictionary.cta} mt={96} />
      <SlideUpContact dict={dictionary.cta.form} lang={currentLang} />
      <Footer dict={dictionary.footer} />
    </>
  );
}