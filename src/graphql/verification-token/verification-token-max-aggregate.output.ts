import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";

@ObjectType()
export class VerificationTokenMaxAggregate {
  @Field(() => String, { nullable: true })
  identifier?: string;

  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => Date, { nullable: true })
  expires?: Date | string;
}
