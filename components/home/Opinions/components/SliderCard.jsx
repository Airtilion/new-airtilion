'use client'
import React, { forwardRef, useRef, useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
const SliderCard = forwardRef(({ author, authorId, page, desc, icon, stars, lang }, ref) => {
    const textRef = useRef(null), containerRef = useRef(null);
    const [shouldScroll, setShouldScroll] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const getLink = (element) => `${process.env.NEXT_PUBLIC_API_URL}/uploads/clients/${authorId}/${element.replace(/\\/g, '/')}`;
    useEffect(() => {
        if (textRef.current && containerRef.current) {
            const diff = textRef.current.scrollHeight - containerRef.current.clientHeight;
            setShouldScroll(diff > 1);
        }
    }, [desc, lang]);
    useEffect(() => {
        if (!shouldScroll || !isHovered) {
            if (textRef.current) textRef.current.style.transform = 'translateY(0)';
            return;
        }
        let direction = -1, pos = 0, frame;
        const animate = () => {
            if (textRef.current && containerRef.current) {
                const maxScroll = textRef.current.scrollHeight - containerRef.current.clientHeight;
                pos += direction * 0.3;
                if (pos <= -maxScroll || pos >= 0) direction *= -1;
                textRef.current.style.transform = `translateY(${pos}px)`;
            }
            frame = requestAnimationFrame(animate);
        };
        frame = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(frame);
    }, [shouldScroll, isHovered]);
    return (
        <div>
            <div ref={ref} className='relative w-[400px] h-[250px] bg-[#090909BF] backdrop-blur-[10px] px-8 py-6 rounded-[10px] overflow-hidden max-lg:w-[350px] max-md:w-[300px] max-md:h-[220px]'>
                <div ref={containerRef} className="h-[165px] overflow-hidden cursor-pointer max-2xl:h-[158px] max-md:h-[137px]" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <p ref={textRef} className='!text-[#ffffff] text-[16px] max-2xl:text-[15px] max-md:text-[13px] whitespace-pre-line will-change-transform' style={{ transition: 'transform 0.1s linear' }}>
                        "{desc[lang]}"
                    </p>
                </div>
                <div className='flex gap-2 absolute bottom-6 left-8'>
                    {Array.from({ length: 5 }).map((_, idx) => <Icon key={idx} icon="material-symbols:star" width={20} height={20} className='text-[#C07915]' />)}
                </div>
            </div>
            <div className='flex gap-4 px-8 mt-4 w-[400px] max-lg:w-[350px] max-md:w-[300px] max-md:h-[220px]'>
                <div className='w-[40px] h-[40px] bg-white rounded-[5px] flex justify-center items-center overflow-hidden max-md:w-[30px] max-md:h-[30px]'>
                    <Image src={getLink(icon)} width={35} height={35} alt={`Ikona ${author}`} />
                </div>
                <p className='!text-white flex-1 text-[16px] max-md:text-[15px]'>{author}</p>
            </div>
        </div>
    );
});
export default SliderCard;
