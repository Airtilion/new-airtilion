import React from 'react'
import Image from 'next/image'

import priceF from '@assets/images/new-cities/price/price.webp'
import priceS from '@assets/images/new-cities/price/price2.webp'

const elements = [
    "Responsywna strona internetowa z indywidualnym projektem graficznym.",
    "Komplet podstawowych zakładek (np. Strona główna, O nas, Oferta, Blog, Kontakt).",
    "Wdrożenie intuicyjnego panelu zarządzania (CMS).",
    "Pełna optymalizacja techniczna SEO i wyśrubowana szybkość ładowania (Core Web Vitals).",
    "Konfiguracja bezpieczeństwa, formularzy kontaktowych oraz analityki (certyfikat SSL, Cookie Consent Mode v2, RODO).",
    "12 miesięcy gwarancji na niezawodne działanie witryny oraz 3 godziny wsparcia technicznego do wykorzystania (np. na dodatkowe szkolenie czy rozbudowę)."
]

const Price = () => {
    return (
        <section className='mt-48 section-style-small text-paragraph'>

            <div className='flex-center gap-16 max-lg:flex-col'>
                <div className='flex-1'>
                    <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px]'>Cennik stron internetowych i&nbsp;pakiety&nbsp;cenowe</h2>
                    <p className="mt-4">Ile kosztują profesjonalne strony www? Każdy biznes jest inny, dlatego unikamy sztywnych ram, które na siłę próbują wpasować klienta w szablon. Oferujemy <span className="font-semibold">indywidualną i darmową wycenę</span> skrojoną idealnie pod Twoje potrzeby i budżet.</p>
                    <p className="mt-4">Nie chcemy jednak zostawiać Cię z odpowiedzią „to zależy”. <span className="font-semibold">Aby dać Ci realny punkt odniesienia, poniżej przedstawiamy zakres przykładowego projektu.</span></p>
                </div>

                <div>
                    <Image src={priceF} alt='Projekt strony internetowej dla firmy budowlanej wyświetlany na laptopie - strony internetowe Nowy Sącz realizacje' width={515} height={500} className='object-cover' />
                </div>
            </div>

            <div className='mt-8 relative'>

                <div className='w-full relative z-1 flex-center flex-col py-16'>
                    
                    <ol className='list-none list-inside space-y-4 w-[720px] max-lg:w-[90%]'>
                        {elements.map((el, idx) => (
                            <li key={idx} className='flex items-center gap-8 max-sm:gap-4'>
                                <span className='text-[30px] w-[21px] text-[#404040] font-black max-xl:text-[25px] max-sm:text-[20px]'>{idx + 1}</span>
                                <span className='text-[18px] flex-1 max-xl:text-[16px] max-sm:text-[14px]'>{el}</span>
                            </li>
                        ))}
                    </ol>

                    <p className='mt-12 px-8 text-center'>Taka realizacja - stanowiąca solidny fundament Twojego biznesu w sieci - to inwestycja zaczynająca się od&nbsp;<span className='font-bold text-[30px] text-[#E28350] max-xl:text-[25px] max-sm:text-[22px]'>2999&nbsp;zł</span>&nbsp;netto.</p>
                </div>

                <div>
                    <Image src={priceS} alt='' width={1240} height={585} className='object-cover rounded-b-[50px] w-full h-full absolute inset-0 -z-2' />
                    <div className='w-full h-full absolute -z-1 inset-0 bg-linear-to-t from-[#000000B3] to-[#000000FF] rounded-b-[50px]' />
                    <div className='w-full h-full absolute -z-3 inset-0 bg-linear-to-t from-[#E28350FF] to-[#000000] rounded-b-[50px] blur-[50px]' />
                    <div className='w-full h-full absolute inset-0 gradient-blur rounded-b-[50px]' />
                </div>

            </div>

        </section>
    )
}

export default Price