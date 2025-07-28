import { Schema, model, models } from 'mongoose';

const MessageSchema = new Schema({
  name: { type: String, required: true, trim: true, minlength: 1 },
  email: { type: String, required: true, trim: true, lowercase: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  phone: { type: String, required: true, trim: true, match: /^(?:\+48\s?)?(?:\d{3}\s?\d{3}\s?\d{3})$/ },
  message: { type: String, required: true, trim: true, minlength: 1 },
  privacyConsent: { type: Boolean, required: true },
  marketingConsent: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now }
}, { collection: 'messages', versionKey: false });

const Message = models.Message || model('Message', MessageSchema);
export default Message;
