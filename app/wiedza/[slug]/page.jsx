import { getDictionary } from '@utils/getDictionary'
import { notFound } from 'next/navigation'
import KnowledgeArticle from '@features/knowledge-base/components/KnowledgeArticle'
import Footer from '@components/Footer'
import { getKnowledgeIndex } from '@features/knowledge-base/lib/knowledgeIndex'
import { getKnowledgeArticle } from '@features/knowledge-base/lib/knowledgeArticle'

export const dynamic = 'force-static'
export const dynamicParams = true

export async function generateStaticParams() {
    const index = await getKnowledgeIndex('pl')
    return Object.values(index)
        .flat()
        .map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    try {
        const article = await getKnowledgeArticle(slug)
        return {
            title: `${article.metaTitle} - Airtilion`,
            description: article.metaDescription,
            alternates: {
                canonical: `https://airtilion.com/baza-wiedzy/${slug}`,
            },
        }
    } catch {
        return { title: 'Not Found' }
    }
}

export default async function KnowledgeArticlePage({ params, searchParams }) {
    const { slug } = await params
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    let article
    try {
        article = await getKnowledgeArticle(slug, lang)
    } catch {
        notFound()
    }

    const footerFile = await getDictionary(lang, 'layout/footer')

    return (
        <>
            <main>
                <KnowledgeArticle article={article} />
            </main>
            <Footer dict={footerFile} />
        </>
    )
}