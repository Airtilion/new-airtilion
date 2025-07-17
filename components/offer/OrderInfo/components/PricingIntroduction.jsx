import React from 'react'
import TextSlider from './TextSlider'

const PricingIntroduction = ({ dict }) => {
    return (
        <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto py-8 transition-all duration-1000 ease-in-out animation-opacity'>
            <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray text-center max-w-[550px] mx-auto'>{dict.title}</h2>
            <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] text-center mt-4'>{dict.content}</p>
            <TextSlider />
        </article>
    )
}

export default PricingIntroduction