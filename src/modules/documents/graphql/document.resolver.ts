import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { Document } from './document.model';
import { DocumentService } from '../services/document.service';
import { CreateDocumentInput, DocumentFilterInput } from './document.inputs';
import { UserService } from 'src/modules/users/services/user.service';
import { CurrentUser } from '../../../utilities/decorators/user.decorator';
import { User } from '../../users/graphql/user.model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Document)
export class DocumentResolver {
  constructor(
    private documentService: DocumentService,
    private userService: UserService,
  ) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => Document)
  async document(@Args('id', { type: () => String }) id: number) {
    return await this.documentService.getDocument(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [Document])
  async documents(
    @CurrentUser() user: User,
    @Args('filters') filters: DocumentFilterInput,
  ) {
    filters.userId = user.id;
    const documents = await this.documentService.getDocuments(filters);
    return documents;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => Document)
  async createDocument(
    @CurrentUser() user: User,
    @Args('input') input: CreateDocumentInput,
  ) {
    const documentInput = { ...input, createdById: user.id };
    return await this.documentService.createDocument(documentInput);
  }

  @ResolveField()
  async createdBy(@Parent() document: Document) {
    const { createdBy } = document;
    return this.userService.getUser(String(createdBy));
  }
}
