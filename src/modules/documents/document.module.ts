import { Module } from '@nestjs/common';
import { DocumentService } from './services/document.service';
import { documentsProviders } from './models/document.providers';
import { DatabaseModule } from '../../utilities/database/database.module';
import { DocumentResolver } from './graphql/document.resolver';
import { UserModule } from '../users/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  providers: [DocumentResolver, DocumentService, ...documentsProviders],
  exports: [DocumentService],
})
export class DocumentModule {}
