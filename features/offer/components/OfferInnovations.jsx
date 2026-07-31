import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react'

import aichatbot from '@assets/images/offer/ai-chatbot.webp'
import configurator from '@assets/images/offer/3d-configurator.webp'

const OfferInnovations = ({ dict }) => {
    const images = [aichatbot, configurator];

    return (
        <section className='mt-[128px]'>
            <div className='section-style'>

                <div className='flex items-end gap-8 max-md:flex-col max-md:justify-between'>
                    <div className='max-w-2xl'>
                        <h2 className='title'>{dict.title}</h2>
                        <p className='mt-6 text-[16px] text-white/50 leading-relaxed'>{dict.subtitle}</p>
                    </div>
                </div>

                <div className='mt-16 grid grid-cols-2 gap-x-10 gap-y-16 max-md:grid-cols-1'>
                    {dict.items?.map((item, idx) => (
                        <Link key={idx} href={item.link} className='group flex flex-col gap-6'>
                            <div className='relative w-full aspect-[4/3] overflow-hidden'>
                                <Image src={images[idx]} alt={item.title} fill className='object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' sizes="(max-w-768px) 100vw, 50vw" />

                                <div aria-hidden='true' className='absolute top-0 left-0 w-14 h-14 bg-white flex-center text-black group-hover:bg-[#e28350] group-hover:text-white transition-colors duration-300'>
                                    <Icon icon={item.icon} width={24} height={24} />
                                </div>
                            </div>

                            <div>
                                <div className='flex items-center justify-between'>
                                    <h3 className='text-[28px] font-medium group-hover:text-[#e28350] transition-colors max-lg:text-[24px] max-sm:text-[22px]'>{item.title}</h3>
                                    <Icon icon='ph:arrow-up-right-light' width={24} height={24} className='text-white/30 group-hover:text-[#e28350] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
                                </div>
                                <p className='mt-4 text-[16px] leading-relaxed max-md:text-[15px]'>{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default OfferInnovations