'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import WebsiteSettings from './WebsiteSettings';
import { useLanguage } from '@context/LanguageContext';

export default function Navbar() {
  const { t } = useLanguage();
  const menu = t('menu.items');
  const pricing = t('menu.pricing');

  return (
    <div className="flex items-center justify-between px-24 h-[120px] w-full fixed top-0">
      <img src="/airtilion-logo.svg" width={230} height={60} alt="Logo firmy airtilion" className='opacity-0 translate-y-animation' />

      <div className="flex gap-4 items-center">
        <nav className="flex gap-[32px] text-[16px] mr-[16px]">
          {menu.map((item, index) => (
            <Link key={index} href={item.link} className='opacity-0 translate-y-animation' style={{animationDelay: 100*index + 'ms'}}>
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="flex justify-between items-center gap-4 h-[50px] bg-gradient-to-r from-[#000000] to-[#E28350] text-[17px] rounded-full px-8 py-3 text-white opacity-0 translate-y-animation" style={{animationDelay: menu?.length * 100 + 'ms'}}>
          <Icon icon="solar:letter-bold" width="24" height="24" />
          {pricing}
        </button>

        <WebsiteSettings index={menu?.lenght}/>
      </div>
    </div>
  );
}
