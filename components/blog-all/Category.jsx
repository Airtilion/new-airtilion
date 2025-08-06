'use client'

import { useCategory } from '@context/PostCategoryContext'
import { usePathname, useRouter } from 'next/navigation'
import React from 'react'



const Category = ({name}) => {
  const {category, setCategory} = useCategory()
  const pathname = usePathname()
  const router = useRouter()

  const changeCategory = (e) => {
    e.preventDefault()
    e.stopPropagation()

    setCategory(name)

    if(pathname.startsWith('/blog/') && pathname !== '/blog/'){
      router.push('/blog');
    }
  }

  return (
    <div className='bg-[#EFD8A7] relative z-10 w-fit px-[16px] py-[2px] rounded-[5px] category-span cursor-pointer hover:brightness-75 duration-500' onClick={(e) => changeCategory(e)}>
        <p className='text-[#242424] text-[14px] 2xl:text-[12px]'>{name}</p>
    </div>
  )
}

export default Category