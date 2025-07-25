import React from 'react'

const SingleStep = ({data, idx}) => {
    return (
        <div className='w-[300px] flex flex-col gap-1 transition-all duration-1000 ease-in-out animation-left max-2xl:w-[250px]' style={{transitionDelay: (idx+1)*100 + 'ms'}}>
            <h3 className='text-[20px] max-2xl:text-[18px]'>{data.title}</h3>
            <div className={`flex-1 flex items-center flex-row-reverse`}>
                <div className='w-[10px] h-[10px] rounded-full bg-[#e28350]' />
                <div className={`w-full from-[#e28350] to-[#e2835000] h-[2px] bg-linear-to-l`} />
            </div>
            <p className='max-2xl:text-[15px] max-sm:text-[14px]'>{data.value}</p>
        </div>
    )
}

export default SingleStep