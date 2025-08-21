import IntersectionListener from '@components/IntersectionListener'
import React from 'react'

const OfferElements = ({ dict }) => {
    return (
        <section id="offer-elements-section" className='w-full relative offer-elements-hidden'>
            <IntersectionListener selector="#offer-elements-section" visibleClass="offer-elements-visible" hiddenClass="offer-elements-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <article className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%]'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray text-center animation-bottom transition-all duration-1000 ease-in-out'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] text-center mt-2 animation-bottom transition-all duration-1000 ease-in-out'>{dict.content}</p>

                <div className='flex flex-wrap justify-center gap-2 mt-8'>
                    {dict.elements.map((el, idx) => (
                        <div key={idx} style={{transitionDelay: `${idx * 100}ms`}} className='animation-bottom transition-all duration-1000 ease-in-out group max-md:w-ful'>
                            <div  className='w-full h-full border-1 border-[#DBDBDB] rounded-full px-4 py-2 hover:bg-[#e2835080] group duration-500' >
                                <p className='text-[14px] group-hover:!text-white cursor-default max-md:text-center duration-500'>{el}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </article>

            <div className='absolute h-full w-[120%] left-[50%] top-[50%] translate-[-50%] z-[-1] rounded-[100%] bg-[#e2835066] blur-[100px]' />
        </section>
    )
}

export default OfferElements