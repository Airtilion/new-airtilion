import React, { forwardRef } from 'react'
import { Icon } from '@iconify/react';
import Image from 'next/image';

const SliderCard = forwardRef(({ author, page, desc, key, icon, stars }, ref) => {
    return (
        <div>
            <div ref={ref} className='relative w-[400px] h-[250px] bg-[#090909BF] backdrop-blur-[10px] px-8 py-6 rounded-[10px] max-lg:w-[350px] max-md:w-[300px] max-md:h-[220px]'>
                <p className='!text-[#ffffff] text-[16px] max-2xl:text-[15px] max-md:text-[13px]'>"{desc}"</p>
                
                <div className='flex gpa-2 absolute bottom-6 left-8'>
                    {Array.from({length: 5}).map((_, idx) => <Icon key={idx} icon="material-symbols:star" width={20} height={20} className='text-[#C07915]'/>)}
                </div>
                
            </div>
            <div className='flex gap-4 px-8 mt-4'>
                <div className='w-[40px] h-[40px] bg-white rounded-[5px] max-md:w-[30px] max-md:h-[30px]'></div>
                <p className='!text-white text-[16px] max-md:text-[15px]'>{author}</p>
            </div>
        </div>
    )
})

export default SliderCard