'use client'

import React, { useEffect, useRef, useState } from 'react';
import SliderCard from './SliderCard';

const slide = [
    {
        author: 'Radosław Jaźwiec',
        stars: 5,
        desc: 'Z pełnym przekonaniem rekomendujemy firmę Airtilion Sp. z o.o. jako solidnego, rzetelnego i profesjonalnego partnera w realizacji projektów internetowych. Efekt ich pracy w pełni odpowiada naszym założeniom.',
    },
    {
        author: 'Edyta Kożuch',
        stars: 5,
        desc: 'Z przyjemnością rekomendujemy firmę Airtilion. Za realizację usługi odpowiedzialni byli panowie Jakub Wadycki oraz Artur Plebańczyk, którzy wykazali sięwysokimi kompetencjami, zaangażowaniem oraz terminowością.',
    },
    {
        author: 'Lorem ipsum',
        stars: 5,
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        stars: 5,
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        stars: 5,
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
    {
        author: 'Józek Nowak',
        stars: 5,
        desc: 'Lorem ipsum lorem ipsum Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum'
    },
]

const Slider = () => {
    const sliderAll = useRef(null);
    const cardRef = useRef(null);
    const containerRef = useRef(null);
    const position = useRef(0);
    const [cardWidth, setCardWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        if (cardRef.current) {
            const width = cardRef.current.offsetWidth + 16;
            setCardWidth(width);
        }
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            const width = containerRef.current.offsetWidth + 16;
            setContainerWidth(width);
        }
    }, []);

    useEffect(() => {
        if (!cardWidth) return;
        if (!containerWidth) return;

        const revsCount = slide.length;
        const visibleRevs = Math.floor(containerWidth / cardWidth);
        let tCount = visibleRevs;

        const interval = setInterval(() => {
            position.current -= cardWidth;
            if (sliderAll.current) {
                if(tCount === revsCount - 1){
                    sliderAll.current.style.transform = `translateX(${(position.current + cardWidth) - (cardWidth - (containerWidth-(visibleRevs*(cardWidth+16))) + 16)}px)`;
                    setTimeout(() => {
                        sliderAll.current.style.transform = `translateX(0px)`;
                        position.current = 0;
                        tCount = visibleRevs;
                    }, 5500)
                }
                else{
                    sliderAll.current.style.transform = `translateX(${position.current}px)`;
                }

                tCount += 1;
            }
        }, 5500)

        return () => clearInterval(interval);
    }, [cardWidth, containerWidth])

    return (
        <div ref={containerRef} className="flex-1 max-w-full overflow-hidden max-lg:w-full max-lg:flex-auto">
            <div ref={sliderAll} className='flex gap-4 px-4 transition-all duration-1000 ease-in-out'>
                {slide.map((el, idx) => <SliderCard key={idx} author={el.author} desc={el.desc} stars={el.stars} ref={idx === 0 ? cardRef : null} />)}
            </div>
        </div>
    );
};


export default Slider