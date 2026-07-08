import React from 'react'
import Link from 'next/link'

const KnowledgeRelated = ({ articles, lang }) => {
    return (
        <section className='mt-24 section-style-small text-(--primary-text-color)'>
            <h2 className='text-[25px] max-sm:text-[22px] max-sm:text-center'>{lang === 'pl' ? 'Zobacz również' : 'See also'}</h2>

            <ul className="mt-8 flex flex-wrap gap-4 max-sm:justify-center">
                {articles.map(article => (
                    <li key={article.slug}>
                        <Link href={article.href} className='inline-block px-8 py-2 border-[1px] border-(--primary-text-color) rounded-full leading-tight duration-300 hover:border-(--hover-text-color) hover:text-(--hover-text-color) max-sm:text-center max-sm:text-[15px]'>{article.title}</Link>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default KnowledgeRelated