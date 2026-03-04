import React from 'react'
import CustomContactToggle from '@components/CustomContactToggle'
import IntersectionListener from '@components/IntersectionListener'

const CallToActionShop = () => {
    return (
        <section id='cta-shop' className='mt-48 section-style-small text-center relative element-hidden-opacity animation-opacity transition-all duration-1000 ease-in-out'>
            <IntersectionListener selector="#cta-shop" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.1" rootMargin='0px 0px -50px 0px' />
            <div className='h-[2px] w-[490px] mx-auto radial-line max-lg:w-[300px] max-sm:w-[80%]' />

            <h2 className='mt-8 text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px]'>Gotowy na sklep sprzedający 24/7?</h2>
            <p className='mt-4 text-[18px] max-xl:text-[16px] max-sm:text-[14px]'>Nie trać więcej klientów przez przestarzały system zamówień lub skomplikowany koszyk. Zbudujemy dla Ciebie <span className='font-semibold whitespace-nowrap'>nowoczesną platformę e-commerce</span>, w pełni zintegrowaną z płatnościami i kurierami. Odbierz bezpłatną wycenę i dowiedz się, jak technologia może <span className='font-semibold'>zautomatyzować Twoją sprzedaż i zmaksymalizować zyski</span>.</p>
            <CustomContactToggle text='Zapytaj o wycenę sklepu internetowego' classes="mt-8 primary-gradient px-8 h-[50px] rounded-full max-sm:w-full" />

            <div className='mt-8 h-[2px] w-[490px] mx-auto radial-line max-lg:w-[300px] max-sm:w-[80%]' />

            <div className='absolute -z-1 section-style-small h-[200px] top-1/2 left-1/2 -translate-1/2 bg-[#E283504D] rounded-full blur-[150px]' />
        </section>
    )
}

export default CallToActionShop