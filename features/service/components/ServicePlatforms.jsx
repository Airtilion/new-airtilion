import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const ServicePlatforms = ({ dict, lang, baseUrl = "https://airtilion.com" }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-3xl mx-auto text-center max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-lg:text-[16px]'>
                        {dict.desc}{' '}
                        <Link href='/sklepy-internetowe/woocommerce' className='text-white font-semibold hover:text-[#e28350] transition-colors'>WooCommerce</Link>,{' '}
                        <Link href='/sklepy-internetowe/shopify' className='text-white font-semibold hover:text-[#e28350] transition-colors'>Shopify</Link>{' '}
                        {lang === 'en' ? 'and' : 'i'}&nbsp;
                        <Link href='/sklepy-internetowe/shoper' className='text-white font-semibold hover:text-[#e28350] transition-colors'>Shoper</Link>.
                    </p>
                </div>

                <div className='mt-20 flex flex-col border-t border-white/10 rounded-t-2xl'>
                    {dict.items.map((item, idx) => (
                        <Link key={idx} href={`${baseUrl}${item.link}`} className={`group flex items-center justify-between px-8 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 gap-12 ${idx === 0 ? 'rounded-t-2xl' : ''} ${idx === 2 ? 'rounded-b-2xl' : ''} max-lg:flex-col max-lg:py-10 max-lg:gap-6 max-sm:px-6`}>

                            <div className='w-[35%] shrink-0 max-lg:w-full'>
                                <h3 className='text-[36px] font-medium text-white tracking-tight group-hover:text-[#e28350] transition-colors duration-300 max-lg:text-[32px] max-md:text-[28px]'>{item.title}</h3>
                            </div>

                            <div className='w-[50%] flex flex-col gap-4 text-[16px] leading-relaxed max-lg:w-full max-lg:text-[15px]'>
                                {item.desc.map((paragraph, pIdx) => (
                                    <p key={pIdx}>{paragraph}</p>
                                ))}
                            </div>

                            <div aria-hidden='true' className='shrink-0 flex justify-end w-[10%] max-lg:ml-auto max-lg:mt-4'>
                                <Icon icon='ph:arrow-up-right-light' className='text-white/40 w-8 h-8 group-hover:text-[#e28350] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
                            </div>
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default ServicePlatforms