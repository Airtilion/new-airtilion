import React from 'react'

const ProseTextBand = ({ dict }) => {
    return (
        <section className='mt-32 py-32 bg-black relative overflow-hidden'>
            <div className='section-style'>

                <h2 className='title'>{dict.title}</h2>

                <div className='mt-8 space-y-6'>
                    {dict.paragraphs.map((paragraph, idx) => (
                        <p key={idx} className='text-[18px] leading-relaxed max-lg:text-[16px] max-sm:text-[15px]'>{paragraph}</p>
                    ))}
                </div>

            </div>

            <div className='w-[800px] h-[800px] rounded-full bg-[#e2835033] blur-[200px] absolute -bottom-[500px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />

        </section>
    )
}

export default ProseTextBand