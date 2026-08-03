import React from 'react'
import { Icon } from '@iconify/react'

const ServicePricingFactors = ({ dict }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-2xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
                </div>


                <div className='mt-8 grid grid-cols-2 gap-6 auto-rows-fr max-lg:grid-cols-1 max-lg:auto-rows-auto'>
                    {dict.factors.map((item, idx) => (
                        <div key={idx} className='col-span-1 group flex gap-6 p-8 border border-white/20 custom-hover-bg transition-colors duration-500 rounded-2xl max-md:p-6'>
                            
                            <div aria-hidden='true' className='w-12 h-12 rounded-full bg-white/5 flex-center shrink-0 group-hover:bg-(--primary-text-color) transition-all duration-500'>
                                <Icon icon={item.icon} width={24} height={24} className="text-(--primary-text-color) group-hover:text-black transition-colors duration-500" />
                            </div>

                            <div>
                                <h3 className='text-[20px] text-white group-hover:text-[#e28350] transition-colors duration-500 max-lg:text-[18px]'>{item.title}</h3>
                                <p className='mt-2 text-[16px] leading-relaxed max-sm:text-[15px]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-16 flex gap-8 p-8 bg-white/[0.02] rounded-2xl group transition-all duration-500 hover:border-white/20 max-sm:gap-6 max-sm:flex-col max-sm:items-center max-sm:p-6'>
                    <div aria-hidden='true' className='w-16 h-16 rounded-full bg-white/5 flex items-center justify-center shrink-0 max-sm:w-14 max-sm:h-14'>
                        <Icon icon="ph:wallet-light" width={32} height={32} className="text-[#E28350] group-hover:scale-110 transition-transform duration-500 max-sm:w-[26px]" />
                    </div>
                    <p className='text-[18px] leading-relaxed max-lg:text-[16px]'>{dict.outro}</p>
                </div>

            </div>
        </section>
    )
}

export default ServicePricingFactors