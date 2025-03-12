import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { VerificationTokenWhereInput } from "./verification-token-where.input";
import { Type } from "class-transformer";
import { VerificationTokenOrderByWithAggregationInput } from "./verification-token-order-by-with-aggregation.input";
import { VerificationTokenScalarFieldEnum } from "./verification-token-scalar-field.enum";
import { VerificationTokenScalarWhereWithAggregatesInput } from "./verification-token-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";
import { VerificationTokenCountAggregateInput } from "./verification-token-count-aggregate.input";
import { VerificationTokenMinAggregateInput } from "./verification-token-min-aggregate.input";
import { VerificationTokenMaxAggregateInput } from "./verification-token-max-aggregate.input";

@ArgsType()
export class VerificationTokenGroupByArgs {
  @Field(() => VerificationTokenWhereInput, { nullable: true })
  @Type(() => VerificationTokenWhereInput)
  where?: VerificationTokenWhereInput;

  @Field(() => [VerificationTokenOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<VerificationTokenOrderByWithAggregationInput>;

  @Field(() => [VerificationTokenScalarFieldEnum], { nullable: false })
  by!: Array<`${VerificationTokenScalarFieldEnum}`>;

  @Field(() => VerificationTokenScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: VerificationTokenScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => VerificationTokenCountAggregateInput, { nullable: true })
  _count?: VerificationTokenCountAggregateInput;

  @Field(() => VerificationTokenMinAggregateInput, { nullable: true })
  _min?: VerificationTokenMinAggregateInput;

  @Field(() => VerificationTokenMaxAggregateInput, { nullable: true })
  _max?: VerificationTokenMaxAggregateInput;
}
