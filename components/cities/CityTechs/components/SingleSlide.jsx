import { Icon } from '@iconify/react'
import React from 'react'

const SingleSlide = ({ slug, icon, name, className = '' }) => {
    return (
        <div className={`w-[180px] h-[330px] bg-[#00000080] backdrop-blur-[20px] rounded-[12px] p-[16px] flex flex-col justify-between items-center absolute ${className}`}>
            <p className='text-center font-light text-[#777777] text-[10px]'>{slug[0]} <br /> {slug[1]}</p>
            <div className='w-[120px] h-[120px] rounded-full bg-[#0404041a] shadow-inner-[0px_4px_10px_#00000080] flex justify-center items-center duration-500'>
                <Icon icon={icon} width="80" height="80" className='text-white duration-500' />
            </div>
            <h3 className='text-[20px] font-light'>{name}</h3>
        </div>
    );
};

export default SingleSlide