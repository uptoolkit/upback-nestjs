import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { AccountWhereInput } from "./account-where.input";
import { Type } from "class-transformer";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class DeleteManyAccountArgs {
  @Field(() => AccountWhereInput, { nullable: true })
  @Type(() => AccountWhereInput)
  where?: AccountWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
