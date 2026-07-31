'use client'
import React from 'react'
import { Icon } from '@iconify/react'

const ServiceHero = ({ dict }) => {
    return (
        <section className='section-style mt-24 max-sm:mt-16'>
            <div className='max-w-4xl'>

                <h1 className='text-[96px] font-medium leading-[1] tracking-tighter text-white max-2xl:text-[80px] max-lg:text-[65px] max-md:text-[56px] max-sm:text-[45px]'>{dict.title}</h1>

                <p className='mt-10 text-[20px] max-w-2xl leading-relaxed max-lg:text-[18px] max-sm:text-[16px]'>{dict.subtitle}</p>

                <div className='mt-12 flex flex-wrap gap-4 max-sm:flex-col max-sm:items-center max-sm:text-[15px]'>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className="group flex items-center gap-4 py-4 bg-gradient-to-r from-[#000000] to-[#E28350] duration-500 rounded-full px-12 max-sm:py-3">
                        <Icon icon="solar:letter-bold" width={20} height={20} aria-hidden="true" className="group-hover:hidden" />
                        <Icon icon="solar:letter-opened-bold" width={20} height={20} aria-hidden="true" className="hidden group-hover:block" />
                        {dict.cta}
                    </button>
                    <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className='flex items-center gap-4 px-12 py-4 border border-white/20 text-(--primary-text-color) rounded-full hover:border-[#e28350] hover:text-[#e28350] duration-300 max-sm:py-3'>
                        {dict.ctaSecondary}
                        <Icon icon='ph:arrow-down-right-bold' width={16} />
                    </button>

                </div>

            </div>
        </section>
    )
}

export default ServiceHero