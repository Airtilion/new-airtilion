import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'
import React from 'react'

const logos = [
    { src: '/collaborators/logo-amos.svg', name: 'Stowarzyszenie Amos', width: 215.3, height: 50 },
    { src: '/collaborators/logo-edumocni.svg', name: 'Fundacja Edumocni', width: 255.3, height: 50 },
    { src: '/collaborators/logo-fema.svg', name: 'Fema - Blachy Dachowe', width: 67, height: 75 },
    { src: '/collaborators/logo-klaudiusz.svg', name: 'Klaudiusz Bieńko', width: 286.4, height: 40 },
    { src: '/collaborators/logo-mentor.svg', name: 'Mentor Dla NGO', width: 113, height: 75 },
    { src: '/collaborators/logo-trailbox.svg', name: 'Trailbox', width: 221, height: 75 },
]

const CompaniesSlider = () => {
    return (
        <section id="companies-slider" className='section-style overflow-hidden mt-[64px] relative transition-all duration-1000 ease-in-out element-hidden-opacity'>

            <IntersectionListener selector="#companies-slider" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.2" rootMargin='0px 0px -100px 0px' />

            <div className='absolute inset-0 bg-linear-to-r dark:from-[#000000] dark:via-[#00000000] dark:to-[#000000] z-[2]'></div>
            <div className="flex animate-scroll gap-20 relative z-[1] items-center max-lg:gap-2 w-max">
                {[...logos, ...logos].map((image, idx) => (
                    <div key={idx} className={`flex-shrink-0`}>
                        <Image src={image.src} alt={image.name} width={image.width} height={image.height} className='max-lg:scale-[0.7]' />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CompaniesSlider