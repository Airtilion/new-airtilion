
import Image from 'next/image'
import React from 'react'
import Recomendations from '@components/blog-all/Recomendations'
import Latest from '@components/blog-all/Latest'
import Footer from '@components/Footer'
import PortfolioCallToAction from '@components/singlePortfolio/PortfolioCallToAction'
import { getDictionary } from '@utils/getDictionary'
import Header from '@components/Header'

import bg from "@assets/images/headers/baner-blog.webp"
import SlideUpContact from '@components/SlideUpContact'

const page = async ({ searchParams }) => {

  const params = searchParams instanceof Promise ? await searchParams : searchParams;
  const { lang = 'pl' } = await params
  const file = await getDictionary(lang, 'blog');
  const dictionary = file || {};

  console.log(lang);

  return (
    <>

      <Header full={false} title={dictionary.header?.title} content={dictionary.header?.content || 'Default Content'} bg={bg}/>
      <main className='w-full pt-[192px] flex flex-col gap-[128px] relative'>
        <Recomendations dict={dictionary.recomendations}/>
        <Latest dict={dictionary.latest}/>

        <PortfolioCallToAction dict={dictionary.cta}/>
        <SlideUpContact dict={dictionary.cta.form} lang={lang} />
      </main>
      <div className='gradient-transparency-v absolute w-[800px] h-[calc(100%-550px)] bg-linear-to-r from-[#00000000] via-[#e283504D] to-[#00000000] z-[-3] top-0 left-[50%] translate-x-[-50%] max-lg:w-[500px] max-sm:w-[80%]'></div>

      <Footer dict={dictionary.footer} />
    </>
  )
}

export default page