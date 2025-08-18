import Image from 'next/image'
import React from 'react'
import bg from '@assets/images/offer/offer-portfolio.webp'
import IntersectionListener from '@components/IntersectionListener'
import Link from '@node_modules/next/link'


const OfferPortfolio = ({ dict, data }) => {

    const getLink = (element, clientId) => {
        return `${process.env.NEXT_PUBLIC_API_URL}/uploads/projects/${clientId}/${element.replace(/\\/g, '/')}`;
    };

    function getLogoClass(logo) {
        if (!logo?.width || !logo?.height) return "w-[100px]"; // fallback

        return logo.width >= logo.height ? "w-[120px]" : "w-[80px]";
    }


    return (
        <section id="offer-portfolio-section" className='w-full relative py-16 o-portfolio-hidden max-lg:py-0'>
            <IntersectionListener selector="#offer-portfolio-section" visibleClass="o-portfolio-visible" hiddenClass="o-portfolio-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />

            <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex gap-4 items-end animation-opacity transition-all duration-1000 ease-in-out max-lg:flex-col max-lg:items-center'>
                <div className='w-[50px] h-full max-lg:w-full max-lg:flex max-lg:justify-center max-lg:mb-16'>
                    <h2 className='heading-gradient-gray text-[30px] max-2xl:text-[25px] max-sm:text-[20px] rotate-[270deg] origin-bottom-left ml-[50px] w-[500px] inline-block max-lg:rotate-0 max-lg:ml-auto max-lg:w-fit max-lg:mx-auto'>{dict.title}</h2>
                </div>
                <div className='flex gap-4'>
                    {data.map((element, idx) => (
                        <Link key={idx} href={`/portfolio/${element.id}`} className='flex-1 w-[380px] h-[380px] max-lg:flex-auto max-lg:w-[400px] max-sm:w-[290px] relative overflow-hidden flex justify-center items-end pb-8 group' style={{ marginTop: idx * 32 + 'px' }}>
                                <Image src={getLink(element.Logo.file, element.ClientId)} width={element.Logo.width} height={element.Logo.height} placeholder='blur' blurDataURL={element.Logo.base64} className={`${getLogoClass(element.Logo)} group-hover:scale-110 duration-500`} alt={dict.alts[2]}/>
                                <div className='absolute bottom-0 left-0 z-[-1] w-full h-full max-sm:h-full bg-gradient-to-b from-[#0000033] to-[#000000f8] backdrop-blur-[10px] [-webkit-mask:linear-gradient(transparent,black_50%)]' />
                                <Image src={getLink(element.SmallBackground.file, element.ClientId)} placeholder='blur' blurDataURL={element.SmallBackground.base64} width={386} height={500} className='absolute inset-0 object-cover w-full z-[-2] group-hover:scale-120 duration-[3000ms]' alt={dict.alts[1]}/>
                        </Link>
                    ))}
                </div>
            </article>
            <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto flex flex-col justify-center items-center animation-opacity transition-all duration-1000 ease-in-out mt-16'>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mb-4'>{dict.content}</p>
                <Link href="/portfolio">
                    <button className='h-[45px] rounded-full px-8 primary-gradient hover:text-[14px] duration-500'>{dict.button}</button>
                </Link>
            </article>
            <div className='w-full absolute top-0 z-[-3] h-full overflow-hidden animation-opacity transition-all duration-1000 ease-in-out'>
                <div className='w-full h-full bg-linear-to-b from-[#000000] via-[#00000080] to-[#000000] absolute z-[2]' />
                <div className='w-full h-full bg-linear-to-r from-[#00000099] to-[#000000] to-[77%] absolute z-[1]' />
                <Image src={bg} width={1300} height={660} alt={dict.alts[0]} className='relative z-[-1]'/>
            </div>
        </section>
    )
}

export default OfferPortfolio