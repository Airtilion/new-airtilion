import React from 'react'
import { notFound } from 'next/navigation'
import { citiesList } from '@data/citiesList'
import CityPageClient from '@components/CityPageClient'

export const dynamic = 'force-static';
export const dynamicParams = true;

export async function generateStaticParams() {
    return citiesList.map((city) => ({
        slug: `strony-internetowe-${city.slug}`,
    }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const citySlug = slug.replace(/^strony-internetowe-/, '');
    const lang = 'pl'; 

    try {
        const module = await import(`@languages/${lang}/cities/${citySlug}.js`);
        const data = module[citySlug];

        if (!data) return { title: 'Not Found' };

        return {
            title: `${data.metaTitle} - Airtilion`,
            description: data.metaDescription,
            alternates: {
                canonical: `https://airtilion.com/strony-internetowe-${citySlug}`
            }
        }
    } catch (error) {
        return { title: 'Not Found' };
    }
}

const page = async ({ params }) => {
    const { slug } = await params;
    const citySlug = slug.replace(/^strony-internetowe-/, '');

    const cityExsists = citiesList.some(city => city.slug === citySlug);
    if (!cityExsists) notFound();

    let initialData;
    const lang = 'pl';

    try {
        const module = await import(`@languages/${lang}/cities/${citySlug}.js`);
        initialData = module[citySlug];
    } catch (error) {
        notFound();
    }

    return (
        <CityPageClient 
            initialData={initialData} 
            citySlug={citySlug} 
            slug={slug} 
        />
    )
}

export default page