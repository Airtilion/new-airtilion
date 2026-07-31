import React from 'react'
import { Icon } from '@iconify/react'

const OfferProcess = ({ dict }) => {
    return (
        <section className='mt-[128px]'>
            <div className='section-style'>

                <h2 className='max-w-2xl title'>{dict.title}</h2>

                <ul className='mt-24 grid grid-cols-4 border-l border-t border-white/20 rounded-2xl max-lg:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1'>

                    {dict.steps?.map((step, idx) => (
                        <li key={idx} className={`group relative p-10 border-r border-b border-white/20 custom-hover-bg flex flex-col min-h-[320px] max-lg:p-8 ${idx === 0 ? 'rounded-l-2xl max-lg:rounded-bl-none max-md:rounded-t-2xl' : ''} ${idx === 3 ? 'rounded-r-2xl max-lg:rounded-tr-none max-md:rounded-b-2xl' : ''} ${idx === 1 ? 'max-lg:rounded-tr-2xl max-md:rounded-tr-none' : ''} ${idx === 2 ? 'max-lg:rounded-bl-2xl max-md:rounded-bl-none' : ''}`}>
                            <div className='flex justify-between items-start'>
                                <span className='w-14 h-14 bg-white/5 flex-center text-[18px] font-mono text-(--primary-text-color) group-hover:bg-(--primary-text-color) group-hover:text-black transition-colors duration-300'>{step.number || idx + 1}</span>

                                {idx < (dict.steps?.length - 1) && (
                                    <div aria-hidden='true' className='mt-4'>
                                        <Icon icon='ph:arrow-right-light' width={24} height={24} className='text-white/20 group-hover:text-(--hover-text-color) transition-colors max-md:rotate-90' />
                                    </div>
                                )}
                            </div>

                            <div className='mt-12'>
                                <h3 className='text-[22px] font-medium group-hover:text-(--hover-text-color) transition-colors duration-300'>{step.title}</h3>
                                <p className='mt-4 text-[15px] leading-relaxed'>{step.description}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default OfferProcess