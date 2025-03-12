import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { UserOrderByWithRelationInput } from "../user/user-order-by-with-relation.input";

@InputType()
export class AccountOrderByWithRelationInput {
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

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  user?: UserOrderByWithRelationInput;
}
