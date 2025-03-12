import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { AccountCountOrderByAggregateInput } from "./account-count-order-by-aggregate.input";
import { AccountAvgOrderByAggregateInput } from "./account-avg-order-by-aggregate.input";
import { AccountMaxOrderByAggregateInput } from "./account-max-order-by-aggregate.input";
import { AccountMinOrderByAggregateInput } from "./account-min-order-by-aggregate.input";
import { AccountSumOrderByAggregateInput } from "./account-sum-order-by-aggregate.input";

@InputType()
export class AccountOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  userId?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  type?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  provider?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  providerAccountId?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  refresh_token?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  access_token?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  expires_at?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  token_type?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  scope?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  id_token?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  session_state?: SortOrderInput;

  @Field(() => AccountCountOrderByAggregateInput, { nullable: true })
  _count?: AccountCountOrderByAggregateInput;

  @Field(() => AccountAvgOrderByAggregateInput, { nullable: true })
  _avg?: AccountAvgOrderByAggregateInput;

  @Field(() => AccountMaxOrderByAggregateInput, { nullable: true })
  _max?: AccountMaxOrderByAggregateInput;

  @Field(() => AccountMinOrderByAggregateInput, { nullable: true })
  _min?: AccountMinOrderByAggregateInput;

  @Field(() => AccountSumOrderByAggregateInput, { nullable: true })
  _sum?: AccountSumOrderByAggregateInput;
}
