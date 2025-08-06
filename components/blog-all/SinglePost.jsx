import React from 'react'
import Category from './Category'
import Image from 'next/image'
import Link from 'next/link'

const SinglePost = ({ category, title, intro, image, slug }) => {
    return (
        <Link href={`/blog/${slug}`}>
            <div className='h-[438px] w-[468px] flex flex-col p-[32px] relative justify-between rounded-[15px] overflow-hidden group 2xl:w-[400px] 2xl:h-[400px] xl:w-[550px] xl:h-[320px] lg:w-[330px] lg:h-[330px] fold:w-[290px]'>
                <Category name={category} />
                <div className='z-[4]'>
                    <h4 className='text-[25px] font-semibold line-clamp-3 mb-[8px] 2xl:text-[20px] xl:line-clamp-2' dangerouslySetInnerHTML={{__html: title}}></h4>
                    <p className='text-[16px] text-[#B4B4B4] line-clamp-3 2xl:text-[14px]' dangerouslySetInnerHTML={{__html: intro}}></p>
                </div>

                <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(270deg,#000000_0%,#00000000_100%)] z-[2] opacity-[0.95]'></div>
                <div className='absolute w-full h-full top-0 left-0 bg-[linear-gradient(#E2B35000_0%,#E2B350ff_100%)] z-[1] opacity-[0.2]'></div>
                <Image src={image} width={500} height={500} alt={title} className='object-cover absolute top-0 left-0 w-full h-full z-0 brightness-[0.4] group-hover:scale-110 duration-500' />
            </div>
        </Link>
    )
}

export default SinglePost