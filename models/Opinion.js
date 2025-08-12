// models/Opinion.js

import { Schema, model, models } from 'mongoose';

const OpinionSchema = new Schema({
  author: { type: String, required: true },
  content: { pl: { type: String, required: true }, en: { type: String, required: true } },
  stars: { type: Number, required: true },
  icon: { file: { type: String, required: true }, base64: { type: String, required: true }, },
  authorId: { type: String, required: true }

}, { collection: 'reviews' });

const Opinion = models.Opinion || model('Opinion', OpinionSchema);

export default Opinion;
