import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDocumentInput {
  @Field()
  title: string;

  @Field()
  body: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [String], { nullable: true })
  tags?: string[];
}

@InputType()
export class DocumentFilterInput {
  @Field({ nullable: true })
  search?: string;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  @Field((type) => [String], { nullable: true })
  ids?: string[];

  @Field({ nullable: true })
  userId?: string;
}
