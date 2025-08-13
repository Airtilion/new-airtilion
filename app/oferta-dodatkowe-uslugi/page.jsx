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

const page = async ({searchParams}) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const file = await getDictionary(lang, 'offer-websites');
    const dictionary = file || {};
    const dictionaryFooter = file.footer || {};


    return (
        <>
            <Header full={false} title={dictionary.header?.title || 'Default Title'} content={dictionary.header?.description || 'Default Content'} bg={offerBg}/>

            <main className='flex flex-col gap-[192px] mt-[192px] overflow-hidden max-sm:mt-[128px]'>
                <OfferIntroduction dict={dictionary}/>
                <CoopSteps dict={dictionary.cooperation}/>
                <OrderInfo dict={dictionary.pricing}/>
                <OfferPortfolio dict={dictionary.portfolio}/>
                <OfferFaq dict={dictionary.faq}/>
            </main>
            <Footer dict={dictionaryFooter}/>
        </>
    )
}

export default page