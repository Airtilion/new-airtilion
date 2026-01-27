'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import Toggle from './Toggle';

const CookiesTemplate = () => {
  const [show, setShow] = useState(false);
  const [isCustomizing, setIsCustomizing] = useState(false);
  const [consent, setConsent] = useState({ analytics: true, marketing: true });

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent_v2");
    if (!saved) {
      setShow(true);
    } else {
      const parsed = JSON.parse(saved);
      updateGTM(parsed.analytics, parsed.marketing);
    }
  }, []);

  const updateGTM = (analytics, marketing) => {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        'analytics_storage': analytics ? 'granted' : 'denied',
        'ad_storage': marketing ? 'granted' : 'denied',
        'ad_user_data': marketing ? 'granted' : 'denied',
        'ad_personalization': marketing ? 'granted' : 'denied',
      });
      window.dataLayer?.push({ event: 'consent_updated' });
    }
  }

  const saveConsent = (analytics, marketing) => {
    const data = { analytics, marketing, date: new Date().toISOString() };
    localStorage.setItem("cookie_consent_v2", JSON.stringify(data));
    updateGTM(analytics, marketing);
    setShow(false);
    setIsCustomizing(false);
  }

  if (!show) return (
    <button onClick={() => setShow(true)} className='fixed bottom-4 z-[90] w-16 h-16 primary-gradient rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer right-4 max-sm:w-12 max-sm:h-12' title="Ustawienia prywatności">
      <Icon icon="mingcute:cookie-fill" className="w-12 h-12 text-white max-sm:w-8 max-sm:h-8" />
    </button>
  )

  return (
    <div className='fixed bottom-4 z-[100] w-[95%] max-w-[600px] bg-[#000000b3] shadow-[0px_0px_40px_rgba(0,0,0,0.2)] rounded-[20px] p-8 animate-in fade-in slide-in-from-bottom-5 right-4 backdrop-blur-[10px]'>
      <p className='text-[20px] font-bold !text-white'>Szanujemy Twoją prywatność</p>

      {!isCustomizing ? (

        <>
          <p className='text-[15px] mt-4 leading-relaxed !text-white'>
            Używamy plików cookie niezbędnych do działania strony oraz – za Twoją zgodą – do celów analitycznych i marketingowych. Szczegóły znajdziesz w <Link href="/polityka-prywatnosci" className="underline duration-500 hover:text-[#E28350]">Polityce Prywatności</Link>.
          </p>

          <div className='flex flex-wrap gap-3 mt-8'>
            <button onClick={() => saveConsent(true, true)} className='flex-1 text-[14px] border-2 border-[#e28350] bg-[#e28350] text-black font-medium px-6 py-3 rounded-[12px] cursor-pointer shadow-md'>
              Akceptuj wszystko
            </button>
            <button onClick={() => saveConsent(false, false)} className='flex-1 border-2 border-[#e28350] text-[14px] font-medium px-6 py-3 rounded-[12px] cursor-pointer duration-500 hover:bg-[#e28350] hover:text-black transition-all'>
              Tylko niezbędne
            </button>
            <button onClick={() => setIsCustomizing(true)} className='w-full border-2 border-[#e28350] text-[14px] font-medium px-6 py-2 rounded-[12px] cursor-pointer duration-500 hover:bg-[#e28350] hover:text-black transition-all'>
              Dostosuj preferencje
            </button>
          </div>
        </>

      ) : (

        <div className='mt-6 space-y-4'>
          <div className='flex items-center justify-between p-4 bg-[#e28350] rounded-xl'>
            <div className='pr-4'>
              <p className='text-sm !font-medium !text-black'>Niezbędne (Zawsze włączone)</p>
              <p className='text-[14px] !text-black'>Umożliwiają podstawowe funkcje bezpieczeństwa i nawigacji.</p>
            </div>
            <div className='w-10 h-6 bg-white rounded-full flex items-center px-1 opacity-50'><div className='w-4 h-4 bg-black rounded-full ml-auto' /></div>
          </div>

          <Toggle label="Analityka" desc="Pomagają nam mierzyć ruch i ulepszać treści." active={consent.analytics} onClick={() => setConsent(p => ({ ...p, analytics: !p.analytics }))} />
          <Toggle label="Marketing" desc="Pozwalają na personalizację reklam i działań na Facebooku." active={consent.marketing} onClick={() => setConsent(p => ({ ...p, marketing: !p.marketing }))} />

          <div className='flex gap-2 mt-6'>
            <button onClick={() => setIsCustomizing(false)} className='px-4 py-3 text-sm font-medium text-white'>
              Powrót
            </button>
            <button onClick={() => saveConsent(consent.analytics, consent.marketing)} className='flex-1 bg-[#e28350] text-black font-medium py-3 rounded-xl shadow-lg cursor-pointer'>
              Zapisz wybrane
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default CookiesTemplate