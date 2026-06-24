import { promises as fs } from 'fs'
import path from 'path'
import { routes } from '@data/routes'

export async function getKnowledgeIndex(lang = 'pl') {
  const dir = path.join(process.cwd(), 'languages', lang, 'knowledge-base')
  const files = await fs.readdir(dir)

  const entries = await Promise.all(
    files
      .filter(f => f.endsWith('.json'))
      .map(async (filename) => {
        const slug = filename.replace('.json', '')
        const raw = await fs.readFile(path.join(dir, filename), 'utf8')
        const data = JSON.parse(raw)
        return {
          slug,
          title: data.title,
          letter: data.title.charAt(0).toUpperCase(),
          href: routes.knowledgeBase.article(slug),
        }
      })
  )

  return entries.reduce((acc, entry) => {
    const { letter } = entry
    if (!acc[letter]) acc[letter] = []
    acc[letter].push(entry)
    return acc
  }, {})
}