import React from 'react'
import Image from 'next/image'
import bg from '@assets/images/websites/bg-technical-support.webp'
import bgSmall from '@assets/images/websites/bg-technical-support-small-device.webp'

const ServiceTechSupport = ({ dict }) => {
    return (
        <section className='py-32 mt-32'>
            <div className='section-style relative'>

                <div className='max-w-4xl mx-auto text-center max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
                </div>

                <div className='mt-16 grid grid-cols-2 text-center relative max-md:grid-cols-1'>
                    <div className='col-span-1 p-16 relative z-1 max-md:p-8 max-sm:p-6'>
                        <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.paragraphs[0]}</p>
                    </div>
                    <div className='col-span-1 p-16 relative z-1 max-md:p-8 max-sm:p-6'>
                        <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.paragraphs[1]}</p>
                    </div>

                    <div aria-hidden='true' className='absolute top-0 w-full h-[1px] max-md:z-1 max-md:top-1/2 max-md:-translate-y-1/2 max-sm:hidden' style={{ background: 'linear-gradient(to right, rgba(47, 47, 47, 0) 0%, rgba(47, 47, 47, 1) 50%, rgba(47, 47, 47, 0) 100%)' }} />
                    <Image src={bg} alt='' width={1920} height={500} className='absolute inset-0 object-cover h-full w-full max-sm:hidden' />
                    <Image src={bgSmall} alt='' width={700} height={500} className='hidden max-sm:block absolute inset-0 object-cover h-full w-full' />
                </div>

                <div aria-hidden='true' className='absolute left-0 top-1/2 -translate-y-1/2 w-[1px] h-[450px]' style={{ background: 'linear-gradient(to bottom, rgba(47, 47, 47, 0) 0%, rgba(47, 47, 47, 1) 50%, rgba(47, 47, 47, 0) 100%)' }} />
                <div aria-hidden='true' className='absolute right-1/2 top-1/2 -translate-1/2 w-[1px] h-[450px] max-md:hidden' style={{ background: 'linear-gradient(to bottom, rgba(47, 47, 47, 0) 0%, rgba(47, 47, 47, 1) 50%, rgba(47, 47, 47, 0) 100%)' }} />
                <div aria-hidden='true' className='absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[450px]' style={{ background: 'linear-gradient(to bottom, rgba(47, 47, 47, 0) 0%, rgba(47, 47, 47, 1) 50%, rgba(47, 47, 47, 0) 100%)' }} />

                <p className='mt-16 text-center max-sm:text-[15px]'>{dict.outro}</p>

            </div>

        </section >
    )
}

export default ServiceTechSupport