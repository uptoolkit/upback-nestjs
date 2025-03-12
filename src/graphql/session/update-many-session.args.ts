import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { SessionUpdateManyMutationInput } from "./session-update-many-mutation.input";
import { Type } from "class-transformer";
import { SessionWhereInput } from "./session-where.input";
import { Int } from "@nestjs/graphql";

@ArgsType()
export class UpdateManySessionArgs {
  @Field(() => SessionUpdateManyMutationInput, { nullable: false })
  @Type(() => SessionUpdateManyMutationInput)
  data!: SessionUpdateManyMutationInput;

  @Field(() => SessionWhereInput, { nullable: true })
  @Type(() => SessionWhereInput)
  where?: SessionWhereInput;

  @Field(() => Int, { nullable: true })
  limit?: number;
}
