'use client'
import React, { useState } from 'react'
import { Icon } from '@iconify/react'
import Link from 'next/link'

const renderAnswer = (answer) => {
    if (!Array.isArray(answer)) return answer

    return answer.map((part, idx) => {
        if (typeof part === 'string') return part

        return (
            <Link key={idx} href={part.href} className='text-(--hover-text-color) underline underline-offset-2 hover:text-white transition-colors'>
                {part.text}
            </Link>
        )
    })
}

const FaqAccrodionGrid = ({ dict }) => {
    const [openIdx, setOpenIdx] = useState(null)

    return (
        <section className='mt-32'>
            <div className='section-style'>
                <h2 className='title'>{dict.title}</h2>

                <div className='mt-16 grid grid-cols-2 gap-x-12 max-md:grid-cols-1'>
                    {dict.questions.map((item, idx) => {
                        const isOpen = openIdx === idx
                        return (
                            <div key={idx} className='border-b border-white/10'>
                                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className='w-full mt-2 p-8 flex justify-between gap-8 group rounded-2xl hover:bg-white/[0.02]'>
                                    <h3 className='text-[18px] text-start font-medium text-white group-hover:text-[#e28350] transition-colors'>{item.q}</h3>
                                    <Icon icon='ph:plus-light' width={24} height={24} className={`text-white/50 shrink-0 transition-transform duration-500 ${isOpen ? 'rotate-45' : ''}`} />
                                </button>
                                <div className={`grid transition-all duration-500 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                    <div className='overflow-hidden'>
                                        <p className='text-[16px] px-8 pb-8 leading-relaxed max-sm:text-[15px]'>{renderAnswer(item.a)}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default FaqAccrodionGrid