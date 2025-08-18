'use client'

import { Icon } from '@iconify/react/dist/iconify'
import React from 'react'

const OfferFormButton = ({text}) => {
    return (
        <button onClick={() => window.dispatchEvent(new CustomEvent('openContact'))} className='flex items-center gap-4 self-end mt-8 max-sm:w-[270px] max-sm:gap-4'>
            <p className='!font-normal max-2xl:text-[15px] max-sm:text-[14px] max-sm:text-right'>{text}</p>
            <Icon icon="material-symbols:arrow-back" width={25} height={25} className='rotate-[135deg] max-2xl:w-[22px] max-sm:w-[40px]' />
        </button>
    )
}

export default OfferFormButton