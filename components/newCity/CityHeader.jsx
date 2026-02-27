import React from 'react'
import Image from 'next/image'

import CustomContactToggle from '@components/CustomContactToggle'
import portfolio from '@assets/images/new-cities/portfolio.webp'

const CityHeader = () => {
  return (
    <header className='mt-40 relative flex-center gap-16 section-style max-xl:gap-24 max-lg:flex-col max-lg:gap-16'>

      <div className='flex-1 text-paragraph max-lg:text-center'>
        <h1 className='text-[32px] max-xl:text-[30px] max-sm:text-[25px]'>Profesjonalne strony internetowe <span className='font-semibold'>Nowy Sącz</span> -&nbsp;Tworzymy&nbsp;Twój wizerunek w sieci</h1>
        <p className="mt-8">Projektujemy nowoczesne strony internetowe, które są nie tylko wizytówką, ale przede wszystkim <span className='font-semibold'>skutecznym narzędziem sprzedaży</span>. Stawiamy na techniczną perfekcję, szybkość działania i Twoje bezpieczeństwo w sieci.</p>
        <p className="mt-16 !font-semibold max-xl:mt-12">Wycenimy Twój projekt w 24h całkowicie za darmo. Bez&nbsp;zobowiązań.</p>

        <CustomContactToggle text='Zamów darmową wycenę' classes='mt-4 w-[600px] h-[50px] rounded-full bg-gradient-to-r from-[#000000] to-[#E28350] max-2xl:w-[575px] max-xl:w-[500px] max-sm:w-[90%]' />

        <p className="mt-16 max-xl:mt-12">Wolisz porozmawiać od razu? <span className='max-xl:block'>Zadzwoń <a href='tel:+48720177174' className='text-[#E28350] font-semibold'>+48 720 177 174</a> lub <a href="tel:+48511019652" className='text-[#E28350] font-semibold'>+48 511 019 652</a></span></p>
      </div>

      <div className='w-[590px] max-2xl:w-[560px] max-xl:w-[364px] max-lg:w-[425px] max-sm:w-[90%]'>
        <Image src={portfolio} alt='Kolaż makiet z naszymi realizacjami - nowoczesne strony internetowe Nowy Sącz dla branży budowlanej i handlowej' width={591} height={717} className='object-cover aspect-[591/717]' />
      </div>

      <div className='absolute -z-1 section-style h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />

    </header>
  )
}

export default CityHeader