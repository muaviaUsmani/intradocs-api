import { modelProvider } from '../../../utilities/database/model.providers';
import { DocumentSchema, DOCUMENT_MODEL } from './document.schema';

export const documentsProviders = [
  modelProvider(DOCUMENT_MODEL, 'Document', DocumentSchema),
];
