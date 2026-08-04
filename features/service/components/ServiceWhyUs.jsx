import React from 'react'
import Image from 'next/image'
import whyUs from '@assets/images/websites/why-us.webp'

const ServiceWhyUs = ({ dict }) => {
    return (
        <section className='mt-32 py-32 bg-black relative overflow-hidden'>
            <div className='section-style relative z-1'>

                <div className='max-w-xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
                </div>

                <div className='mt-16 flex gap-16 max-xl:items-center max-lg:flex-col'>
                    <div className='relative flex-1 h-max'>
                        <ol className='relative z-1'>
                            {dict.reasons.map((item, idx) => (
                                <li key={idx} className='not-first:mt-16 group flex gap-4 space-y-2'>
                                    <span aria-hidden='true' className='w-2.5 h-2.5 mt-2 rounded-full bg-white shrink-0' />
                                    <div>
                                        <p className='text-[20px] max-md:text-[18px] !text-[#e28350]'>{item.title}</p>
                                        <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ol>
                        <div className='w-0.5 h-full absolute left-[4.5px] top-0 bg-white/10' />
                    </div>
                    <div>
                        <Image src={whyUs} width={500} height={750} alt={dict.imgAlt} unoptimized className='object-cover rounded-2xl max-xl:w-[400px] max-md:w-full' />
                    </div>
                </div>

            </div>

            <div className='w-[1000px] h-[1000px] rounded-full bg-[#e2835033] blur-[200px] absolute top-1/2 left-1/2 -translate-1/2 pointer-events-none' aria-hidden="true" />

        </section>
    )
}

export default ServiceWhyUs