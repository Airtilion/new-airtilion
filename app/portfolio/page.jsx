import Footer from '@components/Footer'
import Header from '@components/Header'
import React from 'react'
import portfolioBg from '@assets/images/headers/baner-portfolio.webp'
import { getDictionary } from '@utils/getDictionary'
import PortfolioList from '@components/Portfolio/PortfolioList'
import CallToAction from '@components/home/CallToAction'
import SlideUpContact from '@components/SlideUpContact'

export const metadata = {
    title: "Airtilion - Portfolio - Zobacz nasze realizacje",
    description: "Zobacz nasze portfolio! Tworzymy nowoczesne strony internetowe, aplikacje webowe i mobilne. Sprawdź nasze projekty i przekonaj się o jakości naszej pracy.",
    alternates: {
        canonical: 'https://airtilion.com/portfolio',
    },
}

const page = async ({ searchParams }) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const file = await getDictionary(lang, 'portfolio');
    const dictionary = file || {};
    const dictionaryFooter = file.footer || {};

    return (
        <>
            <Header full={false} title={dictionary.header?.title} content={dictionary.header?.description || 'Default Content'} bg={portfolioBg}/>
            <main className='flex flex-col gap-[192px] mt-[192px] pb-32 overflow-hidden max-sm:mt-[128px] relative'>
                <PortfolioList dict={dictionary.main} lang={lang}/>
                <CallToAction dict={dictionary.cta}/>
                <SlideUpContact dict={dictionary.cta.form} lang={lang} />
            </main>
            <Footer dict={dictionaryFooter}/>
            <div className='gradient-transparency-v absolute w-[800px] h-[calc(100%-550px)] bg-linear-to-r from-[#00000000] via-[#e283504D] to-[#00000000] z-[-3] top-0 left-[50%] translate-x-[-50%] max-lg:w-[500px] max-sm:w-[80%]'></div>
        </>
    )
}

export default page