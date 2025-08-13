import PreTitle from '@components/PreTitle'
import React from 'react'
import Person from './components/Person'
import jw from '@assets/images/home-owners/jw.webp'
import ap from '@assets/images/home-owners/ap.webp'
import IntersectionListener from '@components/IntersectionListener'

const owners = [jw, ap]

const Owners = ({ dict }) => {
  return (
    <section id='owners-section' className='w-full relative owners-hidden overflow-hidden'>

      <IntersectionListener selector="#owners-section" visibleClass="owners-visible" hiddenClass="owners-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />
      <article className='w-[1240px] max-xl:w-[960px] py-16 max-lg:w-[90%] mx-auto  '>

        <div className='flex flex-col gap-4 animation-left transition-all duration-1000 ease-in-out'>
          <PreTitle title={dict.tag} />
          <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray'>{dict.title}</h2>
          <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px]'>{dict.content}</p>
        </div>

        <div className='mt-24 flex flex-col gap-16'>
          {dict.owners.map((el, idx) => <Person key={idx} data={el} image={owners[idx]} index={idx} />)}
        </div>
        <div className='absolute left-[50%] translate-x-[-50%] bottom-[30%] w-[3471px] h-[3471px] rounded-full radial-gradient z-[-2] max-lg:bottom-[30%]'></div>
      </article>
    </section>
  )
}

export default Owners