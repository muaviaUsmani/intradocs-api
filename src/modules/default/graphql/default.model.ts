import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Default {
  @Field()
  status: boolean;
}
