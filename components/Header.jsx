import Image from 'next/image'
import React from 'react'
import CustomContactToggle from './CustomContactToggle'

const Header = ({ full = true, title, content, bg, bgMd = null, buttonText, base = false, base64, dark = false }) => {
  return (
    <header className={`mx-24 px-16 py-8 mt-[120px] flex flex-col justify-end gap-32 ${full ? 'h-[calc(100vh-176px)] max-lg:h-[calc(100vh-146px)] max-sm:h-[calc(100vh-102px)]' : 'h-[570px]'} relative z-[1] max-2xl:gap-24 max-2xl:mx-16 max-xl:px-12 max-lg:mx-8 max-lg:px-8 max-lg:mt-[90px] max-sm:mx-0 max-sm:px-0 max-sm:pl-6 max-sm:gap-32 max-sm:ml-3`}>
      <div className='flex flex-col gap-4'>
        <h1 className='text-[55px] font-light w-[800px] text-white opacity-0 translate-x-animation max-2xl:text-[45px] max-2xl:w-[60%] max-xl:text-[35px] max-xl:w-[65%] max-lg:w-[500px] max-md:text-[30px] max-md:w-[450px] max-sm:w-[90%] max-sm:text-[27px]'>{title}</h1>
        <p className='text-[20px] font-light w-[50%] text-white opacity-0 translate-x-animation max-2xl:text-[18px] max-2xl:w-[55%] max-xl:w-[65%] max-xl:text-[16px] max-md:text-[15px] max-sm:w-[90%]' style={{ animationDelay: '200ms' }}>{content}</p>
      </div>


      {buttonText &&
        <div className='expand flex items-center justify-between bg-[#000000B3] h-[50px] overflow-hidden rounded-full backdrop-blur-[7px] max-2xl:h-[45px] max-2xl:text-[14px] max-xl:text-[13px] max-lg:flex-col max-lg:bg-transparent max-lg:items-start max-lg:gap-4 max-lg:h-auto max-lg:rounded-none max-lg:backdrop-blur-none'>
          <p className='pl-8 text-white max-lg:text-left max-lg:text-[#e5e5e5] max-lg:pl-0 max-lg:text-[14px] max-lg:font-light max-lg:max-w-[300px] max-sm:w-[70%] max-sm:text-[12px]'>{buttonText[0]}</p>
          <CustomContactToggle classes="w-1/2 text-right bg-gradient-to-r from-[#00000000] via-[#E2835040] via-[56%] to-[#E2835040] h-full pr-8 text-white max-2xl:w-1/3 max-xl:w-[60%] max-lg:font-light max-lg:w-full max-lg:text-left max-lg:pr-0 max-lg:h-[45px] rounded-bl-[20px] max-lg:from-[#00000091] max-lg:via-[#E2835091] max-lg:via-[50%] max-lg:to-[#00000040] max-lg:text-[14px] max-lg:px-[32px] max-sm:rounded-bl-[10px] max-sm:from-[#00000040] max-sm:via-[#E2835040] hover:tracking-[1px] hover:text-[#e28350] duration-500" text={buttonText[1]} />
        </div>
      }

      <div className={`absolute z-[-1] inset-0 bg-gradient-to-r rounded-[40px] dark:rounded-none ${full ? 'from-[#00000000] via-[#00000075] max-lg:via-[#000000aa] to-[#000000] to-[89%]' : 'from-[#00000087] via-[#00000087] to-[#000000] to-[89%]'} ${dark && '!from-[#000000b1] !via-[#000000b1] backdrop-blur-[4px]'}`}></div>
      {/* <Image src={bg} width={1736} height={860} quality={100} priority {...(base && base64 ? { placeholder: 'blur', blurDataURL: base64 } : {})} className={`absolute inset-0 z-[-2] rounded-[40px] h-full w-full object-cover opacity-animation max-sm:rounded-[20px] ${!full && 'object-top'}`} alt='Zdjęcie tła firmy tworzącej profesjonalne strony internetowe dla firm'/> */}
     
      <Image src={bg} fill sizes='100vw' quality={100} priority {...(base && base64 ? { placeholder: 'blur', blurDataURL: base64 } : {})} className={`absolute inset-0 z-[-2] rounded-[40px] object-cover opacity-animation max-sm:rounded-[20px] ${!full && 'object-top'}`} alt='Zdjęcie tła firmy tworzącej profesjonalne strony internetowe dla firm' />

    </header>
  )
}

export default Header