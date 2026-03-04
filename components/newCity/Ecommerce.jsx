import React from 'react'
import Image from 'next/image'

import IntersectionListener from '@components/IntersectionListener'

import bg1 from '@assets/images/cities/general/cityIntro-1.webp'
import bg2 from '@assets/images/cities/general/cityIntro-2.webp'

const offer = [
    
]

const Ecommerce = ({ dict }) => {
    return (
        <section id="city-introduction-section" className='mt-48 section-style-small flex flex-col gap-4 city-introduction-hidden'>

            <IntersectionListener selector="#city-introduction-section" visibleClass="city-introduction-visible" hiddenClass="city-introduction-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='relative px-12 py-8 w-full rounded-[10px] overflow-hidden max-sm:px-6'>
                <p className='text-[14px] !text-[#E28350] transition-all duration-1000 ease-in-out animation-left'>{dict.decor}</p>
                <h2 className='mt-2 text-[30px] heading-gradient-gray w-fit max-w-[460px] transition-all duration-1000 ease-in-out animation-left max-2xl:text-[25px] max-sm:text-[20px]'>{dict.title}</h2>

                <div className='absolute inset-0 h-full backdrop-blur-[5px] z-[-1]'></div>
                <Image src={bg1} alt='' width={1240} height={160} className='absolute inset-0 z-[-2] w-full max-xl:h-[175px] max-lg:h-[160px] max-md:h-full object-cover object-bottom transition-all duration-1000 ease-in-out animation-opacity' />
            </div>

            <div className='relative px-12 py-8 flex flex-col gap-2 justify-center w-full rounded-[10px] overflow-hidden animation-left transition-all duration-1000 ease-in-out max-sm:px-6' style={{ transitionDelay: '200ms' }}>
                <p className='text-[20px] max-xl:text-[18px] max-sm:text-[16px]'>{dict.shortTxt}</p>

                <ul className='mt-4 list-none list-inside pl-8 space-y-4 text-[#DBDBDB] max-sm:pl-4'>
                    {dict.list.map((el, idx) => (
                        <li key={idx}>
                            <span className='text-[18px] max-xl:text-[16px] max-sm:text-[14px]'>{el}</span>
                            <div className='mt-3 w-[360px] flex items-center max-sm:w-full'>
                                <div className='w-[10px] h-[10px] rounded-full bg-[#e28350]' />
                                <div className='w-full from-[#e28350] to-[#e2835000] h-[2px] bg-linear-to-r' />
                            </div>
                        </li>
                    ))}
                </ul>

                <p className='mt-8 text-paragraph' dangerouslySetInnerHTML={{__html: dict.desc}} />

                <div className='absolute inset-0 backdrop-blur-[5px] z-[-1]'></div>
                <Image src={bg2} alt='' width={1240} height={370} className='absolute inset-0 z-[-2] w-full max-xl:h-[400px] max-lg:h-full object-cover object-top transition-all duration-1000 ease-in-out animation-opacity' />
            </div>

        </section>
    )
}

export default Ecommerce