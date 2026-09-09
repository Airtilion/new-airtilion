import React from 'react'
import { getDictionary } from '@utils/getDictionary'

import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import SlideUpContact from '@components/SlideUpContact'
import PageHero from '@components/blocks/PageHero'
import CornerFrameCta from '@components/blocks/cta/CornerFrameCta'
import NumberedRowStack from '@components/blocks/NumberedRowStack'
import ContentWithSidebarBox from '@components/blocks/ContentWithSidebarBox'
import VersusCards from '@components/blocks/VersusCards'
import StickyIntroChecklist from '@components/blocks/StickyIntroChecklist'
import LinkRowListWithTable from '@components/blocks/LinkRowListWithTable'
import CornerFrameCtaOneButton from '@components/blocks/cta/CornerFrameCtaOneButton'
import IconGridWithHighlightNote from '@components/blocks/IconGridWithHighlightNote'
import ProseWithSideImage from '@components/blocks/ProseWithSideImage'
import Packages from '@components/blocks/Packages'

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
        getDictionary(lang, '/administration/shops'),
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
                <NumberedRowStack dict={dict.why} />
                <ContentWithSidebarBox dict={dict.differences} />
                <VersusCards dict={dict.hostingVsAdmin} />
                <StickyIntroChecklist dict={dict.consistsOf} />
                <LinkRowListWithTable dict={dict.platforms} />
                <CornerFrameCtaOneButton dict={dict.accidentCta} />
                <IconGridWithHighlightNote dict={dict.peakSeason} dark />
                <ProseWithSideImage dict={dict.ourWork} dark={false} />
                <Packages dict={dict.packages} />

                <CornerFrameCta dict={dict.contact} lang={lang} />

                <SlideUpContact dict={dictForm} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>

            <Footer dict={dictFooter} />
        </>
    )
}

export default page