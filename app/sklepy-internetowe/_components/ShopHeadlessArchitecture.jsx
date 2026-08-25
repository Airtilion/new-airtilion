import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import headless from '@assets/images/shops/headless.webp'

const ShopHeadlessArchitecture = ({ dict }) => {
    return (
        <section className='mt-32 py-32 bg-black relative overflow-hidden'>
            <div className='section-style relative z-1 grid grid-cols-12 gap-16 items-center max-lg:grid-cols-1'>

                <div className='col-span-6 flex flex-col gap-8 max-lg:col-span-1'>
                    <h2 className='title max-w-2xl max-md:max-w-none'>{dict.title}</h2>

                    <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.intro}</p>
                    <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.solution}</p>
                    <p className='text-[16px] leading-relaxed font-bold max-sm:text-[15px]'>{dict.benefits}</p>

                    <div className='flex items-center group gap-4 p-6 border border-white/10 rounded-2xl duration-300 hover:bg-white/[0.02] max-sm:flex-col'>
                        <div aria-hidden='true' className='w-10 h-10 rounded-full bg-white/5 flex-center shrink-0'>
                            <Icon icon="ph:info-light" className="text-[20px] text-white/50 duration-300 group-hover:text-[#E28350]" />
                        </div>
                        <p className='text-[15px] leading-relaxed'>{dict.note}</p>
                    </div>
                </div>

                <div className='col-span-6 max-lg:col-span-1'>
                    <div className='relative rounded-2xl overflow-hidden max-lg:mx-auto max-lg:max-w-[668px]'>
                        <Image src={headless} alt={dict.altImg} width={668} height={835} className='object-cover' />
                        <div className='absolute inset-0 w-full h-full bg-black/20' />
                    </div>
                </div>
            </div>

            <div aria-hidden='true' className='absolute inset-0 overflow-hidden pointer-event-none'>
                <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute top-1/2 -translate-y-1/2 left-[-850px]' />
            </div>
        </section>
    )
}

export default ShopHeadlessArchitecture