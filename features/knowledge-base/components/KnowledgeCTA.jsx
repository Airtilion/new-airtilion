import React from 'react'
import CustomContactToggle from '@components/CustomContactToggle'

const KnowledgeCTA = ({ dict }) => {
    return (
        <section className='mt-24 py-32 relative'>
            <div className='w-[850px] mx-auto relative z-2 max-lg:w-[90%]'>
                <h2 className='text-[35px] text-center max-lg:text-[30px] max-sm:text-[25px]' dangerouslySetInnerHTML={{ __html: dict.h2 }} />
                <div className='flex justify-center'>
                    <CustomContactToggle text={dict.button} classes="mt-8 primary-gradient px-20 h-[50px] rounded-full duration-700 hover:scale-95 leading-tight max-sm:h-[45px]" />
                </div>
            </div>
            <div className='w-full h-full z-1 absolute inset-0 bg-[linear-gradient(to_bottom,#00000000_0%,#000000ff_30%,#000000ff_70%,#00000000_100%)]' />
        </section>
    )
}

export default KnowledgeCTA