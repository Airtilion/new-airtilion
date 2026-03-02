import React from 'react'
import Image from 'next/image'

import IntersectionListener from '@components/IntersectionListener'

import bg1 from '@assets/images/cities/general/cityIntro-1.webp'
import bg2 from '@assets/images/cities/general/cityIntro-2.webp'

const offer = [
    "Integracje z systemami płatności (BLIK, karty, szybkie przelewy).",
    "Moduły wspierające zarządzanie magazynem i logistykę.",
    "Wspieranie konwersji poprzez przejrzystą ścieżkę zakupową."
]

const Ecommerce = () => {
    return (
        <section id="city-introduction-section" className='section-style-small flex flex-col gap-4 city-introduction-hidden'>

            <IntersectionListener selector="#city-introduction-section" visibleClass="city-introduction-visible" hiddenClass="city-introduction-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='relative px-12 py-8 w-full rounded-[10px] overflow-hidden max-sm:px-6'>
                <p className='text-[14px] !text-[#E28350] transition-all duration-1000 ease-in-out animation-left'>Z nami zyskujesz więcej niż tylko obecność w sieci</p>
                <h2 className='mt-2 text-[30px] heading-gradient-gray w-fit max-w-[460px] transition-all duration-1000 ease-in-out animation-left max-2xl:text-[25px] max-sm:text-[20px]'>Sklepy internetowe Nowy Sącz - zwiększ zyski z e-commerce</h2>

                <div className='absolute inset-0 h-full backdrop-blur-[5px] z-[-1]'></div>
                <Image src={bg1} alt='' width={1240} height={160} className='absolute inset-0 z-[-2] w-full max-xl:h-[175px] max-lg:h-[160px] max-md:h-full object-cover object-bottom transition-all duration-1000 ease-in-out animation-opacity' />
            </div>

            <div className='relative px-12 py-8 flex flex-col gap-2 justify-center w-full rounded-[10px] overflow-hidden max-sm:px-6'>
                <p className='text-[20px] max-xl:text-[18px] max-sm:text-[16px]'>Oferujemy</p>

                <ul className='mt-4 list-none list-inside pl-8 space-y-4 text-[#DBDBDB] max-sm:pl-4'>
                    {offer.map((el, idx) => (
                        <li key={idx}>
                            <span className='text-[18px] max-xl:text-[16px] max-sm:text-[14px]'>{el}</span>
                            <div className='mt-3 w-[360px] flex items-center max-sm:w-full'>
                                <div className='w-[10px] h-[10px] rounded-full bg-[#e28350]' />
                                <div className='w-full from-[#e28350] to-[#e2835000] h-[2px] bg-linear-to-r' />
                            </div>
                        </li>
                    ))}
                </ul>

                <p className='mt-8 text-paragraph'>Dla nas sklepy internetowe to <span className='font-semibold'>maszyny do zarabiania pieniędzy</span>. Dbamy o to, aby klienci sklepu internetowego czuli się bezpiecznie i chętnie finalizowali transakcje. Zapewniamy również przeszkolenie z zakresu: obsługa techniczna sklepu internetowego.</p>

                <div className='absolute inset-0 backdrop-blur-[5px] z-[-1]'></div>
                <Image src={bg2} alt='' width={1240} height={370} className='absolute inset-0 z-[-2] w-full max-xl:h-[400px] max-lg:h-full object-cover object-top transition-all duration-1000 ease-in-out animation-opacity' />
            </div>

        </section>
    )
}

export default Ecommerce