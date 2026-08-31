import React from 'react'
import { Icon } from '@iconify/react'

const TITLE_COL_SPAN_CLASS = {
    2: 'col-span-2',
    3: 'col-span-3',
    4: 'col-span-4',
    5: 'col-span-5',
}

const DESC_COL_SPAN_CLASS = {
    9: 'col-span-9',
    8: 'col-span-8',
    7: 'col-span-7',
    6: 'col-span-6',
}

const getTitleColSpanClass = (titleColSpan) => TITLE_COL_SPAN_CLASS[titleColSpan] ?? TITLE_COL_SPAN_CLASS[2]
const getDescColSpanClass = (titleColSpan) => DESC_COL_SPAN_CLASS[11 - titleColSpan] ?? DESC_COL_SPAN_CLASS[9]

const IconRowListWithFaqGrid = ({ dict, withTopMargin = true, titleColSpan = 2 }) => {
    return (
        <section className={`${withTopMargin ? 'mt-32' : ''} py-32 overflow-hidden bg-black relative`}>
            <div className='section-style relative z-1'>

                <div className='max-w-4xl'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-8 text-[18px] leading-relaxed max-md:text-[16px]'>{dict.intro}</p>
                    <p className='mt-6 text-[18px] max-md:text-[16px]'>{dict.subintro}</p>
                </div>

                <div className='mt-16 flex flex-col border-t border-white/10'>
                    {dict.costs.map((cost, idx) => (
                        <div key={idx} className='grid grid-cols-12 gap-16 items-center group border-b py-12 border-white/10 max-md:p-6 max-md:grid-cols-4 max-md:gap-8'>
                            <div aria-hidden='true' className='col-span-1 shrink-0 w-14 h-14 bg-white/5 flex-center duration-300 group-hover:bg-(--primary-text-color)'>
                                <Icon icon={cost.icon} width={32} height={32} className="text-(--hover-text-color) group-hover:text-black group-hover:scale-110 transition-transform duration-300" />
                            </div>
                            <h3 className={`${getTitleColSpanClass(titleColSpan)} col-span-2 text-[20px] max-md:col-span-3 max-sm:text-[18px]`}>{cost.title}</h3>
                            <p className={`${getDescColSpanClass(titleColSpan)} text-[15px] leading-relaxed max-md:col-span-4`}>{cost.desc}</p>
                        </div>
                    ))}
                </div>

                <div className='mt-8 grid grid-cols-2 gap-16 pt-16 max-lg:grid-cols-1'>
                    {dict.faq.map((item, idx) => (
                        <div key={idx} className='flex flex-col gap-6'>
                            <h3 className='text-[28px] max-lg:text-[24px] tracking-tight max-sm:text-[22px]'>{item.title}</h3>

                            {item.paragraphs.map((p, pIdx) => (
                                <p key={pIdx} className='mt-2 text-[16px] leading-relaxed max-sm:text-[15px]'>{p}</p>
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-450px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />
        </section>
    )
}

export default IconRowListWithFaqGrid