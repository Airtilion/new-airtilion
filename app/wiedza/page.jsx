import React from 'react'
import { getDictionary } from '@utils/getDictionary'
import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/Footer'
import HeroSection from '@features/knowledge-base/components/HeroSection'
import { getKnowledgeIndex } from '@features/knowledge-base/lib/knowledgeIndex'
import KnowledgeBase from '@features/knowledge-base/components/KnowledgeBase'

export const metadata = {
    title: "Baza wiedzy | Airtilion",
    alternates: {
        canonical: 'https://airtilion.com/wiedza',
    },
}

const page = async (searchParams) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const [mainFile, footerFile, index] = await Promise.all([
        getDictionary(lang, 'knowledge-base'),
        getDictionary(lang, 'layout/footer'),
        getKnowledgeIndex(lang)
    ]);

    const dictionary = mainFile || {};
    const dictionaryFooter = footerFile || {};

    return (
        <>
            <main className='relative'>
                <div className='mt-48 section-style'>
                    <Breadcrumbs dict={dictionary.breadcrumbs} />
                </div>

                <HeroSection dict={dictionary.heroSection} />

                <KnowledgeBase index={index} />

                <div className='fixed -z-1 section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>
            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default page