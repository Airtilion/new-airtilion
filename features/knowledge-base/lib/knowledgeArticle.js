import { promises as fs } from 'fs'
import path from 'path'

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const frontmatter = match[1]
  const content = match[2].trim()

  const data = Object.fromEntries(
    frontmatter.split('\n').map(line => {
      const [key, ...rest] = line.split(':')
      return [key.trim(), rest.join(':').trim().replace(/^"|"$/g, '')]
    })
  )

  return { data, content }
}

export async function getKnowledgeArticle(slug, lang = 'pl') {
  const filePath = path.join(process.cwd(), 'languages', lang, 'knowledge-base', `${slug}.md`)
  const raw = await fs.readFile(filePath, 'utf8')
  const { data, content } = parseFrontmatter(raw)

  return {
    slug,
    title: data.title || slug,
    metaTitle: data.metaTitle || '',
    metaDescription: data.metaDescription || '',
    description: data.description || '',
    content,
  }
}