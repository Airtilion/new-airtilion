'use client'

// import Heading from '@components/Heading'
import Image from '@node_modules/next/image'
import React, { useEffect, useState } from 'react'
import Category from './Category'
import Link from 'next/link'
import RecomendationsLoader from './RecomendationsLoader'
import IntersectionListener from '@components/IntersectionListener'

const styles = [
    'row-span-2 col-start-1 max-xl:row-span-2 max-xl:col-span-1 max-xl:col-start-1 max-xl:row-start-1',
    'max-xl:row-span-1 max-xl:col-span-1 max-xl:col-start-2 max-xl:row-start-1',
    'row-span-2 col-start-5 max-xl:row-span-1 max-xl:col-span-1 max-xl:col-start-2 max-xl:row-start-2',
    'col-start-2 col-span-2 row-start-2 max-xl:row-span-2 max-xl:col-span-1 max-xl:col-start-3 max-xl:row-start-1',
    'col-start-3 col-span-2 row-start-1 max-xl:hidden max-lg:block',
    'col-start-4 row-start-2 max-xl:hidden max-lg:block'
]

const Recomendations = ({dict}) => {
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


    return (
        <section id="blog-recomendations-section" className={`w-[1400px] mx-auto flex flex-col gap-[32px] z-[1] transition-all duration-1000 ease-in-out max-2xl:w-[1200px] max-xl:w-[960px] max-lg:w-full max-lg:px-[64px] max-sm:px-[16px] blog-recomendations-hidden`}>
            <IntersectionListener selector="#blog-recomendations-section" visibleClass="blog-recomendations-visible" hiddenClass="blog-recomendations-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
            
            
            <div className='animation-bottom transition-all duration-1000 ease-in-out'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-2'>{dict.subtitle}</p>
            </div>
            <article className="grid [grid-template-columns:350px_298px_40px_298px_350px] [grid-template-rows:298px_298px] gap-[16px] max-2xl:[grid-template-columns:300px_253px_30px_253px_300px] max-2xl:[grid-template-rows:253px_253px] max-xl:[grid-template-columns:300px_328px_300px] max-xl:[grid-template-rows:228px_228px] max-lg:flex max-lg:flex-wrap max-lg:justify-center">
                {
                    !loading ?
                        posts?.map((post, index) => (
                            <Link key={index} href={`/blog/${post.slug}`} className={`p-[16px] rounded-[5px] relative overflow-hidden animation-bottom transition-all duration-1000 ease-in-out  ${styles[index]} group max-lg:w-[300px] max-lg:h-[300px]`} style={{transitionDelay: index*100+'ms'}}>
                                <div className='h-full w-full flex flex-col justify-between'>
                                    <Category name={post?.category} />
                                    <p className='text-[20px] font-semibold relative z-10 max-2xl:text-[18px] max-xl:text-[16px]' dangerouslySetInnerHTML={{__html: post?.title}}></p>
                                    <div className='absolute w-full h-full top-0 left-0 z-[1] bg-[linear-gradient(#E2835000_0%,#E28350ff_100%)] opacity-50 brightness-[0.4]'></div>
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