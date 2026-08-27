import React from 'react'
import { Icon } from '@iconify/react'

const NumberedRowStack = ({ dict }) => {
  return (
    <section className='mt-32 py-32 bg-black relative overflow-hidden'>
      <div className='section-style relative z-1'>

        <div className='max-w-3xl max-md:max-w-none'>
          <h2 className='title break-words'>{dict.title}</h2>
          <p className='mt-6 text-[18px] leading-relaxed max-sm:text-[16px]'>{dict.intro}</p>
        </div>

        <div className='mt-16 border-t border-white/10'>
          {dict.items.map((item, idx) => (
            <div key={idx} className='group flex gap-8 px-4 py-10 border-b border-white/10 hover:bg-white/[0.02] transition-colors duration-500 max-md:flex-col max-md:gap-4 max-md:py-8'>

              <span aria-hidden='true' className='shrink-0 w-[90px] text-[48px] font-mono text-white/[0.06] leading-none group-hover:text-[#e28350]/[0.15] transition-colors duration-500 max-md:hidden'>
                {String(idx + 1).padStart(2, '0')}
              </span>

              <div aria-hidden='true' className='shrink-0 w-12 h-12 rounded-full bg-white/5 flex-center group-hover:bg-(--hover-text-color) transition-colors duration-300'>
                <Icon icon={item.icon} width={22} height={22} className='text-(--primary-text-color) group-hover:text-black transition-colors duration-300' />
              </div>

              <div className='flex-1'>
                <h3 className='text-[20px] text-white group-hover:translate-x-2 transition-transform duration-300 max-md:text-[18px]'>{item.title}</h3>
                <p className='mt-3 text-[15px] leading-relaxed max-w-2xl group-hover:translate-x-2 transition-transform duration-300 delay-75'>{item.desc}</p>
              </div>

            </div>
          ))}
        </div>

      </div>

      <div className='w-[1100px] h-[1100px] rounded-full bg-[#e2835033] blur-[200px] absolute bottom-[-650px] left-1/2 -translate-x-1/2 pointer-events-none' aria-hidden="true" />
    </section>
  )
}

export default NumberedRowStack