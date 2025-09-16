'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'

import lionImg from '@assets/images/portfolio/cta-p-bg.webp'
import SlideUpContact from '@components/SlideUpContact'
import IntersectionListener from '@components/IntersectionListener'
import CustomContactToggle from '@components/CustomContactToggle'

const PortfolioCallToAction = ({ dict, mt = '0' }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isContactOpen ? 'hidden' : ''
    const nav = document.querySelector('nav')
    if (isContactOpen) {
      nav.classList.add('nav-hidden')
      setIsVisible(true);
    } else {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        nav.classList.remove('nav-hidden')
      }, 600)

      return () => clearTimeout(timeout);
    }
  }, [isContactOpen])

  return (
    <>
      <section id="cta-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] px-16 max-md:px-4 max-sm:py-8 relative flex flex-col justify-center items-center gap-8 min-h-[350px] overflow-hidden max-2xl:gap-6 element-hidden-opacity transition-all duration-1000 ease-in-out' style={{marginTop: `${mt}px`}}>

      <IntersectionListener selector="#cta-section" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.1" rootMargin='0px 0px -50px 0px'/>

        <h2 className='text-[40px] max-2xl:text-[30px] max-lg:text-[25px] max-sm:text-[20px] heading-gradient-gray max-md:text-center'>{dict.title}</h2>
        <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] text-center'>{dict.content}</p>
        <CustomContactToggle classes='h-[50px] px-16 primary-gradient rounded-full max-2xl:mt-4 max-lg:text-[14px] max-lg:h-[45px] max-lg:px-12 hover:text-[14px] duration-500' text={dict.button}/>
        <Image src={lionImg} width={1920} height={500} alt={dict.alt} quality={100} className='object-cover object-top brightness-30 absolute z-[-1] h-full max-md:h-full' />
      </section>

    </>
  )
}

export default PortfolioCallToAction