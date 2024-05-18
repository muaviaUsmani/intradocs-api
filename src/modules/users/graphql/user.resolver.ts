import {
  Resolver,
  Args,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from './user.model';
import { UserService } from '../services/user.service';
import { CreateUserInput, UserFilterInput } from './user.inputs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => User)
  async user(@Args('id', { type: () => String }) id: string) {
    return await this.userService.getUser(id);
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Query((returns) => [User])
  async users(@Args('filters') filters: UserFilterInput) {
    const users = await this.userService.getUsers(filters);
    return users;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Mutation((returns) => User)
  async createUser(@Args('input') input: CreateUserInput) {
    return await this.userService.createUser(input);
  }

  @ResolveField()
  fullName(@Parent() user: User) {
    return `${user.firstName} ${user.lastName}`;
  }
}
