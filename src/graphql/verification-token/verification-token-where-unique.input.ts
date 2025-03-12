import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";
import { VerificationTokenIdentifierTokenCompoundUniqueInput } from "./verification-token-identifier-token-compound-unique.input";
import { VerificationTokenWhereInput } from "./verification-token-where.input";
import { StringFilter } from "../prisma/string-filter.input";
import { DateTimeFilter } from "../prisma/date-time-filter.input";

@InputType()
export class VerificationTokenWhereUniqueInput {
  @Field(() => String, { nullable: true })
  token?: string;

  @Field(() => VerificationTokenIdentifierTokenCompoundUniqueInput, {
    nullable: true,
  })
  identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput;

  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  AND?: Array<VerificationTokenWhereInput>;

  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  OR?: Array<VerificationTokenWhereInput>;

  @Field(() => [VerificationTokenWhereInput], { nullable: true })
  NOT?: Array<VerificationTokenWhereInput>;

  @Field(() => StringFilter, { nullable: true })
  identifier?: StringFilter;

  @Field(() => DateTimeFilter, { nullable: true })
  expires?: DateTimeFilter;
}
