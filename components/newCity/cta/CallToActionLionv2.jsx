import React from 'react'
import Image from 'next/image'

import CustomContactToggle from '@components/CustomContactToggle'
import IntersectionListener from '@components/IntersectionListener'
import bg from '@assets/images/lion-cta.webp'

const CallToActionLionv2 = ({ dict }) => {
    return (
        <section id='cta-lion-v2' className='mt-48 section-style relative text-paragraph element-hidden-left animation-left transition-all duration-1000 ease-in-out'>
            <IntersectionListener selector="#cta-lion-v2" visibleClass="element-visible-left" hiddenClass="element-hidden-left" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='w-[1240px] py-12 mx-auto text-center max-xl:w-[760px] max-lg:w-[90%]'>
                <h2 className='text-[40px] heading-gradient-gray max-xl:text-[30px] max-sm:text-[25px]' dangerouslySetInnerHTML={{ __html: dict.title }} />
                <p className="mt-4">{dict.desc[0]}</p>
                <p className="mt-8 font-semibold">{dict.desc[1]}</p>

                <CustomContactToggle text={dict.buttonText} classes="mt-4 primary-gradient px-12 h-[50px] rounded-full max-sm:h-[45px] max-sm:w-full" />

                <p className="mt-8" dangerouslySetInnerHTML={{ __html: dict.cta }} />
            </div>

            <div>
                <Image src={bg} alt='' width={1400} height={420} className='object-cover absolute inset-0 rounded-[10px] h-full -z-2' />
                <div className='absolute inset-0 w-full h-full bg-[#000000B3] -z-1' />
            </div>

        </section>
    )
}

export default CallToActionLionv2