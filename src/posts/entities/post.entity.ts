import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType()
export class Post {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => Date, { nullable: false })
  createdAt!: Date;

  @Field(() => Date, { nullable: false })
  updatedAt!: Date;

  @Field(() => String, { nullable: false })
  title!: string;
}
