import { Icon } from '@node_modules/@iconify/react/dist/iconify'
import Link from 'next/link'
import React from 'react'

const Route = ({ title }) => {
  return (
    <div className='relative z-10 w-[1240px] mx-auto mt-[92px] flex items-center text-[16px] font-light max-xl:w-[1000px] max-lg:w-[90%]'>
      <Link href='/' aria-label="Kliknij aby przejść na stronę główną">
        <Icon icon="ph:house-bold" width="16" height="16" className='text-white duration-700 hover:text-[#E28350]' />
      </Link>

      <div className='w-[16px]'>
        <Icon icon="mingcute:right-line" width="16" height="16" className='text-white' />
      </div>

      <Link href='/blog' aria-label="Kliknij aby przejść na stronę z blogiem">
        <span className='duration-700 hover:text-[#E28350] max-sm:text-[14px]'>Blog</span>
      </Link>

      <div className='w-[16px]'>
        <Icon icon="mingcute:right-line" width="16" height="16" className='text-white' />
      </div>

      <span className='text-[#E28350] line-clamp-1 max-sm:text-[14px]' dangerouslySetInnerHTML={{ __html: title }} />
    </div>
  )
}

export default Route