import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const OfferIndustries = ({ dict }) => {
    return (
        <section className='mt-[128px]'>
            <div className='section-style flex items-center gap-24 max-xl:gap-20 max-lg:gap-16 max-lg:flex-col'>

                <div className='w-4/12 flex flex-col items-start max-2xl:w-5/12 max-lg:w-full'>

                    <h2 className='title'>{dict.title}</h2>

                    <p className='mt-6 text-[16px] text-white/50 leading-relaxed max-w-sm max-lg:max-w-none max-sm:text-[15px]'>{dict.subtitle}</p>

                    <Link href={dict.ctaLink} className='mt-10 group inline-flex items-center gap-4 px-8 py-5 bg-white text-black text-[13px] font-bold tracking-widest uppercase hover:bg-[#e28350] hover:text-white transition-colors duration-300 rounded-full' >
                        <span>{dict.cta}</span>
                        <Icon icon='ph:arrow-right-bold' aria-hidden='true' width={16} height={16} className='group-hover:translate-x-1 shrink-0 transition-transform duration-300' />
                    </Link>

                </div>

                <div className='w-8/12 border-t border-white/20 max-2xl:w-7/12 max-lg:w-full'>
                    {dict.items?.map((item, idx) => (
                        <Link key={idx} href={item.link} className='group flex items-center justify-between py-8 border-b border-white/20 custom-hover-bg hover:-mx-8 hover:px-8 max-sm:gap-4'>
                            <div className='flex items-center gap-10 max-md:gap-6'>
                                <div aria-hidden='true' className='w-14 h-14 shrink-0 bg-white/5 flex-center group-hover:bg-black/10 transition-colors max-sm:w-10 max-sm:h-10'>
                                    <Icon icon={item.icon} width={28} height={28} className='text-white group-hover:text-(--hover-text-color) transition-colors max-sm:w-5 max-sm:h-5' />
                                </div>

                                <h3 className='text-[36px] font-medium text-white group-hover:text-(--hover-text-color) transition-colors tracking-tight max-xl:text-[30px] max-md:text-[24px] max-sm:text-[20px]'>{item.name}</h3>
                            </div>

                            <div aria-hidden='true' className='flex items-center gap-8'>
                                <span className='text-white/30 font-mono text-[14px]'>0{idx + 1}</span>
                                <Icon icon='ph:arrow-up-right-light' width={28} height={28} className='text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-300' />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default OfferIndustries