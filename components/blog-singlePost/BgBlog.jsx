import React from 'react'
import Image from 'next/image'
import bg from '@assets/images/headers/baner-blog.webp'

const BgBlog = () => {
    return (
        <div className='absolute top-[-48px] h-[570px] w-full'>
            <div className='absolute top-0 left-0 bg-linear-to-r from-[#000000] via-[#00000080] to-[#000000] w-full h-full z-[-1]' />
            <div className='absolute top-0 left-0 bg-linear-to-b from-[#000000] via-[#00000080] to-[#000000] w-full h-full z-[-1]' />
            <Image src={bg} alt="Zdjęcie tła" className='w-full absolute object-cover top-0 left-0 h-full z-[-2]' />
        </div>
    )
}

export default BgBlog