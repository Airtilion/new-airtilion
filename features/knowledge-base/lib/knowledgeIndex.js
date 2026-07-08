import { promises as fs } from 'fs'
import path from 'path'
import { routes } from '@data/routes'

export async function getKnowledgeIndex(lang = 'pl') {
  const filePath = path.join(process.cwd(), 'languages', lang, 'knowledge-base', 'index.json')
  const raw = await fs.readFile(filePath, 'utf8')
  const entries = JSON.parse(raw)

  const withHref = entries.map(entry => ({
    ...entry,
    href: routes.knowledgeBase.article(entry.slug),
    letter: entry.title.charAt(0).toUpperCase(),
  }))

  const grouped = withHref.reduce((acc, entry) => {
    const { letter } = entry
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(entry)
    return acc
  }, {})

  return { grouped, entries: withHref }
}

export function getRelatedArticles(currentSlug, allEntries, limit = 6) {
  const current = allEntries.find(e => e.slug === currentSlug)
  if (!current) return []

  const incomingLinks = {}
  allEntries.forEach(entry => {
    if (entry.slug === currentSlug) return
    allEntries.forEach(other => {
      if (other.slug === entry.slug) return
      const sharedTags = entry.tags?.filter(t => other.tags?.includes(t)).length || 0
      if (sharedTags > 0) {
        incomingLinks[entry.slug] = (incomingLinks[entry.slug] || 0) + 1
      }
    })
  })

  return allEntries
    .filter(e => e.slug !== currentSlug)
    .map(entry => {
      const sharedTags = entry.tags?.filter(t => current.tags?.includes(t)).length || 0
      const popularity = incomingLinks[entry.slug] || 0
      return {
        ...entry,
        score: sharedTags * 10 - popularity
      }
    })
    .filter(e => e.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...entry }) => entry)
}