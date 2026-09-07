import React from 'react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const InlineCta = ({ dict }) => {
    return (
        <div className='mt-16 leading-relaxed mx-auto text-center'>
            <h3 className='text-[25px] font-medium text-white max-lg:text-[23px]'>{dict.h3}</h3>
            <p className='mt-2 mb-8 text-[18px] max-lg:text-[16px]'>{dict.desc}</p>
            <WhiteBtn href={dict.href}>{dict.button}</WhiteBtn>
        </div>
    )
}

export default InlineCta