import React from 'react'
import { getDictionary } from '@utils/getDictionary'

import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import SlideUpContact from '@components/SlideUpContact'

import PageHero from '@components/blocks/PageHero'
import PortfolioGrid from '@components/blocks/PortfolioGrid'
import StickyImageBenefitsList from '@components/blocks/StickyImageBenefitsList'
import CornerFrameCta from '@components/blocks/cta/CornerFrameCta'
import FeaturesGrid from '@components/blocks/FeaturesGrid'
import ListWithSideImage from '@components/blocks/ListWithSideImage'
import StepsGrid from '@components/blocks/StepsGrid'
import ProseTextBand from '@components/blocks/ProseTextBand'
import IconRowListWithFaqGrid from '@components/blocks/IconRowListWithFaqGrid'
import TimelineListWithImage from '@components/blocks/TimelineListWithImage'
import AccordionGrid from '@components/blocks/AccordionGrid'
import IconGridWithCta from '@components/blocks/IconGridWithCta'
import FaqAccrodionGrid from '@components/blocks/FaqAccrodionGrid'
import IconGridWithHighlightNote from '@components/blocks/IconGridWithHighlightNote'
import ProseWithSideImage from '@components/blocks/ProseWithSideImage'

import PriceEstimedCard from '@app/strony-internetowe/_components/PriceEstimedCard'
import ServiceIndustries from '@features/service/components/ServiceIndustries'
import ServiceTypes from '@features/service/components/ServiceTypes'
import ServiceBenefits from '@features/service/components/ServiceBenefits'
import ServiceUxUi from '@features/service/components/ServiceUxUi'
import ServiceSpeed from '@features/service/components/ServiceSpeed'
import ServiceTechSupport from '@features/service/components/ServiceTechSupport'

import worth from '@assets/images/websites/worth-it.webp'
import preparation from '@assets/images/websites/preparation.webp'

export const metadata = {
    title: 'Projektowanie i tworzenie stron internetowych - Airtilion',
    description: 'Sprawdź ofertę naszą ofertę tworzenia stron www. Oferujemy projektowanie, optymalizację SEO i responsywny CMS. Zobacz cennik i zamów wycenę!',
    alternates: {
        canonical: 'https://airtilion.com/strony-internetowe',
    },
}

const page = async ({ searchParams }) => {
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    const [mainFile, formFile, footerFile] = await Promise.all([
        getDictionary(lang, '/websites/websites'),
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

                <PageHero dict={dict.hero} />
                <PortfolioGrid dict={dict.portfolio} />
                <StickyImageBenefitsList dict={dict.whyWorthIt} img={worth} />
                <ServiceBenefits dict={dict.benefits} />
                <ServiceTypes dict={dict.types} />
                <ServiceIndustries dict={dict.industries} />
                <ServiceUxUi dict={dict.uxui} />
                <ServiceSpeed dict={dict.speed} />
                <ProseWithSideImage dict={dict.security} />
                <FeaturesGrid dict={dict.includes} />
                <ListWithSideImage dict={dict.preparation} img={preparation} />
                <StepsGrid dict={dict.process} />
                <ProseTextBand dict={dict.workflow} />
                <PriceEstimedCard dict={dict.pricing} />
                <IconGridWithHighlightNote dict={dict.pricingFactors} />
                <IconRowListWithFaqGrid dict={dict.maintenanceCosts} />
                <ServiceTechSupport dict={dict.techSupport} />
                <IconGridWithCta dict={dict.extraCare} />
                <AccordionGrid dict={dict.coverage} baseUrl='https://airtilion.com/strony-internetowe' />
                <TimelineListWithImage dict={dict.whyUs} />
                <FaqAccrodionGrid dict={dict.faq} />

                <CornerFrameCta dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dictForm} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page