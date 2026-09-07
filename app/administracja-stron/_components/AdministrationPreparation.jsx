import React from 'react'
import { Icon } from '@iconify/react'

const AdministrationPreparation = ({ dict }) => {
    return (
        <section className='mt-32 py-32 relative overflow-hidden bg-black'>
            <div className='section-style relative z-1 grid grid-cols-12 gap-16 max-lg:grid-cols-1'>

                <div className='col-span-5 max-xl:col-span-6 max-lg:relative max-lg:top-auto max-lg:col-span-full'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.intro}</p>

                    <div className='mt-12 pt-8 border-t border-white/10 flex items-start gap-4'>
                        <Icon icon='ph:info-light' width={22} height={22} className='text-white/30 shrink-0 mt-0.5' />
                        <p className='text-[15px] leading-relaxed text-white/50'>{dict.note}</p>
                    </div>
                </div>

                <div className='col-span-7 flex flex-col max-xl:col-span-6 max-lg:col-span-full'>
                    {dict.items.map((item, idx) => (
                        <div key={idx} className='group flex items-start gap-6 py-8 border-b border-white/10 first:pt-0 last:border-0'>

                            <Icon icon='ph:check-circle-light' width={24} height={24} className='mt-1 shrink-0 text-white/20 group-hover:text-(--hover-text-color) transition-colors duration-500' />
                            <div>
                                <h3 className='text-[20px] text-white group-hover:text-(--hover-text-color) transition-colors duration-500 max-sm:text-[18px]'>{item.title}</h3>
                                <p className='mt-2 text-[16px] leading-relaxed text-(--primary-text-color) max-sm:text-[15px]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-550px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden='true' />
        </section>
    )
}

export default AdministrationPreparation