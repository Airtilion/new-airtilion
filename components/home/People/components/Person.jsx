import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { Icon } from '@iconify/react/dist/iconify'

const Person = ({ data, image, index }) => {
    return (
        <div className={`flex gap-12 items-end pl-18 relative h-[200px] animation-left transition-all duration-1000 ease-in-out ${index === 0 ? 'delay-500' : 'delay-1000'} max-lg:flex-col max-lg:items-center max-lg:h-auto max-lg:pl-0`}>
            <Image src={image} width={200} height={200} alt={data.alt} className='rounded-full max-lg:w-[150px]' />
            <div className='w-[500px] h-1 radial-line absolute top-[50%] left-0 translate-y-[-50%] z-[-1] max-lg:left-[50%] max-lg:translate-x-[-50%] max-lg:top-[70px] max-lg:translate-y-[0px] max-sm:w-[90%]'></div>

            <div className='flex-1 h-full'>
                <div className='flex justify-between h-[50%] items-end pb-3'>
                    <div>
                        <p className='text-[20px] !text-white'>{data.name}</p>
                        <p className='text-[14px] max-sm:text-[13px]'>{data.role}</p>
                    </div>
                    <div className='flex gap-1'>
                        <a href={`tel:${data.phone}`} aria-label={data.aria[0]}>
                            <Icon icon="mingcute:phone-fill" width="24" height="24" />
                        </a>
                        <a href={`mailto:${data.email}`} aria-label={data.aria[1]}>
                            <Icon icon="streamline:send-email-solid" width={24} height={24} />
                        </a>
                        <a href={data.linked} aria-label={data.aria[2]} target='_blank' rel='noopener noreferrer'>
                            <Icon icon="mdi:linkedin" width={24} height={24} />
                        </a>
                        <a href={data.facebook} aria-label={data.aria[3]} target='_blank' rel='noopener noreferrer'>
                            <Icon icon="ic:baseline-facebook" width={24} height={24} />
                        </a>
                    </div>
                </div>
                <div className='h-[50%] pt-3'>
                    <p className='text-[14px]'>{data.desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Person