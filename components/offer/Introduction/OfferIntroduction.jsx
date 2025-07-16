import Image from 'next/image'
import React from 'react'
import FasterWebsites from './components/FasterWebsites'
import Info from './components/Info'

const OfferIntroduction = ({dict}) => {
  return (
    <section className='w-[1240px] mx-auto flex flex-col gap-32 max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] max-sm:gap-24'>
        <Info dict={dict.introduction}/>
        <div className='radial-line w-[80%] mx-auto h-0.5'></div>
        <FasterWebsites dict={dict.fasterwebs}/>
    </section>
  )
}

export default OfferIntroduction