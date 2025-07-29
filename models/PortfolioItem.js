import { Schema, model, models } from 'mongoose';

const PortfolioItemSchema = new Schema({
  Name: {type: String, required: true },
  Description: { pl: { type: String, required: true }, en: { type: String, required: true } },
  Link: { value: {type: String, required: true}, show: Boolean },
  Type: { type: String, required: true },
  Date: { type: Date, required: true },
  Client: { type: String, required: true },
  Logo: { file: String, base64: String },
  Background: { file: String, base64: String },
  SmallBackground: { file: String, base64: String },
  Screens: [{ file: String, base64: String }],
  Visualization: [{ file: String, base64: String }],
  Work: {
    pl: [{ title: String, value: String }],
    en: [{ title: String, value: String }]
  },
  Technologies: [String],
  Brief: {
    pl: [String],
    en: [String]
  },
  Achievements: {
    pl: [{ title: String, description: String }],
    en: [{ title: String, description: String }]
  },
  Review: {
    text: { pl: [String], en: [String] },
    author: String,
    authorRole: { pl: String, en: String }
  }
}, { collection: 'new-portfolio' });

const PortfolioItem = models?.PortfolioItem || model('PortfolioItem', PortfolioItemSchema);

export default PortfolioItem;
