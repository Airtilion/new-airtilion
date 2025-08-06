import React from 'react'
import SingleStep from './components/SingleStep'
import Image from '@node_modules/next/image'

import bg from '@assets/images/cities/general/cityStepsBg.webp'
import IntersectionListener from '@components/IntersectionListener'

const CityProduction = ({ dict }) => {
    return (
        <section id="city-production-section" className='w-full relative py-16 city-production-hidden'>

            <IntersectionListener selector="#city-production-section" visibleClass="city-production-visible" hiddenClass="city-production-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex justify-between max-lg:flex-col max-lg:gap-16'>
                <div className='w-[430px] flex flex-col gap-4 transition-all duration-1000 ease-in-out animation-left max-xl:w-[350px] max-lg:w-full'>
                    <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray'>{dict.title}</h2>
                    <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{dict.content}</p>

                    {/* <div className='mt-8 max-sm:flex max-sm:flex-col max-sm:items-center'>
                        <p className='text-[14px] max-sm:text-[13px] w-[200px] max-lg:w-full max-sm:text-center'>{dict.button[0]}</p>
                        <button className='primary-gradient rounded-full h-[45px] px-8 max-sm:text-[14px] mt-4 max-lg:text-[15px]'>{dict.button[1]}</button>
                    </div> */}
                </div>

                <div className='flex flex-wrap gap-8 w-[650px] max-xl:w-[532px] max-lg:w-full max-sm:flex-col max-sm:items-center'>
                    {dict.steps.map((s, idx) => (
                        <SingleStep key={idx} data={s} index={idx}/>
                    ))}
                </div>
            </article>

            <Image src={bg} width={1920} height={1000} alt={dict.alt} className='absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-70 transition-all duration-1000 ease-in-out animation-opacity' />
        </section>
    )
}

export default CityProduction