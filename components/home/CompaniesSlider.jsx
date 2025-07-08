import IntersectionListener from '@components/IntersectionListener'
import Image from 'next/image'
import React from 'react'

const logos = [
  { src: '/collaborators/logo-amos.svg', width: 215.3, height: 50 },
  { src: '/collaborators/logo-edumocni.svg', width: 255.3, height: 50 },
  { src: '/collaborators/logo-fema.svg', width: 67, height: 75 },
  { src: '/collaborators/logo-klaudiusz.svg', width: 286.4, height: 40 },
  { src: '/collaborators/logo-mentor.svg', width: 113, height: 75 },
  { src: '/collaborators/logo-trailbox.svg', width: 221, height: 75 },
]
const CompaniesSlider = () => {
    return (
        <section id="companies-slider" className='w-[1400px] mx-auto overflow-hidden mt-[64px] relative transition-all duration-1000 ease-in-out element-hidden-opacity max-2xl:w-[1240px] max-xl:w-[960px] max-lg:w-[90%]'>

            <IntersectionListener selector="#companies-slider" visibleClass="element-visible-opacity" hiddenClass="element-hidden-opacity" threshold="0.2" rootMargin='0px 0px -100px 0px'/>

            <div className='absolute inset-0 bg-linear-to-r dark:from-[#000000] dark:via-[#00000000] dark:to-[#000000] z-[2]'></div>
            <div className="flex animate-scroll gap-20 relative z-[1] items-center max-lg:gap-2 w-max">
                {[...logos, ...logos].map((image, idx) => (
                    <div key={idx} className={`flex-shrink-0`}>
                        <Image src={image.src} alt={`Collaborator logo ${idx % logos.length + 1}`} width={image.width} height={image.height} className='max-lg:scale-[0.7]'/>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default CompaniesSlider