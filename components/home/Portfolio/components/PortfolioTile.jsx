import Link from '@node_modules/next/link';
import Image from 'next/image';
import React from 'react'

const PortfolioTile = ({ index, title, desc, bg, id, clientId }) => {

    const marginTop =
        index === 1 ? 'mt-[32px] max-lg:mt-0' :
            index === 2 ? 'mt-[64px] max-lg:mt-0' :
                'mt-0';

    const getLink = (element) => {
        return `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${clientId}/${element.replace(/\\/g, '/')}`;
    };

    return (
        <Link href={`/portfolio/${id}`} className='w-[298px] h-[400px] animation-left transition-all duration-1000 ease-in-out'>
            <div className={`w-[298px] h-[400px] flex flex-col gap-2 p-8 justify-end rounded-[5px] ${marginTop} max-2xl:w-[283px] max-xl:w-[234px] max-xl:h-[350px] max-xl:p-4 max-lg:w-[300px] animation-left transition-all duration-1000 ease-in-out`} style={{ transitionDelay: index * 100 + 'ms' }}>
                <p className='text-[20px] !text-white max-xl:text-[18px]'>{title}</p>
                <p className='text-[16px] text-[#B4B4B4] line-clamp-4 max-2xl:text-[15px] max-xl:text-[14px]'>{desc}</p>
                <div className='absolute bottom-0 left-0 z-[-1] w-full h-full max-sm:h-full bg-gradient-to-b from-[#0000033] to-[#000000] to-[80%] backdrop-blur-[10px] [-webkit-mask:linear-gradient(transparent,black_50%)]' />
                <Image src={getLink(bg.file)} width={298} height={400} alt='xD' placeholder='blur' blurDataURL={bg.base64} className='absolute w-full inset-0 object-cover z-[-2]' />
            </div>
        </Link>
    )
}

export default PortfolioTile