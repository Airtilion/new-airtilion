import React from 'react'
import Image from 'next/image'
import { authors } from '@data/authors'

const Author = ({ authorName }) => {
    const author = authors.find(a => a.name === authorName)
    if (!author) return null

    return (
        <section className='mt-[96px] lg:mt-[64px]'>

            <div className='w-[850px] mx-auto flex justify-end pr-[16px] lg:w-[600px] md:w-[90%]'>
                <span className='text-[18px] font-light'>Autor wpisu</span>
            </div>

            <div className='relative rounded-[5px] border-[0.5px] border-[#ABABAB80] bg-[#0404044D] w-[850px] h-[300px] mx-auto flex flex-col justify-center pl-[200px] pr-[48px] font-light lg:w-[600px] md:w-[90%] md:pl-[250px] md:pr-[16px] sm:h-full sm:py-[16px] sm:px-[32px] sm:items-center'>
                <div className='absolute overflow-hidden w-[200px] h-[200px] rounded-full left-[-50px] md:left-[16px] sm:left-0 sm:relative sm:w-[150px] sm:h-[150px]'>
                    <Image src={author.image} alt="Zdjęcie przedstawiające autora wpisu" width="200" height="200" className=' object-cover ' />
                </div>

                <h2 className='text-[30px] lg:text-[25px] sm:mt-[8px]'>{author.name}</h2>
                <span className='text-[#E2B350] text-[14px] sm:text-center'>{author.profession}</span>
                <p className='mt-[8px] text-[#BEBEBE] text-[14px] md:text-center'>{author.bio}</p>
            </div>
        </section>
    )
}

export default Author