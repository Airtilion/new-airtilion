import React from 'react'
import { Icon } from '@iconify/react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const getRowBorderClass = (idx, total) => {
    const isRightColumn = idx % 2 === 1
    const rowIndex = Math.floor(idx / 2)
    const totalRows = Math.ceil(total / 2)
    const isLastRow = rowIndex === totalRows - 1

    const borderRight = isRightColumn ? '' : 'border-r max-lg:border-r-0'
    const borderBottom = isLastRow ? '' : 'border-b'

    return `${borderRight} ${borderBottom}`.trim()
}

const IconGridWithCta = ({ dict }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-3xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{dict.intro}</p>
                    <p className='mt-6 text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{dict.subintro}</p>
                </div>

                <div className='mt-12 grid grid-cols-2 auto-rows-fr max-lg:grid-cols-1 max-lg:mt-8'>
                    {dict.services.map((item, idx) => (
                        <div key={idx} className={`col-span-1 h-full flex flex-col justify-center group p-8 border-white/10 ${getRowBorderClass(idx, dict.services.length)} hover:bg-white/[0.02] duration-300 max-lg:border-b max-lg:p-6`}>
                            <div aria-hidden='true' className='w-12 h-12 rounded-full bg-white/5 flex-center shrink-0 group-hover:bg-(--primary-text-color) transition-all duration-500'>
                                <Icon icon={item.icon} width={24} height={24} className="text-(--primary-text-color) group-hover:text-black transition-colors duration-500" />
                            </div>
                            <p className='mt-6 text-[16px] leading-relaxed max-sm:text-[15px]'>{item.desc}</p>
                        </div>
                    ))}
                </div>

                {dict.note && (
                    <div className='mt-16 p-8 rounded-2xl border border-dashed border-white/20 duration-300 hover:border-solid hover:bg-white/[0.02] max-lg:mt-12'>
                        <p className='text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{dict.note}</p>
                    </div>
                )}

                <div className='mt-16 mx-auto text-center flex flex-col max-w-2xl max-md:max-w-none'>
                    <p className='mb-8 text-[22px] leading-relaxed max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px]'>{dict.outro}</p>
                    <WhiteBtn>{dict.cta}</WhiteBtn>
                </div>

            </div>
        </section>
    )
}

export default IconGridWithCta