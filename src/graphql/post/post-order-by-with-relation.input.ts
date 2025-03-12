import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";
import { SortOrderInput } from "../prisma/sort-order.input";
import { UserOrderByWithRelationInput } from "../user/user-order-by-with-relation.input";

@InputType()
export class PostOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  createdAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  updatedAt?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  title?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  content?: SortOrderInput;

  @Field(() => SortOrder, { nullable: true })
  published?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  viewCount?: `${SortOrder}`;

  @Field(() => SortOrderInput, { nullable: true })
  authorId?: SortOrderInput;

  @Field(() => UserOrderByWithRelationInput, { nullable: true })
  author?: UserOrderByWithRelationInput;
}
