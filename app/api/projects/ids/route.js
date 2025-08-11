// app/api/projects/ids/route.js
import { getProjectIds } from '@lib/projects'

export async function GET() {
  try {
    const ids = await getProjectIds()
    return new Response(JSON.stringify(ids), { status: 200 })
  } catch (error) {
    console.error('Error fetching IDs:', error)
    return new Response(JSON.stringify({ error: error.message || 'Server error' }), { status: 500 })
  }
}
