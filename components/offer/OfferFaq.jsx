'use client'

import Icon from '@components/home/Faq/Icon';
import IntersectionListener from '@components/IntersectionListener';
import { Accordion, AccordionBody, AccordionHeader } from '@node_modules/@material-tailwind/react';
import React, { useState } from 'react'

const OfferFaq = ({ dict }) => {
    const [open, setOpen] = useState(0);
    
    const handleOpen = (value) => setOpen(open === value ? -1 : value);

    return (
        <section className='w-full relative pb-16'>
            <article className='w-[1240px] max-2xl:w-[1180px] max-xl:w-[960px] max-lg:w-[90%] mx-auto'>
                <IntersectionListener selector="#faq-section" visibleClass="faq-visible" hiddenClass="faq-hidden" threshold="0.2" rootMargin='0px 0px -100px 0px' />

                <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray transition-all duration-1000 ease-in-out animation-left'>{dict.title}</h2>
                <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4 transition-all duration-1000 ease-in-out animation-left'>{dict.content}</p>

                <div className='mt-12'>
                    {dict.qna.map((q, idx) => (
                        <Accordion open={open === idx} icon={<Icon id={idx} open={open} />} key={idx} className='my-4 transition-all duration-1000 ease-in-out animation-left' style={{ transitionDelay: idx * 200 + 'ms' }}>
                            <AccordionHeader onClick={() => handleOpen(idx)} className="text-[18px] font-light max-2xl:text-[16px] max-sm:text-[14px] primary-gradient-modified rounded-[5px] pr-6 h-[60px] text-left max-sm:h-fit">{q.q}</AccordionHeader>
                            <AccordionBody className="text-[16px] font-extralight mt-[15px] xxl:text-[20px] xl:text-[15px] lg:text-[13px]">
                                {q.a.map((an, idx) => (
                                    <p key={idx} className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4'>{an}</p>
                                ))}
                            </AccordionBody>
                        </Accordion>
                    ))}
                </div>
            </article>

            <div className='absolute top-[40%] translate-y-[-50%] left-[-200px] w-[300px] h-[260px] bg-[#e2835080] blur-[90px] rounded-[100%] z-[-1]'/>
        </section>
    )
}

export default OfferFaq