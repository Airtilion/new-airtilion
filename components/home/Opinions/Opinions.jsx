import React from 'react'
import Image from 'next/image'

import opinionsBg from '@assets/images/home-opinions/opinions.webp'
import { Icon } from '@iconify/react/dist/iconify'
import Slider from './components/Slider'
import IntersectionListener from '@components/IntersectionListener'

const Opinions = ({ dict, lang }) => {
  return (
    <section id="opinion-section" className="w-full relative h-[500px] overflow-hidden max-lg:h-auto element-hidden-opacity transition-all duration-1000 ease-in-out">
      <IntersectionListener selector="#opinion-section" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.2" rootMargin='0px 0px -100px 0px'/>

      <article className="ml-auto w-[calc((100vw+1240px)/2)] max-w-full lg:max-w-[1600px] h-full flex items-center gap-24 max-xl:w-[calc((100vw+960px)/2)] max-xl:gap-16 max-lg:flex-col max-lg:items-start max-lg:w-[90%] max-lg:gap-8 max-sm:w-full">
        <div className="flex flex-col gap-6 w-[250px] max-lg:items-center">
          <Icon icon="fa:quote-left" width={90} height={76} className='max-lg:w-[70px]'/>
          <h2 className="text-[30px] max-w-[270px] font-light max-lg:text-[25px] max-lg:max-w-[230px] max-sm:text-[20px] max-lg:text-center">{dict.title}</h2>

          <div className="h-[4px] w-[100px] bg-[#E3E3E3]" />
        </div>

        <Slider lang={lang}/>
      </article>

      <div className="absolute inset-0 bg-linear-to-b from-[#000000] via-[#00000099] to-[#000000] z-[-1]" />
      <Image src={opinionsBg} width={1920} height={500} alt={dict.alt} quality={100} className="absolute inset-0 h-full w-full object-cover z-[-2]"/>
    </section>

  )
}

export default Opinions