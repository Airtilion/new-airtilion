// FILE: lib/opinions.js
import dbConnect from '@lib/db';
import Opinion from '@models/Opinion';
export async function getOpinions() {
  await dbConnect();
  const docs = await Opinion.find({}).lean();
  if (!docs || docs.length === 0) return [];
  return docs.map(d => {
    const mapped = { ...d, id: d._id ? d._id.toString() : undefined };
    delete mapped._id;
    return mapped;
  });
}
