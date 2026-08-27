import React from 'react'
import Image from 'next/image'

const ListWithSideImage = ({ dict, img }) => {
    return (
        <section className='mt-32 py-32 bg-black relative overflow-hidden'>
            <div className='section-style relative z-1'>

                <div className='max-w-3xl max-md:max-w-none'>
                    <h2 className='title'>{dict.title}</h2>
                    <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
                </div>


                <div className='mt-16 flex items-center gap-16 max-lg:flex-col max-lg:items-start max-lg:mt-8 max-lg:gap-8'>
                    <div>
                        <p className='text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.subintro}</p>
                        <ul className='mt-6 flex-1 flex flex-col gap-6 pl-4 list-disc list-inside max-lg:pl-0'>
                            {dict.items.map((item, idx) => (
                                <li key={idx} className='group flex gap-4'>
                                    <span className='w-2 h-2 rounded-full bg-[#e28350] mt-2.5 shrink-0 group-hover:scale-125 transition-transform duration-300' />
                                    <div>
                                        <h3 className='text-[20px] text-white group-hover:text-[#e28350] transition-colors duration-500 max-md:text-[18px]'>{item.title}</h3>
                                        <p className='mt-3 text-[15px] leading-relaxed'>{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div className='relative rounded-2xl overflow-hidden h-max max-lg:mx-auto'>
                        <Image src={img} width={600} height={500} alt={dict.imgAlt} className='object-cover' />
                        <div className="absolute inset-0 bg-black/[0.05]" />
                    </div>
                </div>

                <div className='mt-16 p-8 border border-white/10 rounded-2xl duration-300 hover:bg-white/[0.02] max-lg:mt-8 max-md:p-6'>
                    <p className='text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.outro}</p>
                </div>

            </div>

            <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />
        </section>
    )
}

export default ListWithSideImage