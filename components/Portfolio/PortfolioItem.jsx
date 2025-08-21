import Link from '@node_modules/next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PortfolioElement = ({ item, lang }) => {
    const [isLogoHorizontal, setIsLogoHorizontal] = useState(true);

    const getLink = (element) => {
        return `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${item.ClientId}/${element.replace(/\\/g, '/')}`;
    };

    useEffect(() => {
        const img = new window.Image();
        img.src = getLink(item.Logo.file);
        img.onload = () => {
            const isHorizontal = img.width > img.height;
            setIsLogoHorizontal(isHorizontal);
        };
    }, [item.Logo.file]);

    return (
        <Link href={`/portfolio/${item.id}`} className='max-sm:w-[100%] max-sm:aspect-square max-sm:h-auto'>
            <div className='w-[600px] h-[600px] relative p-12 flex items-end overflow-hidden group max-2xl:w-[550px] max-2xl:h-[550px] max-xl:w-[450px] max-xl:h-[450px] max-lg:mx-auto max-lg:w-[550px] max-lg:h-[550px] max-sm:w-[100%] max-sm:aspect-square max-sm:h-auto max-2xl:p-8'>
                <div className='flex gap-8 relative z-[3] items-center max-sm:flex-col'>
                    <Image src={getLink(item.Logo.file)} width={300} height={300} alt="Logo projektu" className={isLogoHorizontal ? 'w-[120px]' : 'w-[80px]'}/>
                    <div>
                        <h3 className='text-[25px] !font-light mb-4 max-2xl:text-[22px] max-sm:text-[18px] max-sm:mb-2'>{item.Name}</h3>
                        <p className='line-clamp-3 max-2xl:text-[15px] max-sm:text-[14px]'>{item.Description[lang]}</p>
                    </div>
                </div>
                <div className='absolute bottom-0 left-0 z-[2] w-full h-[70%] max-sm:h-full bg-gradient-to-b from-[#00000033] to-[#000000] to-[100%] backdrop-blur-[10px] [-webkit-mask:linear-gradient(transparent,black_50%)]' />
                <Image src={getLink(item.SmallBackground.file)} quality={100} width={600} height={600} placeholder='blur' blurDataURL={item.SmallBackground?.base64} alt="Tło projektu" className='absolute top-0 left-0 w-full h-full z-[1] group-hover:scale-120 duration-[10000ms]'/>
            </div>
        </Link>
    );
};

export default PortfolioElement;