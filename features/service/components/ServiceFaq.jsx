'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'

const ServiceFaq = ({ dict }) => {
    const [openIdx, setOpenIdx] = useState(null)

    return (
        <section className='py-24'>
            <div className='section-style'>
                <h2 className='title'>{dict.title}</h2>

                <div className='mt-16 grid grid-cols-2 gap-x-12 max-md:grid-cols-1'>
                    {dict.questions.map((item, idx) => {
                        const isOpen = openIdx === idx
                        return (
                            <div key={idx} className={`border-b border-white/10`}>
                                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className='w-full mt-2 p-8 flex justify-between gap-8 group rounded-2xl hover:bg-white/[0.02]'>
                                    <h3 className='text-[18px] text-start font-medium text-white group-hover:text-[#e28350] transition-colors'>{item.q}</h3>
                                    <Icon icon='ph:plus-light' width={24} height={24} className={`text-white/50 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                                </button>
                                <div className={`overflow-hidden mt-2 transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[300px] pb-8 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className='text-[16px] px-8 leading-relaxed max-sm:text-[15px]'>{item.a}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceFaq