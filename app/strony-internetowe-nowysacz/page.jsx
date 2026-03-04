import React from 'react'
import { getDictionary } from '@utils/getDictionary';
import { getLatestProjects } from '@lib/mainProjects';
import { getOpinions } from '@lib/opinions';
import { getPageSchema } from '@lib/schema';

import CityHeader from '@components/newCity/CityHeader'
import CompaniesSlider from '@components/home/CompaniesSlider';
import Portoflio from '@components/newCity/Portfolio';
import CallToActionLionv1 from '@components/newCity/cta/CallToActionLionv1';
import IndividualApproach from '@components/newCity/IndividualApproach';
import Ecommerce from '@components/newCity/Ecommerce';
import CallToActionShop from '@components/newCity/cta/CallToActionShop';
import SEO from '@components/newCity/SEO';
import Production from '@components/newCity/production/Production';
import Technology from '@components/newCity/Technology';
import RWD from '@components/newCity/RWD';
import Price from '@components/newCity/price/Price';
import Items from '@components/newCity/price/components/Items';
import CallToActionPhotoL from '@components/newCity/cta/CallToActionPhotoL';
import Opinions from '@components/home/Opinions/Opinions';
import Faq from '@components/home/Faq/Faq';
import CallToActionLionv2 from '@components/newCity/cta/CallToActionLionv2';
import SlideUpContact from '@components/SlideUpContact';
import Footer from '@components/Footer'
import JsonLd from '@components/JsonLd';

export const metadata = {
    title: "Strony internetowe Nowy Sącz - Airtilion",
    description: "Tworzymy profesjonalne strony internetowe w Nowym Sączu. Indywidualny projekt, czysty kod i rozwiązania bez gotowych szablonów. Zamów darmową wycenę!",
    alternates: {
        canonical: 'https://airtilion.com/strony-internetowe-nowysacz',
    },
}

const page = async ({ searchParams }) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const file = await getDictionary(lang, 'cities/nowysacz');
    const dictionary = file || {};
    const dictionaryFooter = file.footer || {};

    const projectsData = await getLatestProjects({ limit: 3, lang });
    const opinionsData = await getOpinions();

    const schema = getPageSchema({
        title: 'Strony internetowe Nowy Sącz – Tworzymy Twój wizerunek w sieci',
        description: 'Projektujemy nowoczesne strony internetowe w Nowym Sączu. Indywidualne podejście, brak gotowych szablonów i techniczna perfekcja. Zyskaj skuteczne narzędzie sprzedaży.',
        slug: 'https://airtilion.com/strony-internetowe-nowysacz',
        cityName: 'Nowy Sącz',
        cityWiki: 'https://pl.wikipedia.org/wiki/Nowy_Sącz'
    })

    return (
        <>
            <CityHeader dict={dictionary.header} />
            <main className='mt-16 flex flex-col !font-regular overflow-hidden'>
                <CompaniesSlider />
                <Portoflio dict={dictionary.portfolio || {}} lang={lang} data={projectsData} />
                <CallToActionLionv1 dict={dictionary.ctaLionV1} />
                <IndividualApproach dict={dictionary.individualApproach} />
                <Ecommerce dict={dictionary.shop} />
                <CallToActionShop dict={dictionary.ctaShop} />
                <SEO dict={dictionary.technicalSeo} />
                <Production dict={dictionary.production} />
                <Technology dict={dictionary.technology} />
                <RWD dict={dictionary.rwd} />
                <Price dict={dictionary.price} />
                <Items dict={dictionary.items} />
                <CallToActionPhotoL dict={dictionary.ctaPhone} />
                <Opinions dict={dictionary.opinions || {}} lang={lang} data={opinionsData} isMarginTop={true} />
                <Faq dict={dictionary.faq || {}} isMarginTop={true} />
                <CallToActionLionv2 dict={dictionary.ctaLionV2} />
                <SlideUpContact dict={dictionary.form} lang={lang} />
            </main>
            <Footer dict={dictionaryFooter} />
            <JsonLd data={schema} />
        </>
    )
}

export default page