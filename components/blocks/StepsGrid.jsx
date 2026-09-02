import React from 'react'
import { Icon } from '@iconify/react/dist/iconify'

const GRID_COLS_CLASS = { 2: 'grid-cols-2', 3: 'grid-cols-3', 4: 'grid-cols-4' }
const ALL_CORNERS = ['tl', 'tr', 'bl', 'br']

const CORNER_CLASS = {
    base: { tl: 'rounded-tl-2xl', tr: 'rounded-tr-2xl', bl: 'rounded-bl-2xl', br: 'rounded-br-2xl' },
    lg: { tl: 'max-lg:rounded-tl-2xl', tr: 'max-lg:rounded-tr-2xl', bl: 'max-lg:rounded-bl-2xl', br: 'max-lg:rounded-br-2xl' },
    md: { tl: 'max-md:rounded-tl-2xl', tr: 'max-md:rounded-tr-2xl', bl: 'max-md:rounded-bl-2xl', br: 'max-md:rounded-br-2xl' },
}

const CORNER_RESET_CLASS = {
    lg: { tl: 'max-lg:rounded-tl-none', tr: 'max-lg:rounded-tr-none', bl: 'max-lg:rounded-bl-none', br: 'max-lg:rounded-br-none' },
    md: { tl: 'max-md:rounded-tl-none', tr: 'max-md:rounded-tr-none', bl: 'max-md:rounded-bl-none', br: 'max-md:rounded-br-none' },
}

const cornersForColumns = (idx, total, columns) => {
    const lastRowSize = total % columns === 0 ? columns : total % columns
    const lastRowStart = total - lastRowSize
    const isTopRow = idx < columns
    const isBottomRow = idx >= lastRowStart
    const isLeftCol = idx % columns === 0
    const isRightCol = idx % columns === columns - 1 || idx === total - 1

    const active = new Set()
    if (isTopRow && isLeftCol) active.add('tl')
    if (isTopRow && isRightCol) active.add('tr')
    if (isBottomRow && isLeftCol) active.add('bl')
    if (isBottomRow && isRightCol) active.add('br')
    return active
}

const getCardCornerClasses = (idx, total, columns) => {
    const desktop = cornersForColumns(idx, total, columns)
    const tablet = cornersForColumns(idx, total, 2)
    const mobile = cornersForColumns(idx, total, 1)

    const classes = []
    ALL_CORNERS.forEach((corner) => {
        if (desktop.has(corner)) classes.push(CORNER_CLASS.base[corner])
        classes.push(tablet.has(corner) ? CORNER_CLASS.lg[corner] : CORNER_RESET_CLASS.lg[corner])
        classes.push(mobile.has(corner) ? CORNER_CLASS.md[corner] : CORNER_RESET_CLASS.md[corner])
    })
    return classes.join(' ')
}

const StepsGrid = ({ dict, columns = 3 }) => {
    const total = dict.steps.length;
    return (
        <section className='mt-[128px]'>
            <div className='section-style'>

                <div className='max-w-4xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    {dict.desc && <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.desc}</p>}
                </div>

                <ul className={`mt-24 grid ${GRID_COLS_CLASS[columns]} border-l border-t border-white/20 rounded-2xl max-lg:mt-16 max-lg:grid-cols-2 max-md:grid-cols-1`}>

                    {dict.steps?.map((step, idx) => (
                        <li key={idx} className={`group p-10 border-r border-b border-white/20 custom-hover-bg flex flex-col min-h-[320px] max-lg:p-8 max-md:min-h-0 ${getCardCornerClasses(idx, total, columns)}`}>
                            <div className='flex justify-between items-start'>
                                <span aria-hidden='true' className='w-14 h-14 bg-white/5 flex-center text-[18px] font-mono text-(--primary-text-color) group-hover:bg-(--primary-text-color) group-hover:text-black transition-colors duration-300'>{step.number || idx + 1}</span>

                                {idx < (dict.steps?.length - 1) && (
                                    <div aria-hidden='true' className='mt-4'>
                                        <Icon icon='ph:arrow-right-light' width={24} height={24} className='text-white/20 group-hover:text-(--hover-text-color) transition-colors max-md:rotate-90' />
                                    </div>
                                )}
                            </div>

                            <div className='mt-12 max-sm:mt-8'>
                                <h3 className='text-[22px] group-hover:text-(--hover-text-color) transition-colors duration-300 max-sm:text-[20px]'>{step.title}</h3>
                                <p className='mt-4 text-[15px] leading-relaxed'>{step.desc}</p>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default StepsGrid