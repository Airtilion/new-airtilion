'use client'

import React from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

const WhiteBtn = ({ children, href, onClick, className = '' }) => {
    const handleClick = onClick || (() => window.dispatchEvent(new CustomEvent('openContact')));

    const baseClasses = `group flex gap-8 items-center justify-between max-w-max mx-auto px-8 py-4 bg-white text-black text-[13px] font-bold tracking-widest uppercase hover:bg-[#e28350] hover:text-white transition-colors duration-300 w-full rounded-full max-lg:text-[13px] max-lg:gap-4 max-sm:py-3 ${className}`;

    const content = (
        <>
            <span>{children}</span>
            <Icon icon='ph:arrow-right-bold' width={20} height={20} className='group-hover:translate-x-2 transition-transform duration-300 shrink-0 max-lg:w-[18px]' />
        </>
    );

    if (href) {
        return (
            <Link href={href} className={baseClasses}>
                {content}
            </Link>
        );
    }

    return (
        <button onClick={handleClick} className={baseClasses}>
            {content}
        </button>
    );
}

export default WhiteBtn