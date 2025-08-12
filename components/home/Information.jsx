import PreTitle from '@components/PreTitle'
import Image from 'next/image'
import React from 'react'

import information1 from '@assets/images/home-information/information-1.webp'
import information2 from '@assets/images/home-information/information-2.webp'
import IntersectionListener from '@components/IntersectionListener'

const Information = ({dict}) => {
  return (
    <section id="information-section" className='w-full flex gap-16 items-center relative information-hidden max-xl:gap-12 max-lg:flex-col max-sm:justify-center'>
      <IntersectionListener selector="#information-section" visibleClass="information-visible" hiddenClass="information-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>

      <Image src={information1} width={630} height={700} alt={dict.alts[0]} className='rounded-r-[40px] transition-all duration-1000 ease-in-out animation-left max-2xl:h-[600px] max-xl:h-[500px] max-xl:w-[350px] max-xl:rounded-r-[20px] object-left object-cover max-lg:h-[400px] max-lg:rounded-[20px] max-lg:w-[70%] self-left max-sm:w-[90%]'/>

      <article className='flex flex-col gap-16 max-2xl:gap-12 max-xl:gap-10'>

        <div className='flex flex-col gap-4 pl-8 max-w-[800px] transition-all duration-1000 ease-in-out animation-right max-2xl:max-w-[600px] max-lg:max-w-[80%] max-lg:mx-auto max-sm:max-w-[90%] max-sm:pl-0'>
          <PreTitle title="O produktach"/>
          <h2 className='heading-gradient-gray text-[30px] w-fit max-2xl:text-[25px] max-sm:text-[20px]'>{dict.title}</h2>
          {dict.content.map((p, idx) => <p key={idx} className='text-[16px] max-2xl:text-[15px] max-lg:text-[14px]'>{p}</p>)}
        </div>

        <Image src={information2} width={1220} height={200} alt={dict.alts[1]} className='rounded-l-[40px] transition-all duration-1000 ease-in-out animation-right flex-1 object-cover h-[200px] max-xl:rounded-l-[20px] max-lg:w-[70%] self-end max-sm:w-[90%] max-sm:rounded-l-[10px]'/>

      </article>

      <div className='absolute w-[80%] right-0 top-[50%] translate-y-[-50%] h-[calc(100%+32px)] border-[0.5px] border-[#5B595940] rounded-l-[10px] z-[-1]'></div>

    </section>
  )
}

export default Information