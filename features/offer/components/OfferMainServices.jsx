import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const OfferMainServices = ({ dict }) => {
    return (
        <section className='section-style mt-32'>

            <h2 className='title max-w-3xl max-lg:max-w-none'>{dict.title}</h2>

            <div className='mt-16 flex flex-col border-t border-white/20'>
                {dict.items?.map((item, idx) => (
                    <Link key={idx} href={item.link} className='group relative flex gap-8 items-center justify-between py-12 border-b border-white/20 hover:bg-white/[0.02] transition-colors duration-500 px-6 -mx-6 rounded-2xl max-lg:mx-auto max-lg:flex-col max-lg:gap-6'>

                        <div className='flex items-center gap-8 w-5/12 max-xl:w-4/12 max-lg:w-full max-lg:justify-center'>
                            <span aria-hidden='true' className='text-white/20 text-2xl font-light font-mono group-hover:text-[#e28350]/50 transition-colors duration-500'>0{idx + 1}</span>
                            <h3 className='text-[36px] font-medium group-hover:text-[#e28350] transition-colors duration-300 max-md:text-[28px] max-sm:text-[24px]'>{item.title}</h3>
                        </div>

                        <div className='w-4/12 max-md:mt-6 max-xl:w-5/12 max-lg:w-full max-lg:max-w-[500px] max-lg:text-center'>
                            <p className='text-[16px] text-white/70 leading-relaxed group-hover:text-white transition-colors duration-300 max-sm:text-[15px]'>{item.desc}</p>
                        </div>

                        <div className='flex items-center justify-end w-3/12 gap-6 max-lg:w-full max-lg:justify-center max-sm:flex-col max-sm:gap-4'>
                            <span className='text-[15px] text-end font-medium text-white/50 group-hover:text-white transition-colors duration-300 uppercase tracking-wide w-max max-lg:w-auto max-lg:text-center'>{item.cta}</span>
                            <div aria-hidden='true' className='w-14 h-14 rounded-full border border-white/20 flex-center group-hover:bg-[#e28350] group-hover:border-[#e28350] transition-all duration-500 shrink-0 max-sm:w-10 max-sm:h-10'>
                                <Icon icon='ph:arrow-right-light' width={24} className='text-white group-hover:-rotate-45 transition-transform duration-500 ease-out max-sm:w-5' />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>


        </section>
    )
}

export default OfferMainServices