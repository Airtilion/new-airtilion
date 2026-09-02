import React from 'react'
import { Icon } from '@iconify/react'
import Image from 'next/image'

const ProseChecklistWithImage = ({ dict, img, reverse = false }) => {
    return (
        <section className='mt-32 relative'>
            <div className={`section-style grid grid-cols-2 gap-24 max-lg:grid-cols-1 ${reverse ? 'max-lg:flex max-lg:flex-col-reverse' : ''}`}>

                <div className={`relative rounded-2xl overflow-hidden aspect-[4/5] max-lg:w-[480px] max-lg:mx-auto max-sm:w-auto max-sm:mx-0 ${reverse ? 'order-2' : 'order-1'} max-lg:order-none`}>
                    <Image src={img} alt={dict.imgAlt} fill className='object-cover' sizes="(max-width: 1024px) 100vw, 50vw" />
                    <div className='absolute inset-0 bg-black/[0.05]' />
                </div>

                <div className={reverse ? 'order-1' : 'order-2'}>
                    <h2 className='title'>{dict.title}</h2>
                    {dict.paragraphs.map((p, idx) => (
                        <p key={idx} className='mt-6 text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{p}</p>
                    ))}
                    <p className='mt-12 text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{dict.listLabel}</p>

                    <ul className='mt-8 flex flex-col gap-6'>
                        {dict.items.map((item, idx) => (
                            <li key={idx} className='flex gap-4'>
                                <Icon icon="ph:check-bold" width={18} height={18} className='mt-1 shrink-0 text-(--hover-text-color)' />
                                <span className='text-[16px] text-(--primary-text-color) leading-relaxed'>
                                    <span className='text-white'>{item.title}. </span>
                                    {item.desc}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <p className='mt-8 text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{dict.outro}</p>
                </div>

            </div>
        </section>
    )
}

export default ProseChecklistWithImage