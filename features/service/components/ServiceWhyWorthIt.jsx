import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import worth from '@assets/images/websites/worth-it.webp'

const ServiceWhyWorthIt = ({ dict }) => {
    return (
        <section className='mt-32 py-32 relative bg-black'>
            <div className='section-style'>

                <div className='max-w-3xl space-y-6 text-[18px] leading-relaxed max-md:max-w-none max-lg:text-[16px]'>
                    <h2 className='title'>{dict.title}</h2>
                    <p>{dict.intro}</p>
                    <p className='font-semibold'>{dict.subintro}</p>
                </div>


                <div className='mt-24 relative z-1 grid grid-cols-12 gap-16 max-lg:mt-16 max-lg:flex max-lg:flex-col-reverse'>

                    <div className='col-span-5 max-lg:col-span-1 max-lg:w-[400px] max-lg:mx-auto max-sm:w-full'>
                        <div className='sticky top-32'>
                            <Image src={worth} alt="Wizualizacja nowoczesnej strony internetowej na ekranie smartfona" width={564} height={800} className="rounded-2xl object-cover" />
                        </div>
                    </div>

                    <div className='col-span-7 max-lg:col-span-1 flex flex-col justify-center'>
                        <div className='border-t border-white/10'>
                            {dict.benefits.map((item, idx) => (
                                <div key={idx} className='group rounded-2xl flex gap-8 py-10 px-6 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 -mx-6 max-md:py-8 max-md:flex-col max-md:-mx-4'>

                                    <div aria-hidden='true' className='flex items-center gap-6 shrink-0 w-[140px] max-xl:w-[100px] max-lg:w-max'>
                                        <span className='text-[24px] font-mono font-medium text-white/20 group-hover:text-[#e28350] transition-colors duration-300'>{String(idx + 1).padStart(2, '0')}</span>
                                        <Icon icon={item.icon} width={32} height={32} className="text-white/30 group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300" />
                                    </div>

                                    <div className='flex-1'>
                                        <h3 className='text-[24px] text-white group-hover:translate-x-3 transition-transform duration-300 ease-out max-lg:text-[22px] max-sm:text-[20px]'>{item.title}</h3>
                                        <p className='mt-3 text-[16px] leading-relaxed group-hover:translate-x-3 transition-transform duration-300 delay-75 ease-out max-lg:text-[15px]'>{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div aria-hidden='true' className='absolute inset-0 overflow-hidden pointer-event-none'>
                    <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute top-1/2 -translate-y-1/2 right-[-850px]' />
                </div>
            </div>
        </section>
    )
}

export default ServiceWhyWorthIt