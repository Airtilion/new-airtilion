// app/api/revalidate/route.js
import { revalidatePath } from 'next/cache'    // Next 15+

export async function POST(request) {
  const { secret } = await request.json()
  if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response('Invalid secret', { status: 401 })
  }

  // pobierz wszystkie id
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const res = await fetch(new URL('/api/projects/ids', base))
  const ids = await res.json()

  // revaliduj każdą kombinację: pl (domyślnie) i en
  for (const id of ids) {
    revalidatePath(`/portfolio/${id}`)
    revalidatePath(`/portfolio/${id}?lang=en`)
  }

  return new Response('Revalidated', { status: 200 })
}
