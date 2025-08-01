'use client'

import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ProjectViewer from './ProjectViewer'
import Link from '@node_modules/next/link'

const PortfolioIntroduction = ({ dict, desc, logo, screens, clientID, visualization, projectName, link }) => {
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const isVertical = logo.height > logo.width
    const logoWidth = isVertical ? 90 : 250
    const logoHeight = isVertical ? (logo.height / logo.width) * 90 : 250

    const convertLink = (file) => `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${clientID}/${file.replace(/\\/g, '/')}`
    
    useEffect(() => {
        document.body.style.overflow = isContactOpen ? 'hidden' : ''
        const nav = document.querySelector('nav')
        // const footer = document.querySelector('footer')
        if (isContactOpen) {
            nav.classList.add('nav-hidden')
            // footer.classList.add('footer-hidden')
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setIsVisible(false);
                nav.classList.remove('nav-hidden')
                // footer.classList.remove('footer-hidden')
            }, 600)

            return () => clearTimeout(timeout);
        }
    }, [isContactOpen])
    return (
        <>
            <section id="portfolio-introduction-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] portfolio-introduction-hidden'>
                <IntersectionListener selector="#portfolio-introduction-section" visibleClass="portfolio-introduction-visible" hiddenClass="portfolio-introduction-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

                <article className='flex gap-16 mb-16 items-center max-lg:flex-col max-lg:gap-4 max-lg:items-start animation-opacity transition-all duration-1000 ease-in-out'>
                    <h2 className='heading-gradient-gray text-[30px] max-2xl:text-[25px] max-sm:text-[20px] w-fit'>{dict.title}</h2>
                    <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] flex-1'>{desc}</p>
                </article>

                <article className='w-full flex flex-wrap gap-4 max-xl:justify-center'>
                    <div className='relative w-[400px] aspect-square h-auto overflow-hidden bg-[#000000] flex justify-center items-center max-2xl:w-[382px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[90%] max-sm:max-w-[400px] transition-all duration-1000 ease-in-out animation-bottom delay-100'>
                        <Image src={convertLink(logo)} width={logoWidth} height={logoHeight} unoptimized className='relative z-[2] h-auto' alt={dict.alts[0]} />
                        <div className='absolute w-[500px] h-[500px] top-[-250px] left-[-250px] bg-[#e28350a0] z-[1] rounded-full blur-[80px]'></div>
                    </div>

                    {screens?.slice(0, 4)?.map((el, idx) => (
                        <Image key={idx} src={convertLink(el.file)} width={400} height={400} quality={100} alt={dict.alts[idx + 1]} className='max-2xl:h-auto max-2xl:aspect-square max-2xl:w-[382px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[90%] max-sm:max-w-[400px] transition-all duration-1000 ease-in-out animation-bottom' style={{ transitionDelay: (idx + 2) * 100 + 'ms' }} />
                    ))}

                    <div onClick={() => setIsContactOpen(true)} className='cursor-pointer relative w-[400px] h-auto aspect-square bg-[#e28350] overflow-hidden flex flex-col justify-end items-center px-16 py-8 max-2xl:w-[382px] max-lg:w-[350px] max-md:w-[300px] max-sm:w-[90%] max-sm:max-w-[400px] transition-all duration-1000 ease-in-out animation-bottom delay-[600ms]'>
                        <button className='z-[2] text-[18px] absolute top-[50%] translate-y-[-50%] max-lg:text-[16px] max-sm:text-[14px]'>{dict.button[0]}</button>
                        <p className='relative z-[2] text-center text-[16px] font-light max-lg:text-[14px] max-sm:text-[12px]'>{dict.button[1]}</p>
                        <div className='absolute w-[800px] h-[800px] top-[-370px] left-[-370px] bg-[#000000] z-[1] rounded-full blur-[80px]'></div>
                    </div>
                </article>
                {link?.show === true && <p className='text-[18px] text-center mt-16 max-xl:text-[17px] max-sm:text-[16px]'>{dict.link} <Link href={link.value} className='!text-[#e28350]'>{link.value}</Link></p>}
            </section>

            <ProjectViewer isVisible={isVisible} setIsContactOpen={setIsContactOpen} isContactOpen={isContactOpen} vis={visualization} projectName={projectName} convertLink={convertLink}/>
        </>
    )
}

export default PortfolioIntroduction