// lib/projects.js
import dbConnect from '@lib/db'
import PortfolioItem from '@models/PortfolioItem'
import NewClient from '@models/Client'

export async function getProjectIds() {
  await dbConnect()
  const projects = await PortfolioItem.find({}, { _id: 1 }).lean()
  return projects.map((p) => p._id.toString())
}

export async function getAllProjectIds() {
  return await getProjectIds();
}

export async function getProjectById(id) {
  await dbConnect()
  const project = await PortfolioItem.findById(id).lean()
  if (!project) throw new Error('Projekt nie znaleziony')

  let clientData = null
  if (project.Client) {
    clientData = await NewClient.findById(project.Client).lean()
  }

  return {
    ...project,
    ClientData: clientData,
  }
}

export async function getLatestProjects({ limit = 4, offset = 0, lang = 'pl' } = {}) {
  await dbConnect();
  
  const items = await PortfolioItem.find({})
    .sort({ _id: -1 })
    .skip(offset)
    .limit(limit)
    .select('Name Description Logo SmallBackground Client')
    .lean();
    
  if (!items || items.length === 0) return [];
  
  return items.map(item => ({
    id: item._id.toString(),
    Name: item.Name,
    Description: item.Description || {},
    Logo: item.Logo,
    SmallBackground: item.SmallBackground,
    ClientId: item.Client
  }));
}
