import { getDictionary } from '@utils/getDictionary'
import { notFound } from 'next/navigation'
import KnowledgeArticle from '@features/knowledge-base/components/KnowledgeArticle'
import Footer from '@components/Footer'
import { getKnowledgeIndex, getRelatedArticles } from '@features/knowledge-base/lib/knowledgeIndex'
import { getKnowledgeArticle } from '@features/knowledge-base/lib/knowledgeArticle'
import Breadcrumbs from '@components/layout/Breadcrumbs'
import KnowledgeVote from '@features/knowledge-base/components/KnowledgeVote'
import KnowledgeRelated from '@features/knowledge-base/components/KnowledgeRelated'
import KnowledgeCTA from '@features/knowledge-base/components/KnowledgeCTA'
import SlideUpContact from '@components/SlideUpContact'

export const dynamic = 'force-static'
export const dynamicParams = true

export async function generateStaticParams() {
    const { entries } = await getKnowledgeIndex('pl')
    return entries.map((entry) => ({ slug: entry.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    try {
        const article = await getKnowledgeArticle(slug)
        return {
            title: `${article.metaTitle} - Airtilion`,
            description: article.metaDescription,
            alternates: {
                canonical: `https://airtilion.com/wiedza/${slug}`,
            },
        }
    } catch {
        return { title: 'Not Found' }
    }
}

const KnowledgeArticlePage = async ({ params, searchParams }) => {
    const { slug } = await params
    const sp = searchParams instanceof Promise ? await searchParams : searchParams
    const lang = sp?.lang || 'pl'

    const [mainFile, footerFile] = await Promise.all([
        getDictionary(lang, 'knowledge-base'),
        getDictionary(lang, 'layout/footer'),
    ]);

    const dictionaryKnowledge = mainFile || {};
    const dictionaryFooter = footerFile || {};

    let article
    try {
        article = await getKnowledgeArticle(slug, lang)
    } catch {
        notFound()
    }

    const { entries } = await getKnowledgeIndex(lang);
    const related = getRelatedArticles(slug, entries, 6);

    return (
        <>
            <main className='relative'>
                <div className='mt-48 section-style-small'>
                    <Breadcrumbs dict={dictionaryKnowledge.breadcrumbs} />
                </div>

                <KnowledgeArticle article={article} />
                <KnowledgeVote slug={article.slug} dict={dictionaryKnowledge.voteSection} lang={lang} />
                <KnowledgeRelated articles={related} lang={lang} />
                <KnowledgeCTA dict={dictionaryKnowledge.CTAsection} />

                <SlideUpContact dict={dictionaryKnowledge.form} lang={lang} />
                <div className='fixed -z-1 pointer-events-none section-style h-[200px] top-1/3 left-1/2 -translate-1/2 bg-[#E2835080] rounded-full blur-[150px]' />
            </main>
            <Footer dict={dictionaryFooter} />
        </>
    )
}

export default KnowledgeArticlePage