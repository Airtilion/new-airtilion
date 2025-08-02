import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'
import React from 'react'

const PortfolioClient = ({ dict, client, convertLink, lang }) => {
    const isVertical = client.logo.height > client.logo.width
    const logoWidth = isVertical ? 90 : 250
    const logoHeight = isVertical ? (client.logo.height / client.logo.width) * 90 : 250

    return (
        <section id="portfolio-client-section" className='w-full relative overflow-hidden portfolio-client-hidden'>
            <IntersectionListener selector="#portfolio-client-section" visibleClass="portfolio-client-visible" hiddenClass="portfolio-client-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex py-28 gap-16 max-lg:flex-col items-center animation-left transition-all duration-1000 ease-in-out'>
                <Image src={convertLink(client.logo.file)} quality={100} width={logoWidth} height={logoHeight} unoptimized alt={dict.alts[0]} className='max-lg:w-[200px]' />
                <div className='flex-1'>
                    <p className='text-[30px] !text-white mb-4 max-2xl:text-[25px] max-sm:text-[20px]'>{client.name}</p>
                    <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{client.description[lang]}</p>
                </div>
            </article>
            <div className='absolute inset-0 bg-linear-to-r from-[#000000] to-[#00000066] z-[-1] backdrop-blur-[5px]' />
            <Image src={convertLink(client.background.file)} width={1920} height={370} alt={dict.alts[1]} className='object-cover object-top h-full absolute inset-0 z-[-2] brightness-50 animation-opacity transition-all duration-1000 ease-in-out' />
        </section>
    )
}

export default PortfolioClient
