import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import WhiteBtn from '@components/buttons/WhiteBtn'
import bg from '@assets/images/websites/bg-pricing.webp'

const ShopPrice = ({ dict }) => {
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

                    <div className='grid grid-cols-12 gap-x-24 gap-y-12 max-xl:gap-12 max-lg:grid-cols-2'>

                        <div className='col-span-7 flex flex-col justify-center border-r border-white/10 pr-16 max-lg:col-span-full max-lg:pr-0 max-lg:border-r-0'>
                            <h4 className='text-[20px] max-sm:text-[18px]'>{dict.factorsLabel}</h4>

                            <ul className='mt-8 flex flex-col gap-6'>
                                {dict.factors.map((factor, idx) => (
                                    <li key={idx} className='flex items-start gap-4'>
                                        <Icon icon="ph:check-bold" width={18} height={18} className='mt-1 shrink-0 text-[#e28350]' />
                                        <span className='text-[15px] text-(--primary-text-color) leading-relaxed'>
                                            <span className='text-white'>{factor.title}. </span>
                                            {factor.desc}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className='col-span-5 flex flex-col justify-center gap-10 text-center max-lg:col-span-full max-lg:gap-8 max-lg:border-white/10 max-lg:border-t max-lg:pt-8 '>
                            <p className='text-[18px] leading-relaxed max-lg:text-[16px]'>{dict.ctaHeading}</p>
                            <WhiteBtn href={dict.ctaHref} className='mx-auto py-4 text-[14px] max-lg:text-[13px]'>{dict.cta}</WhiteBtn>
                            <p className='text-[14px] leading-relaxed'>{dict.ctaNote}</p>
                        </div>

                        <p className='text-[18px] text-center col-span-12 leading-relaxed max-lg:text-[16px] max-lg:col-span-full max-sm:text-[15px]'>{dict.outdesc}</p>

                    </div>
                </div>

            </div>
        </section>
    )
}

export default ShopPrice