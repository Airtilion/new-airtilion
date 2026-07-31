import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Icon } from '@iconify/react'
import { getLatestProjects } from '@lib/projects'
import { getLink } from '@utils/getLink'

const ServicePortfolio = async ({ dict, baseUrl = "https://airtilion.com" }) => {
    const fetchedProjects = await getLatestProjects({ limit: 4, lang: 'pl' });

    return (
        <section id="portfolio" className='mt-32'>
            <div className='section-style'>

                <div className='max-w-3xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.desc}</p>
                </div>

                <div className='mt-16 grid grid-cols-2 gap-8 max-md:grid-cols-1'>
                    {fetchedProjects.map((project) => (
                        <Link href={`${baseUrl}/portfolio/${project.id}`} key={project.id} className='group flex flex-col gap-6'>

                            <div className='w-full aspect-[4/3] bg-white/[0.02] flex overflow-hidden relative'>

                                {project.SmallBackground ? (
                                    <Image src={getLink(project.SmallBackground, project.ClientId)} alt={`Projekt: ${project.Name}`} width={684} height={513} placeholder='blur' blurDataURL={`data:image/webp;base64,${project.SmallBackground.base64}`} className='object-top object-cover group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]' />
                                ) : (
                                    <Icon icon="ph:image-light" className='text-white/10 text-[64px] group-hover:scale-110 transition-transform duration-700' />
                                )}

                            </div>

                            <div className='flex flex-col flex-grow justify-between max-sm:text-center max-sm:items-center'>
                                <h3 className='text-[24px] font-medium text-white max-lg:text-[22px] max-sm:text-[20px]'>{project.Name}</h3>

                                <div className='mt-4 max-w-max flex items-center rounded-full gap-2 px-6 py-2 border border-white/10 text-[13px] text-(--primary-text-color) group-hover:text-white group-hover:border-[#e28350] transition-colors'>
                                    <span className='font-medium'>{dict.buttonText}</span>
                                    <Icon icon="ph:arrow-right-light" width={16} height={16} className='group-hover:translate-x-2 duration-300 shrink-0' />
                                </div>
                            </div>

                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServicePortfolio