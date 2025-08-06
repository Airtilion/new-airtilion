import Image from 'next/image'
import React from 'react'

import placeholder from '@assets/images/cities/tarnow.webp'


const SinglePostLoader = ({index}) => {
    return (
        <div className='h-[438px] w-[468px] flex flex-col p-[32px] relative justify-between rounded-[15px] overflow-hidden group max-2xl:w-[400px] max-2xl:h-[400px] max-xl:w-[550px] max-xl:h-[320px] max-lg:w-[330px] max-lg:h-[330px] max-fold:w-[290px] animation-left transition-all duration-1000 ease-in-out' style={{transitionDelay: index*100+'ms'}}>
            <div className='primary-gradient relative z-10 w-fit px-[16px] py-[2px] rounded-[5px] category-span cursor-pointer hover:brightness-75 duration-500 blur-[4px] animate-pulse max-2xl:text-[12px]'>
                <p className='text-[#242424] text-[14px]'>Lorem ipsum</p>
            </div>

            <div className='z-[4]'>
                <h4 className='text-[25px] font-semibold line-clamp-3 mb-[8px] blur-[6px] animate-pulse max-2xl:text-[20px] max-xl:line-clamp-2'>Airtilion - Nowoczesne i profesjonalne strony internetowe</h4>
                <p className='text-[16px] text-[#B4B4B4] line-clamp-3 blur-[5px] animate-pulse max-2xl:text-[14px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac lectus mattis, volutpat ante vitae, sollicitudin eros. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed id egestas quam. Duis mollis felis nisi, sit amet suscipit quam pulvinar quis. Fusce bibendum fermentum dapibus.</p>
            </div>

            <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(270deg,#000000_0%,#00000000_100%)] z-[2] opacity-[0.95]'></div>
            <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(#E2835000_0%,#E28350ff_100%)] z-[1] opacity-[0.2]'></div>
            <Image src={placeholder} width={500} height={500} alt="Placeholder do zdjęcia" className='blur-[10px] animate-pulse object-cover absolute top-0 left-0 w-full h-full z-0 brightness-[0.4] group-hover:scale-110 duration-500' />
        </div>
    )
}

export default SinglePostLoader