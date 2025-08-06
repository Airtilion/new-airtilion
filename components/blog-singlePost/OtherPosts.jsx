'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';

import Category from '@components/blog-all/Category';
import OtherPostsLoader from './OtherPostsLoader';
import { usePathname } from 'next/navigation';

const OtherPosts = ({ category }) => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false)
    const slug = usePathname()

    const getData = async () => {
        setLoading(true);
        const data = await fetch('/api/blog/getPostsByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryName: category,
                limit: 4,
                paginate: false,
                page: 1,
            })
        });
        const postsJ = await data.json();        
        setPosts(postsJ.posts.filter(post => post.slug != slug.slice(6)));
        setLoading(false);
    }

    useEffect(() => { getData(); }, [])

    return (
        <>
        {posts?.length > 0 && 
            <section className='mt-[96px] w-[1240px] mx-auto xl:w-[1000px] lg:w-[90%] lg:mt-[64px]'>
                <h2 className='font-extralight text-[30px] text-[#E2B350] lg:text-[25px] lg:text-center fold:text-[22px]'>To również może Cię zainteresować!</h2>

                <div className='mt-[32px] flex gap-[16px] lg:flex-wrap lg:justify-center'>
                    {
                        !loading ?
                            posts.map((post, index) => (
                                <Link href={`/blog/${post.slug}`} key={index} aria-label={`Kliknij aby przejść do postu na temat ${post.title}`}>
                                    <div className='group cursor-pointer w-[298px] h-[298px] overflow-hidden relative rounded-[5px] duration-700 hover:brightness-75 xl:w-[238px] xl:h-[238px] lg:w-[298px] lg:h-[298px] fold:w-[238px] fold:h-[238px]'>
                                        <Image src={post.image} alt={`Grafika promująca post na temat ${post.title}`} width="298" height="298" className='object-cover w-full h-full absolute top-0 left-0 duration-700 group-hover:scale-125' />
                                        <div className='absolute top-0 left-0 w-full h-full bg-[#000000B3]' />
                                        <div className='absolute top-0 left-0 w-full h-full bg-[linear-gradient(202deg,#E2B35000_60%,#E2B350ff_140%)] brightness-90' />

                                        <div className='h-full flex flex-col justify-between p-[18px]'>
                                            <div className='relative z-10'>
                                                <Category name={category} />
                                            </div>

                                            <h3 className='relative z-10 line-clamp-3 text-[20px] font-medium lg:text-[18px]' dangerouslySetInnerHTML={{ __html: post.title }} />
                                        </div>
                                    </div>
                                </Link>
                                ))
                            :
                            <OtherPostsLoader />
                    }
                </div>
            </section>
        }
        </>
    )
}

export default OtherPosts