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

import ServiceIndustries from '@features/service/components/ServiceIndustries'
import ServiceCoverage from '@features/service/components/ServiceCoverage'
import ServiceFaq from '@features/service/components/ServiceFaq'
import ServiceTypes from '@features/service/components/ServiceTypes'
import ServicePricing from '@features/service/components/ServicePricing'
import ServiceBenefits from '@features/service/components/ServiceBenefits'
import ServiceUxUi from '@features/service/components/ServiceUxUi'
import ServiceSpeed from '@features/service/components/ServiceSpeed'
import ServiceSecurity from '@features/service/components/ServiceSecurity'
import ServicePricingFactors from '@features/service/components/ServicePricingFactors'
import ServiceMaintenanceCosts from '@features/service/components/ServiceMaintenanceCosts'
import ServiceExtraCare from '@features/service/components/ServiceExtraCare'
import ServiceTechSupport from '@features/service/components/ServiceTechSupport'
import ServiceWhyUs from '@features/service/components/ServiceWhyUs'

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
                <ServiceSecurity dict={dict.security} />
                <FeaturesGrid dict={dict.includes} />
                <ListWithSideImage dict={dict.preparation} img={preparation} />
                <StepsGrid dict={dict.process} />
                <ProseTextBand dict={dict.workflow} />
                <ServicePricing dict={dict.pricing} />
                <ServicePricingFactors dict={dict.pricingFactors} />
                <ServiceMaintenanceCosts dict={dict.maintenanceCosts} />
                <ServiceTechSupport dict={dict.techSupport} />
                <ServiceExtraCare dict={dict.extraCare} />
                <ServiceCoverage dict={dict.coverage} />
                <ServiceWhyUs dict={dict.whyUs} />
                <ServiceFaq dict={dict.faq} />

                <CornerFrameCta dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dictForm} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page