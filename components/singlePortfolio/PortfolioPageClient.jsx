'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import Header from '@components/Header';
import PortfolioIntroduction from '@components/singlePortfolio/PortfolioIntroduction/PortfolioIntroduction';
import PortfolioBrief from '@components/singlePortfolio/PortfolioBrief';
import PortfolioTechs from '@components/singlePortfolio/PortfolioTechs';
import PortfolioSteps from '@components/singlePortfolio/PortfolioSteps/PortfolioSteps';
import PortfolioAchivements from '@components/singlePortfolio/PortfolioAchivements/PortfolioAchivements';
import PortfolioClient from '@components/singlePortfolio/PortfolioClient';
import PortfolioReview from '@components/singlePortfolio/PortfolioReview';
import PortfolioSum from '@components/singlePortfolio/PortfolioSum';
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction';
import SlideUpContact from '@components/SlideUpContact';
import Footer from '@components/Footer';

export default function PortfolioPageClient({ project, initialDictionary, apiUrl }) {
  const searchParams = useSearchParams();
  const langParam = searchParams.get('lang');
  const isEnglish = langParam === 'en';
  const lang = isEnglish ? 'en' : 'pl';

  const [dictionary, setDictionary] = useState(initialDictionary);

  const t = (field) => field?.[lang] || field?.['pl'] || '';

  const getLink = (file) => file ? `${apiUrl}/uploads/projects/${project.Client}/${file.replace(/\\/g, '/')}` : '';
  const getClientLink = (file) => file ? `${apiUrl}/uploads/clients/${project.Client}/${file.replace(/\\/g, '/')}` : '';

  useEffect(() => {
    const loadDictionary = async () => {
      if (isEnglish) {
        try {
          const module = await import(`@languages/en/portfolio.json`);
          setDictionary(module.default || module);
        } catch (error) {
          console.error(error);
        }
      } else {
        setDictionary(initialDictionary);
      }
    };
    loadDictionary();
  }, [isEnglish, initialDictionary]);

  return (
    <>
      <Header title={project.Name} content={dictionary.header?.description ?? 'Default Content'} bg={getLink(project.Background?.file)} base={Boolean(project.Background?.base64)} base64={project.Background?.base64} dark={true} />

      <main className="flex flex-col gap-[192px] pt-[192px] pb-32 overflow-hidden max-sm:pt-[128px] relative">
        <PortfolioIntroduction dict={dictionary.project.introduction} desc={t(project.Description)} logo={project.Logo?.file} screens={project.Screens} clientID={project.Client} visualization={project.Visualization} projectName={project.Name} link={project.Link} />
        
        <PortfolioBrief dict={dictionary.project.brief} brief={t(project.Brief)} screens={project.Screens} convertLink={getLink} />
        
        <PortfolioTechs dict={dictionary.project.technologies} techs={project.Technologies} />
        
        <PortfolioSteps dict={dictionary.project.steps} steps={t(project.Work)} />
        
        <PortfolioAchivements dict={dictionary.project.achivements} image={getLink(project.Screens?.[6]?.file)} achivements={t(project.Achievements)} />
        
        <PortfolioClient dict={dictionary.project.client} client={project.ClientData} convertLink={getClientLink} lang={lang} />

        {project.Review?.author && project.Review.author !== 'Brak' ? (
          <PortfolioReview dict={dictionary.project.review} revs={t(project.Review.text)} author={project.Review.author} authorRole={t(project.Review.authorRole)} />
        ) : (
          <PortfolioSum dict={dictionary.project.sum} text={t(project.Summation?.text)} />
        )}

        <PortfolioCallToAction dict={dictionary.project.cta} />
        
        <SlideUpContact dict={dictionary.cta?.form ?? {}} lang={lang} />
        
        <div className="gradient-transparency-v absolute w-[800px] h-[calc(100%-550px)] bg-linear-to-r from-[#00000000] via-[#e283504D] to-[#00000000] z-[-3] top-0 left-[50%] translate-x-[-50%] max-lg:w-[500px] max-sm:w-[80%]"></div>
      </main>

      <Footer dict={dictionary.footer} />
    </>
  );
}