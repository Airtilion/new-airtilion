'use client';
import { useThemeContext } from '@context/ThemeContext';
import { useLanguage } from '@context/LanguageContext';
import { Icon } from '@iconify/react';

export default function WebsiteSettings() {
  const { theme, toggleTheme } = useThemeContext();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="bg-gradient-to-l from-[#000000] to-[#E28350] rounded-full flex gap-2 h-[50px] px-[12px] py-[8px]">
      <button onClick={toggleTheme} className="bg-[#00000040] rounded-full flex items-center gap-[8px] px-[8px] relative">
        <Icon icon="solar:moon-bold" width="20" height="20" className="text-white dark:text-[#E28350] z-[1]" />
        <Icon icon="tabler:sun-filled" width="20" height="20" className="text-[#E28350] dark:text-white z-[1]" />
        <div className={`w-[24px] h-[24px] bg-white absolute rounded-full z-0 left-[6px] duration-500 ${ theme === 'light' ? 'left-[34px]' : ''}`}
        />
      </button>

      <button onClick={toggleLanguage}>
        {lang === 'en' ? (
          <Icon icon="flag:pl-4x3" width="30" height="24" className="rounded-full" />
        ) : (
          <Icon icon="flag:gb-4x3" width="30" height="24" className="rounded-full" />
        )}
      </button>
    </div>
  );
}
