import { Icon } from '@iconify/react/dist/iconify'
import React from 'react'
import CustomContactForm from './CustomContactForm'

const SlideUpContact = ({ isVisible, isContactOpen, setIsContactOpen }) => {
    return (
        <>
            {isVisible && (
                <>
                    <div className="fixed inset-0 bg-[#00000099] backdrop-blur-sm z-[49]" />
                    <div className={`contact-panel px-[128px] py-[64px] bg-[#0a0a0a] ${isContactOpen ? 'slide-up' : 'slide-down'} 2xl:px-[64px] xl:px-[32px] lg:py-[32px] fold:px-[16px]`}>
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setIsContactOpen(false)} className='flex gap-[8px] px-[12px] py-[6px] rounded-[5px] items-center duration-500 hover:bg-[#262626]'>
                                <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                <span className='font-light text-[16px]'>Zamknij</span>
                            </button>
                        </div>

                        <div className='flex items-center gap-[64px] mt-[64px] px-[128px] 2xl:px-[0px] lg:flex-col lg:gap-[16px] lg:mt-[16px]'>
                            <div className='flex-1 lg:w-[600px] sm:w-[100%]'>
                                <span className='text-[15px] font-light text-[#E2B350]'>Twój projekt. Nasza pasja. Wspólny sukces.</span>
                                <h2 className='mt-[8px] text-[30px] font-bold lg:text-[25px] fold:text-[22px]'>Chcesz dowiedzieć się więcej o naszych usługach lub potrzebujesz porady? Skontaktuj się z nami!</h2>

                                <p className='mt-[32px] text-[20px] font-medium text-[#E2B350] lg:text-[18px] sm:text-[16px]'>Dane kontaktowe</p>

                                <div className='mt-[16px] flex flex-col space-y-[8px] lg:space-y-[16px]'>
                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        <p className='text-[16px] font-light sm:text-[15px]'>720 177 174</p>
                                    </div>

                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        <p className='text-[16px] font-light sm:text-[15px]'>511 019 652</p>
                                    </div>

                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="solar:letter-bold" width="30" height="30" alt="Ikona listu" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        <p className='text-[16px] font-light sm:text-[15px]'>contact@airtilion.com</p>
                                    </div>

                                    <div className='flex gap-[15px]'>
                                        <div>
                                            <Icon icon="mdi:company" width="30" height="30" alt="Ikona budynku firmy" className='text-[#E2B350] sm:w-[25px] sm:h-[25px]' />
                                        </div>
                                        <div className='text-[16px] font-light sm:text-[15px]'>
                                            <p>Airtilion Sp. z o.o.</p>
                                            <p>NIP: 8733299720</p>
                                            <p>REGON: 540390460</p>
                                            <p>KRS: 0001143482</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <CustomContactForm isContactOpen={isContactOpen} />
                        </div>


                    </div>
                </>

            )}
        </>

    )
}

export default SlideUpContact