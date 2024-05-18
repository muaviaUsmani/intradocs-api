import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RefreshToken {
  @Field()
  token: string;

  @Field()
  refreshToken: string;
}

@ObjectType()
export class Token {
  @Field()
  token: string;
}
