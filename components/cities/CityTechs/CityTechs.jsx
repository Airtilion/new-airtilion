"use client"

import React, { useEffect, useState } from 'react'
import SingleSlide from './components/SingleSlide'
import bg from '@assets/images/offer/offer-portfolio.webp'
import Image from 'next/image';
import IntersectionListener from '@components/IntersectionListener';

const CityTech = ({ dict }) => {
    const [techs, setTechs] = useState([
        {
            name: "TypeScript",
            icon: "akar-icons:typescript-fill"
        },
        {
            name: "NextJS",
            icon: "akar-icons:nextjs-fill"
        },
        {
            name: "ReactJS",
            icon: "mdi:react"
        },
        {
            name: "Wordpress",
            icon: "ic:baseline-wordpress"
        },
        {
            name: "Tailwind",
            icon: "mdi:tailwind"
        }
    ]);
    const [isAnimating, setIsAnimating] = useState(false);


    useEffect(() => {
        const interval = setInterval(() => {
            if (!isAnimating) {
                setIsAnimating(true);
                setTimeout(() => {
                    setTechs((prevArray) => {
                        if (prevArray.length > 1) {
                            return [...prevArray.slice(1), prevArray[0]];
                        }
                        return prevArray;
                    });
                    setIsAnimating(false);
                }, 500); // Czas animacji (0.5s)
            }
        }, 3500); // Co 3.5 sekundy

        return () => clearInterval(interval);
    }, [isAnimating]);

    return (
        <section id="city-techs-section" className='w-full relative city-techs-hidden'>
            <IntersectionListener selector="#city-techs-section" visibleClass="city-techs-visible" hiddenClass="city-techs-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
            
            <article className='w-[1240px] relative mx-auto flex justify-between items-center my-[64px] max-2xl:w-[960px] max-2xl:flex-col max-2xl:gap-[64px] max-lg:w-[90%] max-sm:mt-0 '>
                <div className={`w-[480px] max-2xl:w-full animation-left transition-all duration-1000 ease-in-out`}>
                    <h2 className='text-[30px] heading-gradient-gray max-2xl:text-[25px] max-sm:text-[20px] max-w-[400px] max-2xl:max-w-none' dangerouslySetInnerHTML={{ __html: dict.title }} />
                    <p className='mt-[16px] font-extralight text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{dict.content[0]}</p>
                    <p className='mt-[8px] font-extralight text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{dict.content[1]}</p>
                </div>
                <div className={`w-[600px] relative max-lg:w-[460px] max-sm:w-[290px] animation-right transition-all duration-1000 ease-in-out`}>
                    <div className={`perspective-container flex gap-[8px] items-center w-full h-full relative ${isAnimating ? 'animating' : ''}`}>
                        {techs?.map((tech, index) => (
                            <SingleSlide
                                key={tech.name}
                                slug={dict.elements[index]}
                                icon={tech.icon}
                                name={tech.name}
                                className={isAnimating && index === 0 ? 'fade-in' : ''}
                            />
                        ))}


                    </div>
                    <div className='absolute left-[50%] top-[50%] translate-[-50%] rounded-full bg-[#e2835080] blur-[200px] w-[700px] h-[340px] z-[-1] max-xl:w-[500px] max-lg:w-[400px] max-lg:h-[400px] max-md:blur-[120px]'></div>
                    <div className='absolute bottom-[-40px] left-[50%] translate-x-[-50%] w-[80%] h-[100px] rounded-[50%/50%] border-b-[1px] border-b-[#e28350] max-lg:h-[60px] max-sm:h-[30px]'></div>
                </div>
            </article>


            <div className='w-full absolute top-0 z-[-2] h-full overflow-hidden max-2xl:hidden'>
                <div className='w-full h-full bg-linear-to-b from-[#000000] via-[#00000080] to-[#000000]' />
                <div className='w-full h-full bg-linear-to-r from-[#00000099] to-[#000000] to-[38%] absolute z-[1] top-0' />
                <Image src={bg} width={1300} height={660} alt={dict.alt} className='absolute top-0 z-[-1] w-[50%] object-right object-cover h-full max-2xl:w-full' />
            </div>
        </section>
    );
};

export default CityTech