import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'
import React from 'react'

const PortfolioBrief = ({dict, brief, screens, convertLink}) => {
  return (
    <section id='portfolio-brief-section' className='w-full flex justify-between gap-32 max-2xl:gap-24 max-lg:flex-col items-center max-sm:w-[90%] mx-auto portfolio-brief-hidden'>
        <IntersectionListener selector="#portfolio-brief-section" visibleClass="portfolio-brief-visible" hiddenClass="portfolio-brief-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
        
        <div className='flex-1 max-lg:max-w-[550px] max-sm:w-full animation-left transition-all duration-1000 ease-in-out'>
            <Image src={convertLink(screens[4].file)} width={550} height={350} alt={dict.alts[0]} className='h-[350px] w-full object-cover'/>
        </div>

        <article className='w-[550px] max-xl:w-[400px] max-lg:w-[550px] max-sm:w-full'>
            <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] max-w-[330px] heading-gradient-gray mb-6 animation-left transition-all duration-1000 ease-in-out delay-100'>{dict.title}</h2>
            {brief.map((b, idx) => (
                <div className='flex items-center gap-3 mt-2 animation-left transition-all duration-1000 ease-in-out' style={{transitionDelay: (idx+2)*100 + 'ms'}}>
                    <span className='!font-bold text-[32px] heading-gradient-gray w-[20px] max-2xl:text-[28px]'>{idx+1}</span>
                    <p key={idx} className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'> {b}</p>
                </div>
            ))}
        </article>
 
            <div className='flex-1 max-lg:max-w-[550px] max-sm:w-full animation-right transition-all duration-1000 ease-in-out'>
                <Image src={convertLink(screens[5].file)} width={550} height={350} alt={dict.alts[1]} className='h-[350px] w-full object-cover'/>
            </div>
    </section>
  )
}

export default PortfolioBrief