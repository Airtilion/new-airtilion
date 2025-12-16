'use client';

import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { useSearchParams } from 'next/navigation';

import Header from '@components/Header';
import CompaniesSlider from '@components/home/CompaniesSlider';
import CityIntroduction from '@components/cities/CityIntroduction';
import sectionImg from '@assets/images/cities/general/cityAdvantage.webp';
import CityAdvantages from '@components/cities/CityAdvantages.jsx/CityAdvantages';
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction';
import CityTech from '@components/cities/CityTechs/CityTechs';
import CityProduction from '@components/cities/CityProduction/CityProduction';
import CityFaq from '@components/cities/CityFaq/CityFaq';
import CityPortfolio from '@components/cities/CityPortfolio';
import CityOffer from '@components/cities/CityOffer';
import Footer from '@components/Footer';
import SlideUpContact from '@components/SlideUpContact';
import getCityJsonLd from '@utils/getCityJsonLd';

export default function CityPageClient({ initialData, citySlug, slug }) {
    const searchParams = useSearchParams();
    const langParam = searchParams.get('lang');
    const isEnglish = langParam === 'en';

    const [data, setData] = useState(initialData);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const loadLanguageData = async () => {
            if (isEnglish) {
                setLoading(true);
                try {
                    const module = await import(`@languages/en/cities/${citySlug}.js`);
                    if (module[citySlug]) {
                        setData(module[citySlug]);
                    }
                } catch (error) {
                    console.error("Brak tłumaczenia EN dla tego miasta");
                } finally {
                    setLoading(false);
                }
            } else {
                setData(initialData);
            }
        };

        loadLanguageData();
    }, [isEnglish, citySlug, initialData]);

    const jsonLd = getCityJsonLd(data, slug);

    if (loading) return <div className="h-screen w-full bg-black" />;

    return (
        <>
            <Script 
                id="city-json-ld"
                type="application/ld+json" 
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
                key={isEnglish ? 'json-en' : 'json-pl'}
            />

            <Header 
                title={data.header.h1} 
                content={data.header.content[0]} 
                bg={data.img} 
                buttonText={data.header.button} 
                dark={true}
            />
            
            <main className='flex flex-col gap-[192px] overflow-hidden max-lg:gap-[128px]' >
                <CompaniesSlider />
                <CityIntroduction dict={data.introduction} preHeading={data.header.content[1]}/>
                <CityAdvantages dict={data.advantages} image={sectionImg}/>
                <PortfolioCallToAction dict={data.cta}/>
                <CityTech dict={data.technology}/>
                <CityProduction dict={data.production}/>
                <CityOffer dict={data.offer}/>
                <CityPortfolio dict={data.portfolio}/>
                <CityFaq dict={data.faq}/>

                <SlideUpContact dict={data.cta.form} lang={isEnglish ? 'en' : 'pl'}/>
            </main>

            <Footer dict={data.footer}/>
        </>
    );
}