import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify'
import IntersectionListener from '@components/IntersectionListener'

const elements = [
    "Poprawną strukturę nagłówków i metadanych", "Przyjazną strukturę linków", "Szybkość ładowania strony", "Wdrożenie sitemap.xml oraz robots.txt", "Dostosowanie do urządzeń mobilnych", "Czysty kod, który lubi Google", "Dane strukturalne", "Zarządzanie duplikacją treści"
]

const SEO = () => {
    return (
        <section id='technical-seo' className='mt-48 relative overflow-hidden py-48 technical-seo-hidden'>
            <IntersectionListener selector="#technical-seo" visibleClass="technical-seo-visible" hiddenClass="technical-seo-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='section-style-small text-paragraph text-center'>
                <h2 className='mt-8 text-[30px] heading-gradient-gray animation-bottom transition-all duration-1000 ease-in-out max-2xl:text-[25px] max-sm:text-[20px]'>Optymalizacja techniczna zamiast pustych obietnic</h2>
                <p className='mt-4 animation-bottom transition-all duration-1000 ease-in-out'>Wielu klientów pyta o pozycjonowanie. Jako techniczni eksperci stawiamy sprawę jasno: nie jesteśmy agencją marketingową i nie oferujemy abonamentowego pozycjonowania (link buildingu, copywritingu). My <span className='font-semibold'>przygotowujemy solidny fundament.</span></p>
                <p className='mt-4 animation-bottom transition-all duration-1000 ease-in-out'>Dzięki temu Twoja strona internetowa jest gotowa, by w każdej chwili zdecydować się na pozycjonowanie lub kampanie reklamowe, mając pewność, że <span className='font-semibold'>witryna nie wymaga drogich poprawek</span>. Skuteczne strony internetowe to takie, które technicznie nie blokują Twojego wzrostu.</p>

                <div className='mt-16'>
                    <p className='text-[20px] animation-bottom transition-all duration-1000 ease-in-out max-xl:text-[18px] max-sm:text-[16px]'>Nasza optymalizacja SEO (Technical SEO) obejmuje:</p>

                    <div className='mt-4 flex-center mx-auto flex-wrap gap-4 max-w-[950px] max-sm:flex-col'>

                        {elements.map((el, idx) => (
                            <div key={idx} style={{ transitionDelay: `${idx * 100}ms` }} className='animation-bottom transition-all duration-1000 ease-in-out group max-md:w-[90%]'>
                                <div className='w-full h-full border-1 border-[#DBDBDB] rounded-full px-4 py-2 hover:bg-[#e2835080] group duration-500' >
                                    <p className='text-paragraph group-hover:!text-white cursor-default max-md:text-center duration-500'>{el}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>

                {/* <p className='mt-16'>Zastanawiasz się, gdzie kończy się praca nad stroną, a zaczyna marketing?</p>
                <p>Więcej informacji o tym podziale oraz rozsądnym planowaniu budżetu znajdziesz w naszym poradniku:</p>

                <Link href='/blog' className='mt-4 inline-flex text-[#E28350] flex-center gap-4'>
                    <span>Techniczne SEO vs Pozycjonowanie - za co płacisz na starcie, a za co w abonamencie?</span>
                    <Icon icon='majesticons:open' width={24} height={24} />
                </Link> */}
            </div>

            <div className='absolute left-[50%] translate-x-[-50%] bottom-[30%] w-[4471px] h-[4471px] rounded-full radial-gradient z-[-2] max-lg:bottom-[30%]'></div>
        </section>
    )
}

export default SEO