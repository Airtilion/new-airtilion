import Breadcrumbs from '@components/layout/Breadcrumbs'
import ReactMarkdown from 'react-markdown'

const KnowledgeArticle = ({ article }) => {
    return (
        <article className="section-style">
            {/* <Breadcrumbs /> */}
            <h1 className="text-4xl font-bold mt-8 mb-4">{article.title}</h1>
            {article.description && (
                <p className="text-lg mb-12 opacity-70">{article.description}</p>
            )}

            <ReactMarkdown
                components={{
                    h2: ({ children }) => (
                        <h2 className="text-2xl font-bold mt-12 mb-4">{children}</h2>
                    ),
                    p: ({ children }) => (
                        <p className="mb-4 leading-relaxed">{children}</p>
                    ),
                    ul: ({ children }) => (
                        <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">{children}</ul>
                    ),
                    ol: ({ children }) => (
                        <ol className="list-decimal pl-6 mb-4 flex flex-col gap-2">{children}</ol>
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