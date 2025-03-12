import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AccountUpdateManyMutationInput } from "./account-update-many-mutation.input";
import { Type } from "class-transformer";
import { AccountWhereInput } from "./account-where.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class UpdateManyAccountArgs {
  @Field(() => AccountUpdateManyMutationInput, { nullable: false })
  @Type(() => AccountUpdateManyMutationInput)
  data!: AccountUpdateManyMutationInput;

  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
