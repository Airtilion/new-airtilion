import React from 'react'
import Image from 'next/image'
import ssl from '@assets/images/websites/ssl.webp'

const ServiceSecurity = ({ dict }) => {
    return (
        <section className='mt-32 py-32 relative overflow-hidden bg-black'>
            <div className='section-style flex items-center gap-16 max-lg:flex-col-reverse'>

                <div className='relative w-max h-max max-sm:w-full max-sm:h-full'>
                    <Image src={ssl} alt={dict.imgAlt} width={600} height={500} className="object-cover rounded-2xl max-xl:w-[400px] max-lg:w-[600px] max-sm:w-full" />

                    <div className="absolute rounded-2xl inset-0 bg-black/20 w-[750px] h-[500px] max-xl:w-[400px] max-xl:h-[317px] max-lg:w-[600px] max-lg:h-[476px] max-sm:w-full max-sm:h-full" />
                </div>

                <div className='flex-1'>
                    <h2 className='title'>{dict.title}</h2>

                    <div className='mt-6 space-y-6'>
                        {dict.paragraphs.map((p, idx) => (
                            <p key={idx} className='text-[18px] max-lg:text-[16px] leading-relaxed max-sm:text-[15px]'>{p}</p>
                        ))}
                    </div>
                </div>

            </div>

            <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-550px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />
        </section>
    )
}

export default ServiceSecurity