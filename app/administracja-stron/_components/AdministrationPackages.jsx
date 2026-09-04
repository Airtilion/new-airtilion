import React from 'react'
import WhiteBtn from '@components/buttons/WhiteBtn'
import { Icon } from '@iconify/react/dist/iconify'

const AdministrationPackages = ({ dict }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-3xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
                </div>

                <div className='mt-16 grid gap-8 grid-cols-3 items-stretch max-xl:gap-4 max-lg:grid-cols-1'>
                    {dict.tiers.map((tier, idx) => (
                        <div key={idx} className='flex flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-10 max-xl:p-6 max-lg:p-8'>

                            <h3 className='mt-3 text-[26px] max-lg:text-[24px]'>{tier.name}</h3>

                            <span className='mt-6 text-[40px] max-lg:text-[36px]'>{tier.price}</span>

                            <p className='mt-6 text-[15px] leading-relaxed text-(--primary-text-color)'>{tier.desc}</p>

                            <ul className='mt-8 flex flex-col gap-3 flex-1'>
                                {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className='flex items-start gap-3 text-[15px] leading-relaxed'>
                                        <Icon icon='ph:check-bold' width={18} height={18} className='shrink-0 mt-0.5 text-(--hover-text-color)' />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className='mt-8 max-lg:ml-auto max-sm:mx-auto'>
                                <WhiteBtn>{tier.cta.label}</WhiteBtn>
                            </div>
                        </div>
                    ))}
                </div>

                <p className='mt-12 max-w-2xl mx-auto text-center text-[15px] leading-relaxed'>{dict.note}</p>

            </div>
        </section>
    )
}

export default AdministrationPackages