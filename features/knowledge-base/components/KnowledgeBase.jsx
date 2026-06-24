'use client'

import React, { useRef } from 'react'
import Link from 'next/link';

const ALPHABET = 'ABCDEFGHIJKLMNOPRSTUWXYZ'.split('')

const KnowledgeBase = ({ index }) => {
    const sectionRefs = useRef({});
    const availableLetters = Object.keys(index);

    const scrollToLetter = (letter) => {
        sectionRefs.current[letter]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return (
        <>
            <nav className='mt-12 section-style' aria-label="Nawigacja po literach">
                <ul className="flex flex-wrap gap-2">
                    {ALPHABET.map((letter) => {
                        const hasEntries = availableLetters.includes(letter)
                        return (
                            <li key={letter}>
                                {hasEntries ? (
                                    <button onClick={() => scrollToLetter(letter)} aria-label={`Przejdź do sekcji ${letter}`} className="w-12.5 h-12.5 flex items-center justify-center rounded-[5px] text-(--primary-text-color) border-(--primary-text-color) border-[1px] transition-colors duration-300 hover:border-(--hover-text-color) hover:text-(--hover-text-color)">
                                        {letter}
                                    </button>
                                ) : (
                                    <span className="w-12.5 h-12.5 flex items-center justify-center text-(--primary-text-color) border-(--primary-text-color) border-[1px] rounded-[5px] opacity-30 cursor-not-allowed">
                                        {letter}
                                    </span>
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>

            <div className="section-style flex flex-col gap-24 mt-32">
                {availableLetters.map((letter) => (
                    <section key={letter} ref={(el) => (sectionRefs.current[letter] = el)} aria-labelledby={`heading-${letter}`}>
                        <h2 id={`heading-${letter}`} className="text-[35px] text-(--primary-text-color) font-bold mb-4">{letter}</h2>
                        <ul className="flex flex-col gap-4">
                            {index[letter].map((entry) => (
                                <li key={entry.slug}>
                                    <Link href={entry.href} className="border-2 border-(--primary-text-color) rounded-full py-1.5 px-4.5 text-(--primary-text-color) inline-flex duration-300 hover:text-(--hover-text-color) hover:border-(--hover-text-color)">
                                        {entry.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </>
    )
}

export default KnowledgeBase