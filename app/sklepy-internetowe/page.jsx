import React from 'react'
import { getDictionary } from '@utils/getDictionary'

import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import OfferCTA from '@features/offer/components/OfferCTA'
import SlideUpContact from '@components/SlideUpContact'

import ServiceHero from '@features/service/components/ServiceHero'
import ServicePortfolio from '@features/service/components/ServicePortfolio'
import ServiceWhyWorthIt from '@features/service/components/ServiceWhyWorthIt'
import ServicePlatforms from '@features/service/components/ServicePlatforms'

export const metadata = {
    title: 'Projektowanie i tworzenie sklepów internetowych - Airtilion',
    description: 'Sprawdź naszą ofertę tworzenia sklepów internetowych dopasowanych do Twojego modelu sprzedaży. Projektowanie, optymalizacja SEO i responsywny CMS. Zobacz cennik i zamów wycenę!',
    alternates: {
        canonical: 'https://airtilion.com/strony-internetowe',
    },
}

const page = async ({ searchParams }) => {
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    const [mainFile, formFile, footerFile] = await Promise.all([
        getDictionary(lang, '/shops/shops'),
        getDictionary(lang, '/layout/form'),
        getDictionary(lang, '/layout/footer'),
    ])

    const dict = mainFile || {}
    const dictForm = formFile || {}
    const dictFooter = footerFile || {}

    return (
        <>
            <main className='relative'>
                <div className='mt-48 section-style max-md:mt-36'>
                    <Breadcrumbs />
                </div>

                <ServiceHero dict={dict.hero} />
                <ServicePortfolio dict={dict.portfolio} />
                <ServiceWhyWorthIt dict={dict.whyWorthIt} />
                <ServicePlatforms dict={dict.platforms} lang={lang} />

                <OfferCTA dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dictForm} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page