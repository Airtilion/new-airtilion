import React from 'react'
import Image from 'next/image'
import bgF from '@assets/images/new-cities/rwd/rwd.webp'
import bgS from '@assets/images/new-cities/rwd/rwd2.webp'
import IntersectionListener from '@components/IntersectionListener'

const RWD = ({ dict }) => {
    return (
        <section id='rwd-standard' className="mt-48 section-style-small relative flex justify-between rwd-standard-hidden max-lg:flex-col max-sm:items-center max-sm:gap-16">
            <IntersectionListener selector="#rwd-standard" visibleClass="rwd-standard-visible" hiddenClass="rwd-standard-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='relative -z-1 animation-left transition-all duration-1000 ease-in-out'>
                <Image src={bgF} alt='' width={400} height={400} className='object-cover rounded-[5px]' />
                <div className='absolute inset-0 w-[400px] h-[400px] bg-linear-to-l from-[#00000000] to-[#000000FF] max-sm:w-full' />
            </div>

            <div className='w-[740px] bg-black p-8 rounded-[20px] mx-auto z-1 absolute left-1/2 top-1/2 -translate-1/2 overflow-hidden animation-opacity transition-all duration-1000 ease-in-out max-xl:w-[650px] max-lg:w-[90%] max-sm:w-[95%]'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray' dangerouslySetInnerHTML={{ __html: dict.title }} />
                <p className="mt-4 text-paragraph" dangerouslySetInnerHTML={{ __html: dict.desc }} />
                <div className='absolute -z-2 section-style-small h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E283504D] rounded-full blur-[150px]' />
            </div>

            <div className='relative -z-1 animation-right transition-all duration-1000 ease-in-out max-lg:self-end max-sm:self-auto'>
                <Image src={bgS} alt='' width={400} height={400} className='object-cover rounded-[5px]' />
                <div className='absolute inset-0 w-[400px] h-[400px] bg-linear-to-r from-[#00000000] to-[#000000FF] max-sm:w-full' />
            </div>

            <div className='absolute -z-2 section-style-small h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E283504D] rounded-full blur-[150px]' />

        </section>
    )
}

export default RWD