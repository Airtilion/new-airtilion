import React from 'react'
import lionImg from '@assets/images/portfolio/cta-p-bg.webp'
import CustomContactToggle from '@components/CustomContactToggle'
import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'

const CallToActionLionv1 = ({ dict }) => {
  return (
    <section id="cta-section" className='mt-48 section-style-small relative flex-center min-h-[300px] overflow-hidden element-hidden-opacity transition-all duration-1000 ease-in-out'>
      <IntersectionListener selector="#cta-section" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.1" rootMargin='0px 0px -50px 0px' />

      <div className='text-paragraph text-center p-8 max-sm:px-4'>
        <h2 className='text-[40px] heading-gradient-gray max-xl:text-[30px] max-sm:text-[25px]'>{dict.title}</h2>
        <p className='mt-4' dangerouslySetInnerHTML={{ __html: dict.desc[0] }} />
        <p className='max-lg:mt-2' dangerouslySetInnerHTML={{ __html: dict.desc[1] }} />
        <CustomContactToggle text={dict.buttonText} classes="mt-12 primary-gradient px-9 h-[50px] rounded-full duration-700 hover:scale-95 max-sm:w-full" />
      </div>


      <Image src={lionImg} alt='' width={1240} height={300} className='object-top object-cover h-full rounded-[10px] absolute inset-0 -z-2' />
      <div className='w-[1240px] h-full bg-[#000000B3] absolute inset-0 -z-1 max-xl:w-[960px] max-lg:w-full' />

    </section>
  )
}

export default CallToActionLionv1