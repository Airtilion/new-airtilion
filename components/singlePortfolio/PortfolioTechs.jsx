import IntersectionListener from '@components/IntersectionListener'
import { Icon } from '@iconify/react/dist/iconify'
import React from 'react'

const technologies = {
    "figma": { name: 'Figma', icon: 'ri:figma-fill' },
    "react": { name: 'ReactJS', icon: 'mdi:react' },
    "react-native": { name: 'React Native', icon: 'mdi:react' },
    "wordpress": { name: 'Wordpress', icon: 'fa:wordpress' },
    "php": { name: 'PHP', icon: 'akar-icons:php-fill' },
    "tailwind": { name: 'TailwindCSS', icon: 'teenyicons:tailwind-solid' },
    "next": { name: 'NextJS', icon: 'akar-icons:nextjs-fill' },
    "html": { name: 'HTML', icon: 'devicon-plain:html5' },
    "css": { name: 'CSS', icon: 'devicon-plain:css3' },
    "js": { name: 'JavaScript', icon: 'akar-icons:javascript-fill' },
    "ts": { name: 'TypeScript', icon: 'akar-icons:typescript-fill' },
    "firebase": { name: 'Firebase', icon: 'ri:firebase-fill' },
    "mongodb": { name: 'MongoDB', icon: 'lineicons:mongodb' },
    "woocommerce": { name: 'WooCommerce', icon: 'devicon-plain:woocommerce' },
    "mysql": { name: 'MySQL', icon: 'devicon-plain:mysql-wordmark' },
}

const PortfolioTechs = ({ dict, techs }) => {
    return (
        <section id="portfolio-techs-section" className='w-[1240px] mx-auto max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] portfolio-tech-hidden'>
            <IntersectionListener selector="#portfolio-techs-section" visibleClass="portfolio-tech-visible" hiddenClass="portfolio-tech-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
            
            <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] w-fit heading-gradient-gray text-center mx-auto mb-12 animation-opacity transition-all duration-1000 ease-in-out'>{dict.title}</h2>
            <article className='flex gap-24 justify-center relative mask-gradient-horizontal max-xl:gap-16 max-lg:gap-12 max-md:flex-wrap animation-opacity transition-all duration-1000 ease-in-out'>
                {techs.map((t, idx) => {
                    const tech = technologies[t];
                    if (!tech) return null;

                    return (
                        <div key={idx} className='flex flex-col gap-4 items-center'>
                             <Icon icon={technologies[t].icon} width={83} height={83} className='max-xl:w-[70px] max-lg:w-[60px]'/>
                            <p>{tech.name}</p>
                        </div>
                    );
                })}
            </article>
        </section>
    )
}

export default PortfolioTechs