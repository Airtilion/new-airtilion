import Image from 'next/image'
import React from 'react'

import topImage from '@assets/images/home-introdution-section/introduction-1.webp'
import bottomImage from '@assets/images/home-introdution-section/introduction-2.webp'
import IntersectionListener from '@components/IntersectionListener'

const Introduction = ({dict = {}}) => {
  return (
    <section className='w-full relative overflow-hidden'>
      
      <article id="introduction-section" className='w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex flex-col gap-16 introduction-hidden'>
          <IntersectionListener selector="#introduction-section" visibleClass="introduction-visible" hiddenClass="introduction-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px'/>
          <div className='relative img-1 transition-all duration-1000 ease-in-out'>
            <div className='bg-linear-to-b from-[#000000] to-[#00000000] absolute inset-0'></div>
            <Image src={topImage} width={1240} height={150} alt={Array.isArray(dict.alts) && dict.alts[0] ? dict.alts[0] : 'Introduction Image'} className='relative z-[-1] max-lg:h-[150px] max-lg:object-cover max-lg:rounded-b-[20px]'/>
          </div>

          <div className='flex items-center gap-32 max-2xl:gap-24 max-lg:flex-col max-lg:gap-4'>
            <h2 className='max-w-[450px] text-[30px] heading-gradient-gray max-2xl:text-[25px] max-2xl:max-w-[350px] max-lg:max-w-none max-lg:w-full max-sm:text-[20px] transition-all duration-1000 ease-in-out'>{dict?.title}</h2>
            <p className='flex-1 text-[16px] max-2xl:text-[15px] max-lg:text-[14px] content transition-all duration-1000 ease-in-out'>{dict?.content}</p>
          </div>

          <div className='relative img-2 transition-all duration-1000 ease-in-out'>
            <div className='bg-linear-to-b from-[#00000000] to-[#000000] absolute inset-0'></div>
            <Image src={bottomImage} width={1240} height={150} alt={Array.isArray(dict.alts) && dict.alts[1] ? dict.alts[1] : 'Introduction Image'} className='relative z-[-1] max-lg:h-[150px] max-lg:object-cover max-lg:rounded-t-[20px]'/>
          </div>

      </article>

        <p className='absolute top-[50%] translate-y-[-50%] w-full !text-[#E2835014] !font-black !text-[clamp(40px,17.7vw,340px)] blur-[20px] text-center max-lg:blur-[10px] max-sm:blur-[7px]'>AIRTILION</p>
    </section>
  )
}

export default Introduction