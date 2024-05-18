import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../utilities/database/database.module';
import { DefaultResolver } from './graphql/default.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [DefaultResolver],
})
export class DefaultModule {}
