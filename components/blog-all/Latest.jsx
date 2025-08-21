'use client'

// import Heading from '@components/Heading'
import React, { useEffect, useState } from 'react'
import SinglePost from './SinglePost'
import AsideSection from './AsideSection'
import Pagination from './Pagination'
import { useCategory } from '@context/PostCategoryContext'
import SinglePostLoader from './SinglePostLoader'
import IntersectionListener from '@components/IntersectionListener'

const Latest = ({dict}) => {

    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(1)
    const [phrase, setPhrase] = useState('')
    const [totalPages, setTotalPages] = useState(1)
    const { category, setCategory } = useCategory()

    const raw = [1, 2, 3, 4, 5, 6]

    const [loading, setLoading] = useState(false)


    const getData = async () => {
        setLoading(true)
        const data = await fetch('/api/blog/getPostsByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryName: category,
                limit: 6,
                paginate: true,
                page: page,
                searchTerm: phrase,
            })
        });
        const postsJ = await data.json();
        setPosts(postsJ.posts)
        setTotalPages(postsJ.totalPages)
        setLoading(false)
    }

    const clearFilters = () => {
        setCategory('')
        setPhrase('')
    }

    const changePage = (page) => {
        setPage(page);
        const offset = 140;
        const y = document.getElementById('blog-posts').getBoundingClientRect().y + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' })
    }

    useEffect(() => {
        getData();
    }, [phrase, page, category])


    return (
        <section id="blog-latest-section" className={`w-[1400px] mx-auto flex flex-col gap-32 z-[1] transition-all duration-1000 ease-in-out max-2xl:w-[1200px] max-xl:w-[960px] max-lg:w-full max-lg:px-[48px] max-sm:px-[16px] blog-latest-hidden`}>
            <IntersectionListener selector="#blog-latest-section" visibleClass="blog-latest-visible" hiddenClass="blog-latest-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px'/>
            
            <div className='animation-left transition-all duration-1000 ease-in-out'>
                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray w-fit'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-2'>{dict.subtitle}</p>
            </div>
            <div className='flex justify-between gap-[32px] relative max-lg:flex-col max-lg:gap-[64px]'>

                {(category || phrase) && <div className='absolute left-0 top-[-64px] flex gap-[8px] items-center flex-wrap max-sm:relative'>
                    <p className='font-light text-[#ABABAB]'>Filtry:</p>
                    {category && <p className='primary-gradient text-white px-[16px] py-[3px] rounded-[5px] max-sm:text-[12px]'>{category}</p>}
                    {phrase && <p className='primary-gradient text-white px-[16px] py-[3px] rounded-[5px] max-sm:text-[12px]'>"{phrase}"</p>}
                    <button className='text-[#ABABAB] ml-[32px]' onClick={clearFilters}>Wyczyść filtry</button>
                </div>}

                <article id="blog-posts" className='w-[952px] flex flex-wrap gap-[16px] max-2xl:w-[816px] max-xl:w-[550px] max-lg:w-full max-lg:justify-center'>
                    {!loading ?
                        posts?.length > 0 ?
                            posts?.map((post, index) => (
                                <SinglePost key={index} title={post?.title} category={post?.category} intro={post?.intro} slug={post?.slug} index={index} image={post?.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} />
                            ))
                            :
                            <p className='font-light text-[#ABABAB]'>Brak wyników</p>
                        :
                        raw.map((element, index) => <SinglePostLoader key={index} index={index} />)
                    }
                </article>
                <AsideSection phrase={phrase} setPhrase={setPhrase} />
            </div>

            <Pagination currentPage={page} totalPages={totalPages} onPageChange={changePage} />
        </section>
    )
}

export default Latest