'use client';
import { useThemeContext } from '@context/ThemeContext';
import { useLanguage } from '@context/LanguageContext';
import { Icon } from '@iconify/react';

export default function WebsiteSettings({index}) {
  const { theme, toggleTheme } = useThemeContext();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <div className="bg-gradient-to-l from-[#000000] max-lg:from-[#542f1b] to-[#E28350] rounded-full flex gap-2 h-[50px] px-[12px] py-[8px] opacity-0 translate-y-animation max-2xl:h-[40px]" style={{animationDelay: ((Number(index)+1) * 100) + 'ms'}}>
      <button onClick={toggleTheme} className="bg-[#00000040] rounded-full flex items-center gap-[8px] px-[8px] relative max-xl:px-[6px]">
        <Icon icon="solar:moon-bold" width="20" height="20" className="text-white dark:text-[#E28350] z-[1] max-2xl:w-[16px]" />
        <Icon icon="tabler:sun-filled" width="20" height="20" className="text-[#E28350] dark:text-white z-[1] max-2xl:w-[16px]" />
        <div className={`w-[24px] h-[24px] bg-white absolute rounded-full z-0 left-[6px] duration-500 max-2xl:w-[20px] max-2xl:h-[20px] max-xl:left-[4px] ${ theme === 'light' ? 'left-[34px] max-2xl:left-[30px] max-xl:left-[28px]' : ''}`}
        />
      </button>

      <button onClick={toggleLanguage}>
        {lang === 'en' ? (
          <Icon icon="flag:pl-4x3" width="30" height="24" className="rounded-full max-2xl:w-[25px]"/>
        ) : (
          <Icon icon="flag:gb-4x3" width="30" height="24" className="rounded-full max-2xl:w-[25px]" />
        )}
      </button>
    </div>
  );
}
