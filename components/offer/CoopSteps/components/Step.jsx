import React from 'react'

const Step = ({ title, desc, def, number }) => {
  return (
    <div className='relative'>
      <div className={`flex gap-4 ${!def && 'flex-row-reverse'}`}>
        <p className='text-[25px] !text-white max-xl:text-[20px] max-lg:text-[18px] max-sm:text-[16px]'>{title}</p>
        <div className={`flex-1 flex items-center ${!def && 'flex-row-reverse'}`}>
          <div className='w-[10px] h-[10px] rounded-full bg-[#e28350]' />
          <div className={`w-full from-[#e28350] to-[#e2835000] h-[2px] ${def ? 'bg-linear-to-r' : 'bg-linear-to-l'}`} />
        </div>
      </div>
      <p className={`${!def && 'text-right'} mt-2 max-2xl:text-[15px]`}>{desc}</p>

      <p className={`absolute top-[-30px] text-[100px] !font-black !text-[#121212] z-[-1] ${def ? 'left-[-20px] max-sm:left-[-10px]' : 'right-[-20px] max-sm:right-[-10px]'}`}>{number+1}</p>
    </div>
  )
}

export default Step