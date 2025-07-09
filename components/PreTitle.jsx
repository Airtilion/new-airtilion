import React from 'react'

const PreTitle = ({title}) => {
  return (
    <div className='border-[#5B5959] border-[0.5px] px-8 py-0.5 rounded-full w-fit animation-left transition-all duration-1000 ease-in-out'>  
        <p className='text-[12px] text-[#5B5959]'>{title}</p>
    </div>
  )
}

export default PreTitle