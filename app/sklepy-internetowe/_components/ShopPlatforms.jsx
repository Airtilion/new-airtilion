import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const ShopPlatforms = ({ dict, lang, baseUrl = "https://airtilion.com" }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div>
                    <div className='max-w-3xl mx-auto text-center max-md:max-w-none'>
                        <h2 className='title'>{dict.title}</h2>
                        <p className='mt-6 text-[18px] leading-relaxed max-lg:text-[16px]'>
                            {dict.desc}{' '}
                            <Link href='/sklepy-internetowe/woocommerce' className='text-white font-bold hover:text-[#e28350] transition-colors'>WooCommerce</Link>,{' '}
                            <Link href='/sklepy-internetowe/shopify' className='text-white font-bold hover:text-[#e28350] transition-colors'>Shopify</Link>{' '}
                            {lang === 'en' ? 'and' : 'i'}&nbsp;
                            <Link href='/sklepy-internetowe/shoper' className='text-white font-bold hover:text-[#e28350] transition-colors'>Shoper</Link>.
                        </p>
                    </div>

                    <div className='mt-20 flex flex-col border-t border-white/10 rounded-t-2xl'>
                        {dict.items.map((item, idx) => (
                            <Link key={idx} href={`${baseUrl}${item.link}`} className={`group flex items-center justify-between px-8 py-12 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-300 gap-12 ${idx === 0 ? 'rounded-t-2xl' : ''} ${idx === 2 ? 'rounded-b-2xl' : ''} max-lg:flex-col max-lg:py-10 max-lg:gap-6 max-sm:px-6`}>

                                <div className='w-[35%] shrink-0 max-lg:w-full'>
                                    <h3 className='text-[36px] text-white tracking-tight group-hover:text-[#e28350] transition-colors duration-300 max-lg:text-[32px] max-md:text-[28px]'>{item.title}</h3>
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

                <div className='mt-24'>
                    <h3 className='text-[36px] text-center text-white tracking-tight group-hover:text-[#e28350] transition-colors duration-300 max-lg:text-[32px] max-md:text-[28px]'>{dict.h3}</h3>

                    <div className='mt-12 w-full overflow-x-auto rounded-2xl border border-white/10 [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20'>
                        <table className='w-full text-left min-w-[900px]'>
                            <thead>
                                <tr className='border-b border-white/10 bg-white/[0.02]'>
                                    {dict.headers.map((header, idx) => (
                                        <th key={idx} className={`p-6 text-[18px] font-normal ${idx === 0 ? 'w-1/4' : 'w-1/4 border-l border-white/10'} max-md:text-[16px] max-md:p-4`}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {dict.rows.map((row, idx) => (
                                    <tr key={idx} className='border-b border-white/10 last:border-0 hover:bg-white/[0.015] transition-colors duration-300'>
                                        <td className='p-6 text-[16px] text-(--primary-text-color) leading-relaxed border-r border-white/10 max-md:p-4 max-md:text-[15px]'>{row.criterion}</td>
                                        <td className='p-6 text-[16px] text-(--primary-text-color) leading-relaxed border-r border-white/10 max-md:p-4 max-md:text-[15px]'>{row.woo}</td>
                                        <td className='p-6 text-[16px] text-(--primary-text-color) leading-relaxed border-r border-white/10 max-md:p-4 max-md:text-[15px]'>{row.shopify}</td>
                                        <td className='p-6 text-[16px] text-(--primary-text-color) leading-relaxed max-md:p-4 max-md:text-[15px]'>{row.shoper}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <p className='mt-12 max-w-2xl mx-auto text-center text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{dict.outro}</p>
                </div>
            </div>
        </section >
    )
}

export default ShopPlatforms