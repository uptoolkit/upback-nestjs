import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { UserCountOrderByAggregateInput } from "./user-count-order-by-aggregate.input";
import { UserMaxOrderByAggregateInput } from "./user-max-order-by-aggregate.input";
import { UserMinOrderByAggregateInput } from "./user-min-order-by-aggregate.input";

@InputType()
export class UserOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  password?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  emailVerified?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  image?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  slug?: SortOrderInput;

  @Field(() => SortOrderInput, { nullable: true })
  name?: SortOrderInput;

  @Field(() => UserCountOrderByAggregateInput, { nullable: true })
  _count?: UserCountOrderByAggregateInput;

  @Field(() => UserMaxOrderByAggregateInput, { nullable: true })
  _max?: UserMaxOrderByAggregateInput;

  @Field(() => UserMinOrderByAggregateInput, { nullable: true })
  _min?: UserMinOrderByAggregateInput;
}
