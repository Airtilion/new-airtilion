import Image from 'next/image'
import React from 'react'

const Header = ({full = true, title, content, bg, buttonText}) => {
  return (
    <header className={`mx-24 px-16 py-8 mt-[120px] flex flex-col justify-end gap-32 ${full ? 'h-[calc(100vh-176px)]' : ''} relative`}>
        <div className='flex flex-col gap-4'>
            <h1 className='text-[55px] font-light w-[50%] text-white'>{title}</h1>
            <p className='text-[20px] font-light w-[50%] text-white'>{content}</p>
        </div>

        <div className='flex items-center justify-between bg-[#000000B3] h-[50px] overflow-hidden rounded-full backdrop-blur-[7px]'>
            <p className='pl-8 text-white'>{buttonText[0]}</p>
            <button className='w-1/2 text-right bg-gradient-to-r from-[#00000000] via-[#E2835040] via-[56%] to-[#E2835040] h-full pr-8 text-white'>{buttonText[1]}</button>
        </div>

        <div className='absolute z-[-1] inset-0 bg-gradient-to-r from-[#00000000] via-[#00000075] to-[#000000] to-[89%] rounded-[40px]'></div>
        <Image src={bg} width={1736} height={860} quality={100} className='absolute inset-0 z-[-2] rounded-[40px] h-full object-cover' alt='Zdjęcie tła firmy tworzącej profesjonalne strony internetowe dla firm'/>
    </header>
  )
}

export default Header