import { Field } from "@nestjs/graphql";
import { ObjectType } from "@nestjs/graphql";
import { VerificationTokenCountAggregate } from "./verification-token-count-aggregate.output";
import { VerificationTokenMinAggregate } from "./verification-token-min-aggregate.output";
import { VerificationTokenMaxAggregate } from "./verification-token-max-aggregate.output";

@ObjectType()
export class VerificationTokenGroupBy {
  @Field(() => String, { nullable: false })
  identifier!: string;

  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => Date, { nullable: false })
  expires!: Date | string;

  @Field(() => VerificationTokenCountAggregate, { nullable: true })
  _count?: VerificationTokenCountAggregate;

  @Field(() => VerificationTokenMinAggregate, { nullable: true })
  _min?: VerificationTokenMinAggregate;

  @Field(() => VerificationTokenMaxAggregate, { nullable: true })
  _max?: VerificationTokenMaxAggregate;
}
