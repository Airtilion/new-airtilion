import React from 'react'
import Image from 'next/image'
import { Icon } from '@iconify/react/dist/iconify'

import IntersectionListener from '@components/IntersectionListener'
import secondImage from '@assets/images/headers/offer-websites-bg.webp'

const techs = [
    { icon: 'hugeicons:react', width: 30, height: 30 },
    { icon: 'teenyicons:tailwind-solid', width: 40, height: 40 },
    { icon: 'akar-icons:nextjs-fill', width: 50, height: 50 },
    { icon: 'akar-icons:php-fill', width: 50, height: 50 },
    { icon: 'lineicons:vite', width: 40, height: 40 },
    { icon: 'mdi:wordpress', width: 30, height: 30 },
]

const Technology = () => {
    return (
        <section id="websites-section" className='mt-48 relative section-style-small websites-hidden'>
            <IntersectionListener selector="#websites-section" visibleClass="websites-visible" hiddenClass="websites-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='flex items-center gap-16 max-xl:gap-8 max-md:flex-col'>
                <div className='animation-left transition-all duration-1000 ease-in-out max-md:text-center'>
                    <p className='text-[60px] heading-gradient-gray max-xl:text-[45px] max-sm:text-[35px]'>NextJS&nbsp;<span className='text-[#999999] text-[40px] max-xl:text-[30px] max-sm:text-[20px]'>&</span></p>
                    <p className='text-[65px] heading-gradient-gray max-xl:text-[50px] max-sm:text-[40px]'>WordPress</p>
                </div>
                
                <div className='text-paragraph'>
                    <h2 className='text-[30px] heading-gradient-gray max-xl:text-[25px] max-sm:text-[20px]'>Budowa stron internetowych opartych o WordPress</h2>
                    <p className='mt-4 animation-right transition-all duration-1000 ease-in-out'>Specjalizujemy się w systemie WordPress, jednak <span className='font-semibold'>nie idziemy na skróty</span>. Wdrażamy go wyłącznie na <span className='font-semibold'>dedykowanych szablonach</span>, co gwarantuje czysty kod i unikalny wygląd (zero ciężkich gotowców). WordPress to system, który umożliwia łatwe zarządzanie z CMS bez wiedzy programistycznej. Dzięki temu, po oddaniu projektu, administracja stronami internetowymi jest dla Ciebie prosta i przyjemna, a Ty otrzymujesz <span className='font-semibold'>intuicyjny interfejs, w którym samodzielnie zmienisz teksty czy zdjęcia</span>.</p>
                    <p className='mt-8 animation-right transition-all duration-1000 ease-in-out'>Z myślą o najbardziej wymagających projektach, oferujemy również superwydajne rozwiązania <span className='font-semibold'>Headless w oparciu o Next.js.</span> Stale śledzimy najnowsze trendy technologiczne, dlatego do naszych realizacji powoli wdrażamy także innowacyjny system zarządzania treścią <span className='font-semibold'>Keystatic</span>.</p>
                </div>

            </div>
            
            <div className='flex gap-10 justify-center items-center mt-16 animation-bottom transition-all duration-1000 ease-in-out max-sm:gap-6'>
                {techs.map((t, idx) => <Icon key={idx} icon={t.icon} width={t.height} height={t.height} className='text-[#CFCFCF] max-sm:w-[30px]' />)}
            </div>

            <div className='absolute inset-0 z-[-1] animation-opacity transition-all duration-1000 ease-in-out'>
                <div className='absolute inset-0 bg-linear-to-t from-[#000000] via-[#00000080] to-[#000000] z-[2]' />
                <div className='absolute inset-0 bg-linear-to-r from-[#000000] via-[#00000080] to-[#000000] z-[1]' />
                <Image src={secondImage} alt='' width={1100} height={350} className='w-full h-full object-cover relative z-0' />
            </div>

        </section>
    )
}

export default Technology