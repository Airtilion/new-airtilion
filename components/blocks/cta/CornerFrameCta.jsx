'use client'

import React from 'react'
import { Icon } from '@iconify/react'

const CornerFrameCta= ({ dict }) => {
    return (
        <section className='my-32'>
            <div className='section-style'>

                <div className='border border-white/20 p-24 relative overflow-hidden rounded-2xl max-xl:px-8 max-lg:p-16 max-sm:px-8'>

                    <div className='absolute rounded-tl-2xl top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e28350]' aria-hidden='true' />
                    <div className='absolute rounded-br-2xl bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e28350]' aria-hidden='true' />

                    <div className='flex gap-16 items-end relative z-10 max-xl:items-center max-xl:gap-8 max-lg:justify-between max-lg:items-start max-lg:flex-col'>

                        <div className='flex-1 max-lg:text-center max-lg:mx-auto'>
                            <h2 className='text-[80px] leading-[0.95] tracking-tighter max-w-3xl max-2xl:text-[70px] max-lg:text-[50px] max-lg:max-w-none max-md:text-[48px] max-sm:text-[40px]'>{dict.title}</h2>
                            <p className='mt-8 text-[18px] text-white/50 leading-relaxed max-w-xl max-lg:max-w-md max-lg:text-[16px] max-lg:mx-auto max-sm:text-[15px]'>{dict.subtitle}</p>
                        </div>

                        <div className='w-[380px] flex flex-col gap-4 max-xl:w-auto max-lg:w-max max-lg:mx-auto max-sm:w-full'>

                            <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className="group flex gap-8 items-center justify-between px-8 py-6 bg-white text-black text-[14px] font-bold tracking-widest uppercase hover:bg-[#e28350] hover:text-white transition-colors duration-300 w-full rounded-full max-lg:py-5 max-sm:flex-col max-sm:gap-4 max-sm:py-4 max-sm:rounded-2xl">
                                <span>{dict.cta}</span>
                                <Icon icon='ph:arrow-right-bold' width={20} height={20} className='group-hover:translate-x-2 transition-transform duration-300 shrink-0' />
                            </button>

                            <a href="mailto:kontakt@airtilion.com" className='group flex gap-8 items-center justify-between px-8 py-6 border border-white/20 bg-transparent text-white text-[14px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300 w-full rounded-full backdrop-blur-sm max-lg:py-5 max-sm:flex-col max-sm:gap-4 max-sm:py-4 max-sm:rounded-2xl'>
                                <span>kontakt@airtilion.com</span>
                                <Icon icon='ph:arrow-up-right-bold' width={20} height={20} className='group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 shrink-0' />
                            </a>

                        </div>
                    </div>

                    <div className='absolute -bottom-16 -right-8 text-[160px] md:text-[240px] leading-none text-white/[0.02] pointer-events-none select-none tracking-tighter max-md:-bottom-8' aria-hidden='true'>GO.</div>
                </div>
            </div>
        </section>
    )
}

export default CornerFrameCta