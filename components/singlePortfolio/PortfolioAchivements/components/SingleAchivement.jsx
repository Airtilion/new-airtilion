import React from 'react'

const SingleAchivement = ({title, value, idx}) => {
  return (
    <div className={`${idx%2 === 0 ? 'bg-[#0D0D0D]' : 'bg-linear-to-r from-[#000000] to-[#e28350]'} px-8 py-3 rounded-[5px] animation-left transition-all duration-1000 ease-in-out max-sm:px-6 max-sm:py-6 z-[2] relative`} style={{transitionDelay: (idx+1)*100 + 'ms'}}>
        <p className='text-[20px] !text-white mb-2 max-xl:text-[18px] max-md:text-[16px]'>{title}</p>
        <p className='text-[15px] max-sm:text-[14px]'>{value}</p>
    </div>
  )
}

export default SingleAchivement