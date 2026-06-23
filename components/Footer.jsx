import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify'

const socials = [
  { icon: "ic:baseline-facebook", link: "https://www.facebook.com/airtilion" },
  { icon: "ri:instagram-fill", link: "https://www.instagram.com/airtilion/" },
  { icon: "uil:linkedin", link: "https://www.linkedin.com/company/airtilion/" },
  { icon: "fa6-brands:square-x-twitter", link: "https://x.com/airtilion" },
  { icon: "fa6-brands:square-threads", link: "https://www.threads.com/@airtilion" },
  { icon: "mdi:pinterest", link: "https://pl.pinterest.com/airtilion/" },
  { icon: "mdi:youtube", link: "https://www.youtube.com/@Airtilion" },
  { icon: "lineicons:tiktok-alt", link: "https://www.tiktok.com/@airtilion" },
]

const Footer = ({ dict }) => {
  return (
    <footer className='pt-[192px] text-(--primary-text-color) w-full mx-auto flex flex-col gap-16 pb-4 relative px-[calc((100%-1380px)/2)] overflow-hidden max-2xl:px-[calc((100%-1240px)/2)] max-xl:px-[calc((100%-960px)/2)] max-lg:px-[calc(10%/2)]'>
      <div className='flex justify-between max-lg:flex-wrap max-lg:items-center max-lg:gap-16 max-md:flex-col max-md:text-center'>

        <div className='flex flex-col gap-8 max-lg:w-full max-lg:items-center'>
          <Link href='/' aria-label={dict.ariaLabels[0]} className='w-max'>
            <img src="/airtilion-logo.svg" width={230} height={60} alt='' className='opacity-0 translate-y-animation max-2xl:w-[200px] max-xl:w-[170px] max-lg:w-[200px]' />
          </Link>

          <nav aria-label={dict.ariaLabels[1]}>
            <ul className='flex-center gap-3 relative w-fit max-xl:flex-wrap max-xl:max-w-[170px] max-lg:max-w-none max-sm:gap-2 max-sm:flex-wrap max-sm:justify-center'>
              {socials.map((social, idx) => (
                <li key={idx}>
                  <a href={social.link} aria-label={dict.socialsAria[idx]} target='_blank' rel='noopener noreferrer' className='w-[35px] h-[35px] border-[0.5px] border-[#8E8E8E] rounded-full flex justify-center items-center group duration-500 hover:border-[#E28350]'>
                    <Icon icon={social.icon} width={20} height={20} className='!text-[#8E8E8E] group-hover:scale-[0.9] duration-500 group-hover:!text-[#E28350]' />
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 id='footer-offer' className='text-[16px] font-bold'>{dict.columns[0].title}</h3>
          <nav aria-labelledby='footer-offer'>
            <ul className='mt-8 space-y-2 max-md:mt-4'>
              {dict.columns[0].links.map((el, idx) => (
                <li key={idx}>
                  <Link href={el.link} className='text-[14px] duration-300 hover:text-[#E28350]'>{el.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 id='footer-shortcuts' className='text-[16px] font-bold'>{dict.columns[1].title}</h3>
          <nav aria-labelledby='footer-shortcuts'>
            <ul className="mt-8 space-y-2 max-md:mt-4">
              {dict.columns[1].links.map((el, idx) => (
                <li key={idx}>
                  <Link href={el.link} className='text-[14px] duration-300 hover:text-[#E28350]'>{el.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div>
          <h3 id='footer-documents' className='text-[16px] font-bold'>{dict.columns[2].title}</h3>
          <nav aria-labelledby='footer-documents'>
            <ul className="mt-8 space-y-2 max-md:mt-4">
              {dict.columns[2].links.map((el, idx) => (
                <li key={idx}>
                  <Link href={el.link} rel='nofollow' className='text-[14px] duration-300 hover:text-[#E28350]'>{el.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

      </div>

      <div>
        <p className='max-xl:text-center max-md:text-[14px]'>© {new Date().getFullYear()} Airtilion Sp. z o.o.</p>
        <small className='mt-8 text-[12px] !text-[#818181] text-center block'>{dict.companyInfo}</small>
      </div>

      <div aria-hidden='true' className='absolute w-[1540px] h-[760px] bg-[#E2835080] rounded-[50%] blur-[170px] right-[-300px] top-[300px] z-[-1] max-lg:right-[-600px]' />
      <span aria-hidden='true' className='absolute bottom-[-160px] left-[50%] translate-x-[-50%] text-[290px] !font-black z-[-2] heading-gradient-white opacity-10 max-2xl:text-[230px] max-xl:text-[180px] max-xl:bottom-[-100px] max-lg:text-[150px] max-lg:bottom-[-80px] max-md:text-[120px] max-md:bottom-[-70px] max-sm:text-[100px] max-sm:bottom-[-60px]'>AIRTILION</span>
    </footer>
  )
}

export default Footer