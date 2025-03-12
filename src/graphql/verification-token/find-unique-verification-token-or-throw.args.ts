import { Field } from "@nestjs/graphql";
import { ArgsType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { VerificationTokenWhereUniqueInput } from "./verification-token-where-unique.input";
import { Type } from "class-transformer";

@ArgsType()
export class FindUniqueVerificationTokenOrThrowArgs {
  @Field(() => VerificationTokenWhereUniqueInput, { nullable: false })
  @Type(() => VerificationTokenWhereUniqueInput)
  where!: Prisma.AtLeast<
    VerificationTokenWhereUniqueInput,
    "token" | "identifier_token"
  >;
}
