'use client'

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Category from './Category'

import logo from '@assets/images/logo-website.webp'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify'
import AsideLoader from './AsideLoader'

const socials = [
    { icon: 'ic:baseline-facebook', link: 'https://www.facebook.com/profile.php?id=61571219580688' },
    { icon: 'uil:linkedin', link: 'https://www.linkedin.com/company/airtilion/' },
    { icon: 'mdi:instagram', link: 'https://www.instagram.com/airtilion/?utm_source=ig_web_button_share_sheet' },
    { icon: 'simple-icons:threads', link: 'https://www.threads.net/@airtilion/replies' },
    { icon: 'bi:twitter-x', link: 'https://x.com/airtilion' },
    { icon: 'mdi:pinterest', link: 'https://pin.it/6HuC1cc8y' },
    { icon: 'ic:baseline-tiktok', link: 'https://www.tiktok.com/@airtilion' },
    { icon: 'mdi:youtube', link: 'https://www.youtube.com/@Airtilion' },
]

const AsideSection = ({ phrase, setPhrase }) => {
    const [popularPosts, setPopularPosts] = useState([])
    const [categories, setCategories] = useState([])
    const [newPhrase, setNewPhrase] = useState("")
    const phraseInput = useRef(null)
    const [loader, setLoader] = useState(false)

    const raw = [1, 2, 3];

    const getData = async () => {
        setLoader(true)
        const data = await fetch('/api/blog/getPostsByCategory', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                categoryName: 'Popularne',
                limit: 3,
                paginate: false,
                page: 1,
            })
        });
        const postsJ = await data.json();
        setPopularPosts(postsJ.posts)
        setLoader(false)
    }

    const getCategories = async () => {
        const categroies = await fetch('/api/blog/getCategories', { method: 'GET' })
        const data = await categroies.json()
        setCategories(data)
    }

    const searchByName = () => {
        setPhrase(newPhrase)
        phraseInput.current.value = ''
    }

    useEffect(() => { getData(); getCategories(); }, [])

    return (
        <aside className='flex-1 flex flex-col gap-[32px] sticky top-[150px] max-lg:max-w-[600px] max-lg:mx-auto animation-right transition-all duration-1000 ease-in-out'>
            <div className='w-full relative'>
                <input ref={phraseInput} type="text" onChange={(e) => e.target.value === '' ? setPhrase(e.target.value) : setNewPhrase(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && searchByName()} placeholder='Wyszukaj' className='bg-[#04040466] border-[0.5px] border-[#ABABAB40] rounded-[5px] w-full h-[60px] px-[24px] pr-[48px] font-light focus:outline-[#e28350] focus:outline-[1px]' />
                <Icon icon="lucide:search" width={24} height={24} className='absolute top-[50%] translate-y-[-50%] right-[16px] cursor-pointer hover:!fill-[#e2b350] duration-500' onClick={() => searchByName()} />
            </div>
            <div className='border-[0.5px] border-[#ABABAB40] rounded-[5px] px-[32px] py-[24px] flex flex-col gap-[48px] bg-[#04040466]'>

                <div className='flex flex-col gap-[16px]'>
                    <p className='text-[#e28350] text-[16px] font-light'>Popularne posty</p>
                    {
                        !loader ?
                            popularPosts?.map((post, index) => (
                                <React.Fragment key={index}>
                                    <Link href={`/blog/${post.slug}`}>
                                        <div className={`flex gap-[12px] group ${index === 0 && 'flex-col gap-[16px]'}`}>
                                            <Image src={post.image || 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} width={600} height={400} alt={post?.title} className={`object-cover rounded-[5px] group-hover:brightness-50 duration-500 ${index !== 0 ? 'w-[80px] h-[80px]' : 'h-[150px]'}`} />
                                            <p className={`text-[18px] line-clamp-3 group-hover:text-[#ABABAB] duration-500 ${index !== 0 && 'font-light'} h-max xl:text-[16px]`} dangerouslySetInnerHTML={{__html: post?.title}}></p>
                                        </div>
                                    </Link>
                                    {index !== 2 && <div className='w-full h-[0.5px] bg-[#ABABAB40]'></div>}
                                </React.Fragment>
                            ))
                            :
                            raw.map((el, index) => <AsideLoader key={index} index={index} />)

                    }
                </div>

                <div className='flex flex-col gap-[16px]'>
                    <p className='text-[#e28350] text-[16px] font-light'>Najczęściej odwiedzane kategorie</p>

                    <div className='flex flex-wrap gap-[8px]'>
                        {categories.map((cat, index) => (
                            <Category key={index} name={cat.name} />
                        ))}
                    </div>
                </div>

                <div className='w-full h-[0.5px] bg-[#ABABAB40]'></div>

                <div>
                    <p className='text-[16px] font-light text-center mb-[16px]'>Znajdziesz nas tutaj</p>
                    <div className='flex gap-[16px] items-center justify-center max-sm:flex-col'>
                        <div className='flex gap-[8px] items-center'>
                            <Image src={logo} width={47} height={47} alt='logo mediów społecznościowych Airtilion' quality={100} className='w-[47px] h-[47px] rounded-full' />
                            <p className='text-[16px] font-light'>Airtilion</p>
                        </div>

                        <div className='h-[40px] w-[0.5px] bg-[#ABABAB40] max-sm:w-[40px] max-sm:h-[0.5px]'></div>

                        <div className='flex flex-wrap gap-[8px] w-[150px]'>
                            {socials.map((icon, index) => (
                                <Link key={index} href={icon.link} target='_blank'>
                                    <Icon icon={icon.icon} height={30} className='!text-[#e28350] !fill-[#e28350] hover:scale-110 duration-500' />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default AsideSection