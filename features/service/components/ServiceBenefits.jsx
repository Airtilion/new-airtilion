'use client'
import React from 'react'

const ServiceBenefits = ({ dict }) => {
    return (
        <section className='mt-32 relative'>
            <div className='section-style grid grid-cols-12 gap-16 max-xl:gap-8 max-lg:grid-cols-2'>

                <div className='mt-6 col-span-5 sticky top-32 self-start max-lg:relative max-lg:top-auto max-lg:col-span-full'>
                    <h2 className='title'>{dict.title}</h2>
                </div>

                <div className='col-span-7 flex flex-col gap-8 max-lg:col-span-2'>
                    {dict.items.map((item, idx) => (
                        <div key={idx} className='rounded-2xl group p-12 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors duration-500 max-sm:p-8'>
                            <h3 className='text-[32px] font-medium text-white group-hover:text-[#e28350] transition-colors duration-300 max-md:text-[24px]'>{item.title}</h3>
                            <p className='mt-6 text-[16px] text-white/50 leading-relaxed max-w-2xl max-lg:max-w-none max-sm:text-[15px]'>{item.desc}</p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServiceBenefits