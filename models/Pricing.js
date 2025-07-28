import { Schema, model, models } from 'mongoose';

const NewPricingSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, minlength: 1 },
    email: { type: String, required: true, trim: true, lowercase: true, match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
    phone: { type: String, required: true, trim: true, match: /^(?:\+48\s?)?(?:\d{3}\s?\d{3}\s?\d{3})$/ },
    contactHours: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true, minlength: 1 },
    privacyConsent: { type: Boolean, required: true },
    marketingConsent: { type: Boolean, required: true },
    createdAt: { type: Date, default: Date.now }
  },
  { collection: 'new-pricing', versionKey: false }
);

const NewPricing = models.NewPricing || model('NewPricing', NewPricingSchema);
export default NewPricing;