import Image from 'next/image'
import React from 'react'
import bg from '@assets/images/offer/offer-portfolio.webp'
import IntersectionListener from '@components/IntersectionListener'

const tempData = [
    "fema", "trailbox", "elj"
]

const OfferPortfolio = ({dict}) => {
  return (
    <section id="offer-portfolio-section" className='w-full relative py-16 o-portfolio-hidden max-lg:py-0'>
        <IntersectionListener selector="#offer-portfolio-section" visibleClass="o-portfolio-visible" hiddenClass="o-portfolio-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />
        
        <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex gap-4 items-end animation-opacity transition-all duration-1000 ease-in-out max-lg:flex-col max-lg:items-center'>
            <div className='w-[50px] h-full max-lg:w-full max-lg:flex max-lg:justify-center max-lg:mb-16'>
                <h2 className='heading-gradient-gray text-[30px] max-2xl:text-[25px] max-sm:text-[20px] rotate-[270deg] origin-bottom-left ml-[50px] w-[500px] inline-block max-lg:rotate-0 max-lg:ml-auto max-lg:w-fit max-lg:mx-auto'>{dict.title}</h2>
            </div>
            {tempData.map((element, idx) => (
                <div key={idx} className={`flex-1 max-lg:flex-auto max-lg:w-[400px] max-sm:w-[290px]`} style={{height: 500 - (idx*32)}}>
                    <div className={`w-full h-full bg-red-600`}></div>
                </div>
            ))}
        </article>
        <div className='w-full absolute top-0 z-[-1] h-full overflow-hidden animation-opacity transition-all duration-1000 ease-in-out'>
            <div className='w-full h-full bg-linear-to-b from-[#000000] via-[#00000080] to-[#000000] absolute z-[2]'/>
            <div className='w-full h-full bg-linear-to-r from-[#00000099] to-[#000000] to-[77%] absolute z-[1]'/>
            <Image src={bg} width={1300} height={660} alt={dict.alt} className='relative z-[-1]'/>
        </div>
    </section>
  )
}

export default OfferPortfolio