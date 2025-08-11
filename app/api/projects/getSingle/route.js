// app/api/projects/getSingle/route.js
import { getProjectById } from '@lib/projects'

export async function POST(req) {
  try {
    const { id } = await req.json()
    if (!id) {
      return new Response(JSON.stringify({ error: 'Nie podano id' }), { status: 400 })
    }

    const project = await getProjectById(id)
    return new Response(JSON.stringify(project), { status: 200 })
  } catch (error) {
    console.error('Błąd pobierania:', error)
    const status = error.message === 'Projekt nie znaleziony' ? 404 : 500
    return new Response(JSON.stringify({ error: error.message || 'Błąd serwera' }), { status })
  }
}
