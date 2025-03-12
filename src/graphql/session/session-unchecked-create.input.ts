import { Field } from "@nestjs/graphql";
import { InputType } from "@nestjs/graphql";

@InputType()
export class SessionUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: false })
  sessionToken!: string;

  @Field(() => String, { nullable: false })
  userId!: string;

  @Field(() => Date, { nullable: false })
  expires!: Date | string;
}
