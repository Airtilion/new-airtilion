import Footer from '@components/Footer';
import Header from '@components/Header';
import { getDictionary } from '@utils/getDictionary';
import React from 'react'

import offerBg from '@assets/images/headers/offer-websites-bg.webp'
import OfferIntroduction from '@components/offer/Introduction/OfferIntroduction';
import CoopSteps from '@components/offer/CoopSteps/CoopSteps';
import OrderInfo from '@components/offer/OrderInfo/OrderInfo';
import OfferPortfolio from '@components/offer/Portfolio/OfferPortfolio';
import OfferFaq from '@components/offer/OfferFaq';
import OfferElements from '@components/offer/OfferElements';
import { getLatestProjects } from '@lib/mainProjects';
import SlideUpContact from '@components/SlideUpContact';

import laptopPhoto from '@assets/images/offer/pricing.webp'
import coop1 from '@assets/images/offer/coop-1.webp'
import coop2 from '@assets/images/offer/coop-2.webp'

export const revalidate = 86400

export const metadata = {
    title: "Projektowanie stron internetowych - innowacja i profesjonalizm | Airtilion",
    description: "Projektujemy strony internetowe. Skorzystaj z naszych usług i ciesz się innowacyjnymi rozwiązaniami w Twojej branży!",
    alternates: {
        canonical: 'https://airtilion.com/oferta-strony-internetowe',
    },
}

const page = async ({ searchParams }) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const file = await getDictionary(lang, 'offer-websites');
    const dictionary = file || {};
    const dictionaryFooter = file.footer || {};

    const projectsData = await getLatestProjects({ limit: 3, lang });

    return (
        <>
            <Header full={false} title={dictionary.header?.title || 'Default Title'} content={dictionary.header?.description || 'Default Content'} bg={offerBg} />

            <main className='flex flex-col gap-[192px] mt-[192px] overflow-hidden max-lg:gap-[128px] max-sm:mt-[128px]'>
                <OfferIntroduction dict={dictionary} />
                <OfferElements dict={dictionary.websiteElements} />
                <CoopSteps dict={dictionary.cooperation} img1={coop1} img2={coop2}/>
                <OrderInfo dict={dictionary.pricing} bg={laptopPhoto}/>
                <OfferPortfolio dict={dictionary.portfolio} data={projectsData}/>
                <OfferFaq dict={dictionary.faq} />
                <SlideUpContact dict={dictionary.cta.form} lang={lang} />
            </main>
            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default page