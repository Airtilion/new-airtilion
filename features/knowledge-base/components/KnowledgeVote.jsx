'use client'

import React, { useEffect, useState } from 'react'
import { getVoteWord } from '../utils/plurals';

const KnowledgeVote = ({ slug, lang, dict }) => {
    const [votes, setVotes] = useState({ yes: 0, no: 0 });
    const [hasVoted, setHasVoted] = useState(false);
    const [loading, setLoading] = useState(true);
    const [voting, setVoting] = useState(false);

    useEffect(() => {
        const voted = localStorage.getItem(`vote_${slug}`);
        if (voted) setHasVoted(true);

        fetch(`/api/knowledgebase?slug=${slug}`)
            .then(r => r.json()
                .then(data => { setVotes(data); setLoading(false) }));
    }, [slug])

    const handleVote = async (vote) => {
        if (hasVoted || voting) return;

        setVoting(true);

        const res = await fetch('/api/knowledgebase', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ slug, vote }),
        });

        const data = await res.json();
        setVotes(data);
        setHasVoted(true);
        localStorage.setItem(`vote_${slug}`, vote);
        setVoting(false);
    };

    const total = votes.yes + votes.no;
    const yesPercent = total > 0 ? Math.round((votes.yes / total) * 100) : 0;
    const noPercent = total > 0 ? Math.round((votes.no / total) * 100) : 0;

    if (loading) return null

    return (
        <section className='mt-44'>
            <div className="relative overflow-hidden section-style-small text-(--primary-text-color) px-8 py-16 rounded-[10px] bg-black max-sm:px-6">

                {!hasVoted ? (
                    <div className='relative z-1'>
                        <h3 className="text-[30px] max-lg:text-[25px] max-sm:text-[22px]">{dict.h3}</h3>
                        <p className='mt-4 text-[18px] max-sm:text-[16px]'>{dict.short_text}</p>

                        <div className="mt-8 flex gap-4 max-sm:flex-col">
                            <button
                                onClick={() => handleVote('yes')}
                                disabled={voting}
                                aria-label={dict.ariaLabels[0]}
                                className="w-full px-6 py-4 rounded-[10px] border-[1px] border-(--primary-text-color) transition-colors duration-300 hover:border-(--hover-text-color) hover:text-(--hover-text-color) disabled:opacity-50 flex flex-col gap-2"
                            >
                                <span className='font-bold text-[25px] max-lg:text-[22px] max-sm:text-[20px]'>{dict.buttons[0]}</span>
                                <span>{votes.yes} {getVoteWord(votes.yes, lang)} ({yesPercent}%)</span>
                            </button>
                            <button
                                onClick={() => handleVote('no')}
                                disabled={voting}
                                aria-label={dict.ariaLabels[1]}
                                className="w-full px-6 py-4 rounded-[10px] border-[1px] border-(--primary-text-color) transition-colors duration-300 hover:border-(--hover-text-color) hover:text-(--hover-text-color) disabled:opacity-50 flex flex-col gap-2"
                            >
                                <span className='font-bold text-[25px] max-lg:text-[22px] max-sm:text-[20px]'>{dict.buttons[1]}</span>
                                <span>{votes.no} {getVoteWord(votes.no, lang)} ({noPercent}%)</span>
                            </button>
                        </div>
                    </div>
                ) : (
                    <h3 className="text-[30px] max-lg:text-[25px] max-sm:text-[22px]">{dict.thanks}</h3>
                )}

                <div className="absolute w-[1000px] h-[500px] left-[-200px] top-[-200px] bg-[#E2835066] blur-[150px] rounded-full max-xl:w-[750px] max-lg:w-[600px] max-sm:w-[500px]" />

            </div>

        </section>
    )
}

export default KnowledgeVote