import React from 'react'

import img1 from '@assets/images/home-contact/contact-1.webp'
import img2 from '@assets/images/home-contact/contact-2.webp'
import PreTitle from '@components/PreTitle'
import Image from 'next/image'
import ContactForm from './components/ContactForm'
import IntersectionListener from '@components/IntersectionListener'
import Socials from './components/Socials'

const Contact = ({ dict }) => {
  return (
    <section id="kontakt" className='w-full flex flex-col gap-16 contact-hidden max-lg:w-[90%] max-lg:mx-auto'>

      <IntersectionListener selector="#kontakt" visibleClass="contact-visible" hiddenClass="contact-hidden" threshold="0.1" rootMargin='0px 0px -50px 0px' />

      <article className='flex justify-between gap-8 max-lg:flex-col max-sm:gap-6'>

        <div className='relative transition-all duration-1000 ease-in-out animation-right max-lg:h-[400px]'>
          <div className='bg-[#000000BF] backdrop-blur-[10px] py-16 px-8 rounded-l-[10px] flex flex-col gap-2 absolute top-[50%] translate-y-[-50%] right-0 max-xl:px-5 max-lg:right-auto max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:bottom-0 max-lg:top-auto max-lg:translate-y-0 max-lg:rounded-l-[0px] max-lg:py-8 max-lg:px-16 max-lg:!rounded-t-[10px] max-sm:px-12 max-sm:min-w-[260px]'>

            <p className='!text-white !font-normal max-xl:text-[15px]'>{dict.data[0]}</p>
            <div className='flex items-center gap-2'>
              <p className='text-[50px] text-[#AFABAB] !font-normal max-xl:text-[40px]'>+48</p>
              <div>
                <p className='max-xl:text-[14px]'>511 019 652</p>
                <p className='max-xl:text-[14px]'>720 177 174</p>
              </div>
            </div>

            <p className='!text-white mt-4 !font-normal max-xl:text-[15px'>{dict.data[1]}</p>
            <p className='max-xl:text-[14px]'>contact@airtilion.com</p>

            <p className='!text-white mt-4 !font-normal max-xl:text-[15px'>{dict.data[2]}</p>
            <p className='max-xl:text-[14px]'>Pon-Pt 8:00-17:00</p>

          </div>

          <div className='absolute inset-0 z-[-1] bg-linear-to-r from-[#000000] to-[#00000000] rounded-r-[20px] max-lg:bg-linear-to-b max-lg:rounded-r-[0px]'></div>
          <Image src={img1} width={570} height={650} quality={100} className="h-full inset-0 object-cover relative z-[-2] rounded-r-[20px] max-lg:w-full max-lg:h-full max-lg:rounded-r-none max-lg:rounded-b-[20px]" alt={dict.alts[0]} />
        </div>

        <div className='flex-1 flex flex-col gap-4 transition-all duration-1000 ease-in-out animation-top min-w-[625px] max-xl:min-w-[500px] max-sm:min-w-auto max-sm:w-full'>
          <PreTitle title={dict.tag} />
          <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray max-w-[350px]'>{dict.title}</h2>

          <ContactForm text={dict.form} />
        </div>

        <div className='relative transition-all duration-1000 ease-in-out animation-left max-lg:h-[200px]'>
          <div className='absolute inset-0 z-[-1] bg-linear-to-l from-[#000000] to-[#00000000] rounded-l-[20px] max-lg:bg-linear-to-t max-lg:rounded-l-0'></div>
          <Image src={img2} width={570} height={650} quality={100} alt={dict.alts[1]} className='relative z-[-2] rounded-l-[20px] h-full object-cover max-lg:w-full max-lg:h-full max-lg:object-center max-lg:rounded-l-[0px] max-lg:!rounded-t-[20px]' />
        </div>
      </article>

      <article className='flex flex-col items-center gap-2 transition-all duration-1000 ease-in-out animation-bottom max-sm:gap-4'>
        <p className='!text-white max-lg:text-[15px] max-sm:text-[14px]'>{dict.media}</p>
        <Socials/>
      </article>
    </section>
  )
}

export default Contact