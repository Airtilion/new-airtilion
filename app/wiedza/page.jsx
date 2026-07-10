import React from 'react'
import { getDictionary } from '@utils/getDictionary'
import Breadcrumbs from '@components/layout/Breadcrumbs'
import Footer from '@components/layout/Footer'
import KnowledgeHero from '@features/knowledge-base/components/KnowledgeHero'
import { getKnowledgeIndex } from '@features/knowledge-base/lib/knowledgeIndex'
import KnowledgeBase from '@features/knowledge-base/components/KnowledgeBase'
import KnowledgeCTA from '@features/knowledge-base/components/KnowledgeCTA'
import SlideUpContact from '@components/SlideUpContact'

export const metadata = {
    title: "Baza wiedzy | Airtilion",
    alternates: {
        canonical: 'https://airtilion.com/wiedza',
    },
}

const page = async (searchParams) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const [mainFile, footerFile, { grouped }] = await Promise.all([
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

                <KnowledgeHero dict={dictionary.heroSection} />

                <KnowledgeBase index={grouped} />
                
                <KnowledgeCTA dict={dictionary.CTAsection} />

                <SlideUpContact dict={dictionary.form} lang={lang} />

                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>
            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default page