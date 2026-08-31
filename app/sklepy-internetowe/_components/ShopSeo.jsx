import React from 'react'

const ShopSeo = ({ dict }) => {
    return (
        <section className='mt-32'>
            <div className='section-style max-w-3xl'>

                <h2 className='title'>{dict.title}</h2>

                <p className='mt-8 text-[24px] leading-snug max-lg:text-[20px] max-sm:text-[18px]'>{dict.lead}</p>

                <div className='mt-12'>
                    <p className='text-[13px] uppercase tracking-widest'>{dict.includedLabel}</p>
                    <ul className='mt-4 flex flex-wrap gap-3'>
                        {dict.includedTags.map((tag, idx) => (
                            <li key={idx} className='px-5 py-2.5 rounded-full border border-white/20 text-[14px] hover:border-[#e28350] hover:text-[#e28350] transition-colors duration-300'>
                                {tag}
                            </li>
                        ))}
                    </ul>
                    <p className='mt-6 text-[16px] leading-relaxed max-sm:text-[15px]'>{dict.includedNote}</p>
                </div>

                <div className='mt-12 p-8 rounded-2xl border border-dashed border-white/20 duration-300 hover:border-solid hover:bg-white/[0.02]'>
                    <p className='text-[13px] uppercase tracking-widest text-white/40'>{dict.outsourcedLabel}</p>
                    <p className='mt-3 text-[15px] leading-relaxed'>{dict.outsourcedNote}</p>
                </div>

            </div>
        </section>
    )
}

export default ShopSeo