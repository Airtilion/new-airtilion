import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import uxui from '@assets/images/websites/uxui.webp'

import cardNav from '@assets/images/websites/card-nav.webp'
import cardContent from '@assets/images/websites/card-content.webp'
import cardVisual from '@assets/images/websites/card-visual.webp'
import cardRwd from '@assets/images/websites/card-rwd.webp'

const img = [cardNav, cardContent, cardVisual, cardRwd]

const ServiceUxUi = ({ dict }) => {
    return (
        <section className='mt-32 py-32 relative overflow-hidden bg-black'>
            <div className='section-style'>


                <div className='relative z-1 grid grid-cols-12 gap-16 max-lg:grid-cols-1'>

                    <div className='col-span-6 max-lg:col-span-1'>
                        <h2 className='title'>{dict.title}</h2>
                        <p className='mt-6 text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.intro}</p>
                    </div>

                    <div className='col-span-6 max-lg:col-span-1'>

                        <div className='w-full aspect-[21/9] rounded-2xl overflow-hidden relative h-full'>
                            <Image src={uxui} alt={dict.imgAlt} fill className="object-cover" />

                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                    </div>

                </div>

                <div className='mt-32'>

                    <div className='max-w-3xl max-md:max-w-none'>
                        <h3 className='text-[32px] max-lg:text-[30px]'>{dict.dilemma.title}</h3>
                        <p className='mt-4 text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.dilemma.desc}</p>
                    </div>

                    <p className='mt-16 text-[28px] font-medium text-white max-lg:text-[26px]'>{dict.benefitsTitle}</p>

                    <ul className='mt-8 flex gap-4 relative max-lg:grid max-lg:grid-cols-2 max-sm:grid-cols-1'>

                        {dict.benefits.map((item, idx) => (
                            <li key={idx} className='flex-1 relative overflow-hidden group py-12 px-8 h-[500px] max-xl:h-[450px] max-lg:h-[400px] max-sm:h-[275px]'>
                                <div className='relative z-2'>
                                    <Icon icon={item.icon} width={40} height={40} className='shrink-0 text-white mx-auto group-hover:text-[#E28350] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 max-sm:w-[35px] max-sm:h-[35px]' />
                                    <div className='mt-8 text-center'>
                                        <p className='text-[20px] font-medium max-sm:text-[18px]'>{item.title}</p>
                                        <p className='mt-2 text-[16px] leading-relaxed max-sm:text-[15px]'>{item.desc}</p>
                                    </div>
                                </div>

                                <div>
                                    <Image src={img[idx]} width={338} height={500} alt='' className='object-cover grayscale-100 brightness-50 absolute inset-0 group-hover:scale-110 duration-300 transition-all max-2xl:h-full max-2xl:w-full' />
                                    <div className='absolute z-1 inset-0 bg-linear-to-t from-[#180d071a] to-[#180d07F2]' />
                                </div>

                                <div aria-hidden='true' className='absolute z-2 left-6 bottom-6 space-y-2 max-sm:-rotate-90 max-sm:bottom-auto max-sm:-top-2 max-sm:left-12'>
                                    <div className={`w-3 h-3 rounded-full ${idx === 0 ? 'bg-(--primary-text-color)' : 'bg-white/20'}`} />
                                    <div className={`w-3 h-3 rounded-full ${idx === 1 ? 'bg-(--primary-text-color)' : 'bg-white/20'}`} />
                                    <div className={`w-3 h-3 rounded-full ${idx === 2 ? 'bg-(--primary-text-color)' : 'bg-white/20'}`} />
                                    <div className={`w-3 h-3 rounded-full ${idx === 3 ? 'bg-(--primary-text-color)' : 'bg-white/20'}`} />
                                </div>
                            </li>
                        ))}

                        <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-550px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />
                    </ul>

                    <div className='relative z-1 mt-16 pt-8 border-t border-white/10 flex items-center gap-4'>
                        <Icon icon="ph:info-light" width={24} height={24} className="text-white/30 shrink-0" />
                        <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.conclusion}</p>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ServiceUxUi