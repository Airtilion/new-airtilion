import ReactMarkdown from 'react-markdown'

const KnowledgeArticle = ({ article }) => {
    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString('pl-PL', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        })
    }

    const getReadingTime = (content) => {
        const words = content.trim().split(/\s+/).length;
        const minutes = Math.ceil(words / 200)
        return minutes
    }

    return (
        <article className="section-style text-(--primary-text-color)">
            <h1 className="mt-8 text-[40px]">{article.title}</h1>
            {article.description && (
                <p className="mt-4 text-[20px]">{article.description}</p>
            )}

            {article.date && (
                <p className="mt-8 text-[14px]">{formatDate(article.date)}· Czas czytania: {getReadingTime(article.content)} min</p>
            )}

            <ReactMarkdown
                components={{
                    h2: ({ children }) => (
                        <h2 className="text-[25px] font-bold mt-16 mb-4">{children}</h2>
                    ),
                    p: ({ children }) => (
                        <p className="mb-4 leading-relaxed">{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc pl-6 mb-4 space-y-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-6 mb-4 space-y-2">{children}</ol>
                    ),
                    strong: ({ children }) => (
                        <strong className="font-bold">{children}</strong>
                    ),
                    code: ({ children }) => (
                        <code className="bg-white/10 px-1 rounded text-sm">{children}</code>
                    ),
                    img: ({ src, alt }) => (
                        <img src={src} alt={alt || ''} className="rounded-lg my-8 w-full" />
                    ),
                }}
            >
                {article.content}
            </ReactMarkdown>
        </article>
    )
}

export default KnowledgeArticle