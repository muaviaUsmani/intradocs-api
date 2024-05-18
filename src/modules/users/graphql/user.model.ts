import { Field, ObjectType, DateScalarMode } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  fullName: string;

  @Field()
  email: string;

  @Field()
  phoneNumber: string;

  @Field()
  createdAt: DateScalarMode;

  @Field()
  updatedAt: DateScalarMode;
}
