import IntersectionListener from '@components/IntersectionListener'
import SingleAchivement from '@components/singlePortfolio/PortfolioAchivements/components/SingleAchivement'
import React from 'react'

import mockup from '@assets/images/home-information/information-1.webp'
import Image from 'next/image'

const advantages = [
    {
        title: "Bezpośredni kontakt",
        desc: "Rozmawiasz z ekspertem, który <span class='font-semibold'>faktycznie zajmuje się Twoim projektem</span>. Żadnych głuchych telefonów do biura obsługi.",
    },
    {
        title: "Unikalną stronę internetową",
        desc: "Odrzucamy powtarzalne szablony i kreatory stron internetowych. Każda realizacja to oryginalne projekty graficzne <span class='font-semibold'>dopasowane do Twojej branży</span> i tego, czego szukają Twoi potencjalni klienci.",
    },
    {
        title: "Doświadczenie w branży",
        desc: "Posiadamy twardą wiedzę techniczną, która pozwala nam realizować nawet <span class='font-semibold'>najbardziej skomplikowane zlecenia</span> na strony internetowe, dbając o najwyższą jakość usług.",
    },
]

const IndividualApproach = () => {
    return (
        <section id='portfolio-achivements-section' className='w-[1240px] relative mx-auto portfolio-achivements-hidden max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%]'>
            <IntersectionListener selector="#portfolio-achivements-section" visibleClass="portfolio-achivements-visible" hiddenClass="portfolio-achivements-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

            <div className='flex gap-8 relative max-lg:flex-col-reverse'>

                <div className='relative max-lg:mx-auto'>
                    <Image src={mockup} width={500} height={600} alt='Responsywna strona internetowa Nowy Sącz wyświetlana na ekranie smartfona - projekt dla sklepu odzieżowego' quality={100} className='object-cover rounded-[10px] h-[600px] max-sm:w-full max-sm:h-full' />
                    <div className='w-[500px] h-[600px] rounded-[10px] absolute inset-0 bg-linear-to-r from-[#00000000] to-[#000000FF] max-sm:w-full max-sm:h-full' />
                </div>

                <div className='flex-1 text-paragraph'>
                    <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px]'>Strony internetowe Nowy Sącz - indywidualne&nbsp;podejście do klienta</h2>
                    <p className='mt-4'>Rynek jest pełen ofert, od gotowców po wielkie korporacje. My wypełniamy lukę dla tych, którzy cenią współpracę z klientami opartą na partnerstwie. Tworzenie unikalnych stron internetowych to dla nas rzemiosło, w którym liczy się <span className='font-semibold'>dowożenie konkretnych wyników biznesowych</span>.</p>

                    <p className='text-[20px] mt-12 max-xl:text-[20px] max-sm:text-[18px]'>Co zyskujesz, wybierając nasze dedykowane rozwiązania?</p>

                    <ul className='mt-4 list-none space-y-4 absolute right-[16px] w-[786px] max-lg:relative max-lg:right-0 max-lg:w-full'>
                        {advantages.map((a, idx) => (
                            <li key={idx} className={`${idx % 2 === 0 ? 'bg-[#0D0D0D]' : 'bg-linear-to-r from-[#000000] to-[#e28350]'} px-8 py-6 rounded-[10px] animation-left transition-all duration-1000 ease-in-out`} style={{ transitionDelay: (idx + 1) * 100 + 'ms' }}>
                                <p className='text-[19px] !text-white mb-2 max-xl:text-[18px] max-md:text-[16px]'>{a.title}</p>
                                <p className='text-[15px] max-sm:text-[14px]' dangerouslySetInnerHTML={{ __html: a.desc }} />
                            </li>
                        ))}
                    </ul>

                </div>

                <div className='absolute w-[80%] h-[70%] right-[-26px] bottom-[-30px] border-[0.5px] border-[#5B595980] z-[-1] rounded-[5px] animation-opacity transition-all duration-1000 ease-in-out max-2xl:h-[72.5%] max-xl:h-[70%] max-xl:bottom-[-45px] max-lg:hidden' />

            </div>

            <div className='mt-36 w-[750px] mx-auto relative max-lg:mt-16 max-lg:w-full'>
                <p className='text-paragraph text-center'><span className='font-semibold'>Zadowolenie klientów to dla nas priorytet</span>, ponieważ wiemy, że na lokalnym rynku zaufanie klientów i kompleksowa obsługa klienta budują najlepsze polecenia.</p>
                <div className='mt-4 h-[2px] w-[490px] mx-auto radial-line max-lg:w-[300px] max-sm:w-[80%]' />
            </div>

            <div className='absolute left-[-20%] top-[50%] translate-y-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[700px] h-[500px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-lg:top-[20%] max-md:blur-[120px] max-sm:w-[250px]'></div>
        </section>
    )
}

export default IndividualApproach