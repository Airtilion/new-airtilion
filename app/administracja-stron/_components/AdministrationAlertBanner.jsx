import React from 'react'
import WhiteBtn from '@components/buttons/WhiteBtn'

const renderTitleWithBreak = (title) => {
    const [firstLine, ...rest] = title.split(': ')
    if (rest.length === 0) return title

    return (
        <>
            {firstLine}:<br />
            {rest.join(': ')}
        </>
    )
}

const AdministrationAlertBanner = ({ dict }) => {
    return (
        <section className='my-32'>
            <div className='section-style'>

                <div className='border border-white/20 p-24 relative overflow-hidden rounded-2xl max-xl:p-16 max-sm:px-6'>

                    <div className='absolute rounded-tl-2xl top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#e28350]' aria-hidden='true' />
                    <div className='absolute rounded-br-2xl bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#e28350]' aria-hidden='true' />

                    <div className='relative z-1'>
                        <h2 className='title max-lg:text-center max-sm:break-words'>{renderTitleWithBreak(dict.title)}</h2>

                        <div className='mt-12 flex gap-16 items-end justify-between max-lg:flex-col max-lg:items-start max-lg:gap-12'>
                            <div className='flex-1 max-w-xl text-[16px] leading-relaxed max-lg:text-center max-lg:mx-auto max-sm:text-[15px]'>
                                <p>{dict.intro}</p>
                                <p className='mt-4'>{dict.desc}</p>
                            </div>

                            <div className='w-max max-lg:w-auto max-lg:mx-auto'>
                                <WhiteBtn>{dict.cta}</WhiteBtn>
                            </div>
                        </div>
                    </div>

                    <div className='absolute -bottom-16 right-8 text-[160px] md:text-[240px] leading-none text-white/[0.02] pointer-events-none select-none tracking-tighter max-md:-bottom-8 max-sm:right-0 max-sm:text-[130px]' aria-hidden='true'>HELP</div>
                </div>
            </div>
        </section>
    )
}

export default AdministrationAlertBanner