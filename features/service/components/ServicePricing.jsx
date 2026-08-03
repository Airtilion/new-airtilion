import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

import bg from '@assets/images/websites/bg-pricing.webp'
import WhiteBtn from '@components/buttons/WhiteBtn'

const ServicePricing = ({ dict }) => {
    const project = dict.exampleProject;
    return (
        <section className='py-32 relative'>

            <div className='absolute inset-0 z-0 overflow-hidden'>
                <Image src={bg} alt="" fill className='object-cover' sizes="100vw" />
                <div className='absolute inset-0 bg-black/95' />
            </div>

            <div className='section-style relative z-10'>

                <div className='max-w-3xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.subtitle}</p>
                </div>

                <div className='mt-16 p-16 border border-white/10 rounded-2xl bg-black relative overflow-hidden max-sm:p-8'>

                    <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-850px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />

                    <div className='grid grid-cols-12 gap-24 max-xl:gap-12 max-lg:grid-cols-2'>

                        <div className='col-span-5 flex flex-col justify-center max-lg:col-span-full'>
                            <h3 className='text-[36px] font-medium max-xl:text-[30px] max-md:text-[28px] max-sm:text-[24px]'>{project.name}</h3>

                            <div className='mt-6 text-[64px] font-mono font-medium tracking-tighter leading-none max-2xl:text-[55px] max-xl:text-[44px] max-lg:text-[40px] max-sm:text-[38px]'>
                                {project.price}
                                <span className='text-[25px] max-sm:text-[22px]'>&nbsp;netto</span>
                            </div>

                            <p className='mt-6 mb-8 text-[16px] leading-relaxed max-sm:text-[15px]'>{project.desc}</p>

                            <WhiteBtn className='mx-auto py-4 text-[14px] max-lg:text-[13px]'>{project.cta}</WhiteBtn>
                        </div>

                        <div className='col-span-7 flex flex-col justify-center border-l border-white/10 pl-16 max-lg:col-span-full max-lg:border-t max-lg:pt-8 max-lg:pl-0 max-lg:border-l-0'>
                            <h4 className='text-[20px] font-medium max-sm:text-[18px]'>{project.h4}</h4>

                            <ul className='mt-8 grid grid-cols-2 gap-x-8 gap-y-6 max-md:grid-cols-1'>
                                {project.features.map((feature, fIdx) => (
                                    <li key={fIdx} className='flex items-start gap-4'>
                                        <Icon icon="ph:check-bold" width={18} height={18} className='mt-1 shrink-0 text-[#e28350]' />
                                        <span className='text-[15px] text-(--primary-text-color) leading-relaxed'>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ServicePricing
