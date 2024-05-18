import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field()
  password: string;
}

@InputType()
export class UserFilterInput {
  @Field()
  search: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [String], { nullable: true })
  ids?: string[];
}
