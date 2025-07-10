'use client'

import PreTitle from '@components/PreTitle'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify'
import IntersectionListener from '@components/IntersectionListener'

import offerBg1 from '@assets/images/home-offer/offer-1-1.webp'
import offerBg2 from '@assets/images/home-offer/offer-1-2.webp'

import offerBg3 from '@assets/images/home-offer/offer-2-1.webp'
import offerBg4 from '@assets/images/home-offer/offer-2-2.webp'

import offerBg5 from '@assets/images/home-offer/offer-3-1.webp'
import offerBg6 from '@assets/images/home-offer/offer-3-2.webp'

import offerBg7 from '@assets/images/home-offer/offer-4-1.webp'
import offerBg8 from '@assets/images/home-offer/offer-4-2.webp'

const bgPairs = [
  [offerBg1, offerBg2],
  [offerBg3, offerBg4],
  [offerBg5, offerBg6],
  [offerBg7, offerBg8],
]

const Offer = ({ dict }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="offer-section" className='w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[90%] flex flex-col gap-12 offer-hidden'>
      <IntersectionListener selector="#offer-section" visibleClass="offer-visible" hiddenClass="offer-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />
      <article className='relative h-[310px] p-12 pt-4 max-lg:h-auto max-sm:p-8 transition-all duration-1000 ease-in-out animation-top'>
        <div className='flex flex-col gap-4'>
          <PreTitle title={dict.tag} />
          <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit'>{dict.title}</h2>
          <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{dict.mContent}</p>
        </div>

        <div className='w-full flex justify-between mt-12 max-lg:flex-wrap max-lg:max-w-[536px] max-lg:justify-center max-lg:gap-4 max-lg:mx-auto'>
          {dict.elements.map((btn, idx) => <button key={idx} onClick={() => setActiveIndex(idx)} className={`text-[18px] text-white border-1 rounded-full w-[260px] h-[50px] hover:border-[#E28350] hover:text-[#E28350] transition-all duration-1000 max-xl:text-[16px] max-xl:h-[45px] max-xl:w-[200px] max-lg:w-[260px] ${activeIndex === idx && 'primary-gradient border-none hover:text-white cursor-auto'}`}>{btn.name}</button>)}
        </div>

        <div className='absolute inset-0 z-[-1] bg-linear-to-b from-[#000000] to-[#000000B3] rounded-[10px]'></div>
        <div className="absolute inset-0 z-[-2] rounded-[10px] overflow-hidden">
          {bgPairs.map(([img1], idx) => (
            <Image key={idx} src={img1} width={1240} height={310} quality={100} alt={dict.elements[idx].name} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`} />
          ))}
        </div>
      </article>

      <article className='relative h-[380px] p-12 flex flex-col gap-16 max-lg:h-auto max-sm:p-8 transition-all duration-1000 ease-in-out animation-bottom'>
        <div className='flex justify-between gap-12 max-lg:flex-col max-lg:gap-4'>
          {dict.elements[activeIndex].content.map((text, idx) => <p key={idx} className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] translate-y-animation duration-1000' style={{animationDelay: idx*100 + 'ms'}}>{text}</p>)}
        </div>

        <div className='w-fit self-end'>
          <Link href="#" className='flex gap-2 items-center text-[16px] max-2xl:text-[15px] max-sm:text-[14px] group duration-500 hover:!text-[#E28350]'>
            Przeczytaj więcej o tej ofercie
            <Icon icon="stash:arrow-right-light" width={32} height={32} className='rotate-[-45deg] max-sm:w-[28px] max-sm:h-[28px] group-hover:rotate-0 duration-500' />
          </Link>
          <div className='h-[2px] w-full radial-line mt-1'></div>
        </div>

        <div className='absolute inset-0 z-[-1] bg-linear-to-t from-[#000000] to-[#000000B3] rounded-[10px]'></div>
        <div className="absolute inset-0 z-[-2] rounded-[10px] overflow-hidden">
          {bgPairs.map(([, img2], idx) => (
            <Image key={idx} src={img2} width={1240} height={380} quality={100} alt={dict.elements[idx].name} className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${activeIndex === idx ? 'opacity-100' : 'opacity-0'}`}/>
          ))}
        </div>

      </article>
    </section>
  )
}

export default Offer