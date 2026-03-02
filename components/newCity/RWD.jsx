import React from 'react'
import Image from 'next/image'
import bgF from '@assets/images/new-cities/rwd/rwd.webp'
import bgS from '@assets/images/new-cities/rwd/rwd2.webp'

const RWD = () => {
    return (
        <section className="mt-48 section-style-small relative flex justify-between max-lg:flex-col max-sm:items-center max-sm:gap-16">

            <div className='relative -z-1'>
                <Image src={bgF} alt='' width={400} height={400} className='object-cover rounded-[5px]' />
                <div className='absolute inset-0 w-[400px] h-[400px] bg-linear-to-l from-[#00000000] to-[#000000FF] max-sm:w-full' />
            </div>

            <div className='w-[740px] bg-black p-8 rounded-[20px] mx-auto z-1 absolute left-1/2 top-1/2 -translate-1/2 overflow-hidden max-xl:w-[650px] max-lg:w-[90%] max-sm:w-[95%]'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray'><span className='block'>Standaryzacja RWD</span> - responsywna strona internetowa dla firmy</h2>
                <p className="mt-4 text-paragraph">W dzisiejszych czasach większość ruchu pochodzi z telefonów. Dlatego każda nasza realizacja to strona internetowa <span className='font-semibold'>przystosowana do urządzeń mobilnych</span>. Responsywne strony internetowe (RWD) to u nas <span className='font-semibold'>standard, a nie dodatkowo płatna opcja</span>. Gwarantujemy, że wygląd strony internetowej będzie idealny zarówno na smartfonie, tablecie, jak i na dużym monitorze.</p>
                <div className='absolute -z-2 section-style-small h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E283504D] rounded-full blur-[150px]' />
            </div>

            <div className='relative -z-1 max-lg:self-end max-sm:self-auto'>
                <Image src={bgS} alt='' width={400} height={400} className='object-cover rounded-[5px]' />
                <div className='absolute inset-0 w-[400px] h-[400px] bg-linear-to-r from-[#00000000] to-[#000000FF] max-sm:w-full' />
            </div>

            <div className='absolute -z-2 section-style-small h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E283504D] rounded-full blur-[150px]' />

        </section>
    )
}

export default RWD