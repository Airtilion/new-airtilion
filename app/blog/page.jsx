'use client'

import Image from 'next/image'
import React, { useEffect } from 'react'
import Recomendations from '@components/blog-all/Recomendations'
import Latest from '@components/blog-all/Latest'
import Footer from '@components/Footer'
// import useIntersectionObserver from '@hooks/useObserver'
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction'

const page = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  // const [ ref, isVisible ] = useIntersectionObserver();

  return (
    <>
      {/* <header ref={ref} className={`min-h-[600px] flex flex-col justify-end items-start px-[128px] pb-[128px] transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'} lg:px-[64px]`}>
        <h1 className='text-[50px] font-bold 2xl:text-[45px] xl:text-[40px] lg:text-[35px] lg:text-center lg:mx-auto'>Blog pełen wiedzy i&nbsp;inspiracji</h1>
        <h2 className='text-[25px] w-[700px] font-light mt-[8px] 2xl:text-[20px] xl:text-[18px] lg:text-[16px] lg:w-full lg:text-center'>Zagłęb się w artykuły, porady i historie, pobudzające Twoją kreatywność i poszerzające horyzonty.</h2>
      </header> */}

      <main className='w-full pt-[64px] flex flex-col gap-[128px] relative'>
        <Recomendations />
        <Latest />

        <section className='w-[1200px] mx-auto xl:w-[960px] lg:w-full lg:px-[48px] z-[1]'>
          {/* <PortfolioCallToAction/> */}
        </section>

        <div className='bg-[#04040487] absolute top-0 left-0 w-full h-full backdrop-blur-[7px] z-[0] rounded-tl-[40px] rounded-tr-[40px]'/>
      </main>

      {/* <Image src={bg} alt='zdjęcie tła' width={1920} height={1080} quality={100} className='object-cover w-full h-dvh fixed z-[-1] top-0 left-0 brightness-75' /> */}
      {/* <Footer bg={true} /> */}
    </>
  )
}

export default page