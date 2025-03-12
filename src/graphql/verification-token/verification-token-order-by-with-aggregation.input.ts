import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { VerificationTokenCountOrderByAggregateInput } from "./verification-token-count-order-by-aggregate.input";
import { VerificationTokenMaxOrderByAggregateInput } from "./verification-token-max-order-by-aggregate.input";
import { VerificationTokenMinOrderByAggregateInput } from "./verification-token-min-order-by-aggregate.input";

@InputType()
export class VerificationTokenOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  token?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  expires?: `${SortOrder}`;

  @Field(() => VerificationTokenCountOrderByAggregateInput, { nullable: true })
  _count?: VerificationTokenCountOrderByAggregateInput;

  @Field(() => VerificationTokenMaxOrderByAggregateInput, { nullable: true })
  _max?: VerificationTokenMaxOrderByAggregateInput;

  @Field(() => VerificationTokenMinOrderByAggregateInput, { nullable: true })
  _min?: VerificationTokenMinOrderByAggregateInput;
}
