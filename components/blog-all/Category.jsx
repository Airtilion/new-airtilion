'use client'

import { useCategory } from '@context/PostCategoryContext'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const Category = ({ name }) => {
  const { category, setCategory } = useCategory()
  const pathname = usePathname()
  const router = useRouter()

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 128;
      const y = element.getBoundingClientRect().y + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const changeCategory = (e, id) => {
    e.preventDefault()
    e.stopPropagation()

    setCategory(name)

    if (pathname.startsWith('/blog/') && pathname !== '/blog/') {
      router.push(`/blog#${id}`, {scroll: false});
    } else if (pathname == '/blog') {
      scrollToSection(id);
    }
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      scrollToSection(hash)
    }
  }, [pathname])

  return (
    <button className='primary-gradient relative z-10 w-fit px-[16px] py-[2px] rounded-[5px] category-span cursor-pointer hover:brightness-75 duration-500' onClick={(e) => changeCategory(e, 'blog-posts')}>
      <p className='text-[#242424] !font-normal text-[14px] max-2xl:text-[12px]'>{name}</p>
    </button>
  )
}

export default Category