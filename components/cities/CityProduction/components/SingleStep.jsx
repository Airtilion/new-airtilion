import React from 'react'

const SingleStep = ({data, index}) => {
  return (
    <div className='w-[290px] flex flex-col gap-3 justify-start transition-all duration-1000 ease-in-out animation-bottom max-xl:w-[249px] max-lg:w-[calc(50%-16px)] max-lg:min-w-[250px]' style={{transitionDelay: index*100+'ms'}}>
        <h3 className='text-[18px] max-2xl:text-[17px] max-sm:text-[16px]'>{data.title}</h3>

        <div className={`w-full flex items-center flex-row-reverse`}>
          <div className={`w-full from-[#e28350] to-[#e2835000] h-[2px] bg-linear-to-r`} />
          <div className='w-[10px] h-[10px] rounded-full bg-[#e28350]' />
        </div>

        <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{data.desc}</p>
    </div>
  )
}

export default SingleStep