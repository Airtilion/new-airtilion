'use client'

import PreTitle from '@components/PreTitle'
import React, { useEffect, useState } from 'react'
import PortfolioTile from './components/PortfolioTile'
import Image from 'next/image'
import blurredImg from '@assets/images/home-portfolio/portfolio.webp'
import IntersectionListener from '@components/IntersectionListener'
import CustomContactToggle from '@components/CustomContactToggle'
import Link from '@node_modules/next/link'

const Portoflio = ({ dict, lang, data }) => {
  return (
    <section className='w-full overflow-hidden relative'>
      <article id="portfolio-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] flex flex-col gap-2 relative z-10 portfolio-hidden'>

        <IntersectionListener selector="#portfolio-section" visibleClass="portfolio-visible" hiddenClass="portfolio-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

        <PreTitle title="Portfolio" />
        <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] mb-2 max-sm:text-[20px] animation-left transition-all duration-1000 ease-in-out'>{dict.title}</h2>
        {dict.content.map((p, idx) => (<p className='text-[16px] max-2xl:text-[15px] max-lg:text-[14px] animation-left transition-all duration-1000 ease-in-out' key={idx}>{p}</p>))}

        <div className='flex justify-between my-6 max-lg:flex-wrap max-lg:justify-center max-lg:gap-4'>
          {data?.map((tile, idx) => <PortfolioTile key={idx} index={idx} title={tile.Name} desc={tile.Description[lang]} bg={tile.SmallBackground} id={tile.id} clientId={tile.ClientId} />)}

          <Link href="/portfolio">
            <div className='w-[298px] h-[400px] flex flex-col justify-center gap-4 relative px-8 mt-[96px] rounded-[5px] overflow-hidden group cursor-pointer max-2xl:w-[283px] max-xl:w-[234px] max-xl:h-[350px] max-lg:w-[300px] max-lg:mt-0 animation-left transition-all duration-1000 ease-in-out delay-[300ms]'>
              <p className="text-center text-[20px] !text-white">{dict.button}</p>
              <Image src={blurredImg} width={298} height={400} quality={100} alt={dict.alt} className='absolute inset-0 z-[-1] rounded-[5px] h-full object-cover group-hover:scale-120 duration-[2000ms]' />
            </div>
          </Link>

        </div>

        <div className='w-[700px] flex flex-col gap-[16px] justify-center items-center mx-auto max-lg:w-[450px] max-sm:w-[90%] animation-left transition-all duration-1000 ease-in-out'>
          <p className='text-center text-[16px] max-2xl:text-[15px] max-lg:text-[14px] '>{dict.afterContent}</p>
          <div className='h-[2px] w-[490px] radial-line max-lg:w-[300px] max-sm:w-[80%]'></div>
          <CustomContactToggle classes='h-[50px] px-16 primary-gradient rounded-full max-2xl:mt-4 max-lg:text-[14px] max-lg:h-[45px] max-lg:px-12 hover:text-[14px] duration-500 mt-4' text={dict.cta}/>
        </div>

      </article>

      <div className='absolute left-[50%] translate-x-[-50%] top-[30%] w-[3471px] h-[3471px] rounded-full radial-gradient z-[1]'></div>
    </section>
  )
}

export default Portoflio