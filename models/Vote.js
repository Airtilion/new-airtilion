import { Schema, model, models, } from 'mongoose'

const VoteSchema = new Schema(
    {
        slug: { type: String, required: true, unique: true },
        yes: { type: Number, default: 0 },
        no: { type: Number, default: 0 }
    }
)

export const Vote = models.Vote || model('Vote', VoteSchema, 'vote-knowledgebase');
export default Vote;