import React from 'react'
import Image from 'next/image'

import CustomContactToggle from '@components/CustomContactToggle'
import portfolio from '@assets/images/new-cities/portfolio.webp'

const CityHeader = ({ dict }) => {
  return (
    <header className='mt-40 relative flex-center gap-16 section-style max-xl:gap-24 max-lg:flex-col max-lg:gap-16'>

      <div className='flex-1 text-paragraph opacity-0 translate-x-animation max-lg:text-center'>
        <h1 className='text-[32px] max-xl:text-[30px] max-sm:text-[25px]' dangerouslySetInnerHTML={{ __html: dict.h1 }} />
        <p className="mt-8" dangerouslySetInnerHTML={{ __html: dict.desc[0] }} />
        <p className="mt-16 !font-semibold max-xl:mt-12" dangerouslySetInnerHTML={{ __html: dict.desc[1] }} />

        <CustomContactToggle text={dict.buttonText} classes='mt-4 w-[600px] h-[50px] rounded-full bg-gradient-to-r from-[#000000] to-[#E28350] duration-700 hover:scale-95 max-2xl:w-[575px] max-xl:w-[500px] max-sm:w-[90%]' />

        <p className="mt-16 max-xl:mt-12" dangerouslySetInnerHTML={{ __html: dict.cta }} />
      </div>

      <div className='w-[590px] max-2xl:w-[560px] max-xl:w-[364px] max-lg:w-[425px] max-sm:w-[90%]'>
        <Image src={portfolio} alt={dict.alt} width={591} height={717} className='object-cover aspect-[591/717] opacity-animation' />
      </div>

      <div className='absolute -z-1 section-style h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />

    </header>
  )
}

export default CityHeader