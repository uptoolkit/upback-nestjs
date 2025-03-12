import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { AccountProviderProviderAccountIdCompoundUniqueInput } from "./account-provider-provider-account-id-compound-unique.input";
import { AccountWhereInput } from "./account-where.input";
import { StringFilter } from "../prisma/string-filter.input";
import { StringNullableFilter } from "../prisma/string-nullable-filter.input";
import { IntNullableFilter } from "../prisma/int-nullable-filter.input";
import { UserScalarRelationFilter } from "../user/user-scalar-relation-filter.input";

@InputType()
export class AccountWhereUniqueInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => AccountProviderProviderAccountIdCompoundUniqueInput, {
    nullable: true,
  })
  provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput;

  @Field(() => [AccountWhereInput], { nullable: true })
  AND?: Array<AccountWhereInput>;

  @Field(() => [AccountWhereInput], { nullable: true })
  OR?: Array<AccountWhereInput>;

  @Field(() => [AccountWhereInput], { nullable: true })
  NOT?: Array<AccountWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  userId?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  type?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  provider?: StringFilter;

  @Field(() => StringFilter, { nullable: true })
  providerAccountId?: StringFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  refresh_token?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  access_token?: StringNullableFilter;

  @Field(() => IntNullableFilter, { nullable: true })
  expires_at?: IntNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  token_type?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  scope?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  id_token?: StringNullableFilter;

  @Field(() => StringNullableFilter, { nullable: true })
  session_state?: StringNullableFilter;

  @Field(() => UserScalarRelationFilter, { nullable: true })
  user?: UserScalarRelationFilter;
}
