import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { Int } from "@nestjs/graphql";

@ObjectType()
export class VerificationTokenCountAggregate {
  @Field(() => Int, { nullable: false })
  identifier!: number;

  @Field(() => Int, { nullable: false })
  token!: number;

  @Field(() => Int, { nullable: false })
  expires!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
