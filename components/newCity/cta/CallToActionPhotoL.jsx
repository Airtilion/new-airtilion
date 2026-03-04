import React from 'react'
import Image from 'next/image'
import CustomContactToggle from '@components/CustomContactToggle'
import ctaImg from '@assets/images/new-cities/cta.webp'
import IntersectionListener from '@components/IntersectionListener'

const CallToActionPhotoL = () => {
    return (
        <section id='cta-photo-l' className="mt-48 relative section-style-small overflow-hidden rounded-[10px] flex gap-16 element-hidden-opacity animation-opacity transition-all duration-1000 ease-in-out max-lg:pb-16 max-lg:flex-col-reverse max-lg:items-center max-lg:overflow-visible">
            <IntersectionListener selector="#cta-photo-l" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='relative z-1'>
                <Image src={ctaImg} alt='Responsywne strony internetowe Nowy Sącz - widok mobilny witryny na ekranach smartfonów' width={450} height={300} className='object-cover max-xl:h-[350px] max-xl:w-[300px] max-lg:w-[450px] max-lg:h-[300px] max-lg:rounded-[10px]' />
                <div className='absolute inset-0 w-full h-full bg-linear-to-r from-[#00000000] to-[#000000FF] max-lg:hidden' />
            </div>

            <div className='flex-1 flex flex-col justify-center relative z-1 pr-16 max-lg:px-16 max-lg:text-center max-lg:max-w-[750px] max-sm:px-8'>
                <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px]'>Zastanawiasz się, które rozwiązanie <span className='block max-lg:inline'>będzie najlepsze dla Twojej firmy?</span></h2>
                <p className='mt-4 text-[14px]'>Powyższe ramy to tylko punkt wyjścia. Zamiast dopasowywać swój biznes do gotowych pakietów, opowiedz nam o swoich celach. Doradzimy, jakie funkcje przyniosą Ci największą korzyść i przygotujemy <span className='font-semibold'>przejrzystą wycenę opartą na Twoich realnych potrzebach.</span></p>

                <div className='flex justify-end max-lg:justify-center'>
                    <CustomContactToggle text='Porozmawiajmy o Twoim projekcie' classes="mt-8 primary-gradient px-16 h-[45px] rounded-full max-sm:w-full max-sm:px-4 max-sm:h-[55px]" />
                </div>

            </div>

            <div className='absolute w-[500px] h-[500px] right-[-200px] top-[-300px] bg-[#E28350B3] blur-[100px] rounded-full max-lg:right-auto max-lg:left-1/2 max-lg:top-1/2 max-lg:-translate-1/2 max-lg:bg-[#E283504D] max-sm:w-[250px] max-sm:h-[250px] max-sm:bg-[#E28350B3]' />

        </section>
    )
}

export default CallToActionPhotoL