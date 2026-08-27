import React from 'react'
import { Icon } from '@iconify/react'

const FeaturesGrid = ({ dict }) => {
  return (
    <section className='mt-32 '>
      <div className='section-style'>

        <h2 className='max-w-2xl title max-md:max-w-none'>{dict.title}</h2>

        <div className='mt-24 grid grid-cols-2 gap-8 max-md:grid-cols-1 max-lg:mt-16 max-md:gap-4'>
          {dict.items.map((feature, idx) => (
            <div key={idx} className='flex gap-5 p-8 group custom-hover-bg rounded-xl border border-white/20'>
              <div aria-hidden='true' className='shrink-0 mt-1'>
                <Icon icon={feature.icon} width={28} height={28} className='text-white/30 group-hover:text-[#e28350] transition-colors duration-300' />
              </div>
              <div>
                <h3 className='text-[18px] group-hover:text-[#e28350] transition-colors duration-300'>{feature.title}</h3>
                <p className='mt-2 text-[15px] leading-relaxed'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-20 relative rounded-r-2xl px-8 py-6 border-l-2 border-[#e28350] bg-white/[0.02]'>
          <p className='text-[20px] leading-relaxed max-sm:text-[18px]'>{dict.info[0]}</p>
          <p className='mt-4 text-[15px] leading-relaxed'>{dict.info[1]}</p>
        </div>

      </div>
    </section>
  )
}

export default FeaturesGrid