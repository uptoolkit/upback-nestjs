import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AccountWhereInput } from "../account/account-where.input";
import { Type } from "class-transformer";
import { AccountOrderByWithAggregationInput } from "../account/account-order-by-with-aggregation.input";
import { AccountScalarFieldEnum } from "../account/account-scalar-field.enum";
import { AccountScalarWhereWithAggregatesInput } from "../account/account-scalar-where-with-aggregates.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class GroupByAccountArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput;

  @Field(() => [AccountOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AccountOrderByWithAggregationInput>;

  @Field(() => [AccountScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AccountScalarFieldEnum>;

  @Field(() => AccountScalarWhereWithAggregatesInput, { nullable: true })
  having?: AccountScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
