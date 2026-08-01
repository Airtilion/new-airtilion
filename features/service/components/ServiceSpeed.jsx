import React from 'react'
import Image from 'next/image'
import speed from '@assets/images/websites/speed.webp'

const ServiceSpeed = ({ dict }) => {
    return (
        <section className='mt-32 relative max-w-[1920px] mx-auto'>


            <div className='flex gap-16 w-[calc(((100%-1400px)/2)+1400px)] ml-auto max-2xl:w-[calc(((100%-1240px)/2)+1240px)] max-xl:w-[calc(((100%-960px)/2)+960px)] max-lg:mx-auto max-lg:w-[90%] max-lg:flex-col'>

                <div className='flex-1'>

                    <h2 className='title'>{dict.title}</h2>

                    <div className='mt-8 space-y-6 text-[16px] leading-relaxed max-sm:text-[15px]'>
                        {dict.paragraphs.map((p, idx) => (
                            <p key={idx}>{p}</p>
                        ))}
                    </div>
                </div>


                <div className='sticky top-32 h-max'>
                    <div className='relative'>
                        <Image src={speed} width={870} height={570} alt={dict.imgAlt} className='object-cover max-2xl:w-[670px] max-xl:w-[570px] max-lg:w-full' />
                        <div className="absolute inset-0 bg-black/[0.05] rounded-2xl" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServiceSpeed