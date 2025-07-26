import IntersectionListener from '@components/IntersectionListener'
import { Icon } from '@iconify/react/dist/iconify'
import React from 'react'

const PortfolioReview = ({dict, author, authorRole, revs}) => {
    return (
        <section id="portfolio-rev-section" className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto portfolio-rev-hidden'>
            <IntersectionListener selector="#portfolio-rev-section" visibleClass="portfolio-rev-visible" hiddenClass="portfolio-rev-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
            
            <article className='flex gap-16 items-center animation-bottom transition-all duration-1000 ease-in-out max-lg:flex-col max-lg:items-start max-lg:gap-4'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] max-w-[300px] heading-gradient-gray'>{dict.title}</h2>
                <div className='flex-1 flex flex-col gap-2'>
                    {revs.map((r, idx) => (
                        <p key={idx} className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{r}</p>
                    ))}
                </div>
            </article>
            <article className='flex justify-end mt-8 animation-bottom transition-all duration-1000 ease-in-out'>
                <div className='flex gap-4 items-end max-md:items-center'>
                    <Icon icon="fa:quote-left" width={58} height={49} className='max-md:w-[40px]'/>
                    <div>
                        <p className='text-[18px] !font-extralight !text-white max-md:text-[16px] max-sm:text-[14px]'>{author}</p>
                        <p className='text-[18px] !font-extralight !text-white max-md:text-[16px] max-sm:text-[14px]'>{authorRole}</p>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default PortfolioReview