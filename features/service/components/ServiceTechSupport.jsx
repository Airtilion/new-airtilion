import React from 'react'
import { Icon } from '@iconify/react'

const ServiceTechSupport = ({ dict }) => {
    return (
        <section className='py-32 mt-32 bg-black'>
            <div className='section-style'>

                <div className='grid grid-cols-12 max-lg:grid-cols-1 gap-16 max-lg:gap-12'>

                    {/* Lewa kolumna: Wstęp */}
                    <div className='col-span-5 max-lg:col-span-1'>
                        <div className='sticky top-32 max-lg:static'>
                            <h2 className='text-[48px] max-xl:text-[40px] max-md:text-[32px] font-medium text-white leading-[1.05] tracking-tight mb-6 text-balance'>
                                {dict.title}
                            </h2>
                            <p className='text-[18px] max-md:text-[16px] text-white/60 leading-relaxed'>
                                {dict.intro}
                            </p>
                        </div>
                    </div>

                    {/* Prawa kolumna: Rodzaje wsparcia */}
                    <div className='col-span-7 max-lg:col-span-1 flex flex-col gap-6'>
                        {dict.types.map((type, idx) => (
                            <div
                                key={idx}
                                className='group p-10 max-md:p-8 border border-white/10 bg-black hover:bg-white/[0.02] hover:border-white/20 transition-all duration-500 rounded-2xl flex gap-8 max-sm:flex-col items-start'
                            >
                                <div className='w-16 h-16 rounded-full border border-white/20 flex items-center justify-center shrink-0 group-hover:border-[#e28350] group-hover:bg-[#e28350]/10 transition-all duration-500'>
                                    <Icon icon={type.icon} className="text-[32px] text-white/60 group-hover:text-[#e28350] transition-colors duration-500" />
                                </div>

                                <p className='text-[17px] max-md:text-[16px] text-white/70 leading-relaxed pt-2 group-hover:text-white transition-colors duration-500'>
                                    {type.desc}
                                </p>
                            </div>
                        ))}

                        {/* Podsumowanie wsparcia */}
                        <div className='mt-6 p-8 max-md:p-6 border-l-2 border-[#e28350] bg-white/[0.01]'>
                            <p className='text-[18px] max-md:text-[16px] text-white/80 leading-relaxed'>
                                {dict.outro}
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* Delikatny glow wokół sekcji */}
            <div className='w-[800px] h-[800px] rounded-full bg-white/[0.015] blur-[150px] absolute top-1/2 -translate-y-1/2 -left-[400px] pointer-events-none' aria-hidden="true" />
        </section>
    )
}

export default ServiceTechSupport