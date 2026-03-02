import React from 'react'
import Image from 'next/image'
import blurredImg from '@assets/images/home-portfolio/portfolio.webp'
import IntersectionListener from '@components/IntersectionListener'
import CustomContactToggle from '@components/CustomContactToggle'
import Link from '@node_modules/next/link'
import PortfolioTile from '@components/home/Portfolio/components/PortfolioTile'

const Portoflio = ({ dict, lang, data }) => {
    return (
        <section className='w-full overflow-hidden relative pb-16'>
            <div id="portfolio-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] relative z-10 portfolio-hidden'>

                <IntersectionListener selector="#portfolio-section" visibleClass="portfolio-visible" hiddenClass="portfolio-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

                <h2 className='text-[30px] w-fit heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px] animation-left transition-all duration-1000 ease-in-out'>Efekt powstały z wizji - nasze ostatnie projekty</h2>
                <p className='mt-2 text-paragraph animation-left transition-all duration-1000 ease-in-out'>Sprawdź wybrane realizacje i zobacz w praktyce, jak łączymy kreatywne projektowanie stron z Twoim biznesem. Wiemy, że solidne przygotowanie strony internetowej to fundament pod Twój marketing, dlatego na każdym kroku dbamy o absolutnie wysoką jakość usług.</p>

                <div className='mt-16 flex justify-between my-6 max-lg:flex-wrap max-lg:justify-center max-lg:gap-4'>
                    {data?.map((tile, idx) => <PortfolioTile key={idx} index={idx} title={tile.Name} desc={tile.Description[lang]} bg={tile.SmallBackground} id={tile.id} clientId={tile.ClientId} />)}

                    <Link href="/portfolio">
                        <div className='w-[298px] h-[400px] flex flex-col justify-center gap-4 relative px-8 mt-[96px] rounded-[5px] overflow-hidden group cursor-pointer max-2xl:w-[283px] max-xl:w-[234px] max-xl:h-[350px] max-lg:w-[300px] max-lg:mt-0 animation-left transition-all duration-1000 ease-in-out delay-[300ms]'>
                            <p className="text-center text-[20px] !text-white">{dict.button}</p>
                            <Image src={blurredImg} width={298} height={400} quality={100} alt={dict.alt} className='absolute inset-0 z-[-1] rounded-[5px] h-full object-cover group-hover:scale-120 duration-[2000ms]' />
                        </div>
                    </Link>

                </div>

                <div className='mt-8 w-[750px] flex-center flex-col gap-3 mx-auto animation-left transition-all duration-1000 ease-in-out max-lg:w-full'>
                    <p className='text-center text-paragraph'>Każdy projekt to <span className='font-semibold'>szyte na miarę rozwiązanie</span> - niezależnie od tego, czy budujemy landing&nbsp;page, duży portal, czy rozbudowaną platformę dla startupu lub organizacji.</p>
                    <div className='h-[2px] w-[490px] radial-line max-lg:w-[300px] max-sm:w-[80%]' />
                </div>

            </div>

            <div className='absolute left-[50%] translate-x-[-50%] top-[30%] w-[3471px] h-[3471px] rounded-full radial-gradient z-[1]'></div>
        </section>
    )
}

export default Portoflio