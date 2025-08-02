// models/NewClient.js

import { Schema, model, models } from 'mongoose';

const NewClientSchema = new Schema({
  name: {type: String, required: true},
  description: {pl: {type: String, required: true,}, en: {type: String, required: true,}},
  logo: { file: { type: String, required: true }, base64: { type: String, required: true }, width: {type: Number, required: true}, height: {type: Number, required: true}},
  background: { file: { type: String, required: true }, base64: { type: String, required: true },},
  icon: { file: { type: String, required: true }, base64: { type: String, required: true },}
}, { collection: 'new-clients'});

const NewClient = models.NewClient || model('NewClient', NewClientSchema);

export default NewClient;
