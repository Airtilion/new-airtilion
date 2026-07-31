import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const ServiceTypes = ({ dict, baseUrl = "https://airtilion.com" }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <h2 className='title max-w-2xl max-md:max-w-none'>{dict.title}</h2>

                <div className='mt-20 grid gap-8 grid-cols-2 max-md:grid-cols-1'>
                    {dict.items.map((item, idx) => (
                        <Link key={idx} href={`${baseUrl}${item.link}`} className='group relative rounded-2xl flex flex-col justify-end p-14 min-h-[360px] bg-white/[0.02] transition-colors duration-500 overflow-hidden max-xl:p-8 max-lg:gap-4 max-md:min-h-auto'>
                            <span aria-hidden='true' className='absolute top-6 right-8 text-[80px] font-bold text-white/[0.02] group-hover:text-[#e28350]/[0.05] transition-colors duration-500 font-mono pointer-events-none max-xl:right-6 max-lg:relative max-lg:right-auto max-lg:top-auto max-lg:text-end max-lg:text-[70px] max-sm:text-[60px]'>0{idx + 1}</span>

                            <div>
                                <h3 className='text-[28px] font-medium text-white max-lg:text-[24px] max-sm:text-[22px]'>{item.title}</h3>
                                <p className='mt-4 text-[15px] leading-relaxed max-w-sm max-xl:max-w-72 max-lg:max-w-none'>{item.desc}</p>
                            </div>

                            <div aria-hidden='true' className='absolute bottom-14 right-14 max-xl:bottom-10 max-xl:right-10 max-lg:relative max-lg:right-auto max-lg:bottom-auto max-lg:ml-auto'>
                                <div className='w-12 h-12 rounded-full border border-white/10 flex-center group-hover:bg-[#e28350] group-hover:border-[#e28350] transition-all duration-500'>
                                    <Icon icon='ph:arrow-up-right-light' width={20} height={20} className='text-white/40 group-hover:text-white transition-all duration-300 group-hover:rotate-45' />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                <div className='mt-16 leading-relaxed mx-auto text-center'>
                    <h3 className='text-[25px] font-medium text-white max-lg:text-[23px]'>{dict.cta.h3}</h3>
                    <p className='mt-2 mb-8 text-[18px] max-lg:text-[16px]'>{dict.cta.desc}</p>
                    <WhiteBtn href='/oferta'>{dict.cta.button}</WhiteBtn>
                </div>

            </div>
        </section>
    )
}

export default ServiceTypes