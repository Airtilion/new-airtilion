import React from 'react'
import { getDictionary } from '@utils/getDictionary'

import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import OfferCTA from '@features/offer/components/OfferCTA'
import SlideUpContact from '@components/SlideUpContact'

import ServiceHero from '@features/service/components/ServiceHero'
import ServicePortfolio from '@features/service/components/ServicePortfolio'
import ServiceIndustries from '@features/service/components/ServiceIndustries'
import ServiceProcess from '@features/service/components/ServiceProcess'
import ServiceCoverage from '@features/service/components/ServiceCoverage'
import ServiceFaq from '@features/service/components/ServiceFaq'
import ServiceIncludes from '@features/service/components/ServiceIncludes'
import ServiceTypes from '@features/service/components/ServiceTypes'
import ServicePricing from '@features/service/components/ServicePricing'
import ServiceBenefits from '@features/service/components/ServiceBenefits'
import ServiceWhyWorthIt from '@features/service/components/ServiceWhyWorthIt'
import ServiceUxUi from '@features/service/components/ServiceUxUi'
import ServiceSpeed from '@features/service/components/ServiceSpeed'
import ServiceSecurity from '@features/service/components/ServiceSecurity'
import ServicePreparation from '@features/service/components/ServicePreparation'
import ServiceWorkflow from '@features/service/components/ServiceWorkflow'
import ServicePricingFactors from '@features/service/components/ServicePricingFactors'
import ServiceMaintenanceCosts from '@features/service/components/ServiceMaintenanceCosts'
import ServiceExtraCare from '@features/service/components/ServiceExtraCare'
import ServiceTechSupport from '@features/service/components/ServiceTechSupport'


export const metadata = {
    title: 'Strony internetowe | Airtilion',
    description: 'Projektujemy strony, sklepy i aplikacje internetowe dla firm z całej Polski.',
    alternates: {
        canonical: 'https://airtilion.com/strony-internetowe',
    },
}

const page = async ({ searchParams }) => {
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    const [mainFile, footerFile] = await Promise.all([
        getDictionary(lang, '/websites/websites'),
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

                <ServiceHero dict={dict.hero} />
                <ServicePortfolio dict={dict.portfolio} />
                <ServiceWhyWorthIt dict={dict.whyWorthIt} />
                <ServiceBenefits dict={dict.benefits} />
                <ServiceTypes dict={dict.types} />
                <ServiceIndustries dict={dict.industries} />
                <ServiceUxUi dict={dict.uxui} />
                <ServiceSpeed dict={dict.speed} />
                <ServiceSecurity dict={dict.security} />
                <ServiceIncludes dict={dict.includes} />
                <ServicePreparation dict={dict.preparation} />
                <ServiceProcess dict={dict.process} />
                <ServiceWorkflow dict={dict.workflow} />
                <ServicePricing dict={dict.pricing} />
                <ServicePricingFactors dict={dict.pricingFactors} />
                <ServiceMaintenanceCosts dict={dict.maintenanceCosts} />
                <ServiceTechSupport dict={dict.techSupport} />
                <ServiceExtraCare dict={dict.extraCare} />
                <ServiceCoverage dict={dict.coverage} />
                <ServiceFaq dict={dict.faq} />

                <OfferCTA dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dict.form} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page