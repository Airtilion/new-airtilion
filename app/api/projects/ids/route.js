// app/api/projects/ids/route.js
import PortfolioItem from '@models/PortfolioItem'
import dbConnect from '@lib/db'

export async function GET() {
  try {
    await dbConnect()
    const projects = await PortfolioItem.find({}, { _id: 1 }).lean()
    const ids = projects.map((p) => p._id.toString())
    return new Response(JSON.stringify(ids), { status: 200 })
  } catch (error) {
    console.error('Error fetching IDs:', error)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 })
  }
}
