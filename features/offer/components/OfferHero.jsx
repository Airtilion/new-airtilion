'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify'

const OfferHero = ({ dict }) => {
    return (
        <section className='section-style mt-24 text-(--primary-text-color)'>
            <div className='max-w-[850px]'>
                <p className='!text-[#e28350] text-[14px] font-semibold tracking-widest uppercase'>{dict.pretitle}</p>
                <h1 className='mt-4 text-[50px] font-bold leading-tight text-(--primary-text-color) max-xl:text-[38px] max-md:text-[28px]' dangerouslySetInnerHTML={{ __html: dict.title }} />
                <p className='mt-6 text-[18px] max-lg:text-[16px] max-sm:text-[15px]'>{dict.subtitle}</p>
                <div className='mt-12 flex gap-4 flex-wrap text-[16px] max-sm:justify-center max-sm:text-[15px]'>
                    <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className="group flex items-center gap-3 py-3 bg-gradient-to-r from-[#000000] to-[#E28350] duration-500 rounded-full px-8">
                        <Icon icon="solar:letter-bold" width={20} height={20} aria-hidden="true" className="group-hover:hidden" />
                        <Icon icon="solar:letter-opened-bold" width={20} height={20} aria-hidden="true" className="hidden group-hover:block" />
                        {dict.cta}
                    </button>

                    <Link href='/portfolio' className='flex items-center gap-2 px-8 py-3 border border-white/20 text-(--primary-text-color) rounded-full hover:border-[#e28350] hover:text-[#e28350] duration-300'>
                        {dict.ctaSecondary}
                        <Icon icon='ph:arrow-right-bold' width={16} aria-hidden='true' />
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default OfferHero