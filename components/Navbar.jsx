'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import WebsiteSettings from './WebsiteSettings';
import { useEffect, useRef, useState } from 'react';

import pl from '@languages/pl/main.json';
import en from '@languages/en/main.json';
import { useSearchParams } from 'next/navigation';

export default function Navbar() {
  const mobileMenuRef = useRef(null);
  const menuRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);


  const searchParams = useSearchParams();
  const lang = searchParams.get('lang') === 'en' ? 'en' : 'pl';
  const dict = lang === 'en' ? en.menu : pl.menu;


  const menuVisibilityHandle = () => {
    const mButton = menuRef.current;
    const mMenu = mobileMenuRef.current;

    if (mButton.classList.contains("active")) {
      mButton.classList.remove("active");
    } else {
      mButton.classList.add("active");
    }

    if (mMenu.classList.contains("flex")) {
      mMenu.classList.remove("flex");
      mMenu.classList.add("hidden");
      document.querySelector('body').classList.remove('overflow-hidden')
    } else {
      mMenu.classList.add("flex");
      mMenu.classList.remove("hidden");
      document.querySelector('body').classList.add('overflow-hidden')
    }
  };

  const handleResize = () => {
    if (window.innerWidth > 1023) {
      mobileMenuRef.current.classList.add("hidden");
      mobileMenuRef.current.classList.remove("flex");
      menuRef.current.classList.remove("active");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div ref={menuRef} onClick={menuVisibilityHandle} className='translate-y-animation hamburger-menu w-12 h-[35px] duration-500 rounded-[5px] z-30 max-lg:flex flex-col justify-between items-center gap-[10px] hidden fixed right-16 top-[32px] max-sm:top-[27.5px] max-sm:right-6'>
        <span className=' block h-[5px] w-12 bg-[#ffffff] bg-gradient-to-r from-[#E28350] to-[#412515] opacity-[1] left-0 rounded-full duration-500'></span>
        <span className=' block h-[5px] w-12 bg-[#ffffff] bg-gradient-to-r from-[#E28350] to-[#412515] opacity-[1] left-0 rounded-full duration-500'></span>
        <span className=' block h-[5px] w-12 bg-[#ffffff] bg-gradient-to-r from-[#E28350] to-[#412515] opacity-[1] left-0 rounded-full duration-500'></span>
      </div>


      <div className={`flex items-center justify-between px-24 h-[120px] w-full fixed top-0 max-2xl:px-16 z-20 ${isScrolled && 'backdrop-blur-[10px] bg-[#00000040]'} max-lg:h-[90px] max-sm:px-6`}>
        <Link href="/">
          <img src="/airtilion-logo.svg" width={230} height={60} alt="Logo firmy airtilion" className='opacity-0 translate-y-animation max-2xl:w-[200px] max-xl:w-[160px] max-lg:w-[200px]' />
        </Link>

        <div className="flex gap-4 items-center max-xl:gap-3 max-lg:hidden">
          <nav className="flex gap-[32px] text-[16px] mr-[16px] max-2xl:text-[15px] max-xl:text-[14px]">
            {dict.items.map((item, index) => (
              <Link key={index} href={item.link} className='opacity-0 translate-y-animation' style={{ animationDelay: 100 * index + 'ms' }}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button className="flex justify-between items-center gap-4 h-[50px] bg-gradient-to-r from-[#000000] to-[#E28350] text-[17px] rounded-full px-8 py-3 text-white opacity-0 translate-y-animation max-2xl:h-[40px] max-2xl:text-[15px] max-2xl:gap-3" style={{ animationDelay: dict.items?.length * 100 + 'ms' }}>
            <Icon icon="solar:letter-bold" width="24" height="24" className='max-2xl:w-[22px]' />
            {dict.pricing}
          </button>

          <WebsiteSettings index={dict.items?.length} />
        </div>


        {/* Wersja mobilna */}

        <div ref={mobileMenuRef} className='fixed inset-0 h-dvh bg-[#000000c1] z-70 hidden backdrop-blur-[10px] justify-center items-center flex-col gap-[32px]'>
          <nav className="flex flex-col gap-[32px] text-[18px] mr-[16px]">
            {dict.items.map((item, index) => (
              <Link key={index} href={item.link} className='opacity-0 translate-y-animation text-center' style={{ animationDelay: 100 * index + 'ms' }}>
                {item.name}
              </Link>
            ))}
          </nav>

          <button className="flex justify-between items-center gap-4 h-[50px] bg-gradient-to-r from-[#542f1b] to-[#E28350] text-[17px] rounded-full px-8 py-3 text-white opacity-0 translate-y-animation max-2xl:h-[40px] max-2xl:text-[15px] max-2xl:gap-3" style={{ animationDelay: dict.items.length * 100 + 'ms' }}>
            <Icon icon="solar:letter-bold" width="24" height="24" className='max-2xl:w-[22px]' />
            {dict.pricing}
          </button>

          <WebsiteSettings index={dict.items?.length} />
        </div>
      </div>
    </>
  );
}
