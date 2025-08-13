// FILE: lib/projects.js
import dbConnect from '@lib/db';
import PortfolioItem from '@models/PortfolioItem';
export async function getLatestProjects({ limit = 3, offset = 0, lang = 'pl' } = {}) {
  await dbConnect();
  const items = await PortfolioItem.find({}).sort({ _id: -1 }).skip(offset).limit(limit).select('Name Description Logo SmallBackground Client').lean();
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
export async function getAllProjectIds() {
  await dbConnect();
  const items = await PortfolioItem.find({}).select('_id').lean();
  if (!items || items.length === 0) return [];
  return items.map(i => i._id.toString());
}
export async function getProjectIds() {
  // alias zgodny z twoim importem w app/api/projects/ids/route.js
  return await getAllProjectIds();
}
