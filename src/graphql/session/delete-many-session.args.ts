import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { SessionWhereInput } from "./session-where.input";
import { Type } from "class-transformer";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class DeleteManySessionArgs {
  @Field(() => SessionWhereInput, { nullable: true })
  @Type(() => SessionWhereInput)
  where?: SessionWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
