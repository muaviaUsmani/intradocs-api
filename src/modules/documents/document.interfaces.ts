import { Document as MongooseDocument } from 'mongoose';

export interface Document extends MongooseDocument {
  readonly title: string;
  readonly createdBy: string;
  readonly body: string;
  readonly tags: string[];
  readonly createdAt: string;
  readonly updatedAt: string;
}
