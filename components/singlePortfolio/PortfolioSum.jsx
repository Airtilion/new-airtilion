import IntersectionListener from '@components/IntersectionListener'
import React from 'react'

const PortfolioSum = ({dict, text}) => {
  return (
    <section id="sum-section" className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] flex gap-16 items-center sum-hidden mx-auto'>
        <IntersectionListener selector="#sum-section" visibleClass="sum-visible" hiddenClass="sum-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
        
        <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] max-w-[300px] heading-gradient-gray animation-bottom transition-all duration-1000 ease-in-out'>{dict.title}</h2>
        <div className='flex flex-col gap-4'>
          {text.map((t, idx) => (
              <p key={idx} className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] animation-bottom transition-all duration-1000 ease-in-out'>{t}</p>

          ))}
        </div>
    </section>
  )
}

export default PortfolioSum