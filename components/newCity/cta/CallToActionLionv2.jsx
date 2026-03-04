import React from 'react'
import Image from 'next/image'

import CustomContactToggle from '@components/CustomContactToggle'
import bg from '@assets/images/lion-cta.webp'

const CallToActionLionv2 = () => {
    return (
        <section className='mt-48 section-style relative text-paragraph'>

            <div className='w-[1240px] py-12 mx-auto text-center max-xl:w-[760px] max-lg:w-[90%]'>
                <h2 className='text-[40px] heading-gradient-gray max-xl:text-[30px] max-sm:text-[25px]'>Tworzymy strony internetowe dla Twojego biznesu - <span className='block max-xl:inline'>Skontaktuj się z nami</span></h2>
                <p className="mt-4">Strony internetowe Nowy Sącz to nasze główne hasło, ale obsługujemy klientów z całej Polski. Jeśli zależy Ci na zwiększeniu popularności firmy poprzez profesjonalny wizerunek i szukasz wykonawcy, który oferuje kompleksową obsługę klienta (ale bez zbędnego marketingu), zadzwoń lub napisz.</p>
                <p className="mt-8 font-semibold">Dostosowanie strony internetowej do Twoich potrzeb zaczyna się od rozmowy.</p>

                <CustomContactToggle text='Zamów darmową wycenę' classes="mt-4 primary-gradient px-12 h-[50px] rounded-full max-sm:h-[45px] max-sm:w-full" />

                <p className="mt-8">Wolisz porozmawiać od razu? <span className='max-xl:block'>Zadzwoń <a href='tel:+48720177174' className='text-[#E28350] font-semibold'>+48 720 177 174</a> lub <a href="tel:+48511019652" className='text-[#E28350] font-semibold'>+48&nbsp;511&nbsp;019&nbsp;652</a></span></p>
            </div>

            <div>
                <Image src={bg} alt='' width={1400} height={420} className='object-cover absolute inset-0 rounded-[10px] h-full -z-2' />
                <div className='absolute inset-0 w-full h-full bg-[#000000B3] -z-1' />
            </div>

        </section>
    )
}

export default CallToActionLionv2