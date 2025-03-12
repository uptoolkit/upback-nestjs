import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { Prisma } from "@prisma/client";
import { AccountWhereUniqueInput } from "./account-where-unique.input";
import { Type } from "class-transformer";
import { AccountUpdateWithoutUserInput } from "./account-update-without-user.input";
import { AccountCreateWithoutUserInput } from "./account-create-without-user.input";

@InputType()
export class AccountUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => AccountWhereUniqueInput, { nullable: false })
  @Type(() => AccountWhereUniqueInput)
  where!: Prisma.AtLeast<
    AccountWhereUniqueInput,
    "id" | "provider_providerAccountId"
  >;

  @Field(() => AccountUpdateWithoutUserInput, { nullable: false })
  @Type(() => AccountUpdateWithoutUserInput)
  update!: AccountUpdateWithoutUserInput;

  @Field(() => AccountCreateWithoutUserInput, { nullable: false })
  @Type(() => AccountCreateWithoutUserInput)
  create!: AccountCreateWithoutUserInput;
}
