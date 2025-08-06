import StarsCanvas from '@components/StartsBg'
import Image from '@node_modules/next/image'
import React from 'react'

import bg from '@assets/images/cities/general/offer-bg.webp'
import FallingStarsCanvas from '@components/FallingStarsBg'
import IntersectionListener from '@components/IntersectionListener'

const CityOffer = ({ dict }) => {
    return (
        <section id="city-offer-section" className='w-full relative py-8 overflow-hidden city-offer-hidden'>

            <IntersectionListener selector="#city-offer-section" visibleClass="city-offer-visible" hiddenClass="city-offer-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />

            <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit transition-all duration-1000 ease-in-out animation-bottom'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4 mb-16 transition-all duration-1000 ease-in-out animation-bottom'>{dict.content}</p>

                <div className='w-full grid grid-cols-4 grid-rows-2 h-[632px] gap-4 max-lg:flex max-lg:flex-col max-lg:h-auto'>

                    <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-[5px] relative overflow-hidden bg-[#00000080] backdrop-blur-[5px] flex flex-col justify-center gap-2 p-8 transition-all duration-1000 ease-in-out animation-left max-lg:py-8 max-lg:flex-row-reverse max-md:flex-col max-md:gap-8">
                        <img src="/icons/illustration-1.svg" width={120} height={80} alt={dict.alts[1]} className='mx-auto max-xl:w-[100px]' />
                        <div>
                            <h3 className='text-[25px] heading-gradient-gray max-2xl:text-[20px] max-md:text-center'>{dict.tiles[0].title}</h3>
                            <p className='text-[15px] max-sm:text-[14px] mt-2 max-md:text-center'>{dict.tiles[0].content}</p>
                        </div>

                        <FallingStarsCanvas bg="rgba(0,0,0,0.5)" />
                        <div className='absolute w-[300px] h-[300px] bottom-[-150px] right-[-150px] rounded-full bg-[#e283509e] blur-[100px] z-[-2]' />
                    </div>

                    <div className="col-start-2 col-end-5 row-start-1 row-end-2 rounded-[5px] bg-[#00000080] backdrop-blur-[5px] overflow-hidden flex justify-between items-center px-16 transition-all duration-1000 ease-in-out animation-right max-lg:py-8 max-lg:pl-8 max-md:flex-col-reverse max-md:gap-8 max-md:pr-8">

                        <div>
                            <h3 className='text-[35px] heading-gradient-gray max-2xl:text-[30px] max-xl:text-[25px] max-md:text-[20px] max-md:text-center'>{dict.tiles[1].title}</h3>
                            <p className='mt-2 w-[350px] max-md:w-full max-md:text-center'>{dict.tiles[1].content}</p>
                        </div>
                        <img src="/icons/illustration-2.svg" width={230} height={130} alt={dict.alts[2]} className='max-lg:w-[130px]'/>

                        <StarsCanvas bg="rgba(0,0,0,0.5)" />
                        <div className='absolute w-[300px] h-[300px] bottom-[-150px] left-[-150px] rounded-full bg-[#e283509e] blur-[100px] z-[-2]' />
                        <div className='absolute w-[300px] h-[300px] top-[-150px] right-[-150px] rounded-full bg-[#e283509e] blur-[100px] z-[-2]' />
                    </div>

                    <div className="col-start-1 col-end-3 row-start-2 row-end-3 rounded-[5px] bg-[#00000080] backdrop-blur-[5px] overflow-hidden flex justify-between items-center pl-8 pr-16 gap-16 transition-all duration-1000 ease-in-out animation-left max-lg:py-8 max-md:flex-col-reverse max-md:gap-8 max-md:pr-8">

                        <div className='flex-1'>
                            <h3 className='text-[25px] heading-gradient-gray max-2xl:text-[20px] max-md:text-center'>{dict.tiles[2].title}</h3>
                            <p className='mt-2 max-md:text-center'>{dict.tiles[2].content}</p>
                        </div>
                        <img src="/icons/illustration-3.svg" width={130} height={130} alt={dict.alts[3]} className='max-xl:w-[100px]' />

                        <StarsCanvas bg="rgba(0,0,0,0.5)" />
                        <div className='absolute w-[400px] h-[400px] bottom-[-150px] right-[-150px] rounded-full bg-[#e28350ad] blur-[200px] z-[-2]' />
                    </div>

                    <div className="col-start-3 col-end-5 row-start-2 row-end-3 rounded-[5px] bg-[#00000080] backdrop-blur-[5px] overflow-hidden flex flex-col justify-center items-center gap-4 px-8 transition-all duration-1000 ease-in-out animation-right max-lg:py-8">
                        <h3 className='text-[35px] heading-gradient-gray max-2xl:text-[30px] max-xl:text-[25px] max-md:text-[20px]'>{dict.tiles[3].title}</h3>
                        <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] text-center w-[500px] max-xl:w-full'>{dict.tiles[3].content}</p>

                        <FallingStarsCanvas bg="rgba(0,0,0,0.5)" />
                        <div className='absolute w-[300px] h-[300px] bottom-[-150px] right-[-150px] rounded-full bg-[#e283509e] blur-[100px] z-[-2]' />
                        <div className='absolute w-[300px] h-[300px] top-[-150px] left-[-150px] rounded-full bg-[#e283509e] blur-[100px] z-[-2]' />
                    </div>
                </div>

                <div className='w-full rounded-[5px] h-[150px] mt-4 bg-[#00000080] backdrop-blur-[5px] overflow-hidden pl-8 pr-16 flex justify-between items-center transition-all duration-1000 ease-in-out animation-left gap-8 max-lg:py-8 max-lg:flex-col max-lg:h-auto max-lg:pl-16'>
                    <div className='w-[70%] max-lg:w-full'>
                        <h3 className='text-[25px] heading-gradient-gray max-2xl:text-[20px] max-lg:text-center'>{dict.tiles[4].title}</h3>
                        <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-2 max-lg:text-center'>{dict.tiles[4].content}</p>
                    </div>

                    <button className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] h-[45px] primary-gradient px-8 rounded-full'>{dict.button}</button>

                    <StarsCanvas bg="rgba(0,0,0,0.5)" />
                    <div className='absolute w-[300px] h-[300px] bottom-[-150px] right-[-150px] rounded-full bg-[#e283509e] blur-[100px] z-[-2]' />
                </div>
            </article>
            <div className='absolute inset-0 h-full bg-linear-to-b from-[#000000] via-[#00000000] to-[#000000] z-[-9]' />
            <Image src={bg} width={1920} height={1000} className='absolute top-0 left-0 brightness-10 z-[-10]' />
        </section>
    )
}

export default CityOffer