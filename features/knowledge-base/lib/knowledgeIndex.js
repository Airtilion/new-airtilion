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

  return withHref.reduce((acc, entry) => {
    const { letter } = entry
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(entry)
    return acc
  }, {})
}