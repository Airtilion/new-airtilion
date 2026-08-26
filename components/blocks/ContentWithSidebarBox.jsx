import React from 'react'
import { Icon } from '@iconify/react'

const ContentWithSidebarBox = ({ dict, reverse = false }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>
                <div className='grid grid-cols-12 gap-16 items-center max-lg:grid-cols-1'>

                    <div className={`col-span-7 max-lg:col-span-1 ${reverse ? 'order-2 max-lg:order-1' : 'order-1'}`}>
                        <h2 className='title'>{dict.title}</h2>
                        <div className='mt-8 space-y-6'>
                            {dict.paragraphs.map((p, idx) => (
                                <p key={idx} className='text-[16px] leading-relaxed max-sm:text-[15px]'>{p}</p>
                            ))}
                        </div>
                    </div>

                    <div className={`relative col-span-5 flex flex-col rounded-2xl border border-white/10 p-8 max-lg:col-span-1 max-sm:p-6 ${reverse ? 'order-1' : 'order-2'}`}>
                        <p className='text-[13px] uppercase tracking-widest'>{dict.groupLabel}</p>
                        <ul className='mt-4 flex flex-col'>
                            {dict.items.map((item, idx) => (
                                <li key={idx} className={`group flex items-center gap-4 px-2 py-4 ${idx !== 0 ? 'border-t border-white/10' : ''} duration-300 hover:bg-white/[0.02]`}>
                                    <div aria-hidden='true' className='w-10 h-10 rounded-full bg-white/5 flex-center shrink-0 mt-0.5 group-hover:bg-(--hover-text-color) transition-colors duration-300'>
                                        <Icon icon={item.icon} width={20} height={20} className='text-(--primary-text-color) group-hover:text-black transition-colors duration-300' />
                                    </div>
                                    <div>
                                        <p className='text-[16px]'>{item.title}</p>
                                        <p className='mt-1 text-[14px] leading-relaxed'>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className='absolute rounded-tl-2xl top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e28350]' aria-hidden='true' />
                        <div className='absolute rounded-br-2xl bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e28350]' aria-hidden='true' />
                    </div>

                </div>
            </div>
        </section>
    )

}

export default ContentWithSidebarBox