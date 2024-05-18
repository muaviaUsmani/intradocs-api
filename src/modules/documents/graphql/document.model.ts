import { Field, ObjectType, DateScalarMode } from '@nestjs/graphql';
import { User } from 'src/modules/users/graphql/user.model';

@ObjectType()
export class Document {
  @Field()
  id: string;

  @Field()
  title: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => User)
  createdBy: User;

  @Field()
  body: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [String], { nullable: true })
  tags: string[];

  @Field()
  createdAt: DateScalarMode;

  @Field()
  updatedAt: DateScalarMode;
}
