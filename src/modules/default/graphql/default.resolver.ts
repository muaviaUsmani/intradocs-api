import { Resolver, Query } from '@nestjs/graphql';
import { Default } from './default.model';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => Default)
export class DefaultResolver {
  constructor() {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => Default)
  async ping() {
    return { status: true };
  }
}
