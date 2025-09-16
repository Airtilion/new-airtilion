import React from 'react'
import Script from 'next/script'
import { notFound } from 'next/navigation'

import getCityJsonLd from '@utils/getCityJsonLd'
import { citiesList } from '@data/citiesList'
import Header from '@components/Header'

import CompaniesSlider from '@components/home/CompaniesSlider'
import CityIntroduction from '@components/cities/CityIntroduction'

import sectionImg from '@assets/images/cities/general/cityAdvantage.webp'
import CityAdvantages from '@components/cities/CityAdvantages.jsx/CityAdvantages'
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction'
import CityTech from '@components/cities/CityTechs/CityTechs'
import CityProduction from '@components/cities/CityProduction/CityProduction'
import CityFaq from '@components/cities/CityFaq/CityFaq'
import CityPortfolio from '@components/cities/CityPortfolio'
import CityOffer from '@components/cities/CityOffer'
import Footer from '@components/Footer'
import SlideUpContact from '@components/SlideUpContact'


export async function generateStaticParams() {
    return citiesList.map((city) => ({
        slug: `strony-internetowe-${city}`,
    }))
}

export async function generateMetadata({ params, searchParams }) {
    const { slug } = await params;
    const { lang = 'pl' } = await searchParams;
    const citySlug = slug.replace(/^strony-internetowe-/, '');

    try {
        const module = await import(`@languages/${lang}/cities/${citySlug}.js`);
        const data = module[citySlug];

        if (!data) {
            return {
                title: 'Nie znaleziono strony',
                description: 'Ta strona nie istnieje.',
            };
        }

        return {
            title: `${data.metaTitle} - Airtilion`,
            description: data.metaDescription,
            alternates: {
                canonical: `https://airtilion.com/strony-internetowe-${citySlug}`
            }
        }
    } catch (error) {
        return {
            title: 'Nie znaleziono strony',
            description: 'Ta strona nie istnieje.',
        };
    }
}

const page = async ({ params, searchParams }) => {
    const { slug } = await params;
    const {lang = 'pl'} = await searchParams;
    const citySlug = slug.replace(/^strony-internetowe-/, '');

    if (!citiesList.includes(citySlug)) {
        notFound();
    }

    let data;

    try {
        const module = await import(`@languages/${lang}/cities/${citySlug}.js`);
        data = module[citySlug];
    } catch (error) {
        notFound();
        // console.log("XD")
    }

    const jsonLd = getCityJsonLd(data.city, slug)

    return (
        <>
            <Script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

            <Header title={data.header.h1} content={data.header.content[0]} bg={data.img} buttonText={data.header.button} dark={true}/>
            
            <main className='flex flex-col gap-[192px] overflow-hidden' >
                <CompaniesSlider />
                <CityIntroduction dict={data.introduction} preHeading={data.header.content[1]}/>
                <CityAdvantages dict={data.advantages} image={sectionImg}/>
                <PortfolioCallToAction dict={data.cta}/>
                <CityTech dict={data.technology}/>
                <CityProduction dict={data.production}/>
                <CityOffer dict={data.offer}/>
                <CityPortfolio dict={data.portfolio}/>
                <CityFaq dict={data.faq}/>

                <SlideUpContact dict={data.cta.form}/>
            </main>

            <Footer dict={data.footer}/>

        </>
    )
}

export default page