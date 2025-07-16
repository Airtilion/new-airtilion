import React from 'react'
import secondImage from '@assets/images/headers/offer-websites-bg.webp'
import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify'

const techs = [
    { icon: 'hugeicons:react', width: 30, height: 30 },
    { icon: 'teenyicons:tailwind-solid', width: 40, height: 40 },
    { icon: 'akar-icons:nextjs-fill', width: 50, height: 50 },
    { icon: 'akar-icons:php-fill', width: 50, height: 50 },
    { icon: 'lineicons:vite', width: 40, height: 40 },
    { icon: 'mdi:wordpress', width: 30, height: 30 },
]

const FasterWebsites = ({ dict }) => {
    return (
        <article id="websites-section" className='relative websites-hidden'>
            <IntersectionListener selector="#websites-section" visibleClass="websites-visible" hiddenClass="websites-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='flex gap-16 max-xl:gap-8 max-lg:gap-4 max-md:flex-col'>
                <div className='flex items-center gap-4 animation-left transition-all duration-1000 ease-in-out'>
                    <p className='text-[120px] heading-gradient-gray max-xl:text-[100px] max-sm:text-[70px]'>10<span className='text-[40px]'>x</span></p>
                    <h2 className='text-[45px] w-[200px] heading-gradient-gray-rev max-xl:text-[38px] max-sm:text-[28px]'>{dict.title}</h2>
                </div>
                <p className='animation-right transition-all duration-1000 ease-in-out text-[16px] max-xl:text-[15px] max-sm:text-[14px]'>{dict.content}</p>
            </div>
            <div className='flex gap-10 justify-center items-center mt-16 animation-bottom transition-all duration-1000 ease-in-out max-sm:gap-6'>
                {techs.map((t, idx) => <Icon key={idx} icon={t.icon} width={t.height} height={t.height} className='text-[#CFCFCF] max-sm:w-[30px]' />)}
            </div>
            <div className='absolute inset-0 z-[-1] animation-opacity transition-all duration-1000 ease-in-out'>
                <div className='absolute inset-0 bg-linear-to-t from-[#000000] via-[#00000000] to-[#000000] z-[2]'></div>
                <div className='absolute inset-0 bg-linear-to-r from-[#000000] via-[#00000080] to-[#000000] z-[1]'></div>
                <Image src={secondImage} width={1100} height={350} alt={dict.alt} className='w-full h-full object-cover relative z-0' />
            </div>
        </article>
    )
}

export default FasterWebsites