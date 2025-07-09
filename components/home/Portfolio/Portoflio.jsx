import PreTitle from '@components/PreTitle'
import React from 'react'
import PortfolioTile from './components/PortfolioTile'
import Image from 'next/image'
import blurredImg from '@assets/images/home-portfolio/portfolio.webp'
import IntersectionListener from '@components/IntersectionListener'

const tempPortfolio = [
  {title: "Trailbox", desc: "Strona internetowa spółki Trailbox powstała w celu promocji marki oraz jej produktów na rynku lokalnym jak i zagranicznym. Projekt opisuje firmę oraz przedmiot jej działalności - produkcję płyt warstwowych oraz gotowych zabudów kontenerowych. Spółka Trailbox świadczy również usługi związane z CNC. Na stronie dostępny jest konfigurator umożliwiający zobrazowanie konkretnego typu płyty warstwowej przed złożeniem zapytania. Projekt powstał w trzech wersjach językowych (polski, niemiecki i angielski)."},
  {title: "ELJ Sklep Odzieżowy", desc: "Strona sklepu ELJ została zaprojektowana i zbudowana od podstaw, aby dostosować się do obecnych czasów, w których świat wirtualny odgrywa ogromną rolę. ELJ to sklep z odzieżą używaną, który w swojej ofercie posiada nie tylko ubrania, ale także obuwie, chemię niemiecką oraz biżuterię."},
  {title: "Mentor Dla NGO", desc: "Celem projektu jest wzmocnienie kapitału merytorycznego co najmniej 400 przedstawicieli organizacji sektora obywatelskiego z Polski południowo-wschodniej. Działania obejmują opracowanie i wdrożenie programu rozwojowego zawierającego narzędzia certyfikacji i mentoringu, a także podniesienie kompetencji przedstawicieli organizacji pozarządowych w okresie 01.2025 - 12.2026. Główne działania w projekcie obejmują trzy ścieżki rozwoju: edukacja, certyfikacja i mentoring. Projekt skierowany jest do co najmniej 400 przedstawicieli organizacji pozarządowych z województw: małopolskiego, podkarpackiego i świętokrzyskiego, działających w obszarach edukacji, kształcenia oraz rynku pracy."}
]

const Portoflio = ({dict}) => {
  return (
    <section className='w-full overflow-hidden relative'>
        <article id="portfolio-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] flex flex-col gap-2 relative z-10 portfolio-hidden'>

          <IntersectionListener selector="#portfolio-section" visibleClass="portfolio-visible" hiddenClass="portfolio-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>

          <PreTitle title="Portfolio"/>
          <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] mb-2 max-sm:text-[20px] animation-left transition-all duration-1000 ease-in-out'>{dict.title}</h2>
          {dict.content.map((p, idx) => (<p className='text-[16px] max-2xl:text-[15px] max-lg:text-[14px] animation-left transition-all duration-1000 ease-in-out' key={idx}>{p}</p>))}

          <div className='flex justify-between my-6 max-lg:flex-wrap max-lg:justify-center max-lg:gap-4'>
            {tempPortfolio.map((tile, idx) => <PortfolioTile key={idx} index={idx} title={tile.title} desc={tile.desc} bg={tile.bg}/>)}

            <div className='w-[298px] h-[400px] flex flex-col justify-center gap-4 relative px-8 mt-[96px] rounded-[5px] max-2xl:w-[283px] max-xl:w-[234px] max-xl:h-[350px] max-lg:w-[300px] max-lg:mt-0 animation-left transition-all duration-1000 ease-in-out delay-[300ms]'>
              <p className="text-center text-[20px] !text-white">{dict.button}</p>
              <Image src={blurredImg} width={298} height={400} quality={100} alt={dict.alt} className='absolute inset-0 z-[-1] rounded-[5px] h-full object-cover'/>
            </div>

          </div>

          <div className='w-[700px] flex flex-col gap-[16px] justify-center items-center mx-auto max-lg:w-[450px] max-sm:w-[90%] animation-left transition-all duration-1000 ease-in-out'>
            <p className='text-center text-[16px] max-2xl:text-[15px] max-lg:text-[14px] '>{dict.afterContent}</p>
            <div className='h-[2px] w-[490px] radial-line max-lg:w-[300px] max-sm:w-[80%]'></div>
          </div>

        </article>

        <div className='absolute left-[50%] translate-x-[-50%] top-[30%] w-[3471px] h-[3471px] rounded-full radial-gradient z-[1]'></div>
    </section>
  )
}

export default Portoflio