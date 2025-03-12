import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { SortOrder } from "../prisma/sort-order.enum";

@InputType()
export class VerificationTokenOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  identifier?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  token?: `${SortOrder}`;

  @Field(() => SortOrder, { nullable: true })
  expires?: `${SortOrder}`;
}
