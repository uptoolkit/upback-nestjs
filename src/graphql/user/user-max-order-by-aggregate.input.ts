import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class UserMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  email?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  password?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  emailVerified?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  image?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  slug?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  name?: `${SortOrder}`;
}
