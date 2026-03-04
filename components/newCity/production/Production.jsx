import React from 'react'
import Image from 'next/image'
import IntersectionListener from '@components/IntersectionListener'
import SingleStep from './components/SingleStep'

import bg from '@assets/images/new-cities/production.webp'

const Production = ({ dict }) => {
    return (
        <section id="city-production-section" className='w-full relative py-16 city-production-hidden'>

            <IntersectionListener selector="#city-production-section" visibleClass="city-production-visible" hiddenClass="city-production-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='section-style-small text-paragraph flex items-center justify-between max-lg:flex-col max-lg:gap-16'>
                <div className='w-[430px] transition-all duration-1000 ease-in-out animation-left max-xl:w-[350px] max-lg:w-full'>
                    <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray' dangerouslySetInnerHTML={{ __html: dict.title }} />
                    <p className='mt-4' dangerouslySetInnerHTML={{ __html: dict.desc }} />
                </div>

                <div className='flex flex-wrap gap-8 w-[650px] max-xl:w-[532px] max-lg:w-full max-sm:flex-col max-sm:items-center'>
                    {dict.data.map((s, idx) => (
                        <SingleStep key={idx} data={s} index={idx} />
                    ))}
                </div>
            </div>

            <Image src={bg} alt='' width={1920} height={650} className='absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-5 transition-all duration-1000 ease-in-out animation-opacity' />
        </section>
    )
}

export default Production