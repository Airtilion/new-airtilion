import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Icon } from '@iconify/react'
import WhiteBtn from '@components/buttons/WhiteBtn'

import img from '@assets/images/administration/internal.webp'

const AdministrationTechnologies = ({ dict }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='grid grid-cols-12 gap-16 max-lg:flex max-lg:flex-col-reverse'>

                    <div className='col-span-7 max-lg:col-span-1'>
                        <h2 className='title'>{dict.title}</h2>
                        <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>

                        <div className='mt-16 flex flex-col'>
                            {dict.sections.map((section, idx) => (
                                <div key={idx} className={`flex flex-col gap-6 py-10 ${idx !== 0 ? 'border-t border-white/10' : 'pt-0'}`}>
                                    <h3 className='text-[24px] text-white max-sm:text-[22px]'>{section.heading}</h3>

                                    {section.paragraphs.map((p, pIdx) => (
                                        <p key={pIdx} className='text-[16px] leading-relaxed max-sm:text-[15px]'>{p}</p>
                                    ))}

                                    {section.links && (
                                        <div className='mt-2 flex flex-col gap-3'>
                                            {section.links.map((link, lIdx) => (
                                                <Link key={lIdx} href={link.href} className='group inline-flex items-center gap-3 w-max px-6 py-3 rounded-full border border-white/20 text-(--primary-text-color) hover:border-(--hover-text-color) hover:text-(--hover-text-color) transition-colors duration-300 max-sm:text-[14px] max-sm:w-auto'>
                                                    <span>{link.text}</span>
                                                    <Icon icon='ph:arrow-up-right-light' width={16} height={16} className='shrink-0 group-hover:rotate-45 transition-transform duration-300' />
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {dict.cta && (
                            <div className='mt-8 p-8 rounded-2xl border border-white/20 duration-300 hover:border-solid hover:bg-white/[0.02] flex-center gap-8 max-xl:flex-col max-xl:text-center max-xl:max-w-none max-sm:p-6'>
                                <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.cta.text}</p>
                                <WhiteBtn>{dict.cta.buttonLabel}</WhiteBtn>
                            </div>
                        )}
                    </div>

                    <div className='col-span-5 max-lg:col-span-1 max-lg:w-[400px] max-lg:mx-auto max-sm:w-full'>
                        <div className='sticky top-32'>
                            <Image src={img} alt={dict.imgAlt} width={564} height={800} className='rounded-2xl object-cover' />
                        </div>
                    </div>

                </div>

            </div>

        </section>
    )
}

export default AdministrationTechnologies