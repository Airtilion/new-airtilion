'use client';
import { useLanguageContext } from '@context/LanguageContext';
import pl from '@languages/pl';
import en from '@languages/en';

const dictionaries = { pl, en };

export default function useTranslation() {
  const { lang } = useLanguageContext();
  return dictionaries[lang];
}
