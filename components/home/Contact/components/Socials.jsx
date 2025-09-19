import { Icon } from '@iconify/react/dist/iconify'
import Link from 'next/link'
import React from 'react'

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

const Socials = ({ data }) => {
  return (
    <div className='flex gap-3 relative w-fit max-sm:gap-2 max-sm:flex-wrap max-sm:justify-center max-sm:w-[200px] max-sm:gap-y-8'>
      {socials.map((social, idx) => (
        <Link key={idx} href={social.link} target='_blank' aria-label={data[idx]} className='w-[40px] h-[40px] border-[0.5px] border-[#afafaf] rounded-full flex justify-center items-center bg-[#000000] group duration-500 hover:border-[#E28350] max-sm:w-[35px] max-sm:h-[35px]'>
          <Icon icon={social.icon} width={25} height={25} className='!text-[#afafaf] group-hover:scale-[0.9] duration-500 group-hover:!text-[#E28350] max-sm:w-[20px]' />
        </Link>
      ))}

      <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[150%] h-[3px] radial-line z-[-1] max-sm:w-[90%]'></div>
    </div>

  )
}

export default Socials