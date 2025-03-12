import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { ID } from "@nestjs/graphql";

@ObjectType()
export class Group {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  name!: string;
}
