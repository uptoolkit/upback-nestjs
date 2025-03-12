import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class VerificationTokenUncheckedCreateInput {
  @Field(() => String, { nullable: false })
  identifier!: string;

  @Field(() => String, { nullable: false })
  token!: string;

  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}
