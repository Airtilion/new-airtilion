// lib/projects.js
import dbConnect from '@lib/db'
import PortfolioItem from '@models/PortfolioItem'
import NewClient from '@models/Client'

export async function getProjectIds() {
  await dbConnect()
  const projects = await PortfolioItem.find({}, { _id: 1 }).lean()
  return projects.map((p) => p._id.toString())
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
