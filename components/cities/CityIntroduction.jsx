import Image from 'next/image'
import React from 'react'

import bg1 from '@assets/images/cities/general/cityIntro-1.webp'
import bg2 from '@assets/images/cities/general/cityIntro-2.webp'
import IntersectionListener from '@components/IntersectionListener'

const CityIntroduction = ({ dict, preHeading }) => {
    return (
        <section id="city-introduction-section" className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex flex-col gap-4 city-introduction-hidden'>

            <IntersectionListener selector="#city-introduction-section" visibleClass="city-introduction-visible" hiddenClass="city-introduction-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />


            <article className='relative px-12 py-8 w-full rounded-[10px] overflow-hidden max-sm:px-6'>
                <p className='transition-all duration-1000 ease-in-out animation-left max-2xl:text-[15px] max-sm:text-[14px]'>{preHeading}</p>
                <div className='absolute inset-0 h-full backdrop-blur-[5px] z-[-1]'></div>
                <Image src={bg1} width={1240} height={160} className='absolute inset-0 z-[-2] w-full max-lg:h-full object-cover object-bottom transition-all duration-1000 ease-in-out animation-opacity' alt={dict.alts[0]} />
            </article>
            <article className='relative px-12 py-8 flex flex-col gap-2 justify-center w-full rounded-[10px] overflow-hidden max-sm:px-6'>
                <p className='text-[14px] max-sm:text-[12px] !text-[#e28350] transition-all duration-1000 ease-in-out animation-left'>{dict.tag}</p>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit max-w-[500px] transition-all duration-1000 ease-in-out animation-left'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4 transition-all duration-1000 ease-in-out animation-left'>{dict.content}</p>
                <h3 className='self-end mt-16 text-[16px] max-2xl:text-[15px] max-sm:text-[14px] font-light text-[#D8D8D8] transition-all duration-1000 ease-in-out animation-left'>{dict.ending}</h3>

                <div className='absolute inset-0 backdrop-blur-[5px] z-[-1]'></div>
                <Image src={bg2} width={1240} height={370} className='absolute inset-0 z-[-2] w-full max-lg:h-full object-cover object-top transition-all duration-1000 ease-in-out animation-opacity' alt={dict.alts[1]} />
            </article>
        </section>
    )
}

export default CityIntroduction