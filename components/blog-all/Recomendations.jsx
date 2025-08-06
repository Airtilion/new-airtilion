'use client'

// import Heading from '@components/Heading'
import Image from '@node_modules/next/image'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Link from 'next/link'
import RecomendationsLoader from './RecomendationsLoader'
import useIntersectionObserver from '@hooks/useObserver'

const styles = [
    'row-span-2 col-start-1 xl:row-span-2 xl:col-span-1 xl:col-start-1 xl:row-start-1',
    'xl:row-span-1 xl:col-span-1 xl:col-start-2 xl:row-start-1',
    'row-span-2 col-start-5 xl:row-span-1 xl:col-span-1 xl:col-start-2 xl:row-start-2',
    'col-start-2 col-span-2 row-start-2 xl:row-span-2 xl:col-span-1 xl:col-start-3 xl:row-start-1',
    'col-start-3 col-span-2 row-start-1 xl:hidden lg:block',
    'col-start-4 row-start-2 xl:hidden lg:block'
]

const Recomendations = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(false)

    const getData = async () => {
        setLoading(true)
        const data = await fetch('/api/blog/getPostsByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryName: 'Polecane',
                limit: 6,
                paginate: false,
                page: 1,
                searchTerm: '',
            })
        });
        const postsJ = await data.json();
        setPosts(postsJ.posts)
        setLoading(false)
    }

    useEffect(() => { getData() }, [])

    const [ ref, isVisible ] = useIntersectionObserver();

    return (
        <section ref={ref} className={`w-[1400px] mx-auto flex flex-col gap-[32px] z-[1] transition-all duration-1000 ease-in-out ${isVisible ? 'about-visible' : 'about-hidden'} 2xl:w-[1200px] xl:w-[960px] lg:w-full lg:px-[64px] sm:px-[16px]`}>
            {/* <Heading title="Polecane treści" subtitle="artykuły wybrane z myślą o tobie" /> */}

            <article className="grid [grid-template-columns:350px_298px_40px_298px_350px] [grid-template-rows:298px_298px] gap-[16px] 2xl:[grid-template-columns:300px_253px_30px_253px_300px] 2xl:[grid-template-rows:253px_253px] xl:[grid-template-columns:300px_328px_300px] xl:[grid-template-rows:228px_228px] lg:flex lg:flex-wrap lg:justify-center">
                {
                    !loading ?
                        posts?.map((post, index) => (
                            <Link key={index} href={`/blog/${post.slug}`} className={`p-[16px] rounded-[15px] relative overflow-hidden ${styles[index]} group lg:w-[300px] lg:h-[300px]`}>
                                <div className='h-full w-full flex flex-col justify-between'>
                                    <Category name={post?.category} />
                                    <p className='text-[20px] font-semibold relative z-10 2xl:text-[18px] xl:text-[16px]' dangerouslySetInnerHTML={{__html: post?.title}}></p>
                                    <div className='absolute w-full h-full top-0 left-0 z-[1] bg-[linear-gradient(#E2B35000_0%,#E2B350ff_100%)] opacity-50 brightness-[0.4]'></div>
                                    <Image src={post?.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} width={612} height={612} alt='zdjęcie artykułu' className='object-cover h-full w-full absolute top-0 left-0 z-0 brightness-50 group-hover:scale-110 duration-500' />
                                </div>
                            </Link>
                        ))
                        :
                        <RecomendationsLoader />
                }
            </article>
        </section>
    )
}

export default Recomendations