import React from 'react'
import CustomContactToggle from '@components/CustomContactToggle'
import IntersectionListener from '@components/IntersectionListener'

const CallToActionShop = ({ dict }) => {
    return (
        <section id='cta-shop' className='mt-48 section-style-small text-center relative element-hidden-opacity animation-opacity transition-all duration-1000 ease-in-out'>
            <IntersectionListener selector="#cta-shop" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.1" rootMargin='0px 0px -50px 0px' />
            <div className='h-[2px] w-[490px] mx-auto radial-line max-lg:w-[300px] max-sm:w-[80%]' />

            <h2 className='mt-8 text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px]'>{dict.title}</h2>
            <p className='mt-4 text-[18px] max-xl:text-[16px] max-sm:text-[14px]' dangerouslySetInnerHTML={{__html: dict.desc}} />
            <CustomContactToggle text={dict.textButton} classes="mt-8 primary-gradient px-8 h-[50px] rounded-full duration-700 hover:scale-95 max-sm:w-full" />

            <div className='mt-8 h-[2px] w-[490px] mx-auto radial-line max-lg:w-[300px] max-sm:w-[80%]' />

            <div className='absolute -z-1 section-style-small h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E283504D] rounded-full blur-[150px]' />
        </section>
    )
}

export default CallToActionShop