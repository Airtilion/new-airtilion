import React from 'react'
import { getDictionary } from '@utils/getDictionary';
import { getLatestProjects } from '@lib/mainProjects';

import CityHeader from '@components/newCity/CityHeader'
import CompaniesSlider from '@components/home/CompaniesSlider';
import Portoflio from '@components/newCity/Portfolio';
import CallToActionLionv1 from '@components/newCity/cta/CallToActionLionv1';
import SlideUpContact from '@components/SlideUpContact';
import Footer from '@components/Footer'


const page = async ({ searchParams }) => {
    const params = searchParams instanceof Promise ? await searchParams : searchParams;
    const lang = params?.lang || 'pl';
    const file = await getDictionary(lang, 'cities/nowysacz');
    const dictionary = file || {};
    const dictionaryFooter = file.footer || {};

    const projectsData = await getLatestProjects({ limit: 3, lang });


    return (
        <>
            <CityHeader />
            <main className='mt-16 flex flex-col gap-48 !font-regular'>
                <CompaniesSlider />
                <Portoflio dict={dictionary.portfolio || {}} lang={lang} data={projectsData} />
                <CallToActionLionv1 />

                <SlideUpContact dict={dictionary.cta.form} lang={lang} />
            </main>
            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default page