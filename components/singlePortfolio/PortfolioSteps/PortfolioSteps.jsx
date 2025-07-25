import Image from 'next/image'
import React from 'react'
import SingleStep from './components/SingleStep'

import bg from '@assets/images/portfolio/steps-bg.webp'
import IntersectionListener from '@components/IntersectionListener'

const PortfolioSteps = ({dict, steps}) => {
    console.log(steps)
  return (
    <section id="portfolio-steps-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] overflow-hidden relative py-16 portfolio-steps-hidden'>
        <IntersectionListener selector="#portfolio-steps-section" visibleClass="portfolio-steps-visible" hiddenClass="portfolio-steps-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>

        <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] w-fit heading-gradient-gray mx-[calc((1240px-964px)/2)] max-2xl:mx-[calc((1180px-814px)/2)] max-xl:mx-[calc((960px-814px)/2)] max-lg:mx-[calc((100%-532px)/2)] mb-12 transition-all duration-1000 ease-in-out animation-opacity max-sm:mx-auto max-sm:text-center'>{dict.title}</h2>

        <article className='flex flex-wrap items-start max-w-[964px] mx-auto gap-8 max-2xl:max-w-[814px] max-lg:max-w-[532px] max-sm:max-w-[250px] max-sm:gap-12'>
            {steps.map((s, idx) => <SingleStep key={idx} data={s} idx={idx}/>)}
        </article>

        <div className='absolute inset-0 z-[-1] backdrop-blur-[5px]'/>
        <Image src={bg} width={1240} height={760} alt={dict.alt} className='brightness-10 absolute inset-0 h-full z-[-2] object-center object-cover transition-all duration-1000 ease-in-out animation-opacity'/>
    </section>
  )
}

export default PortfolioSteps