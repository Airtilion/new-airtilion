import React from 'react'
import placeholder from '@assets/images/cities/tarnow.webp'
import Image from 'next/image'

const AsideLoader = ({index}) => {
    return (
        <React.Fragment>
                <div className={`flex gap-[12px] group ${index === 0 && 'flex-col gap-[16px]'}`}>
                    <Image src={placeholder} width={600} height={400} alt="placeholder zdjęcia" className={`blur-[20px] object-cover rounded-[5px] group-hover:brightness-50 duration-500 ${index !== 0 ? 'w-[80px] h-[80px]' : 'h-[150px]'}`} />
                    <p className={`text-[18px] line-clamp-3 group-hover:text-[#ABABAB] duration-500 ${index !== 0 && 'font-light'} blur-[5px] max-xl:text-[16px]`}>Airtilion - nowoczesne i profesjonalne strony internetowe</p>
                </div>
            {index !== 2 && <div className='w-full h-[0.5px] bg-[#ABABAB40]'></div>}
        </React.Fragment>
    )
}

export default AsideLoader