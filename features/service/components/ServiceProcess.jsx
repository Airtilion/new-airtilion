import React from 'react'
import { Icon } from '@iconify/react/dist/iconify'

const ServiceProcess = ({ dict }) => {
    const cornerClasses = {
        0: 'rounded-tl-2xl max-md:rounded-t-2xl',
        1: 'max-lg:rounded-tr-2xl max-md:rounded-none',
        2: 'rounded-tr-2xl max-lg:rounded-none',
        3: 'rounded-bl-2xl max-lg:rounded-none',
        4: 'max-lg:rounded-bl-2xl max-md:rounded-none',
        5: 'rounded-br-2xl max-md:rounded-b-2xl'
    };
    return (
        <section className='mt-[128px]'>
            <div className='section-style'>

                <div className='max-w-4xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.desc}</p>
                </div>

                <ul className='mt-24 grid grid-cols-3 border-l border-t border-white/20 rounded-2xl max-lg:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1'>

                    {dict.steps?.map((step, idx) => (
                        <li key={idx} className={`group relative p-10 border-r border-b border-white/20 custom-hover-bg flex flex-col min-h-[320px] max-lg:p-8 max-md:min-h-0 ${cornerClasses[idx] || ''}`}>
                            <div className='flex justify-between items-start'>
                                <span aria-hidden='true' className='w-14 h-14 bg-white/5 flex-center text-[18px] font-mono text-(--primary-text-color) group-hover:bg-(--primary-text-color) group-hover:text-black transition-colors duration-300'>{step.number || idx + 1}</span>

                                {idx < (dict.steps?.length - 1) && (
                                    <div aria-hidden='true' className='mt-4'>
                                        <Icon icon='ph:arrow-right-light' width={24} height={24} className='text-white/20 group-hover:text-(--hover-text-color) transition-colors max-md:rotate-90' />
                                    </div>
                                )}
                            </div>

                            <div className='mt-12 max-sm:mt-8'>
                                <h3 className='text-[22px] font-medium group-hover:text-(--hover-text-color) transition-colors duration-300 max-sm:text-[20px]'>{step.title}</h3>
                                <p className='mt-4 text-[15px] leading-relaxed'>{step.description}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default ServiceProcess