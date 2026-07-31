'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const ServiceCoverage = ({ dict, baseUrl = "https://airtilion.com/strony-internetowe" }) => {
    const [openRegion, setOpenRegion] = useState(null)

    const formatCityName = (slug) => {
        return slug.replace('/', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    }

    const cornerClasses = {
        0: 'rounded-tl-2xl max-md:rounded-t-2xl',
        1: 'max-lg:rounded-tr-2xl max-md:rounded-none',
        3: 'rounded-tr-2xl max-lg:rounded-none',
        12: 'rounded-bl-2xl max-lg:rounded-none',
        14: 'max-lg:rounded-bl-2xl max-md:rounded-none',
        15: 'rounded-br-2xl max-md:rounded-b-2xl'
    };

    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-2xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-8 text-[16px] leading-relaxed'>{dict.subtitle}</p>
                </div>


                <div className='mt-24 grid grid-cols-4 max-lg:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1'>
                    {dict.regions.map((regionData, idx) => (
                        <div key={idx} className={`flex flex-col border border-white/20 hover:bg-white/[0.02] transition-colors duration-300 ${cornerClasses[idx] || ''}`}>

                            <button onClick={() => setOpenRegion(openRegion === idx ? null : idx)} className='w-full p-8 flex items-start justify-between group text-left max-xl:p-6'>

                                <div className='space-y-2'>
                                    <span className={`block text-[20px] font-medium text-white group-hover:text-[#e28350] duration-300 transition-colors max-xl:text-[18px] ${idx === 15 ? 'max-xl:break-all max-xl:max-w-26 max-lg:max-w-none max-lg:break-normal' : ''}`}>{regionData.name}</span>
                                    <span className='text-[13px] text-white/30 group-hover:text-white duration-300 transition-colors '>{regionData.cities.length} lokalizacji</span>
                                </div>
                                <Icon icon='ph:plus-light' width={24} height={24} className={`text-white/40 shrink-0 transition-transform duration-500 ${openRegion === idx ? 'rotate-45 text-white' : ''}`} />

                            </button>

                            <div className={`grid transition-all duration-500 ease-in-out ${openRegion === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className='overflow-hidden'>
                                    <div className='px-8 pb-8 flex flex-col max-lg:px-6'>

                                        <Link href={`${baseUrl}${regionData.slug}`} className='inline-flex items-center justify-between py-3 text-white border-b border-white/20 hover:text-[#E28350] hover:border-[#e28350] duration-300 transition-colors'>
                                            <span className='text-[12px] font-bold uppercase tracking-widest'>Całe województwo</span>
                                            <Icon icon="ph:arrow-right-bold" width={14} height={14} />
                                        </Link>

                                        <ul className='mt-4 flex flex-col gap-4'>
                                            {regionData.cities.map((citySlug, cityIdx) => (
                                                <li key={cityIdx}>
                                                    <Link href={`${baseUrl}${citySlug}`} className='text-[14px] text-white/40 hover:text-white hover:translate-x-1 transition-all duration-300'>
                                                        {formatCityName(citySlug)}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServiceCoverage