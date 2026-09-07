import React from 'react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const AdministrationWebsitesCta = ({ dict }) => {
  return (
    <section className='my-64 section-style leading-relaxed mx-auto text-center max-w-4xl max-md:max-w-none'>
      <h2 className='text-[35px] font-medium text-white max-lg:text-[30px] max-sm:text-[28px]'>{dict.h3}</h2>
      <p className='mt-2 mb-8 text-[18px] max-lg:text-[16px]'>{dict.desc}</p>
      <WhiteBtn href={dict.href}>{dict.button}</WhiteBtn>
    </section>
  )
}

export default AdministrationWebsitesCta