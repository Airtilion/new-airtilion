import React from 'react'
import bg from '@assets/images/home-information/information-1.webp'
import Image from 'next/image'

const PortfolioLoader = () => {
  return (
    <article className='flex flex-wrap gap-8 justify-center mt-16'>
        {Array(6).fill().map((_, i) => (
            <div key={i} className='w-[600px] h-[600px] relative p-12 flex items-end overflow-hidden group max-2xl:w-[550px] max-2xl:h-[550px] max-xl:w-[450px] max-xl:h-[450px] max-lg:mx-auto max-lg:w-[550px] max-lg:h-[550px] max-sm:w-[100%] max-sm:aspect-square max-sm:h-auto max-2xl:p-8'>
                <Image src={bg} quality={50} width={600} height={600} alt="placeholder" className='absolute top-0 left-0 w-full h-full z-[1] group-hover:scale-120 duration-[10000ms] blur-2xl brightness-50 animate-pulse'/>
            </div>
        ))}
      </article>
  )
}

export default PortfolioLoader