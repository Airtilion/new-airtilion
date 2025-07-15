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

const cities = [
  {name: "Białystok", link: "/strony-internetowe-bialystok"},
  {name: "Bydgoszcz", link: "/strony-internetowe-bydgoszcz"},
  {name: "Częstochowa", link: "/strony-internetowe-czestochowa"},
  {name: "Gdańsk", link: "/strony-internetowe-gdansk"},
  {name: "Gorzów Wielkopolski", link: "/strony-internetowe-gorzowwielkopolski"},
  {name: "Katowice", link: "/strony-internetowe-katowice"},
  {name: "Kielce", link: "/strony-internetowe-kielce"},
  {name: "Kraków", link: "/strony-internetowe-krakow"},
  {name: "Łódź", link: "/strony-internetowe-lodz"},
  {name: "Lublin", link: "/strony-internetowe-lublin"},
  {name: "Nowy Sącz", link: "/strony-internetowe-nowysacz"},
  {name: "Olsztyn", link: "/strony-internetowe-olsztyn"},
  {name: "Opole", link: "/strony-internetowe-opole"},
  {name: "Poznań", link: "/strony-internetowe-poznan"},
  {name: "Rzeszów", link: "/strony-internetowe-rzeszow"},
  {name: "Słupsk", link: "/strony-internetowe-slupsk"},
  {name: "Szczecin", link: "/strony-internetowe-szczecin"},
  {name: "Tarnów", link: "/strony-internetowe-tarnow"},
  {name: "Toruń", link: "/strony-internetowe-torun"},
  {name: "Warszawa", link: "/strony-internetowe-warszawa"},
  {name: "Wrocław", link: "/strony-internetowe-wroclaw"}
];


const Footer = ({dict}) => {
  return (
    <footer className='pt-[192px] w-full mx-auto flex flex-col gap-16 pb-4 relative px-[calc((100%-1380px)/2)] overflow-hidden max-2xl:px-[calc((100%-1240px)/2)] max-xl:px-[calc((100%-960px)/2)] max-lg:px-[calc(10%/2)]'>
      <article className='flex justify-between max-md:flex-col max-md:justify-center max-md:gap-4 max-md:items-center'>
        <img src="/airtilion-logo.svg" width={230} height={60} alt={dict.alt} className='opacity-0 translate-y-animation max-2xl:w-[200px] max-xl:w-[170px] max-lg:w-[200px]' />

        <div className='flex gap-3 relative w-fit max-sm:gap-2 max-sm:flex-wrap max-sm:justify-center max-sm:w-[200px]'>
          {socials.map((social, idx) => (
            <Link key={idx} href={social.link} target='_blank' className='w-[35px] h-[35px] border-[0.5px] border-[#8E8E8E] rounded-full flex justify-center items-center group duration-500 hover:border-[#E28350]'>
              <Icon icon={social.icon} width={20} height={20} className='!text-[#8E8E8E] group-hover:scale-[0.9] duration-500 group-hover:!text-[#E28350]' />
            </Link>
          ))}
        </div>

      </article>
      <article className='max-md:flex max-md:flex-col'>
          <p className='text-[16px] !text-white mb-4 max-md:text-center'>{dict.area?.title}</p>
          <div className='flex flex-wrap gap-2 max-md:justify-center'>
            {cities.map((city, idx) => (
              <Link key={idx} href={city.link} className='px-4 py-0.5 border-[0.5px] border-[#AFABAB] rounded-full group'>
                <p className='text-[14px] !text-[#AFABAB] max-lg:text-[12px]'>{city.name}</p>
              </Link>
            ))}
            <p className='text-[14px] !text-[#AFABAB] px-4 py-0.5 border-[0.5px] border-[#AFABAB] rounded-full max-lg:text-[12px]'>{dict.area?.ending}</p>
          </div>
      </article>
      <article>
        <div></div>
        <p className='text-[12px] !text-[#818181] text-center'>{dict.companyInfo}</p>
      </article>

      <div className='absolute w-[1540px] h-[760px] bg-[#E2835080] rounded-[50%] blur-[170px] right-[-300px] top-[300px] z-[-1] max-lg:right-[-600px]'></div>
      <p className='absolute bottom-[-160px] left-[50%] translate-x-[-50%] text-[290px] !font-black z-[-2] heading-gradient-white opacity-10 max-2xl:text-[230px] max-xl:text-[180px] max-xl:bottom-[-100px] max-lg:text-[150px] max-lg:bottom-[-80px] max-md:text-[120px] max-md:bottom-[-70px] max-sm:text-[100px] max-sm:bottom-[-60px]'>AIRTILION</p>
    </footer>
  )
}

export default Footer