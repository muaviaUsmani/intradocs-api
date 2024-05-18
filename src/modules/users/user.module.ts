import { Module } from '@nestjs/common';
import { UserService } from './services/user.service';
import { usersProviders } from './models/user.providers';
import { DatabaseModule } from '../../utilities/database/database.module';
import { UserResolver } from './graphql/user.resolver';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService, ...usersProviders],
  exports: [UserService],
})
export class UserModule {}
