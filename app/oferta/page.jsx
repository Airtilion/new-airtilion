import React from 'react'
import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import { getDictionary } from '@utils/getDictionary'
import OfferHero from '@features/offer/components/OfferHero'
import OfferMainServices from '@features/offer/components/OfferMainServices'
import OfferSupportServices from '@features/offer/components/OfferSupportServices'
import OfferInnovations from '@features/offer/components/OfferInnovations'
import OfferIndustries from '@features/offer/components/OfferIndustries'
import OfferProcess from '@features/offer/components/OfferProcess'
import OfferCTA from '@features/offer/components/OfferCTA'
import SlideUpContact from '@components/SlideUpContact'
import OfferCoverage from '@features/offer/components/OfferCoverage'

export const metadata = {
    title: 'Oferta - strony, sklepy i aplikacje internetowe | Airtilion',
    description: 'Projektujemy strony, sklepy i aplikacje internetowe dla firm z całej Polski.',
    alternates: {
        canonical: 'https://airtilion.com/oferta',
    },
}

const page = async ({ searchParams }) => {
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    const [mainFile, footerFile] = await Promise.all([
        getDictionary(lang, 'offer'),
        getDictionary(lang, 'layout/footer'),
    ])

    const dict = mainFile || {}
    const dictFooter = footerFile || {}

    return (
        <>
            <main className='relative'>
                <div className='mt-48 section-style max-md:mt-36'>
                    <Breadcrumbs />
                </div>

                <OfferHero dict={dict.hero} />
                <OfferMainServices dict={dict.mainServices} />
                <OfferSupportServices dict={dict.supportServices} />
                <OfferInnovations dict={dict.innovations} />
                <OfferIndustries dict={dict.industries} />
                <OfferCoverage dict={dict.location} />
                <OfferProcess dict={dict.process} />

                <OfferCTA dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dict.form} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page