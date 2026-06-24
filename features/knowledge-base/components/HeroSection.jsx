import React from 'react'

const HeroSection = ({ dict }) => {
    return (
        <section className='mt-8 section-style'>
            <h1 className='text-[40px] text-(--primary-text-color) max-xl:text-[35px] max-sm:text-[30px]'>{dict.h1}</h1>
            <p className='mt-4 text-[18px] max-xl:text-[16px] max-sm:text-[14px]'>{dict.desc}</p>
        </section>
    )
}

export default HeroSection