import React from 'react'
import Image from 'next/image'
import bgCTA from '@assets/images/knowledge/bg-cta.webp'
import CustomContactToggle from '@components/CustomContactToggle'

const KnowledgeCTA = () => {
    return (
        <section className='mt-24 relative'>
            <div className='w-[850px] absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-lg:w-[90%]'>
                <h2 className='text-[35px] text-center max-lg:text-[30px] max-sm:text-[25px]'>Koniec z teorią.<br /><span className='font-bold'>Porozmawiajmy</span> o wdrożeniu Twojego pomysłu.</h2>
                <div className='flex justify-center'>
                    <CustomContactToggle text='Napisz do nas' classes="mt-8 primary-gradient px-20 h-[50px] rounded-full duration-700 hover:scale-95 max-sm:h-[45px]" />
                </div>
            </div>
            <Image src={bgCTA} alt='' width={1920} height={620} unoptimized className='w-full h-[620px] max-md:h-[500px] object-cover object-center' />
        </section>
    )
}

export default KnowledgeCTA