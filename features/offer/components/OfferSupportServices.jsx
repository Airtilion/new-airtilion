import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import laptop from '@assets/images/offer/laptop-support.webp'

const OfferSupportServices = ({ dict }) => {
    return (
        <section className='mt-32 section-style'>

            <div className='flex items-center gap-16 max-xl:items-start max-lg:flex-col max-lg:items-center max-lg:gap-8'>

                <div>
                    <h2 className='mt-4 max-w-2xl title max-xl:max-w-none'>{dict.title}</h2>
                    <Image src={laptop} width={688} height={436} alt='Wsparcie techniczne i bezpieczeństwo' className='mt-16 object-cover max-xl:w-[400px] max-lg:mx-auto'  />
                </div>

                <div className='flex flex-col justify-center'>
                    <div className='border-t border-white/20'>
                        {dict.items?.map((item, idx) => (
                            <Link key={idx} href={item.link} className='group flex items-center justify-between py-8 border-b border-white/20 hover:bg-white/[0.02] hover:-mx-6 hover:px-6 transition-all duration-300 max-lg:gap-6 max-sm:flex-col'>
                                <div className='flex items-center gap-6 w-3/4 max-lg:w-full'>
                                    <span aria-hidden='true' className='text-white/30 font-mono text-[14px] transition-colors'>0{idx + 1}</span>
                                    <div>
                                        <h3 className='text-[28px] font-medium text-white transition-colors mb-2 group-hover:text-(--hover-text-color) max-md:text-[22px]'>{item.title}</h3>
                                        <p className='text-[15px] transition-colors leading-relaxed'>{item.description}</p>
                                    </div>
                                </div>

                                <div aria-hidden='true' className='flex justify-end max-lg:ml-auto'>
                                    <div className='w-12 h-12 rounded-full border border-white/20 flex-center group-hover:border-black group-hover:bg-white transition-colors'>
                                        <Icon icon='ph:arrow-right-light' width={24} className='text-white group-hover:-rotate-45 transition-transform duration-300 group-hover:text-black' />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default OfferSupportServices