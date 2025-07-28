import { Icon } from '@iconify/react/dist/iconify'
import React from 'react'
import CustomContactForm from './CustomContactForm'

const SlideUpContact = ({ isVisible, isContactOpen, setIsContactOpen, dict, lang }) => {
    return (
        <>
            {isVisible && (
                <>
                    <div className="fixed inset-0 bg-[#00000099] backdrop-blur-sm z-[48]" />
                    <div className={` contact-panel relative px-[128px] py-[64px] ${isContactOpen ? 'slide-up' : 'slide-down'} max-2xl:px-[64px] max-xl:px-[32px] max-lg:py-[32px] max-fold:px-[16px]`}>
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setIsContactOpen(false)} className='flex gap-[8px] px-[12px] py-[6px] rounded-[5px] items-center duration-500 hover:bg-[#e283507e]'>
                                <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                <span className='font-light text-[16px]'>{dict.close}</span>
                            </button>
                        </div>

                        <div className='flex items-center gap-[128px] mt-[64px] px-[128px] max-2xl:px-[0px] max-xl:gap-[80px] max-lg:flex-col max-lg:gap-[64px] max-lg:mt-[16px]'>
                            <div className='w-[600px] max-lg:w-auto max-lg:max-w-[670px] max-sm:w-[100%] translate-y-animation'>
                                <span className='text-[15px] font-light text-[#E28350]'>{dict.tag}</span>
                                <h2 className='mt-[8px] text-[30px] font-bold max-lg:text-[25px] max-sm:text-[22px]'>{dict.title}</h2>

                                <p className='mt-[24px] text-[16px] font-medium text-[#E28350] max-lg:text-[18px] max-sm:text-[16px]'>{dict.content}</p>

                                <div className='flex flex-col mt-16'>
                                    <p className='!text-white !font-normal max-xl:text-[15px]'>{dict.contactData[0]}</p>
                                    <div className='flex items-center gap-2'>
                                        <p className='text-[50px] !text-[#e28350] !font-normal max-xl:text-[40px] '>+48</p>
                                        <div>
                                            <p className='max-xl:text-[14px] !text-[#e28350]'>511 019 652</p>
                                            <p className='max-xl:text-[14px] !text-[#e28350]'>720 177 174</p>
                                        </div>
                                    </div>

                                    <p className='!text-white mt-4 !font-normal max-xl:text-[15px'>{dict.contactData[1]}</p>
                                    <p className='max-xl:text-[14px] !text-[#e28350]'>contact@airtilion.com</p>

                                    <p className='!text-white mt-4 !font-normal max-xl:text-[15px'>{dict.contactData[2]}</p>
                                    <p className='max-xl:text-[14px] !text-[#e28350]'>Pon-Pt 8:00-17:00</p>

                                </div>
                            </div>
                            <CustomContactForm isContactOpen={isContactOpen} dict={dict} lang={lang} setIsContactOpen={setIsContactOpen}/>
                        </div>


                    </div>
                        <div className={`fixed inset-0 h-full overflow-hidden z-[49] bg-black ${isContactOpen ? 'slide-up' : 'slide-down'}`}>
                            <div className='w-[1700px] h-[1700px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-850px]' />
                        </div>
                </>

            )}
        </>

    )
}

export default SlideUpContact