'use client'

import React, { useEffect, useState } from 'react'

const KnowledgeVote = ({ slug }) => {
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
        <section className='section-style'>
            <div className="mt-16 pt-8 border-t border-(--primary-text-color)/20 text-(--primary-text-color)">
                <p className="text-lg font-bold mb-6">
                    Czy ten artykuł był pomocny?
                </p>

                {!hasVoted ? (
                    <div className="flex gap-4">
                        <button
                            onClick={() => handleVote('yes')}
                            disabled={voting}
                            aria-label="Tak, artykuł był pomocny"
                            className="px-6 py-2 rounded-full border border-(--primary-text-color) transition-colors duration-300 hover:border-(--hover-text-color) hover:text-(--hover-text-color) disabled:opacity-50"
                        >
                            👍 Tak
                        </button>
                        <button
                            onClick={() => handleVote('no')}
                            disabled={voting}
                            aria-label="Nie, artykuł nie był pomocny"
                            className="px-6 py-2 rounded-full border border-(--primary-text-color) transition-colors duration-300 hover:border-(--hover-text-color) hover:text-(--hover-text-color) disabled:opacity-50"
                        >
                            👎 Nie
                        </button>
                    </div>
                ) : (
                    <div className="flex flex-col gap-3 max-w-sm">
                        <div className="flex items-center gap-3">
                            <span className="text-sm w-8">👍</span>
                            <div className="flex-1 h-2 rounded-full bg-white/10">
                                <div
                                    className="h-2 rounded-full bg-(--hover-text-color) transition-all duration-500"
                                    style={{ width: `${yesPercent}%` }}
                                />
                            </div>
                            <span className="text-sm opacity-70 w-12 text-right">{yesPercent}%</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm w-8">👎</span>
                            <div className="flex-1 h-2 rounded-full bg-white/10">
                                <div
                                    className="h-2 rounded-full bg-white/40 transition-all duration-500"
                                    style={{ width: `${noPercent}%` }}
                                />
                            </div>
                            <span className="text-sm opacity-70 w-12 text-right">{noPercent}%</span>
                        </div>
                        <p className="text-sm opacity-50 mt-2">
                            Łącznie głosów: {total}
                        </p>
                    </div>
                )}
            </div>

        </section>
    )
}

export default KnowledgeVote