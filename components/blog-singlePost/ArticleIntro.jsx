import React from 'react'
import Image from 'next/image'

const ArticleIntro = ({ title, image_link, intro_text }) => {
    return (
        <section className='blog-intro mt-[64px] w-[1240px] mx-auto flex gap-[32px] xl:w-[1000px] lg:w-[90%] lg:flex-col lg:items-center'>

            <div className='flex-1 relative h-full'>
                <Image src={image_link} alt={title.replace(/<[^>]+>/g, '').replace(/&#8211;/g, '-')} loading='eager' width="600" height="400" sizes={`(min-width: 1280px) 50vw, (min-width: 1024px) 484px, (min-width: 768px) 50vw, 100%`} className='rounded-[5px] object-cover' />
                <div className='rounded-[5px] bg-[linear-gradient(202deg,#E2B35000_60%,#E2B350ff_140%)] brightness-50 absolute top-0 left-0 w-[600px] h-full xl:w-[484px] lg:w-full' />
            </div>

            <div className='flex-1 flex flex-col gap-[16px] text-[16px] font-light' dangerouslySetInnerHTML={{ __html: intro_text }} />

        </section>
    )
}

export default ArticleIntro