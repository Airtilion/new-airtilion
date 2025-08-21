import IntersectionListener from '@components/IntersectionListener'
import firstImage from '@assets/images/offer/offer-1.webp'
import React from 'react'
import Image from 'next/image'

const Info = ({dict}) => {
    return (
        <article id="offer-introduction-section" className='relative overflow-hidden h-[430px] flex justify-end offer-introduction-hidden max-lg:h-auto max-sm:pt-24'>
            <IntersectionListener selector="#offer-introduction-section" visibleClass="offer-introduction-visible" hiddenClass="offer-introduction-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <Image src={firstImage} quality={100} width={640} height={640} alt={dict.alt} className='absolute left-0 z-[-1] animation-opacity transition-all duration-1000 ease-in-out max-xl:w-[500px] max-lg:w-[400px] max-sm:brightness-75 max-sm:left-[50%] max-sm:translate-x-[-50%] top-0' />
            <div className='flex flex-col gap-4 h-full items-end justify-end w-[65%] animation-right transition-all duration-1000 ease-in-out max-sm:w-full'>
                <h2 className='text-[40px] !font-light heading-gradient-gray max-xl:text-[30px] max-lg:text-[25px] max-sm:text-[20px] max-sm:text-center max-sm:!font-normal'>{dict.title}</h2>
                {dict.content.map((p, idx) => <p key={idx} className='text-[16px] max-xl:text-[15px] max-sm:text-[14px] max-sm:text-center' dangerouslySetInnerHTML={{__html: p}}></p>)}
            </div>
        </article>
    )
}

export default Info