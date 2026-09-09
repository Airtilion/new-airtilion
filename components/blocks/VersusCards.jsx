import React from 'react'
import { Icon } from '@iconify/react'

const VersusCards = ({ dict }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-2xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
                </div>

                <div className='relative mt-16 grid grid-cols-2 max-md:grid-cols-1 max-md:auto-rows-fr'>

                    <div className='rounded-l-2xl border border-white/20 p-10 flex flex-col gap-4 duration-300 hover:bg-white/[0.02] max-md:rounded-bl-none max-md:rounded-t-2xl max-md:p-8'>
                        <div aria-hidden='true' className='w-12 h-12 rounded-full bg-white/5 flex-center shrink-0'>
                            <Icon icon={dict.left.icon} width={24} height={24} className='text-(--hover-text-color)' />
                        </div>
                        <h3 className='text-[22px] text-white max-sm:text-[20px]'>{dict.left.label}</h3>
                        <p className='text-[15px] leading-relaxed'>{dict.left.desc}</p>
                    </div>

                    <div className='rounded-r-2xl border border-white/20 p-10 flex flex-col gap-4 duration-300 hover:bg-white/[0.02] max-md:rounded-tr-none max-md:rounded-b-2xl max-md:p-8'>
                        <div aria-hidden='true' className='w-12 h-12 rounded-full bg-white/5 flex-center shrink-0'>
                            <Icon icon={dict.right.icon} width={24} height={24} className='text-(--hover-text-color)' />
                        </div>
                        <h3 className='text-[22px] text-white max-sm:text-[20px]'>{dict.right.label}</h3>
                        <p className='text-[15px] leading-relaxed'>{dict.right.desc}</p>
                    </div>

                    <div aria-hidden='true' className='absolute top-1/2 left-1/2 -translate-1/2 w-14 h-14 rounded-full bg-black border border-white/20 flex-center text-[12px] font-bold uppercase tracking-widest'>
                        vs
                    </div>
                </div>

                <div className='mt-16 space-y-6'>
                    {dict.paragraphs.map((p, idx) => (
                        <p key={idx} className='text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{p}</p>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default VersusCards