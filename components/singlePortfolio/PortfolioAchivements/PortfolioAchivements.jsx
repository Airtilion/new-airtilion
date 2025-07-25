import Image from 'next/image'
import React from 'react'
import SingleAchivement from './components/SingleAchivement'
import IntersectionListener from '@components/IntersectionListener'

const PortfolioAchivements = ({image, achivements, dict}) => {
  return (
    <section id='portfolio-achivements-section' className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto relative flex gap-4 portfolio-achivements-hidden max-lg:flex-col-reverse'>
        <IntersectionListener selector="#portfolio-achivements-section" visibleClass="portfolio-achivements-visible" hiddenClass="portfolio-achivements-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
        
        <article className='absolute w-[65%] right-8 top-28 flex flex-col gap-2 max-xl:top-20 max-lg:w-full max-lg:relative max-lg:right-auto max-lg:top-auto'>
            {achivements.map((a, idx) => (
                <SingleAchivement key={idx} title={a.title} value={a.value} idx={idx}/>
            ))}
        </article>

        <Image src={image} width={500} height={500} alt={dict.alt} quality={100} className='animation-opacity transition-all duration-1000 ease-in-out max-xl:w-[400px] max-lg:mx-auto max-lg:w-[500px] max-lg:h-[300px] object-cover max-lg:rounded-[5px]'/>
        <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit mt-4 animation-opacity transition-all duration-1000 ease-in-out max-lg:mt-0 max-lg:mb-4 max-lg:mx-auto'>{dict.title}</h2>


        <div className='absolute w-[80%] h-[90%] right-0 bottom-[-20px] border-[0.5px] border-[#5B595980] z-[-1] rounded-[5px] animation-opacity transition-all duration-1000 ease-in-out max-lg:w-[90%] max-lg:right-auto max-lg:left-[50%] max-lg:translate-x-[-50%]'/>

    </section>
  )
}

export default PortfolioAchivements