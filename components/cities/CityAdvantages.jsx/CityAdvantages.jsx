import Image from 'next/image'
import React from 'react'
import IntersectionListener from '@components/IntersectionListener'
import SingleAdvantage from './components/SingleAdvantage'

const CityAdvantages = ({image, dict}) => {
  return (
    <section id='city-advantages-section' className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto relative flex gap-4 city-advantages-hidden max-lg:flex-col-reverse'>
        <IntersectionListener selector="#city-advantages-section" visibleClass="city-advantages-visible" hiddenClass="city-advantages-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
        
        <article className='absolute w-[65%] right-8 top-32 flex flex-col gap-2 max-xl:top-30 max-lg:w-full max-lg:relative max-lg:right-auto max-lg:top-auto'>
            {dict.elements.map((a, idx) => (
                <SingleAdvantage key={idx} title={a.title} value={a.desc} idx={idx}/>
            ))}
        </article>

        <Image src={image} width={500} height={500} alt={dict.alt} quality={100} className='animation-opacity transition-all duration-1000 ease-in-out max-xl:w-[400px] max-lg:mx-auto max-lg:w-[500px] max-lg:h-[300px] object-cover max-lg:rounded-[5px]'/>
        <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit mt-4 animation-opacity transition-all duration-1000 ease-in-out max-lg:mt-0 max-lg:mb-4 max-lg:text-center max-lg:mx-auto'>{dict.title}</h2>


        <div className='absolute w-[80%] h-[85%] right-0 bottom-[-20px] border-[0.5px] border-[#5B595980] z-[-1] rounded-[5px] animation-opacity transition-all duration-1000 ease-in-out max-lg:w-[90%] max-lg:right-auto max-lg:left-[50%] max-lg:translate-x-[-50%]'/>
        <div className='absolute left-[-20%] top-[50%] translate-y-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[700px] h-[500px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-lg:top-auto max-lg:bottom-[10%] max-md:blur-[120px] max-sm:left-[-70%]'></div>
        
    </section>
  )
}

export default CityAdvantages