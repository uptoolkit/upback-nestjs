import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";
import { User } from "../user/user.model";

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

  @Field(() => String, { nullable: true })
  content!: string | null;

  @Field(() => Boolean, { defaultValue: false, nullable: false })
  published!: boolean;

  @Field(() => Int, { defaultValue: 0, nullable: false })
  viewCount!: number;

  @Field(() => String, { nullable: true })
  authorId!: string | null;

  @Field(() => User, { nullable: true })
  author?: User | null;
}
