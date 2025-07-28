'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import useIntersectionObserver from '@hooks/useObserver';

import { Icon } from '@iconify/react/dist/iconify';
import CustomContactForm from './CustomContactForm';
import coopBg from '@assets/images/lion-cta.webp'

const CustomCooperate = () => {
    const [ref, isVisibleRef] = useIntersectionObserver();
    const [isContactOpen, setIsContactOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    
    useEffect(() => {
        document.body.style.overflow = isContactOpen ? 'hidden' : ''
        const nav = document.querySelector('nav')
        // const footer = document.querySelector('footer')
        if (isContactOpen) {
            nav.classList.add('nav-hidden')
            // footer.classList.add('footer-hidden')
            setIsVisible(true);
        } else {
            const timeout = setTimeout(() => {
                setIsVisible(false);
                nav.classList.remove('nav-hidden')
                // footer.classList.remove('footer-hidden')
            }, 600)

            return () => clearTimeout(timeout);
        }
    }, [isContactOpen])

    return (
        <>
            <article ref={ref} className={`w-full h-[450px] max-lg:h-[350px] max-sm:h-auto max-sm:py-[50px] flex flex-col items-center relative px-[170px] overflow-hidden max-xl:px-[100px] max-lg:px-[50px] max-sm:px-[30px] gap-[40px] max-xl:gap-[30px] justify-center bg-center transition-all duration-1000 ease-in-out ${isVisibleRef ? 'about-visible' : 'about-hidden'}`}>
                <Image src={coopBg} alt="Obrazek przedstawiający tło z lwem" width="1240" height="450" quality={100} className="aspect-[1366/768] absolute w-full lg:h-full object-cover max-xxl:bg-cover max-xxl:bg-no-repeat" />
                <div className='z-10'>
                    <p className='z-10 text-[#B8B8B8] max-lg:text-[13px] font-light text-center'>WSPÓŁPRACUJ Z NAMI</p>
                    <h5 className='text-[40px] max-2xl:text-[35px] max-xl:text-[30px] max-lg:text-[25px] font-semibold z-10 text-center'>Zawsze jesteśmy gotowi stworzyć <br /> dla Ciebie najlepszy produkt</h5>
                </div>
                <p className='z-10 text-[15px] max-xxl:text-[20px] max-lg:text-[13px] font-extralight text-center'>Jeśli szukasz partnera, który pomoże Ci w stworzeniu wyjątkowej strony, aplikacji internetowej, aplikacji mobilnej lub innego projektu, skontaktuj się z nami. Jesteśmy gotowi, aby wspólnie z Tobą zrealizować nawet najbardziej ambitne pomysły.</p>

                <button onClick={() => setIsContactOpen(true)} className='text-[15px] max-xxl:text-[20px] max-lg:text-[13px] max-sm:text-[11px] z-10 tracking-[1.5px] bg-gradient-to-r from-[#CEA75B80] to-[#7A6B4E80] px-[30px] py-[15px] rounded-[5px]'>Napisz do nas</button>

                <div className='absolute w-full h-full bg-[#00000099] top-0 left-0'></div>
            </article>

            {isVisible && (
                <>
                    <div className="fixed inset-0 bg-[#00000099] backdrop-blur-sm z-[49]" />
                    <div className={`contact-panel px-[128px] py-[64px] bg-[#0a0a0a] ${isContactOpen ? 'slide-up' : 'slide-down'} max-2xl:px-[64px] max-xl:px-[32px] max-lg:py-[32px] max-fold:px-[16px]`}>
                        <div className='w-full flex justify-end'>
                            <button onClick={() => setIsContactOpen(false)} className='flex gap-[8px] px-[12px] py-[6px] rounded-[5px] items-center duration-500 hover:bg-[#262626]'>
                                <Icon icon="material-symbols:close-rounded" width="24" height="24" />
                                <span className='font-light text-[16px]'>Zamknij</span>
                            </button>
                        </div>

                        <div className='flex items-center gap-[64px] mt-[64px] px-[128px] max-2xl:px-[0px] max-lg:flex-col max-lg:gap-[16px] max-lg:mt-[16px]'>
                            <div className='flex-1 max-lg:w-[600px] max-sm:w-[100%]'>
                                <span className='text-[15px] font-light text-[#E2B350]'>Twój projekt. Nasza pasja. Wspólny sukces.</span>
                                <h2 className='mt-[8px] text-[30px] font-bold max-lg:text-[25px] max-fold:text-[22px]'>Chcesz dowiedzieć się więcej o naszych usługach lub potrzebujesz porady? Skontaktuj się z nami!</h2>

                                <p className='mt-[32px] text-[20px] font-medium text-[#E2B350] max-lg:text-[18px] max-sm:text-[16px]'>Dane kontaktowe</p>
                                
                                <div className='mt-[16px] flex flex-col space-y-[8px] max-lg:space-y-[16px]'>
                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350] max-sm:w-[25px] max-sm:h-[25px]' />
                                        <p className='text-[16px] font-light max-sm:text-[15px]'>720 177 174</p>
                                    </div>

                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="mdi:phone" width="30" height="30" alt="Ikona telefonu" className='text-[#E2B350] max-sm:w-[25px] max-sm:h-[25px]' />
                                        <p className='text-[16px] font-light max-sm:text-[15px]'>511 019 652</p>
                                    </div>

                                    <div className='flex gap-[15px] items-center'>
                                        <Icon icon="solar:letter-bold" width="30" height="30" alt="Ikona listu" className='text-[#E2B350] max-sm:w-[25px] max-sm:h-[25px]' />
                                        <p className='text-[16px] font-light max-sm:text-[15px]'>contact@airtilion.com</p>
                                    </div>

                                    <div className='flex gap-[15px]'>
                                        <div>
                                            <Icon icon="mdi:company" width="30" height="30" alt="Ikona budynku firmy" className='text-[#E2B350] max-sm:w-[25px] max-sm:h-[25px]' />
                                        </div>
                                        <div className='text-[16px] font-light max-sm:text-[15px]'>
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

export default CustomCooperate