'use client'

import { Accordion, AccordionBody, AccordionHeader } from '@node_modules/@material-tailwind/react'
import React, { useState } from 'react'
import Icon from './Icon';
import IntersectionListener from '@components/IntersectionListener';

const Faq = ({ dict }) => {
    const [open, setOpen] = useState(0);

    const handleOpen = (value) => setOpen(open === value ? -1 : value);

    return (
        <section id="faq-section" className='w-[1240px] mx-auto max-xl:w-[960px] max-lg:w-[90%] faq-hidden'>

            <IntersectionListener selector="#faq-section" visibleClass="faq-visible" hiddenClass="faq-hidden" threshold="0" rootMargin='0px 0px -100px 0px' />

            <h2 className='text-[30px] max-2xl:text-[25px] max-sm:text-[20px] heading-gradient-gray transition-all duration-1000 ease-in-out animation-left'>{dict.title}</h2>
            <p className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4 transition-all duration-1000 ease-in-out animation-left'>{dict.content}</p>

            <div className='mt-12'>
                {dict.questions.map((q, idx) => (
                    <Accordion open={open === idx} icon={<Icon id={idx} open={open} />} key={idx} className='my-4 transition-all duration-1000 ease-in-out animation-left' style={{transitionDelay: idx*200 + 'ms'}}>
                        <div className='primary-gradient-modified rounded-[5px] pr-6 h-[60px] cursor-pointer flex justify-between items-center' onClick={() => handleOpen(idx)}>
                            <h3 className='text-[18px] font-light max-2xl:text-[16px] max-sm:text-[14px] text-left flex-1'>{q.q}</h3>
                            <Icon id={idx} open={open}/>
                        </div>
                        
                        <AccordionBody className="text-[16px] font-extralight mt-[15px] xxl:text-[20px] xl:text-[15px] lg:text-[13px]">
                            {q.a.map((an, idx) => (
                                <p key={idx} className='text-[16px] max-2xl:text-[15px] max-sm:text-[14px] mt-4' dangerouslySetInnerHTML={{__html: an}}/>
                            ))}
                        </AccordionBody>
                    </Accordion>
                ))}
            </div>
        </section>
    )
}

export default Faq