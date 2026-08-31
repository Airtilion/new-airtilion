import React from 'react'
import { getDictionary } from '@utils/getDictionary'

import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import SlideUpContact from '@components/SlideUpContact'

import PageHero from '@components/blocks/PageHero'
import PortfolioGrid from '@components/blocks/PortfolioGrid'
import StickyImageBenefitsList from '@components/blocks/StickyImageBenefitsList'
import CornerFrameCta from '@components/blocks/cta/CornerFrameCta'
import ContentWithSidebarBox from '@components/blocks/ContentWithSidebarBox'
import FeaturesGrid from '@components/blocks/FeaturesGrid'
import ListWithSideImage from '@components/blocks/ListWithSideImage'
import NumberedRowStack from '@components/blocks/NumberedRowStack'

import ShopPlatforms from '@app/sklepy-internetowe/_components/ShopPlatforms'

import worth from '@assets/images/websites/worth-it.webp'
import integrations from '@assets/images/shops/integrations.webp'

import ShopHeadlessArchitecture from './_components/ShopHeadlessArchitecture'
import ShopSeo from './_components/ShopSeo'
import StepsGrid from '@components/blocks/StepsGrid'
import ProseTextBand from '@components/blocks/ProseTextBand'
import ShopPrice from './_components/ShopPrice'
import IconRowListWithFaqGrid from '@components/blocks/IconRowListWithFaqGrid'
import IconGridWithCta from '@components/blocks/IconGridWithCta'
import ShopMarketing from './_components/ShopMarketing'

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

                <PageHero dict={dict.hero} />
                <PortfolioGrid dict={dict.portfolio} />
                <StickyImageBenefitsList dict={dict.whyWorthIt} img={worth} />
                <ShopPlatforms dict={dict.platforms} lang={lang} />
                <ShopHeadlessArchitecture dict={dict.headless} />
                <ContentWithSidebarBox dict={dict.productCard} />
                <ContentWithSidebarBox dict={dict.cartCheckout} reverse />
                <ListWithSideImage dict={dict.integrations} img={integrations} />
                <FeaturesGrid dict={dict.includes} />
                <NumberedRowStack dict={dict.safe} />
                <ShopSeo dict={dict.seo} />
                <StepsGrid dict={dict.process} columns={3} />
                <ProseTextBand dict={dict.workflow} />
                <ShopPrice dict={dict.pricing} />
                <IconRowListWithFaqGrid dict={dict.maintenanceCosts} withTopMargin={false} titleColSpan={3} />
                <IconGridWithCta dict={dict.extraCare} />
                <ShopMarketing dict={dict.marketing} />

                <CornerFrameCta dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dictForm} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page