import { Schema, model, models } from 'mongoose';

const PortfolioItemSchema = new Schema({
    Name: { type: String, required: true },
    Description: { type: String, required: true },
    Link: { type: String, required: true },
    Type: { type: String, required: true },
    Date: { type: Date, required: true },
    Client: { type: String, required: true },
    Logo: { file: String, base64: String },
    Background: { file: String, base64: String },
    SmallBackground: { file: String, base64: String },
    Screens: [{ file: String, base64: String }],
    Visualization: [{ file: String, base64: String }],
    Work: [{title: String, value: String}],
    Technologies: [{ type: String }],
    Brief: [{ type: String }],
    Achievements: [{ icon: String, title: String, description: String }],
    Review: { text: String, author: String, authorRole: String }
}, { collection: 'new-portfolio' });

const PortfolioItem = models?.PortfolioItem || model('PortfolioItem', PortfolioItemSchema);

export default PortfolioItem;