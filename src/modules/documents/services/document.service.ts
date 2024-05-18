import { Injectable, Inject } from '@nestjs/common';
import { DOCUMENT_MODEL } from '../models/document.schema';
import { Model } from 'mongoose';
import { Document } from '../document.interfaces';
import { DocumentDTO, DocumentFilters } from '../document.dto';

@Injectable()
export class DocumentService {
  constructor(
    @Inject(DOCUMENT_MODEL)
    private documentModel: Model<Document>,
  ) {}

  async getDocument(id: number): Promise<Document> {
    return this.documentModel.findById(id);
  }

  async createDocument(document: DocumentDTO): Promise<Document> {
    return this.documentModel.create(document);
  }

  async getDocuments(filters: DocumentFilters): Promise<Document[]> {
    const search = new RegExp(filters.search, 'i');
    let documents = this.documentModel.find({
      $or: [{ title: search }, { body: search }],
    });

    if (filters.ids) {
      documents = documents.where('id').in(filters.ids);
    }

    if (filters.userId) {
      documents = documents.where('createdBy').equals(filters.userId);
    }

    return documents;
  }
}
