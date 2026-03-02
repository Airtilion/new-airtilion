import React from 'react'
import Image from 'next/image'
import IntersectionListener from '@components/IntersectionListener'
import SingleStep from './components/SingleStep'

import bg from '@assets/images/new-cities/production.webp'

const data = [
    {
        title: "Analiza potrzeb Twojej firmy",
        desc: "Na początku poznajemy specyfikę Twojej działalności oraz cele biznesowe. Analizujemy rynek, aby zrozumieć, kim są Twoi potencjalni klienci i stworzyć skuteczną stronę internetową <span class='font-semibold'>idealnie dopasowaną do Twoich oczekiwań.</span>"
    },
    {
        title: "Identyfikacja wizualna",
        desc: "Projektujemy nowoczesny, responsywny i przyciągający uwagę layout. Stawiamy na estetyczny projekt, który <span class='font-semibold'>wyróżni się w sieci</span>. Każda identyfikacja wizualna to oryginalny projekt graficzny, powstający z myślą o przejrzystości i wygodzie użytkownika."
    },
    {
        title: "Programowanie",
        desc: "Wdrażamy stronę z użyciem najnowszych technologii, dbając o czysty kod. Priorytetem jest dla nas <span class='font-semibold'>szybkość działania na każdym urządzeniu</span>, bezpieczeństwo strony oraz poprawność pod kątem SEO."
    },
    {
        title: "Wdrożenie i aktualizacje",
        desc: "Publikujemy gotową witrynę i zapewniamy wsparcie techniczne po jej uruchomieniu. Nasze strony internetowe dostępne są dla użytkowników <span class='font-semibold'>bez zakłóceń</span>. Dbamy o to, abyś otrzymał produkt kompletny, wiedząc, że strona internetowa informacje przekazuje w sposób czytelny i szybki."
    },
]

const Production = () => {
    return (
        <section id="city-production-section" className='w-full relative py-16 city-production-hidden'>

            <IntersectionListener selector="#city-production-section" visibleClass="city-production-visible" hiddenClass="city-production-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='section-style-small text-paragraph flex items-center justify-between max-lg:flex-col max-lg:gap-16'>
                <div className='w-[430px] transition-all duration-1000 ease-in-out animation-left max-xl:w-[350px] max-lg:w-full'>
                    <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray'>Kompleksowe tworzenie stron internetowych - Jak&nbsp;działamy?</h2>
                    <p className='mt-4'>Nasz proces to nie tylko programowanie. Tworzymy strony internetowe w oparciu o przemyślaną strategię. Każda strona internetowa stworzona przez nas przechodzi przez sprawdzony proces, gwarantujący <span className='font-semibold'>przewidywalne i mierzalne efekty</span>.</p>
                </div>

                <div className='flex flex-wrap gap-8 w-[650px] max-xl:w-[532px] max-lg:w-full max-sm:flex-col max-sm:items-center'>
                    {data.map((s, idx) => (
                        <SingleStep key={idx} data={s} index={idx} />
                    ))}
                </div>
            </div>

            <Image src={bg} alt='' width={1920} height={650} className='absolute top-0 left-0 w-full h-full object-cover z-[-1] brightness-5 transition-all duration-1000 ease-in-out animation-opacity' />
        </section>
    )
}

export default Production