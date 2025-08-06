import Image from 'next/image'
import React from 'react'

import img1 from '@assets/images/cities/general/cityPortfolio-1.webp'
import img2 from '@assets/images/cities/general/cityPortfolio-2.webp'
import IntersectionListener from '@components/IntersectionListener'

const CityPortfolio = ({ dict }) => {
    return (
        <section id="city-portfolio-section" className='w-full relative city-portfolio-hidden'>

            <IntersectionListener selector="#city-portfolio-section" visibleClass="city-portfolio-visible" hiddenClass="city-portfolio-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />
            
            <article className='w-[800px] max-lg:w-[90%] mx-auto flex flex-col items-center justify-center gap-4 h-[600px] transition-all duration-1000 ease-in-out animation-bottom relative z-10 max-2xl:h-[500px] max-xl:h-[400px] max-sm:px-4'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray text-center'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] text-center'>{dict.content}</p>
                <button className='primary-gradient text-[16px] max-2xl:text-[15px] max-sm:text-[14px] h-[45px] px-16 mt-8 rounded-full'>{dict.button}</button>
            </article>

            <div className='absolute left-0 top-0 z-[1] transition-all duration-1000 ease-in-out animation-left max-lg:h-[400px] max-lg:w-[40%]'>
                <div className='absolute inset-0 z-[-1] bg-linear-to-l from-[#000000] to-[#00000080]' />
                <Image src={img1} width={600} height={600} alt={dict.alts[0]} className='relative z-[-2] max-2xl:w-[500px] max-xl:w-[400px] object-cover max-lg:h-full'/>
            </div>

            <div className='absolute right-0 top-0 z-[1] transition-all duration-1000 ease-in-out animation-right max-lg:h-[400px] max-lg:w-[40%]'>
                <div className='absolute inset-0 z-[-1] bg-linear-to-r from-[#000000] to-[#00000080]' />
                <Image src={img2} width={600} height={600} alt={dict.alts[1]} className='relative z-[-2] max-2xl:w-[500px] max-xl:w-[400px] object-cover max-lg:h-full'/>
            </div>

        </section >
    )
}

export default CityPortfolio