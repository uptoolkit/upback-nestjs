import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class VerificationTokenCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  identifier?: true;

  @Field(() => Boolean, { nullable: true })
  token?: true;

  @Field(() => Boolean, { nullable: true })
  expires?: true;

  @Field(() => Boolean, { nullable: true })
  _all?: true;
}
