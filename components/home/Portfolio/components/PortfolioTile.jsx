import React from 'react'

const PortfolioTile = ({ index, title, desc, bg }) => {

    const marginTop =
        index === 1 ? 'mt-[32px] max-lg:mt-0' :
        index === 2 ? 'mt-[64px] max-lg:mt-0' :
        'mt-0';
    

    return (
        <div className={`w-[298px] h-[400px] flex flex-col gap-2 p-8 bg-red-700 justify-end rounded-[5px] ${marginTop} max-2xl:w-[283px] max-xl:w-[234px] max-xl:h-[350px] max-xl:p-4 max-lg:w-[300px] animation-left transition-all duration-1000 ease-in-out`} style={{transitionDelay: index*100 + 'ms'}}>
            <p className='text-[20px] !text-white max-xl:text-[18px]'>{title}</p>
            <p className='text-[16px] text-[#B4B4B4] line-clamp-4 max-2xl:text-[15px] max-xl:text-[14px]'>{desc}</p>
        </div>
    )
}

export default PortfolioTile