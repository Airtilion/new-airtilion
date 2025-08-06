import React from 'react'
import Image from 'next/image'
import placeholder from '@assets/images/cities/tarnow.webp'

const elements = [
    {
        category: 'Nasze wartości',
        title: 'Tworzymy z pasją, działamy z wizją',
    },
    {
        category: 'Dlaczego my?',
        title: 'Indywidualne podejście do każdego projektu',
    },
    {
        category: 'O nas',
        title: 'Airtilion - To coś więcej niż kodowanie',
    },
    {
        category: 'Nasza motto',
        title: 'Airtilion - PASSION MAKES IT BETTER',
    }
]

const OtherPostsLoader = () => {
    return (
        <>
            {elements.map((element, index) => (
                <div key={index} className='group cursor-pointer w-[298px] h-[298px] overflow-hidden relative rounded-[5px] duration-700 hover:brightness-75 xl:w-[238px] xl:h-[238px] lg:w-[298px] lg:h-[298px] fold:w-[238px] fold:h-[238px]'>
                    <Image src={placeholder} alt='Loader' width="298" height="298" className='animate-pulse blur-[20px] object-cover absolute top-0 left-0 duration-700 group-hover:scale-125' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[#000000B3]' />
                    <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(202deg,#E2B35000_60%,#E2B350ff_140%)] brightness-90' />

                    <div className='h-full flex flex-col justify-between p-[18px]'>
                        <div className='relative z-10'>
                            <div className='bg-[#EFD8A7] relative z-10 w-fit px-[16px] py-[2px] rounded-[5px] category-span cursor-pointer hover:brightness-75 duration-500 blur-[4px] animate-pulse'>
                                <p className='text-[#242424] text-[14px]'>{element.category}</p>
                            </div>
                        </div>

                        <h3 className='relative z-10 line-clamp-3 text-[20px] font-medium blur-[5px] animate-pulse lg:text-[18px]'>{element.title}</h3>
                    </div>
                </div>
            ))}
        </>
    )
}

export default OtherPostsLoader