import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const DocumentSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    body: { type: String, required: true },
    tags: { type: [String] },
  },
  {
    timestamps: true,
  },
);

export const DOCUMENT_MODEL = 'DOCUMENT_MODEL';
