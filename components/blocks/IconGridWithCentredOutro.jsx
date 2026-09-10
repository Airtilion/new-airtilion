import React from 'react'
import { Icon } from '@iconify/react/dist/iconify'

const GRID_COLS_CLASS = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
}

const getGridColsClass = (columns) => GRID_COLS_CLASS[columns] ?? GRID_COLS_CLASS[3]

const IconGridWithCentredOutro = ({ dict, columns = 3 }) => {
    return (
        <section className='mt-32'>
            <div className='section-style'>

                <div className='max-w-4xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.lead}</p>
                    <p className='mt-4 text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.body}</p>
                </div>

                <div className={`mt-16 grid ${getGridColsClass(columns)} gap-6 max-lg:grid-cols-1`}>
                    {dict.items.map((item, idx) => (
                        <div key={idx} className='group flex flex-col gap-4 p-8 border border-white/20 custom-hover-bg transition-colors duration-500 rounded-2xl max-md:p-6'>

                            <div aria-hidden='true' className='w-12 h-12 rounded-full bg-white/5 flex-center shrink-0 group-hover:bg-(--primary-text-color) transition-all duration-500'>
                                <Icon icon={item.icon} width={24} height={24} className="text-(--primary-text-color) group-hover:text-black transition-colors duration-500" />
                            </div>

                            <div>
                                <h3 className='text-[20px] group-hover:text-(--hover-text-color) transition-colors duration-500 max-lg:text-[18px]'>{item.title}</h3>
                                <p className='mt-2 text-[15px] leading-relaxed'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <p className='mt-12 max-w-2xl mx-auto text-center text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.outro}</p>

            </div>
        </section>
    )
}

export default IconGridWithCentredOutro