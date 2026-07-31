'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const ServiceIndustries = ({ dict, baseUrl = "https://airtilion.com/strony-internetowe" }) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-3xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.subtitle}</p>
                </div>

                <div className='mt-16 grid grid-cols-3 gap-4 max-lg:grid-cols-2 max-md:grid-cols-1'>
                    {dict.top.map((industry, idx) => (
                        <Link key={idx} href={`${baseUrl}${industry.slug}`} className='group relative rounded-2xl flex flex-col justify-between p-10 h-[280px] border border-white/20 hover:bg-white/[0.02] transition-colors duration-300 max-sm:h-[200px] max-sm:p-8'>
                            <Icon icon={industry.icon} width={40} height={40} className='text-white/20 group-hover:text-[#e28350] group-hover:-translate-y-2 transition-all duration-500' />
                            <div className='flex items-center justify-between'>
                                <h3 className='text-[20px] font-medium text-white'>{industry.title}</h3>
                                <Icon icon='ph:arrow-up-right-light' width={24} height={24} className='text-white/20 group-hover:text-white group-hover:rotate-45 transition-all duration-300' />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='mt-8'>
                    <button onClick={() => setIsExpanded(!isExpanded)} className='w-full py-8 flex items-center justify-between gap-8 group border-y border-white/10'>
                        <span className='text-[18px] font-medium text-white group-hover:text-[#e28350] transition-colors text-start'>{dict.expandButton} ({dict.rest.length})</span>
                        <Icon icon='ph:plus-light' width={24} height={24} className={`text-white/50 transition-transform duration-500 ${isExpanded ? 'rotate-45' : ''}`} />
                    </button>

                    <ul className={`grid grid-cols-4 gap-y-4 gap-x-8 overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'py-8 max-h-[1000px] max-md:max-h-[1100px]' : 'max-h-0'} max-lg:grid-cols-2 max-md:grid-cols-1`}>
                        {dict.rest.map((industry, idx) => (
                            <li key={idx}>
                                <Link href={`${baseUrl}${industry.slug}`} className='text-[15px] text-white/40 hover:text-white hover:underline underline-offset-4 decoration-white/20 transition-all'>
                                    {industry.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='mt-16 leading-relaxed mx-auto text-center'>
                    <h3 className='text-[25px] font-medium text-white max-lg:text-[23px]'>{dict.cta.h3}</h3>
                    <p className='mt-2 mb-8 text-[18px] max-lg:text-[16px]'>{dict.cta.desc}</p>
                    <WhiteBtn>{dict.cta.button}</WhiteBtn>
                </div>
            </div>
        </section>
    )
}

export default ServiceIndustries