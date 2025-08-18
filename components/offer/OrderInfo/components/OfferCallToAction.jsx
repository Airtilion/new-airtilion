import Image from 'next/image'
import React from 'react'

import laptopPhoto from '@assets/images/offer/pricing.webp'
import { Icon } from '@iconify/react/dist/iconify'
import OfferFormButton from './OfferFormButton'

const OfferCallToAction = ({dict}) => {
    return (
        <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex gap-8 mt-24 relative overflow-hidden rounded-r-[10px] transition-all duration-1000 ease-in-out animation-bottom max-lg:flex-col max-lg:pb-8 max-sm:rounded-l-[10px]'>
            <div className='relative w-fit'>
                <div className='absolute inset-0 z-[3] bg-linear-to-r from-[#00000000] to-[#000000] rounded-[10px]'/>
                <Image src={laptopPhoto} width={450} height={240} alt={dict.alt} className='relative z-[2] rounded-[10px] max-lg:w-[600px]'/>
            </div>
            <div className='flex flex-col flex-1 gap-2 justify-center pr-8 max-lg:px-8 max-sm:px-4'>
                <h2 className='text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit'>{dict.title}</h2>
                <p className='text-[14px] max-2xl:text-[13px] max-sm:text-[12px]'>{dict.content}</p>
                <OfferFormButton text={dict.button}/>
            </div>

            <div className='w-[1000px] h-[1000px] bg-[#e28350e1] blur-[100px] absolute rounded-full right-[-500px] top-[-900px] max-lg:top-auto max-lg:bottom-[-900px] z-[-1] max-lg:opacity-50'/>
        </article>
    )
}

export default OfferCallToAction