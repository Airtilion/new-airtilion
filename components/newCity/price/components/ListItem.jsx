import React from 'react'

const ListItem = ({ item, idx }) => {
    return (
        <li className='h-[80px] animation-left transition-all duration-1000 ease-in-out max-xl:h-[108px] max-lg:h-auto' style={{ transitionDelay: (idx + 1) * 100 + 'ms' }}>
            <div className='flex gap-4'>
                <span className='text-[23px] max-xl:text-[20px] max-sm:text-[18px]'>{item.title}</span>
                <div className={`w-full flex-1 flex items-center flex-row-reverse max-sm:min-w-[20px]`}>
                    <div className={`w-full flex-1 from-[#e28350] to-[#e2835000] h-[2px] bg-linear-to-r`} />
                    <div className='w-[10px] h-[10px] rounded-full bg-[#e28350]' />
                </div>
            </div>

            <p className='mt-2'>{item.desc}</p>
        </li>
    )
}

export default ListItem