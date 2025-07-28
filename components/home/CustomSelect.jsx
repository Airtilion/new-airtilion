'use client'

import { Icon } from '@iconify/react/dist/iconify'
import React, { useState } from 'react'

const options = [ 
  { name: { pl: 'Strona wizytówka', en: 'Business card site' }, value: 'landing' },
  { name: { pl: 'Blog', en: 'Blog' }, value: 'blog' },
  { name: { pl: 'Sklep internetowy', en: 'Online store' }, value: 'sklep' },
  { name: { pl: 'Aplikacja mobilna', en: 'Mobile app' }, value: 'app' },
  { name: { pl: 'Strona portfolio', en: 'Portfolio site' }, value: 'portfolio' },
  { name: { pl: 'Bardziej rozbudowany serwis', en: 'More complex service' }, value: 'more' },
  { name: { pl: 'Żadne z powyższych', en: 'None of the above' }, value: 'other' }
];

const CustomSelect = ({lang, updateData, data, name}) => {
    const [open, setOpen] = useState(false)

    return (
        <div className='relative w-full z-10 '>
            <div className='w-full h-[50px] bg-transparent border-[0.5px] border-[#585959] rounded-[5px] outline-none px-4 max-lg:text-[15px] max-sm:text-[14px] max-sm:h-[45px] relative flex items-center justify-between cursor-pointer' onClick={() => setOpen(!open)}>
                <p className='text-[#696969] max-sm:!text-[14px]'>{name}: <span className='text-white max-sm:!text-[14px]'>{options.find(option => option.value === data).name[lang]}</span></p>
                <Icon icon="mdi-light:arrow-up" width={30} height={30} className={`duration-500 ${open ? 'rotate-[135deg]' : 'rotate-[45deg]'}`} />
            </div>
            <ul className={`absolute left-0 w-full bg-[#000000e7] backdrop-blur-[10px] flex flex-col overflow-hidden rounded-[5px] transition-all duration-300 ${open ? 'max-h-[280px] opacity-100 translate-y-[10px]' : 'max-h-0 opacity-0 -translate-y-2'}`}>
                {options.map((el, idx) => (
                    <li key={idx} className='text-[16px] px-4 hover:bg-[#e2835055] duration-300 flex items-center h-[45px] cursor-pointer' onClick={() => { updateData(el.value, "type"); setOpen(false) }}>
                        <p className='capitalize'>{el.name[lang]}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default CustomSelect