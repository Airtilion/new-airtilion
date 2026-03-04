import React from 'react'
import Image from 'next/image'

import priceF from '@assets/images/new-cities/price/price.webp'
import priceS from '@assets/images/new-cities/price/price2.webp'
import IntersectionListener from '@components/IntersectionListener'

const Price = ({ dict }) => {
    return (
        <section id='price-city' className='mt-48 section-style-small text-paragraph price-city-hidden'>
            <IntersectionListener selector="#price-city" visibleClass="price-city-visible" hiddenClass="price-city-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='flex-center gap-16 max-lg:flex-col'>
                <div className='flex-1 animation-left transition-all duration-1000 ease-in-out'>
                    <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px]' dangerouslySetInnerHTML={{ __html: dict.title }} />
                    <p className="mt-4" dangerouslySetInnerHTML={{ __html: dict.desc[0] }} />
                    <p className="mt-4" dangerouslySetInnerHTML={{ __html: dict.desc[1] }} />
                </div>

                <div className='animation-right transition-all duration-1000 ease-in-out'>
                    <Image src={priceF} alt='Projekt strony internetowej dla firmy budowlanej wyświetlany na laptopie - strony internetowe Nowy Sącz realizacje' width={515} height={500} className='object-cover' />
                </div>
            </div>

            <div className='mt-8 relative'>

                <div className='w-full relative z-1 flex-center flex-col py-16'>

                    <ol className='list-none list-inside space-y-4 w-[720px] max-lg:w-[90%]'>
                        {dict.list.map((el, idx) => (
                            <li key={idx} className='flex items-center gap-8 animation-left transition-all duration-1000 ease-in-out max-sm:gap-4' style={{ transitionDelay: (idx + 1) * 100 + 'ms' }}>
                                <span className='text-[30px] w-[21px] text-[#404040] font-black max-xl:text-[25px] max-sm:text-[20px]'>{idx + 1}</span>
                                <span className='text-[18px] flex-1 max-xl:text-[16px] max-sm:text-[14px]'>{el}</span>
                            </li>
                        ))}
                    </ol>

                    <p className='mt-12 px-8 text-center animation-left transition-all duration-1000 ease-in-out' dangerouslySetInnerHTML={{ __html: dict.price }} />
                </div>

                <div className='animation-opacity transition-all duration-1000 ease-in-out'>
                    <Image src={priceS} alt='' width={1240} height={585} className='object-cover rounded-b-[50px] w-full h-full absolute inset-0 -z-2' />
                    <div className='w-full h-full absolute -z-1 inset-0 bg-linear-to-t from-[#000000B3] to-[#000000FF] rounded-b-[50px]' />
                    <div className='w-full h-full absolute -z-3 inset-0 bg-linear-to-t from-[#E28350FF] to-[#000000] rounded-b-[50px] blur-[50px]' />
                    <div className='w-full h-full absolute inset-0 gradient-blur rounded-b-[50px]' />
                </div>

            </div>

        </section>
    )
}

export default Price