import React from 'react'
import { getDictionary } from '@utils/getDictionary'

import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import SlideUpContact from '@components/SlideUpContact'

import CornerFrameCta from '@components/blocks/cta/CornerFrameCta'
import PageHero from '@components/blocks/PageHero'
import ProseChecklistWithImage from '@components/blocks/ProseChecklistWithImage'
import StickyImageBenefitsList from '@components/blocks/StickyImageBenefitsList'
import NumberedRowStack from '@components/blocks/NumberedRowStack'
import ContentWithSidebarBox from '@components/blocks/ContentWithSidebarBox'
import IconGridWithHighlightNote from '@components/blocks/IconGridWithHighlightNote'
import ProseWithSideImage from '@components/blocks/ProseWithSideImage'
import StepsGrid from '@components/blocks/StepsGrid'
import TimelineListWithImage from '@components/blocks/TimelineListWithImage'
import FaqAccrodionGrid from '@components/blocks/FaqAccrodionGrid'
import VersusCards from '../../components/blocks/VersusCards'

import AdministrationTechnologies from './_components/AdministrationTechnologies'
import AdministrationAlertBanner from './_components/AdministrationAlertBanner'
import AdministrationPackages from './_components/AdministrationPackages'
import AdministrationPreparation from './_components/AdministrationPreparation'
import AdministrationNeeds from './_components/AdministrationNeeds'
import AdministrationWebsitesCta from './_components/AdministrationWebsitesCta'

import internal from '@assets/images/administration/internal.webp'
import worth from '@assets/images/websites/worth-it.webp'

export const metadata = {
    title: 'Administracja stron internetowych - Airtilion',
    description: 'Zajmujemy się administracją i opieką nad stronami internetowymi: kopie zapasowe, aktualizacje, bezpieczeństwo i zmiany treści. Zamów darmową wycenę!',
    alternates: {
        canonical: 'https://airtilion.com/administracja-stron',
    },
}

const page = async ({ searchParams }) => {
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    const [mainFile, formFile, footerFile] = await Promise.all([
        getDictionary(lang, '/administration/websites'),
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
                <ProseChecklistWithImage dict={dict.risks} img={internal} />
                <StickyImageBenefitsList dict={dict.whyWorthIt} img={worth} />
                <VersusCards dict={dict.hostingVsAdmin} />
                <NumberedRowStack dict={dict.scope} />
                <AdministrationTechnologies dict={dict.technologies} />
                <AdministrationAlertBanner dict={dict.emergencyFix} />
                <ContentWithSidebarBox dict={dict.performance} />
                <IconGridWithHighlightNote dict={dict.workflow} dark={true} />
                <AdministrationWebsitesCta dict={dict.websitesCta} />
                <AdministrationPackages dict={dict.packages} />
                <ProseWithSideImage dict={dict.safe} />
                <ContentWithSidebarBox dict={dict.raport} reverse={true} />
                <StepsGrid dict={dict.process} />
                <AdministrationPreparation dict={dict.prepare} />
                <AdministrationNeeds dict={dict.whoNeeds} />
                <TimelineListWithImage dict={dict.whyUs} titleMaxWidth = '2xl' cta={true} />
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