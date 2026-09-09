import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react'

const COL_SPAN_CLASSES = {
    1: 'col-span-1',
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
    6: 'col-span-6',
}

const getColSpanClass = (span) => COL_SPAN_CLASSES[span] ?? COL_SPAN_CLASSES[3]

const FullImageWithFloatingCard = ({ dict, img }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-2xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-lg:text-[16px]'>{dict.intro}</p>
                </div>

                <div className='mt-12 relative w-full aspect-[21/9] rounded-2xl overflow-hidden max-lg:aspect-[16/9] max-sm:aspect-[4/5]'>
                    <Image src={img} alt={dict.imgAlt} fill className='object-cover' />
                    <div className='absolute inset-0 bg-black/20' />
                </div>

                <div className='mt-12 grid grid-cols-6 gap-6 max-lg:grid-cols-1'>
                    {dict.items.map((item, idx) => (
                        <div key={idx} className={`${getColSpanClass(item.span)} group flex gap-6 p-8 border border-white/20 custom-hover-bg transition-colors duration-500 rounded-2xl max-lg:col-span-1 max-md:p-6`}>

                            <div aria-hidden='true' className='w-12 h-12 rounded-full bg-white/5 flex-center shrink-0 group-hover:bg-(--primary-text-color) transition-all duration-500'>
                                <Icon icon={item.icon} width={24} height={24} className="text-(--primary-text-color) group-hover:text-black transition-colors duration-500" />
                            </div>

                            <div>
                                <h3 className='text-[20px] text-white group-hover:text-(--hover-text-color) transition-colors duration-500 max-lg:text-[18px]'>{item.title}</h3>
                                <p className='mt-2 text-[16px] leading-relaxed max-sm:text-[15px]'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {dict.outro && (
                    <p className='mt-12 text-[18px] leading-relaxed max-sm:text-[15px]'>{dict.outro}</p>
                )}

            </div>
        </section>
    )
}

export default FullImageWithFloatingCard
