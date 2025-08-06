import React from 'react'

const Content = ({content}) => {
  return (
    <section className='mt-[96px] w-[1240px] mx-auto blog-content xl:w-[1000px] lg:w-[90%] lg:mt-[64px]' dangerouslySetInnerHTML={{__html: content}}>
        
    </section>
  )
}

export default Content